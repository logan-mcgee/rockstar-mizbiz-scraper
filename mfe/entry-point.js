(() => {
  var t = {
      906: t => {
        var e = function(t) {
          "use strict";
          var e, r = Object.prototype,
            n = r.hasOwnProperty,
            o = Object.defineProperty || function(t, e, r) {
              t[e] = r.value
            },
            a = "function" == typeof Symbol ? Symbol : {},
            i = a.iterator || "@@iterator",
            c = a.asyncIterator || "@@asyncIterator",
            s = a.toStringTag || "@@toStringTag";

          function l(t, e, r) {
            return Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }), t[e]
          }
          try {
            l({}, "")
          } catch (t) {
            l = function(t, e, r) {
              return t[e] = r
            }
          }

          function u(t, e, r, n) {
            var a = e && e.prototype instanceof v ? e : v,
              i = Object.create(a.prototype),
              c = new N(n || []);
            return o(i, "_invoke", {
              value: j(t, r, c)
            }), i
          }

          function f(t, e, r) {
            try {
              return {
                type: "normal",
                arg: t.call(e, r)
              }
            } catch (t) {
              return {
                type: "throw",
                arg: t
              }
            }
          }
          t.wrap = u;
          var h = "suspendedStart",
            p = "executing",
            d = "completed",
            y = {};

          function v() {}

          function g() {}

          function m() {}
          var w = {};
          l(w, i, (function() {
            return this
          }));
          var L = Object.getPrototypeOf,
            b = L && L(L($([])));
          b && b !== r && n.call(b, i) && (w = b);
          var E = m.prototype = v.prototype = Object.create(w);

          function k(t) {
            ["next", "throw", "return"].forEach((function(e) {
              l(t, e, (function(t) {
                return this._invoke(e, t)
              }))
            }))
          }

          function x(t, e) {
            function r(o, a, i, c) {
              var s = f(t[o], t, a);
              if ("throw" !== s.type) {
                var l = s.arg,
                  u = l.value;
                return u && "object" == typeof u && n.call(u, "__await") ? e.resolve(u.__await).then((function(t) {
                  r("next", t, i, c)
                }), (function(t) {
                  r("throw", t, i, c)
                })) : e.resolve(u).then((function(t) {
                  l.value = t, i(l)
                }), (function(t) {
                  return r("throw", t, i, c)
                }))
              }
              c(s.arg)
            }
            var a;
            o(this, "_invoke", {
              value: function(t, n) {
                function o() {
                  return new e((function(e, o) {
                    r(t, n, e, o)
                  }))
                }
                return a = a ? a.then(o, o) : o()
              }
            })
          }

          function j(t, e, r) {
            var n = h;
            return function(o, a) {
              if (n === p) throw new Error("Generator is already running");
              if (n === d) {
                if ("throw" === o) throw a;
                return R()
              }
              for (r.method = o, r.arg = a;;) {
                var i = r.delegate;
                if (i) {
                  var c = _(i, r);
                  if (c) {
                    if (c === y) continue;
                    return c
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (n === h) throw n = d, r.arg;
                  r.dispatchException(r.arg)
                } else "return" === r.method && r.abrupt("return", r.arg);
                n = p;
                var s = f(t, e, r);
                if ("normal" === s.type) {
                  if (n = r.done ? d : "suspendedYield", s.arg === y) continue;
                  return {
                    value: s.arg,
                    done: r.done
                  }
                }
                "throw" === s.type && (n = d, r.method = "throw", r.arg = s.arg)
              }
            }
          }

          function _(t, r) {
            var n = r.method,
              o = t.iterator[n];
            if (o === e) return r.delegate = null, "throw" === n && t.iterator.return && (r.method = "return", r.arg = e, _(t, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
            var a = f(o, t.iterator, r.arg);
            if ("throw" === a.type) return r.method = "throw", r.arg = a.arg, r.delegate = null, y;
            var i = a.arg;
            return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, y) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y)
          }

          function O(t) {
            var e = {
              tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
          }

          function P(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
          }

          function N(t) {
            this.tryEntries = [{
              tryLoc: "root"
            }], t.forEach(O, this), this.reset(!0)
          }

          function $(t) {
            if (t) {
              var r = t[i];
              if (r) return r.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var o = -1,
                  a = function r() {
                    for (; ++o < t.length;)
                      if (n.call(t, o)) return r.value = t[o], r.done = !1, r;
                    return r.value = e, r.done = !0, r
                  };
                return a.next = a
              }
            }
            return {
              next: R
            }
          }

          function R() {
            return {
              value: e,
              done: !0
            }
          }
          return g.prototype = m, o(E, "constructor", {
            value: m,
            configurable: !0
          }), o(m, "constructor", {
            value: g,
            configurable: !0
          }), g.displayName = l(m, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
          }, t.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m, l(t, s, "GeneratorFunction")), t.prototype = Object.create(E), t
          }, t.awrap = function(t) {
            return {
              __await: t
            }
          }, k(x.prototype), l(x.prototype, c, (function() {
            return this
          })), t.AsyncIterator = x, t.async = function(e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new x(u(e, r, n, o), a);
            return t.isGeneratorFunction(r) ? i : i.next().then((function(t) {
              return t.done ? t.value : i.next()
            }))
          }, k(E), l(E, s, "Generator"), l(E, i, (function() {
            return this
          })), l(E, "toString", (function() {
            return "[object Generator]"
          })), t.keys = function(t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return r.reverse(),
              function t() {
                for (; r.length;) {
                  var n = r.pop();
                  if (n in e) return t.value = n, t.done = !1, t
                }
                return t.done = !0, t
              }
          }, t.values = $, N.prototype = {
            constructor: N,
            reset: function(t) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(P), !t)
                for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
            },
            stop: function() {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval
            },
            dispatchException: function(t) {
              if (this.done) throw t;
              var r = this;

              function o(n, o) {
                return c.type = "throw", c.arg = t, r.next = n, o && (r.method = "next", r.arg = e), !!o
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  c = i.completion;
                if ("root" === i.tryLoc) return o("end");
                if (i.tryLoc <= this.prev) {
                  var s = n.call(i, "catchLoc"),
                    l = n.call(i, "finallyLoc");
                  if (s && l) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                  } else if (s) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                  } else {
                    if (!l) throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                  }
                }
              }
            },
            abrupt: function(t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                  var a = o;
                  break
                }
              }
              a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
              var i = a ? a.completion : {};
              return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, y) : this.complete(i)
            },
            complete: function(t, e) {
              if ("throw" === t.type) throw t.arg;
              return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y
            },
            finish: function(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), P(r), y
              }
            },
            catch: function(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    P(r)
                  }
                  return o
                }
              }
              throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, r, n) {
              return this.delegate = {
                iterator: $(t),
                resultName: r,
                nextLoc: n
              }, "next" === this.method && (this.arg = e), y
            }
          }, t
        }(t.exports);
        try {
          regeneratorRuntime = e
        } catch (t) {
          "object" == typeof globalThis ? globalThis.regeneratorRuntime = e : Function("r", "regeneratorRuntime = r")(e)
        }
      }
    },
    e = {};

  function r(n) {
    var o = e[n];
    if (void 0 !== o) return o.exports;
    var a = e[n] = {
      exports: {}
    };
    return t[n](a, a.exports, r), a.exports
  }
  r.n = t => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return r.d(e, {
      a: e
    }), e
  }, r.d = (t, e) => {
    for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
      enumerable: !0,
      get: e[n]
    })
  }, r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), (() => {
    "use strict";
    r(906);
    const {
      currentScript: t
    } = document, e = JSON.parse(t.dataset.config) ?? null, n = t => {
      const e = window?.mfe?.packages?.find((e => {
        let {
          package: r
        } = e;
        return r === t
      }));
      if (!e?.src) throw Error(`MFE ${t} not found in window.mfe.packages`);
      return e.src
    }, o = function(t) {
      let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "./bootstrap";
      return new Promise(((r, o) => {
        const a = t.replace("@rockstargames/", "").replaceAll("-", "_"),
          i = async t => {
            if (!t) return void o(new Error(`Container ${t} ${a} not found.`));
            const n = await t.get(e),
              i = await n();
            r(i)
          }, c = window[a];
        if (c) return void i(c);
        const s = n(t),
          l = document.createElement("script");
        l.onerror = () => o(new Error("Container script not loaded.")), l.onload = () => i(window[a]), l.src = s, document.head.appendChild(l)
      }))
    }, a = async t => {
      let {
        allLocals: e,
        detectLocals: r,
        key: a,
        localhost: i,
        locals: c,
        overrides: s,
        keyHostProd: l
      } = t;
      const u = await (async t => {
          let {
            key: e,
            keyHostProd: r
          } = t, n = `https://media-rockstargames-com.akamaized.net/mfe4/__manifests/${e}.json`;
          const o = await fetch(n),
            {
              packages: a
            } = await o.json();
          return a
        })({
          key: a,
          keyHostProd: l
        }),
        {
          location: f
        } = document,
        {
          hostname: h,
          protocol: p
        } = f,
        d = h.match(/local/),
        y = i ?? (d ? `${p}//${h}` : "https://localhost");
      r ? await u.reduce((async (t, e) => {
        if (await t, e?.port) try {
          const t = `${y}:${e?.port}/remote-entry.js`,
            r = new AbortController;
          setTimeout((() => {
            r.abort()
          }), 200);
          const {
            signal: n
          } = r;
          await fetch(t, {
            signal: n
          }), e.src = t
        } catch (t) {}
      }), Promise.resolve()) : e ? u.forEach((t => {
        t.src = `${y}:${t?.port}/remote-entry.js`
      })) : c?.forEach((t => {
        u.forEach((e => {
          e?.package.replace("@rockstargames/", "") === t && (e.src = `${y}:${e?.port}/remote-entry.js`)
        }))
      })), s?.forEach((t => {
        u?.forEach((e => {
          e?.package === t?.package && (e.src = t.src)
        }))
      })), window.mfe = {
        loadRemote: o,
        path: n,
        packages: u
      }, window.postMessage({
        mfeRegistryLoaded: !0
      })
    };
    window.addEventListener("message", (async t => {
      let {
        data: e
      } = t;
      const r = e?.mfeRegistryNeeded?.key,
        n = e?.mfeRegistryNeeded?.l,
        o = e?.mfeRegistryNeeded?.o;
      r && a({
        key: r,
        locals: n,
        overrides: o
      })
    }), !1), e && (async () => {
      const {
        allLocals: t = !1,
        container: r,
        detectLocals: n = !1,
        localhost: o,
        locals: i,
        method: c,
        overrides: s,
        registryKey: l,
        keyHostProd: u = !0
      } = e;
      await a({
        allLocals: t,
        detectLocals: n,
        key: l,
        localhost: o,
        locals: i,
        overrides: s,
        keyHostProd: u
      }), window.mfe.loadRemote(r, c)
    })()
  })()
})();