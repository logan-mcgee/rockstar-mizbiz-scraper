try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "9ab2e506-71d4-4a24-9d9e-9df5ff5b628a", t._sentryDebugIdIdentifier = "sentry-dbid-9ab2e506-71d4-4a24-9d9e-9df5ff5b628a")
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
  [2490], {
    48950(t, e, n) {
      "use strict";
      n.d(e, {
        T: () => r
      });
      const r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
    },
    83973(t, e, n) {
      "use strict";
      n.d(e, {
        LV: () => l,
        jN: () => u,
        jf: () => a
      });
      var r = n(43031),
        s = n(9929),
        i = n(86788),
        o = n(22423);
      const a = s.OW;
      let c = 0;

      function u() {
        return c > 0
      }

      function l(t, e = {}, n) {
        if ("function" != typeof t) return t;
        try {
          const e = t.__sentry_wrapped__;
          if (e) return "function" == typeof e ? e : t;
          if ((0, o.sp)(t)) return t
        } catch (e) {
          return t
        }
        const s = function() {
          const s = Array.prototype.slice.call(arguments);
          try {
            n && "function" == typeof n && n.apply(this, arguments);
            const r = s.map(t => l(t, e));
            return t.apply(this, r)
          } catch (t) {
            throw c++, setTimeout(() => {
              c--
            }), (0, r.v4)(n => {
              n.addEventProcessor(t => (e.mechanism && ((0, i.gO)(t, void 0, void 0), (0, i.M6)(t, e.mechanism)), t.extra = {
                ...t.extra,
                arguments: s
              }, t)), (0, r.Cp)(t)
            }), t
          }
        };
        try {
          for (const e in t) Object.prototype.hasOwnProperty.call(t, e) && (s[e] = t[e])
        } catch (t) {}(0, o.pO)(s, t), (0, o.my)(t, "__sentry_wrapped__", s);
        try {
          Object.getOwnPropertyDescriptor(s, "name").configurable && Object.defineProperty(s, "name", {
            get: () => t.name
          })
        } catch (t) {}
        return s
      }
    },
    49345(t, e, n) {
      "use strict";
      n.d(e, {
        Ts: () => Wt
      });
      var r = n(61952),
        s = n(86788),
        i = n(68289),
        o = n(21926),
        a = n(22742);
      const c = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/],
        u = [/^.*\/healthcheck$/, /^.*\/healthy$/, /^.*\/live$/, /^.*\/ready$/, /^.*\/heartbeat$/, /^.*\/health$/, /^.*\/healthz$/],
        l = "InboundFilters",
        d = (0, a._C)((t = {}) => ({
          name: l,
          setupOnce() {},
          processEvent(e, n, a) {
            const l = a.getOptions(),
              d = function(t = {}, e = {}) {
                return {
                  allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
                  denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
                  ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...t.disableErrorDefaults ? [] : c],
                  ignoreTransactions: [...t.ignoreTransactions || [], ...e.ignoreTransactions || [], ...t.disableTransactionDefaults ? [] : u],
                  ignoreInternal: void 0 === t.ignoreInternal || t.ignoreInternal
                }
              }(t, l);
            return function(t, e) {
              return e.ignoreInternal && function(t) {
                try {
                  return "SentryError" === t.exception.values[0].type
                } catch (t) {}
                return !1
              }(t) ? (o.T && r.vF.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${(0,s.$X)(t)}`), !0) : function(t, e) {
                return !(t.type || !e || !e.length) && function(t) {
                  const e = [];
                  let n;
                  t.message && e.push(t.message);
                  try {
                    n = t.exception.values[t.exception.values.length - 1]
                  } catch (t) {}
                  return n && n.value && (e.push(n.value), n.type && e.push(`${n.type}: ${n.value}`)), o.T && 0 === e.length && r.vF.error(`Could not extract message for event ${(0,s.$X)(t)}`), e
                }(t).some(t => (0, i.Xr)(t, e))
              }(t, e.ignoreErrors) ? (o.T && r.vF.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${(0,s.$X)(t)}`), !0) : function(t, e) {
                if ("transaction" !== t.type || !e || !e.length) return !1;
                const n = t.transaction;
                return !!n && (0, i.Xr)(n, e)
              }(t, e.ignoreTransactions) ? (o.T && r.vF.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${(0,s.$X)(t)}`), !0) : function(t, e) {
                if (!e || !e.length) return !1;
                const n = p(t);
                return !!n && (0, i.Xr)(n, e)
              }(t, e.denyUrls) ? (o.T && r.vF.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${(0,s.$X)(t)}.\nUrl: ${p(t)}`), !0) : ! function(t, e) {
                if (!e || !e.length) return !0;
                const n = p(t);
                return !n || (0, i.Xr)(n, e)
              }(t, e.allowUrls) && (o.T && r.vF.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${(0,s.$X)(t)}.\nUrl: ${p(t)}`), !0)
            }(e, d) ? null : e
          }
        }));

      function p(t) {
        try {
          let e;
          try {
            e = t.exception.values[0].stacktrace.frames
          } catch (t) {}
          return e ? function(t = []) {
            for (let e = t.length - 1; e >= 0; e--) {
              const n = t[e];
              if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
            }
            return null
          }(e) : null
        } catch (e) {
          return o.T && r.vF.error(`Cannot extract url for event ${(0,s.$X)(t)}`), null
        }
      }(0, a.F)(l, d);
      var h = n(22423),
        m = n(43031);
      let f;
      const g = "FunctionToString",
        y = new WeakMap,
        _ = (0, a._C)(() => ({
          name: g,
          setupOnce() {
            f = Function.prototype.toString;
            try {
              Function.prototype.toString = function(...t) {
                const e = (0, h.sp)(this),
                  n = y.has((0, m.KU)()) && void 0 !== e ? e : this;
                return f.apply(n, t)
              }
            } catch (t) {}
          },
          setup(t) {
            y.set(t, !0)
          }
        }));
      (0, a.F)(g, _);
      var v = n(54667);
      var S = n(40841),
        b = n(78180),
        k = n(27084),
        T = n(3856),
        w = n(91604),
        E = n(43929),
        x = n(50332),
        I = n(98765);

      function C(t, e, n) {
        const r = [{
          type: "client_report"
        }, {
          timestamp: n || (0, I.lu)(),
          discarded_events: t
        }];
        return (0, x.h4)(e ? {
          dsn: e
        } : {}, [r])
      }
      var R = n(85771),
        M = n(48950),
        O = n(16732),
        D = n(50193),
        A = n(37518);

      function N(t, e) {
        const n = L(t, e),
          r = {
            type: e && e.name,
            value: P(e)
          };
        return n.length && (r.stacktrace = {
          frames: n
        }), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), r
      }

      function F(t, e) {
        return {
          exception: {
            values: [N(t, e)]
          }
        }
      }

      function L(t, e) {
        const n = e.stacktrace || e.stack || "",
          r = function(t) {
            if (t) {
              if ("number" == typeof t.framesToPop) return t.framesToPop;
              if (j.test(t.message)) return 1
            }
            return 0
          }(e);
        try {
          return t(n, r)
        } catch (t) {}
        return []
      }
      const j = /Minified React error #\d+;/i;

      function P(t) {
        const e = t && t.message;
        return e ? e.error && "string" == typeof e.error.message ? e.error.message : e : "No error message"
      }

      function $(t, e, n, r, i) {
        let o;
        if ((0, O.T2)(e) && e.error) return F(t, e.error);
        if ((0, O.BD)(e) || (0, O.W6)(e)) {
          const i = e;
          if ("stack" in e) o = F(t, e);
          else {
            const e = i.name || ((0, O.BD)(i) ? "DOMError" : "DOMException"),
              a = i.message ? `${e}: ${i.message}` : e;
            o = U(t, a, n, r), (0, s.gO)(o, a)
          }
          return "code" in i && (o.tags = {
            ...o.tags,
            "DOMException.code": `${i.code}`
          }), o
        }
        return (0, O.bJ)(e) ? F(t, e) : (0, O.Qd)(e) || (0, O.xH)(e) ? (o = function(t, e, n, r) {
          const s = (0, m.KU)(),
            i = s && s.getOptions().normalizeDepth,
            o = {
              exception: {
                values: [{
                  type: (0, O.xH)(e) ? e.constructor.name : r ? "UnhandledRejection" : "Error",
                  value: B(e, {
                    isUnhandledRejection: r
                  })
                }]
              },
              extra: {
                __serialized__: (0, D.cd)(e, i)
              }
            };
          if (n) {
            const e = L(t, n);
            e.length && (o.exception.values[0].stacktrace = {
              frames: e
            })
          }
          return o
        }(t, e, n, i), (0, s.M6)(o, {
          synthetic: !0
        }), o) : (o = U(t, e, n, r), (0, s.gO)(o, `${e}`, void 0), (0, s.M6)(o, {
          synthetic: !0
        }), o)
      }

      function U(t, e, n, r) {
        const s = {};
        if (r && n) {
          const r = L(t, n);
          r.length && (s.exception = {
            values: [{
              value: e,
              stacktrace: {
                frames: r
              }
            }]
          })
        }
        if ((0, O.NF)(e)) {
          const {
            __sentry_template_string__: t,
            __sentry_template_values__: n
          } = e;
          return s.logentry = {
            message: t,
            params: n
          }, s
        }
        return s.message = e, s
      }

      function B(t, {
        isUnhandledRejection: e
      }) {
        const n = (0, h.HF)(t),
          r = e ? "promise rejection" : "exception";
        return (0, O.T2)(t) ? `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\`` : (0, O.xH)(t) ? `Event \`${function(t){try{const e=Object.getPrototypeOf(t);return e?e.constructor.name:void 0}catch(t){}}(t)}\` (type=${t.type}) captured as ${r}` : `Object captured as ${r} with keys: ${n}`
      }
      var H = n(83973);

      function z(t, {
        metadata: e,
        tunnel: n,
        dsn: r
      }) {
        const s = {
            event_id: t.event_id,
            sent_at: (new Date).toISOString(),
            ...e && e.sdk && {
              sdk: {
                name: e.sdk.name,
                version: e.sdk.version
              }
            },
            ...!!n && !!r && {
              dsn: (0, R.SB)(r)
            }
          },
          i = function(t) {
            return [{
              type: "user_report"
            }, t]
          }(t);
        return (0, x.h4)(s, [i])
      }
      class W extends T.V {
        constructor(t) {
          ! function(t, e, n = [e], r = "npm") {
            const s = t._metadata || {};
            s.sdk || (s.sdk = {
              name: `sentry.javascript.${e}`,
              packages: n.map(t => ({
                name: `${r}:@sentry/${t}`,
                version: w.M
              })),
              version: w.M
            }), t._metadata = s
          }(t, "browser", ["browser"], H.jf.SENTRY_SDK_SOURCE || (0, E.e)()), super(t), t.sendClientReports && H.jf.document && H.jf.document.addEventListener("visibilitychange", () => {
            "hidden" === H.jf.document.visibilityState && this._flushOutcomes()
          })
        }
        eventFromException(t, e) {
          return function(t, e, n, r) {
            const i = $(t, e, n && n.syntheticException || void 0, r);
            return (0, s.M6)(i), i.level = "error", n && n.event_id && (i.event_id = n.event_id), (0, A.XW)(i)
          }(this._options.stackParser, t, e, this._options.attachStacktrace)
        }
        eventFromMessage(t, e = "info", n) {
          return function(t, e, n = "info", r, s) {
            const i = U(t, e, r && r.syntheticException || void 0, s);
            return i.level = n, r && r.event_id && (i.event_id = r.event_id), (0, A.XW)(i)
          }(this._options.stackParser, t, e, n, this._options.attachStacktrace)
        }
        captureUserFeedback(t) {
          if (!this._isEnabled()) return void(M.T && r.vF.warn("SDK not enabled, will not capture user feedback."));
          const e = z(t, {
            metadata: this.getSdkMetadata(),
            dsn: this.getDsn(),
            tunnel: this.getOptions().tunnel
          });
          this._sendEnvelope(e)
        }
        _prepareEvent(t, e, n) {
          return t.platform = t.platform || "javascript", super._prepareEvent(t, e, n)
        }
        _flushOutcomes() {
          const t = this._clearOutcomes();
          if (0 === t.length) return void(M.T && r.vF.log("No outcomes to send"));
          if (!this._dsn) return void(M.T && r.vF.log("No dsn provided, will not send outcomes"));
          M.T && r.vF.log("Sending outcomes:", t);
          const e = C(t, this._options.tunnel && (0, R.SB)(this._dsn));
          this._sendEnvelope(e)
        }
      }
      var q = n(9929),
        J = n(6122);

      function K() {
        "console" in q.OW && r.Ow.forEach(function(t) {
          t in q.OW.console && (0, h.GS)(q.OW.console, t, function(e) {
            return r.Z9[t] = e,
              function(...e) {
                const n = {
                  args: e,
                  level: t
                };
                (0, J.aj)("console", n);
                const s = r.Z9[t];
                s && s.apply(q.OW.console, e)
              }
          })
        })
      }
      var G = n(7250),
        Y = n(68392),
        X = n(80094),
        V = n(59834);
      const Q = ["fatal", "error", "warning", "log", "info", "debug"];
      var Z = n(58011);
      const tt = "Breadcrumbs",
        et = (0, a._C)((t = {}) => {
          const e = {
            console: !0,
            dom: !0,
            fetch: !0,
            history: !0,
            sentry: !0,
            xhr: !0,
            ...t
          };
          return {
            name: tt,
            setupOnce() {},
            setup(t) {
              e.console && function(t) {
                const e = "console";
                (0, J.s5)(e, t), (0, J.AS)(e, K)
              }(function(t) {
                return function(e) {
                  if ((0, m.KU)() !== t) return;
                  const n = {
                    category: "console",
                    data: {
                      arguments: e.args,
                      logger: "console"
                    },
                    level: (r = e.level, "warn" === r ? "warning" : Q.includes(r) ? r : "log"),
                    message: (0, i.gt)(e.args, " ")
                  };
                  var r;
                  if ("assert" === e.level) {
                    if (!1 !== e.args[0]) return;
                    n.message = `Assertion failed: ${(0,i.gt)(e.args.slice(1)," ")||"console.assert"}`, n.data.arguments = e.args.slice(1)
                  }(0, m.ZQ)(n, {
                    input: e.args,
                    level: e.level
                  })
                }
              }(t)), e.dom && (0, G.i)(function(t, e) {
                return function(n) {
                  if ((0, m.KU)() !== t) return;
                  let s, i, o = "object" == typeof e ? e.serializeAttribute : void 0,
                    a = "object" == typeof e && "number" == typeof e.maxStringLength ? e.maxStringLength : void 0;
                  a && a > 1024 && (M.T && r.vF.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${a} was configured. Sentry will use 1024 instead.`), a = 1024), "string" == typeof o && (o = [o]);
                  try {
                    const t = n.event,
                      e = function(t) {
                        return !!t && !!t.target
                      }(t) ? t.target : t;
                    s = (0, V.Hd)(e, {
                      keyAttrs: o,
                      maxStringLength: a
                    }), i = (0, V.xE)(e)
                  } catch (t) {
                    s = "<unknown>"
                  }
                  if (0 === s.length) return;
                  const c = {
                    category: `ui.${n.name}`,
                    message: s
                  };
                  i && (c.data = {
                    "ui.component_name": i
                  }), (0, m.ZQ)(c, {
                    event: n.event,
                    name: n.name,
                    global: n.global
                  })
                }
              }(t, e.dom)), e.xhr && (0, Y.Mn)(function(t) {
                return function(e) {
                  if ((0, m.KU)() !== t) return;
                  const {
                    startTimestamp: n,
                    endTimestamp: r
                  } = e, s = e.xhr[Y.Er];
                  if (!n || !r || !s) return;
                  const {
                    method: i,
                    url: o,
                    status_code: a,
                    body: c
                  } = s, u = {
                    method: i,
                    url: o,
                    status_code: a
                  }, l = {
                    xhr: e.xhr,
                    input: c,
                    startTimestamp: n,
                    endTimestamp: r
                  };
                  (0, m.ZQ)({
                    category: "xhr",
                    data: u,
                    type: "http"
                  }, l)
                }
              }(t)), e.fetch && (0, X.u)(function(t) {
                return function(e) {
                  if ((0, m.KU)() !== t) return;
                  const {
                    startTimestamp: n,
                    endTimestamp: r
                  } = e;
                  if (r && (!e.fetchData.url.match(/sentry_key/) || "POST" !== e.fetchData.method))
                    if (e.error) {
                      const t = e.fetchData,
                        s = {
                          data: e.error,
                          input: e.args,
                          startTimestamp: n,
                          endTimestamp: r
                        };
                      (0, m.ZQ)({
                        category: "fetch",
                        data: t,
                        level: "error",
                        type: "http"
                      }, s)
                    } else {
                      const t = e.response,
                        s = {
                          ...e.fetchData,
                          status_code: t && t.status
                        },
                        i = {
                          input: e.args,
                          response: t,
                          startTimestamp: n,
                          endTimestamp: r
                        };
                      (0, m.ZQ)({
                        category: "fetch",
                        data: s,
                        type: "http"
                      }, i)
                    }
                }
              }(t)), e.history && (0, k._)(function(t) {
                return function(e) {
                  if ((0, m.KU)() !== t) return;
                  let n = e.from,
                    r = e.to;
                  const s = (0, Z.Dl)(H.jf.location.href);
                  let i = n ? (0, Z.Dl)(n) : void 0;
                  const o = (0, Z.Dl)(r);
                  i && i.path || (i = s), s.protocol === o.protocol && s.host === o.host && (r = o.relative), s.protocol === i.protocol && s.host === i.host && (n = i.relative), (0, m.ZQ)({
                    category: "navigation",
                    data: {
                      from: n,
                      to: r
                    }
                  })
                }
              }(t)), e.sentry && t.on && t.on("beforeSendEvent", function(t) {
                return function(e) {
                  (0, m.KU)() === t && (0, m.ZQ)({
                    category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
                    event_id: e.event_id,
                    level: e.level,
                    message: (0, s.$X)(e)
                  }, {
                    event: e
                  })
                }
              }(t))
            }
          }
        });
      (0, a.F)(tt, et);
      const nt = "Dedupe",
        rt = (0, a._C)(() => {
          let t;
          return {
            name: nt,
            setupOnce() {},
            processEvent(e) {
              if (e.type) return e;
              try {
                if (function(t, e) {
                    return !!e && (!! function(t, e) {
                      const n = t.message,
                        r = e.message;
                      return !(!n && !r) && (!(n && !r || !n && r) && (n === r && (!!it(t, e) && !!st(t, e))))
                    }(t, e) || !! function(t, e) {
                      const n = ot(e),
                        r = ot(t);
                      return !(!n || !r) && (n.type === r.type && n.value === r.value && (!!it(t, e) && !!st(t, e)))
                    }(t, e))
                  }(e, t)) return M.T && r.vF.warn("Event dropped due to being a duplicate of previously captured event."), null
              } catch (t) {}
              return t = e
            }
          }
        });

      function st(t, e) {
        let n = at(t),
          r = at(e);
        if (!n && !r) return !0;
        if (n && !r || !n && r) return !1;
        if (r.length !== n.length) return !1;
        for (let t = 0; t < r.length; t++) {
          const e = r[t],
            s = n[t];
          if (e.filename !== s.filename || e.lineno !== s.lineno || e.colno !== s.colno || e.function !== s.function) return !1
        }
        return !0
      }

      function it(t, e) {
        let n = t.fingerprint,
          r = e.fingerprint;
        if (!n && !r) return !0;
        if (n && !r || !n && r) return !1;
        try {
          return !(n.join("") !== r.join(""))
        } catch (t) {
          return !1
        }
      }

      function ot(t) {
        return t.exception && t.exception.values && t.exception.values[0]
      }

      function at(t) {
        const e = t.exception;
        if (e) try {
          return e.values[0].stacktrace.frames
        } catch (t) {
          return
        }
      }(0, a.F)(nt, rt);
      var ct = n(19969),
        ut = n(17425);
      const lt = "GlobalHandlers",
        dt = (0, a._C)((t = {}) => {
          const e = {
            onerror: !0,
            onunhandledrejection: !0,
            ...t
          };
          return {
            name: lt,
            setupOnce() {
              Error.stackTraceLimit = 50
            },
            setup(t) {
              e.onerror && (function(t) {
                (0, ct.L)(e => {
                  const {
                    stackParser: n,
                    attachStacktrace: r
                  } = mt();
                  if ((0, m.KU)() !== t || (0, H.jN)()) return;
                  const {
                    msg: s,
                    url: i,
                    line: o,
                    column: a,
                    error: c
                  } = e, u = void 0 === c && (0, O.Kg)(s) ? function(t, e, n, r) {
                    let s = (0, O.T2)(t) ? t.message : t,
                      i = "Error";
                    const o = s.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                    o && (i = o[1], s = o[2]);
                    return pt({
                      exception: {
                        values: [{
                          type: i,
                          value: s
                        }]
                      }
                    }, e, n, r)
                  }(s, i, o, a) : pt($(n, c || s, void 0, r, !1), i, o, a);
                  u.level = "error", (0, m.r)(u, {
                    originalException: c,
                    mechanism: {
                      handled: !1,
                      type: "onerror"
                    }
                  })
                })
              }(t), ht("onerror")), e.onunhandledrejection && (function(t) {
                (0, ut.r)(e => {
                  const {
                    stackParser: n,
                    attachStacktrace: r
                  } = mt();
                  if ((0, m.KU)() !== t || (0, H.jN)()) return;
                  const s = function(t) {
                      if ((0, O.sO)(t)) return t;
                      const e = t;
                      try {
                        if ("reason" in e) return e.reason;
                        if ("detail" in e && "reason" in e.detail) return e.detail.reason
                      } catch (t) {}
                      return t
                    }(e),
                    i = (0, O.sO)(s) ? {
                      exception: {
                        values: [{
                          type: "UnhandledRejection",
                          value: `Non-Error promise rejection captured with value: ${String(s)}`
                        }]
                      }
                    } : $(n, s, void 0, r, !0);
                  i.level = "error", (0, m.r)(i, {
                    originalException: s,
                    mechanism: {
                      handled: !1,
                      type: "onunhandledrejection"
                    }
                  })
                })
              }(t), ht("onunhandledrejection"))
            }
          }
        });

      function pt(t, e, n, r) {
        const s = t.exception = t.exception || {},
          i = s.values = s.values || [],
          o = i[0] = i[0] || {},
          a = o.stacktrace = o.stacktrace || {},
          c = a.frames = a.frames || [],
          u = isNaN(parseInt(r, 10)) ? void 0 : r,
          l = isNaN(parseInt(n, 10)) ? void 0 : n,
          d = (0, O.Kg)(e) && e.length > 0 ? e : (0, V.$N)();
        return 0 === c.length && c.push({
          colno: u,
          filename: d,
          function: "?",
          in_app: !0,
          lineno: l
        }), t
      }

      function ht(t) {
        M.T && r.vF.log(`Global Handler attached: ${t}`)
      }

      function mt() {
        const t = (0, m.KU)();
        return t && t.getOptions() || {
          stackParser: () => [],
          attachStacktrace: !1
        }
      }(0, a.F)(lt, dt);
      const ft = "HttpContext",
        gt = (0, a._C)(() => ({
          name: ft,
          setupOnce() {},
          preprocessEvent(t) {
            if (!H.jf.navigator && !H.jf.location && !H.jf.document) return;
            const e = t.request && t.request.url || H.jf.location && H.jf.location.href,
              {
                referrer: n
              } = H.jf.document || {},
              {
                userAgent: r
              } = H.jf.navigator || {},
              s = {
                ...t.request && t.request.headers,
                ...n && {
                  Referer: n
                },
                ...r && {
                  "User-Agent": r
                }
              },
              i = {
                ...t.request,
                ...e && {
                  url: e
                },
                headers: s
              };
            t.request = i
          }
        }));

      function yt(t, e, n = 250, r, s, o, a) {
        if (!(o.exception && o.exception.values && a && (0, O.tH)(a.originalException, Error))) return;
        const c = o.exception.values.length > 0 ? o.exception.values[o.exception.values.length - 1] : void 0;
        var u, l;
        c && (o.exception.values = (u = _t(t, e, s, a.originalException, r, o.exception.values, c, 0), l = n, u.map(t => (t.value && (t.value = (0, i.xv)(t.value, l)), t))))
      }

      function _t(t, e, n, r, s, i, o, a) {
        if (i.length >= n + 1) return i;
        let c = [...i];
        if ((0, O.tH)(r[s], Error)) {
          vt(o, a);
          const i = t(e, r[s]),
            u = c.length;
          St(i, s, u, a), c = _t(t, e, n, r[s], s, [i, ...c], i, u)
        }
        return Array.isArray(r.errors) && r.errors.forEach((r, i) => {
          if ((0, O.tH)(r, Error)) {
            vt(o, a);
            const u = t(e, r),
              l = c.length;
            St(u, `errors[${i}]`, l, a), c = _t(t, e, n, r, s, [u, ...c], u, l)
          }
        }), c
      }

      function vt(t, e) {
        t.mechanism = t.mechanism || {
          type: "generic",
          handled: !0
        }, t.mechanism = {
          ...t.mechanism,
          ..."AggregateError" === t.type && {
            is_exception_group: !0
          },
          exception_id: e
        }
      }

      function St(t, e, n, r) {
        t.mechanism = t.mechanism || {
          type: "generic",
          handled: !0
        }, t.mechanism = {
          ...t.mechanism,
          type: "chained",
          source: e,
          exception_id: n,
          parent_id: r
        }
      }(0, a.F)(ft, gt);
      const bt = "LinkedErrors",
        kt = (0, a._C)((t = {}) => {
          const e = t.limit || 5,
            n = t.key || "cause";
          return {
            name: bt,
            setupOnce() {},
            preprocessEvent(t, r, s) {
              const i = s.getOptions();
              yt(N, i.stackParser, i.maxValueLength, n, e, t, r)
            }
          }
        }),
        Tt = ((0, a.F)(bt, kt), ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]),
        wt = "TryCatch",
        Et = (0, a._C)((t = {}) => {
          const e = {
            XMLHttpRequest: !0,
            eventTarget: !0,
            requestAnimationFrame: !0,
            setInterval: !0,
            setTimeout: !0,
            ...t
          };
          return {
            name: wt,
            setupOnce() {
              e.setTimeout && (0, h.GS)(H.jf, "setTimeout", xt), e.setInterval && (0, h.GS)(H.jf, "setInterval", xt), e.requestAnimationFrame && (0, h.GS)(H.jf, "requestAnimationFrame", It), e.XMLHttpRequest && "XMLHttpRequest" in H.jf && (0, h.GS)(XMLHttpRequest.prototype, "send", Ct);
              const t = e.eventTarget;
              t && (Array.isArray(t) ? t : Tt).forEach(Rt)
            }
          }
        });

      function xt(t) {
        return function(...e) {
          const n = e[0];
          return e[0] = (0, H.LV)(n, {
            mechanism: {
              data: {
                function: (0, S.qQ)(t)
              },
              handled: !1,
              type: "instrument"
            }
          }), t.apply(this, e)
        }
      }

      function It(t) {
        return function(e) {
          return t.apply(this, [(0, H.LV)(e, {
            mechanism: {
              data: {
                function: "requestAnimationFrame",
                handler: (0, S.qQ)(t)
              },
              handled: !1,
              type: "instrument"
            }
          })])
        }
      }

      function Ct(t) {
        return function(...e) {
          const n = this;
          return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(t => {
            t in n && "function" == typeof n[t] && (0, h.GS)(n, t, function(e) {
              const n = {
                  mechanism: {
                    data: {
                      function: t,
                      handler: (0, S.qQ)(e)
                    },
                    handled: !1,
                    type: "instrument"
                  }
                },
                r = (0, h.sp)(e);
              return r && (n.mechanism.data.handler = (0, S.qQ)(r)), (0, H.LV)(e, n)
            })
          }), t.apply(this, e)
        }
      }

      function Rt(t) {
        const e = H.jf,
          n = e[t] && e[t].prototype;
        n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0, h.GS)(n, "addEventListener", function(e) {
          return function(n, r, s) {
            try {
              "function" == typeof r.handleEvent && (r.handleEvent = (0, H.LV)(r.handleEvent, {
                mechanism: {
                  data: {
                    function: "handleEvent",
                    handler: (0, S.qQ)(r),
                    target: t
                  },
                  handled: !1,
                  type: "instrument"
                }
              }))
            } catch (t) {}
            return e.apply(this, [n, (0, H.LV)(r, {
              mechanism: {
                data: {
                  function: "addEventListener",
                  handler: (0, S.qQ)(r),
                  target: t
                },
                handled: !1,
                type: "instrument"
              }
            }), s])
          }
        }), (0, h.GS)(n, "removeEventListener", function(t) {
          return function(e, n, r) {
            const s = n;
            try {
              const n = s && s.__sentry_wrapped__;
              n && t.call(this, e, n, r)
            } catch (t) {}
            return t.call(this, e, s, r)
          }
        }))
      }(0, a.F)(wt, Et);
      const Mt = "?";

      function Ot(t, e, n, r) {
        const s = {
          filename: t,
          function: e,
          in_app: !0
        };
        return void 0 !== n && (s.lineno = n), void 0 !== r && (s.colno = r), s
      }
      const Dt = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        At = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        Nt = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        Ft = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        Lt = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        jt = [
          [30, t => {
            const e = Dt.exec(t);
            if (e) {
              if (e[2] && 0 === e[2].indexOf("eval")) {
                const t = At.exec(e[2]);
                t && (e[2] = t[1], e[3] = t[2], e[4] = t[3])
              }
              const [t, n] = $t(e[1] || Mt, e[2]);
              return Ot(n, t, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
            }
          }],
          [50, t => {
            const e = Nt.exec(t);
            if (e) {
              if (e[3] && e[3].indexOf(" > eval") > -1) {
                const t = Ft.exec(e[3]);
                t && (e[1] = e[1] || "eval", e[3] = t[1], e[4] = t[2], e[5] = "")
              }
              let t = e[3],
                n = e[1] || Mt;
              return [n, t] = $t(n, t), Ot(t, n, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
            }
          }],
          [40, t => {
            const e = Lt.exec(t);
            return e ? Ot(e[2], e[1] || Mt, +e[3], e[4] ? +e[4] : void 0) : void 0
          }]
        ],
        Pt = (0, S.gd)(...jt),
        $t = (t, e) => {
          const n = -1 !== t.indexOf("safari-extension"),
            r = -1 !== t.indexOf("safari-web-extension");
          return n || r ? [-1 !== t.indexOf("@") ? t.split("@")[0] : Mt, n ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
        };
      var Ut = n(81145),
        Bt = n(69992);

      function Ht(t) {
        return (0, Bt.o)(t, function(e) {
          return new A.T2((n, r) => {
            const s = new XMLHttpRequest;
            s.onerror = r, s.onreadystatechange = () => {
              4 === s.readyState && n({
                statusCode: s.status,
                headers: {
                  "x-sentry-rate-limits": s.getResponseHeader("X-Sentry-Rate-Limits"),
                  "retry-after": s.getResponseHeader("Retry-After")
                }
              })
            }, s.open("POST", t.url);
            for (const e in t.headers) Object.prototype.hasOwnProperty.call(t.headers, e) && s.setRequestHeader(e, t.headers[e]);
            s.send(e.body)
          })
        })
      }
      const zt = [d(), _(), Et(), et(), dt(), kt(), rt(), gt()];

      function Wt(t = {}) {
        void 0 === t.defaultIntegrations && (t.defaultIntegrations = [...zt]), void 0 === t.release && ("string" == typeof __SENTRY_RELEASE__ && (t.release = __SENTRY_RELEASE__), H.jf.SENTRY_RELEASE && H.jf.SENTRY_RELEASE.id && (t.release = H.jf.SENTRY_RELEASE.id)), void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0), void 0 === t.sendClientReports && (t.sendClientReports = !0);
        const e = {
          ...t,
          stackParser: (0, S.vk)(t.stackParser || Pt),
          integrations: (0, a.mH)(t),
          transport: t.transport || ((0, b.vm)() ? Ut._ : Ht)
        };
        (function(t, e) {
          !0 === e.debug && (o.T ? r.vF.enable() : (0, r.pq)(() => {
            console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
          })), (0, m.o5)().update(e.initialScope);
          const n = new t(e);
          ! function(t) {
            const e = (0, v.BF)().getStackTop();
            e.client = t, e.scope.setClient(t)
          }(n),
          function(t) {
            t.init ? t.init() : t.setupIntegrations && t.setupIntegrations()
          }(n)
        })(W, e), t.autoSessionTracking && (void 0 !== H.jf.document ? ((0, m.J0)({
          ignoreDuration: !0
        }), (0, m.J5)(), (0, k._)(({
          from: t,
          to: e
        }) => {
          void 0 !== t && t !== e && ((0, m.J0)({
            ignoreDuration: !0
          }), (0, m.J5)())
        })) : M.T && r.vF.warn("Session tracking in non-browser environment with @sentry/browser is not supported."))
      }
    },
    81145(t, e, n) {
      "use strict";
      n.d(e, {
        _: () => l
      });
      var r = n(69992),
        s = n(37518),
        i = n(78180),
        o = n(61952),
        a = n(48950),
        c = n(83973);
      let u;

      function l(t, e = function() {
        if (u) return u;
        if ((0, i.ap)(c.jf.fetch)) return u = c.jf.fetch.bind(c.jf);
        const t = c.jf.document;
        let e = c.jf.fetch;
        if (t && "function" == typeof t.createElement) try {
          const n = t.createElement("iframe");
          n.hidden = !0, t.head.appendChild(n);
          const r = n.contentWindow;
          r && r.fetch && (e = r.fetch), t.head.removeChild(n)
        } catch (t) {
          a.T && o.vF.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
        }
        return u = e.bind(c.jf)
      }()) {
        let n = 0,
          l = 0;
        return (0, r.o)(t, function(r) {
          const i = r.body.length;
          n += i, l++;
          const o = {
            body: r.body,
            method: "POST",
            referrerPolicy: "origin",
            headers: t.headers,
            keepalive: n <= 6e4 && l < 15,
            ...t.fetchOptions
          };
          try {
            return e(t.url, o).then(t => (n -= i, l--, {
              statusCode: t.status,
              headers: {
                "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
                "retry-after": t.headers.get("Retry-After")
              }
            }))
          } catch (t) {
            return u = void 0, n -= i, l--, (0, s.xg)(t)
          }
        })
      }
    },
    17892(t, e, n) {
      "use strict";
      n.d(e, {
        Z: () => s
      });
      var r = n(22423);

      function s(t, e = {}) {
        const n = "string" == typeof e ? e : e.tunnel,
          s = "string" != typeof e && e._metadata ? e._metadata.sdk : void 0;
        return n || `${function(t){return`${function(t){const e=t.protocol?`${t.protocol}:`:"",n=t.port?`:${t.port}`:"";return`${e}//${t.host}${n}${t.path?`/${t.path}`:""}/api/`}(t)}${t.projectId}/envelope/`}(t)}?${function(t,e){return(0,r.u4)({sentry_key:t.publicKey,sentry_version:"7",...e&&{sentry_client:`${e.name}/${e.version}`}})}(t,s)}`
      }
    },
    3856(t, e, n) {
      "use strict";
      n.d(e, {
        V: () => v,
        S: () => k
      });
      var r = n(85771),
        s = n(61952),
        i = n(86788),
        o = n(16732),
        a = n(37518),
        c = n(50332),
        u = n(78176),
        l = n(17892),
        d = n(21926),
        p = n(43031),
        h = n(54667),
        m = n(22742);
      var f = n(77516),
        g = n(48114),
        y = n(41397);
      const _ = "Not capturing exception because it's already been captured.";
      class v {
        constructor(t) {
          if (this._options = t, this._integrations = {}, this._integrationsInitialized = !1, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], t.dsn ? this._dsn = (0, r.AD)(t.dsn) : d.T && s.vF.warn("No DSN provided, client will not send events."), this._dsn) {
            const e = (0, l.Z)(this._dsn, t);
            this._transport = t.transport({
              tunnel: this._options.tunnel,
              recordDroppedEvent: this.recordDroppedEvent.bind(this),
              ...t.transportOptions,
              url: e
            })
          }
        }
        captureException(t, e, n) {
          if ((0, i.GR)(t)) return void(d.T && s.vF.log(_));
          let r = e && e.event_id;
          return this._process(this.eventFromException(t, e).then(t => this._captureEvent(t, e, n)).then(t => {
            r = t
          })), r
        }
        captureMessage(t, e, n, r) {
          let s = n && n.event_id;
          const i = (0, o.NF)(t) ? t : String(t),
            a = (0, o.sO)(t) ? this.eventFromMessage(i, e, n) : this.eventFromException(t, n);
          return this._process(a.then(t => this._captureEvent(t, n, r)).then(t => {
            s = t
          })), s
        }
        captureEvent(t, e, n) {
          if (e && e.originalException && (0, i.GR)(e.originalException)) return void(d.T && s.vF.log(_));
          let r = e && e.event_id;
          const o = (t.sdkProcessingMetadata || {}).capturedSpanScope;
          return this._process(this._captureEvent(t, e, o || n).then(t => {
            r = t
          })), r
        }
        captureSession(t) {
          "string" != typeof t.release ? d.T && s.vF.warn("Discarded session because of missing or non-string release") : (this.sendSession(t), (0, f.qO)(t, {
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
        flush(t) {
          const e = this._transport;
          return e ? (this.metricsAggregator && this.metricsAggregator.flush(), this._isClientDoneProcessing(t).then(n => e.flush(t).then(t => n && t))) : (0, a.XW)(!0)
        }
        close(t) {
          return this.flush(t).then(t => (this.getOptions().enabled = !1, this.metricsAggregator && this.metricsAggregator.close(), t))
        }
        getEventProcessors() {
          return this._eventProcessors
        }
        addEventProcessor(t) {
          this._eventProcessors.push(t)
        }
        setupIntegrations(t) {
          (t && !this._integrationsInitialized || this._isEnabled() && !this._integrationsInitialized) && this._setupIntegrations()
        }
        init() {
          this._isEnabled() && this._setupIntegrations()
        }
        getIntegrationById(t) {
          return this.getIntegrationByName(t)
        }
        getIntegrationByName(t) {
          return this._integrations[t]
        }
        getIntegration(t) {
          try {
            return this._integrations[t.id] || null
          } catch (e) {
            return d.T && s.vF.warn(`Cannot retrieve integration ${t.id} from the current Client`), null
          }
        }
        addIntegration(t) {
          const e = this._integrations[t.name];
          (0, m.qm)(this, t, this._integrations), e || (0, m.lc)(this, [t])
        }
        sendEvent(t, e = {}) {
          this.emit("beforeSendEvent", t, e);
          let n = function(t, e, n, r) {
            const s = (0, c.Cj)(n),
              i = t.type && "replay_event" !== t.type ? t.type : "event";
            ! function(t, e) {
              e && (t.sdk = t.sdk || {}, t.sdk.name = t.sdk.name || e.name, t.sdk.version = t.sdk.version || e.version, t.sdk.integrations = [...t.sdk.integrations || [], ...e.integrations || []], t.sdk.packages = [...t.sdk.packages || [], ...e.packages || []])
            }(t, n && n.sdk);
            const o = (0, c.n2)(t, s, r, e);
            delete t.sdkProcessingMetadata;
            const a = [{
              type: i
            }, t];
            return (0, c.h4)(o, [a])
          }(t, this._dsn, this._options._metadata, this._options.tunnel);
          for (const t of e.attachments || []) n = (0, c.W3)(n, (0, c.bm)(t, this._options.transportOptions && this._options.transportOptions.textEncoder));
          const r = this._sendEnvelope(n);
          r && r.then(e => this.emit("afterSendEvent", t, e), null)
        }
        sendSession(t) {
          const e = function(t, e, n, s) {
            const i = (0, c.Cj)(n),
              o = {
                sent_at: (new Date).toISOString(),
                ...i && {
                  sdk: i
                },
                ...!!s && e && {
                  dsn: (0, r.SB)(e)
                }
              },
              a = "aggregates" in t ? [{
                type: "sessions"
              }, t] : [{
                type: "session"
              }, t.toJSON()];
            return (0, c.h4)(o, [a])
          }(t, this._dsn, this._options._metadata, this._options.tunnel);
          this._sendEnvelope(e)
        }
        recordDroppedEvent(t, e, n) {
          if (this._options.sendClientReports) {
            const r = "number" == typeof n ? n : 1,
              i = `${t}:${e}`;
            d.T && s.vF.log(`Recording outcome: "${i}"${r>1?` (${r} times)`:""}`), this._outcomes[i] = (this._outcomes[i] || 0) + r
          }
        }
        captureAggregateMetrics(t) {
          d.T && s.vF.log(`Flushing aggregated metrics, number of metrics: ${t.length}`);
          const e = function(t, e, n, s) {
            const i = {
              sent_at: (new Date).toISOString()
            };
            n && n.sdk && (i.sdk = {
              name: n.sdk.name,
              version: n.sdk.version
            }), s && e && (i.dsn = (0, r.SB)(e));
            const o = function(t) {
              const e = function(t) {
                let e = "";
                for (const n of t) {
                  const t = Object.entries(n.tags),
                    r = t.length > 0 ? `|#${t.map(([t,e])=>`${t}:${e}`).join(",")}` : "";
                  e += `${n.name}@${n.unit}:${n.metric}|${n.metricType}${r}|T${n.timestamp}\n`
                }
                return e
              }(t);
              return [{
                type: "statsd",
                length: e.length
              }, e]
            }(t);
            return (0, c.h4)(i, [o])
          }(t, this._dsn, this._options._metadata, this._options.tunnel);
          this._sendEnvelope(e)
        }
        on(t, e) {
          this._hooks[t] || (this._hooks[t] = []), this._hooks[t].push(e)
        }
        emit(t, ...e) {
          this._hooks[t] && this._hooks[t].forEach(t => t(...e))
        }
        _setupIntegrations() {
          const {
            integrations: t
          } = this._options;
          this._integrations = (0, m.P$)(this, t), (0, m.lc)(this, t), this._integrationsInitialized = !0
        }
        _updateSessionFromEvent(t, e) {
          let n = !1,
            r = !1;
          const s = e.exception && e.exception.values;
          if (s) {
            r = !0;
            for (const t of s) {
              const e = t.mechanism;
              if (e && !1 === e.handled) {
                n = !0;
                break
              }
            }
          }
          const i = "ok" === t.status;
          (i && 0 === t.errors || i && n) && ((0, f.qO)(t, {
            ...n && {
              status: "crashed"
            },
            errors: t.errors || Number(r || n)
          }), this.captureSession(t))
        }
        _isClientDoneProcessing(t) {
          return new a.T2(e => {
            let n = 0;
            const r = setInterval(() => {
              0 == this._numProcessing ? (clearInterval(r), e(!0)) : (n += 1, t && n >= t && (clearInterval(r), e(!1)))
            }, 1)
          })
        }
        _isEnabled() {
          return !1 !== this.getOptions().enabled && void 0 !== this._transport
        }
        _prepareEvent(t, e, n, r = (0, h.rm)()) {
          const s = this.getOptions(),
            i = Object.keys(this._integrations);
          return !e.integrations && i.length > 0 && (e.integrations = i), this.emit("preprocessEvent", t, e), (0, y.mG)(s, t, e, n, this, r).then(t => {
            if (null === t) return t;
            const e = {
              ...r.getPropagationContext(),
              ...n ? n.getPropagationContext() : void 0
            };
            if ((!t.contexts || !t.contexts.trace) && e) {
              const {
                traceId: r,
                spanId: s,
                parentSpanId: i,
                dsc: o
              } = e;
              t.contexts = {
                trace: {
                  trace_id: r,
                  span_id: s,
                  parent_span_id: i
                },
                ...t.contexts
              };
              const a = o || (0, g.l)(r, this, n);
              t.sdkProcessingMetadata = {
                dynamicSamplingContext: a,
                ...t.sdkProcessingMetadata
              }
            }
            return t
          })
        }
        _captureEvent(t, e = {}, n) {
          return this._processEvent(t, e, n).then(t => t.event_id, t => {
            if (d.T) {
              const e = t;
              "log" === e.logLevel ? s.vF.log(e.message) : s.vF.warn(e)
            }
          })
        }
        _processEvent(t, e, n) {
          const r = this.getOptions(),
            {
              sampleRate: s
            } = r,
            i = b(t),
            c = S(t),
            l = t.type || "error",
            d = `before send for type \`${l}\``;
          if (c && "number" == typeof s && Math.random() > s) return this.recordDroppedEvent("sample_rate", "error", t), (0, a.xg)(new u.U(`Discarding event because it's not included in the random sample (sampling rate = ${s})`, "log"));
          const p = "replay_event" === l ? "replay" : l,
            h = (t.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
          return this._prepareEvent(t, e, n, h).then(n => {
            if (null === n) throw this.recordDroppedEvent("event_processor", p, t), new u.U("An event processor returned `null`, will not send event.", "log");
            if (e.data && !0 === e.data.__sentry__) return n;
            const s = function(t, e, n) {
              const {
                beforeSend: r,
                beforeSendTransaction: s
              } = t;
              if (S(e) && r) return r(e, n);
              if (b(e) && s) {
                if (e.spans) {
                  const t = e.spans.length;
                  e.sdkProcessingMetadata = {
                    ...e.sdkProcessingMetadata,
                    spanCountBeforeProcessing: t
                  }
                }
                return s(e, n)
              }
              return e
            }(r, n, e);
            return function(t, e) {
              const n = `${e} must return \`null\` or a valid event.`;
              if ((0, o.Qg)(t)) return t.then(t => {
                if (!(0, o.Qd)(t) && null !== t) throw new u.U(n);
                return t
              }, t => {
                throw new u.U(`${e} rejected with ${t}`)
              });
              if (!(0, o.Qd)(t) && null !== t) throw new u.U(n);
              return t
            }(s, d)
          }).then(r => {
            if (null === r) {
              if (this.recordDroppedEvent("before_send", p, t), i) {
                const e = 1 + (t.spans || []).length;
                this.recordDroppedEvent("before_send", "span", e)
              }
              throw new u.U(`${d} returned \`null\`, will not send event.`, "log")
            }
            const s = n && n.getSession();
            if (!i && s && this._updateSessionFromEvent(s, r), i) {
              const t = (r.sdkProcessingMetadata && r.sdkProcessingMetadata.spanCountBeforeProcessing || 0) - (r.spans ? r.spans.length : 0);
              t > 0 && this.recordDroppedEvent("before_send", "span", t)
            }
            const o = r.transaction_info;
            if (i && o && r.transaction !== t.transaction) {
              const t = "custom";
              r.transaction_info = {
                ...o,
                source: t
              }
            }
            return this.sendEvent(r, e), r
          }).then(null, t => {
            if (t instanceof u.U) throw t;
            throw this.captureException(t, {
              data: {
                __sentry__: !0
              },
              originalException: t
            }), new u.U(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${t}`)
          })
        }
        _process(t) {
          this._numProcessing++, t.then(t => (this._numProcessing--, t), t => (this._numProcessing--, t))
        }
        _sendEnvelope(t) {
          if (this.emit("beforeEnvelope", t), this._isEnabled() && this._transport) return this._transport.send(t).then(null, t => {
            d.T && s.vF.error("Error while sending event:", t)
          });
          d.T && s.vF.error("Transport disabled")
        }
        _clearOutcomes() {
          const t = this._outcomes;
          return this._outcomes = {}, Object.keys(t).map(e => {
            const [n, r] = e.split(":");
            return {
              reason: n,
              category: r,
              quantity: t[e]
            }
          })
        }
      }

      function S(t) {
        return void 0 === t.type
      }

      function b(t) {
        return "transaction" === t.type
      }

      function k(t) {
        const e = (0, p.KU)();
        e && e.addEventProcessor && e.addEventProcessor(t)
      }
    },
    37149(t, e, n) {
      "use strict";
      n.d(e, {
        U: () => r
      });
      const r = "production"
    },
    21926(t, e, n) {
      "use strict";
      n.d(e, {
        T: () => r
      });
      const r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
    },
    95921(t, e, n) {
      "use strict";
      n.d(e, {
        jB: () => l,
        lG: () => c,
        lb: () => u
      });
      var r = n(9929),
        s = n(16732),
        i = n(61952),
        o = n(37518),
        a = n(21926);

      function c() {
        return (0, r.BY)("globalEventProcessors", () => [])
      }

      function u(t) {
        c().push(t)
      }

      function l(t, e, n, r = 0) {
        return new o.T2((o, c) => {
          const u = t[r];
          if (null === e || "function" != typeof u) o(e);
          else {
            const d = u({
              ...e
            }, n);
            a.T && u.id && null === d && i.vF.log(`Event processor "${u.id}" dropped event`), (0, s.Qg)(d) ? d.then(e => l(t, e, n, r + 1).then(o)).then(null, c) : l(t, d, n, r + 1).then(o).then(null, c)
          }
        })
      }
    },
    43031(t, e, n) {
      "use strict";
      n.d(e, {
        Cp: () => c,
        J0: () => g,
        J5: () => v,
        KU: () => m,
        ZQ: () => d,
        o: () => p,
        o5: () => f,
        r: () => l,
        v4: () => h,
        wd: () => u
      });
      var r = n(9929),
        s = n(37149),
        i = n(54667),
        o = n(77516),
        a = n(41397);

      function c(t, e) {
        return (0, i.BF)().captureException(t, (0, a.li)(e))
      }

      function u(t, e) {
        const n = "string" == typeof e ? e : void 0,
          r = "string" != typeof e ? {
            captureContext: e
          } : void 0;
        return (0, i.BF)().captureMessage(t, n, r)
      }

      function l(t, e) {
        return (0, i.BF)().captureEvent(t, e)
      }

      function d(t, e) {
        (0, i.BF)().addBreadcrumb(t, e)
      }

      function p(t, e) {
        (0, i.BF)().setContext(t, e)
      }

      function h(...t) {
        const e = (0, i.BF)();
        if (2 === t.length) {
          const [n, r] = t;
          return n ? e.withScope(() => (e.getStackTop().scope = n, r(n))) : e.withScope(r)
        }
        return e.withScope(t[0])
      }

      function m() {
        return (0, i.BF)().getClient()
      }

      function f() {
        return (0, i.BF)().getScope()
      }

      function g(t) {
        const e = m(),
          n = (0, i.rm)(),
          a = f(),
          {
            release: c,
            environment: u = s.U
          } = e && e.getOptions() || {},
          {
            userAgent: l
          } = r.OW.navigator || {},
          d = (0, o.fj)({
            release: c,
            environment: u,
            user: a.getUser() || n.getUser(),
            ...l && {
              userAgent: l
            },
            ...t
          }),
          p = n.getSession();
        return p && "ok" === p.status && (0, o.qO)(p, {
          status: "exited"
        }), y(), n.setSession(d), a.setSession(d), d
      }

      function y() {
        const t = (0, i.rm)(),
          e = f(),
          n = e.getSession() || t.getSession();
        n && (0, o.Vu)(n), _(), t.setSession(), e.setSession()
      }

      function _() {
        const t = (0, i.rm)(),
          e = f(),
          n = m(),
          r = e.getSession() || t.getSession();
        r && n && n.captureSession && n.captureSession(r)
      }

      function v(t = !1) {
        t ? y() : _()
      }
    },
    54667(t, e, n) {
      "use strict";
      n.d(e, {
        BF: () => _,
        EU: () => g,
        rm: () => v
      });
      var r = n(9929),
        s = n(16732),
        i = n(61952),
        o = n(86788),
        a = n(98765),
        c = n(37149),
        u = n(21926),
        l = n(99616),
        d = n(77516),
        p = n(91604);
      const h = parseFloat(p.M),
        m = 100;
      class f {
        constructor(t, e, n, r = h) {
          let s, i;
          this._version = r, e ? s = e : (s = new l.HG, s.setClient(t)), n ? i = n : (i = new l.HG, i.setClient(t)), this._stack = [{
            scope: s
          }], t && this.bindClient(t), this._isolationScope = i
        }
        isOlderThan(t) {
          return this._version < t
        }
        bindClient(t) {
          const e = this.getStackTop();
          e.client = t, e.scope.setClient(t), t && t.setupIntegrations && t.setupIntegrations()
        }
        pushScope() {
          const t = this.getScope().clone();
          return this.getStack().push({
            client: this.getClient(),
            scope: t
          }), t
        }
        popScope() {
          return !(this.getStack().length <= 1 || !this.getStack().pop())
        }
        withScope(t) {
          const e = this.pushScope();
          let n;
          try {
            n = t(e)
          } catch (t) {
            throw this.popScope(), t
          }
          return (0, s.Qg)(n) ? n.then(t => (this.popScope(), t), t => {
            throw this.popScope(), t
          }) : (this.popScope(), n)
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
        captureException(t, e) {
          const n = this._lastEventId = e && e.event_id ? e.event_id : (0, o.eJ)(),
            r = new Error("Sentry syntheticException");
          return this.getScope().captureException(t, {
            originalException: t,
            syntheticException: r,
            ...e,
            event_id: n
          }), n
        }
        captureMessage(t, e, n) {
          const r = this._lastEventId = n && n.event_id ? n.event_id : (0, o.eJ)(),
            s = new Error(t);
          return this.getScope().captureMessage(t, e, {
            originalException: t,
            syntheticException: s,
            ...n,
            event_id: r
          }), r
        }
        captureEvent(t, e) {
          const n = e && e.event_id ? e.event_id : (0, o.eJ)();
          return t.type || (this._lastEventId = n), this.getScope().captureEvent(t, {
            ...e,
            event_id: n
          }), n
        }
        lastEventId() {
          return this._lastEventId
        }
        addBreadcrumb(t, e) {
          const {
            scope: n,
            client: r
          } = this.getStackTop();
          if (!r) return;
          const {
            beforeBreadcrumb: s = null,
            maxBreadcrumbs: o = m
          } = r.getOptions && r.getOptions() || {};
          if (o <= 0) return;
          const c = {
              timestamp: (0, a.lu)(),
              ...t
            },
            u = s ? (0, i.pq)(() => s(c, e)) : c;
          null !== u && (r.emit && r.emit("beforeAddBreadcrumb", u, e), n.addBreadcrumb(u, o))
        }
        setUser(t) {
          this.getScope().setUser(t), this.getIsolationScope().setUser(t)
        }
        setTags(t) {
          this.getScope().setTags(t), this.getIsolationScope().setTags(t)
        }
        setExtras(t) {
          this.getScope().setExtras(t), this.getIsolationScope().setExtras(t)
        }
        setTag(t, e) {
          this.getScope().setTag(t, e), this.getIsolationScope().setTag(t, e)
        }
        setExtra(t, e) {
          this.getScope().setExtra(t, e), this.getIsolationScope().setExtra(t, e)
        }
        setContext(t, e) {
          this.getScope().setContext(t, e), this.getIsolationScope().setContext(t, e)
        }
        configureScope(t) {
          const {
            scope: e,
            client: n
          } = this.getStackTop();
          n && t(e)
        }
        run(t) {
          const e = y(this);
          try {
            t(this)
          } finally {
            y(e)
          }
        }
        getIntegration(t) {
          const e = this.getClient();
          if (!e) return null;
          try {
            return e.getIntegration(t)
          } catch (e) {
            return u.T && i.vF.warn(`Cannot retrieve integration ${t.id} from the current Hub`), null
          }
        }
        startTransaction(t, e) {
          const n = this._callExtensionMethod("startTransaction", t, e);
          return u.T && !n && (this.getClient() ? i.vF.warn("Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':\nSentry.addTracingExtensions();\nSentry.init({...});\n") : i.vF.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")), n
        }
        traceHeaders() {
          return this._callExtensionMethod("traceHeaders")
        }
        captureSession(t = !1) {
          if (t) return this.endSession();
          this._sendSessionUpdate()
        }
        endSession() {
          const t = this.getStackTop().scope,
            e = t.getSession();
          e && (0, d.Vu)(e), this._sendSessionUpdate(), t.setSession()
        }
        startSession(t) {
          const {
            scope: e,
            client: n
          } = this.getStackTop(), {
            release: s,
            environment: i = c.U
          } = n && n.getOptions() || {}, {
            userAgent: o
          } = r.OW.navigator || {}, a = (0, d.fj)({
            release: s,
            environment: i,
            user: e.getUser(),
            ...o && {
              userAgent: o
            },
            ...t
          }), u = e.getSession && e.getSession();
          return u && "ok" === u.status && (0, d.qO)(u, {
            status: "exited"
          }), this.endSession(), e.setSession(a), a
        }
        shouldSendDefaultPii() {
          const t = this.getClient(),
            e = t && t.getOptions();
          return Boolean(e && e.sendDefaultPii)
        }
        _sendSessionUpdate() {
          const {
            scope: t,
            client: e
          } = this.getStackTop(), n = t.getSession();
          n && e && e.captureSession && e.captureSession(n)
        }
        _callExtensionMethod(t, ...e) {
          const n = g().__SENTRY__;
          if (n && n.extensions && "function" == typeof n.extensions[t]) return n.extensions[t].apply(this, e);
          u.T && i.vF.warn(`Extension method ${t} couldn't be found, doing nothing.`)
        }
      }

      function g() {
        return r.OW.__SENTRY__ = r.OW.__SENTRY__ || {
          extensions: {},
          hub: void 0
        }, r.OW
      }

      function y(t) {
        const e = g(),
          n = S(e);
        return b(e, t), n
      }

      function _() {
        const t = g();
        if (t.__SENTRY__ && t.__SENTRY__.acs) {
          const e = t.__SENTRY__.acs.getCurrentHub();
          if (e) return e
        }
        return function(t = g()) {
          return e = t, !!(e && e.__SENTRY__ && e.__SENTRY__.hub) && !S(t).isOlderThan(h) || b(t, new f), S(t);
          var e
        }(t)
      }

      function v() {
        return _().getIsolationScope()
      }

      function S(t) {
        return (0, r.BY)("hub", () => new f, t)
      }

      function b(t, e) {
        return !!t && ((t.__SENTRY__ = t.__SENTRY__ || {}).hub = e, !0)
      }
    },
    22742(t, e, n) {
      "use strict";
      n.d(e, {
        F: () => h,
        P$: () => l,
        _C: () => m,
        lc: () => d,
        mH: () => u,
        qm: () => p
      });
      var r = n(61952),
        s = n(86788),
        i = n(21926),
        o = n(95921),
        a = n(54667);
      const c = [];

      function u(t) {
        const e = t.defaultIntegrations || [],
          n = t.integrations;
        let r;
        e.forEach(t => {
          t.isDefaultInstance = !0
        }), r = Array.isArray(n) ? [...e, ...n] : "function" == typeof n ? (0, s.k9)(n(e)) : e;
        const i = function(t) {
            const e = {};
            return t.forEach(t => {
              const {
                name: n
              } = t, r = e[n];
              r && !r.isDefaultInstance && t.isDefaultInstance || (e[n] = t)
            }), Object.keys(e).map(t => e[t])
          }(r),
          o = function(t, e) {
            for (let n = 0; n < t.length; n++)
              if (!0 === e(t[n])) return n;
            return -1
          }(i, t => "Debug" === t.name);
        if (-1 !== o) {
          const [t] = i.splice(o, 1);
          i.push(t)
        }
        return i
      }

      function l(t, e) {
        const n = {};
        return e.forEach(e => {
          e && p(t, e, n)
        }), n
      }

      function d(t, e) {
        for (const n of e) n && n.afterAllSetup && n.afterAllSetup(t)
      }

      function p(t, e, n) {
        if (n[e.name]) i.T && r.vF.log(`Integration skipped because it was already installed: ${e.name}`);
        else {
          if (n[e.name] = e, -1 === c.indexOf(e.name) && (e.setupOnce(o.lb, a.BF), c.push(e.name)), e.setup && "function" == typeof e.setup && e.setup(t), t.on && "function" == typeof e.preprocessEvent) {
            const n = e.preprocessEvent.bind(e);
            t.on("preprocessEvent", (e, r) => n(e, r, t))
          }
          if (t.addEventProcessor && "function" == typeof e.processEvent) {
            const n = e.processEvent.bind(e),
              r = (e, r) => n(e, r, t);
            r.id = e.name, t.addEventProcessor(r)
          }
          i.T && r.vF.log(`Integration installed: ${e.name}`)
        }
      }

      function h(t, e) {
        const n = function(...t) {
          return e(...t)
        };
        return n.id = t, n
      }

      function m(t) {
        return t
      }
    },
    19719(t, e, n) {
      "use strict";
      n.d(e, {
        Q: () => l
      });
      var r = n(50332),
        s = n(22742),
        i = n(9929);
      const o = new Map,
        a = new Set;

      function c(t, e) {
        return function(t) {
          if (i.OW._sentryModuleMetadata)
            for (const e of Object.keys(i.OW._sentryModuleMetadata)) {
              const n = i.OW._sentryModuleMetadata[e];
              if (a.has(e)) continue;
              a.add(e);
              const r = t(e);
              for (const t of r.reverse())
                if (t.filename) {
                  o.set(t.filename, n);
                  break
                }
            }
        }(t), o.get(e)
      }
      const u = "ModuleMetadata",
        l = (0, s._C)(() => ({
          name: u,
          setupOnce() {},
          setup(t) {
            "function" == typeof t.on && t.on("beforeEnvelope", t => {
              (0, r.yH)(t, (t, e) => {
                if ("event" === e) {
                  const e = Array.isArray(t) ? t[1] : void 0;
                  e && (function(t) {
                    try {
                      t.exception.values.forEach(t => {
                        if (t.stacktrace)
                          for (const e of t.stacktrace.frames || []) delete e.module_metadata
                      })
                    } catch (t) {}
                  }(e), t[1] = e)
                }
              })
            })
          },
          processEvent: (t, e, n) => (function(t, e) {
            try {
              e.exception.values.forEach(e => {
                if (e.stacktrace)
                  for (const n of e.stacktrace.frames || []) {
                    if (!n.filename) continue;
                    const e = c(t, n.filename);
                    e && (n.module_metadata = e)
                  }
              })
            } catch (t) {}
          }(n.getOptions().stackParser, t), t)
        }));
      (0, s.F)(u, l)
    },
    99616(t, e, n) {
      "use strict";
      n.d(e, {
        HG: () => d,
        m6: () => p
      });
      var r = n(16732),
        s = n(61952),
        i = n(86788),
        o = n(98765),
        a = n(95921),
        c = n(77516),
        u = n(45981);
      let l;
      class d {
        constructor() {
          this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = h()
        }
        static clone(t) {
          return t ? t.clone() : new d
        }
        clone() {
          const t = new d;
          return t._breadcrumbs = [...this._breadcrumbs], t._tags = {
            ...this._tags
          }, t._extra = {
            ...this._extra
          }, t._contexts = {
            ...this._contexts
          }, t._user = this._user, t._level = this._level, t._span = this._span, t._session = this._session, t._transactionName = this._transactionName, t._fingerprint = this._fingerprint, t._eventProcessors = [...this._eventProcessors], t._requestSession = this._requestSession, t._attachments = [...this._attachments], t._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata
          }, t._propagationContext = {
            ...this._propagationContext
          }, t._client = this._client, t
        }
        setClient(t) {
          this._client = t
        }
        getClient() {
          return this._client
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
            segment: void 0,
            username: void 0
          }, this._session && (0, c.qO)(this._session, {
            user: t
          }), this._notifyScopeListeners(), this
        }
        getUser() {
          return this._user
        }
        getRequestSession() {
          return this._requestSession
        }
        setRequestSession(t) {
          return this._requestSession = t, this
        }
        setTags(t) {
          return this._tags = {
            ...this._tags,
            ...t
          }, this._notifyScopeListeners(), this
        }
        setTag(t, e) {
          return this._tags = {
            ...this._tags,
            [t]: e
          }, this._notifyScopeListeners(), this
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
        setSpan(t) {
          return this._span = t, this._notifyScopeListeners(), this
        }
        getSpan() {
          return this._span
        }
        getTransaction() {
          const t = this._span;
          return t && t.transaction
        }
        setSession(t) {
          return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
        }
        getSession() {
          return this._session
        }
        update(t) {
          if (!t) return this;
          const e = "function" == typeof t ? t(this) : t;
          if (e instanceof d) {
            const t = e.getScopeData();
            this._tags = {
              ...this._tags,
              ...t.tags
            }, this._extra = {
              ...this._extra,
              ...t.extra
            }, this._contexts = {
              ...this._contexts,
              ...t.contexts
            }, t.user && Object.keys(t.user).length && (this._user = t.user), t.level && (this._level = t.level), t.fingerprint.length && (this._fingerprint = t.fingerprint), e.getRequestSession() && (this._requestSession = e.getRequestSession()), t.propagationContext && (this._propagationContext = t.propagationContext)
          } else if ((0, r.Qd)(e)) {
            const e = t;
            this._tags = {
              ...this._tags,
              ...e.tags
            }, this._extra = {
              ...this._extra,
              ...e.extra
            }, this._contexts = {
              ...this._contexts,
              ...e.contexts
            }, e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession), e.propagationContext && (this._propagationContext = e.propagationContext)
          }
          return this
        }
        clear() {
          return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this._propagationContext = h(), this
        }
        addBreadcrumb(t, e) {
          const n = "number" == typeof e ? e : 100;
          if (n <= 0) return this;
          const r = {
              timestamp: (0, o.lu)(),
              ...t
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
        addAttachment(t) {
          return this._attachments.push(t), this
        }
        getAttachments() {
          return this.getScopeData().attachments
        }
        clearAttachments() {
          return this._attachments = [], this
        }
        getScopeData() {
          const {
            _breadcrumbs: t,
            _attachments: e,
            _contexts: n,
            _tags: r,
            _extra: s,
            _user: i,
            _level: o,
            _fingerprint: a,
            _eventProcessors: c,
            _propagationContext: u,
            _sdkProcessingMetadata: l,
            _transactionName: d,
            _span: p
          } = this;
          return {
            breadcrumbs: t,
            attachments: e,
            contexts: n,
            tags: r,
            extra: s,
            user: i,
            level: o,
            fingerprint: a || [],
            eventProcessors: c,
            propagationContext: u,
            sdkProcessingMetadata: l,
            transactionName: d,
            span: p
          }
        }
        applyToEvent(t, e = {}, n = []) {
          (0, u.e2)(t, this.getScopeData());
          const r = [...n, ...(0, a.lG)(), ...this._eventProcessors];
          return (0, a.jB)(r, t, e)
        }
        setSDKProcessingMetadata(t) {
          return this._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata,
            ...t
          }, this
        }
        setPropagationContext(t) {
          return this._propagationContext = t, this
        }
        getPropagationContext() {
          return this._propagationContext
        }
        captureException(t, e) {
          const n = e && e.event_id ? e.event_id : (0, i.eJ)();
          if (!this._client) return s.vF.warn("No client configured on scope - will not capture exception!"), n;
          const r = new Error("Sentry syntheticException");
          return this._client.captureException(t, {
            originalException: t,
            syntheticException: r,
            ...e,
            event_id: n
          }, this), n
        }
        captureMessage(t, e, n) {
          const r = n && n.event_id ? n.event_id : (0, i.eJ)();
          if (!this._client) return s.vF.warn("No client configured on scope - will not capture message!"), r;
          const o = new Error(t);
          return this._client.captureMessage(t, e, {
            originalException: t,
            syntheticException: o,
            ...n,
            event_id: r
          }, this), r
        }
        captureEvent(t, e) {
          const n = e && e.event_id ? e.event_id : (0, i.eJ)();
          return this._client ? (this._client.captureEvent(t, {
            ...e,
            event_id: n
          }, this), n) : (s.vF.warn("No client configured on scope - will not capture event!"), n)
        }
        _notifyScopeListeners() {
          this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
            t(this)
          }), this._notifyingListeners = !1)
        }
      }

      function p() {
        return l || (l = new d), l
      }

      function h() {
        return {
          traceId: (0, i.eJ)(),
          spanId: (0, i.eJ)().substring(16)
        }
      }
    },
    80775(t, e, n) {
      "use strict";
      n.d(e, {
        E1: () => a,
        JD: () => o,
        i_: () => r,
        sy: () => s,
        uT: () => i
      });
      const r = "sentry.source",
        s = "sentry.sample_rate",
        i = "sentry.op",
        o = "sentry.origin",
        a = "profile_id"
    },
    77516(t, e, n) {
      "use strict";
      n.d(e, {
        Vu: () => c,
        fj: () => o,
        qO: () => a
      });
      var r = n(86788),
        s = n(22423),
        i = n(98765);

      function o(t) {
        const e = (0, i.zf)(),
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
              return (0, s.Ce)({
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
              })
            }(n)
          };
        return t && a(n, t), n
      }

      function a(t, e = {}) {
        if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), t.did || e.did || (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || (0, i.zf)(), e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = 32 === e.sid.length ? e.sid : (0, r.eJ)()), void 0 !== e.init && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), "number" == typeof e.started && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
        else if ("number" == typeof e.duration) t.duration = e.duration;
        else {
          const e = t.timestamp - t.started;
          t.duration = e >= 0 ? e : 0
        }
        e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), "number" == typeof e.errors && (t.errors = e.errors), e.status && (t.status = e.status)
      }

      function c(t, e) {
        let n = {};
        e ? n = {
          status: e
        } : "ok" === t.status && (n = {
          status: "exited"
        }), a(t, n)
      }
    },
    48114(t, e, n) {
      "use strict";
      n.d(e, {
        k: () => u,
        l: () => c
      });
      var r = n(22423),
        s = n(37149),
        i = n(43031),
        o = n(6762),
        a = n(54975);

      function c(t, e, n) {
        const i = e.getOptions(),
          {
            publicKey: o
          } = e.getDsn() || {},
          {
            segment: a
          } = n && n.getUser() || {},
          c = (0, r.Ce)({
            environment: i.environment || s.U,
            release: i.release,
            user_segment: a,
            public_key: o,
            trace_id: t
          });
        return e.emit && e.emit("createDsc", c), c
      }

      function u(t) {
        const e = (0, i.KU)();
        if (!e) return {};
        const n = c((0, a.et)(t).trace_id || "", e, (0, i.o5)()),
          r = (0, o.z)(t);
        if (!r) return n;
        const s = r && r._frozenDynamicSamplingContext;
        if (s) return s;
        const {
          sampleRate: u,
          source: l
        } = r.metadata;
        null != u && (n.sample_rate = `${u}`);
        const d = (0, a.et)(r);
        return l && "url" !== l && (n.transaction = d.description), n.sampled = String((0, a.pK)(r)), e.emit && e.emit("createDsc", n), n
      }
    },
    69992(t, e, n) {
      "use strict";
      n.d(e, {
        o: () => u
      });
      var r = n(78176),
        s = n(37518);
      var i = n(50332),
        o = n(34367),
        a = n(61952),
        c = n(21926);

      function u(t, e, n = function(t) {
        const e = [];

        function n(t) {
          return e.splice(e.indexOf(t), 1)[0]
        }
        return {
          $: e,
          add: function(i) {
            if (!(void 0 === t || e.length < t)) return (0, s.xg)(new r.U("Not adding Promise because buffer limit was reached."));
            const o = i();
            return -1 === e.indexOf(o) && e.push(o), o.then(() => n(o)).then(null, () => n(o).then(null, () => {})), o
          },
          drain: function(t) {
            return new s.T2((n, r) => {
              let i = e.length;
              if (!i) return n(!0);
              const o = setTimeout(() => {
                t && t > 0 && n(!1)
              }, t);
              e.forEach(t => {
                (0, s.XW)(t).then(() => {
                  --i || (clearTimeout(o), n(!0))
                }, r)
              })
            })
          }
        }
      }(t.bufferSize || 30)) {
        let u = {};

        function d(d) {
          const p = [];
          if ((0, i.yH)(d, (e, n) => {
              const r = (0, i.zk)(n);
              if ((0, o.Jz)(u, r)) {
                const s = l(e, n);
                t.recordDroppedEvent("ratelimit_backoff", r, s)
              } else p.push(e)
            }), 0 === p.length) return (0, s.XW)();
          const h = (0, i.h4)(d[0], p),
            m = e => {
              (0, i.yH)(h, (n, r) => {
                const s = l(n, r);
                t.recordDroppedEvent(e, (0, i.zk)(r), s)
              })
            };
          return n.add(() => e({
            body: (0, i.bN)(h, t.textEncoder)
          }).then(t => (void 0 !== t.statusCode && (t.statusCode < 200 || t.statusCode >= 300) && c.T && a.vF.warn(`Sentry responded with status code ${t.statusCode} to sent event.`), u = (0, o.wq)(u, t), t), t => {
            throw m("network_error"), t
          })).then(t => t, t => {
            if (t instanceof r.U) return c.T && a.vF.error("Skipped sending event because buffer is full."), m("queue_overflow"), (0, s.XW)();
            throw t
          })
        }
        return d.__sentry__baseTransport__ = !0, {
          send: d,
          flush: t => n.drain(t)
        }
      }

      function l(t, e) {
        if ("event" === e || "transaction" === e) return Array.isArray(t) ? t[1] : void 0
      }
    },
    72410(t, e, n) {
      "use strict";
      n.d(e, {
        N: () => a
      });
      var r = n(85771),
        s = n(50332),
        i = n(17892);

      function o(t, e) {
        let n;
        return (0, s.yH)(t, (t, r) => (e.includes(r) && (n = Array.isArray(t) ? t[1] : void 0), !!n)), n
      }

      function a(t, e) {
        return n => {
          const a = t(n),
            c = new Map;

          function u(e, s) {
            const a = s ? `${e}:${s}` : e;
            let u = c.get(a);
            if (!u) {
              const l = (0, r.hH)(e);
              if (!l) return;
              const d = (0, i.Z)(l, n.tunnel);
              u = s ? function(t, e) {
                return n => {
                  const r = t(n);
                  return {
                    ...r,
                    send: async t => {
                      const n = o(t, ["event", "transaction", "profile", "replay_event"]);
                      return n && (n.release = e), r.send(t)
                    }
                  }
                }
              }(t, s)({
                ...n,
                url: d
              }) : t({
                ...n,
                url: d
              }), c.set(a, u)
            }
            return [e, u]
          }
          return {
            send: async function(t) {
              const n = e({
                envelope: t,
                getEvent: function(e) {
                  const n = e && e.length ? e : ["event"];
                  return o(t, n)
                }
              }).map(t => "string" == typeof t ? u(t, void 0) : u(t.dsn, t.release)).filter(t => !!t);
              return 0 === n.length && n.push(["", a]), (await Promise.all(n.map(([e, n]) => n.send(function(t, e) {
                return (0, s.h4)(e ? {
                  ...t[0],
                  dsn: e
                } : t[0], t[1])
              }(t, e)))))[0]
            },
            flush: async function(t) {
              const e = [await a.flush(t)];
              for (const [, n] of c) e.push(await n.flush(t));
              return e.every(t => t)
            }
          }
        }
      }
    },
    45981(t, e, n) {
      "use strict";
      n.d(e, {
        Rg: () => u,
        e2: () => c
      });
      var r = n(86788),
        s = n(22423),
        i = n(48114),
        o = n(6762),
        a = n(54975);

      function c(t, e) {
        const {
          fingerprint: n,
          span: c,
          breadcrumbs: u,
          sdkProcessingMetadata: l
        } = e;
        ! function(t, e) {
          const {
            extra: n,
            tags: r,
            user: i,
            contexts: o,
            level: a,
            transactionName: c
          } = e, u = (0, s.Ce)(n);
          u && Object.keys(u).length && (t.extra = {
            ...u,
            ...t.extra
          });
          const l = (0, s.Ce)(r);
          l && Object.keys(l).length && (t.tags = {
            ...l,
            ...t.tags
          });
          const d = (0, s.Ce)(i);
          d && Object.keys(d).length && (t.user = {
            ...d,
            ...t.user
          });
          const p = (0, s.Ce)(o);
          p && Object.keys(p).length && (t.contexts = {
            ...p,
            ...t.contexts
          }), a && (t.level = a), c && (t.transaction = c)
        }(t, e), c && function(t, e) {
            t.contexts = {
              trace: (0, a.kX)(e),
              ...t.contexts
            };
            const n = (0, o.z)(e);
            if (n) {
              t.sdkProcessingMetadata = {
                dynamicSamplingContext: (0, i.k)(e),
                ...t.sdkProcessingMetadata
              };
              const r = (0, a.et)(n).description;
              r && (t.tags = {
                transaction: r,
                ...t.tags
              })
            }
          }(t, c),
          function(t, e) {
            t.fingerprint = t.fingerprint ? (0, r.k9)(t.fingerprint) : [], e && (t.fingerprint = t.fingerprint.concat(e)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
          }(t, n),
          function(t, e) {
            const n = [...t.breadcrumbs || [], ...e];
            t.breadcrumbs = n.length ? n : void 0
          }(t, u),
          function(t, e) {
            t.sdkProcessingMetadata = {
              ...t.sdkProcessingMetadata,
              ...e
            }
          }(t, l)
      }

      function u(t, e) {
        const {
          extra: n,
          tags: r,
          user: s,
          contexts: i,
          level: o,
          sdkProcessingMetadata: a,
          breadcrumbs: c,
          fingerprint: u,
          eventProcessors: d,
          attachments: p,
          propagationContext: h,
          transactionName: m,
          span: f
        } = e;
        l(t, "extra", n), l(t, "tags", r), l(t, "user", s), l(t, "contexts", i), l(t, "sdkProcessingMetadata", a), o && (t.level = o), m && (t.transactionName = m), f && (t.span = f), c.length && (t.breadcrumbs = [...t.breadcrumbs, ...c]), u.length && (t.fingerprint = [...t.fingerprint, ...u]), d.length && (t.eventProcessors = [...t.eventProcessors, ...d]), p.length && (t.attachments = [...t.attachments, ...p]), t.propagationContext = {
          ...t.propagationContext,
          ...h
        }
      }

      function l(t, e, n) {
        if (n && Object.keys(n).length) {
          t[e] = {
            ...t[e]
          };
          for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[e][r] = n[r])
        }
      }
    },
    6762(t, e, n) {
      "use strict";

      function r(t) {
        return t.transaction
      }
      n.d(e, {
        z: () => r
      })
    },
    41397(t, e, n) {
      "use strict";
      n.d(e, {
        li: () => f,
        mG: () => h
      });
      var r = n(9929),
        s = n(86788),
        i = n(50193),
        o = n(68289),
        a = n(98765),
        c = n(37149),
        u = n(95921),
        l = n(99616),
        d = n(45981),
        p = n(54975);

      function h(t, e, n, h, f, g) {
        const {
          normalizeDepth: y = 3,
          normalizeMaxBreadth: _ = 1e3
        } = t, v = {
          ...e,
          event_id: e.event_id || n.event_id || (0, s.eJ)(),
          timestamp: e.timestamp || (0, a.lu)()
        }, S = n.integrations || t.integrations.map(t => t.name);
        ! function(t, e) {
          const {
            environment: n,
            release: r,
            dist: s,
            maxValueLength: i = 250
          } = e;
          "environment" in t || (t.environment = "environment" in e ? n : c.U), void 0 === t.release && void 0 !== r && (t.release = r), void 0 === t.dist && void 0 !== s && (t.dist = s), t.message && (t.message = (0, o.xv)(t.message, i));
          const a = t.exception && t.exception.values && t.exception.values[0];
          a && a.value && (a.value = (0, o.xv)(a.value, i));
          const u = t.request;
          u && u.url && (u.url = (0, o.xv)(u.url, i))
        }(v, t),
        function(t, e) {
          e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [...t.sdk.integrations || [], ...e])
        }(v, S), void 0 === e.type && function(t, e) {
          const n = r.OW._sentryDebugIds;
          if (!n) return;
          let s;
          const i = m.get(e);
          i ? s = i : (s = new Map, m.set(e, s));
          const o = Object.keys(n).reduce((t, r) => {
            let i;
            const o = s.get(r);
            o ? i = o : (i = e(r), s.set(r, i));
            for (let e = i.length - 1; e >= 0; e--) {
              const s = i[e];
              if (s.filename) {
                t[s.filename] = n[r];
                break
              }
            }
            return t
          }, {});
          try {
            t.exception.values.forEach(t => {
              t.stacktrace.frames.forEach(t => {
                t.filename && (t.debug_id = o[t.filename])
              })
            })
          } catch (t) {}
        }(v, t.stackParser);
        const b = function(t, e) {
          if (!e) return t;
          const n = t ? t.clone() : new l.HG;
          return n.update(e), n
        }(h, n.captureContext);
        n.mechanism && (0, s.M6)(v, n.mechanism);
        const k = f && f.getEventProcessors ? f.getEventProcessors() : [],
          T = (0, l.m6)().getScopeData();
        if (g) {
          const t = g.getScopeData();
          (0, d.Rg)(T, t)
        }
        if (b) {
          const t = b.getScopeData();
          (0, d.Rg)(T, t)
        }
        const w = [...n.attachments || [], ...T.attachments];
        w.length && (n.attachments = w), (0, d.e2)(v, T);
        const E = [...k, ...(0, u.lG)(), ...T.eventProcessors];
        return (0, u.jB)(E, v, n).then(t => (t && function(t) {
          const e = {};
          try {
            t.exception.values.forEach(t => {
              t.stacktrace.frames.forEach(t => {
                t.debug_id && (t.abs_path ? e[t.abs_path] = t.debug_id : t.filename && (e[t.filename] = t.debug_id), delete t.debug_id)
              })
            })
          } catch (t) {}
          if (0 === Object.keys(e).length) return;
          t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
          const n = t.debug_meta.images;
          Object.keys(e).forEach(t => {
            n.push({
              type: "sourcemap",
              code_file: t,
              debug_id: e[t]
            })
          })
        }(t), "number" == typeof y && y > 0 ? function(t, e, n) {
          if (!t) return null;
          const r = {
            ...t,
            ...t.breadcrumbs && {
              breadcrumbs: t.breadcrumbs.map(t => ({
                ...t,
                ...t.data && {
                  data: (0, i.S8)(t.data, e, n)
                }
              }))
            },
            ...t.user && {
              user: (0, i.S8)(t.user, e, n)
            },
            ...t.contexts && {
              contexts: (0, i.S8)(t.contexts, e, n)
            },
            ...t.extra && {
              extra: (0, i.S8)(t.extra, e, n)
            }
          };
          return t.contexts && t.contexts.trace && r.contexts && (r.contexts.trace = t.contexts.trace, t.contexts.trace.data && (r.contexts.trace.data = (0, i.S8)(t.contexts.trace.data, e, n))), t.spans && (r.spans = t.spans.map(t => {
            const r = (0, p.et)(t).data;
            return r && (t.data = (0, i.S8)(r, e, n)), t
          })), r
        }(t, y, _) : t))
      }
      const m = new WeakMap;

      function f(t) {
        if (t) return function(t) {
          return t instanceof l.HG || "function" == typeof t
        }(t) || function(t) {
          return Object.keys(t).some(t => g.includes(t))
        }(t) ? {
          captureContext: t
        } : t
      }
      const g = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"]
    },
    54975(t, e, n) {
      "use strict";
      n.d(e, {
        CC: () => o,
        Qh: () => u,
        aO: () => a,
        cI: () => l,
        et: () => p,
        kX: () => c,
        pK: () => h
      });
      var r = n(22423),
        s = n(98765),
        i = n(50160);
      const o = 0,
        a = 1;

      function c(t) {
        const {
          spanId: e,
          traceId: n
        } = t.spanContext(), {
          data: s,
          op: i,
          parent_span_id: o,
          status: a,
          tags: c,
          origin: u
        } = p(t);
        return (0, r.Ce)({
          data: s,
          op: i,
          parent_span_id: o,
          span_id: e,
          status: a,
          tags: c,
          trace_id: n,
          origin: u
        })
      }

      function u(t) {
        const {
          traceId: e,
          spanId: n
        } = t.spanContext(), r = h(t);
        return (0, i.TC)(e, n, r)
      }

      function l(t) {
        return "number" == typeof t ? d(t) : Array.isArray(t) ? t[0] + t[1] / 1e9 : t instanceof Date ? d(t.getTime()) : (0, s.zf)()
      }

      function d(t) {
        return t > 9999999999 ? t / 1e3 : t
      }

      function p(t) {
        return function(t) {
          return "function" == typeof t.getSpanJSON
        }(t) ? t.getSpanJSON() : "function" == typeof t.toJSON ? t.toJSON() : {}
      }

      function h(t) {
        const {
          traceFlags: e
        } = t.spanContext();
        return Boolean(e & a)
      }
    },
    91604(t, e, n) {
      "use strict";
      n.d(e, {
        M: () => r
      });
      const r = "7.120.4"
    },
    91058(t, e, n) {
      "use strict";
      n.d(e, {
        T: () => r
      });
      const r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
    },
    98485(t, e, n) {
      "use strict";
      n.d(e, {
        sn: () => a
      });
      var r = n(22742),
        s = n(61952),
        i = n(91058);
      const o = "Dedupe",
        a = (0, r._C)(() => {
          let t;
          return {
            name: o,
            setupOnce() {},
            processEvent(e) {
              if (e.type) return e;
              try {
                if (function(t, e) {
                    return !!e && (!! function(t, e) {
                      const n = t.message,
                        r = e.message;
                      return !(!n && !r) && (!(n && !r || !n && r) && (n === r && (!!u(t, e) && !!c(t, e))))
                    }(t, e) || !! function(t, e) {
                      const n = l(e),
                        r = l(t);
                      return !(!n || !r) && (n.type === r.type && n.value === r.value && (!!u(t, e) && !!c(t, e)))
                    }(t, e))
                  }(e, t)) return i.T && s.vF.warn("Event dropped due to being a duplicate of previously captured event."), null
              } catch (t) {}
              return t = e
            }
          }
        });

      function c(t, e) {
        let n = d(t),
          r = d(e);
        if (!n && !r) return !0;
        if (n && !r || !n && r) return !1;
        if (r.length !== n.length) return !1;
        for (let t = 0; t < r.length; t++) {
          const e = r[t],
            s = n[t];
          if (e.filename !== s.filename || e.lineno !== s.lineno || e.colno !== s.colno || e.function !== s.function) return !1
        }
        return !0
      }

      function u(t, e) {
        let n = t.fingerprint,
          r = e.fingerprint;
        if (!n && !r) return !0;
        if (n && !r || !n && r) return !1;
        try {
          return !(n.join("") !== r.join(""))
        } catch (t) {
          return !1
        }
      }

      function l(t) {
        return t.exception && t.exception.values && t.exception.values[0]
      }

      function d(t) {
        const e = t.exception;
        if (e) try {
          return e.values[0].stacktrace.frames
        } catch (t) {
          return
        }
      }(0, r.F)(o, a)
    },
    51994(t, e, n) {
      "use strict";
      n.d(e, {
        X: () => l
      });
      var r = n(22742),
        s = n(16732),
        i = n(61952),
        o = n(50193),
        a = n(22423),
        c = n(91058);
      const u = "ExtraErrorData",
        l = (0, r._C)((t = {}) => {
          const e = t.depth || 3,
            n = t.captureErrorCause || !1;
          return {
            name: u,
            setupOnce() {},
            processEvent: (t, r) => function(t, e = {}, n, r) {
              if (!e.originalException || !(0, s.bJ)(e.originalException)) return t;
              const u = e.originalException.name || e.originalException.constructor.name,
                l = function(t, e) {
                  try {
                    const n = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON"],
                      r = {};
                    for (const e of Object.keys(t)) {
                      if (-1 !== n.indexOf(e)) continue;
                      const i = t[e];
                      r[e] = (0, s.bJ)(i) ? i.toString() : i
                    }
                    if (e && void 0 !== t.cause && (r.cause = (0, s.bJ)(t.cause) ? t.cause.toString() : t.cause), "function" == typeof t.toJSON) {
                      const e = t.toJSON();
                      for (const t of Object.keys(e)) {
                        const n = e[t];
                        r[t] = (0, s.bJ)(n) ? n.toString() : n
                      }
                    }
                    return r
                  } catch (t) {
                    c.T && i.vF.error("Unable to extract extra data from the Error object:", t)
                  }
                  return null
                }(e.originalException, r);
              if (l) {
                const e = {
                    ...t.contexts
                  },
                  r = (0, o.S8)(l, n);
                return (0, s.Qd)(r) && ((0, a.my)(r, "__sentry_skip_normalization__", !0), e[u] = r), {
                  ...t,
                  contexts: e
                }
              }
              return t
            }(t, r, e, n)
          }
        });
      (0, r.F)(u, l)
    },
    46287(t, e, n) {
      "use strict";

      function r(t) {
        let e, n = t[0],
          r = 1;
        for (; r < t.length;) {
          const s = t[r],
            i = t[r + 1];
          if (r += 2, ("optionalAccess" === s || "optionalCall" === s) && null == n) return;
          "access" === s || "optionalAccess" === s ? (e = n, n = i(n)) : "call" !== s && "optionalCall" !== s || (n = i((...t) => n.call(e, ...t)), e = void 0)
        }
        return n
      }
      n.d(e, {
        J$: () => Vn
      });
      var s = n(43031);

      function i(t) {
        return "/" === t[t.length - 1] ? t.slice(0, -1) : t
      }
      var o = n(3856),
        a = n(41397),
        c = n(54667),
        u = n(54975),
        l = n(80775),
        d = n(9929),
        p = n(50193),
        h = n(22423),
        m = n(59834),
        f = n(98765),
        g = n(61952),
        y = n(86788),
        _ = n(68392),
        v = n(68289),
        S = n(80094),
        b = n(7250),
        k = n(27084),
        T = n(50332),
        w = n(34367),
        E = n(45616);

      function x() {
        return "undefined" != typeof window && (!(0, E.wD)() || void 0 !== d.OW.process && "renderer" === d.OW.process.type)
      }
      var I = n(8312);
      const C = d.OW,
        R = "sentryReplaySession",
        M = "Unable to send Replay",
        O = 15e4,
        D = 5e3,
        A = 2e7;

      function N(t) {
        let e, n = t[0],
          r = 1;
        for (; r < t.length;) {
          const s = t[r],
            i = t[r + 1];
          if (r += 2, ("optionalAccess" === s || "optionalCall" === s) && null == n) return;
          "access" === s || "optionalAccess" === s ? (e = n, n = i(n)) : "call" !== s && "optionalCall" !== s || (n = i((...t) => n.call(e, ...t)), e = void 0)
        }
        return n
      }
      var F;

      function L(t) {
        const e = N([t, "optionalAccess", t => t.host]);
        return Boolean(N([e, "optionalAccess", t => t.shadowRoot]) === t)
      }

      function j(t) {
        return "[object ShadowRoot]" === Object.prototype.toString.call(t)
      }

      function P(t) {
        try {
          const n = t.rules || t.cssRules;
          return n ? ((e = Array.from(n, $).join("")).includes(" background-clip: text;") && !e.includes(" -webkit-background-clip: text;") && (e = e.replace(" background-clip: text;", " -webkit-background-clip: text; background-clip: text;")), e) : null
        } catch (t) {
          return null
        }
        var e
      }

      function $(t) {
        let e;
        if (function(t) {
            return "styleSheet" in t
          }(t)) try {
          e = P(t.styleSheet) || function(t) {
            const {
              cssText: e
            } = t;
            if (e.split('"').length < 3) return e;
            const n = ["@import", `url(${JSON.stringify(t.href)})`];
            return "" === t.layerName ? n.push("layer") : t.layerName && n.push(`layer(${t.layerName})`), t.supportsText && n.push(`supports(${t.supportsText})`), t.media.length && n.push(t.media.mediaText), n.join(" ") + ";"
          }(t)
        } catch (t) {} else if (function(t) {
            return "selectorText" in t
          }(t) && t.selectorText.includes(":")) return t.cssText.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2");
        return e || t.cssText
      }! function(t) {
        t[t.Document = 0] = "Document", t[t.DocumentType = 1] = "DocumentType", t[t.Element = 2] = "Element", t[t.Text = 3] = "Text", t[t.CDATA = 4] = "CDATA", t[t.Comment = 5] = "Comment"
      }(F || (F = {}));
      class U {
        constructor() {
          this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
        }
        getId(t) {
          if (!t) return -1;
          return null != (e = N([this, "access", t => t.getMeta, "call", e => e(t), "optionalAccess", t => t.id])) ? e : -1;
          var e
        }
        getNode(t) {
          return this.idNodeMap.get(t) || null
        }
        getIds() {
          return Array.from(this.idNodeMap.keys())
        }
        getMeta(t) {
          return this.nodeMetaMap.get(t) || null
        }
        removeNodeFromMap(t) {
          const e = this.getId(t);
          this.idNodeMap.delete(e), t.childNodes && t.childNodes.forEach(t => this.removeNodeFromMap(t))
        }
        has(t) {
          return this.idNodeMap.has(t)
        }
        hasNode(t) {
          return this.nodeMetaMap.has(t)
        }
        add(t, e) {
          const n = e.id;
          this.idNodeMap.set(n, t), this.nodeMetaMap.set(t, e)
        }
        replace(t, e) {
          const n = this.getNode(t);
          if (n) {
            const t = this.nodeMetaMap.get(n);
            t && this.nodeMetaMap.set(e, t)
          }
          this.idNodeMap.set(t, e)
        }
        reset() {
          this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
        }
      }

      function B({
        maskInputOptions: t,
        tagName: e,
        type: n
      }) {
        return "OPTION" === e && (e = "SELECT"), Boolean(t[e.toLowerCase()] || n && t[n] || "password" === n || "INPUT" === e && !n && t.text)
      }

      function H({
        isMasked: t,
        element: e,
        value: n,
        maskInputFn: r
      }) {
        let s = n || "";
        return t ? (r && (s = r(s, e)), "*".repeat(s.length)) : s
      }

      function z(t) {
        return t.toLowerCase()
      }

      function W(t) {
        return t.toUpperCase()
      }
      const q = "__rrweb_original__";

      function J(t) {
        const e = t.type;
        return t.hasAttribute("data-rr-is-password") ? "password" : e ? z(e) : null
      }

      function K(t, e, n) {
        return "INPUT" !== e || "radio" !== n && "checkbox" !== n ? t.value : t.getAttribute("value") || ""
      }
      let G = 1;
      const Y = new RegExp("[^a-z0-9-_:]");

      function X() {
        return G++
      }
      let V, Q;
      const Z = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        tt = /^(?:[a-z+]+:)?\/\//i,
        et = /^www\..*/i,
        nt = /^(data:)([^,]*),(.*)/i;

      function rt(t, e) {
        return (t || "").replace(Z, (t, n, r, s, i, o) => {
          const a = r || i || o,
            c = n || s || "";
          if (!a) return t;
          if (tt.test(a) || et.test(a)) return `url(${c}${a}${c})`;
          if (nt.test(a)) return `url(${c}${a}${c})`;
          if ("/" === a[0]) return `url(${c}${function(t){let e="";return e=t.indexOf("//")>-1?t.split("/").slice(0,3).join("/"):t.split("/")[0],e=e.split("?")[0],e}(e)+a}${c})`;
          const u = e.split("/"),
            l = a.split("/");
          u.pop();
          for (const t of l) "." !== t && (".." === t ? u.pop() : u.push(t));
          return `url(${c}${u.join("/")}${c})`
        })
      }
      const st = /^[^ \t\n\r\u000c]+/,
        it = /^[, \t\n\r\u000c]+/;

      function ot(t, e) {
        if (!e || "" === e.trim()) return e;
        const n = t.createElement("a");
        return n.href = e, n.href
      }

      function at() {
        const t = document.createElement("a");
        return t.href = "", t.href
      }

      function ct(t, e, n, r, s, i) {
        return r ? "src" === n || "href" === n && ("use" !== e || "#" !== r[0]) || "xlink:href" === n && "#" !== r[0] ? ot(t, r) : "background" !== n || "table" !== e && "td" !== e && "th" !== e ? "srcset" === n ? function(t, e) {
          if ("" === e.trim()) return e;
          let n = 0;

          function r(t) {
            let r;
            const s = t.exec(e.substring(n));
            return s ? (r = s[0], n += r.length, r) : ""
          }
          const s = [];
          for (; r(it), !(n >= e.length);) {
            let i = r(st);
            if ("," === i.slice(-1)) i = ot(t, i.substring(0, i.length - 1)), s.push(i);
            else {
              let r = "";
              i = ot(t, i);
              let o = !1;
              for (;;) {
                const t = e.charAt(n);
                if ("" === t) {
                  s.push((i + r).trim());
                  break
                }
                if (o) ")" === t && (o = !1);
                else {
                  if ("," === t) {
                    n += 1, s.push((i + r).trim());
                    break
                  }
                  "(" === t && (o = !0)
                }
                r += t, n += 1
              }
            }
          }
          return s.join(", ")
        }(t, r) : "style" === n ? rt(r, at()) : "object" === e && "data" === n ? ot(t, r) : "function" == typeof i ? i(n, r, s) : r : ot(t, r) : r
      }

      function ut(t, e, n) {
        return ("video" === t || "audio" === t) && "autoplay" === e
      }

      function lt(t, e, n = 1 / 0, r = 0) {
        return t ? t.nodeType !== t.ELEMENT_NODE || r > n ? -1 : e(t) ? r : lt(t.parentNode, e, n, r + 1) : -1
      }

      function dt(t, e) {
        return n => {
          const r = n;
          if (null === r) return !1;
          try {
            if (t)
              if ("string" == typeof t) {
                if (r.matches(`.${t}`)) return !0
              } else if (function(t, e) {
                for (let n = t.classList.length; n--;) {
                  const r = t.classList[n];
                  if (e.test(r)) return !0
                }
                return !1
              }(r, t)) return !0;
            return !(!e || !r.matches(e))
          } catch (t) {
            return !1
          }
        }
      }

      function pt(t, e, n, r, s, i) {
        try {
          const o = t.nodeType === t.ELEMENT_NODE ? t : t.parentElement;
          if (null === o) return !1;
          if ("INPUT" === o.tagName) {
            const t = o.getAttribute("autocomplete");
            if (["current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc"].includes(t)) return !0
          }
          let a = -1,
            c = -1;
          if (i) {
            if (c = lt(o, dt(r, s)), c < 0) return !0;
            a = lt(o, dt(e, n), c >= 0 ? c : 1 / 0)
          } else {
            if (a = lt(o, dt(e, n)), a < 0) return !1;
            c = lt(o, dt(r, s), a >= 0 ? a : 1 / 0)
          }
          return a >= 0 ? !(c >= 0) || a <= c : !(c >= 0 || !i)
        } catch (t) {}
        return !!i
      }

      function ht(t) {
        return null == t ? "" : t.toLowerCase()
      }

      function mt(t, e) {
        const {
          doc: n,
          mirror: r,
          blockClass: s,
          blockSelector: i,
          unblockSelector: o,
          maskAllText: a,
          maskTextClass: c,
          unmaskTextClass: u,
          maskTextSelector: l,
          unmaskTextSelector: d,
          skipChild: p = !1,
          inlineStylesheet: h = !0,
          maskInputOptions: m = {},
          maskAttributeFn: f,
          maskTextFn: g,
          maskInputFn: y,
          slimDOMOptions: _,
          dataURLOptions: v = {},
          inlineImages: S = !1,
          recordCanvas: b = !1,
          onSerialize: k,
          onIframeLoad: T,
          iframeLoadTimeout: w = 5e3,
          onStylesheetLoad: E,
          stylesheetLoadTimeout: x = 5e3,
          keepIframeSrcFn: I = () => !1,
          newlyAddedElement: C = !1
        } = e;
        let {
          preserveWhiteSpace: R = !0
        } = e;
        const M = function(t, e) {
          const {
            doc: n,
            mirror: r,
            blockClass: s,
            blockSelector: i,
            unblockSelector: o,
            maskAllText: a,
            maskAttributeFn: c,
            maskTextClass: u,
            unmaskTextClass: l,
            maskTextSelector: d,
            unmaskTextSelector: p,
            inlineStylesheet: h,
            maskInputOptions: m = {},
            maskTextFn: f,
            maskInputFn: g,
            dataURLOptions: y = {},
            inlineImages: _,
            recordCanvas: v,
            keepIframeSrcFn: S,
            newlyAddedElement: b = !1
          } = e, k = function(t, e) {
            if (!e.hasNode(t)) return;
            const n = e.getId(t);
            return 1 === n ? void 0 : n
          }(n, r);
          switch (t.nodeType) {
            case t.DOCUMENT_NODE:
              return "CSS1Compat" !== t.compatMode ? {
                type: F.Document,
                childNodes: [],
                compatMode: t.compatMode
              } : {
                type: F.Document,
                childNodes: []
              };
            case t.DOCUMENT_TYPE_NODE:
              return {
                type: F.DocumentType, name: t.name, publicId: t.publicId, systemId: t.systemId, rootId: k
              };
            case t.ELEMENT_NODE:
              return function(t, e) {
                const {
                  doc: n,
                  blockClass: r,
                  blockSelector: s,
                  unblockSelector: i,
                  inlineStylesheet: o,
                  maskInputOptions: a = {},
                  maskAttributeFn: c,
                  maskInputFn: u,
                  dataURLOptions: l = {},
                  inlineImages: d,
                  recordCanvas: p,
                  keepIframeSrcFn: h,
                  newlyAddedElement: m = !1,
                  rootId: f,
                  maskAllText: g,
                  maskTextClass: y,
                  unmaskTextClass: _,
                  maskTextSelector: v,
                  unmaskTextSelector: S
                } = e, b = function(t, e, n, r) {
                  try {
                    if (r && t.matches(r)) return !1;
                    if ("string" == typeof e) {
                      if (t.classList.contains(e)) return !0
                    } else
                      for (let n = t.classList.length; n--;) {
                        const r = t.classList[n];
                        if (e.test(r)) return !0
                      }
                    if (n) return t.matches(n)
                  } catch (t) {}
                  return !1
                }(t, r, s, i), k = function(t) {
                  if (t instanceof HTMLFormElement) return "form";
                  const e = z(t.tagName);
                  return Y.test(e) ? "div" : e
                }(t);
                let T = {};
                const w = t.attributes.length;
                for (let e = 0; e < w; e++) {
                  const r = t.attributes[e];
                  r.name && !ut(k, r.name, r.value) && (T[r.name] = ct(n, k, z(r.name), r.value, t, c))
                }
                if ("link" === k && o) {
                  const e = Array.from(n.styleSheets).find(e => e.href === t.href);
                  let r = null;
                  e && (r = P(e)), r && (delete T.rel, delete T.href, T._cssText = rt(r, e.href))
                }
                if ("style" === k && t.sheet && !(t.innerText || t.textContent || "").trim().length) {
                  const e = P(t.sheet);
                  e && (T._cssText = rt(e, at()))
                }
                if ("input" === k || "textarea" === k || "select" === k || "option" === k) {
                  const e = t,
                    n = J(e),
                    r = K(e, W(k), n),
                    s = e.checked;
                  if ("submit" !== n && "button" !== n && r) {
                    const t = pt(e, y, v, _, S, B({
                      type: n,
                      tagName: W(k),
                      maskInputOptions: a
                    }));
                    T.value = H({
                      isMasked: t,
                      element: e,
                      value: r,
                      maskInputFn: u
                    })
                  }
                  s && (T.checked = s)
                }
                if ("option" === k && (t.selected && !a.select ? T.selected = !0 : delete T.selected), "canvas" === k && p)
                  if ("2d" === t.__context)(function(t) {
                    const e = t.getContext("2d");
                    if (!e) return !0;
                    for (let n = 0; n < t.width; n += 50)
                      for (let r = 0; r < t.height; r += 50) {
                        const s = e.getImageData,
                          i = q in s ? s[q] : s;
                        if (new Uint32Array(i.call(e, n, r, Math.min(50, t.width - n), Math.min(50, t.height - r)).data.buffer).some(t => 0 !== t)) return !1
                      }
                    return !0
                  })(t) || (T.rr_dataURL = t.toDataURL(l.type, l.quality));
                  else if (!("__context" in t)) {
                  const e = t.toDataURL(l.type, l.quality),
                    n = document.createElement("canvas");
                  n.width = t.width, n.height = t.height, e !== n.toDataURL(l.type, l.quality) && (T.rr_dataURL = e)
                }
                if ("img" === k && d) {
                  V || (V = n.createElement("canvas"), Q = V.getContext("2d"));
                  const e = t,
                    r = e.crossOrigin;
                  e.crossOrigin = "anonymous";
                  const s = () => {
                    e.removeEventListener("load", s);
                    try {
                      V.width = e.naturalWidth, V.height = e.naturalHeight, Q.drawImage(e, 0, 0), T.rr_dataURL = V.toDataURL(l.type, l.quality)
                    } catch (t) {
                      console.warn(`Cannot inline img src=${e.currentSrc}! Error: ${t}`)
                    }
                    r ? T.crossOrigin = r : e.removeAttribute("crossorigin")
                  };
                  e.complete && 0 !== e.naturalWidth ? s() : e.addEventListener("load", s)
                }
                if ("audio" !== k && "video" !== k || (T.rr_mediaState = t.paused ? "paused" : "played", T.rr_mediaCurrentTime = t.currentTime), m || (t.scrollLeft && (T.rr_scrollLeft = t.scrollLeft), t.scrollTop && (T.rr_scrollTop = t.scrollTop)), b) {
                  const {
                    width: e,
                    height: n
                  } = t.getBoundingClientRect();
                  T = {
                    class: T.class,
                    rr_width: `${e}px`,
                    rr_height: `${n}px`
                  }
                }
                let E;
                "iframe" !== k || h(T.src) || (t.contentDocument || (T.rr_src = T.src), delete T.src);
                try {
                  customElements.get(k) && (E = !0)
                } catch (t) {}
                return {
                  type: F.Element,
                  tagName: k,
                  attributes: T,
                  childNodes: [],
                  isSVG: (x = t, Boolean("svg" === x.tagName || x.ownerSVGElement) || void 0),
                  needBlock: b,
                  rootId: f,
                  isCustom: E
                };
                var x
              }(t, {
                doc: n,
                blockClass: s,
                blockSelector: i,
                unblockSelector: o,
                inlineStylesheet: h,
                maskAttributeFn: c,
                maskInputOptions: m,
                maskInputFn: g,
                dataURLOptions: y,
                inlineImages: _,
                recordCanvas: v,
                keepIframeSrcFn: S,
                newlyAddedElement: b,
                rootId: k,
                maskAllText: a,
                maskTextClass: u,
                unmaskTextClass: l,
                maskTextSelector: d,
                unmaskTextSelector: p
              });
            case t.TEXT_NODE:
              return function(t, e) {
                const {
                  maskAllText: n,
                  maskTextClass: r,
                  unmaskTextClass: s,
                  maskTextSelector: i,
                  unmaskTextSelector: o,
                  maskTextFn: a,
                  maskInputOptions: c,
                  maskInputFn: u,
                  rootId: l
                } = e, d = t.parentNode && t.parentNode.tagName;
                let p = t.textContent;
                const h = "STYLE" === d || void 0,
                  m = "SCRIPT" === d || void 0,
                  f = "TEXTAREA" === d || void 0;
                if (h && p) {
                  try {
                    t.nextSibling || t.previousSibling || N([t, "access", t => t.parentNode, "access", t => t.sheet, "optionalAccess", t => t.cssRules]) && (p = P(t.parentNode.sheet))
                  } catch (e) {
                    console.warn(`Cannot get CSS styles from text's parentNode. Error: ${e}`, t)
                  }
                  p = rt(p, at())
                }
                m && (p = "SCRIPT_PLACEHOLDER");
                const g = pt(t, r, i, s, o, n);
                return h || m || f || !p || !g || (p = a ? a(p, t.parentElement) : p.replace(/[\S]/g, "*")), f && p && (c.textarea || g) && (p = u ? u(p, t.parentNode) : p.replace(/[\S]/g, "*")), "OPTION" === d && p && (p = H({
                  isMasked: pt(t, r, i, s, o, B({
                    type: null,
                    tagName: d,
                    maskInputOptions: c
                  })),
                  element: t,
                  value: p,
                  maskInputFn: u
                })), {
                  type: F.Text,
                  textContent: p || "",
                  isStyle: h,
                  rootId: l
                }
              }(t, {
                maskAllText: a,
                maskTextClass: u,
                unmaskTextClass: l,
                maskTextSelector: d,
                unmaskTextSelector: p,
                maskTextFn: f,
                maskInputOptions: m,
                maskInputFn: g,
                rootId: k
              });
            case t.CDATA_SECTION_NODE:
              return {
                type: F.CDATA, textContent: "", rootId: k
              };
            case t.COMMENT_NODE:
              return {
                type: F.Comment, textContent: t.textContent || "", rootId: k
              };
            default:
              return !1
          }
        }(t, {
          doc: n,
          mirror: r,
          blockClass: s,
          blockSelector: i,
          maskAllText: a,
          unblockSelector: o,
          maskTextClass: c,
          unmaskTextClass: u,
          maskTextSelector: l,
          unmaskTextSelector: d,
          inlineStylesheet: h,
          maskInputOptions: m,
          maskAttributeFn: f,
          maskTextFn: g,
          maskInputFn: y,
          dataURLOptions: v,
          inlineImages: S,
          recordCanvas: b,
          keepIframeSrcFn: I,
          newlyAddedElement: C
        });
        if (!M) return console.warn(t, "not serialized"), null;
        let O;
        O = r.hasNode(t) ? r.getId(t) : ! function(t, e) {
          if (e.comment && t.type === F.Comment) return !0;
          if (t.type === F.Element) {
            if (e.script && ("script" === t.tagName || "link" === t.tagName && ("preload" === t.attributes.rel || "modulepreload" === t.attributes.rel) && "script" === t.attributes.as || "link" === t.tagName && "prefetch" === t.attributes.rel && "string" == typeof t.attributes.href && t.attributes.href.endsWith(".js"))) return !0;
            if (e.headFavicon && ("link" === t.tagName && "shortcut icon" === t.attributes.rel || "meta" === t.tagName && (ht(t.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === ht(t.attributes.name) || "icon" === ht(t.attributes.rel) || "apple-touch-icon" === ht(t.attributes.rel) || "shortcut icon" === ht(t.attributes.rel)))) return !0;
            if ("meta" === t.tagName) {
              if (e.headMetaDescKeywords && ht(t.attributes.name).match(/^description|keywords$/)) return !0;
              if (e.headMetaSocial && (ht(t.attributes.property).match(/^(og|twitter|fb):/) || ht(t.attributes.name).match(/^(og|twitter):/) || "pinterest" === ht(t.attributes.name))) return !0;
              if (e.headMetaRobots && ("robots" === ht(t.attributes.name) || "googlebot" === ht(t.attributes.name) || "bingbot" === ht(t.attributes.name))) return !0;
              if (e.headMetaHttpEquiv && void 0 !== t.attributes["http-equiv"]) return !0;
              if (e.headMetaAuthorship && ("author" === ht(t.attributes.name) || "generator" === ht(t.attributes.name) || "framework" === ht(t.attributes.name) || "publisher" === ht(t.attributes.name) || "progid" === ht(t.attributes.name) || ht(t.attributes.property).match(/^article:/) || ht(t.attributes.property).match(/^product:/))) return !0;
              if (e.headMetaVerification && ("google-site-verification" === ht(t.attributes.name) || "yandex-verification" === ht(t.attributes.name) || "csrf-token" === ht(t.attributes.name) || "p:domain_verify" === ht(t.attributes.name) || "verify-v1" === ht(t.attributes.name) || "verification" === ht(t.attributes.name) || "shopify-checkout-api-token" === ht(t.attributes.name))) return !0
            }
          }
          return !1
        }(M, _) && (R || M.type !== F.Text || M.isStyle || M.textContent.replace(/^\s+|\s+$/gm, "").length) ? X() : -2;
        const D = Object.assign(M, {
          id: O
        });
        if (r.add(t, D), -2 === O) return null;
        k && k(t);
        let A = !p;
        if (D.type === F.Element) {
          A = A && !D.needBlock, delete D.needBlock;
          const e = t.shadowRoot;
          e && j(e) && (D.isShadowHost = !0)
        }
        if ((D.type === F.Document || D.type === F.Element) && A) {
          _.headWhitespace && D.type === F.Element && "head" === D.tagName && (R = !1);
          const e = {
            doc: n,
            mirror: r,
            blockClass: s,
            blockSelector: i,
            maskAllText: a,
            unblockSelector: o,
            maskTextClass: c,
            unmaskTextClass: u,
            maskTextSelector: l,
            unmaskTextSelector: d,
            skipChild: p,
            inlineStylesheet: h,
            maskInputOptions: m,
            maskAttributeFn: f,
            maskTextFn: g,
            maskInputFn: y,
            slimDOMOptions: _,
            dataURLOptions: v,
            inlineImages: S,
            recordCanvas: b,
            preserveWhiteSpace: R,
            onSerialize: k,
            onIframeLoad: T,
            iframeLoadTimeout: w,
            onStylesheetLoad: E,
            stylesheetLoadTimeout: x,
            keepIframeSrcFn: I
          };
          for (const n of Array.from(t.childNodes)) {
            const t = mt(n, e);
            t && D.childNodes.push(t)
          }
          if (function(t) {
              return t.nodeType === t.ELEMENT_NODE
            }(t) && t.shadowRoot)
            for (const n of Array.from(t.shadowRoot.childNodes)) {
              const r = mt(n, e);
              r && (j(t.shadowRoot) && (r.isShadow = !0), D.childNodes.push(r))
            }
        }
        return t.parentNode && L(t.parentNode) && j(t.parentNode) && (D.isShadow = !0), D.type === F.Element && "iframe" === D.tagName && function(t, e, n) {
          const r = t.contentWindow;
          if (!r) return;
          let s, i = !1;
          try {
            s = r.document.readyState
          } catch (t) {
            return
          }
          if ("complete" !== s) {
            const r = setTimeout(() => {
              i || (e(), i = !0)
            }, n);
            return void t.addEventListener("load", () => {
              clearTimeout(r), i = !0, e()
            })
          }
          const o = "about:blank";
          if (r.location.href !== o || t.src === o || "" === t.src) return setTimeout(e, 0), t.addEventListener("load", e);
          t.addEventListener("load", e)
        }(t, () => {
          const e = t.contentDocument;
          if (e && T) {
            const n = mt(e, {
              doc: e,
              mirror: r,
              blockClass: s,
              blockSelector: i,
              unblockSelector: o,
              maskAllText: a,
              maskTextClass: c,
              unmaskTextClass: u,
              maskTextSelector: l,
              unmaskTextSelector: d,
              skipChild: !1,
              inlineStylesheet: h,
              maskInputOptions: m,
              maskAttributeFn: f,
              maskTextFn: g,
              maskInputFn: y,
              slimDOMOptions: _,
              dataURLOptions: v,
              inlineImages: S,
              recordCanvas: b,
              preserveWhiteSpace: R,
              onSerialize: k,
              onIframeLoad: T,
              iframeLoadTimeout: w,
              onStylesheetLoad: E,
              stylesheetLoadTimeout: x,
              keepIframeSrcFn: I
            });
            n && T(t, n)
          }
        }, w), D.type === F.Element && "link" === D.tagName && "stylesheet" === D.attributes.rel && function(t, e, n) {
          let r, s = !1;
          try {
            r = t.sheet
          } catch (t) {
            return
          }
          if (r) return;
          const i = setTimeout(() => {
            s || (e(), s = !0)
          }, n);
          t.addEventListener("load", () => {
            clearTimeout(i), s = !0, e()
          })
        }(t, () => {
          if (E) {
            const e = mt(t, {
              doc: n,
              mirror: r,
              blockClass: s,
              blockSelector: i,
              unblockSelector: o,
              maskAllText: a,
              maskTextClass: c,
              unmaskTextClass: u,
              maskTextSelector: l,
              unmaskTextSelector: d,
              skipChild: !1,
              inlineStylesheet: h,
              maskInputOptions: m,
              maskAttributeFn: f,
              maskTextFn: g,
              maskInputFn: y,
              slimDOMOptions: _,
              dataURLOptions: v,
              inlineImages: S,
              recordCanvas: b,
              preserveWhiteSpace: R,
              onSerialize: k,
              onIframeLoad: T,
              iframeLoadTimeout: w,
              onStylesheetLoad: E,
              stylesheetLoadTimeout: x,
              keepIframeSrcFn: I
            });
            e && E(t, e)
          }
        }, x), D
      }

      function ft(t) {
        let e, n = t[0],
          r = 1;
        for (; r < t.length;) {
          const s = t[r],
            i = t[r + 1];
          if (r += 2, ("optionalAccess" === s || "optionalCall" === s) && null == n) return;
          "access" === s || "optionalAccess" === s ? (e = n, n = i(n)) : "call" !== s && "optionalCall" !== s || (n = i((...t) => n.call(e, ...t)), e = void 0)
        }
        return n
      }

      function gt(t, e, n = document) {
        const r = {
          capture: !0,
          passive: !0
        };
        return n.addEventListener(t, e, r), () => n.removeEventListener(t, e, r)
      }
      const yt = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
      let _t = {
        map: {},
        getId: () => (console.error(yt), -1),
        getNode: () => (console.error(yt), null),
        removeNodeFromMap() {
          console.error(yt)
        },
        has: () => (console.error(yt), !1),
        reset() {
          console.error(yt)
        }
      };

      function vt(t, e, n = {}) {
        let r = null,
          s = 0;
        return function(...i) {
          const o = Date.now();
          s || !1 !== n.leading || (s = o);
          const a = e - (o - s),
            c = this;
          a <= 0 || a > e ? (r && (function(...t) {
            Pt("clearTimeout")(...t)
          }(r), r = null), s = o, t.apply(c, i)) : r || !1 === n.trailing || (r = $t(() => {
            s = !1 === n.leading ? 0 : Date.now(), r = null, t.apply(c, i)
          }, a))
        }
      }

      function St(t, e, n, r, s = window) {
        const i = s.Object.getOwnPropertyDescriptor(t, e);
        return s.Object.defineProperty(t, e, r ? n : {
          set(t) {
            $t(() => {
              n.set.call(this, t)
            }, 0), i && i.set && i.set.call(this, t)
          }
        }), () => St(t, e, i || {}, !0)
      }

      function bt(t, e, n) {
        try {
          if (!(e in t)) return () => {};
          const r = t[e],
            s = n(r);
          return "function" == typeof s && (s.prototype = s.prototype || {}, Object.defineProperties(s, {
            __rrweb_original__: {
              enumerable: !1,
              value: r
            }
          })), t[e] = s, () => {
            t[e] = r
          }
        } catch (t) {
          return () => {}
        }
      }
      "undefined" != typeof window && window.Proxy && window.Reflect && (_t = new Proxy(_t, {
        get: (t, e, n) => ("map" === e && console.error(yt), Reflect.get(t, e, n))
      }));
      let kt = Date.now;

      function Tt(t) {
        const e = t.document;
        return {
          left: e.scrollingElement ? e.scrollingElement.scrollLeft : void 0 !== t.pageXOffset ? t.pageXOffset : ft([e, "optionalAccess", t => t.documentElement, "access", t => t.scrollLeft]) || ft([e, "optionalAccess", t => t.body, "optionalAccess", t => t.parentElement, "optionalAccess", t => t.scrollLeft]) || ft([e, "optionalAccess", t => t.body, "optionalAccess", t => t.scrollLeft]) || 0,
          top: e.scrollingElement ? e.scrollingElement.scrollTop : void 0 !== t.pageYOffset ? t.pageYOffset : ft([e, "optionalAccess", t => t.documentElement, "access", t => t.scrollTop]) || ft([e, "optionalAccess", t => t.body, "optionalAccess", t => t.parentElement, "optionalAccess", t => t.scrollTop]) || ft([e, "optionalAccess", t => t.body, "optionalAccess", t => t.scrollTop]) || 0
        }
      }

      function wt() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
      }

      function Et() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
      }

      function xt(t) {
        return t ? t.nodeType === t.ELEMENT_NODE ? t : t.parentElement : null
      }

      function It(t, e, n, r, s) {
        if (!t) return !1;
        const i = xt(t);
        if (!i) return !1;
        const o = dt(e, n);
        if (!s) {
          const t = r && i.matches(r);
          return o(i) && !t
        }
        const a = lt(i, o);
        let c = -1;
        return !(a < 0) && (r && (c = lt(i, dt(null, r))), a > -1 && c < 0 || a < c)
      }

      function Ct(t, e) {
        return -2 === e.getId(t)
      }

      function Rt(t, e) {
        if (L(t)) return !1;
        const n = e.getId(t);
        return !e.has(n) || (!t.parentNode || t.parentNode.nodeType !== t.DOCUMENT_NODE) && (!t.parentNode || Rt(t.parentNode, e))
      }

      function Mt(t) {
        return Boolean(t.changedTouches)
      }

      function Ot(t, e) {
        return Boolean("IFRAME" === t.nodeName && e.getMeta(t))
      }

      function Dt(t, e) {
        return Boolean("LINK" === t.nodeName && t.nodeType === t.ELEMENT_NODE && t.getAttribute && "stylesheet" === t.getAttribute("rel") && e.getMeta(t))
      }

      function At(t) {
        return Boolean(ft([t, "optionalAccess", t => t.shadowRoot]))
      }
      /[1-9][0-9]{12}/.test(Date.now().toString()) || (kt = () => (new Date).getTime());
      class Nt {
        constructor() {
          this.id = 1, this.styleIDMap = new WeakMap, this.idStyleMap = new Map
        }
        getId(t) {
          return null != (e = this.styleIDMap.get(t)) ? e : -1;
          var e
        }
        has(t) {
          return this.styleIDMap.has(t)
        }
        add(t, e) {
          if (this.has(t)) return this.getId(t);
          let n;
          return n = void 0 === e ? this.id++ : e, this.styleIDMap.set(t, n), this.idStyleMap.set(n, t), n
        }
        getStyle(t) {
          return this.idStyleMap.get(t) || null
        }
        reset() {
          this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
        }
        generateId() {
          return this.id++
        }
      }

      function Ft(t) {
        let e = null;
        return ft([t, "access", t => t.getRootNode, "optionalCall", t => t(), "optionalAccess", t => t.nodeType]) === Node.DOCUMENT_FRAGMENT_NODE && t.getRootNode().host && (e = t.getRootNode().host), e
      }

      function Lt(t) {
        const e = t.ownerDocument;
        return !!e && (e.contains(t) || function(t) {
          const e = t.ownerDocument;
          if (!e) return !1;
          const n = function(t) {
            let e, n = t;
            for (; e = Ft(n);) n = e;
            return n
          }(t);
          return e.contains(n)
        }(t))
      }
      const jt = {};

      function Pt(t) {
        const e = jt[t];
        if (e) return e;
        const n = window.document;
        let r = window[t];
        if (n && "function" == typeof n.createElement) try {
          const e = n.createElement("iframe");
          e.hidden = !0, n.head.appendChild(e);
          const s = e.contentWindow;
          s && s[t] && (r = s[t]), n.head.removeChild(e)
        } catch (t) {}
        return jt[t] = r.bind(window)
      }

      function $t(...t) {
        return Pt("setTimeout")(...t)
      }
      var Ut = (t => (t[t.DomContentLoaded = 0] = "DomContentLoaded", t[t.Load = 1] = "Load", t[t.FullSnapshot = 2] = "FullSnapshot", t[t.IncrementalSnapshot = 3] = "IncrementalSnapshot", t[t.Meta = 4] = "Meta", t[t.Custom = 5] = "Custom", t[t.Plugin = 6] = "Plugin", t))(Ut || {}),
        Bt = (t => (t[t.Mutation = 0] = "Mutation", t[t.MouseMove = 1] = "MouseMove", t[t.MouseInteraction = 2] = "MouseInteraction", t[t.Scroll = 3] = "Scroll", t[t.ViewportResize = 4] = "ViewportResize", t[t.Input = 5] = "Input", t[t.TouchMove = 6] = "TouchMove", t[t.MediaInteraction = 7] = "MediaInteraction", t[t.StyleSheetRule = 8] = "StyleSheetRule", t[t.CanvasMutation = 9] = "CanvasMutation", t[t.Font = 10] = "Font", t[t.Log = 11] = "Log", t[t.Drag = 12] = "Drag", t[t.StyleDeclaration = 13] = "StyleDeclaration", t[t.Selection = 14] = "Selection", t[t.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", t[t.CustomElement = 16] = "CustomElement", t))(Bt || {}),
        Ht = (t => (t[t.MouseUp = 0] = "MouseUp", t[t.MouseDown = 1] = "MouseDown", t[t.Click = 2] = "Click", t[t.ContextMenu = 3] = "ContextMenu", t[t.DblClick = 4] = "DblClick", t[t.Focus = 5] = "Focus", t[t.Blur = 6] = "Blur", t[t.TouchStart = 7] = "TouchStart", t[t.TouchMove_Departed = 8] = "TouchMove_Departed", t[t.TouchEnd = 9] = "TouchEnd", t[t.TouchCancel = 10] = "TouchCancel", t))(Ht || {}),
        zt = (t => (t[t.Mouse = 0] = "Mouse", t[t.Pen = 1] = "Pen", t[t.Touch = 2] = "Touch", t))(zt || {});

      function Wt(t) {
        let e, n = t[0],
          r = 1;
        for (; r < t.length;) {
          const s = t[r],
            i = t[r + 1];
          if (r += 2, ("optionalAccess" === s || "optionalCall" === s) && null == n) return;
          "access" === s || "optionalAccess" === s ? (e = n, n = i(n)) : "call" !== s && "optionalCall" !== s || (n = i((...t) => n.call(e, ...t)), e = void 0)
        }
        return n
      }

      function qt(t) {
        return "__ln" in t
      }
      class Jt {
        constructor() {
          this.length = 0, this.head = null, this.tail = null
        }
        get(t) {
          if (t >= this.length) throw new Error("Position outside of list range");
          let e = this.head;
          for (let n = 0; n < t; n++) e = Wt([e, "optionalAccess", t => t.next]) || null;
          return e
        }
        addNode(t) {
          const e = {
            value: t,
            previous: null,
            next: null
          };
          if (t.__ln = e, t.previousSibling && qt(t.previousSibling)) {
            const n = t.previousSibling.__ln.next;
            e.next = n, e.previous = t.previousSibling.__ln, t.previousSibling.__ln.next = e, n && (n.previous = e)
          } else if (t.nextSibling && qt(t.nextSibling) && t.nextSibling.__ln.previous) {
            const n = t.nextSibling.__ln.previous;
            e.previous = n, e.next = t.nextSibling.__ln, t.nextSibling.__ln.previous = e, n && (n.next = e)
          } else this.head && (this.head.previous = e), e.next = this.head, this.head = e;
          null === e.next && (this.tail = e), this.length++
        }
        removeNode(t) {
          const e = t.__ln;
          this.head && (e.previous ? (e.previous.next = e.next, e.next ? e.next.previous = e.previous : this.tail = e.previous) : (this.head = e.next, this.head ? this.head.previous = null : this.tail = null), t.__ln && delete t.__ln, this.length--)
        }
      }
      const Kt = (t, e) => `${t}@${e}`;
      class Gt {
        constructor() {
          this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = t => {
            t.forEach(this.processMutation), this.emit()
          }, this.emit = () => {
            if (this.frozen || this.locked) return;
            const t = [],
              e = new Set,
              n = new Jt,
              r = t => {
                let e = t,
                  n = -2;
                for (; - 2 === n;) e = e && e.nextSibling, n = e && this.mirror.getId(e);
                return n
              },
              s = s => {
                if (!s.parentNode || !Lt(s)) return;
                const i = L(s.parentNode) ? this.mirror.getId(Ft(s)) : this.mirror.getId(s.parentNode),
                  o = r(s);
                if (-1 === i || -1 === o) return n.addNode(s);
                const a = mt(s, {
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
                  onSerialize: t => {
                    Ot(t, this.mirror) && this.iframeManager.addIframe(t), Dt(t, this.mirror) && this.stylesheetManager.trackLinkElement(t), At(s) && this.shadowDomManager.addShadowRoot(s.shadowRoot, this.doc)
                  },
                  onIframeLoad: (t, e) => {
                    this.iframeManager.attachIframe(t, e), this.shadowDomManager.observeAttachShadow(t)
                  },
                  onStylesheetLoad: (t, e) => {
                    this.stylesheetManager.attachLinkElement(t, e)
                  }
                });
                a && (t.push({
                  parentId: i,
                  nextId: o,
                  node: a
                }), e.add(a.id))
              };
            for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
            for (const t of this.movedSet) Xt(this.removes, t, this.mirror) && !this.movedSet.has(t.parentNode) || s(t);
            for (const t of this.addedSet) Qt(this.droppedSet, t) || Xt(this.removes, t, this.mirror) ? Qt(this.movedSet, t) ? s(t) : this.droppedSet.add(t) : s(t);
            let i = null;
            for (; n.length;) {
              let t = null;
              if (i) {
                const e = this.mirror.getId(i.value.parentNode),
                  n = r(i.value); - 1 !== e && -1 !== n && (t = i)
              }
              if (!t) {
                let e = n.tail;
                for (; e;) {
                  const n = e;
                  if (e = e.previous, n) {
                    const e = this.mirror.getId(n.value.parentNode);
                    if (-1 === r(n.value)) continue;
                    if (-1 !== e) {
                      t = n;
                      break
                    } {
                      const e = n.value;
                      if (e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                        const r = e.parentNode.host;
                        if (-1 !== this.mirror.getId(r)) {
                          t = n;
                          break
                        }
                      }
                    }
                  }
                }
              }
              if (!t) {
                for (; n.head;) n.removeNode(n.head.value);
                break
              }
              i = t.previous, n.removeNode(t.value), s(t.value)
            }
            const o = {
              texts: this.texts.map(t => ({
                id: this.mirror.getId(t.node),
                value: t.value
              })).filter(t => !e.has(t.id)).filter(t => this.mirror.has(t.id)),
              attributes: this.attributes.map(t => {
                const {
                  attributes: e
                } = t;
                if ("string" == typeof e.style) {
                  const n = JSON.stringify(t.styleDiff),
                    r = JSON.stringify(t._unchangedStyles);
                  n.length < e.style.length && (n + r).split("var(").length === e.style.split("var(").length && (e.style = t.styleDiff)
                }
                return {
                  id: this.mirror.getId(t.node),
                  attributes: e
                }
              }).filter(t => !e.has(t.id)).filter(t => this.mirror.has(t.id)),
              removes: this.removes,
              adds: t
            };
            (o.texts.length || o.attributes.length || o.removes.length || o.adds.length) && (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.movedMap = {}, this.mutationCb(o))
          }, this.processMutation = t => {
            if (!Ct(t.target, this.mirror)) switch (t.type) {
              case "characterData": {
                const e = t.target.textContent;
                It(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || e === t.oldValue || this.texts.push({
                  value: pt(t.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && e ? this.maskTextFn ? this.maskTextFn(e, xt(t.target)) : e.replace(/[\S]/g, "*") : e,
                  node: t.target
                });
                break
              }
              case "attributes": {
                const e = t.target;
                let n = t.attributeName,
                  r = t.target.getAttribute(n);
                if ("value" === n) {
                  const n = J(e),
                    s = e.tagName;
                  r = K(e, s, n);
                  const i = B({
                    maskInputOptions: this.maskInputOptions,
                    tagName: s,
                    type: n
                  });
                  r = H({
                    isMasked: pt(t.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, i),
                    element: e,
                    value: r,
                    maskInputFn: this.maskInputFn
                  })
                }
                if (It(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || r === t.oldValue) return;
                let s = this.attributeMap.get(t.target);
                if ("IFRAME" === e.tagName && "src" === n && !this.keepIframeSrcFn(r)) {
                  if (e.contentDocument) return;
                  n = "rr_src"
                }
                if (s || (s = {
                    node: t.target,
                    attributes: {},
                    styleDiff: {},
                    _unchangedStyles: {}
                  }, this.attributes.push(s), this.attributeMap.set(t.target, s)), "type" === n && "INPUT" === e.tagName && "password" === (t.oldValue || "").toLowerCase() && e.setAttribute("data-rr-is-password", "true"), !ut(e.tagName, n) && (s.attributes[n] = ct(this.doc, z(e.tagName), z(n), r, e, this.maskAttributeFn), "style" === n)) {
                  if (!this.unattachedDoc) try {
                    this.unattachedDoc = document.implementation.createHTMLDocument()
                  } catch (t) {
                    this.unattachedDoc = this.doc
                  }
                  const n = this.unattachedDoc.createElement("span");
                  t.oldValue && n.setAttribute("style", t.oldValue);
                  for (const t of Array.from(e.style)) {
                    const r = e.style.getPropertyValue(t),
                      i = e.style.getPropertyPriority(t);
                    r !== n.style.getPropertyValue(t) || i !== n.style.getPropertyPriority(t) ? s.styleDiff[t] = "" === i ? r : [r, i] : s._unchangedStyles[t] = [r, i]
                  }
                  for (const t of Array.from(n.style)) "" === e.style.getPropertyValue(t) && (s.styleDiff[t] = !1)
                }
                break
              }
              case "childList":
                if (It(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
                t.addedNodes.forEach(e => this.genAdds(e, t.target)), t.removedNodes.forEach(e => {
                  const n = this.mirror.getId(e),
                    r = L(t.target) ? this.mirror.getId(t.target.host) : this.mirror.getId(t.target);
                  It(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || Ct(e, this.mirror) || ! function(t, e) {
                    return -1 !== e.getId(t)
                  }(e, this.mirror) || (this.addedSet.has(e) ? (Yt(this.addedSet, e), this.droppedSet.add(e)) : this.addedSet.has(t.target) && -1 === n || Rt(t.target, this.mirror) || (this.movedSet.has(e) && this.movedMap[Kt(n, r)] ? Yt(this.movedSet, e) : this.removes.push({
                    parentId: r,
                    id: n,
                    isShadow: !(!L(t.target) || !j(t.target)) || void 0
                  })), this.mapRemoves.push(e))
                })
            }
          }, this.genAdds = (t, e) => {
            if (!this.processedNodeManager.inOtherBuffer(t, this) && !this.addedSet.has(t) && !this.movedSet.has(t)) {
              if (this.mirror.hasNode(t)) {
                if (Ct(t, this.mirror)) return;
                this.movedSet.add(t);
                let n = null;
                e && this.mirror.hasNode(e) && (n = this.mirror.getId(e)), n && -1 !== n && (this.movedMap[Kt(this.mirror.getId(t), n)] = !0)
              } else this.addedSet.add(t), this.droppedSet.delete(t);
              It(t, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (t.childNodes.forEach(t => this.genAdds(t)), At(t) && t.shadowRoot.childNodes.forEach(e => {
                this.processedNodeManager.add(e, this), this.genAdds(e, t)
              }))
            }
          }
        }
        init(t) {
          ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach(e => {
            this[e] = t[e]
          })
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

      function Yt(t, e) {
        t.delete(e), e.childNodes.forEach(e => Yt(t, e))
      }

      function Xt(t, e, n) {
        return 0 !== t.length && Vt(t, e, n)
      }

      function Vt(t, e, n) {
        const {
          parentNode: r
        } = e;
        if (!r) return !1;
        const s = n.getId(r);
        return !!t.some(t => t.id === s) || Vt(t, r, n)
      }

      function Qt(t, e) {
        return 0 !== t.size && Zt(t, e)
      }

      function Zt(t, e) {
        const {
          parentNode: n
        } = e;
        return !!n && (!!t.has(n) || Zt(t, n))
      }
      let te;

      function ee(t) {
        te = t
      }

      function ne() {
        te = void 0
      }
      const re = t => te ? (...e) => {
        try {
          return t(...e)
        } catch (t) {
          if (te && !0 === te(t)) return () => {};
          throw t
        }
      } : t;

      function se(t) {
        let e, n = t[0],
          r = 1;
        for (; r < t.length;) {
          const s = t[r],
            i = t[r + 1];
          if (r += 2, ("optionalAccess" === s || "optionalCall" === s) && null == n) return;
          "access" === s || "optionalAccess" === s ? (e = n, n = i(n)) : "call" !== s && "optionalCall" !== s || (n = i((...t) => n.call(e, ...t)), e = void 0)
        }
        return n
      }
      const ie = [];

      function oe(t) {
        try {
          if ("composedPath" in t) {
            const e = t.composedPath();
            if (e.length) return e[0]
          } else if ("path" in t && t.path.length) return t.path[0]
        } catch (t) {}
        return t && t.target
      }

      function ae(t, e) {
        const n = new Gt;
        ie.push(n), n.init(t);
        let r = window.MutationObserver || window.__rrMutationObserver;
        const s = se([window, "optionalAccess", t => t.Zone, "optionalAccess", t => t.__symbol__, "optionalCall", t => t("MutationObserver")]);
        s && window[s] && (r = window[s]);
        const i = new r(re(e => {
          t.onMutation && !1 === t.onMutation(e) || n.processMutations.bind(n)(e)
        }));
        return i.observe(e, {
          attributes: !0,
          attributeOldValue: !0,
          characterData: !0,
          characterDataOldValue: !0,
          childList: !0,
          subtree: !0
        }), i
      }

      function ce({
        scrollCb: t,
        doc: e,
        mirror: n,
        blockClass: r,
        blockSelector: s,
        unblockSelector: i,
        sampling: o
      }) {
        return gt("scroll", re(vt(re(o => {
          const a = oe(o);
          if (!a || It(a, r, s, i, !0)) return;
          const c = n.getId(a);
          if (a === e && e.defaultView) {
            const n = Tt(e.defaultView);
            t({
              id: c,
              x: n.left,
              y: n.top
            })
          } else t({
            id: c,
            x: a.scrollLeft,
            y: a.scrollTop
          })
        }), o.scroll || 100)), e)
      }
      const ue = ["INPUT", "TEXTAREA", "SELECT"],
        le = new WeakMap;

      function de({
        inputCb: t,
        doc: e,
        mirror: n,
        blockClass: r,
        blockSelector: s,
        unblockSelector: i,
        ignoreClass: o,
        ignoreSelector: a,
        maskInputOptions: c,
        maskInputFn: u,
        sampling: l,
        userTriggeredOnInput: d,
        maskTextClass: p,
        unmaskTextClass: h,
        maskTextSelector: m,
        unmaskTextSelector: f
      }) {
        function g(t) {
          let n = oe(t);
          const l = t.isTrusted,
            g = n && W(n.tagName);
          if ("OPTION" === g && (n = n.parentElement), !n || !g || ue.indexOf(g) < 0 || It(n, r, s, i, !0)) return;
          const _ = n;
          if (_.classList.contains(o) || a && _.matches(a)) return;
          const v = J(n);
          let S = K(_, g, v),
            b = !1;
          const k = B({
              maskInputOptions: c,
              tagName: g,
              type: v
            }),
            T = pt(n, p, m, h, f, k);
          "radio" !== v && "checkbox" !== v || (b = n.checked), S = H({
            isMasked: T,
            element: n,
            value: S,
            maskInputFn: u
          }), y(n, d ? {
            text: S,
            isChecked: b,
            userTriggered: l
          } : {
            text: S,
            isChecked: b
          });
          const w = n.name;
          "radio" === v && w && b && e.querySelectorAll(`input[type="radio"][name="${w}"]`).forEach(t => {
            if (t !== n) {
              const e = H({
                isMasked: T,
                element: t,
                value: K(t, g, v),
                maskInputFn: u
              });
              y(t, d ? {
                text: e,
                isChecked: !b,
                userTriggered: !1
              } : {
                text: e,
                isChecked: !b
              })
            }
          })
        }

        function y(e, r) {
          const s = le.get(e);
          if (!s || s.text !== r.text || s.isChecked !== r.isChecked) {
            le.set(e, r);
            const s = n.getId(e);
            re(t)({
              ...r,
              id: s
            })
          }
        }
        const _ = ("last" === l.input ? ["change"] : ["input", "change"]).map(t => gt(t, re(g), e)),
          v = e.defaultView;
        if (!v) return () => {
          _.forEach(t => t())
        };
        const S = v.Object.getOwnPropertyDescriptor(v.HTMLInputElement.prototype, "value"),
          b = [
            [v.HTMLInputElement.prototype, "value"],
            [v.HTMLInputElement.prototype, "checked"],
            [v.HTMLSelectElement.prototype, "value"],
            [v.HTMLTextAreaElement.prototype, "value"],
            [v.HTMLSelectElement.prototype, "selectedIndex"],
            [v.HTMLOptionElement.prototype, "selected"]
          ];
        return S && S.set && _.push(...b.map(t => St(t[0], t[1], {
          set() {
            re(g)({
              target: this,
              isTrusted: !1
            })
          }
        }, !1, v))), re(() => {
          _.forEach(t => t())
        })
      }

      function pe(t) {
        return function(t, e) {
          if (ge("CSSGroupingRule") && t.parentRule instanceof CSSGroupingRule || ge("CSSMediaRule") && t.parentRule instanceof CSSMediaRule || ge("CSSSupportsRule") && t.parentRule instanceof CSSSupportsRule || ge("CSSConditionRule") && t.parentRule instanceof CSSConditionRule) {
            const n = Array.from(t.parentRule.cssRules).indexOf(t);
            e.unshift(n)
          } else if (t.parentStyleSheet) {
            const n = Array.from(t.parentStyleSheet.cssRules).indexOf(t);
            e.unshift(n)
          }
          return e
        }(t, [])
      }

      function he(t, e, n) {
        let r, s;
        return t ? (t.ownerNode ? r = e.getId(t.ownerNode) : s = n.getId(t), {
          styleId: s,
          id: r
        }) : {}
      }

      function me({
        mirror: t,
        stylesheetManager: e
      }, n) {
        let r = null;
        r = "#document" === n.nodeName ? t.getId(n) : t.getId(n.host);
        const s = "#document" === n.nodeName ? se([n, "access", t => t.defaultView, "optionalAccess", t => t.Document]) : se([n, "access", t => t.ownerDocument, "optionalAccess", t => t.defaultView, "optionalAccess", t => t.ShadowRoot]),
          i = se([s, "optionalAccess", t => t.prototype]) ? Object.getOwnPropertyDescriptor(se([s, "optionalAccess", t => t.prototype]), "adoptedStyleSheets") : void 0;
        return null !== r && -1 !== r && s && i ? (Object.defineProperty(n, "adoptedStyleSheets", {
          configurable: i.configurable,
          enumerable: i.enumerable,
          get() {
            return se([i, "access", t => t.get, "optionalAccess", t => t.call, "call", t => t(this)])
          },
          set(t) {
            const n = se([i, "access", t => t.set, "optionalAccess", t => t.call, "call", e => e(this, t)]);
            if (null !== r && -1 !== r) try {
              e.adoptStyleSheets(t, r)
            } catch (t) {}
            return n
          }
        }), re(() => {
          Object.defineProperty(n, "adoptedStyleSheets", {
            configurable: i.configurable,
            enumerable: i.enumerable,
            get: i.get,
            set: i.set
          })
        })) : () => {}
      }

      function fe(t, e = {}) {
        const n = t.doc.defaultView;
        if (!n) return () => {};
        const r = ae(t, t.doc),
          s = function({
            mousemoveCb: t,
            sampling: e,
            doc: n,
            mirror: r
          }) {
            if (!1 === e.mousemove) return () => {};
            const s = "number" == typeof e.mousemove ? e.mousemove : 50,
              i = "number" == typeof e.mousemoveCallback ? e.mousemoveCallback : 500;
            let o, a = [];
            const c = vt(re(e => {
                const n = Date.now() - o;
                t(a.map(t => (t.timeOffset -= n, t)), e), a = [], o = null
              }), i),
              u = re(vt(re(t => {
                const e = oe(t),
                  {
                    clientX: n,
                    clientY: s
                  } = Mt(t) ? t.changedTouches[0] : t;
                o || (o = kt()), a.push({
                  x: n,
                  y: s,
                  id: r.getId(e),
                  timeOffset: kt() - o
                }), c("undefined" != typeof DragEvent && t instanceof DragEvent ? Bt.Drag : t instanceof MouseEvent ? Bt.MouseMove : Bt.TouchMove)
              }), s, {
                trailing: !1
              })),
              l = [gt("mousemove", u, n), gt("touchmove", u, n), gt("drag", u, n)];
            return re(() => {
              l.forEach(t => t())
            })
          }(t),
          i = function({
            mouseInteractionCb: t,
            doc: e,
            mirror: n,
            blockClass: r,
            blockSelector: s,
            unblockSelector: i,
            sampling: o
          }) {
            if (!1 === o.mouseInteraction) return () => {};
            const a = !0 === o.mouseInteraction || void 0 === o.mouseInteraction ? {} : o.mouseInteraction,
              c = [];
            let u = null;
            return Object.keys(Ht).filter(t => Number.isNaN(Number(t)) && !t.endsWith("_Departed") && !1 !== a[t]).forEach(o => {
              let a = z(o);
              const l = (e => o => {
                const a = oe(o);
                if (It(a, r, s, i, !0)) return;
                let c = null,
                  l = e;
                if ("pointerType" in o) {
                  switch (o.pointerType) {
                    case "mouse":
                      c = zt.Mouse;
                      break;
                    case "touch":
                      c = zt.Touch;
                      break;
                    case "pen":
                      c = zt.Pen
                  }
                  c === zt.Touch ? Ht[e] === Ht.MouseDown ? l = "TouchStart" : Ht[e] === Ht.MouseUp && (l = "TouchEnd") : zt.Pen
                } else Mt(o) && (c = zt.Touch);
                null !== c ? (u = c, (l.startsWith("Touch") && c === zt.Touch || l.startsWith("Mouse") && c === zt.Mouse) && (c = null)) : Ht[e] === Ht.Click && (c = u, u = null);
                const d = Mt(o) ? o.changedTouches[0] : o;
                if (!d) return;
                const p = n.getId(a),
                  {
                    clientX: h,
                    clientY: m
                  } = d;
                re(t)({
                  type: Ht[l],
                  id: p,
                  x: h,
                  y: m,
                  ...null !== c && {
                    pointerType: c
                  }
                })
              })(o);
              if (window.PointerEvent) switch (Ht[o]) {
                case Ht.MouseDown:
                case Ht.MouseUp:
                  a = a.replace("mouse", "pointer");
                  break;
                case Ht.TouchStart:
                case Ht.TouchEnd:
                  return
              }
              c.push(gt(a, l, e))
            }), re(() => {
              c.forEach(t => t())
            })
          }(t),
          o = ce(t),
          a = function({
            viewportResizeCb: t
          }, {
            win: e
          }) {
            let n = -1,
              r = -1;
            return gt("resize", re(vt(re(() => {
              const e = wt(),
                s = Et();
              n === e && r === s || (t({
                width: Number(s),
                height: Number(e)
              }), n = e, r = s)
            }), 200)), e)
          }(t, {
            win: n
          }),
          c = de(t),
          u = function({
            mediaInteractionCb: t,
            blockClass: e,
            blockSelector: n,
            unblockSelector: r,
            mirror: s,
            sampling: i,
            doc: o
          }) {
            const a = re(o => vt(re(i => {
                const a = oe(i);
                if (!a || It(a, e, n, r, !0)) return;
                const {
                  currentTime: c,
                  volume: u,
                  muted: l,
                  playbackRate: d
                } = a;
                t({
                  type: o,
                  id: s.getId(a),
                  currentTime: c,
                  volume: u,
                  muted: l,
                  playbackRate: d
                })
              }), i.media || 500)),
              c = [gt("play", a(0), o), gt("pause", a(1), o), gt("seeked", a(2), o), gt("volumechange", a(3), o), gt("ratechange", a(4), o)];
            return re(() => {
              c.forEach(t => t())
            })
          }(t),
          l = function({
            styleSheetRuleCb: t,
            mirror: e,
            stylesheetManager: n
          }, {
            win: r
          }) {
            if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype) return () => {};
            const s = r.CSSStyleSheet.prototype.insertRule;
            r.CSSStyleSheet.prototype.insertRule = new Proxy(s, {
              apply: re((r, s, i) => {
                const [o, a] = i, {
                  id: c,
                  styleId: u
                } = he(s, e, n.styleMirror);
                return (c && -1 !== c || u && -1 !== u) && t({
                  id: c,
                  styleId: u,
                  adds: [{
                    rule: o,
                    index: a
                  }]
                }), r.apply(s, i)
              })
            });
            const i = r.CSSStyleSheet.prototype.deleteRule;
            let o, a;
            r.CSSStyleSheet.prototype.deleteRule = new Proxy(i, {
              apply: re((r, s, i) => {
                const [o] = i, {
                  id: a,
                  styleId: c
                } = he(s, e, n.styleMirror);
                return (a && -1 !== a || c && -1 !== c) && t({
                  id: a,
                  styleId: c,
                  removes: [{
                    index: o
                  }]
                }), r.apply(s, i)
              })
            }), r.CSSStyleSheet.prototype.replace && (o = r.CSSStyleSheet.prototype.replace, r.CSSStyleSheet.prototype.replace = new Proxy(o, {
              apply: re((r, s, i) => {
                const [o] = i, {
                  id: a,
                  styleId: c
                } = he(s, e, n.styleMirror);
                return (a && -1 !== a || c && -1 !== c) && t({
                  id: a,
                  styleId: c,
                  replace: o
                }), r.apply(s, i)
              })
            })), r.CSSStyleSheet.prototype.replaceSync && (a = r.CSSStyleSheet.prototype.replaceSync, r.CSSStyleSheet.prototype.replaceSync = new Proxy(a, {
              apply: re((r, s, i) => {
                const [o] = i, {
                  id: a,
                  styleId: c
                } = he(s, e, n.styleMirror);
                return (a && -1 !== a || c && -1 !== c) && t({
                  id: a,
                  styleId: c,
                  replaceSync: o
                }), r.apply(s, i)
              })
            }));
            const c = {};
            ye("CSSGroupingRule") ? c.CSSGroupingRule = r.CSSGroupingRule : (ye("CSSMediaRule") && (c.CSSMediaRule = r.CSSMediaRule), ye("CSSConditionRule") && (c.CSSConditionRule = r.CSSConditionRule), ye("CSSSupportsRule") && (c.CSSSupportsRule = r.CSSSupportsRule));
            const u = {};
            return Object.entries(c).forEach(([r, s]) => {
              u[r] = {
                insertRule: s.prototype.insertRule,
                deleteRule: s.prototype.deleteRule
              }, s.prototype.insertRule = new Proxy(u[r].insertRule, {
                apply: re((r, s, i) => {
                  const [o, a] = i, {
                    id: c,
                    styleId: u
                  } = he(s.parentStyleSheet, e, n.styleMirror);
                  return (c && -1 !== c || u && -1 !== u) && t({
                    id: c,
                    styleId: u,
                    adds: [{
                      rule: o,
                      index: [...pe(s), a || 0]
                    }]
                  }), r.apply(s, i)
                })
              }), s.prototype.deleteRule = new Proxy(u[r].deleteRule, {
                apply: re((r, s, i) => {
                  const [o] = i, {
                    id: a,
                    styleId: c
                  } = he(s.parentStyleSheet, e, n.styleMirror);
                  return (a && -1 !== a || c && -1 !== c) && t({
                    id: a,
                    styleId: c,
                    removes: [{
                      index: [...pe(s), o]
                    }]
                  }), r.apply(s, i)
                })
              })
            }), re(() => {
              r.CSSStyleSheet.prototype.insertRule = s, r.CSSStyleSheet.prototype.deleteRule = i, o && (r.CSSStyleSheet.prototype.replace = o), a && (r.CSSStyleSheet.prototype.replaceSync = a), Object.entries(c).forEach(([t, e]) => {
                e.prototype.insertRule = u[t].insertRule, e.prototype.deleteRule = u[t].deleteRule
              })
            })
          }(t, {
            win: n
          }),
          d = me(t, t.doc),
          p = function({
            styleDeclarationCb: t,
            mirror: e,
            ignoreCSSAttributes: n,
            stylesheetManager: r
          }, {
            win: s
          }) {
            const i = s.CSSStyleDeclaration.prototype.setProperty;
            s.CSSStyleDeclaration.prototype.setProperty = new Proxy(i, {
              apply: re((s, o, a) => {
                const [c, u, l] = a;
                if (n.has(c)) return i.apply(o, [c, u, l]);
                const {
                  id: d,
                  styleId: p
                } = he(se([o, "access", t => t.parentRule, "optionalAccess", t => t.parentStyleSheet]), e, r.styleMirror);
                return (d && -1 !== d || p && -1 !== p) && t({
                  id: d,
                  styleId: p,
                  set: {
                    property: c,
                    value: u,
                    priority: l
                  },
                  index: pe(o.parentRule)
                }), s.apply(o, a)
              })
            });
            const o = s.CSSStyleDeclaration.prototype.removeProperty;
            return s.CSSStyleDeclaration.prototype.removeProperty = new Proxy(o, {
              apply: re((s, i, a) => {
                const [c] = a;
                if (n.has(c)) return o.apply(i, [c]);
                const {
                  id: u,
                  styleId: l
                } = he(se([i, "access", t => t.parentRule, "optionalAccess", t => t.parentStyleSheet]), e, r.styleMirror);
                return (u && -1 !== u || l && -1 !== l) && t({
                  id: u,
                  styleId: l,
                  remove: {
                    property: c
                  },
                  index: pe(i.parentRule)
                }), s.apply(i, a)
              })
            }), re(() => {
              s.CSSStyleDeclaration.prototype.setProperty = i, s.CSSStyleDeclaration.prototype.removeProperty = o
            })
          }(t, {
            win: n
          }),
          h = t.collectFonts ? function({
            fontCb: t,
            doc: e
          }) {
            const n = e.defaultView;
            if (!n) return () => {};
            const r = [],
              s = new WeakMap,
              i = n.FontFace;
            n.FontFace = function(t, e, n) {
              const r = new i(t, e, n);
              return s.set(r, {
                family: t,
                buffer: "string" != typeof e,
                descriptors: n,
                fontSource: "string" == typeof e ? e : JSON.stringify(Array.from(new Uint8Array(e)))
              }), r
            };
            const o = bt(e.fonts, "add", function(e) {
              return function(n) {
                return $t(re(() => {
                  const e = s.get(n);
                  e && (t(e), s.delete(n))
                }), 0), e.apply(this, [n])
              }
            });
            return r.push(() => {
              n.FontFace = i
            }), r.push(o), re(() => {
              r.forEach(t => t())
            })
          }(t) : () => {},
          m = function(t) {
            const {
              doc: e,
              mirror: n,
              blockClass: r,
              blockSelector: s,
              unblockSelector: i,
              selectionCb: o
            } = t;
            let a = !0;
            const c = re(() => {
              const t = e.getSelection();
              if (!t || a && se([t, "optionalAccess", t => t.isCollapsed])) return;
              a = t.isCollapsed || !1;
              const c = [],
                u = t.rangeCount || 0;
              for (let e = 0; e < u; e++) {
                const o = t.getRangeAt(e),
                  {
                    startContainer: a,
                    startOffset: u,
                    endContainer: l,
                    endOffset: d
                  } = o;
                It(a, r, s, i, !0) || It(l, r, s, i, !0) || c.push({
                  start: n.getId(a),
                  startOffset: u,
                  end: n.getId(l),
                  endOffset: d
                })
              }
              o({
                ranges: c
              })
            });
            return c(), gt("selectionchange", c)
          }(t),
          f = function({
            doc: t,
            customElementCb: e
          }) {
            const n = t.defaultView;
            return n && n.customElements ? bt(n.customElements, "define", function(t) {
              return function(n, r, s) {
                try {
                  e({
                    define: {
                      name: n
                    }
                  })
                } catch (t) {}
                return t.apply(this, [n, r, s])
              }
            }) : () => {}
          }(t),
          g = [];
        for (const e of t.plugins) g.push(e.observer(e.callback, n, e.options));
        return re(() => {
          ie.forEach(t => t.reset()), r.disconnect(), s(), i(), o(), a(), c(), u(), l(), d(), p(), h(), m(), f(), g.forEach(t => t())
        })
      }

      function ge(t) {
        return void 0 !== window[t]
      }

      function ye(t) {
        return Boolean(void 0 !== window[t] && window[t].prototype && "insertRule" in window[t].prototype && "deleteRule" in window[t].prototype)
      }
      class _e {
        constructor(t) {
          this.generateIdFn = t, this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap
        }
        getId(t, e, n, r) {
          const s = n || this.getIdToRemoteIdMap(t),
            i = r || this.getRemoteIdToIdMap(t);
          let o = s.get(e);
          return o || (o = this.generateIdFn(), s.set(e, o), i.set(o, e)), o
        }
        getIds(t, e) {
          const n = this.getIdToRemoteIdMap(t),
            r = this.getRemoteIdToIdMap(t);
          return e.map(e => this.getId(t, e, n, r))
        }
        getRemoteId(t, e, n) {
          const r = n || this.getRemoteIdToIdMap(t);
          if ("number" != typeof e) return e;
          return r.get(e) || -1
        }
        getRemoteIds(t, e) {
          const n = this.getRemoteIdToIdMap(t);
          return e.map(e => this.getRemoteId(t, e, n))
        }
        reset(t) {
          if (!t) return this.iframeIdToRemoteIdMap = new WeakMap, void(this.iframeRemoteIdToIdMap = new WeakMap);
          this.iframeIdToRemoteIdMap.delete(t), this.iframeRemoteIdToIdMap.delete(t)
        }
        getIdToRemoteIdMap(t) {
          let e = this.iframeIdToRemoteIdMap.get(t);
          return e || (e = new Map, this.iframeIdToRemoteIdMap.set(t, e)), e
        }
        getRemoteIdToIdMap(t) {
          let e = this.iframeRemoteIdToIdMap.get(t);
          return e || (e = new Map, this.iframeRemoteIdToIdMap.set(t, e)), e
        }
      }

      function ve(t) {
        let e, n = t[0],
          r = 1;
        for (; r < t.length;) {
          const s = t[r],
            i = t[r + 1];
          if (r += 2, ("optionalAccess" === s || "optionalCall" === s) && null == n) return;
          "access" === s || "optionalAccess" === s ? (e = n, n = i(n)) : "call" !== s && "optionalCall" !== s || (n = i((...t) => n.call(e, ...t)), e = void 0)
        }
        return n
      }
      class Se {
        constructor() {
          this.crossOriginIframeMirror = new _e(X), this.crossOriginIframeRootIdMap = new WeakMap
        }
        addIframe() {}
        addLoadListener() {}
        attachIframe() {}
      }
      class be {
        constructor(t) {
          this.iframes = new WeakMap, this.crossOriginIframeMap = new WeakMap, this.crossOriginIframeMirror = new _e(X), this.crossOriginIframeRootIdMap = new WeakMap, this.mutationCb = t.mutationCb, this.wrappedEmit = t.wrappedEmit, this.stylesheetManager = t.stylesheetManager, this.recordCrossOriginIframes = t.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new _e(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = t.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
        }
        addIframe(t) {
          this.iframes.set(t, !0), t.contentWindow && this.crossOriginIframeMap.set(t.contentWindow, t)
        }
        addLoadListener(t) {
          this.loadListener = t
        }
        attachIframe(t, e) {
          this.mutationCb({
            adds: [{
              parentId: this.mirror.getId(t),
              nextId: null,
              node: e
            }],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: !0
          }), ve([this, "access", t => t.loadListener, "optionalCall", e => e(t)]), t.contentDocument && t.contentDocument.adoptedStyleSheets && t.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(t.contentDocument.adoptedStyleSheets, this.mirror.getId(t.contentDocument))
        }
        handleMessage(t) {
          const e = t;
          if ("rrweb" !== e.data.type || e.origin !== e.data.origin) return;
          if (!t.source) return;
          const n = this.crossOriginIframeMap.get(t.source);
          if (!n) return;
          const r = this.transformCrossOriginEvent(n, e.data.event);
          r && this.wrappedEmit(r, e.data.isCheckout)
        }
        transformCrossOriginEvent(t, e) {
          switch (e.type) {
            case Ut.FullSnapshot: {
              this.crossOriginIframeMirror.reset(t), this.crossOriginIframeStyleMirror.reset(t), this.replaceIdOnNode(e.data.node, t);
              const n = e.data.node.id;
              return this.crossOriginIframeRootIdMap.set(t, n), this.patchRootIdOnNode(e.data.node, n), {
                timestamp: e.timestamp,
                type: Ut.IncrementalSnapshot,
                data: {
                  source: Bt.Mutation,
                  adds: [{
                    parentId: this.mirror.getId(t),
                    nextId: null,
                    node: e.data.node
                  }],
                  removes: [],
                  texts: [],
                  attributes: [],
                  isAttachIframe: !0
                }
              }
            }
            case Ut.Meta:
            case Ut.Load:
            case Ut.DomContentLoaded:
              return !1;
            case Ut.Plugin:
              return e;
            case Ut.Custom:
              return this.replaceIds(e.data.payload, t, ["id", "parentId", "previousId", "nextId"]), e;
            case Ut.IncrementalSnapshot:
              switch (e.data.source) {
                case Bt.Mutation:
                  return e.data.adds.forEach(e => {
                    this.replaceIds(e, t, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(e.node, t);
                    const n = this.crossOriginIframeRootIdMap.get(t);
                    n && this.patchRootIdOnNode(e.node, n)
                  }), e.data.removes.forEach(e => {
                    this.replaceIds(e, t, ["parentId", "id"])
                  }), e.data.attributes.forEach(e => {
                    this.replaceIds(e, t, ["id"])
                  }), e.data.texts.forEach(e => {
                    this.replaceIds(e, t, ["id"])
                  }), e;
                case Bt.Drag:
                case Bt.TouchMove:
                case Bt.MouseMove:
                  return e.data.positions.forEach(e => {
                    this.replaceIds(e, t, ["id"])
                  }), e;
                case Bt.ViewportResize:
                  return !1;
                case Bt.MediaInteraction:
                case Bt.MouseInteraction:
                case Bt.Scroll:
                case Bt.CanvasMutation:
                case Bt.Input:
                  return this.replaceIds(e.data, t, ["id"]), e;
                case Bt.StyleSheetRule:
                case Bt.StyleDeclaration:
                  return this.replaceIds(e.data, t, ["id"]), this.replaceStyleIds(e.data, t, ["styleId"]), e;
                case Bt.Font:
                  return e;
                case Bt.Selection:
                  return e.data.ranges.forEach(e => {
                    this.replaceIds(e, t, ["start", "end"])
                  }), e;
                case Bt.AdoptedStyleSheet:
                  return this.replaceIds(e.data, t, ["id"]), this.replaceStyleIds(e.data, t, ["styleIds"]), ve([e, "access", t => t.data, "access", t => t.styles, "optionalAccess", t => t.forEach, "call", e => e(e => {
                    this.replaceStyleIds(e, t, ["styleId"])
                  })]), e
              }
          }
          return !1
        }
        replace(t, e, n, r) {
          for (const s of r)(Array.isArray(e[s]) || "number" == typeof e[s]) && (Array.isArray(e[s]) ? e[s] = t.getIds(n, e[s]) : e[s] = t.getId(n, e[s]));
          return e
        }
        replaceIds(t, e, n) {
          return this.replace(this.crossOriginIframeMirror, t, e, n)
        }
        replaceStyleIds(t, e, n) {
          return this.replace(this.crossOriginIframeStyleMirror, t, e, n)
        }
        replaceIdOnNode(t, e) {
          this.replaceIds(t, e, ["id", "rootId"]), "childNodes" in t && t.childNodes.forEach(t => {
            this.replaceIdOnNode(t, e)
          })
        }
        patchRootIdOnNode(t, e) {
          t.type === F.Document || t.rootId || (t.rootId = e), "childNodes" in t && t.childNodes.forEach(t => {
            this.patchRootIdOnNode(t, e)
          })
        }
      }
      class ke {
        init() {}
        addShadowRoot() {}
        observeAttachShadow() {}
        reset() {}
      }
      class Te {
        constructor(t) {
          this.shadowDoms = new WeakSet, this.restoreHandlers = [], this.mutationCb = t.mutationCb, this.scrollCb = t.scrollCb, this.bypassOptions = t.bypassOptions, this.mirror = t.mirror, this.init()
        }
        init() {
          this.reset(), this.patchAttachShadow(Element, document)
        }
        addShadowRoot(t, e) {
          if (!j(t)) return;
          if (this.shadowDoms.has(t)) return;
          this.shadowDoms.add(t);
          const n = ae({
            ...this.bypassOptions,
            doc: e,
            mutationCb: this.mutationCb,
            mirror: this.mirror,
            shadowDomManager: this
          }, t);
          this.restoreHandlers.push(() => n.disconnect()), this.restoreHandlers.push(ce({
            ...this.bypassOptions,
            scrollCb: this.scrollCb,
            doc: t,
            mirror: this.mirror
          })), $t(() => {
            t.adoptedStyleSheets && t.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(t.adoptedStyleSheets, this.mirror.getId(t.host)), this.restoreHandlers.push(me({
              mirror: this.mirror,
              stylesheetManager: this.bypassOptions.stylesheetManager
            }, t))
          }, 0)
        }
        observeAttachShadow(t) {
          t.contentWindow && t.contentDocument && this.patchAttachShadow(t.contentWindow.Element, t.contentDocument)
        }
        patchAttachShadow(t, e) {
          const n = this;
          this.restoreHandlers.push(bt(t.prototype, "attachShadow", function(t) {
            return function(r) {
              const s = t.call(this, r);
              return this.shadowRoot && Lt(this) && n.addShadowRoot(this.shadowRoot, e), s
            }
          }))
        }
        reset() {
          this.restoreHandlers.forEach(t => {
            try {
              t()
            } catch (t) {}
          }), this.restoreHandlers = [], this.shadowDoms = new WeakSet
        }
      }
      class we {
        reset() {}
        freeze() {}
        unfreeze() {}
        lock() {}
        unlock() {}
        snapshot() {}
      }
      class Ee {
        constructor(t) {
          this.trackedLinkElements = new WeakSet, this.styleMirror = new Nt, this.mutationCb = t.mutationCb, this.adoptedStyleSheetCb = t.adoptedStyleSheetCb
        }
        attachLinkElement(t, e) {
          "_cssText" in e.attributes && this.mutationCb({
            adds: [],
            removes: [],
            texts: [],
            attributes: [{
              id: e.id,
              attributes: e.attributes
            }]
          }), this.trackLinkElement(t)
        }
        trackLinkElement(t) {
          this.trackedLinkElements.has(t) || (this.trackedLinkElements.add(t), this.trackStylesheetInLinkElement(t))
        }
        adoptStyleSheets(t, e) {
          if (0 === t.length) return;
          const n = {
              id: e,
              styleIds: []
            },
            r = [];
          for (const e of t) {
            let t;
            this.styleMirror.has(e) ? t = this.styleMirror.getId(e) : (t = this.styleMirror.add(e), r.push({
              styleId: t,
              rules: Array.from(e.rules || CSSRule, (t, e) => ({
                rule: $(t),
                index: e
              }))
            })), n.styleIds.push(t)
          }
          r.length > 0 && (n.styles = r), this.adoptedStyleSheetCb(n)
        }
        reset() {
          this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
        }
        trackStylesheetInLinkElement(t) {}
      }
      class xe {
        constructor() {
          this.nodeMap = new WeakMap, this.loop = !0, this.periodicallyClear()
        }
        periodicallyClear() {
          ! function(...t) {
            Pt("requestAnimationFrame")(...t)
          }(() => {
            this.clear(), this.loop && this.periodicallyClear()
          })
        }
        inOtherBuffer(t, e) {
          const n = this.nodeMap.get(t);
          return n && Array.from(n).some(t => t !== e)
        }
        add(t, e) {
          this.nodeMap.set(t, (this.nodeMap.get(t) || new Set).add(e))
        }
        clear() {
          this.nodeMap = new WeakMap
        }
        destroy() {
          this.loop = !1
        }
      }
      let Ie, Ce;
      const Re = new U;

      function Me(t = {}) {
        const {
          emit: e,
          checkoutEveryNms: n,
          checkoutEveryNth: s,
          blockClass: i = "rr-block",
          blockSelector: o = null,
          unblockSelector: a = null,
          ignoreClass: c = "rr-ignore",
          ignoreSelector: u = null,
          maskAllText: l = !1,
          maskTextClass: d = "rr-mask",
          unmaskTextClass: p = null,
          maskTextSelector: h = null,
          unmaskTextSelector: m = null,
          inlineStylesheet: f = !0,
          maskAllInputs: g,
          maskInputOptions: y,
          slimDOMOptions: _,
          maskAttributeFn: v,
          maskInputFn: S,
          maskTextFn: b,
          maxCanvasSize: k = null,
          packFn: T,
          sampling: w = {},
          dataURLOptions: E = {},
          mousemoveWait: x,
          recordCanvas: I = !1,
          recordCrossOriginIframes: C = !1,
          recordAfter: R = ("DOMContentLoaded" === t.recordAfter ? t.recordAfter : "load"),
          userTriggeredOnInput: M = !1,
          collectFonts: O = !1,
          inlineImages: D = !1,
          plugins: A,
          keepIframeSrcFn: N = () => !1,
          ignoreCSSAttributes: F = new Set([]),
          errorHandler: L,
          onMutation: j,
          getCanvasManager: P
        } = t;
        ee(L);
        const $ = !C || window.parent === window;
        let B = !1;
        if (!$) try {
          window.parent.document && (B = !1)
        } catch (t) {
          B = !0
        }
        if ($ && !e) throw new Error("emit function is required");
        void 0 !== x && void 0 === w.mousemove && (w.mousemove = x), Re.reset();
        const H = !0 === g ? {
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
          } : void 0 !== y ? y : {},
          z = !0 === _ || "all" === _ ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaVerification: !0,
            headMetaAuthorship: "all" === _,
            headMetaDescKeywords: "all" === _
          } : _ || {};
        let W;
        ! function(t = window) {
          "NodeList" in t && !t.NodeList.prototype.forEach && (t.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in t && !t.DOMTokenList.prototype.forEach && (t.DOMTokenList.prototype.forEach = Array.prototype.forEach), Node.prototype.contains || (Node.prototype.contains = (...t) => {
            let e = t[0];
            if (!(0 in t)) throw new TypeError("1 argument is required");
            do {
              if (this === e) return !0
            } while (e = e && e.parentNode);
            return !1
          })
        }();
        let q = 0;
        const J = t => {
          for (const e of A || []) e.eventProcessor && (t = e.eventProcessor(t));
          return T && !B && (t = T(t)), t
        };
        Ie = (t, i) => {
          const o = t;
          if (o.timestamp = kt(), !r([ie, "access", t => t[0], "optionalAccess", t => t.isFrozen, "call", t => t()]) || o.type === Ut.FullSnapshot || o.type === Ut.IncrementalSnapshot && o.data.source === Bt.Mutation || ie.forEach(t => t.unfreeze()), $) r([e, "optionalCall", t => t(J(o), i)]);
          else if (B) {
            const t = {
              type: "rrweb",
              event: J(o),
              origin: window.location.origin,
              isCheckout: i
            };
            window.parent.postMessage(t, "*")
          }
          if (o.type === Ut.FullSnapshot) W = o, q = 0;
          else if (o.type === Ut.IncrementalSnapshot) {
            if (o.data.source === Bt.Mutation && o.data.isAttachIframe) return;
            q++;
            const t = s && q >= s,
              e = n && W && o.timestamp - W.timestamp > n;
            (t || e) && et(!0)
          }
        };
        const K = t => {
            Ie({
              type: Ut.IncrementalSnapshot,
              data: {
                source: Bt.Mutation,
                ...t
              }
            })
          },
          G = t => Ie({
            type: Ut.IncrementalSnapshot,
            data: {
              source: Bt.Scroll,
              ...t
            }
          }),
          Y = t => Ie({
            type: Ut.IncrementalSnapshot,
            data: {
              source: Bt.CanvasMutation,
              ...t
            }
          }),
          X = new Ee({
            mutationCb: K,
            adoptedStyleSheetCb: t => Ie({
              type: Ut.IncrementalSnapshot,
              data: {
                source: Bt.AdoptedStyleSheet,
                ...t
              }
            })
          }),
          V = "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__ ? new Se : new be({
            mirror: Re,
            mutationCb: K,
            stylesheetManager: X,
            recordCrossOriginIframes: C,
            wrappedEmit: Ie
          });
        for (const t of A || []) t.getMirror && t.getMirror({
          nodeMirror: Re,
          crossOriginIframeMirror: V.crossOriginIframeMirror,
          crossOriginIframeStyleMirror: V.crossOriginIframeStyleMirror
        });
        const Q = new xe,
          Z = function(t, e) {
            try {
              return t ? t(e) : new we
            } catch (t) {
              return console.warn("Unable to initialize CanvasManager"), new we
            }
          }(P, {
            mirror: Re,
            win: window,
            mutationCb: t => Ie({
              type: Ut.IncrementalSnapshot,
              data: {
                source: Bt.CanvasMutation,
                ...t
              }
            }),
            recordCanvas: I,
            blockClass: i,
            blockSelector: o,
            unblockSelector: a,
            maxCanvasSize: k,
            sampling: w.canvas,
            dataURLOptions: E,
            errorHandler: L
          }),
          tt = "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new ke : new Te({
            mutationCb: K,
            scrollCb: G,
            bypassOptions: {
              onMutation: j,
              blockClass: i,
              blockSelector: o,
              unblockSelector: a,
              maskAllText: l,
              maskTextClass: d,
              unmaskTextClass: p,
              maskTextSelector: h,
              unmaskTextSelector: m,
              inlineStylesheet: f,
              maskInputOptions: H,
              dataURLOptions: E,
              maskAttributeFn: v,
              maskTextFn: b,
              maskInputFn: S,
              recordCanvas: I,
              inlineImages: D,
              sampling: w,
              slimDOMOptions: z,
              iframeManager: V,
              stylesheetManager: X,
              canvasManager: Z,
              keepIframeSrcFn: N,
              processedNodeManager: Q
            },
            mirror: Re
          }),
          et = (t = !1) => {
            Ie({
              type: Ut.Meta,
              data: {
                href: window.location.href,
                width: Et(),
                height: wt()
              }
            }, t), X.reset(), tt.init(), ie.forEach(t => t.lock());
            const e = function(t, e) {
              const {
                mirror: n = new U,
                blockClass: r = "rr-block",
                blockSelector: s = null,
                unblockSelector: i = null,
                maskAllText: o = !1,
                maskTextClass: a = "rr-mask",
                unmaskTextClass: c = null,
                maskTextSelector: u = null,
                unmaskTextSelector: l = null,
                inlineStylesheet: d = !0,
                inlineImages: p = !1,
                recordCanvas: h = !1,
                maskAllInputs: m = !1,
                maskAttributeFn: f,
                maskTextFn: g,
                maskInputFn: y,
                slimDOM: _ = !1,
                dataURLOptions: v,
                preserveWhiteSpace: S,
                onSerialize: b,
                onIframeLoad: k,
                iframeLoadTimeout: T,
                onStylesheetLoad: w,
                stylesheetLoadTimeout: E,
                keepIframeSrcFn: x = () => !1
              } = e || {};
              return mt(t, {
                doc: t,
                mirror: n,
                blockClass: r,
                blockSelector: s,
                unblockSelector: i,
                maskAllText: o,
                maskTextClass: a,
                unmaskTextClass: c,
                maskTextSelector: u,
                unmaskTextSelector: l,
                skipChild: !1,
                inlineStylesheet: d,
                maskInputOptions: !0 === m ? {
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
                } : !1 === m ? {} : m,
                maskAttributeFn: f,
                maskTextFn: g,
                maskInputFn: y,
                slimDOMOptions: !0 === _ || "all" === _ ? {
                  script: !0,
                  comment: !0,
                  headFavicon: !0,
                  headWhitespace: !0,
                  headMetaDescKeywords: "all" === _,
                  headMetaSocial: !0,
                  headMetaRobots: !0,
                  headMetaHttpEquiv: !0,
                  headMetaAuthorship: !0,
                  headMetaVerification: !0
                } : !1 === _ ? {} : _,
                dataURLOptions: v,
                inlineImages: p,
                recordCanvas: h,
                preserveWhiteSpace: S,
                onSerialize: b,
                onIframeLoad: k,
                iframeLoadTimeout: T,
                onStylesheetLoad: w,
                stylesheetLoadTimeout: E,
                keepIframeSrcFn: x,
                newlyAddedElement: !1
              })
            }(document, {
              mirror: Re,
              blockClass: i,
              blockSelector: o,
              unblockSelector: a,
              maskAllText: l,
              maskTextClass: d,
              unmaskTextClass: p,
              maskTextSelector: h,
              unmaskTextSelector: m,
              inlineStylesheet: f,
              maskAllInputs: H,
              maskAttributeFn: v,
              maskInputFn: S,
              maskTextFn: b,
              slimDOM: z,
              dataURLOptions: E,
              recordCanvas: I,
              inlineImages: D,
              onSerialize: t => {
                Ot(t, Re) && V.addIframe(t), Dt(t, Re) && X.trackLinkElement(t), At(t) && tt.addShadowRoot(t.shadowRoot, document)
              },
              onIframeLoad: (t, e) => {
                V.attachIframe(t, e), tt.observeAttachShadow(t)
              },
              onStylesheetLoad: (t, e) => {
                X.attachLinkElement(t, e)
              },
              keepIframeSrcFn: N
            });
            if (!e) return console.warn("Failed to snapshot the document");
            Ie({
              type: Ut.FullSnapshot,
              data: {
                node: e,
                initialOffset: Tt(window)
              }
            }), ie.forEach(t => t.unlock()), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && X.adoptStyleSheets(document.adoptedStyleSheets, Re.getId(document))
          };
        Ce = et;
        try {
          const t = [],
            e = t => re(fe)({
              onMutation: j,
              mutationCb: K,
              mousemoveCb: (t, e) => Ie({
                type: Ut.IncrementalSnapshot,
                data: {
                  source: e,
                  positions: t
                }
              }),
              mouseInteractionCb: t => Ie({
                type: Ut.IncrementalSnapshot,
                data: {
                  source: Bt.MouseInteraction,
                  ...t
                }
              }),
              scrollCb: G,
              viewportResizeCb: t => Ie({
                type: Ut.IncrementalSnapshot,
                data: {
                  source: Bt.ViewportResize,
                  ...t
                }
              }),
              inputCb: t => Ie({
                type: Ut.IncrementalSnapshot,
                data: {
                  source: Bt.Input,
                  ...t
                }
              }),
              mediaInteractionCb: t => Ie({
                type: Ut.IncrementalSnapshot,
                data: {
                  source: Bt.MediaInteraction,
                  ...t
                }
              }),
              styleSheetRuleCb: t => Ie({
                type: Ut.IncrementalSnapshot,
                data: {
                  source: Bt.StyleSheetRule,
                  ...t
                }
              }),
              styleDeclarationCb: t => Ie({
                type: Ut.IncrementalSnapshot,
                data: {
                  source: Bt.StyleDeclaration,
                  ...t
                }
              }),
              canvasMutationCb: Y,
              fontCb: t => Ie({
                type: Ut.IncrementalSnapshot,
                data: {
                  source: Bt.Font,
                  ...t
                }
              }),
              selectionCb: t => {
                Ie({
                  type: Ut.IncrementalSnapshot,
                  data: {
                    source: Bt.Selection,
                    ...t
                  }
                })
              },
              customElementCb: t => {
                Ie({
                  type: Ut.IncrementalSnapshot,
                  data: {
                    source: Bt.CustomElement,
                    ...t
                  }
                })
              },
              blockClass: i,
              ignoreClass: c,
              ignoreSelector: u,
              maskAllText: l,
              maskTextClass: d,
              unmaskTextClass: p,
              maskTextSelector: h,
              unmaskTextSelector: m,
              maskInputOptions: H,
              inlineStylesheet: f,
              sampling: w,
              recordCanvas: I,
              inlineImages: D,
              userTriggeredOnInput: M,
              collectFonts: O,
              doc: t,
              maskAttributeFn: v,
              maskInputFn: S,
              maskTextFn: b,
              keepIframeSrcFn: N,
              blockSelector: o,
              unblockSelector: a,
              slimDOMOptions: z,
              dataURLOptions: E,
              mirror: Re,
              iframeManager: V,
              stylesheetManager: X,
              shadowDomManager: tt,
              processedNodeManager: Q,
              canvasManager: Z,
              ignoreCSSAttributes: F,
              plugins: r([A, "optionalAccess", t => t.filter, "call", t => t(t => t.observer), "optionalAccess", t => t.map, "call", t => t(t => ({
                observer: t.observer,
                options: t.options,
                callback: e => Ie({
                  type: Ut.Plugin,
                  data: {
                    plugin: t.name,
                    payload: e
                  }
                })
              }))]) || []
            }, {});
          V.addLoadListener(n => {
            try {
              t.push(e(n.contentDocument))
            } catch (t) {
              console.warn(t)
            }
          });
          const n = () => {
            et(), t.push(e(document))
          };
          return "interactive" === document.readyState || "complete" === document.readyState ? n() : (t.push(gt("DOMContentLoaded", () => {
            Ie({
              type: Ut.DomContentLoaded,
              data: {}
            }), "DOMContentLoaded" === R && n()
          })), t.push(gt("load", () => {
            Ie({
              type: Ut.Load,
              data: {}
            }), "load" === R && n()
          }, window))), () => {
            t.forEach(t => t()), Q.destroy(), Ce = void 0, ne()
          }
        } catch (t) {
          console.warn(t)
        }
      }

      function Oe(t) {
        return t > 9999999999 ? t : 1e3 * t
      }

      function De(t) {
        return t > 9999999999 ? t / 1e3 : t
      }

      function Ae(t, e) {
        "sentry.transaction" !== e.category && (["ui.click", "ui.input"].includes(e.category) ? t.triggerUserActivity() : t.checkAndHandleExpiredSession(), t.addUpdate(() => (t.throttledAddEvent({
          type: Ut.Custom,
          timestamp: 1e3 * (e.timestamp || 0),
          data: {
            tag: "breadcrumb",
            payload: (0, p.S8)(e, 10, 1e3)
          }
        }), "console" === e.category)))
      }

      function Ne(t) {
        return t.closest("button,a") || t
      }

      function Fe(t) {
        const e = Le(t);
        return e && e instanceof Element ? Ne(e) : e
      }

      function Le(t) {
        return function(t) {
          return "object" == typeof t && !!t && "target" in t
        }(t) ? t.target : t
      }
      let je;
      Me.mirror = Re, Me.takeFullSnapshot = function(t) {
        if (!Ce) throw new Error("please take full snapshot after start recording");
        Ce(t)
      };
      class Pe {
        constructor(t, e, n = Ae) {
          this._lastMutation = 0, this._lastScroll = 0, this._clicks = [], this._timeout = e.timeout / 1e3, this._threshold = e.threshold / 1e3, this._scollTimeout = e.scrollTimeout / 1e3, this._replay = t, this._ignoreSelector = e.ignoreSelector, this._addBreadcrumbEvent = n
        }
        addListeners() {
          const t = (e = () => {
            this._lastMutation = Ue()
          }, je || (je = [], (0, h.GS)(C, "open", function(t) {
            return function(...e) {
              if (je) try {
                je.forEach(t => t())
              } catch (t) {}
              return t.apply(C, e)
            }
          })), je.push(e), () => {
            const t = je ? je.indexOf(e) : -1;
            t > -1 && je.splice(t, 1)
          });
          var e;
          this._teardown = () => {
            t(), this._clicks = [], this._lastMutation = 0, this._lastScroll = 0
          }
        }
        removeListeners() {
          this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
        }
        handleClick(t, e) {
          if (function(t, e) {
              return !$e.includes(t.tagName) || ("INPUT" === t.tagName && !["submit", "button"].includes(t.getAttribute("type") || "") || (!("A" !== t.tagName || !(t.hasAttribute("download") || t.hasAttribute("target") && "_self" !== t.getAttribute("target"))) || !(!e || !t.matches(e))))
            }(e, this._ignoreSelector) || ! function(t) {
              return !(!t.data || "number" != typeof t.data.nodeId || !t.timestamp)
            }(t)) return;
          const n = {
            timestamp: De(t.timestamp),
            clickBreadcrumb: t,
            clickCount: 0,
            node: e
          };
          this._clicks.some(t => t.node === n.node && Math.abs(t.timestamp - n.timestamp) < 1) || (this._clicks.push(n), 1 === this._clicks.length && this._scheduleCheckClicks())
        }
        registerMutation(t = Date.now()) {
          this._lastMutation = De(t)
        }
        registerScroll(t = Date.now()) {
          this._lastScroll = De(t)
        }
        registerClick(t) {
          const e = Ne(t);
          this._handleMultiClick(e)
        }
        _handleMultiClick(t) {
          this._getClicks(t).forEach(t => {
            t.clickCount++
          })
        }
        _getClicks(t) {
          return this._clicks.filter(e => e.node === t)
        }
        _checkClicks() {
          const t = [],
            e = Ue();
          this._clicks.forEach(n => {
            !n.mutationAfter && this._lastMutation && (n.mutationAfter = n.timestamp <= this._lastMutation ? this._lastMutation - n.timestamp : void 0), !n.scrollAfter && this._lastScroll && (n.scrollAfter = n.timestamp <= this._lastScroll ? this._lastScroll - n.timestamp : void 0), n.timestamp + this._timeout <= e && t.push(n)
          });
          for (const e of t) {
            const t = this._clicks.indexOf(e);
            t > -1 && (this._generateBreadcrumbs(e), this._clicks.splice(t, 1))
          }
          this._clicks.length && this._scheduleCheckClicks()
        }
        _generateBreadcrumbs(t) {
          const e = this._replay,
            n = t.scrollAfter && t.scrollAfter <= this._scollTimeout,
            r = t.mutationAfter && t.mutationAfter <= this._threshold,
            s = !n && !r,
            {
              clickCount: i,
              clickBreadcrumb: o
            } = t;
          if (s) {
            const n = 1e3 * Math.min(t.mutationAfter || this._timeout, this._timeout),
              r = n < 1e3 * this._timeout ? "mutation" : "timeout",
              s = {
                type: "default",
                message: o.message,
                timestamp: o.timestamp,
                category: "ui.slowClickDetected",
                data: {
                  ...o.data,
                  url: C.location.href,
                  route: e.getCurrentRoute(),
                  timeAfterClickMs: n,
                  endReason: r,
                  clickCount: i || 1
                }
              };
            return void this._addBreadcrumbEvent(e, s)
          }
          if (i > 1) {
            const t = {
              type: "default",
              message: o.message,
              timestamp: o.timestamp,
              category: "ui.multiClick",
              data: {
                ...o.data,
                url: C.location.href,
                route: e.getCurrentRoute(),
                clickCount: i,
                metric: !0
              }
            };
            this._addBreadcrumbEvent(e, t)
          }
        }
        _scheduleCheckClicks() {
          this._checkClickTimeout && clearTimeout(this._checkClickTimeout), this._checkClickTimeout = setTimeout(() => this._checkClicks(), 1e3)
        }
      }
      const $e = ["A", "BUTTON", "INPUT"];

      function Ue() {
        return Date.now() / 1e3
      }

      function Be(t) {
        return {
          timestamp: Date.now() / 1e3,
          type: "default",
          ...t
        }
      }
      var He;
      ! function(t) {
        t[t.Document = 0] = "Document", t[t.DocumentType = 1] = "DocumentType", t[t.Element = 2] = "Element", t[t.Text = 3] = "Text", t[t.CDATA = 4] = "CDATA", t[t.Comment = 5] = "Comment"
      }(He || (He = {}));
      const ze = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component"]);

      function We(t) {
        const e = {};
        for (const n in t)
          if (ze.has(n)) {
            let r = n;
            "data-testid" !== n && "data-test-id" !== n || (r = "testId"), e[r] = t[n]
          } return e
      }

      function qe(t, e) {
        const n = Me.mirror.getId(t),
          r = n && Me.mirror.getNode(n),
          s = r && Me.mirror.getMeta(r),
          i = s && function(t) {
            return t.type === He.Element
          }(s) ? s : null;
        return {
          message: e,
          data: i ? {
            nodeId: n,
            node: {
              id: n,
              tagName: i.tagName,
              textContent: Array.from(i.childNodes).map(t => t.type === He.Text && t.textContent).filter(Boolean).map(t => t.trim()).join(""),
              attributes: We(i.attributes)
            }
          } : {}
        }
      }
      const Je = {
        resource: function(t) {
          const {
            entryType: e,
            initiatorType: n,
            name: r,
            responseEnd: s,
            startTime: i,
            decodedBodySize: o,
            encodedBodySize: a,
            responseStatus: c,
            transferSize: u
          } = t;
          return ["fetch", "xmlhttprequest"].includes(n) ? null : {
            type: `${e}.${n}`,
            start: Ge(i),
            end: Ge(s),
            name: r,
            data: {
              size: u,
              statusCode: c,
              decodedBodySize: o,
              encodedBodySize: a
            }
          }
        },
        paint: function(t) {
          const {
            duration: e,
            entryType: n,
            name: r,
            startTime: s
          } = t, i = Ge(s);
          return {
            type: n,
            name: r,
            start: i,
            end: i + e,
            data: void 0
          }
        },
        navigation: function(t) {
          const {
            entryType: e,
            name: n,
            decodedBodySize: r,
            duration: s,
            domComplete: i,
            encodedBodySize: o,
            domContentLoadedEventStart: a,
            domContentLoadedEventEnd: c,
            domInteractive: u,
            loadEventStart: l,
            loadEventEnd: d,
            redirectCount: p,
            startTime: h,
            transferSize: m,
            type: f
          } = t;
          return 0 === s ? null : {
            type: `${e}.${f}`,
            start: Ge(h),
            end: Ge(i),
            name: n,
            data: {
              size: m,
              decodedBodySize: r,
              encodedBodySize: o,
              duration: s,
              domInteractive: u,
              domContentLoadedEventStart: a,
              domContentLoadedEventEnd: c,
              loadEventStart: l,
              loadEventEnd: d,
              domComplete: i,
              redirectCount: p
            }
          }
        }
      };

      function Ke(t) {
        return Je[t.entryType] ? Je[t.entryType](t) : null
      }

      function Ge(t) {
        return ((f.k3 || C.performance.timeOrigin) + t) / 1e3
      }
      const Ye = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;

      function Xe(t, e) {
        Ye && (g.vF.info(t), e && Qe(t))
      }

      function Ve(t, e) {
        Ye && (g.vF.info(t), e && setTimeout(() => {
          Qe(t)
        }, 0))
      }

      function Qe(t) {
        (0, s.ZQ)({
          category: "console",
          data: {
            logger: "replay"
          },
          level: "info",
          message: t
        }, {
          level: "info"
        })
      }
      class Ze extends Error {
        constructor() {
          super("Event buffer exceeded maximum size of 20000000.")
        }
      }
      class tn {
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
        async addEvent(t) {
          const e = JSON.stringify(t).length;
          if (this._totalSize += e, this._totalSize > A) throw new Ze;
          this.events.push(t)
        }
        finish() {
          return new Promise(t => {
            const e = this.events;
            this.clear(), t(JSON.stringify(e))
          })
        }
        clear() {
          this.events = [], this._totalSize = 0, this.hasCheckout = !1
        }
        getEarliestTimestamp() {
          const t = this.events.map(t => t.timestamp).sort()[0];
          return t ? Oe(t) : null
        }
      }
      class en {
        constructor(t) {
          this._worker = t, this._id = 0
        }
        ensureReady() {
          return this._ensureReadyPromise || (this._ensureReadyPromise = new Promise((t, e) => {
            this._worker.addEventListener("message", ({
              data: n
            }) => {
              n.success ? t() : e()
            }, {
              once: !0
            }), this._worker.addEventListener("error", t => {
              e(t)
            }, {
              once: !0
            })
          })), this._ensureReadyPromise
        }
        destroy() {
          Xe("[Replay] Destroying compression worker"), this._worker.terminate()
        }
        postMessage(t, e) {
          const n = this._getAndIncrementId();
          return new Promise((r, s) => {
            const i = ({
              data: e
            }) => {
              const o = e;
              if (o.method === t && o.id === n) {
                if (this._worker.removeEventListener("message", i), !o.success) return Ye && g.vF.error("[Replay]", o.response), void s(new Error("Error in compression worker"));
                r(o.response)
              }
            };
            this._worker.addEventListener("message", i), this._worker.postMessage({
              id: n,
              method: t,
              arg: e
            })
          })
        }
        _getAndIncrementId() {
          return this._id++
        }
      }
      class nn {
        constructor(t) {
          this._worker = new en(t), this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1
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
        addEvent(t) {
          const e = Oe(t.timestamp);
          (!this._earliestTimestamp || e < this._earliestTimestamp) && (this._earliestTimestamp = e);
          const n = JSON.stringify(t);
          return this._totalSize += n.length, this._totalSize > A ? Promise.reject(new Ze) : this._sendEventToWorker(n)
        }
        finish() {
          return this._finishRequest()
        }
        clear() {
          this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this._worker.postMessage("clear").then(null, t => {
            Ye && g.vF.warn('[Replay] Sending "clear" message to worker failed', t)
          })
        }
        getEarliestTimestamp() {
          return this._earliestTimestamp
        }
        _sendEventToWorker(t) {
          return this._worker.postMessage("addEvent", t)
        }
        async _finishRequest() {
          const t = await this._worker.postMessage("finish");
          return this._earliestTimestamp = null, this._totalSize = 0, t
        }
      }
      class rn {
        constructor(t) {
          this._fallback = new tn, this._compression = new nn(t), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
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
        set hasCheckout(t) {
          this._used.hasCheckout = t
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
        addEvent(t) {
          return this._used.addEvent(t)
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
          } catch (t) {
            return void Xe("[Replay] Failed to load the compression worker, falling back to simple buffer")
          }
          await this._switchToCompressionWorker()
        }
        async _switchToCompressionWorker() {
          const {
            events: t,
            hasCheckout: e
          } = this._fallback, n = [];
          for (const e of t) n.push(this._compression.addEvent(e));
          this._compression.hasCheckout = e, this._used = this._compression;
          try {
            await Promise.all(n)
          } catch (t) {
            Ye && g.vF.warn("[Replay] Failed to add events when switching buffers.", t)
          }
        }
      }

      function sn() {
        try {
          return "sessionStorage" in C && !!C.sessionStorage
        } catch (t) {
          return !1
        }
      }

      function on(t) {
        return void 0 !== t && Math.random() < t
      }

      function an(t) {
        const e = Date.now();
        return {
          id: t.id || (0, y.eJ)(),
          started: t.started || e,
          lastActivity: t.lastActivity || e,
          segmentId: t.segmentId || 0,
          sampled: t.sampled,
          previousSessionId: t.previousSessionId
        }
      }

      function cn(t) {
        if (sn()) try {
          C.sessionStorage.setItem(R, JSON.stringify(t))
        } catch (t) {}
      }

      function un({
        sessionSampleRate: t,
        allowBuffering: e,
        stickySession: n = !1
      }, {
        previousSessionId: r
      } = {}) {
        const s = function(t, e) {
            return on(t) ? "session" : !!e && "buffer"
          }(t, e),
          i = an({
            sampled: s,
            previousSessionId: r
          });
        return n && cn(i), i
      }

      function ln(t, e, n = +new Date) {
        return null === t || void 0 === e || e < 0 || 0 !== e && t + e <= n
      }

      function dn(t, {
        maxReplayDuration: e,
        sessionIdleExpire: n,
        targetTime: r = Date.now()
      }) {
        return ln(t.started, e, r) || ln(t.lastActivity, n, r)
      }

      function pn(t, {
        sessionIdleExpire: e,
        maxReplayDuration: n
      }) {
        return !!dn(t, {
          sessionIdleExpire: e,
          maxReplayDuration: n
        }) && ("buffer" !== t.sampled || 0 !== t.segmentId)
      }

      function hn({
        traceInternals: t,
        sessionIdleExpire: e,
        maxReplayDuration: n,
        previousSessionId: r
      }, s) {
        const i = s.stickySession && function(t) {
          if (!sn()) return null;
          try {
            const e = C.sessionStorage.getItem(R);
            if (!e) return null;
            const n = JSON.parse(e);
            return Ve("[Replay] Loading existing session", t), an(n)
          } catch (t) {
            return null
          }
        }(t);
        return i ? pn(i, {
          sessionIdleExpire: e,
          maxReplayDuration: n
        }) ? (Ve("[Replay] Session in sessionStorage is expired, creating new one..."), un(s, {
          previousSessionId: i.id
        })) : i : (Ve("[Replay] Creating new session", t), un(s, {
          previousSessionId: r
        }))
      }

      function mn(t, e, n) {
        return !!gn(t, e) && (fn(t, e, n), !0)
      }
      async function fn(t, e, n) {
        if (!t.eventBuffer) return null;
        try {
          n && "buffer" === t.recordingMode && t.eventBuffer.clear(), n && (t.eventBuffer.hasCheckout = !0);
          const r = function(t, e) {
            try {
              if ("function" == typeof e && function(t) {
                  return t.type === Ut.Custom
                }(t)) return e(t)
            } catch (t) {
              return Ye && g.vF.error("[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...", t), null
            }
            return t
          }(e, t.getOptions().beforeAddRecordingEvent);
          if (!r) return;
          return await t.eventBuffer.addEvent(r)
        } catch (e) {
          const n = e && e instanceof Ze ? "addEventSizeExceeded" : "addEvent";
          Ye && g.vF.error(e), await t.stop({
            reason: n
          });
          const r = (0, s.KU)();
          r && r.recordDroppedEvent("internal_sdk_error", "replay")
        }
      }

      function gn(t, e) {
        if (!t.eventBuffer || t.isPaused() || !t.isEnabled()) return !1;
        const n = Oe(e.timestamp);
        return !(n + t.timeouts.sessionIdlePause < Date.now() || n > t.getContext().initialTimestamp + t.getOptions().maxReplayDuration && (Xe(`[Replay] Skipping event with timestamp ${n} because it is after maxReplayDuration`, t.getOptions()._experiments.traceInternals), 1))
      }

      function yn(t) {
        return !t.type
      }

      function _n(t) {
        return "transaction" === t.type
      }

      function vn(t) {
        return "feedback" === t.type
      }

      function Sn(t) {
        const e = function() {
          const t = (0, s.KU)();
          if (!t) return !1;
          const e = t.getTransport();
          return e && e.send.__sentry__baseTransport__ || !1
        }();
        return (n, r) => {
          if (!t.isEnabled() || !yn(n) && !_n(n)) return;
          const s = r && r.statusCode;
          e && (!s || s < 200 || s >= 300) || (_n(n) ? function(t, e) {
            const n = t.getContext();
            e.contexts && e.contexts.trace && e.contexts.trace.trace_id && n.traceIds.size < 100 && n.traceIds.add(e.contexts.trace.trace_id)
          }(t, n) : function(t, e) {
            const n = t.getContext();
            if (e.event_id && n.errorIds.size < 100 && n.errorIds.add(e.event_id), "buffer" !== t.recordingMode || !e.tags || !e.tags.replayId) return;
            const {
              beforeErrorSampling: r
            } = t.getOptions();
            ("function" != typeof r || r(e)) && setTimeout(() => {
              t.sendBufferedReplayOrFlush()
            })
          }(t, n))
        }
      }

      function bn(t, e) {
        return e.map(({
          type: e,
          start: n,
          end: r,
          name: s,
          data: i
        }) => {
          const o = t.throttledAddEvent({
            type: Ut.Custom,
            timestamp: n,
            data: {
              tag: "performanceSpan",
              payload: {
                op: e,
                description: s,
                startTimestamp: n,
                endTimestamp: r,
                data: i
              }
            }
          });
          return "string" == typeof o ? Promise.resolve(null) : o
        })
      }

      function kn(t, e) {
        t.isEnabled() && null !== e && (function(t, e) {
          return (!Ye || !t.getOptions()._experiments.traceInternals) && function(t, e) {
            const n = e && function(t) {
                return void 0 !== t.getClient
              }(e) ? e.getClient() : e,
              r = n && n.getDsn(),
              s = n && n.getOptions().tunnel;
            return function(t, e) {
              return !!e && t.includes(e.host)
            }(t, r) || function(t, e) {
              return !!e && i(t) === i(e)
            }(t, s)
          }(e, (0, s.KU)())
        }(t, e.name) || t.addUpdate(() => (bn(t, [e]), !0)))
      }

      function Tn(t, e) {
        if (t) try {
          if ("string" == typeof t) return e.encode(t).length;
          if (t instanceof URLSearchParams) return e.encode(t.toString()).length;
          if (t instanceof FormData) {
            const n = On(t);
            return e.encode(n).length
          }
          if (t instanceof Blob) return t.size;
          if (t instanceof ArrayBuffer) return t.byteLength
        } catch (t) {}
      }

      function wn(t) {
        if (!t) return;
        const e = parseInt(t, 10);
        return isNaN(e) ? void 0 : e
      }

      function En(t) {
        try {
          if ("string" == typeof t) return [t];
          if (t instanceof URLSearchParams) return [t.toString()];
          if (t instanceof FormData) return [On(t)];
          if (!t) return [void 0]
        } catch (e) {
          return Ye && g.vF.warn("[Replay] Failed to serialize body", t), [void 0, "BODY_PARSE_ERROR"]
        }
        return Ye && g.vF.info("[Replay] Skipping network body because of body type", t), [void 0, "UNPARSEABLE_BODY_TYPE"]
      }

      function xn(t, e) {
        if (!t) return {
          headers: {},
          size: void 0,
          _meta: {
            warnings: [e]
          }
        };
        const n = {
            ...t._meta
          },
          r = n.warnings || [];
        return n.warnings = [...r, e], t._meta = n, t
      }

      function In(t, e) {
        if (!e) return null;
        const {
          startTimestamp: n,
          endTimestamp: r,
          url: s,
          method: i,
          statusCode: o,
          request: a,
          response: c
        } = e;
        return {
          type: t,
          start: n / 1e3,
          end: r / 1e3,
          name: s,
          data: (0, h.Ce)({
            method: i,
            statusCode: o,
            request: a,
            response: c
          })
        }
      }

      function Cn(t) {
        return {
          headers: {},
          size: t,
          _meta: {
            warnings: ["URL_SKIPPED"]
          }
        }
      }

      function Rn(t, e, n) {
        if (!e && 0 === Object.keys(t).length) return;
        if (!e) return {
          headers: t
        };
        if (!n) return {
          headers: t,
          size: e
        };
        const r = {
            headers: t,
            size: e
          },
          {
            body: s,
            warnings: i
          } = function(t) {
            if (!t || "string" != typeof t) return {
              body: t
            };
            const e = t.length > O,
              n = function(t) {
                const e = t[0],
                  n = t[t.length - 1];
                return "[" === e && "]" === n || "{" === e && "}" === n
              }(t);
            if (e) {
              const e = t.slice(0, O);
              return n ? {
                body: e,
                warnings: ["MAYBE_JSON_TRUNCATED"]
              } : {
                body: `${e}…`,
                warnings: ["TEXT_TRUNCATED"]
              }
            }
            if (n) try {
              return {
                body: JSON.parse(t)
              }
            } catch (t) {}
            return {
              body: t
            }
          }(n);
        return r.body = s, i && i.length > 0 && (r._meta = {
          warnings: i
        }), r
      }

      function Mn(t, e) {
        return Object.keys(t).reduce((n, r) => {
          const s = r.toLowerCase();
          return e.includes(s) && t[r] && (n[s] = t[r]), n
        }, {})
      }

      function On(t) {
        return new URLSearchParams(t).toString()
      }

      function Dn(t, e) {
        const n = function(t, e = C.document.baseURI) {
          if (t.startsWith("http://") || t.startsWith("https://") || t.startsWith(C.location.origin)) return t;
          const n = new URL(t, e);
          if (n.origin !== new URL(e).origin) return t;
          const r = n.href;
          return !t.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r
        }(t);
        return (0, v.Xr)(n, e)
      }

      function An(t = []) {
        if (2 === t.length && "object" == typeof t[1]) return t[1].body
      }

      function Nn(t, e) {
        const n = {};
        return e.forEach(e => {
          t.get(e) && (n[e] = t.get(e))
        }), n
      }

      function Fn(t, e) {
        if (!t) return {};
        const n = t.headers;
        return n ? n instanceof Headers ? Nn(n, e) : Array.isArray(n) ? {} : Mn(n, e) : {}
      }

      function Ln(t) {
        const e = (0, s.KU)();
        try {
          const n = new TextEncoder,
            {
              networkDetailAllowUrls: r,
              networkDetailDenyUrls: s,
              networkCaptureBodies: i,
              networkRequestHeaders: o,
              networkResponseHeaders: a
            } = t.getOptions(),
            c = {
              replay: t,
              textEncoder: n,
              networkDetailAllowUrls: r,
              networkDetailDenyUrls: s,
              networkCaptureBodies: i,
              networkRequestHeaders: o,
              networkResponseHeaders: a
            };
          e && e.on ? e.on("beforeAddBreadcrumb", (t, e) => function(t, e, n) {
            if (e.data) try {
              (function(t) {
                return "xhr" === t.category
              })(e) && function(t) {
                return t && t.xhr
              }(n) && (function(t, e, n) {
                const {
                  xhr: r,
                  input: s
                } = e;
                if (!r) return;
                const i = Tn(s, n.textEncoder),
                  o = r.getResponseHeader("content-length") ? wn(r.getResponseHeader("content-length")) : function(t, e, n) {
                    try {
                      return Tn("json" === e && t && "object" == typeof t ? JSON.stringify(t) : t, n)
                    } catch (t) {
                      return
                    }
                  }(r.response, r.responseType, n.textEncoder);
                void 0 !== i && (t.data.request_body_size = i), void 0 !== o && (t.data.response_body_size = o)
              }(e, n, t), async function(t, e, n) {
                try {
                  const r = function(t, e, n) {
                      const r = Date.now(),
                        {
                          startTimestamp: s = r,
                          endTimestamp: i = r,
                          input: o,
                          xhr: a
                        } = e,
                        {
                          url: c,
                          method: u,
                          status_code: l = 0,
                          request_body_size: d,
                          response_body_size: p
                        } = t.data;
                      if (!c) return null;
                      if (!a || !Dn(c, n.networkDetailAllowUrls) || Dn(c, n.networkDetailDenyUrls)) return {
                        startTimestamp: s,
                        endTimestamp: i,
                        url: c,
                        method: u,
                        statusCode: l,
                        request: Cn(d),
                        response: Cn(p)
                      };
                      const h = a[_.Er],
                        m = h ? Mn(h.request_headers, n.networkRequestHeaders) : {},
                        f = Mn(function(t) {
                          const e = t.getAllResponseHeaders();
                          return e ? e.split("\r\n").reduce((t, e) => {
                            const [n, r] = e.split(": ");
                            return t[n.toLowerCase()] = r, t
                          }, {}) : {}
                        }(a), n.networkResponseHeaders),
                        [y, v] = n.networkCaptureBodies ? En(o) : [void 0],
                        [S, b] = n.networkCaptureBodies ? function(t) {
                          const e = [];
                          try {
                            return [t.responseText]
                          } catch (t) {
                            e.push(t)
                          }
                          try {
                            return function(t, e) {
                              try {
                                if ("string" == typeof t) return [t];
                                if (t instanceof Document) return [t.body.outerHTML];
                                if ("json" === e && t && "object" == typeof t) return [JSON.stringify(t)];
                                if (!t) return [void 0]
                              } catch (e) {
                                return Ye && g.vF.warn("[Replay] Failed to serialize body", t), [void 0, "BODY_PARSE_ERROR"]
                              }
                              return Ye && g.vF.info("[Replay] Skipping network body because of body type", t), [void 0, "UNPARSEABLE_BODY_TYPE"]
                            }(t.response, t.responseType)
                          } catch (t) {
                            e.push(t)
                          }
                          return Ye && g.vF.warn("[Replay] Failed to get xhr response body", ...e), [void 0]
                        }(a) : [void 0],
                        k = Rn(m, d, y),
                        T = Rn(f, p, S);
                      return {
                        startTimestamp: s,
                        endTimestamp: i,
                        url: c,
                        method: u,
                        statusCode: l,
                        request: v ? xn(k, v) : k,
                        response: b ? xn(T, b) : T
                      }
                    }(t, e, n),
                    s = In("resource.xhr", r);
                  kn(n.replay, s)
                } catch (t) {
                  Ye && g.vF.error("[Replay] Failed to capture xhr breadcrumb", t)
                }
              }(e, n, t)),
              function(t) {
                return "fetch" === t.category
              }(e) && function(t) {
                return t && t.response
              }(n) && (function(t, e, n) {
                const {
                  input: r,
                  response: s
                } = e, i = Tn(r ? An(r) : void 0, n.textEncoder), o = s ? wn(s.headers.get("content-length")) : void 0;
                void 0 !== i && (t.data.request_body_size = i), void 0 !== o && (t.data.response_body_size = o)
              }(e, n, t), async function(t, e, n) {
                try {
                  const r = await async function(t, e, n) {
                    const r = Date.now(),
                      {
                        startTimestamp: s = r,
                        endTimestamp: i = r
                      } = e,
                      {
                        url: o,
                        method: a,
                        status_code: c = 0,
                        request_body_size: u,
                        response_body_size: l
                      } = t.data,
                      d = Dn(o, n.networkDetailAllowUrls) && !Dn(o, n.networkDetailDenyUrls),
                      p = d ? function({
                        networkCaptureBodies: t,
                        networkRequestHeaders: e
                      }, n, r) {
                        const s = n ? (o = e, 1 === (i = n).length && "string" != typeof i[0] ? Fn(i[0], o) : 2 === i.length ? Fn(i[1], o) : {}) : {};
                        var i, o;
                        if (!t) return Rn(s, r, void 0);
                        const a = An(n),
                          [c, u] = En(a),
                          l = Rn(s, r, c);
                        return u ? xn(l, u) : l
                      }(n, e.input, u) : Cn(u),
                      h = await async function(t, {
                        networkCaptureBodies: e,
                        textEncoder: n,
                        networkResponseHeaders: r
                      }, s, i) {
                        if (!t && void 0 !== i) return Cn(i);
                        const o = s ? Nn(s.headers, r) : {};
                        if (!s || !e && void 0 !== i) return Rn(o, i, void 0);
                        const [a, c] = await async function(t) {
                          const e = function(t) {
                            try {
                              return t.clone()
                            } catch (t) {
                              Ye && g.vF.warn("[Replay] Failed to clone response body", t)
                            }
                          }(t);
                          if (!e) return [void 0, "BODY_PARSE_ERROR"];
                          try {
                            const t = await
                            function(t) {
                              return new Promise((e, n) => {
                                const r = setTimeout(() => n(new Error("Timeout while trying to read response body")), 500);
                                (async function(t) {
                                  return await t.text()
                                })(t).then(t => e(t), t => n(t)).finally(() => clearTimeout(r))
                              })
                            }(e);
                            return [t]
                          } catch (t) {
                            return Ye && g.vF.warn("[Replay] Failed to get text body from response", t), [void 0, "BODY_PARSE_ERROR"]
                          }
                        }(s), u = function(t, {
                          networkCaptureBodies: e,
                          textEncoder: n,
                          responseBodySize: r,
                          captureDetails: s,
                          headers: i
                        }) {
                          try {
                            const o = t && t.length && void 0 === r ? Tn(t, n) : r;
                            return s ? Rn(i, o, e ? t : void 0) : Cn(o)
                          } catch (t) {
                            return Ye && g.vF.warn("[Replay] Failed to serialize response body", t), Rn(i, r, void 0)
                          }
                        }(a, {
                          networkCaptureBodies: e,
                          textEncoder: n,
                          responseBodySize: i,
                          captureDetails: t,
                          headers: o
                        });
                        return c ? xn(u, c) : u
                      }(d, n, e.response, l);
                    return {
                      startTimestamp: s,
                      endTimestamp: i,
                      url: o,
                      method: a,
                      statusCode: c,
                      request: p,
                      response: h
                    }
                  }(t, e, n), s = In("resource.fetch", r);
                  kn(n.replay, s)
                } catch (t) {
                  Ye && g.vF.error("[Replay] Failed to capture fetch breadcrumb", t)
                }
              }(e, n, t))
            } catch (t) {
              Ye && g.vF.warn("Error when enriching network breadcrumb")
            }
          }(c, t, e)) : ((0, S.u)(function(t) {
            return e => {
              if (!t.isEnabled()) return;
              const n = function(t) {
                const {
                  startTimestamp: e,
                  endTimestamp: n,
                  fetchData: r,
                  response: s
                } = t;
                if (!n) return null;
                const {
                  method: i,
                  url: o
                } = r;
                return {
                  type: "resource.fetch",
                  start: e / 1e3,
                  end: n / 1e3,
                  name: o,
                  data: {
                    method: i,
                    statusCode: s ? s.status : void 0
                  }
                }
              }(e);
              kn(t, n)
            }
          }(t)), (0, _.Mn)(function(t) {
            return e => {
              if (!t.isEnabled()) return;
              const n = function(t) {
                const {
                  startTimestamp: e,
                  endTimestamp: n,
                  xhr: r
                } = t, s = r[_.Er];
                if (!e || !n || !s) return null;
                const {
                  method: i,
                  url: o,
                  status_code: a
                } = s;
                return void 0 === o ? null : {
                  type: "resource.xhr",
                  name: o,
                  start: e / 1e3,
                  end: n / 1e3,
                  data: {
                    method: i,
                    statusCode: a
                  }
                }
              }(e);
              kn(t, n)
            }
          }(t)))
        } catch (t) {}
      }
      let jn = null;

      function Pn(t) {
        return !(!t || !t.on)
      }

      function $n(t) {
        const {
          jsHeapSizeLimit: e,
          totalJSHeapSize: n,
          usedJSHeapSize: r
        } = t, s = Date.now() / 1e3;
        return {
          type: "memory",
          name: "memory",
          start: s,
          end: s,
          data: {
            memory: {
              jsHeapSizeLimit: e,
              totalJSHeapSize: n,
              usedJSHeapSize: r
            }
          }
        }
      }

      function Un(t) {
        let e = !1;
        return (n, r) => {
          if (!t.checkAndHandleExpiredSession()) return void(Ye && g.vF.warn("[Replay] Received replay event after session expired."));
          const s = r || !e;
          e = !0, t.clickDetector && function(t, e) {
            try {
              if (! function(t) {
                  return 3 === t.type
                }(e)) return;
              const {
                source: n
              } = e.data;
              if (n === Bt.Mutation && t.registerMutation(e.timestamp), n === Bt.Scroll && t.registerScroll(e.timestamp), function(t) {
                  return t.data.source === Bt.MouseInteraction
                }(e)) {
                const {
                  type: n,
                  id: r
                } = e.data, s = Me.mirror.getNode(r);
                s instanceof HTMLElement && n === Ht.Click && t.registerClick(s)
              }
            } catch (t) {}
          }(t.clickDetector, n), t.addUpdate(() => {
            if ("buffer" === t.recordingMode && s && t.setInitialState(), !mn(t, n, s)) return !0;
            if (!s) return !1;
            if (function(t, e) {
                e && t.session && 0 === t.session.segmentId && mn(t, function(t) {
                  const e = t.getOptions();
                  return {
                    type: Ut.Custom,
                    timestamp: Date.now(),
                    data: {
                      tag: "options",
                      payload: {
                        shouldRecordCanvas: t.isRecordingCanvas(),
                        sessionSampleRate: e.sessionSampleRate,
                        errorSampleRate: e.errorSampleRate,
                        useCompressionOption: e.useCompression,
                        blockAllMedia: e.blockAllMedia,
                        maskAllText: e.maskAllText,
                        maskAllInputs: e.maskAllInputs,
                        useCompression: !!t.eventBuffer && "worker" === t.eventBuffer.type,
                        networkDetailHasUrls: e.networkDetailAllowUrls.length > 0,
                        networkCaptureBodies: e.networkCaptureBodies,
                        networkRequestHasHeaders: e.networkRequestHeaders.length > 0,
                        networkResponseHasHeaders: e.networkResponseHeaders.length > 0
                      }
                    }
                  }
                }(t), !1)
              }(t, s), t.session && t.session.previousSessionId) return !0;
            if ("buffer" === t.recordingMode && t.session && t.eventBuffer) {
              const e = t.eventBuffer.getEarliestTimestamp();
              e && (Xe(`[Replay] Updating session start time to earliest event in buffer to ${new Date(e)}`, t.getOptions()._experiments.traceInternals), t.session.started = e, t.getOptions().stickySession && cn(t.session))
            }
            return "session" === t.recordingMode && t.flush(), !0
          })
        }
      }

      function Bn(t, e, n, r) {
        return (0, T.h4)((0, T.n2)(t, (0, T.Cj)(t), r, n), [
          [{
            type: "replay_event"
          }, t],
          [{
            type: "replay_recording",
            length: "string" == typeof e ? (new TextEncoder).encode(e).length : e.length
          }, e]
        ])
      }
      class Hn extends Error {
        constructor(t) {
          super(`Transport returned status code ${t}`)
        }
      }
      class zn extends Error {
        constructor(t) {
          super("Rate limit hit"), this.rateLimits = t
        }
      }
      async function Wn(t, e = {
        count: 0,
        interval: 5e3
      }) {
        const {
          recordingData: n,
          options: r
        } = t;
        if (n.length) try {
          return await async function({
            recordingData: t,
            replayId: e,
            segmentId: n,
            eventContext: r,
            timestamp: i,
            session: o
          }) {
            const u = function({
                recordingData: t,
                headers: e
              }) {
                let n;
                const r = `${JSON.stringify(e)}\n`;
                if ("string" == typeof t) n = `${r}${t}`;
                else {
                  const e = (new TextEncoder).encode(r);
                  n = new Uint8Array(e.length + t.length), n.set(e), n.set(t, e.length)
                }
                return n
              }({
                recordingData: t,
                headers: {
                  segment_id: n
                }
              }),
              {
                urls: l,
                errorIds: d,
                traceIds: p,
                initialTimestamp: h
              } = r,
              m = (0, s.KU)(),
              f = (0, s.o5)(),
              g = m && m.getTransport(),
              y = m && m.getDsn();
            if (!(m && g && y && o.sampled)) return;
            const _ = {
                type: "replay_event",
                replay_start_timestamp: h / 1e3,
                timestamp: i / 1e3,
                error_ids: d,
                trace_ids: p,
                urls: l,
                replay_id: e,
                segment_id: n,
                replay_type: o.sampled
              },
              v = await async function({
                client: t,
                scope: e,
                replayId: n,
                event: r
              }) {
                const s = {
                  event_id: n,
                  integrations: "object" != typeof t._integrations || null === t._integrations || Array.isArray(t._integrations) ? void 0 : Object.keys(t._integrations)
                };
                t.emit && t.emit("preprocessEvent", r, s);
                const i = await (0, a.mG)(t.getOptions(), r, s, e, t, (0, c.rm)());
                if (!i) return null;
                i.platform = i.platform || "javascript";
                const o = t.getSdkMetadata && t.getSdkMetadata(),
                  {
                    name: u,
                    version: l
                  } = o && o.sdk || {};
                return i.sdk = {
                  ...i.sdk,
                  name: u || "sentry.javascript.unknown",
                  version: l || "0.0.0"
                }, i
              }({
                scope: f,
                client: m,
                replayId: e,
                event: _
              });
            if (!v) return m.recordDroppedEvent("event_processor", "replay", _), void Xe("An event processor returned `null`, will not send event.");
            delete v.sdkProcessingMetadata;
            const S = Bn(v, u, y, m.getOptions().tunnel);
            let b;
            try {
              b = await g.send(S)
            } catch (t) {
              const e = new Error(M);
              try {
                e.cause = t
              } catch (t) {}
              throw e
            }
            if (!b) return b;
            if ("number" == typeof b.statusCode && (b.statusCode < 200 || b.statusCode >= 300)) throw new Hn(b.statusCode);
            const k = (0, w.wq)({}, b);
            if ((0, w.Jz)(k, "replay")) throw new zn(k);
            return b
          }(t), !0
        } catch (n) {
          if (n instanceof Hn || n instanceof zn) throw n;
          if ((0, s.o)("Replays", {
              _retryCount: e.count
            }), Ye && r._experiments && r._experiments.captureExceptions && (0, s.Cp)(n), e.count >= 3) {
            const t = new Error(`${M} - max retries exceeded`);
            try {
              t.cause = n
            } catch (t) {}
            throw t
          }
          return e.interval *= ++e.count, new Promise((n, r) => {
            setTimeout(async () => {
              try {
                await Wn(t, e), n(!0)
              } catch (t) {
                r(t)
              }
            }, e.interval)
          })
        }
      }
      const qn = "__THROTTLED";
      class Jn {
        constructor({
          options: t,
          recordingOptions: e
        }) {
          Jn.prototype.__init.call(this), Jn.prototype.__init2.call(this), Jn.prototype.__init3.call(this), Jn.prototype.__init4.call(this), Jn.prototype.__init5.call(this), Jn.prototype.__init6.call(this), this.eventBuffer = null, this.performanceEntries = [], this.replayPerformanceEntries = [], this.recordingMode = "session", this.timeouts = {
            sessionIdlePause: 3e5,
            sessionIdleExpire: 9e5
          }, this._lastActivity = Date.now(), this._isEnabled = !1, this._isPaused = !1, this._hasInitializedCoreListeners = !1, this._context = {
            errorIds: new Set,
            traceIds: new Set,
            urls: [],
            initialTimestamp: Date.now(),
            initialUrl: ""
          }, this._recordingOptions = e, this._options = t, this._debouncedFlush = function(t, e, n) {
            let r, s, i;
            const o = n && n.maxWait ? Math.max(n.maxWait, e) : 0;

            function a() {
              return c(), r = t(), r
            }

            function c() {
              void 0 !== s && clearTimeout(s), void 0 !== i && clearTimeout(i), s = i = void 0
            }

            function u() {
              return s && clearTimeout(s), s = setTimeout(a, e), o && void 0 === i && (i = setTimeout(a, o)), r
            }
            return u.cancel = c, u.flush = function() {
              return void 0 !== s || void 0 !== i ? a() : r
            }, u
          }(() => this._flush(), this._options.flushMinDelay, {
            maxWait: this._options.flushMaxDelay
          }), this._throttledAddEvent = function(t, e, n) {
            const r = new Map;
            let s = !1;
            return (...i) => {
              const o = Math.floor(Date.now() / 1e3);
              if ((t => {
                  const e = t - n;
                  r.forEach((t, n) => {
                    n < e && r.delete(n)
                  })
                })(o), [...r.values()].reduce((t, e) => t + e, 0) >= e) {
                const t = s;
                return s = !0, t ? "__SKIPPED" : qn
              }
              s = !1;
              const a = r.get(o) || 0;
              return r.set(o, a + 1), t(...i)
            }
          }((t, e) => function(t, e, n) {
            return gn(t, e) ? fn(t, e, n) : Promise.resolve(null)
          }(this, t, e), 300, 5);
          const {
            slowClickTimeout: n,
            slowClickIgnoreSelectors: r
          } = this.getOptions(), s = n ? {
            threshold: Math.min(3e3, n),
            timeout: n,
            scrollTimeout: 300,
            ignoreSelector: r ? r.join(",") : ""
          } : void 0;
          s && (this.clickDetector = new Pe(this, s))
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
        initializeSampling(t) {
          const {
            errorSampleRate: e,
            sessionSampleRate: n
          } = this._options;
          e <= 0 && n <= 0 || (this._initializeSessionForSampling(t), this.session ? !1 !== this.session.sampled && (this.recordingMode = "buffer" === this.session.sampled && 0 === this.session.segmentId ? "buffer" : "session", Ve(`[Replay] Starting replay in ${this.recordingMode} mode`, this._options._experiments.traceInternals), this._initializeRecording()) : this._handleException(new Error("Unable to initialize and create session")))
        }
        start() {
          if (this._isEnabled && "session" === this.recordingMode) throw new Error("Replay recording is already in progress");
          if (this._isEnabled && "buffer" === this.recordingMode) throw new Error("Replay buffering is in progress, call `flush()` to save the replay");
          Ve("[Replay] Starting replay in session mode", this._options._experiments.traceInternals), this._updateUserActivity();
          const t = hn({
            maxReplayDuration: this._options.maxReplayDuration,
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            traceInternals: this._options._experiments.traceInternals
          }, {
            stickySession: this._options.stickySession,
            sessionSampleRate: 1,
            allowBuffering: !1
          });
          this.session = t, this._initializeRecording()
        }
        startBuffering() {
          if (this._isEnabled) throw new Error("Replay recording is already in progress");
          Ve("[Replay] Starting replay in buffer mode", this._options._experiments.traceInternals);
          const t = hn({
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            maxReplayDuration: this._options.maxReplayDuration,
            traceInternals: this._options._experiments.traceInternals
          }, {
            stickySession: this._options.stickySession,
            sessionSampleRate: 0,
            allowBuffering: !0
          });
          this.session = t, this.recordingMode = "buffer", this._initializeRecording()
        }
        startRecording() {
          try {
            const t = this._canvas;
            this._stopRecording = Me({
              ...this._recordingOptions,
              ..."buffer" === this.recordingMode && {
                checkoutEveryNms: 6e4
              },
              emit: Un(this),
              onMutation: this._onMutationHandler,
              ...t ? {
                recordCanvas: t.recordCanvas,
                getCanvasManager: t.getCanvasManager,
                sampling: t.sampling,
                dataURLOptions: t.dataURLOptions
              } : {}
            })
          } catch (t) {
            this._handleException(t)
          }
        }
        stopRecording() {
          try {
            return this._stopRecording && (this._stopRecording(), this._stopRecording = void 0), !0
          } catch (t) {
            return this._handleException(t), !1
          }
        }
        async stop({
          forceFlush: t = !1,
          reason: e
        } = {}) {
          if (this._isEnabled) {
            this._isEnabled = !1;
            try {
              Xe("[Replay] Stopping Replay" + (e ? ` triggered by ${e}` : ""), this._options._experiments.traceInternals), this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), t && await this._flush({
                  force: !0
                }), this.eventBuffer && this.eventBuffer.destroy(), this.eventBuffer = null, n = this,
                function() {
                  if (sn()) try {
                    C.sessionStorage.removeItem(R)
                  } catch (t) {}
                }(), n.session = void 0
            } catch (t) {
              this._handleException(t)
            }
          }
          var n
        }
        pause() {
          this._isPaused || (this._isPaused = !0, this.stopRecording(), Xe("[Replay] Pausing replay", this._options._experiments.traceInternals))
        }
        resume() {
          this._isPaused && this._checkSession() && (this._isPaused = !1, this.startRecording(), Xe("[Replay] Resuming replay", this._options._experiments.traceInternals))
        }
        async sendBufferedReplayOrFlush({
          continueRecording: t = !0
        } = {}) {
          if ("session" === this.recordingMode) return this.flushImmediate();
          const e = Date.now();
          Xe("[Replay] Converting buffer to session", this._options._experiments.traceInternals), await this.flushImmediate();
          const n = this.stopRecording();
          t && n && "session" !== this.recordingMode && (this.recordingMode = "session", this.session && (this._updateUserActivity(e), this._updateSessionActivity(e), this._maybeSaveSession()), this.startRecording())
        }
        addUpdate(t) {
          const e = t();
          "buffer" !== this.recordingMode && !0 !== e && this._debouncedFlush()
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
          if (!(this._lastActivity && ln(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && "session" === this.session.sampled)) return !!this._checkSession();
          this.pause()
        }
        setInitialState() {
          const t = `${C.location.pathname}${C.location.hash}${C.location.search}`,
            e = `${C.location.origin}${t}`;
          this.performanceEntries = [], this.replayPerformanceEntries = [], this._clearContext(), this._context.initialUrl = e, this._context.initialTimestamp = Date.now(), this._context.urls.push(e)
        }
        throttledAddEvent(t, e) {
          const n = this._throttledAddEvent(t, e);
          if (n === qn) {
            const t = Be({
              category: "replay.throttled"
            });
            this.addUpdate(() => !mn(this, {
              type: 5,
              timestamp: t.timestamp || 0,
              data: {
                tag: "breadcrumb",
                payload: t,
                metric: !0
              }
            }))
          }
          return n
        }
        getCurrentRoute() {
          const t = this.lastTransaction || (0, s.o5)().getTransaction(),
            e = (t && (0, u.et)(t).data || {})[l.i_];
          if (t && e && ["route", "custom"].includes(e)) return (0, u.et)(t).description
        }
        _initializeRecording() {
          this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = function({
            useCompression: t,
            workerUrl: e
          }) {
            if (t && window.Worker) {
              const t = function(t) {
                try {
                  const e = t || ("undefined" != typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ && __SENTRY_EXCLUDE_REPLAY_WORKER__ ? "" : function() {
                    const t = new Blob(['var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==r||r<0)&&(r=0),(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},A=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},_=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=x(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},x=function(t,n,r){return-1==t.s?Math.max(x(t.l,n,r+1),x(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},C=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=_(f,15),M=b.t,E=b.l,x=_(h,15),C=x.t,U=x.l,F=D(M),I=F.c,S=F.n,L=D(C),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=_(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,C)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(C,U,0),R=C;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){A(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;A(r,m,Q[et]),m+=R[et],et>3&&(A(r,m,rt>>5&8191),m+=i[et])}else A(r,m,N[rt]),m+=P[rt]}return A(r,m,N[256]),m+P[256]},U=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},L=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=U[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,A=c.p||new n(32768),_=c.h||new n(z+1),x=Math.ceil(o/3),D=2*x,T=function(t){return(a[t]^a[t+1]<<x^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=_[H];if(A[J]=K,_[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=C(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-A[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=A[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=C(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=_,c.p=A,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},O=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},j=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(L(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();function q(t,n){n||(n={});var r=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}}(),e=t.length;r.p(t);var i,a=L(t,n,10+((i=n).filename?i.filename.length+1:0),8),s=a.length;return function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&O(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}}(a,n),O(a,s-8,r.d()),O(a,s-4,e),a}var B=function(){function t(t,n){this.c=S(),this.v=1,j.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),j.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=L(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=S();i.p(n.dictionary),O(t,2,i.d())}}(r,this.o),this.v=0),n&&O(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),G="undefined"!=typeof TextEncoder&&new TextEncoder,H="undefined"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(t){}var J=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(K(t),this.d=n||!1)},t}();function K(n,r){if(r){for(var e=new t(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(G)return G.encode(n);var a=n.length,s=new t(n.length+(n.length>>1)),o=0,f=function(t){s[o++]=t};for(i=0;i<a;++i){if(o+5>s.length){var h=new t(o+8+(a-i<<1));h.set(s),s=h}var l=n.charCodeAt(i);l<128||r?f(l):l<2048?(f(192|l>>6),f(128|63&l)):l>55295&&l<57344?(f(240|(l=65536+(1047552&l)|1023&n.charCodeAt(++i))>>18),f(128|l>>12&63),f(128|l>>6&63),f(128|63&l)):(f(224|l>>12),f(128|l>>6&63),f(128|63&l))}return b(s,0,o)}const N=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(let r=0,e=t.length;r<e;r++)n+=t[r].length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new B,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new J(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},P={clear:()=>{N.clear()},addEvent:t=>N.addEvent(t),finish:()=>N.finish(),compress:t=>function(t){return q(K(t))}(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in P&&"function"==typeof P[n])try{const t=P[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});']);
                    return URL.createObjectURL(t)
                  }());
                  if (!e) return;
                  Xe("[Replay] Using compression worker" + (t ? ` from ${t}` : ""));
                  const n = new Worker(e);
                  return new rn(n)
                } catch (t) {
                  Xe("[Replay] Failed to create compression worker")
                }
              }(e);
              if (t) return t
            }
            return Xe("[Replay] Using simple buffer"), new tn
          }({
            useCompression: this._options.useCompression,
            workerUrl: this._options.workerUrl
          }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this._isPaused = !1, this.startRecording()
        }
        _handleException(t) {
          Ye && g.vF.error("[Replay]", t), Ye && this._options._experiments && this._options._experiments.captureExceptions && (0, s.Cp)(t)
        }
        _initializeSessionForSampling(t) {
          const e = this._options.errorSampleRate > 0,
            n = hn({
              sessionIdleExpire: this.timeouts.sessionIdleExpire,
              maxReplayDuration: this._options.maxReplayDuration,
              traceInternals: this._options._experiments.traceInternals,
              previousSessionId: t
            }, {
              stickySession: this._options.stickySession,
              sessionSampleRate: this._options.sessionSampleRate,
              allowBuffering: e
            });
          this.session = n
        }
        _checkSession() {
          if (!this.session) return !1;
          const t = this.session;
          return !pn(t, {
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            maxReplayDuration: this._options.maxReplayDuration
          }) || (this._refreshSession(t), !1)
        }
        async _refreshSession(t) {
          this._isEnabled && (await this.stop({
            reason: "refresh session"
          }), this.initializeSampling(t.id))
        }
        _addListeners() {
          try {
            C.document.addEventListener("visibilitychange", this._handleVisibilityChange), C.addEventListener("blur", this._handleWindowBlur), C.addEventListener("focus", this._handleWindowFocus), C.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), this._hasInitializedCoreListeners || (function(t) {
              const e = (0, s.o5)(),
                n = (0, s.KU)();
              e.addScopeListener((t => e => {
                if (!t.isEnabled()) return;
                const n = function(t) {
                  const e = t.getLastBreadcrumb && t.getLastBreadcrumb();
                  return jn !== e && e ? (jn = e, !e.category || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(e.category) || e.category.startsWith("ui.") ? null : "console" === e.category ? function(t) {
                    const e = t.data && t.data.arguments;
                    if (!Array.isArray(e) || 0 === e.length) return Be(t);
                    let n = !1;
                    const r = e.map(t => {
                      if (!t) return t;
                      if ("string" == typeof t) return t.length > D ? (n = !0, `${t.slice(0,D)}…`) : t;
                      if ("object" == typeof t) try {
                        const e = (0, p.S8)(t, 7);
                        return JSON.stringify(e).length > D ? (n = !0, `${JSON.stringify(e,null,2).slice(0,D)}…`) : e
                      } catch (t) {}
                      return t
                    });
                    return Be({
                      ...t,
                      data: {
                        ...t.data,
                        arguments: r,
                        ...n ? {
                          _meta: {
                            warnings: ["CONSOLE_ARG_TRUNCATED"]
                          }
                        } : {}
                      }
                    })
                  }(e) : Be(e)) : null
                }(e);
                n && Ae(t, n)
              })(t)), (0, b.i)((t => e => {
                if (!t.isEnabled()) return;
                const n = function(t) {
                  const {
                    target: e,
                    message: n
                  } = function(t) {
                    const e = "click" === t.name;
                    let n, r = null;
                    try {
                      r = e ? Fe(t.event) : Le(t.event), n = (0, m.Hd)(r, {
                        maxStringLength: 200
                      }) || "<unknown>"
                    } catch (t) {
                      n = "<unknown>"
                    }
                    return {
                      target: r,
                      message: n
                    }
                  }(t);
                  return Be({
                    category: `ui.${t.name}`,
                    ...qe(e, n)
                  })
                }(e);
                if (!n) return;
                const r = "click" === e.name,
                  s = r ? e.event : void 0;
                !(r && t.clickDetector && s && s.target) || s.altKey || s.metaKey || s.ctrlKey || s.shiftKey || function(t, e, n) {
                  t.handleClick(e, n)
                }(t.clickDetector, n, Fe(e.event)), Ae(t, n)
              })(t)), (0, k._)(function(t) {
                return e => {
                  if (!t.isEnabled()) return;
                  const n = function(t) {
                    const {
                      from: e,
                      to: n
                    } = t, r = Date.now() / 1e3;
                    return {
                      type: "navigation.push",
                      start: r,
                      end: r,
                      name: n,
                      data: {
                        previous: e
                      }
                    }
                  }(e);
                  null !== n && (t.getContext().urls.push(n.name), t.triggerUserActivity(), t.addUpdate(() => (bn(t, [n]), !1)))
                }
              }(t)), Ln(t);
              const r = function(t, e = !1) {
                const n = e ? Sn(t) : void 0;
                return Object.assign((e, r) => {
                  if (!t.isEnabled()) return e;
                  if (function(t) {
                      return "replay_event" === t.type
                    }(e)) return delete e.breadcrumbs, e;
                  if (!yn(e) && !_n(e) && !vn(e)) return e;
                  if (!t.checkAndHandleExpiredSession()) return e;
                  if (vn(e)) return t.flush(), e.contexts.feedback.replay_id = t.getSessionId(),
                    function(t, e) {
                      t.triggerUserActivity(), t.addUpdate(() => !e.timestamp || (t.throttledAddEvent({
                        type: Ut.Custom,
                        timestamp: 1e3 * e.timestamp,
                        data: {
                          tag: "breadcrumb",
                          payload: {
                            timestamp: e.timestamp,
                            type: "default",
                            category: "sentry.feedback",
                            data: {
                              feedbackId: e.event_id
                            }
                          }
                        }
                      }), !1))
                    }(t, e), e;
                  if (function(t, e) {
                      return !(t.type || !t.exception || !t.exception.values || !t.exception.values.length || !e.originalException || !e.originalException.__rrweb__)
                    }(e, r) && !t.getOptions()._experiments.captureExceptions) return Ye && g.vF.log("[Replay] Ignoring error from rrweb internals", e), null;
                  const s = function(t, e) {
                    return "buffer" === t.recordingMode && e.message !== M && !(!e.exception || e.type) && on(t.getOptions().errorSampleRate)
                  }(t, e);
                  return (s || "session" === t.recordingMode) && (e.tags = {
                    ...e.tags,
                    replayId: t.getSessionId()
                  }), n && n(e, {
                    statusCode: 200
                  }), e
                }, {
                  id: "Replay"
                })
              }(t, !Pn(n));
              n && n.addEventProcessor ? n.addEventProcessor(r) : (0, o.S)(r), Pn(n) && (n.on("beforeSendEvent", function(t) {
                return e => {
                  t.isEnabled() && yn(e) && function(t, e) {
                    const n = e.exception && e.exception.values && e.exception.values[0].value;
                    "string" == typeof n && (n.match(/reactjs\.org\/docs\/error-decoder\.html\?invariant=(418|419|422|423|425)/) || n.match(/(does not match server-rendered HTML|Hydration failed because)/i)) && Ae(t, Be({
                      category: "replay.hydrate-error"
                    }))
                  }(t, e)
                }
              }(t)), n.on("afterSendEvent", Sn(t)), n.on("createDsc", e => {
                const n = t.getSessionId();
                n && t.isEnabled() && "session" === t.recordingMode && t.checkAndHandleExpiredSession() && (e.replay_id = n)
              }), n.on("startTransaction", e => {
                t.lastTransaction = e
              }), n.on("finishTransaction", e => {
                t.lastTransaction = e
              }), n.on("beforeSendFeedback", (e, n) => {
                const r = t.getSessionId();
                n && n.includeReplay && t.isEnabled() && r && e.contexts && e.contexts.feedback && (e.contexts.feedback.replay_id = r)
              }))
            }(this), this._hasInitializedCoreListeners = !0)
          } catch (t) {
            this._handleException(t)
          }
          this._performanceCleanupCallback = function(t) {
            function e(e) {
              t.performanceEntries.includes(e) || t.performanceEntries.push(e)
            }

            function n({
              entries: t
            }) {
              t.forEach(e)
            }
            const r = [];
            return ["navigation", "paint", "resource"].forEach(t => {
              r.push((0, I.wv)(t, n))
            }), r.push((0, I.Pt)(({
              metric: e
            }) => {
              t.replayPerformanceEntries.push(function(t) {
                const e = t.entries,
                  n = e[e.length - 1],
                  r = n ? n.element : void 0,
                  s = t.value,
                  i = Ge(s);
                return {
                  type: "largest-contentful-paint",
                  name: "largest-contentful-paint",
                  start: i,
                  end: i,
                  data: {
                    value: s,
                    size: s,
                    nodeId: r ? Me.mirror.getId(r) : void 0
                  }
                }
              }(e))
            })), () => {
              r.forEach(t => t())
            }
          }(this)
        }
        _removeListeners() {
          try {
            C.document.removeEventListener("visibilitychange", this._handleVisibilityChange), C.removeEventListener("blur", this._handleWindowBlur), C.removeEventListener("focus", this._handleWindowFocus), C.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceCleanupCallback && this._performanceCleanupCallback()
          } catch (t) {
            this._handleException(t)
          }
        }
        __init() {
          this._handleVisibilityChange = () => {
            "visible" === C.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
          }
        }
        __init2() {
          this._handleWindowBlur = () => {
            const t = Be({
              category: "ui.blur"
            });
            this._doChangeToBackgroundTasks(t)
          }
        }
        __init3() {
          this._handleWindowFocus = () => {
            const t = Be({
              category: "ui.focus"
            });
            this._doChangeToForegroundTasks(t)
          }
        }
        __init4() {
          this._handleKeyboardEvent = t => {
            ! function(t, e) {
              if (!t.isEnabled()) return;
              t.updateUserActivity();
              const n = function(t) {
                const {
                  metaKey: e,
                  shiftKey: n,
                  ctrlKey: r,
                  altKey: s,
                  key: i,
                  target: o
                } = t;
                if (!o || function(t) {
                    return "INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable
                  }(o) || !i) return null;
                const a = e || r || s,
                  c = 1 === i.length;
                if (!a && c) return null;
                const u = (0, m.Hd)(o, {
                  maxStringLength: 200
                }) || "<unknown>";
                return Be({
                  category: "ui.keyDown",
                  message: u,
                  data: {
                    ...qe(o, u).data,
                    metaKey: e,
                    shiftKey: n,
                    ctrlKey: r,
                    altKey: s,
                    key: i
                  }
                })
              }(e);
              n && Ae(t, n)
            }(this, t)
          }
        }
        _doChangeToBackgroundTasks(t) {
          this.session && (dn(this.session, {
            maxReplayDuration: this._options.maxReplayDuration,
            sessionIdleExpire: this.timeouts.sessionIdleExpire
          }) || (t && this._createCustomBreadcrumb(t), this.conditionalFlush()))
        }
        _doChangeToForegroundTasks(t) {
          this.session && (this.checkAndHandleExpiredSession() ? t && this._createCustomBreadcrumb(t) : Xe("[Replay] Document has become active, but session has expired"))
        }
        _updateUserActivity(t = Date.now()) {
          this._lastActivity = t
        }
        _updateSessionActivity(t = Date.now()) {
          this.session && (this.session.lastActivity = t, this._maybeSaveSession())
        }
        _createCustomBreadcrumb(t) {
          this.addUpdate(() => {
            this.throttledAddEvent({
              type: Ut.Custom,
              timestamp: t.timestamp || 0,
              data: {
                tag: "breadcrumb",
                payload: t
              }
            })
          })
        }
        _addPerformanceEntries() {
          const t = (e = this.performanceEntries, e.map(Ke).filter(Boolean)).concat(this.replayPerformanceEntries);
          var e;
          return this.performanceEntries = [], this.replayPerformanceEntries = [], Promise.all(bn(this, t))
        }
        _clearContext() {
          this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.urls = []
        }
        _updateInitialTimestampFromEventBuffer() {
          const {
            session: t,
            eventBuffer: e
          } = this;
          if (!t || !e) return;
          if (t.segmentId) return;
          const n = e.getEarliestTimestamp();
          n && n < this._context.initialTimestamp && (this._context.initialTimestamp = n)
        }
        _popEventContext() {
          const t = {
            initialTimestamp: this._context.initialTimestamp,
            initialUrl: this._context.initialUrl,
            errorIds: Array.from(this._context.errorIds),
            traceIds: Array.from(this._context.traceIds),
            urls: this._context.urls
          };
          return this._clearContext(), t
        }
        async _runFlush() {
          const t = this.getSessionId();
          if (this.session && this.eventBuffer && t) {
            if (await this._addPerformanceEntries(), this.eventBuffer && this.eventBuffer.hasEvents && (await async function(t) {
                try {
                  return Promise.all(bn(t, [$n(C.performance.memory)]))
                } catch (t) {
                  return []
                }
              }(this), this.eventBuffer && t === this.getSessionId())) try {
              this._updateInitialTimestampFromEventBuffer();
              const e = Date.now();
              if (e - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4) throw new Error("Session is too long, not sending replay");
              const n = this._popEventContext(),
                r = this.session.segmentId++;
              this._maybeSaveSession();
              const s = await this.eventBuffer.finish();
              await Wn({
                replayId: t,
                recordingData: s,
                segmentId: r,
                eventContext: n,
                session: this.session,
                options: this.getOptions(),
                timestamp: e
              })
            } catch (t) {
              this._handleException(t), this.stop({
                reason: "sendReplay"
              });
              const e = (0, s.KU)();
              e && e.recordDroppedEvent("send_error", "replay")
            }
          } else Ye && g.vF.error("[Replay] No session or eventBuffer found to flush.")
        }
        __init5() {
          this._flush = async ({
            force: t = !1
          } = {}) => {
            if (!this._isEnabled && !t) return;
            if (!this.checkAndHandleExpiredSession()) return void(Ye && g.vF.error("[Replay] Attempting to finish replay event after session expired."));
            if (!this.session) return;
            const e = this.session.started,
              n = Date.now() - e;
            this._debouncedFlush.cancel();
            const r = n < this._options.minReplayDuration,
              s = n > this._options.maxReplayDuration + 5e3;
            if (r || s) return Xe(`[Replay] Session duration (${Math.floor(n/1e3)}s) is too ${r?"short":"long"}, not sending replay.`, this._options._experiments.traceInternals), void(r && this._debouncedFlush());
            const i = this.eventBuffer;
            if (i && 0 === this.session.segmentId && !i.hasCheckout && Xe("[Replay] Flushing initial segment without checkout.", this._options._experiments.traceInternals), !this._flushLock) return this._flushLock = this._runFlush(), await this._flushLock, void(this._flushLock = void 0);
            try {
              await this._flushLock
            } catch (t) {
              Ye && g.vF.error(t)
            } finally {
              this._debouncedFlush()
            }
          }
        }
        _maybeSaveSession() {
          this.session && this._options.stickySession && cn(this.session)
        }
        __init6() {
          this._onMutationHandler = t => {
            const e = t.length,
              n = this._options.mutationLimit,
              r = n && e > n;
            if (e > this._options.mutationBreadcrumbLimit || r) {
              const t = Be({
                category: "replay.mutations",
                data: {
                  count: e,
                  limit: r
                }
              });
              this._createCustomBreadcrumb(t)
            }
            return !r || (this.stop({
              reason: "mutationLimit",
              forceFlush: "session" === this.recordingMode
            }), !1)
          }
        }
      }

      function Kn(t, e, n, r) {
        const s = [...t, ..."string" == typeof r ? r.split(",") : [], ...e];
        return void 0 !== n && ("string" == typeof n && s.push(`.${n}`), (0, g.pq)(() => {
          console.warn("[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration.")
        })), s.join(",")
      }
      const Gn = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
        Yn = ["content-length", "content-type", "accept"];
      let Xn = !1;
      const Vn = t => new Qn(t);
      class Qn {
        static __initStatic() {
          this.id = "Replay"
        }
        constructor({
          flushMinDelay: t = 5e3,
          flushMaxDelay: e = 5500,
          minReplayDuration: n = 4999,
          maxReplayDuration: r = 36e5,
          stickySession: s = !0,
          useCompression: i = !0,
          workerUrl: o,
          _experiments: a = {},
          sessionSampleRate: c,
          errorSampleRate: u,
          maskAllText: l = !0,
          maskAllInputs: d = !0,
          blockAllMedia: p = !0,
          mutationBreadcrumbLimit: h = 750,
          mutationLimit: m = 1e4,
          slowClickTimeout: f = 7e3,
          slowClickIgnoreSelectors: g = [],
          networkDetailAllowUrls: y = [],
          networkDetailDenyUrls: _ = [],
          networkCaptureBodies: v = !0,
          networkRequestHeaders: S = [],
          networkResponseHeaders: b = [],
          mask: k = [],
          maskAttributes: T = ["title", "placeholder"],
          unmask: w = [],
          block: E = [],
          unblock: I = [],
          ignore: C = [],
          maskFn: R,
          beforeAddRecordingEvent: M,
          beforeErrorSampling: O,
          blockClass: D,
          blockSelector: A,
          maskInputOptions: N,
          maskTextClass: F,
          maskTextSelector: L,
          ignoreClass: j
        } = {}) {
          this.name = Qn.id;
          const P = function({
            mask: t,
            unmask: e,
            block: n,
            unblock: r,
            ignore: s,
            blockClass: i,
            blockSelector: o,
            maskTextClass: a,
            maskTextSelector: c,
            ignoreClass: u
          }) {
            const l = {
              maskTextSelector: Kn(t, [".sentry-mask", "[data-sentry-mask]"], a, c),
              unmaskTextSelector: Kn(e, [".sentry-unmask", "[data-sentry-unmask]"]),
              blockSelector: Kn(n, [".sentry-block", "[data-sentry-block]", 'base[href="/"]'], i, o),
              unblockSelector: Kn(r, [".sentry-unblock", "[data-sentry-unblock]"]),
              ignoreSelector: Kn(s, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'], u)
            };
            return i instanceof RegExp && (l.blockClass = i), a instanceof RegExp && (l.maskTextClass = a), l
          }({
            mask: k,
            unmask: w,
            block: E,
            unblock: I,
            ignore: C,
            blockClass: D,
            blockSelector: A,
            maskTextClass: F,
            maskTextSelector: L,
            ignoreClass: j
          });
          if (this._recordingOptions = {
              maskAllInputs: d,
              maskAllText: l,
              maskInputOptions: {
                ...N || {},
                password: !0
              },
              maskTextFn: R,
              maskInputFn: R,
              maskAttributeFn: (t, e, n) => function({
                el: t,
                key: e,
                maskAttributes: n,
                maskAllText: r,
                privacyOptions: s,
                value: i
              }) {
                return r ? s.unmaskTextSelector && t.matches(s.unmaskTextSelector) ? i : n.includes(e) || "value" === e && "INPUT" === t.tagName && ["submit", "button"].includes(t.getAttribute("type") || "") ? i.replace(/[\S]/g, "*") : i : i
              }({
                maskAttributes: T,
                maskAllText: l,
                privacyOptions: P,
                key: t,
                value: e,
                el: n
              }),
              ...P,
              slimDOMOptions: "all",
              inlineStylesheet: !0,
              inlineImages: !1,
              collectFonts: !0,
              errorHandler: t => {
                try {
                  t.__rrweb__ = !0
                } catch (t) {}
              }
            }, this._initialOptions = {
              flushMinDelay: t,
              flushMaxDelay: e,
              minReplayDuration: Math.min(n, 15e3),
              maxReplayDuration: Math.min(r, 36e5),
              stickySession: s,
              sessionSampleRate: c,
              errorSampleRate: u,
              useCompression: i,
              workerUrl: o,
              blockAllMedia: p,
              maskAllInputs: d,
              maskAllText: l,
              mutationBreadcrumbLimit: h,
              mutationLimit: m,
              slowClickTimeout: f,
              slowClickIgnoreSelectors: g,
              networkDetailAllowUrls: y,
              networkDetailDenyUrls: _,
              networkCaptureBodies: v,
              networkRequestHeaders: Zn(S),
              networkResponseHeaders: Zn(b),
              beforeAddRecordingEvent: M,
              beforeErrorSampling: O,
              _experiments: a
            }, "number" == typeof c && (console.warn(`[Replay] You are passing \`sessionSampleRate\` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure \`replaysSessionSampleRate\` directly in the SDK init options, e.g.:\nSentry.init({ replaysSessionSampleRate: ${c} })`), this._initialOptions.sessionSampleRate = c), "number" == typeof u && (console.warn(`[Replay] You are passing \`errorSampleRate\` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure \`replaysOnErrorSampleRate\` directly in the SDK init options, e.g.:\nSentry.init({ replaysOnErrorSampleRate: ${u} })`), this._initialOptions.errorSampleRate = u), this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${Gn}` : Gn), this._isInitialized && x()) throw new Error("Multiple Sentry Session Replay instances are not supported");
          this._isInitialized = !0
        }
        get _isInitialized() {
          return Xn
        }
        set _isInitialized(t) {
          Xn = t
        }
        setupOnce() {
          x() && (this._setup(), setTimeout(() => this._initialize()))
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
        flush(t) {
          return this._replay && this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(t) : Promise.resolve()
        }
        getReplayId() {
          if (this._replay && this._replay.isEnabled()) return this._replay.getSessionId()
        }
        _initialize() {
          this._replay && (this._maybeLoadFromReplayCanvasIntegration(), this._replay.initializeSampling())
        }
        _setup() {
          const t = function(t) {
            const e = (0, s.KU)(),
              n = e && e.getOptions(),
              r = {
                sessionSampleRate: 0,
                errorSampleRate: 0,
                ...(0, h.Ce)(t)
              };
            return n ? (null == t.sessionSampleRate && null == t.errorSampleRate && null == n.replaysSessionSampleRate && null == n.replaysOnErrorSampleRate && (0, g.pq)(() => {
              console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.")
            }), "number" == typeof n.replaysSessionSampleRate && (r.sessionSampleRate = n.replaysSessionSampleRate), "number" == typeof n.replaysOnErrorSampleRate && (r.errorSampleRate = n.replaysOnErrorSampleRate), r) : ((0, g.pq)(() => {
              console.warn("SDK client is not available.")
            }), r)
          }(this._initialOptions);
          this._replay = new Jn({
            options: t,
            recordingOptions: this._recordingOptions
          })
        }
        _maybeLoadFromReplayCanvasIntegration() {
          try {
            const t = (0, s.KU)().getIntegrationByName("ReplayCanvas");
            if (!t) return;
            this._replay._canvas = t.getOptions()
          } catch (t) {}
        }
      }

      function Zn(t) {
        return [...Yn, ...t.map(t => t.toLowerCase())]
      }
      Qn.__initStatic()
    },
    14332(t, e, n) {
      "use strict";
      n.d(e, {
        De: () => u,
        hF: () => o,
        yD: () => c
      });
      var r = n(9672),
        s = n(16732),
        i = n(61952);
      const o = "baggage",
        a = /^sentry-/;

      function c(t) {
        if (!(0, s.Kg)(t) && !Array.isArray(t)) return;
        let e = {};
        if (Array.isArray(t)) e = t.reduce((t, e) => {
          const n = l(e);
          for (const e of Object.keys(n)) t[e] = n[e];
          return t
        }, {});
        else {
          if (!t) return;
          e = l(t)
        }
        const n = Object.entries(e).reduce((t, [e, n]) => (e.match(a) && (t[e.slice(7)] = n), t), {});
        return Object.keys(n).length > 0 ? n : void 0
      }

      function u(t) {
        if (t) return function(t) {
          if (0 !== Object.keys(t).length) return Object.entries(t).reduce((t, [e, n], s) => {
            const o = `${encodeURIComponent(e)}=${encodeURIComponent(n)}`,
              a = 0 === s ? o : `${t},${o}`;
            return a.length > 8192 ? (r.T && i.vF.warn(`Not adding key: ${e} with val: ${n} to baggage header due to exceeding baggage size limits.`), t) : a
          }, "")
        }(Object.entries(t).reduce((t, [e, n]) => (n && (t[`sentry-${e}`] = n), t), {}))
      }

      function l(t) {
        return t.split(",").map(t => t.split("=").map(t => decodeURIComponent(t.trim()))).reduce((t, [e, n]) => (t[e] = n, t), {})
      }
    },
    59834(t, e, n) {
      "use strict";
      n.d(e, {
        $N: () => a,
        Hd: () => i,
        NX: () => c,
        xE: () => u
      });
      var r = n(16732);
      const s = (0, n(9929).VZ)();

      function i(t, e = {}) {
        if (!t) return "<unknown>";
        try {
          let n = t;
          const r = 5,
            s = [];
          let i = 0,
            a = 0;
          const c = " > ",
            u = c.length;
          let l;
          const d = Array.isArray(e) ? e : e.keyAttrs,
            p = !Array.isArray(e) && e.maxStringLength || 80;
          for (; n && i++ < r && (l = o(n, d), !("html" === l || i > 1 && a + s.length * u + l.length >= p));) s.push(l), a += l.length, n = n.parentNode;
          return s.reverse().join(c)
        } catch (t) {
          return "<unknown>"
        }
      }

      function o(t, e) {
        const n = t,
          i = [];
        let o, a, c, u, l;
        if (!n || !n.tagName) return "";
        if (s.HTMLElement && n instanceof HTMLElement && n.dataset && n.dataset.sentryComponent) return n.dataset.sentryComponent;
        i.push(n.tagName.toLowerCase());
        const d = e && e.length ? e.filter(t => n.getAttribute(t)).map(t => [t, n.getAttribute(t)]) : null;
        if (d && d.length) d.forEach(t => {
          i.push(`[${t[0]}="${t[1]}"]`)
        });
        else if (n.id && i.push(`#${n.id}`), o = n.className, o && (0, r.Kg)(o))
          for (a = o.split(/\s+/), l = 0; l < a.length; l++) i.push(`.${a[l]}`);
        const p = ["aria-label", "type", "name", "title", "alt"];
        for (l = 0; l < p.length; l++) c = p[l], u = n.getAttribute(c), u && i.push(`[${c}="${u}"]`);
        return i.join("")
      }

      function a() {
        try {
          return s.document.location.href
        } catch (t) {
          return ""
        }
      }

      function c(t) {
        return s.document && s.document.querySelector ? s.document.querySelector(t) : null
      }

      function u(t) {
        if (!s.HTMLElement) return null;
        let e = t;
        for (let t = 0; t < 5; t++) {
          if (!e) return null;
          if (e instanceof HTMLElement && e.dataset.sentryComponent) return e.dataset.sentryComponent;
          e = e.parentNode
        }
        return null
      }
    },
    9672(t, e, n) {
      "use strict";
      n.d(e, {
        T: () => r
      });
      const r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
    },
    85771(t, e, n) {
      "use strict";
      n.d(e, {
        AD: () => u,
        SB: () => o,
        hH: () => a
      });
      var r = n(9672),
        s = n(61952);
      const i = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

      function o(t, e = !1) {
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

      function a(t) {
        const e = i.exec(t);
        if (!e) return void(0, s.pq)(() => {
          console.error(`Invalid Sentry Dsn: ${t}`)
        });
        const [n, r, o = "", a, u = "", l] = e.slice(1);
        let d = "",
          p = l;
        const h = p.split("/");
        if (h.length > 1 && (d = h.slice(0, -1).join("/"), p = h.pop()), p) {
          const t = p.match(/^\d+/);
          t && (p = t[0])
        }
        return c({
          host: a,
          pass: o,
          path: d,
          projectId: p,
          port: u,
          protocol: n,
          publicKey: r
        })
      }

      function c(t) {
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

      function u(t) {
        const e = "string" == typeof t ? a(t) : c(t);
        if (e && function(t) {
            if (!r.T) return !0;
            const {
              port: e,
              projectId: n,
              protocol: i
            } = t;
            return !(["protocol", "publicKey", "host", "projectId"].find(e => !t[e] && (s.vF.error(`Invalid Sentry Dsn: ${e} missing`), !0)) || (n.match(/^\d+$/) ? function(t) {
              return "http" === t || "https" === t
            }(i) ? e && isNaN(parseInt(e, 10)) && (s.vF.error(`Invalid Sentry Dsn: Invalid port ${e}`), 1) : (s.vF.error(`Invalid Sentry Dsn: Invalid protocol ${i}`), 1) : (s.vF.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), 1)))
          }(e)) return e
      }
    },
    43929(t, e, n) {
      "use strict";

      function r() {
        return "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__
      }

      function s() {
        return "npm"
      }
      n.d(e, {
        Z: () => r,
        e: () => s
      })
    },
    50332(t, e, n) {
      "use strict";
      n.d(e, {
        Cj: () => m,
        W3: () => a,
        bN: () => l,
        bm: () => d,
        h4: () => o,
        n2: () => f,
        yH: () => c,
        zk: () => h
      });
      var r = n(85771),
        s = n(50193),
        i = n(22423);

      function o(t, e = []) {
        return [t, e]
      }

      function a(t, e) {
        const [n, r] = t;
        return [n, [...r, e]]
      }

      function c(t, e) {
        const n = t[1];
        for (const t of n)
          if (e(t, t[0].type)) return !0;
        return !1
      }

      function u(t, e) {
        return (e || new TextEncoder).encode(t)
      }

      function l(t, e) {
        const [n, r] = t;
        let i = JSON.stringify(n);

        function o(t) {
          "string" == typeof i ? i = "string" == typeof t ? i + t : [u(i, e), t] : i.push("string" == typeof t ? u(t, e) : t)
        }
        for (const t of r) {
          const [e, n] = t;
          if (o(`\n${JSON.stringify(e)}\n`), "string" == typeof n || n instanceof Uint8Array) o(n);
          else {
            let t;
            try {
              t = JSON.stringify(n)
            } catch (e) {
              t = JSON.stringify((0, s.S8)(n))
            }
            o(t)
          }
        }
        return "string" == typeof i ? i : function(t) {
          const e = t.reduce((t, e) => t + e.length, 0),
            n = new Uint8Array(e);
          let r = 0;
          for (const e of t) n.set(e, r), r += e.length;
          return n
        }(i)
      }

      function d(t, e) {
        const n = "string" == typeof t.data ? u(t.data, e) : t.data;
        return [(0, i.Ce)({
          type: "attachment",
          length: n.length,
          filename: t.filename,
          content_type: t.contentType,
          attachment_type: t.attachmentType
        }), n]
      }
      const p = {
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

      function h(t) {
        return p[t]
      }

      function m(t) {
        if (!t || !t.sdk) return;
        const {
          name: e,
          version: n
        } = t.sdk;
        return {
          name: e,
          version: n
        }
      }

      function f(t, e, n, s) {
        const o = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
        return {
          event_id: t.event_id,
          sent_at: (new Date).toISOString(),
          ...e && {
            sdk: e
          },
          ...!!n && s && {
            dsn: (0, r.SB)(s)
          },
          ...o && {
            trace: (0, i.Ce)({
              ...o
            })
          }
        }
      }
    },
    78176(t, e, n) {
      "use strict";
      n.d(e, {
        U: () => r
      });
      class r extends Error {
        constructor(t, e = "warn") {
          super(t), this.message = t, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = e
        }
      }
    },
    6122(t, e, n) {
      "use strict";
      n.d(e, {
        AS: () => u,
        aj: () => l,
        s5: () => c
      });
      var r = n(9672),
        s = n(61952),
        i = n(40841);
      const o = {},
        a = {};

      function c(t, e) {
        o[t] = o[t] || [], o[t].push(e)
      }

      function u(t, e) {
        a[t] || (e(), a[t] = !0)
      }

      function l(t, e) {
        const n = t && o[t];
        if (n)
          for (const o of n) try {
            o(e)
          } catch (e) {
            r.T && s.vF.error(`Error while triggering instrumentation handler.\nType: ${t}\nName: ${(0,i.qQ)(o)}\nError:`, e)
          }
      }
    },
    7250(t, e, n) {
      "use strict";
      n.d(e, {
        i: () => d
      });
      var r = n(86788),
        s = n(22423),
        i = n(9929),
        o = n(6122);
      const a = i.OW;
      let c, u, l;

      function d(t) {
        (0, o.s5)("dom", t), (0, o.AS)("dom", p)
      }

      function p() {
        if (!a.document) return;
        const t = o.aj.bind(null, "dom"),
          e = h(t, !0);
        a.document.addEventListener("click", e, !1), a.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach(e => {
          const n = a[e] && a[e].prototype;
          n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0, s.GS)(n, "addEventListener", function(e) {
            return function(n, r, s) {
              if ("click" === n || "keypress" == n) try {
                const r = this,
                  i = r.__sentry_instrumentation_handlers__ = r.__sentry_instrumentation_handlers__ || {},
                  o = i[n] = i[n] || {
                    refCount: 0
                  };
                if (!o.handler) {
                  const r = h(t);
                  o.handler = r, e.call(this, n, r, s)
                }
                o.refCount++
              } catch (t) {}
              return e.call(this, n, r, s)
            }
          }), (0, s.GS)(n, "removeEventListener", function(t) {
            return function(e, n, r) {
              if ("click" === e || "keypress" == e) try {
                const n = this,
                  s = n.__sentry_instrumentation_handlers__ || {},
                  i = s[e];
                i && (i.refCount--, i.refCount <= 0 && (t.call(this, e, i.handler, r), i.handler = void 0, delete s[e]), 0 === Object.keys(s).length && delete n.__sentry_instrumentation_handlers__)
              } catch (t) {}
              return t.call(this, e, n, r)
            }
          }))
        })
      }

      function h(t, e = !1) {
        return n => {
          if (!n || n._sentryCaptured) return;
          const i = function(t) {
            try {
              return t.target
            } catch (t) {
              return null
            }
          }(n);
          if (function(t, e) {
              return "keypress" === t && (!e || !e.tagName || "INPUT" !== e.tagName && "TEXTAREA" !== e.tagName && !e.isContentEditable)
            }(n.type, i)) return;
          (0, s.my)(n, "_sentryCaptured", !0), i && !i._sentryId && (0, s.my)(i, "_sentryId", (0, r.eJ)());
          const o = "keypress" === n.type ? "input" : n.type;
          (function(t) {
            if (t.type !== u) return !1;
            try {
              if (!t.target || t.target._sentryId !== l) return !1
            } catch (t) {}
            return !0
          })(n) || (t({
            event: n,
            name: o,
            global: e
          }), u = n.type, l = i ? i._sentryId : void 0), clearTimeout(c), c = a.setTimeout(() => {
            l = void 0, u = void 0
          }, 1e3)
        }
      }
    },
    80094(t, e, n) {
      "use strict";
      n.d(e, {
        u: () => a
      });
      var r = n(22423),
        s = n(78180),
        i = n(9929),
        o = n(6122);

      function a(t) {
        const e = "fetch";
        (0, o.s5)(e, t), (0, o.AS)(e, c)
      }

      function c() {
        (0, s.m7)() && (0, r.GS)(i.OW, "fetch", function(t) {
          return function(...e) {
            const {
              method: n,
              url: r
            } = function(t) {
              if (0 === t.length) return {
                method: "GET",
                url: ""
              };
              if (2 === t.length) {
                const [e, n] = t;
                return {
                  url: l(e),
                  method: u(n, "method") ? String(n.method).toUpperCase() : "GET"
                }
              }
              const e = t[0];
              return {
                url: l(e),
                method: u(e, "method") ? String(e.method).toUpperCase() : "GET"
              }
            }(e), s = {
              args: e,
              fetchData: {
                method: n,
                url: r
              },
              startTimestamp: Date.now()
            };
            return (0, o.aj)("fetch", {
              ...s
            }), t.apply(i.OW, e).then(t => {
              const e = {
                ...s,
                endTimestamp: Date.now(),
                response: t
              };
              return (0, o.aj)("fetch", e), t
            }, t => {
              const e = {
                ...s,
                endTimestamp: Date.now(),
                error: t
              };
              throw (0, o.aj)("fetch", e), t
            })
          }
        })
      }

      function u(t, e) {
        return !!t && "object" == typeof t && !!t[e]
      }

      function l(t) {
        return "string" == typeof t ? t : t ? u(t, "url") ? t.url : t.toString ? t.toString() : "" : ""
      }
    },
    19969(t, e, n) {
      "use strict";
      n.d(e, {
        L: () => o
      });
      var r = n(9929),
        s = n(6122);
      let i = null;

      function o(t) {
        const e = "error";
        (0, s.s5)(e, t), (0, s.AS)(e, a)
      }

      function a() {
        i = r.OW.onerror, r.OW.onerror = function(t, e, n, r, o) {
          const a = {
            column: r,
            error: o,
            line: n,
            msg: t,
            url: e
          };
          return (0, s.aj)("error", a), !(!i || i.__SENTRY_LOADER__) && i.apply(this, arguments)
        }, r.OW.onerror.__SENTRY_INSTRUMENTED__ = !0
      }
    },
    17425(t, e, n) {
      "use strict";
      n.d(e, {
        r: () => o
      });
      var r = n(9929),
        s = n(6122);
      let i = null;

      function o(t) {
        const e = "unhandledrejection";
        (0, s.s5)(e, t), (0, s.AS)(e, a)
      }

      function a() {
        i = r.OW.onunhandledrejection, r.OW.onunhandledrejection = function(t) {
          const e = t;
          return (0, s.aj)("unhandledrejection", e), !(i && !i.__SENTRY_LOADER__) || i.apply(this, arguments)
        }, r.OW.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
      }
    },
    27084(t, e, n) {
      "use strict";
      n.d(e, {
        _: () => u
      });
      var r = n(22423),
        s = n(9929);
      const i = (0, s.VZ)();
      var o = n(6122);
      const a = s.OW;
      let c;

      function u(t) {
        const e = "history";
        (0, o.s5)(e, t), (0, o.AS)(e, l)
      }

      function l() {
        if (! function() {
            const t = i.chrome,
              e = t && t.app && t.app.runtime,
              n = "history" in i && !!i.history.pushState && !!i.history.replaceState;
            return !e && n
          }()) return;
        const t = a.onpopstate;

        function e(t) {
          return function(...e) {
            const n = e.length > 2 ? e[2] : void 0;
            if (n) {
              const t = c,
                e = String(n);
              c = e;
              const r = {
                from: t,
                to: e
              };
              (0, o.aj)("history", r)
            }
            return t.apply(this, e)
          }
        }
        a.onpopstate = function(...e) {
          const n = a.location.href,
            r = c;
          c = n;
          const s = {
            from: r,
            to: n
          };
          if ((0, o.aj)("history", s), t) try {
            return t.apply(this, e)
          } catch (t) {}
        }, (0, r.GS)(a.history, "pushState", e), (0, r.GS)(a.history, "replaceState", e)
      }
    },
    68392(t, e, n) {
      "use strict";
      n.d(e, {
        Er: () => c,
        Mn: () => u
      });
      var r = n(16732),
        s = n(22423),
        i = n(9929),
        o = n(6122);
      const a = i.OW,
        c = "__sentry_xhr_v3__";

      function u(t) {
        (0, o.s5)("xhr", t), (0, o.AS)("xhr", l)
      }

      function l() {
        if (!a.XMLHttpRequest) return;
        const t = XMLHttpRequest.prototype;
        (0, s.GS)(t, "open", function(t) {
          return function(...e) {
            const n = Date.now(),
              i = (0, r.Kg)(e[0]) ? e[0].toUpperCase() : void 0,
              a = function(t) {
                if ((0, r.Kg)(t)) return t;
                try {
                  return t.toString()
                } catch (t) {}
              }(e[1]);
            if (!i || !a) return t.apply(this, e);
            this[c] = {
              method: i,
              url: a,
              request_headers: {}
            }, "POST" === i && a.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
            const u = () => {
              const t = this[c];
              if (t && 4 === this.readyState) {
                try {
                  t.status_code = this.status
                } catch (t) {}
                const e = {
                  args: [i, a],
                  endTimestamp: Date.now(),
                  startTimestamp: n,
                  xhr: this
                };
                (0, o.aj)("xhr", e)
              }
            };
            return "onreadystatechange" in this && "function" == typeof this.onreadystatechange ? (0, s.GS)(this, "onreadystatechange", function(t) {
              return function(...e) {
                return u(), t.apply(this, e)
              }
            }) : this.addEventListener("readystatechange", u), (0, s.GS)(this, "setRequestHeader", function(t) {
              return function(...e) {
                const [n, s] = e, i = this[c];
                return i && (0, r.Kg)(n) && (0, r.Kg)(s) && (i.request_headers[n.toLowerCase()] = s), t.apply(this, e)
              }
            }), t.apply(this, e)
          }
        }), (0, s.GS)(t, "send", function(t) {
          return function(...e) {
            const n = this[c];
            if (!n) return t.apply(this, e);
            void 0 !== e[0] && (n.body = e[0]);
            const r = {
              args: [n.method, n.url],
              startTimestamp: Date.now(),
              xhr: this
            };
            return (0, o.aj)("xhr", r), t.apply(this, e)
          }
        })
      }
    },
    16732(t, e, n) {
      "use strict";
      n.d(e, {
        BD: () => a,
        Kg: () => u,
        L2: () => S,
        NF: () => l,
        Qd: () => p,
        Qg: () => g,
        T2: () => o,
        W6: () => c,
        bJ: () => s,
        gd: () => f,
        mE: () => y,
        sO: () => d,
        tH: () => v,
        vq: () => m,
        xH: () => h,
        yr: () => _
      });
      const r = Object.prototype.toString;

      function s(t) {
        switch (r.call(t)) {
          case "[object Error]":
          case "[object Exception]":
          case "[object DOMException]":
            return !0;
          default:
            return v(t, Error)
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

      function l(t) {
        return "object" == typeof t && null !== t && "__sentry_template_string__" in t && "__sentry_template_values__" in t
      }

      function d(t) {
        return null === t || l(t) || "object" != typeof t && "function" != typeof t
      }

      function p(t) {
        return i(t, "Object")
      }

      function h(t) {
        return "undefined" != typeof Event && v(t, Event)
      }

      function m(t) {
        return "undefined" != typeof Element && v(t, Element)
      }

      function f(t) {
        return i(t, "RegExp")
      }

      function g(t) {
        return Boolean(t && t.then && "function" == typeof t.then)
      }

      function y(t) {
        return p(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
      }

      function _(t) {
        return "number" == typeof t && t != t
      }

      function v(t, e) {
        try {
          return t instanceof e
        } catch (t) {
          return !1
        }
      }

      function S(t) {
        return !("object" != typeof t || null === t || !t.__isVue && !t._isVue)
      }
    },
    61952(t, e, n) {
      "use strict";
      n.d(e, {
        Ow: () => i,
        Z9: () => o,
        pq: () => a,
        vF: () => c
      });
      var r = n(9672),
        s = n(9929);
      const i = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        o = {};

      function a(t) {
        if (!("console" in s.OW)) return t();
        const e = s.OW.console,
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
      const c = function() {
        let t = !1;
        const e = {
          enable: () => {
            t = !0
          },
          disable: () => {
            t = !1
          },
          isEnabled: () => t
        };
        return r.T ? i.forEach(n => {
          e[n] = (...e) => {
            t && a(() => {
              s.OW.console[n](`Sentry Logger [${n}]:`, ...e)
            })
          }
        }) : i.forEach(t => {
          e[t] = () => {}
        }), e
      }()
    },
    86788(t, e, n) {
      "use strict";
      n.d(e, {
        $X: () => a,
        GR: () => l,
        M6: () => u,
        eJ: () => i,
        gO: () => c,
        k9: () => d
      });
      var r = n(22423),
        s = n(9929);

      function i() {
        const t = s.OW,
          e = t.crypto || t.msCrypto;
        let n = () => 16 * Math.random();
        try {
          if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
          e && e.getRandomValues && (n = () => {
            const t = new Uint8Array(1);
            return e.getRandomValues(t), t[0]
          })
        } catch (t) {}
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, t => (t ^ (15 & n()) >> t / 4).toString(16))
      }

      function o(t) {
        return t.exception && t.exception.values ? t.exception.values[0] : void 0
      }

      function a(t) {
        const {
          message: e,
          event_id: n
        } = t;
        if (e) return e;
        const r = o(t);
        return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
      }

      function c(t, e, n) {
        const r = t.exception = t.exception || {},
          s = r.values = r.values || [],
          i = s[0] = s[0] || {};
        i.value || (i.value = e || ""), i.type || (i.type = n || "Error")
      }

      function u(t, e) {
        const n = o(t);
        if (!n) return;
        const r = n.mechanism;
        if (n.mechanism = {
            type: "generic",
            handled: !0,
            ...r,
            ...e
          }, e && "data" in e) {
          const t = {
            ...r && r.data,
            ...e.data
          };
          n.mechanism.data = t
        }
      }

      function l(t) {
        if (t && t.__sentry_captured__) return !0;
        try {
          (0, r.my)(t, "__sentry_captured__", !0)
        } catch (t) {}
        return !1
      }

      function d(t) {
        return Array.isArray(t) ? t : [t]
      }
    },
    45616(t, e, n) {
      "use strict";
      n.d(e, {
        wD: () => i
      });
      var r = n(43929);
      t = n.hmd(t);
      var s = n(43431);

      function i() {
        return !(0, r.Z)() && "[object process]" === Object.prototype.toString.call(void 0 !== s ? s : 0)
      }
    },
    50193(t, e, n) {
      "use strict";
      n.d(e, {
        S8: () => o,
        cd: () => a
      });
      var r = n(16732),
        s = n(22423),
        i = n(40841);

      function o(t, e = 100, n = 1 / 0) {
        try {
          return c("", t, e, n)
        } catch (t) {
          return {
            ERROR: `**non-serializable** (${t})`
          }
        }
      }

      function a(t, e = 3, n = 102400) {
        const r = o(t, e);
        return s = r,
          function(t) {
            return ~-encodeURI(t).split(/%..|./).length
          }(JSON.stringify(s)) > n ? a(t, e - 1, n) : r;
        var s
      }

      function c(t, e, o = 1 / 0, a = 1 / 0, u = function() {
        const t = "function" == typeof WeakSet,
          e = t ? new WeakSet : [];
        return [function(n) {
          if (t) return !!e.has(n) || (e.add(n), !1);
          for (let t = 0; t < e.length; t++)
            if (e[t] === n) return !0;
          return e.push(n), !1
        }, function(n) {
          if (t) e.delete(n);
          else
            for (let t = 0; t < e.length; t++)
              if (e[t] === n) {
                e.splice(t, 1);
                break
              }
        }]
      }()) {
        const [l, d] = u;
        if (null == e || ["number", "boolean", "string"].includes(typeof e) && !(0, r.yr)(e)) return e;
        const p = function(t, e) {
          try {
            if ("domain" === t && e && "object" == typeof e && e._events) return "[Domain]";
            if ("domainEmitter" === t) return "[DomainEmitter]";
            if (void 0 !== n.g && e === n.g) return "[Global]";
            if ("undefined" != typeof window && e === window) return "[Window]";
            if ("undefined" != typeof document && e === document) return "[Document]";
            if ((0, r.L2)(e)) return "[VueViewModel]";
            if ((0, r.mE)(e)) return "[SyntheticEvent]";
            if ("number" == typeof e && e != e) return "[NaN]";
            if ("function" == typeof e) return `[Function: ${(0,i.qQ)(e)}]`;
            if ("symbol" == typeof e) return `[${String(e)}]`;
            if ("bigint" == typeof e) return `[BigInt: ${String(e)}]`;
            const s = function(t) {
              const e = Object.getPrototypeOf(t);
              return e ? e.constructor.name : "null prototype"
            }(e);
            return /^HTML(\w*)Element$/.test(s) ? `[HTMLElement: ${s}]` : `[object ${s}]`
          } catch (t) {
            return `**non-serializable** (${t})`
          }
        }(t, e);
        if (!p.startsWith("[object ")) return p;
        if (e.__sentry_skip_normalization__) return e;
        const h = "number" == typeof e.__sentry_override_normalization_depth__ ? e.__sentry_override_normalization_depth__ : o;
        if (0 === h) return p.replace("object ", "");
        if (l(e)) return "[Circular ~]";
        const m = e;
        if (m && "function" == typeof m.toJSON) try {
          return c("", m.toJSON(), h - 1, a, u)
        } catch (t) {}
        const f = Array.isArray(e) ? [] : {};
        let g = 0;
        const y = (0, s.W4)(e);
        for (const t in y) {
          if (!Object.prototype.hasOwnProperty.call(y, t)) continue;
          if (g >= a) {
            f[t] = "[MaxProperties ~]";
            break
          }
          const e = y[t];
          f[t] = c(t, e, h - 1, a, u), g++
        }
        return d(e), f
      }
    },
    22423(t, e, n) {
      "use strict";
      n.d(e, {
        Ce: () => y,
        GS: () => c,
        HF: () => g,
        W4: () => h,
        my: () => u,
        pO: () => l,
        sp: () => d,
        u4: () => p
      });
      var r = n(59834),
        s = n(9672),
        i = n(16732),
        o = n(61952),
        a = n(68289);

      function c(t, e, n) {
        if (!(e in t)) return;
        const r = t[e],
          s = n(r);
        "function" == typeof s && l(s, r), t[e] = s
      }

      function u(t, e, n) {
        try {
          Object.defineProperty(t, e, {
            value: n,
            writable: !0,
            configurable: !0
          })
        } catch (n) {
          s.T && o.vF.log(`Failed to add non-enumerable property "${e}" to object`, t)
        }
      }

      function l(t, e) {
        try {
          const n = e.prototype || {};
          t.prototype = e.prototype = n, u(t, "__sentry_original__", e)
        } catch (t) {}
      }

      function d(t) {
        return t.__sentry_original__
      }

      function p(t) {
        return Object.keys(t).map(e => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`).join("&")
      }

      function h(t) {
        if ((0, i.bJ)(t)) return {
          message: t.message,
          name: t.name,
          stack: t.stack,
          ...f(t)
        };
        if ((0, i.xH)(t)) {
          const e = {
            type: t.type,
            target: m(t.target),
            currentTarget: m(t.currentTarget),
            ...f(t)
          };
          return "undefined" != typeof CustomEvent && (0, i.tH)(t, CustomEvent) && (e.detail = t.detail), e
        }
        return t
      }

      function m(t) {
        try {
          return (0, i.vq)(t) ? (0, r.Hd)(t) : Object.prototype.toString.call(t)
        } catch (t) {
          return "<unknown>"
        }
      }

      function f(t) {
        if ("object" == typeof t && null !== t) {
          const e = {};
          for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e
        }
        return {}
      }

      function g(t, e = 40) {
        const n = Object.keys(h(t));
        if (n.sort(), !n.length) return "[object has no keys]";
        if (n[0].length >= e) return (0, a.xv)(n[0], e);
        for (let t = n.length; t > 0; t--) {
          const r = n.slice(0, t).join(", ");
          if (!(r.length > e)) return t === n.length ? r : (0, a.xv)(r, e)
        }
        return ""
      }

      function y(t) {
        return _(t, new Map)
      }

      function _(t, e) {
        if (function(t) {
            if (!(0, i.Qd)(t)) return !1;
            try {
              const e = Object.getPrototypeOf(t).constructor.name;
              return !e || "Object" === e
            } catch (t) {
              return !0
            }
          }(t)) {
          const n = e.get(t);
          if (void 0 !== n) return n;
          const r = {};
          e.set(t, r);
          for (const n of Object.keys(t)) void 0 !== t[n] && (r[n] = _(t[n], e));
          return r
        }
        if (Array.isArray(t)) {
          const n = e.get(t);
          if (void 0 !== n) return n;
          const r = [];
          return e.set(t, r), t.forEach(t => {
            r.push(_(t, e))
          }), r
        }
        return t
      }
    },
    34367(t, e, n) {
      "use strict";

      function r(t, e, n = Date.now()) {
        return function(t, e) {
          return t[e] || t.all || 0
        }(t, e) > n
      }

      function s(t, {
        statusCode: e,
        headers: n
      }, r = Date.now()) {
        const s = {
            ...t
          },
          i = n && n["x-sentry-rate-limits"],
          o = n && n["retry-after"];
        if (i)
          for (const t of i.trim().split(",")) {
            const [e, n, , , i] = t.split(":", 5), o = parseInt(e, 10), a = 1e3 * (isNaN(o) ? 60 : o);
            if (n)
              for (const t of n.split(";")) "metric_bucket" === t && i && !i.split(";").includes("custom") || (s[t] = r + a);
            else s.all = r + a
          } else o ? s.all = r + function(t, e = Date.now()) {
            const n = parseInt(`${t}`, 10);
            if (!isNaN(n)) return 1e3 * n;
            const r = Date.parse(`${t}`);
            return isNaN(r) ? 6e4 : r - e
          }(o, r) : 429 === e && (s.all = r + 6e4);
        return s
      }
      n.d(e, {
        Jz: () => r,
        wq: () => s
      })
    },
    40841(t, e, n) {
      "use strict";
      n.d(e, {
        gd: () => i,
        qQ: () => c,
        vk: () => o
      });
      const r = /\(error: (.*)\)/,
        s = /captureMessage|captureException/;

      function i(...t) {
        const e = t.sort((t, e) => t[0] - e[0]).map(t => t[1]);
        return (t, n = 0) => {
          const i = [],
            o = t.split("\n");
          for (let t = n; t < o.length; t++) {
            const n = o[t];
            if (n.length > 1024) continue;
            const s = r.test(n) ? n.replace(r, "$1") : n;
            if (!s.match(/\S*Error: /)) {
              for (const t of e) {
                const e = t(s);
                if (e) {
                  i.push(e);
                  break
                }
              }
              if (i.length >= 50) break
            }
          }
          return function(t) {
            if (!t.length) return [];
            const e = Array.from(t);
            return /sentryWrapped/.test(e[e.length - 1].function || "") && e.pop(), e.reverse(), s.test(e[e.length - 1].function || "") && (e.pop(), s.test(e[e.length - 1].function || "") && e.pop()), e.slice(0, 50).map(t => ({
              ...t,
              filename: t.filename || e[e.length - 1].filename,
              function: t.function || "?"
            }))
          }(i)
        }
      }

      function o(t) {
        return Array.isArray(t) ? i(...t) : t
      }
      const a = "<anonymous>";

      function c(t) {
        try {
          return t && "function" == typeof t && t.name || a
        } catch (t) {
          return a
        }
      }
    },
    68289(t, e, n) {
      "use strict";
      n.d(e, {
        Xr: () => o,
        gt: () => i,
        xv: () => s
      });
      var r = n(16732);

      function s(t, e = 0) {
        return "string" != typeof t || 0 === e || t.length <= e ? t : `${t.slice(0,e)}...`
      }

      function i(t, e) {
        if (!Array.isArray(t)) return "";
        const n = [];
        for (let e = 0; e < t.length; e++) {
          const s = t[e];
          try {
            (0, r.L2)(s) ? n.push("[VueViewModel]"): n.push(String(s))
          } catch (t) {
            n.push("[value cannot be serialized]")
          }
        }
        return n.join(e)
      }

      function o(t, e = [], n = !1) {
        return e.some(e => function(t, e, n = !1) {
          return !!(0, r.Kg)(t) && ((0, r.gd)(e) ? e.test(t) : !!(0, r.Kg)(e) && (n ? t === e : t.includes(e)))
        }(t, e, n))
      }
    },
    78180(t, e, n) {
      "use strict";
      n.d(e, {
        ap: () => a,
        m7: () => c,
        vm: () => o
      });
      var r = n(9672),
        s = n(61952);
      const i = (0, n(9929).VZ)();

      function o() {
        if (!("fetch" in i)) return !1;
        try {
          return new Headers, new Request("http://www.example.com"), new Response, !0
        } catch (t) {
          return !1
        }
      }

      function a(t) {
        return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
      }

      function c() {
        if ("string" == typeof EdgeRuntime) return !0;
        if (!o()) return !1;
        if (a(i.fetch)) return !0;
        let t = !1;
        const e = i.document;
        if (e && "function" == typeof e.createElement) try {
          const n = e.createElement("iframe");
          n.hidden = !0, e.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = a(n.contentWindow.fetch)), e.head.removeChild(n)
        } catch (t) {
          r.T && s.vF.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
        }
        return t
      }
    },
    37518(t, e, n) {
      "use strict";
      n.d(e, {
        T2: () => a,
        XW: () => i,
        xg: () => o
      });
      var r, s = n(16732);

      function i(t) {
        return new a(e => {
          e(t)
        })
      }

      function o(t) {
        return new a((e, n) => {
          n(t)
        })
      }! function(t) {
        t[t.PENDING = 0] = "PENDING", t[t.RESOLVED = 1] = "RESOLVED", t[t.REJECTED = 2] = "REJECTED"
      }(r || (r = {}));
      class a {
        constructor(t) {
          a.prototype.__init.call(this), a.prototype.__init2.call(this), a.prototype.__init3.call(this), a.prototype.__init4.call(this), this._state = r.PENDING, this._handlers = [];
          try {
            t(this._resolve, this._reject)
          } catch (t) {
            this._reject(t)
          }
        }
        then(t, e) {
          return new a((n, r) => {
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
          return new a((e, n) => {
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
        __init() {
          this._resolve = t => {
            this._setResult(r.RESOLVED, t)
          }
        }
        __init2() {
          this._reject = t => {
            this._setResult(r.REJECTED, t)
          }
        }
        __init3() {
          this._setResult = (t, e) => {
            this._state === r.PENDING && ((0, s.Qg)(e) ? e.then(this._resolve, this._reject) : (this._state = t, this._value = e, this._executeHandlers()))
          }
        }
        __init4() {
          this._executeHandlers = () => {
            if (this._state === r.PENDING) return;
            const t = this._handlers.slice();
            this._handlers = [], t.forEach(t => {
              t[0] || (this._state === r.RESOLVED && t[1](this._value), this._state === r.REJECTED && t[2](this._value), t[0] = !0)
            })
          }
        }
      }
    },
    98765(t, e, n) {
      "use strict";
      n.d(e, {
        k3: () => a,
        lu: () => s,
        zf: () => i
      });
      var r = n(9929);

      function s() {
        return Date.now() / 1e3
      }
      const i = function() {
        const {
          performance: t
        } = r.OW;
        if (!t || !t.now) return s;
        const e = Date.now() - t.now(),
          n = null == t.timeOrigin ? e : t.timeOrigin;
        return () => (n + t.now()) / 1e3
      }();
      let o;
      const a = (() => {
        const {
          performance: t
        } = r.OW;
        if (!t || !t.now) return void(o = "none");
        const e = 36e5,
          n = t.now(),
          s = Date.now(),
          i = t.timeOrigin ? Math.abs(t.timeOrigin + n - s) : e,
          a = i < e,
          c = t.timing && t.timing.navigationStart,
          u = "number" == typeof c ? Math.abs(c + n - s) : e;
        return a || u < e ? i <= u ? (o = "timeOrigin", t.timeOrigin) : (o = "navigationStart", c) : (o = "dateNow", s)
      })()
    },
    50160(t, e, n) {
      "use strict";
      n.d(e, {
        TC: () => a,
        kM: () => o
      });
      var r = n(14332),
        s = n(86788);
      const i = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

      function o(t, e) {
        const n = function(t) {
            if (!t) return;
            const e = t.match(i);
            if (!e) return;
            let n;
            return "1" === e[3] ? n = !0 : "0" === e[3] && (n = !1), {
              traceId: e[1],
              parentSampled: n,
              parentSpanId: e[2]
            }
          }(t),
          o = (0, r.yD)(e),
          {
            traceId: a,
            parentSpanId: c,
            parentSampled: u
          } = n || {};
        return n ? {
          traceId: a || (0, s.eJ)(),
          parentSpanId: c || (0, s.eJ)().substring(16),
          spanId: (0, s.eJ)().substring(16),
          sampled: u,
          dsc: o || {}
        } : {
          traceId: a || (0, s.eJ)(),
          spanId: (0, s.eJ)().substring(16)
        }
      }

      function a(t = (0, s.eJ)(), e = (0, s.eJ)().substring(16), n) {
        let r = "";
        return void 0 !== n && (r = n ? "-1" : "-0"), `${t}-${e}${r}`
      }
    },
    58011(t, e, n) {
      "use strict";

      function r(t) {
        if (!t) return {};
        const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!e) return {};
        const n = e[6] || "",
          r = e[8] || "";
        return {
          host: e[4],
          path: e[5],
          protocol: e[2],
          search: n,
          hash: r,
          relative: e[5] + n + r
        }
      }
      n.d(e, {
        Dl: () => r
      })
    },
    9929(t, e, n) {
      "use strict";

      function r(t) {
        return t && t.Math == Math ? t : void 0
      }
      n.d(e, {
        BY: () => o,
        OW: () => s,
        VZ: () => i
      });
      const s = "object" == typeof globalThis && r(globalThis) || "object" == typeof window && r(window) || "object" == typeof self && r(self) || "object" == typeof n.g && r(n.g) || function() {
        return this
      }() || {};

      function i() {
        return s
      }

      function o(t, e, n) {
        const r = n || s,
          i = r.__SENTRY__ = r.__SENTRY__ || {};
        return i[t] || (i[t] = e())
      }
    },
    88178(t, e, n) {
      "use strict";
      n.d(e, {
        dp: () => bt
      });
      var r = n(61952),
        s = n(98765),
        i = n(21926),
        o = n(54975),
        a = n(86788),
        c = n(22423);
      var u, l = n(80775),
        d = n(6762);

      function p(t, e) {
        t.setTag("http.status_code", String(e)), t.setData("http.response.status_code", e);
        const n = function(t) {
          if (t < 400 && t >= 100) return "ok";
          if (t >= 400 && t < 500) switch (t) {
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
          if (t >= 500 && t < 600) switch (t) {
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
        }(e);
        "unknown_error" !== n && t.setStatus(n)
      }! function(t) {
        t.Ok = "ok", t.DeadlineExceeded = "deadline_exceeded", t.Unauthenticated = "unauthenticated", t.PermissionDenied = "permission_denied", t.NotFound = "not_found", t.ResourceExhausted = "resource_exhausted", t.InvalidArgument = "invalid_argument", t.Unimplemented = "unimplemented", t.Unavailable = "unavailable", t.InternalError = "internal_error", t.UnknownError = "unknown_error", t.Cancelled = "cancelled", t.AlreadyExists = "already_exists", t.FailedPrecondition = "failed_precondition", t.Aborted = "aborted", t.OutOfRange = "out_of_range", t.DataLoss = "data_loss"
      }(u || (u = {}));
      class h {
        constructor(t = 1e3) {
          this._maxlen = t, this.spans = []
        }
        add(t) {
          this.spans.length > this._maxlen ? t.spanRecorder = void 0 : this.spans.push(t)
        }
      }
      class m {
        constructor(t = {}) {
          this._traceId = t.traceId || (0, a.eJ)(), this._spanId = t.spanId || (0, a.eJ)().substring(16), this._startTime = t.startTimestamp || (0, s.zf)(), this.tags = t.tags ? {
            ...t.tags
          } : {}, this.data = t.data ? {
            ...t.data
          } : {}, this.instrumenter = t.instrumenter || "sentry", this._attributes = {}, this.setAttributes({
            [l.JD]: t.origin || "manual",
            [l.uT]: t.op,
            ...t.attributes
          }), this._name = t.name || t.description, t.parentSpanId && (this._parentSpanId = t.parentSpanId), "sampled" in t && (this._sampled = t.sampled), t.status && (this._status = t.status), t.endTimestamp && (this._endTime = t.endTimestamp), void 0 !== t.exclusiveTime && (this._exclusiveTime = t.exclusiveTime), this._measurements = t.measurements ? {
            ...t.measurements
          } : {}
        }
        get name() {
          return this._name || ""
        }
        set name(t) {
          this.updateName(t)
        }
        get description() {
          return this._name
        }
        set description(t) {
          this._name = t
        }
        get traceId() {
          return this._traceId
        }
        set traceId(t) {
          this._traceId = t
        }
        get spanId() {
          return this._spanId
        }
        set spanId(t) {
          this._spanId = t
        }
        set parentSpanId(t) {
          this._parentSpanId = t
        }
        get parentSpanId() {
          return this._parentSpanId
        }
        get sampled() {
          return this._sampled
        }
        set sampled(t) {
          this._sampled = t
        }
        get attributes() {
          return this._attributes
        }
        set attributes(t) {
          this._attributes = t
        }
        get startTimestamp() {
          return this._startTime
        }
        set startTimestamp(t) {
          this._startTime = t
        }
        get endTimestamp() {
          return this._endTime
        }
        set endTimestamp(t) {
          this._endTime = t
        }
        get status() {
          return this._status
        }
        set status(t) {
          this._status = t
        }
        get op() {
          return this._attributes[l.uT]
        }
        set op(t) {
          this.setAttribute(l.uT, t)
        }
        get origin() {
          return this._attributes[l.JD]
        }
        set origin(t) {
          this.setAttribute(l.JD, t)
        }
        spanContext() {
          const {
            _spanId: t,
            _traceId: e,
            _sampled: n
          } = this;
          return {
            spanId: t,
            traceId: e,
            traceFlags: n ? o.aO : o.CC
          }
        }
        startChild(t) {
          const e = new m({
            ...t,
            parentSpanId: this._spanId,
            sampled: this._sampled,
            traceId: this._traceId
          });
          e.spanRecorder = this.spanRecorder, e.spanRecorder && e.spanRecorder.add(e);
          const n = (0, d.z)(this);
          if (e.transaction = n, i.T && n) {
            const s = `[Tracing] Starting '${t&&t.op||"< unknown op >"}' span on transaction '${(0,o.et)(e).description||"< unknown name >"}' (${n.spanContext().spanId}).`;
            r.vF.log(s), this._logMessage = s
          }
          return e
        }
        setTag(t, e) {
          return this.tags = {
            ...this.tags,
            [t]: e
          }, this
        }
        setData(t, e) {
          return this.data = {
            ...this.data,
            [t]: e
          }, this
        }
        setAttribute(t, e) {
          void 0 === e ? delete this._attributes[t] : this._attributes[t] = e
        }
        setAttributes(t) {
          Object.keys(t).forEach(e => this.setAttribute(e, t[e]))
        }
        setStatus(t) {
          return this._status = t, this
        }
        setHttpStatus(t) {
          return p(this, t), this
        }
        setName(t) {
          this.updateName(t)
        }
        updateName(t) {
          return this._name = t, this
        }
        isSuccess() {
          return "ok" === this._status
        }
        finish(t) {
          return this.end(t)
        }
        end(t) {
          if (this._endTime) return;
          const e = (0, d.z)(this);
          if (i.T && e && e.spanContext().spanId !== this._spanId) {
            const t = this._logMessage;
            t && r.vF.log(t.replace("Starting", "Finishing"))
          }
          this._endTime = (0, o.cI)(t)
        }
        toTraceparent() {
          return (0, o.Qh)(this)
        }
        toContext() {
          return (0, c.Ce)({
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
        updateWithContext(t) {
          return this.data = t.data || {}, this._name = t.name || t.description, this._endTime = t.endTimestamp, this.op = t.op, this._parentSpanId = t.parentSpanId, this._sampled = t.sampled, this._spanId = t.spanId || this._spanId, this._startTime = t.startTimestamp || this._startTime, this._status = t.status, this.tags = t.tags || {}, this._traceId = t.traceId || this._traceId, this
        }
        getTraceContext() {
          return (0, o.kX)(this)
        }
        getSpanJSON() {
          return (0, c.Ce)({
            data: this._getData(),
            description: this._name,
            op: this._attributes[l.uT],
            parent_span_id: this._parentSpanId,
            span_id: this._spanId,
            start_timestamp: this._startTime,
            status: this._status,
            tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
            timestamp: this._endTime,
            trace_id: this._traceId,
            origin: this._attributes[l.JD],
            _metrics_summary: void 0,
            profile_id: this._attributes[l.E1],
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
            data: t,
            _attributes: e
          } = this, n = Object.keys(t).length > 0, r = Object.keys(e).length > 0;
          if (n || r) return n && r ? {
            ...t,
            ...e
          } : n ? t : e
        }
      }
      var f = n(54667),
        g = n(48114),
        y = n(43031);

      function _(t) {
        if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
        const e = (0, y.KU)(),
          n = t || e && e.getOptions();
        return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
      }

      function v(t) {
        if (!_()) return;
        const e = function(t) {
            if (t.startTime) {
              const e = {
                ...t
              };
              return e.startTimestamp = (0, o.cI)(t.startTime), delete e.startTime, e
            }
            return t
          }(t),
          n = (0, f.BF)(),
          r = t.scope ? t.scope.getSpan() : S();
        if (t.onlyIfParent && !r) return;
        const s = (t.scope || (0, y.o5)()).clone();
        return function(t, {
          parentSpan: e,
          spanContext: n,
          forceTransaction: r,
          scope: s
        }) {
          if (!_()) return;
          const i = (0, f.rm)();
          let a;
          if (e && !r) a = e.startChild(n);
          else if (e) {
            const r = (0, g.k)(e),
              {
                traceId: s,
                spanId: i
              } = e.spanContext(),
              c = (0, o.pK)(e);
            a = t.startTransaction({
              traceId: s,
              parentSpanId: i,
              parentSampled: c,
              ...n,
              metadata: {
                dynamicSamplingContext: r,
                ...n.metadata
              }
            })
          } else {
            const {
              traceId: e,
              dsc: r,
              parentSpanId: o,
              sampled: c
            } = {
              ...i.getPropagationContext(),
              ...s.getPropagationContext()
            };
            a = t.startTransaction({
              traceId: e,
              parentSpanId: o,
              parentSampled: c,
              ...n,
              metadata: {
                dynamicSamplingContext: r,
                ...n.metadata
              }
            })
          }
          return s.setSpan(a),
            function(t, e, n) {
              t && ((0, c.my)(t, k, n), (0, c.my)(t, b, e))
            }(a, s, i), a
        }(n, {
          parentSpan: r,
          spanContext: e,
          forceTransaction: t.forceTransaction,
          scope: s
        })
      }

      function S() {
        return (0, y.o5)().getSpan()
      }
      const b = "_sentryScope",
        k = "_sentryIsolationScope";
      class T extends m {
        constructor(t, e) {
          super(t), this._contexts = {}, this._hub = e || (0, f.BF)(), this._name = t.name || "", this._metadata = {
            ...t.metadata
          }, this._trimEnd = t.trimEnd, this.transaction = this;
          const n = this._metadata.dynamicSamplingContext;
          n && (this._frozenDynamicSamplingContext = {
            ...n
          })
        }
        get name() {
          return this._name
        }
        set name(t) {
          this.setName(t)
        }
        get metadata() {
          return {
            source: "custom",
            spanMetadata: {},
            ...this._metadata,
            ...this._attributes[l.i_] && {
              source: this._attributes[l.i_]
            },
            ...this._attributes[l.sy] && {
              sampleRate: this._attributes[l.sy]
            }
          }
        }
        set metadata(t) {
          this._metadata = t
        }
        setName(t, e = "custom") {
          this._name = t, this.setAttribute(l.i_, e)
        }
        updateName(t) {
          return this._name = t, this
        }
        initSpanRecorder(t = 1e3) {
          this.spanRecorder || (this.spanRecorder = new h(t)), this.spanRecorder.add(this)
        }
        setContext(t, e) {
          null === e ? delete this._contexts[t] : this._contexts[t] = e
        }
        setMeasurement(t, e, n = "") {
          this._measurements[t] = {
            value: e,
            unit: n
          }
        }
        setMetadata(t) {
          this._metadata = {
            ...this._metadata,
            ...t
          }
        }
        end(t) {
          const e = (0, o.cI)(t),
            n = this._finishTransaction(e);
          if (n) return this._hub.captureEvent(n)
        }
        toContext() {
          const t = super.toContext();
          return (0, c.Ce)({
            ...t,
            name: this._name,
            trimEnd: this._trimEnd
          })
        }
        updateWithContext(t) {
          return super.updateWithContext(t), this._name = t.name || "", this._trimEnd = t.trimEnd, this
        }
        getDynamicSamplingContext() {
          return (0, g.k)(this)
        }
        setHub(t) {
          this._hub = t
        }
        getProfileId() {
          if (void 0 !== this._contexts && void 0 !== this._contexts.profile) return this._contexts.profile.profile_id
        }
        _finishTransaction(t) {
          if (void 0 !== this._endTime) return;
          this._name || (i.T && r.vF.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>"), super.end(t);
          const e = this._hub.getClient();
          if (e && e.emit && e.emit("finishTransaction", this), !0 !== this._sampled) return i.T && r.vF.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."), void(e && e.recordDroppedEvent("sample_rate", "transaction"));
          const n = this.spanRecorder ? this.spanRecorder.spans.filter(t => t !== this && (0, o.et)(t).timestamp) : [];
          if (this._trimEnd && n.length > 0) {
            const t = n.map(t => (0, o.et)(t).timestamp).filter(Boolean);
            this._endTime = t.reduce((t, e) => t > e ? t : e)
          }
          const {
            scope: s,
            isolationScope: a
          } = {
            scope: this[b],
            isolationScope: this[k]
          };
          const {
            metadata: u
          } = this, {
            source: l
          } = u, d = {
            contexts: {
              ...this._contexts,
              trace: (0, o.kX)(this)
            },
            spans: n,
            start_timestamp: this._startTime,
            tags: this.tags,
            timestamp: this._endTime,
            transaction: this._name,
            type: "transaction",
            sdkProcessingMetadata: {
              ...u,
              capturedSpanScope: s,
              capturedSpanIsolationScope: a,
              ...(0, c.Ce)({
                dynamicSamplingContext: (0, g.k)(this)
              })
            },
            _metrics_summary: void 0,
            ...l && {
              transaction_info: {
                source: l
              }
            }
          };
          return Object.keys(this._measurements).length > 0 && (i.T && r.vF.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)), d.measurements = this._measurements), i.T && r.vF.log(`[Tracing] Finishing ${this.op} transaction: ${this._name}.`), d
        }
      }
      const w = {
          idleTimeout: 1e3,
          finalTimeout: 3e4,
          heartbeatInterval: 5e3
        },
        E = ["heartbeatFailed", "idleTimeout", "documentHidden", "finalTimeout", "externalFinish", "cancelled"];
      class x extends h {
        constructor(t, e, n, r) {
          super(r), this._pushActivity = t, this._popActivity = e, this.transactionSpanId = n
        }
        add(t) {
          if (t.spanContext().spanId !== this.transactionSpanId) {
            const e = t.end;
            t.end = (...n) => (this._popActivity(t.spanContext().spanId), e.apply(t, n)), void 0 === (0, o.et)(t).timestamp && this._pushActivity(t.spanContext().spanId)
          }
          super.add(t)
        }
      }
      class I extends T {
        constructor(t, e, n = w.idleTimeout, s = w.finalTimeout, o = w.heartbeatInterval, a = !1, c = !1) {
          super(t, e), this._idleHub = e, this._idleTimeout = n, this._finalTimeout = s, this._heartbeatInterval = o, this._onScope = a, this.activities = {}, this._heartbeatCounter = 0, this._finished = !1, this._idleTimeoutCanceledPermanently = !1, this._beforeFinishCallbacks = [], this._finishReason = E[4], this._autoFinishAllowed = !c, a && (i.T && r.vF.log(`Setting idle transaction on scope. Span ID: ${this.spanContext().spanId}`), e.getScope().setSpan(this)), c || this._restartIdleTimeout(), setTimeout(() => {
            this._finished || (this.setStatus("deadline_exceeded"), this._finishReason = E[3], this.end())
          }, this._finalTimeout)
        }
        end(t) {
          const e = (0, o.cI)(t);
          if (this._finished = !0, this.activities = {}, "ui.action.click" === this.op && this.setAttribute("finishReason", this._finishReason), this.spanRecorder) {
            i.T && r.vF.log("[Tracing] finishing IdleTransaction", new Date(1e3 * e).toISOString(), this.op);
            for (const t of this._beforeFinishCallbacks) t(this, e);
            this.spanRecorder.spans = this.spanRecorder.spans.filter(t => {
              if (t.spanContext().spanId === this.spanContext().spanId) return !0;
              (0, o.et)(t).timestamp || (t.setStatus("cancelled"), t.end(e), i.T && r.vF.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(t, void 0, 2)));
              const {
                start_timestamp: n,
                timestamp: s
              } = (0, o.et)(t), a = n && n < e, c = (this._finalTimeout + this._idleTimeout) / 1e3, u = s && n && s - n < c;
              if (i.T) {
                const e = JSON.stringify(t, void 0, 2);
                a ? u || r.vF.log("[Tracing] discarding Span since it finished after Transaction final timeout", e) : r.vF.log("[Tracing] discarding Span since it happened after Transaction was finished", e)
              }
              return a && u
            }), i.T && r.vF.log("[Tracing] flushing IdleTransaction")
          } else i.T && r.vF.log("[Tracing] No active IdleTransaction");
          if (this._onScope) {
            const t = this._idleHub.getScope();
            t.getTransaction() === this && t.setSpan(void 0)
          }
          return super.end(t)
        }
        registerBeforeFinishCallback(t) {
          this._beforeFinishCallbacks.push(t)
        }
        initSpanRecorder(t) {
          if (!this.spanRecorder) {
            const e = t => {
                this._finished || this._pushActivity(t)
              },
              n = t => {
                this._finished || this._popActivity(t)
              };
            this.spanRecorder = new x(e, n, this.spanContext().spanId, t), i.T && r.vF.log("Starting heartbeat"), this._pingHeartbeat()
          }
          this.spanRecorder.add(this)
        }
        cancelIdleTimeout(t, {
          restartOnChildSpanChange: e
        } = {
          restartOnChildSpanChange: !0
        }) {
          this._idleTimeoutCanceledPermanently = !1 === e, this._idleTimeoutID && (clearTimeout(this._idleTimeoutID), this._idleTimeoutID = void 0, 0 === Object.keys(this.activities).length && this._idleTimeoutCanceledPermanently && (this._finishReason = E[5], this.end(t)))
        }
        setFinishReason(t) {
          this._finishReason = t
        }
        sendAutoFinishSignal() {
          this._autoFinishAllowed || (i.T && r.vF.log("[Tracing] Received finish signal for idle transaction."), this._restartIdleTimeout(), this._autoFinishAllowed = !0)
        }
        _restartIdleTimeout(t) {
          this.cancelIdleTimeout(), this._idleTimeoutID = setTimeout(() => {
            this._finished || 0 !== Object.keys(this.activities).length || (this._finishReason = E[1], this.end(t))
          }, this._idleTimeout)
        }
        _pushActivity(t) {
          this.cancelIdleTimeout(void 0, {
            restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently
          }), i.T && r.vF.log(`[Tracing] pushActivity: ${t}`), this.activities[t] = !0, i.T && r.vF.log("[Tracing] new activities count", Object.keys(this.activities).length)
        }
        _popActivity(t) {
          if (this.activities[t] && (i.T && r.vF.log(`[Tracing] popActivity ${t}`), delete this.activities[t], i.T && r.vF.log("[Tracing] new activities count", Object.keys(this.activities).length)), 0 === Object.keys(this.activities).length) {
            const t = (0, s.zf)();
            this._idleTimeoutCanceledPermanently ? this._autoFinishAllowed && (this._finishReason = E[5], this.end(t)) : this._restartIdleTimeout(t + this._idleTimeout / 1e3)
          }
        }
        _beat() {
          if (this._finished) return;
          const t = Object.keys(this.activities).join("");
          t === this._prevHeartbeatString ? this._heartbeatCounter++ : this._heartbeatCounter = 1, this._prevHeartbeatString = t, this._heartbeatCounter >= 3 ? this._autoFinishAllowed && (i.T && r.vF.log("[Tracing] Transaction finished because of no change for 3 heart beats"), this.setStatus("deadline_exceeded"), this._finishReason = E[0], this.end()) : this._pingHeartbeat()
        }
        _pingHeartbeat() {
          i.T && r.vF.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`), setTimeout(() => {
            this._beat()
          }, this._heartbeatInterval)
        }
      }
      var C = n(19969),
        R = n(17425);

      function M(t) {
        return (t || (0, f.BF)()).getScope().getTransaction()
      }
      let O = !1;

      function D() {
        const t = M();
        if (t) {
          const e = "internal_error";
          i.T && r.vF.log(`[Tracing] Transaction: ${e} -> Global error occured`), t.setStatus(e)
        }
      }
      D.tag = "sentry_tracingErrorCallback";
      var A = n(16732);

      function N(t, e, n) {
        if (!_(e)) return t.sampled = !1, t;
        if (void 0 !== t.sampled) return t.setAttribute(l.sy, Number(t.sampled)), t;
        let s;
        return "function" == typeof e.tracesSampler ? (s = e.tracesSampler(n), t.setAttribute(l.sy, Number(s))) : void 0 !== n.parentSampled ? s = n.parentSampled : void 0 !== e.tracesSampleRate ? (s = e.tracesSampleRate, t.setAttribute(l.sy, Number(s))) : (s = 1, t.setAttribute(l.sy, s)), F(s) ? s ? (t.sampled = Math.random() < s, t.sampled ? (i.T && r.vF.log(`[Tracing] starting ${t.op} transaction - ${(0,o.et)(t).description}`), t) : (i.T && r.vF.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(s)})`), t)) : (i.T && r.vF.log("[Tracing] Discarding transaction because " + ("function" == typeof e.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")), t.sampled = !1, t) : (i.T && r.vF.warn("[Tracing] Discarding transaction because of invalid sample rate."), t.sampled = !1, t)
      }

      function F(t) {
        return (0, A.yr)(t) || "number" != typeof t && "boolean" != typeof t ? (i.T && r.vF.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`), !1) : !(t < 0 || t > 1) || (i.T && r.vF.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${t}.`), !1)
      }

      function L() {
        const t = this.getScope().getSpan();
        return t ? {
          "sentry-trace": (0, o.Qh)(t)
        } : {}
      }

      function j(t, e) {
        const n = this.getClient(),
          s = n && n.getOptions() || {},
          o = s.instrumenter || "sentry",
          a = t.instrumenter || "sentry";
        o !== a && (i.T && r.vF.error(`A transaction was started with instrumenter=\`${a}\`, but the SDK is configured with the \`${o}\` instrumenter.\nThe transaction will not be sampled. Please use the ${o} instrumentation to start transactions.`), t.sampled = !1);
        let c = new T(t, this);
        return c = N(c, s, {
          name: t.name,
          parentSampled: t.parentSampled,
          transactionContext: t,
          attributes: {
            ...t.data,
            ...t.attributes
          },
          ...e
        }), c.isRecording() && c.initSpanRecorder(s._experiments && s._experiments.maxSpans), n && n.emit && n.emit("startTransaction", c), c
      }

      function P(t, e, n, r, s, i, o, a = !1) {
        const c = t.getClient(),
          u = c && c.getOptions() || {};
        let l = new I(e, t, n, r, o, s, a);
        return l = N(l, u, {
          name: e.name,
          parentSampled: e.parentSampled,
          transactionContext: e,
          attributes: {
            ...e.data,
            ...e.attributes
          },
          ...i
        }), l.isRecording() && l.initSpanRecorder(u._experiments && u._experiments.maxSpans), c && c.emit && c.emit("startTransaction", l), l
      }
      var $ = n(50160),
        U = n(27084),
        B = n(59834),
        H = n(50726),
        z = n(54686),
        W = n(8312),
        q = n(85771),
        J = n(50332);

      function K(t, e) {
        const n = {
          sent_at: (new Date).toISOString()
        };
        e && (n.dsn = (0, q.SB)(e));
        const r = t.map(G);
        return (0, J.h4)(n, r)
      }

      function G(t) {
        return [{
          type: "span"
        }, t]
      }
      var Y = n(58011),
        X = n(12160);

      function V(t) {
        return "number" == typeof t && isFinite(t)
      }

      function Q(t, {
        startTimestamp: e,
        ...n
      }) {
        return e && t.startTimestamp > e && (t.startTimestamp = e), t.startChild({
          startTimestamp: e,
          ...n
        })
      }
      var Z = n(5474);

      function tt(t) {
        return t / 1e3
      }

      function et() {
        return z.j && z.j.addEventListener && z.j.performance
      }
      let nt, rt, st = 0,
        it = {};

      function ot(t, e) {
        if (et() && s.k3) {
          const n = function(t, e) {
            return (0, W.hT)(({
              metric: n
            }) => {
              if (void 0 === n.value) return;
              const i = n.entries.find(t => t.duration === n.value && void 0 !== at[t.name]),
                o = (0, y.KU)();
              if (!i || !o) return;
              const a = at[i.name],
                c = o.getOptions(),
                u = tt(s.k3 + i.startTime),
                l = tt(n.value),
                d = void 0 !== i.interactionId ? t[i.interactionId] : void 0;
              if (void 0 === d) return;
              const {
                routeName: p,
                parentContext: h,
                activeTransaction: f,
                user: g,
                replayId: v
              } = d, S = void 0 !== g ? g.email || g.id || g.ip_address : void 0, b = void 0 !== f ? f.getProfileId() : void 0, k = new m({
                startTimestamp: u,
                endTimestamp: u + l,
                op: `ui.interaction.${a}`,
                name: (0, B.Hd)(i.target),
                attributes: {
                  release: c.release,
                  environment: c.environment,
                  transaction: p,
                  ...void 0 !== S && "" !== S ? {
                    user: S
                  } : {},
                  ...void 0 !== b ? {
                    profile_id: b
                  } : {},
                  ...void 0 !== v ? {
                    replay_id: v
                  } : {}
                },
                exclusiveTime: n.value,
                measurements: {
                  inp: {
                    value: n.value,
                    unit: "millisecond"
                  }
                }
              }), T = function(t, e, n) {
                if (!_(e)) return !1;
                let s;
                return s = void 0 !== t && "function" == typeof e.tracesSampler ? e.tracesSampler({
                  transactionContext: t,
                  name: t.name,
                  parentSampled: t.parentSampled,
                  attributes: {
                    ...t.data,
                    ...t.attributes
                  },
                  location: z.j.location
                }) : void 0 !== t && void 0 !== t.sampled ? t.sampled : void 0 !== e.tracesSampleRate ? e.tracesSampleRate : 1, F(s) ? !0 === s ? n : !1 === s ? 0 : s * n : (H.T && r.vF.warn("[Tracing] Discarding interaction span because of invalid sample rate."), !1)
              }(h, c, e);
              if (T && Math.random() < T) {
                const t = k ? K([k], o.getDsn()) : void 0,
                  e = o && o.getTransport();
                return void(e && t && e.send(t).then(null, t => {
                  H.T && r.vF.error("Error while sending interaction:", t)
                }))
              }
            })
          }(t, e);
          return () => {
            n()
          }
        }
        return () => {}
      }
      const at = {
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

      function ct(t, e, n, r, s, i) {
        const o = i ? e[i] : e[`${n}End`],
          a = e[`${n}Start`];
        a && o && Q(t, {
          op: "browser",
          origin: "auto.browser.browser.metrics",
          description: s || n,
          startTimestamp: r + tt(a),
          endTimestamp: r + tt(o)
        })
      }

      function ut(t, e, n, r) {
        const s = e[n];
        null != s && s < 2147483647 && (t[r] = s)
      }
      var lt = n(80094),
        dt = n(68392),
        pt = n(68289),
        ht = n(14332);
      const mt = ["localhost", /^\/(?!\/)/],
        ft = {
          traceFetch: !0,
          traceXHR: !0,
          enableHTTPTimings: !0,
          tracingOrigins: mt,
          tracePropagationTargets: mt
        };

      function gt(t) {
        const {
          traceFetch: e,
          traceXHR: n,
          tracePropagationTargets: r,
          tracingOrigins: s,
          shouldCreateSpanForRequest: i,
          enableHTTPTimings: a
        } = {
          traceFetch: ft.traceFetch,
          traceXHR: ft.traceXHR,
          ...t
        }, c = "function" == typeof i ? i : t => !0, u = t => function(t, e) {
          return (0, pt.Xr)(t, e || mt)
        }(t, r || s), d = {};
        e && (0, lt.u)(t => {
          const e = function(t, e, n, r, s = "auto.http.browser") {
            if (!_() || !t.fetchData) return;
            const i = e(t.fetchData.url);
            if (t.endTimestamp && i) {
              const e = t.fetchData.__span;
              if (!e) return;
              const n = r[e];
              return void(n && (function(t, e) {
                if (e.response) {
                  p(t, e.response.status);
                  const n = e.response && e.response.headers && e.response.headers.get("content-length");
                  if (n) {
                    const e = parseInt(n);
                    e > 0 && t.setAttribute("http.response_content_length", e)
                  }
                } else e.error && t.setStatus("internal_error");
                t.end()
              }(n, t), delete r[e]))
            }
            const a = (0, y.o5)(),
              c = (0, y.KU)(),
              {
                method: u,
                url: d
              } = t.fetchData,
              h = function(t) {
                try {
                  return new URL(t).href
                } catch (t) {
                  return
                }
              }(d),
              m = h ? (0, Y.Dl)(h).host : void 0,
              S = i ? v({
                name: `${u} ${d}`,
                onlyIfParent: !0,
                attributes: {
                  url: d,
                  type: "fetch",
                  "http.method": u,
                  "http.url": h,
                  "server.address": m,
                  [l.JD]: s
                },
                op: "http.client"
              }) : void 0;
            if (S && (t.fetchData.__span = S.spanContext().spanId, r[S.spanContext().spanId] = S), n(t.fetchData.url) && c) {
              const e = t.args[0];
              t.args[1] = t.args[1] || {};
              const n = t.args[1];
              n.headers = function(t, e, n, r, s) {
                const i = s || n.getSpan(),
                  a = (0, f.rm)(),
                  {
                    traceId: c,
                    spanId: u,
                    sampled: l,
                    dsc: d
                  } = {
                    ...a.getPropagationContext(),
                    ...n.getPropagationContext()
                  },
                  p = i ? (0, o.Qh)(i) : (0, $.TC)(c, u, l),
                  h = (0, ht.De)(d || (i ? (0, g.k)(i) : (0, g.l)(c, e, n))),
                  m = r.headers || ("undefined" != typeof Request && (0, A.tH)(t, Request) ? t.headers : void 0);
                if (m) {
                  if ("undefined" != typeof Headers && (0, A.tH)(m, Headers)) {
                    const t = new Headers(m);
                    return t.append("sentry-trace", p), h && t.append(ht.hF, h), t
                  }
                  if (Array.isArray(m)) {
                    const t = [...m, ["sentry-trace", p]];
                    return h && t.push([ht.hF, h]), t
                  } {
                    const t = "baggage" in m ? m.baggage : void 0,
                      e = [];
                    return Array.isArray(t) ? e.push(...t) : t && e.push(t), h && e.push(h), {
                      ...m,
                      "sentry-trace": p,
                      baggage: e.length > 0 ? e.join(",") : void 0
                    }
                  }
                }
                return {
                  "sentry-trace": p,
                  baggage: h
                }
              }(e, c, a, n, S)
            }
            return S
          }(t, c, u, d);
          if (e) {
            const n = vt(t.fetchData.url),
              r = n ? (0, Y.Dl)(n).host : void 0;
            e.setAttributes({
              "http.url": n,
              "server.address": r
            })
          }
          a && e && yt(e)
        }), n && (0, dt.Mn)(t => {
          const e = function(t, e, n, r) {
            const s = t.xhr,
              i = s && s[dt.Er];
            if (!_() || !s || s.__sentry_own_request__ || !i) return;
            const a = e(i.url);
            if (t.endTimestamp && a) {
              const t = s.__sentry_xhr_span_id__;
              if (!t) return;
              const e = r[t];
              return void(e && void 0 !== i.status_code && (p(e, i.status_code), e.end(), delete r[t]))
            }
            const c = (0, y.o5)(),
              u = (0, f.rm)(),
              d = vt(i.url),
              h = d ? (0, Y.Dl)(d).host : void 0,
              m = a ? v({
                name: `${i.method} ${i.url}`,
                onlyIfParent: !0,
                attributes: {
                  type: "xhr",
                  "http.method": i.method,
                  "http.url": d,
                  url: i.url,
                  "server.address": h,
                  [l.JD]: "auto.http.browser"
                },
                op: "http.client"
              }) : void 0;
            m && (s.__sentry_xhr_span_id__ = m.spanContext().spanId, r[s.__sentry_xhr_span_id__] = m);
            const S = (0, y.KU)();
            if (s.setRequestHeader && n(i.url) && S) {
              const {
                traceId: t,
                spanId: e,
                sampled: n,
                dsc: r
              } = {
                ...u.getPropagationContext(),
                ...c.getPropagationContext()
              };
              ! function(t, e, n) {
                try {
                  t.setRequestHeader("sentry-trace", e), n && t.setRequestHeader(ht.hF, n)
                } catch (t) {}
              }(s, m ? (0, o.Qh)(m) : (0, $.TC)(t, e, n), (0, ht.De)(r || (m ? (0, g.k)(m) : (0, g.l)(t, S, c))))
            }
            return m
          }(t, c, u, d);
          a && e && yt(e)
        })
      }

      function yt(t) {
        const {
          url: e
        } = (0, o.et)(t).data || {};
        if (!e || "string" != typeof e) return;
        const n = (0, W.wv)("resource", ({
          entries: r
        }) => {
          r.forEach(r => {
            (function(t) {
              return "resource" === t.entryType && "initiatorType" in t && "string" == typeof t.nextHopProtocol && ("fetch" === t.initiatorType || "xmlhttprequest" === t.initiatorType)
            })(r) && r.name.endsWith(e) && (function(t) {
              const {
                name: e,
                version: n
              } = function(t) {
                let e = "unknown",
                  n = "unknown",
                  r = "";
                for (const s of t) {
                  if ("/" === s) {
                    [e, n] = t.split("/");
                    break
                  }
                  if (!isNaN(Number(s))) {
                    e = "h" === r ? "http" : r, n = t.split(r)[1];
                    break
                  }
                  r += s
                }
                return r === t && (e = r), {
                  name: e,
                  version: n
                }
              }(t.nextHopProtocol), r = [];
              return r.push(["network.protocol.version", n], ["network.protocol.name", e]), s.k3 ? [...r, ["http.request.redirect_start", _t(t.redirectStart)],
                ["http.request.fetch_start", _t(t.fetchStart)],
                ["http.request.domain_lookup_start", _t(t.domainLookupStart)],
                ["http.request.domain_lookup_end", _t(t.domainLookupEnd)],
                ["http.request.connect_start", _t(t.connectStart)],
                ["http.request.secure_connection_start", _t(t.secureConnectionStart)],
                ["http.request.connection_end", _t(t.connectEnd)],
                ["http.request.request_start", _t(t.requestStart)],
                ["http.request.response_start", _t(t.responseStart)],
                ["http.request.response_end", _t(t.responseEnd)]
              ] : r
            }(r).forEach(e => t.setAttribute(...e)), setTimeout(n))
          })
        })
      }

      function _t(t = 0) {
        return ((s.k3 || performance.timeOrigin) + t) / 1e3
      }

      function vt(t) {
        try {
          return new URL(t, z.j.location.origin).href
        } catch (t) {
          return
        }
      }
      const St = {
          ...w,
          instrumentNavigation: !0,
          instrumentPageLoad: !0,
          markBackgroundSpan: !0,
          enableLongTask: !0,
          enableInp: !1,
          interactionsSampleRate: 1,
          _experiments: {},
          ...ft
        },
        bt = (t = {}) => {
          const e = !(!H.T || !t.tracePropagationTargets && !t.tracingOrigins);
          (function() {
            const t = (0, f.EU)();
            t.__SENTRY__ && (t.__SENTRY__.extensions = t.__SENTRY__.extensions || {}, t.__SENTRY__.extensions.startTransaction || (t.__SENTRY__.extensions.startTransaction = j), t.__SENTRY__.extensions.traceHeaders || (t.__SENTRY__.extensions.traceHeaders = L), O || (O = !0, (0, C.L)(D), (0, R.r)(D)))
          })(), !t.tracePropagationTargets && t.tracingOrigins && (t.tracePropagationTargets = t.tracingOrigins);
          const n = {
              ...St,
              ...t
            },
            i = function() {
              const t = et();
              if (t && s.k3) {
                t.mark && z.j.performance.mark("sentry-tracing-init");
                const e = (0, W.T5)(({
                    metric: t
                  }) => {
                    const e = t.entries[t.entries.length - 1];
                    if (!e) return;
                    const n = tt(s.k3),
                      i = tt(e.startTime);
                    H.T && r.vF.log("[Measurements] Adding FID"), it.fid = {
                      value: t.value,
                      unit: "millisecond"
                    }, it["mark.fid"] = {
                      value: n + i,
                      unit: "second"
                    }
                  }),
                  n = (0, W.a9)(({
                    metric: t
                  }) => {
                    const e = t.entries[t.entries.length - 1];
                    e && (H.T && r.vF.log("[Measurements] Adding CLS"), it.cls = {
                      value: t.value,
                      unit: ""
                    }, rt = e)
                  }, !0),
                  i = (0, W.Pt)(({
                    metric: t
                  }) => {
                    const e = t.entries[t.entries.length - 1];
                    e && (H.T && r.vF.log("[Measurements] Adding LCP"), it.lcp = {
                      value: t.value,
                      unit: "millisecond"
                    }, nt = e)
                  }, !0),
                  o = (0, W.YG)(({
                    metric: t
                  }) => {
                    t.entries[t.entries.length - 1] && (H.T && r.vF.log("[Measurements] Adding TTFB"), it.ttfb = {
                      value: t.value,
                      unit: "millisecond"
                    })
                  });
                return () => {
                  e(), n(), i(), o()
                }
              }
              return () => {}
            }(),
            a = {};
          n.enableInp && ot(a, n.interactionsSampleRate), n.enableLongTask && (0, W.wv)("longtask", ({
            entries: t
          }) => {
            for (const e of t) {
              const t = M();
              if (!t) return;
              const n = tt(s.k3 + e.startTime),
                r = tt(e.duration);
              t.startChild({
                description: "Main UI thread blocked",
                op: "ui.long-task",
                origin: "auto.ui.browser.metrics",
                startTimestamp: n,
                endTimestamp: n + r
              })
            }
          }), n._experiments.enableInteractions && (0, W.wv)("event", ({
            entries: t
          }) => {
            for (const e of t) {
              const t = M();
              if (!t) return;
              if ("click" === e.name) {
                const n = tt(s.k3 + e.startTime),
                  r = tt(e.duration),
                  i = {
                    description: (0, B.Hd)(e.target),
                    op: `ui.interaction.${e.name}`,
                    origin: "auto.ui.browser.metrics",
                    startTimestamp: n,
                    endTimestamp: n + r
                  },
                  o = (0, B.xE)(e.target);
                o && (i.attributes = {
                  "ui.component_name": o
                }), t.startChild(i)
              }
            }
          });
          const c = {
            name: void 0,
            context: void 0
          };

          function u(t) {
            const e = (0, f.BF)(),
              {
                beforeStartSpan: a,
                idleTimeout: u,
                finalTimeout: l,
                heartbeatInterval: d
              } = n,
              p = "pageload" === t.op;
            let h;
            if (p) {
              const e = p ? kt("sentry-trace") : "",
                n = p ? kt("baggage") : void 0,
                {
                  traceId: r,
                  dsc: s,
                  parentSpanId: i,
                  sampled: o
                } = (0, $.kM)(e, n);
              h = {
                traceId: r,
                parentSpanId: i,
                parentSampled: o,
                ...t,
                metadata: {
                  ...t.metadata,
                  dynamicSamplingContext: s
                },
                trimEnd: !0
              }
            } else h = {
              trimEnd: !0,
              ...t
            };
            const m = a ? a(h) : h;
            m.metadata = m.name !== h.name ? {
              ...m.metadata,
              source: "custom"
            } : m.metadata, c.name = m.name, c.context = m, !1 === m.sampled && H.T && r.vF.log(`[Tracing] Will not send ${m.op} transaction because of beforeNavigate.`), H.T && r.vF.log(`[Tracing] Starting ${m.op} transaction on scope`);
            const {
              location: g
            } = z.j, y = P(e, m, u, l, !0, {
              location: g
            }, d, p);
            return p && z.j.document && (z.j.document.addEventListener("readystatechange", () => {
              ["interactive", "complete"].includes(z.j.document.readyState) && y.sendAutoFinishSignal()
            }), ["interactive", "complete"].includes(z.j.document.readyState) && y.sendAutoFinishSignal()), y.registerBeforeFinishCallback(t => {
              i(),
                function(t) {
                  const e = et();
                  if (!e || !z.j.performance.getEntries || !s.k3) return;
                  H.T && r.vF.log("[Tracing] Adding & adjusting spans using Performance API");
                  const n = tt(s.k3),
                    i = e.getEntries(),
                    {
                      op: a,
                      start_timestamp: c
                    } = (0, o.et)(t);
                  if (i.slice(st).forEach(e => {
                      const s = tt(e.startTime),
                        i = tt(e.duration);
                      if (!("navigation" === t.op && c && n + s < c)) switch (e.entryType) {
                        case "navigation":
                          ! function(t, e, n) {
                            ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(r => {
                                ct(t, e, r, n)
                              }), ct(t, e, "secureConnection", n, "TLS/SSL", "connectEnd"), ct(t, e, "fetch", n, "cache", "domainLookupStart"), ct(t, e, "domainLookup", n, "DNS"),
                              function(t, e, n) {
                                e.responseEnd && (Q(t, {
                                  op: "browser",
                                  origin: "auto.browser.browser.metrics",
                                  description: "request",
                                  startTimestamp: n + tt(e.requestStart),
                                  endTimestamp: n + tt(e.responseEnd)
                                }), Q(t, {
                                  op: "browser",
                                  origin: "auto.browser.browser.metrics",
                                  description: "response",
                                  startTimestamp: n + tt(e.responseStart),
                                  endTimestamp: n + tt(e.responseEnd)
                                }))
                              }(t, e, n)
                          }(t, e, n);
                          break;
                        case "mark":
                        case "paint":
                        case "measure": {
                          ! function(t, e, n, r, s) {
                            const i = s + n,
                              o = i + r;
                            Q(t, {
                              description: e.name,
                              endTimestamp: o,
                              op: e.entryType,
                              origin: "auto.resource.browser.metrics",
                              startTimestamp: i
                            })
                          }(t, e, s, i, n);
                          const o = (0, X.N)(),
                            a = e.startTime < o.firstHiddenTime;
                          "first-paint" === e.name && a && (H.T && r.vF.log("[Measurements] Adding FP"), it.fp = {
                            value: e.startTime,
                            unit: "millisecond"
                          }), "first-contentful-paint" === e.name && a && (H.T && r.vF.log("[Measurements] Adding FCP"), it.fcp = {
                            value: e.startTime,
                            unit: "millisecond"
                          });
                          break
                        }
                        case "resource":
                          ! function(t, e, n, r, s, i) {
                            if ("xmlhttprequest" === e.initiatorType || "fetch" === e.initiatorType) return;
                            const o = (0, Y.Dl)(n),
                              a = {};
                            ut(a, e, "transferSize", "http.response_transfer_size"), ut(a, e, "encodedBodySize", "http.response_content_length"), ut(a, e, "decodedBodySize", "http.decoded_response_content_length"), "renderBlockingStatus" in e && (a["resource.render_blocking_status"] = e.renderBlockingStatus), o.protocol && (a["url.scheme"] = o.protocol.split(":").pop()), o.host && (a["server.address"] = o.host), a["url.same_origin"] = n.includes(z.j.location.origin);
                            const c = i + r,
                              u = c + s;
                            Q(t, {
                              description: n.replace(z.j.location.origin, ""),
                              endTimestamp: u,
                              op: e.initiatorType ? `resource.${e.initiatorType}` : "resource.other",
                              origin: "auto.resource.browser.metrics",
                              startTimestamp: c,
                              data: a
                            })
                          }(t, e, e.name, s, i, n)
                      }
                    }), st = Math.max(i.length - 1, 0), function(t) {
                      const e = z.j.navigator;
                      if (!e) return;
                      const n = e.connection;
                      n && (n.effectiveType && t.setTag("effectiveConnectionType", n.effectiveType), n.type && t.setTag("connectionType", n.type), V(n.rtt) && (it["connection.rtt"] = {
                        value: n.rtt,
                        unit: "millisecond"
                      })), V(e.deviceMemory) && t.setTag("deviceMemory", `${e.deviceMemory} GB`), V(e.hardwareConcurrency) && t.setTag("hardwareConcurrency", String(e.hardwareConcurrency))
                    }(t), "pageload" === a) {
                    ! function(t) {
                      const e = (0, Z.z)();
                      if (!e) return;
                      const {
                        responseStart: n,
                        requestStart: s
                      } = e;
                      s <= n && (H.T && r.vF.log("[Measurements] Adding TTFB Request Time"), t["ttfb.requestTime"] = {
                        value: n - s,
                        unit: "millisecond"
                      })
                    }(it), ["fcp", "fp", "lcp"].forEach(t => {
                      if (!it[t] || !c || n >= c) return;
                      const e = it[t].value,
                        s = n + tt(e),
                        i = Math.abs(1e3 * (s - c)),
                        o = i - e;
                      H.T && r.vF.log(`[Measurements] Normalized ${t} from ${e} to ${i} (${o})`), it[t].value = i
                    });
                    const e = it["mark.fid"];
                    e && it.fid && (Q(t, {
                        description: "first input delay",
                        endTimestamp: e.value + tt(it.fid.value),
                        op: "ui.action",
                        origin: "auto.ui.browser.metrics",
                        startTimestamp: e.value
                      }), delete it["mark.fid"]), "fcp" in it || delete it.cls, Object.keys(it).forEach(t => {
                        ! function(t, e, n) {
                          const r = M();
                          r && r.setMeasurement(t, e, n)
                        }(t, it[t].value, it[t].unit)
                      }),
                      function(t) {
                        nt && (H.T && r.vF.log("[Measurements] Adding LCP Data"), nt.element && t.setTag("lcp.element", (0, B.Hd)(nt.element)), nt.id && t.setTag("lcp.id", nt.id), nt.url && t.setTag("lcp.url", nt.url.trim().slice(0, 200)), t.setTag("lcp.size", nt.size)), rt && rt.sources && (H.T && r.vF.log("[Measurements] Adding CLS Data"), rt.sources.forEach((e, n) => t.setTag(`cls.source.${n+1}`, (0, B.Hd)(e.node))))
                      }(t)
                  }
                  nt = void 0, rt = void 0, it = {}
                }(t)
            }), y
          }
          return {
            name: "BrowserTracing",
            setupOnce: () => {},
            afterAllSetup(t) {
              const i = t.getOptions(),
                {
                  markBackgroundSpan: d,
                  traceFetch: p,
                  traceXHR: h,
                  shouldCreateSpanForRequest: m,
                  enableHTTPTimings: g,
                  _experiments: _
                } = n,
                v = i && i.tracePropagationTargets,
                b = v || n.tracePropagationTargets;
              let k;
              H.T && e && v && r.vF.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used.");
              let T = z.j.location && z.j.location.href;
              if (t.on && (t.on("startNavigationSpan", t => {
                  k && (H.T && r.vF.log(`[Tracing] Finishing current transaction with op: ${(0,o.et)(k).op}`), k.end()), k = u({
                    op: "navigation",
                    ...t
                  })
                }), t.on("startPageLoadSpan", t => {
                  k && (H.T && r.vF.log(`[Tracing] Finishing current transaction with op: ${(0,o.et)(k).op}`), k.end()), k = u({
                    op: "pageload",
                    ...t
                  })
                })), n.instrumentPageLoad && t.emit && z.j.location) {
                const e = {
                  name: z.j.location.pathname,
                  startTimestamp: s.k3 ? s.k3 / 1e3 : void 0,
                  origin: "auto.pageload.browser",
                  attributes: {
                    [l.i_]: "url"
                  }
                };
                ! function(t, e) {
                  if (!t.emit) return;
                  t.emit("startPageLoadSpan", e);
                  const n = S();
                  n && (0, o.et)(n).op
                }(t, e)
              }
              n.instrumentNavigation && t.emit && z.j.location && (0, U._)(({
                to: e,
                from: n
              }) => {
                if (void 0 === n && T && -1 !== T.indexOf(e)) T = void 0;
                else if (n !== e) {
                  T = void 0;
                  const e = {
                    name: z.j.location.pathname,
                    origin: "auto.navigation.browser",
                    attributes: {
                      [l.i_]: "url"
                    }
                  };
                  ! function(t, e) {
                    if (!t.emit) return;
                    t.emit("startNavigationSpan", e);
                    const n = S();
                    n && (0, o.et)(n).op
                  }(t, e)
                }
              }), d && (z.j.document ? z.j.document.addEventListener("visibilitychange", () => {
                const t = M();
                if (z.j.document.hidden && t) {
                  const e = "cancelled",
                    {
                      op: n,
                      status: s
                    } = (0, o.et)(t);
                  H.T && r.vF.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${n}`), s || t.setStatus(e), t.setTag("visibilitychange", "document.hidden"), t.end()
                }
              }) : H.T && r.vF.warn("[Tracing] Could not set up background tab detection due to lack of global document")), _.enableInteractions && function(t, e) {
                let n;
                const s = () => {
                  const {
                    idleTimeout: s,
                    finalTimeout: i,
                    heartbeatInterval: o
                  } = t, a = "ui.action.click", c = M();
                  if (c && c.op && ["navigation", "pageload"].includes(c.op)) return void(H.T && r.vF.warn(`[Tracing] Did not create ${a} transaction because a pageload or navigation transaction is in progress.`));
                  if (n && (n.setFinishReason("interactionInterrupted"), n.end(), n = void 0), !e.name) return void(H.T && r.vF.warn(`[Tracing] Did not create ${a} transaction because _latestRouteName is missing.`));
                  const {
                    location: u
                  } = z.j, d = {
                    name: e.name,
                    op: a,
                    trimEnd: !0,
                    data: {
                      [l.i_]: e.context ? Tt(e.context) : "url"
                    }
                  };
                  n = P((0, f.BF)(), d, s, i, !0, {
                    location: u
                  }, o)
                };
                ["click"].forEach(t => {
                  z.j.document && addEventListener(t, s, {
                    once: !1,
                    capture: !0
                  })
                })
              }(n, c), n.enableInp && function(t, e) {
                const n = ({
                  entries: n
                }) => {
                  const r = (0, y.KU)(),
                    s = void 0 !== r && void 0 !== r.getIntegrationByName ? r.getIntegrationByName("Replay") : void 0,
                    i = void 0 !== s ? s.getReplayId() : void 0,
                    o = M(),
                    a = (0, y.o5)(),
                    c = void 0 !== a ? a.getUser() : void 0;
                  n.forEach(n => {
                    if (function(t) {
                        return "duration" in t
                      }(n)) {
                      const r = n.interactionId;
                      if (void 0 === r) return;
                      const s = t[r],
                        a = n.duration,
                        u = n.startTime,
                        l = Object.keys(t),
                        d = l.length > 0 ? l.reduce((e, n) => t[e].duration < t[n].duration ? e : n) : void 0;
                      if ("first-input" === n.entryType && l.map(e => t[e]).some(t => t.duration === a && t.startTime === u)) return;
                      if (!r) return;
                      if (s) s.duration = Math.max(s.duration, a);
                      else if (l.length < 10 || void 0 === d || a > t[d].duration) {
                        const n = e.name,
                          s = e.context;
                        n && s && (d && Object.keys(t).length >= 10 && delete t[d], t[r] = {
                          routeName: n,
                          duration: a,
                          parentContext: s,
                          user: c,
                          activeTransaction: o,
                          replayId: i,
                          startTime: u
                        })
                      }
                    }
                  })
                };
                (0, W.wv)("event", n), (0, W.wv)("first-input", n)
              }(a, c), gt({
                traceFetch: p,
                traceXHR: h,
                tracePropagationTargets: b,
                shouldCreateSpanForRequest: m,
                enableHTTPTimings: g
              })
            },
            options: n
          }
        };

      function kt(t) {
        const e = (0, B.NX)(`meta[name=${t}]`);
        return e ? e.getAttribute("content") : void 0
      }

      function Tt(t) {
        const e = t.attributes && t.attributes[l.i_],
          n = t.data && t.data[l.i_],
          r = t.metadata && t.metadata.source;
        return e || n || r
      }
    },
    8312(t, e, n) {
      "use strict";
      n.d(e, {
        a9: () => A,
        T5: () => L,
        hT: () => j,
        Pt: () => N,
        wv: () => P,
        YG: () => F
      });
      var r = n(61952),
        s = n(40841),
        i = n(50726);
      const o = (t, e, n) => {
        let r, s;
        return i => {
          e.value >= 0 && (i || n) && (s = e.value - (r || 0), (s || void 0 === r) && (r = e.value, e.delta = s, t(e)))
        }
      };
      var a = n(54686),
        c = n(5474);
      const u = () => {
          const t = (0, c.z)();
          return t && t.activationStart || 0
        },
        l = (t, e) => {
          const n = (0, c.z)();
          let r = "navigate";
          return n && (r = a.j.document && a.j.document.prerendering || u() > 0 ? "prerender" : n.type.replace(/_/g, "-")), {
            name: t,
            value: void 0 === e ? -1 : e,
            rating: "good",
            delta: 0,
            entries: [],
            id: `v3-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
            navigationType: r
          }
        },
        d = (t, e, n) => {
          try {
            if (PerformanceObserver.supportedEntryTypes.includes(t)) {
              const r = new PerformanceObserver(t => {
                e(t.getEntries())
              });
              return r.observe({
                type: t,
                buffered: !0,
                ...n
              }), r
            }
          } catch (t) {}
        };
      var p = n(87229),
        h = n(12160);
      let m = 0,
        f = 1 / 0,
        g = 0;
      const y = t => {
        t.forEach(t => {
          t.interactionId && (f = Math.min(f, t.interactionId), g = Math.max(g, t.interactionId), m = g ? (g - f) / 7 + 1 : 0)
        })
      };
      let _;
      const v = () => {
          "interactionCount" in performance || _ || (_ = d("event", y, {
            type: "event",
            buffered: !0,
            durationThreshold: 0
          }))
        },
        S = () => _ ? m : performance.interactionCount || 0,
        b = [],
        k = {},
        T = t => {
          const e = b[b.length - 1],
            n = k[t.interactionId];
          if (n || b.length < 10 || t.duration > e.latency) {
            if (n) n.entries.push(t), n.latency = Math.max(n.latency, t.duration);
            else {
              const e = {
                id: t.interactionId,
                latency: t.duration,
                entries: [t]
              };
              k[e.id] = e, b.push(e)
            }
            b.sort((t, e) => e.latency - t.latency), b.splice(10).forEach(t => {
              delete k[t.id]
            })
          }
        },
        w = {},
        E = t => {
          a.j.document && (a.j.document.prerendering ? addEventListener("prerenderingchange", () => E(t), !0) : "complete" !== a.j.document.readyState ? addEventListener("load", () => E(t), !0) : setTimeout(t, 0))
        },
        x = {},
        I = {};
      let C, R, M, O, D;

      function A(t, e = !1) {
        return q("cls", t, U, C, e)
      }

      function N(t, e = !1) {
        return q("lcp", t, H, M, e)
      }

      function F(t) {
        return q("ttfb", t, z, O)
      }

      function L(t) {
        return q("fid", t, B, R)
      }

      function j(t) {
        return q("inp", t, W, D)
      }

      function P(t, e) {
        return J(t, e), I[t] || (function(t) {
          const e = {};
          "event" === t && (e.durationThreshold = 0), d(t, e => {
            $(t, {
              entries: e
            })
          }, e)
        }(t), I[t] = !0), K(t, e)
      }

      function $(t, e) {
        const n = x[t];
        if (n && n.length)
          for (const o of n) try {
            o(e)
          } catch (e) {
            i.T && r.vF.error(`Error while triggering instrumentation handler.\nType: ${t}\nName: ${(0,s.qQ)(o)}\nError:`, e)
          }
      }

      function U() {
        return ((t, e = {}) => {
          const n = l("CLS", 0);
          let r, s = 0,
            i = [];
          const a = t => {
              t.forEach(t => {
                if (!t.hadRecentInput) {
                  const e = i[0],
                    o = i[i.length - 1];
                  s && 0 !== i.length && t.startTime - o.startTime < 1e3 && t.startTime - e.startTime < 5e3 ? (s += t.value, i.push(t)) : (s = t.value, i = [t]), s > n.value && (n.value = s, n.entries = i, r && r())
                }
              })
            },
            c = d("layout-shift", a);
          if (c) {
            r = o(t, n, e.reportAllChanges);
            const s = () => {
              a(c.takeRecords()), r(!0)
            };
            return (0, p.Q)(s), s
          }
        })(t => {
          $("cls", {
            metric: t
          }), C = t
        }, {
          reportAllChanges: !0
        })
      }

      function B() {
        return (() => {
          const t = (0, h.N)(),
            e = l("FID");
          let n;
          const r = r => {
              r.startTime < t.firstHiddenTime && (e.value = r.processingStart - r.startTime, e.entries.push(r), n(!0))
            },
            s = t => {
              t.forEach(r)
            },
            i = d("first-input", s);
          n = o(t => {
            $("fid", {
              metric: t
            }), R = t
          }, e), i && (0, p.Q)(() => {
            s(i.takeRecords()), i.disconnect()
          }, !0)
        })()
      }

      function H() {
        return (() => {
          const t = (0, h.N)(),
            e = l("LCP");
          let n;
          const r = r => {
              const s = r[r.length - 1];
              if (s) {
                const r = Math.max(s.startTime - u(), 0);
                r < t.firstHiddenTime && (e.value = r, e.entries = [s], n())
              }
            },
            s = d("largest-contentful-paint", r);
          if (s) {
            n = o(t => {
              $("lcp", {
                metric: t
              }), M = t
            }, e);
            const t = () => {
              w[e.id] || (r(s.takeRecords()), s.disconnect(), w[e.id] = !0, n(!0))
            };
            return ["keydown", "click"].forEach(e => {
              a.j.document && addEventListener(e, t, {
                once: !0,
                capture: !0
              })
            }), (0, p.Q)(t, !0), t
          }
        })()
      }

      function z() {
        return ((t, e) => {
          e = e || {};
          const n = l("TTFB"),
            r = o(t => {
              $("ttfb", {
                metric: t
              }), O = t
            }, n, e.reportAllChanges);
          E(() => {
            const t = (0, c.z)();
            if (t) {
              if (n.value = Math.max(t.responseStart - u(), 0), n.value < 0 || n.value > performance.now()) return;
              n.entries = [t], r(!0)
            }
          })
        })()
      }

      function W() {
        return ((t, e) => {
          e = e || {}, v();
          const n = l("INP");
          let r;
          const s = t => {
              t.forEach(t => {
                t.interactionId && T(t), "first-input" === t.entryType && !b.some(e => e.entries.some(e => t.duration === e.duration && t.startTime === e.startTime)) && T(t)
              });
              const e = (() => {
                const t = Math.min(b.length - 1, Math.floor(S() / 50));
                return b[t]
              })();
              e && e.latency !== n.value && (n.value = e.latency, n.entries = e.entries, r())
            },
            i = d("event", s, {
              durationThreshold: e.durationThreshold || 40
            });
          r = o(t, n, e.reportAllChanges), i && (i.observe({
            type: "first-input",
            buffered: !0
          }), (0, p.Q)(() => {
            s(i.takeRecords()), n.value < 0 && S() > 0 && (n.value = 0, n.entries = []), r(!0)
          }))
        })(t => {
          $("inp", {
            metric: t
          }), D = t
        })
      }

      function q(t, e, n, r, s = !1) {
        let i;
        return J(t, e), I[t] || (i = n(), I[t] = !0), r && e({
          metric: r
        }), K(t, e, s ? i : void 0)
      }

      function J(t, e) {
        x[t] = x[t] || [], x[t].push(e)
      }

      function K(t, e, n) {
        return () => {
          n && n();
          const r = x[t];
          if (!r) return;
          const s = r.indexOf(e); - 1 !== s && r.splice(s, 1)
        }
      }
    },
    54686(t, e, n) {
      "use strict";
      n.d(e, {
        j: () => r
      });
      const r = n(9929).OW
    },
    5474(t, e, n) {
      "use strict";
      n.d(e, {
        z: () => s
      });
      var r = n(54686);
      const s = () => r.j.__WEB_VITALS_POLYFILL__ ? r.j.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || (() => {
        const t = r.j.performance.timing,
          e = r.j.performance.navigation.type,
          n = {
            entryType: "navigation",
            startTime: 0,
            type: 2 == e ? "back_forward" : 1 === e ? "reload" : "navigate"
          };
        for (const e in t) "navigationStart" !== e && "toJSON" !== e && (n[e] = Math.max(t[e] - t.navigationStart, 0));
        return n
      })()) : r.j.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
    },
    12160(t, e, n) {
      "use strict";
      n.d(e, {
        N: () => o
      });
      var r = n(54686),
        s = n(87229);
      let i = -1;
      const o = () => (i < 0 && (r.j.document && r.j.document.visibilityState && (i = "hidden" !== r.j.document.visibilityState || r.j.document.prerendering ? 1 / 0 : 0), (0, s.Q)(({
        timeStamp: t
      }) => {
        i = t
      }, !0)), {
        get firstHiddenTime() {
          return i
        }
      })
    },
    87229(t, e, n) {
      "use strict";
      n.d(e, {
        Q: () => s
      });
      var r = n(54686);
      const s = (t, e) => {
        const n = s => {
          "pagehide" !== s.type && "hidden" !== r.j.document.visibilityState || (t(s), e && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
        };
        r.j.document && (addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0))
      }
    },
    50726(t, e, n) {
      "use strict";
      n.d(e, {
        T: () => r
      });
      const r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
    },
    43431(t) {
      var e, n, r = t.exports = {};

      function s() {
        throw new Error("setTimeout has not been defined")
      }

      function i() {
        throw new Error("clearTimeout has not been defined")
      }

      function o(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === s || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
        try {
          return e(t, 0)
        } catch (n) {
          try {
            return e.call(null, t, 0)
          } catch (n) {
            return e.call(this, t, 0)
          }
        }
      }! function() {
        try {
          e = "function" == typeof setTimeout ? setTimeout : s
        } catch (t) {
          e = s
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (t) {
          n = i
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
          var t = o(d);
          u = !0;
          for (var e = c.length; e;) {
            for (a = c, c = []; ++l < e;) a && a[l].run();
            l = -1, e = c.length
          }
          a = null, u = !1,
            function(t) {
              if (n === clearTimeout) return clearTimeout(t);
              if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
              try {
                return n(t)
              } catch (e) {
                try {
                  return n.call(null, t)
                } catch (e) {
                  return n.call(this, t)
                }
              }
            }(t)
        }
      }

      function h(t, e) {
        this.fun = t, this.array = e
      }

      function m() {}
      r.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        c.push(new h(t, e)), 1 !== c.length || u || o(p)
      }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = m, r.addListener = m, r.once = m, r.off = m, r.removeListener = m, r.removeAllListeners = m, r.emit = m, r.prependListener = m, r.prependOnceListener = m, r.listeners = function(t) {
        return []
      }, r.binding = function(t) {
        throw new Error("process.binding is not supported")
      }, r.cwd = function() {
        return "/"
      }, r.chdir = function(t) {
        throw new Error("process.chdir is not supported")
      }, r.umask = function() {
        return 0
      }
    }
  }
]);