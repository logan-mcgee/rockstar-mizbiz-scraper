try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "04f68b58-7ae4-4e3b-84d7-d0bedba9431e", e._sentryDebugIdIdentifier = "sentry-dbid-04f68b58-7ae4-4e3b-84d7-d0bedba9431e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [2302], {
    81664: (e, t, n) => {
      n.d(t, {
        hO: () => u,
        sG: () => a
      });
      var o = n(71127),
        r = n(18429),
        s = n(82691),
        i = n(42295),
        a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, t) => {
          const n = (0, s.createSlot)(`Primitive.${t}`),
            r = o.forwardRef(((e, o) => {
              const {
                asChild: r,
                ...s
              } = e, a = r ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, {
                ...s,
                ref: o
              })
            }));
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }), {});

      function u(e, t) {
        e && r.flushSync((() => e.dispatchEvent(t)))
      }
    },
    92302: (e, t, n) => {
      n.r(t), n.d(t, {
        Close: () => me,
        Content: () => fe,
        Description: () => ge,
        Dialog: () => A,
        DialogClose: () => te,
        DialogContent: () => K,
        DialogDescription: () => X,
        DialogOverlay: () => B,
        DialogPortal: () => U,
        DialogTitle: () => J,
        DialogTrigger: () => S,
        Overlay: () => le,
        Portal: () => ce,
        Root: () => ue,
        Title: () => pe,
        Trigger: () => de,
        WarningProvider: () => re,
        createDialogScope: () => T
      });
      var o = n(71127);

      function r(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(o) {
          if (e?.(o), !1 === n || !o.defaultPrevented) return t?.(o)
        }
      }
      "undefined" == typeof window || !window.document || window.document.createElement;
      var s, i = n(95362),
        a = n(85426),
        u = n(74406),
        d = n(79158),
        c = n(81664),
        l = n(76286),
        f = n(94040),
        p = n(42295),
        g = "dismissableLayer.update",
        m = o.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        y = o.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: u,
            onFocusOutside: d,
            onInteractOutside: y,
            onDismiss: D,
            ...w
          } = e, E = o.useContext(m), [h, O] = o.useState(null), _ = h?.ownerDocument ?? globalThis?.document, [, C] = o.useState({}), N = (0, i.s)(t, (e => O(e))), R = Array.from(E.layers), [I] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1), x = R.indexOf(I), P = h ? R.indexOf(h) : -1, T = E.layersWithOutsidePointerEventsDisabled.size > 0, M = P >= x, j = function(e, t = globalThis?.document) {
            const n = (0, l.c)(e),
              r = o.useRef(!1),
              s = o.useRef((() => {}));
            return o.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let o = function() {
                      b("dismissableLayer.pointerDownOutside", n, r, {
                        discrete: !0
                      })
                    };
                    const r = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", s.current), s.current = o, t.addEventListener("click", s.current, {
                      once: !0
                    })) : o()
                  } else t.removeEventListener("click", s.current);
                  r.current = !1
                },
                o = window.setTimeout((() => {
                  t.addEventListener("pointerdown", e)
                }), 0);
              return () => {
                window.clearTimeout(o), t.removeEventListener("pointerdown", e), t.removeEventListener("click", s.current)
              }
            }), [t, n]), {
              onPointerDownCapture: () => r.current = !0
            }
          }((e => {
            const t = e.target,
              n = [...E.branches].some((e => e.contains(t)));
            M && !n && (u?.(e), y?.(e), e.defaultPrevented || D?.())
          }), _), A = function(e, t = globalThis?.document) {
            const n = (0, l.c)(e),
              r = o.useRef(!1);
            return o.useEffect((() => {
              const e = e => {
                e.target && !r.current && b("dismissableLayer.focusOutside", n, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
            }), [t, n]), {
              onFocusCapture: () => r.current = !0,
              onBlurCapture: () => r.current = !1
            }
          }((e => {
            const t = e.target;
            [...E.branches].some((e => e.contains(t))) || (d?.(e), y?.(e), e.defaultPrevented || D?.())
          }), _);
          return (0, f.U)((e => {
            P === E.layers.size - 1 && (a?.(e), !e.defaultPrevented && D && (e.preventDefault(), D()))
          }), _), o.useEffect((() => {
            if (h) return n && (0 === E.layersWithOutsidePointerEventsDisabled.size && (s = _.body.style.pointerEvents, _.body.style.pointerEvents = "none"), E.layersWithOutsidePointerEventsDisabled.add(h)), E.layers.add(h), v(), () => {
              n && 1 === E.layersWithOutsidePointerEventsDisabled.size && (_.body.style.pointerEvents = s)
            }
          }), [h, _, n, E]), o.useEffect((() => () => {
            h && (E.layers.delete(h), E.layersWithOutsidePointerEventsDisabled.delete(h), v())
          }), [h, E]), o.useEffect((() => {
            const e = () => C({});
            return document.addEventListener(g, e), () => document.removeEventListener(g, e)
          }), []), (0, p.jsx)(c.sG.div, {
            ...w,
            ref: N,
            style: {
              pointerEvents: T ? M ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: r(e.onFocusCapture, A.onFocusCapture),
            onBlurCapture: r(e.onBlurCapture, A.onBlurCapture),
            onPointerDownCapture: r(e.onPointerDownCapture, j.onPointerDownCapture)
          })
        }));

      function v() {
        const e = new CustomEvent(g);
        document.dispatchEvent(e)
      }

      function b(e, t, n, {
        discrete: o
      }) {
        const r = n.originalEvent.target,
          s = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
          });
        t && r.addEventListener(e, t, {
          once: !0
        }), o ? (0, c.hO)(r, s) : r.dispatchEvent(s)
      }
      y.displayName = "DismissableLayer", o.forwardRef(((e, t) => {
        const n = o.useContext(m),
          r = o.useRef(null),
          s = (0, i.s)(t, r);
        return o.useEffect((() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }), [n.branches]), (0, p.jsx)(c.sG.div, {
          ...e,
          ref: s
        })
      })).displayName = "DismissableLayerBranch";
      var D = n(86683),
        w = n(40360),
        E = n(63155),
        h = e => {
          const {
            present: t,
            children: n
          } = e, r = function(e) {
            const [t, n] = o.useState(), r = o.useRef(null), s = o.useRef(e), i = o.useRef("none"), a = e ? "mounted" : "unmounted", [u, d] = function(e, t) {
              return o.useReducer(((e, n) => t[e][n] ?? e), e)
            }(a, {
              mounted: {
                UNMOUNT: "unmounted",
                ANIMATION_OUT: "unmountSuspended"
              },
              unmountSuspended: {
                MOUNT: "mounted",
                ANIMATION_END: "unmounted"
              },
              unmounted: {
                MOUNT: "mounted"
              }
            });
            return o.useEffect((() => {
              const e = O(r.current);
              i.current = "mounted" === u ? e : "none"
            }), [u]), (0, E.N)((() => {
              const t = r.current,
                n = s.current;
              if (n !== e) {
                const o = i.current,
                  r = O(t);
                d(e ? "MOUNT" : "none" === r || "none" === t?.display ? "UNMOUNT" : n && o !== r ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e
              }
            }), [e, d]), (0, E.N)((() => {
              if (t) {
                let e;
                const n = t.ownerDocument.defaultView ?? window,
                  o = o => {
                    const i = O(r.current).includes(CSS.escape(o.animationName));
                    if (o.target === t && i && (d("ANIMATION_END"), !s.current)) {
                      const o = t.style.animationFillMode;
                      t.style.animationFillMode = "forwards", e = n.setTimeout((() => {
                        "forwards" === t.style.animationFillMode && (t.style.animationFillMode = o)
                      }))
                    }
                  },
                  a = e => {
                    e.target === t && (i.current = O(r.current))
                  };
                return t.addEventListener("animationstart", a), t.addEventListener("animationcancel", o), t.addEventListener("animationend", o), () => {
                  n.clearTimeout(e), t.removeEventListener("animationstart", a), t.removeEventListener("animationcancel", o), t.removeEventListener("animationend", o)
                }
              }
              d("ANIMATION_END")
            }), [t, d]), {
              isPresent: ["mounted", "unmountSuspended"].includes(u),
              ref: o.useCallback((e => {
                r.current = e ? getComputedStyle(e) : null, n(e)
              }), [])
            }
          }(t), s = "function" == typeof n ? n({
            present: r.isPresent
          }) : o.Children.only(n), a = (0, i.s)(r.ref, function(e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              n = t && "isReactWarning" in t && t.isReactWarning;
            return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
          }(s));
          return "function" == typeof n || r.isPresent ? o.cloneElement(s, {
            ref: a
          }) : null
        };

      function O(e) {
        return e?.animationName || "none"
      }
      h.displayName = "Presence";
      var _ = 0;

      function C() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      var N = n(19690),
        R = n(94926),
        I = n(15510),
        x = "Dialog",
        [P, T] = (0, a.A)(x),
        [M, j] = P(x),
        A = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: s,
            onOpenChange: i,
            modal: a = !0
          } = e, c = o.useRef(null), l = o.useRef(null), [f, g] = (0, d.useControllableState)({
            prop: r,
            defaultProp: s ?? !1,
            onChange: i,
            caller: x
          });
          return (0, p.jsx)(M, {
            scope: t,
            triggerRef: c,
            contentRef: l,
            contentId: (0, u.useId)(),
            titleId: (0, u.useId)(),
            descriptionId: (0, u.useId)(),
            open: f,
            onOpenChange: g,
            onOpenToggle: o.useCallback((() => g((e => !e))), [g]),
            modal: a,
            children: n
          })
        };
      A.displayName = x;
      var F = "DialogTrigger",
        S = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, s = j(F, n), a = (0, i.s)(t, s.triggerRef);
          return (0, p.jsx)(c.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": s.open,
            "aria-controls": s.contentId,
            "data-state": ne(s.open),
            ...o,
            ref: a,
            onClick: r(e.onClick, s.onOpenToggle)
          })
        }));
      S.displayName = F;
      var L = "DialogPortal",
        [k, W] = P(L, {
          forceMount: void 0
        }),
        U = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: s
          } = e, i = j(L, t);
          return (0, p.jsx)(k, {
            scope: t,
            forceMount: n,
            children: o.Children.map(r, (e => (0, p.jsx)(h, {
              present: n || i.open,
              children: (0, p.jsx)(w.Portal, {
                asChild: !0,
                container: s,
                children: e
              })
            })))
          })
        };
      U.displayName = L;
      var G = "DialogOverlay",
        B = o.forwardRef(((e, t) => {
          const n = W(G, e.__scopeDialog),
            {
              forceMount: o = n.forceMount,
              ...r
            } = e,
            s = j(G, e.__scopeDialog);
          return s.modal ? (0, p.jsx)(h, {
            present: o || s.open,
            children: (0, p.jsx)(q, {
              ...r,
              ref: t
            })
          }) : null
        }));
      B.displayName = G;
      var $ = (0, I.createSlot)("DialogOverlay.RemoveScroll"),
        q = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = j(G, n);
          return (0, p.jsx)(N.RemoveScroll, {
            as: $,
            allowPinchZoom: !0,
            shards: [r.contentRef],
            children: (0, p.jsx)(c.sG.div, {
              "data-state": ne(r.open),
              ...o,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...o.style
              }
            })
          })
        })),
        z = "DialogContent",
        K = o.forwardRef(((e, t) => {
          const n = W(z, e.__scopeDialog),
            {
              forceMount: o = n.forceMount,
              ...r
            } = e,
            s = j(z, e.__scopeDialog);
          return (0, p.jsx)(h, {
            present: o || s.open,
            children: s.modal ? (0, p.jsx)(V, {
              ...r,
              ref: t
            }) : (0, p.jsx)(H, {
              ...r,
              ref: t
            })
          })
        }));
      K.displayName = z;
      var V = o.forwardRef(((e, t) => {
          const n = j(z, e.__scopeDialog),
            s = o.useRef(null),
            a = (0, i.s)(t, n.contentRef, s);
          return o.useEffect((() => {
            const e = s.current;
            if (e) return (0, R.Eq)(e)
          }), []), (0, p.jsx)(Y, {
            ...e,
            ref: a,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: r(e.onCloseAutoFocus, (e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            })),
            onPointerDownOutside: r(e.onPointerDownOutside, (e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            })),
            onFocusOutside: r(e.onFocusOutside, (e => e.preventDefault()))
          })
        })),
        H = o.forwardRef(((e, t) => {
          const n = j(z, e.__scopeDialog),
            r = o.useRef(!1),
            s = o.useRef(!1);
          return (0, p.jsx)(Y, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, s.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, "pointerdown" === t.detail.originalEvent.type && (s.current = !0));
              const o = t.target,
                i = n.triggerRef.current?.contains(o);
              i && t.preventDefault(), "focusin" === t.detail.originalEvent.type && s.current && t.preventDefault()
            }
          })
        })),
        Y = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: s,
            onCloseAutoFocus: a,
            ...u
          } = e, d = j(z, n), c = o.useRef(null), l = (0, i.s)(t, c);
          return o.useEffect((() => {
            const e = document.querySelectorAll("[data-radix-focus-guard]");
            return document.body.insertAdjacentElement("afterbegin", e[0] ?? C()), document.body.insertAdjacentElement("beforeend", e[1] ?? C()), _++, () => {
              1 === _ && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), _--
            }
          }), []), (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)(D.FocusScope, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: s,
              onUnmountAutoFocus: a,
              children: (0, p.jsx)(y, {
                role: "dialog",
                id: d.contentId,
                "aria-describedby": d.descriptionId,
                "aria-labelledby": d.titleId,
                "data-state": ne(d.open),
                ...u,
                ref: l,
                onDismiss: () => d.onOpenChange(!1)
              })
            }), (0, p.jsxs)(p.Fragment, {
              children: [(0, p.jsx)(ie, {
                titleId: d.titleId
              }), (0, p.jsx)(ae, {
                contentRef: c,
                descriptionId: d.descriptionId
              })]
            })]
          })
        })),
        Z = "DialogTitle",
        J = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = j(Z, n);
          return (0, p.jsx)(c.sG.h2, {
            id: r.titleId,
            ...o,
            ref: t
          })
        }));
      J.displayName = Z;
      var Q = "DialogDescription",
        X = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = j(Q, n);
          return (0, p.jsx)(c.sG.p, {
            id: r.descriptionId,
            ...o,
            ref: t
          })
        }));
      X.displayName = Q;
      var ee = "DialogClose",
        te = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, s = j(ee, n);
          return (0, p.jsx)(c.sG.button, {
            type: "button",
            ...o,
            ref: t,
            onClick: r(e.onClick, (() => s.onOpenChange(!1)))
          })
        }));

      function ne(e) {
        return e ? "open" : "closed"
      }
      te.displayName = ee;
      var oe = "DialogTitleWarning",
        [re, se] = (0, a.q)(oe, {
          contentName: z,
          titleName: Z,
          docsSlug: "dialog"
        }),
        ie = ({
          titleId: e
        }) => {
          const t = se(oe),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return o.useEffect((() => {
            e && (document.getElementById(e) || console.error(n))
          }), [n, e]), null
        },
        ae = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${se("DialogDescriptionWarning").contentName}}.`;
          return o.useEffect((() => {
            const o = e.current?.getAttribute("aria-describedby");
            t && o && (document.getElementById(t) || console.warn(n))
          }), [n, e, t]), null
        },
        ue = A,
        de = S,
        ce = U,
        le = B,
        fe = K,
        pe = J,
        ge = X,
        me = te
    }
  }
]);