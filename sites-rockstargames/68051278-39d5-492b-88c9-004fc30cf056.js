try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "68051278-39d5-492b-88c9-004fc30cf056", t._sentryDebugIdIdentifier = "sentry-dbid-68051278-39d5-492b-88c9-004fc30cf056")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [6805], {
    66279(t, e, n) {
      n.d(e, {
        h: () => l
      });
      var r = n(71406),
        s = n(77038);
      const i = t => t instanceof Promise && !t[o],
        o = Symbol("chained PromiseLike");
      var a = n(24158);
      class c {
        constructor(t, e) {
          let n, r;
          n = t || new s.H, r = e || new s.H, this._stack = [{
            scope: n
          }], this._isolationScope = r
        }
        withScope(t) {
          const e = this._pushScope();
          let n;
          try {
            n = t(e)
          } catch (t) {
            throw this._popScope(), t
          }
          return (0, a.Qg)(n) ? ((t, e, n) => {
            const r = t.then(t => (e(), t), t => {
              throw n(), t
            });
            return i(r) && i(t) ? r : ((t, e) => {
              if (!e) return t;
              let n = !1;
              for (const r in t) {
                if (r in e) continue;
                n = !0;
                const s = t[r];
                "function" == typeof s ? Object.defineProperty(e, r, {
                  value: (...e) => s.apply(t, e),
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : e[r] = s
              }
              return n && Object.assign(e, {
                [o]: !0
              }), e
            })(t, r)
          })(n, () => this._popScope(), () => this._popScope()) : (this._popScope(), n)
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
        getStackTop() {
          return this._stack[this._stack.length - 1]
        }
        _pushScope() {
          const t = this.getScope().clone();
          return this._stack.push({
            client: this.getClient(),
            scope: t
          }), t
        }
        _popScope() {
          return !(this._stack.length <= 1 || !this._stack.pop())
        }
      }

      function u() {
        const t = (0, r.EU)(),
          e = (0, r.Se)(t);
        return e.stack = e.stack || new c((0, r.BY)("defaultCurrentScope", () => new s.H), (0, r.BY)("defaultIsolationScope", () => new s.H))
      }

      function d(t) {
        return u().withScope(t)
      }

      function p(t, e) {
        const n = u();
        return n.withScope(() => (n.getStackTop().scope = t, e(t)))
      }

      function f(t) {
        return u().withScope(() => t(u().getIsolationScope()))
      }

      function l(t) {
        const e = (0, r.Se)(t);
        return e.acs ? e.acs : {
          withIsolationScope: f,
          withScope: d,
          withSetScope: p,
          withSetIsolationScope: (t, e) => f(e),
          getCurrentScope: () => u().getScope(),
          getIsolationScope: () => u().getIsolationScope()
        }
      }
    },
    70805(t, e, n) {
      function r(t, e) {
        const {
          value: n,
          unit: r
        } = "object" == typeof(s = t) && null != s && !Array.isArray(s) && Object.keys(s).includes("value") ? t : {
          value: t,
          unit: void 0
        };
        var s;
        const i = function(t) {
            if (Array.isArray(t)) return {
              value: t,
              type: "array"
            };
            const e = "string" == typeof t ? "string" : "boolean" == typeof t ? "boolean" : "number" != typeof t || Number.isNaN(t) ? null : Number.isInteger(t) ? "integer" : "double";
            return e ? {
              value: t,
              type: e
            } : void 0
          }(n),
          o = r && "string" == typeof r ? {
            unit: r
          } : {};
        if (i) return {
          ...i,
          ...o
        };
        if (!e || "skip-undefined" === e && void 0 === n) return;
        let a = "";
        try {
          a = JSON.stringify(n) ?? ""
        } catch {}
        return {
          value: a,
          type: "string",
          ...o
        }
      }

      function s(t, e = !1) {
        const n = {};
        for (const [s, i] of Object.entries(t ?? {})) {
          const t = r(i, e);
          t && (n[s] = t)
        }
        return n
      }
      n.d(e, {
        SY: () => s
      })
    },
    71406(t, e, n) {
      n.d(e, {
        BY: () => a,
        EU: () => i,
        Se: () => o
      });
      var r = n(18404),
        s = n(91867);

      function i() {
        return o(s.O), s.O
      }

      function o(t) {
        const e = t.__SENTRY__ = t.__SENTRY__ || {};
        return e.version = e.version || r.M, e[r.M] = e[r.M] || {}
      }

      function a(t, e, n = s.O) {
        const i = n.__SENTRY__ = n.__SENTRY__ || {},
          o = i[r.M] = i[r.M] || {};
        return o[t] || (o[t] = e())
      }
    },
    33407(t, e, n) {
      n.d(e, ["U", 0, "production"])
    },
    49718(t, e, n) {
      n.d(e, {
        Bi: () => a,
        KU: () => f,
        m6: () => d,
        o5: () => c,
        rm: () => u,
        v4: () => p,
        vn: () => l
      });
      var r = n(66279),
        s = n(71406),
        i = n(77038),
        o = n(52287);

      function a() {
        return !1
      }

      function c() {
        const t = (0, s.EU)();
        return (0, r.h)(t).getCurrentScope()
      }

      function u() {
        const t = (0, s.EU)();
        return (0, r.h)(t).getIsolationScope()
      }

      function d() {
        return (0, s.BY)("globalScope", () => new i.H)
      }

      function p(...t) {
        const e = (0, s.EU)(),
          n = (0, r.h)(e);
        if (2 === t.length) {
          const [e, r] = t;
          return e ? n.withSetScope(e, r) : n.withScope(r)
        }
        return n.withScope(t[0])
      }

      function f() {
        return c().getClient()
      }

      function l(t) {
        const e = void 0;
        const n = t.getPropagationContext(),
          {
            traceId: r,
            parentSpanId: s,
            propagationSpanId: i
          } = n,
          a = {
            trace_id: r,
            span_id: i || (0, o.Z)()
          };
        return s && (a.parent_span_id = s), a
      }
    },
    52244(t, e, n) {
      const r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
      n.d(e, ["T", 0, r])
    },
    16805(t, e, n) {
      n.d(e, {
        Cp: () => c,
        J0: () => h,
        J5: () => m,
        Ol: () => f,
        SA: () => l,
        o: () => p,
        r: () => d,
        wd: () => u
      });
      var r = n(49718),
        s = n(16650),
        i = n(79340),
        o = n(35256),
        a = n(91867);

      function c(t, e) {
        return (0, r.o5)().captureException(t, (0, i.li)(e))
      }

      function u(t, e) {
        const n = "string" == typeof e ? e : void 0,
          s = "string" != typeof e ? {
            captureContext: e
          } : void 0;
        return (0, r.o5)().captureMessage(t, n, s)
      }

      function d(t, e) {
        return (0, r.o5)().captureEvent(t, e)
      }

      function p(t, e) {
        (0, r.rm)().setContext(t, e)
      }

      function f() {
        const t = (0, r.KU)();
        return !1 !== t?.getOptions().enabled && !!t?.getTransport()
      }

      function l(t) {
        (0, r.rm)().addEventProcessor(t)
      }

      function h(t) {
        const e = (0, r.rm)(),
          {
            user: n
          } = (0, o.Om)(e, (0, r.o5)()),
          {
            userAgent: i
          } = a.O.navigator || {},
          c = (0, s.fj)({
            user: n,
            ...i && {
              userAgent: i
            },
            ...t
          }),
          u = e.getSession();
        return "ok" === u?.status && (0, s.qO)(u, {
          status: "exited"
        }), _(), e.setSession(c), c
      }

      function _() {
        const t = (0, r.rm)(),
          e = (0, r.o5)().getSession() || t.getSession();
        e && (0, s.Vu)(e), g(), t.setSession()
      }

      function g() {
        const t = (0, r.rm)(),
          e = (0, r.KU)(),
          n = t.getSession();
        n && e && e.captureSession(n)
      }

      function m(t = !1) {
        t ? _() : g()
      }
    },
    77038(t, e, n) {
      n.d(e, {
        H: () => h
      });
      var r = n(52244),
        s = n(16650),
        i = n(63668),
        o = n(24158),
        a = n(12116),
        c = n(27874),
        u = n(52287),
        d = n(71337),
        p = n(10287),
        f = n(37287),
        l = n(83883);
      class h {
        constructor() {
          this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
            traceId: (0, u.e)(),
            sampleRand: (0, d.hY)()
          }
        }
        clone() {
          const t = new h;
          return t._breadcrumbs = [...this._breadcrumbs], t._tags = {
            ...this._tags
          }, t._attributes = {
            ...this._attributes
          }, t._extra = {
            ...this._extra
          }, t._contexts = {
            ...this._contexts
          }, this._contexts.flags && (t._contexts.flags = {
            values: [...this._contexts.flags.values]
          }), t._user = this._user, t._level = this._level, t._session = this._session, t._transactionName = this._transactionName, t._fingerprint = this._fingerprint, t._eventProcessors = [...this._eventProcessors], t._attachments = [...this._attachments], t._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata
          }, t._propagationContext = {
            ...this._propagationContext
          }, t._client = this._client, t._lastEventId = this._lastEventId, t._conversationId = this._conversationId, (0, p.r)(t, (0, p.f)(this)), t
        }
        setClient(t) {
          this._client = t
        }
        setLastEventId(t) {
          this._lastEventId = t
        }
        getClient() {
          return this._client
        }
        lastEventId() {
          return this._lastEventId
        }
        addScopeListener(t) {
          this._scopeListeners.push(t)
        }
        addEventProcessor(t) {
          return this._eventProcessors.push(t), this
        }
        setUser(t) {
          return this._user = t || {
            email: void 0,
            id: void 0,
            ip_address: void 0,
            username: void 0
          }, this._session && (0, s.qO)(this._session, {
            user: t
          }), this._notifyScopeListeners(), this
        }
        getUser() {
          return this._user
        }
        setConversationId(t) {
          return this._conversationId = t || void 0, this._notifyScopeListeners(), this
        }
        setTags(t) {
          return this._tags = {
            ...this._tags,
            ...t
          }, this._notifyScopeListeners(), this
        }
        setTag(t, e) {
          return this.setTags({
            [t]: e
          })
        }
        setAttributes(t) {
          return this._attributes = {
            ...this._attributes,
            ...t
          }, this._notifyScopeListeners(), this
        }
        setAttribute(t, e) {
          return this.setAttributes({
            [t]: e
          })
        }
        removeAttribute(t) {
          return t in this._attributes && (delete this._attributes[t], this._notifyScopeListeners()), this
        }
        setExtras(t) {
          return this._extra = {
            ...this._extra,
            ...t
          }, this._notifyScopeListeners(), this
        }
        setExtra(t, e) {
          return this._extra = {
            ...this._extra,
            [t]: e
          }, this._notifyScopeListeners(), this
        }
        setFingerprint(t) {
          return this._fingerprint = t, this._notifyScopeListeners(), this
        }
        setLevel(t) {
          return this._level = t, this._notifyScopeListeners(), this
        }
        setTransactionName(t) {
          return this._transactionName = t, this._notifyScopeListeners(), this
        }
        setContext(t, e) {
          return null === e ? delete this._contexts[t] : this._contexts[t] = e, this._notifyScopeListeners(), this
        }
        setSession(t) {
          return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
        }
        getSession() {
          return this._session
        }
        update(t) {
          if (!t) return this;
          const e = "function" == typeof t ? t(this) : t,
            n = e instanceof h ? e.getScopeData() : (0, o.Qd)(e) ? t : void 0,
            {
              tags: r,
              attributes: s,
              extra: i,
              user: a,
              contexts: c,
              level: u,
              fingerprint: d = [],
              propagationContext: p,
              conversationId: f
            } = n || {};
          return this._tags = {
            ...this._tags,
            ...r
          }, this._attributes = {
            ...this._attributes,
            ...s
          }, this._extra = {
            ...this._extra,
            ...i
          }, this._contexts = {
            ...this._contexts,
            ...c
          }, a && Object.keys(a).length && (this._user = a), u && (this._level = u), d.length && (this._fingerprint = d), p && (this._propagationContext = p), f && (this._conversationId = f), this
        }
        clear() {
          return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, (0, p.r)(this, void 0), this._attachments = [], this.setPropagationContext({
            traceId: (0, u.e)(),
            sampleRand: (0, d.hY)()
          }), this._notifyScopeListeners(), this
        }
        addBreadcrumb(t, e) {
          const n = "number" == typeof e ? e : 100;
          if (n <= 0) return this;
          const r = {
            timestamp: (0, l.lu)(),
            ...t,
            message: t.message ? (0, f.xv)(t.message, 2048) : t.message
          };
          return this._breadcrumbs.push(r), this._breadcrumbs.length > n && (this._breadcrumbs = this._breadcrumbs.slice(-n), this._client?.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this
        }
        getLastBreadcrumb() {
          return this._breadcrumbs[this._breadcrumbs.length - 1]
        }
        clearBreadcrumbs() {
          return this._breadcrumbs = [], this._notifyScopeListeners(), this
        }
        addAttachment(t) {
          return this._attachments.push(t), this
        }
        clearAttachments() {
          return this._attachments = [], this
        }
        getScopeData() {
          return {
            breadcrumbs: this._breadcrumbs,
            attachments: this._attachments,
            contexts: this._contexts,
            tags: this._tags,
            attributes: this._attributes,
            extra: this._extra,
            user: this._user,
            level: this._level,
            fingerprint: this._fingerprint || [],
            eventProcessors: this._eventProcessors,
            propagationContext: this._propagationContext,
            sdkProcessingMetadata: this._sdkProcessingMetadata,
            transactionName: this._transactionName,
            span: (0, p.f)(this),
            conversationId: this._conversationId
          }
        }
        setSDKProcessingMetadata(t) {
          return this._sdkProcessingMetadata = (0, a.h)(this._sdkProcessingMetadata, t, 2), this
        }
        setPropagationContext(t) {
          return this._propagationContext = t, this
        }
        getPropagationContext() {
          return this._propagationContext
        }
        captureException(t, e) {
          const n = e?.event_id || (0, c.eJ)();
          if (!this._client) return r.T && i.Yz.warn("No client configured on scope - will not capture exception!"), n;
          const s = new Error("Sentry syntheticException");
          return this._client.captureException(t, {
            originalException: t,
            syntheticException: s,
            ...e,
            event_id: n
          }, this), n
        }
        captureMessage(t, e, n) {
          const s = n?.event_id || (0, c.eJ)();
          if (!this._client) return r.T && i.Yz.warn("No client configured on scope - will not capture message!"), s;
          const o = n?.syntheticException ?? new Error(t);
          return this._client.captureMessage(t, e, {
            originalException: t,
            syntheticException: o,
            ...n,
            event_id: s
          }, this), s
        }
        captureEvent(t, e) {
          const n = t.event_id || e?.event_id || (0, c.eJ)();
          return this._client ? (this._client.captureEvent(t, {
            ...e,
            event_id: n
          }, this), n) : (r.T && i.Yz.warn("No client configured on scope - will not capture event!"), n)
        }
        _notifyScopeListeners() {
          this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
            t(this)
          }), this._notifyingListeners = !1)
        }
      }
    },
    91781(t, e, n) {
      n.d(e, ["E1", 0, "sentry.profile_id", "Ef", 0, "sentry.previous_trace_sample_rate", "Ft", 0, "sentry.status.message", "Fy", 0, "gen_ai.conversation.id", "JD", 0, "sentry.origin", "Lc", 0, "sentry.link.type", "Le", 0, "sentry.custom_span_name", "Sn", 0, "sentry.measurement_unit", "fs", 0, "sentry.idle_span_finish_reason", "i_", 0, "sentry.source", "jG", 0, "sentry.exclusive_time", "sy", 0, "sentry.sample_rate", "uT", 0, "sentry.op", "xc", 0, "sentry.measurement_value"])
    },
    16650(t, e, n) {
      n.d(e, {
        Vu: () => a,
        fj: () => i,
        qO: () => o
      });
      var r = n(27874),
        s = n(83883);

      function i(t) {
        const e = (0, s.zf)(),
          n = {
            sid: (0, r.eJ)(),
            init: !0,
            timestamp: e,
            started: e,
            duration: 0,
            status: "ok",
            errors: 0,
            ignoreDuration: !1,
            toJSON: () => function(t) {
              return {
                sid: `${t.sid}`,
                init: t.init,
                started: new Date(1e3 * t.started).toISOString(),
                timestamp: new Date(1e3 * t.timestamp).toISOString(),
                status: t.status,
                errors: t.errors,
                did: "number" == typeof t.did || "string" == typeof t.did ? `${t.did}` : void 0,
                duration: t.duration,
                abnormal_mechanism: t.abnormal_mechanism,
                attrs: {
                  release: t.release,
                  environment: t.environment,
                  ip_address: t.ipAddress,
                  user_agent: t.userAgent
                }
              }
            }(n)
          };
        return t && o(n, t), n
      }

      function o(t, e = {}) {
        if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), t.did || e.did || (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || (0, s.zf)(), e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = 32 === e.sid.length ? e.sid : (0, r.eJ)()), void 0 !== e.init && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), "number" == typeof e.started && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
        else if ("number" == typeof e.duration) t.duration = e.duration;
        else {
          const e = t.timestamp - t.started;
          t.duration = e >= 0 ? e : 0
        }
        e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), "number" == typeof e.errors && (t.errors = e.errors), e.status && (t.status = e.status)
      }

      function a(t, e) {
        let n = {};
        e ? n = {
          status: e
        } : "ok" === t.status && (n = {
          status: "exited"
        }), o(t, n)
      }
    },
    12212(t, e, n) {
      n.d(e, {
        LZ: () => h,
        ao: () => g,
        k1: () => m
      });
      var r = n(33407),
        s = n(49718),
        i = n(91781),
        o = n(85054),
        a = n(48845),
        c = n(51278),
        u = n(50733),
        d = n(79165),
        p = n(47842),
        f = n(67158);
      const l = "_frozenDsc";

      function h(t, e) {
        const n = t;
        (0, u.my)(n, l, e)
      }

      function _(t, e) {
        const n = e.getOptions(),
          {
            publicKey: s
          } = e.getDsn() || {},
          i = {
            environment: n.environment || r.U,
            release: n.release,
            public_key: s,
            trace_id: t,
            org_id: (0, a.ul)(e)
          };
        return e.emit("createDsc", i), i
      }

      function g(t, e) {
        const n = e.getPropagationContext();
        return n.dsc || _(n.traceId, t)
      }

      function m(t) {
        const e = (0, s.KU)();
        if (!e) return {};
        const n = (0, d.zU)(t),
          r = (0, d.et)(n),
          a = r.data,
          u = n.spanContext().traceState,
          h = u?.get("sentry.sample_rate") ?? a[i.sy] ?? a[i.Ef];

        function m(t) {
          return "number" != typeof h && "string" != typeof h || (t.sample_rate = `${h}`), t
        }
        const y = n[l];
        if (y) return m(y);
        const b = (0, p.h)(n),
          v = b && "ignored" === n.dropReason;
        if (b && (!(0, c.f)(e.getOptions()) || v)) {
          const t = (0, f.Lb)(n).scope;
          if (t) {
            const n = {
              ...g(e, t)
            };
            return v && (n.sampled = "false"), m(n)
          }
        }
        const S = u?.get("sentry.dsc"),
          x = S && (0, o.yD)(S);
        if (x) return m(x);
        const k = _(t.spanContext().traceId, e),
          I = a[i.i_] ?? a["sentry.segment.name.source"],
          E = r.description;
        return "url" !== I && E && (k.transaction = E), (0, c.f)() && (k.sampled = String((0, d.pK)(n)), k.sample_rand = u?.get("sentry.sample_rand") ?? (0, f.Lb)(n).scope?.getPropagationContext().sampleRand.toString()), m(k), e.emit("createDsc", k, n), k
      }
    },
    47842(t, e, n) {
      n.d(e, {
        h: () => a,
        w: () => o
      });
      var r = n(50733),
        s = n(52287);
      const i = Symbol.for("sentry.nonRecordingSpan");
      class o {
        constructor(t = {}) {
          this._traceId = t.traceId || (0, s.e)(), this._spanId = t.spanId || (0, s.Z)(), this.dropReason = t.dropReason, (0, r.my)(this, i, !0)
        }
        spanContext() {
          return {
            spanId: this._spanId,
            traceId: this._traceId,
            traceFlags: 0
          }
        }
        end(t) {}
        setAttribute(t, e) {
          return this
        }
        setAttributes(t) {
          return this
        }
        setStatus(t) {
          return this
        }
        updateName(t) {
          return this
        }
        isRecording() {
          return !1
        }
        addEvent(t, e, n) {
          return this
        }
        addLink(t) {
          return this
        }
        addLinks(t) {
          return this
        }
        recordException(t, e) {}
      }

      function a(t) {
        return !!t && !0 === t[i]
      }
    },
    67158(t, e, n) {
      n.d(e, {
        Lb: () => p,
        ZO: () => f,
        d_: () => d,
        jF: () => l,
        rh: () => h
      });
      var r = n(50733),
        s = n(85705);
      const i = "_sentryScope",
        o = "_sentryIsolationScope",
        a = Symbol.for("sentry.otelSourceInference"),
        c = Symbol.for("sentry.otelSourceExplicitlySet"),
        u = Symbol.for("sentry.tracerProviderSpan");

      function d(t, e, n) {
        t && ((0, r.my)(t, o, (0, s.Z)(n)), (0, r.my)(t, i, e))
      }

      function p(t) {
        const e = t;
        return {
          scope: e[i],
          isolationScope: (0, s.q)(e[o])
        }
      }

      function f(t) {
        return !0 === t[a]
      }

      function l(t) {
        (0, r.my)(t, c, !0)
      }

      function h(t) {
        return !0 === t[u]
      }
    },
    85054(t, e, n) {
      n.d(e, {
        De: () => c,
        yD: () => a
      });
      var r = n(52244),
        s = n(63668),
        i = n(24158);
      const o = "sentry-";

      function a(t) {
        const e = function(t) {
          if (t && ((0, i.Kg)(t) || Array.isArray(t))) return Array.isArray(t) ? t.reduce((t, e) => {
            const n = u(e);
            return Object.entries(n).forEach(([e, n]) => {
              t[e] = n
            }), t
          }, {}) : u(t)
        }(t);
        if (!e) return;
        const n = Object.entries(e).reduce((t, [e, n]) => (e.startsWith(o) && (t[e.slice(7)] = n), t), {});
        return Object.keys(n).length > 0 ? n : void 0
      }

      function c(t) {
        if (t) return function(t) {
          if (0 !== Object.keys(t).length) return Object.entries(t).reduce((t, [e, n], i) => {
            const o = `${encodeURIComponent(e)}=${encodeURIComponent(n)}`,
              a = 0 === i ? o : `${t},${o}`;
            return a.length > 8192 ? (r.T && s.Yz.warn(`Not adding key: ${e} with val: ${n} to baggage header due to exceeding baggage size limits.`), t) : a
          }, "")
        }(Object.entries(t).reduce((t, [e, n]) => (n && (t[`${o}${e}`] = n), t), {}))
      }

      function u(t) {
        return t.split(",").map(t => {
          const e = t.indexOf("=");
          return -1 === e ? [] : [t.slice(0, e), t.slice(e + 1)].map(t => {
            try {
              return decodeURIComponent(t.trim())
            } catch {
              return
            }
          })
        }).reduce((t, [e, n]) => (e && n && (t[e] = n), t), {})
      }
      n.d(e, ["sv", 0, o])
    },
    63668(t, e, n) {
      n.d(e, {
        pq: () => a
      });
      var r = n(71406),
        s = n(52244),
        i = n(91867);
      const o = {};

      function a(t) {
        if (!("console" in i.O)) return t();
        const e = i.O.console,
          n = {},
          r = Object.keys(o);
        r.forEach(t => {
          const r = o[t];
          n[t] = e[t], e[t] = r
        });
        try {
          return t()
        } finally {
          r.forEach(t => {
            e[t] = n[t]
          })
        }
      }

      function c() {
        return d().enabled
      }

      function u(t, ...e) {
        s.T && c() && a(() => {
          i.O.console[t](`Sentry Logger [${t}]:`, ...e)
        })
      }

      function d() {
        return s.T ? (0, r.BY)("loggerSettings", () => ({
          enabled: !1
        })) : {
          enabled: !1
        }
      }
      const p = {
        enable: function() {
          d().enabled = !0
        },
        disable: function() {
          d().enabled = !1
        },
        isEnabled: c,
        log: function(...t) {
          u("log", ...t)
        },
        warn: function(...t) {
          u("warn", ...t)
        },
        error: function(...t) {
          u("error", ...t)
        }
      };
      n.d(e, ["Ow", 0, ["debug", "info", "warn", "error", "log", "assert", "trace"], "Yz", 0, p, "Z9", 0, o])
    },
    48845(t, e, n) {
      n.d(e, {
        AD: () => p,
        SB: () => a,
        hH: () => c,
        ul: () => d
      });
      var r = n(52244),
        s = n(63668);
      const i = /^o(\d+)\./,
        o = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;

      function a(t, e = !1) {
        const {
          host: n,
          path: r,
          pass: s,
          port: i,
          projectId: o,
          protocol: a,
          publicKey: c
        } = t;
        return `${a}://${c}${e&&s?`:${s}`:""}@${n}${i?`:${i}`:""}/${r?`${r}/`:r}${o}`
      }

      function c(t) {
        const e = o.exec(t);
        if (!e) return void(0, s.pq)(() => {
          console.error(`Invalid Sentry Dsn: ${t}`)
        });
        const [n, r, i = "", a = "", c = "", d = ""] = e.slice(1);
        let p = "",
          f = d;
        const l = f.split("/");
        if (l.length > 1 && (p = l.slice(0, -1).join("/"), f = l.pop()), f) {
          const t = f.match(/^\d+/);
          t && (f = t[0])
        }
        return u({
          host: a,
          pass: i,
          path: p,
          projectId: f,
          port: c,
          protocol: n,
          publicKey: r
        })
      }

      function u(t) {
        return {
          protocol: t.protocol,
          publicKey: t.publicKey || "",
          pass: t.pass || "",
          host: t.host,
          port: t.port || "",
          path: t.path || "",
          projectId: t.projectId
        }
      }

      function d(t) {
        const e = t.getOptions(),
          {
            host: n
          } = t.getDsn() || {};
        let r;
        return e.orgId ? r = String(e.orgId) : n && (r = function(t) {
          const e = t.match(i);
          return e?.[1]
        }(n)), r
      }

      function p(t) {
        const e = "string" == typeof t ? c(t) : u(t);
        if (e && function(t) {
            if (!r.T) return !0;
            const {
              port: e,
              projectId: n,
              protocol: i
            } = t;
            return !(["protocol", "publicKey", "host", "projectId"].find(e => !t[e] && (s.Yz.error(`Invalid Sentry Dsn: ${e} missing`), !0)) || (n.match(/^\d+$/) ? function(t) {
              return "http" === t || "https" === t
            }(i) ? e && isNaN(parseInt(e, 10)) && (s.Yz.error(`Invalid Sentry Dsn: Invalid port ${e}`), 1) : (s.Yz.error(`Invalid Sentry Dsn: Invalid protocol ${i}`), 1) : (s.Yz.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), 1)))
          }(e)) return e
      }
    },
    51278(t, e, n) {
      n.d(e, {
        f: () => s
      });
      var r = n(49718);

      function s(t) {
        if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
        const e = t || (0, r.KU)()?.getOptions();
        return !(!e || null == e.tracesSampleRate && !e.tracesSampler)
      }
    },
    24158(t, e, n) {
      n.d(e, {
        BD: () => a,
        Kg: () => u,
        NF: () => d,
        Qd: () => f,
        Qg: () => g,
        T2: () => o,
        W6: () => c,
        Z4: () => l,
        bJ: () => s,
        gd: () => _,
        ks: () => y,
        sO: () => p,
        tH: () => m,
        xH: () => h
      });
      const r = Object.prototype.toString;

      function s(t) {
        switch (r.call(t)) {
          case "[object Error]":
          case "[object Exception]":
          case "[object DOMException]":
          case "[object WebAssembly.Exception]":
            return !0;
          default:
            return m(t, Error)
        }
      }

      function i(t, e) {
        return r.call(t) === `[object ${e}]`
      }

      function o(t) {
        return i(t, "ErrorEvent")
      }

      function a(t) {
        return i(t, "DOMError")
      }

      function c(t) {
        return i(t, "DOMException")
      }

      function u(t) {
        return i(t, "String")
      }

      function d(t) {
        return "object" == typeof t && null !== t && "__sentry_template_string__" in t && "__sentry_template_values__" in t
      }

      function p(t) {
        return null === t || d(t) || "object" != typeof t && "function" != typeof t
      }

      function f(t) {
        return i(t, "Object")
      }

      function l(t) {
        return "object" == typeof t && null !== t
      }

      function h(t) {
        return "undefined" != typeof Event && m(t, Event)
      }

      function _(t) {
        return i(t, "RegExp")
      }

      function g(t) {
        return Boolean(t?.then && "function" == typeof t.then)
      }

      function m(t, e) {
        try {
          return t instanceof e
        } catch {
          return !1
        }
      }

      function y(t) {
        return "undefined" != typeof Request && m(t, Request)
      }
    },
    12116(t, e, n) {
      function r(t, e, n = 2) {
        if (!e || "object" != typeof e || n <= 0) return e;
        if (t && 0 === Object.keys(e).length) return t;
        const s = {
          ...t
        };
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (s[t] = r(s[t], e[t], n - 1));
        return s
      }
      n.d(e, {
        h: () => r
      })
    },
    27874(t, e, n) {
      n.d(e, {
        $X: () => u,
        GR: () => f,
        M6: () => p,
        eJ: () => a,
        gO: () => d
      });
      var r = n(50733),
        s = n(71337),
        i = n(91867);
      let o;

      function a(t = function() {
        const t = i.O;
        return t.crypto || t.msCrypto
      }()) {
        try {
          if (t?.randomUUID) return (0, s.Qw)(() => t.randomUUID()).replace(/-/g, "")
        } catch {}
        return o || (o = "10000000100040008000100000000000"), o.replace(/[018]/g, t => (t ^ (16 * (0, s.hY)() & 15) >> t / 4).toString(16))
      }

      function c(t) {
        return t.exception?.values?.[0]
      }

      function u(t) {
        const {
          message: e,
          event_id: n
        } = t;
        if (e) return e;
        const r = c(t);
        return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
      }

      function d(t, e, n) {
        const r = t.exception = t.exception || {},
          s = r.values = r.values || [],
          i = s[0] = s[0] || {};
        i.value || (i.value = e || ""), i.type || (i.type = n || "Error")
      }

      function p(t, e) {
        const n = c(t);
        if (!n) return;
        const r = n.mechanism;
        if (n.mechanism = {
            type: "generic",
            handled: !0,
            ...r,
            ...e
          }, e && "data" in e) {
          const t = {
            ...r?.data,
            ...e.data
          };
          n.mechanism.data = t
        }
      }

      function f(t) {
        if (function(t) {
            try {
              return t.__sentry_captured__
            } catch {}
          }(t)) return !0;
        try {
          (0, r.my)(t, "__sentry_captured__", !0)
        } catch {}
        return !1
      }
    },
    83107(t, e, n) {
      n.d(e, {
        Ef: () => a,
        Gc: () => o,
        We: () => c
      });
      var r = n(50733);
      const s = Symbol.for("sentry.skipNormalization"),
        i = Symbol.for("sentry.overrideNormalizationDepth");

      function o(t) {
        (0, r.my)(t, s, !0)
      }

      function a(t) {
        return Boolean(t[s])
      }

      function c(t) {
        const e = t[i];
        return "number" == typeof e ? e : void 0
      }
    },
    32923(t, e, n) {
      n.d(e, {
        Ip: () => a,
        S8: () => c,
        cd: () => u,
        ng: () => p
      });
      var r = n(83107),
        s = n(50733),
        i = n(71507);
      let o;

      function a(t) {
        o = t
      }

      function c(t, e = 100, n = 1 / 0) {
        try {
          return d("", t, e, n)
        } catch (t) {
          return {
            ERROR: `**non-serializable** (${t})`
          }
        }
      }

      function u(t, e = 3, n = 102400) {
        const r = c(t, e);
        return s = r,
          function(t) {
            return ~-encodeURI(t).split(/%..|./).length
          }(JSON.stringify(s)) > n ? u(t, e - 1, n) : r;
        var s
      }

      function d(t, e, n = 1 / 0, i = 1 / 0, o = function() {
        const t = new WeakSet;
        return [function(e) {
          return !!t.has(e) || (t.add(e), !1)
        }, function(e) {
          t.delete(e)
        }]
      }()) {
        const [a, c] = o;
        if (null == e || ["boolean", "string"].includes(typeof e) || "number" == typeof e && Number.isFinite(e)) return e;
        const u = p(0, e);
        if (!u.startsWith("[object ")) return u;
        if ((0, r.Ef)(e)) return e;
        const f = (0, r.We)(e),
          l = void 0 !== f ? f : n;
        if (0 === l) return u.replace("object ", "");
        if (a(e)) return "[Circular ~]";
        const h = e;
        if (h && "function" == typeof h.toJSON) try {
          return d("", h.toJSON(), l - 1, i, o)
        } catch {}
        const _ = Array.isArray(e) ? [] : {};
        let g = 0;
        const m = (0, s.W4)(e);
        for (const t in m) {
          if (!Object.prototype.hasOwnProperty.call(m, t)) continue;
          if (g >= i) {
            _[t] = "[MaxProperties ~]";
            break
          }
          const e = m[t];
          _[t] = d(t, e, l - 1, i, o), g++
        }
        return c(e), _
      }

      function p(t, e) {
        try {
          if (o) {
            const t = o(e);
            if (t) return t
          }
          if (void 0 !== n.g && e === n.g) return "[Global]";
          if ("number" == typeof e && !Number.isFinite(e)) return `[${e}]`;
          if ("function" == typeof e) return `[Function: ${(0,i.qQ)(e)}]`;
          if ("symbol" == typeof e) return `[${String(e)}]`;
          if ("bigint" == typeof e) return `[BigInt: ${String(e)}]`;
          const t = function(t) {
            const e = Object.getPrototypeOf(t);
            return e?.constructor ? e.constructor.name : "null prototype"
          }(e);
          return `[object ${t}]`
        } catch (t) {
          return `**non-serializable** (${t})`
        }
      }
    },
    50733(t, e, n) {
      n.d(e, {
        GS: () => o,
        HF: () => f,
        W4: () => d,
        my: () => a,
        pO: () => c,
        sp: () => u
      });
      var r = n(52244),
        s = n(63668),
        i = n(24158);

      function o(t, e, n) {
        if (!(e in t)) return;
        const i = t[e];
        if ("function" != typeof i) return;
        const o = n(i);
        "function" == typeof o && c(o, i);
        try {
          t[e] = o
        } catch {
          r.T && s.Yz.log(`Failed to replace method "${e}" in object`, t)
        }
      }

      function a(t, e, n) {
        try {
          Object.defineProperty(t, e, {
            value: n,
            writable: !0,
            configurable: !0
          })
        } catch {
          r.T && s.Yz.log(`Failed to add non-enumerable property "${String(e)}" to object`, t)
        }
      }

      function c(t, e) {
        try {
          const n = e.prototype || {};
          t.prototype = e.prototype = n, a(t, "__sentry_original__", e)
        } catch {}
      }

      function u(t) {
        return t.__sentry_original__
      }

      function d(t) {
        if ((0, i.bJ)(t)) return {
          message: t.message,
          name: t.name,
          stack: t.stack,
          ...p(t)
        };
        if ((0, i.xH)(t)) {
          const {
            type: e,
            target: n,
            currentTarget: r,
            detail: s
          } = t;
          return {
            type: e,
            target: n,
            currentTarget: r,
            ...s ? {
              detail: s
            } : {},
            ...p(t)
          }
        }
        return t
      }

      function p(t) {
        return (0, i.Z4)(t) ? Object.fromEntries(Object.entries(t)) : {}
      }

      function f(t) {
        const e = Object.keys(d(t));
        return e.sort(), e[0] ? e.join(", ") : "[object has no keys]"
      }
    },
    45179(t, e, n) {
      function r(t) {
        if ("boolean" == typeof t) return Number(t);
        const e = "string" == typeof t ? parseFloat(t) : t;
        return "number" != typeof e || isNaN(e) || e < 0 || e > 1 ? void 0 : e
      }
      n.d(e, {
        i: () => r
      })
    },
    79340(t, e, n) {
      n.d(e, {
        li: () => x,
        mG: () => S
      });
      var r = n(33407),
        s = n(52244),
        i = n(63668),
        o = n(24158),
        a = n(61072);

      function c(t, e, n, r = 0) {
        try {
          const s = u(e, n, t, r);
          return (0, o.Qg)(s) ? s : (0, a.XW)(s)
        } catch (t) {
          return (0, a.xg)(t)
        }
      }

      function u(t, e, n, r) {
        const a = n[r];
        if (!t || !a) return t;
        const c = a({
          ...t
        }, e);
        return s.T && null === c && i.Yz.log(`Event processor "${a.id||"?"}" dropped event`), (0, o.Qg)(c) ? c.then(t => u(t, e, n, r + 1)) : u(c, e, n, r + 1)
      }
      var d = n(77038),
        p = n(91867);
      let f, l, h, _;
      var g = n(27874),
        m = n(32923),
        y = n(35256),
        b = n(37287),
        v = n(83883);

      function S(t, e, n, s, i, o) {
        const {
          normalizeDepth: u = 3,
          normalizeMaxBreadth: S = 1e3
        } = t, x = {
          ...e,
          event_id: e.event_id || n.event_id || (0, g.eJ)(),
          timestamp: e.timestamp || (0, v.lu)()
        }, k = n.integrations || t.integrations.map(t => t.name);
        ! function(t, e) {
          const {
            environment: n,
            release: s,
            dist: i,
            maxValueLength: o
          } = e;
          t.environment = t.environment || n || r.U, !t.release && s && (t.release = s), !t.dist && i && (t.dist = i);
          const a = t.request;
          a?.url && o && (a.url = (0, b.xv)(a.url, o)), o && t.exception?.values?.forEach(t => {
            t.value && (t.value = (0, b.xv)(t.value, o))
          })
        }(x, t),
        function(t, e) {
          e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [...t.sdk.integrations || [], ...e])
        }(x, k), i && i.emit("applyFrameMetadata", e), void 0 === e.type && function(t, e) {
          const n = function(t) {
            const e = p.O._sentryDebugIds,
              n = p.O._debugIds;
            if (!e && !n) return {};
            const r = e ? Object.keys(e) : [],
              s = n ? Object.keys(n) : [];
            if (_ && r.length === l && s.length === h) return _;
            l = r.length, h = s.length, _ = {}, f || (f = {});
            const i = (e, n) => {
              for (const r of e) {
                const e = n[r],
                  s = f?.[r];
                if (s && _ && e) _[s[0]] = e, f && (f[r] = [s[0], e]);
                else if (e) {
                  const n = t(r);
                  for (let t = n.length - 1; t >= 0; t--) {
                    const s = n[t],
                      i = s?.filename;
                    if (i && _ && f) {
                      _[i] = e, f[r] = [i, e];
                      break
                    }
                  }
                }
              }
            };
            return e && i(r, e), n && i(s, n), _
          }(e);
          t.exception?.values?.forEach(t => {
            t.stacktrace?.frames?.forEach(t => {
              t.filename && (t.debug_id = n[t.filename])
            })
          })
        }(x, t.stackParser);
        const I = function(t, e) {
          if (!e) return t;
          const n = t ? t.clone() : new d.H;
          return n.update(e), n
        }(s, n.captureContext);
        n.mechanism && (0, g.M6)(x, n.mechanism);
        const E = i ? i.getEventProcessors() : [],
          w = (0, y.Om)(o, I),
          O = [...n.attachments || [], ...w.attachments];
        O.length && (n.attachments = O), (0, y.e2)(x, w);
        const j = [...E, ...w.eventProcessors];
        return (n.data && !0 === n.data.__sentry__ ? (0, a.XW)(x) : c(j, x, n)).then(t => (t && function(t) {
          const e = {};
          if (t.exception?.values?.forEach(t => {
              t.stacktrace?.frames?.forEach(t => {
                t.debug_id && (t.abs_path ? e[t.abs_path] = t.debug_id : t.filename && (e[t.filename] = t.debug_id), delete t.debug_id)
              })
            }), 0 === Object.keys(e).length) return;
          t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
          const n = t.debug_meta.images;
          Object.entries(e).forEach(([t, e]) => {
            n.push({
              type: "sourcemap",
              code_file: t,
              debug_id: e
            })
          })
        }(t), "number" == typeof u && u > 0 ? function(t, e, n) {
          if (!t) return null;
          const r = {
            ...t,
            ...t.breadcrumbs && {
              breadcrumbs: t.breadcrumbs.map(t => ({
                ...t,
                ...t.data && {
                  data: (0, m.S8)(t.data, e, n)
                }
              }))
            },
            ...t.user && {
              user: (0, m.S8)(t.user, e, n)
            },
            ...t.contexts && {
              contexts: (0, m.S8)(t.contexts, e, n)
            },
            ...t.extra && {
              extra: (0, m.S8)(t.extra, e, n)
            }
          };
          return t.contexts?.trace && r.contexts && (r.contexts.trace = t.contexts.trace, t.contexts.trace.data && (r.contexts.trace.data = (0, m.S8)(t.contexts.trace.data, e, n))), t.spans && (r.spans = t.spans.map(t => ({
            ...t,
            ...t.data && {
              data: (0, m.S8)(t.data, e, n)
            }
          }))), t.contexts?.flags && r.contexts && (r.contexts.flags = (0, m.S8)(t.contexts.flags, 3, n)), r
        }(t, u, S) : t))
      }

      function x(t) {
        if (t) return function(t) {
          return t instanceof d.H || "function" == typeof t
        }(t) || function(t) {
          return Object.keys(t).some(t => k.includes(t))
        }(t) ? {
          captureContext: t
        } : t
      }
      const k = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"]
    },
    52287(t, e, n) {
      n.d(e, {
        Z: () => i,
        e: () => s
      });
      var r = n(27874);

      function s() {
        return (0, r.eJ)()
      }

      function i() {
        return (0, r.eJ)().substring(16)
      }
    },
    71337(t, e, n) {
      n.d(e, {
        Qw: () => i,
        Wk: () => a,
        hY: () => o
      });
      var r = n(91867);
      let s;

      function i(t) {
        if (void 0 !== s) return s ? s(t) : t();
        const e = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"),
          n = r.O;
        return e in n && "function" == typeof n[e] ? (s = n[e], s(t)) : (s = null, t())
      }

      function o() {
        return i(() => Math.random())
      }

      function a() {
        return i(() => Date.now())
      }
    },
    35256(t, e, n) {
      n.d(e, {
        Om: () => d,
        e2: () => a
      });
      var r = n(49718),
        s = n(12212),
        i = n(12116),
        o = n(79165);

      function a(t, e) {
        const {
          fingerprint: n,
          span: r,
          breadcrumbs: i,
          sdkProcessingMetadata: a
        } = e;
        ! function(t, e) {
          const {
            extra: n,
            tags: r,
            user: s,
            contexts: i,
            level: o,
            transactionName: a
          } = e;
          Object.keys(n).length && (t.extra = {
            ...n,
            ...t.extra
          }), Object.keys(r).length && (t.tags = {
            ...r,
            ...t.tags
          }), Object.keys(s).length && (t.user = {
            ...s,
            ...t.user
          }), Object.keys(i).length && (t.contexts = {
            ...i,
            ...t.contexts
          }), o && (t.level = o), a && "transaction" !== t.type && (t.transaction = a)
        }(t, e), r && function(t, e) {
            t.contexts = {
              trace: (0, o.kX)(e),
              ...t.contexts
            }, t.sdkProcessingMetadata = {
              dynamicSamplingContext: (0, s.k1)(e),
              ...t.sdkProcessingMetadata
            };
            const n = (0, o.zU)(e),
              r = (0, o.et)(n).description;
            r && !t.transaction && "transaction" === t.type && (t.transaction = r)
          }(t, r),
          function(t, e) {
            t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [], e && (t.fingerprint = t.fingerprint.concat(e)), t.fingerprint.length || delete t.fingerprint
          }(t, n),
          function(t, e) {
            const n = [...t.breadcrumbs || [], ...e];
            t.breadcrumbs = n.length ? n : void 0
          }(t, i),
          function(t, e) {
            t.sdkProcessingMetadata = {
              ...t.sdkProcessingMetadata,
              ...e
            }
          }(t, a)
      }

      function c(t, e) {
        const {
          extra: n,
          tags: r,
          attributes: s,
          user: o,
          contexts: a,
          level: c,
          sdkProcessingMetadata: d,
          breadcrumbs: p,
          fingerprint: f,
          eventProcessors: l,
          attachments: h,
          propagationContext: _,
          transactionName: g,
          span: m
        } = e;
        u(t, "extra", n), u(t, "tags", r), u(t, "attributes", s), u(t, "user", o), u(t, "contexts", a), t.sdkProcessingMetadata = (0, i.h)(t.sdkProcessingMetadata, d, 2), c && (t.level = c), g && (t.transactionName = g), m && (t.span = m), p.length && (t.breadcrumbs = [...t.breadcrumbs, ...p]), f.length && (t.fingerprint = [...t.fingerprint, ...f]), l.length && (t.eventProcessors = [...t.eventProcessors, ...l]), h.length && (t.attachments = [...t.attachments, ...h]), t.propagationContext = {
          ...t.propagationContext,
          ..._
        }
      }

      function u(t, e, n) {
        t[e] = (0, i.h)(t[e], n, 1)
      }

      function d(t, e) {
        const n = (0, r.m6)().getScopeData();
        return t && c(n, t.getScopeData()), e && c(n, e.getScopeData()), n
      }
    },
    10287(t, e, n) {
      n.d(e, {
        f: () => a,
        r: () => o
      });
      var r = n(50733),
        s = n(85705);
      const i = "_sentrySpan";

      function o(t, e) {
        e ? (0, r.my)(t, i, (0, s.Z)(e)) : delete t[i]
      }

      function a(t) {
        return (0, s.q)(t[i])
      }
    },
    79165(t, e, n) {
      n.d(e, {
        Bk: () => z,
        Ck: () => g,
        G_: () => b,
        HQ: () => S,
        Hu: () => M,
        PL: () => O,
        Qh: () => y,
        RD: () => E,
        VS: () => R,
        cI: () => x,
        dZ: () => $,
        et: () => I,
        fy: () => D,
        kX: () => m,
        pK: () => A,
        uU: () => v,
        xO: () => L,
        xl: () => J,
        yW: () => T
      });
      var r = n(66279),
        s = n(70805),
        i = n(71406),
        o = n(49718),
        a = n(91781),
        c = n(67158),
        u = n(50733),
        d = n(52287),
        p = n(83883),
        f = n(45642),
        l = n(63668),
        h = n(10287);
      let _ = !1;

      function g(t) {
        const {
          spanId: e,
          traceId: n
        } = t.spanContext(), {
          data: r,
          op: s,
          parent_span_id: i,
          status: o,
          origin: a,
          links: c
        } = I(t);
        return {
          parent_span_id: i,
          span_id: e,
          trace_id: n,
          data: r,
          op: s,
          status: o,
          origin: a,
          links: c
        }
      }

      function m(t) {
        const {
          spanId: e,
          traceId: n,
          isRemote: r
        } = t.spanContext(), s = r ? e : I(t).parent_span_id, i = (0, c.Lb)(t).scope;
        return {
          parent_span_id: s,
          span_id: r ? i?.getPropagationContext().propagationSpanId || (0, d.Z)() : e,
          trace_id: n
        }
      }

      function y(t) {
        const {
          traceId: e,
          spanId: n
        } = t.spanContext(), r = A(t);
        return (0, f.TC)(e, n, r)
      }

      function b(t) {
        const {
          traceId: e,
          spanId: n
        } = t.spanContext(), r = A(t);
        return (0, f.Iy)(e, n, r)
      }

      function v(t) {
        return t && t.length > 0 ? t.map(({
          context: {
            spanId: t,
            traceId: e,
            traceFlags: n,
            ...r
          },
          attributes: s
        }) => ({
          span_id: t,
          trace_id: e,
          sampled: 1 === n,
          attributes: s,
          ...r
        })) : void 0
      }

      function S(t) {
        return t?.length ? t.map(({
          context: {
            spanId: t,
            traceId: e,
            traceFlags: n
          },
          attributes: r
        }) => ({
          span_id: t,
          trace_id: e,
          sampled: 1 === n,
          attributes: r
        })) : void 0
      }

      function x(t) {
        return "number" == typeof t ? k(t) : Array.isArray(t) ? t[0] + t[1] / 1e9 : t instanceof Date ? k(t.getTime()) : (0, p.zf)()
      }

      function k(t) {
        return t > 9999999999 ? t / 1e3 : t
      }

      function I(t) {
        if (C(t)) return t.getSpanJSON();
        const {
          spanId: e,
          traceId: n
        } = t.spanContext();
        if (j(t)) {
          const {
            attributes: r,
            startTime: s,
            name: i,
            endTime: o,
            status: c,
            links: u
          } = t;
          return {
            span_id: e,
            trace_id: n,
            data: r,
            description: i,
            parent_span_id: w(t),
            start_timestamp: x(s),
            timestamp: x(o) || void 0,
            status: T(c),
            op: r[a.uT],
            origin: r[a.JD],
            links: v(u)
          }
        }
        return {
          span_id: e,
          trace_id: n,
          start_timestamp: 0,
          data: {}
        }
      }

      function E(t) {
        if (C(t)) return t.getStreamedSpanJSON();
        const {
          spanId: e,
          traceId: n
        } = t.spanContext();
        if (j(t)) {
          const {
            attributes: r,
            startTime: s,
            name: i,
            endTime: o,
            status: a,
            links: c
          } = t;
          return {
            name: i,
            span_id: e,
            trace_id: n,
            parent_span_id: w(t),
            start_timestamp: x(s),
            end_timestamp: x(o),
            is_segment: t === U(t),
            status: $(a),
            attributes: D(r, a),
            links: S(c)
          }
        }
        return {
          span_id: e,
          trace_id: n,
          start_timestamp: 0,
          name: "",
          end_timestamp: 0,
          status: "ok",
          is_segment: t === U(t)
        }
      }

      function w(t) {
        return "parentSpanId" in t ? t.parentSpanId : "parentSpanContext" in t ? t.parentSpanContext?.spanId : void 0
      }

      function O(t) {
        return {
          ...t,
          attributes: (0, s.SY)(t.attributes),
          links: t.links?.map(t => ({
            ...t,
            attributes: (0, s.SY)(t.attributes)
          }))
        }
      }

      function j(t) {
        const e = t;
        return !!(e.attributes && e.startTime && e.name && e.endTime && e.status)
      }

      function C(t) {
        return "function" == typeof t.getSpanJSON
      }

      function A(t) {
        const {
          traceFlags: e
        } = t.spanContext();
        return 1 === e
      }

      function T(t) {
        if (t && 0 !== t.code) return 1 === t.code ? "ok" : t.message || "internal_error"
      }

      function $(t) {
        return t && 1 !== t.code && 0 !== t.code && "cancelled" !== t.message ? "error" : "ok"
      }

      function D(t, e) {
        const n = "error" === $(e) ? e?.message : void 0;
        return {
          ...n && {
            [a.Ft]: n
          },
          ...t
        }
      }
      const N = "_sentryChildSpans",
        P = "_sentryRootSpan";

      function M(t, e) {
        const n = t[P] || t;
        (0, u.my)(e, P, n), t[N] ? t[N].add(e) : (0, u.my)(t, N, new Set([e]))
      }

      function R(t, e) {
        t[N] && t[N].delete(e)
      }

      function L(t) {
        const e = new Set;
        return function t(n) {
          if (!e.has(n) && A(n)) {
            e.add(n);
            const r = n[N] ? Array.from(n[N]) : [];
            for (const e of r) t(e)
          }
        }(t), Array.from(e)
      }
      const Y = U;

      function U(t) {
        return t[P] || t
      }

      function z() {
        const t = (0, i.EU)(),
          e = (0, r.h)(t);
        return e.getActiveSpan ? e.getActiveSpan() : (0, h.f)((0, o.o5)())
      }

      function J() {
        _ || ((0, l.pq)(() => {
          console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.")
        }), _ = !0)
      }
      n.d(e, ["zU", 0, Y])
    },
    71507(t, e, n) {
      n.d(e, {
        RV: () => d,
        gd: () => i,
        qQ: () => u,
        vk: () => o
      });
      const r = /\(error: (.*)\)/,
        s = /captureMessage|captureException/;

      function i(...t) {
        const e = t.sort((t, e) => t[0] - e[0]).map(t => t[1]);
        return (t, n = 0, i = 0) => {
          const o = [],
            c = t.split("\n");
          for (let t = n; t < c.length; t++) {
            let n = c[t];
            n.length > 1024 && (n = n.slice(0, 1024));
            const s = r.test(n) ? n.replace(r, "$1") : n;
            if (!s.includes("Error: ")) {
              for (const t of e) {
                const e = t(s);
                if (e) {
                  o.push(e);
                  break
                }
              }
              if (o.length >= 50 + i) break
            }
          }
          return function(t) {
            if (!t.length) return [];
            const e = Array.from(t);
            return /sentryWrapped/.test(a(e).function || "") && e.pop(), e.reverse(), s.test(a(e).function || "") && (e.pop(), s.test(a(e).function || "") && e.pop()), e.slice(0, 50).map(t => ({
              ...t,
              filename: t.filename || a(e).filename,
              function: t.function || "?"
            }))
          }(o.slice(i))
        }
      }

      function o(t) {
        return Array.isArray(t) ? i(...t) : t
      }

      function a(t) {
        return t[t.length - 1] || {}
      }
      const c = "<anonymous>";

      function u(t) {
        try {
          return t && "function" == typeof t && t.name || c
        } catch {
          return c
        }
      }

      function d(t) {
        const e = t.exception;
        if (e) {
          const t = [];
          try {
            return e.values.forEach(e => {
              e.stacktrace.frames && t.push(...e.stacktrace.frames)
            }), t
          } catch {
            return
          }
        }
      }
    },
    37287(t, e, n) {
      n.d(e, {
        Xr: () => c,
        _c: () => a,
        gt: () => o,
        xv: () => i
      });
      var r = n(24158),
        s = n(32923);

      function i(t, e = 0) {
        return "string" != typeof t || 0 === e || t.length <= e ? t : `${t.slice(0,e)}...`
      }

      function o(t, e) {
        if (!Array.isArray(t)) return "";
        const n = [];
        for (let e = 0; e < t.length; e++) {
          const i = t[e];
          (0, r.sO)(i) ? n.push(String(i)): i instanceof Error ? n.push(i.message ? `${i.name}: ${i.message}` : i.name) : n.push((0, s.ng)(void 0, i))
        }
        return n.join(e)
      }

      function a(t, e, n = !1) {
        return !!(0, r.Kg)(t) && ((0, r.gd)(e) ? e.test(t) : (0, r.Kg)(e) ? n ? t === e : t.includes(e) : "function" == typeof e && e(t))
      }

      function c(t, e = [], n = !1) {
        for (const r of e)
          if (a(t, r, n)) return !0;
        return !1
      }
    },
    61072(t, e, n) {
      n.d(e, {
        XW: () => s,
        xg: () => i
      });
      var r = n(24158);

      function s(t) {
        return new o(e => {
          e(t)
        })
      }

      function i(t) {
        return new o((e, n) => {
          n(t)
        })
      }
      class o {
        constructor(t) {
          this._state = 0, this._handlers = [], this._runExecutor(t)
        }
        then(t, e) {
          return new o((n, r) => {
            this._handlers.push([!1, e => {
              if (t) try {
                n(t(e))
              } catch (t) {
                r(t)
              } else n(e)
            }, t => {
              if (e) try {
                n(e(t))
              } catch (t) {
                r(t)
              } else r(t)
            }]), this._executeHandlers()
          })
        } catch (t) {
          return this.then(t => t, t)
        } finally(t) {
          return new o((e, n) => {
            let r, s;
            return this.then(e => {
              s = !1, r = e, t && t()
            }, e => {
              s = !0, r = e, t && t()
            }).then(() => {
              s ? n(r) : e(r)
            })
          })
        }
        _executeHandlers() {
          if (0 === this._state) return;
          const t = this._handlers.slice();
          this._handlers = [], t.forEach(t => {
            t[0] || (1 === this._state && t[1](this._value), 2 === this._state && t[2](this._value), t[0] = !0)
          })
        }
        _runExecutor(t) {
          const e = (t, e) => {
              0 === this._state && ((0, r.Qg)(e) ? e.then(n, s) : (this._state = t, this._value = e, this._executeHandlers()))
            },
            n = t => {
              e(1, t)
            },
            s = t => {
              e(2, t)
            };
          try {
            t(n, s)
          } catch (t) {
            s(t)
          }
        }
      }
    },
    83883(t, e, n) {
      n.d(e, {
        k3: () => u,
        lu: () => i,
        zf: () => a
      });
      var r = n(71337),
        s = n(91867);

      function i() {
        return (0, r.Wk)() / 1e3
      }
      let o;

      function a() {
        return (o ?? (o = function() {
          const {
            performance: t
          } = s.O;
          if (!t?.now || !t.timeOrigin) return i;
          const e = t.timeOrigin;
          return () => (e + (0, r.Qw)(() => t.now())) / 1e3
        }()))()
      }
      let c = null;

      function u() {
        return null === c && (c = function() {
          const {
            performance: t
          } = s.O;
          if (!t?.now) return;
          const e = 3e5,
            n = (0, r.Qw)(() => t.now()),
            i = (0, r.Wk)(),
            o = t.timeOrigin;
          if ("number" == typeof o && Math.abs(o + n - i) < e) return o;
          const a = t.timing?.navigationStart;
          return "number" == typeof a && Math.abs(a + n - i) < e ? a : i - n
        }()), c
      }
    },
    45642(t, e, n) {
      n.d(e, {
        Iy: () => d,
        TC: () => u,
        kM: () => c
      });
      var r = n(85054),
        s = n(45179),
        i = n(52287),
        o = n(71337);
      const a = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

      function c(t, e) {
        const n = function(t) {
            if (!t) return;
            const e = t.match(a);
            if (!e) return;
            let n;
            return "1" === e[3] ? n = !0 : "0" === e[3] && (n = !1), {
              traceId: e[1],
              parentSampled: n,
              parentSpanId: e[2]
            }
          }(t),
          c = (0, r.yD)(e);
        if (!n?.traceId) return {
          traceId: (0, i.e)(),
          sampleRand: (0, o.hY)()
        };
        const u = function(t, e) {
          const n = (0, s.i)(e?.sample_rand);
          if (void 0 !== n) return n;
          const r = (0, s.i)(e?.sample_rate);
          return r && void 0 !== t?.parentSampled ? t.parentSampled ? (0, o.hY)() * r : r + (0, o.hY)() * (1 - r) : (0, o.hY)()
        }(n, c);
        c && (c.sample_rand = u.toString());
        const {
          traceId: d,
          parentSpanId: p,
          parentSampled: f
        } = n;
        return {
          traceId: d,
          parentSpanId: p,
          sampled: f,
          dsc: c || {},
          sampleRand: u
        }
      }

      function u(t = (0, i.e)(), e = (0, i.Z)(), n) {
        let r = "";
        return void 0 !== n && (r = n ? "-1" : "-0"), `${t}-${e}${r}`
      }

      function d(t = (0, i.e)(), e = (0, i.Z)(), n) {
        return `00-${t}-${e}-${n?"01":"00"}`
      }
      n.d(e, ["MI", 0, a])
    },
    18404(t, e, n) {
      n.d(e, ["M", 0, "10.70.0"])
    },
    85705(t, e, n) {
      n.d(e, {
        Z: () => s,
        q: () => i
      });
      var r = n(91867);

      function s(t) {
        try {
          const e = r.O.WeakRef;
          if ("function" == typeof e) return new e(t)
        } catch {}
        return t
      }

      function i(t) {
        if (t) {
          if ("object" == typeof t && "deref" in t && "function" == typeof t.deref) try {
            return t.deref()
          } catch {
            return
          }
          return t
        }
      }
    },
    91867(t, e, n) {
      const r = globalThis;
      n.d(e, ["O", 0, r])
    }
  }
]);