try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "65e1dfef-48e9-4a21-8df0-2296becf8fc4", e._sentryDebugIdIdentifier = "sentry-dbid-65e1dfef-48e9-4a21-8df0-2296becf8fc4")
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
  [8033], {
    44752(e, t, n) {
      n.d(t, {
        mK: () => s
      });
      var o = Object.defineProperty,
        r = (e, t) => o(e, "name", {
          value: t,
          configurable: !0
        }),
        i = !("undefined" == typeof window || !window.document || !window.document.createElement);

      function s(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return r(function(o) {
          if (e?.(o), !1 === n || !o || !o.defaultPrevented) return t?.(o)
        }, "handleEvent")
      }

      function c(e) {
        if (!i) throw new Error("Cannot access document outside of the DOM");
        return e?.ownerDocument ?? document
      }

      function l(e) {
        return "IFRAME" === e.tagName
      }
      r(s, "composeEventHandlers"), r(function(e) {
        if (!i) throw new Error("Cannot access window outside of the DOM");
        return e?.ownerDocument?.defaultView ?? window
      }, "getOwnerWindow"), r(c, "getOwnerDocument"), r(function e(t, n = !1) {
        const {
          activeElement: o
        } = c(t);
        if (!o?.nodeName) return null;
        if (l(o) && o.contentDocument) return e(o.contentDocument.body, n);
        if (n) {
          const e = o.getAttribute("aria-activedescendant");
          if (e) {
            const t = c(o).getElementById(e);
            if (t) return t
          }
        }
        return o
      }, "getActiveElement"), r(l, "isFrame")
    },
    76733(e, t, n) {
      n.d(t, {
        D: () => o
      });
      var o = !1
    },
    8033(e, t, n) {
      n.r(t), n.d(t, {
        Accordion: () => F,
        AccordionContent: () => re,
        AccordionHeader: () => te,
        AccordionItem: () => ee,
        AccordionTrigger: () => oe,
        Content: () => ue,
        Header: () => le,
        Item: () => ce,
        Root: () => se,
        Trigger: () => ae,
        createAccordionScope: () => z
      });
      var o = n(93082),
        r = n(72579),
        i = n(24733),
        s = n(85049),
        c = n(44752),
        l = n(15782),
        a = n(658),
        u = n(9608),
        d = n(66646),
        f = n(88918),
        p = n(39793),
        h = Object.defineProperty,
        m = (e, t) => h(e, "name", {
          value: t,
          configurable: !0
        }),
        g = "Collapsible",
        [y, b] = (0, r.A)(g),
        [v, w] = y(g),
        C = o.forwardRef(m(function(e, t) {
          const {
            __scopeCollapsible: n,
            open: r,
            defaultOpen: i,
            disabled: s,
            onOpenChange: c,
            ...u
          } = e, [d, h] = (0, l.i)({
            prop: r,
            defaultProp: i ?? !1,
            onChange: c,
            caller: g
          });
          return (0, p.jsx)(v, {
            scope: n,
            disabled: s,
            contentId: (0, f.B)(),
            open: d,
            onOpenToggle: o.useCallback(() => h(e => !e), [h]),
            children: (0, p.jsx)(a.sG.div, {
              "data-state": O(d),
              "data-disabled": s ? "" : void 0,
              ...u,
              ref: t
            })
          })
        }, "Collapsible")),
        A = o.forwardRef(m(function(e, t) {
          const {
            __scopeCollapsible: n,
            ...o
          } = e, r = w("CollapsibleTrigger", n);
          return (0, p.jsx)(a.sG.button, {
            type: "button",
            "aria-controls": r.open ? r.contentId : void 0,
            "aria-expanded": r.open || !1,
            "data-state": O(r.open),
            "data-disabled": r.disabled ? "" : void 0,
            disabled: r.disabled,
            ...o,
            ref: t,
            onClick: (0, c.mK)(e.onClick, r.onOpenToggle)
          })
        }, "CollapsibleTrigger")),
        x = "CollapsibleContent",
        R = o.forwardRef(m(function(e, t) {
          const {
            forceMount: n,
            ...o
          } = e, r = w(x, e.__scopeCollapsible);
          return (0, p.jsx)(d.C, {
            present: n || r.open,
            children: ({
              present: e
            }) => (0, p.jsx)(N, {
              ...o,
              ref: t,
              present: e
            })
          })
        }, "CollapsibleContent")),
        N = o.forwardRef(m(function(e, t) {
          const {
            __scopeCollapsible: n,
            present: r,
            children: i,
            ...c
          } = e, l = w(x, n), [d, f] = o.useState(r), h = o.useRef(null), m = (0, s.s)(t, h), g = o.useRef(0), y = g.current, b = o.useRef(0), v = b.current, C = l.open || d, A = o.useRef(C), R = o.useRef(void 0);
          return o.useEffect(() => {
            const e = requestAnimationFrame(() => A.current = !1);
            return () => cancelAnimationFrame(e)
          }, []), (0, u.N)(() => {
            const e = h.current;
            if (e) {
              R.current = R.current || {
                transitionDuration: e.style.transitionDuration,
                animationName: e.style.animationName
              }, e.style.transitionDuration = "0s", e.style.animationName = "none";
              const t = e.getBoundingClientRect();
              g.current = t.height, b.current = t.width, A.current || (e.style.transitionDuration = R.current.transitionDuration, e.style.animationName = R.current.animationName), f(r)
            }
          }, [l.open, r]), (0, p.jsx)(a.sG.div, {
            "data-state": O(l.open),
            "data-disabled": l.disabled ? "" : void 0,
            id: l.contentId,
            hidden: !C,
            ...c,
            ref: m,
            style: {
              "--radix-collapsible-content-height": y ? `${y}px` : void 0,
              "--radix-collapsible-content-width": v ? `${v}px` : void 0,
              ...e.style
            },
            children: C && i
          })
        }, "CollapsibleContentImpl"));

      function O(e) {
        return e ? "open" : "closed"
      }
      m(O, "getState");
      var I = C,
        j = A,
        S = R,
        _ = n(12430),
        E = Object.defineProperty,
        k = (e, t) => E(e, "name", {
          value: t,
          configurable: !0
        }),
        M = "Accordion",
        P = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [D, T, L] = (0, i.N)(M),
        [$, z] = (0, r.A)(M, [L, b]),
        U = b(),
        F = o.forwardRef(k(function(e, t) {
          const {
            type: n,
            ...o
          } = e, r = o, i = o;
          return (0, p.jsx)(D.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === n ? (0, p.jsx)(K, {
              ...i,
              ref: t
            }) : (0, p.jsx)(W, {
              ...r,
              ref: t
            })
          })
        }, "Accordion")),
        [H, V] = $(M),
        [B, G] = $(M, {
          collapsible: !1
        }),
        W = o.forwardRef(k(function(e, t) {
          const {
            value: n,
            defaultValue: r,
            onValueChange: i = k(() => {}, "onValueChange"),
            collapsible: s = !1,
            ...c
          } = e, [a, u] = (0, l.i)({
            prop: n,
            defaultProp: r ?? "",
            onChange: i,
            caller: M
          });
          return (0, p.jsx)(H, {
            scope: e.__scopeAccordion,
            value: o.useMemo(() => a ? [a] : [], [a]),
            onItemOpen: u,
            onItemClose: o.useCallback(() => s && u(""), [s, u]),
            children: (0, p.jsx)(B, {
              scope: e.__scopeAccordion,
              collapsible: s,
              children: (0, p.jsx)(X, {
                ...c,
                ref: t
              })
            })
          })
        }, "AccordionImplSingle")),
        K = o.forwardRef(k(function(e, t) {
          const {
            value: n,
            defaultValue: r,
            onValueChange: i = k(() => {}, "onValueChange"),
            ...s
          } = e, [c, a] = (0, l.i)({
            prop: n,
            defaultProp: r ?? [],
            onChange: i,
            caller: M
          }), u = o.useCallback(e => a((t = []) => [...t, e]), [a]), d = o.useCallback(e => a((t = []) => t.filter(t => t !== e)), [a]);
          return (0, p.jsx)(H, {
            scope: e.__scopeAccordion,
            value: c,
            onItemOpen: u,
            onItemClose: d,
            children: (0, p.jsx)(B, {
              scope: e.__scopeAccordion,
              collapsible: !0,
              children: (0, p.jsx)(X, {
                ...s,
                ref: t
              })
            })
          })
        }, "AccordionImplMultiple")),
        [q, Y] = $(M),
        X = o.forwardRef(k(function(e, t) {
          const {
            __scopeAccordion: n,
            disabled: r,
            dir: i,
            orientation: l = "vertical",
            ...u
          } = e, d = o.useRef(null), f = (0, s.s)(d, t), h = T(n), m = "ltr" === (0, _.jH)(i), g = (0, c.mK)(e.onKeyDown, e => {
            if (!P.includes(e.key)) return;
            const t = e.target,
              n = h().filter(e => !e.ref.current?.disabled),
              o = n.findIndex(e => e.ref.current === t),
              r = n.length;
            if (-1 === o) return;
            e.preventDefault();
            let i = o;
            const s = r - 1,
              c = k(() => {
                i = o + 1, i > s && (i = 0)
              }, "moveNext"),
              a = k(() => {
                i = o - 1, i < 0 && (i = s)
              }, "movePrev");
            switch (e.key) {
              case "Home":
                i = 0;
                break;
              case "End":
                i = s;
                break;
              case "ArrowRight":
                "horizontal" === l && (m ? c() : a());
                break;
              case "ArrowDown":
                "vertical" === l && c();
                break;
              case "ArrowLeft":
                "horizontal" === l && (m ? a() : c());
                break;
              case "ArrowUp":
                "vertical" === l && a()
            }
            const u = i % r;
            n[u].ref.current?.focus()
          });
          return (0, p.jsx)(q, {
            scope: n,
            disabled: r,
            direction: i,
            orientation: l,
            children: (0, p.jsx)(D.Slot, {
              scope: n,
              children: (0, p.jsx)(a.sG.div, {
                ...u,
                "data-orientation": l,
                ref: f,
                onKeyDown: r ? void 0 : g
              })
            })
          })
        }, "AccordionImpl")),
        J = "AccordionItem",
        [Q, Z] = $(J),
        ee = o.forwardRef(k(function(e, t) {
          const {
            __scopeAccordion: n,
            value: o,
            ...r
          } = e, i = Y(J, n), s = V(J, n), c = U(n), l = (0, f.B)(), a = o && s.value.includes(o) || !1, u = i.disabled || e.disabled;
          return (0, p.jsx)(Q, {
            scope: n,
            open: a,
            disabled: u,
            triggerId: l,
            children: (0, p.jsx)(I, {
              "data-orientation": i.orientation,
              "data-state": ie(a),
              ...c,
              ...r,
              ref: t,
              disabled: u,
              open: a,
              onOpenChange: e => {
                e ? s.onItemOpen(o) : s.onItemClose(o)
              }
            })
          })
        }, "AccordionItem")),
        te = o.forwardRef(k(function(e, t) {
          const {
            __scopeAccordion: n,
            ...o
          } = e, r = Y(M, n), i = Z("AccordionHeader", n);
          return (0, p.jsx)(a.sG.h3, {
            "data-orientation": r.orientation,
            "data-state": ie(i.open),
            "data-disabled": i.disabled ? "" : void 0,
            ...o,
            ref: t
          })
        }, "AccordionHeader")),
        ne = "AccordionTrigger",
        oe = o.forwardRef(k(function(e, t) {
          const {
            __scopeAccordion: n,
            ...o
          } = e, r = Y(M, n), i = Z(ne, n), s = G(ne, n), c = U(n);
          return (0, p.jsx)(D.ItemSlot, {
            scope: n,
            children: (0, p.jsx)(j, {
              "aria-disabled": i.open && !s.collapsible || void 0,
              "data-orientation": r.orientation,
              id: i.triggerId,
              ...c,
              ...o,
              ref: t
            })
          })
        }, "AccordionTrigger")),
        re = o.forwardRef(k(function(e, t) {
          const {
            __scopeAccordion: n,
            ...o
          } = e, r = Y(M, n), i = Z("AccordionContent", n), s = U(n);
          return (0, p.jsx)(S, {
            role: "region",
            "aria-labelledby": i.triggerId,
            "data-orientation": r.orientation,
            ...s,
            ...o,
            ref: t,
            style: {
              "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
              ...e.style
            }
          })
        }, "AccordionContent"));

      function ie(e) {
        return e ? "open" : "closed"
      }
      k(ie, "getState");
      var se = F,
        ce = ee,
        le = te,
        ae = oe,
        ue = re
    },
    24733(e, t, n) {
      n.d(t, {
        N: () => u
      });
      var o = n(93082),
        r = n(72579),
        i = n(85049),
        s = n(93237),
        c = n(39793),
        l = Object.defineProperty,
        a = (e, t) => l(e, "name", {
          value: t,
          configurable: !0
        });

      function u(e) {
        const t = e + "CollectionProvider",
          [n, l] = (0, r.A)(t),
          [u, d] = n(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          f = a(e => {
            const {
              scope: t,
              children: n
            } = e, r = o.useRef(null), i = o.useRef(new Map).current;
            return (0, c.jsx)(u, {
              scope: t,
              itemMap: i,
              collectionRef: r,
              children: n
            })
          }, "CollectionProvider");
        f.displayName = t;
        const p = e + "CollectionSlot",
          h = (0, s.TL)(p),
          m = o.forwardRef((e, t) => {
            const {
              scope: n,
              children: o
            } = e, r = d(p, n), s = (0, i.s)(t, r.collectionRef);
            return (0, c.jsx)(h, {
              ref: s,
              children: o
            })
          });
        m.displayName = p;
        const g = e + "CollectionItemSlot",
          y = "data-radix-collection-item",
          b = (0, s.TL)(g),
          v = o.forwardRef((e, t) => {
            const {
              scope: n,
              children: r,
              ...s
            } = e, l = o.useRef(null), a = (0, i.s)(t, l), u = d(g, n);
            return o.useEffect(() => (u.itemMap.set(l, {
              ref: l,
              ...s
            }), () => {
              u.itemMap.delete(l)
            })), (0, c.jsx)(b, {
              [y]: "",
              ref: a,
              children: r
            })
          });

        function w(t) {
          const n = d(e + "CollectionConsumer", t);
          return o.useCallback(() => {
            const e = n.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${y}]`));
            return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
          }, [n.collectionRef, n.itemMap])
        }
        return v.displayName = g, a(w, "useCollection"), [{
          Provider: f,
          Slot: m,
          ItemSlot: v
        }, w, l]
      }
      a(u, "createCollection");
      var d = new WeakMap,
        f = class e extends Map {
          static {
            a(this, "OrderedDict")
          }
          #e;
          constructor(e) {
            super(e), this.#e = [...super.keys()], d.set(this, !0)
          }
          set(e, t) {
            return d.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this
          }
          insert(e, t, n) {
            const o = this.has(t),
              r = this.#e.length,
              i = m(e);
            let s = i >= 0 ? i : r + i;
            const c = s < 0 || s >= r ? -1 : s;
            if (c === this.size || o && c === this.size - 1 || -1 === c) return this.set(t, n), this;
            const l = this.size + (o ? 0 : 1);
            i < 0 && s++;
            const a = [...this.#e];
            let u, d = !1;
            for (let e = s; e < l; e++)
              if (s === e) {
                let r = a[e];
                a[e] === t && (r = a[e + 1]), o && this.delete(t), u = this.get(r), this.set(t, n)
              } else {
                d || a[e - 1] !== t || (d = !0);
                const n = a[d ? e : e - 1],
                  o = u;
                u = this.get(n), this.delete(n), this.set(n, o)
              } return this
          }
          with(t, n, o) {
            const r = new e(this);
            return r.insert(t, n, o), r
          }
          before(e) {
            const t = this.#e.indexOf(e) - 1;
            if (!(t < 0)) return this.entryAt(t)
          }
          setBefore(e, t, n) {
            const o = this.#e.indexOf(e);
            return -1 === o ? this : this.insert(o, t, n)
          }
          after(e) {
            let t = this.#e.indexOf(e);
            if (t = -1 === t || t === this.size - 1 ? -1 : t + 1, -1 !== t) return this.entryAt(t)
          }
          setAfter(e, t, n) {
            const o = this.#e.indexOf(e);
            return -1 === o ? this : this.insert(o + 1, t, n)
          }
          first() {
            return this.entryAt(0)
          }
          last() {
            return this.entryAt(-1)
          }
          clear() {
            return this.#e = [], super.clear()
          }
          delete(e) {
            const t = super.delete(e);
            return t && this.#e.splice(this.#e.indexOf(e), 1), t
          }
          deleteAt(e) {
            const t = this.keyAt(e);
            return void 0 !== t && this.delete(t)
          }
          at(e) {
            const t = p(this.#e, e);
            if (void 0 !== t) return this.get(t)
          }
          entryAt(e) {
            const t = p(this.#e, e);
            if (void 0 !== t) return [t, this.get(t)]
          }
          indexOf(e) {
            return this.#e.indexOf(e)
          }
          keyAt(e) {
            return p(this.#e, e)
          }
          from(e, t) {
            const n = this.indexOf(e);
            if (-1 === n) return;
            let o = n + t;
            return o < 0 && (o = 0), o >= this.size && (o = this.size - 1), this.at(o)
          }
          keyFrom(e, t) {
            const n = this.indexOf(e);
            if (-1 === n) return;
            let o = n + t;
            return o < 0 && (o = 0), o >= this.size && (o = this.size - 1), this.keyAt(o)
          }
          find(e, t) {
            let n = 0;
            for (const o of this) {
              if (Reflect.apply(e, t, [o, n, this])) return o;
              n++
            }
          }
          findIndex(e, t) {
            let n = 0;
            for (const o of this) {
              if (Reflect.apply(e, t, [o, n, this])) return n;
              n++
            }
            return -1
          }
          filter(t, n) {
            const o = [];
            let r = 0;
            for (const e of this) Reflect.apply(t, n, [e, r, this]) && o.push(e), r++;
            return new e(o)
          }
          map(t, n) {
            const o = [];
            let r = 0;
            for (const e of this) o.push([e[0], Reflect.apply(t, n, [e, r, this])]), r++;
            return new e(o)
          }
          reduce(...e) {
            const [t, n] = e;
            let o = 0,
              r = n ?? this.at(0);
            for (const n of this) r = 0 === o && 1 === e.length ? n : Reflect.apply(t, this, [r, n, o, this]), o++;
            return r
          }
          reduceRight(...e) {
            const [t, n] = e;
            let o = n ?? this.at(-1);
            for (let n = this.size - 1; n >= 0; n--) {
              const r = this.at(n);
              o = n === this.size - 1 && 1 === e.length ? r : Reflect.apply(t, this, [o, r, n, this])
            }
            return o
          }
          toSorted(t) {
            const n = [...this.entries()].sort(t);
            return new e(n)
          }
          toReversed() {
            const t = new e;
            for (let e = this.size - 1; e >= 0; e--) {
              const n = this.keyAt(e),
                o = this.get(n);
              t.set(n, o)
            }
            return t
          }
          toSpliced(...t) {
            const n = [...this.entries()];
            return n.splice(...t), new e(n)
          }
          slice(t, n) {
            const o = new e;
            let r = this.size - 1;
            if (void 0 === t) return o;
            t < 0 && (t += this.size), void 0 !== n && n > 0 && (r = n - 1);
            for (let e = t; e <= r; e++) {
              const t = this.keyAt(e),
                n = this.get(t);
              o.set(t, n)
            }
            return o
          }
          every(e, t) {
            let n = 0;
            for (const o of this) {
              if (!Reflect.apply(e, t, [o, n, this])) return !1;
              n++
            }
            return !0
          }
          some(e, t) {
            let n = 0;
            for (const o of this) {
              if (Reflect.apply(e, t, [o, n, this])) return !0;
              n++
            }
            return !1
          }
        };

      function p(e, t) {
        if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
        const n = h(e, t);
        return -1 === n ? void 0 : e[n]
      }

      function h(e, t) {
        const n = e.length,
          o = m(t),
          r = o >= 0 ? o : n + o;
        return r < 0 || r >= n ? -1 : r
      }

      function m(e) {
        return e != e || 0 === e ? 0 : Math.trunc(e)
      }

      function g(e, t) {
        if (e === t) return !0;
        if ("object" != typeof e || "object" != typeof t) return !1;
        if (null == e || null == t) return !1;
        const n = Object.keys(e),
          o = Object.keys(t);
        if (n.length !== o.length) return !1;
        for (const o of n) {
          if (!Object.prototype.hasOwnProperty.call(t, o)) return !1;
          if (e[o] !== t[o]) return !1
        }
        return !0
      }

      function y(e, t) {
        return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING)
      }

      function b(e, t) {
        return e[1].element && t[1].element ? y(e[1].element, t[1].element) ? -1 : 1 : 0
      }

      function v(e) {
        return new MutationObserver(t => {
          for (const n of t)
            if ("childList" === n.type) return void e()
        })
      }
      a(p, "at"), a(h, "toSafeIndex"), a(m, "toSafeInteger"), a(function(e) {
        const t = e + "CollectionProvider",
          [n, l] = (0, r.A)(t),
          [u, d] = n(t, {
            collectionElement: null,
            collectionRef: {
              current: null
            },
            collectionRefObject: {
              current: null
            },
            itemMap: new f,
            setItemMap: a(() => {}, "setItemMap")
          }),
          p = a(({
            state: e,
            ...t
          }) => e ? (0, c.jsx)(m, {
            ...t,
            state: e
          }) : (0, c.jsx)(h, {
            ...t
          }), "CollectionProvider");
        p.displayName = t;
        const h = a(e => {
          const t = O();
          return (0, c.jsx)(m, {
            ...e,
            state: t
          })
        }, "CollectionInit");
        h.displayName = t + "Init";
        const m = a(e => {
          const {
            scope: t,
            children: n,
            state: r
          } = e, s = o.useRef(null), [l, a] = o.useState(null), d = (0, i.s)(s, a), [f, p] = r;
          return o.useEffect(() => {
            if (!l) return;
            const e = v(() => {});
            return e.observe(l, {
              childList: !0,
              subtree: !0
            }), () => {
              e.disconnect()
            }
          }, [l]), (0, c.jsx)(u, {
            scope: t,
            itemMap: f,
            setItemMap: p,
            collectionRef: d,
            collectionRefObject: s,
            collectionElement: l,
            children: n
          })
        }, "CollectionProviderImpl");
        m.displayName = t + "Impl";
        const y = e + "CollectionSlot",
          w = (0, s.TL)(y),
          C = o.forwardRef((e, t) => {
            const {
              scope: n,
              children: o
            } = e, r = d(y, n), s = (0, i.s)(t, r.collectionRef);
            return (0, c.jsx)(w, {
              ref: s,
              children: o
            })
          });
        C.displayName = y;
        const A = e + "CollectionItemSlot",
          x = "data-radix-collection-item",
          R = (0, s.TL)(A),
          N = o.forwardRef((e, t) => {
            const {
              scope: n,
              children: r,
              ...s
            } = e, l = o.useRef(null), [a, u] = o.useState(null), p = (0, i.s)(t, l, u), h = d(A, n), {
              setItemMap: m
            } = h, y = o.useRef(s);
            g(y.current, s) || (y.current = s);
            const v = y.current;
            return o.useEffect(() => {
              const e = v;
              return m(t => a ? t.has(a) ? t.set(a, {
                ...e,
                element: a
              }).toSorted(b) : (t.set(a, {
                ...e,
                element: a
              }), t.toSorted(b)) : t), () => {
                m(e => a && e.has(a) ? (e.delete(a), new f(e)) : e)
              }
            }, [a, v, m]), (0, c.jsx)(R, {
              [x]: "",
              ref: p,
              children: r
            })
          });

        function O() {
          return o.useState(new f)
        }

        function I(t) {
          const {
            itemMap: n
          } = d(e + "CollectionConsumer", t);
          return n
        }
        return N.displayName = A, a(O, "useInitCollection"), a(I, "useCollection"), [{
          Provider: p,
          Slot: C,
          ItemSlot: N
        }, {
          createCollectionScope: l,
          useCollection: I,
          useInitCollection: O
        }]
      }, "createCollection"), a(g, "shallowEqual"), a(y, "isElementPreceding"), a(b, "sortByDocumentPosition"), a(v, "getChildListObserver")
    },
    72579(e, t, n) {
      n.d(t, {
        A: () => c
      });
      var o = n(93082),
        r = n(39793),
        i = Object.defineProperty,
        s = (e, t) => i(e, "name", {
          value: t,
          configurable: !0
        });

      function c(e, t = []) {
        let n = [];

        function i(t, i) {
          const c = o.createContext(i);
          c.displayName = t + "Context";
          const l = n.length;
          n = [...n, i];
          const a = s(t => {
            const {
              scope: n,
              children: i,
              ...s
            } = t, a = n?.[e]?.[l] || c, u = o.useMemo(() => s, Object.values(s));
            return (0, r.jsx)(a.Provider, {
              value: u,
              children: i
            })
          }, "Provider");

          function u(n, r, s = {}) {
            const {
              optional: a = !1
            } = s, u = r?.[e]?.[l] || c, d = o.useContext(u);
            if (d) return d;
            if (void 0 !== i) return i;
            if (!a) throw new Error(`\`${n}\` must be used within \`${t}\``)
          }
          return a.displayName = t + "Provider", s(u, "useContext"), [a, u]
        }
        s(i, "createContext");
        const c = s(() => {
          const t = n.map(e => o.createContext(e));
          return s(function(n) {
            const r = n?.[e] || t;
            return o.useMemo(() => ({
              [`__scope${e}`]: {
                ...n,
                [e]: r
              }
            }), [n, r])
          }, "useScope")
        }, "createScope");
        return c.scopeName = e, [i, l(c, ...t)]
      }

      function l(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = s(() => {
          const n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return s(function(e) {
            const r = n.reduce((t, {
              useScope: n,
              scopeName: o
            }) => ({
              ...t,
              ...n(e)[`__scope${o}`]
            }), {});
            return o.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }, "useComposedScopes")
        }, "createScope");
        return n.scopeName = t.scopeName, n
      }
      s(function(e, t) {
        const n = o.createContext(t);
        n.displayName = e + "Context";
        const i = s(e => {
          const {
            children: t,
            ...i
          } = e, s = o.useMemo(() => i, Object.values(i));
          return (0, r.jsx)(n.Provider, {
            value: s,
            children: t
          })
        }, "Provider");

        function c(r, i = {}) {
          const {
            optional: s = !1
          } = i, c = o.useContext(n);
          if (c) return c;
          if (void 0 !== t) return t;
          if (!s) throw new Error(`\`${r}\` must be used within \`${e}\``)
        }
        return i.displayName = e + "Provider", s(c, "useContext"), [i, c]
      }, "createContext"), s(c, "createContextScope"), s(l, "composeContextScopes")
    },
    12430(e, t, n) {
      n.d(t, {
        jH: () => s
      });
      var o = n(93082),
        r = (n(39793), Object.defineProperty),
        i = o.createContext(void 0);

      function s(e) {
        const t = o.useContext(i);
        return e || t || "ltr"
      }
      r(s, "name", {
        value: "useDirection",
        configurable: !0
      })
    },
    88918(e, t, n) {
      let o;
      n.d(t, {
        B: () => a
      });
      var r = n(93082),
        i = n(9608),
        s = Object.defineProperty,
        c = (o || (o = n.t(r, 2)))[" useId ".trim().toString()] || (() => {}),
        l = 0;

      function a(e) {
        const [t, n] = r.useState(c());
        return (0, i.N)(() => {
          e || n(e => e ?? String(l++))
        }, [e]), e || (t ? `radix-${t}` : "")
      }
      s(a, "name", {
        value: "useId",
        configurable: !0
      })
    },
    66646(e, t, n) {
      n.d(t, {
        C: () => l
      });
      var o = n(93082),
        r = n(9608),
        i = Object.defineProperty,
        s = (e, t) => i(e, "name", {
          value: t,
          configurable: !0
        });

      function c(e, t) {
        return o.useReducer((e, n) => t[e][n] ?? e, e)
      }
      s(c, "useStateMachine");
      var l = s(e => {
        const {
          present: t,
          children: n
        } = e, r = a(t), i = "function" == typeof n ? n({
          present: r.isPresent
        }) : o.Children.only(n), s = d(r.ref, p(i));
        return "function" == typeof n || r.isPresent ? o.cloneElement(i, {
          ref: s
        }) : null
      }, "Presence");

      function a(e) {
        const [t, n] = o.useState(), i = o.useRef(null), l = o.useRef(e), a = o.useRef("none"), u = o.useRef(void 0), d = e ? "mounted" : "unmounted", [p, h] = c(d, {
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
        return o.useEffect(() => {
          "mounted" === p ? (a.current = u.current ?? f(i.current), u.current = void 0) : a.current = "none"
        }, [p]), (0, r.N)(() => {
          const t = i.current,
            n = l.current;
          if (n !== e) {
            const o = a.current,
              r = f(t);
            e ? (u.current = r, h("MOUNT")) : h("none" === r || "none" === t?.display ? "UNMOUNT" : n && o !== r ? "ANIMATION_OUT" : "UNMOUNT"), l.current = e
          }
        }, [e, h]), (0, r.N)(() => {
          if (t) {
            let e;
            const n = t.ownerDocument.defaultView ?? window,
              o = s(o => {
                const r = f(i.current).includes(CSS.escape(o.animationName));
                if (o.target === t && r && (h("ANIMATION_END"), !l.current)) {
                  const o = t.style.animationFillMode;
                  t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
                    "forwards" === t.style.animationFillMode && (t.style.animationFillMode = o)
                  })
                }
              }, "handleAnimationEnd"),
              r = s(e => {
                e.target === t && (a.current = f(i.current))
              }, "handleAnimationStart");
            return t.addEventListener("animationstart", r), t.addEventListener("animationcancel", o), t.addEventListener("animationend", o), () => {
              n.clearTimeout(e), t.removeEventListener("animationstart", r), t.removeEventListener("animationcancel", o), t.removeEventListener("animationend", o)
            }
          }
          h("ANIMATION_END")
        }, [t, h]), {
          isPresent: ["mounted", "unmountSuspended"].includes(p),
          ref: o.useCallback(e => {
            if (e) {
              const t = getComputedStyle(e);
              i.current = t, u.current = f(t)
            } else i.current = null;
            n(e)
          }, [])
        }
      }

      function u(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function d(...e) {
        const t = o.useRef(e);
        return t.current = e, o.useCallback(e => {
          const n = t.current;
          let o = !1;
          const r = n.map(t => {
            const n = u(t, e);
            return o || "function" != typeof n || (o = !0), n
          });
          if (o) return () => {
            for (let e = 0; e < r.length; e++) {
              const t = r[e];
              "function" == typeof t ? t() : u(n[e], null)
            }
          }
        }, [])
      }

      function f(e) {
        return e?.animationName || "none"
      }

      function p(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
          n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
      }
      s(a, "usePresence"), s(u, "setRef"), s(d, "useStableComposedRefs"), s(f, "getAnimationName"), s(p, "getElementRef")
    },
    15782(e, t, n) {
      n.d(t, {
        i: () => h
      });
      var o = n(93082),
        r = n.t(o, 2),
        i = n(76733),
        s = n(9608),
        c = Object.defineProperty,
        l = r[" useEffectEvent ".trim().toString()],
        a = r[" useInsertionEffect ".trim().toString()];

      function u(e) {
        if ("function" == typeof l) return l(e);
        const t = o.useRef(() => {
          throw new Error("Cannot call an event handler while rendering.")
        });
        return "function" == typeof a ? a(() => {
          t.current = e
        }) : (0, s.N)(() => {
          t.current = e
        }), o.useMemo(() => (...e) => t.current?.(...e), [])
      }
      c(u, "name", {
        value: "useEffectEvent",
        configurable: !0
      });
      var d = Object.defineProperty,
        f = (e, t) => d(e, "name", {
          value: t,
          configurable: !0
        }),
        p = r[" useInsertionEffect ".trim().toString()] || s.N;

      function h({
        prop: e,
        defaultProp: t,
        onChange: n = f(() => {}, "onChange"),
        caller: r
      }) {
        const [s, c, l] = m({
          defaultProp: t,
          onChange: n
        }), a = void 0 !== e, u = a ? e : s;
        if (i.D) {
          const t = o.useRef(void 0 !== e);
          o.useEffect(() => {
            const e = t.current;
            if (e !== a) {
              const t = e ? "controlled" : "uncontrolled",
                n = a ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            t.current = a
          }, [a, r])
        }
        return [u, o.useCallback(t => {
          if (a) {
            const n = g(t) ? t(e) : t;
            n !== e && l.current?.(n)
          } else c(t)
        }, [a, e, c, l])]
      }

      function m({
        defaultProp: e,
        onChange: t
      }) {
        const [n, r] = o.useState(e), i = o.useRef(n), s = o.useRef(t);
        return p(() => {
          s.current = t
        }, [t]), o.useEffect(() => {
          i.current !== n && (s.current?.(n), i.current = n)
        }, [n, i]), [n, r, s]
      }

      function g(e) {
        return "function" == typeof e
      }
      f(h, "useControllableState"), f(m, "useUncontrolledState"), f(g, "isFunction");
      var y = Symbol("RADIX:SYNC_STATE");
      f(function(e, t, n, r) {
        const {
          prop: s,
          defaultProp: c,
          onChange: l,
          caller: a
        } = t, d = void 0 !== s, f = u(l);
        if (i.D) {
          const e = o.useRef(void 0 !== s);
          o.useEffect(() => {
            const t = e.current;
            if (t !== d) {
              const e = t ? "controlled" : "uncontrolled",
                n = d ? "controlled" : "uncontrolled";
              console.warn(`${a} is changing from ${e} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            e.current = d
          }, [d, a])
        }
        const p = [{
          ...n,
          state: c
        }];
        r && p.push(r);
        const [h, m] = o.useReducer((t, n) => {
          if (n.type === y) return {
            ...t,
            state: n.state
          };
          const o = e(t, n);
          return d && !Object.is(o.state, t.state) && f(o.state), o
        }, ...p), g = h.state, b = o.useRef(g);
        o.useEffect(() => {
          b.current !== g && (b.current = g, d || f(g))
        }, [g, b, d]);
        const v = o.useMemo(() => void 0 !== s ? {
          ...h,
          state: s
        } : h, [h, s]);
        return o.useEffect(() => {
          d && !Object.is(s, h.state) && m({
            type: y,
            state: s
          })
        }, [s, h.state, d]), [v, m]
      }, "useControllableStateReducer")
    },
    9608(e, t, n) {
      n.d(t, {
        N: () => r
      });
      var o = n(93082),
        r = globalThis?.document ? o.useLayoutEffect : () => {}
    }
  }
]);