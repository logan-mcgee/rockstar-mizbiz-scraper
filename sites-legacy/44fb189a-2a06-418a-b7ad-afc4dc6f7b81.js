! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "44fb189a-2a06-418a-b7ad-afc4dc6f7b81", e._sentryDebugIdIdentifier = "sentry-dbid-44fb189a-2a06-418a-b7ad-afc4dc6f7b81")
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
  [8714, 2781, 3855, 9540], {
    53178: e => {
      "use strict";
      var t = [];

      function n(e) {
        for (var n = -1, r = 0; r < t.length; r++)
          if (t[r].identifier === e) {
            n = r;
            break
          } return n
      }

      function r(e, r) {
        for (var a = {}, s = [], c = 0; c < e.length; c++) {
          var i = e[c],
            l = r.base ? i[0] + r.base : i[0],
            u = a[l] || 0,
            p = "".concat(l, " ").concat(u);
          a[l] = u + 1;
          var d = n(p),
            f = {
              css: i[1],
              media: i[2],
              sourceMap: i[3],
              supports: i[4],
              layer: i[5]
            };
          if (-1 !== d) t[d].references++, t[d].updater(f);
          else {
            var m = o(f, r);
            r.byIndex = c, t.splice(c, 0, {
              identifier: p,
              updater: m,
              references: 1
            })
          }
          s.push(p)
        }
        return s
      }

      function o(e, t) {
        var n = t.domAPI(t);
        return n.update(e),
          function(t) {
            if (t) {
              if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
              n.update(e = t)
            } else n.remove()
          }
      }
      e.exports = function(e, o) {
        var a = r(e = e || [], o = o || {});
        return function(e) {
          e = e || [];
          for (var s = 0; s < a.length; s++) {
            var c = n(a[s]);
            t[c].references--
          }
          for (var i = r(e, o), l = 0; l < a.length; l++) {
            var u = n(a[l]);
            0 === t[u].references && (t[u].updater(), t.splice(u, 1))
          }
          a = i
        }
      }
    },
    17529: e => {
      "use strict";
      var t = {};
      e.exports = function(e, n) {
        var r = function(e) {
          if (void 0 === t[e]) {
            var n = document.querySelector(e);
            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
              n = n.contentDocument.head
            } catch (e) {
              n = null
            }
            t[e] = n
          }
          return t[e]
        }(e);
        if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        r.appendChild(n)
      }
    },
    82510: e => {
      "use strict";
      e.exports = function(e) {
        var t = document.createElement("style");
        return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
      }
    },
    72162: (e, t, n) => {
      "use strict";
      e.exports = function(e) {
        var t = n.nc;
        t && e.setAttribute("nonce", t)
      }
    },
    27835: e => {
      "use strict";
      e.exports = function(e) {
        if ("undefined" == typeof document) return {
          update: function() {},
          remove: function() {}
        };
        var t = e.insertStyleElement(e);
        return {
          update: function(n) {
            ! function(e, t, n) {
              var r = "";
              n.supports && (r += "@supports (".concat(n.supports, ") {")), n.media && (r += "@media ".concat(n.media, " {"));
              var o = void 0 !== n.layer;
              o && (r += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")), r += n.css, o && (r += "}"), n.media && (r += "}"), n.supports && (r += "}");
              var a = n.sourceMap;
              a && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), t.styleTagTransform(r, e, t.options)
            }(t, e, n)
          },
          remove: function() {
            ! function(e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e)
            }(t)
          }
        }
      }
    },
    90675: e => {
      "use strict";
      e.exports = function(e, t) {
        if (t.styleSheet) t.styleSheet.cssText = e;
        else {
          for (; t.firstChild;) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(e))
        }
      }
    },
    15081: e => {
      "use strict";
      e.exports = function(e) {
        var t = [];
        return t.toString = function() {
          return this.map((function(t) {
            var n = "",
              r = void 0 !== t[5];
            return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), r && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), r && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n
          })).join("")
        }, t.i = function(e, n, r, o, a) {
          "string" == typeof e && (e = [
            [null, e, void 0]
          ]);
          var s = {};
          if (r)
            for (var c = 0; c < this.length; c++) {
              var i = this[c][0];
              null != i && (s[i] = !0)
            }
          for (var l = 0; l < e.length; l++) {
            var u = [].concat(e[l]);
            r && s[u[0]] || (void 0 !== a && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = a), n && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = n) : u[2] = n), o && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = o) : u[4] = "".concat(o)), t.push(u))
          }
        }, t
      }
    },
    79908: e => {
      "use strict";
      e.exports = function(e, t) {
        return t || (t = {}), e ? (e = String(e.__esModule ? e.default : e), /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]|(%20)/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e) : e
      }
    },
    42587: e => {
      "use strict";
      e.exports = function(e) {
        var t = e[1],
          n = e[3];
        if (!n) return t;
        if ("function" == typeof btoa) {
          var r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
            o = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),
            a = "/*# ".concat(o, " */");
          return [t].concat([a]).join("\n")
        }
        return [t].join("\n")
      }
    },
    34695: e => {
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
          l = l || 1, Object.keys(n).forEach((function(u) {
            const p = n[u],
              d = r.safe && Array.isArray(p),
              f = Object.prototype.toString.call(p),
              m = t(p),
              y = "[object Object]" === f || "[object Array]" === f,
              g = i ? i + o + s(u) : s(u);
            if (!d && !m && y && Object.keys(p).length && (!r.maxDepth || l < a)) return e(p, g, l + 1);
            c[g] = p
          }))
        }(e), c
      }
      e.exports = r, r.flatten = r, r.unflatten = function e(o, a) {
        const s = (a = a || {}).delimiter || ".",
          c = a.overwrite || !1,
          i = a.transformKey || n,
          l = {};
        if (t(o) || "[object Object]" !== Object.prototype.toString.call(o)) return o;

        function u(e) {
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
          let r = u(n.shift()),
            p = u(n[0]),
            d = l;
          for (; void 0 !== p;) {
            if ("__proto__" === r) return;
            const e = Object.prototype.toString.call(d[r]),
              t = "[object Object]" === e || "[object Array]" === e;
            if (!c && !t && void 0 !== d[r]) return;
            (c && !t || !c && null == d[r]) && (d[r] = "number" != typeof p || a.object ? {} : []), d = d[r], n.length > 0 && (r = u(n.shift()), p = u(n[0]))
          }
          d[r] = e(o[t], a)
        })), l
      }
    },
    32469: (e, t, n) => {
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
          u = null;
        for (r in void 0 !== n && (l = "" + n), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (u = t.ref), t) s.call(t, r) && !i.hasOwnProperty(r) && (a[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === a[r] && (a[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: u,
          props: a,
          _owner: c.current
        }
      }
      t.Fragment = a, t.jsx = l, t.jsxs = l
    },
    73855: (e, t, n) => {
      "use strict";
      e.exports = n(32469)
    },
    69540: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        InViewTracker: () => _,
        TinaParser: () => S,
        TinaPayloadProvider: () => d.o,
        recursiveNestedTemplates: () => x,
        useGenerateCdnSource: () => k.jS,
        useGetCdnSource: () => k.C1,
        useImageParser: () => k.S1,
        useTinaComponents: () => p,
        useTinaPayload: () => d.i,
        useTranslations: () => g
      });
      var r = n(62229),
        o = n(17868),
        a = n.n(o);
      var s = n(95966),
        c = n(73855);
      const i = (0, s.setContextItem)({
          context: (0, r.createContext)(),
          key: "tinaParser"
        }),
        {
          Provider: l
        } = i,
        u = e => {
          let {
            children: t,
            components: n
          } = e;
          return (0, c.jsx)(l, {
            value: n,
            children: t
          })
        },
        p = () => (0, r.useContext)(i);
      var d = n(29960),
        f = n(34695),
        m = n.n(f),
        y = n(58147);
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
          })(t, y.Qw),
          o = JSON.parse(JSON.stringify(a().merge(JSON.parse(JSON.stringify(r)), JSON.parse(JSON.stringify(n?.keys ?? {}))))),
          s = JSON.parse(JSON.stringify(t));
        return a().cloneDeepWith(s, ((e, t, n) => {
          (e => {
            if (!e || !a().has(e, "key") || e.translated) return;
            const t = o[e.key] ?? null;
            if (!t) return;
            const n = m()(t);
            Object.keys(n).map((t => {
              a().set(e, t, n[t])
            })), a().set(e, "translated", !0), Object.freeze(e)
          })(n)
        })), s
      };
      var b = n(42868),
        h = n(2918);
      const v = {
          event: "page_section_impression",
          element_placement: null
        },
        _ = e => {
          let {
            threshold: t = .6,
            children: n,
            gtm: o = {}
          } = e;
          const {
            track: a
          } = (0, h.useGtmTrack)(), {
            ref: i,
            scrollTracked: l
          } = (0, s.useScrollTracking)(t);
          return (0, r.useEffect)((() => {
            l && a({
              ...v,
              ...o
            })
          }), [l]), (0, c.jsx)("section", {
            ref: i,
            children: n
          })
        },
        j = e => {
          let {
            impressionTracking: t,
            gtm: n = {},
            children: r
          } = e;
          return t?.shouldTrack ? (0, c.jsx)(_, {
            threshold: t?.threshold,
            gtm: n,
            children: r
          }) : r
        },
        O = e => {
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
              if (i = Array.isArray(e?.[y.ZH]) ? e[y.ZH].map((e => s(e))) : e?.[y.ZH] ?? "", !e?._template) return i;
              let l = e._template;
              "0" === l && (console.warn(`The _template "${l}" wasn't found in the available components. The _template "${l}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(t),
                payload: e
              }), l = "gen9.Hero");
              const u = a().get(t, l) ?? null;
              if (!u) return null;
              const p = ((e, t) => n => ((e, t, n) => (0, c.jsx)(j, {
                  impressionTracking: n?.impressionTracking,
                  gtm: n?.gtm,
                  children: (0, c.jsx)(e, {
                    ...t
                  })
                }))(e, n, t))(u, {
                  impressionTracking: e?.impressionTracking,
                  gtm: {
                    ...e?.gtm,
                    whatever: 1
                  }
                }),
                d = [...e?.translations ?? []].reverse(),
                f = `componentProps_${(0,b.A)()}`;
              return (0, r.createElement)(p, {
                ...n?.meta,
                ...e,
                ...o,
                t: e => d.find((t => t?._key === e))?.value ?? e,
                key: f
              }, i)
            };
            return n?.[y.ZH]?.length ? s(n) : null
          })({
            components: t,
            payload: n,
            componentProps: o
          }))), [JSON.stringify(n), JSON.stringify(t)]);
          return s
        },
        S = e => {
          let {
            tina: t,
            components: n = {},
            componentProps: o = {}
          } = e;
          const s = (0, d.i)(),
            [i, l] = (0, r.useState)(null),
            [f, m] = (0, r.useState)(null);
          (0, r.useEffect)((() => {
            t?.payload && l(t.payload), t?.variables && m(t.variables)
          }), [t]);
          const [y] = (0, r.useState)({
            ...n,
            ...p() ?? {}
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
          }), h = g({
            payload: i,
            variables: f
          });
          return (0, r.useMemo)((() => {
            if (!i) return null;
            const e = h,
              n = i?.meta?.prod ?? i?.meta?.cdn ?? s?.meta?.prod ?? s?.meta?.cdn ?? !1,
              r = {
                ...i,
                meta: {
                  ...i?.meta ?? {},
                  prod: n
                }
              };
            return (0, c.jsx)(d.o, {
              payload: r,
              children: (0, c.jsx)(u, {
                components: y,
                children: (0, c.jsx)(O, {
                  payload: e,
                  components: y,
                  componentProps: {
                    ...o,
                    tina: t
                  }
                })
              })
            })
          }), [s, i, JSON.stringify(b), JSON.stringify(h)])
        };
      var k = n(19544);
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
        x = w
    }
  }
]);