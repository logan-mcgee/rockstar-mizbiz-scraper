! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c37401c5-72f9-4a8e-8f3b-0e7cf19016db", e._sentryDebugIdIdentifier = "sentry-dbid-c37401c5-72f9-4a8e-8f3b-0e7cf19016db")
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
  [3425], {
    23135: (e, n, t) => {
      t.d(n, {
        DX: () => l,
        Dc: () => c,
        TL: () => i,
        xV: () => f
      });
      var o = t(62229),
        r = t(86410),
        a = t(25854);

      function i(e) {
        const n = d(e),
          t = o.forwardRef(((e, t) => {
            const {
              children: r,
              ...i
            } = e, l = o.Children.toArray(r), d = l.find(u);
            if (d) {
              const e = d.props.children,
                r = l.map((n => n === d ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : n));
              return (0, a.jsx)(n, {
                ...i,
                ref: t,
                children: o.isValidElement(e) ? o.cloneElement(e, void 0, r) : null
              })
            }
            return (0, a.jsx)(n, {
              ...i,
              ref: t,
              children: r
            })
          }));
        return t.displayName = `${e}.Slot`, t
      }
      var l = i("Slot");

      function d(e) {
        const n = o.forwardRef(((e, n) => {
          const {
            children: t,
            ...a
          } = e;
          if (o.isValidElement(t)) {
            const e = function(e) {
                let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  t = n && "isReactWarning" in n && n.isReactWarning;
                return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
              }(t),
              i = function(e, n) {
                const t = {
                  ...n
                };
                for (const o in n) {
                  const r = e[o],
                    a = n[o];
                  /^on[A-Z]/.test(o) ? r && a ? t[o] = (...e) => {
                    a(...e), r(...e)
                  } : r && (t[o] = r) : "style" === o ? t[o] = {
                    ...r,
                    ...a
                  } : "className" === o && (t[o] = [r, a].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...t
                }
              }(a, t.props);
            return t.type !== o.Fragment && (i.ref = n ? (0, r.t)(n, e) : e), o.cloneElement(t, i)
          }
          return o.Children.count(t) > 1 ? o.Children.only(null) : null
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
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === s
      }
    },
    76260: (e, n, t) => {
      t.r(n), t.d(n, {
        Accordion: () => H,
        AccordionContent: () => oe,
        AccordionHeader: () => Q,
        AccordionItem: () => Z,
        AccordionTrigger: () => ne,
        Content: () => se,
        Header: () => le,
        Item: () => ie,
        Root: () => ae,
        Trigger: () => de,
        createAccordionScope: () => S
      });
      var o = t(62229),
        r = t(29818),
        a = t(80355),
        i = t(86410),
        l = t(65998),
        d = t(52806),
        s = t(85100),
        c = t(85307),
        f = t(36146),
        u = t(30822),
        p = t(25854),
        b = "Collapsible",
        [g, y] = (0, r.A)(b),
        [h, _] = g(b),
        m = o.forwardRef(((e, n) => {
          const {
            __scopeCollapsible: t,
            open: r,
            defaultOpen: a,
            disabled: i,
            onOpenChange: l,
            ...c
          } = e, [f, g] = (0, d.i)({
            prop: r,
            defaultProp: a ?? !1,
            onChange: l,
            caller: b
          });
          return (0, p.jsx)(h, {
            scope: t,
            disabled: i,
            contentId: (0, u.B)(),
            open: f,
            onOpenToggle: o.useCallback((() => g((e => !e))), [g]),
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
        v = o.forwardRef(((e, n) => {
          const {
            __scopeCollapsible: t,
            ...o
          } = e, r = _(w, t);
          return (0, p.jsx)(s.sG.button, {
            type: "button",
            "aria-controls": r.contentId,
            "aria-expanded": r.open || !1,
            "data-state": j(r.open),
            "data-disabled": r.disabled ? "" : void 0,
            disabled: r.disabled,
            ...o,
            ref: n,
            onClick: (0, l.m)(e.onClick, r.onOpenToggle)
          })
        }));
      v.displayName = w;
      var x = "CollapsibleContent",
        C = o.forwardRef(((e, n) => {
          const {
            forceMount: t,
            ...o
          } = e, r = _(x, e.__scopeCollapsible);
          return (0, p.jsx)(f.C, {
            present: t || r.open,
            children: ({
              present: e
            }) => (0, p.jsx)(A, {
              ...o,
              ref: n,
              present: e
            })
          })
        }));
      C.displayName = x;
      var A = o.forwardRef(((e, n) => {
        const {
          __scopeCollapsible: t,
          present: r,
          children: a,
          ...l
        } = e, d = _(x, t), [f, u] = o.useState(r), b = o.useRef(null), g = (0, i.s)(n, b), y = o.useRef(0), h = y.current, m = o.useRef(0), w = m.current, v = d.open || f, C = o.useRef(v), A = o.useRef(void 0);
        return o.useEffect((() => {
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
            y.current = n.height, m.current = n.width, C.current || (e.style.transitionDuration = A.current.transitionDuration, e.style.animationName = A.current.animationName), u(r)
          }
        }), [d.open, r]), (0, p.jsx)(s.sG.div, {
          "data-state": j(d.open),
          "data-disabled": d.disabled ? "" : void 0,
          id: d.contentId,
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
        M = t(19264),
        N = "Accordion",
        D = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [E, T, O] = (0, a.N)(N),
        [G, S] = (0, r.A)(N, [O, y]),
        V = y(),
        H = o.forwardRef(((e, n) => {
          const {
            type: t,
            ...o
          } = e, r = o, a = o;
          return (0, p.jsx)(E.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === t ? (0, p.jsx)(W, {
              ...a,
              ref: n
            }) : (0, p.jsx)(L, {
              ...r,
              ref: n
            })
          })
        }));
      H.displayName = N;
      var [P, $] = G(N), [B, F] = G(N, {
        collapsible: !1
      }), L = o.forwardRef(((e, n) => {
        const {
          value: t,
          defaultValue: r,
          onValueChange: a = () => {},
          collapsible: i = !1,
          ...l
        } = e, [s, c] = (0, d.i)({
          prop: t,
          defaultProp: r ?? "",
          onChange: a,
          caller: N
        });
        return (0, p.jsx)(P, {
          scope: e.__scopeAccordion,
          value: o.useMemo((() => s ? [s] : []), [s]),
          onItemOpen: c,
          onItemClose: o.useCallback((() => i && c("")), [i, c]),
          children: (0, p.jsx)(B, {
            scope: e.__scopeAccordion,
            collapsible: i,
            children: (0, p.jsx)(U, {
              ...l,
              ref: n
            })
          })
        })
      })), W = o.forwardRef(((e, n) => {
        const {
          value: t,
          defaultValue: r,
          onValueChange: a = () => {},
          ...i
        } = e, [l, s] = (0, d.i)({
          prop: t,
          defaultProp: r ?? [],
          onChange: a,
          caller: N
        }), c = o.useCallback((e => s(((n = []) => [...n, e]))), [s]), f = o.useCallback((e => s(((n = []) => n.filter((n => n !== e))))), [s]);
        return (0, p.jsx)(P, {
          scope: e.__scopeAccordion,
          value: l,
          onItemOpen: c,
          onItemClose: f,
          children: (0, p.jsx)(B, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, p.jsx)(U, {
              ...i,
              ref: n
            })
          })
        })
      })), [z, K] = G(N), U = o.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          disabled: r,
          dir: a,
          orientation: d = "vertical",
          ...c
        } = e, f = o.useRef(null), u = (0, i.s)(f, n), b = T(t), g = "ltr" === (0, M.jH)(a), y = (0, l.m)(e.onKeyDown, (e => {
          if (!D.includes(e.key)) return;
          const n = e.target,
            t = b().filter((e => !e.ref.current?.disabled)),
            o = t.findIndex((e => e.ref.current === n)),
            r = t.length;
          if (-1 === o) return;
          e.preventDefault();
          let a = o;
          const i = r - 1,
            l = () => {
              a = o + 1, a > i && (a = 0)
            },
            s = () => {
              a = o - 1, a < 0 && (a = i)
            };
          switch (e.key) {
            case "Home":
              a = 0;
              break;
            case "End":
              a = i;
              break;
            case "ArrowRight":
              "horizontal" === d && (g ? l() : s());
              break;
            case "ArrowDown":
              "vertical" === d && l();
              break;
            case "ArrowLeft":
              "horizontal" === d && (g ? s() : l());
              break;
            case "ArrowUp":
              "vertical" === d && s()
          }
          const c = a % r;
          t[c].ref.current?.focus()
        }));
        return (0, p.jsx)(z, {
          scope: t,
          disabled: r,
          direction: a,
          orientation: d,
          children: (0, p.jsx)(E.Slot, {
            scope: t,
            children: (0, p.jsx)(s.sG.div, {
              ...c,
              "data-orientation": d,
              ref: u,
              onKeyDown: r ? void 0 : y
            })
          })
        })
      })), q = "AccordionItem", [X, Y] = G(q), Z = o.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          value: o,
          ...r
        } = e, a = K(q, t), i = $(q, t), l = V(t), d = (0, u.B)(), s = o && i.value.includes(o) || !1, c = a.disabled || e.disabled;
        return (0, p.jsx)(X, {
          scope: t,
          open: s,
          disabled: c,
          triggerId: d,
          children: (0, p.jsx)(R, {
            "data-orientation": a.orientation,
            "data-state": re(s),
            ...l,
            ...r,
            ref: n,
            disabled: c,
            open: s,
            onOpenChange: e => {
              e ? i.onItemOpen(o) : i.onItemClose(o)
            }
          })
        })
      }));
      Z.displayName = q;
      var J = "AccordionHeader",
        Q = o.forwardRef(((e, n) => {
          const {
            __scopeAccordion: t,
            ...o
          } = e, r = K(N, t), a = Y(J, t);
          return (0, p.jsx)(s.sG.h3, {
            "data-orientation": r.orientation,
            "data-state": re(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...o,
            ref: n
          })
        }));
      Q.displayName = J;
      var ee = "AccordionTrigger",
        ne = o.forwardRef(((e, n) => {
          const {
            __scopeAccordion: t,
            ...o
          } = e, r = K(N, t), a = Y(ee, t), i = F(ee, t), l = V(t);
          return (0, p.jsx)(E.ItemSlot, {
            scope: t,
            children: (0, p.jsx)(k, {
              "aria-disabled": a.open && !i.collapsible || void 0,
              "data-orientation": r.orientation,
              id: a.triggerId,
              ...l,
              ...o,
              ref: n
            })
          })
        }));
      ne.displayName = ee;
      var te = "AccordionContent",
        oe = o.forwardRef(((e, n) => {
          const {
            __scopeAccordion: t,
            ...o
          } = e, r = K(N, t), a = Y(te, t), i = V(t);
          return (0, p.jsx)(I, {
            role: "region",
            "aria-labelledby": a.triggerId,
            "data-orientation": r.orientation,
            ...i,
            ...o,
            ref: n,
            style: {
              "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
              ...e.style
            }
          })
        }));

      function re(e) {
        return e ? "open" : "closed"
      }
      oe.displayName = te;
      var ae = H,
        ie = Z,
        le = Q,
        de = ne,
        se = oe
    },
    86410: (e, n, t) => {
      t.d(n, {
        s: () => i,
        t: () => a
      });
      var o = t(62229);

      function r(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function a(...e) {
        return n => {
          let t = !1;
          const o = e.map((e => {
            const o = r(e, n);
            return t || "function" != typeof o || (t = !0), o
          }));
          if (t) return () => {
            for (let n = 0; n < o.length; n++) {
              const t = o[n];
              "function" == typeof t ? t() : r(e[n], null)
            }
          }
        }
      }

      function i(...e) {
        return o.useCallback(a(...e), e)
      }
    }
  }
]);