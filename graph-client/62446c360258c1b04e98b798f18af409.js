"use strict";
(self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [848], {
    7915: (t, e, n) => {
      n.d(e, {
        dP: () => z,
        re: () => P
      });
      var r = function() {
          return Object.create(null)
        },
        i = Array.prototype,
        s = i.forEach,
        o = i.slice,
        u = function() {
          function t(t, e) {
            void 0 === t && (t = !0), void 0 === e && (e = r), this.weakness = t, this.makeData = e
          }
          return t.prototype.lookup = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return this.lookupArray(t)
          }, t.prototype.lookupArray = function(t) {
            var e = this;
            return s.call(t, (function(t) {
              return e = e.getChildTrie(t)
            })), e.data || (e.data = this.makeData(o.call(t)))
          }, t.prototype.getChildTrie = function(e) {
            var n = this.weakness && function(t) {
                switch (typeof t) {
                  case "object":
                    if (null === t) break;
                  case "function":
                    return !0
                }
                return !1
              }(e) ? this.weak || (this.weak = new WeakMap) : this.strong || (this.strong = new Map),
              r = n.get(e);
            return r || n.set(e, r = new t(this.weakness, this.makeData)), r
          }, t
        }(),
        a = n(4684);

      function l() {}
      var c, h = function() {
          function t(t, e) {
            void 0 === t && (t = 1 / 0), void 0 === e && (e = l), this.max = t, this.dispose = e, this.map = new Map, this.newest = null, this.oldest = null
          }
          return t.prototype.has = function(t) {
            return this.map.has(t)
          }, t.prototype.get = function(t) {
            var e = this.getNode(t);
            return e && e.value
          }, t.prototype.getNode = function(t) {
            var e = this.map.get(t);
            if (e && e !== this.newest) {
              var n = e.older,
                r = e.newer;
              r && (r.older = n), n && (n.newer = r), e.older = this.newest, e.older.newer = e, e.newer = null, this.newest = e, e === this.oldest && (this.oldest = r)
            }
            return e
          }, t.prototype.set = function(t, e) {
            var n = this.getNode(t);
            return n ? n.value = e : (n = {
              key: t,
              value: e,
              newer: null,
              older: this.newest
            }, this.newest && (this.newest.newer = n), this.newest = n, this.oldest = this.oldest || n, this.map.set(t, n), n.value)
          }, t.prototype.clean = function() {
            for (; this.oldest && this.map.size > this.max;) this.delete(this.oldest.key)
          }, t.prototype.delete = function(t) {
            var e = this.map.get(t);
            return !!e && (e === this.newest && (this.newest = e.older), e === this.oldest && (this.oldest = e.newer), e.newer && (e.newer.older = e.older), e.older && (e.older.newer = e.newer), this.map.delete(t), this.dispose(e.value, t), !0)
          }, t
        }(),
        f = new a.g7,
        p = Object.prototype.hasOwnProperty,
        d = void 0 === (c = Array.from) ? function(t) {
          var e = [];
          return t.forEach((function(t) {
            return e.push(t)
          })), e
        } : c;

      function y(t) {
        var e = t.unsubscribe;
        "function" == typeof e && (t.unsubscribe = void 0, e())
      }
      var v = [],
        g = 100;

      function w(t, e) {
        if (!t) throw new Error(e || "assertion failure")
      }

      function b(t) {
        switch (t.length) {
          case 0:
            throw new Error("unknown value");
          case 1:
            return t[0];
          case 2:
            throw t[1]
        }
      }
      var k = function() {
        function t(e) {
          this.fn = e, this.parents = new Set, this.childValues = new Map, this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++t.count
        }
        return t.prototype.peek = function() {
          if (1 === this.value.length && !V(this)) return m(this), this.value[0]
        }, t.prototype.recompute = function(t) {
          return w(!this.recomputing, "already recomputing"), m(this), V(this) ? function(t, e) {
            return A(t), f.withValue(t, C, [t, e]),
              function(t, e) {
                if ("function" == typeof t.subscribe) try {
                  y(t), t.unsubscribe = t.subscribe.apply(null, e)
                } catch (e) {
                  return t.setDirty(), !1
                }
                return !0
              }(t, e) && function(t) {
                t.dirty = !1, V(t) || E(t)
              }(t), b(t.value)
          }(this, t) : b(this.value)
        }, t.prototype.setDirty = function() {
          this.dirty || (this.dirty = !0, this.value.length = 0, D(this), y(this))
        }, t.prototype.dispose = function() {
          var t = this;
          this.setDirty(), A(this), S(this, (function(e, n) {
            e.setDirty(), M(e, t)
          }))
        }, t.prototype.forget = function() {
          this.dispose()
        }, t.prototype.dependOn = function(t) {
          t.add(this), this.deps || (this.deps = v.pop() || new Set), this.deps.add(t)
        }, t.prototype.forgetDeps = function() {
          var t = this;
          this.deps && (d(this.deps).forEach((function(e) {
            return e.delete(t)
          })), this.deps.clear(), v.push(this.deps), this.deps = null)
        }, t.count = 0, t
      }();

      function m(t) {
        var e = f.getValue();
        if (e) return t.parents.add(e), e.childValues.has(t) || e.childValues.set(t, []), V(t) ? _(e, t) : O(e, t), e
      }

      function C(t, e) {
        t.recomputing = !0, t.value.length = 0;
        try {
          t.value[0] = t.fn.apply(null, e)
        } catch (e) {
          t.value[1] = e
        }
        t.recomputing = !1
      }

      function V(t) {
        return t.dirty || !(!t.dirtyChildren || !t.dirtyChildren.size)
      }

      function D(t) {
        S(t, _)
      }

      function E(t) {
        S(t, O)
      }

      function S(t, e) {
        var n = t.parents.size;
        if (n)
          for (var r = d(t.parents), i = 0; i < n; ++i) e(r[i], t)
      }

      function _(t, e) {
        w(t.childValues.has(e)), w(V(e));
        var n = !V(t);
        if (t.dirtyChildren) {
          if (t.dirtyChildren.has(e)) return
        } else t.dirtyChildren = v.pop() || new Set;
        t.dirtyChildren.add(e), n && D(t)
      }

      function O(t, e) {
        w(t.childValues.has(e)), w(!V(e));
        var n, r, i, s = t.childValues.get(e);
        0 === s.length ? t.childValues.set(e, e.value.slice(0)) : (n = s, r = e.value, (i = n.length) > 0 && i === r.length && n[i - 1] === r[i - 1] || t.setDirty()), j(t, e), V(t) || E(t)
      }

      function j(t, e) {
        var n = t.dirtyChildren;
        n && (n.delete(e), 0 === n.size && (v.length < g && v.push(n), t.dirtyChildren = null))
      }

      function A(t) {
        t.childValues.size > 0 && t.childValues.forEach((function(e, n) {
          M(t, n)
        })), t.forgetDeps(), w(null === t.dirtyChildren)
      }

      function M(t, e) {
        e.parents.delete(t), t.childValues.delete(e), j(t, e)
      }
      var x = {
        setDirty: !0,
        dispose: !0,
        forget: !0
      };

      function z(t) {
        var e = new Map,
          n = t && t.subscribe;

        function r(t) {
          var r = f.getValue();
          if (r) {
            var i = e.get(t);
            i || e.set(t, i = new Set), r.dependOn(i), "function" == typeof n && (y(i), i.unsubscribe = n(t))
          }
        }
        return r.dirty = function(t, n) {
          var r = e.get(t);
          if (r) {
            var i = n && p.call(x, n) ? n : "setDirty";
            d(r).forEach((function(t) {
              return t[i]()
            })), e.delete(t), y(r)
          }
        }, r
      }

      function K() {
        var t = new u("function" == typeof WeakMap);
        return function() {
          return t.lookupArray(arguments)
        }
      }
      K();
      var N = new Set;

      function P(t, e) {
        void 0 === e && (e = Object.create(null));
        var n = new h(e.max || Math.pow(2, 16), (function(t) {
            return t.dispose()
          })),
          r = e.keyArgs,
          i = e.makeCacheKey || K(),
          s = function() {
            var s = i.apply(null, r ? r.apply(null, arguments) : arguments);
            if (void 0 === s) return t.apply(null, arguments);
            var o = n.get(s);
            o || (n.set(s, o = new k(t)), o.subscribe = e.subscribe, o.forget = function() {
              return n.delete(s)
            });
            var u = o.recompute(Array.prototype.slice.call(arguments));
            return n.set(s, o), N.add(n), f.hasValue() || (N.forEach((function(t) {
              return t.clean()
            })), N.clear()), u
          };

        function o(t) {
          var e = n.get(t);
          e && e.setDirty()
        }

        function u(t) {
          var e = n.get(t);
          if (e) return e.peek()
        }

        function a(t) {
          return n.delete(t)
        }
        return Object.defineProperty(s, "size", {
          get: function() {
            return n.map.size
          },
          configurable: !1,
          enumerable: !1
        }), s.dirtyKey = o, s.dirty = function() {
          o(i.apply(null, arguments))
        }, s.peekKey = u, s.peek = function() {
          return u(i.apply(null, arguments))
        }, s.forgetKey = a, s.forget = function() {
          return a(i.apply(null, arguments))
        }, s.makeCacheKey = i, s.getKey = r ? function() {
          return i.apply(null, r.apply(null, arguments))
        } : i, Object.freeze(s)
      }
    },
    9551: (t, e, n) => {
      n.d(e, {
        QS: () => l,
        _v: () => a,
        ab: () => i,
        li: () => u
      });
      var r = n(7915),
        i = new(n(4684).g7),
        s = new WeakMap;

      function o(t) {
        var e = s.get(t);
        return e || s.set(t, e = {
          vars: new Set,
          dep: (0, r.dP)()
        }), e
      }

      function u(t) {
        o(t).vars.forEach((function(e) {
          return e.forgetCache(t)
        }))
      }

      function a(t) {
        o(t).vars.forEach((function(e) {
          return e.attachCache(t)
        }))
      }

      function l(t) {
        var e = new Set,
          n = new Set,
          r = function(u) {
            if (arguments.length > 0) {
              if (t !== u) {
                t = u, e.forEach((function(t) {
                  o(t).dep.dirty(r),
                    function(t) {
                      t.broadcastWatches && t.broadcastWatches()
                    }(t)
                }));
                var a = Array.from(n);
                n.clear(), a.forEach((function(e) {
                  return e(t)
                }))
              }
            } else {
              var l = i.getValue();
              l && (s(l), o(l).dep(r))
            }
            return t
          };
        r.onNextChange = function(t) {
          return n.add(t),
            function() {
              n.delete(t)
            }
        };
        var s = r.attachCache = function(t) {
          return e.add(t), o(t).vars.add(r), r
        };
        return r.forgetCache = function(t) {
          return e.delete(t)
        }, r
      }
    },
    2997: (t, e, n) => {
      n.d(e, {
        l: () => i
      });
      var r = n(927);

      function i(t) {
        var e = t(),
          n = (0, r.useState)(e)[1];
        return (0, r.useEffect)((function() {
          var r = t();
          if (e === r) return t.onNextChange(n);
          n(r)
        }), [e]), e
      }
    },
    4684: (t, e, n) => {
      n.d(e, {
        g7: () => l
      });
      let r = null;
      const i = {};
      let s = 1;

      function o(t) {
        try {
          return t()
        } catch (t) {}
      }
      const u = "@wry/context:Slot",
        a = o((() => globalThis)) || o((() => global)) || Object.create(null),
        l = a[u] || Array[u] || function(t) {
          try {
            Object.defineProperty(a, u, {
              value: t,
              enumerable: !1,
              writable: !1,
              configurable: !0
            })
          } finally {
            return t
          }
        }(class {
          constructor() {
            this.id = ["slot", s++, Date.now(), Math.random().toString(36).slice(2)].join(":")
          }
          hasValue() {
            for (let t = r; t; t = t.parent)
              if (this.id in t.slots) {
                const e = t.slots[this.id];
                if (e === i) break;
                return t !== r && (r.slots[this.id] = e), !0
              } return r && (r.slots[this.id] = i), !1
          }
          getValue() {
            if (this.hasValue()) return r.slots[this.id]
          }
          withValue(t, e, n, i) {
            const s = {
                __proto__: null,
                [this.id]: t
              },
              o = r;
            r = {
              parent: o,
              slots: s
            };
            try {
              return e.apply(i, n)
            } finally {
              r = o
            }
          }
          static bind(t) {
            const e = r;
            return function() {
              const n = r;
              try {
                return r = e, t.apply(this, arguments)
              } finally {
                r = n
              }
            }
          }
          static noContext(t, e, n) {
            if (!r) return t.apply(n, e); {
              const i = r;
              try {
                return r = null, t.apply(n, e)
              } finally {
                r = i
              }
            }
          }
        }),
        {
          bind: c,
          noContext: h
        } = l
    }
  }
]);