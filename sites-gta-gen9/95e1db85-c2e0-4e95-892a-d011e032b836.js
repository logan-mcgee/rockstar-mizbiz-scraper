try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "95e1db85-c2e0-4e95-892a-d011e032b836", e._sentryDebugIdIdentifier = "sentry-dbid-95e1db85-c2e0-4e95-892a-d011e032b836")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [5028], {
    82647(e, n, o) {
      o.r(n), o.d(n, {
        Accordion: () => B,
        AccordionContent: () => re,
        AccordionHeader: () => ne,
        AccordionItem: () => ee,
        AccordionTrigger: () => te,
        Content: () => se,
        Header: () => le,
        Item: () => de,
        Root: () => ie,
        Trigger: () => ce,
        createAccordionScope: () => G
      });
      var t = o(93082),
        r = o(72579),
        a = o(97620),
        i = o(85049),
        d = o(44752),
        l = o(15782),
        c = o(41988),
        s = o(9608),
        u = o(81432),
        f = o(88918),
        p = o(39793),
        b = Object.defineProperty,
        g = (e, n) => b(e, "name", {
          value: n,
          configurable: !0
        }),
        h = "Collapsible",
        [w, _] = (0, r.A)(h),
        [m, y] = w(h),
        A = t.forwardRef(g(function(e, n) {
          const {
            __scopeCollapsible: o,
            open: r,
            defaultOpen: a,
            disabled: i,
            onOpenChange: d,
            ...s
          } = e, [u, b] = (0, l.i)({
            prop: r,
            defaultProp: a ?? !1,
            onChange: d,
            caller: h
          });
          return (0, p.jsx)(m, {
            scope: o,
            disabled: i,
            contentId: (0, f.B)(),
            open: u,
            onOpenToggle: t.useCallback(() => b(e => !e), [b]),
            children: (0, p.jsx)(c.sG.div, {
              "data-state": I(u),
              "data-disabled": i ? "" : void 0,
              ...s,
              ref: n
            })
          })
        }, "Collapsible")),
        C = t.forwardRef(g(function(e, n) {
          const {
            __scopeCollapsible: o,
            ...t
          } = e, r = y("CollapsibleTrigger", o);
          return (0, p.jsx)(c.sG.button, {
            type: "button",
            "aria-controls": r.open ? r.contentId : void 0,
            "aria-expanded": r.open || !1,
            "data-state": I(r.open),
            "data-disabled": r.disabled ? "" : void 0,
            disabled: r.disabled,
            ...t,
            ref: n,
            onClick: (0, d.mK)(e.onClick, r.onOpenToggle)
          })
        }, "CollapsibleTrigger")),
        x = "CollapsibleContent",
        v = t.forwardRef(g(function(e, n) {
          const {
            forceMount: o,
            ...t
          } = e, r = y(x, e.__scopeCollapsible);
          return (0, p.jsx)(u.C, {
            present: o || r.open,
            children: ({
              present: e
            }) => (0, p.jsx)(j, {
              ...t,
              ref: n,
              present: e
            })
          })
        }, "CollapsibleContent")),
        j = t.forwardRef(g(function(e, n) {
          const {
            __scopeCollapsible: o,
            present: r,
            children: a,
            ...d
          } = e, l = y(x, o), [u, f] = t.useState(r), b = t.useRef(null), g = (0, i.s)(n, b), h = t.useRef(0), w = h.current, _ = t.useRef(0), m = _.current, A = l.open || u, C = t.useRef(A), v = t.useRef(void 0);
          return t.useEffect(() => {
            const e = requestAnimationFrame(() => C.current = !1);
            return () => cancelAnimationFrame(e)
          }, []), (0, s.N)(() => {
            const e = b.current;
            if (e) {
              v.current = v.current || {
                transitionDuration: e.style.transitionDuration,
                animationName: e.style.animationName
              }, e.style.transitionDuration = "0s", e.style.animationName = "none";
              const n = e.getBoundingClientRect();
              h.current = n.height, _.current = n.width, C.current || (e.style.transitionDuration = v.current.transitionDuration, e.style.animationName = v.current.animationName), f(r)
            }
          }, [l.open, r]), (0, p.jsx)(c.sG.div, {
            "data-state": I(l.open),
            "data-disabled": l.disabled ? "" : void 0,
            id: l.contentId,
            hidden: !A,
            ...d,
            ref: g,
            style: {
              "--radix-collapsible-content-height": w ? `${w}px` : void 0,
              "--radix-collapsible-content-width": m ? `${m}px` : void 0,
              ...e.style
            },
            children: A && a
          })
        }, "CollapsibleContentImpl"));

      function I(e) {
        return e ? "open" : "closed"
      }
      g(I, "getState");
      var k = A,
        R = C,
        T = v,
        D = o(12430),
        M = Object.defineProperty,
        O = (e, n) => M(e, "name", {
          value: n,
          configurable: !0
        }),
        E = "Accordion",
        N = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [S, H, P] = (0, a.N)(E),
        [V, G] = (0, r.A)(E, [P, _]),
        K = _(),
        B = t.forwardRef(O(function(e, n) {
          const {
            type: o,
            ...t
          } = e, r = t, a = t;
          return (0, p.jsx)(S.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === o ? (0, p.jsx)(q, {
              ...a,
              ref: n
            }) : (0, p.jsx)($, {
              ...r,
              ref: n
            })
          })
        }, "Accordion")),
        [L, z] = V(E),
        [F, U] = V(E, {
          collapsible: !1
        }),
        $ = t.forwardRef(O(function(e, n) {
          const {
            value: o,
            defaultValue: r,
            onValueChange: a = O(() => {}, "onValueChange"),
            collapsible: i = !1,
            ...d
          } = e, [c, s] = (0, l.i)({
            prop: o,
            defaultProp: r ?? "",
            onChange: a,
            caller: E
          });
          return (0, p.jsx)(L, {
            scope: e.__scopeAccordion,
            value: t.useMemo(() => c ? [c] : [], [c]),
            onItemOpen: s,
            onItemClose: t.useCallback(() => i && s(""), [i, s]),
            children: (0, p.jsx)(F, {
              scope: e.__scopeAccordion,
              collapsible: i,
              children: (0, p.jsx)(Q, {
                ...d,
                ref: n
              })
            })
          })
        }, "AccordionImplSingle")),
        q = t.forwardRef(O(function(e, n) {
          const {
            value: o,
            defaultValue: r,
            onValueChange: a = O(() => {}, "onValueChange"),
            ...i
          } = e, [d, c] = (0, l.i)({
            prop: o,
            defaultProp: r ?? [],
            onChange: a,
            caller: E
          }), s = t.useCallback(e => c((n = []) => [...n, e]), [c]), u = t.useCallback(e => c((n = []) => n.filter(n => n !== e)), [c]);
          return (0, p.jsx)(L, {
            scope: e.__scopeAccordion,
            value: d,
            onItemOpen: s,
            onItemClose: u,
            children: (0, p.jsx)(F, {
              scope: e.__scopeAccordion,
              collapsible: !0,
              children: (0, p.jsx)(Q, {
                ...i,
                ref: n
              })
            })
          })
        }, "AccordionImplMultiple")),
        [Y, J] = V(E),
        Q = t.forwardRef(O(function(e, n) {
          const {
            __scopeAccordion: o,
            disabled: r,
            dir: a,
            orientation: l = "vertical",
            ...s
          } = e, u = t.useRef(null), f = (0, i.s)(u, n), b = H(o), g = "ltr" === (0, D.jH)(a), h = (0, d.mK)(e.onKeyDown, e => {
            if (!N.includes(e.key)) return;
            const n = e.target,
              o = b().filter(e => !e.ref.current?.disabled),
              t = o.findIndex(e => e.ref.current === n),
              r = o.length;
            if (-1 === t) return;
            e.preventDefault();
            let a = t;
            const i = r - 1,
              d = O(() => {
                a = t + 1, a > i && (a = 0)
              }, "moveNext"),
              c = O(() => {
                a = t - 1, a < 0 && (a = i)
              }, "movePrev");
            switch (e.key) {
              case "Home":
                a = 0;
                break;
              case "End":
                a = i;
                break;
              case "ArrowRight":
                "horizontal" === l && (g ? d() : c());
                break;
              case "ArrowDown":
                "vertical" === l && d();
                break;
              case "ArrowLeft":
                "horizontal" === l && (g ? c() : d());
                break;
              case "ArrowUp":
                "vertical" === l && c()
            }
            const s = a % r;
            o[s].ref.current?.focus()
          });
          return (0, p.jsx)(Y, {
            scope: o,
            disabled: r,
            direction: a,
            orientation: l,
            children: (0, p.jsx)(S.Slot, {
              scope: o,
              children: (0, p.jsx)(c.sG.div, {
                ...s,
                "data-orientation": l,
                ref: f,
                onKeyDown: r ? void 0 : h
              })
            })
          })
        }, "AccordionImpl")),
        W = "AccordionItem",
        [X, Z] = V(W),
        ee = t.forwardRef(O(function(e, n) {
          const {
            __scopeAccordion: o,
            value: t,
            ...r
          } = e, a = J(W, o), i = z(W, o), d = K(o), l = (0, f.B)(), c = t && i.value.includes(t) || !1, s = a.disabled || e.disabled;
          return (0, p.jsx)(X, {
            scope: o,
            open: c,
            disabled: s,
            triggerId: l,
            children: (0, p.jsx)(k, {
              "data-orientation": a.orientation,
              "data-state": ae(c),
              ...d,
              ...r,
              ref: n,
              disabled: s,
              open: c,
              onOpenChange: e => {
                e ? i.onItemOpen(t) : i.onItemClose(t)
              }
            })
          })
        }, "AccordionItem")),
        ne = t.forwardRef(O(function(e, n) {
          const {
            __scopeAccordion: o,
            ...t
          } = e, r = J(E, o), a = Z("AccordionHeader", o);
          return (0, p.jsx)(c.sG.h3, {
            "data-orientation": r.orientation,
            "data-state": ae(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...t,
            ref: n
          })
        }, "AccordionHeader")),
        oe = "AccordionTrigger",
        te = t.forwardRef(O(function(e, n) {
          const {
            __scopeAccordion: o,
            ...t
          } = e, r = J(E, o), a = Z(oe, o), i = U(oe, o), d = K(o);
          return (0, p.jsx)(S.ItemSlot, {
            scope: o,
            children: (0, p.jsx)(R, {
              "aria-disabled": a.open && !i.collapsible || void 0,
              "data-orientation": r.orientation,
              id: a.triggerId,
              ...d,
              ...t,
              ref: n
            })
          })
        }, "AccordionTrigger")),
        re = t.forwardRef(O(function(e, n) {
          const {
            __scopeAccordion: o,
            ...t
          } = e, r = J(E, o), a = Z("AccordionContent", o), i = K(o);
          return (0, p.jsx)(T, {
            role: "region",
            "aria-labelledby": a.triggerId,
            "data-orientation": r.orientation,
            ...i,
            ...t,
            ref: n,
            style: {
              "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
              ...e.style
            }
          })
        }, "AccordionContent"));

      function ae(e) {
        return e ? "open" : "closed"
      }
      O(ae, "getState");
      var ie = B,
        de = ee,
        le = ne,
        ce = te,
        se = re
    }
  }
]);