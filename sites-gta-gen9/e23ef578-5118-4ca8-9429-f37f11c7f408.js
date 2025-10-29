try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e23ef578-5118-4ca8-9429-f37f11c7f408", e._sentryDebugIdIdentifier = "sentry-dbid-e23ef578-5118-4ca8-9429-f37f11c7f408")
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
  [3405], {
    15234: (e, t, n) => {
      n.d(t, {
        Oh: () => a
      });
      var r = n(62229),
        o = 0;

      function a() {
        r.useEffect((() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? i()), document.body.insertAdjacentElement("beforeend", e[1] ?? i()), o++, () => {
            1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), o--
          }
        }), [])
      }

      function i() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
    },
    53054: (e, t, n) => {
      var r;
      n.d(t, {
        i: () => c
      });
      var o = n(62229),
        a = n(63155),
        i = (r || (r = n.t(o, 2)))[" useInsertionEffect ".trim().toString()] || a.N;

      function c({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
        caller: r
      }) {
        const [a, c, s] = function({
          defaultProp: e,
          onChange: t
        }) {
          const [n, r] = o.useState(e), a = o.useRef(n), c = o.useRef(t);
          return i((() => {
            c.current = t
          }), [t]), o.useEffect((() => {
            a.current !== n && (c.current?.(n), a.current = n)
          }), [n, a]), [n, r, c]
        }({
          defaultProp: t,
          onChange: n
        }), u = void 0 !== e, l = u ? e : a; {
          const t = o.useRef(void 0 !== e);
          o.useEffect((() => {
            const e = t.current;
            if (e !== u) {
              const t = e ? "controlled" : "uncontrolled",
                n = u ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            t.current = u
          }), [u, r])
        }
        const d = o.useCallback((t => {
          if (u) {
            const n = function(e) {
              return "function" == typeof e
            }(t) ? t(e) : t;
            n !== e && s.current?.(n)
          } else c(t)
        }), [u, e, c, s]);
        return [l, d]
      }
      Symbol("RADIX:SYNC_STATE")
    },
    53146: (e, t, n) => {
      n.d(t, {
        C: () => i
      });
      var r = n(62229),
        o = n(95362),
        a = n(63155),
        i = e => {
          const {
            present: t,
            children: n
          } = e, i = function(e) {
            const [t, n] = r.useState(), o = r.useRef(null), i = r.useRef(e), s = r.useRef("none"), u = e ? "mounted" : "unmounted", [l, d] = function(e, t) {
              return r.useReducer(((e, n) => t[e][n] ?? e), e)
            }(u, {
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
            return r.useEffect((() => {
              const e = c(o.current);
              s.current = "mounted" === l ? e : "none"
            }), [l]), (0, a.N)((() => {
              const t = o.current,
                n = i.current;
              if (n !== e) {
                const r = s.current,
                  o = c(t);
                d(e ? "MOUNT" : "none" === o || "none" === t?.display ? "UNMOUNT" : n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e
              }
            }), [e, d]), (0, a.N)((() => {
              if (t) {
                let e;
                const n = t.ownerDocument.defaultView ?? window,
                  r = r => {
                    const a = c(o.current).includes(r.animationName);
                    if (r.target === t && a && (d("ANIMATION_END"), !i.current)) {
                      const r = t.style.animationFillMode;
                      t.style.animationFillMode = "forwards", e = n.setTimeout((() => {
                        "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r)
                      }))
                    }
                  },
                  a = e => {
                    e.target === t && (s.current = c(o.current))
                  };
                return t.addEventListener("animationstart", a), t.addEventListener("animationcancel", r), t.addEventListener("animationend", r), () => {
                  n.clearTimeout(e), t.removeEventListener("animationstart", a), t.removeEventListener("animationcancel", r), t.removeEventListener("animationend", r)
                }
              }
              d("ANIMATION_END")
            }), [t, d]), {
              isPresent: ["mounted", "unmountSuspended"].includes(l),
              ref: r.useCallback((e => {
                o.current = e ? getComputedStyle(e) : null, n(e)
              }), [])
            }
          }(t), s = "function" == typeof n ? n({
            present: i.isPresent
          }) : r.Children.only(n), u = (0, o.s)(i.ref, function(e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              n = t && "isReactWarning" in t && t.isReactWarning;
            return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
          }(s));
          return "function" == typeof n || i.isPresent ? r.cloneElement(s, {
            ref: u
          }) : null
        };

      function c(e) {
        return e?.animationName || "none"
      }
      i.displayName = "Presence"
    },
    63155: (e, t, n) => {
      n.d(t, {
        N: () => o
      });
      var r = n(62229),
        o = globalThis?.document ? r.useLayoutEffect : () => {}
    },
    63405: (e, t, n) => {
      n.d(t, {
        bm: () => me,
        UC: () => fe,
        VY: () => ve,
        hJ: () => de,
        ZL: () => le,
        bL: () => se,
        hE: () => pe,
        l9: () => ue
      });
      var r = n(62229),
        o = n(94118),
        a = n(95362),
        i = n(85426),
        c = n(86126),
        s = n(53054),
        u = n(89749),
        l = n(78004),
        d = n(76286),
        f = n(42295),
        p = "focusScope.autoFocusOnMount",
        v = "focusScope.autoFocusOnUnmount",
        m = {
          bubbles: !1,
          cancelable: !0
        },
        h = r.forwardRef(((e, t) => {
          const {
            loop: n = !1,
            trapped: o = !1,
            onMountAutoFocus: i,
            onUnmountAutoFocus: c,
            ...s
          } = e, [u, h] = r.useState(null), b = (0, d.c)(i), E = (0, d.c)(c), O = r.useRef(null), S = (0, a.s)(t, (e => h(e))), C = r.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          r.useEffect((() => {
            if (o) {
              let e = function(e) {
                  if (C.paused || !u) return;
                  const t = e.target;
                  u.contains(t) ? O.current = t : w(O.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (C.paused || !u) return;
                  const t = e.relatedTarget;
                  null !== t && (u.contains(t) || w(O.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && w(u)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const r = new MutationObserver(n);
              return u && r.observe(u, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
              }
            }
          }), [o, u, C.paused]), r.useEffect((() => {
            if (u) {
              _.add(C);
              const e = document.activeElement;
              if (!u.contains(e)) {
                const t = new CustomEvent(p, m);
                u.addEventListener(p, b), u.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (w(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(y(u).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && w(u))
              }
              return () => {
                u.removeEventListener(p, b), setTimeout((() => {
                  const t = new CustomEvent(v, m);
                  u.addEventListener(v, E), u.dispatchEvent(t), t.defaultPrevented || w(e ?? document.body, {
                    select: !0
                  }), u.removeEventListener(v, E), _.remove(C)
                }), 0)
              }
            }
          }), [u, b, E, C]);
          const P = r.useCallback((e => {
            if (!n && !o) return;
            if (C.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              r = document.activeElement;
            if (t && r) {
              const t = e.currentTarget,
                [o, a] = function(e) {
                  const t = y(e);
                  return [g(t, e), g(t.reverse(), e)]
                }(t);
              o && a ? e.shiftKey || r !== a ? e.shiftKey && r === o && (e.preventDefault(), n && w(a, {
                select: !0
              })) : (e.preventDefault(), n && w(o, {
                select: !0
              })) : r === t && e.preventDefault()
            }
          }), [n, o, C.paused]);
          return (0, f.jsx)(l.sG.div, {
            tabIndex: -1,
            ...s,
            ref: S,
            onKeyDown: P
          })
        }));

      function y(e) {
        const t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
      }

      function g(e, t) {
        for (const n of e)
          if (!b(n, {
              upTo: t
            })) return n
      }

      function b(e, {
        upTo: t
      }) {
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        for (; e;) {
          if (void 0 !== t && e === t) return !1;
          if ("none" === getComputedStyle(e).display) return !0;
          e = e.parentElement
        }
        return !1
      }

      function w(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          const n = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== n && function(e) {
            return e instanceof HTMLInputElement && "select" in e
          }(e) && t && e.select()
        }
      }
      h.displayName = "FocusScope";
      var _ = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = E(e, t), e.unshift(t)
          },
          remove(t) {
            e = E(e, t), e[0]?.resume()
          }
        }
      }();

      function E(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
      var O = n(80061),
        S = n(53146),
        C = n(15234),
        P = n(97359),
        D = n(94926),
        N = n(39447),
        x = "Dialog",
        [R, T] = (0, i.A)(x),
        [j, I] = R(x),
        M = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: o,
            defaultOpen: a,
            onOpenChange: i,
            modal: u = !0
          } = e, l = r.useRef(null), d = r.useRef(null), [p, v] = (0, s.i)({
            prop: o,
            defaultProp: a ?? !1,
            onChange: i,
            caller: x
          });
          return (0, f.jsx)(j, {
            scope: t,
            triggerRef: l,
            contentRef: d,
            contentId: (0, c.B)(),
            titleId: (0, c.B)(),
            descriptionId: (0, c.B)(),
            open: p,
            onOpenChange: v,
            onOpenToggle: r.useCallback((() => v((e => !e))), [v]),
            modal: u,
            children: n
          })
        };
      M.displayName = x;
      var A = "DialogTrigger",
        k = r.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, i = I(A, n), c = (0, a.s)(t, i.triggerRef);
          return (0, f.jsx)(l.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": i.open,
            "aria-controls": i.contentId,
            "data-state": ne(i.open),
            ...r,
            ref: c,
            onClick: (0, o.m)(e.onClick, i.onOpenToggle)
          })
        }));
      k.displayName = A;
      var L = "DialogPortal",
        [F, W] = R(L, {
          forceMount: void 0
        }),
        B = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: o,
            container: a
          } = e, i = I(L, t);
          return (0, f.jsx)(F, {
            scope: t,
            forceMount: n,
            children: r.Children.map(o, (e => (0, f.jsx)(S.C, {
              present: n || i.open,
              children: (0, f.jsx)(O.Z, {
                asChild: !0,
                container: a,
                children: e
              })
            })))
          })
        };
      B.displayName = L;
      var U = "DialogOverlay",
        $ = r.forwardRef(((e, t) => {
          const n = W(U, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            a = I(U, e.__scopeDialog);
          return a.modal ? (0, f.jsx)(S.C, {
            present: r || a.open,
            children: (0, f.jsx)(K, {
              ...o,
              ref: t
            })
          }) : null
        }));
      $.displayName = U;
      var G = (0, N.TL)("DialogOverlay.RemoveScroll"),
        K = r.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = I(U, n);
          return (0, f.jsx)(P.A, {
            as: G,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, f.jsx)(l.sG.div, {
              "data-state": ne(o.open),
              ...r,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        })),
        q = "DialogContent",
        z = r.forwardRef(((e, t) => {
          const n = W(q, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            a = I(q, e.__scopeDialog);
          return (0, f.jsx)(S.C, {
            present: r || a.open,
            children: a.modal ? (0, f.jsx)(Y, {
              ...o,
              ref: t
            }) : (0, f.jsx)(X, {
              ...o,
              ref: t
            })
          })
        }));
      z.displayName = q;
      var Y = r.forwardRef(((e, t) => {
          const n = I(q, e.__scopeDialog),
            i = r.useRef(null),
            c = (0, a.s)(t, n.contentRef, i);
          return r.useEffect((() => {
            const e = i.current;
            if (e) return (0, D.Eq)(e)
          }), []), (0, f.jsx)(Z, {
            ...e,
            ref: c,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: (0, o.m)(e.onCloseAutoFocus, (e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            })),
            onPointerDownOutside: (0, o.m)(e.onPointerDownOutside, (e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            })),
            onFocusOutside: (0, o.m)(e.onFocusOutside, (e => e.preventDefault()))
          })
        })),
        X = r.forwardRef(((e, t) => {
          const n = I(q, e.__scopeDialog),
            o = r.useRef(!1),
            a = r.useRef(!1);
          return (0, f.jsx)(Z, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (o.current || n.triggerRef.current?.focus(), t.preventDefault()), o.current = !1, a.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (o.current = !0, "pointerdown" === t.detail.originalEvent.type && (a.current = !0));
              const r = t.target,
                i = n.triggerRef.current?.contains(r);
              i && t.preventDefault(), "focusin" === t.detail.originalEvent.type && a.current && t.preventDefault()
            }
          })
        })),
        Z = r.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: o,
            onOpenAutoFocus: i,
            onCloseAutoFocus: c,
            ...s
          } = e, l = I(q, n), d = r.useRef(null), p = (0, a.s)(t, d);
          return (0, C.Oh)(), (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)(h, {
              asChild: !0,
              loop: !0,
              trapped: o,
              onMountAutoFocus: i,
              onUnmountAutoFocus: c,
              children: (0, f.jsx)(u.qW, {
                role: "dialog",
                id: l.contentId,
                "aria-describedby": l.descriptionId,
                "aria-labelledby": l.titleId,
                "data-state": ne(l.open),
                ...s,
                ref: p,
                onDismiss: () => l.onOpenChange(!1)
              })
            }), (0, f.jsxs)(f.Fragment, {
              children: [(0, f.jsx)(ie, {
                titleId: l.titleId
              }), (0, f.jsx)(ce, {
                contentRef: d,
                descriptionId: l.descriptionId
              })]
            })]
          })
        })),
        H = "DialogTitle",
        V = r.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = I(H, n);
          return (0, f.jsx)(l.sG.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        }));
      V.displayName = H;
      var J = "DialogDescription",
        Q = r.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = I(J, n);
          return (0, f.jsx)(l.sG.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        }));
      Q.displayName = J;
      var ee = "DialogClose",
        te = r.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, a = I(ee, n);
          return (0, f.jsx)(l.sG.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, o.m)(e.onClick, (() => a.onOpenChange(!1)))
          })
        }));

      function ne(e) {
        return e ? "open" : "closed"
      }
      te.displayName = ee;
      var re = "DialogTitleWarning",
        [oe, ae] = (0, i.q)(re, {
          contentName: q,
          titleName: H,
          docsSlug: "dialog"
        }),
        ie = ({
          titleId: e
        }) => {
          const t = ae(re),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return r.useEffect((() => {
            e && (document.getElementById(e) || console.error(n))
          }), [n, e]), null
        },
        ce = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ae("DialogDescriptionWarning").contentName}}.`;
          return r.useEffect((() => {
            const r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n))
          }), [n, e, t]), null
        },
        se = M,
        ue = k,
        le = B,
        de = $,
        fe = z,
        pe = V,
        ve = Q,
        me = te
    },
    76286: (e, t, n) => {
      n.d(t, {
        c: () => o
      });
      var r = n(62229);

      function o(e) {
        const t = r.useRef(e);
        return r.useEffect((() => {
          t.current = e
        })), r.useMemo((() => (...e) => t.current?.(...e)), [])
      }
    },
    78322: (e, t, n) => {
      n.r(t), n.d(t, {
        __addDisposableResource: () => A,
        __assign: () => a,
        __asyncDelegator: () => C,
        __asyncGenerator: () => S,
        __asyncValues: () => P,
        __await: () => O,
        __awaiter: () => v,
        __classPrivateFieldGet: () => j,
        __classPrivateFieldIn: () => M,
        __classPrivateFieldSet: () => I,
        __createBinding: () => h,
        __decorate: () => c,
        __disposeResources: () => L,
        __esDecorate: () => u,
        __exportStar: () => y,
        __extends: () => o,
        __generator: () => m,
        __importDefault: () => T,
        __importStar: () => R,
        __makeTemplateObject: () => D,
        __metadata: () => p,
        __param: () => s,
        __propKey: () => d,
        __read: () => b,
        __rest: () => i,
        __rewriteRelativeImportExtension: () => F,
        __runInitializers: () => l,
        __setFunctionName: () => f,
        __spread: () => w,
        __spreadArray: () => E,
        __spreadArrays: () => _,
        __values: () => g,
        default: () => W
      });
      var r = function(e, t) {
        return r = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }, r(e, t)
      };

      function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function n() {
          this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
      }
      var a = function() {
        return a = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, a.apply(this, arguments)
      };

      function i(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
      }

      function c(e, t, n, r) {
        var o, a = arguments.length,
          i = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, r);
        else
          for (var c = e.length - 1; c >= 0; c--)(o = e[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, n, i) : o(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      }

      function s(e, t) {
        return function(n, r) {
          t(n, r, e)
        }
      }

      function u(e, t, n, r, o, a) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var c, s = r.kind, u = "getter" === s ? "get" : "setter" === s ? "set" : "value", l = !t && e ? r.static ? e : e.prototype : null, d = t || (l ? Object.getOwnPropertyDescriptor(l, r.name) : {}), f = !1, p = n.length - 1; p >= 0; p--) {
          var v = {};
          for (var m in r) v[m] = "access" === m ? {} : r[m];
          for (var m in r.access) v.access[m] = r.access[m];
          v.addInitializer = function(e) {
            if (f) throw new TypeError("Cannot add initializers after decoration has completed");
            a.push(i(e || null))
          };
          var h = (0, n[p])("accessor" === s ? {
            get: d.get,
            set: d.set
          } : d[u], v);
          if ("accessor" === s) {
            if (void 0 === h) continue;
            if (null === h || "object" != typeof h) throw new TypeError("Object expected");
            (c = i(h.get)) && (d.get = c), (c = i(h.set)) && (d.set = c), (c = i(h.init)) && o.unshift(c)
          } else(c = i(h)) && ("field" === s ? o.unshift(c) : d[u] = c)
        }
        l && Object.defineProperty(l, r.name, d), f = !0
      }

      function l(e, t, n) {
        for (var r = arguments.length > 2, o = 0; o < t.length; o++) n = r ? t[o].call(e, n) : t[o].call(e);
        return r ? n : void 0
      }

      function d(e) {
        return "symbol" == typeof e ? e : "".concat(e)
      }

      function f(e, t, n) {
        return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: n ? "".concat(n, " ", t) : t
        })
      }

      function p(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
      }

      function v(e, t, n, r) {
        return new(n || (n = Promise))((function(o, a) {
          function i(e) {
            try {
              s(r.next(e))
            } catch (e) {
              a(e)
            }
          }

          function c(e) {
            try {
              s(r.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function s(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
              e(t)
            }))).then(i, c)
          }
          s((r = r.apply(e, t || [])).next())
        }))
      }

      function m(e, t) {
        var n, r, o, a = {
            label: 0,
            sent: function() {
              if (1 & o[0]) throw o[1];
              return o[1]
            },
            trys: [],
            ops: []
          },
          i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return i.next = c(0), i.throw = c(1), i.return = c(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
          return this
        }), i;

        function c(c) {
          return function(s) {
            return function(c) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                  case 0:
                  case 1:
                    o = c;
                    break;
                  case 4:
                    return a.label++, {
                      value: c[1],
                      done: !1
                    };
                  case 5:
                    a.label++, r = c[1], c = [0];
                    continue;
                  case 7:
                    c = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                      a = 0;
                      continue
                    }
                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                      a.label = c[1];
                      break
                    }
                    if (6 === c[0] && a.label < o[1]) {
                      a.label = o[1], o = c;
                      break
                    }
                    if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(c);
                      break
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                c = t.call(e, a)
              } catch (e) {
                c = [6, e], r = 0
              } finally {
                n = o = 0
              }
              if (5 & c[0]) throw c[1];
              return {
                value: c[0] ? c[1] : void 0,
                done: !0
              }
            }([c, s])
          }
        }
      }
      var h = Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n);
        var o = Object.getOwnPropertyDescriptor(t, n);
        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
          enumerable: !0,
          get: function() {
            return t[n]
          }
        }), Object.defineProperty(e, r, o)
      } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n]
      };

      function y(e, t) {
        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || h(t, e, n)
      }

      function g(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length) return {
          next: function() {
            return e && r >= e.length && (e = void 0), {
              value: e && e[r++],
              done: !e
            }
          }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function b(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, o, a = n.call(e),
          i = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(r = a.next()).done;) i.push(r.value)
        } catch (e) {
          o = {
            error: e
          }
        } finally {
          try {
            r && !r.done && (n = a.return) && n.call(a)
          } finally {
            if (o) throw o.error
          }
        }
        return i
      }

      function w() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(b(arguments[t]));
        return e
      }

      function _() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        var r = Array(e),
          o = 0;
        for (t = 0; t < n; t++)
          for (var a = arguments[t], i = 0, c = a.length; i < c; i++, o++) r[o] = a[i];
        return r
      }

      function E(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, a = t.length; o < a; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
        return e.concat(r || Array.prototype.slice.call(t))
      }

      function O(e) {
        return this instanceof O ? (this.v = e, this) : new O(e)
      }

      function S(e, t, n) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var r, o = n.apply(e, t || []),
          a = [];
        return r = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), i("next"), i("throw"), i("return", (function(e) {
          return function(t) {
            return Promise.resolve(t).then(e, u)
          }
        })), r[Symbol.asyncIterator] = function() {
          return this
        }, r;

        function i(e, t) {
          o[e] && (r[e] = function(t) {
            return new Promise((function(n, r) {
              a.push([e, t, n, r]) > 1 || c(e, t)
            }))
          }, t && (r[e] = t(r[e])))
        }

        function c(e, t) {
          try {
            (n = o[e](t)).value instanceof O ? Promise.resolve(n.value.v).then(s, u) : l(a[0][2], n)
          } catch (e) {
            l(a[0][3], e)
          }
          var n
        }

        function s(e) {
          c("next", e)
        }

        function u(e) {
          c("throw", e)
        }

        function l(e, t) {
          e(t), a.shift(), a.length && c(a[0][0], a[0][1])
        }
      }

      function C(e) {
        var t, n;
        return t = {}, r("next"), r("throw", (function(e) {
          throw e
        })), r("return"), t[Symbol.iterator] = function() {
          return this
        }, t;

        function r(r, o) {
          t[r] = e[r] ? function(t) {
            return (n = !n) ? {
              value: O(e[r](t)),
              done: !1
            } : o ? o(t) : t
          } : o
        }
      }

      function P(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, n = e[Symbol.asyncIterator];
        return n ? n.call(e) : (e = g(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
          return this
        }, t);

        function r(n) {
          t[n] = e[n] && function(t) {
            return new Promise((function(r, o) {
              ! function(e, t, n, r) {
                Promise.resolve(r).then((function(t) {
                  e({
                    value: t,
                    done: n
                  })
                }), t)
              }(r, o, (t = e[n](t)).done, t.value)
            }))
          }
        }
      }

      function D(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: t
        }) : e.raw = t, e
      }
      var N = Object.create ? function(e, t) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
          })
        } : function(e, t) {
          e.default = t
        },
        x = function(e) {
          return x = Object.getOwnPropertyNames || function(e) {
            var t = [];
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
            return t
          }, x(e)
        };

      function R(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n = x(e), r = 0; r < n.length; r++) "default" !== n[r] && h(t, e, n[r]);
        return N(t, e), t
      }

      function T(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function j(e, t, n, r) {
        if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
      }

      function I(e, t, n, r, o) {
        if ("m" === r) throw new TypeError("Private method is not writable");
        if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === r ? o.call(e, n) : o ? o.value = n : t.set(e, n), n
      }

      function M(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function A(e, t, n) {
        if (null != t) {
          if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
          var r, o;
          if (n) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            r = t[Symbol.asyncDispose]
          }
          if (void 0 === r) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            r = t[Symbol.dispose], n && (o = r)
          }
          if ("function" != typeof r) throw new TypeError("Object not disposable.");
          o && (r = function() {
            try {
              o.call(this)
            } catch (e) {
              return Promise.reject(e)
            }
          }), e.stack.push({
            value: t,
            dispose: r,
            async: n
          })
        } else n && e.stack.push({
          async: !0
        });
        return t
      }
      var k = "function" == typeof SuppressedError ? SuppressedError : function(e, t, n) {
        var r = new Error(n);
        return r.name = "SuppressedError", r.error = e, r.suppressed = t, r
      };

      function L(e) {
        function t(t) {
          e.error = e.hasError ? new k(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
        }
        var n, r = 0;
        return function o() {
          for (; n = e.stack.pop();) try {
            if (!n.async && 1 === r) return r = 0, e.stack.push(n), Promise.resolve().then(o);
            if (n.dispose) {
              var a = n.dispose.call(n.value);
              if (n.async) return r |= 2, Promise.resolve(a).then(o, (function(e) {
                return t(e), o()
              }))
            } else r |= 1
          } catch (e) {
            t(e)
          }
          if (1 === r) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error
        }()
      }

      function F(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(e, n, r, o, a) {
          return n ? t ? ".jsx" : ".js" : !r || o && a ? r + o + "." + a.toLowerCase() + "js" : e
        })) : e
      }
      const W = {
        __extends: o,
        __assign: a,
        __rest: i,
        __decorate: c,
        __param: s,
        __esDecorate: u,
        __runInitializers: l,
        __propKey: d,
        __setFunctionName: f,
        __metadata: p,
        __awaiter: v,
        __generator: m,
        __createBinding: h,
        __exportStar: y,
        __values: g,
        __read: b,
        __spread: w,
        __spreadArrays: _,
        __spreadArray: E,
        __await: O,
        __asyncGenerator: S,
        __asyncDelegator: C,
        __asyncValues: P,
        __makeTemplateObject: D,
        __importStar: R,
        __importDefault: T,
        __classPrivateFieldGet: j,
        __classPrivateFieldSet: I,
        __classPrivateFieldIn: M,
        __addDisposableResource: A,
        __disposeResources: L,
        __rewriteRelativeImportExtension: F
      }
    },
    80061: (e, t, n) => {
      n.d(t, {
        Z: () => s
      });
      var r = n(62229),
        o = n(44853),
        a = n(78004),
        i = n(63155),
        c = n(42295),
        s = r.forwardRef(((e, t) => {
          const {
            container: n,
            ...s
          } = e, [u, l] = r.useState(!1);
          (0, i.N)((() => l(!0)), []);
          const d = n || u && globalThis?.document?.body;
          return d ? o.createPortal((0, c.jsx)(a.sG.div, {
            ...s,
            ref: t
          }), d) : null
        }));
      s.displayName = "Portal"
    },
    85426: (e, t, n) => {
      n.d(t, {
        A: () => i,
        q: () => a
      });
      var r = n(62229),
        o = n(42295);

      function a(e, t) {
        const n = r.createContext(t),
          a = e => {
            const {
              children: t,
              ...a
            } = e, i = r.useMemo((() => a), Object.values(a));
            return (0, o.jsx)(n.Provider, {
              value: i,
              children: t
            })
          };
        return a.displayName = e + "Provider", [a, function(o) {
          const a = r.useContext(n);
          if (a) return a;
          if (void 0 !== t) return t;
          throw new Error(`\`${o}\` must be used within \`${e}\``)
        }]
      }

      function i(e, t = []) {
        let n = [];
        const a = () => {
          const t = n.map((e => r.createContext(e)));
          return function(n) {
            const o = n?.[e] || t;
            return r.useMemo((() => ({
              [`__scope${e}`]: {
                ...n,
                [e]: o
              }
            })), [n, o])
          }
        };
        return a.scopeName = e, [function(t, a) {
          const i = r.createContext(a),
            c = n.length;
          n = [...n, a];
          const s = t => {
            const {
              scope: n,
              children: a,
              ...s
            } = t, u = n?.[e]?.[c] || i, l = r.useMemo((() => s), Object.values(s));
            return (0, o.jsx)(u.Provider, {
              value: l,
              children: a
            })
          };
          return s.displayName = t + "Provider", [s, function(n, o) {
            const s = o?.[e]?.[c] || i,
              u = r.useContext(s);
            if (u) return u;
            if (void 0 !== a) return a;
            throw new Error(`\`${n}\` must be used within \`${t}\``)
          }]
        }, c(a, ...t)]
      }

      function c(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const o = n.reduce(((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            })), {});
            return r.useMemo((() => ({
              [`__scope${t.scopeName}`]: o
            })), [o])
          }
        };
        return n.scopeName = t.scopeName, n
      }
    },
    86126: (e, t, n) => {
      var r;
      n.d(t, {
        B: () => s
      });
      var o = n(62229),
        a = n(63155),
        i = (r || (r = n.t(o, 2)))[" useId ".trim().toString()] || (() => {}),
        c = 0;

      function s(e) {
        const [t, n] = o.useState(i());
        return (0, a.N)((() => {
          e || n((e => e ?? String(c++)))
        }), [e]), e || (t ? `radix-${t}` : "")
      }
    },
    89749: (e, t, n) => {
      n.d(t, {
        qW: () => p
      });
      var r, o = n(62229),
        a = n(94118),
        i = n(78004),
        c = n(95362),
        s = n(76286),
        u = n(94040),
        l = n(42295),
        d = "dismissableLayer.update",
        f = o.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        p = o.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: p,
            onPointerDownOutside: h,
            onFocusOutside: y,
            onInteractOutside: g,
            onDismiss: b,
            ...w
          } = e, _ = o.useContext(f), [E, O] = o.useState(null), S = E?.ownerDocument ?? globalThis?.document, [, C] = o.useState({}), P = (0, c.s)(t, (e => O(e))), D = Array.from(_.layers), [N] = [..._.layersWithOutsidePointerEventsDisabled].slice(-1), x = D.indexOf(N), R = E ? D.indexOf(E) : -1, T = _.layersWithOutsidePointerEventsDisabled.size > 0, j = R >= x, I = function(e, t = globalThis?.document) {
            const n = (0, s.c)(e),
              r = o.useRef(!1),
              a = o.useRef((() => {}));
            return o.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      m("dismissableLayer.pointerDownOutside", n, o, {
                        discrete: !0
                      })
                    };
                    const o = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", a.current), a.current = r, t.addEventListener("click", a.current, {
                      once: !0
                    })) : r()
                  } else t.removeEventListener("click", a.current);
                  r.current = !1
                },
                o = window.setTimeout((() => {
                  t.addEventListener("pointerdown", e)
                }), 0);
              return () => {
                window.clearTimeout(o), t.removeEventListener("pointerdown", e), t.removeEventListener("click", a.current)
              }
            }), [t, n]), {
              onPointerDownCapture: () => r.current = !0
            }
          }((e => {
            const t = e.target,
              n = [..._.branches].some((e => e.contains(t)));
            j && !n && (h?.(e), g?.(e), e.defaultPrevented || b?.())
          }), S), M = function(e, t = globalThis?.document) {
            const n = (0, s.c)(e),
              r = o.useRef(!1);
            return o.useEffect((() => {
              const e = e => {
                e.target && !r.current && m("dismissableLayer.focusOutside", n, {
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
            [..._.branches].some((e => e.contains(t))) || (y?.(e), g?.(e), e.defaultPrevented || b?.())
          }), S);
          return (0, u.U)((e => {
            R === _.layers.size - 1 && (p?.(e), !e.defaultPrevented && b && (e.preventDefault(), b()))
          }), S), o.useEffect((() => {
            if (E) return n && (0 === _.layersWithOutsidePointerEventsDisabled.size && (r = S.body.style.pointerEvents, S.body.style.pointerEvents = "none"), _.layersWithOutsidePointerEventsDisabled.add(E)), _.layers.add(E), v(), () => {
              n && 1 === _.layersWithOutsidePointerEventsDisabled.size && (S.body.style.pointerEvents = r)
            }
          }), [E, S, n, _]), o.useEffect((() => () => {
            E && (_.layers.delete(E), _.layersWithOutsidePointerEventsDisabled.delete(E), v())
          }), [E, _]), o.useEffect((() => {
            const e = () => C({});
            return document.addEventListener(d, e), () => document.removeEventListener(d, e)
          }), []), (0, l.jsx)(i.sG.div, {
            ...w,
            ref: P,
            style: {
              pointerEvents: T ? j ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, a.m)(e.onFocusCapture, M.onFocusCapture),
            onBlurCapture: (0, a.m)(e.onBlurCapture, M.onBlurCapture),
            onPointerDownCapture: (0, a.m)(e.onPointerDownCapture, I.onPointerDownCapture)
          })
        }));

      function v() {
        const e = new CustomEvent(d);
        document.dispatchEvent(e)
      }

      function m(e, t, n, {
        discrete: r
      }) {
        const o = n.originalEvent.target,
          a = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), r ? (0, i.hO)(o, a) : o.dispatchEvent(a)
      }
      p.displayName = "DismissableLayer", o.forwardRef(((e, t) => {
        const n = o.useContext(f),
          r = o.useRef(null),
          a = (0, c.s)(t, r);
        return o.useEffect((() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }), [n.branches]), (0, l.jsx)(i.sG.div, {
          ...e,
          ref: a
        })
      })).displayName = "DismissableLayerBranch"
    },
    94040: (e, t, n) => {
      n.d(t, {
        U: () => a
      });
      var r = n(62229),
        o = n(76286);

      function a(e, t = globalThis?.document) {
        const n = (0, o.c)(e);
        r.useEffect((() => {
          const e = e => {
            "Escape" === e.key && n(e)
          };
          return t.addEventListener("keydown", e, {
            capture: !0
          }), () => t.removeEventListener("keydown", e, {
            capture: !0
          })
        }), [n, t])
      }
    },
    94118: (e, t, n) => {
      function r(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }
      n.d(t, {
        m: () => r
      })
    },
    94926: (e, t, n) => {
      n.d(t, {
        Eq: () => s
      });
      var r = new WeakMap,
        o = new WeakMap,
        a = {},
        i = 0,
        c = function(e) {
          return e && (e.host || c(e.parentNode))
        },
        s = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var s = Array.from(Array.isArray(e) ? e : [e]),
            u = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return u ? (s.push.apply(s, Array.from(u.querySelectorAll("[aria-live]"))), function(e, t, n, s) {
            var u = function(e, t) {
              return t.map((function(t) {
                if (e.contains(t)) return t;
                var n = c(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              })).filter((function(e) {
                return Boolean(e)
              }))
            }(t, Array.isArray(e) ? e : [e]);
            a[n] || (a[n] = new WeakMap);
            var l = a[n],
              d = [],
              f = new Set,
              p = new Set(u),
              v = function(e) {
                e && !f.has(e) && (f.add(e), v(e.parentNode))
              };
            u.forEach(v);
            var m = function(e) {
              e && !p.has(e) && Array.prototype.forEach.call(e.children, (function(e) {
                if (f.has(e)) m(e);
                else try {
                  var t = e.getAttribute(s),
                    a = null !== t && "false" !== t,
                    i = (r.get(e) || 0) + 1,
                    c = (l.get(e) || 0) + 1;
                  r.set(e, i), l.set(e, c), d.push(e), 1 === i && a && o.set(e, !0), 1 === c && e.setAttribute(n, "true"), a || e.setAttribute(s, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              }))
            };
            return m(t), f.clear(), i++,
              function() {
                d.forEach((function(e) {
                  var t = r.get(e) - 1,
                    a = l.get(e) - 1;
                  r.set(e, t), l.set(e, a), t || (o.has(e) || e.removeAttribute(s), o.delete(e)), a || e.removeAttribute(n)
                })), --i || (r = new WeakMap, r = new WeakMap, o = new WeakMap, a = {})
              }
          }(s, u, n, "aria-hidden")) : function() {
            return null
          }
        }
    },
    97359: (e, t, n) => {
      n.d(t, {
        A: () => U
      });
      var r = n(78322),
        o = n(62229),
        a = "right-scroll-bar-position",
        i = "width-before-scroll-bar";

      function c(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e
      }
      var s = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        u = new WeakMap;

      function l(e) {
        return e
      }
      var d = function(e) {
          void 0 === e && (e = {});
          var t = function(e, t) {
            void 0 === t && (t = l);
            var n = [],
              r = !1;
            return {
              read: function() {
                if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return n.length ? n[n.length - 1] : e
              },
              useMedium: function(e) {
                var o = t(e, r);
                return n.push(o),
                  function() {
                    n = n.filter((function(e) {
                      return e !== o
                    }))
                  }
              },
              assignSyncMedium: function(e) {
                for (r = !0; n.length;) {
                  var t = n;
                  n = [], t.forEach(e)
                }
                n = {
                  push: function(t) {
                    return e(t)
                  },
                  filter: function() {
                    return n
                  }
                }
              },
              assignMedium: function(e) {
                r = !0;
                var t = [];
                if (n.length) {
                  var o = n;
                  n = [], o.forEach(e), t = n
                }
                var a = function() {
                    var n = t;
                    t = [], n.forEach(e)
                  },
                  i = function() {
                    return Promise.resolve().then(a)
                  };
                i(), n = {
                  push: function(e) {
                    t.push(e), i()
                  },
                  filter: function(e) {
                    return t = t.filter(e), n
                  }
                }
              }
            }
          }(null);
          return t.options = (0, r.__assign)({
            async: !0,
            ssr: !1
          }, e), t
        }(),
        f = function() {},
        p = o.forwardRef((function(e, t) {
          var n = o.useRef(null),
            a = o.useState({
              onScrollCapture: f,
              onWheelCapture: f,
              onTouchMoveCapture: f
            }),
            i = a[0],
            l = a[1],
            p = e.forwardProps,
            v = e.children,
            m = e.className,
            h = e.removeScrollBar,
            y = e.enabled,
            g = e.shards,
            b = e.sideCar,
            w = e.noIsolation,
            _ = e.inert,
            E = e.allowPinchZoom,
            O = e.as,
            S = void 0 === O ? "div" : O,
            C = e.gapMode,
            P = (0, r.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            D = b,
            N = function(e, t) {
              var n, r, a, i = (n = t || null, r = function(t) {
                return e.forEach((function(e) {
                  return c(e, t)
                }))
              }, (a = (0, o.useState)((function() {
                return {
                  value: n,
                  callback: r,
                  facade: {
                    get current() {
                      return a.value
                    },
                    set current(e) {
                      var t = a.value;
                      t !== e && (a.value = e, a.callback(e, t))
                    }
                  }
                }
              }))[0]).callback = r, a.facade);
              return s((function() {
                var t = u.get(i);
                if (t) {
                  var n = new Set(t),
                    r = new Set(e),
                    o = i.current;
                  n.forEach((function(e) {
                    r.has(e) || c(e, null)
                  })), r.forEach((function(e) {
                    n.has(e) || c(e, o)
                  }))
                }
                u.set(i, e)
              }), [e]), i
            }([n, t]),
            x = (0, r.__assign)((0, r.__assign)({}, P), i);
          return o.createElement(o.Fragment, null, y && o.createElement(D, {
            sideCar: d,
            removeScrollBar: h,
            shards: g,
            noIsolation: w,
            inert: _,
            setCallbacks: l,
            allowPinchZoom: !!E,
            lockRef: n,
            gapMode: C
          }), p ? o.cloneElement(o.Children.only(v), (0, r.__assign)((0, r.__assign)({}, x), {
            ref: N
          })) : o.createElement(S, (0, r.__assign)({}, x, {
            className: m,
            ref: N
          }), v))
        }));
      p.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, p.classNames = {
        fullWidth: i,
        zeroRight: a
      };
      var v = function(e) {
        var t = e.sideCar,
          n = (0, r.__rest)(e, ["sideCar"]);
        if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var a = t.read();
        if (!a) throw new Error("Sidecar medium not found");
        return o.createElement(a, (0, r.__assign)({}, n))
      };
      v.isSideCarExport = !0;
      var m = function() {
          var e = 0,
            t = null;
          return {
            add: function(r) {
              var o, a;
              0 == e && (t = function() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var t = n.nc;
                return t && e.setAttribute("nonce", t), e
              }()) && (a = r, (o = t).styleSheet ? o.styleSheet.cssText = a : o.appendChild(document.createTextNode(a)), function(e) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
              }(t)), e++
            },
            remove: function() {
              !--e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
          }
        },
        h = function() {
          var e, t = (e = m(), function(t, n) {
            o.useEffect((function() {
              return e.add(t),
                function() {
                  e.remove()
                }
            }), [t && n])
          });
          return function(e) {
            var n = e.styles,
              r = e.dynamic;
            return t(n, r), null
          }
        },
        y = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        g = function(e) {
          return parseInt(e || "", 10) || 0
        },
        b = h(),
        w = "data-scroll-locked",
        _ = function(e, t, n, r) {
          var o = e.left,
            c = e.top,
            s = e.right,
            u = e.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(u, "px ").concat(r, ";\n  }\n  body[").concat(w, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(c, "px;\n    padding-right: ").concat(s, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(u, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a, " {\n    right: ").concat(u, "px ").concat(r, ";\n  }\n  \n  .").concat(i, " {\n    margin-right: ").concat(u, "px ").concat(r, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(i, " .").concat(i, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(w, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(u, "px;\n  }\n")
        },
        E = function() {
          var e = parseInt(document.body.getAttribute(w) || "0", 10);
          return isFinite(e) ? e : 0
        },
        O = function(e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            a = void 0 === r ? "margin" : r;
          o.useEffect((function() {
            return document.body.setAttribute(w, (E() + 1).toString()),
              function() {
                var e = E() - 1;
                e <= 0 ? document.body.removeAttribute(w) : document.body.setAttribute(w, e.toString())
              }
          }), []);
          var i = o.useMemo((function() {
            return function(e) {
              if (void 0 === e && (e = "margin"), "undefined" == typeof window) return y;
              var t = function(e) {
                  var t = window.getComputedStyle(document.body),
                    n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                    r = t["padding" === e ? "paddingTop" : "marginTop"],
                    o = t["padding" === e ? "paddingRight" : "marginRight"];
                  return [g(n), g(r), g(o)]
                }(e),
                n = document.documentElement.clientWidth,
                r = window.innerWidth;
              return {
                left: t[0],
                top: t[1],
                right: t[2],
                gap: Math.max(0, r - n + t[2] - t[0])
              }
            }(a)
          }), [a]);
          return o.createElement(b, {
            styles: _(i, !t, a, n ? "" : "!important")
          })
        },
        S = !1;
      if ("undefined" != typeof window) try {
        var C = Object.defineProperty({}, "passive", {
          get: function() {
            return S = !0, !0
          }
        });
        window.addEventListener("test", C, C), window.removeEventListener("test", C, C)
      } catch (e) {
        S = !1
      }
      var P = !!S && {
          passive: !1
        },
        D = function(e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return "hidden" !== n[t] && !(n.overflowY === n.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === n[t])
        },
        N = function(e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), x(e, r)) {
              var o = R(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== n.body);
          return !1
        },
        x = function(e, t) {
          return "v" === e ? function(e) {
            return D(e, "overflowY")
          }(t) : function(e) {
            return D(e, "overflowX")
          }(t)
        },
        R = function(e, t) {
          return "v" === e ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(t);
          var n
        },
        T = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        j = function(e) {
          return [e.deltaX, e.deltaY]
        },
        I = function(e) {
          return e && "current" in e ? e.current : e
        },
        M = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        A = 0,
        k = [];

      function L(e) {
        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
      }
      const F = (W = function(e) {
        var t = o.useRef([]),
          n = o.useRef([0, 0]),
          a = o.useRef(),
          i = o.useState(A++)[0],
          c = o.useState(h)[0],
          s = o.useRef(e);
        o.useEffect((function() {
          s.current = e
        }), [e]), o.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(i));
            var t = (0, r.__spreadArray)([e.lockRef.current], (e.shards || []).map(I), !0).filter(Boolean);
            return t.forEach((function(e) {
                return e.classList.add("allow-interactivity-".concat(i))
              })),
              function() {
                document.body.classList.remove("block-interactivity-".concat(i)), t.forEach((function(e) {
                  return e.classList.remove("allow-interactivity-".concat(i))
                }))
              }
          }
        }), [e.inert, e.lockRef.current, e.shards]);
        var u = o.useCallback((function(e, t) {
            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !s.current.allowPinchZoom;
            var r, o = T(e),
              i = n.current,
              c = "deltaX" in e ? e.deltaX : i[0] - o[0],
              u = "deltaY" in e ? e.deltaY : i[1] - o[1],
              l = e.target,
              d = Math.abs(c) > Math.abs(u) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === l.type) return !1;
            var f = N(d, l);
            if (!f) return !0;
            if (f ? r = d : (r = "v" === d ? "h" : "v", f = N(d, l)), !f) return !1;
            if (!a.current && "changedTouches" in e && (c || u) && (a.current = r), !r) return !0;
            var p = a.current || r;
            return function(e, t, n, r) {
              var o = function(e, t) {
                  return "h" === e && "rtl" === t ? -1 : 1
                }(e, window.getComputedStyle(t).direction),
                a = o * r,
                i = n.target,
                c = t.contains(i),
                s = !1,
                u = a > 0,
                l = 0,
                d = 0;
              do {
                var f = R(e, i),
                  p = f[0],
                  v = f[1] - f[2] - o * p;
                (p || v) && x(e, i) && (l += v, d += p), i = i instanceof ShadowRoot ? i.host : i.parentNode
              } while (!c && i !== document.body || c && (t.contains(i) || t === i));
              return (u && (Math.abs(l) < 1 || !1) || !u && (Math.abs(d) < 1 || !1)) && (s = !0), s
            }(p, t, e, "h" === p ? c : u)
          }), []),
          l = o.useCallback((function(e) {
            var n = e;
            if (k.length && k[k.length - 1] === c) {
              var r = "deltaY" in n ? j(n) : T(n),
                o = t.current.filter((function(e) {
                  return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && (t = e.delta, o = r, t[0] === o[0] && t[1] === o[1]);
                  var t, o
                }))[0];
              if (o && o.should) n.cancelable && n.preventDefault();
              else if (!o) {
                var a = (s.current.shards || []).map(I).filter(Boolean).filter((function(e) {
                  return e.contains(n.target)
                }));
                (a.length > 0 ? u(n, a[0]) : !s.current.noIsolation) && n.cancelable && n.preventDefault()
              }
            }
          }), []),
          d = o.useCallback((function(e, n, r, o) {
            var a = {
              name: e,
              delta: n,
              target: r,
              should: o,
              shadowParent: L(r)
            };
            t.current.push(a), setTimeout((function() {
              t.current = t.current.filter((function(e) {
                return e !== a
              }))
            }), 1)
          }), []),
          f = o.useCallback((function(e) {
            n.current = T(e), a.current = void 0
          }), []),
          p = o.useCallback((function(t) {
            d(t.type, j(t), t.target, u(t, e.lockRef.current))
          }), []),
          v = o.useCallback((function(t) {
            d(t.type, T(t), t.target, u(t, e.lockRef.current))
          }), []);
        o.useEffect((function() {
          return k.push(c), e.setCallbacks({
              onScrollCapture: p,
              onWheelCapture: p,
              onTouchMoveCapture: v
            }), document.addEventListener("wheel", l, P), document.addEventListener("touchmove", l, P), document.addEventListener("touchstart", f, P),
            function() {
              k = k.filter((function(e) {
                return e !== c
              })), document.removeEventListener("wheel", l, P), document.removeEventListener("touchmove", l, P), document.removeEventListener("touchstart", f, P)
            }
        }), []);
        var m = e.removeScrollBar,
          y = e.inert;
        return o.createElement(o.Fragment, null, y ? o.createElement(c, {
          styles: M(i)
        }) : null, m ? o.createElement(O, {
          gapMode: e.gapMode
        }) : null)
      }, d.useMedium(W), v);
      var W, B = o.forwardRef((function(e, t) {
        return o.createElement(p, (0, r.__assign)({}, e, {
          ref: t,
          sideCar: F
        }))
      }));
      B.classNames = p.classNames;
      const U = B
    }
  }
]);