try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f0e2217a-92b1-4271-9930-d024b675ea27", e._sentryDebugIdIdentifier = "sentry-dbid-f0e2217a-92b1-4271-9930-d024b675ea27")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
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
        const n = s(e),
          r = t.forwardRef(((e, r) => {
            const {
              children: o,
              ...i
            } = e, l = t.Children.toArray(o), s = l.find(p);
            if (s) {
              const e = s.props.children,
                o = l.map((n => n === s ? t.Children.count(e) > 1 ? t.Children.only(null) : t.isValidElement(e) ? e.props.children : null : n));
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

      function s(e) {
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
      var d = Symbol("radix.slottable");

      function c(e) {
        const n = ({
          children: e
        }) => (0, a.jsx)(a.Fragment, {
          children: e
        });
        return n.displayName = `${e}.Slottable`, n.__radixId = d, n
      }
      var f = c("Slottable");

      function p(e) {
        return t.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === d
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
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, n, r) {
        var t, a = {},
          d = null,
          c = null;
        for (t in void 0 !== r && (d = "" + r), void 0 !== n.key && (d = "" + n.key), void 0 !== n.ref && (c = n.ref), n) i.call(n, t) && !s.hasOwnProperty(t) && (a[t] = n[t]);
        if (e && e.defaultProps)
          for (t in n = e.defaultProps) void 0 === a[t] && (a[t] = n[t]);
        return {
          $$typeof: o,
          type: e,
          key: d,
          ref: c,
          props: a,
          _owner: l.current
        }
      }
      n.Fragment = a, n.jsx = d, n.jsxs = d
    },
    76260: (e, n, r) => {
      r.r(n), r.d(n, {
        Accordion: () => L,
        AccordionContent: () => te,
        AccordionHeader: () => Q,
        AccordionItem: () => Z,
        AccordionTrigger: () => ne,
        Content: () => de,
        Header: () => le,
        Item: () => ie,
        Root: () => ae,
        Trigger: () => se,
        createAccordionScope: () => P
      });
      var t = r(62229),
        o = r(29818),
        a = r(80355),
        i = r(86410),
        l = r(65998),
        s = r(52806),
        d = r(85100),
        c = r(85307),
        f = r(36146),
        p = r(30822),
        u = r(25854),
        b = "Collapsible",
        [g, y] = (0, o.A)(b),
        [h, _] = g(b),
        m = t.forwardRef(((e, n) => {
          const {
            __scopeCollapsible: r,
            open: o,
            defaultOpen: a,
            disabled: i,
            onOpenChange: l,
            ...c
          } = e, [f, g] = (0, s.i)({
            prop: o,
            defaultProp: a ?? !1,
            onChange: l,
            caller: b
          });
          return (0, u.jsx)(h, {
            scope: r,
            disabled: i,
            contentId: (0, p.B)(),
            open: f,
            onOpenToggle: t.useCallback((() => g((e => !e))), [g]),
            children: (0, u.jsx)(d.sG.div, {
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
          } = e, o = _(w, r);
          return (0, u.jsx)(d.sG.button, {
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
          } = e, o = _(x, e.__scopeCollapsible);
          return (0, u.jsx)(f.C, {
            present: r || o.open,
            children: ({
              present: e
            }) => (0, u.jsx)(A, {
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
        } = e, s = _(x, r), [f, p] = t.useState(o), b = t.useRef(null), g = (0, i.s)(n, b), y = t.useRef(0), h = y.current, m = t.useRef(0), w = m.current, v = s.open || f, C = t.useRef(v), A = t.useRef(void 0);
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
            y.current = n.height, m.current = n.width, C.current || (e.style.transitionDuration = A.current.transitionDuration, e.style.animationName = A.current.animationName), p(o)
          }
        }), [s.open, o]), (0, u.jsx)(d.sG.div, {
          "data-state": j(s.open),
          "data-disabled": s.disabled ? "" : void 0,
          id: s.contentId,
          hidden: !v,
          ...l,
          ref: g,
          style: {
            "--radix-collapsible-content-height": h ? `${h}px` : void 0,
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
        N = r(19264),
        E = "Accordion",
        O = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [D, S, T] = (0, a.N)(E),
        [M, P] = (0, o.A)(E, [T, y]),
        V = y(),
        L = t.forwardRef(((e, n) => {
          const {
            type: r,
            ...t
          } = e, o = t, a = t;
          return (0, u.jsx)(D.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === r ? (0, u.jsx)(W, {
              ...a,
              ref: n
            }) : (0, u.jsx)(G, {
              ...o,
              ref: n
            })
          })
        }));
      L.displayName = E;
      var [$, F] = M(E), [H, B] = M(E, {
        collapsible: !1
      }), G = t.forwardRef(((e, n) => {
        const {
          value: r,
          defaultValue: o,
          onValueChange: a = () => {},
          collapsible: i = !1,
          ...l
        } = e, [d, c] = (0, s.i)({
          prop: r,
          defaultProp: o ?? "",
          onChange: a,
          caller: E
        });
        return (0, u.jsx)($, {
          scope: e.__scopeAccordion,
          value: t.useMemo((() => d ? [d] : []), [d]),
          onItemOpen: c,
          onItemClose: t.useCallback((() => i && c("")), [i, c]),
          children: (0, u.jsx)(H, {
            scope: e.__scopeAccordion,
            collapsible: i,
            children: (0, u.jsx)(K, {
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
        } = e, [l, d] = (0, s.i)({
          prop: r,
          defaultProp: o ?? [],
          onChange: a,
          caller: E
        }), c = t.useCallback((e => d(((n = []) => [...n, e]))), [d]), f = t.useCallback((e => d(((n = []) => n.filter((n => n !== e))))), [d]);
        return (0, u.jsx)($, {
          scope: e.__scopeAccordion,
          value: l,
          onItemOpen: c,
          onItemClose: f,
          children: (0, u.jsx)(H, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, u.jsx)(K, {
              ...i,
              ref: n
            })
          })
        })
      })), [U, z] = M(E), K = t.forwardRef(((e, n) => {
        const {
          __scopeAccordion: r,
          disabled: o,
          dir: a,
          orientation: s = "vertical",
          ...c
        } = e, f = t.useRef(null), p = (0, i.s)(f, n), b = S(r), g = "ltr" === (0, N.jH)(a), y = (0, l.m)(e.onKeyDown, (e => {
          if (!O.includes(e.key)) return;
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
            d = () => {
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
              "horizontal" === s && (g ? l() : d());
              break;
            case "ArrowDown":
              "vertical" === s && l();
              break;
            case "ArrowLeft":
              "horizontal" === s && (g ? d() : l());
              break;
            case "ArrowUp":
              "vertical" === s && d()
          }
          const c = a % o;
          r[c].ref.current?.focus()
        }));
        return (0, u.jsx)(U, {
          scope: r,
          disabled: o,
          direction: a,
          orientation: s,
          children: (0, u.jsx)(D.Slot, {
            scope: r,
            children: (0, u.jsx)(d.sG.div, {
              ...c,
              "data-orientation": s,
              ref: p,
              onKeyDown: o ? void 0 : y
            })
          })
        })
      })), Y = "AccordionItem", [q, X] = M(Y), Z = t.forwardRef(((e, n) => {
        const {
          __scopeAccordion: r,
          value: t,
          ...o
        } = e, a = z(Y, r), i = F(Y, r), l = V(r), s = (0, p.B)(), d = t && i.value.includes(t) || !1, c = a.disabled || e.disabled;
        return (0, u.jsx)(q, {
          scope: r,
          open: d,
          disabled: c,
          triggerId: s,
          children: (0, u.jsx)(R, {
            "data-orientation": a.orientation,
            "data-state": oe(d),
            ...l,
            ...o,
            ref: n,
            disabled: c,
            open: d,
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
          } = e, o = z(E, r), a = X(J, r);
          return (0, u.jsx)(d.sG.h3, {
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
          } = e, o = z(E, r), a = X(ee, r), i = B(ee, r), l = V(r);
          return (0, u.jsx)(D.ItemSlot, {
            scope: r,
            children: (0, u.jsx)(k, {
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
          } = e, o = z(E, r), a = X(re, r), i = V(r);
          return (0, u.jsx)(I, {
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
      var ae = L,
        ie = Z,
        le = Q,
        se = ne,
        de = te
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