! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "36d41ad9-87e7-4a25-a648-56e6c492b1e5", e._sentryDebugIdIdentifier = "sentry-dbid-36d41ad9-87e7-4a25-a648-56e6c492b1e5")
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
  [3425, 5806, 5854], {
    23135: (e, n, r) => {
      r.d(n, {
        DX: () => l,
        Dc: () => c,
        TL: () => i,
        xV: () => f
      });
      var t = r(62229),
        o = r(86410),
        a = r(25854);

      function i(e) {
        const n = d(e),
          r = t.forwardRef(((e, r) => {
            const {
              children: o,
              ...i
            } = e, l = t.Children.toArray(o), d = l.find(u);
            if (d) {
              const e = d.props.children,
                o = l.map((n => n === d ? t.Children.count(e) > 1 ? t.Children.only(null) : t.isValidElement(e) ? e.props.children : null : n));
              return (0, a.jsx)(n, {
                ...i,
                ref: r,
                children: t.isValidElement(e) ? t.cloneElement(e, void 0, o) : null
              })
            }
            return (0, a.jsx)(n, {
              ...i,
              ref: r,
              children: o
            })
          }));
        return r.displayName = `${e}.Slot`, r
      }
      var l = i("Slot");

      function d(e) {
        const n = t.forwardRef(((e, n) => {
          const {
            children: r,
            ...a
          } = e;
          if (t.isValidElement(r)) {
            const e = function(e) {
                let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  r = n && "isReactWarning" in n && n.isReactWarning;
                return r ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
              }(r),
              i = function(e, n) {
                const r = {
                  ...n
                };
                for (const t in n) {
                  const o = e[t],
                    a = n[t];
                  /^on[A-Z]/.test(t) ? o && a ? r[t] = (...e) => {
                    a(...e), o(...e)
                  } : o && (r[t] = o) : "style" === t ? r[t] = {
                    ...o,
                    ...a
                  } : "className" === t && (r[t] = [o, a].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...r
                }
              }(a, r.props);
            return r.type !== t.Fragment && (i.ref = n ? (0, o.t)(n, e) : e), t.cloneElement(r, i)
          }
          return t.Children.count(r) > 1 ? t.Children.only(null) : null
        }));
        return n.displayName = `${e}.SlotClone`, n
      }
      var s = Symbol("radix.slottable");

      function c(e) {
        const n = ({
          children: e
        }) => (0, a.jsx)(a.Fragment, {
          children: e
        });
        return n.displayName = `${e}.Slottable`, n.__radixId = s, n
      }
      var f = c("Slottable");

      function u(e) {
        return t.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === s
      }
    },
    25854: (e, n, r) => {
      e.exports = r(41454)
    },
    41454: (e, n, r) => {
      var t = r(62229),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, n, r) {
        var t, a = {},
          s = null,
          c = null;
        for (t in void 0 !== r && (s = "" + r), void 0 !== n.key && (s = "" + n.key), void 0 !== n.ref && (c = n.ref), n) i.call(n, t) && !d.hasOwnProperty(t) && (a[t] = n[t]);
        if (e && e.defaultProps)
          for (t in n = e.defaultProps) void 0 === a[t] && (a[t] = n[t]);
        return {
          $$typeof: o,
          type: e,
          key: s,
          ref: c,
          props: a,
          _owner: l.current
        }
      }
      n.Fragment = a, n.jsx = s, n.jsxs = s
    },
    76260: (e, n, r) => {
      r.r(n), r.d(n, {
        Accordion: () => V,
        AccordionContent: () => te,
        AccordionHeader: () => Q,
        AccordionItem: () => Z,
        AccordionTrigger: () => ne,
        Content: () => se,
        Header: () => le,
        Item: () => ie,
        Root: () => ae,
        Trigger: () => de,
        createAccordionScope: () => G
      });
      var t = r(62229),
        o = r(29818),
        a = r(80355),
        i = r(86410),
        l = r(65998),
        d = r(52806),
        s = r(85100),
        c = r(85307),
        f = r(36146),
        u = r(30822),
        p = r(25854),
        b = "Collapsible",
        [y, g] = (0, o.A)(b),
        [_, h] = y(b),
        m = t.forwardRef(((e, n) => {
          const {
            __scopeCollapsible: r,
            open: o,
            defaultOpen: a,
            disabled: i,
            onOpenChange: l,
            ...c
          } = e, [f, y] = (0, d.i)({
            prop: o,
            defaultProp: a ?? !1,
            onChange: l,
            caller: b
          });
          return (0, p.jsx)(_, {
            scope: r,
            disabled: i,
            contentId: (0, u.B)(),
            open: f,
            onOpenToggle: t.useCallback((() => y((e => !e))), [y]),
            children: (0, p.jsx)(s.sG.div, {
              "data-state": j(f),
              "data-disabled": i ? "" : void 0,
              ...c,
              ref: n
            })
          })
        }));
      m.displayName = b;
      var w = "CollapsibleTrigger",
        v = t.forwardRef(((e, n) => {
          const {
            __scopeCollapsible: r,
            ...t
          } = e, o = h(w, r);
          return (0, p.jsx)(s.sG.button, {
            type: "button",
            "aria-controls": o.contentId,
            "aria-expanded": o.open || !1,
            "data-state": j(o.open),
            "data-disabled": o.disabled ? "" : void 0,
            disabled: o.disabled,
            ...t,
            ref: n,
            onClick: (0, l.m)(e.onClick, o.onOpenToggle)
          })
        }));
      v.displayName = w;
      var x = "CollapsibleContent",
        C = t.forwardRef(((e, n) => {
          const {
            forceMount: r,
            ...t
          } = e, o = h(x, e.__scopeCollapsible);
          return (0, p.jsx)(f.C, {
            present: r || o.open,
            children: ({
              present: e
            }) => (0, p.jsx)(A, {
              ...t,
              ref: n,
              present: e
            })
          })
        }));
      C.displayName = x;
      var A = t.forwardRef(((e, n) => {
        const {
          __scopeCollapsible: r,
          present: o,
          children: a,
          ...l
        } = e, d = h(x, r), [f, u] = t.useState(o), b = t.useRef(null), y = (0, i.s)(n, b), g = t.useRef(0), _ = g.current, m = t.useRef(0), w = m.current, v = d.open || f, C = t.useRef(v), A = t.useRef(void 0);
        return t.useEffect((() => {
          const e = requestAnimationFrame((() => C.current = !1));
          return () => cancelAnimationFrame(e)
        }), []), (0, c.N)((() => {
          const e = b.current;
          if (e) {
            A.current = A.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName
            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
            const n = e.getBoundingClientRect();
            g.current = n.height, m.current = n.width, C.current || (e.style.transitionDuration = A.current.transitionDuration, e.style.animationName = A.current.animationName), u(o)
          }
        }), [d.open, o]), (0, p.jsx)(s.sG.div, {
          "data-state": j(d.open),
          "data-disabled": d.disabled ? "" : void 0,
          id: d.contentId,
          hidden: !v,
          ...l,
          ref: y,
          style: {
            "--radix-collapsible-content-height": _ ? `${_}px` : void 0,
            "--radix-collapsible-content-width": w ? `${w}px` : void 0,
            ...e.style
          },
          children: v && a
        })
      }));

      function j(e) {
        return e ? "open" : "closed"
      }
      var R = m,
        k = v,
        I = C,
        M = r(19264),
        N = "Accordion",
        E = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [O, D, S] = (0, a.N)(N),
        [T, G] = (0, o.A)(N, [S, g]),
        P = g(),
        V = t.forwardRef(((e, n) => {
          const {
            type: r,
            ...t
          } = e, o = t, a = t;
          return (0, p.jsx)(O.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === r ? (0, p.jsx)(W, {
              ...a,
              ref: n
            }) : (0, p.jsx)(B, {
              ...o,
              ref: n
            })
          })
        }));
      V.displayName = N;
      var [L, $] = T(N), [F, H] = T(N, {
        collapsible: !1
      }), B = t.forwardRef(((e, n) => {
        const {
          value: r,
          defaultValue: o,
          onValueChange: a = () => {},
          collapsible: i = !1,
          ...l
        } = e, [s, c] = (0, d.i)({
          prop: r,
          defaultProp: o ?? "",
          onChange: a,
          caller: N
        });
        return (0, p.jsx)(L, {
          scope: e.__scopeAccordion,
          value: t.useMemo((() => s ? [s] : []), [s]),
          onItemOpen: c,
          onItemClose: t.useCallback((() => i && c("")), [i, c]),
          children: (0, p.jsx)(F, {
            scope: e.__scopeAccordion,
            collapsible: i,
            children: (0, p.jsx)(K, {
              ...l,
              ref: n
            })
          })
        })
      })), W = t.forwardRef(((e, n) => {
        const {
          value: r,
          defaultValue: o,
          onValueChange: a = () => {},
          ...i
        } = e, [l, s] = (0, d.i)({
          prop: r,
          defaultProp: o ?? [],
          onChange: a,
          caller: N
        }), c = t.useCallback((e => s(((n = []) => [...n, e]))), [s]), f = t.useCallback((e => s(((n = []) => n.filter((n => n !== e))))), [s]);
        return (0, p.jsx)(L, {
          scope: e.__scopeAccordion,
          value: l,
          onItemOpen: c,
          onItemClose: f,
          children: (0, p.jsx)(F, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, p.jsx)(K, {
              ...i,
              ref: n
            })
          })
        })
      })), [U, z] = T(N), K = t.forwardRef(((e, n) => {
        const {
          __scopeAccordion: r,
          disabled: o,
          dir: a,
          orientation: d = "vertical",
          ...c
        } = e, f = t.useRef(null), u = (0, i.s)(f, n), b = D(r), y = "ltr" === (0, M.jH)(a), g = (0, l.m)(e.onKeyDown, (e => {
          if (!E.includes(e.key)) return;
          const n = e.target,
            r = b().filter((e => !e.ref.current?.disabled)),
            t = r.findIndex((e => e.ref.current === n)),
            o = r.length;
          if (-1 === t) return;
          e.preventDefault();
          let a = t;
          const i = o - 1,
            l = () => {
              a = t + 1, a > i && (a = 0)
            },
            s = () => {
              a = t - 1, a < 0 && (a = i)
            };
          switch (e.key) {
            case "Home":
              a = 0;
              break;
            case "End":
              a = i;
              break;
            case "ArrowRight":
              "horizontal" === d && (y ? l() : s());
              break;
            case "ArrowDown":
              "vertical" === d && l();
              break;
            case "ArrowLeft":
              "horizontal" === d && (y ? s() : l());
              break;
            case "ArrowUp":
              "vertical" === d && s()
          }
          const c = a % o;
          r[c].ref.current?.focus()
        }));
        return (0, p.jsx)(U, {
          scope: r,
          disabled: o,
          direction: a,
          orientation: d,
          children: (0, p.jsx)(O.Slot, {
            scope: r,
            children: (0, p.jsx)(s.sG.div, {
              ...c,
              "data-orientation": d,
              ref: u,
              onKeyDown: o ? void 0 : g
            })
          })
        })
      })), Y = "AccordionItem", [q, X] = T(Y), Z = t.forwardRef(((e, n) => {
        const {
          __scopeAccordion: r,
          value: t,
          ...o
        } = e, a = z(Y, r), i = $(Y, r), l = P(r), d = (0, u.B)(), s = t && i.value.includes(t) || !1, c = a.disabled || e.disabled;
        return (0, p.jsx)(q, {
          scope: r,
          open: s,
          disabled: c,
          triggerId: d,
          children: (0, p.jsx)(R, {
            "data-orientation": a.orientation,
            "data-state": oe(s),
            ...l,
            ...o,
            ref: n,
            disabled: c,
            open: s,
            onOpenChange: e => {
              e ? i.onItemOpen(t) : i.onItemClose(t)
            }
          })
        })
      }));
      Z.displayName = Y;
      var J = "AccordionHeader",
        Q = t.forwardRef(((e, n) => {
          const {
            __scopeAccordion: r,
            ...t
          } = e, o = z(N, r), a = X(J, r);
          return (0, p.jsx)(s.sG.h3, {
            "data-orientation": o.orientation,
            "data-state": oe(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...t,
            ref: n
          })
        }));
      Q.displayName = J;
      var ee = "AccordionTrigger",
        ne = t.forwardRef(((e, n) => {
          const {
            __scopeAccordion: r,
            ...t
          } = e, o = z(N, r), a = X(ee, r), i = H(ee, r), l = P(r);
          return (0, p.jsx)(O.ItemSlot, {
            scope: r,
            children: (0, p.jsx)(k, {
              "aria-disabled": a.open && !i.collapsible || void 0,
              "data-orientation": o.orientation,
              id: a.triggerId,
              ...l,
              ...t,
              ref: n
            })
          })
        }));
      ne.displayName = ee;
      var re = "AccordionContent",
        te = t.forwardRef(((e, n) => {
          const {
            __scopeAccordion: r,
            ...t
          } = e, o = z(N, r), a = X(re, r), i = P(r);
          return (0, p.jsx)(I, {
            role: "region",
            "aria-labelledby": a.triggerId,
            "data-orientation": o.orientation,
            ...i,
            ...t,
            ref: n,
            style: {
              "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
              ...e.style
            }
          })
        }));

      function oe(e) {
        return e ? "open" : "closed"
      }
      te.displayName = re;
      var ae = V,
        ie = Z,
        le = Q,
        de = ne,
        se = te
    },
    86410: (e, n, r) => {
      r.d(n, {
        s: () => i,
        t: () => a
      });
      var t = r(62229);

      function o(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function a(...e) {
        return n => {
          let r = !1;
          const t = e.map((e => {
            const t = o(e, n);
            return r || "function" != typeof t || (r = !0), t
          }));
          if (r) return () => {
            for (let n = 0; n < t.length; n++) {
              const r = t[n];
              "function" == typeof r ? r() : o(e[n], null)
            }
          }
        }
      }

      function i(...e) {
        return t.useCallback(a(...e), e)
      }
    }
  }
]);