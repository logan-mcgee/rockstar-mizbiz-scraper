! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4bc9f6f9-b291-4804-af0d-66d9cd5c2ffa", e._sentryDebugIdIdentifier = "sentry-dbid-4bc9f6f9-b291-4804-af0d-66d9cd5c2ffa")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [341, 2722, 5854], {
    24784: e => {
      function t(e) {
        return e && e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
      }

      function n(e) {
        return e
      }

      function r(e, r) {
        const o = (r = r || {}).delimiter || ".",
          a = r.maxDepth,
          s = r.transformKey || n,
          l = {};
        return function e(n, i, c) {
          c = c || 1, Object.keys(n).forEach((function(d) {
            const u = n[d],
              f = r.safe && Array.isArray(u),
              p = Object.prototype.toString.call(u),
              y = t(u),
              b = "[object Object]" === p || "[object Array]" === p,
              m = i ? i + o + s(d) : s(d);
            if (!f && !y && b && Object.keys(u).length && (!r.maxDepth || c < a)) return e(u, m, c + 1);
            l[m] = u
          }))
        }(e), l
      }
      e.exports = r, r.flatten = r, r.unflatten = function e(o, a) {
        const s = (a = a || {}).delimiter || ".",
          l = a.overwrite || !1,
          i = a.transformKey || n,
          c = {};
        if (t(o) || "[object Object]" !== Object.prototype.toString.call(o)) return o;

        function d(e) {
          const t = Number(e);
          return isNaN(t) || -1 !== e.indexOf(".") || a.object ? e : t
        }
        return o = Object.keys(o).reduce((function(e, t) {
          const n = Object.prototype.toString.call(o[t]);
          return "[object Object]" !== n && "[object Array]" !== n || function(e) {
            const t = Object.prototype.toString.call(e),
              n = "[object Object]" === t;
            return !e || ("[object Array]" === t ? !e.length : n ? !Object.keys(e).length : void 0)
          }(o[t]) ? (e[t] = o[t], e) : function(e, t, n) {
            return Object.keys(n).reduce((function(t, r) {
              return t[e + s + r] = n[r], t
            }), t)
          }(t, e, r(o[t], a))
        }), {}), Object.keys(o).forEach((function(t) {
          const n = t.split(s).map(i);
          let r = d(n.shift()),
            u = d(n[0]),
            f = c;
          for (; void 0 !== u;) {
            if ("__proto__" === r) return;
            const e = Object.prototype.toString.call(f[r]),
              t = "[object Object]" === e || "[object Array]" === e;
            if (!l && !t && void 0 !== f[r]) return;
            (l && !t || !l && null == f[r]) && (f[r] = "number" != typeof u || a.object ? {} : []), f = f[r], n.length > 0 && (r = d(n.shift()), u = d(n[0]))
          }
          f[r] = e(o[t], a)
        })), c
      }
    },
    25854: (e, t, n) => {
      "use strict";
      e.exports = n(41454)
    },
    41454: (e, t, n) => {
      "use strict";
      var r = n(62229),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, n) {
        var r, a = {},
          c = null,
          d = null;
        for (r in void 0 !== n && (c = "" + n), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (d = t.ref), t) s.call(t, r) && !i.hasOwnProperty(r) && (a[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === a[r] && (a[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: c,
          ref: d,
          props: a,
          _owner: l.current
        }
      }
      t.Fragment = a, t.jsx = c, t.jsxs = c
    },
    63516: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        InViewTracker: () => j,
        TinaParser: () => v,
        TinaPayloadProvider: () => f.o,
        recursiveNestedTemplates: () => T,
        useGenerateCdnSource: () => w.jS,
        useGetCdnSource: () => w.C1,
        useImageParser: () => w.S1,
        useTinaComponents: () => u,
        useTinaPayload: () => f.i,
        useTranslations: () => m
      });
      var r = n(62229),
        o = n(16188),
        a = n.n(o);
      var s = n(95966),
        l = n(25854);
      const i = (0, s.setContextItem)({
          context: (0, r.createContext)(),
          key: "tinaParser"
        }),
        {
          Provider: c
        } = i,
        d = e => {
          let {
            children: t,
            components: n
          } = e;
          return (0, l.jsx)(c, {
            value: n,
            children: t
          })
        },
        u = () => (0, r.useContext)(i);
      var f = n(27538),
        p = n(24784),
        y = n.n(p),
        b = n(49819);
      const m = e => {
        let {
          payload: t,
          variables: n
        } = e;
        const r = ((e, t) => {
            const n = {};
            return a().cloneDeepWith(e, ((e, r, o) => {
              r === t && e && (n[o.key] = e)
            })), n
          })(t, b.Qw),
          o = JSON.parse(JSON.stringify(a().merge(JSON.parse(JSON.stringify(r)), JSON.parse(JSON.stringify(n?.keys ?? {}))))),
          s = JSON.parse(JSON.stringify(t));
        return a().cloneDeepWith(s, ((e, t, n) => {
          (e => {
            if (!e || !a().has(e, "key") || e.translated) return;
            const t = o[e.key] ?? null;
            if (!t) return;
            const n = y()(t);
            Object.keys(n).map((t => {
              a().set(e, t, n[t])
            })), a().set(e, "translated", !0), Object.freeze(e)
          })(n)
        })), s
      };
      var g = n(39311),
        _ = n(2918);
      const h = {
          event: "page_section_impression",
          element_placement: null
        },
        j = e => {
          let {
            threshold: t = .6,
            children: n,
            gtm: o = {}
          } = e;
          const {
            track: a
          } = (0, _.useGtmTrack)(), {
            ref: i,
            scrollTracked: c
          } = (0, s.useScrollTracking)(t);
          return (0, r.useEffect)((() => {
            c && a({
              ...h,
              ...o
            })
          }), [c]), (0, l.jsx)("section", {
            ref: i,
            children: n
          })
        },
        O = e => {
          let {
            impressionTracking: t,
            gtm: n = {},
            children: r
          } = e;
          return t?.shouldTrack ? (0, l.jsx)(j, {
            threshold: t?.threshold,
            gtm: n,
            children: r
          }) : r
        },
        k = e => {
          let {
            components: t,
            payload: n,
            componentProps: o = {}
          } = e;
          const s = (0, r.useMemo)((() => (a().cloneDeepWith(n, ((e, r) => {
            "_template" !== r || Number.isInteger(Number(e)) || a().get(t, e) || (console.error(`TinaParser:useComponentRenderer: Component ${e} was found in payload, but not in renderable components.`), console.error("Payload:", n), console.error("Components:", t))
          })), (e => {
            let {
              components: t,
              payload: n,
              componentProps: o
            } = e;
            const s = e => {
              let i = "";
              if (i = Array.isArray(e?.[b.ZH]) ? e[b.ZH].map((e => s(e))) : e?.[b.ZH] ?? "", !e?._template) return i;
              let c = e._template;
              "0" === c && (console.warn(`The _template "${c}" wasn't found in the available components. The _template "${c}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(t),
                payload: e
              }), c = "gen9.Hero");
              const d = a().get(t, c) ?? null;
              if (!d) return null;
              const u = ((e, t) => n => ((e, t, n) => (0, l.jsx)(O, {
                  impressionTracking: n?.impressionTracking,
                  gtm: n?.gtm,
                  children: (0, l.jsx)(e, {
                    ...t
                  })
                }))(e, n, t))(d, {
                  impressionTracking: e?.impressionTracking,
                  gtm: {
                    ...e?.gtm,
                    whatever: 1
                  }
                }),
                f = [...e?.translations ?? []].reverse(),
                p = `componentProps_${(0,g.A)()}`;
              return (0, r.createElement)(u, {
                ...n?.meta,
                ...e,
                ...o,
                t: e => f.find((t => t?._key === e))?.value ?? e,
                key: p
              }, i)
            };
            return n?.[b.ZH]?.length ? s(n) : null
          })({
            components: t,
            payload: n,
            componentProps: o
          }))), [JSON.stringify(n)]);
          return s
        },
        v = e => {
          let {
            tina: t,
            components: n = {},
            componentProps: o = {}
          } = e;
          const s = (0, f.i)(),
            [i, c] = (0, r.useState)(null),
            [p, y] = (0, r.useState)(null);
          (0, r.useEffect)((() => {
            t?.payload && c(t.payload), t?.variables && y(t.variables)
          }), [t]);
          const [b] = (0, r.useState)({
            ...n,
            ...u() ?? {}
          }), g = (e => {
            let {
              payload: t
            } = e;
            const [n, o] = (0, r.useState)(t);
            return (0, r.useEffect)((() => {
              const e = a().debounce((() => {
                const e = JSON.parse(JSON.stringify(t));
                a().cloneDeepWith(e, ((e, t, n) => {
                  n?.mediaQueryList && (e => {
                    e?.__original_data || Object.assign(e, {
                      __original_data: {
                        ...e
                      }
                    });
                    const t = e.mediaQueryList.filter((e => {
                        let {
                          mediaQueryString: t
                        } = e;
                        return window.matchMedia(t).matches
                      })) ?? null,
                      n = Object.assign({}, ...t);
                    Object.assign(e, {
                      ...e?.__original_data,
                      ...n,
                      _template: e?._template
                    })
                  })(n)
                })), o(e)
              }), 250);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            }), [t]), n
          })({
            payload: i
          }), _ = m({
            payload: i,
            variables: p
          });
          return (0, r.useMemo)((() => {
            if (!i) return null;
            const e = _,
              n = i?.meta?.prod ?? i?.meta?.cdn ?? s?.meta?.prod ?? s?.meta?.cdn ?? !1,
              r = {
                ...i,
                meta: {
                  ...i?.meta ?? {},
                  prod: n
                }
              };
            return (0, l.jsx)(f.o, {
              payload: r,
              children: (0, l.jsx)(d, {
                components: b,
                children: (0, l.jsx)(k, {
                  payload: e,
                  components: b,
                  componentProps: {
                    ...o,
                    tina: t
                  }
                })
              })
            })
          }), [s, i, JSON.stringify(g), JSON.stringify(_)])
        };
      var w = n(38558);
      const S = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
            o = {
              ...n
            };
          if (t > 0) {
            const a = S(e, t - 1, n, r);
            o = {
              ...o,
              ...r(e, {
                templates: a
              })
            }
          }
          return o
        },
        T = S
    }
  }
]);