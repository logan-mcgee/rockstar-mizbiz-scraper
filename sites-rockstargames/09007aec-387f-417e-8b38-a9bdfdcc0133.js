! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "09007aec-387f-417e-8b38-a9bdfdcc0133", e._sentryDebugIdIdentifier = "sentry-dbid-09007aec-387f-417e-8b38-a9bdfdcc0133")
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
  [9834], {
    29960: (e, n, a) => {
      "use strict";
      a.d(n, {
        i: () => c,
        o: () => l
      });
      var t = a(62229),
        r = a(95966),
        o = a(73855);
      const s = (0, r.setContextItem)({
          context: (0, t.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: i
        } = s,
        l = e => {
          let {
            children: n,
            payload: a
          } = e;
          return (0, o.jsx)(i, {
            value: a,
            children: n
          })
        },
        c = () => (0, t.useContext)(s)
    },
    19544: (e, n, a) => {
      "use strict";
      a.d(n, {
        C1: () => l,
        S1: () => i,
        jS: () => c
      });
      var t = a(62229),
        r = a(95966),
        o = a(29960);
      const s = e => {
          if (!e) return null;
          const {
            hostname: n,
            pathname: a
          } = new URL(e, (0, r.getCdnPrefix)(!0));
          return "/" === a ? null : (n.endsWith(".akamaized.net"), e)
        },
        i = e => {
          let {
            alt: n = null,
            mobile: a = null,
            desktop: i = null,
            ariaLabel: l = null,
            sources: c = null,
            prod: d = null
          } = e;
          const A = (0, r.useLocale)(),
            {
              meta: m = {}
            } = (0, o.i)() ?? {},
            [u, f] = (0, t.useState)(d ?? m?.cdn ?? m?.prod ?? !0);
          (0, t.useEffect)((() => {
            f(d ?? m?.cdn ?? m?.prod ?? !0)
          }), [d, m]);
          const g = (0, t.useCallback)((e => {
            const n = null !== c,
              a = e?.previewSrc ?? e ?? null;
            if (null === a || "string" != typeof a) return null;
            if (a.startsWith("http")) return s(a);
            const t = `${n?(0,r.getCdnPrefix)(u):""}${a}`;
            return s(t)
          }), [u, c]);
          return {
            alt: n,
            ariaLabel: l,
            src: {
              mobile: g(c?.[A]?.mobile ?? c?.en_us?.mobile ?? a),
              desktop: g(c?.[A]?.desktop ?? c?.en_us?.desktop ?? i)
            }
          }
        },
        l = e => {
          const n = (0, o.i)() ?? {},
            {
              meta: a = {}
            } = n,
            [i, l] = (0, t.useState)(a?.cdn ?? a?.prod ?? !1);
          return (0, t.useEffect)((() => {
            l(a?.cdn ?? a?.prod ?? !1)
          }), [a]), e ? e?.startsWith("http") ? s(e) : s(`${(0,r.getCdnPrefix)(i)}${e}`) : null
        },
        c = () => {
          const e = (0, o.i)() ?? {},
            {
              meta: n = {}
            } = e,
            a = (0, t.useMemo)((() => n?.cdn ?? n?.prod ?? !1), [n]);
          return (0, t.useCallback)((function(e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const t = n?.prod ?? a;
            return e ? e?.startsWith("http") ? s(e) : s(`${(0,r.getCdnPrefix)(t)}${e}`) : null
          }), [a])
        }
    },
    99834: (e, n, a) => {
      "use strict";
      a.r(n), a.d(n, {
        InViewTracker: () => P,
        TinaParser: () => J,
        TinaPayloadProvider: () => m.o,
        recursiveNestedTemplates: () => R,
        useGenerateCdnSource: () => g.jS,
        useGetCdnSource: () => g.C1,
        useImageParser: () => g.S1,
        useTinaComponents: () => A,
        useTinaPayload: () => m.i,
        useTranslations: () => L
      });
      var t = a(62229),
        r = a(17868),
        o = a.n(r);
      var s = a(95966),
        i = a(73855);
      const l = (0, s.setContextItem)({
          context: (0, t.createContext)(),
          key: "tinaParser"
        }),
        {
          Provider: c
        } = l,
        d = e => {
          let {
            children: n,
            components: a
          } = e;
          return (0, i.jsx)(c, {
            value: a,
            children: n
          })
        },
        A = () => (0, t.useContext)(l);
      var m = a(29960),
        u = a(34695),
        f = a.n(u);
      var g = a(19544);
      const p = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return {
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, i.jsx)("hr", {})
        }
      };
      p("Background Image Gradient"),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label").toLowerCase().split(" ").join("_")
        }("Background Image Gradient"), p("Background Image Gradient"), a(81788);
      const k = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return {
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, i.jsx)("hr", {})
        }
      };
      a(14636);
      var b = a(53178),
        C = a.n(b),
        v = a(27835),
        h = a.n(v),
        y = a(17529),
        w = a.n(y),
        x = a(72162),
        _ = a.n(x),
        S = a(82510),
        E = a.n(S),
        B = a(90675),
        I = a.n(B),
        D = a(36877),
        N = {};
      N.styleTagTransform = I(), N.setAttributes = _(), N.insert = w().bind(null, "head"), N.domAPI = h(), N.insertStyleElement = E(), C()(D.A, N), D.A && D.A.locals && D.A.locals;
      k("Background Image Gradient"),
        function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label";
          e.toLowerCase().split(" ").join("_")
        }("Background Image Gradient"), k("Background Image Gradient"), a(61398);
      const T = "content",
        L = e => {
          let {
            payload: n,
            variables: a
          } = e;
          const t = ((e, n) => {
              const a = {};
              return o().cloneDeepWith(e, ((e, t, r) => {
                t === n && e && (a[r.key] = e)
              })), a
            })(n, "_memoq"),
            r = JSON.parse(JSON.stringify(o().merge(JSON.parse(JSON.stringify(t)), JSON.parse(JSON.stringify(a?.keys ?? {}))))),
            s = JSON.parse(JSON.stringify(n));
          return o().cloneDeepWith(s, ((e, n, a) => {
            (e => {
              if (!e || !o().has(e, "key") || e.translated) return;
              const n = r[e.key] ?? null;
              if (!n) return;
              const a = f()(n);
              Object.keys(a).map((n => {
                o().set(e, n, a[n])
              })), o().set(e, "translated", !0), Object.freeze(e)
            })(a)
          })), s
        };
      var z = a(42868),
        F = a(2918);
      const O = {
          event: "page_section_impression",
          element_placement: null
        },
        P = e => {
          let {
            threshold: n = .6,
            children: a,
            gtm: r = {}
          } = e;
          const {
            track: o
          } = (0, F.useGtmTrack)(), {
            ref: l,
            scrollTracked: c
          } = (0, s.useScrollTracking)(n);
          return (0, t.useEffect)((() => {
            c && o({
              ...O,
              ...r
            })
          }), [c]), (0, i.jsx)("section", {
            ref: l,
            children: a
          })
        },
        j = e => {
          let {
            impressionTracking: n,
            gtm: a = {},
            children: t
          } = e;
          return n?.shouldTrack ? (0, i.jsx)(P, {
            threshold: n?.threshold,
            gtm: a,
            children: t
          }) : t
        },
        $ = e => {
          let {
            components: n,
            payload: a,
            componentProps: r = {}
          } = e;
          const s = (0, t.useMemo)((() => (o().cloneDeepWith(a, ((e, t) => {
            "_template" !== t || Number.isInteger(Number(e)) || o().get(n, e) || (console.error(`TinaParser:useComponentRenderer: Component ${e} was found in payload, but not in renderable components.`), console.error("Payload:", a), console.error("Components:", n))
          })), (e => {
            let {
              components: n,
              payload: a,
              componentProps: r
            } = e;
            const s = e => {
              let l = "";
              if (l = Array.isArray(e?.[T]) ? e[T].map((e => s(e))) : e?.[T] ?? "", !e?._template) return l;
              let c = e._template;
              "0" === c && (console.warn(`The _template "${c}" wasn't found in the available components. The _template "${c}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(n),
                payload: e
              }), c = "gen9.Hero");
              const d = o().get(n, c) ?? null;
              if (!d) return null;
              const A = ((e, n) => a => ((e, n, a) => (0, i.jsx)(j, {
                  impressionTracking: a?.impressionTracking,
                  gtm: a?.gtm,
                  children: (0, i.jsx)(e, {
                    ...n
                  })
                }))(e, a, n))(d, {
                  impressionTracking: e?.impressionTracking,
                  gtm: {
                    ...e?.gtm,
                    whatever: 1
                  }
                }),
                m = [...e?.translations ?? []].reverse(),
                u = `componentProps_${(0,z.A)()}`;
              return (0, t.createElement)(A, {
                ...a?.meta,
                ...e,
                ...r,
                t: e => m.find((n => n?._key === e))?.value ?? e,
                key: u
              }, l)
            };
            return a?.[T]?.length ? s(a) : null
          })({
            components: n,
            payload: a,
            componentProps: r
          }))), [JSON.stringify(a), JSON.stringify(n)]);
          return s
        },
        J = e => {
          let {
            tina: n,
            components: a = {},
            componentProps: r = {}
          } = e;
          const s = (0, m.i)(),
            [l, c] = (0, t.useState)(null),
            [u, f] = (0, t.useState)(null);
          (0, t.useEffect)((() => {
            n?.payload && c(n.payload), n?.variables && f(n.variables)
          }), [n]);
          const [g] = (0, t.useState)({
            ...a,
            ...A() ?? {}
          }), p = (e => {
            let {
              payload: n
            } = e;
            const [a, r] = (0, t.useState)(n);
            return (0, t.useEffect)((() => {
              const e = o().debounce((() => {
                const e = JSON.parse(JSON.stringify(n));
                o().cloneDeepWith(e, ((e, n, a) => {
                  a?.mediaQueryList && (e => {
                    e?.__original_data || Object.assign(e, {
                      __original_data: {
                        ...e
                      }
                    });
                    const n = e.mediaQueryList.filter((e => {
                        let {
                          mediaQueryString: n
                        } = e;
                        return window.matchMedia(n).matches
                      })) ?? null,
                      a = Object.assign({}, ...n);
                    Object.assign(e, {
                      ...e?.__original_data,
                      ...a,
                      _template: e?._template
                    })
                  })(a)
                })), r(e)
              }), 250);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            }), [n]), a
          })({
            payload: l
          }), k = L({
            payload: l,
            variables: u
          });
          return (0, t.useMemo)((() => {
            if (!l) return null;
            const e = k,
              a = l?.meta?.prod ?? l?.meta?.cdn ?? s?.meta?.prod ?? s?.meta?.cdn ?? !1,
              t = {
                ...l,
                meta: {
                  ...l?.meta ?? {},
                  prod: a
                }
              };
            return (0, i.jsx)(m.o, {
              payload: t,
              children: (0, i.jsx)(d, {
                components: g,
                children: (0, i.jsx)($, {
                  payload: e,
                  components: g,
                  componentProps: {
                    ...r,
                    tina: n
                  }
                })
              })
            })
          }), [s, l, JSON.stringify(p), JSON.stringify(k)])
        },
        M = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
            r = {
              ...a
            };
          if (n > 0) {
            const o = M(e, n - 1, a, t);
            r = {
              ...r,
              ...t(e, {
                templates: o
              })
            }
          }
          return r
        },
        R = M
    },
    36877: (e, n, a) => {
      "use strict";
      a.d(n, {
        A: () => m
      });
      var t = a(42587),
        r = a.n(t),
        o = a(15081),
        s = a.n(o),
        i = a(79908),
        l = a.n(i),
        c = new URL(a(75958), a.b),
        d = s()(r()),
        A = l()(c);
      d.push([e.id, `.rockstargames-sites-rockstargamese8a5daf12553885a40529a38c92c1d67{margin-bottom:var(--tina-padding-big,20px);position:relative}.rockstargames-sites-rockstargamese8a5daf12553885a40529a38c92c1d67,.rockstargames-sites-rockstargamese8a5daf12553885a40529a38c92c1d67 *{box-sizing:border-box;font-family:Inter,sans-serif}.rockstargames-sites-rockstargamese8a5daf12553885a40529a38c92c1d67 .rockstargames-sites-rockstargamesceac2b2784e621f05ce51dade558df8d{all:unset;color:var(--tina-color-grey-8,#433e52);display:block;font-family:Inter,sans-serif;font-size:var(--tina-font-size-1,13px);font-weight:600;-webkit-letter-spacing:.01em;-moz-letter-spacing:.01em;-ms-letter-spacing:.01em;letter-spacing:.01em;line-height:1.35;margin-bottom:8px;overflow:hidden;text-overflow:ellipsis;width:100%}.rockstargames-sites-rockstargamese8a5daf12553885a40529a38c92c1d67 .rockstargames-sites-rockstargamesa0b2c6a5b66b849b487834caa1f6e3c8{all:unset;color:var(--tina-color-grey-6,#716c7f);display:block;font-family:Inter,sans-serif;font-size:var(--tina-font-size-0,12px);font-style:italic;font-weight:lighter;margin:0;padding-top:4px;white-space:normal}.rockstargames-sites-rockstargamese8a5daf12553885a40529a38c92c1d67 input{box-shadow:0 0 0 2px transparent}.rockstargames-sites-rockstargamese8a5daf12553885a40529a38c92c1d67 input,.rockstargames-sites-rockstargamese8a5daf12553885a40529a38c92c1d67 select{background:var(--tina-color-grey-0,#fff);background-color:var(--tina-color-grey-0,#fff);border:1px solid var(--tina-color-grey-2,#edecf3);border-radius:var(--tina-radius-small,5px);font-size:var(--tina-font-size-2,15px);line-height:1.35;margin:0;outline:none;padding:var(--tina-padding-small,12px);position:relative;transition:all 85ms ease-out;width:100%}.rockstargames-sites-rockstargamese8a5daf12553885a40529a38c92c1d67 select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url(${A});background-position:right .7em top 50%;background-repeat:no-repeat;background-size:.65em auto;display:block;font-family:inherit;max-width:100%}.rockstargames-sites-rockstargamese8a5daf12553885a40529a38c92c1d67 .rockstargames-sites-rockstargamesd9b75ea1bc84f8562bd9c7c730ce7317,.rockstargames-sites-rockstargamese8a5daf12553885a40529a38c92c1d67 .rockstargames-sites-rockstargamesd84706d08967f65d5d2384427474feb5{color:var(--tina-color-error,#ec4815)}[class^=BlockMenuList-] button,button[class^=CreateButton-]{color:#000}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/tina/src/ui/FieldWrapper/index.less"],
        names: [],
        mappings: "AAAA,mEAII,0CAAA,CADA,iBAEJ,CALA,wIACI,qBAAA,CACA,4BAOJ,CATA,sIAWQ,SAAA,CAUA,sCAAA,CATA,aAAA,CACA,4BAAA,CACA,sCAAA,CACA,eAAA,CACA,4BAAA,CACA,yBAAA,CACA,wBAAA,CACA,oBAAA,CACA,gBAAA,CAEA,iBAAA,CAGA,eAAA,CAFA,sBAAA,CACA,UAER,CA1BA,sIA6BQ,SAAA,CAMA,sCAAA,CALA,aAAA,CACA,4BAAA,CACA,sCAAA,CACA,iBAAA,CACA,mBAAA,CAIA,QAAA,CAFA,eAAA,CACA,kBACR,CAtCA,yEAuDQ,gCADR,CAtDA,mJA4CQ,wCAAA,CAIA,8CAAA,CAGA,iDAAA,CARA,0CAAA,CAEA,sCAAA,CACA,gBAAA,CAOA,QAAA,CACA,YAAA,CAZA,sCAAA,CAKA,iBAAA,CAGA,4BAAA,CAEA,UA2BR,CA/EA,0EA0EQ,uBAAA,CACA,oBAAA,CACA,eAAA,CAEA,wDAAA,CAEA,sCAAA,CADA,2BAAA,CAEA,0BAAA,CAtBA,aAAA,CACA,mBAAA,CACA,cAkBR,CA/EA,4QAsFQ,qCAHR,CAaA,4DACI,UARJ",
        sourcesContent: [".FieldWrapper_sc_custom {\n    box-sizing: border-box;\n    font-family: 'Inter', sans-serif;\n    position: relative;\n    margin-bottom: var(--tina-padding-big, 20px);\n    * {\n        box-sizing: border-box;\n        font-family: 'Inter', sans-serif;\n    }\n\n    .FieldLabel_sc_custom {\n        all: unset;\n        display: block;\n        font-family: 'Inter', sans-serif;\n        font-size: var(--tina-font-size-1, 13px);\n        font-weight: 600;\n        -webkit-letter-spacing: 0.01em;\n        -moz-letter-spacing: 0.01em;\n        -ms-letter-spacing: 0.01em;\n        letter-spacing: 0.01em;\n        line-height: 1.35;\n        color: var(--tina-color-grey-8, #433e52);\n        margin-bottom: 8px;\n        text-overflow: ellipsis;\n        width: 100%;\n        overflow: hidden;\n    }\n\n    .FieldDescription_sc_custom {\n        all: unset;\n        display: block;\n        font-family: 'Inter', sans-serif;\n        font-size: var(--tina-font-size-0, 12px);\n        font-style: italic;\n        font-weight: lighter;\n        color: var(--tina-color-grey-6, #716c7f);\n        padding-top: 4px;\n        white-space: normal;\n        margin: 0;\n    }\n\n    input {\n        padding: var(--tina-padding-small, 12px);\n        border-radius: var(--tina-radius-small, 5px);\n        background: var(--tina-color-grey-0, #ffffff);\n        font-size: var(--tina-font-size-2, 15px);\n        line-height: 1.35;\n        position: relative;\n        background-color: var(--tina-color-grey-0, #ffffff);\n        -webkit-transition: all 85ms ease-out;\n        transition: all 85ms ease-out;\n        border: 1px solid var(--tina-color-grey-2, #edecf3);\n        width: 100%;\n        margin: 0;\n        outline: none;\n        box-shadow: 0 0 0 2px transparent;\n    }\n\n    select {\n        display: block;\n        font-family: inherit;\n        max-width: 100%;\n        padding: var(--tina-padding-small, 12px);\n        border-radius: var(--tina-radius-small, 5px);\n        background: var(--tina-color-grey-0, #ffffff);\n        font-size: var(--tina-font-size-2, 15px);\n        line-height: 1.35;\n        position: relative;\n        background-color: var(--tina-color-grey-0, #ffffff);\n        -webkit-transition: all 85ms ease-out;\n        transition: all 85ms ease-out;\n        border: 1px solid var(--tina-color-grey-2, #edecf3);\n        width: 100%;\n        margin: 0;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        outline: none;\n        background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E);\n        background-repeat: no-repeat;\n        background-position: right 0.7em top 50%;\n        background-size: 0.65em auto;\n    }\n\n    .field-error,\n    .FieldError_sc_custom {\n        color: var(--tina-color-error, #ec4815);\n    }\n}\n\n[class^='BlockMenuList-'] {\n    button {\n        color: black;\n    }\n}\n\nbutton[class^='CreateButton-'] {\n    color: black;\n}\n"],
        sourceRoot: ""
      }]), d.locals = {
        FieldWrapper_sc_custom: "rockstargames-sites-rockstargamese8a5daf12553885a40529a38c92c1d67",
        FieldLabel_sc_custom: "rockstargames-sites-rockstargamesceac2b2784e621f05ce51dade558df8d",
        FieldDescription_sc_custom: "rockstargames-sites-rockstargamesa0b2c6a5b66b849b487834caa1f6e3c8",
        FieldError_sc_custom: "rockstargames-sites-rockstargamesd9b75ea1bc84f8562bd9c7c730ce7317",
        "field-error": "rockstargames-sites-rockstargamesd84706d08967f65d5d2384427474feb5"
      };
      const m = d
    },
    61398: e => {
      var n = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TagList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "context"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tagList"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "context"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "context"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 131
        }
      };

      function a(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && n.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, n)
        }))
      }
      n.loc.source = {
        body: "query TagList($locale: String!, $context: Int) {\n    tagList(locale: $locale, context: $context) {\n        name\n        id\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function r(e, n) {
        for (var a = 0; a < e.definitions.length; a++) {
          var t = e.definitions[a];
          if (t.name && t.name.value == n) return t
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          a(e, n), t[e.name.value] = n
        }
      })), e.exports = n, e.exports.TagList = function(e, n) {
        var a = {
          kind: e.kind,
          definitions: [r(e, n)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var o = t[n] || new Set,
          s = new Set,
          i = new Set;
        for (o.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var l = i;
          i = new Set, l.forEach((function(e) {
            s.has(e) || (s.add(e), (t[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return s.forEach((function(n) {
          var t = r(e, n);
          t && a.definitions.push(t)
        })), a
      }(n, "TagList")
    },
    75958: e => {
      "use strict";
      e.exports = "data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"
    }
  }
]);