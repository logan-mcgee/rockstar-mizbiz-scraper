try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "234010ad-cfe6-4213-9e27-630c001aeb8e", e._sentryDebugIdIdentifier = "sentry-dbid-234010ad-cfe6-4213-9e27-630c001aeb8e")
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
  [710, 2295, 8329], {
    69245(e, n, o) {
      var r = o(71127),
        t = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, n, o) {
        var r, a = {},
          l = null,
          c = null;
        for (r in void 0 !== o && (l = "" + o), void 0 !== n.key && (l = "" + n.key), void 0 !== n.ref && (c = n.ref), n) i.call(n, r) && !d.hasOwnProperty(r) && (a[r] = n[r]);
        if (e && e.defaultProps)
          for (r in n = e.defaultProps) void 0 === a[r] && (a[r] = n[r]);
        return {
          $$typeof: t,
          type: e,
          key: l,
          ref: c,
          props: a,
          _owner: s.current
        }
      }
      n.Fragment = a, n.jsx = l, n.jsxs = l
    },
    42295(e, n, o) {
      e.exports = o(69245)
    },
    90710(e, n, o) {
      o.r(n), o.d(n, {
        Accordion: () => L,
        AccordionContent: () => re,
        AccordionHeader: () => Z,
        AccordionItem: () => Q,
        AccordionTrigger: () => ne,
        Content: () => le,
        Header: () => se,
        Item: () => ie,
        Root: () => ae,
        Trigger: () => de,
        createAccordionScope: () => P
      });
      var r = o(71127),
        t = o(85426),
        a = o(13165),
        i = o(95362),
        s = o(94118),
        d = o(53054),
        l = o(62228),
        c = o(63155),
        f = o(53146),
        u = o(86126),
        p = o(42295),
        b = "Collapsible",
        [g, y] = (0, t.A)(b),
        [_, h] = g(b),
        w = r.forwardRef((e, n) => {
          const {
            __scopeCollapsible: o,
            open: t,
            defaultOpen: a,
            disabled: i,
            onOpenChange: s,
            ...c
          } = e, [f, g] = (0, d.i)({
            prop: t,
            defaultProp: a ?? !1,
            onChange: s,
            caller: b
          });
          return (0, p.jsx)(_, {
            scope: o,
            disabled: i,
            contentId: (0, u.B)(),
            open: f,
            onOpenToggle: r.useCallback(() => g(e => !e), [g]),
            children: (0, p.jsx)(l.sG.div, {
              "data-state": j(f),
              "data-disabled": i ? "" : void 0,
              ...c,
              ref: n
            })
          })
        });
      w.displayName = b;
      var m = "CollapsibleTrigger",
        v = r.forwardRef((e, n) => {
          const {
            __scopeCollapsible: o,
            ...r
          } = e, t = h(m, o);
          return (0, p.jsx)(l.sG.button, {
            type: "button",
            "aria-controls": t.contentId,
            "aria-expanded": t.open || !1,
            "data-state": j(t.open),
            "data-disabled": t.disabled ? "" : void 0,
            disabled: t.disabled,
            ...r,
            ref: n,
            onClick: (0, s.mK)(e.onClick, t.onOpenToggle)
          })
        });
      v.displayName = m;
      var x = "CollapsibleContent",
        A = r.forwardRef((e, n) => {
          const {
            forceMount: o,
            ...r
          } = e, t = h(x, e.__scopeCollapsible);
          return (0, p.jsx)(f.C, {
            present: o || t.open,
            children: ({
              present: e
            }) => (0, p.jsx)(C, {
              ...r,
              ref: n,
              present: e
            })
          })
        });
      A.displayName = x;
      var C = r.forwardRef((e, n) => {
        const {
          __scopeCollapsible: o,
          present: t,
          children: a,
          ...s
        } = e, d = h(x, o), [f, u] = r.useState(t), b = r.useRef(null), g = (0, i.s)(n, b), y = r.useRef(0), _ = y.current, w = r.useRef(0), m = w.current, v = d.open || f, A = r.useRef(v), C = r.useRef(void 0);
        return r.useEffect(() => {
          const e = requestAnimationFrame(() => A.current = !1);
          return () => cancelAnimationFrame(e)
        }, []), (0, c.N)(() => {
          const e = b.current;
          if (e) {
            C.current = C.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName
            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
            const n = e.getBoundingClientRect();
            y.current = n.height, w.current = n.width, A.current || (e.style.transitionDuration = C.current.transitionDuration, e.style.animationName = C.current.animationName), u(t)
          }
        }, [d.open, t]), (0, p.jsx)(l.sG.div, {
          "data-state": j(d.open),
          "data-disabled": d.disabled ? "" : void 0,
          id: d.contentId,
          hidden: !v,
          ...s,
          ref: g,
          style: {
            "--radix-collapsible-content-height": _ ? `${_}px` : void 0,
            "--radix-collapsible-content-width": m ? `${m}px` : void 0,
            ...e.style
          },
          children: v && a
        })
      });

      function j(e) {
        return e ? "open" : "closed"
      }
      var k = w,
        R = v,
        I = A,
        N = o(77768),
        O = "Accordion",
        D = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [E, T, S] = (0, a.N)(O),
        [M, P] = (0, t.A)(O, [S, y]),
        H = y(),
        L = r.forwardRef((e, n) => {
          const {
            type: o,
            ...r
          } = e, t = r, a = r;
          return (0, p.jsx)(E.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === o ? (0, p.jsx)(V, {
              ...a,
              ref: n
            }) : (0, p.jsx)(U, {
              ...t,
              ref: n
            })
          })
        });
      L.displayName = O;
      var [G, B] = M(O), [F, K] = M(O, {
        collapsible: !1
      }), U = r.forwardRef((e, n) => {
        const {
          value: o,
          defaultValue: t,
          onValueChange: a = () => {},
          collapsible: i = !1,
          ...s
        } = e, [l, c] = (0, d.i)({
          prop: o,
          defaultProp: t ?? "",
          onChange: a,
          caller: O
        });
        return (0, p.jsx)(G, {
          scope: e.__scopeAccordion,
          value: r.useMemo(() => l ? [l] : [], [l]),
          onItemOpen: c,
          onItemClose: r.useCallback(() => i && c(""), [i, c]),
          children: (0, p.jsx)(F, {
            scope: e.__scopeAccordion,
            collapsible: i,
            children: (0, p.jsx)(Y, {
              ...s,
              ref: n
            })
          })
        })
      }), V = r.forwardRef((e, n) => {
        const {
          value: o,
          defaultValue: t,
          onValueChange: a = () => {},
          ...i
        } = e, [s, l] = (0, d.i)({
          prop: o,
          defaultProp: t ?? [],
          onChange: a,
          caller: O
        }), c = r.useCallback(e => l((n = []) => [...n, e]), [l]), f = r.useCallback(e => l((n = []) => n.filter(n => n !== e)), [l]);
        return (0, p.jsx)(G, {
          scope: e.__scopeAccordion,
          value: s,
          onItemOpen: c,
          onItemClose: f,
          children: (0, p.jsx)(F, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, p.jsx)(Y, {
              ...i,
              ref: n
            })
          })
        })
      }), [$, z] = M(O), Y = r.forwardRef((e, n) => {
        const {
          __scopeAccordion: o,
          disabled: t,
          dir: a,
          orientation: d = "vertical",
          ...c
        } = e, f = r.useRef(null), u = (0, i.s)(f, n), b = T(o), g = "ltr" === (0, N.jH)(a), y = (0, s.mK)(e.onKeyDown, e => {
          if (!D.includes(e.key)) return;
          const n = e.target,
            o = b().filter(e => !e.ref.current?.disabled),
            r = o.findIndex(e => e.ref.current === n),
            t = o.length;
          if (-1 === r) return;
          e.preventDefault();
          let a = r;
          const i = t - 1,
            s = () => {
              a = r + 1, a > i && (a = 0)
            },
            l = () => {
              a = r - 1, a < 0 && (a = i)
            };
          switch (e.key) {
            case "Home":
              a = 0;
              break;
            case "End":
              a = i;
              break;
            case "ArrowRight":
              "horizontal" === d && (g ? s() : l());
              break;
            case "ArrowDown":
              "vertical" === d && s();
              break;
            case "ArrowLeft":
              "horizontal" === d && (g ? l() : s());
              break;
            case "ArrowUp":
              "vertical" === d && l()
          }
          const c = a % t;
          o[c].ref.current?.focus()
        });
        return (0, p.jsx)($, {
          scope: o,
          disabled: t,
          direction: a,
          orientation: d,
          children: (0, p.jsx)(E.Slot, {
            scope: o,
            children: (0, p.jsx)(l.sG.div, {
              ...c,
              "data-orientation": d,
              ref: u,
              onKeyDown: t ? void 0 : y
            })
          })
        })
      }), q = "AccordionItem", [W, J] = M(q), Q = r.forwardRef((e, n) => {
        const {
          __scopeAccordion: o,
          value: r,
          ...t
        } = e, a = z(q, o), i = B(q, o), s = H(o), d = (0, u.B)(), l = r && i.value.includes(r) || !1, c = a.disabled || e.disabled;
        return (0, p.jsx)(W, {
          scope: o,
          open: l,
          disabled: c,
          triggerId: d,
          children: (0, p.jsx)(k, {
            "data-orientation": a.orientation,
            "data-state": te(l),
            ...s,
            ...t,
            ref: n,
            disabled: c,
            open: l,
            onOpenChange: e => {
              e ? i.onItemOpen(r) : i.onItemClose(r)
            }
          })
        })
      });
      Q.displayName = q;
      var X = "AccordionHeader",
        Z = r.forwardRef((e, n) => {
          const {
            __scopeAccordion: o,
            ...r
          } = e, t = z(O, o), a = J(X, o);
          return (0, p.jsx)(l.sG.h3, {
            "data-orientation": t.orientation,
            "data-state": te(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...r,
            ref: n
          })
        });
      Z.displayName = X;
      var ee = "AccordionTrigger",
        ne = r.forwardRef((e, n) => {
          const {
            __scopeAccordion: o,
            ...r
          } = e, t = z(O, o), a = J(ee, o), i = K(ee, o), s = H(o);
          return (0, p.jsx)(E.ItemSlot, {
            scope: o,
            children: (0, p.jsx)(R, {
              "aria-disabled": a.open && !i.collapsible || void 0,
              "data-orientation": t.orientation,
              id: a.triggerId,
              ...s,
              ...r,
              ref: n
            })
          })
        });
      ne.displayName = ee;
      var oe = "AccordionContent",
        re = r.forwardRef((e, n) => {
          const {
            __scopeAccordion: o,
            ...r
          } = e, t = z(O, o), a = J(oe, o), i = H(o);
          return (0, p.jsx)(I, {
            role: "region",
            "aria-labelledby": a.triggerId,
            "data-orientation": t.orientation,
            ...i,
            ...r,
            ref: n,
            style: {
              "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
              ...e.style
            }
          })
        });

      function te(e) {
        return e ? "open" : "closed"
      }
      re.displayName = oe;
      var ae = L,
        ie = Q,
        se = Z,
        de = ne,
        le = re
    },
    95362(e, n, o) {
      o.d(n, {
        s: () => i,
        t: () => a
      });
      var r = o(71127);

      function t(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function a(...e) {
        return n => {
          let o = !1;
          const r = e.map(e => {
            const r = t(e, n);
            return o || "function" != typeof r || (o = !0), r
          });
          if (o) return () => {
            for (let n = 0; n < r.length; n++) {
              const o = r[n];
              "function" == typeof o ? o() : t(e[n], null)
            }
          }
        }
      }

      function i(...e) {
        return r.useCallback(a(...e), e)
      }
    }
  }
]);