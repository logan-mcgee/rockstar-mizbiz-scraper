try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5a367865-4eb1-46c8-a05d-ba247d468cdd", e._sentryDebugIdIdentifier = "sentry-dbid-5a367865-4eb1-46c8-a05d-ba247d468cdd")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [1510, 7918], {
    42649(e) {
      var t, n, r = e.exports = {};

      function o() {
        throw new Error("setTimeout has not been defined")
      }

      function s() {
        throw new Error("clearTimeout has not been defined")
      }

      function a(e) {
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
      var i, l = [],
        c = !1,
        u = -1;

      function d() {
        c && i && (c = !1, i.length ? l = i.concat(l) : u = -1, l.length && p())
      }

      function p() {
        if (!c) {
          var e = a(d);
          c = !0;
          for (var t = l.length; t;) {
            for (i = l, l = []; ++u < t;) i && i[u].run();
            u = -1, t = l.length
          }
          i = null, c = !1,
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

      function f(e, t) {
        this.fun = e, this.array = t
      }

      function m() {}
      r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        l.push(new f(e, t)), 1 !== l.length || c || a(p)
      }, f.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = m, r.addListener = m, r.once = m, r.off = m, r.removeListener = m, r.removeAllListeners = m, r.emit = m, r.prependListener = m, r.prependOnceListener = m, r.listeners = function(e) {
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
    },
    69245(e, t, n) {
      "use strict";
      var r = n(71127),
        o = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, n) {
        var r, s = {},
          c = null,
          u = null;
        for (r in void 0 !== n && (c = "" + n), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (u = t.ref), t) a.call(t, r) && !l.hasOwnProperty(r) && (s[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === s[r] && (s[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: c,
          ref: u,
          props: s,
          _owner: i.current
        }
      }
      t.Fragment = s, t.jsx = c, t.jsxs = c
    },
    42295(e, t, n) {
      "use strict";
      e.exports = n(69245)
    },
    42195(e, t, n) {
      "use strict";
      n.r(t), n.d(t, {
        InViewTracker: () => v,
        TextField: () => P.TextField,
        TinaParser: () => O,
        TinaPayloadProvider: () => p.o,
        TinaRichText: () => N,
        recursiveNestedTemplates: () => x,
        useGenerateCdnSource: () => E.jS,
        useGetCdnSource: () => E.C1,
        useImageParser: () => E.S1,
        usePrunedTinaKeys: () => m,
        useTinaComponents: () => d,
        useTinaPayload: () => p.i,
        useTranslations: () => b
      });
      var r = n(42295),
        o = n(71127),
        s = n(10336),
        a = n.n(s);
      var i = n(13331);
      const l = (0, i.setContextItem)({
          context: (0, o.createContext)(),
          key: "tinaParser"
        }),
        {
          Provider: c
        } = l,
        u = ({
          children: e,
          components: t
        }) => (0, r.jsx)(c, {
          value: t,
          children: e
        }),
        d = () => (0, o.useContext)(l);
      var p = n(74767);
      const f = (e, t) => Array.isArray(e) ? e.map(e => f(e, t)) : null !== e && "object" == typeof e ? Object.keys(e).reduce((n, r) => (r !== t && (n[r] = f(e[r], t)), n), {}) : e,
        m = e => (0, o.useMemo)(() => f(e, "key"), [e]);
      var y = n(90287),
        h = n.n(y),
        g = n(96130);
      const b = ({
        payload: e,
        variables: t
      }) => {
        const n = ((e, t) => {
            const n = {};
            return a().cloneDeepWith(e, (e, r, o) => {
              r === t && e && (n[o.key] = e)
            }), n
          })(e, g.Qw),
          r = JSON.parse(JSON.stringify(a().merge(JSON.parse(JSON.stringify(n)), JSON.parse(JSON.stringify(t?.keys ?? {}))))),
          o = JSON.parse(JSON.stringify(e));
        return a().cloneDeepWith(o, (e, t, n) => {
          (e => {
            if (!e || !a().has(e, "key") || e.translated) return;
            const t = r[e.key] ?? null;
            if (!t) return;
            const n = h()(t);
            Object.keys(n).map(t => {
              a().set(e, t, n[t])
            }), a().set(e, "translated", !0), Object.freeze(e)
          })(n)
        }), o
      };
      var _ = n(11206),
        w = n(82199);
      const T = {
          event: "page_section_impression",
          element_placement: null
        },
        v = ({
          threshold: e = .6,
          children: t,
          gtm: n = {}
        }) => {
          const {
            track: s
          } = (0, w.useGtmTrack)(), {
            ref: a,
            scrollTracked: l
          } = (0, i.useScrollTracking)(e);
          return (0, o.useEffect)(() => {
            l && s({
              ...T,
              ...n
            })
          }, [l]), (0, r.jsx)("section", {
            ref: a,
            children: t
          })
        },
        k = ({
          impressionTracking: e,
          gtm: t = {},
          children: n
        }) => e?.shouldTrack ? (0, r.jsx)(v, {
          threshold: e?.threshold,
          gtm: t,
          children: n
        }) : n,
        S = ({
          components: e,
          payload: t,
          componentProps: n = {}
        }) => {
          const s = (0, o.useMemo)(() => (a().cloneDeepWith(t, (n, r) => {
            "_template" !== r || Number.isInteger(Number(n)) || a().get(e, n) || (console.error(`TinaParser:useComponentRenderer: Component ${n} was found in payload, but not in renderable components.`), console.error("Payload:", t), console.error("Components:", e))
          }), (({
            components: e,
            payload: t,
            componentProps: n
          }) => {
            const s = i => {
              let l = "";
              if (l = Array.isArray(i?.[g.ZH]) ? i[g.ZH].map(e => s(e)) : i?.[g.ZH] ?? "", !i?._template) return l;
              let c = i._template;
              "0" === c && (console.warn(`The _template "${c}" wasn't found in the available components. The _template "${c}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(e),
                payload: i
              }), c = "gen9.Hero");
              const u = a().get(e, c) ?? null;
              if (!u) return null;
              const d = ((e, t) => n => ((e, t, n) => (0, r.jsx)(k, {
                  impressionTracking: n?.impressionTracking,
                  gtm: n?.gtm,
                  children: (0, r.jsx)(e, {
                    ...t
                  })
                }))(e, n, t))(u, {
                  impressionTracking: i?.impressionTracking,
                  gtm: {
                    ...i?.gtm,
                    whatever: 1
                  }
                }),
                p = [...i?.translations ?? []].reverse(),
                f = `componentProps_${(0,_.A)()}`;
              return (0, o.createElement)(d, {
                ...t?.meta,
                ...i,
                ...n,
                t: e => p.find(t => t?._key === e)?.value ?? e,
                key: f
              }, l)
            };
            return t?.[g.ZH]?.length ? s(t) : null
          })({
            components: e,
            payload: t,
            componentProps: n
          })), [JSON.stringify(t)]);
          return s
        },
        O = ({
          tina: e,
          components: t = {},
          componentProps: n = {}
        }) => {
          const s = (0, p.i)(),
            [i, l] = (0, o.useState)(null),
            [c, f] = (0, o.useState)(null);
          (0, o.useEffect)(() => {
            e?.payload && l(e.payload), e?.variables && f(e.variables)
          }, [e]);
          const [m] = (0, o.useState)({
            ...t,
            ...d() ?? {}
          }), y = (({
            payload: e
          }) => {
            const [t, n] = (0, o.useState)(e);
            return (0, o.useEffect)(() => {
              const t = a().debounce(() => {
                const t = JSON.parse(JSON.stringify(e));
                a().cloneDeepWith(t, (e, t, n) => {
                  n?.mediaQueryList && (e => {
                    e?.__original_data || Object.assign(e, {
                      __original_data: {
                        ...e
                      }
                    });
                    const t = e.mediaQueryList.filter(({
                        mediaQueryString: e
                      }) => window.matchMedia(e).matches) ?? null,
                      n = Object.assign({}, ...t);
                    Object.assign(e, {
                      ...e?.__original_data,
                      ...n,
                      _template: e?._template
                    })
                  })(n)
                }), n(t)
              }, 250);
              return t(), window.addEventListener("resize", t), () => window.removeEventListener("resize", t)
            }, [e]), t
          })({
            payload: i
          }), h = b({
            payload: i,
            variables: c
          });
          return (0, o.useMemo)(() => {
            if (!i) return null;
            const t = h,
              o = i?.meta?.prod ?? i?.meta?.cdn ?? s?.meta?.prod ?? s?.meta?.cdn ?? !1,
              a = {
                ...i,
                meta: {
                  ...i?.meta ?? {},
                  prod: o
                }
              };
            return (0, r.jsx)(p.o, {
              payload: a,
              children: (0, r.jsx)(u, {
                components: m,
                children: (0, r.jsx)(S, {
                  payload: t,
                  components: m,
                  componentProps: {
                    ...n,
                    tina: e
                  }
                })
              })
            })
          }, [s, i, JSON.stringify(y), JSON.stringify(h)])
        };
      var E = n(34725);
      const j = (e = "", t = 0, n = {}, r = () => {}) => {
          let o = {
            ...n
          };
          if (t > 0) {
            const s = j(e, t - 1, n, r);
            o = {
              ...o,
              ...r(e, {
                templates: s
              })
            }
          }
          return o
        },
        x = j,
        N = ({
          html: e,
          as: t = "span",
          ...n
        }) => (0, r.jsx)(t, {
          dangerouslySetInnerHTML: {
            __html: e
          },
          ...n
        });
      var P = n(98718)
    }
  }
]);