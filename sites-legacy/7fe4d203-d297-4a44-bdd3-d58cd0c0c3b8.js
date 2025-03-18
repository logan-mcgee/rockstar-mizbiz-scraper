! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7fe4d203-d297-4a44-bdd3-d58cd0c0c3b8", e._sentryDebugIdIdentifier = "sentry-dbid-7fe4d203-d297-4a44-bdd3-d58cd0c0c3b8")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [5563, 1029, 7944], {
    14070: e => {
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
          c = {};
        return function e(n, i, l) {
          l = l || 1, Object.keys(n).forEach((function(d) {
            const u = n[d],
              f = r.safe && Array.isArray(u),
              p = Object.prototype.toString.call(u),
              y = t(u),
              m = "[object Object]" === p || "[object Array]" === p,
              g = i ? i + o + s(d) : s(d);
            if (!f && !y && m && Object.keys(u).length && (!r.maxDepth || l < a)) return e(u, g, l + 1);
            c[g] = u
          }))
        }(e), c
      }
      e.exports = r, r.flatten = r, r.unflatten = function e(o, a) {
        const s = (a = a || {}).delimiter || ".",
          c = a.overwrite || !1,
          i = a.transformKey || n,
          l = {};
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
            f = l;
          for (; void 0 !== u;) {
            if ("__proto__" === r) return;
            const e = Object.prototype.toString.call(f[r]),
              t = "[object Object]" === e || "[object Array]" === e;
            if (!c && !t && void 0 !== f[r]) return;
            (c && !t || !c && null == f[r]) && (f[r] = "number" != typeof u || a.object ? {} : []), f = f[r], n.length > 0 && (r = d(n.shift()), u = d(n[0]))
          }
          f[r] = e(o[t], a)
        })), l
      }
    },
    65039: (e, t, n) => {
      "use strict";
      var r = n(62229),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, n) {
        var r, a = {},
          l = null,
          d = null;
        for (r in void 0 !== n && (l = "" + n), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (d = t.ref), t) s.call(t, r) && !i.hasOwnProperty(r) && (a[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === a[r] && (a[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: d,
          props: a,
          _owner: c.current
        }
      }
      t.Fragment = a, t.jsx = l, t.jsxs = l
    },
    91029: (e, t, n) => {
      "use strict";
      e.exports = n(65039)
    },
    55834: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        InViewTracker: () => j,
        TinaParser: () => v,
        TinaPayloadProvider: () => f.o,
        recursiveNestedTemplates: () => N,
        useGenerateCdnSource: () => S.jS,
        useGetCdnSource: () => S.C1,
        useImageParser: () => S.S1,
        useTinaComponents: () => u,
        useTinaPayload: () => f.i,
        useTranslations: () => g
      });
      var r = n(62229),
        o = n(14282),
        a = n.n(o);
      var s = n(95966),
        c = n(91029);
      const i = (0, s.setContextItem)({
          context: (0, r.createContext)(),
          key: "tinaParser"
        }),
        {
          Provider: l
        } = i,
        d = e => {
          let {
            children: t,
            components: n
          } = e;
          return (0, c.jsx)(l, {
            value: n,
            children: t
          })
        },
        u = () => (0, r.useContext)(i);
      var f = n(68430),
        p = n(14070),
        y = n.n(p),
        m = n(3533);
      const g = e => {
        let {
          payload: t,
          variables: n
        } = e;
        const r = ((e, t) => {
            const n = {};
            return a().cloneDeepWith(e, ((e, r, o) => {
              r === t && e && (n[o.key] = e)
            })), n
          })(t, m.Qw),
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
      var b = n(20310),
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
            scrollTracked: l
          } = (0, s.useScrollTracking)(t);
          return (0, r.useEffect)((() => {
            l && a({
              ...h,
              ...o
            })
          }), [l]), (0, c.jsx)("section", {
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
          return t?.shouldTrack ? (0, c.jsx)(j, {
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
              if (i = Array.isArray(e?.[m.ZH]) ? e[m.ZH].map((e => s(e))) : e?.[m.ZH] ?? "", !e?._template) return i;
              let l = e._template;
              "0" === l && (console.warn(`The _template "${l}" wasn't found in the available components. The _template "${l}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(t),
                payload: e
              }), l = "gen9.Hero");
              const d = a().get(t, l) ?? null;
              if (!d) return null;
              const u = ((e, t) => n => ((e, t, n) => (0, c.jsx)(O, {
                  impressionTracking: n?.impressionTracking,
                  gtm: n?.gtm,
                  children: (0, c.jsx)(e, {
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
                p = `componentProps_${(0,b.A)()}`;
              return (0, r.createElement)(u, {
                ...n?.meta,
                ...e,
                ...o,
                t: e => f.find((t => t?._key === e))?.value ?? e,
                key: p
              }, i)
            };
            return n?.[m.ZH]?.length ? s(n) : null
          })({
            components: t,
            payload: n,
            componentProps: o
          }))), [JSON.stringify(n), JSON.stringify(t)]);
          return s
        },
        v = e => {
          let {
            tina: t,
            components: n = {},
            componentProps: o = {}
          } = e;
          const s = (0, f.i)(),
            [i, l] = (0, r.useState)(null),
            [p, y] = (0, r.useState)(null);
          (0, r.useEffect)((() => {
            t?.payload && l(t.payload), t?.variables && y(t.variables)
          }), [t]);
          const [m] = (0, r.useState)({
            ...n,
            ...u() ?? {}
          }), b = (e => {
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
          }), _ = g({
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
            return (0, c.jsx)(f.o, {
              payload: r,
              children: (0, c.jsx)(d, {
                components: m,
                children: (0, c.jsx)(k, {
                  payload: e,
                  components: m,
                  componentProps: {
                    ...o,
                    tina: t
                  }
                })
              })
            })
          }), [s, i, JSON.stringify(b), JSON.stringify(_)])
        };
      var S = n(8458);
      const w = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
            o = {
              ...n
            };
          if (t > 0) {
            const a = w(e, t - 1, n, r);
            o = {
              ...o,
              ...r(e, {
                templates: a
              })
            }
          }
          return o
        },
        N = w
    }
  }
]);