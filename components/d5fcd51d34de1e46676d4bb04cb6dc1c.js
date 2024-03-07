! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0fbe8e73-40c6-4c75-a0e3-7e48ddd9a122", e._sentryDebugIdIdentifier = "sentry-dbid-0fbe8e73-40c6-4c75-a0e3-7e48ddd9a122")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "e8d5757fcf21c8613f3e751c4f0ebef98e69c465",
  packageName: "@rockstargames/components",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "e8d5757fcf21c8613f3e751c4f0ebef98e69c465"
}, (self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || []).push([
  [952], {
    2952: (e, t, n) => {
      n.r(t), n.d(t, {
        actions: () => D,
        addAction: () => _,
        addFilter: () => m,
        applyFilters: () => w,
        createHooks: () => h,
        currentAction: () => I,
        currentFilter: () => x,
        defaultHooks: () => p,
        didAction: () => M,
        didFilter: () => z,
        doAction: () => F,
        doingAction: () => E,
        doingFilter: () => T,
        filters: () => R,
        hasAction: () => b,
        hasFilter: () => y,
        removeAction: () => g,
        removeAllActions: () => v,
        removeAllFilters: () => k,
        removeFilter: () => A
      });
      const r = function(e) {
          return "string" != typeof e || "" === e ? (console.error("The namespace must be a non-empty string."), !1) : !!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(e) || (console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."), !1)
        },
        o = function(e) {
          return "string" != typeof e || "" === e ? (console.error("The hook name must be a non-empty string."), !1) : /^__/.test(e) ? (console.error("The hook name cannot begin with `__`."), !1) : !!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(e) || (console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."), !1)
        },
        i = function(e, t) {
          return function(n, i, s) {
            let c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
            const l = e[t];
            if (!o(n)) return;
            if (!r(i)) return;
            if ("function" != typeof s) return void console.error("The hook callback must be a function.");
            if ("number" != typeof c) return void console.error("If specified, the hook priority must be a number.");
            const a = {
              callback: s,
              priority: c,
              namespace: i
            };
            if (l[n]) {
              const e = l[n].handlers;
              let t;
              for (t = e.length; t > 0 && !(c >= e[t - 1].priority); t--);
              t === e.length ? e[t] = a : e.splice(t, 0, a), l.__current.forEach((e => {
                e.name === n && e.currentIndex >= t && e.currentIndex++
              }))
            } else l[n] = {
              handlers: [a],
              runs: 0
            };
            "hookAdded" !== n && e.doAction("hookAdded", n, i, s, c)
          }
        },
        s = function(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(i, s) {
            const c = e[t];
            if (!o(i)) return;
            if (!n && !r(s)) return;
            if (!c[i]) return 0;
            let l = 0;
            if (n) l = c[i].handlers.length, c[i] = {
              runs: c[i].runs,
              handlers: []
            };
            else {
              const e = c[i].handlers;
              for (let t = e.length - 1; t >= 0; t--) e[t].namespace === s && (e.splice(t, 1), l++, c.__current.forEach((e => {
                e.name === i && e.currentIndex >= t && e.currentIndex--
              })))
            }
            return "hookRemoved" !== i && e.doAction("hookRemoved", i, s), l
          }
        },
        c = function(e, t) {
          return function(n, r) {
            const o = e[t];
            return void 0 !== r ? n in o && o[n].handlers.some((e => e.namespace === r)) : n in o
          }
        },
        l = function(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(r) {
            const o = e[t];
            o[r] || (o[r] = {
              handlers: [],
              runs: 0
            }), o[r].runs++;
            const i = o[r].handlers;
            for (var s = arguments.length, c = new Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++) c[l - 1] = arguments[l];
            if (!i || !i.length) return n ? c[0] : void 0;
            const a = {
              name: r,
              currentIndex: 0
            };
            for (o.__current.push(a); a.currentIndex < i.length;) {
              const e = i[a.currentIndex].callback.apply(null, c);
              n && (c[0] = e), a.currentIndex++
            }
            return o.__current.pop(), n ? c[0] : void 0
          }
        },
        a = function(e, t) {
          return function() {
            var n;
            const r = e[t];
            return null !== (n = r.__current[r.__current.length - 1]?.name) && void 0 !== n ? n : null
          }
        },
        d = function(e, t) {
          return function(n) {
            const r = e[t];
            return void 0 === n ? void 0 !== r.__current[0] : !!r.__current[0] && n === r.__current[0].name
          }
        },
        u = function(e, t) {
          return function(n) {
            const r = e[t];
            if (o(n)) return r[n] && r[n].runs ? r[n].runs : 0
          }
        };
      class f {
        constructor() {
          this.actions = Object.create(null), this.actions.__current = [], this.filters = Object.create(null), this.filters.__current = [], this.addAction = i(this, "actions"), this.addFilter = i(this, "filters"), this.removeAction = s(this, "actions"), this.removeFilter = s(this, "filters"), this.hasAction = c(this, "actions"), this.hasFilter = c(this, "filters"), this.removeAllActions = s(this, "actions", !0), this.removeAllFilters = s(this, "filters", !0), this.doAction = l(this, "actions"), this.applyFilters = l(this, "filters", !0), this.currentAction = a(this, "actions"), this.currentFilter = a(this, "filters"), this.doingAction = d(this, "actions"), this.doingFilter = d(this, "filters"), this.didAction = u(this, "actions"), this.didFilter = u(this, "filters")
        }
      }
      const h = function() {
          return new f
        },
        p = h(),
        {
          addAction: _,
          addFilter: m,
          removeAction: g,
          removeFilter: A,
          hasAction: b,
          hasFilter: y,
          removeAllActions: v,
          removeAllFilters: k,
          doAction: F,
          applyFilters: w,
          currentAction: I,
          currentFilter: x,
          doingAction: E,
          doingFilter: T,
          didAction: M,
          didFilter: z,
          actions: D,
          filters: R
        } = p
    }
  }
]);
//# sourceMappingURL=d5fcd51d34de1e46676d4bb04cb6dc1c.js.map