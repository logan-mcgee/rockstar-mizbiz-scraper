try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "bd215ea0-a80f-40dc-ba4e-443d1caf2011", e._sentryDebugIdIdentifier = "sentry-dbid-bd215ea0-a80f-40dc-ba4e-443d1caf2011")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [813, 3194], {
    10813(e, a, t) {
      t.r(a), t.d(a, {
        Severity: () => k,
        addBreadcrumb: () => R.Z,
        captureEvent: () => s.r,
        captureException: () => s.Cp,
        captureMessage: () => s.wd,
        captureReactException: () => h.xQ,
        initSentry: () => T,
        metrics: () => v,
        registerImportMap: () => S
      });
      var r = t(91452),
        n = t(66829),
        o = t(49084),
        s = t(16805);
      const i = {},
        d = "routing.react_router_match",
        l = "routing.legacy_route",
        c = "routing.instrumentation",
        p = "__SENTRY_IMPORT_MAP__",
        g = e => {
          const a = e => e.replace(/^@(rockstargames|rockstar)\//, "").replace(/[/\\.]/g, "-"),
            t = (e?.exception?.values?.[0].stacktrace?.frames || []).filter(e => e.module_metadata && e.module_metadata.packageName).map(e => e.module_metadata).pop(),
            {
              dsn: r,
              packageName: n,
              version: o
            } = (e => {
              const a = e?.dsn,
                t = e?.packageName ?? "",
                r = (e => {
                  const a = window[p] || {};
                  return a.microFrontends?.[e]?.[0]?.metadata?.version
                })(t) || e?.version;
              return {
                dsn: a,
                packageName: t,
                version: r
              }
            })(t);
          if (n) {
            const t = [a(n), o].filter(Boolean).join("@");
            return e?.event_id && r && (i[e.event_id] = r), {
              ...e,
              release: t,
              tags: {
                ...e.tags,
                "package-name": n
              }
            }
          }
          return e
        },
        u = ({
          getEvent: e
        }) => {
          const a = e();
          return a && i[a?.event_id ?? ""] ? [{
            dsn: i[a?.event_id ?? ""]
          }] : []
        };
      var f = t(59069),
        m = t(58594),
        _ = t(55804),
        y = t(17838),
        b = t(18664);
      const w = e => {
        const a = [];
        return a.push((0, f.s)()), a.push((0, m.X)()), a.push((0, _.Q)()), e?.performanceTracing?.enabled && a.push((0, y.dp)(e?.performanceTracing?.options ?? {})), e?.sessionReplay?.enabled && a.push((0, b.w)(e?.sessionReplay?.options ?? {})), a
      };
      var k = function(e) {
        return e.Fatal = "fatal", e.Error = "error", e.Warning = "warning", e.Log = "log", e.Info = "info", e.Debug = "debug", e
      }({});
      const E = e => e && e.map(e => new RegExp(e, "i")) || [];
      var R = t(20696),
        h = t(47847),
        v = t(230);
      const S = e => {
          window[p] || (window[p] = e)
        },
        T = () => {
          const e = {
              ...__SENTRY_CONFIG__,
              release: "mfe@1.0.0",
              environment: __ENVIRONMENT__
            },
            a = {
              allowUrls: E(e?.errorReporting?.options?.allowUrls),
              attachStacktrace: !0,
              beforeSend: (t = [g], (e, a) => {
                let r = ((e, a) => "Timeout" === a?.originalException || /Timeout \(.\)/.test(a?.originalException) ? null : e)(e, a);
                if (t)
                  for (const n of t) {
                    const t = n?.(e, a);
                    t && (r = t)
                  }
                return r
              }),
              denyUrls: E(e?.errorReporting?.options?.denyUrls),
              dsn: e.dsn,
              environment: e.environment,
              ignoreErrors: E(e?.errorReporting?.options?.ignoreErrors),
              integrations: w(e),
              release: e.release,
              replaysSessionSampleRate: e.replaysSessionSampleRate ?? 0,
              replaysOnErrorSampleRate: e.replaysOnErrorSampleRate ?? 0,
              sampleRate: e?.errorReporting?.options?.sampleRate ?? 0,
              sendDefaultPii: !0,
              tracePropagationTargets: e.tracePropagationTargets ?? [],
              transport: (0, o.NK)(r._, u),
              tracesSampler: e.tracesSampler,
              tracesSampleRate: e.tracesSampleRate ?? 0
            };
          var t;
          return (0, s.SA)(e => {
            if ("transaction" === e.type) {
              const a = e.contexts?.trace,
                t = a?.status ?? "unknown";
              if ("pageload" === (a?.op ?? ""))
                if ("internal_error" === t) e.transaction = "sentry-internal-error-pageload";
                else if ("deadline_exceeded" === t) e.transaction = "sentry-incomplete-pageload";
              else if (a?.tags?.[l]) e.transaction = "sentry-legacy-pageload";
              else {
                const t = a?.tags?.[c];
                if ("string" == typeof t) {
                  const r = t?.includes("react-router");
                  r && a?.tags && !a.tags[d] && (e.transaction = "sentry-unmatched-path-pageload")
                }
              }
            }
            return e
          }), (0, n.Ts)(a)
        }
    }
  }
]);