"use strict";
(self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [719], {
    4844: (t, e, n) => {
      n.d(e, {
        g7: () => l
      });
      var r = null,
        i = {},
        o = 1;

      function u(t) {
        try {
          return t()
        } catch (t) {}
      }
      var a = "@wry/context:Slot",
        s = u((function() {
          return globalThis
        })) || u((function() {
          return n.g
        })) || Object.create(null),
        l = s[a] || Array[a] || function(t) {
          try {
            Object.defineProperty(s, a, {
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
            this.id = ["slot", o++, Date.now(), Math.random().toString(36).slice(2)].join(":")
          }
          return t.prototype.hasValue = function() {
            for (var t = r; t; t = t.parent)
              if (this.id in t.slots) {
                var e = t.slots[this.id];
                if (e === i) break;
                return t !== r && (r.slots[this.id] = e), !0
              } return r && (r.slots[this.id] = i), !1
          }, t.prototype.getValue = function() {
            if (this.hasValue()) return r.slots[this.id]
          }, t.prototype.withValue = function(t, e, n, i) {
            var o, u = ((o = {
                __proto__: null
              })[this.id] = t, o),
              a = r;
            r = {
              parent: a,
              slots: u
            };
            try {
              return e.apply(i, n)
            } finally {
              r = a
            }
          }, t.bind = function(t) {
            var e = r;
            return function() {
              var n = r;
              try {
                return r = e, t.apply(this, arguments)
              } finally {
                r = n
              }
            }
          }, t.noContext = function(t, e, n) {
            if (!r) return t.apply(n, e);
            var i = r;
            try {
              return r = null, t.apply(n, e)
            } finally {
              r = i
            }
          }, t
        }());
      l.bind, l.noContext
    },
    3987: (t, e, n) => {
      n.d(e, {
        B: () => a
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
        }()
    },
    5889: (t, e, n) => {
      n.d(e, {
        dP: () => j,
        re: () => x
      });
      var r = n(3987),
        i = n(4844);

      function o() {}
      var u, a = function() {
          function t(t, e) {
            void 0 === t && (t = 1 / 0), void 0 === e && (e = o), this.max = t, this.dispose = e, this.map = new Map, this.newest = null, this.oldest = null
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
        s = new i.g7,
        l = Object.prototype.hasOwnProperty,
        c = void 0 === (u = Array.from) ? function(t) {
          var e = [];
          return t.forEach((function(t) {
            return e.push(t)
          })), e
        } : u;

      function h(t) {
        var e = t.unsubscribe;
        "function" == typeof e && (t.unsubscribe = void 0, e())
      }
      var f = [],
        p = 100;

      function d(t, e) {
        if (!t) throw new Error(e || "assertion failure")
      }

      function y(t) {
        switch (t.length) {
          case 0:
            throw new Error("unknown value");
          case 1:
            return t[0];
          case 2:
            throw t[1]
        }
      }
      var v = function() {
        function t(e) {
          this.fn = e, this.parents = new Set, this.childValues = new Map, this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++t.count
        }
        return t.prototype.peek = function() {
          if (1 === this.value.length && !b(this)) return g(this), this.value[0]
        }, t.prototype.recompute = function(t) {
          return d(!this.recomputing, "already recomputing"), g(this), b(this) ? function(t, e) {
            return S(t), s.withValue(t, w, [t, e]),
              function(t, e) {
                if ("function" == typeof t.subscribe) try {
                  h(t), t.unsubscribe = t.subscribe.apply(null, e)
                } catch (e) {
                  return t.setDirty(), !1
                }
                return !0
              }(t, e) && function(t) {
                t.dirty = !1, b(t) || m(t)
              }(t), y(t.value)
          }(this, t) : y(this.value)
        }, t.prototype.setDirty = function() {
          this.dirty || (this.dirty = !0, this.value.length = 0, k(this), h(this))
        }, t.prototype.dispose = function() {
          var t = this;
          this.setDirty(), S(this), C(this, (function(e, n) {
            e.setDirty(), _(e, t)
          }))
        }, t.prototype.forget = function() {
          this.dispose()
        }, t.prototype.dependOn = function(t) {
          t.add(this), this.deps || (this.deps = f.pop() || new Set), this.deps.add(t)
        }, t.prototype.forgetDeps = function() {
          var t = this;
          this.deps && (c(this.deps).forEach((function(e) {
            return e.delete(t)
          })), this.deps.clear(), f.push(this.deps), this.deps = null)
        }, t.count = 0, t
      }();

      function g(t) {
        var e = s.getValue();
        if (e) return t.parents.add(e), e.childValues.has(t) || e.childValues.set(t, []), b(t) ? V(e, t) : D(e, t), e
      }

      function w(t, e) {
        t.recomputing = !0, t.value.length = 0;
        try {
          t.value[0] = t.fn.apply(null, e)
        } catch (e) {
          t.value[1] = e
        }
        t.recomputing = !1
      }

      function b(t) {
        return t.dirty || !(!t.dirtyChildren || !t.dirtyChildren.size)
      }

      function k(t) {
        C(t, V)
      }

      function m(t) {
        C(t, D)
      }

      function C(t, e) {
        var n = t.parents.size;
        if (n)
          for (var r = c(t.parents), i = 0; i < n; ++i) e(r[i], t)
      }

      function V(t, e) {
        d(t.childValues.has(e)), d(b(e));
        var n = !b(t);
        if (t.dirtyChildren) {
          if (t.dirtyChildren.has(e)) return
        } else t.dirtyChildren = f.pop() || new Set;
        t.dirtyChildren.add(e), n && k(t)
      }

      function D(t, e) {
        d(t.childValues.has(e)), d(!b(e));
        var n, r, i, o = t.childValues.get(e);
        0 === o.length ? t.childValues.set(e, e.value.slice(0)) : (n = o, r = e.value, (i = n.length) > 0 && i === r.length && n[i - 1] === r[i - 1] || t.setDirty()), E(t, e), b(t) || m(t)
      }

      function E(t, e) {
        var n = t.dirtyChildren;
        n && (n.delete(e), 0 === n.size && (f.length < p && f.push(n), t.dirtyChildren = null))
      }

      function S(t) {
        t.childValues.size > 0 && t.childValues.forEach((function(e, n) {
          _(t, n)
        })), t.forgetDeps(), d(null === t.dirtyChildren)
      }

      function _(t, e) {
        e.parents.delete(t), t.childValues.delete(e), E(t, e)
      }
      var O = {
        setDirty: !0,
        dispose: !0,
        forget: !0
      };

      function j(t) {
        var e = new Map,
          n = t && t.subscribe;

        function r(t) {
          var r = s.getValue();
          if (r) {
            var i = e.get(t);
            i || e.set(t, i = new Set), r.dependOn(i), "function" == typeof n && (h(i), i.unsubscribe = n(t))
          }
        }
        return r.dirty = function(t, n) {
          var r = e.get(t);
          if (r) {
            var i = n && l.call(O, n) ? n : "setDirty";
            c(r).forEach((function(t) {
              return t[i]()
            })), e.delete(t), h(r)
          }
        }, r
      }

      function A() {
        var t = new r.B("function" == typeof WeakMap);
        return function() {
          return t.lookupArray(arguments)
        }
      }
      A();
      var M = new Set;

      function x(t, e) {
        void 0 === e && (e = Object.create(null));
        var n = new a(e.max || Math.pow(2, 16), (function(t) {
            return t.dispose()
          })),
          r = e.keyArgs,
          i = e.makeCacheKey || A(),
          o = function() {
            var o = i.apply(null, r ? r.apply(null, arguments) : arguments);
            if (void 0 === o) return t.apply(null, arguments);
            var u = n.get(o);
            u || (n.set(o, u = new v(t)), u.subscribe = e.subscribe, u.forget = function() {
              return n.delete(o)
            });
            var a = u.recompute(Array.prototype.slice.call(arguments));
            return n.set(o, u), M.add(n), s.hasValue() || (M.forEach((function(t) {
              return t.clean()
            })), M.clear()), a
          };

        function u(t) {
          var e = n.get(t);
          e && e.setDirty()
        }

        function l(t) {
          var e = n.get(t);
          if (e) return e.peek()
        }

        function c(t) {
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
        }, o.peekKey = l, o.peek = function() {
          return l(i.apply(null, arguments))
        }, o.forgetKey = c, o.forget = function() {
          return c(i.apply(null, arguments))
        }, o.makeCacheKey = i, o.getKey = r ? function() {
          return i.apply(null, r.apply(null, arguments))
        } : i, Object.freeze(o)
      }
    },
    474: (t, e, n) => {
      n.d(e, {
        QS: () => l,
        _v: () => s,
        ab: () => i,
        li: () => a
      });
      var r = n(5889),
        i = new(n(4844).g7),
        o = new WeakMap;

      function u(t) {
        var e = o.get(t);
        return e || o.set(t, e = {
          vars: new Set,
          dep: (0, r.dP)()
        }), e
      }

      function a(t) {
        u(t).vars.forEach((function(e) {
          return e.forgetCache(t)
        }))
      }

      function s(t) {
        u(t).vars.forEach((function(e) {
          return e.attachCache(t)
        }))
      }

      function l(t) {
        var e = new Set,
          n = new Set,
          r = function(a) {
            if (arguments.length > 0) {
              if (t !== a) {
                t = a, e.forEach((function(t) {
                  u(t).dep.dirty(r),
                    function(t) {
                      t.broadcastWatches && t.broadcastWatches()
                    }(t)
                }));
                var s = Array.from(n);
                n.clear(), s.forEach((function(e) {
                  return e(t)
                }))
              }
            } else {
              var l = i.getValue();
              l && (o(l), u(l).dep(r))
            }
            return t
          };
        r.onNextChange = function(t) {
          return n.add(t),
            function() {
              n.delete(t)
            }
        };
        var o = r.attachCache = function(t) {
          return e.add(t), u(t).vars.add(r), r
        };
        return r.forgetCache = function(t) {
          return e.delete(t)
        }, r
      }
    },
    2914: (t, e, n) => {
      n.d(e, {
        l: () => i
      });
      var r = n(5843);

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