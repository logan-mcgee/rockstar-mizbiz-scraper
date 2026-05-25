try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "12e79c84-b983-4274-9eb6-d08a7e71ce57", e._sentryDebugIdIdentifier = "sentry-dbid-12e79c84-b983-4274-9eb6-d08a7e71ce57")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [8999], {
    44514(e, t, n) {
      "use strict";

      function o(e) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o(e)
      }

      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, c(o.key), o)
        }
      }

      function a(e, t, n) {
        return t = u(t),
          function(e, t) {
            if (t && ("object" == o(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e)
          }(e, i() ? Reflect.construct(t, n || [], u(e).constructor) : t.apply(e, n))
      }

      function i() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (i = function() {
          return !!e
        })()
      }

      function u(e) {
        return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, u(e)
      }

      function s(e, t) {
        return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, s(e, t)
      }

      function c(e) {
        var t = function(e) {
          if ("object" != o(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != o(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == o(t) ? t : t + ""
      }
      var l = n(4637),
        d = n(60331),
        f = n(38733).createFocusTrap,
        p = n(47766).isFocusable,
        v = function(e) {
          function t(e) {
            var n, o, r, i;
            ! function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), o = n = a(this, t, [e]), i = function(e) {
              var t, n = null !== (t = this.internalOptions[e]) && void 0 !== t ? t : this.originalOptions[e];
              if ("function" == typeof n) {
                for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) r[a - 1] = arguments[a];
                n = n.apply(void 0, r)
              }
              if (!0 === n && (n = void 0), !n) {
                if (void 0 === n || !1 === n) return n;
                throw new Error("`".concat(e, "` was specified but was not a node, or did not return a node"))
              }
              var i, u = n;
              if ("string" == typeof n && !(u = null === (i = this.getDocument()) || void 0 === i ? void 0 : i.querySelector(n))) throw new Error("`".concat(e, "` as selector refers to no known node"));
              return u
            }, (r = c(r = "getNodeForOption")) in o ? Object.defineProperty(o, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[r] = i, n.handleDeactivate = n.handleDeactivate.bind(n), n.handlePostDeactivate = n.handlePostDeactivate.bind(n), n.handleClickOutsideDeactivates = n.handleClickOutsideDeactivates.bind(n), n.internalOptions = {
              returnFocusOnDeactivate: !1,
              checkCanReturnFocus: null,
              onDeactivate: n.handleDeactivate,
              onPostDeactivate: n.handlePostDeactivate,
              clickOutsideDeactivates: n.handleClickOutsideDeactivates
            }, n.originalOptions = {
              returnFocusOnDeactivate: !0,
              onDeactivate: null,
              onPostDeactivate: null,
              checkCanReturnFocus: null,
              clickOutsideDeactivates: !1
            };
            var u = e.focusTrapOptions;
            for (var s in u) Object.prototype.hasOwnProperty.call(u, s) && ("returnFocusOnDeactivate" !== s && "onDeactivate" !== s && "onPostDeactivate" !== s && "checkCanReturnFocus" !== s && "clickOutsideDeactivates" !== s ? n.internalOptions[s] = u[s] : n.originalOptions[s] = u[s]);
            return n.outsideClick = null, n.focusTrapElements = e.containerElements || [], n.updatePreviousElement(), n
          }
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && s(e, t)
          }(t, e), n = t, (o = [{
            key: "getDocument",
            value: function() {
              return this.props.focusTrapOptions.document || ("undefined" != typeof document ? document : void 0)
            }
          }, {
            key: "getReturnFocusNode",
            value: function() {
              var e = this.getNodeForOption("setReturnFocus", this.previouslyFocusedElement);
              return e || !1 !== e && this.previouslyFocusedElement
            }
          }, {
            key: "updatePreviousElement",
            value: function() {
              var e = this.getDocument();
              e && (this.previouslyFocusedElement = e.activeElement)
            }
          }, {
            key: "deactivateTrap",
            value: function() {
              this.focusTrap && this.focusTrap.active && this.focusTrap.deactivate({
                returnFocus: !1,
                checkCanReturnFocus: null,
                onDeactivate: this.originalOptions.onDeactivate
              })
            }
          }, {
            key: "handleClickOutsideDeactivates",
            value: function(e) {
              var t = "function" == typeof this.originalOptions.clickOutsideDeactivates ? this.originalOptions.clickOutsideDeactivates.call(null, e) : this.originalOptions.clickOutsideDeactivates;
              return t && (this.outsideClick = {
                target: e.target,
                allowDeactivation: t
              }), t
            }
          }, {
            key: "handleDeactivate",
            value: function() {
              this.originalOptions.onDeactivate && this.originalOptions.onDeactivate.call(null), this.deactivateTrap()
            }
          }, {
            key: "handlePostDeactivate",
            value: function() {
              var e = this,
                t = function() {
                  var t = e.getReturnFocusNode(),
                    n = !(!e.originalOptions.returnFocusOnDeactivate || null == t || !t.focus || e.outsideClick && (!e.outsideClick.allowDeactivation || p(e.outsideClick.target, e.internalOptions.tabbableOptions))),
                    o = e.internalOptions.preventScroll,
                    r = void 0 !== o && o;
                  n && t.focus({
                    preventScroll: r
                  }), e.originalOptions.onPostDeactivate && e.originalOptions.onPostDeactivate.call(null), e.outsideClick = null
                };
              this.originalOptions.checkCanReturnFocus ? this.originalOptions.checkCanReturnFocus.call(null, this.getReturnFocusNode()).then(t, t) : t()
            }
          }, {
            key: "setupFocusTrap",
            value: function() {
              this.focusTrap ? this.props.active && !this.focusTrap.active && (this.focusTrap.activate(), this.props.paused && this.focusTrap.pause()) : this.focusTrapElements.some(Boolean) && (this.focusTrap = this.props._createFocusTrap(this.focusTrapElements, this.internalOptions), this.props.active && this.focusTrap.activate(), this.props.paused && this.focusTrap.pause())
            }
          }, {
            key: "componentDidMount",
            value: function() {
              this.props.active && this.setupFocusTrap()
            }
          }, {
            key: "componentDidUpdate",
            value: function(e) {
              if (this.focusTrap) {
                e.containerElements !== this.props.containerElements && this.focusTrap.updateContainerElements(this.props.containerElements);
                var t = !e.active && this.props.active,
                  n = e.active && !this.props.active,
                  o = !e.paused && this.props.paused,
                  r = e.paused && !this.props.paused;
                if (t && (this.updatePreviousElement(), this.focusTrap.activate()), n) return void this.deactivateTrap();
                o && this.focusTrap.pause(), r && this.focusTrap.unpause()
              } else e.containerElements !== this.props.containerElements && (this.focusTrapElements = this.props.containerElements), this.props.active && (this.updatePreviousElement(), this.setupFocusTrap())
            }
          }, {
            key: "componentWillUnmount",
            value: function() {
              this.deactivateTrap()
            }
          }, {
            key: "render",
            value: function() {
              var e = this,
                t = this.props.children ? l.Children.only(this.props.children) : void 0;
              if (t) {
                if (t.type && t.type === l.Fragment) throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");
                return l.cloneElement(t, {
                  ref: function(n) {
                    var o = e.props.containerElements;
                    t && ("function" == typeof t.ref ? t.ref(n) : t.ref && (t.ref.current = n)), e.focusTrapElements = o || [n]
                  }
                })
              }
              return null
            }
          }]) && r(n.prototype, o), Object.defineProperty(n, "prototype", {
            writable: !1
          }), n;
          var n, o
        }(l.Component),
        b = "undefined" == typeof Element ? Function : Element;
      v.propTypes = {
        active: d.bool,
        paused: d.bool,
        focusTrapOptions: d.shape({
          document: d.object,
          onActivate: d.func,
          onPostActivate: d.func,
          checkCanFocusTrap: d.func,
          onPause: d.func,
          onPostPause: d.func,
          onUnpause: d.func,
          onPostUnpause: d.func,
          onDeactivate: d.func,
          onPostDeactivate: d.func,
          checkCanReturnFocus: d.func,
          initialFocus: d.oneOfType([d.instanceOf(b), d.string, d.bool, d.func]),
          fallbackFocus: d.oneOfType([d.instanceOf(b), d.string, d.func]),
          escapeDeactivates: d.oneOfType([d.bool, d.func]),
          clickOutsideDeactivates: d.oneOfType([d.bool, d.func]),
          returnFocusOnDeactivate: d.bool,
          setReturnFocus: d.oneOfType([d.instanceOf(b), d.string, d.bool, d.func]),
          allowOutsideClick: d.oneOfType([d.bool, d.func]),
          preventScroll: d.bool,
          tabbableOptions: d.shape({
            displayCheck: d.oneOf(["full", "legacy-full", "non-zero-area", "none"]),
            getShadowRoot: d.oneOfType([d.bool, d.func])
          }),
          trapStack: d.array,
          isKeyForward: d.func,
          isKeyBackward: d.func
        }),
        containerElements: d.arrayOf(d.instanceOf(b)),
        children: d.oneOfType([d.element, d.instanceOf(b)])
      }, v.defaultProps = {
        active: !0,
        paused: !1,
        focusTrapOptions: {},
        _createFocusTrap: f
      }, e.exports = v
    },
    38733(e, t, n) {
      "use strict";
      n.r(t), n.d(t, {
        createFocusTrap: () => m
      });
      var o = n(47766);

      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o
      }

      function a(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
          if (Array.isArray(e) || (n = c(e)) || t) {
            n && (e = n);
            var o = 0,
              r = function() {};
            return {
              s: r,
              n: function() {
                return o >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[o++]
                }
              },
              e: function(e) {
                throw e
              },
              f: r
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, i = !0,
          u = !1;
        return {
          s: function() {
            n = n.call(e)
          },
          n: function() {
            var e = n.next();
            return i = e.done, e
          },
          e: function(e) {
            u = !0, a = e
          },
          f: function() {
            try {
              i || null == n.return || n.return()
            } finally {
              if (u) throw a
            }
          }
        }
      }

      function i(e, t, n) {
        return (t = function(e) {
          var t = function(e, t) {
            if ("object" != typeof e || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(e, t);
              if ("object" != typeof o) return o;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e, "string");
          return "symbol" == typeof t ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, o)
        }
        return n
      }

      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? u(Object(n), !0).forEach(function(t) {
            i(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function c(e, t) {
        if (e) {
          if ("string" == typeof e) return r(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
        }
      }
      var l = {
          getActiveTrap: function(e) {
            return (null == e ? void 0 : e.length) > 0 ? e[e.length - 1] : null
          },
          activateTrap: function(e, t) {
            t !== l.getActiveTrap(e) && l.pauseTrap(e);
            var n = e.indexOf(t); - 1 === n || e.splice(n, 1), e.push(t)
          },
          deactivateTrap: function(e, t) {
            var n = e.indexOf(t); - 1 !== n && e.splice(n, 1), l.unpauseTrap(e)
          },
          pauseTrap: function(e) {
            var t = l.getActiveTrap(e);
            null == t || t._setPausedState(!0)
          },
          unpauseTrap: function(e) {
            var t = l.getActiveTrap(e);
            t && !t._isManuallyPaused() && t._setPausedState(!1)
          }
        },
        d = function(e) {
          return "Tab" === (null == e ? void 0 : e.key) || 9 === (null == e ? void 0 : e.keyCode)
        },
        f = function(e) {
          return d(e) && !e.shiftKey
        },
        p = function(e) {
          return d(e) && e.shiftKey
        },
        v = function(e) {
          return setTimeout(e, 0)
        },
        b = function(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
          return "function" == typeof e ? e.apply(void 0, n) : e
        },
        h = function(e) {
          return e.target.shadowRoot && "function" == typeof e.composedPath ? e.composedPath()[0] : e.target
        },
        y = [],
        m = function(e, t) {
          var n, i = (null == t ? void 0 : t.document) || document,
            u = (null == t ? void 0 : t.trapStack) || y,
            m = s({
              returnFocusOnDeactivate: !0,
              escapeDeactivates: !0,
              delayInitialFocus: !0,
              isolateSubtrees: !1,
              isKeyForward: f,
              isKeyBackward: p
            }, t),
            g = {
              containers: [],
              containerGroups: [],
              tabbableGroups: [],
              adjacentElements: new Set,
              alreadySilent: new Set,
              nodeFocusedBeforeActivation: null,
              mostRecentlyFocusedNode: null,
              active: !1,
              paused: !1,
              manuallyPaused: !1,
              delayInitialFocusTimer: void 0,
              recentNavEvent: void 0
            },
            w = function(e, t, n) {
              return e && void 0 !== e[t] ? e[t] : m[n || t]
            },
            O = function(e, t) {
              var n = "function" == typeof(null == t ? void 0 : t.composedPath) ? t.composedPath() : void 0;
              return g.containerGroups.findIndex(function(t) {
                var o = t.container,
                  r = t.tabbableNodes;
                return o.contains(e) || (null == n ? void 0 : n.includes(o)) || r.find(function(t) {
                  return t === e
                })
              })
            },
            T = function(e) {
              var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                o = n.hasFallback,
                a = void 0 !== o && o,
                u = n.params,
                s = void 0 === u ? [] : u,
                l = m[e];
              if ("function" == typeof l && (l = l.apply(void 0, function(e) {
                  if (Array.isArray(e)) return r(e)
                }(t = s) || function(e) {
                  if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(t) || c(t) || function() {
                  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }())), !0 === l && (l = void 0), !l) {
                if (void 0 === l || !1 === l) return l;
                throw new Error("`".concat(e, "` was specified but was not a node, or did not return a node"))
              }
              var d = l;
              if ("string" == typeof l) {
                try {
                  d = i.querySelector(l)
                } catch (t) {
                  throw new Error("`".concat(e, '` appears to be an invalid selector; error="').concat(t.message, '"'))
                }
                if (!d && !a) throw new Error("`".concat(e, "` as selector refers to no known node"))
              }
              return d
            },
            E = function() {
              var e = T("initialFocus", {
                hasFallback: !0
              });
              if (!1 === e) return !1;
              if (void 0 === e || e && !(0, o.isFocusable)(e, m.tabbableOptions))
                if (O(i.activeElement) >= 0) e = i.activeElement;
                else {
                  var t = g.tabbableGroups[0];
                  e = t && t.firstTabbableNode || T("fallbackFocus")
                }
              else null === e && (e = T("fallbackFocus"));
              if (!e) throw new Error("Your focus-trap needs to have at least one focusable element");
              return e
            },
            S = function() {
              if (g.containerGroups = g.containers.map(function(e) {
                  var t = (0, o.tabbable)(e, m.tabbableOptions),
                    n = (0, o.focusable)(e, m.tabbableOptions),
                    r = t.length > 0 ? t[0] : void 0,
                    a = t.length > 0 ? t[t.length - 1] : void 0,
                    i = n.find(function(e) {
                      return (0, o.isTabbable)(e)
                    }),
                    u = n.slice().reverse().find(function(e) {
                      return (0, o.isTabbable)(e)
                    }),
                    s = !!t.find(function(e) {
                      return (0, o.getTabIndex)(e) > 0
                    });
                  return {
                    container: e,
                    tabbableNodes: t,
                    focusableNodes: n,
                    posTabIndexesFound: s,
                    firstTabbableNode: r,
                    lastTabbableNode: a,
                    firstDomTabbableNode: i,
                    lastDomTabbableNode: u,
                    nextTabbableNode: function(e) {
                      var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        a = t.indexOf(e);
                      return a < 0 ? r ? n.slice(n.indexOf(e) + 1).find(function(e) {
                        return (0, o.isTabbable)(e)
                      }) : n.slice(0, n.indexOf(e)).reverse().find(function(e) {
                        return (0, o.isTabbable)(e)
                      }) : t[a + (r ? 1 : -1)]
                    }
                  }
                }), g.tabbableGroups = g.containerGroups.filter(function(e) {
                  return e.tabbableNodes.length > 0
                }), g.tabbableGroups.length <= 0 && !T("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
              if (g.containerGroups.find(function(e) {
                  return e.posTabIndexesFound
                }) && g.containerGroups.length > 1) throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")
            },
            k = function(e) {
              var t = e.activeElement;
              if (t) return t.shadowRoot && null !== t.shadowRoot.activeElement ? k(t.shadowRoot) : t
            },
            D = function(e) {
              !1 !== e && e !== k(document) && (e && e.focus ? (e.focus({
                preventScroll: !!m.preventScroll
              }), g.mostRecentlyFocusedNode = e, function(e) {
                return e.tagName && "input" === e.tagName.toLowerCase() && "function" == typeof e.select
              }(e) && e.select()) : D(E()))
            },
            F = function(e) {
              var t = T("setReturnFocus", {
                params: [e]
              });
              return t || !1 !== t && e
            },
            P = function(e) {
              var t = e.target,
                n = e.event,
                r = e.isBackward,
                a = void 0 !== r && r;
              t = t || h(n), S();
              var i = null;
              if (g.tabbableGroups.length > 0) {
                var u = O(t, n),
                  s = u >= 0 ? g.containerGroups[u] : void 0;
                if (u < 0) i = a ? g.tabbableGroups[g.tabbableGroups.length - 1].lastTabbableNode : g.tabbableGroups[0].firstTabbableNode;
                else if (a) {
                  var c = g.tabbableGroups.findIndex(function(e) {
                    var n = e.firstTabbableNode;
                    return t === n
                  });
                  if (c < 0 && (s.container === t || (0, o.isFocusable)(t, m.tabbableOptions) && !(0, o.isTabbable)(t, m.tabbableOptions) && !s.nextTabbableNode(t, !1)) && (c = u), c >= 0) {
                    var l = 0 === c ? g.tabbableGroups.length - 1 : c - 1,
                      f = g.tabbableGroups[l];
                    i = (0, o.getTabIndex)(t) >= 0 ? f.lastTabbableNode : f.lastDomTabbableNode
                  } else d(n) || (i = s.nextTabbableNode(t, !1))
                } else {
                  var p = g.tabbableGroups.findIndex(function(e) {
                    var n = e.lastTabbableNode;
                    return t === n
                  });
                  if (p < 0 && (s.container === t || (0, o.isFocusable)(t, m.tabbableOptions) && !(0, o.isTabbable)(t, m.tabbableOptions) && !s.nextTabbableNode(t)) && (p = u), p >= 0) {
                    var v = p === g.tabbableGroups.length - 1 ? 0 : p + 1,
                      b = g.tabbableGroups[v];
                    i = (0, o.getTabIndex)(t) >= 0 ? b.firstTabbableNode : b.firstDomTabbableNode
                  } else d(n) || (i = s.nextTabbableNode(t))
                }
              } else i = T("fallbackFocus");
              return i
            },
            N = function(e) {
              var t = h(e);
              O(t, e) >= 0 || (b(m.clickOutsideDeactivates, e) ? n.deactivate({
                returnFocus: m.returnFocusOnDeactivate
              }) : b(m.allowOutsideClick, e) || e.preventDefault())
            },
            R = function(e) {
              var t = h(e),
                n = O(t, e) >= 0;
              if (n || t instanceof Document) n && (g.mostRecentlyFocusedNode = t);
              else {
                var r;
                e.stopImmediatePropagation();
                var a = !0;
                if (g.mostRecentlyFocusedNode)
                  if ((0, o.getTabIndex)(g.mostRecentlyFocusedNode) > 0) {
                    var i = O(g.mostRecentlyFocusedNode),
                      u = g.containerGroups[i].tabbableNodes;
                    if (u.length > 0) {
                      var s = u.findIndex(function(e) {
                        return e === g.mostRecentlyFocusedNode
                      });
                      s >= 0 && (m.isKeyForward(g.recentNavEvent) ? s + 1 < u.length && (r = u[s + 1], a = !1) : s - 1 >= 0 && (r = u[s - 1], a = !1))
                    }
                  } else g.containerGroups.some(function(e) {
                    return e.tabbableNodes.some(function(e) {
                      return (0, o.getTabIndex)(e) > 0
                    })
                  }) || (a = !1);
                else a = !1;
                a && (r = P({
                  target: g.mostRecentlyFocusedNode,
                  isBackward: m.isKeyBackward(g.recentNavEvent)
                })), D(r || g.mostRecentlyFocusedNode || E())
              }
              g.recentNavEvent = void 0
            },
            I = function(e) {
              (m.isKeyForward(e) || m.isKeyBackward(e)) && function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                g.recentNavEvent = e;
                var n = P({
                  event: e,
                  isBackward: t
                });
                n && (d(e) && e.preventDefault(), D(n))
              }(e, m.isKeyBackward(e))
            },
            C = function(e) {
              var t;
              "Escape" !== (null == (t = e) ? void 0 : t.key) && "Esc" !== (null == t ? void 0 : t.key) && 27 !== (null == t ? void 0 : t.keyCode) || !1 === b(m.escapeDeactivates, e) || (e.preventDefault(), n.deactivate())
            },
            A = function(e) {
              var t = h(e);
              O(t, e) >= 0 || b(m.clickOutsideDeactivates, e) || b(m.allowOutsideClick, e) || (e.preventDefault(), e.stopImmediatePropagation())
            },
            _ = function() {
              if (g.active) return l.activateTrap(u, n), g.delayInitialFocusTimer = m.delayInitialFocus ? v(function() {
                D(E())
              }) : D(E()), i.addEventListener("focusin", R, !0), i.addEventListener("mousedown", N, {
                capture: !0,
                passive: !1
              }), i.addEventListener("touchstart", N, {
                capture: !0,
                passive: !1
              }), i.addEventListener("click", A, {
                capture: !0,
                passive: !1
              }), i.addEventListener("keydown", I, {
                capture: !0,
                passive: !1
              }), i.addEventListener("keydown", C), n
            },
            j = function() {
              if (g.active) return i.removeEventListener("focusin", R, !0), i.removeEventListener("mousedown", N, !0), i.removeEventListener("touchstart", N, !0), i.removeEventListener("click", A, !0), i.removeEventListener("keydown", I, !0), i.removeEventListener("keydown", C), n
            },
            x = "undefined" != typeof window && "MutationObserver" in window ? new MutationObserver(function(e) {
              e.some(function(e) {
                return Array.from(e.removedNodes).some(function(e) {
                  return e === g.mostRecentlyFocusedNode
                })
              }) && D(E())
            }) : void 0,
            L = function() {
              x && (x.disconnect(), g.active && !g.paused && g.containers.map(function(e) {
                x.observe(e, {
                  subtree: !0,
                  childList: !0
                })
              }))
            };
          return n = {
            get active() {
              return g.active
            },
            get paused() {
              return g.paused
            },
            activate: function(e) {
              if (g.active) return this;
              var t, o = w(e, "onActivate"),
                r = w(e, "onPostActivate"),
                a = w(e, "checkCanFocusTrap"),
                s = l.getActiveTrap(u),
                c = !1;
              s && !s.paused && (null === (t = s._setSubtreeIsolation) || void 0 === t || t.call(s, !1), c = !0);
              try {
                a || S(), g.active = !0, g.paused = !1, g.nodeFocusedBeforeActivation = k(i), null == o || o();
                var d = function() {
                  a && S(), _(), L(), m.isolateSubtrees && n._setSubtreeIsolation(!0), null == r || r()
                };
                if (a) return a(g.containers.concat()).then(d, d), this;
                d()
              } catch (e) {
                var f;
                throw s === l.getActiveTrap(u) && c && (null === (f = s._setSubtreeIsolation) || void 0 === f || f.call(s, !0)), e
              }
              return this
            },
            deactivate: function(e) {
              if (!g.active) return this;
              var t = s({
                onDeactivate: m.onDeactivate,
                onPostDeactivate: m.onPostDeactivate,
                checkCanReturnFocus: m.checkCanReturnFocus
              }, e);
              clearTimeout(g.delayInitialFocusTimer), g.delayInitialFocusTimer = void 0, g.paused || n._setSubtreeIsolation(!1), g.alreadySilent.clear(), j(), g.active = !1, g.paused = !1, L(), l.deactivateTrap(u, n);
              var o = w(t, "onDeactivate"),
                r = w(t, "onPostDeactivate"),
                a = w(t, "checkCanReturnFocus"),
                i = w(t, "returnFocus", "returnFocusOnDeactivate");
              null == o || o();
              var c = function() {
                v(function() {
                  i && D(F(g.nodeFocusedBeforeActivation)), null == r || r()
                })
              };
              return i && a ? (a(F(g.nodeFocusedBeforeActivation)).then(c, c), this) : (c(), this)
            },
            pause: function(e) {
              return g.active ? (g.manuallyPaused = !0, this._setPausedState(!0, e)) : this
            },
            unpause: function(e) {
              return g.active ? (g.manuallyPaused = !1, u[u.length - 1] !== this ? this : this._setPausedState(!1, e)) : this
            },
            updateContainerElements: function(e) {
              var t = [].concat(e).filter(Boolean);
              return g.containers = t.map(function(e) {
                return "string" == typeof e ? i.querySelector(e) : e
              }), m.isolateSubtrees && function(e) {
                g.active && !g.paused && n._setSubtreeIsolation(!1), g.adjacentElements.clear(), g.alreadySilent.clear();
                var t, o = new Set,
                  r = new Set,
                  i = a(e);
                try {
                  for (i.s(); !(t = i.n()).done;) {
                    var u = t.value;
                    o.add(u);
                    for (var s = "undefined" != typeof ShadowRoot && u.getRootNode() instanceof ShadowRoot, c = u; c;) {
                      o.add(c);
                      var l = c.parentElement,
                        d = [];
                      l ? d = l.children : !l && s && (d = c.getRootNode().children, l = c.getRootNode().host, s = "undefined" != typeof ShadowRoot && l.getRootNode() instanceof ShadowRoot);
                      var f, p = a(d);
                      try {
                        for (p.s(); !(f = p.n()).done;) {
                          var v = f.value;
                          r.add(v)
                        }
                      } catch (e) {
                        p.e(e)
                      } finally {
                        p.f()
                      }
                      c = l
                    }
                  }
                } catch (e) {
                  i.e(e)
                } finally {
                  i.f()
                }
                o.forEach(function(e) {
                  r.delete(e)
                }), g.adjacentElements = r
              }(g.containers), g.active && (S(), m.isolateSubtrees && !g.paused && n._setSubtreeIsolation(!0)), L(), this
            }
          }, Object.defineProperties(n, {
            _isManuallyPaused: {
              value: function() {
                return g.manuallyPaused
              }
            },
            _setPausedState: {
              value: function(e, t) {
                if (g.paused === e) return this;
                if (g.paused = e, e) {
                  var o = w(t, "onPause"),
                    r = w(t, "onPostPause");
                  null == o || o(), j(), L(), n._setSubtreeIsolation(!1), null == r || r()
                } else {
                  var a = w(t, "onUnpause"),
                    i = w(t, "onPostUnpause");
                  null == a || a(), n._setSubtreeIsolation(!0), S(), _(), L(), null == i || i()
                }
                return this
              }
            },
            _setSubtreeIsolation: {
              value: function(e) {
                m.isolateSubtrees && g.adjacentElements.forEach(function(t) {
                  var n;
                  e ? "aria-hidden" === m.isolateSubtrees ? ("true" !== t.ariaHidden && "true" !== (null === (n = t.getAttribute("aria-hidden")) || void 0 === n ? void 0 : n.toLowerCase()) || g.alreadySilent.add(t), t.setAttribute("aria-hidden", "true")) : ((t.inert || t.hasAttribute("inert")) && g.alreadySilent.add(t), t.setAttribute("inert", !0)) : g.alreadySilent.has(t) || ("aria-hidden" === m.isolateSubtrees ? t.removeAttribute("aria-hidden") : t.removeAttribute("inert"))
                })
              }
            }
          }), n.updateContainerElements(e), n
        }
    },
    40055(e, t, n) {
      "use strict";
      var o = n(42528);

      function r() {}

      function a() {}
      a.resetWarningCache = r, e.exports = function() {
        function e(e, t, n, r, a, i) {
          if (i !== o) {
            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw u.name = "Invariant Violation", u
          }
        }

        function t() {
          return e
        }
        e.isRequired = e;
        var n = {
          array: e,
          bigint: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: a,
          resetWarningCache: r
        };
        return n.PropTypes = n, n
      }
    },
    60331(e, t, n) {
      e.exports = n(40055)()
    },
    42528(e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    47766(e, t, n) {
      "use strict";
      n.r(t), n.d(t, {
        focusable: () => O,
        getTabIndex: () => f,
        isFocusable: () => S,
        isTabbable: () => T,
        tabbable: () => w
      });
      var o = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"],
        r = o.join(","),
        a = "undefined" == typeof Element,
        i = a ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
        u = !a && Element.prototype.getRootNode ? function(e) {
          var t;
          return null == e || null === (t = e.getRootNode) || void 0 === t ? void 0 : t.call(e)
        } : function(e) {
          return null == e ? void 0 : e.ownerDocument
        },
        s = function(e, t) {
          var n;
          void 0 === t && (t = !0);
          var o = null == e || null === (n = e.getAttribute) || void 0 === n ? void 0 : n.call(e, "inert");
          return "" === o || "true" === o || t && e && ("function" == typeof e.closest ? e.closest("[inert]") : s(e.parentNode))
        },
        c = function(e, t, n) {
          if (s(e)) return [];
          var o = Array.prototype.slice.apply(e.querySelectorAll(r));
          return t && i.call(e, r) && o.unshift(e), o.filter(n)
        },
        l = function(e, t, n) {
          for (var o = [], a = Array.from(e); a.length;) {
            var u = a.shift();
            if (!s(u, !1))
              if ("SLOT" === u.tagName) {
                var c = u.assignedElements(),
                  d = c.length ? c : u.children,
                  f = l(d, !0, n);
                n.flatten ? o.push.apply(o, f) : o.push({
                  scopeParent: u,
                  candidates: f
                })
              } else {
                i.call(u, r) && n.filter(u) && (t || !e.includes(u)) && o.push(u);
                var p = u.shadowRoot || "function" == typeof n.getShadowRoot && n.getShadowRoot(u),
                  v = !s(p, !1) && (!n.shadowRootFilter || n.shadowRootFilter(u));
                if (p && v) {
                  var b = l(!0 === p ? u.children : p.children, !0, n);
                  n.flatten ? o.push.apply(o, b) : o.push({
                    scopeParent: u,
                    candidates: b
                  })
                } else a.unshift.apply(a, u.children)
              }
          }
          return o
        },
        d = function(e) {
          return !isNaN(parseInt(e.getAttribute("tabindex"), 10))
        },
        f = function(e) {
          if (!e) throw new Error("No node provided");
          return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || function(e) {
            var t, n = null == e || null === (t = e.getAttribute) || void 0 === t ? void 0 : t.call(e, "contenteditable");
            return "" === n || "true" === n
          }(e)) && !d(e) ? 0 : e.tabIndex
        },
        p = function(e, t) {
          return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
        },
        v = function(e) {
          return "INPUT" === e.tagName
        },
        b = function(e) {
          var t = e.getBoundingClientRect(),
            n = t.width,
            o = t.height;
          return 0 === n && 0 === o
        },
        h = function(e, t) {
          return !(t.disabled || function(e) {
            return v(e) && "hidden" === e.type
          }(t) || function(e, t) {
            var n = t.displayCheck,
              o = t.getShadowRoot;
            if ("full-native" === n && "checkVisibility" in e) return !e.checkVisibility({
              checkOpacity: !1,
              opacityProperty: !1,
              contentVisibilityAuto: !0,
              visibilityProperty: !0,
              checkVisibilityCSS: !0
            });
            if ("hidden" === getComputedStyle(e).visibility) return !0;
            var r = i.call(e, "details>summary:first-of-type") ? e.parentElement : e;
            if (i.call(r, "details:not([open]) *")) return !0;
            if (n && "full" !== n && "full-native" !== n && "legacy-full" !== n) {
              if ("non-zero-area" === n) return b(e)
            } else {
              if ("function" == typeof o) {
                for (var a = e; e;) {
                  var s = e.parentElement,
                    c = u(e);
                  if (s && !s.shadowRoot && !0 === o(s)) return b(e);
                  e = e.assignedSlot ? e.assignedSlot : s || c === e.ownerDocument ? s : c.host
                }
                e = a
              }
              if (function(e) {
                  var t, n, o, r, a = e && u(e),
                    i = null === (t = a) || void 0 === t ? void 0 : t.host,
                    s = !1;
                  if (a && a !== e)
                    for (s = !!(null !== (n = i) && void 0 !== n && null !== (o = n.ownerDocument) && void 0 !== o && o.contains(i) || null != e && null !== (r = e.ownerDocument) && void 0 !== r && r.contains(e)); !s && i;) {
                      var c, l, d;
                      s = !(null === (l = i = null === (c = a = u(i)) || void 0 === c ? void 0 : c.host) || void 0 === l || null === (d = l.ownerDocument) || void 0 === d || !d.contains(i))
                    }
                  return s
                }(e)) return !e.getClientRects().length;
              if ("legacy-full" !== n) return !0
            }
            return !1
          }(t, e) || function(e) {
            return "DETAILS" === e.tagName && Array.prototype.slice.apply(e.children).some(function(e) {
              return "SUMMARY" === e.tagName
            })
          }(t) || function(e) {
            if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
              for (var t = e.parentElement; t;) {
                if ("FIELDSET" === t.tagName && t.disabled) {
                  for (var n = 0; n < t.children.length; n++) {
                    var o = t.children.item(n);
                    if ("LEGEND" === o.tagName) return !!i.call(t, "fieldset[disabled] *") || !o.contains(e)
                  }
                  return !0
                }
                t = t.parentElement
              }
            return !1
          }(t))
        },
        y = function(e, t) {
          return !(function(e) {
            return function(e) {
              return v(e) && "radio" === e.type
            }(e) && ! function(e) {
              if (!e.name) return !0;
              var t, n = e.form || u(e),
                o = function(e) {
                  return n.querySelectorAll('input[type="radio"][name="' + e + '"]')
                };
              if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) t = o(window.CSS.escape(e.name));
              else try {
                t = o(e.name)
              } catch (e) {
                return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1
              }
              var r = function(e, t) {
                for (var n = 0; n < e.length; n++)
                  if (e[n].checked && e[n].form === t) return e[n]
              }(t, e.form);
              return !r || r === e
            }(e)
          }(t) || f(t) < 0 || !h(e, t))
        },
        m = function(e) {
          var t = parseInt(e.getAttribute("tabindex"), 10);
          return !!(isNaN(t) || t >= 0)
        },
        g = function(e) {
          var t = [],
            n = [];
          return e.forEach(function(e, o) {
            var r = !!e.scopeParent,
              a = r ? e.scopeParent : e,
              i = function(e, t) {
                var n = f(e);
                return n < 0 && t && !d(e) ? 0 : n
              }(a, r),
              u = r ? g(e.candidates) : a;
            0 === i ? r ? t.push.apply(t, u) : t.push(a) : n.push({
              documentOrder: o,
              tabIndex: i,
              item: e,
              isScope: r,
              content: u
            })
          }), n.sort(p).reduce(function(e, t) {
            return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
          }, []).concat(t)
        },
        w = function(e, t) {
          var n;
          return n = (t = t || {}).getShadowRoot ? l([e], t.includeContainer, {
            filter: y.bind(null, t),
            flatten: !1,
            getShadowRoot: t.getShadowRoot,
            shadowRootFilter: m
          }) : c(e, t.includeContainer, y.bind(null, t)), g(n)
        },
        O = function(e, t) {
          return (t = t || {}).getShadowRoot ? l([e], t.includeContainer, {
            filter: h.bind(null, t),
            flatten: !0,
            getShadowRoot: t.getShadowRoot
          }) : c(e, t.includeContainer, h.bind(null, t))
        },
        T = function(e, t) {
          if (t = t || {}, !e) throw new Error("No node provided");
          return !1 !== i.call(e, r) && y(t, e)
        },
        E = o.concat("iframe:not([inert]):not([inert] *)").join(","),
        S = function(e, t) {
          if (t = t || {}, !e) throw new Error("No node provided");
          return !1 !== i.call(e, E) && h(t, e)
        }
    },
    81684(e, t, n) {
      "use strict";
      n.d(t, {
        DI: () => o.DI
      });
      var o = n(76182);
      n(74631)
    }
  }
]);