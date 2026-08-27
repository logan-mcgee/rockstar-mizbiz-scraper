try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a0eecd1a-7079-4f42-b073-4111cb681887", e._sentryDebugIdIdentifier = "sentry-dbid-a0eecd1a-7079-4f42-b073-4111cb681887")
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
  [5693], {
    97620(e, t, n) {
      n.d(t, {
        N: () => a
      });
      var r = n(93082),
        s = n(72579),
        i = n(85049),
        o = n(93237),
        l = n(39793),
        c = Object.defineProperty,
        u = (e, t) => c(e, "name", {
          value: t,
          configurable: !0
        });

      function a(e) {
        const t = e + "CollectionProvider",
          [n, c] = (0, s.A)(t),
          [a, f] = n(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          d = u(e => {
            const {
              scope: t,
              children: n
            } = e, s = r.useRef(null), i = r.useRef(new Map).current;
            return (0, l.jsx)(a, {
              scope: t,
              itemMap: i,
              collectionRef: s,
              children: n
            })
          }, "CollectionProvider");
        d.displayName = t;
        const h = e + "CollectionSlot",
          p = (0, o.TL)(h),
          y = r.forwardRef((e, t) => {
            const {
              scope: n,
              children: r
            } = e, s = f(h, n), o = (0, i.s)(t, s.collectionRef);
            return (0, l.jsx)(p, {
              ref: o,
              children: r
            })
          });
        y.displayName = h;
        const m = e + "CollectionItemSlot",
          g = "data-radix-collection-item",
          b = (0, o.TL)(m),
          w = r.forwardRef((e, t) => {
            const {
              scope: n,
              children: s,
              ...o
            } = e, c = r.useRef(null), u = (0, i.s)(t, c), a = f(m, n);
            return r.useEffect(() => (a.itemMap.set(c, {
              ref: c,
              ...o
            }), () => {
              a.itemMap.delete(c)
            })), (0, l.jsx)(b, {
              [g]: "",
              ref: u,
              children: s
            })
          });

        function R(t) {
          const n = f(e + "CollectionConsumer", t);
          return r.useCallback(() => {
            const e = n.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${g}]`));
            return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
          }, [n.collectionRef, n.itemMap])
        }
        return w.displayName = m, u(R, "useCollection"), [{
          Provider: d,
          Slot: y,
          ItemSlot: w
        }, R, c]
      }
      u(a, "createCollection");
      var f = new WeakMap,
        d = class e extends Map {
          static {
            u(this, "OrderedDict")
          }
          #e;
          constructor(e) {
            super(e), this.#e = [...super.keys()], f.set(this, !0)
          }
          set(e, t) {
            return f.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this
          }
          insert(e, t, n) {
            const r = this.has(t),
              s = this.#e.length,
              i = y(e);
            let o = i >= 0 ? i : s + i;
            const l = o < 0 || o >= s ? -1 : o;
            if (l === this.size || r && l === this.size - 1 || -1 === l) return this.set(t, n), this;
            const c = this.size + (r ? 0 : 1);
            i < 0 && o++;
            const u = [...this.#e];
            let a, f = !1;
            for (let e = o; e < c; e++)
              if (o === e) {
                let s = u[e];
                u[e] === t && (s = u[e + 1]), r && this.delete(t), a = this.get(s), this.set(t, n)
              } else {
                f || u[e - 1] !== t || (f = !0);
                const n = u[f ? e : e - 1],
                  r = a;
                a = this.get(n), this.delete(n), this.set(n, r)
              } return this
          }
          with(t, n, r) {
            const s = new e(this);
            return s.insert(t, n, r), s
          }
          before(e) {
            const t = this.#e.indexOf(e) - 1;
            if (!(t < 0)) return this.entryAt(t)
          }
          setBefore(e, t, n) {
            const r = this.#e.indexOf(e);
            return -1 === r ? this : this.insert(r, t, n)
          }
          after(e) {
            let t = this.#e.indexOf(e);
            if (t = -1 === t || t === this.size - 1 ? -1 : t + 1, -1 !== t) return this.entryAt(t)
          }
          setAfter(e, t, n) {
            const r = this.#e.indexOf(e);
            return -1 === r ? this : this.insert(r + 1, t, n)
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
            const t = h(this.#e, e);
            if (void 0 !== t) return this.get(t)
          }
          entryAt(e) {
            const t = h(this.#e, e);
            if (void 0 !== t) return [t, this.get(t)]
          }
          indexOf(e) {
            return this.#e.indexOf(e)
          }
          keyAt(e) {
            return h(this.#e, e)
          }
          from(e, t) {
            const n = this.indexOf(e);
            if (-1 === n) return;
            let r = n + t;
            return r < 0 && (r = 0), r >= this.size && (r = this.size - 1), this.at(r)
          }
          keyFrom(e, t) {
            const n = this.indexOf(e);
            if (-1 === n) return;
            let r = n + t;
            return r < 0 && (r = 0), r >= this.size && (r = this.size - 1), this.keyAt(r)
          }
          find(e, t) {
            let n = 0;
            for (const r of this) {
              if (Reflect.apply(e, t, [r, n, this])) return r;
              n++
            }
          }
          findIndex(e, t) {
            let n = 0;
            for (const r of this) {
              if (Reflect.apply(e, t, [r, n, this])) return n;
              n++
            }
            return -1
          }
          filter(t, n) {
            const r = [];
            let s = 0;
            for (const e of this) Reflect.apply(t, n, [e, s, this]) && r.push(e), s++;
            return new e(r)
          }
          map(t, n) {
            const r = [];
            let s = 0;
            for (const e of this) r.push([e[0], Reflect.apply(t, n, [e, s, this])]), s++;
            return new e(r)
          }
          reduce(...e) {
            const [t, n] = e;
            let r = 0,
              s = n ?? this.at(0);
            for (const n of this) s = 0 === r && 1 === e.length ? n : Reflect.apply(t, this, [s, n, r, this]), r++;
            return s
          }
          reduceRight(...e) {
            const [t, n] = e;
            let r = n ?? this.at(-1);
            for (let n = this.size - 1; n >= 0; n--) {
              const s = this.at(n);
              r = n === this.size - 1 && 1 === e.length ? s : Reflect.apply(t, this, [r, s, n, this])
            }
            return r
          }
          toSorted(t) {
            const n = [...this.entries()].sort(t);
            return new e(n)
          }
          toReversed() {
            const t = new e;
            for (let e = this.size - 1; e >= 0; e--) {
              const n = this.keyAt(e),
                r = this.get(n);
              t.set(n, r)
            }
            return t
          }
          toSpliced(...t) {
            const n = [...this.entries()];
            return n.splice(...t), new e(n)
          }
          slice(t, n) {
            const r = new e;
            let s = this.size - 1;
            if (void 0 === t) return r;
            t < 0 && (t += this.size), void 0 !== n && n > 0 && (s = n - 1);
            for (let e = t; e <= s; e++) {
              const t = this.keyAt(e),
                n = this.get(t);
              r.set(t, n)
            }
            return r
          }
          every(e, t) {
            let n = 0;
            for (const r of this) {
              if (!Reflect.apply(e, t, [r, n, this])) return !1;
              n++
            }
            return !0
          }
          some(e, t) {
            let n = 0;
            for (const r of this) {
              if (Reflect.apply(e, t, [r, n, this])) return !0;
              n++
            }
            return !1
          }
        };

      function h(e, t) {
        if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
        const n = p(e, t);
        return -1 === n ? void 0 : e[n]
      }

      function p(e, t) {
        const n = e.length,
          r = y(t),
          s = r >= 0 ? r : n + r;
        return s < 0 || s >= n ? -1 : s
      }

      function y(e) {
        return e != e || 0 === e ? 0 : Math.trunc(e)
      }

      function m(e, t) {
        if (e === t) return !0;
        if ("object" != typeof e || "object" != typeof t) return !1;
        if (null == e || null == t) return !1;
        const n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (const r of n) {
          if (!Object.prototype.hasOwnProperty.call(t, r)) return !1;
          if (e[r] !== t[r]) return !1
        }
        return !0
      }

      function g(e, t) {
        return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING)
      }

      function b(e, t) {
        return e[1].element && t[1].element ? g(e[1].element, t[1].element) ? -1 : 1 : 0
      }

      function w(e) {
        return new MutationObserver(t => {
          for (const n of t)
            if ("childList" === n.type) return void e()
        })
      }
      u(h, "at"), u(p, "toSafeIndex"), u(y, "toSafeInteger"), u(function(e) {
        const t = e + "CollectionProvider",
          [n, c] = (0, s.A)(t),
          [a, f] = n(t, {
            collectionElement: null,
            collectionRef: {
              current: null
            },
            collectionRefObject: {
              current: null
            },
            itemMap: new d,
            setItemMap: u(() => {}, "setItemMap")
          }),
          h = u(({
            state: e,
            ...t
          }) => e ? (0, l.jsx)(y, {
            ...t,
            state: e
          }) : (0, l.jsx)(p, {
            ...t
          }), "CollectionProvider");
        h.displayName = t;
        const p = u(e => {
          const t = C();
          return (0, l.jsx)(y, {
            ...e,
            state: t
          })
        }, "CollectionInit");
        p.displayName = t + "Init";
        const y = u(e => {
          const {
            scope: t,
            children: n,
            state: s
          } = e, o = r.useRef(null), [c, u] = r.useState(null), f = (0, i.s)(o, u), [d, h] = s;
          return r.useEffect(() => {
            if (!c) return;
            const e = w(() => {});
            return e.observe(c, {
              childList: !0,
              subtree: !0
            }), () => {
              e.disconnect()
            }
          }, [c]), (0, l.jsx)(a, {
            scope: t,
            itemMap: d,
            setItemMap: h,
            collectionRef: f,
            collectionRefObject: o,
            collectionElement: c,
            children: n
          })
        }, "CollectionProviderImpl");
        y.displayName = t + "Impl";
        const g = e + "CollectionSlot",
          R = (0, o.TL)(g),
          M = r.forwardRef((e, t) => {
            const {
              scope: n,
              children: r
            } = e, s = f(g, n), o = (0, i.s)(t, s.collectionRef);
            return (0, l.jsx)(R, {
              ref: o,
              children: r
            })
          });
        M.displayName = g;
        const O = e + "CollectionItemSlot",
          k = "data-radix-collection-item",
          N = (0, o.TL)(O),
          v = r.forwardRef((e, t) => {
            const {
              scope: n,
              children: s,
              ...o
            } = e, c = r.useRef(null), [u, a] = r.useState(null), h = (0, i.s)(t, c, a), p = f(O, n), {
              setItemMap: y
            } = p, g = r.useRef(o);
            m(g.current, o) || (g.current = o);
            const w = g.current;
            return r.useEffect(() => {
              const e = w;
              return y(t => u ? t.has(u) ? t.set(u, {
                ...e,
                element: u
              }).toSorted(b) : (t.set(u, {
                ...e,
                element: u
              }), t.toSorted(b)) : t), () => {
                y(e => u && e.has(u) ? (e.delete(u), new d(e)) : e)
              }
            }, [u, w, y]), (0, l.jsx)(N, {
              [k]: "",
              ref: h,
              children: s
            })
          });

        function C() {
          return r.useState(new d)
        }

        function I(t) {
          const {
            itemMap: n
          } = f(e + "CollectionConsumer", t);
          return n
        }
        return v.displayName = O, u(C, "useInitCollection"), u(I, "useCollection"), [{
          Provider: h,
          Slot: M,
          ItemSlot: v
        }, {
          createCollectionScope: c,
          useCollection: I,
          useInitCollection: C
        }]
      }, "createCollection"), u(m, "shallowEqual"), u(g, "isElementPreceding"), u(b, "sortByDocumentPosition"), u(w, "getChildListObserver")
    },
    81432(e, t, n) {
      n.d(t, {
        C: () => c
      });
      var r = n(93082),
        s = n(9608),
        i = Object.defineProperty,
        o = (e, t) => i(e, "name", {
          value: t,
          configurable: !0
        });

      function l(e, t) {
        return r.useReducer((e, n) => t[e][n] ?? e, e)
      }
      o(l, "useStateMachine");
      var c = o(e => {
        const {
          present: t,
          children: n
        } = e, s = u(t), i = "function" == typeof n ? n({
          present: s.isPresent
        }) : r.Children.only(n), o = f(s.ref, h(i));
        return "function" == typeof n || s.isPresent ? r.cloneElement(i, {
          ref: o
        }) : null
      }, "Presence");

      function u(e) {
        const [t, n] = r.useState(), i = r.useRef(null), c = r.useRef(e), u = r.useRef("none"), a = r.useRef(void 0), f = e ? "mounted" : "unmounted", [h, p] = l(f, {
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
        return r.useEffect(() => {
          "mounted" === h ? (u.current = a.current ?? d(i.current), a.current = void 0) : u.current = "none"
        }, [h]), (0, s.N)(() => {
          const t = i.current,
            n = c.current;
          if (n !== e) {
            const r = u.current,
              s = d(t);
            e ? (a.current = s, p("MOUNT")) : p("none" === s || "none" === t?.display ? "UNMOUNT" : n && r !== s ? "ANIMATION_OUT" : "UNMOUNT"), c.current = e
          }
        }, [e, p]), (0, s.N)(() => {
          if (t) {
            let e;
            const n = t.ownerDocument.defaultView ?? window,
              r = o(r => {
                const s = d(i.current).includes(CSS.escape(r.animationName));
                if (r.target === t && s && (p("ANIMATION_END"), !c.current)) {
                  const r = t.style.animationFillMode;
                  t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
                    "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r)
                  })
                }
              }, "handleAnimationEnd"),
              s = o(e => {
                e.target === t && (u.current = d(i.current))
              }, "handleAnimationStart");
            return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", r), t.addEventListener("animationend", r), () => {
              n.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", r), t.removeEventListener("animationend", r)
            }
          }
          p("ANIMATION_END")
        }, [t, p]), {
          isPresent: ["mounted", "unmountSuspended"].includes(h),
          ref: r.useCallback(e => {
            if (e) {
              const t = getComputedStyle(e);
              i.current = t, a.current = d(t)
            } else i.current = null;
            n(e)
          }, [])
        }
      }

      function a(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function f(...e) {
        const t = r.useRef(e);
        return t.current = e, r.useCallback(e => {
          const n = t.current;
          let r = !1;
          const s = n.map(t => {
            const n = a(t, e);
            return r || "function" != typeof n || (r = !0), n
          });
          if (r) return () => {
            for (let e = 0; e < s.length; e++) {
              const t = s[e];
              "function" == typeof t ? t() : a(n[e], null)
            }
          }
        }, [])
      }

      function d(e) {
        return e?.animationName || "none"
      }

      function h(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
          n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
      }
      o(u, "usePresence"), o(a, "setRef"), o(f, "useStableComposedRefs"), o(d, "getAnimationName"), o(h, "getElementRef")
    }
  }
]);