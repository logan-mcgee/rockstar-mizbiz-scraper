! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "70e4c827-4448-4b08-9bba-da49b0608782", e._sentryDebugIdIdentifier = "sentry-dbid-70e4c827-4448-4b08-9bba-da49b0608782")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [583], {
    14: (e, t, n) => {
      "use strict";
      n.d(t, {
        T: () => r
      });
      const r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
    },
    94: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        BaseClient: () => k.V,
        DEFAULT_ENVIRONMENT: () => se.U,
        FunctionToString: () => _e.$,
        Hub: () => v.YZ,
        IdleTransaction: () => s.zX,
        InboundFilters: () => ye.H,
        Integrations: () => Ee,
        LinkedErrors: () => Te,
        ModuleMetadata: () => ie.Y,
        RequestData: () => ve,
        SDK_VERSION: () => V.M,
        SEMANTIC_ATTRIBUTE_PROFILE_ID: () => f.E1,
        SEMANTIC_ATTRIBUTE_SENTRY_OP: () => f.uT,
        SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN: () => f.JD,
        SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE: () => f.sy,
        SEMANTIC_ATTRIBUTE_SENTRY_SOURCE: () => f.i_,
        Scope: () => S.HG,
        ServerRuntimeClient: () => q,
        SessionFlusher: () => b,
        Span: () => i.L,
        SpanStatus: () => u.Fp,
        TRACING_DEFAULTS: () => s.Cq,
        Transaction: () => a.Z,
        addBreadcrumb: () => g.ZQ,
        addEventProcessor: () => k.S,
        addGlobalEventProcessor: () => w.lb,
        addIntegration: () => Y.Q8,
        addTracingExtensions: () => o.U,
        applyScopeDataToEvent: () => X.e2,
        applySdkMetadata: () => oe.K,
        captureCheckIn: () => g.SE,
        captureEvent: () => g.r,
        captureException: () => g.Cp,
        captureMessage: () => g.wd,
        captureSession: () => g.J5,
        close: () => g.VN,
        closeSession: () => y.Vu,
        configureScope: () => g.PN,
        continueTrace: () => l.V4,
        convertIntegrationFnToClass: () => Y.F,
        createCheckInEnvelope: () => D,
        createEventEnvelope: () => m.V,
        createSessionEnvelope: () => m.L,
        createSpanEnvelope: () => Z.l,
        createTransport: () => G.o,
        defineIntegration: () => Y._C,
        endSession: () => g.ky,
        ensureHubOnCarrier: () => v.TF,
        extractTraceparentData: () => c.nc,
        flush: () => g.bX,
        functionToStringIntegration: () => _e.Z,
        getActiveSpan: () => l.Bk,
        getActiveTransaction: () => c.Z7,
        getClient: () => g.KU,
        getCurrentHub: () => v.BF,
        getCurrentScope: () => g.o5,
        getDynamicSamplingContextFromClient: () => d.l,
        getDynamicSamplingContextFromSpan: () => d.k,
        getEnvelopeEndpointWithUrlEncodedAuth: () => T.Z,
        getGlobalScope: () => S.m6,
        getHubFromCarrier: () => v.Me,
        getIntegrationsToSetup: () => Y.mH,
        getIsolationScope: () => v.rm,
        getMainCarrier: () => v.EU,
        getReportDialogEndpoint: () => T.k,
        getRootSpan: () => z.z,
        getSpanStatusFromHttpCode: () => u.AJ,
        handleCallbackErrors: () => ne.x,
        hasTracingEnabled: () => ee.w,
        inboundFiltersIntegration: () => ye.D,
        initAndBind: () => W.J,
        isInitialized: () => g.Dp,
        isSentryRequestUrl: () => te.A,
        isValidSampleRate: () => h.v,
        lastEventId: () => g.Q,
        linkedErrorsIntegration: () => we,
        makeMain: () => v.gM,
        makeMultiplexedTransport: () => J.N,
        makeOfflineTransport: () => K.BP,
        makeSession: () => y.fj,
        mergeScopeData: () => X.Rg,
        metrics: () => ke.qd,
        moduleMetadataIntegration: () => ie.Q,
        notifyEventProcessors: () => w.jB,
        parameterize: () => re.y,
        prepareEvent: () => Q.mG,
        requestDataIntegration: () => ge,
        runWithAsyncContext: () => v.fx,
        setAsyncContextStrategy: () => v.nX,
        setContext: () => g.o,
        setCurrentClient: () => W.B,
        setExtra: () => g.l7,
        setExtras: () => g.cx,
        setGlobalScope: () => S.ik,
        setHttpStatus: () => u.N8,
        setHubOnCarrier: () => v.lq,
        setMeasurement: () => p.X,
        setTag: () => g.NA,
        setTags: () => g.Wt,
        setUser: () => g.gV,
        spanIsSampled: () => H.pK,
        spanStatusfromHttpCode: () => u.o6,
        spanToJSON: () => H.et,
        spanToTraceContext: () => H.kX,
        spanToTraceHeader: () => H.Qh,
        startActiveSpan: () => l.D7,
        startIdleTransaction: () => o.p,
        startInactiveSpan: () => l.Uk,
        startSession: () => g.J0,
        startSpan: () => l.Lk,
        startSpanManual: () => l.nV,
        startTransaction: () => g.nb,
        trace: () => l.uP,
        updateSession: () => y.qO,
        withActiveSpan: () => g.hb,
        withIsolationScope: () => g.rB,
        withMonitor: () => g.T$,
        withScope: () => g.v4
      });
      var r = {};
      n.r(r), n.d(r, {
        FunctionToString: () => _e.$,
        InboundFilters: () => ye.H,
        LinkedErrors: () => Te
      });
      var o = n(65037),
        s = n(21867),
        i = n(81181),
        a = n(48537),
        c = n(41660),
        u = n(38307),
        l = n(94756),
        d = n(90714),
        p = n(35153),
        h = n(35912),
        f = n(49295),
        m = n(36030),
        g = n(13903),
        v = n(62451),
        y = n(20404),
        _ = n(53825);
      class b {
        constructor(e, t) {
          this._client = e, this.flushTimeout = 60, this._pendingAggregates = {}, this._isEnabled = !0, this._intervalId = setInterval((() => this.flush()), 1e3 * this.flushTimeout), this._intervalId.unref && this._intervalId.unref(), this._sessionAttrs = t
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
          return (0, _.Ce)(t)
        }
        close() {
          clearInterval(this._intervalId), this._isEnabled = !1, this.flush()
        }
        incrementSessionStatusCount() {
          if (!this._isEnabled) return;
          const e = (0, g.o5)(),
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
      var S = n(98696),
        w = n(46105),
        T = n(55468),
        k = n(84838),
        E = n(45620),
        x = n(88810),
        I = n(50950),
        C = n(83853);

      function R(e, t) {
        return e(t.stack || "", 1)
      }

      function M(e, t) {
        const n = {
            type: t.name || t.constructor.name,
            value: t.message
          },
          r = R(e, t);
        return r.length && (n.stacktrace = {
          frames: r
        }), n
      }
      var O = n(58970),
        A = n(49361),
        N = n(85802);

      function D(e, t, n, r, o) {
        const s = {
          sent_at: (new Date).toISOString()
        };
        n && n.sdk && (s.sdk = {
          name: n.sdk.name,
          version: n.sdk.version
        }), r && o && (s.dsn = (0, A.SB)(o)), t && (s.trace = (0, _.Ce)(t));
        const i = function(e) {
          return [{
            type: "check_in"
          }, e]
        }(e);
        return (0, N.h4)(s, [i])
      }
      var F = n(14),
        L = n(55343),
        P = n(15899),
        j = n(74007),
        B = n(52709),
        $ = n(89371);
      class U {
        constructor(e) {
          this._client = e, this._buckets = new Map, this._bucketsTotalWeight = 0, this._interval = setInterval((() => this._flush()), P.TP), this._interval.unref && this._interval.unref(), this._flushShift = Math.floor(Math.random() * P.TP / 1e3), this._forceFlush = !1
        }
        add(e, t, n) {
          let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none",
            o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : (0, L.zf)();
          const i = Math.floor(s),
            a = (0, $.T3)(t),
            c = (0, $.VZ)(o),
            u = (0, $.Mz)(r),
            l = (0, $.eG)(e, a, u, c);
          let d = this._buckets.get(l);
          const p = d && e === P.fN ? d.metric.weight : 0;
          d ? (d.metric.add(n), d.timestamp < i && (d.timestamp = i)) : (d = {
            metric: new j.wz[e](n),
            timestamp: i,
            metricType: e,
            name: a,
            unit: u,
            tags: c
          }, this._buckets.set(l, d));
          const h = "string" == typeof n ? d.metric.weight - p : n;
          (0, B.r)(e, a, h, u, o, l), this._bucketsTotalWeight += d.metric.weight, this._bucketsTotalWeight >= P.K3 && this.flush()
        }
        flush() {
          this._forceFlush = !0, this._flush()
        }
        close() {
          this._forceFlush = !0, clearInterval(this._interval), this._flush()
        }
        _flush() {
          if (this._forceFlush) return this._forceFlush = !1, this._bucketsTotalWeight = 0, this._captureMetrics(this._buckets), void this._buckets.clear();
          const e = Math.floor((0, L.zf)()) - P.TP / 1e3 - this._flushShift,
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
      var H = n(19063),
        z = n(87266);
      class q extends k.V {
        constructor(e) {
          (0, o.U)(), super(e), e._experiments && e._experiments.metricsAggregator && (this.metricsAggregator = new U(this))
        }
        eventFromException(e, t) {
          return (0, E.XW)(function(e, t, n, r) {
            const o = "function" == typeof e ? e().getClient() : e;
            let s = n;
            const i = r && r.data && r.data.mechanism || {
              handled: !0,
              type: "generic"
            };
            let a;
            if (!(0, x.bJ)(n)) {
              if ((0, x.Qd)(n)) {
                const e = o && o.getOptions().normalizeDepth;
                a = {
                  __serialized__: (0, C.cd)(n, e)
                };
                const t = function(e) {
                  if ("name" in e && "string" == typeof e.name) {
                    let t = `'${e.name}' captured as exception`;
                    return "message" in e && "string" == typeof e.message && (t += ` with message '${e.message}'`), t
                  }
                  return "message" in e && "string" == typeof e.message ? e.message : `Object captured as exception with keys: ${(0,_.HF)(e)}`
                }(n);
                s = r && r.syntheticException || new Error(t), s.message = t
              } else s = r && r.syntheticException || new Error(n), s.message = n;
              i.synthetic = !0
            }
            const c = {
              exception: {
                values: [M(t, s)]
              }
            };
            return a && (c.extra = a), (0, I.gO)(c, void 0, void 0), (0, I.M6)(c, i), {
              ...c,
              event_id: r && r.event_id
            }
          }((0, g.KU)(), this._options.stackParser, e, t))
        }
        eventFromMessage(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "info",
            n = arguments.length > 2 ? arguments[2] : void 0;
          return (0, E.XW)(function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "info",
              r = arguments.length > 3 ? arguments[3] : void 0,
              o = arguments.length > 4 ? arguments[4] : void 0;
            const s = {
              event_id: r && r.event_id,
              level: n
            };
            if (o && r && r.syntheticException) {
              const n = R(e, r.syntheticException);
              n.length && (s.exception = {
                values: [{
                  value: t,
                  stacktrace: {
                    frames: n
                  }
                }]
              })
            }
            if ((0, x.NF)(t)) {
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
          e ? this._sessionFlusher = new b(this, {
            release: e,
            environment: t
          }) : F.T && O.vF.warn("Cannot initialise an instance of SessionFlusher if no release is provided!")
        }
        captureCheckIn(e, t, n) {
          const r = "checkInId" in e && e.checkInId ? e.checkInId : (0, I.eJ)();
          if (!this._isEnabled()) return F.T && O.vF.warn("SDK not enabled, will not capture checkin."), r;
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
          const d = D(c, u, this.getSdkMetadata(), a, this.getDsn());
          return F.T && O.vF.info("Sending checkin:", e.monitorSlug, e.status), this._sendEnvelope(d), r
        }
        _captureRequestSession() {
          this._sessionFlusher ? this._sessionFlusher.incrementSessionStatusCount() : F.T && O.vF.warn("Discarded request mode session because autoSessionTracking option was disabled")
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
          if (t) return [(0, z.z)(t) ? (0, d.k)(t) : void 0, (0, H.kX)(t)];
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
      var W = n(19520),
        G = n(9394),
        K = n(39584),
        J = n(40418),
        V = n(21244),
        Y = n(6846),
        X = n(42869),
        Q = n(46237),
        Z = n(65378),
        ee = n(92137),
        te = n(22557),
        ne = n(37314),
        re = n(89267),
        oe = n(75655),
        se = n(93637),
        ie = n(73844),
        ae = n(96973);
      const ce = {
          ip: !1,
          request: !0,
          transaction: !0,
          user: !0
        },
        ue = ["cookies", "data", "headers", "method", "query_string", "url"],
        le = ["id", "username", "email"];

      function de(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const n = e.method && e.method.toUpperCase();
        let r = "",
          o = "url";
        t.customRoute || e.route ? (r = t.customRoute || `${e.baseUrl||""}${e.route&&e.route.path}`, o = "route") : (e.originalUrl || e.url) && (r = (0, ae.f)(e.originalUrl || e.url || ""));
        let s = "";
        return t.method && n && (s += n), t.method && t.path && (s += " "), t.path && r && (s += r), [s, o]
      }

      function pe(e, t) {
        const {
          include: n = ue,
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
              void 0 !== e.body && (o.data = (0, x.Kg)(e.body) ? e.body : JSON.stringify((0, C.S8)(e.body)));
              break;
            default:
              ({}).hasOwnProperty.call(e, t) && (o[t] = e[t])
          }
        })), o
      }

      function he(e, t, n) {
        const r = {
          ...ce,
          ...n && n.include
        };
        if (r.request) {
          const o = Array.isArray(r.request) ? pe(t, {
            include: r.request,
            deps: n && n.deps
          }) : pe(t, {
            deps: n && n.deps
          });
          e.request = {
            ...e.request,
            ...o
          }
        }
        if (r.user) {
          const n = t.user && (0, x.Qd)(t.user) ? function(e, t) {
            const n = {};
            return (Array.isArray(t) ? t : le).forEach((t => {
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
              return de(e, {
                path: !0
              })[0];
            case "handler":
              return e.route && e.route.stack && e.route.stack[0] && e.route.stack[0].name || "<anonymous>";
            default:
              return de(e, {
                path: !0,
                method: !0,
                customRoute: e._reconstructedRoute ? e._reconstructedRoute : void 0
              })[0]
          }
        }(t, r.transaction)), e
      }
      const fe = {
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
        me = "RequestData",
        ge = (0, Y._C)((function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = he,
            n = {
              ...fe,
              ...e,
              include: {
                method: !0,
                ...fe.include,
                ...e.include,
                user: e.include && "boolean" == typeof e.include.user ? e.include.user : {
                  ...fe.include.user,
                  ...(e.include || {}).user
                }
              }
            };
          return {
            name: me,
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
                const e = (0, H.et)(l).description || "",
                  t = "sentry.javascript.nextjs" === function(e) {
                    try {
                      return e.getOptions()._metadata.sdk.name
                    } catch (e) {
                      return
                    }
                  }(o) ? e.startsWith("/api") : "path" !== s,
                  [n] = de(a, {
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
        ve = (0, Y.F)(me, ge);
      var ye = n(30908),
        _e = n(12744),
        be = n(27103);
      const Se = "LinkedErrors",
        we = (0, Y._C)((function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = e.limit || 5,
            n = e.key || "cause";
          return {
            name: Se,
            setupOnce() {},
            preprocessEvent(e, r, o) {
              const s = o.getOptions();
              (0, be.Q)(M, s.stackParser, s.maxValueLength, n, t, e, r)
            }
          }
        })),
        Te = (0, Y.F)(Se, we);
      var ke = n(23832);
      const Ee = r
    },
    1075: (e, t, n) => {
      "use strict";
      n.d(t, {
        L: () => i
      });
      var r = n(31127),
        o = n(10464);
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
    2522: (e, t, n) => {
      "use strict";
      n.d(t, {
        u: () => i
      });
      var r = n(9394),
        o = n(45620);
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
    3775: (e, t, n) => {
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
    6067: (e, t, n) => {
      "use strict";
      n.d(t, {
        j: () => r
      });
      const r = n(31127).OW
    },
    6424: (e, t, n) => {
      "use strict";
      n.d(t, {
        Q: () => o
      });
      var r = n(6067);
      const o = (e, t) => {
        const n = o => {
          "pagehide" !== o.type && "hidden" !== r.j.document.visibilityState || (e(o), t && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
        };
        r.j.document && (addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0))
      }
    },
    6846: (e, t, n) => {
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
      var r = n(50950),
        o = n(58970),
        s = n(14),
        i = n(46105),
        a = n(13903),
        c = n(62451);
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
          i = function(e) {
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
    7478: (e, t, n) => {
      "use strict";
      n.d(t, {
        X: () => l,
        p: () => d
      });
      var r = n(6846),
        o = n(88810),
        s = n(83853),
        i = n(53825),
        a = n(58970),
        c = n(87494);
      const u = "ExtraErrorData",
        l = (0, r._C)((function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = e.depth || 3,
            n = e.captureErrorCause || !1;
          return {
            name: u,
            setupOnce() {},
            processEvent: (e, r) => function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 ? arguments[2] : void 0,
                r = arguments.length > 3 ? arguments[3] : void 0;
              if (!t.originalException || !(0, o.bJ)(t.originalException)) return e;
              const u = t.originalException.name || t.originalException.constructor.name,
                l = function(e, t) {
                  try {
                    const n = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON"],
                      r = {};
                    for (const t of Object.keys(e)) {
                      if (-1 !== n.indexOf(t)) continue;
                      const s = e[t];
                      r[t] = (0, o.bJ)(s) ? s.toString() : s
                    }
                    if (t && void 0 !== e.cause && (r.cause = (0, o.bJ)(e.cause) ? e.cause.toString() : e.cause), "function" == typeof e.toJSON) {
                      const t = e.toJSON();
                      for (const e of Object.keys(t)) {
                        const n = t[e];
                        r[e] = (0, o.bJ)(n) ? n.toString() : n
                      }
                    }
                    return r
                  } catch (e) {
                    c.T && a.vF.error("Unable to extract extra data from the Error object:", e)
                  }
                  return null
                }(t.originalException, r);
              if (l) {
                const t = {
                    ...e.contexts
                  },
                  r = (0, s.S8)(l, n);
                return (0, o.Qd)(r) && ((0, i.my)(r, "__sentry_skip_normalization__", !0), t[u] = r), {
                  ...e,
                  contexts: t
                }
              }
              return e
            }(e, r, t, n)
          }
        })),
        d = (0, r.F)(u, l)
    },
    9394: (e, t, n) => {
      "use strict";
      n.d(t, {
        o: () => l
      });
      var r = n(58574),
        o = n(45620);
      var s = n(85802),
        i = n(99737),
        a = n(58970),
        c = n(14);
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
    9862: (e, t, n) => {
      "use strict";
      e.exports = n(52522)
    },
    10361: (e, t, n) => {
      "use strict";
      n.d(t, {
        UA: () => c,
        sn: () => a
      });
      var r = n(6846),
        o = n(58970),
        s = n(87494);
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
    10464: (e, t, n) => {
      "use strict";
      n.d(t, {
        AS: () => u,
        aj: () => l,
        s5: () => c
      });
      var r = n(54698),
        o = n(58970),
        s = n(83095);
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
    12744: (e, t, n) => {
      "use strict";
      n.d(t, {
        $: () => l,
        Z: () => u
      });
      var r = n(53825),
        o = n(13903),
        s = n(6846);
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
    13903: (e, t, n) => {
      "use strict";
      n.d(t, {
        Cp: () => h,
        Dp: () => D,
        J0: () => L,
        J5: () => B,
        KU: () => N,
        NA: () => w,
        PN: () => g,
        Q: () => A,
        SE: () => C,
        T$: () => R,
        VN: () => O,
        Wt: () => S,
        ZQ: () => v,
        bX: () => M,
        cx: () => _,
        gV: () => T,
        hb: () => x,
        ky: () => P,
        l7: () => b,
        nb: () => I,
        o: () => y,
        o5: () => F,
        r: () => m,
        rB: () => E,
        v4: () => k,
        wd: () => f
      });
      var r = n(58970),
        o = n(50950),
        s = n(55343),
        i = n(88810),
        a = n(31127),
        c = n(93637),
        u = n(14),
        l = n(62451),
        d = n(20404),
        p = n(46237);

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

      function T(e) {
        (0, l.BF)().setUser(e)
      }

      function k() {
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
        return k((n => (n.setSpan(e), t(n))))
      }

      function I(e, t) {
        return (0, l.BF)().startTransaction({
          ...e
        }, t)
      }

      function C(e, t) {
        const n = F(),
          s = N();
        if (s) {
          if (s.captureCheckIn) return s.captureCheckIn(e, t, n);
          u.T && r.vF.warn("Cannot capture check-in. Client does not support sending check-ins.")
        } else u.T && r.vF.warn("Cannot capture check-in. No client defined.");
        return (0, o.eJ)()
      }

      function R(e, t, n) {
        const r = C({
            monitorSlug: e,
            status: "in_progress"
          }, n),
          o = (0, s.zf)();

        function a(t) {
          C({
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
      async function M(e) {
        const t = N();
        return t ? t.flush(e) : (u.T && r.vF.warn("Cannot flush events. No client defined."), Promise.resolve(!1))
      }
      async function O(e) {
        const t = N();
        return t ? t.close(e) : (u.T && r.vF.warn("Cannot flush events and disable SDK. No client defined."), Promise.resolve(!1))
      }

      function A() {
        return (0, l.BF)().lastEventId()
      }

      function N() {
        return (0, l.BF)().getClient()
      }

      function D() {
        return !!N()
      }

      function F() {
        return (0, l.BF)().getScope()
      }

      function L(e) {
        const t = N(),
          n = (0, l.rm)(),
          r = F(),
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
          t = F(),
          n = t.getSession() || e.getSession();
        n && (0, d.Vu)(n), j(), e.setSession(), t.setSession()
      }

      function j() {
        const e = (0, l.rm)(),
          t = F(),
          n = N(),
          r = t.getSession() || e.getSession();
        r && n && n.captureSession && n.captureSession(r)
      }

      function B() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? P() : j()
      }
    },
    15899: (e, t, n) => {
      "use strict";
      n.d(t, {
        K3: () => u,
        TP: () => c,
        bD: () => r,
        co: () => o,
        fN: () => s,
        vR: () => i,
        yQ: () => a
      });
      const r = "c",
        o = "g",
        s = "s",
        i = "d",
        a = 5e3,
        c = 1e4,
        u = 1e4
    },
    16054: (e, t, n) => {
      "use strict";
      n.d(t, {
        QU: () => D,
        ZZ: () => A,
        DI: () => O,
        c8: () => M,
        bk: () => R
      });
      var r = n(41660),
        o = n(13903),
        s = n(81181),
        i = n(65378),
        a = n(19063),
        c = n(35153),
        u = n(92137),
        l = n(35912),
        d = n(55343),
        p = n(52592),
        h = n(58970),
        f = n(96973),
        m = n(22561),
        g = n(59521),
        v = n(6067),
        y = n(33977);

      function _(e) {
        return "number" == typeof e && isFinite(e)
      }

      function b(e, t) {
        let {
          startTimestamp: n,
          ...r
        } = t;
        return n && e.startTimestamp > n && (e.startTimestamp = n), e.startChild({
          startTimestamp: n,
          ...r
        })
      }
      var S = n(30207);
      const w = 2147483647;

      function T(e) {
        return e / 1e3
      }

      function k() {
        return v.j && v.j.addEventListener && v.j.performance
      }
      let E, x, I = 0,
        C = {};

      function R() {
        const e = k();
        if (e && d.k3) {
          e.mark && v.j.performance.mark("sentry-tracing-init");
          const t = (0, g.T5)((e => {
              let {
                metric: t
              } = e;
              const n = t.entries[t.entries.length - 1];
              if (!n) return;
              const r = T(d.k3),
                o = T(n.startTime);
              m.T && h.vF.log("[Measurements] Adding FID"), C.fid = {
                value: t.value,
                unit: "millisecond"
              }, C["mark.fid"] = {
                value: r + o,
                unit: "second"
              }
            })),
            n = (0, g.a9)((e => {
              let {
                metric: t
              } = e;
              const n = t.entries[t.entries.length - 1];
              n && (m.T && h.vF.log("[Measurements] Adding CLS"), C.cls = {
                value: t.value,
                unit: ""
              }, x = n)
            }), !0),
            r = (0, g.Pt)((e => {
              let {
                metric: t
              } = e;
              const n = t.entries[t.entries.length - 1];
              n && (m.T && h.vF.log("[Measurements] Adding LCP"), C.lcp = {
                value: t.value,
                unit: "millisecond"
              }, E = n)
            }), !0),
            o = (0, g.YG)((e => {
              let {
                metric: t
              } = e;
              t.entries[t.entries.length - 1] && (m.T && h.vF.log("[Measurements] Adding TTFB"), C.ttfb = {
                value: t.value,
                unit: "millisecond"
              })
            }));
          return () => {
            t(), n(), r(), o()
          }
        }
        return () => {}
      }

      function M() {
        (0, g.wv)("longtask", (e => {
          let {
            entries: t
          } = e;
          for (const e of t) {
            const t = (0, r.Z7)();
            if (!t) return;
            const n = T(d.k3 + e.startTime),
              o = T(e.duration);
            t.startChild({
              description: "Main UI thread blocked",
              op: "ui.long-task",
              origin: "auto.ui.browser.metrics",
              startTimestamp: n,
              endTimestamp: n + o
            })
          }
        }))
      }

      function O() {
        (0, g.wv)("event", (e => {
          let {
            entries: t
          } = e;
          for (const e of t) {
            const t = (0, r.Z7)();
            if (!t) return;
            if ("click" === e.name) {
              const n = T(d.k3 + e.startTime),
                r = T(e.duration),
                o = {
                  description: (0, p.Hd)(e.target),
                  op: `ui.interaction.${e.name}`,
                  origin: "auto.ui.browser.metrics",
                  startTimestamp: n,
                  endTimestamp: n + r
                },
                s = (0, p.xE)(e.target);
              s && (o.attributes = {
                "ui.component_name": s
              }), t.startChild(o)
            }
          }
        }))
      }

      function A(e, t) {
        if (k() && d.k3) {
          const n = function(e, t) {
            return (0, g.hT)((n => {
              let {
                metric: r
              } = n;
              if (void 0 === r.value) return;
              const a = r.entries.find((e => e.duration === r.value && void 0 !== N[e.name])),
                c = (0, o.KU)();
              if (!a || !c) return;
              const f = N[a.name],
                g = c.getOptions(),
                y = T(d.k3 + a.startTime),
                _ = T(r.value),
                b = void 0 !== a.interactionId ? e[a.interactionId] : void 0;
              if (void 0 === b) return;
              const {
                routeName: S,
                parentContext: w,
                activeTransaction: k,
                user: E,
                replayId: x
              } = b, I = void 0 !== E ? E.email || E.id || E.ip_address : void 0, C = void 0 !== k ? k.getProfileId() : void 0, R = new s.L({
                startTimestamp: y,
                endTimestamp: y + _,
                op: `ui.interaction.${f}`,
                name: (0, p.Hd)(a.target),
                attributes: {
                  release: g.release,
                  environment: g.environment,
                  transaction: S,
                  ...void 0 !== I && "" !== I ? {
                    user: I
                  } : {},
                  ...void 0 !== C ? {
                    profile_id: C
                  } : {},
                  ...void 0 !== x ? {
                    replay_id: x
                  } : {}
                },
                exclusiveTime: r.value,
                measurements: {
                  inp: {
                    value: r.value,
                    unit: "millisecond"
                  }
                }
              }), M = function(e, t, n) {
                if (!(0, u.w)(t)) return !1;
                let r;
                return r = void 0 !== e && "function" == typeof t.tracesSampler ? t.tracesSampler({
                  transactionContext: e,
                  name: e.name,
                  parentSampled: e.parentSampled,
                  attributes: {
                    ...e.data,
                    ...e.attributes
                  },
                  location: v.j.location
                }) : void 0 !== e && void 0 !== e.sampled ? e.sampled : void 0 !== t.tracesSampleRate ? t.tracesSampleRate : 1, (0, l.v)(r) ? !0 === r ? n : !1 === r ? 0 : r * n : (m.T && h.vF.warn("[Tracing] Discarding interaction span because of invalid sample rate."), !1)
              }(w, g, t);
              if (M && Math.random() < M) {
                const e = R ? (0, i.l)([R], c.getDsn()) : void 0,
                  t = c && c.getTransport();
                t && e && t.send(e).then(null, (e => {
                  m.T && h.vF.error("Error while sending interaction:", e)
                }))
              }
            }))
          }(e, t);
          return () => {
            n()
          }
        }
        return () => {}
      }
      const N = {
        click: "click",
        pointerdown: "click",
        pointerup: "click",
        mousedown: "click",
        mouseup: "click",
        touchstart: "click",
        touchend: "click",
        mouseover: "hover",
        mouseout: "hover",
        mouseenter: "hover",
        mouseleave: "hover",
        pointerover: "hover",
        pointerout: "hover",
        pointerenter: "hover",
        pointerleave: "hover",
        dragstart: "drag",
        dragend: "drag",
        drag: "drag",
        dragenter: "drag",
        dragleave: "drag",
        dragover: "drag",
        drop: "drag",
        keydown: "press",
        keyup: "press",
        keypress: "press",
        input: "press"
      };

      function D(e) {
        const t = k();
        if (!t || !v.j.performance.getEntries || !d.k3) return;
        m.T && h.vF.log("[Tracing] Adding & adjusting spans using Performance API");
        const n = T(d.k3),
          r = t.getEntries(),
          {
            op: o,
            start_timestamp: s
          } = (0, a.et)(e);
        if (r.slice(I).forEach((t => {
            const r = T(t.startTime),
              o = T(t.duration);
            if (!("navigation" === e.op && s && n + r < s)) switch (t.entryType) {
              case "navigation":
                ! function(e, t, n) {
                  ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach((r => {
                      F(e, t, r, n)
                    })), F(e, t, "secureConnection", n, "TLS/SSL", "connectEnd"), F(e, t, "fetch", n, "cache", "domainLookupStart"), F(e, t, "domainLookup", n, "DNS"),
                    function(e, t, n) {
                      t.responseEnd && (b(e, {
                        op: "browser",
                        origin: "auto.browser.browser.metrics",
                        description: "request",
                        startTimestamp: n + T(t.requestStart),
                        endTimestamp: n + T(t.responseEnd)
                      }), b(e, {
                        op: "browser",
                        origin: "auto.browser.browser.metrics",
                        description: "response",
                        startTimestamp: n + T(t.responseStart),
                        endTimestamp: n + T(t.responseEnd)
                      }))
                    }(e, t, n)
                }(e, t, n);
                break;
              case "mark":
              case "paint":
              case "measure": {
                ! function(e, t, n, r, o) {
                  const s = o + n,
                    i = s + r;
                  b(e, {
                    description: t.name,
                    endTimestamp: i,
                    op: t.entryType,
                    origin: "auto.resource.browser.metrics",
                    startTimestamp: s
                  })
                }(e, t, r, o, n);
                const s = (0, y.N)(),
                  i = t.startTime < s.firstHiddenTime;
                "first-paint" === t.name && i && (m.T && h.vF.log("[Measurements] Adding FP"), C.fp = {
                  value: t.startTime,
                  unit: "millisecond"
                }), "first-contentful-paint" === t.name && i && (m.T && h.vF.log("[Measurements] Adding FCP"), C.fcp = {
                  value: t.startTime,
                  unit: "millisecond"
                });
                break
              }
              case "resource":
                ! function(e, t, n, r, o, s) {
                  if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType) return;
                  const i = (0, f.Dl)(n),
                    a = {};
                  L(a, t, "transferSize", "http.response_transfer_size"), L(a, t, "encodedBodySize", "http.response_content_length"), L(a, t, "decodedBodySize", "http.decoded_response_content_length"), "renderBlockingStatus" in t && (a["resource.render_blocking_status"] = t.renderBlockingStatus), i.protocol && (a["url.scheme"] = i.protocol.split(":").pop()), i.host && (a["server.address"] = i.host), a["url.same_origin"] = n.includes(v.j.location.origin);
                  const c = s + r,
                    u = c + o;
                  b(e, {
                    description: n.replace(v.j.location.origin, ""),
                    endTimestamp: u,
                    op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
                    origin: "auto.resource.browser.metrics",
                    startTimestamp: c,
                    data: a
                  })
                }(e, t, t.name, r, o, n)
            }
          })), I = Math.max(r.length - 1, 0), function(e) {
            const t = v.j.navigator;
            if (!t) return;
            const n = t.connection;
            n && (n.effectiveType && e.setTag("effectiveConnectionType", n.effectiveType), n.type && e.setTag("connectionType", n.type), _(n.rtt) && (C["connection.rtt"] = {
              value: n.rtt,
              unit: "millisecond"
            })), _(t.deviceMemory) && e.setTag("deviceMemory", `${t.deviceMemory} GB`), _(t.hardwareConcurrency) && e.setTag("hardwareConcurrency", String(t.hardwareConcurrency))
          }(e), "pageload" === o) {
          ! function(e) {
            const t = (0, S.z)();
            if (!t) return;
            const {
              responseStart: n,
              requestStart: r
            } = t;
            r <= n && (m.T && h.vF.log("[Measurements] Adding TTFB Request Time"), e["ttfb.requestTime"] = {
              value: n - r,
              unit: "millisecond"
            })
          }(C), ["fcp", "fp", "lcp"].forEach((e => {
            if (!C[e] || !s || n >= s) return;
            const t = C[e].value,
              r = n + T(t),
              o = Math.abs(1e3 * (r - s)),
              i = o - t;
            m.T && h.vF.log(`[Measurements] Normalized ${e} from ${t} to ${o} (${i})`), C[e].value = o
          }));
          const t = C["mark.fid"];
          t && C.fid && (b(e, {
              description: "first input delay",
              endTimestamp: t.value + T(C.fid.value),
              op: "ui.action",
              origin: "auto.ui.browser.metrics",
              startTimestamp: t.value
            }), delete C["mark.fid"]), "fcp" in C || delete C.cls, Object.keys(C).forEach((e => {
              (0, c.X)(e, C[e].value, C[e].unit)
            })),
            function(e) {
              E && (m.T && h.vF.log("[Measurements] Adding LCP Data"), E.element && e.setTag("lcp.element", (0, p.Hd)(E.element)), E.id && e.setTag("lcp.id", E.id), E.url && e.setTag("lcp.url", E.url.trim().slice(0, 200)), e.setTag("lcp.size", E.size)), x && x.sources && (m.T && h.vF.log("[Measurements] Adding CLS Data"), x.sources.forEach(((t, n) => e.setTag(`cls.source.${n+1}`, (0, p.Hd)(t.node)))))
            }(e)
        }
        E = void 0, x = void 0, C = {}
      }

      function F(e, t, n, r, o, s) {
        const i = s ? t[s] : t[`${n}End`],
          a = t[`${n}Start`];
        a && i && b(e, {
          op: "browser",
          origin: "auto.browser.browser.metrics",
          description: o || n,
          startTimestamp: r + T(a),
          endTimestamp: r + T(i)
        })
      }

      function L(e, t, n, r) {
        const o = t[n];
        null != o && o < w && (e[r] = o)
      }
    },
    18310: (e, t, n) => {
      "use strict";
      n.d(t, {
        E0: () => a,
        TC: () => u,
        kM: () => c,
        nc: () => i
      });
      var r = n(68066),
        o = n(50950);
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

      function c(e, t) {
        const n = i(e),
          s = (0, r.yD)(t),
          {
            traceId: a,
            parentSpanId: c,
            parentSampled: u
          } = n || {};
        return n ? {
          traceId: a || (0, o.eJ)(),
          parentSpanId: c || (0, o.eJ)().substring(16),
          spanId: (0, o.eJ)().substring(16),
          sampled: u,
          dsc: s || {}
        } : {
          traceId: a || (0, o.eJ)(),
          spanId: (0, o.eJ)().substring(16)
        }
      }

      function u() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.eJ)(),
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, o.eJ)().substring(16),
          n = arguments.length > 2 ? arguments[2] : void 0,
          r = "";
        return void 0 !== n && (r = n ? "-1" : "-0"), `${e}-${t}${r}`
      }
    },
    18789: (e, t, n) => {
      "use strict";
      n.d(t, {
        L: () => s
      });
      var r = n(49361),
        o = n(85802);

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
    19063: (e, t, n) => {
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
      var r = n(53825),
        o = n(18310),
        s = n(55343);
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
    19520: (e, t, n) => {
      "use strict";
      n.d(t, {
        B: () => c,
        J: () => a
      });
      var r = n(58970),
        o = n(14),
        s = n(13903),
        i = n(62451);

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
    20404: (e, t, n) => {
      "use strict";
      n.d(t, {
        Vu: () => c,
        fj: () => i,
        qO: () => a
      });
      var r = n(55343),
        o = n(50950),
        s = n(53825);

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
    20451: (e, t, n) => {
      "use strict";
      n.d(t, {
        L: () => f,
        R: () => m
      });
      var r = n(6846),
        o = n(13903),
        s = n(1075),
        i = n(88810),
        a = n(97723),
        c = n(52592),
        u = n(58970),
        l = n(53711),
        d = n(32226),
        p = n(74652);
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
    21244: (e, t, n) => {
      "use strict";
      n.d(t, {
        M: () => r
      });
      const r = "7.120.3"
    },
    21867: (e, t, n) => {
      "use strict";
      n.d(t, {
        Cq: () => u,
        zX: () => p
      });
      var r = n(58970),
        o = n(55343),
        s = n(14),
        i = n(19063),
        a = n(81181),
        c = n(48537);
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
    22557: (e, t, n) => {
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
    22561: (e, t, n) => {
      "use strict";
      n.d(t, {
        T: () => r
      });
      const r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
    },
    22969: (e, t, n) => {
      "use strict";
      n.d(t, {
        te: () => o
      });
      const r = ["fatal", "error", "warning", "log", "info", "debug"];

      function o(e) {
        return "warn" === e ? "warning" : r.includes(e) ? e : "log"
      }
    },
    23832: (e, t, n) => {
      "use strict";
      n.d(t, {
        qd: () => v
      });
      var r = n(58970),
        o = n(14),
        s = n(13903),
        i = n(19063),
        a = n(15899),
        c = n(6846),
        u = n(55343),
        l = n(74007),
        d = n(52709),
        p = n(89371);
      class h {
        constructor(e) {
          this._client = e, this._buckets = new Map, this._interval = setInterval((() => this.flush()), a.yQ)
        }
        add(e, t, n) {
          let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none",
            o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : (0, u.zf)();
          const i = Math.floor(s),
            c = (0, p.T3)(t),
            h = (0, p.VZ)(o),
            f = (0, p.Mz)(r),
            m = (0, p.eG)(e, c, f, h);
          let g = this._buckets.get(m);
          const v = g && e === a.fN ? g.metric.weight : 0;
          g ? (g.metric.add(n), g.timestamp < i && (g.timestamp = i)) : (g = {
            metric: new l.wz[e](n),
            timestamp: i,
            metricType: e,
            name: c,
            unit: f,
            tags: h
          }, this._buckets.set(m, g));
          const y = "string" == typeof n ? g.metric.weight - v : n;
          (0, d.r)(e, c, y, f, o, m)
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
      const f = "MetricsAggregator",
        m = (0, c._C)((() => ({
          name: f,
          setupOnce() {},
          setup(e) {
            e.metricsAggregator = new h(e)
          }
        })));

      function g(e, t, n) {
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
      const v = {
        increment: function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = arguments.length > 2 ? arguments[2] : void 0;
          g(a.bD, e, t, n)
        },
        distribution: function(e, t, n) {
          g(a.vR, e, t, n)
        },
        set: function(e, t, n) {
          g(a.fN, e, t, n)
        },
        gauge: function(e, t, n) {
          g(a.co, e, t, n)
        },
        MetricsAggregator: (0, c.F)(f, m),
        metricsAggregatorIntegration: m
      }
    },
    24837: (e, t, n) => {
      "use strict";
      n.d(t, {
        _: () => l
      });
      var r = n(9394),
        o = n(45620),
        s = n(79150),
        i = n(58970),
        a = n(53711),
        c = n(74652);
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
    25446: (e, t, n) => {
      "use strict";
      n.d(t, {
        h$: () => w,
        Qb: () => T
      });
      var r = n(19063),
        o = n(92137),
        s = n(38307),
        i = n(13903),
        a = n(62451),
        c = n(94756),
        u = n(49295),
        l = n(90714),
        d = n(64804),
        p = n(96973),
        h = n(54474),
        f = n(55343),
        m = n(41707),
        g = n(18310),
        v = n(68066),
        y = n(88810);
      var _ = n(59521),
        b = n(6067);
      const S = ["localhost", /^\/(?!\/)/],
        w = {
          traceFetch: !0,
          traceXHR: !0,
          enableHTTPTimings: !0,
          tracingOrigins: S,
          tracePropagationTargets: S
        };

      function T(e) {
        const {
          traceFetch: t,
          traceXHR: n,
          tracePropagationTargets: f,
          tracingOrigins: _,
          shouldCreateSpanForRequest: b,
          enableHTTPTimings: T
        } = {
          traceFetch: w.traceFetch,
          traceXHR: w.traceXHR,
          ...e
        }, E = "function" == typeof b ? b : e => !0, I = e => function(e, t) {
          return (0, m.Xr)(e, t || S)
        }(e, f || _), C = {};
        t && (0, d.u)((e => {
          const t = function(e, t, n, d) {
            let h = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "auto.http.browser";
            if (!(0, o.w)() || !e.fetchData) return;
            const f = t(e.fetchData.url);
            if (e.endTimestamp && f) {
              const t = e.fetchData.__span;
              if (!t) return;
              const n = d[t];
              return void(n && (function(e, t) {
                if (t.response) {
                  (0, s.N8)(e, t.response.status);
                  const n = t.response && t.response.headers && t.response.headers.get("content-length");
                  if (n) {
                    const t = parseInt(n);
                    t > 0 && e.setAttribute("http.response_content_length", t)
                  }
                } else t.error && e.setStatus("internal_error");
                e.end()
              }(n, e), delete d[t]))
            }
            const m = (0, i.o5)(),
              _ = (0, i.KU)(),
              {
                method: b,
                url: S
              } = e.fetchData,
              w = function(e) {
                try {
                  return new URL(e).href
                } catch (e) {
                  return
                }
              }(S),
              T = w ? (0, p.Dl)(w).host : void 0,
              k = f ? (0, c.Uk)({
                name: `${b} ${S}`,
                onlyIfParent: !0,
                attributes: {
                  url: S,
                  type: "fetch",
                  "http.method": b,
                  "http.url": w,
                  "server.address": T,
                  [u.JD]: h
                },
                op: "http.client"
              }) : void 0;
            if (k && (e.fetchData.__span = k.spanContext().spanId, d[k.spanContext().spanId] = k), n(e.fetchData.url) && _) {
              const t = e.args[0];
              e.args[1] = e.args[1] || {};
              const n = e.args[1];
              n.headers = function(e, t, n, o, s) {
                const i = s || n.getSpan(),
                  c = (0, a.rm)(),
                  {
                    traceId: u,
                    spanId: d,
                    sampled: p,
                    dsc: h
                  } = {
                    ...c.getPropagationContext(),
                    ...n.getPropagationContext()
                  },
                  f = i ? (0, r.Qh)(i) : (0, g.TC)(u, d, p),
                  m = (0, v.De)(h || (i ? (0, l.k)(i) : (0, l.l)(u, t, n))),
                  _ = o.headers || ("undefined" != typeof Request && (0, y.tH)(e, Request) ? e.headers : void 0);
                if (_) {
                  if ("undefined" != typeof Headers && (0, y.tH)(_, Headers)) {
                    const e = new Headers(_);
                    return e.append("sentry-trace", f), m && e.append(v.hF, m), e
                  }
                  if (Array.isArray(_)) {
                    const e = [..._, ["sentry-trace", f]];
                    return m && e.push([v.hF, m]), e
                  } {
                    const e = "baggage" in _ ? _.baggage : void 0,
                      t = [];
                    return Array.isArray(e) ? t.push(...e) : e && t.push(e), m && t.push(m), {
                      ..._,
                      "sentry-trace": f,
                      baggage: t.length > 0 ? t.join(",") : void 0
                    }
                  }
                }
                return {
                  "sentry-trace": f,
                  baggage: m
                }
              }(t, _, m, n, k)
            }
            return k
          }(e, E, I, C);
          if (t) {
            const n = x(e.fetchData.url),
              r = n ? (0, p.Dl)(n).host : void 0;
            t.setAttributes({
              "http.url": n,
              "server.address": r
            })
          }
          T && t && k(t)
        })), n && (0, h.Mn)((e => {
          const t = function(e, t, n, d) {
            const f = e.xhr,
              m = f && f[h.Er];
            if (!(0, o.w)() || !f || f.__sentry_own_request__ || !m) return;
            const y = t(m.url);
            if (e.endTimestamp && y) {
              const e = f.__sentry_xhr_span_id__;
              if (!e) return;
              const t = d[e];
              return void(t && void 0 !== m.status_code && ((0, s.N8)(t, m.status_code), t.end(), delete d[e]))
            }
            const _ = (0, i.o5)(),
              b = (0, a.rm)(),
              S = x(m.url),
              w = S ? (0, p.Dl)(S).host : void 0,
              T = y ? (0, c.Uk)({
                name: `${m.method} ${m.url}`,
                onlyIfParent: !0,
                attributes: {
                  type: "xhr",
                  "http.method": m.method,
                  "http.url": S,
                  url: m.url,
                  "server.address": w,
                  [u.JD]: "auto.http.browser"
                },
                op: "http.client"
              }) : void 0;
            T && (f.__sentry_xhr_span_id__ = T.spanContext().spanId, d[f.__sentry_xhr_span_id__] = T);
            const k = (0, i.KU)();
            if (f.setRequestHeader && n(m.url) && k) {
              const {
                traceId: e,
                spanId: t,
                sampled: n,
                dsc: o
              } = {
                ...b.getPropagationContext(),
                ..._.getPropagationContext()
              };
              ! function(e, t, n) {
                try {
                  e.setRequestHeader("sentry-trace", t), n && e.setRequestHeader(v.hF, n)
                } catch (e) {}
              }(f, T ? (0, r.Qh)(T) : (0, g.TC)(e, t, n), (0, v.De)(o || (T ? (0, l.k)(T) : (0, l.l)(e, k, _))))
            }
            return T
          }(e, E, I, C);
          T && t && k(t)
        }))
      }

      function k(e) {
        const {
          url: t
        } = (0, r.et)(e).data || {};
        if (!t || "string" != typeof t) return;
        const n = (0, _.wv)("resource", (r => {
          let {
            entries: o
          } = r;
          o.forEach((r => {
            (function(e) {
              return "resource" === e.entryType && "initiatorType" in e && "string" == typeof e.nextHopProtocol && ("fetch" === e.initiatorType || "xmlhttprequest" === e.initiatorType)
            })(r) && r.name.endsWith(t) && (function(e) {
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
              return r.push(["network.protocol.version", n], ["network.protocol.name", t]), f.k3 ? [...r, ["http.request.redirect_start", E(e.redirectStart)],
                ["http.request.fetch_start", E(e.fetchStart)],
                ["http.request.domain_lookup_start", E(e.domainLookupStart)],
                ["http.request.domain_lookup_end", E(e.domainLookupEnd)],
                ["http.request.connect_start", E(e.connectStart)],
                ["http.request.secure_connection_start", E(e.secureConnectionStart)],
                ["http.request.connection_end", E(e.connectEnd)],
                ["http.request.request_start", E(e.requestStart)],
                ["http.request.response_start", E(e.responseStart)],
                ["http.request.response_end", E(e.responseEnd)]
              ] : r
            }(r).forEach((t => e.setAttribute(...t))), setTimeout(n))
          }))
        }))
      }

      function E() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return ((f.k3 || performance.timeOrigin) + e) / 1e3
      }

      function x(e) {
        try {
          return new URL(e, b.j.location.origin).href
        } catch (e) {
          return
        }
      }
    },
    25684: (e, t, n) => {
      "use strict";
      n.d(t, {
        _: () => u
      });
      var r = n(53825),
        o = n(31127);
      const s = (0, o.VZ)();
      var i = n(10464);
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
    27103: (e, t, n) => {
      "use strict";
      n.d(t, {
        Q: () => s
      });
      var r = n(88810),
        o = n(41707);

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
          ..."AggregateError" === e.type && {
            is_exception_group: !0
          },
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
    30207: (e, t, n) => {
      "use strict";
      n.d(t, {
        z: () => o
      });
      var r = n(6067);
      const o = () => r.j.__WEB_VITALS_POLYFILL__ ? r.j.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || (() => {
        const e = r.j.performance.timing,
          t = r.j.performance.navigation.type,
          n = {
            entryType: "navigation",
            startTime: 0,
            type: 2 == t ? "back_forward" : 1 === t ? "reload" : "navigate"
          };
        for (const t in e) "navigationStart" !== t && "toJSON" !== t && (n[t] = Math.max(e[t] - e.navigationStart, 0));
        return n
      })()) : r.j.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
    },
    30908: (e, t, n) => {
      "use strict";
      n.d(t, {
        D: () => d,
        H: () => p
      });
      var r = n(58970),
        o = n(50950),
        s = n(41707),
        i = n(14),
        a = n(6846);
      const c = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/],
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
    31049: (e, t, n) => {
      "use strict";
      n.d(t, {
        G: () => h,
        q: () => p
      });
      var r = n(13903),
        o = n(6846),
        s = n(58970),
        i = n(31127),
        a = n(77433),
        c = n(22969),
        u = n(50950),
        l = n(41707);
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
        h = (0, o.F)(d, p)
    },
    31127: (e, t, n) => {
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
    32226: (e, t, n) => {
      "use strict";
      n.d(t, {
        H7: () => g,
        K8: () => u,
        qv: () => m,
        u: () => f
      });
      var r = n(13903),
        o = n(88810),
        s = n(83853),
        i = n(50950),
        a = n(45620),
        c = n(53825);

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
    33042: (e, t, n) => {
      "use strict";
      n.d(t, {
        wD: () => s
      });
      var r = n(3775);
      e = n.hmd(e);
      var o = n(87144);

      function s() {
        return !(0, r.Z)() && "[object process]" === Object.prototype.toString.call(void 0 !== o ? o : 0)
      }
    },
    33977: (e, t, n) => {
      "use strict";
      n.d(t, {
        N: () => i
      });
      var r = n(6067),
        o = n(6424);
      let s = -1;
      const i = () => (s < 0 && (r.j.document && r.j.document.visibilityState && (s = "hidden" !== r.j.document.visibilityState || r.j.document.prerendering ? 1 / 0 : 0), (0, o.Q)((e => {
        let {
          timeStamp: t
        } = e;
        s = t
      }), !0)), {
        get firstHiddenTime() {
          return s
        }
      })
    },
    34120: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        Breadcrumbs: () => r.Breadcrumbs,
        BrowserClient: () => r.BrowserClient,
        BrowserProfilingIntegration: () => r.BrowserProfilingIntegration,
        BrowserTracing: () => r.BrowserTracing,
        Dedupe: () => r.Dedupe,
        ErrorBoundary: () => I,
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
        SEMANTIC_ATTRIBUTE_SENTRY_OP: () => r.SEMANTIC_ATTRIBUTE_SENTRY_OP,
        SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN: () => r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN,
        SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE: () => r.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE,
        SEMANTIC_ATTRIBUTE_SENTRY_SOURCE: () => r.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE,
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
        browserProfilingIntegration: () => r.browserProfilingIntegration,
        browserTracingIntegration: () => r.browserTracingIntegration,
        captureConsoleIntegration: () => r.captureConsoleIntegration,
        captureEvent: () => r.captureEvent,
        captureException: () => r.captureException,
        captureMessage: () => r.captureMessage,
        captureSession: () => r.captureSession,
        captureUserFeedback: () => r.captureUserFeedback,
        chromeStackLineParser: () => r.chromeStackLineParser,
        close: () => r.close,
        configureScope: () => r.configureScope,
        contextLinesIntegration: () => r.contextLinesIntegration,
        continueTrace: () => r.continueTrace,
        createReduxEnhancer: () => D,
        createTransport: () => r.createTransport,
        createUserFeedbackEnvelope: () => r.createUserFeedbackEnvelope,
        debugIntegration: () => r.debugIntegration,
        dedupeIntegration: () => r.dedupeIntegration,
        defaultIntegrations: () => r.defaultIntegrations,
        defaultRequestInstrumentationOptions: () => r.defaultRequestInstrumentationOptions,
        defaultStackLineParsers: () => r.defaultStackLineParsers,
        defaultStackParser: () => r.defaultStackParser,
        endSession: () => r.endSession,
        eventFromException: () => r.eventFromException,
        eventFromMessage: () => r.eventFromMessage,
        exceptionFromError: () => r.exceptionFromError,
        extraErrorDataIntegration: () => r.extraErrorDataIntegration,
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
        getReplay: () => r.getReplay,
        getSpanStatusFromHttpCode: () => r.getSpanStatusFromHttpCode,
        globalHandlersIntegration: () => r.globalHandlersIntegration,
        httpClientIntegration: () => r.httpClientIntegration,
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
        reactRouterV3BrowserTracingIntegration: () => j,
        reactRouterV3Instrumentation: () => B,
        reactRouterV4BrowserTracingIntegration: () => q,
        reactRouterV4Instrumentation: () => G,
        reactRouterV5BrowserTracingIntegration: () => W,
        reactRouterV5Instrumentation: () => K,
        reactRouterV6BrowserTracingIntegration: () => ce,
        reactRouterV6Instrumentation: () => ue,
        replayCanvasIntegration: () => r.replayCanvasIntegration,
        replayIntegration: () => r.replayIntegration,
        reportingObserverIntegration: () => r.reportingObserverIntegration,
        rewriteFramesIntegration: () => r.rewriteFramesIntegration,
        sendFeedback: () => r.sendFeedback,
        sessionTimingIntegration: () => r.sessionTimingIntegration,
        setContext: () => r.setContext,
        setCurrentClient: () => r.setCurrentClient,
        setExtra: () => r.setExtra,
        setExtras: () => r.setExtras,
        setHttpStatus: () => r.setHttpStatus,
        setMeasurement: () => r.setMeasurement,
        setTag: () => r.setTag,
        setTags: () => r.setTags,
        setUser: () => r.setUser,
        showReportDialog: () => r.showReportDialog,
        spanStatusfromHttpCode: () => r.spanStatusfromHttpCode,
        startBrowserTracingNavigationSpan: () => r.startBrowserTracingNavigationSpan,
        startBrowserTracingPageLoadSpan: () => r.startBrowserTracingPageLoadSpan,
        startInactiveSpan: () => r.startInactiveSpan,
        startSession: () => r.startSession,
        startSpan: () => r.startSpan,
        startSpanManual: () => r.startSpanManual,
        startTransaction: () => r.startTransaction,
        trace: () => r.trace,
        useProfiler: () => b,
        winjsStackLineParser: () => r.winjsStackLineParser,
        withActiveSpan: () => r.withActiveSpan,
        withErrorBoundary: () => C,
        withIsolationScope: () => r.withIsolationScope,
        withProfiler: () => _,
        withScope: () => r.withScope,
        withSentryReactRouterV6Routing: () => fe,
        withSentryRouting: () => Y,
        wrap: () => r.wrap,
        wrapCreateBrowserRouter: () => ge,
        wrapUseRoutes: () => me
      });
      var r = n(54122),
        o = n(86253),
        s = n(75655);

      function i(e) {
        const t = {
          ...e
        };
        (0, s.K)(t, "react"), (0, o.Ts)(t)
      }
      var a = n(94756),
        c = n(13903),
        u = n(19063),
        l = n(55343),
        d = n(67332),
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
      var S = n(88810),
        w = n(58970);
      const T = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        k = "/home/runner/work/sentry-javascript/sentry-javascript/packages/react/src/errorboundary.tsx",
        E = "unknown",
        x = {
          componentStack: null,
          error: null,
          eventId: null
        };
      class I extends h.Component {
        constructor(e) {
          super(e), I.prototype.__init.call(this), this.state = x, this._openFallbackReportDialog = !0;
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
                handled: !!this.props.fallback
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
            }) : e, h.isValidElement(t) ? t : (e && T && w.vF.warn("fallback did not produce a valid ReactElement"), null)
          }
          return "function" == typeof t ? t() : t
        }
      }

      function C(e, t) {
        const n = e.displayName || e.name || E,
          r = n => h.createElement(I, {
            ...t,
            __self: this,
            __source: {
              fileName: k,
              lineNumber: 240
            }
          }, h.createElement(e, {
            ...n,
            __self: this,
            __source: {
              fileName: k,
              lineNumber: 241
            }
          }));
        return r.displayName = `errorBoundary(${n})`, p()(r, e), r
      }
      var R = n(98696),
        M = n(53825);
      const O = "redux.action",
        A = "info",
        N = {
          attachReduxState: !0,
          actionTransformer: e => e,
          stateTransformer: e => e || null
        };

      function D(e) {
        const t = {
          ...N,
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
            category: O,
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
            (0, M.my)(r, "__sentry_override_normalization_depth__", 3 + n), s.setContext("state", r)
          } else s.setContext("state", null);
          const {
            configureScopeWithState: u
          } = t;
          return "function" == typeof u && u(s, o), o
        }), r))
      }
      var F = n(38114),
        L = n(74652),
        P = n(49295);

      function j(e) {
        const t = (0, F.dp)({
            ...e,
            instrumentPageLoad: !1,
            instrumentNavigation: !1
          }),
          {
            history: n,
            routes: r,
            match: o,
            instrumentPageLoad: s = !0,
            instrumentNavigation: i = !0
          } = e;
        return {
          ...t,
          afterAllSetup(e) {
            t.afterAllSetup(e);
            const a = B(n, r, o);
            a((t => {
              (0, F.Sx)(e, t)
            }), s, !1), a((t => {
              (0, F.Nt)(e, t)
            }), !1, i)
          }
        }
      }

      function B(e, t, n) {
        return function(r) {
          let o, s, i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && L.jf && L.jf.location && $(t, L.jf.location, n, (function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "url";
            s = e, o = r({
              name: s,
              attributes: {
                [P.uT]: "pageload",
                [P.JD]: "auto.pageload.react.reactrouter_v3",
                [P.i_]: t
              }
            })
          })), i && e.listen && e.listen((e => {
            "PUSH" !== e.action && "POP" !== e.action || (o && o.end(), $(t, e, n, (function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "url";
              s = e;
              const n = {
                [P.uT]: "navigation",
                [P.JD]: "auto.navigation.react.reactrouter_v3",
                [P.i_]: t
              };
              o = r({
                name: s,
                attributes: n
              })
            })))
          }))
        }
      }

      function $(e, t, n, r) {
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
      var U = n(87266);
      const H = "/home/runner/work/sentry-javascript/sentry-javascript/packages/react/src/reactrouter.tsx";
      let z;

      function q(e) {
        const t = (0, F.dp)({
            ...e,
            instrumentPageLoad: !1,
            instrumentNavigation: !1
          }),
          {
            history: n,
            routes: r,
            matchPath: o,
            instrumentPageLoad: s = !0,
            instrumentNavigation: i = !0
          } = e;
        return {
          ...t,
          afterAllSetup(e) {
            t.afterAllSetup(e);
            const a = G(n, r, o);
            a((t => {
              (0, F.Sx)(e, t)
            }), s, !1), a((t => {
              (0, F.Nt)(e, t)
            }), !1, i)
          }
        }
      }

      function W(e) {
        const t = (0, F.dp)({
            ...e,
            instrumentPageLoad: !1,
            instrumentNavigation: !1
          }),
          {
            history: n,
            routes: r,
            matchPath: o
          } = e;
        return {
          ...t,
          afterAllSetup(s) {
            t.afterAllSetup(s);
            const i = K(n, r, o);
            i((e => {
              (0, F.Sx)(s, e)
            }), e.instrumentPageLoad, !1), i((e => {
              (0, F.Nt)(s, e)
            }), !1, e.instrumentNavigation)
          }
        }
      }

      function G(e, t, n) {
        return J(e, "reactrouter_v4", t, n)
      }

      function K(e, t, n) {
        return J(e, "reactrouter_v5", t, n)
      }

      function J(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          r = arguments.length > 3 ? arguments[3] : void 0;

        function o(e) {
          if (0 === n.length || !r) return [e, "url"];
          const t = V(n, e, r);
          for (let e = 0; e < t.length; e++)
            if (t[e].match.isExact) return [t[e].match.path, "route"];
          return [e, "url"]
        }
        return function(n) {
          let r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            s = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          const i = e && e.location ? e.location.pathname : L.jf && L.jf.location ? L.jf.location.pathname : void 0;
          if (r && i) {
            const [e, r] = o(i);
            z = n({
              name: e,
              attributes: {
                [P.uT]: "pageload",
                [P.JD]: `auto.pageload.react.${t}`,
                [P.i_]: r
              }
            })
          }
          s && e.listen && e.listen(((e, r) => {
            if (r && ("PUSH" === r || "POP" === r)) {
              z && z.end();
              const [r, s] = o(e.pathname);
              z = n({
                name: r,
                attributes: {
                  [P.uT]: "navigation",
                  [P.JD]: `auto.navigation.react.${t}`,
                  [P.i_]: s
                }
              })
            }
          }))
        }
      }

      function V(e, t, n) {
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
          }), e.routes && V(e.routes, t, n, r)), !!o
        })), r
      }

      function Y(e) {
        const t = e.displayName || e.name,
          n = t => {
            if (t && t.computedMatch && t.computedMatch.isExact) {
              const e = t.computedMatch.path,
                n = function() {
                  if (z) return z;
                  const e = (0, a.Bk)(),
                    t = e ? (0, U.z)(e) : void 0;
                  if (!t) return;
                  const n = (0, u.et)(t).op;
                  return "navigation" === n || "pageload" === n ? t : void 0
                }();
              n && (n.updateName(e), n.setAttribute(P.i_, "route"))
            }
            return h.createElement(e, {
              ...t,
              __self: this,
              __source: {
                fileName: H,
                lineNumber: 279
              }
            })
          };
        return n.displayName = `sentryRoute(${t})`, p()(n, e), n
      }
      var X = n(96973);
      const Q = "/home/runner/work/sentry-javascript/sentry-javascript/packages/react/src/reactrouterv6.tsx";
      let Z, ee, te, ne, re, oe, se, ie, ae = !1;

      function ce(e) {
        const t = (0, F.dp)({
            ...e,
            instrumentPageLoad: !1,
            instrumentNavigation: !1
          }),
          {
            useEffect: n,
            useLocation: r,
            useNavigationType: o,
            createRoutesFromChildren: s,
            matchRoutes: i,
            stripBasename: a,
            instrumentPageLoad: c = !0,
            instrumentNavigation: u = !0
          } = e;
        return {
          ...t,
          afterAllSetup(e) {
            t.afterAllSetup(e);
            const l = L.jf && L.jf.location && L.jf.location.pathname;
            c && l && (0, F.Sx)(e, {
              name: l,
              attributes: {
                [P.i_]: "url",
                [P.uT]: "pageload",
                [P.JD]: "auto.pageload.react.reactrouter_v6"
              }
            }), ee = n, te = r, ne = o, oe = i, re = s, ae = a || !1, se = t => {
              (0, F.Nt)(e, t)
            }, ie = u
          }
        }
      }

      function ue(e, t, n, r, o, s) {
        return function(i) {
          let a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            c = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          const u = L.jf && L.jf.location && L.jf.location.pathname;
          a && u && (Z = i({
            name: u,
            attributes: {
              [P.i_]: "url",
              [P.uT]: "pageload",
              [P.JD]: "auto.pageload.react.reactrouter_v6"
            }
          })), ee = e, te = t, ne = n, oe = o, re = r, ae = s || !1, se = i, ie = c
        }
      }

      function le(e, t) {
        if (!t || "/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return e;
        const n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? e : e.slice(n) || "/"
      }

      function de(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        if (!e || 0 === e.length) return [ae ? le(t.pathname, r) : t.pathname, "url"];
        let o = "";
        if (n)
          for (let e = 0; e < n.length; e++) {
            const s = n[e],
              i = s.route;
            if (i) {
              if (i.index) return [ae ? le(s.pathname, r) : s.pathname, "route"];
              const e = i.path;
              if (e) {
                const n = "/" === e[0] || "/" === o[o.length - 1] ? e : `/${e}`;
                if (o += n, r + s.pathname === t.pathname) return (0, X.c4)(o) !== (0, X.c4)(s.pathname) && "/*" !== o.slice(-2) ? [(ae ? "" : r) + n, "route"] : [(ae ? "" : r) + o, "route"]
              }
            }
          }
        return [ae ? le(t.pathname, r) : t.pathname, "url"]
      }

      function pe(e, t, n, r, o) {
        const s = Array.isArray(r) ? r : oe(n, t, o);
        if (e && s) {
          const [r, i] = de(n, t, s, o);
          e.updateName(r), e.setAttribute(P.i_, i)
        }
      }

      function he(e, t, n, r, o) {
        const s = Array.isArray(r) ? r : oe(t, e, o);
        if (ie && ("PUSH" === n || "POP" === n) && s) {
          Z && Z.end();
          const [n, r] = de(t, e, s, o);
          Z = se({
            name: n,
            attributes: {
              [P.i_]: r,
              [P.uT]: "navigation",
              [P.JD]: "auto.navigation.react.reactrouter_v6"
            }
          })
        }
      }

      function fe(e) {
        if (!(ee && te && ne && re && oe && se)) return T && w.vF.warn(`reactRouterV6Instrumentation was unable to wrap Routes because of one or more missing parameters.\n      useEffect: ${ee}. useLocation: ${te}. useNavigationType: ${ne}.\n      createRoutesFromChildren: ${re}. matchRoutes: ${oe}. customStartTransaction: ${se}.`), e;
        let t = !0;
        const n = n => {
          const r = te(),
            o = ne();
          return ee((() => {
            const e = re(n.children);
            t ? (pe(ve(), r, e), t = !1) : he(r, e, o)
          }), [r, o]), h.createElement(e, {
            ...n,
            __self: this,
            __source: {
              fileName: Q,
              lineNumber: 329
            }
          })
        };
        return p()(n, e), n
      }

      function me(e) {
        if (!(ee && te && ne && oe && se)) return T && w.vF.warn("reactRouterV6Instrumentation was unable to wrap `useRoutes` because of one or more missing parameters."), e;
        let t = !0;
        const n = n => {
          const {
            routes: r,
            locationArg: o
          } = n, s = e(r, o), i = te(), a = ne(), c = "string" == typeof o || o && o.pathname ? o : i;
          return ee((() => {
            const e = "string" == typeof c ? {
              pathname: c
            } : c;
            t ? (pe(ve(), e, r), t = !1) : he(e, r, a)
          }), [a, c]), s
        };
        return (e, t) => h.createElement(n, {
          routes: e,
          locationArg: t,
          __self: this,
          __source: {
            fileName: Q,
            lineNumber: 386
          }
        })
      }

      function ge(e) {
        return function(t, n) {
          const r = e(t, n),
            o = n && n.basename,
            s = ve();
          return "POP" === r.state.historyAction && s && pe(s, r.state.location, t, void 0, o), r.subscribe((e => {
            const n = e.location;
            !ie || "PUSH" !== e.historyAction && "POP" !== e.historyAction || he(n, t, e.historyAction, void 0, o)
          })), r
        }
      }

      function ve() {
        if (Z) return Z;
        const e = (0, a.Bk)(),
          t = e ? (0, U.z)(e) : void 0;
        if (!t) return;
        const n = (0, u.et)(t).op;
        return "navigation" === n || "pageload" === n ? t : void 0
      }
    },
    34750: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        CaptureConsole: () => r.G,
        ContextLines: () => T.t7,
        Debug: () => o.y,
        Dedupe: () => s.UA,
        ExtraErrorData: () => i.p,
        HttpClient: () => w.Q,
        Offline: () => f,
        ReportingObserver: () => m.P,
        RewriteFrames: () => g.F,
        SessionTiming: () => v.T,
        Transaction: () => b,
        captureConsoleIntegration: () => r.q,
        contextLinesIntegration: () => T.l$,
        debugIntegration: () => o._,
        dedupeIntegration: () => s.sn,
        extraErrorDataIntegration: () => i.X,
        httpClientIntegration: () => w.c,
        reportingObserverIntegration: () => m.n,
        rewriteFramesIntegration: () => g.D,
        sessionTimingIntegration: () => v.Z
      });
      var r = n(31049),
        o = n(53335),
        s = n(10361),
        i = n(7478),
        a = n(31127),
        c = n(58970),
        u = n(50950),
        l = n(83853),
        d = n(75344),
        p = n(87494);
      const h = a.OW;
      class f {
        static __initStatic() {
          this.id = "Offline"
        }
        constructor() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.name = f.id, this.maxStoredEvents = e.maxStoredEvents || 30, this.offlineEventStore = d.createInstance({
            name: "sentry/offlineEventStore"
          })
        }
        setupOnce(e, t) {
          this.hub = t(), "addEventListener" in h && h.addEventListener("online", (() => {
            this._sendEvents().catch((() => {
              p.T && c.vF.warn("could not send cached events")
            }))
          }));
          const n = e => this.hub && this.hub.getIntegration(f) && "navigator" in h && "onLine" in h.navigator && !h.navigator.onLine ? (p.T && c.vF.log("Event dropped due to being a offline - caching instead"), this._cacheEvent(e).then((e => this._enforceMaxEvents())).catch((e => {
            p.T && c.vF.warn("could not cache event while offline")
          })), null) : e;
          n.id = this.name, e(n), "navigator" in h && "onLine" in h.navigator && h.navigator.onLine && this._sendEvents().catch((() => {
            p.T && c.vF.warn("could not send cached events")
          }))
        }
        async _cacheEvent(e) {
          return this.offlineEventStore.setItem((0, u.eJ)(), (0, l.S8)(e))
        }
        async _enforceMaxEvents() {
          const e = [];
          return this.offlineEventStore.iterate(((t, n, r) => {
            e.push({
              cacheKey: n,
              event: t
            })
          })).then((() => this._purgeEvents(e.sort(((e, t) => (t.event.timestamp || 0) - (e.event.timestamp || 0))).slice(this.maxStoredEvents < e.length ? this.maxStoredEvents : e.length).map((e => e.cacheKey))))).catch((e => {
            p.T && c.vF.warn("could not enforce max events")
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
              p.T && c.vF.warn("could not purge event from cache")
            }))) : p.T && c.vF.warn("no hub found - could not send cached event")
          }))
        }
      }
      f.__initStatic();
      var m = n(38548),
        g = n(45547),
        v = n(77298),
        y = n(6846);
      const _ = "Transaction",
        b = (0, y.F)(_, (() => ({
          name: _,
          setupOnce() {},
          processEvent(e) {
            const t = function(e) {
              const t = e.exception && e.exception.values && e.exception.values[0];
              return t && t.stacktrace && t.stacktrace.frames || []
            }(e);
            for (let n = t.length - 1; n >= 0; n--) {
              const r = t[n];
              if (!0 === r.in_app) {
                e.transaction = S(r);
                break
              }
            }
            return e
          }
        })));

      function S(e) {
        return e.module || e.function ? `${e.module||"?"}/${e.function||"?"}` : "<unknown>"
      }
      var w = n(77393),
        T = n(42780)
    },
    35153: (e, t, n) => {
      "use strict";
      n.d(t, {
        X: () => o
      });
      var r = n(41660);

      function o(e, t, n) {
        const o = (0, r.Z7)();
        o && o.setMeasurement(e, t, n)
      }
    },
    35912: (e, t, n) => {
      "use strict";
      n.d(t, {
        T: () => u,
        v: () => l
      });
      var r = n(58970),
        o = n(88810),
        s = n(14),
        i = n(49295),
        a = n(92137),
        c = n(19063);

      function u(e, t, n) {
        if (!(0, a.w)(t)) return e.sampled = !1, e;
        if (void 0 !== e.sampled) return e.setAttribute(i.sy, Number(e.sampled)), e;
        let o;
        return "function" == typeof t.tracesSampler ? (o = t.tracesSampler(n), e.setAttribute(i.sy, Number(o))) : void 0 !== n.parentSampled ? o = n.parentSampled : void 0 !== t.tracesSampleRate ? (o = t.tracesSampleRate, e.setAttribute(i.sy, Number(o))) : (o = 1, e.setAttribute(i.sy, o)), l(o) ? o ? (e.sampled = Math.random() < o, e.sampled ? (s.T && r.vF.log(`[Tracing] starting ${e.op} transaction - ${(0,c.et)(e).description}`), e) : (s.T && r.vF.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(o)})`), e)) : (s.T && r.vF.log("[Tracing] Discarding transaction because " + ("function" == typeof t.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")), e.sampled = !1, e) : (s.T && r.vF.warn("[Tracing] Discarding transaction because of invalid sample rate."), e.sampled = !1, e)
      }

      function l(e) {
        return (0, o.yr)(e) || "number" != typeof e && "boolean" != typeof e ? (s.T && r.vF.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`), !1) : !(e < 0 || e > 1) || (s.T && r.vF.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${e}.`), !1)
      }
    },
    36030: (e, t, n) => {
      "use strict";
      n.d(t, {
        L: () => s,
        V: () => i
      });
      var r = n(85802),
        o = n(49361);

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
    37314: (e, t, n) => {
      "use strict";
      n.d(t, {
        x: () => o
      });
      var r = n(88810);

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
    38114: (e, t, n) => {
      "use strict";
      n.d(t, {
        Nt: () => E,
        Sx: () => k,
        dp: () => T
      });
      var r = n(21867),
        o = n(65037),
        s = n(62451),
        i = n(19063),
        a = n(49295),
        c = n(94756),
        u = n(41660),
        l = n(13903),
        d = n(18310),
        p = n(58970),
        h = n(55343),
        f = n(25684),
        m = n(52592),
        g = n(22561),
        v = n(52077),
        y = n(59521),
        _ = n(16054),
        b = n(25446),
        S = n(6067);
      const w = {
          ...r.Cq,
          instrumentNavigation: !0,
          instrumentPageLoad: !0,
          markBackgroundSpan: !0,
          enableLongTask: !0,
          enableInp: !1,
          interactionsSampleRate: 1,
          _experiments: {},
          ...b.h$
        },
        T = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = !(!g.T || !e.tracePropagationTargets && !e.tracingOrigins);
          (0, o.U)(), !e.tracePropagationTargets && e.tracingOrigins && (e.tracePropagationTargets = e.tracingOrigins);
          const n = {
              ...w,
              ...e
            },
            r = (0, _.bk)(),
            c = {};
          n.enableInp && (0, _.ZZ)(c, n.interactionsSampleRate), n.enableLongTask && (0, _.c8)(), n._experiments.enableInteractions && (0, _.DI)();
          const m = {
            name: void 0,
            context: void 0
          };

          function T(e) {
            const t = (0, s.BF)(),
              {
                beforeStartSpan: i,
                idleTimeout: a,
                finalTimeout: c,
                heartbeatInterval: u
              } = n,
              l = "pageload" === e.op;
            let h;
            if (l) {
              const t = l ? x("sentry-trace") : "",
                n = l ? x("baggage") : void 0,
                {
                  traceId: r,
                  dsc: o,
                  parentSpanId: s,
                  sampled: i
                } = (0, d.kM)(t, n);
              h = {
                traceId: r,
                parentSpanId: s,
                parentSampled: i,
                ...e,
                metadata: {
                  ...e.metadata,
                  dynamicSamplingContext: o
                },
                trimEnd: !0
              }
            } else h = {
              trimEnd: !0,
              ...e
            };
            const f = i ? i(h) : h;
            f.metadata = f.name !== h.name ? {
              ...f.metadata,
              source: "custom"
            } : f.metadata, m.name = f.name, m.context = f, !1 === f.sampled && g.T && p.vF.log(`[Tracing] Will not send ${f.op} transaction because of beforeNavigate.`), g.T && p.vF.log(`[Tracing] Starting ${f.op} transaction on scope`);
            const {
              location: v
            } = S.j, y = (0, o.p)(t, f, a, c, !0, {
              location: v
            }, u, l);
            return l && S.j.document && (S.j.document.addEventListener("readystatechange", (() => {
              ["interactive", "complete"].includes(S.j.document.readyState) && y.sendAutoFinishSignal()
            })), ["interactive", "complete"].includes(S.j.document.readyState) && y.sendAutoFinishSignal()), y.registerBeforeFinishCallback((e => {
              r(), (0, _.QU)(e)
            })), y
          }
          return {
            name: "BrowserTracing",
            setupOnce: () => {},
            afterAllSetup(e) {
              const r = e.getOptions(),
                {
                  markBackgroundSpan: d,
                  traceFetch: _,
                  traceXHR: w,
                  shouldCreateSpanForRequest: x,
                  enableHTTPTimings: R,
                  _experiments: M
                } = n,
                O = r && r.tracePropagationTargets,
                A = O || n.tracePropagationTargets;
              let N;
              g.T && t && O && p.vF.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used.");
              let D = S.j.location && S.j.location.href;
              if (e.on && (e.on("startNavigationSpan", (e => {
                  N && (g.T && p.vF.log(`[Tracing] Finishing current transaction with op: ${(0,i.et)(N).op}`), N.end()), N = T({
                    op: "navigation",
                    ...e
                  })
                })), e.on("startPageLoadSpan", (e => {
                  N && (g.T && p.vF.log(`[Tracing] Finishing current transaction with op: ${(0,i.et)(N).op}`), N.end()), N = T({
                    op: "pageload",
                    ...e
                  })
                }))), n.instrumentPageLoad && e.emit && S.j.location) {
                const t = {
                  name: S.j.location.pathname,
                  startTimestamp: h.k3 ? h.k3 / 1e3 : void 0,
                  origin: "auto.pageload.browser",
                  attributes: {
                    [a.i_]: "url"
                  }
                };
                k(e, t)
              }
              n.instrumentNavigation && e.emit && S.j.location && (0, f._)((t => {
                let {
                  to: n,
                  from: r
                } = t;
                if (void 0 === r && D && -1 !== D.indexOf(n)) D = void 0;
                else if (r !== n) {
                  D = void 0;
                  const t = {
                    name: S.j.location.pathname,
                    origin: "auto.navigation.browser",
                    attributes: {
                      [a.i_]: "url"
                    }
                  };
                  E(e, t)
                }
              })), d && (0, v.i)(), M.enableInteractions && function(e, t) {
                let n;
                const r = () => {
                  const {
                    idleTimeout: r,
                    finalTimeout: i,
                    heartbeatInterval: c
                  } = e, l = "ui.action.click", d = (0, u.Z7)();
                  if (d && d.op && ["navigation", "pageload"].includes(d.op)) return void(g.T && p.vF.warn(`[Tracing] Did not create ${l} transaction because a pageload or navigation transaction is in progress.`));
                  if (n && (n.setFinishReason("interactionInterrupted"), n.end(), n = void 0), !t.name) return void(g.T && p.vF.warn(`[Tracing] Did not create ${l} transaction because _latestRouteName is missing.`));
                  const {
                    location: h
                  } = S.j, f = {
                    name: t.name,
                    op: l,
                    trimEnd: !0,
                    data: {
                      [a.i_]: t.context ? C(t.context) : "url"
                    }
                  };
                  n = (0, o.p)((0, s.BF)(), f, r, i, !0, {
                    location: h
                  }, c)
                };
                ["click"].forEach((e => {
                  S.j.document && addEventListener(e, r, {
                    once: !1,
                    capture: !0
                  })
                }))
              }(n, m), n.enableInp && function(e, t) {
                const n = n => {
                  let {
                    entries: r
                  } = n;
                  const o = (0, l.KU)(),
                    s = void 0 !== o && void 0 !== o.getIntegrationByName ? o.getIntegrationByName("Replay") : void 0,
                    i = void 0 !== s ? s.getReplayId() : void 0,
                    a = (0, u.Z7)(),
                    c = (0, l.o5)(),
                    d = void 0 !== c ? c.getUser() : void 0;
                  r.forEach((n => {
                    if (function(e) {
                        return "duration" in e
                      }(n)) {
                      const r = n.interactionId;
                      if (void 0 === r) return;
                      const o = e[r],
                        s = n.duration,
                        c = n.startTime,
                        u = Object.keys(e),
                        l = u.length > 0 ? u.reduce(((t, n) => e[t].duration < e[n].duration ? t : n)) : void 0;
                      if ("first-input" === n.entryType && u.map((t => e[t])).some((e => e.duration === s && e.startTime === c))) return;
                      if (!r) return;
                      if (o) o.duration = Math.max(o.duration, s);
                      else if (u.length < I || void 0 === l || s > e[l].duration) {
                        const n = t.name,
                          o = t.context;
                        n && o && (l && Object.keys(e).length >= I && delete e[l], e[r] = {
                          routeName: n,
                          duration: s,
                          parentContext: o,
                          user: d,
                          activeTransaction: a,
                          replayId: i,
                          startTime: c
                        })
                      }
                    }
                  }))
                };
                (0, y.wv)("event", n), (0, y.wv)("first-input", n)
              }(c, m), (0, b.Qb)({
                traceFetch: _,
                traceXHR: w,
                tracePropagationTargets: A,
                shouldCreateSpanForRequest: x,
                enableHTTPTimings: R
              })
            },
            options: n
          }
        };

      function k(e, t) {
        if (!e.emit) return;
        e.emit("startPageLoadSpan", t);
        const n = (0, c.Bk)();
        return "pageload" === (n && (0, i.et)(n).op) ? n : void 0
      }

      function E(e, t) {
        if (!e.emit) return;
        e.emit("startNavigationSpan", t);
        const n = (0, c.Bk)();
        return "navigation" === (n && (0, i.et)(n).op) ? n : void 0
      }

      function x(e) {
        const t = (0, m.NX)(`meta[name=${e}]`);
        return t ? t.getAttribute("content") : void 0
      }
      const I = 10;

      function C(e) {
        const t = e.attributes && e.attributes[a.i_],
          n = e.data && e.data[a.i_],
          r = e.metadata && e.metadata.source;
        return t || n || r
      }
    },
    38307: (e, t, n) => {
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
    38548: (e, t, n) => {
      "use strict";
      n.d(t, {
        P: () => d,
        n: () => l
      });
      var r = n(13903),
        o = n(6846),
        s = n(31127),
        i = n(79150);
      const a = s.OW,
        c = "ReportingObserver",
        u = new WeakMap,
        l = (0, o._C)((function() {
          const e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).types || ["crash", "deprecation", "intervention"];

          function t(e) {
            if (u.has((0, r.KU)()))
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
            name: c,
            setupOnce() {
              (0, i.vQ)() && new a.ReportingObserver(t, {
                buffered: !0,
                types: e
              }).observe()
            },
            setup(e) {
              u.set(e, !0)
            }
          }
        })),
        d = (0, o.F)(c, l)
    },
    39584: (e, t, n) => {
      "use strict";
      n.d(t, {
        BP: () => d
      });
      var r = n(58970),
        o = n(85802),
        s = n(99737),
        i = n(14);
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
    40418: (e, t, n) => {
      "use strict";
      n.d(t, {
        N: () => a
      });
      var r = n(85802),
        o = n(49361),
        s = n(55468);

      function i(e, t) {
        let n;
        return (0, r.yH)(e, ((e, r) => (t.includes(r) && (n = Array.isArray(e) ? e[1] : void 0), !!n))), n
      }

      function a(e, t) {
        return n => {
          const a = e(n),
            c = new Map;

          function u(t, r) {
            const a = r ? `${t}:${r}` : t;
            let u = c.get(a);
            if (!u) {
              const l = (0, o.hH)(t);
              if (!l) return;
              const d = (0, s.Z)(l, n.tunnel);
              u = r ? function(e, t) {
                return n => {
                  const r = e(n);
                  return {
                    ...r,
                    send: async e => {
                      const n = i(e, ["event", "transaction", "profile", "replay_event"]);
                      return n && (n.release = t), r.send(e)
                    }
                  }
                }
              }(e, r)({
                ...n,
                url: d
              }) : e({
                ...n,
                url: d
              }), c.set(a, u)
            }
            return [t, u]
          }
          return {
            send: async function(e) {
              const n = t({
                envelope: e,
                getEvent: function(t) {
                  const n = t && t.length ? t : ["event"];
                  return i(e, n)
                }
              }).map((e => "string" == typeof e ? u(e, void 0) : u(e.dsn, e.release))).filter((e => !!e));
              return 0 === n.length && n.push(["", a]), (await Promise.all(n.map((t => {
                let [n, o] = t;
                return o.send(function(e, t) {
                  return (0, r.h4)(t ? {
                    ...e[0],
                    dsn: t
                  } : e[0], e[1])
                }(e, n))
              }))))[0]
            },
            flush: async function(e) {
              const t = [await a.flush(e)];
              for (const [, n] of c) t.push(await n.flush(e));
              return t.every((e => e))
            }
          }
        }
      }
    },
    41660: (e, t, n) => {
      "use strict";
      n.d(t, {
        Z7: () => s,
        nc: () => i
      });
      var r = n(18310),
        o = n(62451);

      function s(e) {
        return (e || (0, o.BF)()).getScope().getTransaction()
      }
      const i = r.nc
    },
    41707: (e, t, n) => {
      "use strict";
      n.d(t, {
        Xr: () => a,
        gt: () => i,
        nC: () => s,
        xv: () => o
      });
      var r = n(88810);

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
    42780: (e, t, n) => {
      "use strict";
      n.d(t, {
        l$: () => u,
        t7: () => l
      });
      var r = n(6846),
        o = n(31127),
        s = n(96973),
        i = n(50950);
      const a = o.OW,
        c = "ContextLines",
        u = (0, r._C)((function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = null != e.frameContextLines ? e.frameContextLines : 7;
          return {
            name: c,
            setupOnce() {},
            processEvent: e => function(e, t) {
              const n = a.document,
                r = a.location && (0, s.f)(a.location.href);
              if (!n || !r) return e;
              const o = e.exception && e.exception.values;
              if (!o || !o.length) return e;
              const c = n.documentElement.innerHTML;
              if (!c) return e;
              const u = ["<!DOCTYPE html>", "<html>", ...c.split("\n"), "</html>"];
              return o.forEach((e => {
                const n = e.stacktrace;
                n && n.frames && (n.frames = n.frames.map((e => function(e, t, n, r) {
                  return e.filename === n && e.lineno && t.length ? ((0, i.db)(t, e, r), e) : e
                }(e, u, r, t))))
              })), e
            }(e, t)
          }
        })),
        l = (0, r.F)(c, u)
    },
    42869: (e, t, n) => {
      "use strict";
      n.d(t, {
        Rg: () => u,
        e2: () => c
      });
      var r = n(53825),
        o = n(50950),
        s = n(90714),
        i = n(87266),
        a = n(19063);

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
    44475: (e, t, n) => {
      "use strict";
      n.d(t, {
        l: () => c,
        p: () => a
      });
      var r = n(6846),
        o = n(27103),
        s = n(32226);
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
    45547: (e, t, n) => {
      "use strict";
      n.d(t, {
        F: () => u,
        D: () => c
      });
      var r = n(6846);
      const o = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;

      function s() {
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

      function i(e) {
        let t = 0;
        for (; t < e.length && "" === e[t]; t++);
        let n = e.length - 1;
        for (; n >= 0 && "" === e[n]; n--);
        return t > n ? [] : e.slice(t, n - t + 1)
      }
      const a = "RewriteFrames",
        c = (0, r._C)((function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = e.root,
            n = e.prefix || "app:///",
            r = e.iteratee || (e => {
              if (!e.filename) return e;
              const r = /^[a-zA-Z]:\\/.test(e.filename) || e.filename.includes("\\") && !e.filename.includes("/"),
                a = /^\//.test(e.filename);
              if (r || a) {
                const a = r ? e.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : e.filename,
                  c = t ? function(e, t) {
                    e = s(e).slice(1), t = s(t).slice(1);
                    const n = i(e.split("/")),
                      r = i(t.split("/")),
                      o = Math.min(n.length, r.length);
                    let a = o;
                    for (let e = 0; e < o; e++)
                      if (n[e] !== r[e]) {
                        a = e;
                        break
                      } let c = [];
                    for (let e = a; e < n.length; e++) c.push("..");
                    return c = c.concat(r.slice(a)), c.join("/")
                  }(t, a) : function(e) {
                    let t = function(e) {
                      const t = e.length > 1024 ? `<truncated>${e.slice(-1024)}` : e,
                        n = o.exec(t);
                      return n ? n.slice(1) : []
                    }(e)[2];
                    return t
                  }(a);
                e.filename = `${n}${c}`
              }
              return e
            });
          return {
            name: a,
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
        u = (0, r.F)(a, c)
    },
    45620: (e, t, n) => {
      "use strict";
      n.d(t, {
        T2: () => a,
        XW: () => s,
        xg: () => i
      });
      var r, o = n(88810);

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
    46105: (e, t, n) => {
      "use strict";
      n.d(t, {
        jB: () => l,
        lG: () => c,
        lb: () => u
      });
      var r = n(31127),
        o = n(45620),
        s = n(58970),
        i = n(88810),
        a = n(14);

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
    46237: (e, t, n) => {
      "use strict";
      n.d(t, {
        li: () => m,
        mG: () => h
      });
      var r = n(50950),
        o = n(55343),
        s = n(41707),
        i = n(31127),
        a = n(83853),
        c = n(93637),
        u = n(46105),
        l = n(98696),
        d = n(42869),
        p = n(19063);

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
          T = (0, l.m6)().getScopeData();
        if (g) {
          const e = g.getScopeData();
          (0, d.Rg)(T, e)
        }
        if (S) {
          const e = S.getScopeData();
          (0, d.Rg)(T, e)
        }
        const k = [...n.attachments || [], ...T.attachments];
        k.length && (n.attachments = k), (0, d.e2)(_, T);
        const E = [...w, ...(0, u.lG)(), ...T.eventProcessors];
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
    48537: (e, t, n) => {
      "use strict";
      n.d(t, {
        Z: () => h
      });
      var r = n(53825),
        o = n(58970),
        s = n(14),
        i = n(62451),
        a = n(52709),
        c = n(49295),
        u = n(19063),
        l = n(90714),
        d = n(81181),
        p = n(94756);
      class h extends d.L {
        constructor(e, t) {
          super(e), this._contexts = {}, this._hub = t || (0, i.BF)(), this._name = e.name || "", this._metadata = {
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
            ...this._attributes[c.i_] && {
              source: this._attributes[c.i_]
            },
            ...this._attributes[c.sy] && {
              sampleRate: this._attributes[c.sy]
            }
          }
        }
        set metadata(e) {
          this._metadata = e
        }
        setName(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "custom";
          this._name = e, this.setAttribute(c.i_, t)
        }
        updateName(e) {
          return this._name = e, this
        }
        initSpanRecorder() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
          this.spanRecorder || (this.spanRecorder = new d.l(e)), this.spanRecorder.add(this)
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
          const t = (0, u.cI)(e),
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
          return (0, l.k)(this)
        }
        setHub(e) {
          this._hub = e
        }
        getProfileId() {
          if (void 0 !== this._contexts && void 0 !== this._contexts.profile) return this._contexts.profile.profile_id
        }
        _finishTransaction(e) {
          if (void 0 !== this._endTime) return;
          this._name || (s.T && o.vF.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>"), super.end(e);
          const t = this._hub.getClient();
          if (t && t.emit && t.emit("finishTransaction", this), !0 !== this._sampled) return s.T && o.vF.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."), void(t && t.recordDroppedEvent("sample_rate", "transaction"));
          const n = this.spanRecorder ? this.spanRecorder.spans.filter((e => e !== this && (0, u.et)(e).timestamp)) : [];
          if (this._trimEnd && n.length > 0) {
            const e = n.map((e => (0, u.et)(e).timestamp)).filter(Boolean);
            this._endTime = e.reduce(((e, t) => e > t ? e : t))
          }
          const {
            scope: i,
            isolationScope: c
          } = (0, p.Lb)(this), {
            metadata: d
          } = this, {
            source: h
          } = d, f = {
            contexts: {
              ...this._contexts,
              trace: (0, u.kX)(this)
            },
            spans: n,
            start_timestamp: this._startTime,
            tags: this.tags,
            timestamp: this._endTime,
            transaction: this._name,
            type: "transaction",
            sdkProcessingMetadata: {
              ...d,
              capturedSpanScope: i,
              capturedSpanIsolationScope: c,
              ...(0, r.Ce)({
                dynamicSamplingContext: (0, l.k)(this)
              })
            },
            _metrics_summary: (0, a.g)(this),
            ...h && {
              transaction_info: {
                source: h
              }
            }
          };
          return Object.keys(this._measurements).length > 0 && (s.T && o.vF.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)), f.measurements = this._measurements), s.T && o.vF.log(`[Tracing] Finishing ${this.op} transaction: ${this._name}.`), f
        }
      }
    },
    49295: (e, t, n) => {
      "use strict";
      n.d(t, {
        E1: () => a,
        JD: () => i,
        i_: () => r,
        sy: () => o,
        uT: () => s
      });
      const r = "sentry.source",
        o = "sentry.sample_rate",
        s = "sentry.op",
        i = "sentry.origin",
        a = "profile_id"
    },
    49361: (e, t, n) => {
      "use strict";
      n.d(t, {
        AD: () => u,
        SB: () => i,
        hH: () => a
      });
      var r = n(54698),
        o = n(58970);
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
    50138: (e, t) => {
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
    50583: function(e, t, n) {
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
      const i = s(n(94)),
        a = n(34120),
        c = n(54122),
        u = n(34750),
        l = n(85414),
        d = n(63054),
        p = n(99990);
      var h = n(54014);
      Object.defineProperty(t, "SpanStatus", {
        enumerable: !0,
        get: function() {
          return h.SpanStatus
        }
      });
      var f = n(34120);
      Object.defineProperty(t, "withProfiler", {
        enumerable: !0,
        get: function() {
          return f.withProfiler
        }
      });
      var m = n(34120);
      Object.defineProperty(t, "createSentryReduxEnhancer", {
        enumerable: !0,
        get: function() {
          return m.createReduxEnhancer
        }
      });
      var g = n(94);
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
      var v = n(54122);
      Object.defineProperty(t, "getCurrentHub", {
        enumerable: !0,
        get: function() {
          return v.getCurrentHub
        }
      });
      var y = n(99990);
      Object.defineProperty(t, "withSentryRouting", {
        enumerable: !0,
        get: function() {
          return y.withSentryRouting
        }
      });
      var _ = n(57226);
      Object.defineProperty(t, "createSentryMiddleware", {
        enumerable: !0,
        get: function() {
          return _.createSentryMiddleware
        }
      });
      var b = n(50138);
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
      var S = n(85414);
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
      var w = n(63054);

      function T(e) {
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
          tracesSampler: e.sentryConfig.performanceTracing.sampler,
          tracesSampleRate: e.sentryConfig.performanceTracing.enabled ? e.sentryConfig.performanceTracing.sampleRate : 0,
          transport: e.multiplexedTransport ? i.makeMultiplexedTransport(o, e.multiplexedTransport) : o,
          stackParser: c.defaultStackParser,
          replaysSessionSampleRate: e.sentryConfig.sessionReplay.enabled ? e.sentryConfig.sessionReplay.replaysSessionSampleRate : 0,
          replaysOnErrorSampleRate: e.sentryConfig.sessionReplay.enabled ? e.sentryConfig.sessionReplay.replaysOnErrorSampleRate : 0
        }
      }

      function k(e) {
        const t = e instanceof Error ? e : new Error(e);
        return i.captureException(t)
      }

      function E(e, t) {
        return i.captureMessage(e, t)
      }

      function x(e) {
        return i.captureEvent(e)
      }

      function I(e) {
        return i.addBreadcrumb(e)
      }

      function C(e, t) {
        return i.setContext(e, t)
      }

      function R(e) {
        return i.setExtras(e)
      }

      function M(e) {
        return i.setTags(e)
      }

      function O(e, t) {
        return i.setExtra(e, t)
      }

      function A(e, t) {
        return i.setTag(e, t)
      }

      function N(e) {
        return i.setUser(e)
      }
      Object.defineProperty(t, "Severity", {
        enumerable: !0,
        get: function() {
          return w.Severity
        }
      }), t.initSentry = function(e) {
        const t = T(e);
        return (0, p.addGlobalTransactionFilters)(), (0, c.init)(t)
      }, t.browserClient = function(e) {
        const t = T(e);
        return new c.BrowserClient(t)
      }, t.configureScope = function(e) {
        i.configureScope((t => {
          e(t)
        }))
      }, t.captureException = k, t.captureMessage = E, t.captureEvent = x, t.addBreadcrumb = I, t.setContext = C, t.setExtras = R, t.setTags = M, t.setExtra = O, t.setTag = A, t.setUser = N, t.startTransaction = function(e, t) {
        return i.startTransaction(e, t)
      }, t.getCurrentTransaction = function() {
        var e, t;
        return null === (t = null === (e = (0, c.getCurrentHub)()) || void 0 === e ? void 0 : e.getScope()) || void 0 === t ? void 0 : t.getTransaction()
      };
      const D = {
        [d.RpcMethod.captureException]: k,
        [d.RpcMethod.captureMessage]: E,
        [d.RpcMethod.captureEvent]: x,
        [d.RpcMethod.addBreadcrumb]: I,
        [d.RpcMethod.setContext]: C,
        [d.RpcMethod.setExtras]: R,
        [d.RpcMethod.setTags]: M,
        [d.RpcMethod.setExtra]: O,
        [d.RpcMethod.setTag]: A,
        [d.RpcMethod.setUser]: N
      };
      window.addEventListener("message", (e => {
        try {
          const t = JSON.parse(e.data);
          D[t.method] && D[t.method] instanceof Function && D[t.method].apply(this, t.args)
        } catch (e) {}
      }))
    },
    50950: (e, t, n) => {
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
      var r = n(53825),
        o = n(41707),
        s = n(31127);

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
    52077: (e, t, n) => {
      "use strict";
      n.d(t, {
        i: () => c
      });
      var r = n(41660),
        o = n(19063),
        s = n(58970),
        i = n(22561),
        a = n(6067);

      function c() {
        a.j.document ? a.j.document.addEventListener("visibilitychange", (() => {
          const e = (0, r.Z7)();
          if (a.j.document.hidden && e) {
            const t = "cancelled",
              {
                op: n,
                status: r
              } = (0, o.et)(e);
            i.T && s.vF.log(`[Tracing] Transaction: ${t} -> since tab moved to the background, op: ${n}`), r || e.setStatus(t), e.setTag("visibilitychange", "document.hidden"), e.end()
          }
        })) : i.T && s.vF.warn("[Tracing] Could not set up background tab detection due to lack of global document")
      }
    },
    52522: (e, t) => {
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
    52592: (e, t, n) => {
      "use strict";
      n.d(t, {
        $N: () => c,
        Hd: () => i,
        NX: () => u,
        xE: () => l
      });
      var r = n(88810);
      const o = (0, n(31127).VZ)(),
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
    52709: (e, t, n) => {
      "use strict";
      n.d(t, {
        g: () => a,
        r: () => c
      });
      var r = n(53825),
        o = n(94756);
      let s;

      function i(e) {
        return s ? s.get(e) : void 0
      }

      function a(e) {
        const t = i(e);
        if (!t) return;
        const n = {};
        for (const [, [e, o]] of t) n[e] || (n[e] = []), n[e].push((0, r.Ce)(o));
        return n
      }

      function c(e, t, n, r, a, c) {
        const u = (0, o.Bk)();
        if (u) {
          const o = i(u) || new Map,
            l = `${e}:${t}@${r}`,
            d = o.get(c);
          if (d) {
            const [, e] = d;
            o.set(c, [l, {
              min: Math.min(e.min, n),
              max: Math.max(e.max, n),
              count: e.count += 1,
              sum: e.sum += n,
              tags: e.tags
            }])
          } else o.set(c, [l, {
            min: n,
            max: n,
            count: 1,
            sum: n,
            tags: a
          }]);
          s || (s = new WeakMap), s.set(u, o)
        }
      }
    },
    53335: (e, t, n) => {
      "use strict";
      n.d(t, {
        _: () => i,
        y: () => a
      });
      var r = n(6846),
        o = n(58970);
      const s = "Debug",
        i = (0, r._C)((function() {
          const e = {
            debugger: !1,
            stringify: !1,
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          };
          return {
            name: s,
            setupOnce() {},
            setup(t) {
              t.on && t.on("beforeSendEvent", ((t, n) => {
                e.debugger, (0, o.pq)((() => {
                  e.stringify ? (console.log(JSON.stringify(t, null, 2)), n && Object.keys(n).length && console.log(JSON.stringify(n, null, 2))) : (console.log(t), n && Object.keys(n).length && console.log(n))
                }))
              }))
            }
          }
        })),
        a = (0, r.F)(s, i)
    },
    53711: (e, t, n) => {
      "use strict";
      n.d(t, {
        T: () => r
      });
      const r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
    },
    53825: (e, t, n) => {
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
      var r = n(52592),
        o = n(54698),
        s = n(88810),
        i = n(58970),
        a = n(41707);

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
    54014: (e, t) => {
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
    54122: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        Breadcrumbs: () => D.B,
        BrowserClient: () => I.y,
        BrowserProfilingIntegration: () => Js,
        BrowserTracing: () => hs,
        Dedupe: () => F.U,
        Feedback: () => Vo,
        FunctionToString: () => s.$,
        GlobalHandlers: () => L.R,
        HttpContext: () => P._,
        Hub: () => i.YZ,
        InboundFilters: () => a.H,
        Integrations: () => Ys,
        LinkedErrors: () => j.l,
        ModuleMetadata: () => c.Y,
        Replay: () => Dr,
        ReplayCanvas: () => fo,
        SDK_VERSION: () => u.M,
        SEMANTIC_ATTRIBUTE_SENTRY_OP: () => l.uT,
        SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN: () => l.JD,
        SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE: () => l.sy,
        SEMANTIC_ATTRIBUTE_SENTRY_SOURCE: () => l.i_,
        Scope: () => d.HG,
        TryCatch: () => B.h,
        WINDOW: () => x.jf,
        addBreadcrumb: () => p.ZQ,
        addEventProcessor: () => h.S,
        addGlobalEventProcessor: () => f.lb,
        addIntegration: () => m.Q8,
        addTracingExtensions: () => g.U,
        breadcrumbsIntegration: () => D.F,
        browserApiErrorsIntegration: () => B.G,
        browserProfilingIntegration: () => Ks,
        browserTracingIntegration: () => gs.dp,
        captureConsoleIntegration: () => Yo.q,
        captureEvent: () => p.r,
        captureException: () => p.Cp,
        captureMessage: () => p.wd,
        captureSession: () => p.J5,
        captureUserFeedback: () => N.lo,
        chromeStackLineParser: () => M.Yj,
        close: () => p.VN,
        configureScope: () => p.PN,
        contextLinesIntegration: () => Xo.l$,
        continueTrace: () => v.V4,
        createTransport: () => y.o,
        createUserFeedbackEnvelope: () => A.L,
        debugIntegration: () => Qo._,
        dedupeIntegration: () => Zo.sn,
        defaultIntegrations: () => N.xg,
        defaultRequestInstrumentationOptions: () => ls.h$,
        defaultStackLineParsers: () => M.c9,
        defaultStackParser: () => M.lG,
        endSession: () => p.ky,
        eventFromException: () => O.u,
        eventFromMessage: () => O.qv,
        exceptionFromError: () => O.K8,
        extraErrorDataIntegration: () => es.X,
        extractTraceparentData: () => _.nc,
        feedbackIntegration: () => Jo,
        flush: () => p.bX,
        forceLoad: () => N.w7,
        functionToStringIntegration: () => s.Z,
        geckoStackLineParser: () => M.dY,
        getActiveSpan: () => v.Bk,
        getActiveTransaction: () => _.Z7,
        getClient: () => p.KU,
        getCurrentHub: () => i.BF,
        getCurrentScope: () => p.o5,
        getDefaultIntegrations: () => N.nI,
        getHubFromCarrier: () => i.Me,
        getReplay: () => Lr,
        getSpanStatusFromHttpCode: () => b.AJ,
        globalHandlersIntegration: () => L.L,
        httpClientIntegration: () => ts.c,
        httpContextIntegration: () => P.M,
        inboundFiltersIntegration: () => a.D,
        init: () => N.Ts,
        instrumentOutgoingRequests: () => ls.Qb,
        isInitialized: () => p.Dp,
        lastEventId: () => p.Q,
        linkedErrorsIntegration: () => j.p,
        makeBrowserOfflineTransport: () => Ss,
        makeFetchTransport: () => C._,
        makeMain: () => i.gM,
        makeMultiplexedTransport: () => S.N,
        makeXHRTransport: () => R.u,
        metrics: () => w.qd,
        moduleMetadataIntegration: () => c.Q,
        onLoad: () => N.kF,
        onProfilingStartRouteTransaction: () => qs,
        opera10StackLineParser: () => M.Q_,
        opera11StackLineParser: () => M.Vv,
        parameterize: () => T.y,
        replayCanvasIntegration: () => ho,
        replayIntegration: () => Nr,
        reportingObserverIntegration: () => ns.n,
        rewriteFramesIntegration: () => rs.D,
        sendFeedback: () => Po,
        sessionTimingIntegration: () => os.Z,
        setContext: () => p.o,
        setCurrentClient: () => k.B,
        setExtra: () => p.l7,
        setExtras: () => p.cx,
        setHttpStatus: () => b.N8,
        setMeasurement: () => E.X,
        setTag: () => p.NA,
        setTags: () => p.Wt,
        setUser: () => p.gV,
        showReportDialog: () => N.mn,
        spanStatusfromHttpCode: () => b.o6,
        startBrowserTracingNavigationSpan: () => gs.Nt,
        startBrowserTracingPageLoadSpan: () => gs.Sx,
        startInactiveSpan: () => v.Uk,
        startSession: () => p.J0,
        startSpan: () => v.Lk,
        startSpanManual: () => v.nV,
        startTransaction: () => p.nb,
        trace: () => v.uP,
        winjsStackLineParser: () => M.$2,
        withActiveSpan: () => p.hb,
        withIsolationScope: () => p.rB,
        withScope: () => p.v4,
        wrap: () => N.LV
      });
      var r = {};
      n.r(r), n.d(r, {
        Breadcrumbs: () => D.B,
        Dedupe: () => F.U,
        GlobalHandlers: () => L.R,
        HttpContext: () => P._,
        LinkedErrors: () => j.l,
        TryCatch: () => B.h
      });
      var o = n(94),
        s = n(12744),
        i = n(62451),
        a = n(30908),
        c = n(73844),
        u = n(21244),
        l = n(49295),
        d = n(98696),
        p = n(13903),
        h = n(84838),
        f = n(46105),
        m = n(6846),
        g = n(65037),
        v = n(94756),
        y = n(9394),
        _ = n(41660),
        b = n(38307),
        S = n(40418),
        w = n(23832),
        T = n(89267),
        k = n(19520),
        E = n(35153),
        x = n(74652),
        I = n(88840),
        C = n(24837),
        R = n(2522),
        M = n(94632),
        O = n(32226),
        A = n(18789),
        N = n(86253),
        D = n(93143),
        F = n(58638),
        L = n(20451),
        P = n(96386),
        j = n(44475),
        B = n(68653);

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
      var U = n(22557),
        H = n(46237),
        z = n(19063),
        q = n(31127),
        W = n(83853),
        G = n(53825),
        K = n(52592),
        J = n(55343),
        V = n(58970),
        Y = n(50950),
        X = n(54474),
        Q = n(41707),
        Z = n(64804),
        ee = n(91036),
        te = n(25684),
        ne = n(85802),
        re = n(99737),
        oe = n(33042);

      function se() {
        return "undefined" != typeof window && (!(0, oe.wD)() || void 0 !== q.OW.process && "renderer" === q.OW.process.type)
      }
      var ie = n(59521);
      const ae = q.OW,
        ce = "sentryReplaySession",
        ue = "Unable to send Replay",
        le = 5e3,
        de = 5500,
        pe = 15e4,
        he = 5e3,
        fe = 2e7,
        me = 4999,
        ge = 36e5;

      function ve(e) {
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
      var ye;

      function _e(e) {
        const t = ve([e, "optionalAccess", e => e.host]);
        return Boolean(ve([t, "optionalAccess", e => e.shadowRoot]) === e)
      }

      function be(e) {
        return "[object ShadowRoot]" === Object.prototype.toString.call(e)
      }

      function Se(e) {
        try {
          const n = e.rules || e.cssRules;
          return n ? ((t = Array.from(n, we).join("")).includes(" background-clip: text;") && !t.includes(" -webkit-background-clip: text;") && (t = t.replace(" background-clip: text;", " -webkit-background-clip: text; background-clip: text;")), t) : null
        } catch (e) {
          return null
        }
        var t
      }

      function we(e) {
        let t;
        if (function(e) {
            return "styleSheet" in e
          }(e)) try {
          t = Se(e.styleSheet) || function(e) {
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
      }(ye || (ye = {}));
      class Te {
        constructor() {
          this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
        }
        getId(e) {
          if (!e) return -1;
          return null != (t = ve([this, "access", e => e.getMeta, "call", t => t(e), "optionalAccess", e => e.id])) ? t : -1;
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

      function ke(e) {
        let {
          maskInputOptions: t,
          tagName: n,
          type: r
        } = e;
        return "OPTION" === n && (n = "SELECT"), Boolean(t[n.toLowerCase()] || r && t[r] || "password" === r || "INPUT" === n && !r && t.text)
      }

      function Ee(e) {
        let {
          isMasked: t,
          element: n,
          value: r,
          maskInputFn: o
        } = e, s = r || "";
        return t ? (o && (s = o(s, n)), "*".repeat(s.length)) : s
      }

      function xe(e) {
        return e.toLowerCase()
      }

      function Ie(e) {
        return e.toUpperCase()
      }
      const Ce = "__rrweb_original__";

      function Re(e) {
        const t = e.type;
        return e.hasAttribute("data-rr-is-password") ? "password" : t ? xe(t) : null
      }

      function Me(e, t, n) {
        return "INPUT" !== t || "radio" !== n && "checkbox" !== n ? e.value : e.getAttribute("value") || ""
      }
      let Oe = 1;
      const Ae = new RegExp("[^a-z0-9-_:]");

      function Ne() {
        return Oe++
      }
      let De, Fe;
      const Le = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        Pe = /^(?:[a-z+]+:)?\/\//i,
        je = /^www\..*/i,
        Be = /^(data:)([^,]*),(.*)/i;

      function $e(e, t) {
        return (e || "").replace(Le, ((e, n, r, o, s, i) => {
          const a = r || s || i,
            c = n || o || "";
          if (!a) return e;
          if (Pe.test(a) || je.test(a)) return `url(${c}${a}${c})`;
          if (Be.test(a)) return `url(${c}${a}${c})`;
          if ("/" === a[0]) return `url(${c}${function(e){let t="";return t=e.indexOf("//")>-1?e.split("/").slice(0,3).join("/"):e.split("/")[0],t=t.split("?")[0],t}(t)+a}${c})`;
          const u = t.split("/"),
            l = a.split("/");
          u.pop();
          for (const e of l) "." !== e && (".." === e ? u.pop() : u.push(e));
          return `url(${c}${u.join("/")}${c})`
        }))
      }
      const Ue = /^[^ \t\n\r\u000c]+/,
        He = /^[, \t\n\r\u000c]+/;

      function ze(e, t) {
        if (!t || "" === t.trim()) return t;
        const n = e.createElement("a");
        return n.href = t, n.href
      }

      function qe() {
        const e = document.createElement("a");
        return e.href = "", e.href
      }

      function We(e, t, n, r, o, s) {
        return r ? "src" === n || "href" === n && ("use" !== t || "#" !== r[0]) || "xlink:href" === n && "#" !== r[0] ? ze(e, r) : "background" !== n || "table" !== t && "td" !== t && "th" !== t ? "srcset" === n ? function(e, t) {
          if ("" === t.trim()) return t;
          let n = 0;

          function r(e) {
            let r;
            const o = e.exec(t.substring(n));
            return o ? (r = o[0], n += r.length, r) : ""
          }
          const o = [];
          for (; r(He), !(n >= t.length);) {
            let s = r(Ue);
            if ("," === s.slice(-1)) s = ze(e, s.substring(0, s.length - 1)), o.push(s);
            else {
              let r = "";
              s = ze(e, s);
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
        }(e, r) : "style" === n ? $e(r, qe()) : "object" === t && "data" === n ? ze(e, r) : "function" == typeof s ? s(n, r, o) : r : ze(e, r) : r
      }

      function Ge(e, t, n) {
        return ("video" === e || "audio" === e) && "autoplay" === t
      }

      function Ke(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0,
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        return e ? e.nodeType !== e.ELEMENT_NODE || r > n ? -1 : t(e) ? r : Ke(e.parentNode, t, n, r + 1) : -1
      }

      function Je(e, t) {
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

      function Ve(e, t, n, r, o, s) {
        try {
          const i = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
          if (null === i) return !1;
          if ("INPUT" === i.tagName) {
            const e = i.getAttribute("autocomplete");
            if (["current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc"].includes(e)) return !0
          }
          let a = -1,
            c = -1;
          if (s) {
            if (c = Ke(i, Je(r, o)), c < 0) return !0;
            a = Ke(i, Je(t, n), c >= 0 ? c : 1 / 0)
          } else {
            if (a = Ke(i, Je(t, n)), a < 0) return !1;
            c = Ke(i, Je(r, o), a >= 0 ? a : 1 / 0)
          }
          return a >= 0 ? !(c >= 0) || a <= c : !(c >= 0 || !s)
        } catch (e) {}
        return !!s
      }

      function Ye(e) {
        return null == e ? "" : e.toLowerCase()
      }

      function Xe(e, t) {
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
          onIframeLoad: T,
          iframeLoadTimeout: k = 5e3,
          onStylesheetLoad: E,
          stylesheetLoadTimeout: x = 5e3,
          keepIframeSrcFn: I = () => !1,
          newlyAddedElement: C = !1
        } = t;
        let {
          preserveWhiteSpace: R = !0
        } = t;
        const M = function(e, t) {
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
                type: ye.Document,
                childNodes: [],
                compatMode: e.compatMode
              } : {
                type: ye.Document,
                childNodes: []
              };
            case e.DOCUMENT_TYPE_NODE:
              return {
                type: ye.DocumentType, name: e.name, publicId: e.publicId, systemId: e.systemId, rootId: w
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
                  const t = xe(e.tagName);
                  return Ae.test(t) ? "div" : t
                }(e);
                let T = {};
                const k = e.attributes.length;
                for (let t = 0; t < k; t++) {
                  const r = e.attributes[t];
                  r.name && !Ge(w, r.name, r.value) && (T[r.name] = We(n, w, xe(r.name), r.value, e, c))
                }
                if ("link" === w && i) {
                  const t = Array.from(n.styleSheets).find((t => t.href === e.href));
                  let r = null;
                  t && (r = Se(t)), r && (delete T.rel, delete T.href, T._cssText = $e(r, t.href))
                }
                if ("style" === w && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
                  const t = Se(e.sheet);
                  t && (T._cssText = $e(t, qe()))
                }
                if ("input" === w || "textarea" === w || "select" === w || "option" === w) {
                  const t = e,
                    n = Re(t),
                    r = Me(t, Ie(w), n),
                    o = t.checked;
                  if ("submit" !== n && "button" !== n && r) {
                    const e = Ve(t, v, _, y, b, ke({
                      type: n,
                      tagName: Ie(w),
                      maskInputOptions: a
                    }));
                    T.value = Ee({
                      isMasked: e,
                      element: t,
                      value: r,
                      maskInputFn: u
                    })
                  }
                  o && (T.checked = o)
                }
                if ("option" === w && (e.selected && !a.select ? T.selected = !0 : delete T.selected), "canvas" === w && p)
                  if ("2d" === e.__context)(function(e) {
                    const t = e.getContext("2d");
                    if (!t) return !0;
                    for (let n = 0; n < e.width; n += 50)
                      for (let r = 0; r < e.height; r += 50) {
                        const o = t.getImageData,
                          s = Ce in o ? o[Ce] : o;
                        if (new Uint32Array(s.call(t, n, r, Math.min(50, e.width - n), Math.min(50, e.height - r)).data.buffer).some((e => 0 !== e))) return !1
                      }
                    return !0
                  })(e) || (T.rr_dataURL = e.toDataURL(l.type, l.quality));
                  else if (!("__context" in e)) {
                  const t = e.toDataURL(l.type, l.quality),
                    n = document.createElement("canvas");
                  n.width = e.width, n.height = e.height, t !== n.toDataURL(l.type, l.quality) && (T.rr_dataURL = t)
                }
                if ("img" === w && d) {
                  De || (De = n.createElement("canvas"), Fe = De.getContext("2d"));
                  const t = e,
                    r = t.crossOrigin;
                  t.crossOrigin = "anonymous";
                  const o = () => {
                    t.removeEventListener("load", o);
                    try {
                      De.width = t.naturalWidth, De.height = t.naturalHeight, Fe.drawImage(t, 0, 0), T.rr_dataURL = De.toDataURL(l.type, l.quality)
                    } catch (e) {
                      console.warn(`Cannot inline img src=${t.currentSrc}! Error: ${e}`)
                    }
                    r ? T.crossOrigin = r : t.removeAttribute("crossorigin")
                  };
                  t.complete && 0 !== t.naturalWidth ? o() : t.addEventListener("load", o)
                }
                if ("audio" !== w && "video" !== w || (T.rr_mediaState = e.paused ? "paused" : "played", T.rr_mediaCurrentTime = e.currentTime), f || (e.scrollLeft && (T.rr_scrollLeft = e.scrollLeft), e.scrollTop && (T.rr_scrollTop = e.scrollTop)), S) {
                  const {
                    width: t,
                    height: n
                  } = e.getBoundingClientRect();
                  T = {
                    class: T.class,
                    rr_width: `${t}px`,
                    rr_height: `${n}px`
                  }
                }
                let E;
                "iframe" !== w || h(T.src) || (e.contentDocument || (T.rr_src = T.src), delete T.src);
                try {
                  customElements.get(w) && (E = !0)
                } catch (e) {}
                return {
                  type: ye.Element,
                  tagName: w,
                  attributes: T,
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
                    e.nextSibling || e.previousSibling || ve([e, "access", e => e.parentNode, "access", e => e.sheet, "optionalAccess", e => e.cssRules]) && (p = Se(e.parentNode.sheet))
                  } catch (t) {
                    console.warn(`Cannot get CSS styles from text's parentNode. Error: ${t}`, e)
                  }
                  p = $e(p, qe())
                }
                f && (p = "SCRIPT_PLACEHOLDER");
                const g = Ve(e, r, s, o, i, n);
                return h || f || m || !p || !g || (p = a ? a(p, e.parentElement) : p.replace(/[\S]/g, "*")), m && p && (c.textarea || g) && (p = u ? u(p, e.parentNode) : p.replace(/[\S]/g, "*")), "OPTION" === d && p && (p = Ee({
                  isMasked: Ve(e, r, s, o, i, ke({
                    type: null,
                    tagName: d,
                    maskInputOptions: c
                  })),
                  element: e,
                  value: p,
                  maskInputFn: u
                })), {
                  type: ye.Text,
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
                type: ye.CDATA, textContent: "", rootId: w
              };
            case e.COMMENT_NODE:
              return {
                type: ye.Comment, textContent: e.textContent || "", rootId: w
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
          keepIframeSrcFn: I,
          newlyAddedElement: C
        });
        if (!M) return console.warn(e, "not serialized"), null;
        let O;
        O = r.hasNode(e) ? r.getId(e) : ! function(e, t) {
          if (t.comment && e.type === ye.Comment) return !0;
          if (e.type === ye.Element) {
            if (t.script && ("script" === e.tagName || "link" === e.tagName && ("preload" === e.attributes.rel || "modulepreload" === e.attributes.rel) && "script" === e.attributes.as || "link" === e.tagName && "prefetch" === e.attributes.rel && "string" == typeof e.attributes.href && e.attributes.href.endsWith(".js"))) return !0;
            if (t.headFavicon && ("link" === e.tagName && "shortcut icon" === e.attributes.rel || "meta" === e.tagName && (Ye(e.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === Ye(e.attributes.name) || "icon" === Ye(e.attributes.rel) || "apple-touch-icon" === Ye(e.attributes.rel) || "shortcut icon" === Ye(e.attributes.rel)))) return !0;
            if ("meta" === e.tagName) {
              if (t.headMetaDescKeywords && Ye(e.attributes.name).match(/^description|keywords$/)) return !0;
              if (t.headMetaSocial && (Ye(e.attributes.property).match(/^(og|twitter|fb):/) || Ye(e.attributes.name).match(/^(og|twitter):/) || "pinterest" === Ye(e.attributes.name))) return !0;
              if (t.headMetaRobots && ("robots" === Ye(e.attributes.name) || "googlebot" === Ye(e.attributes.name) || "bingbot" === Ye(e.attributes.name))) return !0;
              if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"]) return !0;
              if (t.headMetaAuthorship && ("author" === Ye(e.attributes.name) || "generator" === Ye(e.attributes.name) || "framework" === Ye(e.attributes.name) || "publisher" === Ye(e.attributes.name) || "progid" === Ye(e.attributes.name) || Ye(e.attributes.property).match(/^article:/) || Ye(e.attributes.property).match(/^product:/))) return !0;
              if (t.headMetaVerification && ("google-site-verification" === Ye(e.attributes.name) || "yandex-verification" === Ye(e.attributes.name) || "csrf-token" === Ye(e.attributes.name) || "p:domain_verify" === Ye(e.attributes.name) || "verify-v1" === Ye(e.attributes.name) || "verification" === Ye(e.attributes.name) || "shopify-checkout-api-token" === Ye(e.attributes.name))) return !0
            }
          }
          return !1
        }(M, y) && (R || M.type !== ye.Text || M.isStyle || M.textContent.replace(/^\s+|\s+$/gm, "").length) ? Ne() : -2;
        const A = Object.assign(M, {
          id: O
        });
        if (r.add(e, A), -2 === O) return null;
        w && w(e);
        let N = !p;
        if (A.type === ye.Element) {
          N = N && !A.needBlock, delete A.needBlock;
          const t = e.shadowRoot;
          t && be(t) && (A.isShadowHost = !0)
        }
        if ((A.type === ye.Document || A.type === ye.Element) && N) {
          y.headWhitespace && A.type === ye.Element && "head" === A.tagName && (R = !1);
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
            onIframeLoad: T,
            iframeLoadTimeout: k,
            onStylesheetLoad: E,
            stylesheetLoadTimeout: x,
            keepIframeSrcFn: I
          };
          for (const n of Array.from(e.childNodes)) {
            const e = Xe(n, t);
            e && A.childNodes.push(e)
          }
          if (function(e) {
              return e.nodeType === e.ELEMENT_NODE
            }(e) && e.shadowRoot)
            for (const n of Array.from(e.shadowRoot.childNodes)) {
              const r = Xe(n, t);
              r && (be(e.shadowRoot) && (r.isShadow = !0), A.childNodes.push(r))
            }
        }
        return e.parentNode && _e(e.parentNode) && be(e.parentNode) && (A.isShadow = !0), A.type === ye.Element && "iframe" === A.tagName && function(e, t, n) {
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
          if (t && T) {
            const n = Xe(t, {
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
              onIframeLoad: T,
              iframeLoadTimeout: k,
              onStylesheetLoad: E,
              stylesheetLoadTimeout: x,
              keepIframeSrcFn: I
            });
            n && T(e, n)
          }
        }), k), A.type === ye.Element && "link" === A.tagName && "stylesheet" === A.attributes.rel && function(e, t, n) {
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
            const t = Xe(e, {
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
              onIframeLoad: T,
              iframeLoadTimeout: k,
              onStylesheetLoad: E,
              stylesheetLoadTimeout: x,
              keepIframeSrcFn: I
            });
            t && E(e, t)
          }
        }), x), A
      }

      function Qe(e) {
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

      function Ze(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
        const r = {
          capture: !0,
          passive: !0
        };
        return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r)
      }
      const et = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
      let tt = {
        map: {},
        getId: () => (console.error(et), -1),
        getNode: () => (console.error(et), null),
        removeNodeFromMap() {
          console.error(et)
        },
        has: () => (console.error(et), !1),
        reset() {
          console.error(et)
        }
      };

      function nt(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = null,
          o = 0;
        return function() {
          for (var s = arguments.length, i = new Array(s), a = 0; a < s; a++) i[a] = arguments[a];
          const c = Date.now();
          o || !1 !== n.leading || (o = c);
          const u = t - (c - o),
            l = this;
          u <= 0 || u > t ? (r && (function() {
            St("clearTimeout")(...arguments)
          }(r), r = null), o = c, e.apply(l, i)) : r || !1 === n.trailing || (r = wt((() => {
            o = !1 === n.leading ? 0 : Date.now(), r = null, e.apply(l, i)
          }), u))
        }
      }

      function rt(e, t, n, r) {
        let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
        const s = o.Object.getOwnPropertyDescriptor(e, t);
        return o.Object.defineProperty(e, t, r ? n : {
          set(e) {
            wt((() => {
              n.set.call(this, e)
            }), 0), s && s.set && s.set.call(this, e)
          }
        }), () => rt(e, t, s || {}, !0)
      }

      function ot(e, t, n) {
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
      "undefined" != typeof window && window.Proxy && window.Reflect && (tt = new Proxy(tt, {
        get: (e, t, n) => ("map" === t && console.error(et), Reflect.get(e, t, n))
      }));
      let st = Date.now;

      function it(e) {
        const t = e.document;
        return {
          left: t.scrollingElement ? t.scrollingElement.scrollLeft : void 0 !== e.pageXOffset ? e.pageXOffset : Qe([t, "optionalAccess", e => e.documentElement, "access", e => e.scrollLeft]) || Qe([t, "optionalAccess", e => e.body, "optionalAccess", e => e.parentElement, "optionalAccess", e => e.scrollLeft]) || Qe([t, "optionalAccess", e => e.body, "optionalAccess", e => e.scrollLeft]) || 0,
          top: t.scrollingElement ? t.scrollingElement.scrollTop : void 0 !== e.pageYOffset ? e.pageYOffset : Qe([t, "optionalAccess", e => e.documentElement, "access", e => e.scrollTop]) || Qe([t, "optionalAccess", e => e.body, "optionalAccess", e => e.parentElement, "optionalAccess", e => e.scrollTop]) || Qe([t, "optionalAccess", e => e.body, "optionalAccess", e => e.scrollTop]) || 0
        }
      }

      function at() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
      }

      function ct() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
      }

      function ut(e) {
        return e ? e.nodeType === e.ELEMENT_NODE ? e : e.parentElement : null
      }

      function lt(e, t, n, r, o) {
        if (!e) return !1;
        const s = ut(e);
        if (!s) return !1;
        const i = Je(t, n);
        if (!o) {
          const e = r && s.matches(r);
          return i(s) && !e
        }
        const a = Ke(s, i);
        let c = -1;
        return !(a < 0) && (r && (c = Ke(s, Je(null, r))), a > -1 && c < 0 || a < c)
      }

      function dt(e, t) {
        return -2 === t.getId(e)
      }

      function pt(e, t) {
        if (_e(e)) return !1;
        const n = t.getId(e);
        return !t.has(n) || (!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) && (!e.parentNode || pt(e.parentNode, t))
      }

      function ht(e) {
        return Boolean(e.changedTouches)
      }

      function ft(e, t) {
        return Boolean("IFRAME" === e.nodeName && t.getMeta(e))
      }

      function mt(e, t) {
        return Boolean("LINK" === e.nodeName && e.nodeType === e.ELEMENT_NODE && e.getAttribute && "stylesheet" === e.getAttribute("rel") && t.getMeta(e))
      }

      function gt(e) {
        return Boolean(Qe([e, "optionalAccess", e => e.shadowRoot]))
      }
      /[1-9][0-9]{12}/.test(Date.now().toString()) || (st = () => (new Date).getTime());
      class vt {
        constructor() {
          this.id = 1, this.styleIDMap = new WeakMap, this.idStyleMap = new Map
        }
        getId(e) {
          return null != (t = this.styleIDMap.get(e)) ? t : -1;
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

      function yt(e) {
        let t = null;
        return Qe([e, "access", e => e.getRootNode, "optionalCall", e => e(), "optionalAccess", e => e.nodeType]) === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (t = e.getRootNode().host), t
      }

      function _t(e) {
        const t = e.ownerDocument;
        return !!t && (t.contains(e) || function(e) {
          const t = e.ownerDocument;
          if (!t) return !1;
          const n = function(e) {
            let t, n = e;
            for (; t = yt(n);) n = t;
            return n
          }(e);
          return t.contains(n)
        }(e))
      }
      const bt = {};

      function St(e) {
        const t = bt[e];
        if (t) return t;
        const n = window.document;
        let r = window[e];
        if (n && "function" == typeof n.createElement) try {
          const t = n.createElement("iframe");
          t.hidden = !0, n.head.appendChild(t);
          const o = t.contentWindow;
          o && o[e] && (r = o[e]), n.head.removeChild(t)
        } catch (e) {}
        return bt[e] = r.bind(window)
      }

      function wt() {
        return St("setTimeout")(...arguments)
      }
      var Tt = (e => (e[e.DomContentLoaded = 0] = "DomContentLoaded", e[e.Load = 1] = "Load", e[e.FullSnapshot = 2] = "FullSnapshot", e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot", e[e.Meta = 4] = "Meta", e[e.Custom = 5] = "Custom", e[e.Plugin = 6] = "Plugin", e))(Tt || {}),
        kt = (e => (e[e.Mutation = 0] = "Mutation", e[e.MouseMove = 1] = "MouseMove", e[e.MouseInteraction = 2] = "MouseInteraction", e[e.Scroll = 3] = "Scroll", e[e.ViewportResize = 4] = "ViewportResize", e[e.Input = 5] = "Input", e[e.TouchMove = 6] = "TouchMove", e[e.MediaInteraction = 7] = "MediaInteraction", e[e.StyleSheetRule = 8] = "StyleSheetRule", e[e.CanvasMutation = 9] = "CanvasMutation", e[e.Font = 10] = "Font", e[e.Log = 11] = "Log", e[e.Drag = 12] = "Drag", e[e.StyleDeclaration = 13] = "StyleDeclaration", e[e.Selection = 14] = "Selection", e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", e[e.CustomElement = 16] = "CustomElement", e))(kt || {}),
        Et = (e => (e[e.MouseUp = 0] = "MouseUp", e[e.MouseDown = 1] = "MouseDown", e[e.Click = 2] = "Click", e[e.ContextMenu = 3] = "ContextMenu", e[e.DblClick = 4] = "DblClick", e[e.Focus = 5] = "Focus", e[e.Blur = 6] = "Blur", e[e.TouchStart = 7] = "TouchStart", e[e.TouchMove_Departed = 8] = "TouchMove_Departed", e[e.TouchEnd = 9] = "TouchEnd", e[e.TouchCancel = 10] = "TouchCancel", e))(Et || {}),
        xt = (e => (e[e.Mouse = 0] = "Mouse", e[e.Pen = 1] = "Pen", e[e.Touch = 2] = "Touch", e))(xt || {});

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

      function Ct(e) {
        return "__ln" in e
      }
      class Rt {
        constructor() {
          this.length = 0, this.head = null, this.tail = null
        }
        get(e) {
          if (e >= this.length) throw new Error("Position outside of list range");
          let t = this.head;
          for (let n = 0; n < e; n++) t = It([t, "optionalAccess", e => e.next]) || null;
          return t
        }
        addNode(e) {
          const t = {
            value: e,
            previous: null,
            next: null
          };
          if (e.__ln = t, e.previousSibling && Ct(e.previousSibling)) {
            const n = e.previousSibling.__ln.next;
            t.next = n, t.previous = e.previousSibling.__ln, e.previousSibling.__ln.next = t, n && (n.previous = t)
          } else if (e.nextSibling && Ct(e.nextSibling) && e.nextSibling.__ln.previous) {
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
      const Mt = (e, t) => `${e}@${t}`;
      class Ot {
        constructor() {
          this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = e => {
            e.forEach(this.processMutation), this.emit()
          }, this.emit = () => {
            if (this.frozen || this.locked) return;
            const e = [],
              t = new Set,
              n = new Rt,
              r = e => {
                let t = e,
                  n = -2;
                for (; - 2 === n;) t = t && t.nextSibling, n = t && this.mirror.getId(t);
                return n
              },
              o = o => {
                if (!o.parentNode || !_t(o)) return;
                const s = _e(o.parentNode) ? this.mirror.getId(yt(o)) : this.mirror.getId(o.parentNode),
                  i = r(o);
                if (-1 === s || -1 === i) return n.addNode(o);
                const a = Xe(o, {
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
                    ft(e, this.mirror) && this.iframeManager.addIframe(e), mt(e, this.mirror) && this.stylesheetManager.trackLinkElement(e), gt(o) && this.shadowDomManager.addShadowRoot(o.shadowRoot, this.doc)
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
            for (const e of this.movedSet) Nt(this.removes, e, this.mirror) && !this.movedSet.has(e.parentNode) || o(e);
            for (const e of this.addedSet) Ft(this.droppedSet, e) || Nt(this.removes, e, this.mirror) ? Ft(this.movedSet, e) ? o(e) : this.droppedSet.add(e) : o(e);
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
            (i.texts.length || i.attributes.length || i.removes.length || i.adds.length) && (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.movedMap = {}, this.mutationCb(i))
          }, this.processMutation = e => {
            if (!dt(e.target, this.mirror)) switch (e.type) {
              case "characterData": {
                const t = e.target.textContent;
                lt(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || t === e.oldValue || this.texts.push({
                  value: Ve(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && t ? this.maskTextFn ? this.maskTextFn(t, ut(e.target)) : t.replace(/[\S]/g, "*") : t,
                  node: e.target
                });
                break
              }
              case "attributes": {
                const t = e.target;
                let n = e.attributeName,
                  r = e.target.getAttribute(n);
                if ("value" === n) {
                  const n = Re(t),
                    o = t.tagName;
                  r = Me(t, o, n);
                  const s = ke({
                    maskInputOptions: this.maskInputOptions,
                    tagName: o,
                    type: n
                  });
                  r = Ee({
                    isMasked: Ve(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, s),
                    element: t,
                    value: r,
                    maskInputFn: this.maskInputFn
                  })
                }
                if (lt(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || r === e.oldValue) return;
                let o = this.attributeMap.get(e.target);
                if ("IFRAME" === t.tagName && "src" === n && !this.keepIframeSrcFn(r)) {
                  if (t.contentDocument) return;
                  n = "rr_src"
                }
                if (o || (o = {
                    node: e.target,
                    attributes: {},
                    styleDiff: {},
                    _unchangedStyles: {}
                  }, this.attributes.push(o), this.attributeMap.set(e.target, o)), "type" === n && "INPUT" === t.tagName && "password" === (e.oldValue || "").toLowerCase() && t.setAttribute("data-rr-is-password", "true"), !Ge(t.tagName, n) && (o.attributes[n] = We(this.doc, xe(t.tagName), xe(n), r, t, this.maskAttributeFn), "style" === n)) {
                  if (!this.unattachedDoc) try {
                    this.unattachedDoc = document.implementation.createHTMLDocument()
                  } catch (e) {
                    this.unattachedDoc = this.doc
                  }
                  const n = this.unattachedDoc.createElement("span");
                  e.oldValue && n.setAttribute("style", e.oldValue);
                  for (const e of Array.from(t.style)) {
                    const r = t.style.getPropertyValue(e),
                      s = t.style.getPropertyPriority(e);
                    r !== n.style.getPropertyValue(e) || s !== n.style.getPropertyPriority(e) ? o.styleDiff[e] = "" === s ? r : [r, s] : o._unchangedStyles[e] = [r, s]
                  }
                  for (const e of Array.from(n.style)) "" === t.style.getPropertyValue(e) && (o.styleDiff[e] = !1)
                }
                break
              }
              case "childList":
                if (lt(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
                e.addedNodes.forEach((t => this.genAdds(t, e.target))), e.removedNodes.forEach((t => {
                  const n = this.mirror.getId(t),
                    r = _e(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                  lt(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || dt(t, this.mirror) || ! function(e, t) {
                    return -1 !== t.getId(e)
                  }(t, this.mirror) || (this.addedSet.has(t) ? (At(this.addedSet, t), this.droppedSet.add(t)) : this.addedSet.has(e.target) && -1 === n || pt(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[Mt(n, r)] ? At(this.movedSet, t) : this.removes.push({
                    parentId: r,
                    id: n,
                    isShadow: !(!_e(e.target) || !be(e.target)) || void 0
                  })), this.mapRemoves.push(t))
                }))
            }
          }, this.genAdds = (e, t) => {
            if (!this.processedNodeManager.inOtherBuffer(e, this) && !this.addedSet.has(e) && !this.movedSet.has(e)) {
              if (this.mirror.hasNode(e)) {
                if (dt(e, this.mirror)) return;
                this.movedSet.add(e);
                let n = null;
                t && this.mirror.hasNode(t) && (n = this.mirror.getId(t)), n && -1 !== n && (this.movedMap[Mt(this.mirror.getId(e), n)] = !0)
              } else this.addedSet.add(e), this.droppedSet.delete(e);
              lt(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (e.childNodes.forEach((e => this.genAdds(e))), gt(e) && e.shadowRoot.childNodes.forEach((t => {
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

      function At(e, t) {
        e.delete(t), t.childNodes.forEach((t => At(e, t)))
      }

      function Nt(e, t, n) {
        return 0 !== e.length && Dt(e, t, n)
      }

      function Dt(e, t, n) {
        const {
          parentNode: r
        } = t;
        if (!r) return !1;
        const o = n.getId(r);
        return !!e.some((e => e.id === o)) || Dt(e, r, n)
      }

      function Ft(e, t) {
        return 0 !== e.size && Lt(e, t)
      }

      function Lt(e, t) {
        const {
          parentNode: n
        } = t;
        return !!n && (!!e.has(n) || Lt(e, n))
      }
      let Pt;

      function jt(e) {
        Pt = e
      }

      function Bt() {
        Pt = void 0
      }
      const $t = e => Pt ? function() {
        try {
          return e(...arguments)
        } catch (e) {
          if (Pt && !0 === Pt(e)) return () => {};
          throw e
        }
      } : e;

      function Ut(e) {
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
      const Ht = [];

      function zt(e) {
        try {
          if ("composedPath" in e) {
            const t = e.composedPath();
            if (t.length) return t[0]
          } else if ("path" in e && e.path.length) return e.path[0]
        } catch (e) {}
        return e && e.target
      }

      function qt(e, t) {
        const n = new Ot;
        Ht.push(n), n.init(e);
        let r = window.MutationObserver || window.__rrMutationObserver;
        const o = Ut([window, "optionalAccess", e => e.Zone, "optionalAccess", e => e.__symbol__, "optionalCall", e => e("MutationObserver")]);
        o && window[o] && (r = window[o]);
        const s = new r($t((t => {
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

      function Wt(e) {
        let {
          scrollCb: t,
          doc: n,
          mirror: r,
          blockClass: o,
          blockSelector: s,
          unblockSelector: i,
          sampling: a
        } = e;
        return Ze("scroll", $t(nt($t((e => {
          const a = zt(e);
          if (!a || lt(a, o, s, i, !0)) return;
          const c = r.getId(a);
          if (a === n && n.defaultView) {
            const e = it(n.defaultView);
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
      const Gt = ["INPUT", "TEXTAREA", "SELECT"],
        Kt = new WeakMap;

      function Jt(e) {
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
          let t = zt(e);
          const r = e.isTrusted,
            d = t && Ie(t.tagName);
          if ("OPTION" === d && (t = t.parentElement), !t || !d || Gt.indexOf(d) < 0 || lt(t, o, s, i, !0)) return;
          const v = t;
          if (v.classList.contains(a) || c && v.matches(c)) return;
          const _ = Re(t);
          let b = Me(v, d, _),
            S = !1;
          const w = ke({
              maskInputOptions: u,
              tagName: d,
              type: _
            }),
            T = Ve(t, h, m, f, g, w);
          "radio" !== _ && "checkbox" !== _ || (S = t.checked), b = Ee({
            isMasked: T,
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
          const k = t.name;
          "radio" === _ && k && S && n.querySelectorAll(`input[type="radio"][name="${k}"]`).forEach((e => {
            if (e !== t) {
              const t = Ee({
                isMasked: T,
                element: e,
                value: Me(e, d, _),
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
          const o = Kt.get(e);
          if (!o || o.text !== n.text || o.isChecked !== n.isChecked) {
            Kt.set(e, n);
            const o = r.getId(e);
            $t(t)({
              ...n,
              id: o
            })
          }
        }
        const _ = ("last" === d.input ? ["change"] : ["input", "change"]).map((e => Ze(e, $t(v), n))),
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
        return S && S.set && _.push(...w.map((e => rt(e[0], e[1], {
          set() {
            $t(v)({
              target: this,
              isTrusted: !1
            })
          }
        }, !1, b)))), $t((() => {
          _.forEach((e => e()))
        }))
      }

      function Vt(e) {
        return function(e, t) {
          if (Zt("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule || Zt("CSSMediaRule") && e.parentRule instanceof CSSMediaRule || Zt("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule || Zt("CSSConditionRule") && e.parentRule instanceof CSSConditionRule) {
            const n = Array.from(e.parentRule.cssRules).indexOf(e);
            t.unshift(n)
          } else if (e.parentStyleSheet) {
            const n = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
            t.unshift(n)
          }
          return t
        }(e, [])
      }

      function Yt(e, t, n) {
        let r, o;
        return e ? (e.ownerNode ? r = t.getId(e.ownerNode) : o = n.getId(e), {
          styleId: o,
          id: r
        }) : {}
      }

      function Xt(e, t) {
        let {
          mirror: n,
          stylesheetManager: r
        } = e, o = null;
        o = "#document" === t.nodeName ? n.getId(t) : n.getId(t.host);
        const s = "#document" === t.nodeName ? Ut([t, "access", e => e.defaultView, "optionalAccess", e => e.Document]) : Ut([t, "access", e => e.ownerDocument, "optionalAccess", e => e.defaultView, "optionalAccess", e => e.ShadowRoot]),
          i = Ut([s, "optionalAccess", e => e.prototype]) ? Object.getOwnPropertyDescriptor(Ut([s, "optionalAccess", e => e.prototype]), "adoptedStyleSheets") : void 0;
        return null !== o && -1 !== o && s && i ? (Object.defineProperty(t, "adoptedStyleSheets", {
          configurable: i.configurable,
          enumerable: i.enumerable,
          get() {
            return Ut([i, "access", e => e.get, "optionalAccess", e => e.call, "call", e => e(this)])
          },
          set(e) {
            const t = Ut([i, "access", e => e.set, "optionalAccess", e => e.call, "call", t => t(this, e)]);
            if (null !== o && -1 !== o) try {
              r.adoptStyleSheets(e, o)
            } catch (e) {}
            return t
          }
        }), $t((() => {
          Object.defineProperty(t, "adoptedStyleSheets", {
            configurable: i.configurable,
            enumerable: i.enumerable,
            get: i.get,
            set: i.set
          })
        }))) : () => {}
      }

      function Qt(e) {
        const t = e.doc.defaultView;
        if (!t) return () => {};
        const n = qt(e, e.doc),
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
            const u = nt($t((e => {
                const n = Date.now() - a;
                t(c.map((e => (e.timeOffset -= n, e))), e), c = [], a = null
              })), i),
              l = $t(nt($t((e => {
                const t = zt(e),
                  {
                    clientX: n,
                    clientY: r
                  } = ht(e) ? e.changedTouches[0] : e;
                a || (a = st()), c.push({
                  x: n,
                  y: r,
                  id: o.getId(t),
                  timeOffset: st() - a
                }), u("undefined" != typeof DragEvent && e instanceof DragEvent ? kt.Drag : e instanceof MouseEvent ? kt.MouseMove : kt.TouchMove)
              })), s, {
                trailing: !1
              })),
              d = [Ze("mousemove", l, r), Ze("touchmove", l, r), Ze("drag", l, r)];
            return $t((() => {
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
            return Object.keys(Et).filter((e => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== c[e])).forEach((e => {
              let a = xe(e);
              const c = (e => n => {
                const a = zt(n);
                if (lt(a, o, s, i, !0)) return;
                let c = null,
                  u = e;
                if ("pointerType" in n) {
                  switch (n.pointerType) {
                    case "mouse":
                      c = xt.Mouse;
                      break;
                    case "touch":
                      c = xt.Touch;
                      break;
                    case "pen":
                      c = xt.Pen
                  }
                  c === xt.Touch ? Et[e] === Et.MouseDown ? u = "TouchStart" : Et[e] === Et.MouseUp && (u = "TouchEnd") : xt.Pen
                } else ht(n) && (c = xt.Touch);
                null !== c ? (l = c, (u.startsWith("Touch") && c === xt.Touch || u.startsWith("Mouse") && c === xt.Mouse) && (c = null)) : Et[e] === Et.Click && (c = l, l = null);
                const d = ht(n) ? n.changedTouches[0] : n;
                if (!d) return;
                const p = r.getId(a),
                  {
                    clientX: h,
                    clientY: f
                  } = d;
                $t(t)({
                  type: Et[u],
                  id: p,
                  x: h,
                  y: f,
                  ...null !== c && {
                    pointerType: c
                  }
                })
              })(e);
              if (window.PointerEvent) switch (Et[e]) {
                case Et.MouseDown:
                case Et.MouseUp:
                  a = a.replace("mouse", "pointer");
                  break;
                case Et.TouchStart:
                case Et.TouchEnd:
                  return
              }
              u.push(Ze(a, c, n))
            })), $t((() => {
              u.forEach((e => e()))
            }))
          }(e),
          s = Wt(e),
          i = function(e, t) {
            let {
              viewportResizeCb: n
            } = e, {
              win: r
            } = t, o = -1, s = -1;
            return Ze("resize", $t(nt($t((() => {
              const e = at(),
                t = ct();
              o === e && s === t || (n({
                width: Number(t),
                height: Number(e)
              }), o = e, s = t)
            })), 200)), r)
          }(e, {
            win: t
          }),
          a = Jt(e),
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
            const c = $t((e => nt($t((i => {
                const a = zt(i);
                if (!a || lt(a, n, r, o, !0)) return;
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
              u = [Ze("play", c(0), a), Ze("pause", c(1), a), Ze("seeked", c(2), a), Ze("volumechange", c(3), a), Ze("ratechange", c(4), a)];
            return $t((() => {
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
              apply: $t(((e, t, s) => {
                const [i, a] = s, {
                  id: c,
                  styleId: u
                } = Yt(t, r, o.styleMirror);
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
              apply: $t(((e, t, s) => {
                const [i] = s, {
                  id: a,
                  styleId: c
                } = Yt(t, r, o.styleMirror);
                return (a && -1 !== a || c && -1 !== c) && n({
                  id: a,
                  styleId: c,
                  removes: [{
                    index: i
                  }]
                }), e.apply(t, s)
              }))
            }), s.CSSStyleSheet.prototype.replace && (c = s.CSSStyleSheet.prototype.replace, s.CSSStyleSheet.prototype.replace = new Proxy(c, {
              apply: $t(((e, t, s) => {
                const [i] = s, {
                  id: a,
                  styleId: c
                } = Yt(t, r, o.styleMirror);
                return (a && -1 !== a || c && -1 !== c) && n({
                  id: a,
                  styleId: c,
                  replace: i
                }), e.apply(t, s)
              }))
            })), s.CSSStyleSheet.prototype.replaceSync && (u = s.CSSStyleSheet.prototype.replaceSync, s.CSSStyleSheet.prototype.replaceSync = new Proxy(u, {
              apply: $t(((e, t, s) => {
                const [i] = s, {
                  id: a,
                  styleId: c
                } = Yt(t, r, o.styleMirror);
                return (a && -1 !== a || c && -1 !== c) && n({
                  id: a,
                  styleId: c,
                  replaceSync: i
                }), e.apply(t, s)
              }))
            }));
            const l = {};
            en("CSSGroupingRule") ? l.CSSGroupingRule = s.CSSGroupingRule : (en("CSSMediaRule") && (l.CSSMediaRule = s.CSSMediaRule), en("CSSConditionRule") && (l.CSSConditionRule = s.CSSConditionRule), en("CSSSupportsRule") && (l.CSSSupportsRule = s.CSSSupportsRule));
            const d = {};
            return Object.entries(l).forEach((e => {
              let [t, s] = e;
              d[t] = {
                insertRule: s.prototype.insertRule,
                deleteRule: s.prototype.deleteRule
              }, s.prototype.insertRule = new Proxy(d[t].insertRule, {
                apply: $t(((e, t, s) => {
                  const [i, a] = s, {
                    id: c,
                    styleId: u
                  } = Yt(t.parentStyleSheet, r, o.styleMirror);
                  return (c && -1 !== c || u && -1 !== u) && n({
                    id: c,
                    styleId: u,
                    adds: [{
                      rule: i,
                      index: [...Vt(t), a || 0]
                    }]
                  }), e.apply(t, s)
                }))
              }), s.prototype.deleteRule = new Proxy(d[t].deleteRule, {
                apply: $t(((e, t, s) => {
                  const [i] = s, {
                    id: a,
                    styleId: c
                  } = Yt(t.parentStyleSheet, r, o.styleMirror);
                  return (a && -1 !== a || c && -1 !== c) && n({
                    id: a,
                    styleId: c,
                    removes: [{
                      index: [...Vt(t), i]
                    }]
                  }), e.apply(t, s)
                }))
              })
            })), $t((() => {
              s.CSSStyleSheet.prototype.insertRule = i, s.CSSStyleSheet.prototype.deleteRule = a, c && (s.CSSStyleSheet.prototype.replace = c), u && (s.CSSStyleSheet.prototype.replaceSync = u), Object.entries(l).forEach((e => {
                let [t, n] = e;
                n.prototype.insertRule = d[t].insertRule, n.prototype.deleteRule = d[t].deleteRule
              }))
            }))
          }(e, {
            win: t
          }),
          l = Xt(e, e.doc),
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
              apply: $t(((e, t, i) => {
                const [c, u, l] = i;
                if (o.has(c)) return a.apply(t, [c, u, l]);
                const {
                  id: d,
                  styleId: p
                } = Yt(Ut([t, "access", e => e.parentRule, "optionalAccess", e => e.parentStyleSheet]), r, s.styleMirror);
                return (d && -1 !== d || p && -1 !== p) && n({
                  id: d,
                  styleId: p,
                  set: {
                    property: c,
                    value: u,
                    priority: l
                  },
                  index: Vt(t.parentRule)
                }), e.apply(t, i)
              }))
            });
            const c = i.CSSStyleDeclaration.prototype.removeProperty;
            return i.CSSStyleDeclaration.prototype.removeProperty = new Proxy(c, {
              apply: $t(((e, t, i) => {
                const [a] = i;
                if (o.has(a)) return c.apply(t, [a]);
                const {
                  id: u,
                  styleId: l
                } = Yt(Ut([t, "access", e => e.parentRule, "optionalAccess", e => e.parentStyleSheet]), r, s.styleMirror);
                return (u && -1 !== u || l && -1 !== l) && n({
                  id: u,
                  styleId: l,
                  remove: {
                    property: a
                  },
                  index: Vt(t.parentRule)
                }), e.apply(t, i)
              }))
            }), $t((() => {
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
            const a = ot(n.fonts, "add", (function(e) {
              return function(n) {
                return wt($t((() => {
                  const e = s.get(n);
                  e && (t(e), s.delete(n))
                })), 0), e.apply(this, [n])
              }
            }));
            return o.push((() => {
              r.FontFace = i
            })), o.push(a), $t((() => {
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
            const c = $t((() => {
              const e = t.getSelection();
              if (!e || a && Ut([e, "optionalAccess", e => e.isCollapsed])) return;
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
                lt(a, r, o, s, !0) || lt(l, r, o, s, !0) || c.push({
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
            return c(), Ze("selectionchange", c)
          }(e),
          f = function(e) {
            let {
              doc: t,
              customElementCb: n
            } = e;
            const r = t.defaultView;
            return r && r.customElements ? ot(r.customElements, "define", (function(e) {
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
        return $t((() => {
          Ht.forEach((e => e.reset())), n.disconnect(), r(), o(), s(), i(), a(), c(), u(), l(), d(), p(), h(), f(), m.forEach((e => e()))
        }))
      }

      function Zt(e) {
        return void 0 !== window[e]
      }

      function en(e) {
        return Boolean(void 0 !== window[e] && window[e].prototype && "insertRule" in window[e].prototype && "deleteRule" in window[e].prototype)
      }
      class tn {
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

      function nn(e) {
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
      class rn {
        constructor() {
          this.crossOriginIframeMirror = new tn(Ne), this.crossOriginIframeRootIdMap = new WeakMap
        }
        addIframe() {}
        addLoadListener() {}
        attachIframe() {}
      }
      class on {
        constructor(e) {
          this.iframes = new WeakMap, this.crossOriginIframeMap = new WeakMap, this.crossOriginIframeMirror = new tn(Ne), this.crossOriginIframeRootIdMap = new WeakMap, this.mutationCb = e.mutationCb, this.wrappedEmit = e.wrappedEmit, this.stylesheetManager = e.stylesheetManager, this.recordCrossOriginIframes = e.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new tn(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = e.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
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
          }), nn([this, "access", e => e.loadListener, "optionalCall", t => t(e)]), e.contentDocument && e.contentDocument.adoptedStyleSheets && e.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(e.contentDocument.adoptedStyleSheets, this.mirror.getId(e.contentDocument))
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
            case Tt.FullSnapshot: {
              this.crossOriginIframeMirror.reset(e), this.crossOriginIframeStyleMirror.reset(e), this.replaceIdOnNode(t.data.node, e);
              const n = t.data.node.id;
              return this.crossOriginIframeRootIdMap.set(e, n), this.patchRootIdOnNode(t.data.node, n), {
                timestamp: t.timestamp,
                type: Tt.IncrementalSnapshot,
                data: {
                  source: kt.Mutation,
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
            case Tt.Meta:
            case Tt.Load:
            case Tt.DomContentLoaded:
              return !1;
            case Tt.Plugin:
              return t;
            case Tt.Custom:
              return this.replaceIds(t.data.payload, e, ["id", "parentId", "previousId", "nextId"]), t;
            case Tt.IncrementalSnapshot:
              switch (t.data.source) {
                case kt.Mutation:
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
                case kt.Drag:
                case kt.TouchMove:
                case kt.MouseMove:
                  return t.data.positions.forEach((t => {
                    this.replaceIds(t, e, ["id"])
                  })), t;
                case kt.ViewportResize:
                  return !1;
                case kt.MediaInteraction:
                case kt.MouseInteraction:
                case kt.Scroll:
                case kt.CanvasMutation:
                case kt.Input:
                  return this.replaceIds(t.data, e, ["id"]), t;
                case kt.StyleSheetRule:
                case kt.StyleDeclaration:
                  return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleId"]), t;
                case kt.Font:
                  return t;
                case kt.Selection:
                  return t.data.ranges.forEach((t => {
                    this.replaceIds(t, e, ["start", "end"])
                  })), t;
                case kt.AdoptedStyleSheet:
                  return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleIds"]), nn([t, "access", e => e.data, "access", e => e.styles, "optionalAccess", e => e.forEach, "call", t => t((t => {
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
          e.type === ye.Document || e.rootId || (e.rootId = t), "childNodes" in e && e.childNodes.forEach((e => {
            this.patchRootIdOnNode(e, t)
          }))
        }
      }
      class sn {
        init() {}
        addShadowRoot() {}
        observeAttachShadow() {}
        reset() {}
      }
      class an {
        constructor(e) {
          this.shadowDoms = new WeakSet, this.restoreHandlers = [], this.mutationCb = e.mutationCb, this.scrollCb = e.scrollCb, this.bypassOptions = e.bypassOptions, this.mirror = e.mirror, this.init()
        }
        init() {
          this.reset(), this.patchAttachShadow(Element, document)
        }
        addShadowRoot(e, t) {
          if (!be(e)) return;
          if (this.shadowDoms.has(e)) return;
          this.shadowDoms.add(e);
          const n = qt({
            ...this.bypassOptions,
            doc: t,
            mutationCb: this.mutationCb,
            mirror: this.mirror,
            shadowDomManager: this
          }, e);
          this.restoreHandlers.push((() => n.disconnect())), this.restoreHandlers.push(Wt({
            ...this.bypassOptions,
            scrollCb: this.scrollCb,
            doc: e,
            mirror: this.mirror
          })), wt((() => {
            e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(e.host)), this.restoreHandlers.push(Xt({
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
          this.restoreHandlers.push(ot(e.prototype, "attachShadow", (function(e) {
            return function(r) {
              const o = e.call(this, r);
              return this.shadowRoot && _t(this) && n.addShadowRoot(this.shadowRoot, t), o
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
      class cn {
        reset() {}
        freeze() {}
        unfreeze() {}
        lock() {}
        unlock() {}
        snapshot() {}
      }
      class un {
        constructor(e) {
          this.trackedLinkElements = new WeakSet, this.styleMirror = new vt, this.mutationCb = e.mutationCb, this.adoptedStyleSheetCb = e.adoptedStyleSheetCb
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
                rule: we(e),
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
      class ln {
        constructor() {
          this.nodeMap = new WeakMap, this.loop = !0, this.periodicallyClear()
        }
        periodicallyClear() {
          ! function() {
            St("requestAnimationFrame")(...arguments)
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
      let dn, pn;
      const hn = new Te;

      function fn() {
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
          maxCanvasSize: S = null,
          packFn: w,
          sampling: T = {},
          dataURLOptions: k = {},
          mousemoveWait: E,
          recordCanvas: x = !1,
          recordCrossOriginIframes: I = !1,
          recordAfter: C = ("DOMContentLoaded" === e.recordAfter ? e.recordAfter : "load"),
          userTriggeredOnInput: R = !1,
          collectFonts: M = !1,
          inlineImages: O = !1,
          plugins: A,
          keepIframeSrcFn: N = () => !1,
          ignoreCSSAttributes: D = new Set([]),
          errorHandler: F,
          onMutation: L,
          getCanvasManager: P
        } = e;
        jt(F);
        const j = !I || window.parent === window;
        let B = !1;
        if (!j) try {
          window.parent.document && (B = !1)
        } catch (e) {
          B = !0
        }
        if (j && !t) throw new Error("emit function is required");
        void 0 !== E && void 0 === T.mousemove && (T.mousemove = E), hn.reset();
        const U = !0 === m ? {
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
          H = !0 === v || "all" === v ? {
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
        let z;
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
        const W = e => {
          for (const t of A || []) t.eventProcessor && (e = t.eventProcessor(e));
          return w && !B && (e = w(e)), e
        };
        dn = (e, o) => {
          const s = e;
          if (s.timestamp = st(), !$([Ht, "access", e => e[0], "optionalAccess", e => e.isFrozen, "call", e => e()]) || s.type === Tt.FullSnapshot || s.type === Tt.IncrementalSnapshot && s.data.source === kt.Mutation || Ht.forEach((e => e.unfreeze())), j) $([t, "optionalCall", e => e(W(s), o)]);
          else if (B) {
            const e = {
              type: "rrweb",
              event: W(s),
              origin: window.location.origin,
              isCheckout: o
            };
            window.parent.postMessage(e, "*")
          }
          if (s.type === Tt.FullSnapshot) z = s, q = 0;
          else if (s.type === Tt.IncrementalSnapshot) {
            if (s.data.source === kt.Mutation && s.data.isAttachIframe) return;
            q++;
            const e = r && q >= r,
              t = n && z && s.timestamp - z.timestamp > n;
            (e || t) && ee(!0)
          }
        };
        const G = e => {
            dn({
              type: Tt.IncrementalSnapshot,
              data: {
                source: kt.Mutation,
                ...e
              }
            })
          },
          K = e => dn({
            type: Tt.IncrementalSnapshot,
            data: {
              source: kt.Scroll,
              ...e
            }
          }),
          J = e => dn({
            type: Tt.IncrementalSnapshot,
            data: {
              source: kt.CanvasMutation,
              ...e
            }
          }),
          V = new un({
            mutationCb: G,
            adoptedStyleSheetCb: e => dn({
              type: Tt.IncrementalSnapshot,
              data: {
                source: kt.AdoptedStyleSheet,
                ...e
              }
            })
          }),
          Y = "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__ ? new rn : new on({
            mirror: hn,
            mutationCb: G,
            stylesheetManager: V,
            recordCrossOriginIframes: I,
            wrappedEmit: dn
          });
        for (const e of A || []) e.getMirror && e.getMirror({
          nodeMirror: hn,
          crossOriginIframeMirror: Y.crossOriginIframeMirror,
          crossOriginIframeStyleMirror: Y.crossOriginIframeStyleMirror
        });
        const X = new ln,
          Q = function(e, t) {
            try {
              return e ? e(t) : new cn
            } catch (e) {
              return console.warn("Unable to initialize CanvasManager"), new cn
            }
          }(P, {
            mirror: hn,
            win: window,
            mutationCb: e => dn({
              type: Tt.IncrementalSnapshot,
              data: {
                source: kt.CanvasMutation,
                ...e
              }
            }),
            recordCanvas: x,
            blockClass: o,
            blockSelector: s,
            unblockSelector: i,
            maxCanvasSize: S,
            sampling: T.canvas,
            dataURLOptions: k,
            errorHandler: F
          }),
          Z = "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new sn : new an({
            mutationCb: G,
            scrollCb: K,
            bypassOptions: {
              onMutation: L,
              blockClass: o,
              blockSelector: s,
              unblockSelector: i,
              maskAllText: u,
              maskTextClass: l,
              unmaskTextClass: d,
              maskTextSelector: p,
              unmaskTextSelector: h,
              inlineStylesheet: f,
              maskInputOptions: U,
              dataURLOptions: k,
              maskAttributeFn: y,
              maskTextFn: b,
              maskInputFn: _,
              recordCanvas: x,
              inlineImages: O,
              sampling: T,
              slimDOMOptions: H,
              iframeManager: Y,
              stylesheetManager: V,
              canvasManager: Q,
              keepIframeSrcFn: N,
              processedNodeManager: X
            },
            mirror: hn
          }),
          ee = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            dn({
              type: Tt.Meta,
              data: {
                href: window.location.href,
                width: ct(),
                height: at()
              }
            }, e), V.reset(), Z.init(), Ht.forEach((e => e.lock()));
            const t = function(e, t) {
              const {
                mirror: n = new Te,
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
                iframeLoadTimeout: T,
                onStylesheetLoad: k,
                stylesheetLoadTimeout: E,
                keepIframeSrcFn: x = () => !1
              } = t || {};
              return Xe(e, {
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
                iframeLoadTimeout: T,
                onStylesheetLoad: k,
                stylesheetLoadTimeout: E,
                keepIframeSrcFn: x,
                newlyAddedElement: !1
              })
            }(document, {
              mirror: hn,
              blockClass: o,
              blockSelector: s,
              unblockSelector: i,
              maskAllText: u,
              maskTextClass: l,
              unmaskTextClass: d,
              maskTextSelector: p,
              unmaskTextSelector: h,
              inlineStylesheet: f,
              maskAllInputs: U,
              maskAttributeFn: y,
              maskInputFn: _,
              maskTextFn: b,
              slimDOM: H,
              dataURLOptions: k,
              recordCanvas: x,
              inlineImages: O,
              onSerialize: e => {
                ft(e, hn) && Y.addIframe(e), mt(e, hn) && V.trackLinkElement(e), gt(e) && Z.addShadowRoot(e.shadowRoot, document)
              },
              onIframeLoad: (e, t) => {
                Y.attachIframe(e, t), Z.observeAttachShadow(e)
              },
              onStylesheetLoad: (e, t) => {
                V.attachLinkElement(e, t)
              },
              keepIframeSrcFn: N
            });
            if (!t) return console.warn("Failed to snapshot the document");
            dn({
              type: Tt.FullSnapshot,
              data: {
                node: t,
                initialOffset: it(window)
              }
            }), Ht.forEach((e => e.unlock())), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && V.adoptStyleSheets(document.adoptedStyleSheets, hn.getId(document))
          };
        pn = ee;
        try {
          const e = [],
            t = e => $t(Qt)({
              onMutation: L,
              mutationCb: G,
              mousemoveCb: (e, t) => dn({
                type: Tt.IncrementalSnapshot,
                data: {
                  source: t,
                  positions: e
                }
              }),
              mouseInteractionCb: e => dn({
                type: Tt.IncrementalSnapshot,
                data: {
                  source: kt.MouseInteraction,
                  ...e
                }
              }),
              scrollCb: K,
              viewportResizeCb: e => dn({
                type: Tt.IncrementalSnapshot,
                data: {
                  source: kt.ViewportResize,
                  ...e
                }
              }),
              inputCb: e => dn({
                type: Tt.IncrementalSnapshot,
                data: {
                  source: kt.Input,
                  ...e
                }
              }),
              mediaInteractionCb: e => dn({
                type: Tt.IncrementalSnapshot,
                data: {
                  source: kt.MediaInteraction,
                  ...e
                }
              }),
              styleSheetRuleCb: e => dn({
                type: Tt.IncrementalSnapshot,
                data: {
                  source: kt.StyleSheetRule,
                  ...e
                }
              }),
              styleDeclarationCb: e => dn({
                type: Tt.IncrementalSnapshot,
                data: {
                  source: kt.StyleDeclaration,
                  ...e
                }
              }),
              canvasMutationCb: J,
              fontCb: e => dn({
                type: Tt.IncrementalSnapshot,
                data: {
                  source: kt.Font,
                  ...e
                }
              }),
              selectionCb: e => {
                dn({
                  type: Tt.IncrementalSnapshot,
                  data: {
                    source: kt.Selection,
                    ...e
                  }
                })
              },
              customElementCb: e => {
                dn({
                  type: Tt.IncrementalSnapshot,
                  data: {
                    source: kt.CustomElement,
                    ...e
                  }
                })
              },
              blockClass: o,
              ignoreClass: a,
              ignoreSelector: c,
              maskAllText: u,
              maskTextClass: l,
              unmaskTextClass: d,
              maskTextSelector: p,
              unmaskTextSelector: h,
              maskInputOptions: U,
              inlineStylesheet: f,
              sampling: T,
              recordCanvas: x,
              inlineImages: O,
              userTriggeredOnInput: R,
              collectFonts: M,
              doc: e,
              maskAttributeFn: y,
              maskInputFn: _,
              maskTextFn: b,
              keepIframeSrcFn: N,
              blockSelector: s,
              unblockSelector: i,
              slimDOMOptions: H,
              dataURLOptions: k,
              mirror: hn,
              iframeManager: Y,
              stylesheetManager: V,
              shadowDomManager: Z,
              processedNodeManager: X,
              canvasManager: Q,
              ignoreCSSAttributes: D,
              plugins: $([A, "optionalAccess", e => e.filter, "call", e => e((e => e.observer)), "optionalAccess", e => e.map, "call", e => e((e => ({
                observer: e.observer,
                options: e.options,
                callback: t => dn({
                  type: Tt.Plugin,
                  data: {
                    plugin: e.name,
                    payload: t
                  }
                })
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
          return "interactive" === document.readyState || "complete" === document.readyState ? n() : (e.push(Ze("DOMContentLoaded", (() => {
            dn({
              type: Tt.DomContentLoaded,
              data: {}
            }), "DOMContentLoaded" === C && n()
          }))), e.push(Ze("load", (() => {
            dn({
              type: Tt.Load,
              data: {}
            }), "load" === C && n()
          }), window))), () => {
            e.forEach((e => e())), X.destroy(), pn = void 0, Bt()
          }
        } catch (e) {
          console.warn(e)
        }
      }

      function mn(e) {
        return e > 9999999999 ? e : 1e3 * e
      }

      function gn(e) {
        return e > 9999999999 ? e / 1e3 : e
      }

      function vn(e, t) {
        "sentry.transaction" !== t.category && (["ui.click", "ui.input"].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(), e.addUpdate((() => (e.throttledAddEvent({
          type: Tt.Custom,
          timestamp: 1e3 * (t.timestamp || 0),
          data: {
            tag: "breadcrumb",
            payload: (0, W.S8)(t, 10, 1e3)
          }
        }), "console" === t.category))))
      }

      function yn(e) {
        return e.closest("button,a") || e
      }

      function _n(e) {
        const t = bn(e);
        return t && t instanceof Element ? yn(t) : t
      }

      function bn(e) {
        return function(e) {
          return "object" == typeof e && !!e && "target" in e
        }(e) ? e.target : e
      }
      let Sn;
      fn.mirror = hn, fn.takeFullSnapshot = function(e) {
        if (!pn) throw new Error("please take full snapshot after start recording");
        pn(e)
      };
      class wn {
        constructor(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : vn;
          this._lastMutation = 0, this._lastScroll = 0, this._clicks = [], this._timeout = t.timeout / 1e3, this._threshold = t.threshold / 1e3, this._scollTimeout = t.scrollTimeout / 1e3, this._replay = e, this._ignoreSelector = t.ignoreSelector, this._addBreadcrumbEvent = n
        }
        addListeners() {
          const e = (t = () => {
            this._lastMutation = kn()
          }, Sn || (Sn = [], (0, G.GS)(ae, "open", (function(e) {
            return function() {
              if (Sn) try {
                Sn.forEach((e => e()))
              } catch (e) {}
              for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
              return e.apply(ae, n)
            }
          }))), Sn.push(t), () => {
            const e = Sn ? Sn.indexOf(t) : -1;
            e > -1 && Sn.splice(e, 1)
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
              return !Tn.includes(e.tagName) || ("INPUT" === e.tagName && !["submit", "button"].includes(e.getAttribute("type") || "") || (!("A" !== e.tagName || !(e.hasAttribute("download") || e.hasAttribute("target") && "_self" !== e.getAttribute("target"))) || !(!t || !e.matches(t))))
            }(t, this._ignoreSelector) || ! function(e) {
              return !(!e.data || "number" != typeof e.data.nodeId || !e.timestamp)
            }(e)) return;
          const n = {
            timestamp: gn(e.timestamp),
            clickBreadcrumb: e,
            clickCount: 0,
            node: t
          };
          this._clicks.some((e => e.node === n.node && Math.abs(e.timestamp - n.timestamp) < 1)) || (this._clicks.push(n), 1 === this._clicks.length && this._scheduleCheckClicks())
        }
        registerMutation() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
          this._lastMutation = gn(e)
        }
        registerScroll() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
          this._lastScroll = gn(e)
        }
        registerClick(e) {
          const t = yn(e);
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
            t = kn();
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
                  url: ae.location.href,
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
                url: ae.location.href,
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
      const Tn = ["A", "BUTTON", "INPUT"];

      function kn() {
        return Date.now() / 1e3
      }

      function En(e) {
        return {
          timestamp: Date.now() / 1e3,
          type: "default",
          ...e
        }
      }
      var xn;
      ! function(e) {
        e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment"
      }(xn || (xn = {}));
      const In = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component"]);

      function Cn(e) {
        const t = {};
        for (const n in e)
          if (In.has(n)) {
            let r = n;
            "data-testid" !== n && "data-test-id" !== n || (r = "testId"), t[r] = e[n]
          } return t
      }

      function Rn(e, t) {
        const n = fn.mirror.getId(e),
          r = n && fn.mirror.getNode(n),
          o = r && fn.mirror.getMeta(r),
          s = o && function(e) {
            return e.type === xn.Element
          }(o) ? o : null;
        return {
          message: t,
          data: s ? {
            nodeId: n,
            node: {
              id: n,
              tagName: s.tagName,
              textContent: Array.from(s.childNodes).map((e => e.type === xn.Text && e.textContent)).filter(Boolean).map((e => e.trim())).join(""),
              attributes: Cn(s.attributes)
            }
          } : {}
        }
      }
      const Mn = {
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
            start: An(s),
            end: An(o),
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
          } = e, s = An(o);
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
            start: An(h),
            end: An(s),
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

      function On(e) {
        return Mn[e.entryType] ? Mn[e.entryType](e) : null
      }

      function An(e) {
        return ((J.k3 || ae.performance.timeOrigin) + e) / 1e3
      }
      const Nn = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;

      function Dn(e, t) {
        Nn && (V.vF.info(e), t && Ln(e))
      }

      function Fn(e, t) {
        Nn && (V.vF.info(e), t && setTimeout((() => {
          Ln(e)
        }), 0))
      }

      function Ln(e) {
        (0, p.ZQ)({
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
      class Pn extends Error {
        constructor() {
          super("Event buffer exceeded maximum size of 20000000.")
        }
      }
      class jn {
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
          if (this._totalSize += t, this._totalSize > fe) throw new Pn;
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
          return e ? mn(e) : null
        }
      }
      class Bn {
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
          Dn("[Replay] Destroying compression worker"), this._worker.terminate()
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
                if (this._worker.removeEventListener("message", s), !a.success) return Nn && V.vF.error("[Replay]", a.response), void o(new Error("Error in compression worker"));
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
      class $n {
        constructor(e) {
          this._worker = new Bn(e), this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1
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
          const t = mn(e.timestamp);
          (!this._earliestTimestamp || t < this._earliestTimestamp) && (this._earliestTimestamp = t);
          const n = JSON.stringify(e);
          return this._totalSize += n.length, this._totalSize > fe ? Promise.reject(new Pn) : this._sendEventToWorker(n)
        }
        finish() {
          return this._finishRequest()
        }
        clear() {
          this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this._worker.postMessage("clear").then(null, (e => {
            Nn && V.vF.warn('[Replay] Sending "clear" message to worker failed', e)
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
      class Un {
        constructor(e) {
          this._fallback = new jn, this._compression = new $n(e), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
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
            return void Dn("[Replay] Failed to load the compression worker, falling back to simple buffer")
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
            Nn && V.vF.warn("[Replay] Failed to add events when switching buffers.", e)
          }
        }
      }

      function Hn() {
        try {
          return "sessionStorage" in ae && !!ae.sessionStorage
        } catch (e) {
          return !1
        }
      }

      function zn(e) {
        return void 0 !== e && Math.random() < e
      }

      function qn(e) {
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

      function Wn(e) {
        if (Hn()) try {
          ae.sessionStorage.setItem(ce, JSON.stringify(e))
        } catch (e) {}
      }

      function Gn(e) {
        let {
          sessionSampleRate: t,
          allowBuffering: n,
          stickySession: r = !1
        } = e, {
          previousSessionId: o
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const s = function(e, t) {
            return zn(e) ? "session" : !!t && "buffer"
          }(t, n),
          i = qn({
            sampled: s,
            previousSessionId: o
          });
        return r && Wn(i), i
      }

      function Kn(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : +new Date;
        return null === e || void 0 === t || t < 0 || 0 !== t && e + t <= n
      }

      function Jn(e, t) {
        let {
          maxReplayDuration: n,
          sessionIdleExpire: r,
          targetTime: o = Date.now()
        } = t;
        return Kn(e.started, n, o) || Kn(e.lastActivity, r, o)
      }

      function Vn(e, t) {
        let {
          sessionIdleExpire: n,
          maxReplayDuration: r
        } = t;
        return !!Jn(e, {
          sessionIdleExpire: n,
          maxReplayDuration: r
        }) && ("buffer" !== e.sampled || 0 !== e.segmentId)
      }

      function Yn(e, t) {
        let {
          traceInternals: n,
          sessionIdleExpire: r,
          maxReplayDuration: o,
          previousSessionId: s
        } = e;
        const i = t.stickySession && function(e) {
          if (!Hn()) return null;
          try {
            const t = ae.sessionStorage.getItem(ce);
            if (!t) return null;
            const n = JSON.parse(t);
            return Fn("[Replay] Loading existing session", e), qn(n)
          } catch (e) {
            return null
          }
        }(n);
        return i ? Vn(i, {
          sessionIdleExpire: r,
          maxReplayDuration: o
        }) ? (Fn("[Replay] Session in sessionStorage is expired, creating new one..."), Gn(t, {
          previousSessionId: i.id
        })) : i : (Fn("[Replay] Creating new session", n), Gn(t, {
          previousSessionId: s
        }))
      }

      function Xn(e, t, n) {
        return !!Zn(e, t) && (Qn(e, t, n), !0)
      }
      async function Qn(e, t, n) {
        if (!e.eventBuffer) return null;
        try {
          n && "buffer" === e.recordingMode && e.eventBuffer.clear(), n && (e.eventBuffer.hasCheckout = !0);
          const r = function(e, t) {
            try {
              if ("function" == typeof t && function(e) {
                  return e.type === Tt.Custom
                }(e)) return t(e)
            } catch (e) {
              return Nn && V.vF.error("[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...", e), null
            }
            return e
          }(t, e.getOptions().beforeAddRecordingEvent);
          if (!r) return;
          return await e.eventBuffer.addEvent(r)
        } catch (t) {
          const n = t && t instanceof Pn ? "addEventSizeExceeded" : "addEvent";
          Nn && V.vF.error(t), await e.stop({
            reason: n
          });
          const r = (0, p.KU)();
          r && r.recordDroppedEvent("internal_sdk_error", "replay")
        }
      }

      function Zn(e, t) {
        if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
        const n = mn(t.timestamp);
        return !(n + e.timeouts.sessionIdlePause < Date.now() || n > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration && (Dn(`[Replay] Skipping event with timestamp ${n} because it is after maxReplayDuration`, e.getOptions()._experiments.traceInternals), 1))
      }

      function er(e) {
        return !e.type
      }

      function tr(e) {
        return "transaction" === e.type
      }

      function nr(e) {
        return "feedback" === e.type
      }

      function rr(e) {
        const t = function() {
          const e = (0, p.KU)();
          if (!e) return !1;
          const t = e.getTransport();
          return t && t.send.__sentry__baseTransport__ || !1
        }();
        return (n, r) => {
          if (!e.isEnabled() || !er(n) && !tr(n)) return;
          const o = r && r.statusCode;
          t && (!o || o < 200 || o >= 300) || (tr(n) ? function(e, t) {
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

      function or(e, t) {
        return t.map((t => {
          let {
            type: n,
            start: r,
            end: o,
            name: s,
            data: i
          } = t;
          const a = e.throttledAddEvent({
            type: Tt.Custom,
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

      function sr(e, t) {
        e.isEnabled() && null !== t && (function(e, t) {
          return (!Nn || !e.getOptions()._experiments.traceInternals) && (0, U.A)(t, (0, p.KU)())
        }(e, t.name) || e.addUpdate((() => (or(e, [t]), !0))))
      }

      function ir(e, t) {
        if (e) try {
          if ("string" == typeof e) return t.encode(e).length;
          if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
          if (e instanceof FormData) {
            const n = fr(e);
            return t.encode(n).length
          }
          if (e instanceof Blob) return e.size;
          if (e instanceof ArrayBuffer) return e.byteLength
        } catch (e) {}
      }

      function ar(e) {
        if (!e) return;
        const t = parseInt(e, 10);
        return isNaN(t) ? void 0 : t
      }

      function cr(e) {
        try {
          if ("string" == typeof e) return [e];
          if (e instanceof URLSearchParams) return [e.toString()];
          if (e instanceof FormData) return [fr(e)];
          if (!e) return [void 0]
        } catch (t) {
          return Nn && V.vF.warn("[Replay] Failed to serialize body", e), [void 0, "BODY_PARSE_ERROR"]
        }
        return Nn && V.vF.info("[Replay] Skipping network body because of body type", e), [void 0, "UNPARSEABLE_BODY_TYPE"]
      }

      function ur(e, t) {
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

      function lr(e, t) {
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
          data: (0, G.Ce)({
            method: s,
            statusCode: i,
            request: a,
            response: c
          })
        }
      }

      function dr(e) {
        return {
          headers: {},
          size: e,
          _meta: {
            warnings: ["URL_SKIPPED"]
          }
        }
      }

      function pr(e, t, n) {
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
            const t = e.length > pe,
              n = function(e) {
                const t = e[0],
                  n = e[e.length - 1];
                return "[" === t && "]" === n || "{" === t && "}" === n
              }(e);
            if (t) {
              const t = e.slice(0, pe);
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

      function hr(e, t) {
        return Object.keys(e).reduce(((n, r) => {
          const o = r.toLowerCase();
          return t.includes(o) && e[r] && (n[o] = e[r]), n
        }), {})
      }

      function fr(e) {
        return new URLSearchParams(e).toString()
      }

      function mr(e, t) {
        const n = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ae.document.baseURI;
          if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith(ae.location.origin)) return e;
          const n = new URL(e, t);
          if (n.origin !== new URL(t).origin) return e;
          const r = n.href;
          return !e.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r
        }(e);
        return (0, Q.Xr)(n, t)
      }

      function gr() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        if (2 === e.length && "object" == typeof e[1]) return e[1].body
      }

      function vr(e, t) {
        const n = {};
        return t.forEach((t => {
          e.get(t) && (n[t] = e.get(t))
        })), n
      }

      function yr(e, t) {
        if (!e) return {};
        const n = e.headers;
        return n ? n instanceof Headers ? vr(n, t) : Array.isArray(n) ? {} : hr(n, t) : {}
      }

      function _r(e) {
        const t = (0, p.KU)();
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
                const s = ir(o, n.textEncoder),
                  i = r.getResponseHeader("content-length") ? ar(r.getResponseHeader("content-length")) : function(e, t, n) {
                    try {
                      return ir("json" === t && e && "object" == typeof e ? JSON.stringify(e) : e, n)
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
                      if (!a || !mr(c, n.networkDetailAllowUrls) || mr(c, n.networkDetailDenyUrls)) return {
                        startTimestamp: o,
                        endTimestamp: s,
                        url: c,
                        method: u,
                        statusCode: l,
                        request: dr(d),
                        response: dr(p)
                      };
                      const h = a[X.Er],
                        f = h ? hr(h.request_headers, n.networkRequestHeaders) : {},
                        m = hr(function(e) {
                          const t = e.getAllResponseHeaders();
                          return t ? t.split("\r\n").reduce(((e, t) => {
                            const [n, r] = t.split(": ");
                            return e[n.toLowerCase()] = r, e
                          }), {}) : {}
                        }(a), n.networkResponseHeaders),
                        [g, v] = n.networkCaptureBodies ? cr(i) : [void 0],
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
                                return Nn && V.vF.warn("[Replay] Failed to serialize body", e), [void 0, "BODY_PARSE_ERROR"]
                              }
                              return Nn && V.vF.info("[Replay] Skipping network body because of body type", e), [void 0, "UNPARSEABLE_BODY_TYPE"]
                            }(e.response, e.responseType)
                          } catch (e) {
                            t.push(e)
                          }
                          return Nn && V.vF.warn("[Replay] Failed to get xhr response body", ...t), [void 0]
                        }(a) : [void 0],
                        b = pr(f, d, g),
                        S = pr(m, p, y);
                      return {
                        startTimestamp: o,
                        endTimestamp: s,
                        url: c,
                        method: u,
                        statusCode: l,
                        request: v ? ur(b, v) : b,
                        response: _ ? ur(S, _) : S
                      }
                    }(e, t, n),
                    o = lr("resource.xhr", r);
                  sr(n.replay, o)
                } catch (e) {
                  Nn && V.vF.error("[Replay] Failed to capture xhr breadcrumb", e)
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
                } = t, s = ir(r ? gr(r) : void 0, n.textEncoder), i = o ? ar(o.headers.get("content-length")) : void 0;
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
                      d = mr(i, n.networkDetailAllowUrls) && !mr(i, n.networkDetailDenyUrls),
                      p = d ? function(e, t, n) {
                        let {
                          networkCaptureBodies: r,
                          networkRequestHeaders: o
                        } = e;
                        const s = t ? (a = o, 1 === (i = t).length && "string" != typeof i[0] ? yr(i[0], a) : 2 === i.length ? yr(i[1], a) : {}) : {};
                        var i, a;
                        if (!r) return pr(s, n, void 0);
                        const c = gr(t),
                          [u, l] = cr(c),
                          d = pr(s, n, u);
                        return l ? ur(d, l) : d
                      }(n, t.input, u) : dr(u),
                      h = await async function(e, t, n, r) {
                        let {
                          networkCaptureBodies: o,
                          textEncoder: s,
                          networkResponseHeaders: i
                        } = t;
                        if (!e && void 0 !== r) return dr(r);
                        const a = n ? vr(n.headers, i) : {};
                        if (!n || !o && void 0 !== r) return pr(a, r, void 0);
                        const [c, u] = await async function(e) {
                          const t = function(e) {
                            try {
                              return e.clone()
                            } catch (e) {
                              Nn && V.vF.warn("[Replay] Failed to clone response body", e)
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
                            return Nn && V.vF.warn("[Replay] Failed to get text body from response", e), [void 0, "BODY_PARSE_ERROR"]
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
                            const t = e && e.length && void 0 === o ? ir(e, r) : o;
                            return s ? pr(i, t, n ? e : void 0) : dr(t)
                          } catch (e) {
                            return Nn && V.vF.warn("[Replay] Failed to serialize response body", e), pr(i, o, void 0)
                          }
                        }(c, {
                          networkCaptureBodies: o,
                          textEncoder: s,
                          responseBodySize: r,
                          captureDetails: e,
                          headers: a
                        });
                        return u ? ur(l, u) : l
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
                  }(e, t, n), o = lr("resource.fetch", r);
                  sr(n.replay, o)
                } catch (e) {
                  Nn && V.vF.error("[Replay] Failed to capture fetch breadcrumb", e)
                }
              }(t, n, e))
            } catch (e) {
              Nn && V.vF.warn("Error when enriching network breadcrumb")
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
              sr(e, n)
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
              sr(e, n)
            }
          }(e)))
        } catch (e) {}
      }
      let br = null;

      function Sr(e) {
        return !(!e || !e.on)
      }

      function wr(e) {
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

      function Tr(e) {
        let t = !1;
        return (n, r) => {
          if (!e.checkAndHandleExpiredSession()) return void(Nn && V.vF.warn("[Replay] Received replay event after session expired."));
          const o = r || !t;
          t = !0, e.clickDetector && function(e, t) {
            try {
              if (! function(e) {
                  return 3 === e.type
                }(t)) return;
              const {
                source: n
              } = t.data;
              if (n === kt.Mutation && e.registerMutation(t.timestamp), n === kt.Scroll && e.registerScroll(t.timestamp), function(e) {
                  return e.data.source === kt.MouseInteraction
                }(t)) {
                const {
                  type: n,
                  id: r
                } = t.data, o = fn.mirror.getNode(r);
                o instanceof HTMLElement && n === Et.Click && e.registerClick(o)
              }
            } catch (e) {}
          }(e.clickDetector, n), e.addUpdate((() => {
            if ("buffer" === e.recordingMode && o && e.setInitialState(), !Xn(e, n, o)) return !0;
            if (!o) return !1;
            if (function(e, t) {
                t && e.session && 0 === e.session.segmentId && Xn(e, function(e) {
                  const t = e.getOptions();
                  return {
                    type: Tt.Custom,
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
              t && (Dn(`[Replay] Updating session start time to earliest event in buffer to ${new Date(t)}`, e.getOptions()._experiments.traceInternals), e.session.started = t, e.getOptions().stickySession && Wn(e.session))
            }
            return "session" === e.recordingMode && e.flush(), !0
          }))
        }
      }
      class kr extends Error {
        constructor(e) {
          super(`Transport returned status code ${e}`)
        }
      }
      class Er extends Error {
        constructor(e) {
          super("Rate limit hit"), this.rateLimits = e
        }
      }
      async function xr(e) {
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
                traceIds: d,
                initialTimestamp: h
              } = o,
              f = (0, p.KU)(),
              m = (0, p.o5)(),
              g = f && f.getTransport(),
              v = f && f.getDsn();
            if (!(f && g && v && a.sampled)) return;
            const y = {
                type: "replay_event",
                replay_start_timestamp: h / 1e3,
                timestamp: s / 1e3,
                error_ids: l,
                trace_ids: d,
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
                const a = await (0, H.mG)(t.getOptions(), o, s, n, t, (0, i.rm)());
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
            if (!_) return f.recordDroppedEvent("event_processor", "replay", y), void Dn("An event processor returned `null`, will not send event.");
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
              const t = new Error(ue);
              try {
                t.cause = e
              } catch (e) {}
              throw t
            }
            if (!S) return S;
            if ("number" == typeof S.statusCode && (S.statusCode < 200 || S.statusCode >= 300)) throw new kr(S.statusCode);
            const w = (0, re.wq)({}, S);
            if ((0, re.Jz)(w, "replay")) throw new Er(w);
            return S
          }(e), !0
        } catch (n) {
          if (n instanceof kr || n instanceof Er) throw n;
          if ((0, p.o)("Replays", {
              _retryCount: t.count
            }), Nn && r._experiments && r._experiments.captureExceptions && (0, p.Cp)(n), t.count >= 3) {
            const e = new Error(`${ue} - max retries exceeded`);
            try {
              e.cause = n
            } catch (e) {}
            throw e
          }
          return t.interval *= ++t.count, new Promise(((n, r) => {
            setTimeout((async () => {
              try {
                await xr(e, t), n(!0)
              } catch (e) {
                r(e)
              }
            }), t.interval)
          }))
        }
      }
      const Ir = "__THROTTLED";
      class Cr {
        constructor(e) {
          let {
            options: t,
            recordingOptions: n
          } = e;
          Cr.prototype.__init.call(this), Cr.prototype.__init2.call(this), Cr.prototype.__init3.call(this), Cr.prototype.__init4.call(this), Cr.prototype.__init5.call(this), Cr.prototype.__init6.call(this), this.eventBuffer = null, this.performanceEntries = [], this.replayPerformanceEntries = [], this.recordingMode = "session", this.timeouts = {
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
                return o = !0, e ? "__SKIPPED" : Ir
              }
              o = !1;
              const i = r.get(s) || 0;
              return r.set(s, i + 1), e(...arguments)
            }
          }(((e, t) => function(e, t, n) {
            return Zn(e, t) ? Qn(e, t, n) : Promise.resolve(null)
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
          s && (this.clickDetector = new wn(this, s))
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
          t <= 0 && n <= 0 || (this._initializeSessionForSampling(e), this.session ? !1 !== this.session.sampled && (this.recordingMode = "buffer" === this.session.sampled && 0 === this.session.segmentId ? "buffer" : "session", Fn(`[Replay] Starting replay in ${this.recordingMode} mode`, this._options._experiments.traceInternals), this._initializeRecording()) : this._handleException(new Error("Unable to initialize and create session")))
        }
        start() {
          if (this._isEnabled && "session" === this.recordingMode) throw new Error("Replay recording is already in progress");
          if (this._isEnabled && "buffer" === this.recordingMode) throw new Error("Replay buffering is in progress, call `flush()` to save the replay");
          Fn("[Replay] Starting replay in session mode", this._options._experiments.traceInternals), this._updateUserActivity();
          const e = Yn({
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
          Fn("[Replay] Starting replay in buffer mode", this._options._experiments.traceInternals);
          const e = Yn({
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
            this._stopRecording = fn({
              ...this._recordingOptions,
              ..."buffer" === this.recordingMode && {
                checkoutEveryNms: 6e4
              },
              emit: Tr(this),
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
              Dn("[Replay] Stopping Replay" + (t ? ` triggered by ${t}` : ""), this._options._experiments.traceInternals), this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), e && await this._flush({
                  force: !0
                }), this.eventBuffer && this.eventBuffer.destroy(), this.eventBuffer = null, n = this,
                function() {
                  if (Hn()) try {
                    ae.sessionStorage.removeItem(ce)
                  } catch (e) {}
                }(), n.session = void 0
            } catch (e) {
              this._handleException(e)
            }
          }
          var n
        }
        pause() {
          this._isPaused || (this._isPaused = !0, this.stopRecording(), Dn("[Replay] Pausing replay", this._options._experiments.traceInternals))
        }
        resume() {
          this._isPaused && this._checkSession() && (this._isPaused = !1, this.startRecording(), Dn("[Replay] Resuming replay", this._options._experiments.traceInternals))
        }
        async sendBufferedReplayOrFlush() {
          let {
            continueRecording: e = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if ("session" === this.recordingMode) return this.flushImmediate();
          const t = Date.now();
          Dn("[Replay] Converting buffer to session", this._options._experiments.traceInternals), await this.flushImmediate();
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
          if (!(this._lastActivity && Kn(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && "session" === this.session.sampled)) return !!this._checkSession();
          this.pause()
        }
        setInitialState() {
          const e = `${ae.location.pathname}${ae.location.hash}${ae.location.search}`,
            t = `${ae.location.origin}${e}`;
          this.performanceEntries = [], this.replayPerformanceEntries = [], this._clearContext(), this._context.initialUrl = t, this._context.initialTimestamp = Date.now(), this._context.urls.push(t)
        }
        throttledAddEvent(e, t) {
          const n = this._throttledAddEvent(e, t);
          if (n === Ir) {
            const e = En({
              category: "replay.throttled"
            });
            this.addUpdate((() => !Xn(this, {
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
          const e = this.lastTransaction || (0, p.o5)().getTransaction(),
            t = (e && (0, z.et)(e).data || {})[l.i_];
          if (e && t && ["route", "custom"].includes(t)) return (0, z.et)(e).description
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
                  Dn("[Replay] Using compression worker" + (e ? ` from ${e}` : ""));
                  const n = new Worker(t);
                  return new Un(n)
                } catch (e) {
                  Dn("[Replay] Failed to create compression worker")
                }
              }(n);
              if (e) return e
            }
            return Dn("[Replay] Using simple buffer"), new jn
          }({
            useCompression: this._options.useCompression,
            workerUrl: this._options.workerUrl
          }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this._isPaused = !1, this.startRecording()
        }
        _handleException(e) {
          Nn && V.vF.error("[Replay]", e), Nn && this._options._experiments && this._options._experiments.captureExceptions && (0, p.Cp)(e)
        }
        _initializeSessionForSampling(e) {
          const t = this._options.errorSampleRate > 0,
            n = Yn({
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
          return !Vn(e, {
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
            ae.document.addEventListener("visibilitychange", this._handleVisibilityChange), ae.addEventListener("blur", this._handleWindowBlur), ae.addEventListener("focus", this._handleWindowFocus), ae.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), this._hasInitializedCoreListeners || (function(e) {
              const t = (0, p.o5)(),
                n = (0, p.KU)();
              t.addScopeListener((e => t => {
                if (!e.isEnabled()) return;
                const n = function(e) {
                  const t = e.getLastBreadcrumb && e.getLastBreadcrumb();
                  return br !== t && t ? (br = t, !t.category || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(t.category) || t.category.startsWith("ui.") ? null : "console" === t.category ? function(e) {
                    const t = e.data && e.data.arguments;
                    if (!Array.isArray(t) || 0 === t.length) return En(e);
                    let n = !1;
                    const r = t.map((e => {
                      if (!e) return e;
                      if ("string" == typeof e) return e.length > he ? (n = !0, `${e.slice(0,he)}…`) : e;
                      if ("object" == typeof e) try {
                        const t = (0, W.S8)(e, 7);
                        return JSON.stringify(t).length > he ? (n = !0, `${JSON.stringify(t,null,2).slice(0,he)}…`) : t
                      } catch (e) {}
                      return e
                    }));
                    return En({
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
                  }(t) : En(t)) : null
                }(t);
                n && vn(e, n)
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
                      r = t ? _n(e.event) : bn(e.event), n = (0, K.Hd)(r, {
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
                  return En({
                    category: `ui.${e.name}`,
                    ...Rn(t, n)
                  })
                }(t);
                if (!n) return;
                const r = "click" === t.name,
                  o = r ? t.event : void 0;
                !(r && e.clickDetector && o && o.target) || o.altKey || o.metaKey || o.ctrlKey || o.shiftKey || function(e, t, n) {
                  e.handleClick(t, n)
                }(e.clickDetector, n, _n(t.event)), vn(e, n)
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
                  null !== n && (e.getContext().urls.push(n.name), e.triggerUserActivity(), e.addUpdate((() => (or(e, [n]), !1))))
                }
              }(e)), _r(e);
              const r = function(e) {
                const t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? rr(e) : void 0;
                return Object.assign(((n, r) => {
                  if (!e.isEnabled()) return n;
                  if (function(e) {
                      return "replay_event" === e.type
                    }(n)) return delete n.breadcrumbs, n;
                  if (!er(n) && !tr(n) && !nr(n)) return n;
                  if (!e.checkAndHandleExpiredSession()) return n;
                  if (nr(n)) return e.flush(), n.contexts.feedback.replay_id = e.getSessionId(),
                    function(e, t) {
                      e.triggerUserActivity(), e.addUpdate((() => !t.timestamp || (e.throttledAddEvent({
                        type: Tt.Custom,
                        timestamp: 1e3 * t.timestamp,
                        data: {
                          tag: "breadcrumb",
                          payload: {
                            timestamp: t.timestamp,
                            type: "default",
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
                    }(n, r) && !e.getOptions()._experiments.captureExceptions) return Nn && V.vF.log("[Replay] Ignoring error from rrweb internals", n), null;
                  const o = function(e, t) {
                    return "buffer" === e.recordingMode && t.message !== ue && !(!t.exception || t.type) && zn(e.getOptions().errorSampleRate)
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
              }(e, !Sr(n));
              n && n.addEventProcessor ? n.addEventProcessor(r) : (0, h.S)(r), Sr(n) && (n.on("beforeSendEvent", function(e) {
                return t => {
                  e.isEnabled() && er(t) && function(e, t) {
                    const n = t.exception && t.exception.values && t.exception.values[0].value;
                    "string" == typeof n && (n.match(/reactjs\.org\/docs\/error-decoder\.html\?invariant=(418|419|422|423|425)/) || n.match(/(does not match server-rendered HTML|Hydration failed because)/i)) && vn(e, En({
                      category: "replay.hydrate-error"
                    }))
                  }(e, t)
                }
              }(e)), n.on("afterSendEvent", rr(e)), n.on("createDsc", (t => {
                const n = e.getSessionId();
                n && e.isEnabled() && "session" === e.recordingMode && e.checkAndHandleExpiredSession() && (t.replay_id = n)
              })), n.on("startTransaction", (t => {
                e.lastTransaction = t
              })), n.on("finishTransaction", (t => {
                e.lastTransaction = t
              })), n.on("beforeSendFeedback", ((t, n) => {
                const r = e.getSessionId();
                n && n.includeReplay && e.isEnabled() && r && t.contexts && t.contexts.feedback && (t.contexts.feedback.replay_id = r)
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
              r.push((0, ie.wv)(e, n))
            })), r.push((0, ie.Pt)((t => {
              let {
                metric: n
              } = t;
              e.replayPerformanceEntries.push(function(e) {
                const t = e.entries,
                  n = t[t.length - 1],
                  r = n ? n.element : void 0,
                  o = e.value,
                  s = An(o);
                return {
                  type: "largest-contentful-paint",
                  name: "largest-contentful-paint",
                  start: s,
                  end: s,
                  data: {
                    value: o,
                    size: o,
                    nodeId: r ? fn.mirror.getId(r) : void 0
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
            ae.document.removeEventListener("visibilitychange", this._handleVisibilityChange), ae.removeEventListener("blur", this._handleWindowBlur), ae.removeEventListener("focus", this._handleWindowFocus), ae.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceCleanupCallback && this._performanceCleanupCallback()
          } catch (e) {
            this._handleException(e)
          }
        }
        __init() {
          this._handleVisibilityChange = () => {
            "visible" === ae.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
          }
        }
        __init2() {
          this._handleWindowBlur = () => {
            const e = En({
              category: "ui.blur"
            });
            this._doChangeToBackgroundTasks(e)
          }
        }
        __init3() {
          this._handleWindowFocus = () => {
            const e = En({
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
                const u = (0, K.Hd)(i, {
                  maxStringLength: 200
                }) || "<unknown>";
                return En({
                  category: "ui.keyDown",
                  message: u,
                  data: {
                    ...Rn(i, u).data,
                    metaKey: t,
                    shiftKey: n,
                    ctrlKey: r,
                    altKey: o,
                    key: s
                  }
                })
              }(t);
              n && vn(e, n)
            }(this, e)
          }
        }
        _doChangeToBackgroundTasks(e) {
          this.session && (Jn(this.session, {
            maxReplayDuration: this._options.maxReplayDuration,
            sessionIdleExpire: this.timeouts.sessionIdleExpire
          }) || (e && this._createCustomBreadcrumb(e), this.conditionalFlush()))
        }
        _doChangeToForegroundTasks(e) {
          this.session && (this.checkAndHandleExpiredSession() ? e && this._createCustomBreadcrumb(e) : Dn("[Replay] Document has become active, but session has expired"))
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
              type: Tt.Custom,
              timestamp: e.timestamp || 0,
              data: {
                tag: "breadcrumb",
                payload: e
              }
            })
          }))
        }
        _addPerformanceEntries() {
          const e = (t = this.performanceEntries, t.map(On).filter(Boolean)).concat(this.replayPerformanceEntries);
          var t;
          return this.performanceEntries = [], this.replayPerformanceEntries = [], Promise.all(or(this, e))
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
                  return Promise.all(or(e, [wr(ae.performance.memory)]))
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
              await xr({
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
              const t = (0, p.KU)();
              t && t.recordDroppedEvent("send_error", "replay")
            }
          } else Nn && V.vF.error("[Replay] No session or eventBuffer found to flush.")
        }
        __init5() {
          var e = this;
          this._flush = async function() {
            let {
              force: t = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (!e._isEnabled && !t) return;
            if (!e.checkAndHandleExpiredSession()) return void(Nn && V.vF.error("[Replay] Attempting to finish replay event after session expired."));
            if (!e.session) return;
            const n = e.session.started,
              r = Date.now() - n;
            e._debouncedFlush.cancel();
            const o = r < e._options.minReplayDuration,
              s = r > e._options.maxReplayDuration + 5e3;
            if (o || s) return Dn(`[Replay] Session duration (${Math.floor(r/1e3)}s) is too ${o?"short":"long"}, not sending replay.`, e._options._experiments.traceInternals), void(o && e._debouncedFlush());
            const i = e.eventBuffer;
            if (i && 0 === e.session.segmentId && !i.hasCheckout && Dn("[Replay] Flushing initial segment without checkout.", e._options._experiments.traceInternals), !e._flushLock) return e._flushLock = e._runFlush(), await e._flushLock, void(e._flushLock = void 0);
            try {
              await e._flushLock
            } catch (e) {
              Nn && V.vF.error(e)
            } finally {
              e._debouncedFlush()
            }
          }
        }
        _maybeSaveSession() {
          this.session && this._options.stickySession && Wn(this.session)
        }
        __init6() {
          this._onMutationHandler = e => {
            const t = e.length,
              n = this._options.mutationLimit,
              r = n && t > n;
            if (t > this._options.mutationBreadcrumbLimit || r) {
              const e = En({
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

      function Rr(e, t, n, r) {
        const o = [...e, ..."string" == typeof r ? r.split(",") : [], ...t];
        return void 0 !== n && ("string" == typeof n && o.push(`.${n}`), (0, V.pq)((() => {
          console.warn("[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration.")
        }))), o.join(",")
      }
      const Mr = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
        Or = ["content-length", "content-type", "accept"];
      let Ar = !1;
      const Nr = e => new Dr(e);
      class Dr {
        static __initStatic() {
          this.id = "Replay"
        }
        constructor() {
          let {
            flushMinDelay: e = le,
            flushMaxDelay: t = de,
            minReplayDuration: n = me,
            maxReplayDuration: r = ge,
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
            maskAttributes: T = ["title", "placeholder"],
            unmask: k = [],
            block: E = [],
            unblock: x = [],
            ignore: I = [],
            maskFn: C,
            beforeAddRecordingEvent: R,
            beforeErrorSampling: M,
            blockClass: O,
            blockSelector: A,
            maskInputOptions: N,
            maskTextClass: D,
            maskTextSelector: F,
            ignoreClass: L
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.name = Dr.id;
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
              maskTextSelector: Rr(t, [".sentry-mask", "[data-sentry-mask]"], c, u),
              unmaskTextSelector: Rr(n, [".sentry-unmask", "[data-sentry-unmask]"]),
              blockSelector: Rr(r, [".sentry-block", "[data-sentry-block]", 'base[href="/"]'], i, a),
              unblockSelector: Rr(o, [".sentry-unblock", "[data-sentry-unblock]"]),
              ignoreSelector: Rr(s, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'], l)
            };
            return i instanceof RegExp && (d.blockClass = i), c instanceof RegExp && (d.maskTextClass = c), d
          }({
            mask: w,
            unmask: k,
            block: E,
            unblock: x,
            ignore: I,
            blockClass: O,
            blockSelector: A,
            maskTextClass: D,
            maskTextSelector: F,
            ignoreClass: L
          });
          if (this._recordingOptions = {
              maskAllInputs: d,
              maskAllText: l,
              maskInputOptions: {
                ...N || {},
                password: !0
              },
              maskTextFn: C,
              maskInputFn: C,
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
                maskAttributes: T,
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
              maxReplayDuration: Math.min(r, ge),
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
              networkRequestHeaders: Fr(b),
              networkResponseHeaders: Fr(S),
              beforeAddRecordingEvent: R,
              beforeErrorSampling: M,
              _experiments: a
            }, "number" == typeof c && (console.warn(`[Replay] You are passing \`sessionSampleRate\` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure \`replaysSessionSampleRate\` directly in the SDK init options, e.g.:\nSentry.init({ replaysSessionSampleRate: ${c} })`), this._initialOptions.sessionSampleRate = c), "number" == typeof u && (console.warn(`[Replay] You are passing \`errorSampleRate\` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure \`replaysOnErrorSampleRate\` directly in the SDK init options, e.g.:\nSentry.init({ replaysOnErrorSampleRate: ${u} })`), this._initialOptions.errorSampleRate = u), this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${Mr}` : Mr), this._isInitialized && se()) throw new Error("Multiple Sentry Session Replay instances are not supported");
          this._isInitialized = !0
        }
        get _isInitialized() {
          return Ar
        }
        set _isInitialized(e) {
          Ar = e
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
            const t = (0, p.KU)(),
              n = t && t.getOptions(),
              r = {
                sessionSampleRate: 0,
                errorSampleRate: 0,
                ...(0, G.Ce)(e)
              };
            return n ? (null == e.sessionSampleRate && null == e.errorSampleRate && null == n.replaysSessionSampleRate && null == n.replaysOnErrorSampleRate && (0, V.pq)((() => {
              console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.")
            })), "number" == typeof n.replaysSessionSampleRate && (r.sessionSampleRate = n.replaysSessionSampleRate), "number" == typeof n.replaysOnErrorSampleRate && (r.errorSampleRate = n.replaysOnErrorSampleRate), r) : ((0, V.pq)((() => {
              console.warn("SDK client is not available.")
            })), r)
          }(this._initialOptions);
          this._replay = new Cr({
            options: e,
            recordingOptions: this._recordingOptions
          })
        }
        _maybeLoadFromReplayCanvasIntegration() {
          try {
            const e = (0, p.KU)().getIntegrationByName("ReplayCanvas");
            if (!e) return;
            this._replay._canvas = e.getOptions()
          } catch (e) {}
        }
      }

      function Fr(e) {
        return [...Or, ...e.map((e => e.toLowerCase()))]
      }

      function Lr() {
        const e = (0, p.KU)();
        return e && e.getIntegrationByName && e.getIntegrationByName("Replay")
      }
      var Pr;

      function jr(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0,
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        return e ? e.nodeType !== e.ELEMENT_NODE || r > n ? -1 : t(e) ? r : jr(e.parentNode, t, n, r + 1) : -1
      }

      function Br(e, t) {
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
      Dr.__initStatic(),
        function(e) {
          e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment"
        }(Pr || (Pr = {}));
      const $r = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
      let Ur = {
        map: {},
        getId: () => (console.error($r), -1),
        getNode: () => (console.error($r), null),
        removeNodeFromMap() {
          console.error($r)
        },
        has: () => (console.error($r), !1),
        reset() {
          console.error($r)
        }
      };

      function Hr(e, t, n, r) {
        let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
        const s = o.Object.getOwnPropertyDescriptor(e, t);
        return o.Object.defineProperty(e, t, r ? n : {
          set(e) {
            Jr((() => {
              n.set.call(this, e)
            }), 0), s && s.set && s.set.call(this, e)
          }
        }), () => Hr(e, t, s || {}, !0)
      }

      function zr(e, t, n) {
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

      function qr(e, t, n, r, o) {
        if (!e) return !1;
        const s = function(e) {
          return e ? e.nodeType === e.ELEMENT_NODE ? e : e.parentElement : null
        }(e);
        if (!s) return !1;
        const i = Br(t, n);
        if (!o) {
          const e = r && s.matches(r);
          return i(s) && !e
        }
        const a = jr(s, i);
        let c = -1;
        return !(a < 0) && (r && (c = jr(s, Br(null, r))), a > -1 && c < 0 || a < c)
      }
      "undefined" != typeof window && window.Proxy && window.Reflect && (Ur = new Proxy(Ur, {
        get: (e, t, n) => ("map" === t && console.error($r), Reflect.get(e, t, n))
      })), /[1-9][0-9]{12}/.test(Date.now().toString());
      const Wr = {};

      function Gr(e) {
        const t = Wr[e];
        if (t) return t;
        const n = window.document;
        let r = window[e];
        if (n && "function" == typeof n.createElement) try {
          const t = n.createElement("iframe");
          t.hidden = !0, n.head.appendChild(t);
          const o = t.contentWindow;
          o && o[e] && (r = o[e]), n.head.removeChild(t)
        } catch (e) {}
        return Wr[e] = r.bind(window)
      }

      function Kr() {
        return Gr("requestAnimationFrame")(...arguments)
      }

      function Jr() {
        return Gr("setTimeout")(...arguments)
      }
      var Vr = (e => (e[e["2D"] = 0] = "2D", e[e.WebGL = 1] = "WebGL", e[e.WebGL2 = 2] = "WebGL2", e))(Vr || {});
      let Yr;
      const Xr = e => Yr ? function() {
        try {
          return e(...arguments)
        } catch (e) {
          if (Yr && !0 === Yr(e)) return () => {};
          throw e
        }
      } : e;
      for (var Qr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Zr = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), eo = 0; eo < 64; eo++) Zr[Qr.charCodeAt(eo)] = eo;
      const to = new Map,
        no = (e, t, n) => {
          if (!e || !so(e, t) && "object" != typeof e) return;
          const r = function(e, t) {
            let n = to.get(e);
            return n || (n = new Map, to.set(e, n)), n.has(t) || n.set(t, []), n.get(t)
          }(n, e.constructor.name);
          let o = r.indexOf(e);
          return -1 === o && (o = r.length, r.push(e)), o
        };

      function ro(e, t, n) {
        if (e instanceof Array) return e.map((e => ro(e, t, n)));
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
              for (t = 0; t < r; t += 3) o += Qr[n[t] >> 2], o += Qr[(3 & n[t]) << 4 | n[t + 1] >> 4], o += Qr[(15 & n[t + 1]) << 2 | n[t + 2] >> 6], o += Qr[63 & n[t + 2]];
              return r % 3 == 2 ? o = o.substring(0, o.length - 1) + "=" : r % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="), o
            }(e);
          return {
            rr_type: t,
            base64: n
          }
        }
        if (e instanceof DataView) return {
          rr_type: e.constructor.name,
          args: [ro(e.buffer, t, n), e.byteOffset, e.byteLength]
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
          args: [ro(e.data, t, n), e.width, e.height]
        } : so(e, t) || "object" == typeof e ? {
          rr_type: e.constructor.name,
          index: no(e, t, n)
        } : e
      }
      const oo = (e, t, n) => e.map((e => ro(e, t, n))),
        so = (e, t) => {
          const n = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((e => "function" == typeof t[e]));
          return Boolean(n.find((n => e instanceof t[n])))
        };

      function io(e, t, n, r, o) {
        const s = [];
        try {
          const i = zr(e.HTMLCanvasElement.prototype, "getContext", (function(e) {
            return function(s) {
              for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), c = 1; c < i; c++) a[c - 1] = arguments[c];
              if (!qr(this, t, n, r, !0)) {
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

      function ao(e, t, n, r, o, s, i, a) {
        const c = [],
          u = Object.getOwnPropertyNames(e);
        for (const i of u)
          if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(i)) try {
            if ("function" != typeof e[i]) continue;
            const u = zr(e, i, (function(e) {
              return function() {
                for (var c = arguments.length, u = new Array(c), l = 0; l < c; l++) u[l] = arguments[l];
                const d = e.apply(this, u);
                if (no(d, a, this), "tagName" in this.canvas && !qr(this.canvas, r, o, s, !0)) {
                  const e = oo(u, a, this),
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
            const o = Hr(e, i, {
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
      class co {
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
            maxCanvasSize: i,
            recordCanvas: a,
            dataURLOptions: c,
            errorHandler: u
          } = e;
          this.mutationCb = e.mutationCb, this.mirror = e.mirror, this.options = e, u && (Yr = u), e.enableManualSnapshot || Xr((() => {
            a && "all" === t && this.initCanvasMutationObserver(n, r, o, s), a && "number" == typeof t && this.initCanvasFPSObserver(t, n, r, o, s, i, {
              dataURLOptions: c
            })
          }))()
        }
        initCanvasFPSObserver(e, t, n, r, o, s, i) {
          const a = io(t, n, r, o, !0),
            c = this.takeSnapshot(!1, e, t, n, r, o, s, i.dataURLOptions);
          this.resetObservers = () => {
            a(), cancelAnimationFrame(c)
          }
        }
        initCanvasMutationObserver(e, t, n, r) {
          this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
          const o = io(e, t, n, r, !1),
            s = function(e, t, n, r, o) {
              const s = [],
                i = Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype);
              for (const a of i) try {
                if ("function" != typeof t.CanvasRenderingContext2D.prototype[a]) continue;
                const i = zr(t.CanvasRenderingContext2D.prototype, a, (function(s) {
                  return function() {
                    for (var i = arguments.length, c = new Array(i), u = 0; u < i; u++) c[u] = arguments[u];
                    return qr(this.canvas, n, r, o, !0) || Jr((() => {
                      const n = oo(c, t, this);
                      e(this.canvas, {
                        type: Vr["2D"],
                        property: a,
                        args: n
                      })
                    }), 0), s.apply(this, c)
                  }
                }));
                s.push(i)
              } catch (n) {
                const r = Hr(t.CanvasRenderingContext2D.prototype, a, {
                  set(t) {
                    e(this.canvas, {
                      type: Vr["2D"],
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
            i = function(e, t, n, r, o) {
              const s = [];
              return s.push(...ao(t.WebGLRenderingContext.prototype, Vr.WebGL, e, n, r, o, 0, t)), void 0 !== t.WebGL2RenderingContext && s.push(...ao(t.WebGL2RenderingContext.prototype, Vr.WebGL2, e, n, r, o, 0, t)), () => {
                s.forEach((e => e()))
              }
            }(this.processMutation.bind(this), e, t, n, r, this.mirror);
          this.resetObservers = () => {
            o(), s(), i()
          }
        }
        snapshot(e) {
          const {
            options: t
          } = this, n = this.takeSnapshot(!0, "all" === t.sampling ? 2 : t.sampling || 2, t.win, t.blockClass, t.blockSelector, t.unblockSelector, t.maxCanvasSize, t.dataURLOptions, e);
          this.resetObservers = () => {
            cancelAnimationFrame(n)
          }
        }
        takeSnapshot(e, t, n, r, o, s, i, a, c) {
          const u = new Map,
            l = new Worker(function() {
              const e = new Blob(['for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="undefined"==typeof Uint8Array?[]:new Uint8Array(256),a=0;a<64;a++)t[e.charCodeAt(a)]=a;var n=function(t){var a,n=new Uint8Array(t),r=n.length,s="";for(a=0;a<r;a+=3)s+=e[n[a]>>2],s+=e[(3&n[a])<<4|n[a+1]>>4],s+=e[(15&n[a+1])<<2|n[a+2]>>6],s+=e[63&n[a+2]];return r%3==2?s=s.substring(0,s.length-1)+"=":r%3==1&&(s=s.substring(0,s.length-2)+"=="),s};const r=new Map,s=new Map;const i=self;i.onmessage=async function(e){if(!("OffscreenCanvas"in globalThis))return i.postMessage({id:e.data.id});{const{id:t,bitmap:a,width:o,height:f,maxCanvasSize:c,dataURLOptions:g}=e.data,u=async function(e,t,a){const r=e+"-"+t;if("OffscreenCanvas"in globalThis){if(s.has(r))return s.get(r);const i=new OffscreenCanvas(e,t);i.getContext("2d");const o=await i.convertToBlob(a),f=await o.arrayBuffer(),c=n(f);return s.set(r,c),c}return""}(o,f,g),[h,d]=function(e,t,a){if(!a)return[e,t];const[n,r]=a;if(e<=n&&t<=r)return[e,t];let s=e,i=t;return s>n&&(i=Math.floor(n*t/e),s=n),i>r&&(s=Math.floor(r*e/t),i=r),[s,i]}(o,f,c),l=new OffscreenCanvas(h,d),w=l.getContext("bitmaprenderer"),p=h===o&&d===f?a:await createImageBitmap(a,{resizeWidth:h,resizeHeight:d,resizeQuality:"low"});w.transferFromImageBitmap(p),a.close();const y=await l.convertToBlob(g),v=y.type,b=await y.arrayBuffer(),m=n(b);if(p.close(),!r.has(t)&&await u===m)return r.set(t,m),i.postMessage({id:t});if(r.get(t)===m)return i.postMessage({id:t});i.postMessage({id:t,type:v,base64:m,width:o,height:f}),r.set(t,m)}};']);
              return URL.createObjectURL(e)
            }());
          l.onmessage = e => {
            const t = e.data,
              {
                id: n
              } = t;
            if (u.set(n, !1), !("base64" in t)) return;
            const {
              base64: r,
              type: o,
              width: s,
              height: i
            } = t;
            this.mutationCb({
              id: n,
              type: Vr["2D"],
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
                }, 0, 0, s, i]
              }]
            })
          };
          const d = 1e3 / t;
          let p, h = 0;
          const f = t => {
            h && t - h < d || (h = t, (e => {
              if (e) return [e];
              const t = [];
              return n.document.querySelectorAll("canvas").forEach((e => {
                qr(e, r, o, s, !0) || t.push(e)
              })), t
            })(c).forEach((t => {
              const n = this.mirror.getId(t);
              if (!u.get(n) && t.width && t.height) {
                if (u.set(n, !0), !e && ["webgl", "webgl2"].includes(t.__context)) {
                  const e = t.getContext(t.__context);
                  !1 === $([e, "optionalAccess", e => e.getContextAttributes, "call", e => e(), "optionalAccess", e => e.preserveDrawingBuffer]) && e.clear(e.COLOR_BUFFER_BIT)
                }
                createImageBitmap(t).then((e => {
                  l.postMessage({
                    id: n,
                    bitmap: e,
                    width: t.width,
                    height: t.height,
                    dataURLOptions: a,
                    maxCanvasSize: i
                  }, [e])
                })).catch((e => {
                  Xr((() => {
                    throw e
                  }))()
                }))
              }
            }))), p = Kr(f)
          };
          return p = Kr(f), p
        }
        startPendingCanvasMutationFlusher() {
          Kr((() => this.flushPendingCanvasMutations()))
        }
        startRAFTimestamping() {
          const e = t => {
            this.rafStamps.latestId = t, Kr(e)
          };
          Kr(e)
        }
        flushPendingCanvasMutations() {
          this.pendingCanvasMutations.forEach(((e, t) => {
            const n = this.mirror.getId(t);
            this.flushPendingCanvasMutationFor(t, n)
          })), Kr((() => this.flushPendingCanvasMutations()))
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
      const uo = {
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
        lo = "ReplayCanvas",
        po = 1280,
        ho = (0, m._C)((function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const [t, n] = e.maxCanvasSize || [], r = {
            quality: e.quality || "medium",
            enableManualSnapshot: e.enableManualSnapshot,
            maxCanvasSize: [t ? Math.min(t, po) : po, n ? Math.min(n, po) : po]
          };
          let o;
          const s = new Promise((e => o = e));
          return {
            name: lo,
            setupOnce() {},
            getOptions() {
              const {
                quality: e,
                enableManualSnapshot: t,
                maxCanvasSize: n
              } = r;
              return {
                enableManualSnapshot: t,
                recordCanvas: !0,
                getCanvasManager: e => {
                  const r = new co({
                    ...e,
                    enableManualSnapshot: t,
                    maxCanvasSize: n,
                    errorHandler: e => {
                      try {
                        "object" == typeof e && (e.__rrweb__ = !0)
                      } catch (e) {}
                    }
                  });
                  return o(r), r
                },
                ...uo[e || "medium"] || uo.medium
              }
            },
            async snapshot(e) {
              (await s).snapshot(e)
            }
          }
        })),
        fo = (0, m.F)(lo, ho);
      var mo = n(36030);
      const go = q.OW,
        vo = "#ffffff",
        yo = "inherit",
        _o = "rgba(108, 95, 199, 1)",
        bo = {
          fontFamily: "system-ui, 'Helvetica Neue', Arial, sans-serif",
          fontSize: "14px",
          background: vo,
          backgroundHover: "#f6f6f7",
          foreground: "#2b2233",
          border: "1.5px solid rgba(41, 35, 47, 0.13)",
          borderRadius: "25px",
          boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
          success: "#268d75",
          error: "#df3338",
          submitBackground: "rgba(88, 74, 192, 1)",
          submitBackgroundHover: _o,
          submitBorder: _o,
          submitOutlineFocus: "#29232f",
          submitForeground: vo,
          submitForegroundHover: vo,
          cancelBackground: "transparent",
          cancelBackgroundHover: "var(--background-hover)",
          cancelBorder: "var(--border)",
          cancelOutlineFocus: "var(--input-outline-focus)",
          cancelForeground: "var(--foreground)",
          cancelForegroundHover: "var(--foreground)",
          inputBackground: yo,
          inputForeground: yo,
          inputBorder: "var(--border)",
          inputOutlineFocus: _o,
          formBorderRadius: "20px",
          formContentBorderRadius: "6px"
        },
        So = bo,
        wo = {
          ...bo,
          background: "#29232f",
          backgroundHover: "#352f3b",
          foreground: "#ebe6ef",
          border: "1.5px solid rgba(235, 230, 239, 0.15)",
          success: "#2da98c",
          error: "#f55459"
        },
        To = "Report a Bug",
        ko = "Cancel",
        Eo = "Send Bug Report",
        xo = "Report a Bug",
        Io = "your.email@example.org",
        Co = "Email",
        Ro = "What's the bug? What did you expect?",
        Mo = "Description",
        Oo = "Your Name",
        Ao = "Name",
        No = "(required)",
        Do = "Thank you for your report!",
        Fo = "widget",
        Lo = "api";

      function Po(e) {
        let {
          name: t,
          email: n,
          message: r,
          source: o = Lo,
          url: s = (0, K.$N)()
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
          const c = (0, p.KU)(),
            u = c && c.getTransport(),
            l = c && c.getDsn();
          if (!c || !u || !l) return;
          const d = {
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
          return (0, p.v4)((async e => {
            e.clearBreadcrumbs(), [Lo, Fo].includes(String(o)) && e.setLevel("info");
            const t = await async function(e) {
              let {
                client: t,
                scope: n,
                event: r
              } = e;
              const o = {};
              t.emit && t.emit("preprocessEvent", r, o);
              const s = await (0, H.mG)(t.getOptions(), r, o, n, t, (0, i.rm)());
              return null === s ? (t.recordDroppedEvent("event_processor", "feedback", r), null) : (s.platform = s.platform || "javascript", s)
            }({
              scope: e,
              client: c,
              event: d
            });
            if (!t) return;
            c.emit && c.emit("beforeSendFeedback", t, {
              includeReplay: Boolean(a)
            });
            const n = (0, mo.V)(t, l, c.getOptions()._metadata, c.getOptions().tunnel);
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
      const jo = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;

      function Bo(e, t) {
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

      function $o(e) {
        return `\n  --background: ${e.background};\n  --background-hover: ${e.backgroundHover};\n  --foreground: ${e.foreground};\n  --error: ${e.error};\n  --success: ${e.success};\n  --border: ${e.border};\n  --border-radius: ${e.borderRadius};\n  --box-shadow: ${e.boxShadow};\n\n  --submit-background: ${e.submitBackground};\n  --submit-background-hover: ${e.submitBackgroundHover};\n  --submit-border: ${e.submitBorder};\n  --submit-outline-focus: ${e.submitOutlineFocus};\n  --submit-foreground: ${e.submitForeground};\n  --submit-foreground-hover: ${e.submitForegroundHover};\n\n  --cancel-background: ${e.cancelBackground};\n  --cancel-background-hover: ${e.cancelBackgroundHover};\n  --cancel-border: ${e.cancelBorder};\n  --cancel-outline-focus: ${e.cancelOutlineFocus};\n  --cancel-foreground: ${e.cancelForeground};\n  --cancel-foreground-hover: ${e.cancelForegroundHover};\n\n  --input-background: ${e.inputBackground};\n  --input-foreground: ${e.inputForeground};\n  --input-border: ${e.inputBorder};\n  --input-outline-focus: ${e.inputOutlineFocus};\n\n  --form-border-radius: ${e.formBorderRadius};\n  --form-content-border-radius: ${e.formContentBorderRadius};\n  `
      }

      function Uo(e, t) {
        return Object.entries(t).forEach((t => {
          let [n, r] = t;
          e.setAttributeNS(null, n, r)
        })), e
      }

      function Ho(e, t) {
        const n = go.document.createElement(e);
        t && Object.entries(t).forEach((e => {
          let [t, r] = e;
          "className" === t && "string" == typeof r ? n.setAttribute("class", r) : "boolean" == typeof r && r ? n.setAttribute(t, "") : "string" == typeof r ? n.setAttribute(t, r) : t.startsWith("on") && "function" == typeof r && n.addEventListener(t.substring(2).toLowerCase(), r)
        }));
        for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++) o[s - 2] = arguments[s];
        for (const e of o) zo(n, e);
        return n
      }

      function zo(e, t) {
        const n = go.document;
        if (null != t)
          if (Array.isArray(t))
            for (const n of t) zo(e, n);
          else !1 === t || ("string" == typeof t ? e.appendChild(n.createTextNode(t)) : t instanceof Node ? e.appendChild(t) : e.appendChild(n.createTextNode(String(t))))
      }

      function qo(e, t) {
        const n = e.get(t);
        return "string" == typeof n ? n.trim() : ""
      }

      function Wo(e) {
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
            isRequiredLabel: a,
            cancelButtonLabel: c,
            submitButtonLabel: u,
            showName: l,
            showEmail: d,
            isNameRequired: p,
            isEmailRequired: h,
            defaultName: f,
            defaultEmail: m,
            onCancel: g,
            onSubmit: v
          } = e;
          const {
            el: y
          } = function(e) {
            let {
              label: t
            } = e;
            return {
              el: Ho("button", {
                type: "submit",
                className: "btn btn--primary",
                "aria-label": t
              }, t)
            }
          }({
            label: u
          }), _ = Ho("div", {
            className: "form__error-container form__error-container--hidden",
            "aria-hidden": "true"
          }), b = Ho("input", {
            id: "name",
            type: l ? "text" : "hidden",
            "aria-hidden": l ? "false" : "true",
            name: "name",
            required: p,
            className: "form__input",
            placeholder: n,
            value: f
          }), S = Ho("input", {
            id: "email",
            type: d ? "text" : "hidden",
            "aria-hidden": d ? "false" : "true",
            name: "email",
            required: h,
            className: "form__input",
            placeholder: o,
            value: m
          }), w = Ho("textarea", {
            id: "message",
            autoFocus: "true",
            rows: "5",
            name: "message",
            required: !0,
            className: "form__input form__input--textarea",
            placeholder: i
          }), T = Ho("button", {
            type: "button",
            className: "btn btn--default",
            "aria-label": c,
            onClick: e => {
              g && g(e)
            }
          }, c), k = Ho("form", {
            className: "form",
            onSubmit: function(e) {
              if (e.preventDefault(), e.target instanceof HTMLFormElement) try {
                if (v) {
                  const t = new FormData(e.target),
                    n = {
                      name: qo(t, "name"),
                      email: qo(t, "email"),
                      message: qo(t, "message")
                    };
                  v(n)
                }
              } catch (e) {}
            }
          }, [_, l && Ho("label", {
            htmlFor: "name",
            className: "form__label"
          }, [Ho("span", {
            className: "form__label__text"
          }, t, p && Ho("span", {
            className: "form__label__text--required"
          }, ` ${a}`)), b]), !l && b, d && Ho("label", {
            htmlFor: "email",
            className: "form__label"
          }, [Ho("span", {
            className: "form__label__text"
          }, r, h && Ho("span", {
            className: "form__label__text--required"
          }, ` ${a}`)), S]), !d && S, Ho("label", {
            htmlFor: "message",
            className: "form__label"
          }, [Ho("span", {
            className: "form__label__text"
          }, s, Ho("span", {
            className: "form__label__text--required"
          }, ` ${a}`)), w]), Ho("div", {
            className: "btn-group"
          }, [y, T])]);
          return {
            get el() {
              return k
            },
            showError: function(e) {
              _.textContent = e, _.classList.remove("form__error-container--hidden"), _.setAttribute("aria-hidden", "false")
            },
            hideError: function() {
              _.textContent = "", _.classList.add("form__error-container--hidden"), _.setAttribute("aria-hidden", "true")
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
        return f = Ho("dialog", {
          className: "dialog",
          open: !0,
          onClick: function() {
            m(), l && l()
          }
        }, Ho("div", {
          className: "dialog__content",
          onClick: e => {
            e.stopPropagation()
          }
        }, Ho("h2", {
          className: "dialog__header"
        }, t, n && Ho("a", {
          className: "brand-link",
          target: "_blank",
          href: "https://sentry.io/welcome/",
          title: "Powered by Sentry",
          rel: "noopener noreferrer"
        }, function(e) {
          let {
            colorScheme: t
          } = e;
          const n = e => go.document.createElementNS("http://www.w3.org/2000/svg", e),
            r = Uo(n("svg"), {
              class: "sentry-logo",
              width: "32",
              height: "30",
              viewBox: "0 0 72 66",
              fill: "none"
            }),
            o = Uo(n("path"), {
              transform: "translate(11, 11)",
              d: "M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z"
            });
          r.append(o);
          const s = n("defs"),
            i = n("style");
          return i.textContent = `\n    path {\n      fill: ${"dark"===t?"#fff":"#362d59"};\n    }`, "system" === t && (i.textContent += "\n    @media (prefers-color-scheme: dark) {\n      path: {\n        fill: '#fff';\n      }\n    }\n    "), s.append(i), r.append(s), {
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

      function Go(e) {
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
                return await Po({
                  ...t,
                  source: Fo
                }, n)
              } catch (t) {
                jo && V.vF.error(t), e && e.showError("There was a problem submitting feedback, please wait and try again.")
              }
            }
          }(n, e) ? (m(), function() {
            if (r) try {
              const e = function(e) {
                let {
                  message: t,
                  onRemove: n
                } = e;

                function r() {
                  o && (o.remove(), n && n())
                }
                const o = Ho("div", {
                  className: "success-message",
                  onClick: r
                }, function() {
                  const e = e => go.document.createElementNS("http://www.w3.org/2000/svg", e),
                    t = Uo(e("svg"), {
                      class: "success-icon",
                      width: "16",
                      height: "17",
                      viewBox: "0 0 16 17",
                      fill: "none"
                    }),
                    n = Uo(e("g"), {
                      clipPath: "url(#clip0_57_156)"
                    }),
                    r = Uo(e("path"), {
                      "fill-rule": "evenodd",
                      "clip-rule": "evenodd",
                      d: "M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z"
                    }),
                    o = Uo(e("path"), {
                      d: "M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z"
                    });
                  t.appendChild(n).append(o, r);
                  const s = e("defs"),
                    i = Uo(e("clipPath"), {
                      id: "clip0_57_156"
                    }),
                    a = Uo(e("rect"), {
                      width: "16",
                      height: "16",
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
                  t && clearTimeout(t), l()
                }
              });
              if (!e.el) throw new Error("Unable to show success message");
              r.appendChild(e.el);
              const t = setTimeout((() => {
                e && e.remove()
              }), 5e3)
            } catch (e) {
              V.vF.error(e)
            }
          }(), s.onSubmitSuccess && s.onSubmitSuccess()) : s.onSubmitError && s.onSubmitError()
        }

        function u() {
          const e = (0, p.KU)(),
            t = e && e.getIntegrationByName && e.getIntegrationByName("Replay");
          t && t.flush().catch((e => {
            jo && V.vF.error(e)
          }))
        }

        function l() {
          t && t.show()
        }

        function d() {
          t && t.hide()
        }

        function h() {
          try {
            if (n) return n.open(), a = !0, s.onFormOpen && s.onFormOpen(), void u();
            const e = s.useSentryUser,
              t = (0, p.o5)(),
              o = t && t.getUser();
            if (n = Wo({
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
                isRequiredLabel: s.isRequiredLabel,
                defaultName: e && o && o[e.name] || "",
                defaultEmail: e && o && o[e.email] || "",
                onClosed: () => {
                  l(), a = !1, s.onFormClose && s.onFormClose()
                },
                onCancel: () => {
                  f(), l()
                },
                onSubmit: c
              }), !n.el) throw new Error("Unable to open Feedback dialog");
            r.appendChild(n.el), d(), s.onFormOpen && s.onFormOpen(), u()
          } catch (e) {
            V.vF.error(e)
          }
        }

        function f() {
          n && (n.close(), a = !1, s.onFormClose && s.onFormClose())
        }

        function m() {
          if (n) {
            f();
            const e = n.el;
            e && e.remove(), n = void 0
          }
        }

        function g() {
          a || h(), d()
        }
        return i ? i.addEventListener("click", g) : o && (t = function(e) {
          let {
            buttonLabel: t,
            onClick: n
          } = e;
          const r = Ho("button", {
            type: "button",
            className: "widget__actor",
            "aria-label": t,
            "aria-hidden": "false"
          }, function() {
            const e = e => go.document.createElementNS("http://www.w3.org/2000/svg", e),
              t = Uo(e("svg"), {
                class: "feedback-icon",
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none"
              }),
              n = Uo(e("g"), {
                clipPath: "url(#clip0_57_80)"
              }),
              r = Uo(e("path"), {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z"
              });
            t.appendChild(n).appendChild(r);
            const o = e("defs"),
              s = Uo(e("clipPath"), {
                id: "clip0_57_80"
              }),
              i = Uo(e("rect"), {
                width: "20",
                height: "20",
                fill: "white"
              });
            return s.appendChild(i), o.appendChild(s), t.appendChild(o).appendChild(s).appendChild(i), {
              get el() {
                return t
              }
            }
          }().el, t ? Ho("span", {
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
          onClick: g
        }), t.el && r.appendChild(t.el)), {
          get actor() {
            return t
          },
          get dialog() {
            return n
          },
          showActor: l,
          hideActor: d,
          removeActor: function() {
            t && t.el && t.el.remove()
          },
          openDialog: h,
          closeDialog: f,
          removeDialog: m
        }
      }
      const Ko = go.document,
        Jo = e => new Vo(e);
      class Vo {
        static __initStatic() {
          this.id = "Feedback"
        }
        constructor() {
          let {
            autoInject: e = !0,
            id: t = "sentry-feedback",
            isEmailRequired: n = !1,
            isNameRequired: r = !1,
            showBranding: o = !0,
            showEmail: s = !0,
            showName: i = !0,
            useSentryUser: a = {
              email: "email",
              name: "username"
            },
            themeDark: c,
            themeLight: u,
            colorScheme: l = "system",
            buttonLabel: d = To,
            cancelButtonLabel: p = ko,
            submitButtonLabel: h = Eo,
            formTitle: f = xo,
            emailPlaceholder: m = Io,
            emailLabel: g = Co,
            messagePlaceholder: v = Ro,
            messageLabel: y = Mo,
            namePlaceholder: _ = Oo,
            nameLabel: b = Ao,
            isRequiredLabel: S = No,
            successMessageText: w = Do,
            onFormClose: T,
            onFormOpen: k,
            onSubmitError: E,
            onSubmitSuccess: x
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.name = Vo.id, this._host = null, this._shadow = null, this._widget = null, this._widgets = new Set, this._hasInsertedActorStyles = !1, this.options = {
            autoInject: e,
            showBranding: o,
            id: t,
            isEmailRequired: n,
            isNameRequired: r,
            showEmail: s,
            showName: i,
            useSentryUser: a,
            colorScheme: l,
            themeDark: {
              ...wo,
              ...c
            },
            themeLight: {
              ...So,
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
            isRequiredLabel: S,
            successMessageText: w,
            onFormClose: T,
            onFormOpen: k,
            onSubmitError: E,
            onSubmitSuccess: x
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
            jo && V.vF.error(e)
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
            const n = Bo(this.options, t || {});
            return this._ensureShadowHost(n, (t => {
              let {
                shadow: r
              } = t;
              const o = "string" == typeof e ? Ko.querySelector(e) : "function" == typeof e.addEventListener ? e : null;
              if (!o) return jo && V.vF.error("[Feedback] Unable to attach to target element"), null;
              const s = Go({
                shadow: r,
                options: n,
                attachTo: o
              });
              return this._widgets.add(s), this._widget || (this._widget = s), s
            }))
          } catch (e) {
            return jo && V.vF.error(e), null
          }
        }
        createWidget(e) {
          try {
            return this._createWidget(Bo(this.options, e || {}))
          } catch (e) {
            return jo && V.vF.error(e), null
          }
        }
        removeWidget(e) {
          if (!e) return !1;
          try {
            if (this._widgets.has(e)) return e.removeActor(), e.removeDialog(), this._widgets.delete(e), this._widget === e && (this._widget = null), !0
          } catch (e) {
            jo && V.vF.error(e)
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
          const e = Ko.querySelector(`#${this.options.id}`);
          e && e.remove()
        }
        _createWidget(e) {
          return this._ensureShadowHost(e, (t => {
            let {
              shadow: n
            } = t;
            const r = Go({
              shadow: n,
              options: e
            });
            return !this._hasInsertedActorStyles && r.actor && (n.appendChild(function(e) {
              const t = e.createElement("style");
              return t.textContent = "\n.widget__actor {\n  position: fixed;\n  left: var(--left);\n  right: var(--right);\n  bottom: var(--bottom);\n  top: var(--top);\n  z-index: var(--z-index);\n\n  line-height: 16px;\n\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  font-family: inherit;\n  font-size: var(--font-size);\n  font-weight: 600;\n  padding: 16px;\n  text-decoration: none;\n  z-index: 9000;\n\n  color: var(--foreground);\n  background-color: var(--background);\n  border: var(--border);\n  box-shadow: var(--box-shadow);\n  opacity: 1;\n  transition: opacity 0.1s ease-in-out;\n}\n\n.widget__actor:hover {\n  background-color: var(--background-hover);\n}\n\n.widget__actor svg {\n  width: 16px;\n  height: 16px;\n}\n\n.widget__actor--hidden {\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden;\n}\n\n.widget__actor__text {\n}\n\n@media (max-width: 600px) {\n  .widget__actor__text {\n    display: none;\n  }\n}\n\n.feedback-icon path {\n  fill: var(--foreground);\n}\n", t
            }(Ko)), this._hasInsertedActorStyles = !0), this._widgets.add(r), this._widget || (this._widget = r), r
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
                const e = go.document,
                  s = e.createElement("div");
                s.id = t;
                const i = s.attachShadow({
                  mode: "open"
                });
                return i.appendChild(function(e, t, n) {
                  const r = e.createElement("style");
                  return r.textContent = `\n:host {\n  --bottom: 1rem;\n  --right: 1rem;\n  --top: auto;\n  --left: auto;\n  --z-index: 100000;\n  --font-family: ${n.light.fontFamily};\n  --font-size: ${n.light.fontSize};\n\n  position: fixed;\n  left: var(--left);\n  right: var(--right);\n  bottom: var(--bottom);\n  top: var(--top);\n  z-index: var(--z-index);\n\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n\n  ${$o("dark"===t?n.dark:n.light)}\n}\n\n${"system"===t?`\n@media (prefers-color-scheme: dark) {\n  :host {\n    ${$o(n.dark)}\n  }\n}`:""}\n}`, r
                }(e, n, {
                  dark: r,
                  light: o
                })), i.appendChild(function(e) {
                  const t = e.createElement("style");
                  return t.textContent = "\n.dialog {\n  line-height: 25px;\n  background-color: rgba(0, 0, 0, 0.05);\n  border: none;\n  position: fixed;\n  inset: 0;\n  z-index: 10000;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.dialog:not([open]) {\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden;\n}\n.dialog:not([open]) .dialog__content {\n  transform: translate(0, -16px) scale(0.98);\n}\n\n.dialog__content {\n  position: fixed;\n  left: var(--left);\n  right: var(--right);\n  bottom: var(--bottom);\n  top: var(--top);\n\n  border: var(--border);\n  border-radius: var(--form-border-radius);\n  background-color: var(--background);\n  color: var(--foreground);\n\n  width: 320px;\n  max-width: 100%;\n  max-height: calc(100% - 2rem);\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--box-shadow);\n  transition: transform 0.2s ease-in-out;\n  transform: translate(0, 0) scale(1);\n}\n\n.dialog__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 20px;\n  font-weight: 600;\n  padding: 24px 24px 0 24px;\n  margin: 0;\n  margin-bottom: 16px;\n}\n\n.brand-link {\n  display: inline-flex;\n}\n\n.error {\n  color: var(--error);\n  margin-bottom: 16px;\n}\n\n.form {\n  display: grid;\n  overflow: auto;\n  flex-direction: column;\n  gap: 16px;\n  padding: 0 24px 24px;\n}\n\n.form__error-container {\n  color: var(--error);\n}\n\n.form__error-container--hidden {\n  display: none;\n}\n\n.form__label {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin: 0px;\n}\n\n.form__label__text {\n  display: grid;\n  gap: 4px;\n  align-items: center;\n  grid-auto-flow: column;\n  grid-auto-columns: max-content;\n}\n\n.form__label__text--required {\n  font-size: 0.85em;\n}\n\n.form__input {\n  line-height: inherit;\n  background-color: var(--input-background);\n  box-sizing: border-box;\n  border: var(--input-border);\n  border-radius: var(--form-content-border-radius);\n  color: var(--input-foreground);\n  font-family: inherit;\n  font-size: var(--font-size);\n  font-weight: 500;\n  padding: 6px 12px;\n}\n\n.form__input::placeholder {\n  color: var(--input-foreground);\n  opacity: 0.65;\n}\n\n.form__input:focus-visible {\n  outline: 1px auto var(--input-outline-focus);\n}\n\n.form__input--textarea {\n  font-family: inherit;\n  resize: vertical;\n}\n\n.btn-group {\n  display: grid;\n  gap: 8px;\n  margin-top: 8px;\n}\n\n.btn {\n  line-height: inherit;\n  border: var(--cancel-border);\n  border-radius: var(--form-content-border-radius);\n  cursor: pointer;\n  font-family: inherit;\n  font-size: var(--font-size);\n  font-weight: 600;\n  padding: 6px 16px;\n}\n.btn[disabled] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.btn--primary {\n  background-color: var(--submit-background);\n  border-color: var(--submit-border);\n  color: var(--submit-foreground);\n}\n.btn--primary:hover {\n  background-color: var(--submit-background-hover);\n  color: var(--submit-foreground-hover);\n}\n.btn--primary:focus-visible {\n  outline: 1px auto var(--submit-outline-focus);\n}\n\n.btn--default {\n  background-color: var(--cancel-background);\n  color: var(--cancel-foreground);\n  font-weight: 500;\n}\n.btn--default:hover {\n  background-color: var(--cancel-background-hover);\n  color: var(--cancel-foreground-hover);\n}\n.btn--default:focus-visible {\n  outline: 1px auto var(--cancel-outline-focus);\n}\n\n.success-message {\n  background-color: var(--background);\n  border: var(--border);\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  font-weight: 600;\n  color: var(--success);\n  padding: 12px 24px;\n  line-height: 25px;\n  display: grid;\n  align-items: center;\n  grid-auto-flow: column;\n  gap: 6px;\n  cursor: default;\n}\n\n.success-icon path {\n  fill: var(--success);\n}\n", t
                }(e)), {
                  shadow: i,
                  host: s
                }
              } catch (e) {
                throw V.vF.warn("[Feedback] Browser does not support shadow DOM API"), new Error("Browser does not support shadow DOM API.")
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
          return n && Ko.body.appendChild(this._host), r
        }
      }
      Vo.__initStatic();
      var Yo = n(31049),
        Xo = n(42780),
        Qo = n(53335),
        Zo = n(10361),
        es = n(7478),
        ts = n(77393),
        ns = n(38548),
        rs = n(45547),
        os = n(77298),
        ss = n(21867),
        is = n(18310),
        as = n(22561),
        cs = n(52077),
        us = n(16054),
        ls = n(25446),
        ds = n(6067);
      const ps = {
        ...ss.Cq,
        markBackgroundTransactions: !0,
        routingInstrumentation: function(e) {
          let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          if (!ds.j || !ds.j.location) return void(as.T && V.vF.warn("Could not initialize routing instrumentation due to invalid location"));
          let r, o = ds.j.location.href;
          t && (r = e({
            name: ds.j.location.pathname,
            startTimestamp: J.k3 ? J.k3 / 1e3 : void 0,
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
            void 0 === s && o && -1 !== o.indexOf(n) ? o = void 0 : s !== n && (o = void 0, r && (as.T && V.vF.log(`[Tracing] Finishing current transaction with op: ${r.op}`), r.end()), r = e({
              name: ds.j.location.pathname,
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
        enableInp: !1,
        interactionsSampleRate: 1,
        _experiments: {},
        ...ls.h$
      };
      class hs {
        constructor(e) {
          this.name = "BrowserTracing", this._hasSetTracePropagationTargets = !1, (0, g.U)(), as.T && (this._hasSetTracePropagationTargets = !(!e || !e.tracePropagationTargets && !e.tracingOrigins)), this.options = {
            ...ps,
            ...e
          }, void 0 !== this.options._experiments.enableLongTask && (this.options.enableLongTask = this.options._experiments.enableLongTask), e && !e.tracePropagationTargets && e.tracingOrigins && (this.options.tracePropagationTargets = e.tracingOrigins), this._collectWebVitals = (0, us.bk)(), this._interactionIdToRouteNameMapping = {}, this.options.enableInp && (0, us.ZZ)(this._interactionIdToRouteNameMapping, this.options.interactionsSampleRate), this.options.enableLongTask && (0, us.c8)(), this.options._experiments.enableInteractions && (0, us.DI)(), this._latestRoute = {
            name: void 0,
            context: void 0
          }
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
          as.T && this._hasSetTracePropagationTargets && h && V.vF.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."), o((e => {
            const n = this._createRouteTransaction(e);
            return this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(n, e, t), n
          }), i, s), a && (0, cs.i)(), p.enableInteractions && this._registerInteractionListener(), this.options.enableInp && this._registerInpInteractionListener(), (0, ls.Qb)({
            traceFetch: c,
            traceXHR: u,
            tracePropagationTargets: f,
            shouldCreateSpanForRequest: l,
            enableHTTPTimings: d
          })
        }
        _createRouteTransaction(e) {
          if (!this._getCurrentHub) return void(as.T && V.vF.warn(`[Tracing] Did not create ${e.op} transaction because _getCurrentHub is invalid.`));
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
            const t = i ? fs("sentry-trace") : "",
              n = i ? fs("baggage") : void 0,
              {
                traceId: r,
                dsc: o,
                parentSpanId: s,
                sampled: c
              } = (0, is.kM)(t, n);
            a = {
              traceId: r,
              parentSpanId: s,
              parentSampled: c,
              ...e,
              metadata: {
                ...e.metadata,
                dynamicSamplingContext: o
              },
              trimEnd: !0
            }
          } else a = {
            trimEnd: !0,
            ...e
          };
          const c = "function" == typeof n ? n(a) : a,
            u = void 0 === c ? {
              ...a,
              sampled: !1
            } : c;
          u.metadata = u.name !== a.name ? {
            ...u.metadata,
            source: "custom"
          } : u.metadata, this._latestRoute.name = u.name, this._latestRoute.context = u, !1 === u.sampled && as.T && V.vF.log(`[Tracing] Will not send ${u.op} transaction because of beforeNavigate.`), as.T && V.vF.log(`[Tracing] Starting ${u.op} transaction on scope`);
          const {
            location: l
          } = ds.j, d = (0, g.p)(t, u, r, o, !0, {
            location: l
          }, s, i);
          return i && ds.j.document && (ds.j.document.addEventListener("readystatechange", (() => {
            ["interactive", "complete"].includes(ds.j.document.readyState) && d.sendAutoFinishSignal()
          })), ["interactive", "complete"].includes(ds.j.document.readyState) && d.sendAutoFinishSignal()), d.registerBeforeFinishCallback((e => {
            this._collectWebVitals(), (0, us.QU)(e)
          })), d
        }
        _registerInteractionListener() {
          let e;
          const t = () => {
            const {
              idleTimeout: t,
              finalTimeout: n,
              heartbeatInterval: r
            } = this.options, o = "ui.action.click", s = (0, _.Z7)();
            if (s && s.op && ["navigation", "pageload"].includes(s.op)) return void(as.T && V.vF.warn(`[Tracing] Did not create ${o} transaction because a pageload or navigation transaction is in progress.`));
            if (e && (e.setFinishReason("interactionInterrupted"), e.end(), e = void 0), !this._getCurrentHub) return void(as.T && V.vF.warn(`[Tracing] Did not create ${o} transaction because _getCurrentHub is invalid.`));
            if (!this._latestRoute.name) return void(as.T && V.vF.warn(`[Tracing] Did not create ${o} transaction because _latestRouteName is missing.`));
            const i = this._getCurrentHub(),
              {
                location: a
              } = ds.j,
              c = {
                name: this._latestRoute.name,
                op: o,
                trimEnd: !0,
                data: {
                  [l.i_]: this._latestRoute.context ? ms(this._latestRoute.context) : "url"
                }
              };
            e = (0, g.p)(i, c, t, n, !0, {
              location: a
            }, r)
          };
          ["click"].forEach((e => {
            ds.j.document && addEventListener(e, t, {
              once: !1,
              capture: !0
            })
          }))
        }
        _registerInpInteractionListener() {
          const e = e => {
            let {
              entries: t
            } = e;
            const n = (0, p.KU)(),
              r = void 0 !== n && void 0 !== n.getIntegrationByName ? n.getIntegrationByName("Replay") : void 0,
              o = void 0 !== r ? r.getReplayId() : void 0,
              s = (0, _.Z7)(),
              i = (0, p.o5)(),
              a = void 0 !== i ? i.getUser() : void 0;
            t.forEach((e => {
              if (function(e) {
                  return "duration" in e
                }(e)) {
                const t = e.interactionId;
                if (void 0 === t) return;
                const n = this._interactionIdToRouteNameMapping[t],
                  r = e.duration,
                  i = e.startTime,
                  c = Object.keys(this._interactionIdToRouteNameMapping),
                  u = c.length > 0 ? c.reduce(((e, t) => this._interactionIdToRouteNameMapping[e].duration < this._interactionIdToRouteNameMapping[t].duration ? e : t)) : void 0;
                if ("first-input" === e.entryType && c.map((e => this._interactionIdToRouteNameMapping[e])).some((e => e.duration === r && e.startTime === i))) return;
                if (!t) return;
                if (n) n.duration = Math.max(n.duration, r);
                else if (c.length < 10 || void 0 === u || r > this._interactionIdToRouteNameMapping[u].duration) {
                  const e = this._latestRoute.name,
                    n = this._latestRoute.context;
                  e && n && (u && Object.keys(this._interactionIdToRouteNameMapping).length >= 10 && delete this._interactionIdToRouteNameMapping[u], this._interactionIdToRouteNameMapping[t] = {
                    routeName: e,
                    duration: r,
                    parentContext: n,
                    user: a,
                    activeTransaction: s,
                    replayId: o,
                    startTime: i
                  })
                }
              }
            }))
          };
          (0, ie.wv)("event", e), (0, ie.wv)("first-input", e)
        }
      }

      function fs(e) {
        const t = (0, K.NX)(`meta[name=${e}]`);
        return t ? t.getAttribute("content") : void 0
      }

      function ms(e) {
        const t = e.attributes && e.attributes[l.i_],
          n = e.data && e.data[l.i_],
          r = e.metadata && e.metadata.source;
        return t || n || r
      }
      var gs = n(38114),
        vs = n(39584);

      function ys(e) {
        return new Promise(((t, n) => {
          e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => n(e.error)
        }))
      }

      function _s(e) {
        return ys(e.getAllKeys())
      }

      function bs(e) {
        let t;

        function n() {
          return null == t && (t = function(e, t) {
            const n = indexedDB.open(e);
            n.onupgradeneeded = () => n.result.createObjectStore(t);
            const r = ys(n);
            return e => r.then((n => e(n.transaction(t, "readwrite").objectStore(t))))
          }(e.dbName || "sentry-offline", e.storeName || "queue")), t
        }
        return {
          insert: async t => {
            try {
              const r = await (0, ne.bN)(t, e.textEncoder);
              await
              function(e, t, n) {
                return e((e => _s(e).then((r => {
                  if (!(r.length >= n)) return e.put(t, Math.max(...r, 0) + 1), ys(e.transaction)
                }))))
              }(n(), r, e.maxQueueSize || 30)
            } catch (e) {}
          },
          pop: async () => {
            try {
              const t = await
              function(e) {
                return e((e => _s(e).then((t => {
                  if (0 !== t.length) return ys(e.get(t[0])).then((n => (e.delete(t[0]), ys(e.transaction).then((() => n)))))
                }))))
              }(n());
              if (t) return (0, ne.mE)(t, e.textEncoder || new TextEncoder, e.textDecoder || new TextDecoder)
            } catch (e) {}
          }
        }
      }

      function Ss(e) {
        return function(e) {
          return t => e({
            ...t,
            createStore: bs
          })
        }((0, vs.BP)(e))
      }
      var ws = n(53711),
        Ts = n(93637);
      const ks = 1e6,
        Es = String(0);
      let xs = "",
        Is = "",
        Cs = "",
        Rs = x.jf.navigator && x.jf.navigator.userAgent || "",
        Ms = "";
      const Os = x.jf.navigator && x.jf.navigator.language || x.jf.navigator && x.jf.navigator.languages && x.jf.navigator.languages[0] || "",
        As = x.jf.navigator && x.jf.navigator.userAgentData;
      var Ns;

      function Ds(e, t, n, r) {
        if ("transaction" !== r.type) throw new TypeError("Profiling events may only be attached to transactions, this should never occur.");
        if (null == n) throw new TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${n} instead.`);
        const o = function(e) {
            const t = e && e.contexts && e.contexts.trace && e.contexts.trace.trace_id;
            return "string" == typeof t && 32 !== t.length && ws.T && V.vF.log(`[Profiling] Invalid traceId: ${t} on profiled event`), "string" != typeof t ? "" : t
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
                [Es]: {
                  name: "main"
                }
              }
            };
            if (!e.samples.length) return r;
            const o = e.samples[0].timestamp,
              s = "number" == typeof performance.timeOrigin ? performance.timeOrigin : J.k3 || 0,
              i = s - (J.k3 || s);
            for (let s = 0; s < e.samples.length; s++) {
              const a = e.samples[s];
              if (void 0 === a.stackId) {
                void 0 === t && (t = n, r.stacks[t] = [], n++), r.samples[s] = {
                  elapsed_since_start_ns: ((a.timestamp + i - o) * ks).toFixed(0),
                  stack_id: t,
                  thread_id: Es
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
                elapsed_since_start_ns: ((a.timestamp + i - o) * ks).toFixed(0),
                stack_id: n,
                thread_id: Es
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
          environment: r.environment || Ts.U,
          runtime: {
            name: "javascript",
            version: x.jf.navigator.userAgent
          },
          os: {
            name: xs,
            version: Is,
            build_number: Rs
          },
          device: {
            locale: Os,
            model: Ms,
            manufacturer: Rs,
            architecture: Cs,
            is_emulator: !1
          },
          debug_meta: {
            images: Ps(n.resources)
          },
          profile: s,
          transactions: [{
            name: r.transaction || "",
            id: r.event_id || (0, Y.eJ)(),
            trace_id: o,
            active_thread_id: Es,
            relative_start_ns: "0",
            relative_end_ns: (1e6 * (a - i)).toFixed(0)
          }]
        }
      }

      function Fs(e) {
        return "pageload" === e.op
      }
      "object" == typeof(Ns = As) && null !== Ns && "getHighEntropyValues" in Ns && As.getHighEntropyValues(["architecture", "model", "platform", "platformVersion", "fullVersionList"]).then((e => {
        if (xs = e.platform || "", Cs = e.architecture || "", Ms = e.model || "", Is = e.platformVersion || "", e.fullVersionList && e.fullVersionList.length > 0) {
          const t = e.fullVersionList[e.fullVersionList.length - 1];
          Rs = `${t.brand} ${t.version}`
        }
      })).catch((e => {}));
      const Ls = new WeakMap;

      function Ps(e) {
        const t = q.OW._sentryDebugIds;
        if (!t) return [];
        const n = (0, p.KU)(),
          r = n && n.getOptions(),
          o = r && r.stackParser;
        if (!o) return [];
        let s;
        const i = Ls.get(o);
        i ? s = i : (s = new Map, Ls.set(o, s));
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
      let js = !1;
      const Bs = 3e4;

      function $s(e) {
        if (js) return ws.T && V.vF.log("[Profiling] Profiling has been disabled for the duration of the current user session."), !1;
        if (!e.isRecording()) return ws.T && V.vF.log("[Profiling] Discarding profile because transaction was not sampled."), !1;
        const t = (0, p.KU)(),
          n = t && t.getOptions();
        if (!n) return ws.T && V.vF.log("[Profiling] Profiling disabled, no options found."), !1;
        const r = n.profilesSampleRate;
        return ("number" != typeof(o = r) && "boolean" != typeof o || "number" == typeof o && isNaN(o) ? (ws.T && V.vF.warn(`[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(o)} of type ${JSON.stringify(typeof o)}.`), 0) : !0 === o || !1 === o || !(o < 0 || o > 1) || (ws.T && V.vF.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${o}.`), 0)) ? r ? !!(!0 === r || Math.random() < r) || (ws.T && V.vF.log(`[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(r)})`), !1) : (ws.T && V.vF.log("[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0"), !1) : (ws.T && V.vF.warn("[Profiling] Discarding profile because of invalid sample rate."), !1);
        var o
      }

      function Us(e, t, n, r) {
        return function(e) {
          return e.samples.length < 2 ? (ws.T && V.vF.log("[Profiling] Discarding profile because it contains less than 2 samples"), !1) : !!e.frames.length || (ws.T && V.vF.log("[Profiling] Discarding profile because it contains no frames"), !1)
        }(n) ? Ds(e, t, n, r) : null
      }
      const Hs = new Map;

      function zs(e) {
        const t = Hs.get(e);
        return t && Hs.delete(e), t
      }

      function qs(e) {
        return e ? $s(e) ? Ws(e) : e : (ws.T && V.vF.log("[Profiling] Transaction is undefined, skipping profiling"), e)
      }

      function Ws(e) {
        let t;
        Fs(e) && (t = 1e3 * (0, J.zf)());
        const n = function() {
          const e = x.jf.Profiler;
          if ("function" != typeof e) return void(ws.T && V.vF.log("[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object."));
          const t = Math.floor(Bs / 10);
          try {
            return new e({
              sampleInterval: 10,
              maxBufferSize: t
            })
          } catch (e) {
            ws.T && (V.vF.log("[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header."), V.vF.log("[Profiling] Disabling profiling for current user session.")), js = !0
          }
        }();
        if (!n) return e;
        ws.T && V.vF.log(`[Profiling] started profiling transaction: ${(0,z.et)(e).description}`);
        const r = (0, Y.eJ)();
        async function o() {
          return e && n ? n.stop().then((t => (s && (x.jf.clearTimeout(s), s = void 0), ws.T && V.vF.log(`[Profiling] stopped profiling of transaction: ${(0,z.et)(e).description}`), t ? (function(e, t) {
            if (Hs.set(e, t), Hs.size > 30) {
              const e = Hs.keys().next().value;
              Hs.delete(e)
            }
          }(r, t), null) : (ws.T && V.vF.log(`[Profiling] profiler returned null profile for: ${(0,z.et)(e).description}`, "this may indicate an overlapping transaction or a call to stopProfiling with a profile title that was never started"), null)))).catch((e => (ws.T && V.vF.log("[Profiling] error while stopping profiler:", e), null))) : null
        }
        let s = x.jf.setTimeout((() => {
          ws.T && V.vF.log("[Profiling] max profile duration elapsed, stopping profiling for:", (0, z.et)(e).description), o()
        }), Bs);
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
      const Gs = "BrowserProfiling",
        Ks = (0, m._C)((() => ({
          name: Gs,
          setupOnce() {},
          setup(e) {
            const t = (0, p.o5)().getTransaction();
            t && Fs(t) && $s(t) && Ws(t), "function" == typeof e.on ? (e.on("startTransaction", (e => {
              $s(e) && Ws(e)
            })), e.on("beforeEnvelope", (e => {
              if (!Hs.size) return;
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
                  ws.T && V.vF.log("[Profiling] cannot find profile for a transaction without a profile context");
                  continue
                }
                if (!r) {
                  ws.T && V.vF.log("[Profiling] cannot find profile for a transaction without a profile context");
                  continue
                }
                t && t.profile && delete t.profile;
                const s = zs(r);
                if (!s) {
                  ws.T && V.vF.log(`[Profiling] Could not retrieve profile for transaction: ${r}`);
                  continue
                }
                const i = Us(r, o, s, e);
                i && n.push(i)
              }! function(e, t) {
                if (!t.length) return e;
                for (const n of t) e[1].push([{
                  type: "profile"
                }, n])
              }(e, n)
            }))) : V.vF.warn("[Profiling] Client does not support hooks, profiling will be disabled")
          }
        }))),
        Js = (0, m.F)(Gs, Ks);
      let Vs = {};
      x.jf.Sentry && x.jf.Sentry.Integrations && (Vs = x.jf.Sentry.Integrations);
      const Ys = {
        ...Vs,
        ...o.Integrations,
        ...r
      }
    },
    54474: (e, t, n) => {
      "use strict";
      n.d(t, {
        Er: () => c,
        Mn: () => u
      });
      var r = n(88810),
        o = n(53825),
        s = n(31127),
        i = n(10464);
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
    54698: (e, t, n) => {
      "use strict";
      n.d(t, {
        T: () => r
      });
      const r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
    },
    55343: (e, t, n) => {
      "use strict";
      n.d(t, {
        k3: () => c,
        lu: () => s,
        zf: () => i
      });
      var r = n(31127);
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
    55468: (e, t, n) => {
      "use strict";
      n.d(t, {
        Z: () => a,
        k: () => c
      });
      var r = n(53825),
        o = n(49361);
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
    57226: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.createSentryMiddleware = t.flattenObject = t.diffObject = void 0;
      const r = n(63054),
        o = n(94);

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
    58574: (e, t, n) => {
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
    58638: (e, t, n) => {
      "use strict";
      n.d(t, {
        U: () => c,
        s: () => a
      });
      var r = n(6846),
        o = n(58970),
        s = n(53711);
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
    58970: (e, t, n) => {
      "use strict";
      n.d(t, {
        Ow: () => s,
        Z9: () => i,
        pq: () => a,
        vF: () => c
      });
      var r = n(54698),
        o = n(31127);
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
    59521: (e, t, n) => {
      "use strict";
      n.d(t, {
        a9: () => j,
        T5: () => U,
        hT: () => H,
        Pt: () => B,
        wv: () => z,
        YG: () => $
      });
      var r = n(58970),
        o = n(83095),
        s = n(22561);
      const i = (e, t, n) => {
        let r, o;
        return s => {
          t.value >= 0 && (s || n) && (o = t.value - (r || 0), (o || void 0 === r) && (r = t.value, t.delta = o, e(t)))
        }
      };
      var a = n(6067),
        c = n(30207);
      const u = () => {
          const e = (0, c.z)();
          return e && e.activationStart || 0
        },
        l = (e, t) => {
          const n = (0, c.z)();
          let r = "navigate";
          return n && (r = a.j.document && a.j.document.prerendering || u() > 0 ? "prerender" : n.type.replace(/_/g, "-")), {
            name: e,
            value: void 0 === t ? -1 : t,
            rating: "good",
            delta: 0,
            entries: [],
            id: `v3-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
            navigationType: r
          }
        },
        d = (e, t, n) => {
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
        };
      var p = n(6424);
      const h = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const n = l("CLS", 0);
        let r, o = 0,
          s = [];
        const a = e => {
            e.forEach((e => {
              if (!e.hadRecentInput) {
                const t = s[0],
                  i = s[s.length - 1];
                o && 0 !== s.length && e.startTime - i.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (o += e.value, s.push(e)) : (o = e.value, s = [e]), o > n.value && (n.value = o, n.entries = s, r && r())
              }
            }))
          },
          c = d("layout-shift", a);
        if (c) {
          r = i(e, n, t.reportAllChanges);
          const o = () => {
            a(c.takeRecords()), r(!0)
          };
          return (0, p.Q)(o), o
        }
      };
      var f = n(33977);
      const m = e => {
        const t = (0, f.N)(),
          n = l("FID");
        let r;
        const o = e => {
            e.startTime < t.firstHiddenTime && (n.value = e.processingStart - e.startTime, n.entries.push(e), r(!0))
          },
          s = e => {
            e.forEach(o)
          },
          a = d("first-input", s);
        r = i(e, n), a && (0, p.Q)((() => {
          s(a.takeRecords()), a.disconnect()
        }), !0)
      };
      let g = 0,
        v = 1 / 0,
        y = 0;
      const _ = e => {
        e.forEach((e => {
          e.interactionId && (v = Math.min(v, e.interactionId), y = Math.max(y, e.interactionId), g = y ? (y - v) / 7 + 1 : 0)
        }))
      };
      let b;
      const S = () => {
          "interactionCount" in performance || b || (b = d("event", _, {
            type: "event",
            buffered: !0,
            durationThreshold: 0
          }))
        },
        w = () => b ? g : performance.interactionCount || 0,
        T = [],
        k = {},
        E = e => {
          const t = T[T.length - 1],
            n = k[e.interactionId];
          if (n || T.length < 10 || e.duration > t.latency) {
            if (n) n.entries.push(e), n.latency = Math.max(n.latency, e.duration);
            else {
              const t = {
                id: e.interactionId,
                latency: e.duration,
                entries: [e]
              };
              k[t.id] = t, T.push(t)
            }
            T.sort(((e, t) => t.latency - e.latency)), T.splice(10).forEach((e => {
              delete k[e.id]
            }))
          }
        },
        x = (e, t) => {
          t = t || {}, S();
          const n = l("INP");
          let r;
          const o = e => {
              e.forEach((e => {
                e.interactionId && E(e), "first-input" === e.entryType && !T.some((t => t.entries.some((t => e.duration === t.duration && e.startTime === t.startTime)))) && E(e)
              }));
              const t = (() => {
                const e = Math.min(T.length - 1, Math.floor(w() / 50));
                return T[e]
              })();
              t && t.latency !== n.value && (n.value = t.latency, n.entries = t.entries, r())
            },
            s = d("event", o, {
              durationThreshold: t.durationThreshold || 40
            });
          r = i(e, n, t.reportAllChanges), s && (s.observe({
            type: "first-input",
            buffered: !0
          }), (0, p.Q)((() => {
            o(s.takeRecords()), n.value < 0 && w() > 0 && (n.value = 0, n.entries = []), r(!0)
          })))
        },
        I = {},
        C = e => {
          const t = (0, f.N)(),
            n = l("LCP");
          let r;
          const o = e => {
              const o = e[e.length - 1];
              if (o) {
                const e = Math.max(o.startTime - u(), 0);
                e < t.firstHiddenTime && (n.value = e, n.entries = [o], r())
              }
            },
            s = d("largest-contentful-paint", o);
          if (s) {
            r = i(e, n);
            const t = () => {
              I[n.id] || (o(s.takeRecords()), s.disconnect(), I[n.id] = !0, r(!0))
            };
            return ["keydown", "click"].forEach((e => {
              a.j.document && addEventListener(e, t, {
                once: !0,
                capture: !0
              })
            })), (0, p.Q)(t, !0), t
          }
        },
        R = e => {
          a.j.document && (a.j.document.prerendering ? addEventListener("prerenderingchange", (() => R(e)), !0) : "complete" !== a.j.document.readyState ? addEventListener("load", (() => R(e)), !0) : setTimeout(e, 0))
        },
        M = (e, t) => {
          t = t || {};
          const n = l("TTFB"),
            r = i(e, n, t.reportAllChanges);
          R((() => {
            const e = (0, c.z)();
            if (e) {
              if (n.value = Math.max(e.responseStart - u(), 0), n.value < 0 || n.value > performance.now()) return;
              n.entries = [e], r(!0)
            }
          }))
        },
        O = {},
        A = {};
      let N, D, F, L, P;

      function j(e) {
        return Y("cls", e, W, N, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }

      function B(e) {
        return Y("lcp", e, K, F, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }

      function $(e) {
        return Y("ttfb", e, J, L)
      }

      function U(e) {
        return Y("fid", e, G, D)
      }

      function H(e) {
        return Y("inp", e, V, P)
      }

      function z(e, t) {
        return X(e, t), A[e] || (function(e) {
          const t = {};
          "event" === e && (t.durationThreshold = 0), d(e, (t => {
            q(e, {
              entries: t
            })
          }), t)
        }(e), A[e] = !0), Q(e, t)
      }

      function q(e, t) {
        const n = O[e];
        if (n && n.length)
          for (const i of n) try {
            i(t)
          } catch (t) {
            s.T && r.vF.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${(0,o.qQ)(i)}\nError:`, t)
          }
      }

      function W() {
        return h((e => {
          q("cls", {
            metric: e
          }), N = e
        }), {
          reportAllChanges: !0
        })
      }

      function G() {
        return m((e => {
          q("fid", {
            metric: e
          }), D = e
        }))
      }

      function K() {
        return C((e => {
          q("lcp", {
            metric: e
          }), F = e
        }))
      }

      function J() {
        return M((e => {
          q("ttfb", {
            metric: e
          }), L = e
        }))
      }

      function V() {
        return x((e => {
          q("inp", {
            metric: e
          }), P = e
        }))
      }

      function Y(e, t, n, r) {
        let o, s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        return X(e, t), A[e] || (o = n(), A[e] = !0), r && t({
          metric: r
        }), Q(e, t, s ? o : void 0)
      }

      function X(e, t) {
        O[e] = O[e] || [], O[e].push(t)
      }

      function Q(e, t, n) {
        return () => {
          n && n();
          const r = O[e];
          if (!r) return;
          const o = r.indexOf(t); - 1 !== o && r.splice(o, 1)
        }
      }
    },
    62451: (e, t, n) => {
      "use strict";
      n.d(t, {
        BF: () => y,
        EU: () => g,
        Me: () => E,
        TF: () => S,
        YZ: () => m,
        fx: () => T,
        gM: () => v,
        lq: () => x,
        nX: () => w,
        rm: () => _
      });
      var r = n(88810),
        o = n(50950),
        s = n(55343),
        i = n(58970),
        a = n(31127),
        c = n(93637),
        u = n(14),
        l = n(98696),
        d = n(20404),
        p = n(21244);
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
        return k(e) && !E(e).isOlderThan(h) || x(e, new m), E(e)
      }

      function S(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b();
        if (!k(e) || E(e).isOlderThan(h)) {
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

      function T(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const n = g();
        return n.__SENTRY__ && n.__SENTRY__.acs ? n.__SENTRY__.acs.runWithAsyncContext(e, t) : e()
      }

      function k(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
      }

      function E(e) {
        return (0, a.BY)("hub", (() => new m), e)
      }

      function x(e, t) {
        return !!e && ((e.__SENTRY__ = e.__SENTRY__ || {}).hub = t, !0)
      }
    },
    63054: (e, t) => {
      "use strict";
      var n, r;
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Severity = t.RpcMethod = t.PostMessageOrigin = void 0, (t.PostMessageOrigin || (t.PostMessageOrigin = {})).Puppeteer = "*", (r = t.RpcMethod || (t.RpcMethod = {}))[r.captureException = 0] = "captureException", r[r.captureMessage = 1] = "captureMessage", r[r.captureEvent = 2] = "captureEvent", r[r.addBreadcrumb = 3] = "addBreadcrumb", r[r.setContext = 4] = "setContext", r[r.setExtras = 5] = "setExtras", r[r.setTags = 6] = "setTags", r[r.setExtra = 7] = "setExtra", r[r.setTag = 8] = "setTag", r[r.setUser = 9] = "setUser", (n = t.Severity || (t.Severity = {})).Fatal = "fatal", n.Error = "error", n.Warning = "warning", n.Log = "log", n.Info = "info", n.Debug = "debug"
    },
    64804: (e, t, n) => {
      "use strict";
      n.d(t, {
        u: () => a
      });
      var r = n(53825),
        o = n(79150),
        s = n(31127),
        i = n(10464);

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
    65037: (e, t, n) => {
      "use strict";
      n.d(t, {
        U: () => y,
        p: () => v
      });
      var r = n(58970),
        o = n(14),
        s = n(62451),
        i = n(19063),
        a = n(1075),
        c = n(97723),
        u = n(41660);
      let l = !1;

      function d() {
        const e = (0, u.Z7)();
        if (e) {
          const t = "internal_error";
          o.T && r.vF.log(`[Tracing] Transaction: ${t} -> Global error occured`), e.setStatus(t)
        }
      }
      d.tag = "sentry_tracingErrorCallback";
      var p = n(21867),
        h = n(35912),
        f = n(48537);

      function m() {
        const e = this.getScope().getSpan();
        return e ? {
          "sentry-trace": (0, i.Qh)(e)
        } : {}
      }

      function g(e, t) {
        const n = this.getClient(),
          s = n && n.getOptions() || {},
          i = s.instrumenter || "sentry",
          a = e.instrumenter || "sentry";
        i !== a && (o.T && r.vF.error(`A transaction was started with instrumenter=\`${a}\`, but the SDK is configured with the \`${i}\` instrumenter.\nThe transaction will not be sampled. Please use the ${i} instrumentation to start transactions.`), e.sampled = !1);
        let c = new f.Z(e, this);
        return c = (0, h.T)(c, s, {
          name: e.name,
          parentSampled: e.parentSampled,
          transactionContext: e,
          attributes: {
            ...e.data,
            ...e.attributes
          },
          ...t
        }), c.isRecording() && c.initSpanRecorder(s._experiments && s._experiments.maxSpans), n && n.emit && n.emit("startTransaction", c), c
      }

      function v(e, t, n, r, o, s, i) {
        let a = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const c = e.getClient(),
          u = c && c.getOptions() || {};
        let l = new p.zX(t, e, n, r, i, o, a);
        return l = (0, h.T)(l, u, {
          name: t.name,
          parentSampled: t.parentSampled,
          transactionContext: t,
          attributes: {
            ...t.data,
            ...t.attributes
          },
          ...s
        }), l.isRecording() && l.initSpanRecorder(u._experiments && u._experiments.maxSpans), c && c.emit && c.emit("startTransaction", l), l
      }

      function y() {
        const e = (0, s.EU)();
        e.__SENTRY__ && (e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}, e.__SENTRY__.extensions.startTransaction || (e.__SENTRY__.extensions.startTransaction = g), e.__SENTRY__.extensions.traceHeaders || (e.__SENTRY__.extensions.traceHeaders = m), l || (l = !0, (0, a.L)(d), (0, c.r)(d)))
      }
    },
    65378: (e, t, n) => {
      "use strict";
      n.d(t, {
        l: () => s
      });
      var r = n(49361),
        o = n(85802);

      function s(e, t) {
        const n = {
          sent_at: (new Date).toISOString()
        };
        t && (n.dsn = (0, r.SB)(t));
        const s = e.map(i);
        return (0, o.h4)(n, s)
      }

      function i(e) {
        return [{
          type: "span"
        }, e]
      }
    },
    67332: (e, t, n) => {
      "use strict";
      var r = n(9862),
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
    68066: (e, t, n) => {
      "use strict";
      n.d(t, {
        De: () => d,
        hF: () => i,
        yD: () => l
      });
      var r = n(54698),
        o = n(88810),
        s = n(58970);
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
    68653: (e, t, n) => {
      "use strict";
      n.d(t, {
        G: () => u,
        h: () => l
      });
      var r = n(6846),
        o = n(53825),
        s = n(83095),
        i = n(74652);
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
    73844: (e, t, n) => {
      "use strict";
      n.d(t, {
        Y: () => d,
        Q: () => l
      });
      var r = n(85802),
        o = n(6846),
        s = n(31127);
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
    74007: (e, t, n) => {
      "use strict";
      n.d(t, {
        wz: () => s
      });
      var r = n(15899),
        o = n(89371);
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
    74652: (e, t, n) => {
      "use strict";
      n.d(t, {
        LV: () => l,
        jN: () => u,
        jf: () => a
      });
      var r = n(13903),
        o = n(31127),
        s = n(53825),
        i = n(50950);
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
          if (t) return "function" == typeof t ? t : e;
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
    75344: (e, t, n) => {
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

          function T(e) {
            return w(e, !1)
          }

          function k(e) {
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

          function I(e) {
            return e && e.__local_forage_encoded_blob
          }

          function C(e) {
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
                if (!e.db || "NotFoundError" === o.name && !e.db.objectStoreNames.contains(e.storeName) && e.version <= e.db.version) return e.db && (e.version = e.db.version + 1), k(e)
              })).then((function() {
                return function(e) {
                  _(e);
                  for (var t = h[e.name], n = t.forages, r = 0; r < n.length; r++) {
                    var o = n[r];
                    o._dbInfo.db && (o._dbInfo.db.close(), o._dbInfo.db = null)
                  }
                  return e.db = null, T(e).then((function(t) {
                    return e.db = t, E(e) ? k(e) : t
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
          var M = {
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
              }, h[n.name] = o), o.forages.push(t), t._initReady || (t._initReady = t.ready, t.ready = C);
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
                return n.db = o.db, T(n)
              })).then((function(e) {
                return n.db = e, E(n, t._defaultConfig.version) ? k(n) : e
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
                            I(r) && (r = x(r));
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
                        void 0 === e && (e = null), I(e) && (e = x(e)), t(e)
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
                var s = e.name === r.name && this._dbInfo.db ? i.resolve(this._dbInfo.db) : T(e).then((function(t) {
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
          var O = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            A = /^~~local_forage_type~([^~]+)~/,
            N = "__lfsc__:",
            D = "arbf",
            F = "blob",
            L = "si08",
            P = "ui08",
            j = "uic8",
            B = "si16",
            $ = "si32",
            U = "ur16",
            H = "ui32",
            z = "fl32",
            q = "fl64",
            W = Object.prototype.toString;

          function G(e) {
            var t, n, r, o, s, i = .75 * e.length,
              a = e.length,
              c = 0;
            "=" === e[e.length - 1] && (i--, "=" === e[e.length - 2] && i--);
            var u = new ArrayBuffer(i),
              l = new Uint8Array(u);
            for (t = 0; t < a; t += 4) n = O.indexOf(e[t]), r = O.indexOf(e[t + 1]), o = O.indexOf(e[t + 2]), s = O.indexOf(e[t + 3]), l[c++] = n << 2 | r >> 4, l[c++] = (15 & r) << 4 | o >> 2, l[c++] = (3 & o) << 6 | 63 & s;
            return u
          }

          function K(e) {
            var t, n = new Uint8Array(e),
              r = "";
            for (t = 0; t < n.length; t += 3) r += O[n[t] >> 2], r += O[(3 & n[t]) << 4 | n[t + 1] >> 4], r += O[(15 & n[t + 1]) << 2 | n[t + 2] >> 6], r += O[63 & n[t + 2]];
            return n.length % 3 == 2 ? r = r.substring(0, r.length - 1) + "=" : n.length % 3 == 1 && (r = r.substring(0, r.length - 2) + "=="), r
          }
          var J = {
            serialize: function(e, t) {
              var n = "";
              if (e && (n = W.call(e)), e && ("[object ArrayBuffer]" === n || e.buffer && "[object ArrayBuffer]" === W.call(e.buffer))) {
                var r, o = N;
                e instanceof ArrayBuffer ? (r = e, o += D) : (r = e.buffer, "[object Int8Array]" === n ? o += L : "[object Uint8Array]" === n ? o += P : "[object Uint8ClampedArray]" === n ? o += j : "[object Int16Array]" === n ? o += B : "[object Uint16Array]" === n ? o += U : "[object Int32Array]" === n ? o += $ : "[object Uint32Array]" === n ? o += H : "[object Float32Array]" === n ? o += z : "[object Float64Array]" === n ? o += q : t(new Error("Failed to get type for BinaryArray"))), t(o + K(r))
              } else if ("[object Blob]" === n) {
                var s = new FileReader;
                s.onload = function() {
                  var n = "~~local_forage_type~" + e.type + "~" + K(this.result);
                  t(N + F + n)
                }, s.readAsArrayBuffer(e)
              } else try {
                t(JSON.stringify(e))
              } catch (n) {
                console.error("Couldn't convert value into a JSON string: ", e), t(null, n)
              }
            },
            deserialize: function(e) {
              if (e.substring(0, 9) !== N) return JSON.parse(e);
              var t, n = e.substring(13),
                r = e.substring(9, 13);
              if (r === F && A.test(n)) {
                var o = n.match(A);
                t = o[1], n = n.substring(o[0].length)
              }
              var i = G(n);
              switch (r) {
                case D:
                  return i;
                case F:
                  return s([i], {
                    type: t
                  });
                case L:
                  return new Int8Array(i);
                case P:
                  return new Uint8Array(i);
                case j:
                  return new Uint8ClampedArray(i);
                case B:
                  return new Int16Array(i);
                case U:
                  return new Uint16Array(i);
                case $:
                  return new Int32Array(i);
                case H:
                  return new Uint32Array(i);
                case z:
                  return new Float32Array(i);
                case q:
                  return new Float64Array(i);
                default:
                  throw new Error("Unkown type: " + r)
              }
            },
            stringToBuffer: G,
            bufferToString: K
          };

          function V(e, t, n, r) {
            e.executeSql("CREATE TABLE IF NOT EXISTS " + t.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], n, r)
          }

          function Y(e, t, n, r, o, s) {
            e.executeSql(n, r, o, (function(e, i) {
              i.code === i.SYNTAX_ERR ? e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [t.storeName], (function(e, a) {
                a.rows.length ? s(e, i) : V(e, t, (function() {
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
                  V(o, n, (function() {
                    t._dbInfo = n, e()
                  }), (function(e, t) {
                    r(t)
                  }))
                }), r)
              }));
              return n.serializer = J, o
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
                return t.keyPrefix = Z(e, this._defaultConfig), ee() ? (this._dbInfo = t, t.serializer = J, i.resolve()) : i.reject()
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
              INDEXEDDB: M,
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
                var t = i.resolve(J);
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
    75655: (e, t, n) => {
      "use strict";
      n.d(t, {
        K: () => o
      });
      var r = n(21244);

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
    77298: (e, t, n) => {
      "use strict";
      n.d(t, {
        T: () => i,
        Z: () => s
      });
      var r = n(6846);
      const o = "SessionTiming",
        s = (0, r._C)((() => {
          const e = Date.now();
          return {
            name: o,
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
        i = (0, r.F)(o, s)
    },
    77393: (e, t, n) => {
      "use strict";
      n.d(t, {
        Q: () => m,
        c: () => f
      });
      var r = n(6846),
        o = n(13903),
        s = n(22557),
        i = n(58970),
        a = n(79150),
        c = n(64804),
        u = n(31127),
        l = n(54474),
        d = n(50950),
        p = n(87494);
      const h = "HttpClient",
        f = (0, r._C)((function() {
          const e = {
            failedRequestStatusCodes: [
              [500, 599]
            ],
            failedRequestTargets: [/.*/],
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          };
          return {
            name: h,
            setupOnce() {},
            setup(t) {
              ! function(e, t) {
                (0, a.m7)() && (0, c.u)((n => {
                  if ((0, o.KU)() !== e) return;
                  const {
                    response: r,
                    args: s
                  } = n, [a, c] = s;
                  r && function(e, t, n, r) {
                    if (y(e, n.status, n.url)) {
                      const e = function(e, t) {
                        return !t && e instanceof Request || e instanceof Request && e.bodyUsed ? e : new Request(e, t)
                      }(t, r);
                      let s, a, c, u;
                      b() && ([{
                        headers: s,
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
                          e && (o = v(e))
                        } catch (e) {
                          p.T && i.vF.log(`Could not extract cookies from header ${t}`)
                        }
                        return {
                          headers: r,
                          cookies: o
                        }
                      })));
                      const l = _({
                        url: e.url,
                        method: e.method,
                        status: n.status,
                        requestHeaders: s,
                        responseHeaders: a,
                        requestCookies: c,
                        responseCookies: u
                      });
                      (0, o.r)(l)
                    }
                  }(t, a, r, c)
                }))
              }(t, e),
              function(e, t) {
                "XMLHttpRequest" in u.OW && (0, l.Mn)((n => {
                  if ((0, o.KU)() !== e) return;
                  const r = n.xhr,
                    s = r[l.Er];
                  if (!s) return;
                  const {
                    method: a,
                    request_headers: c
                  } = s;
                  try {
                    ! function(e, t, n, r) {
                      if (y(e, t.status, t.responseURL)) {
                        let e, s, a;
                        if (b()) {
                          try {
                            const e = t.getResponseHeader("Set-Cookie") || t.getResponseHeader("set-cookie") || void 0;
                            e && (s = v(e))
                          } catch (e) {
                            p.T && i.vF.log("Could not extract cookies from response headers")
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
                            p.T && i.vF.log("Could not extract headers from response")
                          }
                          e = r
                        }
                        const c = _({
                          url: t.responseURL,
                          method: n,
                          status: t.status,
                          requestHeaders: e,
                          responseHeaders: a,
                          responseCookies: s
                        });
                        (0, o.r)(c)
                      }
                    }(t, r, a, c)
                  } catch (e) {
                    p.T && i.vF.warn("Error while extracting response event form XHR response", e)
                  }
                }))
              }(t, e)
            }
          }
        })),
        m = (0, r.F)(h, f);

      function g(e) {
        if (e) {
          const t = e["Content-Length"] || e["content-length"];
          if (t) return parseInt(t, 10)
        }
      }

      function v(e) {
        return e.split("; ").reduce(((e, t) => {
          const [n, r] = t.split("=");
          return e[n] = r, e
        }), {})
      }

      function y(e, t, n) {
        return function(e, t) {
          return e.some((e => "number" == typeof e ? e === t : t >= e[0] && t <= e[1]))
        }(e.failedRequestStatusCodes, t) && (r = e.failedRequestTargets, i = n, r.some((e => "string" == typeof e ? i.includes(e) : e.test(i)))) && !(0, s.A)(n, (0, o.KU)());
        var r, i
      }

      function _(e) {
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
                body_size: g(e.responseHeaders)
              }
            }
          };
        return (0, d.M6)(n, {
          type: "http.client",
          handled: !1
        }), n
      }

      function b() {
        const e = (0, o.KU)();
        return !!e && Boolean(e.getOptions().sendDefaultPii)
      }
    },
    77433: (e, t, n) => {
      "use strict";
      n.d(t, {
        P: () => a
      });
      var r = n(58970),
        o = n(53825),
        s = n(31127),
        i = n(10464);

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
    79150: (e, t, n) => {
      "use strict";
      n.d(t, {
        ap: () => a,
        m7: () => c,
        vQ: () => u,
        vm: () => i
      });
      var r = n(54698),
        o = n(58970);
      const s = (0, n(31127).VZ)();

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
    81181: (e, t, n) => {
      "use strict";
      n.d(t, {
        L: () => f,
        l: () => h
      });
      var r = n(50950),
        o = n(55343),
        s = n(58970),
        i = n(53825),
        a = n(14),
        c = n(52709),
        u = n(49295),
        l = n(87266),
        d = n(19063),
        p = n(38307);
      class h {
        constructor() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
          this._maxlen = e, this.spans = []
        }
        add(e) {
          this.spans.length > this._maxlen ? e.spanRecorder = void 0 : this.spans.push(e)
        }
      }
      class f {
        constructor() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this._traceId = e.traceId || (0, r.eJ)(), this._spanId = e.spanId || (0, r.eJ)().substring(16), this._startTime = e.startTimestamp || (0, o.zf)(), this.tags = e.tags ? {
            ...e.tags
          } : {}, this.data = e.data ? {
            ...e.data
          } : {}, this.instrumenter = e.instrumenter || "sentry", this._attributes = {}, this.setAttributes({
            [u.JD]: e.origin || "manual",
            [u.uT]: e.op,
            ...e.attributes
          }), this._name = e.name || e.description, e.parentSpanId && (this._parentSpanId = e.parentSpanId), "sampled" in e && (this._sampled = e.sampled), e.status && (this._status = e.status), e.endTimestamp && (this._endTime = e.endTimestamp), void 0 !== e.exclusiveTime && (this._exclusiveTime = e.exclusiveTime), this._measurements = e.measurements ? {
            ...e.measurements
          } : {}
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
          return this._attributes[u.uT]
        }
        set op(e) {
          this.setAttribute(u.uT, e)
        }
        get origin() {
          return this._attributes[u.JD]
        }
        set origin(e) {
          this.setAttribute(u.JD, e)
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
            traceFlags: n ? d.aO : d.CC
          }
        }
        startChild(e) {
          const t = new f({
            ...e,
            parentSpanId: this._spanId,
            sampled: this._sampled,
            traceId: this._traceId
          });
          t.spanRecorder = this.spanRecorder, t.spanRecorder && t.spanRecorder.add(t);
          const n = (0, l.z)(this);
          if (t.transaction = n, a.T && n) {
            const r = `[Tracing] Starting '${e&&e.op||"< unknown op >"}' span on transaction '${(0,d.et)(t).description||"< unknown name >"}' (${n.spanContext().spanId}).`;
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
          return (0, p.N8)(this, e), this
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
          const t = (0, l.z)(this);
          if (a.T && t && t.spanContext().spanId !== this._spanId) {
            const e = this._logMessage;
            e && s.vF.log(e.replace("Starting", "Finishing"))
          }
          this._endTime = (0, d.cI)(e)
        }
        toTraceparent() {
          return (0, d.Qh)(this)
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
          return (0, d.kX)(this)
        }
        getSpanJSON() {
          return (0, i.Ce)({
            data: this._getData(),
            description: this._name,
            op: this._attributes[u.uT],
            parent_span_id: this._parentSpanId,
            span_id: this._spanId,
            start_timestamp: this._startTime,
            status: this._status,
            tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
            timestamp: this._endTime,
            trace_id: this._traceId,
            origin: this._attributes[u.JD],
            _metrics_summary: (0, c.g)(this),
            profile_id: this._attributes[u.E1],
            exclusive_time: this._exclusiveTime,
            measurements: Object.keys(this._measurements).length > 0 ? this._measurements : void 0
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
    83095: (e, t, n) => {
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
    83853: (e, t, n) => {
      "use strict";
      n.d(t, {
        S8: () => i,
        cd: () => a
      });
      var r = n(88810),
        o = n(53825),
        s = n(83095);

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
    84838: (e, t, n) => {
      "use strict";
      n.d(t, {
        V: () => S,
        S: () => k
      });
      var r = n(49361),
        o = n(58970),
        s = n(50950),
        i = n(88810),
        a = n(45620),
        c = n(85802),
        u = n(58574),
        l = n(55468),
        d = n(14),
        p = n(36030),
        h = n(13903),
        f = n(62451),
        m = n(6846),
        g = n(89371);
      var v = n(20404),
        y = n(90714),
        _ = n(46237);
      const b = "Not capturing exception because it's already been captured.";
      class S {
        constructor(e) {
          if (this._options = e, this._integrations = {}, this._integrationsInitialized = !1, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], e.dsn ? this._dsn = (0, r.AD)(e.dsn) : d.T && o.vF.warn("No DSN provided, client will not send events."), this._dsn) {
            const t = (0, l.Z)(this._dsn, e);
            this._transport = e.transport({
              tunnel: this._options.tunnel,
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
          const i = (e.sdkProcessingMetadata || {}).capturedSpanScope;
          return this._process(this._captureEvent(e, t, i || n).then((e => {
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
            const r = "number" == typeof n ? n : 1,
              s = `${e}:${t}`;
            d.T && o.vF.log(`Recording outcome: "${s}"${r>1?` (${r} times)`:""}`), this._outcomes[s] = (this._outcomes[s] || 0) + r
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
            s = T(e),
            c = w(e),
            l = e.type || "error",
            d = `before send for type \`${l}\``;
          if (c && "number" == typeof o && Math.random() > o) return this.recordDroppedEvent("sample_rate", "error", e), (0, a.xg)(new u.U(`Discarding event because it's not included in the random sample (sampling rate = ${o})`, "log"));
          const p = "replay_event" === l ? "replay" : l,
            h = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
          return this._prepareEvent(e, t, n, h).then((n => {
            if (null === n) throw this.recordDroppedEvent("event_processor", p, e), new u.U("An event processor returned `null`, will not send event.", "log");
            if (t.data && !0 === t.data.__sentry__) return n;
            const o = function(e, t, n) {
              const {
                beforeSend: r,
                beforeSendTransaction: o
              } = e;
              if (w(t) && r) return r(t, n);
              if (T(t) && o) {
                if (t.spans) {
                  const e = t.spans.length;
                  t.sdkProcessingMetadata = {
                    ...t.sdkProcessingMetadata,
                    spanCountBeforeProcessing: e
                  }
                }
                return o(t, n)
              }
              return t
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
            if (null === r) {
              if (this.recordDroppedEvent("before_send", p, e), s) {
                const t = 1 + (e.spans || []).length;
                this.recordDroppedEvent("before_send", "span", t)
              }
              throw new u.U(`${d} returned \`null\`, will not send event.`, "log")
            }
            const o = n && n.getSession();
            if (!s && o && this._updateSessionFromEvent(o, r), s) {
              const e = (r.sdkProcessingMetadata && r.sdkProcessingMetadata.spanCountBeforeProcessing || 0) - (r.spans ? r.spans.length : 0);
              e > 0 && this.recordDroppedEvent("before_send", "span", e)
            }
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

      function T(e) {
        return "transaction" === e.type
      }

      function k(e) {
        const t = (0, h.KU)();
        t && t.addEventProcessor && t.addEventProcessor(e)
      }
    },
    85414: (e, t) => {
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
    85802: (e, t, n) => {
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
      var r = n(49361),
        o = n(83853),
        s = n(53825);

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
        span: "span",
        statsd: "metric_bucket"
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
    86253: (e, t, n) => {
      "use strict";
      n.d(t, {
        LV: () => A,
        Ts: () => C,
        kF: () => O,
        lo: () => N,
        mn: () => R,
        nI: () => I,
        w7: () => M,
        xg: () => x
      });
      var r = n(30908),
        o = n(12744),
        s = n(6846),
        i = n(19520),
        a = n(62451),
        c = n(55468),
        u = n(13903),
        l = n(83095),
        d = n(79150),
        p = n(58970),
        h = n(25684),
        f = n(88840),
        m = n(53711),
        g = n(74652),
        v = n(93143),
        y = n(58638),
        _ = n(20451),
        b = n(96386),
        S = n(44475),
        w = n(68653),
        T = n(94632),
        k = n(24837),
        E = n(2522);
      const x = [(0, r.D)(), (0, o.Z)(), (0, w.G)(), (0, v.F)(), (0, _.L)(), (0, S.p)(), (0, y.s)(), (0, b.M)()];

      function I(e) {
        return [...x]
      }

      function C() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        void 0 === e.defaultIntegrations && (e.defaultIntegrations = I()), void 0 === e.release && ("string" == typeof __SENTRY_RELEASE__ && (e.release = __SENTRY_RELEASE__), g.jf.SENTRY_RELEASE && g.jf.SENTRY_RELEASE.id && (e.release = g.jf.SENTRY_RELEASE.id)), void 0 === e.autoSessionTracking && (e.autoSessionTracking = !0), void 0 === e.sendClientReports && (e.sendClientReports = !0);
        const t = {
          ...e,
          stackParser: (0, l.vk)(e.stackParser || T.lG),
          integrations: (0, s.mH)(e),
          transport: e.transport || ((0, d.vm)() ? k._ : E.u)
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

      function M() {}

      function O(e) {
        e()
      }

      function A(e) {
        return (0, g.LV)(e)()
      }

      function N(e) {
        const t = (0, u.KU)();
        t && t.captureUserFeedback(e)
      }
    },
    87266: (e, t, n) => {
      "use strict";

      function r(e) {
        return e.transaction
      }
      n.d(t, {
        z: () => r
      })
    },
    87494: (e, t, n) => {
      "use strict";
      n.d(t, {
        T: () => r
      });
      const r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
    },
    88810: (e, t, n) => {
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
    88840: (e, t, n) => {
      "use strict";
      n.d(t, {
        y: () => m
      });
      var r = n(84838),
        o = n(75655),
        s = n(3775),
        i = n(58970),
        a = n(85802),
        c = n(55343);

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
      var l = n(49361),
        d = n(53711),
        p = n(32226),
        h = n(74652),
        f = n(18789);
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
    89267: (e, t, n) => {
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
    89371: (e, t, n) => {
      "use strict";
      n.d(t, {
        Mz: () => a,
        T3: () => c,
        VZ: () => d,
        eG: () => o,
        ik: () => i,
        tx: () => s
      });
      var r = n(53825);

      function o(e, t, n, o) {
        return `${e}${t}${n}${Object.entries((0,r.Ce)(o)).sort(((e,t)=>e[0].localeCompare(t[0])))}`
      }

      function s(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t &= t;
        return t >>> 0
      }

      function i(e) {
        let t = "";
        for (const n of e) {
          const e = Object.entries(n.tags),
            r = e.length > 0 ? `|#${e.map((e=>{let[t,n]=e;return`${t}:${n}`})).join(",")}` : "";
          t += `${n.name}@${n.unit}:${n.metric}|${n.metricType}${r}|T${n.timestamp}\n`
        }
        return t
      }

      function a(e) {
        return e.replace(/[^\w]+/gi, "_")
      }

      function c(e) {
        return e.replace(/[^\w\-.]+/gi, "_")
      }

      function u(e) {
        return e.replace(/[^\w\-./]+/gi, "")
      }
      const l = [
        ["\n", "\\n"],
        ["\r", "\\r"],
        ["\t", "\\t"],
        ["\\", "\\\\"],
        ["|", "\\u{7c}"],
        [",", "\\u{2c}"]
      ];

      function d(e) {
        const t = {};
        for (const r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[u(r)] = (n = String(e[r]), [...n].reduce(((e, t) => e + function(e) {
          for (const [t, n] of l)
            if (e === t) return n;
          return e
        }(t)), "")));
        var n;
        return t
      }
    },
    90714: (e, t, n) => {
      "use strict";
      n.d(t, {
        k: () => u,
        l: () => c
      });
      var r = n(53825),
        o = n(93637),
        s = n(13903),
        i = n(87266),
        a = n(19063);

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
    91036: (e, t, n) => {
      "use strict";
      n.d(t, {
        i: () => p
      });
      var r = n(50950),
        o = n(53825),
        s = n(31127),
        i = n(10464);
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
    92137: (e, t, n) => {
      "use strict";
      n.d(t, {
        w: () => o
      });
      var r = n(13903);

      function o(e) {
        if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
        const t = (0, r.KU)(),
          n = e || t && t.getOptions();
        return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
      }
    },
    93143: (e, t, n) => {
      "use strict";
      n.d(t, {
        B: () => b,
        F: () => _
      });
      var r = n(6846),
        o = n(13903),
        s = n(77433),
        i = n(91036),
        a = n(54474),
        c = n(64804),
        u = n(25684),
        l = n(50950),
        d = n(58970),
        p = n(52592),
        h = n(22969),
        f = n(41707),
        m = n(96973),
        g = n(53711),
        v = n(74652);
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
    93637: (e, t, n) => {
      "use strict";
      n.d(t, {
        U: () => r
      });
      const r = "production"
    },
    94632: (e, t, n) => {
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
      var r = n(83095);
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
    94756: (e, t, n) => {
      "use strict";
      n.d(t, {
        Bk: () => y,
        D7: () => m,
        Lb: () => k,
        Lk: () => f,
        Uk: () => v,
        V4: () => _,
        nV: () => g,
        uP: () => h
      });
      var r = n(18310),
        o = n(58970),
        s = n(53825),
        i = n(14),
        a = n(62451),
        c = n(19063),
        u = n(90714),
        l = n(13903),
        d = n(37314),
        p = n(92137);

      function h(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
        const o = (0, a.BF)(),
          s = (0, l.o5)(),
          i = s.getSpan(),
          c = S(e),
          u = b(o, {
            parentSpan: i,
            spanContext: c,
            forceTransaction: !1,
            scope: s
          });
        return s.setSpan(u), (0, d.x)((() => t(u)), (e => {
          u && u.setStatus("internal_error"), n(e, u)
        }), (() => {
          u && u.end(), s.setSpan(i), r()
        }))
      }

      function f(e, t) {
        const n = S(e);
        return (0, a.fx)((() => (0, l.v4)(e.scope, (r => {
          const o = (0, a.BF)(),
            s = r.getSpan(),
            i = e.onlyIfParent && !s ? void 0 : b(o, {
              parentSpan: s,
              spanContext: n,
              forceTransaction: e.forceTransaction,
              scope: r
            });
          return (0, d.x)((() => t(i)), (() => {
            if (i) {
              const {
                status: e
              } = (0, c.et)(i);
              e && "ok" !== e || i.setStatus("internal_error")
            }
          }), (() => i && i.end()))
        }))))
      }
      const m = f;

      function g(e, t) {
        const n = S(e);
        return (0, a.fx)((() => (0, l.v4)(e.scope, (r => {
          const o = (0, a.BF)(),
            s = r.getSpan(),
            i = e.onlyIfParent && !s ? void 0 : b(o, {
              parentSpan: s,
              spanContext: n,
              forceTransaction: e.forceTransaction,
              scope: r
            });

          function u() {
            i && i.end()
          }
          return (0, d.x)((() => t(i, u)), (() => {
            if (i && i.isRecording()) {
              const {
                status: e
              } = (0, c.et)(i);
              e && "ok" !== e || i.setStatus("internal_error")
            }
          }))
        }))))
      }

      function v(e) {
        if (!(0, p.w)()) return;
        const t = S(e),
          n = (0, a.BF)(),
          r = e.scope ? e.scope.getSpan() : y();
        if (e.onlyIfParent && !r) return;
        const o = (e.scope || (0, l.o5)()).clone();
        return b(n, {
          parentSpan: r,
          spanContext: t,
          forceTransaction: e.forceTransaction,
          scope: o
        })
      }

      function y() {
        return (0, l.o5)().getSpan()
      }
      const _ = (e, t) => {
        let {
          sentryTrace: n,
          baggage: c
        } = e;
        const u = (0, l.o5)(),
          {
            traceparentData: d,
            dynamicSamplingContext: p,
            propagationContext: h
          } = (0, r.E0)(n, c);
        u.setPropagationContext(h), i.T && d && o.vF.log(`[Tracing] Continuing trace ${d.traceId}.`);
        const f = {
          ...d,
          metadata: (0, s.Ce)({
            dynamicSamplingContext: p
          })
        };
        return t ? (0, a.fx)((() => t(f))) : f
      };

      function b(e, t) {
        let {
          parentSpan: n,
          spanContext: r,
          forceTransaction: o,
          scope: i
        } = t;
        if (!(0, p.w)()) return;
        const l = (0, a.rm)();
        let d;
        if (n && !o) d = n.startChild(r);
        else if (n) {
          const t = (0, u.k)(n),
            {
              traceId: o,
              spanId: s
            } = n.spanContext(),
            i = (0, c.pK)(n);
          d = e.startTransaction({
            traceId: o,
            parentSpanId: s,
            parentSampled: i,
            ...r,
            metadata: {
              dynamicSamplingContext: t,
              ...r.metadata
            }
          })
        } else {
          const {
            traceId: t,
            dsc: n,
            parentSpanId: o,
            sampled: s
          } = {
            ...l.getPropagationContext(),
            ...i.getPropagationContext()
          };
          d = e.startTransaction({
            traceId: t,
            parentSpanId: o,
            parentSampled: s,
            ...r,
            metadata: {
              dynamicSamplingContext: n,
              ...r.metadata
            }
          })
        }
        return i.setSpan(d),
          function(e, t, n) {
            e && ((0, s.my)(e, T, n), (0, s.my)(e, w, t))
          }(d, i, l), d
      }

      function S(e) {
        if (e.startTime) {
          const t = {
            ...e
          };
          return t.startTimestamp = (0, c.cI)(e.startTime), delete t.startTime, t
        }
        return e
      }
      const w = "_sentryScope",
        T = "_sentryIsolationScope";

      function k(e) {
        return {
          scope: e[w],
          isolationScope: e[T]
        }
      }
    },
    96386: (e, t, n) => {
      "use strict";
      n.d(t, {
        M: () => i,
        _: () => a
      });
      var r = n(6846),
        o = n(74652);
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
    96973: (e, t, n) => {
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
    97723: (e, t, n) => {
      "use strict";
      n.d(t, {
        r: () => i
      });
      var r = n(31127),
        o = n(10464);
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
    98696: (e, t, n) => {
      "use strict";
      n.d(t, {
        HG: () => d,
        ik: () => h,
        m6: () => p
      });
      var r = n(88810),
        o = n(55343),
        s = n(50950),
        i = n(58970),
        a = n(46105),
        c = n(20404),
        u = n(42869);
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
          const t = "function" == typeof e ? e(this) : e;
          if (t instanceof d) {
            const e = t.getScopeData();
            this._tags = {
              ...this._tags,
              ...e.tags
            }, this._extra = {
              ...this._extra,
              ...e.extra
            }, this._contexts = {
              ...this._contexts,
              ...e.contexts
            }, e.user && Object.keys(e.user).length && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint.length && (this._fingerprint = e.fingerprint), t.getRequestSession() && (this._requestSession = t.getRequestSession()), e.propagationContext && (this._propagationContext = e.propagationContext)
          } else if ((0, r.Qd)(t)) {
            const t = e;
            this._tags = {
              ...this._tags,
              ...t.tags
            }, this._extra = {
              ...this._extra,
              ...t.extra
            }, this._contexts = {
              ...this._contexts,
              ...t.contexts
            }, t.user && (this._user = t.user), t.level && (this._level = t.level), t.fingerprint && (this._fingerprint = t.fingerprint), t.requestSession && (this._requestSession = t.requestSession), t.propagationContext && (this._propagationContext = t.propagationContext)
          }
          return this
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
    99737: (e, t, n) => {
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
            const [t, n, , , r] = e.split(":", 5), o = parseInt(t, 10), a = 1e3 * (isNaN(o) ? 60 : o);
            if (n)
              for (const e of n.split(";")) "metric_bucket" === e && r && !r.split(";").includes("custom") || (i[e] = s + a);
            else i.all = s + a
          } else c ? i.all = s + o(c, s) : 429 === n && (i.all = s + 6e4);
        return i
      }
    },
    99990: function(e, t, n) {
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
        a = s(n(67332)),
        c = n(50138),
        u = n(34120),
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
    }
  }
]);