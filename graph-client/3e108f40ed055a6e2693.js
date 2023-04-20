"use strict";
(self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [407], {
    6435: (t, e, n) => {
      n.d(e, {
        dP: () => Q,
        re: () => F
      });
      var r = function() {
          return Object.create(null)
        },
        i = Array.prototype,
        o = i.forEach,
        u = i.slice,
        a = function() {
          function t(t, e) {
            void 0 === t && (t = !0), void 0 === e && (e = r), this.weakness = t, this.makeData = e
          }
          return t.prototype.lookup = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return this.lookupArray(t)
          }, t.prototype.lookupArray = function(t) {
            var e = this;
            return o.call(t, (function(t) {
              return e = e.getChildTrie(t)
            })), e.data || (e.data = this.makeData(u.call(t)))
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
        s = null,
        l = {},
        c = 1;

      function h(t) {
        try {
          return t()
        } catch (t) {}
      }
      var f = "@wry/context:Slot",
        p = h((function() {
          return globalThis
        })) || h((function() {
          return n.g
        })) || Object.create(null),
        d = p[f] || Array[f] || function(t) {
          try {
            Object.defineProperty(p, f, {
              value: t,
              enumerable: !1,
              writable: !1,
              configurable: !0
            })
          } finally {
            return t
          }
        }(function() {
          function t() {
            this.id = ["slot", c++, Date.now(), Math.random().toString(36).slice(2)].join(":")
          }
          return t.prototype.hasValue = function() {
            for (var t = s; t; t = t.parent)
              if (this.id in t.slots) {
                var e = t.slots[this.id];
                if (e === l) break;
                return t !== s && (s.slots[this.id] = e), !0
              } return s && (s.slots[this.id] = l), !1
          }, t.prototype.getValue = function() {
            if (this.hasValue()) return s.slots[this.id]
          }, t.prototype.withValue = function(t, e, n, r) {
            var i, o = ((i = {
                __proto__: null
              })[this.id] = t, i),
              u = s;
            s = {
              parent: u,
              slots: o
            };
            try {
              return e.apply(r, n)
            } finally {
              s = u
            }
          }, t.bind = function(t) {
            var e = s;
            return function() {
              var n = s;
              try {
                return s = e, t.apply(this, arguments)
              } finally {
                s = n
              }
            }
          }, t.noContext = function(t, e, n) {
            if (!s) return t.apply(n, e);
            var r = s;
            try {
              return s = null, t.apply(n, e)
            } finally {
              s = r
            }
          }, t
        }());

      function y() {}
      d.bind, d.noContext;
      var v, w = function() {
          function t(t, e) {
            void 0 === t && (t = 1 / 0), void 0 === e && (e = y), this.max = t, this.dispose = e, this.map = new Map, this.newest = null, this.oldest = null
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
        g = new d,
        b = Object.prototype.hasOwnProperty,
        k = void 0 === (v = Array.from) ? function(t) {
          var e = [];
          return t.forEach((function(t) {
            return e.push(t)
          })), e
        } : v;

      function m(t) {
        var e = t.unsubscribe;
        "function" == typeof e && (t.unsubscribe = void 0, e())
      }
      var C = [],
        V = 100;

      function D(t, e) {
        if (!t) throw new Error(e || "assertion failure")
      }

      function _(t) {
        switch (t.length) {
          case 0:
            throw new Error("unknown value");
          case 1:
            return t[0];
          case 2:
            throw t[1]
        }
      }
      var S = function() {
        function t(e) {
          this.fn = e, this.parents = new Set, this.childValues = new Map, this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++t.count
        }
        return t.prototype.peek = function() {
          if (1 === this.value.length && !O(this)) return E(this), this.value[0]
        }, t.prototype.recompute = function(t) {
          return D(!this.recomputing, "already recomputing"), E(this), O(this) ? function(t, e) {
            return N(t), g.withValue(t, j, [t, e]),
              function(t, e) {
                if ("function" == typeof t.subscribe) try {
                  m(t), t.unsubscribe = t.subscribe.apply(null, e)
                } catch (e) {
                  return t.setDirty(), !1
                }
                return !0
              }(t, e) && function(t) {
                t.dirty = !1, O(t) || A(t)
              }(t), _(t.value)
          }(this, t) : _(this.value)
        }, t.prototype.setDirty = function() {
          this.dirty || (this.dirty = !0, this.value.length = 0, x(this), m(this))
        }, t.prototype.dispose = function() {
          var t = this;
          this.setDirty(), N(this), M(this, (function(e, n) {
            e.setDirty(), W(e, t)
          }))
        }, t.prototype.forget = function() {
          this.dispose()
        }, t.prototype.dependOn = function(t) {
          t.add(this), this.deps || (this.deps = C.pop() || new Set), this.deps.add(t)
        }, t.prototype.forgetDeps = function() {
          var t = this;
          this.deps && (k(this.deps).forEach((function(e) {
            return e.delete(t)
          })), this.deps.clear(), C.push(this.deps), this.deps = null)
        }, t.count = 0, t
      }();

      function E(t) {
        var e = g.getValue();
        if (e) return t.parents.add(e), e.childValues.has(t) || e.childValues.set(t, []), O(t) ? z(e, t) : K(e, t), e
      }

      function j(t, e) {
        t.recomputing = !0, t.value.length = 0;
        try {
          t.value[0] = t.fn.apply(null, e)
        } catch (e) {
          t.value[1] = e
        }
        t.recomputing = !1
      }

      function O(t) {
        return t.dirty || !(!t.dirtyChildren || !t.dirtyChildren.size)
      }

      function x(t) {
        M(t, z)
      }

      function A(t) {
        M(t, K)
      }

      function M(t, e) {
        var n = t.parents.size;
        if (n)
          for (var r = k(t.parents), i = 0; i < n; ++i) e(r[i], t)
      }

      function z(t, e) {
        D(t.childValues.has(e)), D(O(e));
        var n = !O(t);
        if (t.dirtyChildren) {
          if (t.dirtyChildren.has(e)) return
        } else t.dirtyChildren = C.pop() || new Set;
        t.dirtyChildren.add(e), n && x(t)
      }

      function K(t, e) {
        D(t.childValues.has(e)), D(!O(e));
        var n, r, i, o = t.childValues.get(e);
        0 === o.length ? t.childValues.set(e, e.value.slice(0)) : (n = o, r = e.value, (i = n.length) > 0 && i === r.length && n[i - 1] === r[i - 1] || t.setDirty()), P(t, e), O(t) || A(t)
      }

      function P(t, e) {
        var n = t.dirtyChildren;
        n && (n.delete(e), 0 === n.size && (C.length < V && C.push(n), t.dirtyChildren = null))
      }

      function N(t) {
        t.childValues.size > 0 && t.childValues.forEach((function(e, n) {
          W(t, n)
        })), t.forgetDeps(), D(null === t.dirtyChildren)
      }

      function W(t, e) {
        e.parents.delete(t), t.childValues.delete(e), P(t, e)
      }
      var T = {
        setDirty: !0,
        dispose: !0,
        forget: !0
      };

      function Q(t) {
        var e = new Map,
          n = t && t.subscribe;

        function r(t) {
          var r = g.getValue();
          if (r) {
            var i = e.get(t);
            i || e.set(t, i = new Set), r.dependOn(i), "function" == typeof n && (m(i), i.unsubscribe = n(t))
          }
        }
        return r.dirty = function(t, n) {
          var r = e.get(t);
          if (r) {
            var i = n && b.call(T, n) ? n : "setDirty";
            k(r).forEach((function(t) {
              return t[i]()
            })), e.delete(t), m(r)
          }
        }, r
      }

      function q() {
        var t = new a("function" == typeof WeakMap);
        return function() {
          return t.lookupArray(arguments)
        }
      }
      q();
      var B = new Set;

      function F(t, e) {
        void 0 === e && (e = Object.create(null));
        var n = new w(e.max || Math.pow(2, 16), (function(t) {
            return t.dispose()
          })),
          r = e.keyArgs,
          i = e.makeCacheKey || q(),
          o = function() {
            var o = i.apply(null, r ? r.apply(null, arguments) : arguments);
            if (void 0 === o) return t.apply(null, arguments);
            var u = n.get(o);
            u || (n.set(o, u = new S(t)), u.subscribe = e.subscribe, u.forget = function() {
              return n.delete(o)
            });
            var a = u.recompute(Array.prototype.slice.call(arguments));
            return n.set(o, u), B.add(n), g.hasValue() || (B.forEach((function(t) {
              return t.clean()
            })), B.clear()), a
          };

        function u(t) {
          var e = n.get(t);
          e && e.setDirty()
        }

        function a(t) {
          var e = n.get(t);
          if (e) return e.peek()
        }

        function s(t) {
          return n.delete(t)
        }
        return Object.defineProperty(o, "size", {
          get: function() {
            return n.map.size
          },
          configurable: !1,
          enumerable: !1
        }), o.dirtyKey = u, o.dirty = function() {
          u(i.apply(null, arguments))
        }, o.peekKey = a, o.peek = function() {
          return a(i.apply(null, arguments))
        }, o.forgetKey = s, o.forget = function() {
          return s(i.apply(null, arguments))
        }, o.makeCacheKey = i, o.getKey = r ? function() {
          return i.apply(null, r.apply(null, arguments))
        } : i, Object.freeze(o)
      }
    },
    6674: (t, e, n) => {
      n.d(e, {
        ab: () => h,
        li: () => d,
        QS: () => v,
        _v: () => y
      });
      var r = n(6435),
        i = null,
        o = {},
        u = 1;

      function a(t) {
        try {
          return t()
        } catch (t) {}
      }
      var s = "@wry/context:Slot",
        l = a((function() {
          return globalThis
        })) || a((function() {
          return n.g
        })) || Object.create(null),
        c = l[s] || Array[s] || function(t) {
          try {
            Object.defineProperty(l, s, {
              value: t,
              enumerable: !1,
              writable: !1,
              configurable: !0
            })
          } finally {
            return t
          }
        }(function() {
          function t() {
            this.id = ["slot", u++, Date.now(), Math.random().toString(36).slice(2)].join(":")
          }
          return t.prototype.hasValue = function() {
            for (var t = i; t; t = t.parent)
              if (this.id in t.slots) {
                var e = t.slots[this.id];
                if (e === o) break;
                return t !== i && (i.slots[this.id] = e), !0
              } return i && (i.slots[this.id] = o), !1
          }, t.prototype.getValue = function() {
            if (this.hasValue()) return i.slots[this.id]
          }, t.prototype.withValue = function(t, e, n, r) {
            var o, u = ((o = {
                __proto__: null
              })[this.id] = t, o),
              a = i;
            i = {
              parent: a,
              slots: u
            };
            try {
              return e.apply(r, n)
            } finally {
              i = a
            }
          }, t.bind = function(t) {
            var e = i;
            return function() {
              var n = i;
              try {
                return i = e, t.apply(this, arguments)
              } finally {
                i = n
              }
            }
          }, t.noContext = function(t, e, n) {
            if (!i) return t.apply(n, e);
            var r = i;
            try {
              return i = null, t.apply(n, e)
            } finally {
              i = r
            }
          }, t
        }());
      c.bind, c.noContext;
      var h = new c,
        f = new WeakMap;

      function p(t) {
        var e = f.get(t);
        return e || f.set(t, e = {
          vars: new Set,
          dep: (0, r.dP)()
        }), e
      }

      function d(t) {
        p(t).vars.forEach((function(e) {
          return e.forgetCache(t)
        }))
      }

      function y(t) {
        p(t).vars.forEach((function(e) {
          return e.attachCache(t)
        }))
      }

      function v(t) {
        var e = new Set,
          n = new Set,
          r = function(o) {
            if (arguments.length > 0) {
              if (t !== o) {
                t = o, e.forEach((function(t) {
                  p(t).dep.dirty(r),
                    function(t) {
                      t.broadcastWatches && t.broadcastWatches()
                    }(t)
                }));
                var u = Array.from(n);
                n.clear(), u.forEach((function(e) {
                  return e(t)
                }))
              }
            } else {
              var a = h.getValue();
              a && (i(a), p(a).dep(r))
            }
            return t
          };
        r.onNextChange = function(t) {
          return n.add(t),
            function() {
              n.delete(t)
            }
        };
        var i = r.attachCache = function(t) {
          return e.add(t), p(t).vars.add(r), r
        };
        return r.forgetCache = function(t) {
          return e.delete(t)
        }, r
      }
    },
    3356: (t, e, n) => {
      n.d(e, {
        l: () => i
      });
      var r = n(4736);

      function i(t) {
        var e = t(),
          n = (0, r.useState)(e)[1];
        return (0, r.useEffect)((function() {
          var r = t();
          if (e === r) return t.onNextChange(n);
          n(r)
        }), [e]), e
      }
    }
  }
]);