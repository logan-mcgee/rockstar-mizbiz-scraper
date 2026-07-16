try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "a833795b-77d6-41e3-ae1e-9c31768f4ae5", e._sentryDebugIdIdentifier = "sentry-dbid-a833795b-77d6-41e3-ae1e-9c31768f4ae5")
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
  [6325], {
    98706(e, o, n) {
      n.r(o), n.d(o, {
        Accordion: () => K,
        AccordionContent: () => ae,
        AccordionHeader: () => Z,
        AccordionItem: () => W,
        AccordionTrigger: () => oe,
        Content: () => le,
        Header: () => de,
        Item: () => ie,
        Root: () => te,
        Trigger: () => se,
        createAccordionScope: () => S
      });
      var a = n(93082),
        r = n(54958),
        t = n(65324),
        i = n(64239),
        d = n(39467),
        s = n(17038),
        l = n(80082),
        c = n(10198),
        p = n(66624),
        f = n(94296),
        u = n(39793),
        b = "Collapsible",
        [g, h] = (0, r.A)(b),
        [y, w] = g(b),
        _ = a.forwardRef((e, o) => {
          const {
            __scopeCollapsible: n,
            open: r,
            defaultOpen: t,
            disabled: i,
            onOpenChange: d,
            ...c
          } = e, [p, g] = (0, s.i)({
            prop: r,
            defaultProp: t ?? !1,
            onChange: d,
            caller: b
          });
          return (0, u.jsx)(y, {
            scope: n,
            disabled: i,
            contentId: (0, f.B)(),
            open: p,
            onOpenToggle: a.useCallback(() => g(e => !e), [g]),
            children: (0, u.jsx)(l.sG.div, {
              "data-state": j(p),
              "data-disabled": i ? "" : void 0,
              ...c,
              ref: o
            })
          })
        });
      _.displayName = b;
      var m = "CollapsibleTrigger",
        v = a.forwardRef((e, o) => {
          const {
            __scopeCollapsible: n,
            ...a
          } = e, r = w(m, n);
          return (0, u.jsx)(l.sG.button, {
            type: "button",
            "aria-controls": r.open ? r.contentId : void 0,
            "aria-expanded": r.open || !1,
            "data-state": j(r.open),
            "data-disabled": r.disabled ? "" : void 0,
            disabled: r.disabled,
            ...a,
            ref: o,
            onClick: (0, d.mK)(e.onClick, r.onOpenToggle)
          })
        });
      v.displayName = m;
      var x = "CollapsibleContent",
        A = a.forwardRef((e, o) => {
          const {
            forceMount: n,
            ...a
          } = e, r = w(x, e.__scopeCollapsible);
          return (0, u.jsx)(p.C, {
            present: n || r.open,
            children: ({
              present: e
            }) => (0, u.jsx)(C, {
              ...a,
              ref: o,
              present: e
            })
          })
        });
      A.displayName = x;
      var C = a.forwardRef((e, o) => {
        const {
          __scopeCollapsible: n,
          present: r,
          children: t,
          ...d
        } = e, s = w(x, n), [p, f] = a.useState(r), b = a.useRef(null), g = (0, i.s)(o, b), h = a.useRef(0), y = h.current, _ = a.useRef(0), m = _.current, v = s.open || p, A = a.useRef(v), C = a.useRef(void 0);
        return a.useEffect(() => {
          const e = requestAnimationFrame(() => A.current = !1);
          return () => cancelAnimationFrame(e)
        }, []), (0, c.N)(() => {
          const e = b.current;
          if (e) {
            C.current = C.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName
            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
            const o = e.getBoundingClientRect();
            h.current = o.height, _.current = o.width, A.current || (e.style.transitionDuration = C.current.transitionDuration, e.style.animationName = C.current.animationName), f(r)
          }
        }, [s.open, r]), (0, u.jsx)(l.sG.div, {
          "data-state": j(s.open),
          "data-disabled": s.disabled ? "" : void 0,
          id: s.contentId,
          hidden: !v,
          ...d,
          ref: g,
          style: {
            "--radix-collapsible-content-height": y ? `${y}px` : void 0,
            "--radix-collapsible-content-width": m ? `${m}px` : void 0,
            ...e.style
          },
          children: v && t
        })
      });

      function j(e) {
        return e ? "open" : "closed"
      }
      var k = _,
        R = v,
        I = A,
        N = n(99136),
        D = "Accordion",
        T = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [E, M, O] = (0, t.N)(D),
        [H, S] = (0, r.A)(D, [O, h]),
        G = h(),
        K = a.forwardRef((e, o) => {
          const {
            type: n,
            ...a
          } = e, r = a, t = a;
          return (0, u.jsx)(E.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === n ? (0, u.jsx)(F, {
              ...t,
              ref: o
            }) : (0, u.jsx)(z, {
              ...r,
              ref: o
            })
          })
        });
      K.displayName = D;
      var [P, V] = H(D), [B, L] = H(D, {
        collapsible: !1
      }), z = a.forwardRef((e, o) => {
        const {
          value: n,
          defaultValue: r,
          onValueChange: t = () => {},
          collapsible: i = !1,
          ...d
        } = e, [l, c] = (0, s.i)({
          prop: n,
          defaultProp: r ?? "",
          onChange: t,
          caller: D
        });
        return (0, u.jsx)(P, {
          scope: e.__scopeAccordion,
          value: a.useMemo(() => l ? [l] : [], [l]),
          onItemOpen: c,
          onItemClose: a.useCallback(() => i && c(""), [i, c]),
          children: (0, u.jsx)(B, {
            scope: e.__scopeAccordion,
            collapsible: i,
            children: (0, u.jsx)(q, {
              ...d,
              ref: o
            })
          })
        })
      }), F = a.forwardRef((e, o) => {
        const {
          value: n,
          defaultValue: r,
          onValueChange: t = () => {},
          ...i
        } = e, [d, l] = (0, s.i)({
          prop: n,
          defaultProp: r ?? [],
          onChange: t,
          caller: D
        }), c = a.useCallback(e => l((o = []) => [...o, e]), [l]), p = a.useCallback(e => l((o = []) => o.filter(o => o !== e)), [l]);
        return (0, u.jsx)(P, {
          scope: e.__scopeAccordion,
          value: d,
          onItemOpen: c,
          onItemClose: p,
          children: (0, u.jsx)(B, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, u.jsx)(q, {
              ...i,
              ref: o
            })
          })
        })
      }), [U, $] = H(D), q = a.forwardRef((e, o) => {
        const {
          __scopeAccordion: n,
          disabled: r,
          dir: t,
          orientation: s = "vertical",
          ...c
        } = e, p = a.useRef(null), f = (0, i.s)(p, o), b = M(n), g = "ltr" === (0, N.jH)(t), h = (0, d.mK)(e.onKeyDown, e => {
          if (!T.includes(e.key)) return;
          const o = e.target,
            n = b().filter(e => !e.ref.current?.disabled),
            a = n.findIndex(e => e.ref.current === o),
            r = n.length;
          if (-1 === a) return;
          e.preventDefault();
          let t = a;
          const i = r - 1,
            d = () => {
              t = a + 1, t > i && (t = 0)
            },
            l = () => {
              t = a - 1, t < 0 && (t = i)
            };
          switch (e.key) {
            case "Home":
              t = 0;
              break;
            case "End":
              t = i;
              break;
            case "ArrowRight":
              "horizontal" === s && (g ? d() : l());
              break;
            case "ArrowDown":
              "vertical" === s && d();
              break;
            case "ArrowLeft":
              "horizontal" === s && (g ? l() : d());
              break;
            case "ArrowUp":
              "vertical" === s && l()
          }
          const c = t % r;
          n[c].ref.current?.focus()
        });
        return (0, u.jsx)(U, {
          scope: n,
          disabled: r,
          direction: t,
          orientation: s,
          children: (0, u.jsx)(E.Slot, {
            scope: n,
            children: (0, u.jsx)(l.sG.div, {
              ...c,
              "data-orientation": s,
              ref: f,
              onKeyDown: r ? void 0 : h
            })
          })
        })
      }), Y = "AccordionItem", [J, Q] = H(Y), W = a.forwardRef((e, o) => {
        const {
          __scopeAccordion: n,
          value: a,
          ...r
        } = e, t = $(Y, n), i = V(Y, n), d = G(n), s = (0, f.B)(), l = a && i.value.includes(a) || !1, c = t.disabled || e.disabled;
        return (0, u.jsx)(J, {
          scope: n,
          open: l,
          disabled: c,
          triggerId: s,
          children: (0, u.jsx)(k, {
            "data-orientation": t.orientation,
            "data-state": re(l),
            ...d,
            ...r,
            ref: o,
            disabled: c,
            open: l,
            onOpenChange: e => {
              e ? i.onItemOpen(a) : i.onItemClose(a)
            }
          })
        })
      });
      W.displayName = Y;
      var X = "AccordionHeader",
        Z = a.forwardRef((e, o) => {
          const {
            __scopeAccordion: n,
            ...a
          } = e, r = $(D, n), t = Q(X, n);
          return (0, u.jsx)(l.sG.h3, {
            "data-orientation": r.orientation,
            "data-state": re(t.open),
            "data-disabled": t.disabled ? "" : void 0,
            ...a,
            ref: o
          })
        });
      Z.displayName = X;
      var ee = "AccordionTrigger",
        oe = a.forwardRef((e, o) => {
          const {
            __scopeAccordion: n,
            ...a
          } = e, r = $(D, n), t = Q(ee, n), i = L(ee, n), d = G(n);
          return (0, u.jsx)(E.ItemSlot, {
            scope: n,
            children: (0, u.jsx)(R, {
              "aria-disabled": t.open && !i.collapsible || void 0,
              "data-orientation": r.orientation,
              id: t.triggerId,
              ...d,
              ...a,
              ref: o
            })
          })
        });
      oe.displayName = ee;
      var ne = "AccordionContent",
        ae = a.forwardRef((e, o) => {
          const {
            __scopeAccordion: n,
            ...a
          } = e, r = $(D, n), t = Q(ne, n), i = G(n);
          return (0, u.jsx)(I, {
            role: "region",
            "aria-labelledby": t.triggerId,
            "data-orientation": r.orientation,
            ...i,
            ...a,
            ref: o,
            style: {
              "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
              ...e.style
            }
          })
        });

      function re(e) {
        return e ? "open" : "closed"
      }
      ae.displayName = ne;
      var te = K,
        ie = W,
        de = Z,
        se = oe,
        le = ae
    }
  }
]);