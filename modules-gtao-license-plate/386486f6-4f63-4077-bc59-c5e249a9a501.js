try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "386486f6-4f63-4077-bc59-c5e249a9a501", e._sentryDebugIdIdentifier = "sentry-dbid-386486f6-4f63-4077-bc59-c5e249a9a501")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [8299], {
    44514(e, t, r) {
      "use strict";

      function n(e) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, n(e)
      }

      function o(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, l(n.key), n)
        }
      }

      function a(e, t, r) {
        return t = i(t),
          function(e, t) {
            if (t && ("object" == n(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e)
          }(e, s() ? Reflect.construct(t, r || [], i(e).constructor) : t.apply(e, r))
      }

      function s() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (s = function() {
          return !!e
        })()
      }

      function i(e) {
        return i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, i(e)
      }

      function d(e, t) {
        return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, d(e, t)
      }

      function l(e) {
        var t = function(e) {
          if ("object" != n(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != n(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == n(t) ? t : t + ""
      }
      var u = r(93082),
        c = r(60331),
        f = r(38733).createFocusTrap,
        p = r(56295).isFocusable,
        v = function(e) {
          function t(e) {
            var r, n, o, s;
            ! function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), n = r = a(this, t, [e]), s = function(e) {
              var t, r = null !== (t = this.internalOptions[e]) && void 0 !== t ? t : this.originalOptions[e];
              if ("function" == typeof r) {
                for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
                r = r.apply(void 0, o)
              }
              if (!0 === r && (r = void 0), !r) {
                if (void 0 === r || !1 === r) return r;
                throw new Error("`".concat(e, "` was specified but was not a node, or did not return a node"))
              }
              var s, i = r;
              if ("string" == typeof r && !(i = null === (s = this.getDocument()) || void 0 === s ? void 0 : s.querySelector(r))) throw new Error("`".concat(e, "` as selector refers to no known node"));
              return i
            }, (o = l(o = "getNodeForOption")) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s, r.handleDeactivate = r.handleDeactivate.bind(r), r.handlePostDeactivate = r.handlePostDeactivate.bind(r), r.handleClickOutsideDeactivates = r.handleClickOutsideDeactivates.bind(r), r.internalOptions = {
              returnFocusOnDeactivate: !1,
              checkCanReturnFocus: null,
              onDeactivate: r.handleDeactivate,
              onPostDeactivate: r.handlePostDeactivate,
              clickOutsideDeactivates: r.handleClickOutsideDeactivates
            }, r.originalOptions = {
              returnFocusOnDeactivate: !0,
              onDeactivate: null,
              onPostDeactivate: null,
              checkCanReturnFocus: null,
              clickOutsideDeactivates: !1
            };
            var i = e.focusTrapOptions;
            for (var d in i) Object.prototype.hasOwnProperty.call(i, d) && ("returnFocusOnDeactivate" !== d && "onDeactivate" !== d && "onPostDeactivate" !== d && "checkCanReturnFocus" !== d && "clickOutsideDeactivates" !== d ? r.internalOptions[d] = i[d] : r.originalOptions[d] = i[d]);
            return r.outsideClick = null, r.focusTrapElements = e.containerElements || [], r.updatePreviousElement(), r
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
            }), t && d(e, t)
          }(t, e), r = t, (n = [{
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
                    r = !(!e.originalOptions.returnFocusOnDeactivate || null == t || !t.focus || e.outsideClick && (!e.outsideClick.allowDeactivation || p(e.outsideClick.target, e.internalOptions.tabbableOptions))),
                    n = e.internalOptions.preventScroll,
                    o = void 0 !== n && n;
                  r && t.focus({
                    preventScroll: o
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
                  r = e.active && !this.props.active,
                  n = !e.paused && this.props.paused,
                  o = e.paused && !this.props.paused;
                if (t && (this.updatePreviousElement(), this.focusTrap.activate()), r) return void this.deactivateTrap();
                n && this.focusTrap.pause(), o && this.focusTrap.unpause()
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
                t = this.props.children ? u.Children.only(this.props.children) : void 0;
              if (t) {
                if (t.type && t.type === u.Fragment) throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");
                return u.cloneElement(t, {
                  ref: function(r) {
                    var n = e.props.containerElements;
                    t && ("function" == typeof t.ref ? t.ref(r) : t.ref && (t.ref.current = r)), e.focusTrapElements = n || [r]
                  }
                })
              }
              return null
            }
          }]) && o(r.prototype, n), Object.defineProperty(r, "prototype", {
            writable: !1
          }), r;
          var r, n
        }(u.Component),
        y = "undefined" == typeof Element ? Function : Element;
      v.propTypes = {
        active: c.bool,
        paused: c.bool,
        focusTrapOptions: c.shape({
          document: c.object,
          onActivate: c.func,
          onPostActivate: c.func,
          checkCanFocusTrap: c.func,
          onPause: c.func,
          onPostPause: c.func,
          onUnpause: c.func,
          onPostUnpause: c.func,
          onDeactivate: c.func,
          onPostDeactivate: c.func,
          checkCanReturnFocus: c.func,
          initialFocus: c.oneOfType([c.instanceOf(y), c.string, c.bool, c.func]),
          fallbackFocus: c.oneOfType([c.instanceOf(y), c.string, c.func]),
          escapeDeactivates: c.oneOfType([c.bool, c.func]),
          clickOutsideDeactivates: c.oneOfType([c.bool, c.func]),
          returnFocusOnDeactivate: c.bool,
          setReturnFocus: c.oneOfType([c.instanceOf(y), c.string, c.bool, c.func]),
          allowOutsideClick: c.oneOfType([c.bool, c.func]),
          preventScroll: c.bool,
          tabbableOptions: c.shape({
            displayCheck: c.oneOf(["full", "legacy-full", "non-zero-area", "none"]),
            getShadowRoot: c.oneOfType([c.bool, c.func])
          }),
          trapStack: c.array,
          isKeyForward: c.func,
          isKeyBackward: c.func
        }),
        containerElements: c.arrayOf(c.instanceOf(y)),
        children: c.oneOfType([c.element, c.instanceOf(y)])
      }, v.defaultProps = {
        active: !0,
        paused: !1,
        focusTrapOptions: {},
        _createFocusTrap: f
      }, e.exports = v
    },
    38733(e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        createFocusTrap: () => b
      });
      var n = r(56295);

      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function a(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = l(e)) || t) {
            r && (e = r);
            var n = 0,
              o = function() {};
            return {
              s: o,
              n: function() {
                return n >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[n++]
                }
              },
              e: function(e) {
                throw e
              },
              f: o
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, s = !0,
          i = !1;
        return {
          s: function() {
            r = r.call(e)
          },
          n: function() {
            var e = r.next();
            return s = e.done, e
          },
          e: function(e) {
            i = !0, a = e
          },
          f: function() {
            try {
              s || null == r.return || r.return()
            } finally {
              if (i) throw a
            }
          }
        }
      }

      function s(e, t, r) {
        return (t = function(e) {
          var t = function(e, t) {
            if ("object" != typeof e || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(e, t);
              if ("object" != typeof n) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e, "string");
          return "symbol" == typeof t ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? i(Object(r), !0).forEach(function(t) {
            s(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function l(e, t) {
        if (e) {
          if ("string" == typeof e) return o(e, t);
          var r = {}.toString.call(e).slice(8, -1);
          return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? o(e, t) : void 0
        }
      }
      var u = {
          getActiveTrap: function(e) {
            return (null == e ? void 0 : e.length) > 0 ? e[e.length - 1] : null
          },
          activateTrap: function(e, t) {
            t !== u.getActiveTrap(e) && u.pauseTrap(e);
            var r = e.indexOf(t); - 1 === r || e.splice(r, 1), e.push(t)
          },
          deactivateTrap: function(e, t) {
            var r = e.indexOf(t); - 1 !== r && e.splice(r, 1), u.unpauseTrap(e)
          },
          pauseTrap: function(e) {
            var t = u.getActiveTrap(e);
            null == t || t._setPausedState(!0)
          },
          unpauseTrap: function(e) {
            var t = u.getActiveTrap(e);
            t && !t._isManuallyPaused() && t._setPausedState(!1)
          }
        },
        c = function(e) {
          return "Tab" === (null == e ? void 0 : e.key) || 9 === (null == e ? void 0 : e.keyCode)
        },
        f = function(e) {
          return c(e) && !e.shiftKey
        },
        p = function(e) {
          return c(e) && e.shiftKey
        },
        v = function(e) {
          return setTimeout(e, 0)
        },
        y = function(e) {
          for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
          return "function" == typeof e ? e.apply(void 0, r) : e
        },
        m = function(e) {
          return e.target.shadowRoot && "function" == typeof e.composedPath ? e.composedPath()[0] : e.target
        },
        h = [],
        b = function(e, t) {
          var r, s = (null == t ? void 0 : t.document) || document,
            i = (null == t ? void 0 : t.trapStack) || h,
            b = d({
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
            w = function(e, t, r) {
              return e && void 0 !== e[t] ? e[t] : b[r || t]
            },
            C = function(e, t) {
              var r = "function" == typeof(null == t ? void 0 : t.composedPath) ? t.composedPath() : void 0;
              return g.containerGroups.findIndex(function(t) {
                var n = t.container,
                  o = t.tabbableNodes;
                return n.contains(e) || (null == r ? void 0 : r.includes(n)) || o.find(function(t) {
                  return t === e
                })
              })
            },
            x = function(e) {
              var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = r.hasFallback,
                a = void 0 !== n && n,
                i = r.params,
                d = void 0 === i ? [] : i,
                u = b[e];
              if ("function" == typeof u && (u = u.apply(void 0, function(e) {
                  if (Array.isArray(e)) return o(e)
                }(t = d) || function(e) {
                  if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(t) || l(t) || function() {
                  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }())), !0 === u && (u = void 0), !u) {
                if (void 0 === u || !1 === u) return u;
                throw new Error("`".concat(e, "` was specified but was not a node, or did not return a node"))
              }
              var c = u;
              if ("string" == typeof u) {
                try {
                  c = s.querySelector(u)
                } catch (t) {
                  throw new Error("`".concat(e, '` appears to be an invalid selector; error="').concat(t.message, '"'))
                }
                if (!c && !a) throw new Error("`".concat(e, "` as selector refers to no known node"))
              }
              return c
            },
            _ = function() {
              var e = x("initialFocus", {
                hasFallback: !0
              });
              if (!1 === e) return !1;
              if (void 0 === e || e && !(0, n.isFocusable)(e, b.tabbableOptions))
                if (C(s.activeElement) >= 0) e = s.activeElement;
                else {
                  var t = g.tabbableGroups[0];
                  e = t && t.firstTabbableNode || x("fallbackFocus")
                }
              else null === e && (e = x("fallbackFocus"));
              if (!e) throw new Error("Your focus-trap needs to have at least one focusable element");
              return e
            },
            j = function() {
              if (g.containerGroups = g.containers.map(function(e) {
                  var t = (0, n.tabbable)(e, b.tabbableOptions),
                    r = (0, n.focusable)(e, b.tabbableOptions),
                    o = t.length > 0 ? t[0] : void 0,
                    a = t.length > 0 ? t[t.length - 1] : void 0,
                    s = r.find(function(e) {
                      return (0, n.isTabbable)(e)
                    }),
                    i = r.slice().reverse().find(function(e) {
                      return (0, n.isTabbable)(e)
                    }),
                    d = !!t.find(function(e) {
                      return (0, n.getTabIndex)(e) > 0
                    });
                  return {
                    container: e,
                    tabbableNodes: t,
                    focusableNodes: r,
                    posTabIndexesFound: d,
                    firstTabbableNode: o,
                    lastTabbableNode: a,
                    firstDomTabbableNode: s,
                    lastDomTabbableNode: i,
                    nextTabbableNode: function(e) {
                      var o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        a = t.indexOf(e);
                      return a < 0 ? o ? r.slice(r.indexOf(e) + 1).find(function(e) {
                        return (0, n.isTabbable)(e)
                      }) : r.slice(0, r.indexOf(e)).reverse().find(function(e) {
                        return (0, n.isTabbable)(e)
                      }) : t[a + (o ? 1 : -1)]
                    }
                  }
                }), g.tabbableGroups = g.containerGroups.filter(function(e) {
                  return e.tabbableNodes.length > 0
                }), g.tabbableGroups.length <= 0 && !x("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
              if (g.containerGroups.find(function(e) {
                  return e.posTabIndexesFound
                }) && g.containerGroups.length > 1) throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")
            },
            O = function(e) {
              var t = e.activeElement;
              if (t) return t.shadowRoot && null !== t.shadowRoot.activeElement ? O(t.shadowRoot) : t
            },
            P = function(e) {
              !1 !== e && e !== O(document) && (e && e.focus ? (e.focus({
                preventScroll: !!b.preventScroll
              }), g.mostRecentlyFocusedNode = e, function(e) {
                return e.tagName && "input" === e.tagName.toLowerCase() && "function" == typeof e.select
              }(e) && e.select()) : P(_()))
            },
            S = function(e) {
              var t = x("setReturnFocus", {
                params: [e]
              });
              return t || !1 !== t && e
            },
            D = function(e) {
              var t = e.target,
                r = e.event,
                o = e.isBackward,
                a = void 0 !== o && o;
              t = t || m(r), j();
              var s = null;
              if (g.tabbableGroups.length > 0) {
                var i = C(t, r),
                  d = i >= 0 ? g.containerGroups[i] : void 0;
                if (i < 0) s = a ? g.tabbableGroups[g.tabbableGroups.length - 1].lastTabbableNode : g.tabbableGroups[0].firstTabbableNode;
                else if (a) {
                  var l = g.tabbableGroups.findIndex(function(e) {
                    var r = e.firstTabbableNode;
                    return t === r
                  });
                  if (l < 0 && (d.container === t || (0, n.isFocusable)(t, b.tabbableOptions) && !(0, n.isTabbable)(t, b.tabbableOptions) && !d.nextTabbableNode(t, !1)) && (l = i), l >= 0) {
                    var u = 0 === l ? g.tabbableGroups.length - 1 : l - 1,
                      f = g.tabbableGroups[u];
                    s = (0, n.getTabIndex)(t) >= 0 ? f.lastTabbableNode : f.lastDomTabbableNode
                  } else c(r) || (s = d.nextTabbableNode(t, !1))
                } else {
                  var p = g.tabbableGroups.findIndex(function(e) {
                    var r = e.lastTabbableNode;
                    return t === r
                  });
                  if (p < 0 && (d.container === t || (0, n.isFocusable)(t, b.tabbableOptions) && !(0, n.isTabbable)(t, b.tabbableOptions) && !d.nextTabbableNode(t)) && (p = i), p >= 0) {
                    var v = p === g.tabbableGroups.length - 1 ? 0 : p + 1,
                      y = g.tabbableGroups[v];
                    s = (0, n.getTabIndex)(t) >= 0 ? y.firstTabbableNode : y.firstDomTabbableNode
                  } else c(r) || (s = d.nextTabbableNode(t))
                }
              } else s = x("fallbackFocus");
              return s
            },
            R = function(e) {
              var t = m(e);
              C(t, e) >= 0 || (y(b.clickOutsideDeactivates, e) ? r.deactivate({
                returnFocus: b.returnFocusOnDeactivate
              }) : y(b.allowOutsideClick, e) || e.preventDefault())
            },
            N = function(e) {
              var t = m(e),
                r = C(t, e) >= 0;
              if (r || t instanceof Document) r && (g.mostRecentlyFocusedNode = t);
              else {
                var o;
                e.stopImmediatePropagation();
                var a = !0;
                if (g.mostRecentlyFocusedNode)
                  if ((0, n.getTabIndex)(g.mostRecentlyFocusedNode) > 0) {
                    var s = C(g.mostRecentlyFocusedNode),
                      i = g.containerGroups[s].tabbableNodes;
                    if (i.length > 0) {
                      var d = i.findIndex(function(e) {
                        return e === g.mostRecentlyFocusedNode
                      });
                      d >= 0 && (b.isKeyForward(g.recentNavEvent) ? d + 1 < i.length && (o = i[d + 1], a = !1) : d - 1 >= 0 && (o = i[d - 1], a = !1))
                    }
                  } else g.containerGroups.some(function(e) {
                    return e.tabbableNodes.some(function(e) {
                      return (0, n.getTabIndex)(e) > 0
                    })
                  }) || (a = !1);
                else a = !1;
                a && (o = D({
                  target: g.mostRecentlyFocusedNode,
                  isBackward: b.isKeyBackward(g.recentNavEvent)
                })), P(o || g.mostRecentlyFocusedNode || _())
              }
              g.recentNavEvent = void 0
            },
            E = function(e) {
              (b.isKeyForward(e) || b.isKeyBackward(e)) && function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                g.recentNavEvent = e;
                var r = D({
                  event: e,
                  isBackward: t
                });
                r && (c(e) && e.preventDefault(), P(r))
              }(e, b.isKeyBackward(e))
            },
            k = function(e) {
              var t;
              "Escape" !== (null == (t = e) ? void 0 : t.key) && "Esc" !== (null == t ? void 0 : t.key) && 27 !== (null == t ? void 0 : t.keyCode) || !1 === y(b.escapeDeactivates, e) || (e.preventDefault(), r.deactivate())
            },
            I = function(e) {
              var t = m(e);
              C(t, e) >= 0 || y(b.clickOutsideDeactivates, e) || y(b.allowOutsideClick, e) || (e.preventDefault(), e.stopImmediatePropagation())
            },
            T = function() {
              if (g.active) return u.activateTrap(i, r), g.delayInitialFocusTimer = b.delayInitialFocus ? v(function() {
                P(_())
              }) : P(_()), s.addEventListener("focusin", N, !0), s.addEventListener("mousedown", R, {
                capture: !0,
                passive: !1
              }), s.addEventListener("touchstart", R, {
                capture: !0,
                passive: !1
              }), s.addEventListener("click", I, {
                capture: !0,
                passive: !1
              }), s.addEventListener("keydown", E, {
                capture: !0,
                passive: !1
              }), s.addEventListener("keydown", k), r
            },
            V = function() {
              if (g.active) return s.removeEventListener("focusin", N, !0), s.removeEventListener("mousedown", R, !0), s.removeEventListener("touchstart", R, !0), s.removeEventListener("click", I, !0), s.removeEventListener("keydown", E, !0), s.removeEventListener("keydown", k), r
            },
            z = "undefined" != typeof window && "MutationObserver" in window ? new MutationObserver(function(e) {
              e.some(function(e) {
                return Array.from(e.removedNodes).some(function(e) {
                  return e === g.mostRecentlyFocusedNode
                })
              }) && P(_())
            }) : void 0,
            L = function() {
              z && (z.disconnect(), g.active && !g.paused && g.containers.map(function(e) {
                z.observe(e, {
                  subtree: !0,
                  childList: !0
                })
              }))
            };
          return r = {
            get active() {
              return g.active
            },
            get paused() {
              return g.paused
            },
            activate: function(e) {
              if (g.active) return this;
              var t, n = w(e, "onActivate"),
                o = w(e, "onPostActivate"),
                a = w(e, "checkCanFocusTrap"),
                d = u.getActiveTrap(i),
                l = !1;
              d && !d.paused && (null === (t = d._setSubtreeIsolation) || void 0 === t || t.call(d, !1), l = !0);
              try {
                a || j(), g.active = !0, g.paused = !1, g.nodeFocusedBeforeActivation = O(s), null == n || n();
                var c = function() {
                  a && j(), T(), L(), b.isolateSubtrees && r._setSubtreeIsolation(!0), null == o || o()
                };
                if (a) return a(g.containers.concat()).then(c, c), this;
                c()
              } catch (e) {
                var f;
                throw d === u.getActiveTrap(i) && l && (null === (f = d._setSubtreeIsolation) || void 0 === f || f.call(d, !0)), e
              }
              return this
            },
            deactivate: function(e) {
              if (!g.active) return this;
              var t = d({
                onDeactivate: b.onDeactivate,
                onPostDeactivate: b.onPostDeactivate,
                checkCanReturnFocus: b.checkCanReturnFocus
              }, e);
              clearTimeout(g.delayInitialFocusTimer), g.delayInitialFocusTimer = void 0, g.paused || r._setSubtreeIsolation(!1), g.alreadySilent.clear(), V(), g.active = !1, g.paused = !1, L(), u.deactivateTrap(i, r);
              var n = w(t, "onDeactivate"),
                o = w(t, "onPostDeactivate"),
                a = w(t, "checkCanReturnFocus"),
                s = w(t, "returnFocus", "returnFocusOnDeactivate");
              null == n || n();
              var l = function() {
                v(function() {
                  s && P(S(g.nodeFocusedBeforeActivation)), null == o || o()
                })
              };
              return s && a ? (a(S(g.nodeFocusedBeforeActivation)).then(l, l), this) : (l(), this)
            },
            pause: function(e) {
              return g.active ? (g.manuallyPaused = !0, this._setPausedState(!0, e)) : this
            },
            unpause: function(e) {
              return g.active ? (g.manuallyPaused = !1, i[i.length - 1] !== this ? this : this._setPausedState(!1, e)) : this
            },
            updateContainerElements: function(e) {
              var t = [].concat(e).filter(Boolean);
              return g.containers = t.map(function(e) {
                return "string" == typeof e ? s.querySelector(e) : e
              }), b.isolateSubtrees && function(e) {
                g.active && !g.paused && r._setSubtreeIsolation(!1), g.adjacentElements.clear(), g.alreadySilent.clear();
                var t, n = new Set,
                  o = new Set,
                  s = a(e);
                try {
                  for (s.s(); !(t = s.n()).done;) {
                    var i = t.value;
                    n.add(i);
                    for (var d = "undefined" != typeof ShadowRoot && i.getRootNode() instanceof ShadowRoot, l = i; l;) {
                      n.add(l);
                      var u = l.parentElement,
                        c = [];
                      u ? c = u.children : !u && d && (c = l.getRootNode().children, u = l.getRootNode().host, d = "undefined" != typeof ShadowRoot && u.getRootNode() instanceof ShadowRoot);
                      var f, p = a(c);
                      try {
                        for (p.s(); !(f = p.n()).done;) {
                          var v = f.value;
                          o.add(v)
                        }
                      } catch (e) {
                        p.e(e)
                      } finally {
                        p.f()
                      }
                      l = u
                    }
                  }
                } catch (e) {
                  s.e(e)
                } finally {
                  s.f()
                }
                n.forEach(function(e) {
                  o.delete(e)
                }), g.adjacentElements = o
              }(g.containers), g.active && (j(), b.isolateSubtrees && !g.paused && r._setSubtreeIsolation(!0)), L(), this
            }
          }, Object.defineProperties(r, {
            _isManuallyPaused: {
              value: function() {
                return g.manuallyPaused
              }
            },
            _setPausedState: {
              value: function(e, t) {
                if (g.paused === e) return this;
                if (g.paused = e, e) {
                  var n = w(t, "onPause"),
                    o = w(t, "onPostPause");
                  null == n || n(), V(), L(), r._setSubtreeIsolation(!1), null == o || o()
                } else {
                  var a = w(t, "onUnpause"),
                    s = w(t, "onPostUnpause");
                  null == a || a(), r._setSubtreeIsolation(!0), j(), T(), L(), null == s || s()
                }
                return this
              }
            },
            _setSubtreeIsolation: {
              value: function(e) {
                b.isolateSubtrees && g.adjacentElements.forEach(function(t) {
                  var r;
                  e ? "aria-hidden" === b.isolateSubtrees ? ("true" !== t.ariaHidden && "true" !== (null === (r = t.getAttribute("aria-hidden")) || void 0 === r ? void 0 : r.toLowerCase()) || g.alreadySilent.add(t), t.setAttribute("aria-hidden", "true")) : ((t.inert || t.hasAttribute("inert")) && g.alreadySilent.add(t), t.setAttribute("inert", !0)) : g.alreadySilent.has(t) || ("aria-hidden" === b.isolateSubtrees ? t.removeAttribute("aria-hidden") : t.removeAttribute("inert"))
                })
              }
            }
          }), r.updateContainerElements(e), r
        }
    },
    40055(e, t, r) {
      "use strict";
      var n = r(42528);

      function o() {}

      function a() {}
      a.resetWarningCache = o, e.exports = function() {
        function e(e, t, r, o, a, s) {
          if (s !== n) {
            var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw i.name = "Invariant Violation", i
          }
        }

        function t() {
          return e
        }
        e.isRequired = e;
        var r = {
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
          resetWarningCache: o
        };
        return r.PropTypes = r, r
      }
    },
    60331(e, t, r) {
      e.exports = r(40055)()
    },
    42528(e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    56295(e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        focusable: () => C,
        getTabIndex: () => f,
        isFocusable: () => j,
        isTabbable: () => x,
        tabbable: () => w
      });
      var n = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"],
        o = n.join(","),
        a = "undefined" == typeof Element,
        s = a ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
        i = !a && Element.prototype.getRootNode ? function(e) {
          var t;
          return null == e || null === (t = e.getRootNode) || void 0 === t ? void 0 : t.call(e)
        } : function(e) {
          return null == e ? void 0 : e.ownerDocument
        },
        d = function(e, t) {
          var r;
          void 0 === t && (t = !0);
          var n = null == e || null === (r = e.getAttribute) || void 0 === r ? void 0 : r.call(e, "inert");
          return "" === n || "true" === n || t && e && ("function" == typeof e.closest ? e.closest("[inert]") : d(e.parentNode))
        },
        l = function(e, t, r) {
          if (d(e)) return [];
          var n = Array.prototype.slice.apply(e.querySelectorAll(o));
          return t && s.call(e, o) && n.unshift(e), n.filter(r)
        },
        u = function(e, t, r) {
          for (var n = [], a = Array.from(e); a.length;) {
            var i = a.shift();
            if (!d(i, !1))
              if ("SLOT" === i.tagName) {
                var l = i.assignedElements(),
                  c = l.length ? l : i.children,
                  f = u(c, !0, r);
                r.flatten ? n.push.apply(n, f) : n.push({
                  scopeParent: i,
                  candidates: f
                })
              } else {
                s.call(i, o) && r.filter(i) && (t || !e.includes(i)) && n.push(i);
                var p = i.shadowRoot || "function" == typeof r.getShadowRoot && r.getShadowRoot(i),
                  v = !d(p, !1) && (!r.shadowRootFilter || r.shadowRootFilter(i));
                if (p && v) {
                  var y = u(!0 === p ? i.children : p.children, !0, r);
                  r.flatten ? n.push.apply(n, y) : n.push({
                    scopeParent: i,
                    candidates: y
                  })
                } else a.unshift.apply(a, i.children)
              }
          }
          return n
        },
        c = function(e) {
          return !isNaN(parseInt(e.getAttribute("tabindex"), 10))
        },
        f = function(e) {
          if (!e) throw new Error("No node provided");
          return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || function(e) {
            var t, r = null == e || null === (t = e.getAttribute) || void 0 === t ? void 0 : t.call(e, "contenteditable");
            return "" === r || "true" === r
          }(e)) && !c(e) ? 0 : e.tabIndex
        },
        p = function(e, t) {
          return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
        },
        v = function(e) {
          return "INPUT" === e.tagName
        },
        y = function(e) {
          var t = e.getBoundingClientRect(),
            r = t.width,
            n = t.height;
          return 0 === r && 0 === n
        },
        m = function(e, t) {
          return !(t.disabled || function(e) {
            return v(e) && "hidden" === e.type
          }(t) || function(e, t) {
            var r = t.displayCheck,
              n = t.getShadowRoot;
            if ("full-native" === r && "checkVisibility" in e) return !e.checkVisibility({
              checkOpacity: !1,
              opacityProperty: !1,
              contentVisibilityAuto: !0,
              visibilityProperty: !0,
              checkVisibilityCSS: !0
            });
            var o = getComputedStyle(e).visibility;
            if ("hidden" === o || "collapse" === o) return !0;
            var a = s.call(e, "details>summary:first-of-type") ? e.parentElement : e;
            if (s.call(a, "details:not([open]) *")) return !0;
            if (r && "full" !== r && "full-native" !== r && "legacy-full" !== r) {
              if ("non-zero-area" === r) return y(e)
            } else {
              if ("function" == typeof n) {
                for (var d = e; e;) {
                  var l = e.parentElement,
                    u = i(e);
                  if (l && !l.shadowRoot && !0 === n(l)) return y(e);
                  e = e.assignedSlot ? e.assignedSlot : l || u === e.ownerDocument ? l : u.host
                }
                e = d
              }
              if (function(e) {
                  var t, r, n, o, a = e && i(e),
                    s = null === (t = a) || void 0 === t ? void 0 : t.host,
                    d = !1;
                  if (a && a !== e)
                    for (d = !!(null !== (r = s) && void 0 !== r && null !== (n = r.ownerDocument) && void 0 !== n && n.contains(s) || null != e && null !== (o = e.ownerDocument) && void 0 !== o && o.contains(e)); !d && s;) {
                      var l, u, c;
                      d = !(null === (u = s = null === (l = a = i(s)) || void 0 === l ? void 0 : l.host) || void 0 === u || null === (c = u.ownerDocument) || void 0 === c || !c.contains(s))
                    }
                  return d
                }(e)) return !e.getClientRects().length;
              if ("legacy-full" !== r) return !0
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
                  for (var r = 0; r < t.children.length; r++) {
                    var n = t.children.item(r);
                    if ("LEGEND" === n.tagName) return !!s.call(t, "fieldset[disabled] *") || !n.contains(e)
                  }
                  return !0
                }
                t = t.parentElement
              }
            return !1
          }(t))
        },
        h = function(e, t) {
          return !(function(e) {
            return function(e) {
              return v(e) && "radio" === e.type
            }(e) && ! function(e) {
              if (!e.name) return !0;
              var t, r = e.form || i(e),
                n = function(e) {
                  return r.querySelectorAll('input[type="radio"][name="' + e + '"]')
                };
              if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) t = n(window.CSS.escape(e.name));
              else try {
                t = n(e.name)
              } catch (e) {
                return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1
              }
              var o = function(e, t) {
                for (var r = 0; r < e.length; r++)
                  if (e[r].checked && e[r].form === t) return e[r]
              }(t, e.form);
              return !o || o === e
            }(e)
          }(t) || f(t) < 0 || !m(e, t))
        },
        b = function(e) {
          var t = parseInt(e.getAttribute("tabindex"), 10);
          return !!(isNaN(t) || t >= 0)
        },
        g = function(e) {
          var t = [],
            r = [];
          return e.forEach(function(e, n) {
            var o = !!e.scopeParent,
              a = o ? e.scopeParent : e,
              s = function(e, t) {
                var r = f(e);
                return r < 0 && t && !c(e) ? 0 : r
              }(a, o),
              i = o ? g(e.candidates) : a;
            0 === s ? o ? t.push.apply(t, i) : t.push(a) : r.push({
              documentOrder: n,
              tabIndex: s,
              item: e,
              isScope: o,
              content: i
            })
          }), r.sort(p).reduce(function(e, t) {
            return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
          }, []).concat(t)
        },
        w = function(e, t) {
          var r;
          return r = (t = t || {}).getShadowRoot ? u([e], t.includeContainer, {
            filter: h.bind(null, t),
            flatten: !1,
            getShadowRoot: t.getShadowRoot,
            shadowRootFilter: b
          }) : l(e, t.includeContainer, h.bind(null, t)), g(r)
        },
        C = function(e, t) {
          return (t = t || {}).getShadowRoot ? u([e], t.includeContainer, {
            filter: m.bind(null, t),
            flatten: !0,
            getShadowRoot: t.getShadowRoot
          }) : l(e, t.includeContainer, m.bind(null, t))
        },
        x = function(e, t) {
          if (t = t || {}, !e) throw new Error("No node provided");
          return !1 !== s.call(e, o) && h(t, e)
        },
        _ = n.concat("iframe:not([inert]):not([inert] *)").join(","),
        j = function(e, t) {
          if (t = t || {}, !e) throw new Error("No node provided");
          return !1 !== s.call(e, _) && m(t, e)
        }
    },
    60172(e, t, r) {
      "use strict";
      r.d(t, {
        DI: () => n.DI
      });
      var n = r(6365);
      r(86889)
    },
    67142(e, t, r) {
      "use strict";
      r.d(t, {
        ms: () => n,
        FK: () => s
      });
      var n = {};
      r.r(n), r.d(n, {
        UC: () => Ps,
        JU: () => ks,
        c$: () => Is,
        JP: () => Ts,
        ZL: () => Vs,
        bL: () => Os,
        FK: () => Ds,
        l9: () => Rs,
        if: () => Es,
        OE: () => Ns
      });
      var o = {};
      r.r(o), r.d(o, {
        CheckLG: () => Js,
        CheckMD: () => $s,
        CheckXL: () => ei,
        DashLG: () => ri,
        DashMD: () => ti,
        DashXL: () => ni
      });
      var a = {};
      r.r(a), r.d(a, {
        DotLG: () => Yi,
        DotMD: () => Wi,
        DotXL: () => Qi
      });
      var s = {};
      r.r(s), r.d(s, {
        bL: () => Pu,
        Ze: () => Du,
        zi: () => Ru,
        LM: () => Su
      });
      var i = {};
      r.r(i), r.d(i, {
        PC: () => Qv,
        PS4: () => Wv,
        PS5: () => Yv,
        XboxOne: () => $v,
        XboxSeriesXS: () => Jv
      });
      var d = r(34629),
        l = r(57491),
        u = r(39793),
        c = r(4921),
        f = r(93082),
        p = r(55267);

      function v(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function y(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? y(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = v(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function h(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var b, g, w = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        C = (b = {
          defaultClassName: "foundry_thj3a31",
          variantClassNames: {
            thickness: {
              thin: "foundry_thj3a32",
              thick: "foundry_thj3a33",
              thicker: "foundry_thj3a34",
              thickest: "foundry_thj3a35"
            },
            orientation: {
              horizontal: "foundry_thj3a36",
              vertical: "foundry_thj3a37"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }, g = e => {
          var t = b.defaultClassName,
            r = m(m({}, b.defaultVariants), e);
          for (var n in r) {
            var o, a = null !== (o = r[n]) && void 0 !== o ? o : b.defaultVariants[n];
            if (null != a) {
              var s = a;
              "boolean" == typeof s && (s = !0 === s ? "true" : "false");
              var i = b.variantClassNames[n][s];
              i && (t += " " + i)
            }
          }
          for (var [d, l] of b.compoundVariants) w(d, r, b.defaultVariants) && (t += " " + l);
          return t
        }, g.variants = () => Object.keys(b.variantClassNames), g.classNames = {
          get base() {
            return b.defaultClassName.split(" ")[0]
          },
          get variants() {
            return h(b.variantClassNames, e => h(e, e => e.split(" ")[0]))
          }
        }, g);
      (0, f.forwardRef)(({
        className: e,
        orientation: t = "horizontal",
        thickness: r = "thin",
        isDecorative: n = !1,
        asChild: o,
        testId: a,
        ...s
      }, i) => {
        const d = "horizontal" !== t || n ? "div" : "hr",
          l = n || "hr" === d ? void 0 : "separator",
          f = o ? p.DX : d;
        return (0, u.jsx)(f, {
          ref: i,
          className: (0, c.$)(C({
            thickness: r,
            orientation: t
          }), e),
          role: l,
          "aria-orientation": t,
          "data-testid": a,
          ...s
        })
      });
      var x = r(29443),
        _ = r(6365),
        j = r(37494);

      function O(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function P(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? P(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = O(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : P(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function D(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var R = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        N = "var(--foundry_9dxgbc2)",
        E = "var(--foundry_9dxgbc3)",
        k = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = S(S({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) R(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return D(e.variantClassNames, e => D(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_9dxgbc7",
          variantClassNames: {
            size: {
              SM: "foundry_9dxgbc8",
              MD: "foundry_9dxgbc9",
              LG: "foundry_9dxgbca",
              XL: "foundry_9dxgbcb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        I = "var(--foundry_9dxgbc0)",
        T = "var(--foundry_9dxgbc1)";

      function V(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function z(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? z(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = V(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : z(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function A(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, f.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: a = "MD",
        ...s
      }, i) => {
        const d = (0, j.zQ)(),
          l = "string" == typeof a ? a : a?.[d] ?? a.default ?? "MD",
          c = (0, x.v6)({
            className: k({
              size: l
            }),
            "data-testid": t,
            style: (0, _.DI)({
              [I]: n?.pulseColorBackground,
              [T]: n?.pulseColorForeground,
              [N]: n?.gradientColorBackground,
              [E]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, s),
          f = e ? p.DX : "div";
        return (0, u.jsx)(f, {
          ref: i,
          ...c,
          children: e ? (0, u.jsx)(p.xV, {
            children: r
          }) : (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, u.jsx)("div", {
              className: "foundry_9dxgbcc"
            })]
          })
        })
      }), r(47399);
      var M = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        F = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = L(L({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) M(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return A(e.variantClassNames, e => A(e, e => e.split(" ")[0]))
            }
          }, t
        },
        H = F({
          defaultClassName: "foundry_1gea4150",
          variantClassNames: {
            size: {
              LG: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdd",
              MD: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde",
              SM: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf",
              XS: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg"
            },
            appearance: {
              default: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
              bold: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
              hyperlink: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const q = (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const s = e ? p.DX : "p",
          i = (0, x.v6)({
            className: H({
              size: n,
              appearance: r
            })
          }, o);
        return (0, u.jsx)(s, {
          ref: a,
          "data-testid": t,
          ...i
        })
      });
      var B = F({
        defaultClassName: "foundry_ujgffp0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdw",
            bold: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdx"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        ...n
      }, o) => {
        const a = e ? p.DX : "p",
          s = (0, x.v6)({
            className: B({
              appearance: r
            })
          }, n);
        return (0, u.jsx)(a, {
          ref: o,
          "data-testid": t,
          ...s
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? p.DX : "h1",
          a = (0, x.v6)({
            className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
          }, r);
        return (0, u.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...a
        })
      });
      var X = F({
        defaultClassName: "foundry_11wb5e70",
        variantClassNames: {
          level: {
            1: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd4",
            2: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd5",
            3: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd6",
            4: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd7",
            5: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8",
            6: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9",
            7: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcda"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      (0, f.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const a = e ? p.DX : `h${7===t?6:t}`,
          s = (0, x.v6)(n, {
            className: X({
              level: t
            })
          });
        return (0, u.jsx)(a, {
          ref: o,
          "data-testid": r,
          ...s
        })
      });
      var G = F({
        defaultClassName: "foundry_370tab0",
        variantClassNames: {
          size: {
            LG: "foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdn",
            MD: "foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdo",
            SM: "foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdp",
            XS: "foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdq",
            XXS: "foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdr"
          },
          appearance: {
            default: "foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcds",
            bold: "foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdt"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const s = e ? p.DX : "p",
          i = (0, x.v6)({
            className: G({
              size: n,
              appearance: r
            })
          }, o);
        return (0, u.jsx)(s, {
          ref: a,
          "data-testid": t,
          ...i
        })
      });
      var K = F({
        defaultClassName: "foundry_yzsp790",
        variantClassNames: {
          semantic: {
            abbr: "foundry_yzsp791",
            cite: "foundry_yzsp792",
            emphasis: "foundry_yzsp793",
            idiomatic: "foundry_yzsp794",
            mark: "foundry_yzsp795",
            "strike-through": "foundry_yzsp796",
            strong: "foundry_yzsp797",
            sub: "foundry_yzsp798",
            sup: "foundry_yzsp799",
            underline: "foundry_yzsp79a",
            default: "foundry_yzsp79b"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const U = {
        abbr: "abbr",
        cite: "cite",
        emphasis: "em",
        idiomatic: "i",
        mark: "mark",
        "strike-through": "s",
        strong: "strong",
        sub: "sub",
        sup: "sup",
        underline: "u",
        default: "span"
      };
      (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        semantic: r = "default",
        ...n
      }, o) => {
        const a = e ? p.DX : U[r] || "span",
          s = (0, x.v6)(n, {
            className: K({
              semantic: r
            })
          });
        return (0, u.jsx)(a, {
          ref: o,
          "data-testid": t,
          ...s
        })
      });
      var Z = r(52514),
        W = r(35812),
        Y = r(99206),
        Q = r(66461),
        $ = r(90004);

      function J(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function ee(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ee(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = J(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ee(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function re(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ne = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        oe = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = te(te({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) ne(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return re(e.variantClassNames, e => re(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ae = oe({
          defaultClassName: "foundry_1a74xwbk",
          variantClassNames: {
            styled: {
              true: "foundry_1a74xwbj",
              false: "foundry_1a74xwbm"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        se = oe({
          defaultClassName: "foundry_1a74xwbq foundry_1a74xwbi",
          variantClassNames: {
            position: {
              top: "foundry_1a74xwbr",
              bottom: "foundry_1a74xwbs"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      W.gsap.registerPlugin(Y.L);
      const ie = {
        inherit: !1,
        overwrite: !1,
        duration: .3,
        ease: "power2.out"
      };
      (0, _.Tm)("var(--foundry_1a74xwb0)");
      var de = r(53692);
      r.e(8696).then(r.bind(r, 68696)), r.e(5847).then(r.bind(r, 25847)), r.e(9269).then(r.bind(r, 69269)), r.e(9708).then(r.bind(r, 79708)), r.e(9933).then(r.bind(r, 79933)), r.e(4607).then(r.bind(r, 64607)), r.e(2656).then(r.bind(r, 62656)), r.e(7110).then(r.bind(r, 87110)), r.e(5529).then(r.bind(r, 25529)), r.e(6405).then(r.bind(r, 36405)), r.e(9103).then(r.bind(r, 99103)), r.e(4962).then(r.bind(r, 54962)), r.e(7602).then(r.bind(r, 37602));
      Event;
      var le = r(81175);
      const ue = e => "dark" === e ? le.xW.dark : le.xW.light;
      var ce = r(47725),
        fe = {};
      r.r(fe), r.d(fe, {
        Activity: () => ce.Il,
        ArrowDown: () => ce.yd,
        ArrowLeft: () => ce.nk,
        ArrowRight: () => ce.Qp,
        ArrowRightLeft: () => ce.nF,
        ArrowUp: () => ce.Do,
        ArrowUpDown: () => ce.hD,
        Book: () => ce.E3,
        Bookmark: () => ce.Xh,
        BookmarkFilled: () => ce.dA,
        Bug: () => ce.zP,
        BugOff: () => ce.k_,
        Calendar: () => ce.Vv,
        CalendarOff: () => ce.is,
        Car: () => ce.TH,
        CarSide: () => ce.cY,
        ChartSpline: () => ce.m3,
        Check: () => ce.Jl,
        ChevronDown: () => ce.yQ,
        ChevronFirst: () => ce.mf,
        ChevronLast: () => ce.Ou,
        ChevronLeft: () => ce.JG,
        ChevronRight: () => ce.c_,
        ChevronUp: () => ce.rX,
        ChevronsDownUp: () => ce.WE,
        ChevronsLeftRight: () => ce.UQ,
        ChevronsUpDown: () => ce.Ml,
        Circle: () => ce.jl,
        CircleCheck: () => ce.rW,
        CircleCheckFilled: () => ce.Dw,
        CircleDollarSign: () => ce.OJ,
        CircleHelp: () => ce.YC,
        CircleMinus: () => ce.ZX,
        CircleMinusFilled: () => ce.r0,
        CirclePerson: () => ce.q_,
        CircleSlash: () => ce.o6,
        CircleX: () => ce.RT,
        Clipboard: () => ce.B0,
        Clock: () => ce.zD,
        CloudAlert: () => ce.K4,
        CloudDownload: () => ce.MQ,
        CloudUpload: () => ce.bK,
        CodeXml: () => ce.bv,
        Copy: () => ce.QR,
        Cpu: () => ce.fX,
        CreditCard: () => ce.y5,
        Database: () => ce.Wm,
        Discord: () => ce.bY,
        DollarSign: () => ce.G9,
        Download: () => ce.f5,
        EllipsisVertical: () => ce.Yb,
        Envelope: () => ce.Lh,
        EnvelopeOpen: () => ce.jd,
        EpicGames: () => ce.fk,
        ExternalLink: () => ce.Gr,
        Eye: () => ce.kU,
        EyeClosed: () => ce.Cz,
        EyeOff: () => ce.X_,
        Facebook: () => ce.f1,
        FastForward: () => ce.Ej,
        FileText: () => ce.iU,
        Files: () => ce.sv,
        Filter: () => ce.dJ,
        Flag: () => ce.lN,
        FlagOff: () => ce.Ih,
        Gear: () => ce.OB,
        Globe: () => ce.qz,
        Handshake: () => ce.g6,
        Headset: () => ce.BC,
        Heart: () => ce.B1,
        HeartPulse: () => ce.iY,
        House: () => ce.tT,
        Image: () => ce._V,
        Info: () => ce.R2,
        Instagram: () => ce.pd,
        LayoutGrid: () => ce.D6,
        Lightbulb: () => ce.g5,
        Link: () => ce.N_,
        List: () => ce.B8,
        ListFilter: () => ce.xt,
        ListMusic: () => ce.w7,
        LockKeyhole: () => ce.NT,
        LockPassword: () => ce.HI,
        LogOut: () => ce.nU,
        MapPin: () => ce.sD,
        Maximize: () => ce.hz,
        Maximize2: () => ce.h1,
        Menu: () => ce.W1,
        MessageSquareText: () => ce.AJ,
        Mic: () => ce.GO,
        MicFilled: () => ce.cX,
        Minimize: () => ce.Xj,
        Minimize2: () => ce.xq,
        Minus: () => ce.Hs,
        Monitor: () => ce.VA,
        Moon: () => ce.AX,
        NintendoSwitch: () => ce.Su,
        PaperPlane: () => ce.d8,
        Paperclip: () => ce.xv,
        PartialCircle: () => ce.IM,
        Pause: () => ce.vR,
        Pencil: () => ce.gH,
        PencilOff: () => ce.hE,
        Person: () => ce._A,
        PersonBlock: () => ce.hs,
        PersonMinus: () => ce._E,
        PersonPlus: () => ce.c1,
        Pin: () => ce.yU,
        PinFilled: () => ce.IF,
        Play: () => ce.jG,
        Playstation: () => ce.p6,
        Plus: () => ce.FW,
        Power: () => ce.aJ,
        Property: () => ce.mA,
        Reddit: () => ce.TZ,
        RefreshCcw: () => ce.PM,
        RefreshCw: () => ce.e9,
        RefreshCwOff: () => ce.X0,
        Replay: () => ce.eJ,
        Rewind: () => ce.Y8,
        Save: () => ce.eM,
        Search: () => ce.vj,
        Server: () => ce.gq,
        Share: () => ce.SY,
        ShieldAlert: () => ce.yZ,
        ShieldCheck: () => ce.ox,
        ShoppingBag: () => ce.Nw,
        SkipBack: () => ce.L9,
        SkipForward: () => ce.xP,
        Star: () => ce.FE,
        StarOff: () => ce.UM,
        Steam: () => ce.Rv,
        Stop: () => ce.VG,
        Store: () => ce.il,
        Sun: () => ce.bd,
        ThumbsDown: () => ce.z9,
        ThumbsUp: () => ce.tw,
        Tiktok: () => ce.Tc,
        Trash: () => ce.lM,
        TriangleAlert: () => ce.lW,
        Trophy: () => ce.Xs,
        Truck: () => ce.No,
        Twitch: () => ce.YA,
        Twitter: () => ce.KK,
        TwoPeople: () => ce.LM,
        Undo: () => ce.Vn,
        Unlink: () => ce.c2,
        Upload: () => ce._O,
        UserCouple: () => ce.Cn,
        UserGroup: () => ce.zr,
        Volume: () => ce.fS,
        Volume1: () => ce.c6,
        Volume2: () => ce.jI,
        VolumeX: () => ce.XL,
        Wallet: () => ce.uW,
        Weapon: () => ce.Re,
        Wifi: () => ce.MJ,
        WifiOff: () => ce.RQ,
        Wrench: () => ce.pi,
        X: () => ce.X,
        Xbox: () => ce.ms,
        Youtube: () => ce.k,
        ZoomIn: () => ce.$Z,
        ZoomOut: () => ce.en
      });
      const pe = (0, de.YK)({
        OpenButtonLabel: {
          id: "Lightbox_Open_Button_Label",
          description: "Aria-label for the lightbox open button",
          defaultMessage: "{description} - View image in lightbox"
        },
        CloseButtonLabel: {
          id: "Lightbox_Close_Button_Label",
          description: "Aria-label for the lightbox close button",
          defaultMessage: "Close"
        },
        CloseButtonTooltip: {
          id: "Lightbox_Close_Button_Tooltip",
          description: "Visible tooltip for the lightbox close button",
          defaultMessage: "Press {shortcut}"
        },
        ZoomInButtonLabel: {
          id: "Lightbox_Zoom_In_Button_Label",
          description: "Aria-label for the lightbox zoom in button",
          defaultMessage: "Zoom in"
        },
        ZoomInButtonTooltip: {
          id: "Lightbox_Zoom_In_Button_Tooltip",
          description: "Visible tooltip for the lightbox zoom in button",
          defaultMessage: "Press {shortcut}"
        },
        ZoomOutButtonLabel: {
          id: "Lightbox_Zoom_Out_Button_Label",
          description: "Aria-label for the lightbox zoom out button",
          defaultMessage: "Zoom out"
        },
        ZoomOutButtonTooltip: {
          id: "Lightbox_Zoom_Out_Button__Tooltip",
          description: "Visible tooltip for the lightbox zoom out button",
          defaultMessage: "Press {shortcut}"
        },
        ResetZoomButtonLabel: {
          id: "Lightbox_Reset_Zoom_Button_Label",
          description: "Aria-label for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Reset"
        },
        ResetZoomButtonTooltip: {
          id: "Lightbox_Reset_Zoom_Button_Tooltip",
          description: "Visible tooltip for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Press {shortcut}"
        },
        ZoomSliderLabel: {
          id: "Lightbox_Zoom_Slider_Label",
          description: "Aria-label for the lightbox zoom slider",
          defaultMessage: "Zoom level"
        },
        ZoomSliderTooltip: {
          id: "Lightbox_Zoom_Slider_Tooltip",
          description: "Visible tooltip for the lightbox zoom slider",
          defaultMessage: "{zoom}%"
        },
        DownloadButtonLabel: {
          id: "Lightbox_Download_Button_Label",
          description: "Aria-label for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        },
        DownloadButtonTooltip: {
          id: "Lightbox_Download_Button_Tooltip",
          description: "Visible tooltip for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        }
      });
      var ve = "foundry_bc732x1";
      const ye = (0, f.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => ((0, $.vC)(e, e => r?.(e), [r]), (0, u.jsx)(q, {
        size: "XS",
        className: (0, c.$)("foundry_bc732x0", {
          [ve]: t
        }),
        asChild: !0,
        children: (0, u.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var me, he = r(66936),
        be = r(44752),
        ge = r(85049),
        we = r(72579),
        Ce = r(41988),
        xe = r(7198),
        _e = Object.defineProperty,
        je = (e, t) => _e(e, "name", {
          value: t,
          configurable: !0
        }),
        Oe = "dismissableLayer.update",
        Pe = f.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set,
          dismissableSurfaces: new Set
        }),
        Se = f.forwardRef(je(function(e, t) {
          const {
            disableOutsidePointerEvents: r = !1,
            deferPointerDownOutside: n = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: a,
            onFocusOutside: s,
            onInteractOutside: i,
            onDismiss: d,
            ...l
          } = e, c = f.useContext(Pe), [p, v] = f.useState(null), y = p?.ownerDocument ?? globalThis?.document, [, m] = f.useState({}), h = (0, ge.s)(t, v), b = Array.from(c.layers), [g] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), w = g ? b.indexOf(g) : -1, C = p ? b.indexOf(p) : -1, x = c.layersWithOutsidePointerEventsDisabled.size > 0, _ = C >= w, j = f.useRef(!1), O = Ee(e => {
            a?.(e), i?.(e), e.defaultPrevented || d?.()
          }, {
            ownerDocument: y,
            deferPointerDownOutside: n,
            isDeferredPointerDownOutsideRef: j,
            dismissableSurfaces: c.dismissableSurfaces,
            shouldHandlePointerDownOutside: f.useCallback(e => {
              if (!(e instanceof Node)) return !1;
              const t = [...c.branches].some(t => t.contains(e));
              return _ && !t
            }, [c.branches, _])
          }), P = ke(e => {
            if (n && j.current) return;
            const t = e.target;
            [...c.branches].some(e => e.contains(t)) || (s?.(e), i?.(e), e.defaultPrevented || d?.())
          }, y), S = !!p && C === b.length - 1, D = (0, xe.c)(e => {
            "Escape" === e.key && (o?.(e), !e.defaultPrevented && d && (e.preventDefault(), d()))
          });
          return f.useEffect(() => {
            if (S) return y.addEventListener("keydown", D, {
              capture: !0
            }), () => y.removeEventListener("keydown", D, {
              capture: !0
            })
          }, [y, S, D]), f.useEffect(() => {
            if (p) return r && (0 === c.layersWithOutsidePointerEventsDisabled.size && (me = y.body.style.pointerEvents, y.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(p)), c.layers.add(p), Ie(), () => {
              r && (c.layersWithOutsidePointerEventsDisabled.delete(p), 0 === c.layersWithOutsidePointerEventsDisabled.size && (y.body.style.pointerEvents = me))
            }
          }, [p, y, r, c]), f.useEffect(() => () => {
            p && (c.layers.delete(p), c.layersWithOutsidePointerEventsDisabled.delete(p), Ie())
          }, [p, c]), f.useEffect(() => {
            const e = je(() => m({}), "handleUpdate");
            return document.addEventListener(Oe, e), () => document.removeEventListener(Oe, e)
          }, []), (0, u.jsx)(Ce.sG.div, {
            ...l,
            ref: h,
            style: {
              pointerEvents: x ? _ ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, be.mK)(e.onFocusCapture, P.onFocusCapture),
            onBlurCapture: (0, be.mK)(e.onBlurCapture, P.onBlurCapture),
            onPointerDownCapture: (0, be.mK)(e.onPointerDownCapture, O.onPointerDownCapture)
          })
        }, "DismissableLayer")),
        De = f.forwardRef(je(function(e, t) {
          const r = f.useContext(Pe),
            n = f.useRef(null),
            o = (0, ge.s)(t, n);
          return f.useEffect(() => {
            const e = n.current;
            if (e) return r.branches.add(e), () => {
              r.branches.delete(e)
            }
          }, [r.branches]), (0, u.jsx)(Ce.sG.div, {
            ...e,
            ref: o
          })
        }, "DismissableLayerBranch"));

      function Re() {
        const e = f.useContext(Pe),
          [t, r] = f.useState(null);
        return f.useEffect(() => {
          if (t) return e.dismissableSurfaces.add(t), () => {
            e.dismissableSurfaces.delete(t)
          }
        }, [t, e.dismissableSurfaces]), r
      }
      je(Re, "useDismissableLayerSurface");
      var Ne = je(() => !0, "IS_TRUE");

      function Ee(e, t) {
        const {
          ownerDocument: r = globalThis?.document,
          deferPointerDownOutside: n = !1,
          isDeferredPointerDownOutsideRef: o,
          dismissableSurfaces: a,
          shouldHandlePointerDownOutside: s = Ne
        } = t, i = (0, xe.c)(e), d = f.useRef(!1), l = f.useRef(!1), u = f.useRef(new Map), c = f.useRef(() => {});
        return f.useEffect(() => {
          function e() {
            l.current = !1, o.current = !1, u.current.clear()
          }

          function t() {
            return Array.from(u.current.values()).some(Boolean)
          }

          function f(e) {
            if (!l.current) return;
            const t = e.target;
            t instanceof Node && [...a].some(e => e.contains(t)) || u.current.set(e.type, !0), "click" === e.type && window.setTimeout(() => {
              l.current && c.current()
            }, 0)
          }

          function p(e) {
            l.current && u.current.set(e.type, !1)
          }
          je(e, "resetOutsideInteraction"), je(t, "isOutsideInteractionIntercepted"), je(f, "handleInteractionCapture"), je(p, "handleInteractionBubble");
          const v = je(a => {
              if (a.target && !d.current) {
                let f = function() {
                  r.removeEventListener("click", c.current);
                  const n = t();
                  e(), n || Te("dismissableLayer.pointerDownOutside", i, p, {
                    discrete: !0
                  })
                };
                if (je(f, "handleAndDispatchPointerDownOutsideEvent"), !s(a.target)) return r.removeEventListener("click", c.current), e(), void(d.current = !1);
                const p = {
                  originalEvent: a
                };
                l.current = !0, o.current = n && 0 === a.button, u.current.clear(), n && 0 === a.button ? (r.removeEventListener("click", c.current), c.current = f, r.addEventListener("click", c.current, {
                  once: !0
                })) : f()
              } else r.removeEventListener("click", c.current), e();
              d.current = !1
            }, "handlePointerDown"),
            y = ["pointerup", "mousedown", "mouseup", "touchstart", "touchend", "click"];
          for (const e of y) r.addEventListener(e, f, !0), r.addEventListener(e, p);
          const m = window.setTimeout(() => {
            r.addEventListener("pointerdown", v)
          }, 0);
          return () => {
            window.clearTimeout(m), r.removeEventListener("pointerdown", v), r.removeEventListener("click", c.current);
            for (const e of y) r.removeEventListener(e, f, !0), r.removeEventListener(e, p)
          }
        }, [r, i, n, o, a, s]), {
          onPointerDownCapture: je(() => d.current = !0, "onPointerDownCapture")
        }
      }

      function ke(e, t = globalThis?.document) {
        const r = (0, xe.c)(e),
          n = f.useRef(!1);
        return f.useEffect(() => {
          const e = je(e => {
            e.target && !n.current && Te("dismissableLayer.focusOutside", r, {
              originalEvent: e
            }, {
              discrete: !1
            })
          }, "handleFocus");
          return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
        }, [t, r]), {
          onFocusCapture: je(() => n.current = !0, "onFocusCapture"),
          onBlurCapture: je(() => n.current = !1, "onBlurCapture")
        }
      }

      function Ie() {
        const e = new CustomEvent(Oe);
        document.dispatchEvent(e)
      }

      function Te(e, t, r, {
        discrete: n
      }) {
        const o = r.originalEvent.target,
          a = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: r
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), n ? (0, Ce.hO)(o, a) : o.dispatchEvent(a)
      }
      je(Ee, "usePointerDownOutside"), je(ke, "useFocusOutside"), je(Ie, "dispatchUpdate"), je(Te, "handleAndDispatchCustomEvent");
      var Ve = Se,
        ze = De,
        Le = r(88918),
        Ae = r(53213),
        Me = r(60853),
        Fe = Object.defineProperty,
        He = (e, t) => Fe(e, "name", {
          value: t,
          configurable: !0
        }),
        qe = f.forwardRef(He(function(e, t) {
          const {
            children: r,
            width: n = 10,
            height: o = 5,
            ...a
          } = e;
          return (0, u.jsx)(Ce.sG.svg, {
            ...a,
            ref: t,
            width: n,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? r : (0, u.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        }, "Arrow")),
        Be = qe,
        Xe = r(9608),
        Ge = r(7078),
        Ke = Object.defineProperty,
        Ue = (e, t) => Ke(e, "name", {
          value: t,
          configurable: !0
        }),
        Ze = "Popper",
        [We, Ye] = (0, we.A)(Ze),
        [Qe, $e] = We(Ze),
        Je = Ue(e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, o] = f.useState(null), [a, s] = f.useState(void 0);
          return (0, u.jsx)(Qe, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            placementState: a,
            setPlacementState: s,
            children: r
          })
        }, "Popper"),
        et = f.forwardRef(Ue(function(e, t) {
          const {
            __scopePopper: r,
            virtualRef: n,
            ...o
          } = e, a = $e("PopperAnchor", r), s = f.useRef(null), i = a.onAnchorChange, d = f.useCallback(e => {
            s.current = e, e && i(e)
          }, [i]), l = (0, ge.s)(t, d), c = f.useRef(null);
          f.useEffect(() => {
            if (!n) return;
            const e = c.current;
            c.current = n.current, e !== c.current && i(c.current)
          });
          const p = a.placementState && lt(a.placementState),
            v = p?.[0],
            y = p?.[1];
          return n ? null : (0, u.jsx)(Ce.sG.div, {
            "data-radix-popper-side": v,
            "data-radix-popper-align": y,
            ...o,
            ref: l
          })
        }, "PopperAnchor")),
        tt = "PopperContent",
        [rt, nt] = We(tt),
        ot = f.forwardRef(Ue(function(e, t) {
          const {
            __scopePopper: r,
            side: n = "bottom",
            sideOffset: o = 0,
            align: a = "center",
            alignOffset: s = 0,
            arrowPadding: i = 0,
            avoidCollisions: d = !0,
            collisionBoundary: l = [],
            collisionPadding: c = 0,
            sticky: p = "partial",
            hideWhenDetached: v = !1,
            updatePositionStrategy: y = "optimized",
            onPlaced: m,
            ...h
          } = e, b = $e(tt, r), [g, w] = f.useState(null), C = (0, ge.s)(t, w), [x, _] = f.useState(null), j = (0, Ge.X)(x), O = j?.width ?? 0, P = j?.height ?? 0, S = n + ("center" !== a ? "-" + a : ""), D = "number" == typeof c ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
          }, R = Array.isArray(l) ? l : [l], N = R.length > 0, E = {
            padding: D,
            boundary: R.filter(it),
            altBoundary: N
          }, {
            refs: k,
            floatingStyles: I,
            placement: T,
            isPositioned: V,
            middlewareData: z
          } = (0, Ae.we)({
            strategy: "fixed",
            placement: S,
            whileElementsMounted: Ue((...e) => (0, Me.ll)(...e, {
              animationFrame: "always" === y
            }), "whileElementsMounted"),
            elements: {
              reference: b.anchor
            },
            middleware: [(0, Ae.cY)({
              mainAxis: o + P,
              alignmentAxis: s
            }), d && (0, Ae.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === p ? (0, Ae.ER)() : void 0,
              ...E
            }), d && (0, Ae.UU)({
              ...E
            }), (0, Ae.Ej)({
              ...E,
              apply: Ue(({
                elements: e,
                rects: t,
                availableWidth: r,
                availableHeight: n
              }) => {
                const {
                  width: o,
                  height: a
                } = t.reference, s = e.floating.style;
                s.setProperty("--radix-popper-available-width", `${r}px`), s.setProperty("--radix-popper-available-height", `${n}px`), s.setProperty("--radix-popper-anchor-width", `${o}px`), s.setProperty("--radix-popper-anchor-height", `${a}px`)
              }, "apply")
            }), x && (0, Ae.UE)({
              element: x,
              padding: i
            }), dt({
              arrowWidth: O,
              arrowHeight: P
            }), v && (0, Ae.jD)({
              strategy: "referenceHidden",
              ...E,
              boundary: N ? E.boundary : void 0
            })]
          }), L = b.setPlacementState;
          (0, Xe.N)(() => (L(T), () => {
            L(void 0)
          }), [T, L]);
          const [A, M] = lt(T), F = (0, xe.c)(m);
          (0, Xe.N)(() => {
            V && F?.()
          }, [V, F]);
          const H = z.arrow?.x,
            q = z.arrow?.y,
            B = 0 !== z.arrow?.centerOffset,
            [X, G] = f.useState();
          return (0, Xe.N)(() => {
            g && G(window.getComputedStyle(g).zIndex)
          }, [g]), (0, u.jsx)("div", {
            ref: k.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...I,
              transform: V ? I.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: X,
              "--radix-popper-transform-origin": [z.transformOrigin?.x, z.transformOrigin?.y].join(" "),
              ...z.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, u.jsx)(rt, {
              scope: r,
              placedSide: A,
              placedAlign: M,
              onArrowChange: _,
              arrowX: H,
              arrowY: q,
              shouldHideArrow: B,
              children: (0, u.jsx)(Ce.sG.div, {
                "data-side": A,
                "data-align": M,
                ...h,
                ref: C,
                style: {
                  ...h.style,
                  animation: V ? h.style?.animation : "none"
                }
              })
            })
          })
        }, "PopperContent")),
        at = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        st = f.forwardRef(Ue(function(e, t) {
          const {
            __scopePopper: r,
            ...n
          } = e, o = nt("PopperArrow", r), a = at[o.placedSide];
          return (0, u.jsx)("span", {
            ref: o.onArrowChange,
            style: {
              position: "absolute",
              left: o.arrowX,
              top: o.arrowY,
              [a]: 0,
              transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
              } [o.placedSide],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
              } [o.placedSide],
              visibility: o.shouldHideArrow ? "hidden" : void 0
            },
            children: (0, u.jsx)(Be, {
              ...n,
              ref: t,
              style: {
                ...n.style,
                display: "block"
              }
            })
          })
        }, "PopperArrow"));

      function it(e) {
        return null !== e
      }
      Ue(it, "isNotNull");
      var dt = Ue(e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: n,
            middlewareData: o
          } = t, a = 0 !== o.arrow?.centerOffset, s = a ? 0 : e.arrowWidth, i = a ? 0 : e.arrowHeight, [d, l] = lt(r), u = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [l], c = (o.arrow?.x ?? 0) + s / 2, f = (o.arrow?.y ?? 0) + i / 2;
          let p = "",
            v = "";
          return "bottom" === d ? (p = a ? u : `${c}px`, v = -i + "px") : "top" === d ? (p = a ? u : `${c}px`, v = `${n.floating.height+i}px`) : "right" === d ? (p = -i + "px", v = a ? u : `${f}px`) : "left" === d && (p = `${n.floating.width+i}px`, v = a ? u : `${f}px`), {
            data: {
              x: p,
              y: v
            }
          }
        }
      }), "transformOrigin");

      function lt(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      Ue(lt, "getSideAndAlignFromPlacement");
      var ut = Je,
        ct = et,
        ft = ot,
        pt = st,
        vt = r(84017),
        yt = Object.defineProperty,
        mt = (e, t) => yt(e, "name", {
          value: t,
          configurable: !0
        }),
        ht = f.forwardRef(mt(function(e, t) {
          const {
            container: r,
            ...n
          } = e, [o, a] = f.useState(!1);
          (0, Xe.N)(() => a(!0), []);
          const s = r || o && globalThis?.document?.body;
          return s ? vt.createPortal((0, u.jsx)(Ce.sG.div, {
            ...n,
            ref: t
          }), s) : null
        }, "Portal")),
        bt = Object.defineProperty,
        gt = (e, t) => bt(e, "name", {
          value: t,
          configurable: !0
        });

      function wt(e, t) {
        return f.useReducer((e, r) => t[e][r] ?? e, e)
      }
      gt(wt, "useStateMachine");
      var Ct = gt(e => {
        const {
          present: t,
          children: r
        } = e, n = xt(t), o = "function" == typeof r ? r({
          present: n.isPresent
        }) : f.Children.only(r), a = jt(n.ref, Pt(o));
        return "function" == typeof r || n.isPresent ? f.cloneElement(o, {
          ref: a
        }) : null
      }, "Presence");

      function xt(e) {
        const [t, r] = f.useState(), n = f.useRef(null), o = f.useRef(e), a = f.useRef("none"), s = f.useRef(void 0), i = e ? "mounted" : "unmounted", [d, l] = wt(i, {
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
        return f.useEffect(() => {
          "mounted" === d ? (a.current = s.current ?? Ot(n.current), s.current = void 0) : a.current = "none"
        }, [d]), (0, Xe.N)(() => {
          const t = n.current,
            r = o.current;
          if (r !== e) {
            const n = a.current,
              i = Ot(t);
            e ? (s.current = i, l("MOUNT")) : l("none" === i || "none" === t?.display ? "UNMOUNT" : r && n !== i ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
          }
        }, [e, l]), (0, Xe.N)(() => {
          if (t) {
            let e;
            const r = t.ownerDocument.defaultView ?? window,
              s = gt(a => {
                const s = Ot(n.current).includes(CSS.escape(a.animationName));
                if (a.target === t && s && (l("ANIMATION_END"), !o.current)) {
                  const n = t.style.animationFillMode;
                  t.style.animationFillMode = "forwards", e = r.setTimeout(() => {
                    "forwards" === t.style.animationFillMode && (t.style.animationFillMode = n)
                  })
                }
              }, "handleAnimationEnd"),
              i = gt(e => {
                e.target === t && (a.current = Ot(n.current))
              }, "handleAnimationStart");
            return t.addEventListener("animationstart", i), t.addEventListener("animationcancel", s), t.addEventListener("animationend", s), () => {
              r.clearTimeout(e), t.removeEventListener("animationstart", i), t.removeEventListener("animationcancel", s), t.removeEventListener("animationend", s)
            }
          }
          l("ANIMATION_END")
        }, [t, l]), {
          isPresent: ["mounted", "unmountSuspended"].includes(d),
          ref: f.useCallback(e => {
            if (e) {
              const t = getComputedStyle(e);
              n.current = t, s.current = Ot(t)
            } else n.current = null;
            r(e)
          }, [])
        }
      }

      function _t(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function jt(...e) {
        const t = f.useRef(e);
        return t.current = e, f.useCallback(e => {
          const r = t.current;
          let n = !1;
          const o = r.map(t => {
            const r = _t(t, e);
            return n || "function" != typeof r || (n = !0), r
          });
          if (n) return () => {
            for (let e = 0; e < o.length; e++) {
              const t = o[e];
              "function" == typeof t ? t() : _t(r[e], null)
            }
          }
        }, [])
      }

      function Ot(e) {
        return e?.animationName || "none"
      }

      function Pt(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
          r = t && "isReactWarning" in t && t.isReactWarning;
        return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
      }
      gt(xt, "usePresence"), gt(_t, "setRef"), gt(jt, "useStableComposedRefs"), gt(Ot, "getAnimationName"), gt(Pt, "getElementRef");
      var St = r(93237),
        Dt = r(15782),
        Rt = r(94299),
        Nt = Object.defineProperty,
        Et = (e, t) => Nt(e, "name", {
          value: t,
          configurable: !0
        }),
        [kt, It] = (0, we.A)("Tooltip", [Ye]),
        Tt = Ye(),
        Vt = 700,
        zt = "tooltip.open",
        [Lt, At] = kt("TooltipProvider"),
        Mt = Et(e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = Vt,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: a
          } = e, s = f.useRef(!0), i = f.useRef(!1), d = f.useRef(0);
          return f.useEffect(() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }, []), (0, u.jsx)(Lt, {
            scope: t,
            isOpenDelayedRef: s,
            delayDuration: r,
            onOpen: f.useCallback(() => {
              n <= 0 || (window.clearTimeout(d.current), s.current = !1)
            }, [n]),
            onClose: f.useCallback(() => {
              n <= 0 || (window.clearTimeout(d.current), d.current = window.setTimeout(() => s.current = !0, n))
            }, [n]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: f.useCallback(e => {
              i.current = e
            }, []),
            disableHoverableContent: o,
            children: a
          })
        }, "TooltipProvider"),
        Ft = "Tooltip",
        [Ht, qt] = kt(Ft),
        Bt = Et(e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            disableHoverableContent: s,
            delayDuration: i
          } = e, d = At(Ft, e.__scopeTooltip), l = Tt(t), [c, p] = f.useState(null), [v, y] = f.useState(void 0), m = (0, Le.B)(), h = f.useRef(0), b = s ?? d.disableHoverableContent, g = i ?? d.delayDuration, w = f.useRef(!1), [C, x] = (0, Dt.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: Et(e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(zt))) : d.onClose(), a?.(e)
            }, "onChange"),
            caller: Ft
          }), _ = f.useMemo(() => C ? w.current ? "delayed-open" : "instant-open" : "closed", [C]), j = f.useCallback(() => {
            window.clearTimeout(h.current), h.current = 0, w.current = !1, x(!0)
          }, [x]), O = f.useCallback(() => {
            window.clearTimeout(h.current), h.current = 0, x(!1)
          }, [x]), P = f.useCallback(() => {
            window.clearTimeout(h.current), h.current = window.setTimeout(() => {
              w.current = !0, x(!0), h.current = 0
            }, g)
          }, [g, x]);
          f.useEffect(() => () => {
            h.current && (window.clearTimeout(h.current), h.current = 0)
          }, []);
          const S = v ?? m;
          return (0, u.jsx)(ut, {
            ...l,
            children: (0, u.jsx)(Ht, {
              scope: t,
              contentId: S,
              setContentId: y,
              open: C,
              stateAttribute: _,
              trigger: c,
              onTriggerChange: p,
              onTriggerEnter: f.useCallback(() => {
                d.isOpenDelayedRef.current ? P() : j()
              }, [d.isOpenDelayedRef, P, j]),
              onTriggerLeave: f.useCallback(() => {
                b ? O() : (window.clearTimeout(h.current), h.current = 0)
              }, [O, b]),
              onOpen: j,
              onClose: O,
              disableHoverableContent: b,
              children: r
            })
          })
        }, "Tooltip"),
        Xt = "TooltipTrigger",
        Gt = f.forwardRef(Et(function(e, t) {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = qt(Xt, r), a = At(Xt, r), s = Tt(r), i = f.useRef(null), d = (0, ge.s)(t, i, o.onTriggerChange), l = f.useRef(!1), c = f.useRef(!1), p = f.useCallback(() => l.current = !1, []);
          return f.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), (0, u.jsx)(ct, {
            asChild: !0,
            ...s,
            children: (0, u.jsx)(Ce.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: d,
              onPointerMove: (0, be.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || a.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: (0, be.mK)(e.onPointerLeave, () => {
                o.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: (0, be.mK)(e.onPointerDown, () => {
                o.open && o.onClose(), l.current = !0, document.addEventListener("pointerup", p, {
                  once: !0
                })
              }),
              onFocus: (0, be.mK)(e.onFocus, () => {
                l.current || o.onOpen()
              }),
              onBlur: (0, be.mK)(e.onBlur, o.onClose),
              onClick: (0, be.mK)(e.onClick, o.onClose)
            })
          })
        }, "TooltipTrigger")),
        [Kt, Ut] = kt("TooltipPortal", {
          forceMount: void 0
        }),
        Zt = "TooltipContent",
        Wt = f.forwardRef(Et(function(e, t) {
          const r = Ut(Zt, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...a
            } = e,
            s = qt(Zt, e.__scopeTooltip);
          return (0, u.jsx)(Ct, {
            present: n || s.open,
            children: s.disableHoverableContent ? (0, u.jsx)($t, {
              side: o,
              ...a,
              ref: t
            }) : (0, u.jsx)(Yt, {
              side: o,
              ...a,
              ref: t
            })
          })
        }, "TooltipContent")),
        Yt = f.forwardRef(Et(function(e, t) {
          const r = qt(Zt, e.__scopeTooltip),
            n = At(Zt, e.__scopeTooltip),
            o = f.useRef(null),
            a = (0, ge.s)(t, o),
            [s, i] = f.useState(null),
            {
              trigger: d,
              onClose: l
            } = r,
            c = o.current,
            {
              onPointerInTransitChange: p
            } = n,
            v = f.useCallback(() => {
              i(null), p(!1)
            }, [p]),
            y = f.useCallback((e, t) => {
              const r = e.currentTarget,
                n = {
                  x: e.clientX,
                  y: e.clientY
                },
                o = or([...tr(n, er(n, r.getBoundingClientRect())), ...rr(t.getBoundingClientRect())]);
              i(o), p(!0)
            }, [p]);
          return f.useEffect(() => () => v(), [v]), f.useEffect(() => {
            if (d && c) {
              const e = Et(e => y(e, c), "handleTriggerLeave"),
                t = Et(e => y(e, d), "handleContentLeave");
              return d.addEventListener("pointerleave", e), c.addEventListener("pointerleave", t), () => {
                d.removeEventListener("pointerleave", e), c.removeEventListener("pointerleave", t)
              }
            }
          }, [d, c, y, v]), f.useEffect(() => {
            if (s) {
              const e = Et(e => {
                const t = e.target,
                  r = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  n = d?.contains(t) || c?.contains(t),
                  o = !nr(r, s);
                n ? v() : o && (v(), l())
              }, "handleTrackPointerGrace");
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [d, c, s, l, v]), (0, u.jsx)($t, {
            ...e,
            ref: a
          })
        }, "TooltipContentHoverable")),
        Qt = (0, St.Dc)("TooltipContent"),
        $t = f.forwardRef(Et(function(e, t) {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            id: a,
            onEscapeKeyDown: s,
            onPointerDownOutside: i,
            ...d
          } = e, l = qt(Zt, r), c = Tt(r), {
            onClose: p
          } = l;
          f.useEffect(() => (document.addEventListener(zt, p), () => document.removeEventListener(zt, p)), [p]), f.useEffect(() => {
            if (l.trigger) {
              const e = Et(e => {
                e.target instanceof Node && e.target.contains(l.trigger) && p()
              }, "handleScroll");
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }, [l.trigger, p]);
          const {
            setContentId: v
          } = l;
          return (0, Xe.N)(() => (v(a), () => {
            v(void 0)
          }), [a, v]), (0, u.jsx)(Se, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: s,
            onPointerDownOutside: i,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: p,
            children: (0, u.jsxs)(ft, {
              "data-state": l.stateAttribute,
              role: o ? void 0 : "tooltip",
              id: o ? void 0 : l.contentId,
              ...c,
              ...d,
              ref: t,
              style: {
                ...d.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              },
              children: [(0, u.jsx)(Qt, {
                children: n
              }), o ? (0, u.jsx)(Rt.bL, {
                id: l.contentId,
                role: "tooltip",
                children: o
              }) : null]
            })
          })
        }, "TooltipContentImpl")),
        Jt = f.forwardRef(Et(function(e, t) {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Tt(r);
          return (0, u.jsx)(pt, {
            ...o,
            ...n,
            ref: t
          })
        }, "TooltipArrow"));

      function er(e, t) {
        const r = Math.abs(t.top - e.y),
          n = Math.abs(t.bottom - e.y),
          o = Math.abs(t.right - e.x),
          a = Math.abs(t.left - e.x);
        switch (Math.min(r, n, o, a)) {
          case a:
            return "left";
          case o:
            return "right";
          case r:
            return "top";
          case n:
            return "bottom";
          default:
            throw new Error("unreachable")
        }
      }

      function tr(e, t, r = 5) {
        const n = [];
        switch (t) {
          case "top":
            n.push({
              x: e.x - r,
              y: e.y + r
            }, {
              x: e.x + r,
              y: e.y + r
            });
            break;
          case "bottom":
            n.push({
              x: e.x - r,
              y: e.y - r
            }, {
              x: e.x + r,
              y: e.y - r
            });
            break;
          case "left":
            n.push({
              x: e.x + r,
              y: e.y - r
            }, {
              x: e.x + r,
              y: e.y + r
            });
            break;
          case "right":
            n.push({
              x: e.x - r,
              y: e.y - r
            }, {
              x: e.x - r,
              y: e.y + r
            })
        }
        return n
      }

      function rr(e) {
        const {
          top: t,
          right: r,
          bottom: n,
          left: o
        } = e;
        return [{
          x: o,
          y: t
        }, {
          x: r,
          y: t
        }, {
          x: r,
          y: n
        }, {
          x: o,
          y: n
        }]
      }

      function nr(e, t) {
        const {
          x: r,
          y: n
        } = e;
        let o = !1;
        for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
          const s = t[e],
            i = t[a],
            d = s.x,
            l = s.y,
            u = i.x,
            c = i.y;
          l > n != c > n && r < (u - d) * (n - l) / (c - l) + d && (o = !o)
        }
        return o
      }

      function or(e) {
        const t = e.slice();
        return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0), ar(t)
      }

      function ar(e) {
        if (e.length <= 1) return e.slice();
        const t = [];
        for (let r = 0; r < e.length; r++) {
          const n = e[r];
          for (; t.length >= 2;) {
            const e = t[t.length - 1],
              r = t[t.length - 2];
            if (!((e.x - r.x) * (n.y - r.y) >= (e.y - r.y) * (n.x - r.x))) break;
            t.pop()
          }
          t.push(n)
        }
        t.pop();
        const r = [];
        for (let t = e.length - 1; t >= 0; t--) {
          const n = e[t];
          for (; r.length >= 2;) {
            const e = r[r.length - 1],
              t = r[r.length - 2];
            if (!((e.x - t.x) * (n.y - t.y) >= (e.y - t.y) * (n.x - t.x))) break;
            r.pop()
          }
          r.push(n)
        }
        return r.pop(), 1 === t.length && 1 === r.length && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r)
      }
      Et(er, "getExitSideFromRect"), Et(tr, "getPaddedExitPoints"), Et(rr, "getPointsFromRect"), Et(nr, "isPointInPolygon"), Et(or, "getHull"), Et(ar, "getHullPresorted");
      var sr = Mt,
        ir = Bt,
        dr = Gt,
        lr = Wt,
        ur = Jt;
      const cr = (0, f.createContext)(null),
        fr = ({
          children: e,
          delayDuration: t = 0,
          defaultOpen: r,
          onOpenChange: n,
          isDisabled: o,
          ...a
        }) => {
          const [s = !1, i] = (0, Z.ic)({
            defaultProp: r,
            prop: !o && a.isOpen,
            onChange: n
          });
          return (0, u.jsx)(sr, {
            delayDuration: t,
            children: (0, u.jsx)(cr.Provider, {
              value: {
                isOpen: s,
                ...a
              },
              children: (0, u.jsx)(ir, {
                open: s,
                onOpenChange: i,
                children: e
              })
            })
          })
        },
        pr = (0, f.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, u.jsx)(dr, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        vr = (0, f.forwardRef)(({
          testId: e,
          side: t = "top",
          sideOffset: r = 8,
          align: n = "center",
          alignOffset: o = 0,
          avoidCollisions: a = !0,
          sticky: s = "partial",
          ...i
        }, d) => {
          const {
            isOpen: l
          } = function() {
            const e = (0, f.useContext)(cr);
            if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
            return e
          }(), c = (0, Z.jt)(), p = (0, he.animated)(lr), v = (0, he.useTransition)(l, {
            delay: l ? 0 : 200,
            from: {
              opacity: 0
            },
            enter: {
              opacity: 1
            },
            leave: {
              opacity: 0
            },
            config: he.config.stiff,
            immediate: c
          }), y = (0, x.v6)({
            "data-testid": e,
            side: t,
            align: n,
            sticky: s,
            sideOffset: r,
            alignOffset: o,
            avoidCollisions: a,
            className: "foundry_h3lgaa0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }, i);
          return v(e => (0, u.jsx)(p, {
            ...y,
            style: e,
            ref: d
          }))
        }),
        yr = (0, f.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, x.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, u.jsx)(ur, {
            ...r,
            ref: t
          })
        });
      var mr = r(76844),
        hr = r(12430),
        br = r(19046),
        gr = Object.defineProperty,
        wr = (e, t) => gr(e, "name", {
          value: t,
          configurable: !0
        });

      function Cr(e) {
        const t = e + "CollectionProvider",
          [r, n] = (0, we.A)(t),
          [o, a] = r(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          s = wr(e => {
            const {
              scope: t,
              children: r
            } = e, n = f.useRef(null), a = f.useRef(new Map).current;
            return (0, u.jsx)(o, {
              scope: t,
              itemMap: a,
              collectionRef: n,
              children: r
            })
          }, "CollectionProvider");
        s.displayName = t;
        const i = e + "CollectionSlot",
          d = (0, St.TL)(i),
          l = f.forwardRef((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = a(i, r), s = (0, ge.s)(t, o.collectionRef);
            return (0, u.jsx)(d, {
              ref: s,
              children: n
            })
          });
        l.displayName = i;
        const c = e + "CollectionItemSlot",
          p = "data-radix-collection-item",
          v = (0, St.TL)(c),
          y = f.forwardRef((e, t) => {
            const {
              scope: r,
              children: n,
              ...o
            } = e, s = f.useRef(null), i = (0, ge.s)(t, s), d = a(c, r);
            return f.useEffect(() => (d.itemMap.set(s, {
              ref: s,
              ...o
            }), () => {
              d.itemMap.delete(s)
            })), (0, u.jsx)(v, {
              [p]: "",
              ref: i,
              children: n
            })
          });

        function m(t) {
          const r = a(e + "CollectionConsumer", t);
          return f.useCallback(() => {
            const e = r.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${p}]`));
            return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
          }, [r.collectionRef, r.itemMap])
        }
        return y.displayName = c, wr(m, "useCollection"), [{
          Provider: s,
          Slot: l,
          ItemSlot: y
        }, m, n]
      }
      wr(Cr, "createCollection");
      var xr = new WeakMap,
        _r = class e extends Map {
          static {
            wr(this, "OrderedDict")
          }
          #e;
          constructor(e) {
            super(e), this.#e = [...super.keys()], xr.set(this, !0)
          }
          set(e, t) {
            return xr.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this
          }
          insert(e, t, r) {
            const n = this.has(t),
              o = this.#e.length,
              a = Pr(e);
            let s = a >= 0 ? a : o + a;
            const i = s < 0 || s >= o ? -1 : s;
            if (i === this.size || n && i === this.size - 1 || -1 === i) return this.set(t, r), this;
            const d = this.size + (n ? 0 : 1);
            a < 0 && s++;
            const l = [...this.#e];
            let u, c = !1;
            for (let e = s; e < d; e++)
              if (s === e) {
                let o = l[e];
                l[e] === t && (o = l[e + 1]), n && this.delete(t), u = this.get(o), this.set(t, r)
              } else {
                c || l[e - 1] !== t || (c = !0);
                const r = l[c ? e : e - 1],
                  n = u;
                u = this.get(r), this.delete(r), this.set(r, n)
              } return this
          }
          with(t, r, n) {
            const o = new e(this);
            return o.insert(t, r, n), o
          }
          before(e) {
            const t = this.#e.indexOf(e) - 1;
            if (!(t < 0)) return this.entryAt(t)
          }
          setBefore(e, t, r) {
            const n = this.#e.indexOf(e);
            return -1 === n ? this : this.insert(n, t, r)
          }
          after(e) {
            let t = this.#e.indexOf(e);
            if (t = -1 === t || t === this.size - 1 ? -1 : t + 1, -1 !== t) return this.entryAt(t)
          }
          setAfter(e, t, r) {
            const n = this.#e.indexOf(e);
            return -1 === n ? this : this.insert(n + 1, t, r)
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
            const t = jr(this.#e, e);
            if (void 0 !== t) return this.get(t)
          }
          entryAt(e) {
            const t = jr(this.#e, e);
            if (void 0 !== t) return [t, this.get(t)]
          }
          indexOf(e) {
            return this.#e.indexOf(e)
          }
          keyAt(e) {
            return jr(this.#e, e)
          }
          from(e, t) {
            const r = this.indexOf(e);
            if (-1 === r) return;
            let n = r + t;
            return n < 0 && (n = 0), n >= this.size && (n = this.size - 1), this.at(n)
          }
          keyFrom(e, t) {
            const r = this.indexOf(e);
            if (-1 === r) return;
            let n = r + t;
            return n < 0 && (n = 0), n >= this.size && (n = this.size - 1), this.keyAt(n)
          }
          find(e, t) {
            let r = 0;
            for (const n of this) {
              if (Reflect.apply(e, t, [n, r, this])) return n;
              r++
            }
          }
          findIndex(e, t) {
            let r = 0;
            for (const n of this) {
              if (Reflect.apply(e, t, [n, r, this])) return r;
              r++
            }
            return -1
          }
          filter(t, r) {
            const n = [];
            let o = 0;
            for (const e of this) Reflect.apply(t, r, [e, o, this]) && n.push(e), o++;
            return new e(n)
          }
          map(t, r) {
            const n = [];
            let o = 0;
            for (const e of this) n.push([e[0], Reflect.apply(t, r, [e, o, this])]), o++;
            return new e(n)
          }
          reduce(...e) {
            const [t, r] = e;
            let n = 0,
              o = r ?? this.at(0);
            for (const r of this) o = 0 === n && 1 === e.length ? r : Reflect.apply(t, this, [o, r, n, this]), n++;
            return o
          }
          reduceRight(...e) {
            const [t, r] = e;
            let n = r ?? this.at(-1);
            for (let r = this.size - 1; r >= 0; r--) {
              const o = this.at(r);
              n = r === this.size - 1 && 1 === e.length ? o : Reflect.apply(t, this, [n, o, r, this])
            }
            return n
          }
          toSorted(t) {
            const r = [...this.entries()].sort(t);
            return new e(r)
          }
          toReversed() {
            const t = new e;
            for (let e = this.size - 1; e >= 0; e--) {
              const r = this.keyAt(e),
                n = this.get(r);
              t.set(r, n)
            }
            return t
          }
          toSpliced(...t) {
            const r = [...this.entries()];
            return r.splice(...t), new e(r)
          }
          slice(t, r) {
            const n = new e;
            let o = this.size - 1;
            if (void 0 === t) return n;
            t < 0 && (t += this.size), void 0 !== r && r > 0 && (o = r - 1);
            for (let e = t; e <= o; e++) {
              const t = this.keyAt(e),
                r = this.get(t);
              n.set(t, r)
            }
            return n
          }
          every(e, t) {
            let r = 0;
            for (const n of this) {
              if (!Reflect.apply(e, t, [n, r, this])) return !1;
              r++
            }
            return !0
          }
          some(e, t) {
            let r = 0;
            for (const n of this) {
              if (Reflect.apply(e, t, [n, r, this])) return !0;
              r++
            }
            return !1
          }
        };

      function jr(e, t) {
        if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
        const r = Or(e, t);
        return -1 === r ? void 0 : e[r]
      }

      function Or(e, t) {
        const r = e.length,
          n = Pr(t),
          o = n >= 0 ? n : r + n;
        return o < 0 || o >= r ? -1 : o
      }

      function Pr(e) {
        return e != e || 0 === e ? 0 : Math.trunc(e)
      }

      function Sr(e, t) {
        if (e === t) return !0;
        if ("object" != typeof e || "object" != typeof t) return !1;
        if (null == e || null == t) return !1;
        const r = Object.keys(e),
          n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (const n of r) {
          if (!Object.prototype.hasOwnProperty.call(t, n)) return !1;
          if (e[n] !== t[n]) return !1
        }
        return !0
      }

      function Dr(e, t) {
        return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING)
      }

      function Rr(e, t) {
        return e[1].element && t[1].element ? Dr(e[1].element, t[1].element) ? -1 : 1 : 0
      }

      function Nr(e) {
        return new MutationObserver(t => {
          for (const r of t)
            if ("childList" === r.type) return void e()
        })
      }
      wr(jr, "at"), wr(Or, "toSafeIndex"), wr(Pr, "toSafeInteger"), wr(function(e) {
        const t = e + "CollectionProvider",
          [r, n] = (0, we.A)(t),
          [o, a] = r(t, {
            collectionElement: null,
            collectionRef: {
              current: null
            },
            collectionRefObject: {
              current: null
            },
            itemMap: new _r,
            setItemMap: wr(() => {}, "setItemMap")
          }),
          s = wr(({
            state: e,
            ...t
          }) => e ? (0, u.jsx)(d, {
            ...t,
            state: e
          }) : (0, u.jsx)(i, {
            ...t
          }), "CollectionProvider");
        s.displayName = t;
        const i = wr(e => {
          const t = b();
          return (0, u.jsx)(d, {
            ...e,
            state: t
          })
        }, "CollectionInit");
        i.displayName = t + "Init";
        const d = wr(e => {
          const {
            scope: t,
            children: r,
            state: n
          } = e, a = f.useRef(null), [s, i] = f.useState(null), d = (0, ge.s)(a, i), [l, c] = n;
          return f.useEffect(() => {
            if (!s) return;
            const e = Nr(() => {});
            return e.observe(s, {
              childList: !0,
              subtree: !0
            }), () => {
              e.disconnect()
            }
          }, [s]), (0, u.jsx)(o, {
            scope: t,
            itemMap: l,
            setItemMap: c,
            collectionRef: d,
            collectionRefObject: a,
            collectionElement: s,
            children: r
          })
        }, "CollectionProviderImpl");
        d.displayName = t + "Impl";
        const l = e + "CollectionSlot",
          c = (0, St.TL)(l),
          p = f.forwardRef((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = a(l, r), s = (0, ge.s)(t, o.collectionRef);
            return (0, u.jsx)(c, {
              ref: s,
              children: n
            })
          });
        p.displayName = l;
        const v = e + "CollectionItemSlot",
          y = "data-radix-collection-item",
          m = (0, St.TL)(v),
          h = f.forwardRef((e, t) => {
            const {
              scope: r,
              children: n,
              ...o
            } = e, s = f.useRef(null), [i, d] = f.useState(null), l = (0, ge.s)(t, s, d), c = a(v, r), {
              setItemMap: p
            } = c, h = f.useRef(o);
            Sr(h.current, o) || (h.current = o);
            const b = h.current;
            return f.useEffect(() => {
              const e = b;
              return p(t => i ? t.has(i) ? t.set(i, {
                ...e,
                element: i
              }).toSorted(Rr) : (t.set(i, {
                ...e,
                element: i
              }), t.toSorted(Rr)) : t), () => {
                p(e => i && e.has(i) ? (e.delete(i), new _r(e)) : e)
              }
            }, [i, b, p]), (0, u.jsx)(m, {
              [y]: "",
              ref: l,
              children: n
            })
          });

        function b() {
          return f.useState(new _r)
        }

        function g(t) {
          const {
            itemMap: r
          } = a(e + "CollectionConsumer", t);
          return r
        }
        return h.displayName = v, wr(b, "useInitCollection"), wr(g, "useCollection"), [{
          Provider: s,
          Slot: p,
          ItemSlot: h
        }, {
          createCollectionScope: n,
          useCollection: g,
          useInitCollection: b
        }]
      }, "createCollection"), wr(Sr, "shallowEqual"), wr(Dr, "isElementPreceding"), wr(Rr, "sortByDocumentPosition"), wr(Nr, "getChildListObserver");
      var Er = Object.defineProperty,
        kr = (e, t) => Er(e, "name", {
          value: t,
          configurable: !0
        }),
        Ir = ["PageUp", "PageDown"],
        Tr = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Vr = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        zr = "Slider",
        [Lr, Ar, Mr] = Cr(zr),
        [Fr, Hr] = (0, we.A)(zr, [Mr]),
        [qr, Br] = Fr(zr),
        Xr = f.forwardRef(kr(function(e, t) {
          const {
            name: r,
            min: n = 0,
            max: o = 100,
            step: a = 1,
            orientation: s = "horizontal",
            disabled: i = !1,
            minStepsBetweenThumbs: d = 0,
            defaultValue: l = [n],
            value: c,
            onValueChange: p = kr(() => {}, "onValueChange"),
            onValueCommit: v = kr(() => {}, "onValueCommit"),
            inverted: y = !1,
            form: m,
            ...h
          } = e, b = f.useRef(new Set), g = f.useRef(0), w = f.useRef(!1), C = "horizontal" === s ? Ur : Zr, [x, _] = f.useState(null), j = (0, ge.s)(t, _), [O = [], P] = (0, Dt.i)({
            prop: c,
            defaultProp: l,
            onChange: kr(e => {
              const t = [...b.current];
              t[g.current]?.focus({
                preventScroll: !0,
                focusVisible: w.current
              }), w.current = !1, p(e)
            }, "onChange")
          }), S = f.useRef(O), D = f.useRef(O);

          function R(e) {
            k(e, un(O, e))
          }

          function N(e) {
            k(e, g.current)
          }

          function E() {
            String(O) !== String(S.current) && v(O)
          }

          function k(e, t, {
            commit: r
          } = {
            commit: !1
          }) {
            const s = yn(a),
              i = mn(Math.round((e - n) / a) * a + n, s),
              l = (0, mr.q)(i, [n, o]);
            P((e = []) => {
              const n = sn(e, l, t);
              if (pn(n, d * a)) {
                g.current = n.indexOf(l);
                const t = String(n) !== String(e);
                return t && r && v(n), t ? n : e
              }
              return e
            })
          }
          return f.useEffect(() => {
            const e = m ? x?.ownerDocument.getElementById(m) : x?.closest("form");
            if (e instanceof HTMLFormElement) {
              const t = kr(() => P(D.current), "reset");
              return e.addEventListener("reset", t), () => e.removeEventListener("reset", t)
            }
          }, [x, m, P]), kr(R, "handleSlideStart"), kr(N, "handleSlideMove"), kr(E, "handleSlideEnd"), kr(k, "updateValues"), (0, u.jsx)(qr, {
            scope: e.__scopeSlider,
            name: r,
            disabled: i,
            min: n,
            max: o,
            valueIndexToChangeRef: g,
            thumbs: b.current,
            values: O,
            orientation: s,
            form: m,
            children: (0, u.jsx)(Lr.Provider, {
              scope: e.__scopeSlider,
              children: (0, u.jsx)(Lr.Slot, {
                scope: e.__scopeSlider,
                children: (0, u.jsx)(C, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...h,
                  ref: j,
                  onPointerDown: (0, be.mK)(h.onPointerDown, () => {
                    i || (S.current = O, w.current = !1)
                  }),
                  min: n,
                  max: o,
                  inverted: y,
                  onSlideStart: i ? void 0 : R,
                  onSlideMove: i ? void 0 : N,
                  onSlideEnd: i ? void 0 : E,
                  onHomeKeyDown: () => {
                    i || (w.current = !0, k(n, 0, {
                      commit: !0
                    }))
                  },
                  onEndKeyDown: () => {
                    i || (w.current = !0, k(o, O.length - 1, {
                      commit: !0
                    }))
                  },
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!i) {
                      w.current = !0;
                      const r = Ir.includes(e.key) || e.shiftKey && Tr.includes(e.key) ? 10 : 1,
                        o = g.current;
                      k(hn(O[o], {
                        min: n,
                        step: a,
                        direction: t,
                        multiplier: r
                      }), o, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        }, "Slider")),
        [Gr, Kr] = Fr(zr, {
          startEdge: "left",
          endEdge: "right",
          size: "width",
          direction: 1
        }),
        Ur = f.forwardRef(kr(function(e, t) {
          const {
            min: r,
            max: n,
            dir: o,
            inverted: a,
            onSlideStart: s,
            onSlideMove: i,
            onSlideEnd: d,
            onStepKeyDown: l,
            ...c
          } = e, [p, v] = f.useState(null), y = (0, ge.s)(t, v), m = f.useRef(void 0), h = (0, hr.jH)(o), b = "ltr" === h, g = b && !a || !b && a;

          function w(e) {
            const t = m.current || p.getBoundingClientRect(),
              o = vn([0, t.width], g ? [r, n] : [n, r]);
            return m.current = t, o(e - t.left)
          }
          return kr(w, "getValueFromPointer"), (0, u.jsx)(Gr, {
            scope: e.__scopeSlider,
            startEdge: g ? "left" : "right",
            endEdge: g ? "right" : "left",
            direction: g ? 1 : -1,
            size: "width",
            children: (0, u.jsx)(Wr, {
              dir: h,
              "data-orientation": "horizontal",
              ...c,
              ref: y,
              style: {
                ...c.style,
                "--radix-slider-thumb-transform": "translateX(-50%)"
              },
              onSlideStart: e => {
                const t = w(e.clientX);
                s?.(t)
              },
              onSlideMove: e => {
                const t = w(e.clientX);
                i?.(t)
              },
              onSlideEnd: () => {
                m.current = void 0, d?.()
              },
              onStepKeyDown: e => {
                const t = Vr[g ? "from-left" : "from-right"].includes(e.key);
                l?.({
                  event: e,
                  direction: t ? -1 : 1
                })
              }
            })
          })
        }, "SliderHorizontal")),
        Zr = f.forwardRef(kr(function(e, t) {
          const {
            min: r,
            max: n,
            inverted: o,
            onSlideStart: a,
            onSlideMove: s,
            onSlideEnd: i,
            onStepKeyDown: d,
            ...l
          } = e, c = f.useRef(null), p = (0, ge.s)(t, c), v = f.useRef(void 0), y = !o;

          function m(e) {
            const t = v.current || c.current.getBoundingClientRect(),
              o = vn([0, t.height], y ? [n, r] : [r, n]);
            return v.current = t, o(e - t.top)
          }
          return kr(m, "getValueFromPointer"), (0, u.jsx)(Gr, {
            scope: e.__scopeSlider,
            startEdge: y ? "bottom" : "top",
            endEdge: y ? "top" : "bottom",
            size: "height",
            direction: y ? 1 : -1,
            children: (0, u.jsx)(Wr, {
              "data-orientation": "vertical",
              ...l,
              ref: p,
              style: {
                ...l.style,
                "--radix-slider-thumb-transform": "translateY(50%)"
              },
              onSlideStart: e => {
                const t = m(e.clientY);
                a?.(t)
              },
              onSlideMove: e => {
                const t = m(e.clientY);
                s?.(t)
              },
              onSlideEnd: () => {
                v.current = void 0, i?.()
              },
              onStepKeyDown: e => {
                const t = Vr[y ? "from-bottom" : "from-top"].includes(e.key);
                d?.({
                  event: e,
                  direction: t ? -1 : 1
                })
              }
            })
          })
        }, "SliderVertical")),
        Wr = f.forwardRef(kr(function(e, t) {
          const {
            __scopeSlider: r,
            onSlideStart: n,
            onSlideMove: o,
            onSlideEnd: a,
            onHomeKeyDown: s,
            onEndKeyDown: i,
            onStepKeyDown: d,
            ...l
          } = e, c = Br(zr, r);
          return (0, u.jsx)(Ce.sG.span, {
            ...l,
            ref: t,
            onKeyDown: (0, be.mK)(e.onKeyDown, e => {
              "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : Ir.concat(Tr).includes(e.key) && (d(e), e.preventDefault())
            }),
            onPointerDown: (0, be.mK)(e.onPointerDown, e => {
              const t = e.target;
              t.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(t) ? t.focus({
                preventScroll: !0,
                focusVisible: !1
              }) : n(e)
            }),
            onPointerMove: (0, be.mK)(e.onPointerMove, e => {
              e.target.hasPointerCapture(e.pointerId) && o(e)
            }),
            onPointerUp: (0, be.mK)(e.onPointerUp, e => {
              const t = e.target;
              t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e))
            })
          })
        }, "SliderImpl")),
        Yr = f.forwardRef(kr(function(e, t) {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = Br("SliderTrack", r);
          return (0, u.jsx)(Ce.sG.span, {
            "data-disabled": o.disabled ? "" : void 0,
            "data-orientation": o.orientation,
            ...n,
            ref: t
          })
        }, "SliderTrack")),
        Qr = "SliderRange",
        $r = f.forwardRef(kr(function(e, t) {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = Br(Qr, r), a = Kr(Qr, r), s = f.useRef(null), i = (0, ge.s)(t, s), d = o.values.length, l = o.values.map(e => dn(e, o.min, o.max)), c = d > 1 ? Math.min(...l) : 0, p = 100 - Math.max(...l);
          return (0, u.jsx)(Ce.sG.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: i,
            style: {
              ...e.style,
              [a.startEdge]: c + "%",
              [a.endEdge]: p + "%"
            }
          })
        }, "SliderRange")),
        [Jr, en] = Fr("SliderThumb");

      function tn(e) {
        const {
          __scopeSlider: t,
          name: r,
          children: n,
          internal_do_not_use_render: o
        } = e, a = Br("SliderThumbProvider", t), s = Ar(t), [i, d] = f.useState(null), l = f.useMemo(() => i ? s().findIndex(e => e.ref.current === i) : -1, [s, i]), c = (0, Ge.X)(i), p = !i || !!a.form || !!i.closest("form"), v = a.values[l], y = r ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0), m = void 0 === v ? 0 : dn(v, a.min, a.max);
        f.useEffect(() => {
          if (i) return a.thumbs.add(i), () => {
            a.thumbs.delete(i)
          }
        }, [i, a.thumbs]);
        const h = {
          value: v,
          name: y,
          form: a.form,
          isFormControl: p,
          index: l,
          thumb: i,
          onThumbChange: d,
          percent: m,
          size: c
        };
        return (0, u.jsx)(Jr, {
          scope: t,
          ...h,
          children: bn(o) ? o(h) : n
        })
      }
      kr(tn, "SliderThumbProvider");
      var rn = "SliderThumbTrigger",
        nn = f.forwardRef(kr(function(e, t) {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = Br(rn, r), a = Kr(rn, r), {
            index: s,
            value: i,
            percent: d,
            size: l,
            onThumbChange: c
          } = en(rn, r), f = (0, ge.s)(t, c), p = ln(s, o.values.length), v = l?.[a.size], y = v ? cn(v, d, a.direction) : 0;
          return (0, u.jsx)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [a.startEdge]: `calc(${d}% + ${y}px)`
            },
            children: (0, u.jsx)(Lr.ItemSlot, {
              scope: r,
              children: (0, u.jsx)(Ce.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || p,
                "aria-valuemin": o.min,
                "aria-valuenow": i,
                "aria-valuemax": o.max,
                "aria-orientation": o.orientation,
                "data-orientation": o.orientation,
                "data-disabled": o.disabled ? "" : void 0,
                tabIndex: o.disabled ? void 0 : 0,
                ...n,
                ref: f,
                style: void 0 === i ? {
                  display: "none"
                } : e.style,
                onFocus: (0, be.mK)(e.onFocus, () => {
                  o.valueIndexToChangeRef.current = s
                })
              })
            })
          })
        }, "SliderThumbTrigger")),
        on = f.forwardRef(kr(function(e, t) {
          const {
            __scopeSlider: r,
            name: n,
            ...o
          } = e;
          return (0, u.jsx)(tn, {
            __scopeSlider: r,
            name: n,
            internal_do_not_use_render: ({
              index: e,
              isFormControl: n
            }) => (0, u.jsxs)(u.Fragment, {
              children: [(0, u.jsx)(nn, {
                ...o,
                ref: t,
                __scopeSlider: r
              }), n ? (0, u.jsx)(an, {
                __scopeSlider: r
              }, e) : null]
            })
          })
        }, "SliderThumb")),
        an = f.forwardRef(kr(function({
          __scopeSlider: e,
          ...t
        }, r) {
          const {
            value: n,
            name: o,
            form: a
          } = en("SliderBubbleInput", e), s = f.useRef(null), i = (0, ge.s)(s, r), d = (0, br.Z)(n);
          return f.useEffect(() => {
            const e = s.current;
            if (!e) return;
            const t = window.HTMLInputElement.prototype,
              r = Object.getOwnPropertyDescriptor(t, "value").set;
            if (d !== n && r) {
              const t = new Event("input", {
                bubbles: !0
              });
              r.call(e, n), e.dispatchEvent(t)
            }
          }, [d, n]), (0, u.jsx)(Ce.sG.input, {
            style: {
              display: "none"
            },
            name: o,
            form: a,
            ...t,
            ref: i,
            defaultValue: n
          })
        }, "SliderBubbleInput"));

      function sn(e = [], t, r) {
        const n = [...e];
        return n[r] = t, n.sort((e, t) => e - t)
      }

      function dn(e, t, r) {
        const n = 100 / (r - t) * (e - t);
        return (0, mr.q)(n, [0, 100])
      }

      function ln(e, t) {
        return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
      }

      function un(e, t) {
        if (1 === e.length) return 0;
        const r = e.map(e => Math.abs(e - t)),
          n = Math.min(...r);
        return r.indexOf(n)
      }

      function cn(e, t, r) {
        const n = e / 2;
        return (n - vn([0, 50], [0, n])(t) * r) * r
      }

      function fn(e) {
        return e.slice(0, -1).map((t, r) => e[r + 1] - t)
      }

      function pn(e, t) {
        if (t > 0) {
          const r = fn(e);
          return Math.min(...r) >= t
        }
        return !0
      }

      function vn(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function yn(e) {
        if (!Number.isFinite(e)) return 0;
        const t = e.toString();
        if (t.includes("e")) {
          const [e, r] = t.split("e"), n = e.split(".")[1] || "", o = Number(r);
          return Math.max(0, n.length - o)
        }
        const r = t.split(".")[1];
        return r ? r.length : 0
      }

      function mn(e, t) {
        const r = Math.pow(10, t);
        return Math.round(e * r) / r
      }

      function hn(e, {
        min: t,
        step: r,
        direction: n,
        multiplier: o
      }) {
        const a = yn(r),
          s = (e - t) / r,
          i = Math.round(s);
        let d;
        return d = mn(i * r + t, a) === mn(e, a) ? i + o * n : n > 0 ? Math.ceil(s) : Math.floor(s), mn(d * r + t, a)
      }

      function bn(e) {
        return "function" == typeof e
      }
      kr(sn, "getNextSortedValues"), kr(dn, "convertValueToPercentage"), kr(ln, "getLabel"), kr(un, "getClosestValueIndex"), kr(cn, "getThumbInBoundsOffset"), kr(fn, "getStepsBetweenValues"), kr(pn, "hasMinStepsBetweenValues"), kr(vn, "linearScale"), kr(yn, "getDecimalCount"), kr(mn, "roundValue"), kr(hn, "getNextStepValue"), kr(bn, "isFunction");
      var gn = Object.defineProperty,
        wn = (e, t) => gn(e, "name", {
          value: t,
          configurable: !0
        }),
        Cn = "focusScope.autoFocusOnMount",
        xn = "focusScope.autoFocusOnUnmount",
        _n = {
          bubbles: !1,
          cancelable: !0
        },
        jn = f.forwardRef(wn(function(e, t) {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            ...s
          } = e, [i, d] = f.useState(null), l = (0, xe.c)(o), c = (0, xe.c)(a), p = f.useRef(null), v = (0, ge.s)(t, d), y = f.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          f.useEffect(() => {
            if (n) {
              let e = function(e) {
                  if (y.paused || !i) return;
                  const t = e.target;
                  i.contains(t) ? p.current = t : En(p.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (y.paused || !i) return;
                  const t = e.relatedTarget;
                  null !== t && (i.contains(t) || En(p.current, {
                    select: !0
                  }))
                },
                r = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && En(i)
                };
              wn(e, "handleFocusIn"), wn(t, "handleFocusOut"), wn(r, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const n = new MutationObserver(r);
              return i && n.observe(i, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
              }
            }
          }, [n, i, y.paused]), f.useEffect(() => {
            if (i) {
              kn.add(y);
              const e = document.activeElement;
              if (!i.contains(e)) {
                const t = new CustomEvent(Cn, _n);
                i.addEventListener(Cn, l), i.dispatchEvent(t), t.defaultPrevented || (On(Vn(Sn(i)), {
                  select: !0
                }), document.activeElement === e && En(i))
              }
              return () => {
                i.removeEventListener(Cn, l), setTimeout(() => {
                  const t = new CustomEvent(xn, _n);
                  i.addEventListener(xn, c), i.dispatchEvent(t), t.defaultPrevented || En(e ?? document.body, {
                    select: !0
                  }), i.removeEventListener(xn, c), kn.remove(y)
                }, 0)
              }
            }
          }, [i, l, c, y]);
          const m = f.useCallback(e => {
            if (!r && !n) return;
            if (y.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [n, a] = Pn(t);
              n && a ? e.shiftKey || o !== a ? e.shiftKey && o === n && (e.preventDefault(), r && En(a, {
                select: !0
              })) : (e.preventDefault(), r && En(n, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [r, n, y.paused]);
          return (0, u.jsx)(Ce.sG.div, {
            tabIndex: -1,
            ...s,
            ref: v,
            onKeyDown: m
          })
        }, "FocusScope"));

      function On(e, {
        select: t = !1
      } = {}) {
        const r = document.activeElement;
        for (const n of e)
          if (En(n, {
              select: t
            }), document.activeElement !== r) return
      }

      function Pn(e) {
        const t = Sn(e);
        return [Dn(t, e), Dn(t.reverse(), e)]
      }

      function Sn(e) {
        const t = [],
          r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: wn(e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }, "acceptNode")
          });
        for (; r.nextNode();) t.push(r.currentNode);
        return t
      }

      function Dn(e, t) {
        const r = "function" == typeof t.checkVisibility && t.checkVisibility({
          checkVisibilityCSS: !0
        });
        for (const n of e)
          if (!(r ? !n.checkVisibility({
              checkVisibilityCSS: !0
            }) : Rn(n, {
              upTo: t
            }))) return n
      }

      function Rn(e, {
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

      function Nn(e) {
        return e instanceof HTMLInputElement && "select" in e
      }

      function En(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          const r = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== r && Nn(e) && t && e.select()
        }
      }
      wn(On, "focusFirst"), wn(Pn, "getTabbableEdges"), wn(Sn, "getTabbableCandidates"), wn(Dn, "findVisible"), wn(Rn, "isHidden"), wn(Nn, "isSelectableInput"), wn(En, "focus");
      var kn = In();

      function In() {
        let e = [];
        return {
          add(t) {
            const r = e[0];
            t !== r && r?.pause(), e = Tn(e, t), e.unshift(t)
          },
          remove(t) {
            e = Tn(e, t), e[0]?.resume()
          }
        }
      }

      function Tn(e, t) {
        const r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r
      }

      function Vn(e) {
        return e.filter(e => "A" !== e.tagName)
      }
      wn(In, "createFocusScopesStack"), wn(Tn, "arrayRemove"), wn(Vn, "removeLinks");
      var zn = r(86187),
        Ln = r(38100),
        An = r(45787),
        Mn = Object.defineProperty,
        Fn = (e, t) => Mn(e, "name", {
          value: t,
          configurable: !0
        }),
        Hn = "Dialog",
        [qn, Bn] = (0, we.A)(Hn),
        [Xn, Gn] = qn(Hn),
        Kn = f.forwardRef(Fn(function(e, t) {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Gn("DialogTrigger", r), a = (0, ge.s)(t, o.triggerRef);
          return (0, u.jsx)(Ce.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.open ? o.contentId : void 0,
            "data-state": io(o.open),
            ...n,
            ref: a,
            onClick: (0, be.mK)(e.onClick, o.onOpenToggle)
          })
        }, "DialogTrigger")),
        [Un, Zn] = qn("DialogPortal", {
          forceMount: void 0
        }),
        Wn = "DialogOverlay",
        Yn = f.forwardRef(Fn(function(e, t) {
          const r = Zn(Wn, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = Gn(Wn, e.__scopeDialog);
          return a.modal ? (0, u.jsx)(Ct, {
            present: n || a.open,
            children: (0, u.jsx)($n, {
              ...o,
              ref: t
            })
          }) : null
        }, "DialogOverlay")),
        Qn = (0, St.TL)("DialogOverlay.RemoveScroll"),
        $n = f.forwardRef(Fn(function(e, t) {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Gn(Wn, r), a = Re(), s = (0, ge.s)(t, a);
          return (0, u.jsx)(Ln.A, {
            as: Qn,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, u.jsx)(Ce.sG.div, {
              "data-state": io(o.open),
              ...n,
              ref: s,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        }, "DialogOverlayImpl")),
        Jn = "DialogContent",
        eo = f.forwardRef(Fn(function(e, t) {
          const r = Zn(Jn, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = Gn(Jn, e.__scopeDialog);
          return (0, u.jsx)(Ct, {
            present: n || a.open,
            children: a.modal ? (0, u.jsx)(to, {
              ...o,
              ref: t
            }) : (0, u.jsx)(ro, {
              ...o,
              ref: t
            })
          })
        }, "DialogContent")),
        to = f.forwardRef(Fn(function(e, t) {
          const r = Gn(Jn, e.__scopeDialog),
            n = f.useRef(null),
            o = (0, ge.s)(t, r.contentRef, n);
          return f.useEffect(() => {
            const e = n.current;
            if (e) return (0, An.Eq)(e)
          }, []), (0, u.jsx)(no, {
            ...e,
            ref: o,
            trapFocus: r.open,
            disableOutsidePointerEvents: r.open,
            onCloseAutoFocus: (0, be.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), r.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, be.mK)(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || r) && e.preventDefault()
            }),
            onFocusOutside: (0, be.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }, "DialogContentModal")),
        ro = f.forwardRef(Fn(function(e, t) {
          const r = Gn(Jn, e.__scopeDialog),
            n = f.useRef(!1),
            o = f.useRef(!1);
          return (0, u.jsx)(no, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (n.current || r.triggerRef.current?.focus(), t.preventDefault()), n.current = !1, o.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (n.current = !0, "pointerdown" === t.detail.originalEvent.type && (o.current = !0));
              const a = t.target,
                s = r.triggerRef.current?.contains(a);
              s && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
            }
          })
        }, "DialogContentNonModal")),
        no = f.forwardRef(Fn(function(e, t) {
          const {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: a,
            ...s
          } = e, i = Gn(Jn, r);
          return (0, zn.Oh)(), (0, u.jsx)(u.Fragment, {
            children: (0, u.jsx)(jn, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: a,
              children: (0, u.jsx)(Se, {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionPresent ? i.descriptionId : void 0,
                "aria-labelledby": i.titlePresent ? i.titleId : void 0,
                "data-state": io(i.open),
                ...s,
                ref: t,
                deferPointerDownOutside: !0,
                onDismiss: () => i.onOpenChange(!1)
              })
            })
          })
        }, "DialogContentImpl")),
        oo = f.forwardRef(Fn(function(e, t) {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Gn("DialogTitle", r), {
            setTitleCount: a
          } = o;
          return (0, Xe.N)(() => (a(e => e + 1), () => a(e => e - 1)), [a]), (0, u.jsx)(Ce.sG.h2, {
            id: o.titleId,
            ...n,
            ref: t
          })
        }, "DialogTitle")),
        ao = f.forwardRef(Fn(function(e, t) {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Gn("DialogDescription", r), {
            setDescriptionCount: a
          } = o;
          return (0, Xe.N)(() => (a(e => e + 1), () => a(e => e - 1)), [a]), (0, u.jsx)(Ce.sG.p, {
            id: o.descriptionId,
            ...n,
            ref: t
          })
        }, "DialogDescription")),
        so = f.forwardRef(Fn(function(e, t) {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Gn("DialogClose", r);
          return (0, u.jsx)(Ce.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, be.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        }, "DialogClose"));

      function io(e) {
        return e ? "open" : "closed"
      }
      Fn(io, "getState");
      const lo = (0, f.createContext)({
          triggerRef: (0, f.createRef)(),
          triggerBorderRef: (0, f.createRef)(),
          thumbnailRef: (0, f.createRef)(),
          openIconRef: (0, f.createRef)(),
          overlayRef: (0, f.createRef)(),
          contentRef: (0, f.createRef)(),
          containerRef: (0, f.createRef)(),
          imageRef: (0, f.createRef)(),
          placeholderRef: (0, f.createRef)(),
          zoomPanRef: (0, f.createRef)(),
          captionRef: (0, f.createRef)(),
          controlsRef: (0, f.createRef)(),
          closeRef: (0, f.createRef)(),
          zoomRef: (0, f.createRef)(),
          zoomInRef: (0, f.createRef)(),
          zoomSliderRef: (0, f.createRef)(),
          zoomOutRef: (0, f.createRef)(),
          resetRef: (0, f.createRef)(),
          downloadRef: (0, f.createRef)(),
          open: !1,
          setOpen: () => {},
          slide: null,
          altText: "",
          hideTrigger: !0
        }),
        uo = (0, f.createContext)({
          openAnim: () => Promise.resolve(),
          update: () => Promise.resolve(),
          close: () => Promise.resolve(),
          zoomIn: () => Promise.resolve(),
          zoomOut: () => Promise.resolve(),
          zoomTo: () => Promise.resolve(),
          resetZoom: () => Promise.resolve(),
          toggleControls: () => Promise.resolve(),
          onOpenChange: () => Promise.resolve()
        }),
        co = ((0, f.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = (0, de.tz)(),
            {
              triggerRef: a,
              triggerBorderRef: s,
              altText: i
            } = (0, f.useContext)(lo),
            d = (0, Z.UP)(a, n),
            l = (0, x.v6)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(pe.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, u.jsx)(Kn, {
            ref: d,
            ...l,
            children: (0, u.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: s,
              children: (0, u.jsx)(p.xV, {
                children: t
              })
            })
          })
        }), (0, f.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, f.useContext)(lo), a = (0, Z.UP)(o, n), s = (0, x.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = t ? p.DX : "img";
          return (0, u.jsx)(i, {
            ref: a,
            ...s
          })
        }), (0, f.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, f.useContext)(lo), o = (0, Z.UP)(n, r), a = (0, x.v6)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? p.DX : ce.h1;
          return (0, u.jsx)(s, {
            ref: o,
            ...a
          })
        }), (0, f.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, f.useContext)(lo), o = (0, Z.UP)(n, r), a = (0, x.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, u.jsx)(Yn, {
            ref: o,
            ...a
          })
        }), (0, f.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, f.useContext)(uo), {
            contentRef: a,
            altText: s,
            triggerRef: i
          } = (0, f.useContext)(lo), {
            cursor: d
          } = (() => {
            const {
              slide: e
            } = (0, f.useContext)(lo), [t, r] = (0, f.useState)(e.getCursor()), n = (0, f.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, f.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), l = [le.xW.tokens, le.xW.typography, le.xW.grid, ue("dark")].join(" ");
          const v = (0, Z.UP)(a, n),
            y = (0, x.v6)(r, {
              "data-testid": e,
              onOpenAutoFocus: o,
              onCloseAutoFocus: e => ((e, t) => {
                e?.preventDefault(), t.current?.focus({
                  preventScroll: !0
                })
              })(e, i),
              className: (0, c.$)("foundry_1a74xwb9", l),
              style: {
                cursor: d
              }
            });
          return (0, u.jsxs)(eo, {
            ref: v,
            ...y,
            children: [(0, u.jsx)(p.s6, {
              children: (0, u.jsx)(oo, {
                children: s
              })
            }), t]
          })
        }), (0, f.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, f.useContext)(lo);
          (() => {
            const {
              contextSafe: e
            } = (0, Y.L)(), {
              toggleControls: t
            } = (0, f.useContext)(uo), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: a,
              slide: s
            } = (0, f.useContext)(lo), i = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (W.gsap.to([n.current], {
                ...s.getCurrentTransform(),
                ...ie
              }), W.gsap.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...ie
              }), W.gsap.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...ie
              })))
            }), d = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || W.gsap.to([n.current], {
                ...s.getCurrentTransform(),
                ...ie
              }))
            }), l = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (W.gsap.to([n.current], {
                ...s.getCurrentTransform(),
                ...ie
              }), W.gsap.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...ie
              }), W.gsap.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...ie
              })))
            }), u = (0, f.useCallback)(() => {
              s.controlsVisible || t()
            }, [, t]);
            (0, Z.iQ)({
              ref: a,
              onFocusIn: u
            }), (0, Q.useGesture)({
              onWheel: d,
              onDrag: i,
              onPinch: l
            }, {
              target: r,
              drag: {
                filterTaps: !0
              },
              pinch: {
                pinchOnWheel: !1
              }
            })
          })();
          const a = (0, Z.UP)(o, n),
            s = (0, x.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, u.jsx)("div", {
            ref: a,
            ...s,
            children: (0, u.jsxs)(co, {
              children: [(0, u.jsx)(fo, {}), t]
            })
          })
        }), (0, f.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, f.useContext)(lo), a = (0, Z.UP)(o, n), s = (0, x.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = t ? p.DX : "div";
          return (0, u.jsx)(i, {
            ref: a,
            ...s
          })
        })),
        fo = (0, f.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, f.useContext)(lo), a = (0, Z.UP)(o, n), s = (0, x.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), i = t ? p.DX : "img";
          return (0, u.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        po = ((0, f.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, f.useContext)(lo), a = (0, Z.UP)(o, n), s = (0, x.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = t ? p.DX : "img";
          return (0, u.jsx)(i, {
            ref: a,
            ...s
          })
        }), (0, f.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, f.useContext)(lo), a = (0, Z.UP)(o, n), s = (0, x.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), i = t ? p.DX : "p";
          return (0, u.jsx)(ao, {
            asChild: !0,
            children: (0, u.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }), (0, f.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, f.useContext)(lo);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, f.useContext)(uo);
            (0, $.vC)(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), (0, $.vC)(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), (0, $.vC)("r", n, {
              enabled: e,
              preventDefault: !0
            }), (0, $.vC)("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const a = (0, Z.UP)(o, n),
            s = (0, x.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            i = t ? p.DX : "div";
          return (0, u.jsx)($.Hb, {
            children: (0, u.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }), ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, u.jsx)(u.Fragment, {
            children: n
          });
          const a = (0, x.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, u.jsxs)(fr, {
            delayDuration: 0,
            children: [(0, u.jsx)(pr, {
              children: n
            }), (0, u.jsxs)(vr, {
              ...a,
              children: [(0, u.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, u.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, u.jsx)(yr, {})]
            })]
          })
        }),
        vo = (0, f.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, x.v6)(e, {
            isInline: !0
          });
          return (0, u.jsx)(ye, {
            ref: t,
            ...r
          })
        });
      (0, f.forwardRef)(function({
        testId: e,
        asChild: t,
        showTooltip: r = !0,
        children: n,
        ...o
      }, a) {
        const s = (0, de.tz)(),
          {
            zoomRef: i
          } = (0, f.useContext)(lo),
          {
            canZoomIn: d,
            zoomIn: c,
            canZoomOut: v,
            zoomOut: y,
            zoomProgress: m,
            minZoomLevel: h,
            maxZoomLevel: b,
            zoomTo: g
          } = (() => {
            const {
              slide: e
            } = (0, f.useContext)(lo), {
              zoomIn: t,
              zoomOut: r,
              zoomTo: n
            } = (0, f.useContext)(uo), [o, a] = (0, f.useState)(!1), [s, i] = (0, f.useState)(!1), [d, l] = (0, f.useState)(0), [u, c] = (0, f.useState)(0), [p, v] = (0, f.useState)(0), y = (0, f.useCallback)(() => {
              a(e.currZoomLevel < e.zoomLevels.max), i(e.currZoomLevel > e.zoomLevels.min), l(Math.ceil(100 * e.currZoomLevel)), c(Math.ceil(100 * e.zoomLevels.min)), v(Math.ceil(100 * e.zoomLevels.max))
            }, []), m = (0, f.useCallback)(([e]) => {
              n(e / 100)
            }, [n]);
            return (0, f.useEffect)(() => (e.addEventListener("zoom", y), () => {
              e.removeEventListener("zoom", y)
            }), [y]), {
              zoomTo: m,
              zoomIn: t,
              zoomOut: r,
              canZoomIn: o,
              canZoomOut: s,
              zoomProgress: d,
              minZoomLevel: u,
              maxZoomLevel: p
            }
          })(),
          w = (0, Z.UP)(i, a),
          C = (0, x.v6)(o, {
            "data-testid": e,
            className: "foundry_1a74xwbp"
          }),
          _ = t ? p.DX : "div";
        return (0, u.jsxs)(_, {
          ref: w,
          ...C,
          children: [(0, u.jsx)(po, {
            side: "left",
            enabled: r,
            content: s.formatMessage(pe.ZoomInButtonLabel),
            metadata: s.formatMessage(pe.ZoomInButtonTooltip, {
              shortcut: (0, u.jsx)(vo, {
                shortcut: "+"
              })
            }),
            children: (0, u.jsx)(l.K, {
              label: s.formatMessage(pe.ZoomInButtonLabel),
              size: "LG",
              icon: "Plus",
              appearance: "tertiary",
              className: se({
                position: "top"
              }),
              onPress: c,
              isDisabled: !d
            })
          }), (0, u.jsxs)(Xr, {
            className: "foundry_1a74xwbt",
            max: b,
            min: h,
            step: 1,
            value: [m],
            orientation: "vertical",
            onValueChange: g,
            children: [(0, u.jsx)(Yr, {
              className: "foundry_1a74xwbu",
              children: (0, u.jsx)($r, {
                className: "foundry_1a74xwbv"
              })
            }), (0, u.jsx)(po, {
              side: "left",
              enabled: r,
              content: s.formatMessage(pe.ZoomSliderTooltip, {
                zoom: m.toFixed(0)
              }),
              children: (0, u.jsx)(on, {
                className: "foundry_1a74xwbw",
                children: (0, u.jsx)("span", {
                  className: "foundry_1a74xwbx"
                })
              })
            })]
          }), (0, u.jsx)(po, {
            side: "left",
            enabled: r,
            content: s.formatMessage(pe.ZoomOutButtonLabel),
            metadata: s.formatMessage(pe.ZoomOutButtonTooltip, {
              shortcut: (0, u.jsx)(vo, {
                shortcut: "-"
              })
            }),
            children: (0, u.jsx)(l.K, {
              label: s.formatMessage(pe.ZoomOutButtonLabel),
              size: "LG",
              icon: "Minus",
              appearance: "tertiary",
              className: se({
                position: "bottom"
              }),
              onPress: y,
              isDisabled: !v
            })
          }), (0, u.jsx)(p.xV, {
            children: n
          })]
        })
      }), (0, f.forwardRef)(function({
        testId: e,
        asChild: t,
        showTooltip: r = !0,
        ...n
      }, o) {
        const a = (0, de.tz)(),
          {
            closeRef: s
          } = (0, f.useContext)(lo),
          i = (0, Z.UP)(s, o),
          d = (0, x.v6)(n, {
            "data-testid": e,
            className: ae({
              styled: !t
            })
          }),
          c = t ? (0, u.jsx)(p.DX, {
            ref: i,
            ...d
          }) : (0, u.jsx)(l.K, {
            ref: i,
            ...d,
            size: "LG",
            icon: "X",
            appearance: "tertiary",
            label: a.formatMessage(pe.CloseButtonLabel)
          });
        return (0, u.jsx)(po, {
          side: "right",
          enabled: r,
          content: a.formatMessage(pe.CloseButtonLabel),
          metadata: a.formatMessage(pe.CloseButtonTooltip, {
            shortcut: (0, u.jsx)(vo, {
              shortcut: "Esc"
            })
          }),
          children: (0, u.jsx)(so, {
            asChild: !0,
            children: c
          })
        })
      }), (0, f.forwardRef)(function({
        testId: e,
        showTooltip: t = !0,
        ...r
      }, n) {
        const o = (0, de.tz)(),
          a = (() => {
            const {
              slide: e,
              resetRef: t
            } = (0, f.useContext)(lo), {
              contextSafe: r
            } = (0, Y.L)(), {
              resetZoom: n
            } = (0, f.useContext)(uo), [o, a] = (0, f.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = r(e => {
              W.gsap.to([t.current], {
                scale: e ? 1 : .5,
                opacity: e ? 1 : 0,
                ...ie
              })
            }), i = (0, f.useCallback)(() => {
              const t = e.currZoomLevel !== e.zoomLevels.initial;
              a(t), s(t)
            }, [a]);
            return (0, f.useEffect)(() => (e.addEventListener("zoom", i), () => {
              e.removeEventListener("zoom", i)
            }), [i]), {
              isDisabled: !o,
              onPress: n,
              "aria-hidden": !o
            }
          })(),
          {
            resetRef: s
          } = (0, f.useContext)(lo),
          i = (0, Z.UP)(s, n),
          d = (0, x.v6)(r, a, {
            "data-testid": e,
            className: "foundry_1a74xwbn foundry_1a74xwbj"
          });
        return (0, u.jsx)(po, {
          side: "left",
          enabled: t,
          content: o.formatMessage(pe.ResetZoomButtonLabel),
          metadata: o.formatMessage(pe.ResetZoomButtonTooltip, {
            shortcut: (0, u.jsx)(vo, {
              shortcut: "R"
            })
          }),
          children: (0, u.jsx)(l.K, {
            ref: i,
            ...d,
            size: "LG",
            icon: "Undo",
            appearance: "tertiary",
            label: o.formatMessage(pe.ResetZoomButtonLabel)
          })
        })
      }), (0, f.forwardRef)(function({
        testId: e,
        showTooltip: t = !0,
        ...r
      }, n) {
        const o = (0, de.tz)(),
          {
            downloadRef: a,
            imageRef: s
          } = (0, f.useContext)(lo),
          i = (0, Z.UP)(a, n),
          d = (0, x.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbo foundry_1a74xwbj"
          });
        return (0, u.jsx)(po, {
          side: "left",
          enabled: t,
          content: o.formatMessage(pe.DownloadButtonTooltip),
          children: (0, u.jsx)(l.K, {
            ref: i,
            ...d,
            size: "LG",
            icon: "Download",
            appearance: "tertiary",
            label: o.formatMessage(pe.DownloadButtonTooltip),
            onPress: () => (async e => {
              if (!e) return;
              const t = e.currentSrc,
                r = t.split("\\").pop()?.split("/").pop() || "";
              fetch(t, {
                headers: {
                  origin: location.origin
                }
              }).then(e => e.blob()).then(e => {
                ((e, t) => {
                  const r = document.createElement("a");
                  r.href = e, r.download = t, document.body.appendChild(r), r.click(), document.body.removeChild(r)
                })(window.URL.createObjectURL(e), r)
              }).catch(e => console.error(e))
            })(s.current)
          })
        })
      });
      var yo = r(63368);

      function mo(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function ho(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function bo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ho(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = mo(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ho(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function go(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var wo = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Co = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = bo(bo({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) wo(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return go(e.variantClassNames, e => go(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_i6k0ds0 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj",
          variantClassNames: {
            status: {
              neutral: "foundry_i6k0ds1",
              success: "foundry_i6k0ds2",
              invalid: "foundry_i6k0ds3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const xo = (0, f.createContext)(null);

      function _o() {
        const e = (0, f.useContext)(xo);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const jo = (0, f.forwardRef)(({
        children: e,
        testId: t,
        asChild: r,
        descriptionId: n = "",
        errorId: o = "",
        status: a = "neutral",
        ...s
      }, i) => {
        const d = (0, x.v6)({
            className: Co({
              status: a
            }),
            "data-testid": t
          }, s),
          l = r ? p.DX : "div";
        return (0, u.jsx)(xo.Provider, {
          value: {
            descriptionId: n,
            errorId: o,
            status: a,
            ...s
          },
          children: (0, u.jsx)(l, {
            ...d,
            ref: i,
            children: e
          })
        })
      });
      (0, f.forwardRef)(({
        testId: e,
        asChild: t,
        ...r
      }, n) => {
        const {
          status: o
        } = _o(), a = (0, x.v6)({
          size: "SM",
          className: "foundry_i6k0ds4",
          "data-testid": e
        }, r), s = {
          success: ce.Jl,
          invalid: ce.X,
          neutral: ce.lW
        }, i = t ? p.DX : s[o];
        return (0, u.jsx)(i, {
          ref: n,
          ...a
        })
      }), (0, f.forwardRef)(({
        children: e,
        testId: t,
        asChild: r,
        ...n
      }, o) => {
        const {
          descriptionId: a,
          errorId: s
        } = _o(), i = (0, x.v6)({
          "data-testid": t,
          id: s || a
        }, n), d = r ? p.DX : "div";
        return (0, u.jsx)(d, {
          ...i,
          ref: o,
          children: e
        })
      });
      var Oo = Object.defineProperty,
        Po = (e, t) => Oo(e, "name", {
          value: t,
          configurable: !0
        });

      function So(e, t) {
        return f.useReducer((e, r) => t[e][r] ?? e, e)
      }
      Po(So, "useStateMachine");
      var Do = "ScrollArea",
        [Ro, No] = (0, we.A)(Do),
        [Eo, ko] = Ro(Do),
        Io = f.forwardRef(Po(function(e, t) {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: a = 600,
            ...s
          } = e, [i, d] = f.useState(null), [l, c] = f.useState(null), [p, v] = f.useState(null), [y, m] = f.useState(null), [h, b] = f.useState(null), [g, w] = f.useState(0), [C, x] = f.useState(0), [_, j] = f.useState(!1), [O, P] = f.useState(!1), S = (0, ge.s)(t, d), D = (0, hr.jH)(o);
          return (0, u.jsx)(Eo, {
            scope: r,
            type: n,
            dir: D,
            scrollHideDelay: a,
            scrollArea: i,
            viewport: l,
            onViewportChange: c,
            content: p,
            onContentChange: v,
            scrollbarX: y,
            onScrollbarXChange: m,
            scrollbarXEnabled: _,
            onScrollbarXEnabledChange: j,
            scrollbarY: h,
            onScrollbarYChange: b,
            scrollbarYEnabled: O,
            onScrollbarYEnabledChange: P,
            onCornerWidthChange: w,
            onCornerHeightChange: x,
            children: (0, u.jsx)(Ce.sG.div, {
              dir: D,
              ...s,
              ref: S,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": g + "px",
                "--radix-scroll-area-corner-height": C + "px",
                ...e.style
              }
            })
          })
        }, "ScrollArea")),
        To = f.forwardRef(Po(function(e, t) {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...a
          } = e, s = ko("ScrollAreaViewport", r), i = f.useRef(null), d = (0, ge.s)(t, i, s.onViewportChange);
          return (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(Vo, {
              nonce: o
            }), (0, u.jsx)(Ce.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...a,
              ref: d,
              style: {
                overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, u.jsx)("div", {
                ref: s.onContentChange,
                style: {
                  minWidth: "100%",
                  display: "table"
                },
                children: n
              })
            })]
          })
        }, "ScrollAreaViewport")),
        Vo = f.memo(Po(function({
          nonce: e
        }) {
          return (0, u.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: e
          })
        }, "ScrollAreaViewportStyle"), (e, t) => e.nonce === t.nonce),
        zo = "ScrollAreaScrollbar",
        Lo = f.forwardRef(Po(function(e, t) {
          const {
            forceMount: r,
            ...n
          } = e, o = ko(zo, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: s
          } = o, i = "horizontal" === e.orientation;
          return f.useEffect(() => (i ? a(!0) : s(!0), () => {
            i ? a(!1) : s(!1)
          }), [i, a, s]), "hover" === o.type ? (0, u.jsx)(Ao, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, u.jsx)(Mo, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, u.jsx)(Fo, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, u.jsx)(Ho, {
            ...n,
            ref: t,
            "data-state": "visible"
          }) : null
        }, "ScrollAreaScrollbar")),
        Ao = f.forwardRef(Po(function(e, t) {
          const {
            forceMount: r,
            ...n
          } = e, o = ko(zo, e.__scopeScrollArea), [a, s] = f.useState(!1);
          return f.useEffect(() => {
            const e = o.scrollArea;
            let t = 0;
            if (e) {
              const r = Po(() => {
                  window.clearTimeout(t), s(!0)
                }, "handlePointerEnter"),
                n = Po(() => {
                  t = window.setTimeout(() => s(!1), o.scrollHideDelay)
                }, "handlePointerLeave");
              return e.addEventListener("pointerenter", r), e.addEventListener("pointerleave", n), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", r), e.removeEventListener("pointerleave", n)
              }
            }
          }, [o.scrollArea, o.scrollHideDelay]), (0, u.jsx)(Ct, {
            present: r || a,
            children: (0, u.jsx)(Fo, {
              "data-state": a ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }, "ScrollAreaScrollbarHover")),
        Mo = f.forwardRef(Po(function(e, t) {
          const {
            forceMount: r,
            ...n
          } = e, o = ko(zo, e.__scopeScrollArea), a = "horizontal" === e.orientation, s = ia(() => d("SCROLL_END"), 100), [i, d] = So("hidden", {
            hidden: {
              SCROLL: "scrolling"
            },
            scrolling: {
              SCROLL_END: "idle",
              POINTER_ENTER: "interacting"
            },
            interacting: {
              SCROLL: "interacting",
              POINTER_LEAVE: "idle"
            },
            idle: {
              HIDE: "hidden",
              SCROLL: "scrolling",
              POINTER_ENTER: "interacting"
            }
          });
          return f.useEffect(() => {
            if ("idle" === i) {
              const e = window.setTimeout(() => d("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [i, o.scrollHideDelay, d]), f.useEffect(() => {
            const e = o.viewport,
              t = a ? "scrollLeft" : "scrollTop";
            if (e) {
              let r = e[t];
              const n = Po(() => {
                const n = e[t];
                r !== n && (d("SCROLL"), s()), r = n
              }, "handleScroll");
              return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }
          }, [o.viewport, a, d, s]), (0, u.jsx)(Ct, {
            present: r || "hidden" !== i,
            children: (0, u.jsx)(Ho, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, be.mK)(e.onPointerEnter, () => d("POINTER_ENTER")),
              onPointerLeave: (0, be.mK)(e.onPointerLeave, () => d("POINTER_LEAVE"))
            })
          })
        }, "ScrollAreaScrollbarScroll")),
        Fo = f.forwardRef(Po(function(e, t) {
          const r = ko(zo, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [a, s] = f.useState(!1),
            i = "horizontal" === e.orientation,
            d = ia(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                s(i ? e : t)
              }
            }, 10);
          return da(r.viewport, d), da(r.content, d), (0, u.jsx)(Ct, {
            present: n || a,
            children: (0, u.jsx)(Ho, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }, "ScrollAreaScrollbarAuto")),
        Ho = f.forwardRef(Po(function(e, t) {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = ko(zo, e.__scopeScrollArea), a = f.useRef(null), s = f.useRef(0), [i, d] = f.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), l = ea(i.viewport, i.content), c = {
            ...n,
            sizes: i,
            onSizesChange: d,
            hasThumb: Boolean(l > 0 && l < 1),
            onThumbChange: Po(e => a.current = e, "onThumbChange"),
            onThumbPointerUp: Po(() => s.current = 0, "onThumbPointerUp"),
            onThumbPointerDown: Po(e => s.current = e, "onThumbPointerDown")
          };

          function p(e, t) {
            return ra(e, s.current, i, t)
          }
          return Po(p, "getScrollPosition"), "horizontal" === r ? (0, u.jsx)(qo, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = na(o.viewport.scrollLeft, i, o.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = p(e, o.dir))
            }
          }) : "vertical" === r ? (0, u.jsx)(Bo, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = na(o.viewport.scrollTop, i);
                a.current.style.transform = `translate3d(0, ${e}px, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollTop = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollTop = p(e))
            }
          }) : null
        }, "ScrollAreaScrollbarVisible")),
        qo = f.forwardRef(Po(function(e, t) {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = ko(zo, e.__scopeScrollArea), [s, i] = f.useState(), d = f.useRef(null), l = (0, ge.s)(t, d, a.onScrollbarXChange);
          return f.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, u.jsx)(Ko, {
            "data-orientation": "horizontal",
            ...o,
            ref: l,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": ta(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), aa(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && n({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: Jo(s.paddingLeft),
                  paddingEnd: Jo(s.paddingRight)
                }
              })
            }
          })
        }, "ScrollAreaScrollbarX")),
        Bo = f.forwardRef(Po(function(e, t) {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = ko(zo, e.__scopeScrollArea), [s, i] = f.useState(), d = f.useRef(null), l = (0, ge.s)(t, d, a.onScrollbarYChange);
          return f.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, u.jsx)(Ko, {
            "data-orientation": "vertical",
            ...o,
            ref: l,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": ta(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), aa(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && n({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: Jo(s.paddingTop),
                  paddingEnd: Jo(s.paddingBottom)
                }
              })
            }
          })
        }, "ScrollAreaScrollbarY")),
        [Xo, Go] = Ro(zo),
        Ko = f.forwardRef(Po(function(e, t) {
          const {
            __scopeScrollArea: r,
            sizes: n,
            hasThumb: o,
            onThumbChange: a,
            onThumbPointerUp: s,
            onThumbPointerDown: i,
            onThumbPositionChange: d,
            onDragScroll: l,
            onWheelScroll: c,
            onResize: p,
            ...v
          } = e, y = ko(zo, r), [m, h] = f.useState(null), b = (0, ge.s)(t, h), g = f.useRef(null), w = f.useRef(""), C = y.viewport, x = n.content - n.viewport, _ = (0, xe.c)(c), j = (0, xe.c)(d), O = ia(p, 10);

          function P(e) {
            if (g.current) {
              const t = e.clientX - g.current.left,
                r = e.clientY - g.current.top;
              l({
                x: t,
                y: r
              })
            }
          }
          return Po(P, "handleDragScroll"), f.useEffect(() => {
            const e = Po(e => {
              const t = e.target,
                r = m?.contains(t);
              r && _(e, x)
            }, "handleWheel");
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [C, m, x, _]), f.useEffect(j, [n, j]), da(m, O), da(y.content, O), (0, u.jsx)(Xo, {
            scope: r,
            scrollbar: m,
            hasThumb: o,
            onThumbChange: (0, xe.c)(a),
            onThumbPointerUp: (0, xe.c)(s),
            onThumbPositionChange: j,
            onThumbPointerDown: (0, xe.c)(i),
            children: (0, u.jsx)(Ce.sG.div, {
              ...v,
              ref: b,
              style: {
                position: "absolute",
                ...v.style
              },
              onPointerDown: (0, be.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), g.current = m.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", y.viewport && (y.viewport.style.scrollBehavior = "auto"), P(e))
              }),
              onPointerMove: (0, be.mK)(e.onPointerMove, P),
              onPointerUp: (0, be.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = w.current, y.viewport && (y.viewport.style.scrollBehavior = ""), g.current = null
              })
            })
          })
        }, "ScrollAreaScrollbarImpl")),
        Uo = "ScrollAreaThumb",
        Zo = f.forwardRef(Po(function(e, t) {
          const {
            forceMount: r,
            ...n
          } = e, o = Go(Uo, e.__scopeScrollArea);
          return (0, u.jsx)(Ct, {
            present: r || o.hasThumb,
            children: (0, u.jsx)(Wo, {
              ref: t,
              ...n
            })
          })
        }, "ScrollAreaThumb")),
        Wo = f.forwardRef(Po(function(e, t) {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, a = ko(Uo, r), s = Go(Uo, r), {
            onThumbPositionChange: i
          } = s, d = (0, ge.s)(t, s.onThumbChange), l = f.useRef(void 0), c = ia(() => {
            l.current && (l.current(), l.current = void 0)
          }, 100);
          return f.useEffect(() => {
            const e = a.viewport;
            if (e) {
              const t = Po(() => {
                if (c(), !l.current) {
                  const t = sa(e, i);
                  l.current = t, i()
                }
              }, "handleScroll");
              return i(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [a.viewport, c, i]), (0, u.jsx)(Ce.sG.div, {
            "data-state": s.hasThumb ? "visible" : "hidden",
            ...o,
            ref: d,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, be.mK)(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              s.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: (0, be.mK)(e.onPointerUp, s.onThumbPointerUp)
          })
        }, "ScrollAreaThumbImpl")),
        Yo = "ScrollAreaCorner",
        Qo = f.forwardRef(Po(function(e, t) {
          const r = ko(Yo, e.__scopeScrollArea),
            n = Boolean(r.scrollbarX && r.scrollbarY);
          return "scroll" !== r.type && n ? (0, u.jsx)($o, {
            ...e,
            ref: t
          }) : null
        }, "ScrollAreaCorner")),
        $o = f.forwardRef(Po(function(e, t) {
          const {
            __scopeScrollArea: r,
            ...n
          } = e, o = ko(Yo, r), [a, s] = f.useState(0), [i, d] = f.useState(0), l = Boolean(a && i), {
            onCornerWidthChange: c,
            onCornerHeightChange: p
          } = o;
          return da(o.scrollbarX, () => {
            const e = o.scrollbarX?.offsetHeight || 0;
            o.onCornerHeightChange(e), d(e)
          }), da(o.scrollbarY, () => {
            const e = o.scrollbarY?.offsetWidth || 0;
            o.onCornerWidthChange(e), s(e)
          }), f.useEffect(() => () => {
            c(0), p(0)
          }, [c, p]), l ? (0, u.jsx)(Ce.sG.div, {
            ...n,
            ref: t,
            style: {
              width: a,
              height: i,
              position: "absolute",
              right: "ltr" === o.dir ? 0 : void 0,
              left: "rtl" === o.dir ? 0 : void 0,
              bottom: 0,
              ...e.style
            }
          }) : null
        }, "ScrollAreaCornerImpl"));

      function Jo(e) {
        return e ? parseInt(e, 10) : 0
      }

      function ea(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function ta(e) {
        const t = ea(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function ra(e, t, r, n = "ltr") {
        const o = ta(r),
          a = t || o / 2,
          s = o - a,
          i = r.scrollbar.paddingStart + a,
          d = r.scrollbar.size - r.scrollbar.paddingEnd - s,
          l = r.content - r.viewport;
        return oa([i, d], "ltr" === n ? [0, l] : [-1 * l, 0])(e)
      }

      function na(e, t, r = "ltr") {
        const n = ta(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          a = t.scrollbar.size - o,
          s = t.content - t.viewport,
          i = a - n,
          d = "ltr" === r ? [0, s] : [-1 * s, 0],
          l = (0, mr.q)(e, d);
        return oa([0, s], [0, i])(l)
      }

      function oa(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function aa(e, t) {
        return e > 0 && e < t
      }
      Po(Jo, "toInt"), Po(ea, "getThumbRatio"), Po(ta, "getThumbSize"), Po(ra, "getScrollPositionFromPointer"), Po(na, "getThumbOffsetFromScroll"), Po(oa, "linearScale"), Po(aa, "isScrollingWithinScrollbarBounds");
      var sa = Po((e, t = () => {}) => {
        let r = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          n = 0;
        return Po(function o() {
          const a = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            s = r.left !== a.left,
            i = r.top !== a.top;
          (s || i) && t(), r = a, n = window.requestAnimationFrame(o)
        }, "loop")(), () => window.cancelAnimationFrame(n)
      }, "addUnlinkedScrollListener");

      function ia(e, t) {
        const r = (0, xe.c)(e),
          n = f.useRef(0);
        return f.useEffect(() => () => window.clearTimeout(n.current), []), f.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function da(e, t) {
        const r = (0, xe.c)(t);
        (0, Xe.N)(() => {
          let t = 0;
          if (e) {
            const n = new ResizeObserver(() => {
              cancelAnimationFrame(t), t = window.requestAnimationFrame(r)
            });
            return n.observe(e), () => {
              window.cancelAnimationFrame(t), n.unobserve(e)
            }
          }
        }, [e, r])
      }
      Po(ia, "useDebounceCallback"), Po(da, "useResizeObserver");
      var la = Io,
        ua = To,
        ca = Lo,
        fa = Zo,
        pa = Qo,
        va = Object.defineProperty,
        ya = (e, t) => va(e, "name", {
          value: t,
          configurable: !0
        }),
        ma = [" ", "Enter", "ArrowUp", "ArrowDown"],
        ha = [" ", "Enter"],
        ba = "Select",
        [ga, wa, Ca] = Cr(ba),
        [xa, _a] = (0, we.A)(ba, [Ca, Ye]),
        ja = Ye(),
        [Oa, Pa] = xa(ba),
        [Sa, Da] = xa(ba);

      function Ra(e) {
        const {
          __scopeSelect: t,
          children: r,
          open: n,
          defaultOpen: o,
          onOpenChange: a,
          value: s,
          defaultValue: i,
          onValueChange: d,
          dir: l,
          name: c,
          autoComplete: p,
          disabled: v,
          required: y,
          form: m,
          internal_do_not_use_render: h
        } = e, b = ja(t), [g, w] = f.useState(null), [C, x] = f.useState(null), [_, j] = f.useState(!1), O = (0, hr.jH)(l), [P, S] = (0, Dt.i)({
          prop: n,
          defaultProp: o ?? !1,
          onChange: a,
          caller: ba
        }), [D, R] = (0, Dt.i)({
          prop: s,
          defaultProp: i,
          onChange: d,
          caller: ba
        }), N = f.useRef(null), E = f.useRef(D);
        f.useEffect(() => {
          const e = m ? g?.ownerDocument.getElementById(m) : g?.form;
          if (e instanceof HTMLFormElement) {
            const t = ya(() => R(E.current), "reset");
            return e.addEventListener("reset", t), () => e.removeEventListener("reset", t)
          }
        }, [m, g, R]);
        const k = !g || !!m || !!g.closest("form"),
          [I, T] = f.useState(new Set),
          V = (0, Le.B)(),
          z = Array.from(I).map(e => e.props.value).join(";"),
          L = f.useCallback(e => {
            T(t => new Set(t).add(e))
          }, []),
          A = f.useCallback(e => {
            T(t => {
              const r = new Set(t);
              return r.delete(e), r
            })
          }, []),
          M = {
            required: y,
            trigger: g,
            onTriggerChange: w,
            valueNode: C,
            onValueNodeChange: x,
            valueNodeHasChildren: _,
            onValueNodeHasChildrenChange: j,
            contentId: V,
            value: D,
            onValueChange: R,
            open: P,
            onOpenChange: S,
            dir: O,
            triggerPointerDownPosRef: N,
            disabled: v,
            name: c,
            autoComplete: p,
            form: m,
            nativeOptions: I,
            nativeSelectKey: z,
            isFormControl: k
          };
        return (0, u.jsx)(ut, {
          ...b,
          children: (0, u.jsx)(Oa, {
            scope: t,
            ...M,
            children: (0, u.jsx)(ga.Provider, {
              scope: t,
              children: (0, u.jsx)(Sa, {
                scope: t,
                onNativeOptionAdd: L,
                onNativeOptionRemove: A,
                children: ss(h) ? h(M) : r
              })
            })
          })
        })
      }
      ya(Ra, "SelectProvider");
      var Na = ya(e => {
          const {
            __scopeSelect: t,
            children: r,
            ...n
          } = e;
          return (0, u.jsx)(Ra, {
            __scopeSelect: t,
            ...n,
            internal_do_not_use_render: ({
              isFormControl: e
            }) => (0, u.jsxs)(u.Fragment, {
              children: [r, e ? (0, u.jsx)(as, {
                __scopeSelect: t
              }) : null]
            })
          })
        }, "Select"),
        Ea = f.forwardRef(ya(function(e, t) {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, a = ja(r), s = Pa("SelectTrigger", r), i = s.disabled || n, d = (0, ge.s)(t, s.onTriggerChange), l = wa(r), c = f.useRef("touch"), [p, v, y] = ds(e => {
            const t = l().filter(e => !e.disabled),
              r = t.find(e => e.value === s.value),
              n = ls(t, e, r);
            void 0 !== n && s.onValueChange(n.value)
          }), m = ya(e => {
            i || (s.onOpenChange(!0), y()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          }, "handleOpen");
          return (0, u.jsx)(ct, {
            asChild: !0,
            ...a,
            children: (0, u.jsx)(Ce.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": s.open ? s.contentId : void 0,
              "aria-expanded": s.open,
              "aria-required": s.required,
              "aria-autocomplete": "none",
              dir: s.dir,
              "data-state": s.open ? "open" : "closed",
              disabled: i,
              "data-disabled": i ? "" : void 0,
              "data-placeholder": is(s.value) ? "" : void 0,
              ...o,
              ref: d,
              onClick: (0, be.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && m(e)
              }),
              onPointerDown: (0, be.mK)(o.onPointerDown, e => {
                c.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (m(e), e.preventDefault())
              }),
              onKeyDown: (0, be.mK)(o.onKeyDown, e => {
                const t = "" !== p.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || v(e.key), t && " " === e.key || ma.includes(e.key) && (m(), e.preventDefault())
              })
            })
          })
        }, "SelectTrigger")),
        ka = f.forwardRef(ya(function(e, t) {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: a,
            placeholder: s = "",
            ...i
          } = e, d = Pa("SelectValue", r), {
            onValueNodeHasChildrenChange: l
          } = d, c = void 0 !== a, p = (0, ge.s)(t, d.onValueNodeChange);
          (0, Xe.N)(() => {
            l(c)
          }, [l, c]);
          const v = is(d.value);
          return (0, u.jsx)(Ce.sG.span, {
            ...i,
            asChild: !v && i.asChild,
            ref: p,
            style: {
              pointerEvents: "none"
            },
            children: (0, u.jsx)(f.Fragment, {
              children: v ? s : a
            }, v ? "placeholder" : "value")
          })
        }, "SelectValue")),
        Ia = f.forwardRef(ya(function(e, t) {
          const {
            __scopeSelect: r,
            children: n,
            ...o
          } = e;
          return (0, u.jsx)(Ce.sG.span, {
            "aria-hidden": !0,
            ...o,
            ref: t,
            children: n || "▼"
          })
        }, "SelectIcon")),
        [Ta, Va] = xa("SelectPortal", {
          forceMount: void 0
        }),
        za = ya(e => {
          const {
            __scopeSelect: t,
            forceMount: r,
            ...n
          } = e;
          return (0, u.jsx)(Ta, {
            scope: e.__scopeSelect,
            forceMount: r,
            children: (0, u.jsx)(ht, {
              asChild: !0,
              ...n
            })
          })
        }, "SelectPortal"),
        La = "SelectContent",
        Aa = f.forwardRef(ya(function(e, t) {
          const r = Va(La, e.__scopeSelect),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = Pa(La, e.__scopeSelect),
            [s, i] = f.useState();
          return (0, Xe.N)(() => {
            i(new DocumentFragment)
          }, []), (0, u.jsx)(Ct, {
            present: n || a.open,
            children: ({
              present: e
            }) => e ? (0, u.jsx)(Xa, {
              ...o,
              ref: t
            }) : (0, u.jsx)(Ma, {
              ...o,
              fragment: s
            })
          })
        }, "SelectContent")),
        Ma = f.forwardRef(ya(function(e, t) {
          const {
            __scopeSelect: r,
            children: n,
            fragment: o
          } = e;
          return o ? vt.createPortal((0, u.jsx)(Ha, {
            scope: r,
            children: (0, u.jsx)(ga.Slot, {
              scope: r,
              children: (0, u.jsx)("div", {
                ref: t,
                children: n
              })
            })
          }), o) : null
        }, "SelectContentFragment")),
        Fa = 10,
        [Ha, qa] = xa(La),
        Ba = (0, St.TL)("SelectContent.RemoveScroll"),
        Xa = f.forwardRef(ya(function(e, t) {
          const {
            __scopeSelect: r
          } = e, {
            position: n = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            side: i,
            sideOffset: d,
            align: l,
            alignOffset: c,
            arrowPadding: p,
            collisionBoundary: v,
            collisionPadding: y,
            sticky: m,
            hideWhenDetached: h,
            avoidCollisions: b,
            ...g
          } = e, w = Pa(La, r), [C, x] = f.useState(null), [_, j] = f.useState(null), O = (0, ge.s)(t, x), [P, S] = f.useState(null), [D, R] = f.useState(null), N = wa(r), [E, k] = f.useState(!1), I = f.useRef(!1);
          f.useEffect(() => {
            if (C) return (0, An.Eq)(C)
          }, [C]), (0, zn.Oh)();
          const T = f.useCallback(e => {
              const [t, ...r] = N().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && _ && (_.scrollTop = 0), r === n && _ && (_.scrollTop = _.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [N, _]),
            V = f.useCallback(() => T([P, C]), [T, P, C]);
          f.useEffect(() => {
            E && V()
          }, [E, V]);
          const {
            onOpenChange: z,
            triggerPointerDownPosRef: L
          } = w;
          f.useEffect(() => {
            if (C) {
              let e = {
                x: 0,
                y: 0
              };
              const t = ya(t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (L.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (L.current?.y ?? 0))
                  }
                }, "handlePointerMove"),
                r = ya(r => {
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : r.composedPath().includes(C) || z(!1), document.removeEventListener("pointermove", t), L.current = null
                }, "handlePointerUp");
              return null !== L.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", r, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", r, {
                  capture: !0
                })
              }
            }
          }, [C, z, L]), f.useEffect(() => {
            const e = ya(() => z(!1), "close");
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [z]);
          const [A, M] = ds(e => {
            const t = N().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = ls(t, e, r);
            n && setTimeout(() => n.ref.current?.focus())
          }), F = f.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== w.value && w.value === t || n) && (S(e), n && (I.current = !0))
          }, [w.value]), H = f.useCallback(() => C?.focus(), [C]), q = f.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== w.value && w.value === t || n) && R(e)
          }, [w.value]), B = "popper" === n ? Ka : Ga, X = B === Ka ? {
            side: i,
            sideOffset: d,
            align: l,
            alignOffset: c,
            arrowPadding: p,
            collisionBoundary: v,
            collisionPadding: y,
            sticky: m,
            hideWhenDetached: h,
            avoidCollisions: b
          } : {};
          return (0, u.jsx)(Ha, {
            scope: r,
            content: C,
            viewport: _,
            onViewportChange: j,
            itemRefCallback: F,
            selectedItem: P,
            onItemLeave: H,
            itemTextRefCallback: q,
            focusSelectedItem: V,
            selectedItemText: D,
            position: n,
            isPositioned: E,
            searchRef: A,
            children: (0, u.jsx)(Ln.A, {
              as: Ba,
              allowPinchZoom: !0,
              children: (0, u.jsx)(jn, {
                asChild: !0,
                trapped: w.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, be.mK)(o, e => {
                  w.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, u.jsx)(Se, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: s,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => w.onOpenChange(!1),
                  children: (0, u.jsx)(B, {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...g,
                    ...X,
                    onPlaced: () => k(!0),
                    ref: O,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...g.style
                    },
                    onKeyDown: (0, be.mK)(g.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || M(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = N().filter(e => !e.disabled);
                        let r = t.map(e => e.ref.current);
                        if (["ArrowUp", "End"].includes(e.key) && (r = r.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            n = r.indexOf(t);
                          r = r.slice(n + 1)
                        }
                        setTimeout(() => T(r)), e.preventDefault()
                      }
                    })
                  })
                })
              })
            })
          })
        }, "SelectContentImpl")),
        Ga = f.forwardRef(ya(function(e, t) {
          const {
            __scopeSelect: r,
            onPlaced: n,
            ...o
          } = e, a = Pa(La, r), s = qa(La, r), [i, d] = f.useState(null), [l, c] = f.useState(null), p = (0, ge.s)(t, c), v = wa(r), y = f.useRef(!1), m = f.useRef(!0), {
            viewport: h,
            selectedItem: b,
            selectedItemText: g,
            focusSelectedItem: w
          } = s, C = f.useCallback(() => {
            if (a.trigger && a.valueNode && i && l && h && b && g) {
              const e = a.trigger.getBoundingClientRect(),
                t = l.getBoundingClientRect(),
                r = a.valueNode.getBoundingClientRect(),
                o = g.getBoundingClientRect();
              if ("rtl" !== a.dir) {
                const n = o.left - t.left,
                  a = r.left - n,
                  s = e.left - a,
                  d = e.width + s,
                  l = Math.max(d, t.width),
                  u = window.innerWidth - Fa,
                  c = (0, mr.q)(a, [Fa, Math.max(Fa, u - l)]);
                i.style.minWidth = d + "px", i.style.left = c + "px"
              } else {
                const n = t.right - o.right,
                  a = window.innerWidth - r.right - n,
                  s = window.innerWidth - e.right - a,
                  d = e.width + s,
                  l = Math.max(d, t.width),
                  u = window.innerWidth - Fa,
                  c = (0, mr.q)(a, [Fa, Math.max(Fa, u - l)]);
                i.style.minWidth = d + "px", i.style.right = c + "px"
              }
              const s = v(),
                d = window.innerHeight - 2 * Fa,
                u = h.scrollHeight,
                c = window.getComputedStyle(l),
                f = parseInt(c.borderTopWidth, 10),
                p = parseInt(c.paddingTop, 10),
                m = parseInt(c.borderBottomWidth, 10),
                w = f + p + u + parseInt(c.paddingBottom, 10) + m,
                C = Math.min(5 * b.offsetHeight, w),
                x = window.getComputedStyle(h),
                _ = parseInt(x.paddingTop, 10),
                j = parseInt(x.paddingBottom, 10),
                O = e.top + e.height / 2 - Fa,
                P = d - O,
                S = b.offsetHeight / 2,
                D = f + p + (b.offsetTop + S),
                R = w - D;
              if (D <= O) {
                const e = s.length > 0 && b === s[s.length - 1].ref.current;
                i.style.bottom = "0px";
                const t = l.clientHeight - h.offsetTop - h.offsetHeight,
                  r = D + Math.max(P, S + (e ? j : 0) + t + m);
                i.style.height = r + "px"
              } else {
                const e = s.length > 0 && b === s[0].ref.current;
                i.style.top = "0px";
                const t = Math.max(O, f + h.offsetTop + (e ? _ : 0) + S) + R;
                i.style.height = t + "px", h.scrollTop = D - O + h.offsetTop
              }
              i.style.margin = `${Fa}px 0`, i.style.minHeight = C + "px", i.style.maxHeight = d + "px", n?.(), requestAnimationFrame(() => y.current = !0)
            }
          }, [v, a.trigger, a.valueNode, i, l, h, b, g, a.dir, n]);
          (0, Xe.N)(() => C(), [C]);
          const [x, _] = f.useState();
          (0, Xe.N)(() => {
            l && _(window.getComputedStyle(l).zIndex)
          }, [l]);
          const j = f.useCallback(e => {
            e && !0 === m.current && (C(), w?.(), m.current = !1)
          }, [C, w]);
          return (0, u.jsx)(Ua, {
            scope: r,
            contentWrapper: i,
            shouldExpandOnScrollRef: y,
            onScrollButtonChange: j,
            children: (0, u.jsx)("div", {
              ref: d,
              style: {
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                zIndex: x
              },
              children: (0, u.jsx)(Ce.sG.div, {
                ...o,
                ref: p,
                style: {
                  boxSizing: "border-box",
                  maxHeight: "100%",
                  ...o.style
                }
              })
            })
          })
        }, "SelectItemAlignedPosition")),
        Ka = f.forwardRef(ya(function(e, t) {
          const {
            __scopeSelect: r,
            align: n = "start",
            collisionPadding: o = Fa,
            ...a
          } = e, s = ja(r);
          return (0, u.jsx)(ft, {
            ...s,
            ...a,
            ref: t,
            align: n,
            collisionPadding: o,
            style: {
              boxSizing: "border-box",
              ...a.style,
              "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-select-content-available-width": "var(--radix-popper-available-width)",
              "--radix-select-content-available-height": "var(--radix-popper-available-height)",
              "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
            }
          })
        }, "SelectPopperPosition")),
        [Ua, Za] = xa(La, {}),
        Wa = "SelectViewport",
        Ya = f.forwardRef(ya(function(e, t) {
          const {
            __scopeSelect: r,
            nonce: n,
            ...o
          } = e, a = qa(Wa, r), s = Za(Wa, r), i = (0, ge.s)(t, a.onViewportChange), d = f.useRef(0);
          return (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: n
            }), (0, u.jsx)(ga.Slot, {
              scope: r,
              children: (0, u.jsx)(Ce.sG.div, {
                "data-radix-select-viewport": "",
                role: "presentation",
                ...o,
                ref: i,
                style: {
                  position: "relative",
                  flex: 1,
                  overflow: "hidden auto",
                  ...o.style
                },
                onScroll: (0, be.mK)(o.onScroll, e => {
                  const t = e.currentTarget,
                    {
                      contentWrapper: r,
                      shouldExpandOnScrollRef: n
                    } = s;
                  if (n?.current && r) {
                    const e = Math.abs(d.current - t.scrollTop);
                    if (e > 0) {
                      const n = window.innerHeight - 2 * Fa,
                        o = parseFloat(r.style.minHeight),
                        a = parseFloat(r.style.height),
                        s = Math.max(o, a);
                      if (s < n) {
                        const o = s + e,
                          a = Math.min(n, o),
                          i = o - a;
                        r.style.height = a + "px", "0px" === r.style.bottom && (t.scrollTop = i > 0 ? i : 0, r.style.justifyContent = "flex-end")
                      }
                    }
                  }
                  d.current = t.scrollTop
                })
              })
            })]
          })
        }, "SelectViewport")),
        [Qa, $a] = xa("SelectGroup"),
        Ja = "SelectItem",
        [es, ts] = xa(Ja),
        rs = f.forwardRef(ya(function(e, t) {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: a,
            ...s
          } = e, i = Pa(Ja, r), d = qa(Ja, r), l = i.value === n, [c, p] = f.useState(a ?? ""), [v, y] = f.useState(!1), m = (0, xe.c)(e => d.itemRefCallback?.(e, n, o)), h = (0, ge.s)(t, m), b = (0, Le.B)(), g = f.useRef("touch"), w = ya(() => {
            o || (i.onValueChange(n), i.onOpenChange(!1))
          }, "handleSelect");
          return (0, u.jsx)(es, {
            scope: r,
            value: n,
            disabled: o,
            textId: b,
            isSelected: l,
            onItemTextChange: f.useCallback(e => {
              p(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, u.jsx)(ga.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: c,
              children: (0, u.jsx)(Ce.sG.div, {
                role: "option",
                "aria-labelledby": b,
                "data-highlighted": v ? "" : void 0,
                "aria-selected": l && v,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: h,
                onFocus: (0, be.mK)(s.onFocus, () => y(!0)),
                onBlur: (0, be.mK)(s.onBlur, () => y(!1)),
                onClick: (0, be.mK)(s.onClick, () => {
                  "mouse" !== g.current && w()
                }),
                onPointerUp: (0, be.mK)(s.onPointerUp, () => {
                  "mouse" === g.current && w()
                }),
                onPointerDown: (0, be.mK)(s.onPointerDown, e => {
                  g.current = e.pointerType
                }),
                onPointerMove: (0, be.mK)(s.onPointerMove, e => {
                  g.current = e.pointerType, o ? d.onItemLeave?.() : "mouse" === g.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, be.mK)(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                }),
                onKeyDown: (0, be.mK)(s.onKeyDown, e => {
                  o || e.target !== e.currentTarget || "" !== d.searchRef?.current && " " === e.key || (ha.includes(e.key) && w(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        }, "SelectItem")),
        ns = "SelectItemText",
        os = f.forwardRef(ya(function(e, t) {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...a
          } = e, s = Pa(ns, r), i = qa(ns, r), d = ts(ns, r), l = Da(ns, r), [c, p] = f.useState(null), v = (0, xe.c)(e => i.itemTextRefCallback?.(e, d.value, d.disabled)), y = (0, ge.s)(t, p, d.onItemTextChange, v), m = c?.textContent, h = f.useMemo(() => (0, u.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: m
          }, d.value), [d.disabled, d.value, m]), {
            onNativeOptionAdd: b,
            onNativeOptionRemove: g
          } = l;
          return (0, Xe.N)(() => (b(h), () => g(h)), [b, g, h]), (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(Ce.sG.span, {
              id: d.textId,
              ...a,
              ref: y
            }), d.isSelected && s.valueNode && !s.valueNodeHasChildren && !is(s.value) ? vt.createPortal(a.children, s.valueNode) : null]
          })
        }, "SelectItemText")),
        as = f.forwardRef(ya(function({
          __scopeSelect: e,
          ...t
        }, r) {
          const n = Pa("SelectBubbleInput", e),
            {
              value: o,
              onValueChange: a,
              required: s,
              disabled: i,
              name: d,
              autoComplete: l,
              form: c
            } = n,
            {
              nativeOptions: p,
              nativeSelectKey: v
            } = n,
            y = f.useRef(null),
            m = (0, ge.s)(r, y),
            h = o ?? "",
            b = (0, br.Z)(h),
            g = Array.from(p).some(e => "" === (e.props.value ?? ""));
          return f.useEffect(() => {
            const e = y.current;
            if (!e) return;
            const t = window.HTMLSelectElement.prototype,
              r = Object.getOwnPropertyDescriptor(t, "value").set;
            if (b !== h && r) {
              const t = new Event("change", {
                bubbles: !0
              });
              r.call(e, h), e.dispatchEvent(t)
            }
          }, [b, h]), (0, u.jsxs)(Ce.sG.select, {
            "aria-hidden": !0,
            required: s,
            tabIndex: -1,
            name: d,
            autoComplete: l,
            disabled: i,
            form: c,
            onChange: e => a(e.target.value),
            ...t,
            style: {
              ...Rt.Qg,
              ...t.style
            },
            ref: m,
            defaultValue: h,
            children: [is(o) && !g ? (0, u.jsx)("option", {
              value: ""
            }) : null, Array.from(p)]
          }, v)
        }, "SelectBubbleInput"));

      function ss(e) {
        return "function" == typeof e
      }

      function is(e) {
        return "" === e || void 0 === e
      }

      function ds(e) {
        const t = (0, xe.c)(e),
          r = f.useRef(""),
          n = f.useRef(0),
          o = f.useCallback(e => {
            const o = r.current + e;
            t(o), ya(function e(t) {
              r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
            }, "updateSearch")(o)
          }, [t]),
          a = f.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return f.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, a]
      }

      function ls(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let a = us(e, Math.max(o, 0));
        1 === n.length && (a = a.filter(e => e !== r));
        const s = a.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return s !== r ? s : void 0
      }

      function us(e, t) {
        return e.map((r, n) => e[(t + n) % e.length])
      }

      function cs(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function fs(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ps(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? fs(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = cs(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fs(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function vs(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      ya(ss, "isFunction"), ya(is, "shouldShowPlaceholder"), ya(ds, "useTypeaheadSearch"), ya(ls, "findNextItem"), ya(us, "wrapArray");
      var ys = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ms = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ps(ps({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) ys(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vs(e.variantClassNames, e => vs(e, e => e.split(" ")[0]))
            }
          }, t
        },
        hs = ms({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        bs = ms({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        gs = ms({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ws = ms({
          defaultClassName: "foundry_uaq1gw1 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw2"
            },
            showAsterisk: {
              true: "foundry_uaq1gw3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Cs = ms({
          defaultClassName: "foundry_uaq1gw6 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
          variantClassNames: {
            size: {
              MD: "foundry_uaq1gw7",
              LG: "foundry_uaq1gw8"
            },
            isPressed: {
              true: "foundry_uaq1gw9",
              false: "foundry_uaq1gwa"
            },
            isReadOnly: {
              true: "foundry_uaq1gwb"
            },
            isInvalid: {
              true: "foundry_uaq1gwc"
            },
            isDisabled: {
              true: "foundry_uaq1gwd",
              false: "foundry_uaq1gwe"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isDisabled: !0,
              isInvalid: !0
            }, "foundry_uaq1gwf"],
            [{
              isReadOnly: !0,
              isInvalid: !0
            }, "foundry_uaq1gwg"]
          ]
        }),
        xs = ms({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const _s = (0, f.createContext)(null);

      function js() {
        const e = (0, f.useContext)(_s);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const Os = (0, f.forwardRef)(({
          children: e,
          testId: t,
          isRequired: r,
          isDisabled: n,
          isReadOnly: o,
          defaultValue: a,
          onValueChange: s,
          name: i,
          value: d,
          defaultOpen: l,
          onOpenChange: c,
          isOpen: p,
          size: v = "MD",
          status: y = "neutral",
          ...m
        }, h) => {
          const b = (0, f.useRef)(null),
            g = (0, Z.UP)(b, h),
            w = (0, f.useId)(),
            C = (0, f.useId)(),
            _ = (0, f.useId)(),
            j = (0, f.useId)(),
            O = (0, f.useId)(),
            P = (0, f.useId)(),
            S = (0, f.useRef)(null),
            D = (0, f.useRef)(null),
            R = (0, f.useRef)(null),
            [N = !1, E] = (0, Z.ic)({
              prop: p,
              defaultProp: l,
              onChange: c
            }),
            k = (0, x.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, m);
          return (0, u.jsx)(_s.Provider, {
            value: {
              labelId: w,
              errorId: C,
              descriptionId: _,
              triggerId: P,
              hintId: j,
              popoverId: O,
              labelRef: S,
              descriptionRef: D,
              hintRef: R,
              defaultValue: a,
              onValueChange: s,
              value: d,
              isOpen: N,
              setIsOpen: E,
              defaultOpen: l,
              onOpenChange: c,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: y,
              size: v
            },
            children: (0, u.jsx)(Na, {
              required: r,
              disabled: n,
              open: N,
              onOpenChange: () => E(!o && !N),
              value: d,
              defaultValue: a,
              onValueChange: s,
              name: i,
              children: (0, u.jsx)("div", {
                ref: g,
                ...k,
                children: e
              })
            })
          })
        }),
        Ps = (0, f.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: a
          } = js(), s = (0, x.v6)({
            id: a,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: hs({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, u.jsx)(Aa, {
            ...s,
            ref: o,
            children: (0, u.jsx)(Ya, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        Ss = (0, f.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, x.v6)({
            "data-testid": e
          }, t);
          return (0, u.jsx)(Ya, {
            ref: r,
            ...n
          })
        }),
        Ds = (0, f.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, x.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, u.jsxs)(la, {
            ...o,
            ref: n,
            children: [(0, u.jsx)(Ss, {
              asChild: !0,
              children: (0, u.jsx)(ua, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, u.jsx)(ca, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, u.jsx)(fa, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        Rs = (0, f.forwardRef)(({
          children: e,
          testId: t,
          "aria-labelledby": r,
          "aria-describedby": n,
          asChild: o,
          ...a
        }, s) => {
          const {
            isReadOnly: i,
            status: d,
            isDisabled: l,
            labelId: c,
            hintId: v,
            triggerId: y,
            popoverId: m,
            descriptionId: h,
            labelRef: b,
            descriptionRef: g,
            hintRef: w,
            isOpen: C,
            size: _
          } = js(), {
            isPressed: j,
            pressProps: O
          } = (0, yo.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), [P, S] = (0, f.useState)(!1), [D, R] = (0, f.useState)(!1);
          (0, f.useEffect)(() => {
            S(!!b.current || !!w.current), R(!!g.current)
          }, []);
          const N = (0, x.v6)({
              id: y,
              className: Cs({
                size: _,
                isReadOnly: !!i,
                isInvalid: "invalid" === d,
                isPressed: !!j,
                isDisabled: !!l
              }),
              "aria-labelledby": P ? (0, x.VW)(r, c, v) : r,
              "aria-describedby": D ? (0, x.VW)(n, h) : n,
              "aria-controls": m,
              "aria-invalid": "invalid" === d,
              "data-state": C ? "open" : "closed",
              "data-testid": t,
              "data-pressed": !!j
            }, (0, x.cJ)(O, "onKeyDown"), a),
            E = o ? p.DX : Ea;
          return (0, u.jsx)(E, {
            ...N,
            ref: s,
            children: e
          })
        }),
        Ns = (0, f.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, x.v6)({
              className: "foundry_uaq1gwh",
              "data-testid": r
            }, n),
            s = t ? p.DX : "span";
          return (0, u.jsx)(s, {
            ...a,
            ref: o,
            children: (0, u.jsx)(ka, {
              placeholder: e
            })
          })
        }),
        Es = (0, f.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: a,
            isOpen: s
          } = js(), i = s ? ce.rX : ce.yQ, d = (0, x.v6)({
            asChild: !0,
            className: xs({
              isDisabled: a || o
            }),
            "data-testid": t
          }, r);
          return (0, u.jsx)(Ia, {
            ...d,
            ref: n,
            children: e || (0, u.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        ks = (0, f.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...a
        }, s) => {
          const {
            isRequired: i,
            isDisabled: d,
            labelId: l,
            labelRef: c,
            triggerId: f
          } = js(), v = i && !o, y = (0, Z.UP)(c, s), m = (0, x.v6)({
            id: a.id || l,
            htmlFor: f,
            "data-testid": e,
            className: ws({
              showAsterisk: v,
              isDisabled: d
            })
          }, a), h = t ? p.DX : "label";
          return (0, u.jsx)(p.s6, {
            enabled: n,
            children: (0, u.jsx)(h, {
              ...m,
              ref: y,
              children: r
            })
          })
        }),
        Is = ((0, f.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s,
            descriptionRef: i
          } = js(), d = (0, Z.UP)(i, o), l = (0, x.v6)({
            className: bs({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), c = r ? p.DX : "div";
          return (0, u.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }), (0, f.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: a,
            hintRef: s,
            isDisabled: i
          } = js(), d = (0, Z.UP)(s, o), l = (0, x.v6)({
            className: gs({
              isDisabled: i
            }),
            "data-testid": r,
            id: a
          }, n), c = t ? p.DX : "div";
          return (0, u.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }), (0, f.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, f.useRef)(null),
            i = (0, Z.UP)(s, a),
            d = (0, x.v6)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, u.jsx)(rs, {
            ref: i,
            ...d,
            children: e
          })
        })),
        Ts = (0, f.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, x.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, u.jsx)(os, {
            ref: n,
            asChild: !0,
            children: (0, u.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        Vs = ((0, f.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, x.v6)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, u.jsx)(Ia, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }), za);
      (0, f.forwardRef)(({
        children: e,
        testId: t,
        asChild: r,
        ...n
      }, o) => {
        const {
          descriptionId: a,
          status: s
        } = js(), i = (0, x.v6)({
          className: "foundry_uaq1gwx",
          "data-testid": t,
          descriptionId: a,
          status: s
        }, n), d = r ? p.DX : jo;
        return (0, u.jsx)(d, {
          ...i,
          ref: o,
          children: e
        })
      });
      var zs = r(35053),
        Ls = r(34439);

      function As(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Ms(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Fs(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ms(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = As(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ms(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Hs(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var qs = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Bs = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Fs(Fs({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) qs(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Hs(e.variantClassNames, e => Hs(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Xs = Bs({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Gs = Bs({
          defaultClassName: "foundry_okz6z2m",
          variantClassNames: {
            size: {
              MD: "foundry_okz6z2n foundry_okz6z2i foundry_okz6z2j",
              LG: "foundry_okz6z2o foundry_okz6z2k foundry_okz6z2l"
            },
            isSelected: {
              true: "foundry_okz6z2p"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ks = Bs({
          defaultClassName: "foundry_okz6z2b",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
              LG: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            },
            isDisabled: {
              true: "foundry_okz6z2e"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Us = Bs({
          defaultClassName: "foundry_okz6z28 foundry_8kowh41",
          variantClassNames: {
            size: {
              MD: "foundry_okz6z29 foundry_okz6z24 foundry_okz6z25",
              LG: "foundry_okz6z2a foundry_okz6z26 foundry_okz6z27"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Zs = Bs({
          defaultClassName: "foundry_okz6z21",
          variantClassNames: {
            appearance: {
              primary: "foundry_okz6z22",
              secondary: "foundry_okz6z23"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ws = (0, f.createContext)(null);

      function Ys() {
        const e = (0, f.useContext)(Ws);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }(0, f.forwardRef)(({
        size: e = "MD",
        appearance: t = "primary",
        testId: r,
        asChild: n,
        children: o,
        isDisabled: a = !1,
        isReadOnly: s = !1,
        ...i
      }, d) => {
        const l = (0, x.v6)({
            "data-testid": r,
            className: "foundry_okz6z20"
          }, i),
          c = n ? p.DX : "div",
          v = (0, f.useId)(),
          y = (0, f.useId)(),
          m = (0, f.useId)();
        return (0, u.jsx)(Ws.Provider, {
          value: {
            size: e,
            appearance: t,
            labelId: v,
            descriptionId: y,
            inputId: m,
            isDisabled: a,
            isReadOnly: s,
            ...i
          },
          children: (0, u.jsx)(c, {
            ...l,
            ref: d,
            children: o
          })
        })
      }), (0, f.forwardRef)(({
        testId: e,
        onPress: t,
        onClick: r,
        "aria-labelledby": n,
        "aria-describedby": o,
        id: a,
        isSelected: s,
        defaultSelected: i,
        onSelectedChange: d,
        name: l,
        value: c,
        ...v
      }, y) => {
        const m = (0, f.useRef)(null),
          h = (0, Z.UP)(m, y),
          {
            size: b,
            appearance: g,
            inputId: w,
            labelId: C,
            descriptionId: _,
            isDisabled: j,
            isReadOnly: O
          } = Ys(),
          P = (0, Ls.H)({
            isDisabled: j,
            isReadOnly: O,
            isSelected: s,
            defaultSelected: i,
            onChange: d
          }),
          {
            inputProps: S
          } = (0, zs.K)({
            id: a || w,
            "aria-labelledby": (0, x.VW)(n, C),
            "aria-describedby": (0, x.VW)(o, _),
            name: l,
            value: c,
            isDisabled: j,
            isReadOnly: O
          }, P, m),
          D = (0, x.v6)({
            className: Zs({
              appearance: g
            }),
            "data-state": P.isSelected ? "selected" : "unselected",
            "data-disabled": j || O,
            "data-testid": e,
            onClick: e => {
              t?.(e) ?? r?.(e), e.defaultPrevented || j || O || P.toggle()
            }
          }, v);
        return (0, u.jsxs)("div", {
          ...D,
          children: [(0, u.jsx)(p.s6, {
            children: (0, u.jsx)("input", {
              ...S,
              ref: h
            })
          }), (0, u.jsx)("div", {
            className: Us({
              size: b
            }),
            "aria-hidden": "true",
            children: (0, u.jsx)("div", {
              className: Gs({
                size: b,
                isSelected: P.isSelected
              })
            })
          })]
        })
      }), (0, f.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        hideVisually: n = !1,
        ...o
      }, a) => {
        const {
          isDisabled: s,
          labelId: i,
          inputId: d,
          size: l
        } = Ys(), c = (0, x.v6)({
          id: o.id || i,
          htmlFor: d,
          "data-testid": e,
          className: Ks({
            isDisabled: s,
            size: l
          })
        }, o), f = t ? p.DX : "label";
        return (0, u.jsx)(p.s6, {
          enabled: n,
          children: (0, u.jsx)(f, {
            ...c,
            ref: a,
            children: r
          })
        })
      }), (0, f.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const {
          isDisabled: a,
          descriptionId: s
        } = Ys(), i = n.id || s, d = (0, x.v6)({
          className: Xs({
            isDisabled: a
          }),
          "data-testid": r,
          id: i
        }, n), l = t ? p.DX : "div";
        return (0, u.jsx)(l, {
          ...d,
          ref: o,
          children: e
        })
      });
      var Qs = r(53681);
      const $s = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, u.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Js = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, u.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        ei = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, u.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        ti = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, u.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        ri = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, u.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        ni = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, u.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function oi(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function ai(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function si(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ai(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = oi(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ai(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ii(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var di = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        li = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = si(si({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) di(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ii(e.variantClassNames, e => ii(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ui = li({
          defaultClassName: "foundry_11gbdty6 foundry_8kowh41",
          variantClassNames: {
            size: {
              MD: "foundry_11gbdty7",
              LG: "foundry_11gbdty8",
              XL: "foundry_11gbdty9"
            },
            appearance: {
              primary: "foundry_11gbdtya",
              secondary: "foundry_11gbdtyb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ci = li({
          defaultClassName: "foundry_11gbdty2",
          variantClassNames: {
            size: {
              MD: "foundry_11gbdty3",
              LG: "foundry_11gbdty4",
              XL: "foundry_11gbdty5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        fi = li({
          defaultClassName: "foundry_11gbdtyj foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              false: "foundry_11gbdtyk",
              true: "foundry_11gbdtyl"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        pi = li({
          defaultClassName: "foundry_11gbdtys",
          variantClassNames: {
            size: {
              MD: "foundry_11gbdtyt",
              LG: "foundry_11gbdtyu",
              XL: "foundry_11gbdtyv"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        vi = li({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        yi = li({
          defaultClassName: "foundry_11gbdtyd",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
              LG: "foundry_11gbdtyf foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
              XL: "foundry_11gbdtyg foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            },
            isDisabled: {
              true: "foundry_11gbdtyh"
            },
            showAsterisk: {
              true: "foundry_11gbdtyi"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const mi = (0, f.createContext)(null);

      function hi() {
        const e = (0, f.useContext)(mi);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }(0, f.forwardRef)(({
        size: e = "MD",
        appearance: t = "primary",
        testId: r,
        asChild: n,
        children: o,
        ...a
      }, s) => {
        const i = (0, x.v6)({
            "data-testid": r,
            className: "foundry_11gbdty0"
          }, (0, x.cJ)(a, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
          d = n ? p.DX : "div",
          l = (0, f.useId)(),
          c = (0, f.useId)(),
          v = (0, f.useId)();
        return (0, u.jsx)(mi.Provider, {
          value: {
            size: e,
            appearance: t,
            labelId: l,
            descriptionId: c,
            inputId: v,
            ...a
          },
          children: (0, u.jsx)(d, {
            ...i,
            ref: s,
            children: o
          })
        })
      }), (0, f.forwardRef)(({
        testId: e,
        isChecked: t,
        defaultChecked: r,
        onCheckedChange: n,
        name: a,
        onPress: s,
        onClick: i,
        "aria-describedby": d,
        "aria-errormessage": l,
        "aria-labelledby": v,
        className: y,
        ...m
      }, h) => {
        const {
          size: b,
          appearance: g,
          isIndeterminate: w,
          isRequired: C,
          descriptionId: _,
          labelId: j,
          inputId: O,
          ...P
        } = hi(), S = (0, f.useRef)(null), D = m.id || O, {
          isPressed: R,
          pressProps: N
        } = (0, yo.d)({
          ref: S
        }), {
          setSelected: E,
          toggle: k,
          ...I
        } = (0, Ls.H)({
          isSelected: t,
          defaultSelected: r,
          onChange: n
        }), {
          inputProps: T,
          isSelected: V,
          isDisabled: z,
          isReadOnly: L
        } = (0, Qs.v)({
          "aria-label": "",
          id: D,
          name: a,
          ...P
        }, {
          ...I,
          toggle: k,
          setSelected: P.isReadOnly ? () => !1 : E
        }, S), A = (0, x.v6)({
          className: ci({
            size: b
          }),
          onClick: e => {
            s?.(e) ?? i?.(e), e.defaultPrevented || z || L || k()
          }
        }, N, m), M = (0, x.v6)({
          className: "foundry_11gbdty1",
          "aria-checked": t,
          "aria-labelledby": (0, x.VW)(v, j),
          "aria-describedby": (0, x.VW)(d, _),
          "aria-errormessage": (0, x.VW)(l, P.isInvalid ? _ : void 0),
          "aria-required": C,
          required: C
        }, T), F = w ? o[`Dash${b}`] : o[`Check${b}`];
        return (0, u.jsxs)("div", {
          ...A,
          children: [(0, u.jsx)(p.s6, {
            children: (0, u.jsx)("input", {
              ...M,
              ref: h
            })
          }), (0, u.jsx)("div", {
            className: (0, c.$)(ui({
              size: b,
              appearance: g
            }), y),
            "aria-hidden": "true",
            "data-state": w ? "mixed" : V ? "checked" : "unchecked",
            "data-disabled": z || L,
            "data-testid": e,
            "data-pressed": R,
            children: (0, u.jsx)("span", {
              className: "foundry_11gbdtyc",
              children: (V || w) && (0, u.jsx)(F, {
                "aria-hidden": "true"
              })
            })
          })]
        })
      }), (0, f.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        hideVisually: n = !1,
        hideRequiredAsterisk: o,
        ...a
      }, s) => {
        const {
          size: i,
          labelId: d,
          inputId: l,
          isRequired: c
        } = hi(), f = a.id || d, v = c && !o, y = (0, x.v6)({
          className: yi({
            size: i,
            showAsterisk: v
          }),
          "data-testid": r,
          id: f,
          htmlFor: a.htmlFor || l
        }, a), m = t ? p.DX : "label";
        return (0, u.jsx)(p.s6, {
          enabled: n,
          children: (0, u.jsx)(m, {
            ...y,
            ref: s,
            children: e
          })
        })
      }), (0, f.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const {
          isDisabled: a,
          descriptionId: s
        } = hi(), i = n.id || s, d = (0, x.v6)({
          className: fi({
            isDisabled: a
          }),
          "data-testid": r,
          id: i
        }, n), l = t ? p.DX : "div";
        return (0, u.jsx)(l, {
          ...d,
          ref: o,
          children: e
        })
      }), (0, f.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const {
          descriptionId: a
        } = hi(), s = n.id || a, i = (0, x.v6)({
          className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          "data-testid": r,
          id: s
        }, n), d = t ? p.DX : "div";
        return (0, u.jsx)(d, {
          ...i,
          ref: o,
          children: e
        })
      });
      const bi = (0, f.createContext)(null);

      function gi() {
        const e = (0, f.useContext)(bi);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }

      function wi(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Ci(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function xi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ci(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = wi(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ci(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function _i(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, f.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        size: n = "MD",
        isRequired: o = !1,
        ...a
      }, s) => {
        const [i, d] = (0, f.useState)(null), [l, c] = (0, f.useState)(null), v = [i, l].filter(Boolean).join(" "), y = (0, x.v6)({
          "data-testid": e,
          "aria-describedby": v,
          className: "foundry_11gbdtyn foundry_8kowh41"
        }, a), m = t ? p.DX : "fieldset";
        return (0, u.jsx)(bi.Provider, {
          value: {
            size: n,
            isRequired: o,
            descriptionId: i,
            errorTextId: l,
            setDescriptionId: d,
            setErrorTextId: c
          },
          children: (0, u.jsx)(m, {
            ...y,
            ref: s,
            children: r
          })
        })
      }), (0, f.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        optionalText: n = "optional",
        hideVisually: o = !1,
        hideRequiredAsterisk: a,
        ...s
      }, i) => {
        const {
          isRequired: d
        } = gi(), l = d && !a, c = (0, x.v6)({
          "data-testid": r,
          className: vi({
            showAsterisk: l
          })
        }, s), f = t ? p.DX : "legend";
        return (0, u.jsx)(p.s6, {
          enabled: o,
          children: (0, u.jsxs)(f, {
            ...c,
            ref: i,
            children: [(0, u.jsx)(p.xV, {
              children: e
            }), !d && (0, u.jsxs)("span", {
              className: "foundry_11gbdtyq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              children: ["(", n, ")"]
            })]
          })
        })
      }), (0, f.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const {
          setDescriptionId: a
        } = gi(), s = (0, f.useId)(), i = n.id || s;
        (0, f.useEffect)(() => {
          a(i)
        }, [a, i]);
        const d = (0, x.v6)({
            "data-testid": r,
            className: "foundry_11gbdtyr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
            id: i
          }, n),
          l = t ? p.DX : "div";
        return (0, u.jsx)(l, {
          ...d,
          ref: o,
          children: e
        })
      }), (0, f.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const {
          size: a
        } = gi(), s = (0, x.v6)({
          "data-testid": r,
          className: pi({
            size: a
          })
        }, n), i = t ? p.DX : "div";
        return (0, u.jsx)(i, {
          ...s,
          ref: o,
          children: e
        })
      }), (0, f.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const {
          setErrorTextId: a
        } = gi(), s = (0, f.useId)(), i = n.id || s;
        (0, f.useEffect)(() => {
          a(i)
        }, [a, i]);
        const d = (0, x.v6)({
            "data-testid": r,
            id: i,
            className: "foundry_11gbdtyw foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
          }, n),
          l = ce.X,
          c = t ? p.DX : "div";
        return (0, u.jsxs)(c, {
          ...d,
          ref: o,
          children: [(0, u.jsx)(l, {
            label: "",
            size: "SM"
          }), (0, u.jsx)(p.xV, {
            children: e
          })]
        })
      });
      var ji = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Oi = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = xi(xi({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) ji(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return _i(e.variantClassNames, e => _i(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Pi = Oi({
          defaultClassName: "foundry_vq8c3j6 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              false: "foundry_vq8c3j7",
              true: "foundry_vq8c3j8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Si = Oi({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Di = Oi({
          defaultClassName: "foundry_vq8c3j1 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j2"
            },
            showAsterisk: {
              true: "foundry_vq8c3j3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ri = Oi({
          defaultClassName: "foundry_vq8c3j9 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              false: "foundry_vq8c3ja",
              true: "foundry_vq8c3jb"
            },
            isReadOnly: {
              false: "foundry_vq8c3jc",
              true: "foundry_vq8c3jd"
            },
            isInvalid: {
              false: "foundry_vq8c3je",
              true: "foundry_vq8c3jf"
            },
            isSuccess: {
              true: "foundry_vq8c3jg"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isDisabled: !1,
              isSuccess: !1,
              isReadOnly: !1,
              isInvalid: !1
            }, "foundry_vq8c3jh"]
          ]
        });
      const Ni = (0, f.createContext)(null);

      function Ei() {
        const e = (0, f.useContext)(Ni);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }(0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        isDisabled: n = !1,
        isReadOnly: o = !1,
        isRequired: a = !1,
        status: s = "neutral",
        ...i
      }, d) => {
        const l = (0, x.v6)({
            "data-testid": r,
            className: "foundry_vq8c3j0"
          }, i),
          c = e ? p.DX : "div",
          v = (0, f.useId)(),
          y = (0, f.useId)(),
          m = (0, f.useId)(),
          h = (0, f.useId)();
        return (0, u.jsx)(Ni.Provider, {
          value: {
            labelId: v,
            descriptionId: y,
            hintId: m,
            inputId: h,
            isDisabled: n,
            isReadOnly: o,
            isRequired: a,
            status: s,
            ...i
          },
          children: (0, u.jsx)(c, {
            ref: d,
            ...l,
            children: t
          })
        })
      }), (0, f.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        hideVisually: n = !1,
        hideRequiredAsterisk: o = !1,
        ...a
      }, s) => {
        const {
          labelId: i,
          inputId: d,
          isDisabled: l,
          isRequired: c
        } = Ei(), f = (0, x.v6)({
          className: Di({
            isDisabled: l,
            showAsterisk: c && !o
          }),
          "data-testid": r,
          id: i,
          htmlFor: d
        }, a), v = t ? p.DX : "label";
        return (0, u.jsx)(p.s6, {
          enabled: n,
          children: (0, u.jsx)(v, {
            ...f,
            ref: s,
            children: e
          })
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        rows: n = 5,
        defaultValue: o,
        name: a,
        placeholder: s = " ",
        "aria-labelledby": i,
        "aria-describedby": d,
        ...l
      }, c) => {
        const {
          descriptionId: v,
          labelId: y,
          inputId: m,
          hintId: h,
          isDisabled: b,
          isRequired: g,
          isReadOnly: w,
          status: C
        } = Ei(), _ = (0, f.useRef)(null), j = (0, Z.UP)(_, c), O = (0, x.v6)({
          className: Ri({
            isInvalid: "invalid" === C,
            isDisabled: b,
            isReadOnly: w,
            isSuccess: "success" === C
          }),
          name: a,
          id: l.id || m,
          rows: n,
          defaultValue: o,
          disabled: b,
          required: g,
          readOnly: w,
          placeholder: s,
          "aria-labelledby": (0, x.VW)(l.id, y, h, i),
          "aria-describedby": (0, x.VW)(v, d),
          "data-testid": r,
          ..."invalid" === C && {
            "aria-invalid": !0,
            "aria-errormessage": v
          },
          ..."success" === C && {
            "data-success": !0
          },
          ...b && {
            "aria-disabled": !0
          },
          ...g && {
            "aria-required": !0
          }
        }, l), P = e ? p.DX : "textarea";
        return (0, u.jsx)(P, {
          ref: j,
          ...O,
          children: t
        })
      }), (0, f.forwardRef)(({
        children: e,
        testId: t,
        asChild: r,
        ...n
      }, o) => {
        const {
          isDisabled: a,
          descriptionId: s
        } = Ei(), i = (0, x.v6)({
          className: Pi({
            isDisabled: a
          }),
          "data-testid": t,
          id: s
        }, n), d = r ? p.DX : "div";
        return (0, u.jsx)(d, {
          ...i,
          ref: o,
          children: e
        })
      }), (0, f.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const {
          hintId: a,
          isDisabled: s
        } = Ei(), i = (0, x.v6)({
          className: Si({
            isDisabled: s
          }),
          "data-testid": r,
          id: a
        }, n), d = t ? p.DX : "div";
        return (0, u.jsx)(d, {
          ...i,
          ref: o,
          children: e
        })
      }), (0, f.forwardRef)(({
        children: e,
        testId: t,
        asChild: r,
        ...n
      }, o) => {
        const {
          descriptionId: a,
          status: s
        } = Ei(), i = (0, x.v6)({
          className: "foundry_vq8c3ji",
          "data-testid": t,
          descriptionId: a,
          status: s
        }, n), d = r ? p.DX : jo;
        return (0, u.jsx)(d, {
          ...i,
          ref: o,
          children: e
        })
      });
      var ki = r(22718),
        Ii = r(61720);

      function Ti(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Vi(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function zi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Vi(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ti(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vi(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Li(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ai = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Mi = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = zi(zi({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Ai(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Li(e.variantClassNames, e => Li(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Fi = Mi({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Hi = Mi({
          defaultClassName: "foundry_njguqn1",
          variantClassNames: {
            size: {
              MD: "foundry_njguqn2",
              LG: "foundry_njguqn3",
              XL: "foundry_njguqn4"
            },
            orientation: {
              horizontal: "foundry_njguqn5",
              vertical: "foundry_njguqn6"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const qi = (0, f.createContext)(null);

      function Bi() {
        const e = (0, f.useContext)(qi);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }(0, f.forwardRef)(({
        size: e = "MD",
        appearance: t = "primary",
        orientation: r = "vertical",
        children: n,
        testId: o,
        asChild: a,
        "aria-labelledby": s,
        "aria-describedby": i,
        "aria-errormessage": d,
        status: l = "neutral",
        ...c
      }, v) => {
        const y = (0, f.useRef)(null),
          m = (0, Z.UP)(y, v),
          h = (0, f.useId)(),
          b = (0, f.useId)(),
          g = (0, f.useId)(),
          w = (0, ki.Z)({
            ...c,
            isInvalid: "invalid" === l
          }),
          {
            radioGroupProps: C
          } = (0, Ii.m)({
            ...c,
            orientation: r,
            "aria-labelledby": (0, x.VW)(h, s),
            "aria-describedby": (0, x.VW)(b, g, i),
            "aria-errormessage": (0, x.VW)(g, d)
          }, w),
          _ = (0, x.v6)({
            className: "foundry_njguqn0"
          }, C, (0, x.cJ)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
          j = a ? p.DX : "div";
        return (0, u.jsx)(qi.Provider, {
          value: {
            state: w,
            size: e,
            appearance: t,
            orientation: r,
            descriptionId: b,
            labelId: h,
            errorId: g,
            status: l,
            ...c
          },
          children: (0, u.jsx)(j, {
            ref: m,
            "data-testid": o,
            ..._,
            children: n
          })
        })
      }), (0, f.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        ...n
      }, o) => {
        const {
          size: a,
          orientation: s
        } = Bi(), i = (0, x.v6)({
          "data-testid": e,
          className: Hi({
            size: a,
            orientation: s
          })
        }, n), d = t ? p.DX : "div";
        return (0, u.jsx)(d, {
          ...i,
          ref: o,
          children: r
        })
      }), (0, f.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        hideVisually: n = !1,
        hideRequiredAsterisk: o = !1,
        ...a
      }, s) => {
        const {
          isRequired: i,
          labelId: d
        } = Bi(), l = i && !o, c = (0, x.v6)({
          id: a.id || d,
          "data-testid": e,
          className: Fi({
            showAsterisk: l
          })
        }, a), f = t ? p.DX : "div";
        return (0, u.jsx)(p.s6, {
          enabled: n,
          children: (0, u.jsx)(f, {
            ...c,
            ref: s,
            children: r
          })
        })
      }), (0, f.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        ...n
      }, o) => {
        const {
          descriptionId: a
        } = Bi(), s = (0, x.v6)({
          id: a,
          "data-testid": e,
          className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi"
        }, n), i = t ? p.DX : "div";
        return (0, u.jsx)(i, {
          ...s,
          ref: o,
          children: r
        })
      }), (0, f.forwardRef)(({
        children: e,
        testId: t,
        asChild: r,
        ...n
      }, o) => {
        const {
          errorId: a,
          status: s
        } = Bi(), i = (0, x.v6)({
          className: "foundry_njguqnc",
          "data-testid": t,
          errorId: a,
          status: s
        }, n), d = r ? p.DX : jo;
        return (0, u.jsx)(d, {
          ...i,
          ref: o,
          children: e
        })
      });
      var Xi = r(7471),
        Gi = Mi({
          defaultClassName: "foundry_1pfduetf foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              false: "foundry_1pfduetg",
              true: "foundry_1pfdueth"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ki = Mi({
          defaultClassName: "foundry_1pfdueta",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
              LG: "foundry_1pfduetc foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
              XL: "foundry_1pfduetd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            },
            isDisabled: {
              true: "foundry_1pfduete"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ui = Mi({
          defaultClassName: "foundry_1pfduet6 foundry_8kowh41",
          variantClassNames: {
            appearance: {
              primary: "foundry_1pfduet7",
              secondary: "foundry_1pfduet8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Zi = Mi({
          defaultClassName: "foundry_1pfduet2",
          variantClassNames: {
            size: {
              MD: "foundry_1pfduet3",
              LG: "foundry_1pfduet4",
              XL: "foundry_1pfduet5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Wi = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, u.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        Yi = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, u.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        Qi = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, u.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        });
      (0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = (0, x.v6)({
            "data-testid": r,
            className: "foundry_1pfduet0"
          }, n),
          s = e ? p.DX : "label";
        return (0, u.jsx)(s, {
          ref: o,
          ...a,
          children: t
        })
      }), (0, f.forwardRef)(({
        testId: e,
        value: t,
        ...r
      }, n) => {
        const o = (0, f.useRef)(null),
          s = (0, Z.UP)(o, n),
          i = (0, f.useId)(),
          {
            state: d,
            appearance: l,
            size: c,
            isReadOnly: v,
            isRequired: y
          } = Bi(),
          {
            isPressed: m,
            pressProps: h
          } = (0, yo.d)({
            allowTextSelectionOnPress: !0
          }),
          {
            inputProps: b
          } = (0, Xi.z)({
            ...r,
            id: i,
            value: t,
            "aria-label": ""
          }, d, o),
          g = b.checked,
          w = b.disabled || d?.isReadOnly,
          C = (0, x.v6)(b, {
            disabled: w,
            readOnly: v,
            required: y,
            "data-testid": e,
            ...w && {
              "aria-disabled": !0
            },
            ...y && {
              "aria-required": !0
            }
          }, r),
          _ = a[`Dot${c}`];
        return (0, u.jsxs)("div", {
          className: Zi({
            size: c
          }),
          children: [(0, u.jsx)(p.s6, {
            children: (0, u.jsx)("input", {
              type: "radio",
              ...C,
              ref: s,
              className: "foundry_1pfduet1"
            })
          }), (0, u.jsx)("div", {
            className: Ui({
              appearance: l
            }),
            "aria-hidden": "true",
            "data-state": g ? "checked" : "unchecked",
            "data-disabled": w,
            "data-pressed": m,
            ...h,
            children: (0, u.jsx)("span", {
              className: "foundry_1pfduet9",
              children: g && (0, u.jsx)(_, {})
            })
          })]
        })
      }), (0, f.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        hideVisually: n = !1,
        ...o
      }, a) => {
        const {
          size: s,
          state: i
        } = Bi(), d = (0, f.useId)(), l = (0, x.v6)({
          id: d,
          "data-testid": e,
          className: Ki({
            size: s,
            isDisabled: i?.isDisabled
          })
        }, o), c = t ? p.DX : "div";
        return (0, u.jsx)(p.s6, {
          enabled: n,
          children: (0, u.jsx)(c, {
            ...l,
            ref: a,
            children: r
          })
        })
      }), (0, f.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        ...n
      }, o) => {
        const {
          isDisabled: a
        } = Bi(), s = (0, x.v6)({
          "data-testid": e,
          className: Gi({
            isDisabled: a
          })
        }, n), i = t ? p.DX : "span";
        return (0, u.jsx)(i, {
          ref: o,
          ...s,
          children: r
        })
      });
      var $i = r(58900);

      function Ji(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function ed(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function td(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ed(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ji(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ed(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function rd(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var nd = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        od = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = td(td({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) nd(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return rd(e.variantClassNames, e => rd(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ad = od({
          defaultClassName: "foundry_8oytzoc",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzod",
              true: "foundry_8oytzoe"
            },
            isReadOnly: {
              false: "foundry_8oytzof",
              true: "foundry_8oytzog"
            },
            isInvalid: {
              false: "foundry_8oytzoh",
              true: "foundry_8oytzoi"
            },
            isSuccess: {
              false: "foundry_8oytzoj",
              true: "foundry_8oytzok"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isInvalid: !1,
              isSuccess: !1,
              isDisabled: !1,
              isReadOnly: !1
            }, "foundry_8oytzol"],
            [{
              isDisabled: !1
            }, "foundry_8oytzom"]
          ]
        }),
        sd = od({
          defaultClassName: "foundry_8oytzo11 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzo12",
              true: "foundry_8oytzo13"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        id = od({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        dd = od({
          defaultClassName: "foundry_8oytzou",
          variantClassNames: {
            side: {
              left: "foundry_8oytzov",
              right: "foundry_8oytzow"
            },
            isDisabled: {
              false: "foundry_8oytzox",
              true: "foundry_8oytzoy"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ld = od({
          defaultClassName: "foundry_8oytzop foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzoq",
              true: "foundry_8oytzor"
            },
            isReadOnly: {
              false: "foundry_8oytzos",
              true: "foundry_8oytzot"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ud = od({
          defaultClassName: "foundry_8oytzo5 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzo6",
              true: "foundry_8oytzo7"
            },
            showAsterisk: {
              true: "foundry_8oytzo8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const cd = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        fd = (0, f.createContext)(null);

      function pd() {
        const e = (0, f.useContext)(fd);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }(0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        isDisabled: n = !1,
        isReadOnly: o = !1,
        isRequired: a = !1,
        status: s = "neutral",
        ...i
      }, d) => {
        const [l, c] = (0, f.useState)("text"), v = `${(0,f.useId)()}-label`, y = `${(0,f.useId)()}-input`, m = `${(0,f.useId)()}-description`, h = (0, f.useRef)(null), b = (0, f.useRef)(cd), g = (0, x.v6)({
          "data-testid": r,
          className: "foundry_8oytzo4"
        }, i), w = e ? p.DX : "div";
        return (0, u.jsx)(fd.Provider, {
          value: {
            isDisabled: n,
            isReadOnly: o,
            isRequired: a,
            status: s,
            labelId: v,
            inputId: y,
            descriptionId: m,
            type: l,
            setType: c,
            inputRef: h,
            focusState: b,
            ...i
          },
          children: (0, u.jsx)(w, {
            ref: d,
            ...g,
            children: t
          })
        })
      }), (0, f.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        hideVisually: n = !1,
        hideRequiredAsterisk: o,
        ...a
      }, s) => {
        const {
          isDisabled: i,
          isRequired: d,
          inputId: l,
          labelId: c
        } = pd(), f = d && !o, v = (0, x.v6)({
          id: a.id || c,
          htmlFor: a.htmlFor || l,
          "data-testid": e,
          className: ud({
            showAsterisk: f,
            isDisabled: i
          })
        }, a), y = t ? p.DX : "label";
        return (0, u.jsx)(p.s6, {
          enabled: n,
          children: (0, u.jsx)(y, {
            ref: s,
            ...v,
            children: r
          })
        })
      }), (0, f.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        ...n
      }, o) => {
        const {
          isDisabled: a
        } = pd(), s = (0, x.v6)({
          "data-testid": e,
          className: id({
            isDisabled: a
          })
        }, n), i = t ? p.DX : "span";
        return (0, u.jsx)(i, {
          ref: o,
          ...s,
          children: r
        })
      }), (0, f.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        ...n
      }, o) => {
        const {
          isDisabled: a,
          isReadOnly: s,
          status: i
        } = pd(), d = (0, x.v6)({
          "data-testid": e,
          className: (0, c.$)(ad({
            isDisabled: a,
            isReadOnly: s,
            isInvalid: "invalid" === i,
            isSuccess: "success" === i
          }), "foundry_8oytzo1")
        }, n), l = t ? p.DX : "div";
        return (0, u.jsx)(l, {
          ref: o,
          ...d,
          children: r
        })
      }), (0, f.forwardRef)(({
        testId: e,
        asChild: t,
        mask: r,
        replacement: n,
        showMask: o = !0,
        track: a,
        placeholder: s = " ",
        "aria-labelledby": i,
        "aria-describedby": d,
        type: l = "text",
        ...v
      }, y) => {
        const {
          isDisabled: m,
          isReadOnly: h,
          isRequired: b,
          status: g,
          labelId: w,
          inputId: C,
          descriptionId: _,
          setType: j,
          type: O,
          inputRef: P,
          focusState: S
        } = pd();
        (0, f.useEffect)(() => j(l), []);
        const D = "invalid" === g,
          R = (0, x.v6)({
            disabled: m,
            readOnly: h,
            required: b,
            id: C,
            type: O,
            spellCheck: !1,
            placeholder: s,
            "aria-labelledby": (0, x.VW)(w, i),
            "aria-describedby": (0, x.VW)(_, d),
            "data-testid": e,
            className: (0, c.$)(ld({
              isDisabled: m,
              isReadOnly: h
            }), "foundry_8oytzo2"),
            onBlur: e => {
              if (S.current) {
                const {
                  selectionStart: t,
                  selectionEnd: r
                } = e.currentTarget;
                S.current.selectionStart = t, S.current.selectionEnd = r
              }
            },
            ...D && {
              "aria-invalid": !0,
              "aria-errormessage": _
            },
            ..."success" === g && {
              "data-success": !0
            },
            ...m && {
              "aria-disabled": !0
            },
            ...b && {
              "aria-required": !0
            }
          }, v),
          N = (0, $i.A)({
            mask: r,
            replacement: n,
            showMask: o,
            track: a
          }),
          E = (0, Z.UP)(r && n ? N : null, P, y),
          k = t ? p.DX : "input";
        return (0, u.jsx)(k, {
          ref: E,
          ...R
        })
      }), (0, f.forwardRef)(({
        icon: e,
        asChild: t,
        testId: r,
        side: n,
        ...o
      }, a) => {
        const {
          isDisabled: s
        } = pd(), i = (0, x.v6)({
          size: "LG",
          "data-testid": r,
          className: (0, c.$)(dd({
            side: n,
            isDisabled: s
          }), "foundry_8oytzo0")
        }, o), d = t ? p.DX : fe[e];
        return (0, u.jsx)(d, {
          ref: a,
          ...i
        })
      });
      const vd = (0, f.forwardRef)(({
        asChild: e,
        children: t,
        icon: r,
        iconElement: n,
        label: o,
        testId: a,
        preventFocusOnPress: s = !0,
        ...i
      }, d) => {
        const l = (0, f.useRef)(null),
          v = (0, Z.UP)(l, d),
          {
            isDisabled: y
          } = pd(),
          {
            buttonProps: m
          } = (0, Z.sL)((0, x.v6)(i, {
            isDisabled: y,
            preventFocusOnPress: s
          }), l),
          h = (0, x.v6)({
            className: (0, c.$)("foundry_8oytzon foundry_8kowh41 foundry_1d5mo5m0", "foundry_8oytzo3"),
            "data-testid": a
          }, m),
          b = n || (r ? fe[r] : null),
          g = e ? p.DX : "button";
        return (0, u.jsxs)(g, {
          ref: v,
          ...h,
          children: [b && (0, u.jsx)(b, {
            label: o || "",
            size: "LG",
            className: "foundry_8oytzoo"
          }), (0, u.jsx)(p.xV, {
            children: t
          })]
        })
      });
      (0, f.forwardRef)(({
        showPasswordLabel: e,
        hidePasswordLabel: t,
        ...r
      }, n) => {
        const {
          type: o,
          setType: a,
          inputRef: s,
          focusState: i,
          isDisabled: d
        } = pd(), l = "password" === o, c = l ? e : t;
        (0, f.useEffect)(() => {
          i.current && (i.current.clickTriggered = !1)
        }, [i]);
        const p = (0, x.v6)({
          label: c,
          icon: l ? "Eye" : "EyeOff",
          onPress: () => {
            a(l ? "text" : "password");
            const e = s.current;
            if (i.current && e) {
              const {
                selectionStart: t,
                selectionEnd: r
              } = i.current;
              e.focus(), null === t && null === r || requestAnimationFrame(() => {
                e.ownerDocument.activeElement === e && (e.selectionStart = t, e.selectionEnd = r)
              })
            }
          },
          preventFocusOnPress: !0
        }, r);
        return (0, u.jsxs)(fr, {
          isDisabled: d,
          children: [(0, u.jsx)(pr, {
            children: (0, u.jsx)(vd, {
              ref: n,
              ...p
            })
          }), (0, u.jsxs)(vr, {
            side: "bottom",
            align: "end",
            children: [c, (0, u.jsx)(yr, {})]
          })]
        })
      }), (0, f.forwardRef)(({
        children: e,
        testId: t,
        asChild: r,
        ...n
      }, o) => {
        const {
          isDisabled: a,
          descriptionId: s
        } = pd(), i = (0, x.v6)({
          className: sd({
            isDisabled: a
          }),
          "data-testid": t,
          id: s
        }, n), d = r ? p.DX : "div";
        return (0, u.jsx)(d, {
          ...i,
          ref: o,
          children: e
        })
      }), (0, f.forwardRef)(({
        children: e,
        testId: t,
        asChild: r,
        ...n
      }, o) => {
        const {
          descriptionId: a,
          status: s
        } = pd(), i = (0, x.v6)({
          className: "foundry_8oytzo14",
          "data-testid": t,
          descriptionId: a,
          status: s
        }, n), d = r ? p.DX : jo;
        return (0, u.jsx)(d, {
          ...i,
          ref: o,
          children: e
        })
      });
      var yd = r(909);

      function md(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function hd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function bd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? hd(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = md(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hd(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function gd(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var wd = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Cd = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = bd(bd({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) wd(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gd(e.variantClassNames, e => gd(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_shqzby0 foundry_8kowh41 foundry_1d5mo5m0 foundry_1qqcnuao foundry_1qqcnuas",
          variantClassNames: {
            size: {
              SM: "foundry_shqzby1",
              MD: "foundry_shqzby2",
              LG: "foundry_shqzby3",
              XL: "foundry_shqzby4"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const xd = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        _d = (0, f.forwardRef)(({
          label: e,
          size: t = "LG",
          testId: r,
          ...n
        }, o) => {
          const a = (0, f.useRef)(null),
            s = (0, Z.UP)(a, o),
            {
              buttonProps: i
            } = (0, Z.sL)(n, a),
            d = (0, x.v6)({
              "data-testid": r,
              className: Cd({
                size: t
              })
            }, i);
          return (0, u.jsx)("button", {
            ref: s,
            ...d,
            children: (0, u.jsx)(ce.X, {
              label: e,
              size: xd[t]
            })
          })
        });

      function jd(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Od(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Pd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Od(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = jd(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Od(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Sd(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Dd = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Rd = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Pd(Pd({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Dd(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Sd(e.variantClassNames, e => Sd(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Nd = Rd({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ed = Rd({
          defaultClassName: "foundry_1m368qhc",
          variantClassNames: {
            status: {
              information: "foundry_1m368qhd",
              danger: "foundry_1m368qhe",
              success: "foundry_1m368qhf",
              warning: "foundry_1m368qhg"
            },
            size: {
              LG: "foundry_1m368qhh",
              XL: "foundry_1m368qhi"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        kd = Rd({
          defaultClassName: "foundry_1m368qh2",
          variantClassNames: {
            status: {
              danger: "foundry_1m368qh3",
              information: "foundry_1m368qh4",
              success: "foundry_1m368qh5",
              warning: "foundry_1m368qh6"
            },
            background: {
              "two-tone": "foundry_1m368qh7",
              neutral: "foundry_1m368qh8",
              none: "foundry_1m368qh9"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Id = (0, f.createContext)(null);

      function Td() {
        const e = (0, f.useContext)(Id);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }(0, f.forwardRef)(({
        asChild: e,
        testId: t,
        status: r,
        background: n,
        ...o
      }, a) => {
        const s = e ? p.DX : "div",
          i = (0, x.v6)({
            className: kd({
              status: r,
              background: n
            })
          }, o);
        return (0, u.jsx)(Id.Provider, {
          value: {
            status: r,
            background: n
          },
          children: (0, u.jsx)(s, {
            ref: a,
            "data-testid": t,
            ...i
          })
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? p.DX : "div",
          a = (0, x.v6)({
            className: "foundry_1m368qha"
          }, r);
        return (0, u.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...a
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? p.DX : "div",
          a = (0, x.v6)({
            className: "foundry_1m368qhb"
          }, r);
        return (0, u.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...a
        })
      });
      const Vd = {
        danger: ce.RT,
        information: ce.R2,
        success: ce.rW,
        warning: ce.lW
      };
      (0, f.forwardRef)(({
        asChild: e,
        size: t = "XL",
        ...r
      }, n) => {
        const {
          status: o
        } = Td(), a = e ? p.DX : Vd[o], s = (0, x.v6)({
          className: Ed({
            status: o,
            size: t
          }),
          size: t
        }, r);
        return (0, u.jsx)(a, {
          label: "",
          ref: n,
          ...s
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? p.DX : "div",
          a = (0, x.v6)({
            className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
          }, r);
        return (0, u.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...a
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? p.DX : "div",
          a = (0, x.v6)({
            className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }, r);
        return (0, u.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...a
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = (0, f.useRef)(null),
          s = (0, Z.UP)(a, o),
          i = e ? p.DX : "a",
          {
            linkProps: d,
            isPressed: l
          } = (0, yd.i)(n, a),
          c = (0, x.v6)({
            className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
          }, d);
        return (0, u.jsx)(i, {
          "data-pressed": l,
          "data-testid": r,
          ref: s,
          ...c,
          children: t
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = e ? p.DX : "div",
          s = (0, x.v6)({
            className: "foundry_1m368qhm"
          }, n);
        return (0, u.jsx)(a, {
          ref: o,
          "data-testid": r,
          ...s,
          children: t
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        className: r,
        ...n
      }, o) => {
        const a = e ? p.DX : "div";
        return (0, u.jsx)(a, {
          ref: o,
          "data-testid": t,
          className: (0, c.$)(r, "foundry_1m368qhp foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"),
          ...n
        })
      }), (0, f.forwardRef)((e, t) => {
        const {
          background: r
        } = Td(), n = "none" !== r, o = (0, x.v6)({
          className: Nd({
            hasBackground: n
          })
        }, e);
        return (0, u.jsx)(_d, {
          size: "SM",
          ref: t,
          ...o
        })
      });
      var zd = r(64634),
        Ld = r(7697),
        Ad = r(17497);

      function Md(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Fd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Hd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Fd(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Md(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fd(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function qd(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Bd = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Xd = "foundry_qmpv6yv",
        Gd = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Hd(Hd({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Bd(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return qd(e.variantClassNames, e => qd(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_qmpv6y8",
          variantClassNames: {
            status: {
              danger: "foundry_qmpv6y9",
              information: "foundry_qmpv6ya",
              success: "foundry_qmpv6yb",
              warning: "foundry_qmpv6yc"
            },
            background: {
              static: "foundry_qmpv6yd",
              "two-tone": "foundry_qmpv6ye",
              neutral: "foundry_qmpv6yf"
            },
            align: {
              left: "foundry_qmpv6yg",
              center: "foundry_qmpv6yh"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              status: "danger",
              background: "static"
            }, "foundry_qmpv6yi"],
            [{
              status: "information",
              background: "static"
            }, "foundry_qmpv6yj"],
            [{
              status: "warning",
              background: "static"
            }, "foundry_qmpv6yk"],
            [{
              status: "success",
              background: "static"
            }, "foundry_qmpv6yl"]
          ]
        });
      const Kd = (0, f.createContext)(null);

      function Ud() {
        const e = (0, f.useContext)(Kd);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }(0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        loopPagination: n,
        status: o,
        background: a,
        align: s = "left",
        ...i
      }, d) => {
        const l = (({
            loopPagination: e = !0
          }) => {
            const t = (0, Z.rl)(),
              r = (0, Z.jt)(),
              [n, o] = (0, f.useState)([]),
              a = n.length,
              [s, i] = (0, f.useState)(0),
              [d, l] = (0, zd.A)({
                containScroll: !1,
                loop: e,
                watchDrag: t && a > 1
              }, [(0, Ld.A)(), (0, Ad.A)()]),
              u = (0, f.useRef)(0),
              c = (0, f.useRef)(!1),
              p = n[s],
              v = (0, f.useCallback)(e => {
                const t = e.selectedScrollSnap();
                e.slideNodes().forEach((e, r) => {
                  e.style.visibility = r === t ? "visible" : "hidden"
                }), i(t), c.current = !0
              }, [l]),
              y = (0, f.useCallback)(e => {
                u.current = .94 * e.scrollSnapList().length
              }, []),
              m = (0, f.useCallback)((e, t) => {
                const r = e.internalEngine(),
                  n = e.scrollProgress(),
                  o = e.slidesInView(),
                  a = "scroll" === t;
                e.scrollSnapList().forEach((t, s) => {
                  let i = t - n;
                  r.slideRegistry[s].forEach(s => {
                    if (a && !o.includes(s)) return;
                    r.options.loop && r.slideLooper.loopPoints.forEach(e => {
                      const r = e.target();
                      if (s === e.index && 0 !== r) {
                        const e = Math.sign(r); - 1 === e && (i = t - (1 + n)), 1 === e && (i = t + (1 - n))
                      }
                    });
                    const d = (l = 1 - Math.abs(i * u.current), Math.min(Math.max(l, 0), 1)).toString();
                    var l;
                    e.slideNodes()[s].style.opacity = d
                  })
                })
              }, []);
            return (0, f.useEffect)(() => {
              l && (y(l), m(l), l.on("reInit", y).on("reInit", m).on("scroll", m).on("slideFocus", m))
            }, [l, m]), (0, f.useEffect)(() => {
              l && (v(l), l.on("select", v).on("reInit", v))
            }, [l, v]), {
              setAlerts: o,
              alerts: n,
              numAlerts: a,
              emblaRef: d,
              emblaApi: l,
              prevAlert: () => l?.scrollPrev(r),
              nextAlert: () => l?.scrollNext(r),
              currentAlert: p,
              currentAlertIndex: s,
              setCurrentAlertIndex: i,
              isInitialized: c.current,
              loopPagination: e,
              canScrollNext: () => l?.canScrollNext() || !1,
              canScrollPrev: () => l?.canScrollPrev() || !1
            }
          })({
            loopPagination: n
          }),
          {
            currentAlert: c,
            isInitialized: v,
            setAlerts: y,
            numAlerts: m
          } = l;
        (0, f.useEffect)(() => {
          o && a && y([{
            status: o,
            background: a,
            align: s
          }])
        }, []);
        const h = m > 1 ? {
            role: "region",
            "aria-roledescription": "carousel",
            "aria-label": "alerts"
          } : null,
          b = (0, x.v6)({
            className: Gd(c)
          }, h, i),
          g = e ? p.DX : "div";
        return (0, u.jsx)(Kd.Provider, {
          value: l,
          children: (0, u.jsx)(g, {
            ref: d,
            "data-testid": r,
            "data-initialized": v,
            ...b,
            children: t
          })
        })
      });
      const Zd = {
        danger: "CircleX",
        information: "Info",
        success: "CircleCheck",
        warning: "TriangleAlert"
      };

      function Wd(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Yd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Qd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Yd(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Wd(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yd(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function $d(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, f.forwardRef)(({
        icon: e,
        ...t
      }, r) => {
        const {
          currentAlert: n
        } = Ud();
        if (!e && !n || !n?.status) return null;
        const o = e || Zd[n.status],
          a = fe[o],
          s = (0, x.v6)({
            className: "foundry_qmpv6yp"
          }, t);
        return (0, u.jsx)(a, {
          label: "",
          ref: r,
          size: "MD",
          "data-icon": !0,
          ...s
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? p.DX : "div",
          a = (0, x.v6)({
            className: "foundry_qmpv6yq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }, r);
        return (0, u.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...a
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        align: r = "left",
        status: n,
        background: o,
        ...a
      }, s) => {
        const i = e ? p.DX : "div",
          d = (0, x.v6)({
            className: "foundry_qmpv6yo"
          }, a);
        return (0, u.jsx)(i, {
          ref: s,
          "data-testid": t,
          ...d
        })
      }), (0, f.forwardRef)(({
        testId: e,
        children: t,
        ...r
      }, n) => {
        const {
          setAlerts: o,
          emblaRef: a,
          emblaApi: s
        } = Ud(), i = (0, x.v6)({
          className: "foundry_qmpv6ym"
        }, r), d = (0, Z.UP)(a, n), l = f.Children.map(t, e => {
          const t = e;
          if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
          return {
            status: t.props.status,
            background: t.props.background,
            align: t.props.align
          }
        });
        return (0, f.useEffect)(() => {
          l && o(l)
        }, []), s?.on("slidesChanged", () => {
          l && o(l)
        }), (0, u.jsx)("div", {
          ref: d,
          "data-testid": e,
          ...i,
          children: (0, u.jsx)("div", {
            className: "foundry_qmpv6yn",
            children: t
          })
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = (0, f.useRef)(null),
          s = (0, Z.UP)(a, o),
          i = e ? p.DX : "a",
          {
            linkProps: d,
            isPressed: l
          } = (0, yd.i)(n, a),
          c = (0, x.v6)({
            className: "foundry_qmpv6yr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
          }, n);
        return (0, u.jsx)(i, {
          "data-pressed": l,
          "data-testid": r,
          ref: s,
          ...d,
          ...c,
          children: t
        })
      }), (0, f.forwardRef)((e, t) => {
        const r = (0, x.v6)({
          className: "foundry_qmpv6ys"
        }, e);
        return (0, u.jsx)(_d, {
          ref: t,
          "data-close-btn": !0,
          size: "SM",
          ...r
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        ...n
      }, o) => {
        const a = e ? p.DX : "div",
          s = (0, x.v6)({
            className: "foundry_qmpv6yt"
          }, n);
        return (0, u.jsx)(a, {
          ref: o,
          "data-testid": t,
          "data-pagination": !0,
          role: "group",
          ...s,
          children: r
        })
      }), (0, f.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const {
          nextAlert: n,
          canScrollNext: o
        } = Ud(), a = (0, x.v6)({
          className: Xd
        }, t);
        return (0, u.jsx)(l.K, {
          ref: r,
          size: "SM",
          icon: "ChevronRight",
          appearance: "ghost",
          "data-testid": e,
          onPress: n,
          isDisabled: !o(),
          ...a
        })
      }), (0, f.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const {
          prevAlert: n,
          canScrollPrev: o
        } = Ud(), a = (0, x.v6)({
          className: Xd
        }, t);
        return (0, u.jsx)(l.K, {
          ref: r,
          size: "SM",
          icon: "ChevronLeft",
          appearance: "ghost",
          "data-testid": e,
          onPress: n,
          isDisabled: !o(),
          ...a
        })
      }), (0, f.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const {
          currentAlertIndex: n,
          numAlerts: o
        } = Ud(), a = (0, x.v6)({
          className: "foundry_qmpv6yu foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdp foundry_tdsdcdt"
        }, t);
        return (0, u.jsxs)("div", {
          ref: r,
          "data-testid": e,
          "aria-hidden": !0,
          ...a,
          children: [n + 1, "/", o]
        })
      });
      var Jd = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        el = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Qd(Qd({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Jd(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $d(e.variantClassNames, e => $d(e, e => e.split(" ")[0]))
            }
          }, t
        },
        tl = el({
          defaultClassName: "foundry_oahh5813",
          variantClassNames: {
            background: {
              static: "foundry_oahh5814",
              "two-tone": "foundry_oahh5815",
              none: "foundry_oahh5816"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        rl = el({
          defaultClassName: "foundry_oahh583",
          variantClassNames: {
            size: {
              MD: "foundry_oahh584",
              LG: "foundry_oahh585"
            },
            hasBorder: {
              true: "foundry_oahh586",
              false: "foundry_oahh587"
            },
            background: {
              static: "foundry_oahh588",
              "two-tone": "foundry_oahh589",
              none: "foundry_oahh58a"
            },
            color: {
              monochrome: "foundry_oahh58b",
              blue: "foundry_oahh58c",
              green: "foundry_oahh58d",
              grey: "foundry_oahh58e",
              red: "foundry_oahh58f",
              seafoam: "foundry_oahh58g",
              yellow: "foundry_oahh58h"
            },
            isDisabled: {
              true: "foundry_oahh58i",
              false: "foundry_oahh58j"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              background: "static",
              color: "monochrome"
            }, "foundry_oahh58k"],
            [{
              background: "static",
              color: "blue"
            }, "foundry_oahh58l"],
            [{
              background: "static",
              color: "green"
            }, "foundry_oahh58m"],
            [{
              background: "static",
              color: "grey"
            }, "foundry_oahh58n"],
            [{
              background: "static",
              color: "red"
            }, "foundry_oahh58o"],
            [{
              background: "static",
              color: "seafoam"
            }, "foundry_oahh58p"],
            [{
              background: "static",
              color: "yellow"
            }, "foundry_oahh58q"],
            [{
              background: "two-tone",
              color: "monochrome"
            }, "foundry_oahh58r"],
            [{
              background: "two-tone",
              color: "blue"
            }, "foundry_oahh58s"],
            [{
              background: "two-tone",
              color: "green"
            }, "foundry_oahh58t"],
            [{
              background: "two-tone",
              color: "grey"
            }, "foundry_oahh58u"],
            [{
              background: "two-tone",
              color: "red"
            }, "foundry_oahh58v"],
            [{
              background: "two-tone",
              color: "seafoam"
            }, "foundry_oahh58w"],
            [{
              background: "two-tone",
              color: "yellow"
            }, "foundry_oahh58x"],
            [{
              hasBorder: !1,
              background: "none",
              isDisabled: !1
            }, "foundry_oahh58y"]
          ]
        }),
        nl = el({
          defaultClassName: "foundry_oahh58z",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj",
              LG: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const ol = (0, f.createContext)(null);

      function al() {
        const e = (0, f.useContext)(ol);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }(0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        size: n,
        background: o,
        color: a,
        hasBorder: s,
        isDisabled: i,
        ...d
      }, l) => {
        const c = {
            size: n,
            background: o,
            color: a,
            hasBorder: s,
            isDisabled: i
          },
          f = (0, x.v6)({
            className: rl(c)
          }, d),
          v = e ? p.DX : "div";
        return (0, u.jsx)(ol.Provider, {
          value: c,
          children: (0, u.jsx)(v, {
            ref: l,
            "data-testid": r,
            "aria-disabled": i,
            ...f,
            children: t
          })
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const {
          size: a
        } = al(), s = e ? p.DX : "div", i = (0, x.v6)({
          className: nl({
            size: a
          })
        }, n);
        return (0, u.jsx)(s, {
          ref: o,
          "data-testid": r,
          ...i,
          children: t
        })
      }), (0, f.forwardRef)(({
        icon: e,
        ...t
      }, r) => {
        const n = fe[e],
          o = (0, x.v6)({
            className: "foundry_oahh5812"
          }, t);
        return (0, u.jsx)(n, {
          ref: r,
          size: "SM",
          ...o
        })
      }), (0, f.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const {
          background: n,
          isDisabled: o
        } = al(), a = (0, x.v6)({
          className: tl({
            background: n
          })
        }, t);
        return (0, u.jsx)(l.K, {
          ref: r,
          "data-testid": e,
          "data-close-btn": !0,
          appearance: "ghost",
          icon: "X",
          size: "SM",
          isDisabled: o,
          ...a
        })
      });
      var sl = Object.defineProperty,
        il = (e, t) => sl(e, "name", {
          value: t,
          configurable: !0
        }),
        [dl, ll, ul] = Cr("Toast"),
        [cl, fl] = (0, we.A)("Toast", [ul]),
        [pl, vl] = cl("ToastProvider"),
        yl = ["F8"],
        ml = "toast.viewportPause",
        hl = "toast.viewportResume",
        bl = f.forwardRef(il(function(e, t) {
          const {
            __scopeToast: r,
            hotkey: n = yl,
            label: o = "Notifications ({hotkey})",
            ...a
          } = e, s = vl("ToastViewport", r), i = ll(r), d = f.useRef(null), l = f.useRef(null), c = f.useRef(null), p = f.useRef(null), v = (0, ge.s)(t, p, s.onViewportChange), y = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), m = s.toastCount > 0;
          f.useEffect(() => {
            const e = il(e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && p.current?.focus()
            }, "handleKeyDown");
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), f.useEffect(() => {
            const e = d.current,
              t = p.current;
            if (m && e && t) {
              const r = il(() => {
                  if (!s.isClosePausedRef.current) {
                    const e = new CustomEvent(ml);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                }, "handlePause"),
                n = il(() => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(hl);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !1
                  }
                }, "handleResume"),
                o = il(t => {
                  !e.contains(t.relatedTarget) && n()
                }, "handleFocusOutResume"),
                a = il(() => {
                  e.contains(document.activeElement) || n()
                }, "handlePointerLeaveResume");
              return e.addEventListener("focusin", r), e.addEventListener("focusout", o), e.addEventListener("pointermove", r), e.addEventListener("pointerleave", a), window.addEventListener("blur", r), window.addEventListener("focus", n), () => {
                e.removeEventListener("focusin", r), e.removeEventListener("focusout", o), e.removeEventListener("pointermove", r), e.removeEventListener("pointerleave", a), window.removeEventListener("blur", r), window.removeEventListener("focus", n)
              }
            }
          }, [m, s.isClosePausedRef]);
          const h = f.useCallback(({
            tabbingDirection: e
          }) => {
            const t = i().map(t => {
              const r = t.ref.current,
                n = [r, ...Vl(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [i]);
          return f.useEffect(() => {
            const e = p.current;
            if (e) {
              const t = il(t => {
                const r = t.altKey || t.ctrlKey || t.metaKey;
                if ("Tab" === t.key && !r) {
                  const r = document.activeElement,
                    n = t.shiftKey;
                  if (t.target === e && n) return void l.current?.focus();
                  const o = h({
                      tabbingDirection: n ? "backwards" : "forwards"
                    }),
                    a = o.findIndex(e => e === r);
                  zl(o.slice(a + 1)) ? t.preventDefault() : n ? l.current?.focus() : c.current?.focus()
                }
              }, "handleKeyDown");
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [i, h]), (0, u.jsxs)(ze, {
            ref: d,
            role: "region",
            "aria-label": o.replace("{hotkey}", y),
            tabIndex: -1,
            style: {
              pointerEvents: m ? void 0 : "none"
            },
            children: [m && (0, u.jsx)(gl, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                zl(h({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, u.jsx)(dl.Slot, {
              scope: r,
              children: (0, u.jsx)(Ce.sG.ol, {
                tabIndex: -1,
                ...a,
                ref: v
              })
            }), m && (0, u.jsx)(gl, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                zl(h({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        }, "ToastViewport")),
        gl = f.forwardRef(il(function(e, t) {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, a = vl("ToastFocusProxy", r);
          return (0, u.jsx)(Rt.s6, {
            tabIndex: 0,
            ...o,
            ref: t,
            style: {
              position: "fixed"
            },
            onFocus: e => {
              const t = e.relatedTarget;
              !a.viewport?.contains(t) && n()
            }
          })
        }, "ToastFocusProxy")),
        wl = "Toast",
        Cl = f.forwardRef(il(function(e, t) {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            ...s
          } = e, [i, d] = (0, Dt.i)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: a,
            caller: wl
          });
          return (0, u.jsx)(Ct, {
            present: r || i,
            children: (0, u.jsx)(jl, {
              open: i,
              ...s,
              ref: t,
              onClose: () => d(!1),
              onPause: (0, xe.c)(e.onPause),
              onResume: (0, xe.c)(e.onResume),
              onSwipeStart: (0, be.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, be.mK)(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: (0, be.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, be.mK)(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), d(!1)
              })
            })
          })
        }, "Toast")),
        [xl, _l] = cl(wl, {
          onClose() {}
        }),
        jl = f.forwardRef(il(function(e, t) {
          const {
            __scopeToast: r,
            type: n = "foreground",
            duration: o,
            open: a,
            onClose: s,
            onEscapeKeyDown: i,
            onPause: d,
            onResume: l,
            onSwipeStart: c,
            onSwipeMove: p,
            onSwipeCancel: v,
            onSwipeEnd: y,
            ...m
          } = e, h = vl(wl, r), b = ll(r), [g, w] = f.useState(null), C = (0, ge.s)(t, w), x = f.useRef(null), _ = f.useRef(null), j = o || h.duration, O = f.useRef(0), P = f.useRef(j), S = f.useRef(0), {
            onToastAdd: D,
            onToastRemove: R
          } = h, N = (0, xe.c)(() => {
            const e = g?.contains(document.activeElement);
            e && h.viewport?.focus(), s()
          }), E = f.useCallback(e => {
            e && e !== 1 / 0 && (window.clearTimeout(S.current), O.current = (new Date).getTime(), S.current = window.setTimeout(N, e))
          }, [N]);
          f.useEffect(() => {
            const e = h.viewport;
            if (e) {
              const t = il(() => {
                  E(P.current), l?.()
                }, "handleResume"),
                r = il(() => {
                  const e = (new Date).getTime() - O.current;
                  P.current = P.current - e, window.clearTimeout(S.current), d?.()
                }, "handlePause");
              return e.addEventListener(ml, r), e.addEventListener(hl, t), () => {
                e.removeEventListener(ml, r), e.removeEventListener(hl, t)
              }
            }
          }, [h.viewport, j, d, l, E]), f.useEffect(() => {
            a && !h.isClosePausedRef.current && E(j)
          }, [a, j, h.isClosePausedRef, E]), f.useEffect(() => () => {
            window.clearTimeout(S.current)
          }, []), f.useEffect(() => (D(), () => R()), [D, R]);
          const k = f.useMemo(() => g ? Nl(g) : null, [g]);
          return h.viewport ? (0, u.jsxs)(u.Fragment, {
            children: [k && (0, u.jsx)(Ol, {
              __scopeToast: r,
              role: "status",
              "aria-live": "foreground" === n ? "assertive" : "polite",
              children: k
            }), (0, u.jsx)(xl, {
              scope: r,
              onClose: N,
              children: vt.createPortal((0, u.jsx)(dl.ItemSlot, {
                scope: r,
                children: (0, u.jsx)(Ve, {
                  asChild: !0,
                  onEscapeKeyDown: (0, be.mK)(i, e => {
                    const t = b().some(t => t.ref.current?.contains(e.target));
                    t || N()
                  }),
                  children: (0, u.jsx)(Ce.sG.li, {
                    tabIndex: 0,
                    "data-state": a ? "open" : "closed",
                    "data-swipe-direction": h.swipeDirection,
                    ...m,
                    ref: C,
                    style: {
                      userSelect: "none",
                      touchAction: "none",
                      ...e.style
                    },
                    onKeyDown: (0, be.mK)(e.onKeyDown, e => {
                      "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || N())
                    }),
                    onPointerDown: (0, be.mK)(e.onPointerDown, e => {
                      0 === e.button && (x.current = {
                        x: e.clientX,
                        y: e.clientY
                      })
                    }),
                    onPointerMove: (0, be.mK)(e.onPointerMove, e => {
                      if (!x.current) return;
                      const t = e.clientX - x.current.x,
                        r = e.clientY - x.current.y,
                        n = Boolean(_.current),
                        o = ["left", "right"].includes(h.swipeDirection),
                        a = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max,
                        s = o ? a(0, t) : 0,
                        i = o ? 0 : a(0, r),
                        d = "touch" === e.pointerType ? 10 : 2,
                        l = {
                          x: s,
                          y: i
                        },
                        u = {
                          originalEvent: e,
                          delta: l
                        };
                      n ? (_.current = l, El("toast.swipeMove", p, u, {
                        discrete: !1
                      })) : kl(l, h.swipeDirection, d) ? (_.current = l, El("toast.swipeStart", c, u, {
                        discrete: !1
                      }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > d || Math.abs(r) > d) && (x.current = null)
                    }),
                    onPointerUp: (0, be.mK)(e.onPointerUp, e => {
                      const t = _.current,
                        r = e.target;
                      if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), _.current = null, x.current = null, t) {
                        const r = e.currentTarget,
                          n = {
                            originalEvent: e,
                            delta: t
                          };
                        kl(t, h.swipeDirection, h.swipeThreshold) ? El("toast.swipeEnd", y, n, {
                          discrete: !0
                        }) : El("toast.swipeCancel", v, n, {
                          discrete: !0
                        }), r.addEventListener("click", e => e.preventDefault(), {
                          once: !0
                        })
                      }
                    })
                  })
                })
              }), h.viewport)
            })]
          }) : null
        }, "ToastImpl")),
        Ol = il(e => {
          const {
            __scopeToast: t,
            children: r,
            ...n
          } = e, o = vl(wl, t), [a, s] = f.useState(!1), [i, d] = f.useState(!1);
          return Il(() => s(!0)), f.useEffect(() => {
            const e = window.setTimeout(() => d(!0), 1e3);
            return () => window.clearTimeout(e)
          }, []), i ? null : (0, u.jsx)(ht, {
            asChild: !0,
            container: o.announcerContainer || void 0,
            children: (0, u.jsx)(Rt.s6, {
              ...n,
              children: a && (0, u.jsxs)(u.Fragment, {
                children: [o.label, " ", r]
              })
            })
          })
        }, "ToastAnnounce"),
        Pl = f.forwardRef(il(function(e, t) {
          const {
            __scopeToast: r,
            ...n
          } = e;
          return (0, u.jsx)(Ce.sG.div, {
            ...n,
            ref: t
          })
        }, "ToastDescription")),
        Sl = f.forwardRef(il(function(e, t) {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, u.jsx)(Rl, {
            altText: r,
            asChild: !0,
            children: (0, u.jsx)(Dl, {
              ...n,
              ref: t
            })
          }) : (console.error("Invalid prop `altText` supplied to `ToastAction`. Expected non-empty `string`."), null)
        }, "ToastAction")),
        Dl = f.forwardRef(il(function(e, t) {
          const {
            __scopeToast: r,
            ...n
          } = e, o = _l("ToastClose", r);
          return (0, u.jsx)(Rl, {
            asChild: !0,
            children: (0, u.jsx)(Ce.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, be.mK)(e.onClick, o.onClose)
            })
          })
        }, "ToastClose")),
        Rl = f.forwardRef(il(function(e, t) {
          const {
            __scopeToast: r,
            altText: n,
            ...o
          } = e;
          return (0, u.jsx)(Ce.sG.div, {
            "data-radix-toast-announce-exclude": "",
            "data-radix-toast-announce-alt": n || void 0,
            ...o,
            ref: t
          })
        }, "ToastAnnounceExclude"));

      function Nl(e) {
        const t = [];
        return Array.from(e.childNodes).forEach(e => {
          if (e.nodeType === e.TEXT_NODE && e.textContent && t.push(e.textContent), Tl(e)) {
            const r = e.ariaHidden || e.hidden || "none" === e.style.display,
              n = "" === e.dataset.radixToastAnnounceExclude;
            if (!r)
              if (n) {
                const r = e.dataset.radixToastAnnounceAlt;
                r && t.push(r)
              } else t.push(...Nl(e))
          }
        }), t
      }

      function El(e, t, r, {
        discrete: n
      }) {
        const o = r.originalEvent.currentTarget,
          a = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: r
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), n ? (0, Ce.hO)(o, a) : o.dispatchEvent(a)
      }
      il(Nl, "getAnnounceTextContent"), il(El, "handleAndDispatchCustomEvent");
      var kl = il((e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          a = n > o;
        return "left" === t || "right" === t ? a && n > r : !a && o > r
      }, "isDeltaInDirection");

      function Il(e = () => {}) {
        const t = (0, xe.c)(e);
        (0, Xe.N)(() => {
          let e = 0,
            r = 0;
          return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
            window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
          }
        }, [t])
      }

      function Tl(e) {
        return e.nodeType === e.ELEMENT_NODE
      }

      function Vl(e) {
        const t = [],
          r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: il(e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }, "acceptNode")
          });
        for (; r.nextNode();) t.push(r.currentNode);
        return t
      }

      function zl(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      il(Il, "useNextFrame"), il(Tl, "isHTMLElement"), il(Vl, "getTabbableCandidates"), il(zl, "focusFirst");
      var Ll = bl,
        Al = Cl,
        Ml = Pl,
        Fl = Sl,
        Hl = Dl;

      function ql(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Bl(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Xl(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Bl(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = ql(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bl(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Gl(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Kl = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ul = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Xl(Xl({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Kl(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Gl(e.variantClassNames, e => Gl(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Zl = Ul({
          defaultClassName: "foundry_dnh2nzk",
          variantClassNames: {
            appearance: {
              danger: "foundry_dnh2nzl",
              information: "foundry_dnh2nzm",
              warning: "foundry_dnh2nzn",
              success: "foundry_dnh2nzo",
              avocado: "foundry_dnh2nzp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Wl = Ul({
          defaultClassName: "foundry_dnh2nzd foundry_1d5mo5m0",
          variantClassNames: {
            appearance: {
              danger: "foundry_dnh2nze",
              information: "foundry_dnh2nzf",
              warning: "foundry_dnh2nzg",
              success: "foundry_dnh2nzh",
              avocado: "foundry_dnh2nzi"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Yl = Ul({
          defaultClassName: "foundry_dnh2nz8 foundry_8kowh41",
          variantClassNames: {
            position: {
              topLeft: "foundry_dnh2nz9",
              topRight: "foundry_dnh2nza",
              bottomLeft: "foundry_dnh2nzb",
              bottomRight: "foundry_dnh2nzc"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      (0, f.forwardRef)(({
        children: e,
        testId: t,
        position: r = "bottomRight",
        ...n
      }, o) => {
        const a = (0, x.v6)({
          className: Yl({
            position: r
          })
        }, n);
        return (0, u.jsx)(Ll, {
          ref: o,
          "data-testid": t,
          ...a,
          children: e
        })
      });
      const Ql = (0, f.createContext)(null);
      (0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        appearance: n = "success",
        ...o
      }, a) => {
        const s = e ? p.DX : Al,
          i = (0, x.v6)({
            className: Wl({
              appearance: n
            })
          }, o);
        return (0, u.jsx)(Ql.Provider, {
          value: {
            appearance: n
          },
          children: (0, u.jsx)(s, {
            ref: a,
            "data-testid": r,
            ...i,
            children: t
          })
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = e ? p.DX : Ml,
          s = (0, x.v6)({
            className: "foundry_dnh2nzj foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }, n);
        return (0, u.jsx)(a, {
          ref: o,
          "data-testid": r,
          ...s,
          children: t
        })
      });
      const $l = {
        danger: ce.RT,
        information: ce.R2,
        success: ce.rW,
        warning: ce.lW,
        avocado: ce.rW
      };
      (0, f.forwardRef)(({
        asChild: e,
        ...t
      }, r) => {
        const {
          appearance: n
        } = function() {
          const e = (0, f.useContext)(Ql);
          if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
          return e
        }(), o = e ? p.DX : $l[n], a = (0, x.v6)({
          className: Zl({
            appearance: n
          }),
          size: "LG"
        }, t);
        return (0, u.jsx)(o, {
          ref: r,
          ...a
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = (0, x.v6)({
          className: "foundry_dnh2nzq",
          asChild: !0
        }, n);
        return (0, u.jsx)(Fl, {
          ref: o,
          "data-testid": r,
          ...a,
          children: e ? (0, u.jsx)(p.DX, {
            children: t
          }) : (0, u.jsx)(d.$, {
            size: "MD",
            appearance: "link",
            children: t
          })
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        label: n,
        ...o
      }, a) => {
        const s = (0, x.v6)({
          className: "foundry_dnh2nzr",
          asChild: !0
        }, o);
        return (0, u.jsx)(Hl, {
          ref: a,
          "data-testid": r,
          ...s,
          children: e ? (0, u.jsx)(p.DX, {
            children: t
          }) : (0, u.jsx)(_d, {
            size: "SM",
            label: n
          })
        })
      });
      var Jl = r(20179);

      function eu(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function tu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ru(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? tu(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = eu(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tu(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function nu(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ou = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        au = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ru(ru({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) ou(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return nu(e.variantClassNames, e => nu(e, e => e.split(" ")[0]))
            }
          }, t
        },
        su = au({
          defaultClassName: "foundry_m1icrx6 foundry_1d5mo5m0",
          variantClassNames: {
            size: {
              MD: "foundry_m1icrx7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
              LG: "foundry_m1icrx8 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        iu = au({
          defaultClassName: "foundry_m1icrx3",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
              LG: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        du = au({
          defaultClassName: "foundry_m1icrx0",
          variantClassNames: {
            size: {
              MD: "foundry_m1icrx1",
              LG: "foundry_m1icrx2"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });

      function lu() {
        const e = (0, f.useContext)(uu);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const uu = (0, f.createContext)(null);

      function cu(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function fu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function pu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? fu(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = cu(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fu(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function vu(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, f.forwardRef)(({
        children: e,
        testId: t,
        asChild: r,
        size: n = "MD",
        ...o
      }, a) => {
        const s = (0, x.v6)({
            className: du({
              size: n
            })
          }, o),
          i = r ? p.DX : "ol";
        return (0, u.jsx)(uu.Provider, {
          value: {
            size: n
          },
          children: (0, u.jsx)(i, {
            ref: a,
            "data-testid": t,
            ...s,
            children: e
          })
        })
      }), (0, f.forwardRef)(({
        isCurrent: e,
        children: t,
        asChild: r,
        testId: n,
        ...o
      }, a) => {
        const s = (0, f.useRef)(null),
          {
            size: i
          } = lu(),
          {
            itemProps: d
          } = (0, Jl.I)({
            isCurrent: e,
            children: t
          }, s),
          l = r ? p.DX : "a",
          v = (0, x.v6)({
            className: (0, c.$)(su({
              size: i
            }), e && "foundry_m1icrx9"),
            "data-testid": n
          }, d, o);
        return (0, u.jsx)("li", {
          className: iu({
            size: i
          }),
          ref: a,
          children: (0, u.jsx)(l, {
            ref: s,
            ...v,
            children: t
          })
        })
      }), (0, f.forwardRef)(({
        icon: e,
        ...t
      }, r) => {
        const n = fe[e];
        return (0, u.jsx)(n, {
          ref: r,
          size: "LG",
          ...t
        })
      }), (0, f.forwardRef)(({
        children: e,
        testId: t,
        defaultOpen: r = !1,
        label: n,
        ...o
      }, a) => {
        const [s, i] = (0, f.useState)(r), {
          size: d
        } = lu(), l = (0, x.v6)({
          className: iu({
            size: d
          }),
          "data-testid": t
        }, o);
        return (0, u.jsx)("li", {
          ref: a,
          ...l,
          children: (0, u.jsxs)(Na, {
            open: s,
            onOpenChange: () => i(!s),
            children: [(0, u.jsx)(Ea, {
              className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
              "aria-label": n,
              children: "..."
            }), (0, u.jsx)(za, {
              children: (0, u.jsx)(Aa, {
                position: "popper",
                sideOffset: 8,
                align: "start",
                className: "foundry_m1icrxb",
                children: (0, u.jsx)(Ya, {
                  className: "foundry_m1icrxc",
                  children: e
                })
              })
            })]
          })
        })
      }), (0, f.forwardRef)(({
        children: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const a = t ? p.DX : rs,
          s = (0, x.v6)({
            className: "foundry_m1icrxd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
            "data-testid": r
          }, n);
        return (0, u.jsx)(a, {
          ref: o,
          ...s,
          children: e
        })
      });
      var yu = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        mu = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = pu(pu({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) yu(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vu(e.variantClassNames, e => vu(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_18omk9t1",
          variantClassNames: {
            appearance: {
              primary: "foundry_18omk9t2",
              secondary: "foundry_18omk9t3",
              tertiary: "foundry_18omk9t4"
            },
            size: {
              SM: "foundry_18omk9t5 foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdt foundry_tdsdcdq",
              MD: "foundry_18omk9t6 foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdt foundry_tdsdcdp"
            },
            type: {
              text: "foundry_18omk9t7",
              number: "foundry_18omk9t8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const hu = (0, f.createContext)(null);
      (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "primary",
        size: n = "SM",
        type: o = "text",
        ...a
      }, s) => {
        const i = e ? p.DX : "div",
          d = (0, x.v6)({
            className: mu({
              appearance: r,
              type: o,
              size: n
            })
          }, a);
        return (0, u.jsx)(hu.Provider, {
          value: {
            type: o
          },
          children: (0, u.jsx)(i, {
            ref: s,
            "data-testid": t,
            ...d
          })
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? p.DX : "div",
          a = (0, x.v6)({
            className: "foundry_18omk9t9",
            "data-testid": t
          }, r);
        return (0, u.jsx)(o, {
          ref: n,
          ...a
        })
      }), (0, f.forwardRef)(({
        icon: e,
        iconElement: t,
        label: r,
        ...n
      }, o) => {
        const a = t || (e ? fe[e] : null),
          s = (0, x.v6)({
            size: "SM",
            className: "foundry_18omk9t0",
            label: r || ""
          }, n);
        return a && (0, u.jsx)(a, {
          ref: o,
          ...s
        })
      });
      const bu = () => {
          const e = (0, Z.Ub)(x.fi.mobile);
          return t => e ? {
            transform: `translate(0,${100-t}%)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        gu = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function wu(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Cu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function xu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Cu(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = wu(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cu(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function _u(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ju = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ou = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = xu(xu({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) ju(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return _u(e.variantClassNames, e => _u(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_hwzz174",
          variantClassNames: {
            isTouchDevice: {
              true: "foundry_hwzz175"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Pu = (0, f.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, x.v6)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, t);
          return (0, u.jsx)(la, {
            ref: r,
            ...n
          })
        }),
        Su = (0, f.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, x.v6)({
            "data-testid": e,
            className: "foundry_hwzz172"
          }, t);
          return (0, u.jsx)(ua, {
            ref: r,
            ...n
          })
        }),
        Du = (0, f.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, x.v6)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, t);
          return (0, u.jsx)(ca, {
            ref: r,
            ...n
          })
        }),
        Ru = (0, f.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, Z.rl)(),
            o = (0, x.v6)({
              "data-testid": e,
              className: Ou({
                isTouchDevice: n
              })
            }, t);
          return (0, u.jsx)(fa, {
            ref: r,
            ...o
          })
        });

      function Nu(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Eu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ku(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Eu(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Nu(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Eu(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Iu(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, f.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const n = (0, x.v6)({
          "data-testid": e
        }, t);
        return (0, u.jsx)(pa, {
          ref: r,
          ...n
        })
      });
      var Tu = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Vu = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ku(ku({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Tu(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Iu(e.variantClassNames, e => Iu(e, e => e.split(" ")[0]))
            }
          }, t
        },
        zu = Vu({
          defaultClassName: "foundry_xov33n6",
          variantClassNames: {
            align: {
              left: "foundry_xov33n7",
              center: "foundry_xov33n8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Lu = Vu({
          defaultClassName: "foundry_xov33na",
          variantClassNames: {
            appearance: {
              sentence: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8",
              uppercase: "foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdo foundry_tdsdcdt"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Au = (0, f.createContext)({
        isControlled: !1,
        openImmediately: !1,
        setIsOpen: () => {},
        contentId: "",
        descriptionId: "",
        triggerRef: (0, f.createRef)(),
        dialogSpringRef: (0, he.SpringRef)(),
        overlaySpringRef: (0, he.SpringRef)()
      });
      (0, f.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const {
          contentId: n,
          triggerRef: o
        } = (0, f.useContext)(Au), a = (0, Z.UP)(o, r), s = (0, x.v6)({
          "data-testid": e,
          className: "foundry_8kowh41",
          type: "button",
          "aria-controls": n
        }, t);
        return (0, u.jsx)(Kn, {
          ...s,
          ref: a
        })
      }), (0, f.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const {
          isOpen: n,
          overlaySpringRef: o,
          openImmediately: a
        } = (0, f.useContext)(Au), s = gu(), i = (0, Z.jt)(), d = (0, he.useTransition)(n, {
          ref: o,
          delay: n ? 0 : 100,
          from: s(0),
          enter: s(100),
          leave: s(0),
          config: he.config.stiff,
          immediate: i || a
        }), l = (0, x.v6)({
          "data-testid": e,
          className: "foundry_xov33n1"
        }, t), c = (0, he.animated)(Yn);
        return (0, f.useEffect)(() => {
          o.start()
        }, [n]), d((e, t) => t ? (0, u.jsx)(c, {
          forceMount: !0,
          ref: r,
          ...l,
          style: e
        }) : null)
      }), (0, f.forwardRef)(({
        children: e,
        testId: t,
        onCloseAutoFocus: r,
        disableDrag: n = !1,
        ...o
      }, a) => {
        const {
          isOpen: s,
          setIsOpen: i,
          openImmediately: d,
          contentId: l,
          triggerRef: c,
          onOpenTransitionStart: p,
          onOpenTransitionComplete: v,
          onCloseTransitionStart: y,
          onCloseTransitionComplete: m,
          dialogSpringRef: h,
          overlaySpringRef: b
        } = (0, f.useContext)(Au), g = (0, Z.rl)(), w = (0, Z.jt)(), C = (0, f.useRef)(null), _ = bu(), {
          bindDrag: j
        } = function({
          dialogRef: e,
          dialogSpringRef: t,
          overlaySpringRef: r,
          onCloseTransitionStart: n,
          onCloseTransitionComplete: o
        }) {
          const a = gu(),
            s = bu(),
            i = (0, f.useRef)();
          return {
            bindDrag: (0, Q.useDrag)(({
              velocity: [, d],
              offset: [, l],
              direction: [, u],
              cancel: c,
              last: f,
              first: p,
              target: v
            }) => {
              const {
                height: y
              } = e.current.getBoundingClientRect();
              if (p && (i.current = function(e, t) {
                  for (; e;) {
                    if (e.scrollHeight > e.clientHeight) {
                      if (0 !== e.scrollTop) return !1;
                      if (t < 0) return !1;
                      if ("dialog" === e.getAttribute("role")) return !0
                    }
                    e = e.parentNode
                  }
                }(v, u)), (!i.current || l < -70) && c(), i.current) {
                const e = 100 * (y - l) / y;
                r.start({
                  ...a(e),
                  immediate: !0
                }), t.start({
                  ...s(e),
                  immediate: !0
                })
              }
              f && (l > .5 * y || d > .5 && u > 0 ? (t.start({
                ...s(0),
                immediate: !1,
                config: he.config.stiff,
                onStart: n,
                onRest: o
              }), r.start({
                ...a(0),
                immediate: !1,
                config: he.config.stiff
              })) : (t.start({
                ...s(100),
                immediate: !1,
                config: he.config.stiff
              }), r.start({
                ...a(100),
                immediate: !1,
                config: he.config.stiff
              })))
            }, {
              from: () => [0, 0],
              filterTaps: !1,
              bounds: {
                top: 0
              },
              rubberband: !0,
              pointer: {
                touch: !0
              },
              axis: "y"
            })
          }
        }({
          dialogRef: C,
          overlaySpringRef: b,
          dialogSpringRef: h,
          onCloseTransitionStart: () => {
            i(!1), y?.()
          },
          onCloseTransitionComplete: m
        }), O = (0, he.useTransition)(s, {
          from: _(0),
          enter: _(100),
          leave: _(0),
          delay: s ? 100 : 0,
          config: he.config.stiff,
          ref: h,
          immediate: w || d,
          onStart: (e, t, r) => {
            r ? p?.() : y?.()
          },
          onRest: (e, t, r) => {
            r ? v?.() : m?.()
          }
        });
        (0, f.useEffect)(() => {
          h.start()
        }, [s]);
        const P = (0, Z.UP)(C, a),
          S = g && !w && !n && j(),
          D = (0, x.v6)({
            "data-testid": t,
            className: "foundry_xov33nd",
            onCloseAutoFocus: e => {
              r?.(e), e.defaultPrevented || c.current?.focus()
            },
            id: l
          }, S || {}, o),
          R = (0, he.animated)(eo);
        return O((t, r) => r ? (0, u.jsx)("div", {
          className: "foundry_xov33n3",
          children: (0, u.jsx)(R, {
            forceMount: !0,
            ref: P,
            ...D,
            style: t,
            children: e
          })
        }) : null)
      }), (0, f.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const n = (0, x.v6)({
          "data-testid": e,
          className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
        }, t);
        return (0, u.jsx)(oo, {
          ref: r,
          ...n
        })
      }), (0, f.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const n = (0, x.v6)({
          "data-testid": e
        }, t);
        return (0, u.jsx)(ao, {
          ref: r,
          ...n
        })
      }), (0, f.forwardRef)(({
        children: e,
        testId: t,
        ...r
      }, n) => {
        const o = (0, x.v6)({
          className: "foundry_xov33nh",
          "data-testid": t
        }, r);
        return (0, u.jsxs)(Pu, {
          ref: n,
          ...o,
          children: [(0, u.jsx)(Su, {
            className: "foundry_xov33ni",
            children: e
          }), (0, u.jsx)(Du, {
            className: "foundry_xov33nj",
            orientation: "vertical",
            children: (0, u.jsx)(Ru, {
              className: "foundry_xov33nk"
            })
          })]
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = (0, x.v6)({
            "data-testid": t,
            className: "foundry_xov33ne"
          }, r),
          a = e ? p.DX : "div";
        return (0, u.jsx)(a, {
          ref: n,
          ...o
        })
      }), (0, f.forwardRef)(({
        align: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const a = (0, x.v6)({
            "data-testid": r,
            className: zu({
              align: e
            })
          }, n),
          s = t ? p.DX : "header";
        return (0, u.jsx)(s, {
          ref: o,
          ...a
        })
      }), (0, f.forwardRef)(({
        testId: e,
        appearance: t = "sentence",
        ...r
      }, n) => {
        const o = (0, x.v6)({
          "data-testid": e,
          className: Lu({
            appearance: t
          })
        }, r);
        return (0, u.jsx)(oo, {
          ref: n,
          ...o
        })
      }), (0, f.forwardRef)((e, t) => {
        const r = (0, x.v6)({
          className: "foundry_xov33n4"
        }, e);
        return (0, u.jsx)(l.K, {
          ref: t,
          ...r,
          appearance: "ghost",
          size: "LG"
        })
      }), (0, f.forwardRef)(({
        testId: e,
        asChild: t,
        ...r
      }, n) => {
        const o = (0, x.v6)({
            "data-testid": e,
            className: "foundry_xov33n9"
          }, r),
          a = t ? (0, u.jsx)(p.DX, {
            ref: n,
            ...o
          }) : (0, u.jsx)(_d, {
            ref: n,
            ...o,
            size: "LG"
          });
        return (0, u.jsx)(so, {
          asChild: !0,
          children: a
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = (0, x.v6)({
            "data-testid": t,
            className: "foundry_xov33nf"
          }, r),
          a = e ? p.DX : "div";
        return (0, u.jsx)(a, {
          ref: n,
          ...o
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = (0, x.v6)({
            "data-testid": t,
            className: "foundry_xov33ng"
          }, r),
          a = e ? p.DX : "footer";
        return (0, u.jsx)(a, {
          ref: n,
          ...o
        })
      });
      var Mu = r(76733),
        Fu = Object.defineProperty,
        Hu = (e, t) => Fu(e, "name", {
          value: t,
          configurable: !0
        }),
        qu = "Avatar",
        [Bu, Xu] = (0, we.A)(qu),
        Gu = [0, () => {}],
        [Ku, Uu] = Bu(qu),
        Zu = f.forwardRef(Hu(function(e, t) {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, a] = f.useState("idle"), [s, i] = $u();
          return (0, u.jsx)(Ku, {
            scope: r,
            imageLoadingStatus: o,
            setImageLoadingStatus: a,
            imageCount: s,
            setImageCount: i,
            children: (0, u.jsx)(Ce.sG.span, {
              ...n,
              ref: t
            })
          })
        }, "Avatar")),
        Wu = f.forwardRef(Hu(function(e, t) {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o,
            ...a
          } = e, s = Uu("AvatarImage", r);
          Ju(s.setImageCount);
          const i = Yu(n, {
              referrerPolicy: a.referrerPolicy,
              crossOrigin: a.crossOrigin,
              loadingStatus: s.imageLoadingStatus,
              setLoadingStatus: s.setImageLoadingStatus
            }),
            d = (0, xe.c)(e => {
              o?.(e)
            }),
            l = f.useRef(i);
          return (0, Xe.N)(() => {
            const e = l.current;
            l.current = i, i !== e && d(i)
          }, [i, d]), "loaded" === i ? (0, u.jsx)(Ce.sG.img, {
            ...a,
            ref: t,
            src: n
          }) : null
        }, "AvatarImage"));

      function Yu(e, {
        loadingStatus: t,
        setLoadingStatus: r,
        referrerPolicy: n,
        crossOrigin: o
      }) {
        return (0, Xe.N)(() => {
          if (!e) return void r("error");
          const t = new window.Image,
            a = Hu(e => {
              const t = e.currentTarget;
              r(Qu(t))
            }, "handleLoad"),
            s = Hu(() => r("error"), "handleError");
          return t.addEventListener("load", a), t.addEventListener("error", s), n && (t.referrerPolicy = n), t.crossOrigin = o ?? null, t.src = e, r(Qu(t)), () => {
            t.removeEventListener("load", a), t.removeEventListener("error", s), r("idle")
          }
        }, [e, o, n, r]), t
      }

      function Qu(e) {
        return e.complete ? e.naturalWidth > 0 ? "loaded" : "error" : "loading"
      }

      function $u() {
        let e = Gu;
        if (Mu.D) {
          e = f.useState(0);
          const [t] = e, r = f.useRef(!1);
          f.useEffect(() => {
            t > 1 && !r.current && (r.current = !0, console.warn("Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."))
          }, [t])
        }
        return e
      }

      function Ju(e) {
        Mu.D && f.useEffect(() => (e(e => e + 1), () => {
          e(e => e - 1)
        }), [e])
      }

      function ec(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function tc(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function rc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? tc(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = ec(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tc(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function nc(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      Hu(Yu, "useImageLoadingStatus"), Hu(Qu, "getImageLoadingStatus"), Hu($u, "useImageCount"), Hu(Ju, "useUpdateImageCount");
      var oc = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ac = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = rc(rc({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) oc(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return nc(e.variantClassNames, e => nc(e, e => e.split(" ")[0]))
            }
          }, t
        },
        sc = ac({
          defaultClassName: "foundry_v912w24 foundry_8kowh41",
          variantClassNames: {
            isDisabled: {
              true: "foundry_v912w25",
              false: "foundry_v912w26"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ic = "var(--foundry_v912w22)",
        dc = "var(--foundry_v912w23)",
        lc = ac({
          defaultClassName: "foundry_v912w2i",
          variantClassNames: {
            isDisabled: {
              true: "foundry_v912w2j",
              false: "foundry_v912w2k"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        uc = ac({
          defaultClassName: "foundry_v912w27",
          variantClassNames: {
            size: {
              XS: "foundry_v912w28",
              SM: "foundry_v912w29",
              MD: "foundry_v912w2a",
              LG: "foundry_v912w2b",
              XL: "foundry_v912w2c"
            },
            isDisabled: {
              true: "foundry_v912w2d",
              false: "foundry_v912w2e"
            },
            isFallback: {
              true: "foundry_v912w2f",
              false: "foundry_v912w2g"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isDisabled: !0,
              isFallback: !0
            }, "foundry_v912w2h"]
          ]
        }),
        cc = "var(--foundry_v912w21)",
        fc = "var(--foundry_v912w20)",
        pc = ac({
          defaultClassName: "foundry_v912w2l",
          variantClassNames: {
            status: {
              online: "foundry_v912w2m",
              offline: "foundry_v912w2n",
              away: "foundry_v912w2o",
              busy: "foundry_v912w2p"
            },
            size: {
              XS: "foundry_v912w2q",
              SM: "foundry_v912w2r",
              MD: "foundry_v912w2s",
              LG: "foundry_v912w2t",
              XL: "foundry_v912w2u"
            },
            isDisabled: {
              true: "foundry_v912w2v",
              false: "foundry_v912w2w"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const vc = (0, f.createContext)(null);

      function yc() {
        const e = (0, f.useContext)(vc);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }

      function mc(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function hc(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function bc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? hc(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = mc(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hc(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function gc(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        size: n,
        status: o,
        isDisabled: a = !1,
        ...s
      }, i) => {
        const d = (0, x.v6)({
          "data-testid": r,
          "aria-disabled": a,
          className: sc({
            isDisabled: a
          }),
          asChild: e
        }, s);
        return (0, u.jsx)(vc.Provider, {
          value: {
            size: n,
            status: o,
            isDisabled: a
          },
          children: (0, u.jsx)(Zu, {
            ref: i,
            ...d,
            children: t
          })
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        src: r,
        ...n
      }, o) => {
        const {
          size: a,
          isDisabled: s
        } = yc(), [i, d] = (0, f.useState)(!1);
        (0, f.useEffect)(() => {
          d(!1)
        }, [r]);
        const l = i || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
          c = (0, x.v6)({
            className: lc({
              isDisabled: s
            }),
            src: l,
            onLoadingStatusChange: e => {
              "error" === e && d(!0)
            },
            asChild: e
          }, n);
        return (0, u.jsx)("span", {
          className: uc({
            size: a,
            isDisabled: s,
            isFallback: i
          }),
          "data-testid": t,
          "aria-hidden": !0,
          children: (0, u.jsx)(Wu, {
            ref: o,
            ...c
          })
        })
      }), (0, f.forwardRef)(({
        testId: e,
        colorOverride: t,
        ...r
      }, n) => {
        const o = (0, f.useRef)(null),
          {
            size: a,
            status: s,
            isDisabled: i
          } = yc(),
          d = s || "online",
          l = (0, Z.UP)(o, n),
          c = (0, x.v6)({
            "data-testid": e,
            "aria-hidden": !0,
            className: pc({
              status: d,
              size: a,
              isDisabled: i
            }),
            style: (0, _.DI)({
              [fc]: t?.online,
              [cc]: t?.offline,
              [ic]: t?.away,
              [dc]: t?.busy
            })
          }, r);
        return (0, u.jsx)("span", {
          ref: l,
          ...c
        })
      });
      var wc = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Cc = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = bc(bc({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) wc(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gc(e.variantClassNames, e => gc(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_2jlbzt2 foundry_8kowh41 foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            isActive: {
              true: "foundry_2jlbzt3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      (0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = (0, x.v6)({
            "data-testid": r,
            className: "foundry_2jlbzt0"
          }, n),
          s = e ? p.DX : "nav";
        return (0, u.jsx)(s, {
          ref: o,
          ...a,
          children: t
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = (0, x.v6)({
            role: "list",
            "data-testid": r,
            className: "foundry_2jlbzt1"
          }, n),
          s = e ? p.DX : "div";
        return (0, u.jsx)(s, {
          ref: o,
          ...a,
          children: t
        })
      });
      const xc = (0, f.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, f.useRef)(null),
            i = (0, Z.UP)(s, a),
            {
              linkProps: d,
              isPressed: l
            } = (0, yd.i)(o, s),
            v = (0, x.v6)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": l,
              "data-active": r,
              className: (0, c.$)(Cc({
                isActive: r
              }))
            }, d),
            y = e ? p.DX : "a";
          return (0, u.jsx)(y, {
            ref: i,
            ...v,
            children: t
          })
        }),
        _c = ((0, f.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, x.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, u.jsx)(xc, {
            ref: n,
            ...o,
            children: (0, u.jsx)(ce.JG, {
              size: "LG",
              label: e
            })
          })
        }), (0, f.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, x.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, u.jsx)(xc, {
            ref: n,
            ...o,
            children: (0, u.jsx)(ce.c_, {
              size: "LG",
              label: e
            })
          })
        }), (0, f.createContext)(null));

      function jc() {
        const e = (0, f.useContext)(_c);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }(0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const {
          labelId: a
        } = jc(), s = (0, x.v6)({
          "data-testid": r,
          className: "foundry_2jlbzt9 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
        }, n), i = e ? p.DX : "label";
        return (0, u.jsx)(i, {
          ref: o,
          id: a,
          ...s,
          children: t
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        children: t,
        placeholder: r,
        ...n
      }, o) => {
        const {
          labelId: a
        } = jc(), s = (0, x.v6)({
          "aria-labelledby": a,
          className: "foundry_2jlbztc"
        }, n), i = e ? p.DX : Os;
        return (0, u.jsxs)(i, {
          ...s,
          children: [(0, u.jsxs)(Rs, {
            ref: o,
            children: [(0, u.jsx)(Ns, {
              placeholder: r
            }), (0, u.jsx)(Es, {})]
          }), (0, u.jsx)(Vs, {
            children: (0, u.jsx)(Ps, {
              children: (0, u.jsx)(Ds, {
                children: t
              })
            })
          })]
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = (0, x.v6)({
            "data-testid": r
          }, n),
          s = e ? p.DX : Is;
        return (0, u.jsx)(s, {
          ...a,
          ref: o,
          children: (0, u.jsx)(Ts, {
            children: t
          })
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const a = (0, x.v6)({
            "data-testid": r,
            className: "foundry_2jlbzta foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
          }, n),
          s = e ? p.DX : "p";
        return (0, u.jsx)(s, {
          ref: o,
          ...a,
          children: t
        })
      });
      var Oc = r(25298),
        Pc = Object.defineProperty,
        Sc = (e, t) => Pc(e, "name", {
          value: t,
          configurable: !0
        }),
        Dc = "rovingFocusGroup.onEntryFocus",
        Rc = {
          bubbles: !1,
          cancelable: !0
        },
        Nc = "RovingFocusGroup",
        [Ec, kc, Ic] = Cr(Nc),
        [Tc, Vc] = (0, we.A)(Nc, [Ic]),
        [zc, Lc] = Tc(Nc),
        Ac = f.forwardRef(Sc(function(e, t) {
          return (0, u.jsx)(Ec.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, u.jsx)(Ec.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, u.jsx)(Mc, {
                ...e,
                ref: t
              })
            })
          })
        }, "RovingFocusGroup")),
        Mc = f.forwardRef(Sc(function(e, t) {
          const {
            __scopeRovingFocusGroup: r,
            orientation: n,
            loop: o = !1,
            dir: a,
            currentTabStopId: s,
            defaultCurrentTabStopId: i,
            onCurrentTabStopIdChange: d,
            onEntryFocus: l,
            preventScrollOnEntryFocus: c = !1,
            ...p
          } = e, v = f.useRef(null), y = (0, ge.s)(t, v), m = (0, hr.jH)(a), [h, b] = (0, Dt.i)({
            prop: s,
            defaultProp: i ?? null,
            onChange: d,
            caller: Nc
          }), [g, w] = f.useState(!1), C = (0, xe.c)(l), x = kc(r), _ = f.useRef(!1), [j, O] = f.useState(0);
          return f.useEffect(() => {
            const e = v.current;
            if (e) return e.addEventListener(Dc, C), () => e.removeEventListener(Dc, C)
          }, [C]), (0, u.jsx)(zc, {
            scope: r,
            orientation: n,
            dir: m,
            loop: o,
            currentTabStopId: h,
            onItemFocus: f.useCallback(e => b(e), [b]),
            onItemShiftTab: f.useCallback(() => w(!0), []),
            onFocusableItemAdd: f.useCallback(() => O(e => e + 1), []),
            onFocusableItemRemove: f.useCallback(() => O(e => e - 1), []),
            children: (0, u.jsx)(Ce.sG.div, {
              tabIndex: g || 0 === j ? -1 : 0,
              "data-orientation": n,
              ...p,
              ref: y,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, be.mK)(e.onMouseDown, () => {
                _.current = !0
              }),
              onFocus: (0, be.mK)(e.onFocus, e => {
                const t = !_.current;
                if (e.target === e.currentTarget && t && !g) {
                  const t = new CustomEvent(Dc, Rc);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = x().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      r = e.find(e => e.id === h),
                      n = [t, r, ...e].filter(Boolean).map(e => e.ref.current);
                    Xc(n, c)
                  }
                }
                _.current = !1
              }),
              onBlur: (0, be.mK)(e.onBlur, () => w(!1))
            })
          })
        }, "RovingFocusGroupImpl")),
        Fc = f.forwardRef(Sc(function(e, t) {
          const {
            __scopeRovingFocusGroup: r,
            focusable: n = !0,
            active: o = !1,
            tabStopId: a,
            children: s,
            ...i
          } = e, d = (0, Le.B)(), l = a || d, c = Lc("RovingFocusGroupItem", r), p = c.currentTabStopId === l, v = kc(r), {
            onFocusableItemAdd: y,
            onFocusableItemRemove: m,
            currentTabStopId: h
          } = c, b = (0, Oc.z)();
          return (0, Xe.N)(() => {
            if (b && n) return y(), () => m()
          }, [b, n, y, m]), f.useEffect(() => {
            if (!b && n) return y(), () => m()
          }, [b, n, y, m]), (0, u.jsx)(Ec.ItemSlot, {
            scope: r,
            id: l,
            focusable: n,
            active: o,
            children: (0, u.jsx)(Ce.sG.span, {
              tabIndex: p ? 0 : -1,
              "data-orientation": c.orientation,
              ...i,
              ref: t,
              onMouseDown: (0, be.mK)(e.onMouseDown, e => {
                n ? c.onItemFocus(l) : e.preventDefault()
              }),
              onFocus: (0, be.mK)(e.onFocus, () => c.onItemFocus(l)),
              onKeyDown: (0, be.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void c.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const t = Bc(e, c.orientation, c.dir);
                if (void 0 !== t) {
                  if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                  e.preventDefault();
                  const r = v().filter(e => e.focusable);
                  let n = r.map(e => e.ref.current);
                  if ("last" === t) n.reverse();
                  else if ("prev" === t || "next" === t) {
                    "prev" === t && n.reverse();
                    const r = n.indexOf(e.currentTarget);
                    n = c.loop ? Gc(n, r + 1) : n.slice(r + 1)
                  }
                  setTimeout(() => Xc(n))
                }
              }),
              children: "function" == typeof s ? s({
                isCurrentTabStop: p,
                hasTabStop: null != h
              }) : s
            })
          })
        }, "RovingFocusGroupItem")),
        Hc = {
          ArrowLeft: "prev",
          ArrowUp: "prev",
          ArrowRight: "next",
          ArrowDown: "next",
          PageUp: "first",
          Home: "first",
          PageDown: "last",
          End: "last"
        };

      function qc(e, t) {
        return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
      }

      function Bc(e, t, r) {
        const n = qc(e.key, r);
        if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(n) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(n))) return Hc[n]
      }

      function Xc(e, t = !1) {
        const r = document.activeElement;
        for (const n of e) {
          if (n === r) return;
          if (n.focus({
              preventScroll: t
            }), document.activeElement !== r) return
        }
      }

      function Gc(e, t) {
        return e.map((r, n) => e[(t + n) % e.length])
      }
      Sc(qc, "getDirectionAwareKey"), Sc(Bc, "getFocusIntent"), Sc(Xc, "focusFirst"), Sc(Gc, "wrapArray");
      var Kc = Ac,
        Uc = Fc,
        Zc = Object.defineProperty,
        Wc = (e, t) => Zc(e, "name", {
          value: t,
          configurable: !0
        }),
        Yc = f.forwardRef(Wc(function(e, t) {
          const {
            pressed: r,
            defaultPressed: n,
            onPressedChange: o,
            ...a
          } = e, [s, i] = (0, Dt.i)({
            prop: r,
            onChange: o,
            defaultProp: n ?? !1,
            caller: "Toggle"
          });
          return (0, u.jsx)(Ce.sG.button, {
            type: "button",
            "aria-pressed": s,
            "data-state": s ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...a,
            ref: t,
            onClick: (0, be.mK)(e.onClick, () => {
              e.disabled || i(!s)
            })
          })
        }, "Toggle")),
        Qc = Object.defineProperty,
        $c = (e, t) => Qc(e, "name", {
          value: t,
          configurable: !0
        }),
        Jc = "ToggleGroup",
        [ef, tf] = (0, we.A)(Jc, [Vc]),
        rf = Vc(),
        nf = f.forwardRef($c(function(e, t) {
          const {
            type: r,
            ...n
          } = e;
          if ("single" === r) {
            const e = n;
            return (0, u.jsx)(sf, {
              role: "radiogroup",
              ...e,
              ref: t
            })
          }
          if ("multiple" === r) {
            const e = n;
            return (0, u.jsx)(df, {
              role: "toolbar",
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${Jc}\``)
        }, "ToggleGroup")),
        [of, af] = ef(Jc),
        sf = f.forwardRef($c(function(e, t) {
          const {
            value: r,
            defaultValue: n,
            onValueChange: o = $c(() => {}, "onValueChange"),
            ...a
          } = e, [s, i] = (0, Dt.i)({
            prop: r,
            defaultProp: n ?? "",
            onChange: o,
            caller: Jc
          });
          return (0, u.jsx)(of, {
            scope: e.__scopeToggleGroup,
            type: "single",
            value: f.useMemo(() => s ? [s] : [], [s]),
            onItemActivate: i,
            onItemDeactivate: f.useCallback(() => i(""), [i]),
            children: (0, u.jsx)(cf, {
              ...a,
              ref: t
            })
          })
        }, "ToggleGroupImplSingle")),
        df = f.forwardRef($c(function(e, t) {
          const {
            value: r,
            defaultValue: n,
            onValueChange: o = $c(() => {}, "onValueChange"),
            ...a
          } = e, [s, i] = (0, Dt.i)({
            prop: r,
            defaultProp: n ?? [],
            onChange: o,
            caller: Jc
          }), d = f.useCallback(e => i((t = []) => [...t, e]), [i]), l = f.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
          return (0, u.jsx)(of, {
            scope: e.__scopeToggleGroup,
            type: "multiple",
            value: s,
            onItemActivate: d,
            onItemDeactivate: l,
            children: (0, u.jsx)(cf, {
              ...a,
              ref: t
            })
          })
        }, "ToggleGroupImplMultiple")),
        [lf, uf] = ef(Jc),
        cf = f.forwardRef($c(function(e, t) {
          const {
            __scopeToggleGroup: r,
            disabled: n = !1,
            rovingFocus: o = !0,
            orientation: a,
            dir: s,
            loop: i = !0,
            ...d
          } = e, l = rf(r), c = (0, hr.jH)(s), f = {
            dir: c,
            ...d
          };
          return (0, u.jsx)(lf, {
            scope: r,
            rovingFocus: o,
            disabled: n,
            children: o ? (0, u.jsx)(Kc, {
              asChild: !0,
              ...l,
              orientation: a,
              dir: c,
              loop: i,
              children: (0, u.jsx)(Ce.sG.div, {
                ...f,
                ref: t
              })
            }) : (0, u.jsx)(Ce.sG.div, {
              ...f,
              ref: t
            })
          })
        }, "ToggleGroupImpl")),
        ff = "ToggleGroupItem",
        pf = f.forwardRef($c(function(e, t) {
          const r = af(ff, e.__scopeToggleGroup),
            n = uf(ff, e.__scopeToggleGroup),
            o = rf(e.__scopeToggleGroup),
            a = r.value.includes(e.value),
            s = n.disabled || e.disabled,
            i = {
              ...e,
              pressed: a,
              disabled: s
            },
            d = f.useRef(null);
          return n.rovingFocus ? (0, u.jsx)(Uc, {
            asChild: !0,
            ...o,
            focusable: !s,
            active: a,
            ref: d,
            children: (0, u.jsx)(vf, {
              ...i,
              ref: t
            })
          }) : (0, u.jsx)(vf, {
            ...i,
            ref: t
          })
        }, "ToggleGroupItem")),
        vf = f.forwardRef($c(function(e, t) {
          const {
            __scopeToggleGroup: r,
            value: n,
            ...o
          } = e, a = af(ff, r), s = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
          }, i = "single" === a.type ? s : void 0;
          return (0, u.jsx)(Yc, {
            ...i,
            ...o,
            ref: t,
            onPressedChange: e => {
              e ? a.onItemActivate(n) : a.onItemDeactivate(n)
            }
          })
        }, "ToggleGroupItemImpl"));

      function yf(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function mf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function hf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? mf(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = yf(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mf(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function bf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var gf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        wf = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = hf(hf({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) gf(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return bf(e.variantClassNames, e => bf(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Cf = "var(--foundry_zxwkyk2)",
        xf = "var(--foundry_zxwkyk3)",
        _f = wf({
          defaultClassName: "foundry_zxwkyk4",
          variantClassNames: {
            size: {
              SM: "foundry_zxwkyk5",
              MD: "foundry_zxwkyk6"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        jf = wf({
          defaultClassName: "foundry_zxwkyk8 foundry_8kowh41 foundry_1d5mo5m0 foundry_zxwkyk7",
          variantClassNames: {
            size: {
              SM: "foundry_zxwkyk9",
              MD: "foundry_zxwkyka"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Of = wf({
          defaultClassName: "foundry_zxwkykh",
          variantClassNames: {
            variant: {
              default: "foundry_zxwkyki",
              number: "foundry_zxwkykj"
            },
            size: {
              SM: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
              MD: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Pf = "var(--foundry_zxwkyk1)",
        Sf = "var(--foundry_zxwkyk0)",
        Df = wf({
          defaultClassName: "foundry_zxwkykc",
          variantClassNames: {
            status: {
              online: "foundry_zxwkykd",
              offline: "foundry_zxwkyke",
              away: "foundry_zxwkykf",
              busy: "foundry_zxwkykg"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Rf = (0, f.createContext)(null);

      function Nf() {
        const e = (0, f.useContext)(Rf);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }(0, f.forwardRef)(({
        testId: e,
        size: t,
        type: r = "single",
        ...n
      }, o) => {
        const a = (0, x.v6)({
          "data-testid": e,
          className: _f({
            size: t
          }),
          type: r
        }, n);
        return (0, u.jsx)(Rf.Provider, {
          value: {
            size: t
          },
          children: (0, u.jsx)(nf, {
            ref: o,
            ...a
          })
        })
      }), (0, f.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const {
          size: n
        } = Nf(), o = (0, x.v6)({
          "data-testid": e,
          className: jf({
            size: n
          })
        }, t);
        return (0, u.jsx)(pf, {
          ref: r,
          ...o
        })
      }), (0, f.forwardRef)(({
        icon: e,
        ...t
      }, r) => {
        const {
          size: n
        } = Nf(), o = fe[e];
        return (0, u.jsx)(o, {
          label: "",
          ref: r,
          size: n,
          className: "foundry_zxwkykb",
          ...t
        })
      }), (0, f.forwardRef)(({
        testId: e,
        colorOverride: t,
        status: r,
        ...n
      }, o) => {
        const a = (0, x.v6)({
          "data-testid": e,
          className: Df({
            status: r
          }),
          style: (0, _.DI)({
            [Sf]: t?.online,
            [Pf]: t?.offline,
            [Cf]: t?.away,
            [xf]: t?.busy
          })
        }, n);
        return (0, u.jsx)("span", {
          ref: o,
          ...a
        })
      }), (0, f.forwardRef)(({
        testId: e,
        variant: t = "default",
        ...r
      }, n) => {
        const {
          size: o
        } = Nf(), a = (0, x.v6)({
          "data-testid": e,
          className: Of({
            variant: t,
            size: o
          })
        }, r);
        return (0, u.jsx)("span", {
          ref: n,
          ...a
        })
      });
      var Ef = Object.defineProperty,
        kf = (e, t) => Ef(e, "name", {
          value: t,
          configurable: !0
        }),
        If = "Popover",
        [Tf, Vf] = (0, we.A)(If, [Ye]),
        zf = Ye(),
        [Lf, Af] = Tf(If),
        Mf = f.forwardRef(kf(function(e, t) {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Af("PopoverAnchor", r), a = zf(r), {
            onCustomAnchorAdd: s,
            onCustomAnchorRemove: i
          } = o;
          return f.useEffect(() => (s(), () => i()), [s, i]), (0, u.jsx)(ct, {
            ...a,
            ...n,
            ref: t
          })
        }, "PopoverAnchor")),
        Ff = f.forwardRef(kf(function(e, t) {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Af("PopoverTrigger", r), a = zf(r), s = (0, ge.s)(t, o.triggerRef), i = (0, u.jsx)(Ce.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.open ? o.contentId : void 0,
            "data-state": Yf(o.open),
            ...n,
            ref: s,
            onClick: (0, be.mK)(e.onClick, o.onOpenToggle)
          });
          return o.hasCustomAnchor ? i : (0, u.jsx)(ct, {
            asChild: !0,
            ...a,
            children: i
          })
        }, "PopoverTrigger")),
        [Hf, qf] = Tf("PopoverPortal", {
          forceMount: void 0
        }),
        Bf = "PopoverContent",
        Xf = f.forwardRef(kf(function(e, t) {
          const r = qf(Bf, e.__scopePopover),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = Af(Bf, e.__scopePopover);
          return (0, u.jsx)(Ct, {
            present: n || a.open,
            children: a.modal ? (0, u.jsx)(Kf, {
              ...o,
              ref: t
            }) : (0, u.jsx)(Uf, {
              ...o,
              ref: t
            })
          })
        }, "PopoverContent")),
        Gf = (0, St.TL)("PopoverContent.RemoveScroll"),
        Kf = f.forwardRef(kf(function(e, t) {
          const r = Af(Bf, e.__scopePopover),
            n = f.useRef(null),
            o = (0, ge.s)(t, n),
            a = f.useRef(!1);
          return f.useEffect(() => {
            const e = n.current;
            if (e) return (0, An.Eq)(e)
          }, []), (0, u.jsx)(Ln.A, {
            as: Gf,
            allowPinchZoom: !0,
            children: (0, u.jsx)(Zf, {
              ...e,
              ref: o,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, be.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), a.current || r.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, be.mK)(e.onPointerDownOutside, e => {
                const t = e.detail.originalEvent,
                  r = 0 === t.button && !0 === t.ctrlKey,
                  n = 2 === t.button || r;
                a.current = n
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, be.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }, "PopoverContentModal")),
        Uf = f.forwardRef(kf(function(e, t) {
          const r = Af(Bf, e.__scopePopover),
            n = f.useRef(!1),
            o = f.useRef(!1);
          return (0, u.jsx)(Zf, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (n.current || r.triggerRef.current?.focus(), t.preventDefault()), n.current = !1, o.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (n.current = !0, "pointerdown" === t.detail.originalEvent.type && (o.current = !0));
              const a = t.target,
                s = r.triggerRef.current?.contains(a);
              s && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
            }
          })
        }, "PopoverContentNonModal")),
        Zf = f.forwardRef(kf(function(e, t) {
          const {
            __scopePopover: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: a,
            disableOutsidePointerEvents: s,
            onEscapeKeyDown: i,
            onPointerDownOutside: d,
            onFocusOutside: l,
            onInteractOutside: c,
            ...f
          } = e, p = Af(Bf, r), v = zf(r);
          return (0, zn.Oh)(), (0, u.jsx)(jn, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            children: (0, u.jsx)(Se, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onInteractOutside: c,
              onEscapeKeyDown: i,
              onPointerDownOutside: d,
              onFocusOutside: l,
              onDismiss: () => p.onOpenChange(!1),
              deferPointerDownOutside: !0,
              children: (0, u.jsx)(ft, {
                "data-state": Yf(p.open),
                role: "dialog",
                id: p.contentId,
                ...v,
                ...f,
                ref: t,
                style: {
                  ...f.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              })
            })
          })
        }, "PopoverContentImpl")),
        Wf = f.forwardRef(kf(function(e, t) {
          const {
            __scopePopover: r,
            ...n
          } = e, o = zf(r);
          return (0, u.jsx)(pt, {
            ...o,
            ...n,
            ref: t
          })
        }, "PopoverArrow"));

      function Yf(e) {
        return e ? "open" : "closed"
      }
      kf(Yf, "getState");
      var Qf = Mf,
        $f = Ff,
        Jf = Xf,
        ep = Wf;

      function tp(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function rp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function np(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? rp(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = tp(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function op(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ap = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        sp = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = np(np({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) ap(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return op(e.variantClassNames, e => op(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_lroh6l1 foundry_8kowh41 foundry_1d5mo5m0 foundry_1qqcnuao foundry_1qqcnuar",
          variantClassNames: {
            size: {
              SM: "foundry_lroh6l2 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
              MD: "foundry_lroh6l3 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf",
              LG: "foundry_lroh6l4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde",
              XL: "foundry_lroh6l5 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdd"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const ip = (0, f.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        dp = ((0, f.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, x.v6)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, u.jsx)($f, {
            ref: r,
            ...n
          })
        }), {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        });

      function lp(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function up(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function cp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? up(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = lp(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : up(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function fp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, f.forwardRef)(({
        children: e,
        size: t = "MD",
        testId: r,
        ...n
      }, o) => {
        const {
          open: a
        } = (0, f.useContext)(ip), s = (0, f.useRef)(null), i = (0, Z.UP)(s, o), {
          buttonProps: d
        } = (0, Z.sL)(n, s), l = (0, x.v6)({
          "data-testid": r,
          className: sp({
            size: t
          })
        }, d), c = a ? ce.rX : ce.yQ;
        return (0, u.jsxs)("button", {
          ref: i,
          ...l,
          children: [e, (0, u.jsx)(c, {
            label: "",
            size: dp[t]
          })]
        })
      }), (0, f.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const n = (0, x.v6)({
          "data-testid": e
        }, t);
        return (0, u.jsx)(Qf, {
          ref: r,
          ...n
        })
      }), (0, f.forwardRef)(({
        sideOffset: e = 6,
        testId: t,
        ...r
      }, n) => {
        const o = (0, x.v6)({
          sideOffset: e,
          "data-testid": t,
          className: "foundry_lroh6l6"
        }, r);
        return (0, u.jsx)(Jf, {
          ref: n,
          ...o
        })
      }), (0, f.forwardRef)(({
        testId: e,
        ...t
      }, r) => {
        const n = (0, x.v6)({
          "data-testid": e,
          className: "foundry_lroh6l7"
        }, t);
        return (0, u.jsx)(ep, {
          ref: r,
          ...n
        })
      });
      var pp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        vp = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = cp(cp({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) pp(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return fp(e.variantClassNames, e => fp(e, e => e.split(" ")[0]))
            }
          }, t
        },
        yp = "var(--foundry_rmorls2)",
        mp = vp({
          defaultClassName: "foundry_rmorlsa",
          variantClassNames: {
            size: {
              SM: "foundry_rmorlsb foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdj",
              MD: "foundry_rmorlsc foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj",
              LG: "foundry_rmorlsd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        hp = "var(--foundry_rmorls0)",
        bp = vp({
          defaultClassName: "foundry_rmorls5",
          variantClassNames: {
            size: {
              SM: "foundry_rmorls6",
              MD: "foundry_rmorls7",
              LG: "foundry_rmorls8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        gp = "var(--foundry_rmorls3)",
        wp = "var(--foundry_rmorls1)",
        Cp = vp({
          defaultClassName: "foundry_rmorlse",
          variantClassNames: {
            size: {
              SM: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdh foundry_tdsdcdj",
              MD: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdj",
              LG: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        xp = Object.defineProperty,
        _p = (e, t) => xp(e, "name", {
          value: t,
          configurable: !0
        }),
        jp = "Progress",
        [Op, Pp] = (0, we.A)(jp),
        [Sp, Dp] = Op(jp),
        Rp = f.forwardRef(_p(function(e, t) {
          const {
            __scopeProgress: r,
            value: n = null,
            max: o,
            getValueLabel: a = Ep,
            ...s
          } = e;
          !o && 0 !== o || Tp(o) || console.error(zp(`${o}`, "Progress"));
          const i = Tp(o) ? o : 100;
          null === n || Vp(n, i) || console.error(Lp(`${n}`, "Progress"));
          const d = Vp(n, i) ? n : null,
            l = Ip(d) ? a(d, i) : void 0;
          return (0, u.jsx)(Sp, {
            scope: r,
            value: d,
            max: i,
            children: (0, u.jsx)(Ce.sG.div, {
              "aria-valuemax": i,
              "aria-valuemin": 0,
              "aria-valuenow": Ip(d) ? d : void 0,
              "aria-valuetext": l,
              role: "progressbar",
              "data-state": kp(d, i),
              "data-value": d ?? void 0,
              "data-max": i,
              ...s,
              ref: t
            })
          })
        }, "Progress")),
        Np = f.forwardRef(_p(function(e, t) {
          const {
            __scopeProgress: r,
            ...n
          } = e, o = Dp("ProgressIndicator", r);
          return (0, u.jsx)(Ce.sG.div, {
            "data-state": kp(o.value, o.max),
            "data-value": o.value ?? void 0,
            "data-max": o.max,
            ...n,
            ref: t
          })
        }, "ProgressIndicator"));

      function Ep(e, t) {
        return `${Math.round(e/t*100)}%`
      }

      function kp(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading"
      }

      function Ip(e) {
        return "number" == typeof e
      }

      function Tp(e) {
        return Ip(e) && !isNaN(e) && e > 0
      }

      function Vp(e, t) {
        return Ip(e) && !isNaN(e) && e <= t && e >= 0
      }

      function zp(e, t) {
        return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`
      }

      function Lp(e, t) {
        return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`
      }
      _p(Ep, "defaultGetValueLabel"), _p(kp, "getProgressState"), _p(Ip, "isNumber"), _p(Tp, "isValidMaxNumber"), _p(Vp, "isValidValueNumber"), _p(zp, "getInvalidMaxError"), _p(Lp, "getInvalidValueError");
      var Ap = Rp,
        Mp = Np;
      const Fp = (0, f.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        Hp = ((0, f.forwardRef)(({
          size: e = "MD",
          max: t,
          value: r,
          ...n
        }, o) => {
          const a = Math.round(r / t * 100),
            s = "number" != typeof r || "number" != typeof t;
          return (0, u.jsx)(Fp.Provider, {
            value: {
              value: r,
              max: t,
              size: e,
              percentage: a,
              isInvalid: s
            },
            children: (0, u.jsx)(Hp, {
              ...n,
              ref: o
            })
          })
        }), (0, f.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, x.v6)({
              "data-testid": e,
              className: "foundry_rmorls4"
            }, r),
            a = t ? p.DX : "div";
          return (0, u.jsx)(a, {
            ...o,
            ref: n
          })
        }));
      (0, f.forwardRef)(({
        testId: e,
        colorOverride: t,
        ...r
      }, n) => {
        const {
          value: o,
          max: a,
          size: s
        } = (0, f.useContext)(Fp), i = (0, x.v6)({
          "data-testid": e,
          className: bp({
            size: s
          }),
          value: o,
          max: a,
          style: (0, _.DI)({
            [gp]: t
          }),
          "data-track": !0
        }, r);
        return (0, u.jsx)(Ap, {
          ref: n,
          ...i
        })
      }), (0, f.forwardRef)(({
        testId: e,
        transitionDuration: t = 500,
        colorOverride: r,
        ...n
      }, o) => {
        const {
          percentage: a,
          isInvalid: s
        } = (0, f.useContext)(Fp), i = s ? "-100%" : `-${100-a}%`, d = (0, x.v6)({
          "data-testid": e,
          className: "foundry_rmorls9",
          style: (0, _.DI)({
            [hp]: i,
            [wp]: `${t}ms`,
            [yp]: r
          })
        }, n);
        return (0, u.jsx)(Mp, {
          ref: o,
          ...d
        })
      }), (0, f.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const {
          size: o
        } = (0, f.useContext)(Fp), a = (0, x.v6)({
          "data-testid": t,
          className: mp({
            size: o
          }),
          "aria-hidden": !0
        }, r), s = e ? p.DX : "span";
        return (0, u.jsx)(s, {
          ref: n,
          ...a
        })
      }), (0, f.forwardRef)(({
        testId: e,
        format: t,
        ...r
      }, n) => {
        const {
          value: o,
          max: a,
          size: s,
          percentage: i,
          isInvalid: d
        } = (0, f.useContext)(Fp), l = (0, x.v6)({
          "data-testid": e,
          className: mp({
            size: s
          }),
          "aria-hidden": !0
        }, r);
        return d ? (0, u.jsx)("span", {
          ref: n,
          ...l
        }) : "percentage" === t ? (0, u.jsxs)("span", {
          ref: n,
          ...l,
          children: [i, " ", (0, u.jsx)("span", {
            className: Cp({
              size: s
            }),
            children: "%"
          })]
        }) : (0, u.jsxs)("span", {
          ref: n,
          ...l,
          children: [o, "/", a]
        })
      });
      var qp = Object.defineProperty,
        Bp = (e, t) => qp(e, "name", {
          value: t,
          configurable: !0
        }),
        Xp = "Collapsible",
        [Gp, Kp] = (0, we.A)(Xp),
        [Up, Zp] = Gp(Xp),
        Wp = f.forwardRef(Bp(function(e, t) {
          const {
            __scopeCollapsible: r,
            open: n,
            defaultOpen: o,
            disabled: a,
            onOpenChange: s,
            ...i
          } = e, [d, l] = (0, Dt.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: s,
            caller: Xp
          });
          return (0, u.jsx)(Up, {
            scope: r,
            disabled: a,
            contentId: (0, Le.B)(),
            open: d,
            onOpenToggle: f.useCallback(() => l(e => !e), [l]),
            children: (0, u.jsx)(Ce.sG.div, {
              "data-state": ev(d),
              "data-disabled": a ? "" : void 0,
              ...i,
              ref: t
            })
          })
        }, "Collapsible")),
        Yp = f.forwardRef(Bp(function(e, t) {
          const {
            __scopeCollapsible: r,
            ...n
          } = e, o = Zp("CollapsibleTrigger", r);
          return (0, u.jsx)(Ce.sG.button, {
            type: "button",
            "aria-controls": o.open ? o.contentId : void 0,
            "aria-expanded": o.open || !1,
            "data-state": ev(o.open),
            "data-disabled": o.disabled ? "" : void 0,
            disabled: o.disabled,
            ...n,
            ref: t,
            onClick: (0, be.mK)(e.onClick, o.onOpenToggle)
          })
        }, "CollapsibleTrigger")),
        Qp = "CollapsibleContent",
        $p = f.forwardRef(Bp(function(e, t) {
          const {
            forceMount: r,
            ...n
          } = e, o = Zp(Qp, e.__scopeCollapsible);
          return (0, u.jsx)(Ct, {
            present: r || o.open,
            children: ({
              present: e
            }) => (0, u.jsx)(Jp, {
              ...n,
              ref: t,
              present: e
            })
          })
        }, "CollapsibleContent")),
        Jp = f.forwardRef(Bp(function(e, t) {
          const {
            __scopeCollapsible: r,
            present: n,
            children: o,
            ...a
          } = e, s = Zp(Qp, r), [i, d] = f.useState(n), l = f.useRef(null), c = (0, ge.s)(t, l), p = f.useRef(0), v = p.current, y = f.useRef(0), m = y.current, h = s.open || i, b = f.useRef(h), g = f.useRef(void 0);
          return f.useEffect(() => {
            const e = requestAnimationFrame(() => b.current = !1);
            return () => cancelAnimationFrame(e)
          }, []), (0, Xe.N)(() => {
            const e = l.current;
            if (e) {
              g.current = g.current || {
                transitionDuration: e.style.transitionDuration,
                animationName: e.style.animationName
              }, e.style.transitionDuration = "0s", e.style.animationName = "none";
              const t = e.getBoundingClientRect();
              p.current = t.height, y.current = t.width, b.current || (e.style.transitionDuration = g.current.transitionDuration, e.style.animationName = g.current.animationName), d(n)
            }
          }, [s.open, n]), (0, u.jsx)(Ce.sG.div, {
            "data-state": ev(s.open),
            "data-disabled": s.disabled ? "" : void 0,
            id: s.contentId,
            hidden: !h,
            ...a,
            ref: c,
            style: {
              "--radix-collapsible-content-height": v ? `${v}px` : void 0,
              "--radix-collapsible-content-width": m ? `${m}px` : void 0,
              ...e.style
            },
            children: h && o
          })
        }, "CollapsibleContentImpl"));

      function ev(e) {
        return e ? "open" : "closed"
      }
      Bp(ev, "getState");
      var tv = Wp,
        rv = Yp,
        nv = $p,
        ov = Object.defineProperty,
        av = (e, t) => ov(e, "name", {
          value: t,
          configurable: !0
        }),
        sv = "Accordion",
        iv = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [dv, lv, uv] = Cr(sv),
        [cv, fv] = (0, we.A)(sv, [uv, Kp]),
        pv = Kp(),
        vv = f.forwardRef(av(function(e, t) {
          const {
            type: r,
            ...n
          } = e, o = n, a = n;
          return (0, u.jsx)(dv.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === r ? (0, u.jsx)(wv, {
              ...a,
              ref: t
            }) : (0, u.jsx)(gv, {
              ...o,
              ref: t
            })
          })
        }, "Accordion")),
        [yv, mv] = cv(sv),
        [hv, bv] = cv(sv, {
          collapsible: !1
        }),
        gv = f.forwardRef(av(function(e, t) {
          const {
            value: r,
            defaultValue: n,
            onValueChange: o = av(() => {}, "onValueChange"),
            collapsible: a = !1,
            ...s
          } = e, [i, d] = (0, Dt.i)({
            prop: r,
            defaultProp: n ?? "",
            onChange: o,
            caller: sv
          });
          return (0, u.jsx)(yv, {
            scope: e.__scopeAccordion,
            value: f.useMemo(() => i ? [i] : [], [i]),
            onItemOpen: d,
            onItemClose: f.useCallback(() => a && d(""), [a, d]),
            children: (0, u.jsx)(hv, {
              scope: e.__scopeAccordion,
              collapsible: a,
              children: (0, u.jsx)(_v, {
                ...s,
                ref: t
              })
            })
          })
        }, "AccordionImplSingle")),
        wv = f.forwardRef(av(function(e, t) {
          const {
            value: r,
            defaultValue: n,
            onValueChange: o = av(() => {}, "onValueChange"),
            ...a
          } = e, [s, i] = (0, Dt.i)({
            prop: r,
            defaultProp: n ?? [],
            onChange: o,
            caller: sv
          }), d = f.useCallback(e => i((t = []) => [...t, e]), [i]), l = f.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
          return (0, u.jsx)(yv, {
            scope: e.__scopeAccordion,
            value: s,
            onItemOpen: d,
            onItemClose: l,
            children: (0, u.jsx)(hv, {
              scope: e.__scopeAccordion,
              collapsible: !0,
              children: (0, u.jsx)(_v, {
                ...a,
                ref: t
              })
            })
          })
        }, "AccordionImplMultiple")),
        [Cv, xv] = cv(sv),
        _v = f.forwardRef(av(function(e, t) {
          const {
            __scopeAccordion: r,
            disabled: n,
            dir: o,
            orientation: a = "vertical",
            ...s
          } = e, i = f.useRef(null), d = (0, ge.s)(i, t), l = lv(r), c = "ltr" === (0, hr.jH)(o), p = (0, be.mK)(e.onKeyDown, e => {
            if (!iv.includes(e.key)) return;
            const t = e.target,
              r = l().filter(e => !e.ref.current?.disabled),
              n = r.findIndex(e => e.ref.current === t),
              o = r.length;
            if (-1 === n) return;
            e.preventDefault();
            let s = n;
            const i = o - 1,
              d = av(() => {
                s = n + 1, s > i && (s = 0)
              }, "moveNext"),
              u = av(() => {
                s = n - 1, s < 0 && (s = i)
              }, "movePrev");
            switch (e.key) {
              case "Home":
                s = 0;
                break;
              case "End":
                s = i;
                break;
              case "ArrowRight":
                "horizontal" === a && (c ? d() : u());
                break;
              case "ArrowDown":
                "vertical" === a && d();
                break;
              case "ArrowLeft":
                "horizontal" === a && (c ? u() : d());
                break;
              case "ArrowUp":
                "vertical" === a && u()
            }
            const f = s % o;
            r[f].ref.current?.focus()
          });
          return (0, u.jsx)(Cv, {
            scope: r,
            disabled: n,
            direction: o,
            orientation: a,
            children: (0, u.jsx)(dv.Slot, {
              scope: r,
              children: (0, u.jsx)(Ce.sG.div, {
                ...s,
                "data-orientation": a,
                ref: d,
                onKeyDown: n ? void 0 : p
              })
            })
          })
        }, "AccordionImpl")),
        jv = "AccordionItem",
        [Ov, Pv] = cv(jv),
        Sv = f.forwardRef(av(function(e, t) {
          const {
            __scopeAccordion: r,
            value: n,
            ...o
          } = e, a = xv(jv, r), s = mv(jv, r), i = pv(r), d = (0, Le.B)(), l = n && s.value.includes(n) || !1, c = a.disabled || e.disabled;
          return (0, u.jsx)(Ov, {
            scope: r,
            open: l,
            disabled: c,
            triggerId: d,
            children: (0, u.jsx)(tv, {
              "data-orientation": a.orientation,
              "data-state": kv(l),
              ...i,
              ...o,
              ref: t,
              disabled: c,
              open: l,
              onOpenChange: e => {
                e ? s.onItemOpen(n) : s.onItemClose(n)
              }
            })
          })
        }, "AccordionItem")),
        Dv = f.forwardRef(av(function(e, t) {
          const {
            __scopeAccordion: r,
            ...n
          } = e, o = xv(sv, r), a = Pv("AccordionHeader", r);
          return (0, u.jsx)(Ce.sG.h3, {
            "data-orientation": o.orientation,
            "data-state": kv(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...n,
            ref: t
          })
        }, "AccordionHeader")),
        Rv = "AccordionTrigger",
        Nv = f.forwardRef(av(function(e, t) {
          const {
            __scopeAccordion: r,
            ...n
          } = e, o = xv(sv, r), a = Pv(Rv, r), s = bv(Rv, r), i = pv(r);
          return (0, u.jsx)(dv.ItemSlot, {
            scope: r,
            children: (0, u.jsx)(rv, {
              "aria-disabled": a.open && !s.collapsible || void 0,
              "data-orientation": o.orientation,
              id: a.triggerId,
              ...i,
              ...n,
              ref: t
            })
          })
        }, "AccordionTrigger")),
        Ev = f.forwardRef(av(function(e, t) {
          const {
            __scopeAccordion: r,
            ...n
          } = e, o = xv(sv, r), a = Pv("AccordionContent", r), s = pv(r);
          return (0, u.jsx)(nv, {
            role: "region",
            "aria-labelledby": a.triggerId,
            "data-orientation": o.orientation,
            ...s,
            ...n,
            ref: t,
            style: {
              "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
              ...e.style
            }
          })
        }, "AccordionContent"));

      function kv(e) {
        return e ? "open" : "closed"
      }
      av(kv, "getState");
      var Iv = vv,
        Tv = Sv,
        Vv = Dv,
        zv = Nv,
        Lv = Ev;

      function Av(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Mv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Fv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Mv(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Av(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Hv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var qv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Bv = "foundry_1vzsjid2",
        Xv = "foundry_1vzsjidm",
        Gv = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Fv(Fv({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) qv(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Hv(e.variantClassNames, e => Hv(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_1vzsjid5",
          variantClassNames: {
            mode: {
              solid: "foundry_1vzsjid6",
              alpha: "foundry_1vzsjid7"
            },
            layer: {
              0: "foundry_1vzsjid8",
              1: "foundry_1vzsjid9",
              2: "foundry_1vzsjida",
              3: "foundry_1vzsjidb"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              mode: "alpha",
              layer: 0
            }, "foundry_1vzsjidc"],
            [{
              mode: "alpha",
              layer: 1
            }, "foundry_1vzsjidd"],
            [{
              mode: "alpha",
              layer: 2
            }, "foundry_1vzsjide"],
            [{
              mode: "alpha",
              layer: 3
            }, "foundry_1vzsjidf"]
          ]
        });
      const Kv = (0, f.createContext)({
          mode: "solid",
          layer: 0
        }),
        Uv = ((0, f.forwardRef)(({
          mode: e,
          layer: t,
          type: r = "single",
          ...n
        }, o) => (0, u.jsx)(Kv.Provider, {
          value: {
            mode: e,
            layer: t
          },
          children: (0, u.jsx)(Uv, {
            ...n,
            ref: o,
            type: r
          })
        })), (0, f.forwardRef)(({
          testId: e,
          type: t = "single",
          ...r
        }, n) => {
          const o = (0, x.v6)({
            "data-testid": e,
            type: t
          }, r);
          return (0, u.jsx)(Iv, {
            className: "foundry_1vzsjid0",
            ref: n,
            ...o
          })
        })),
        Zv = ((0, f.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            mode: n,
            layer: o
          } = (0, f.useContext)(Kv), a = (0, x.v6)({
            className: Gv({
              mode: n,
              layer: o
            }),
            "data-testid": e
          }, t);
          return (0, u.jsx)(Tv, {
            ref: r,
            ...a
          })
        }), (0, f.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, x.v6)({
            className: "foundry_1vzsjid1",
            "data-testid": e
          }, t);
          return (0, u.jsx)(Vv, {
            ref: r,
            ...n
          })
        }), (0, f.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, x.v6)({
            className: "foundry_1vzsjidk foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcda",
            "data-testid": t
          }, r);
          return (0, u.jsx)(zv, {
            ref: n,
            ...o,
            children: r.asChild && (0, f.isValidElement)(e) ? (0, f.cloneElement)(e, {
              children: (0, u.jsx)("span", {
                className: Bv,
                children: e.props.children
              })
            }) : (0, u.jsx)("span", {
              className: Bv,
              children: e
            })
          })
        }), (0, f.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = fe[e],
            o = (0, x.v6)({
              className: "foundry_1vzsjid4",
              label: ""
            }, t);
          return (0, u.jsx)(n, {
            ref: r,
            size: "LG",
            ...o
          })
        }), (0, f.forwardRef)(({
          icon: e = "ChevronDown",
          ...t
        }, r) => {
          const n = fe[e],
            o = (0, x.v6)({
              className: "foundry_1vzsjid3",
              label: ""
            }, t);
          return (0, u.jsx)(n, {
            ref: r,
            size: "LG",
            ...o
          })
        }), (0, f.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, x.v6)({
            className: "foundry_1vzsjidl foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde",
            "data-testid": r,
            asChild: t
          }, n);
          return (0, u.jsx)(Lv, {
            ref: o,
            ...a,
            children: t && (0, f.isValidElement)(e) ? (0, f.cloneElement)(e, {
              children: (0, u.jsx)("div", {
                className: Xv,
                children: e.props.children
              })
            }) : (0, u.jsx)("div", {
              className: Xv,
              children: e
            })
          })
        }), {
          MD: _.LU.global.spacing.dimensions[200],
          LG: _.LU.global.spacing.dimensions[250],
          XL: _.LU.global.spacing.dimensions[300]
        }),
        Wv = (0, f.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, u.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: Zv[t],
          viewBox: "0 0 93 20",
          fill: "none",
          ref: n,
          ...r,
          children: [(0, u.jsx)("path", {
            d: "M70.062 5.19368V4.08909C70.062 4.04208 70.015 3.99508 69.968 3.99508H62.1183C59.8387 3.99508 58.7341 5.40519 58.7341 7.21484V12.7613C58.7341 13.8894 58.1935 14.712 57.0654 14.712H49.7093C49.6623 14.712 49.6153 14.759 49.6153 14.806V15.9106C49.6153 15.9576 49.6623 16.0046 49.7093 16.0046H57.935C60.2147 16.0046 61.3193 14.618 61.3193 12.7848V7.23835C61.3193 6.11025 61.8598 5.28768 62.9879 5.28768H69.968C70.015 5.28768 70.062 5.24068 70.062 5.19368Z",
            fill: e
          }), (0, u.jsx)("path", {
            d: "M46.8421 3.99508H32.6704C32.6234 3.99508 32.5764 4.04208 32.5764 4.08909V5.19368C32.5764 5.24068 32.6234 5.28768 32.6704 5.28768H45.996C47.1241 5.28768 47.6647 6.11025 47.6647 7.23835C47.6647 8.36644 47.1241 9.18901 45.996 9.18901H35.4436C33.7985 9.18901 32.5764 10.5756 32.5764 12.3853V15.9341C32.5764 15.9811 32.6234 16.0281 32.6704 16.0281H35.0676C35.1146 16.0281 35.1616 15.9811 35.1616 15.9341V12.3853C35.1616 11.2572 35.8197 10.4581 36.7362 10.4581H46.8421C49.1218 10.4581 50.2264 9.0715 50.2264 7.23835C50.2264 5.4052 49.1218 4.01858 46.8421 4.01858V3.99508Z",
            fill: e
          }), (0, u.jsx)("path", {
            d: "M86.1844 13.4194C86.1374 13.4194 86.0903 13.3724 86.0903 13.3253V5.26418C86.0903 4.01858 85.2443 3.61905 84.0222 4.37111L69.5685 13.2548C69.0044 13.6074 68.8164 14.0069 68.9574 14.2889C69.0749 14.5475 69.3805 14.712 70.015 14.712H83.4346C83.4816 14.712 83.5051 14.7355 83.5051 14.7825V15.9106C83.5051 15.9576 83.5521 16.0046 83.5991 16.0046H86.0198C86.0668 16.0046 86.1138 15.9576 86.1138 15.9106V14.806C86.1138 14.759 86.1609 14.712 86.2079 14.712H88.6051C88.6521 14.712 88.6991 14.665 88.6991 14.618V13.5134C88.6991 13.4664 88.6521 13.4194 88.6051 13.4194H86.1844ZM83.5286 13.3253C83.5286 13.3724 83.4816 13.4194 83.4346 13.4194H72.1772C72.0832 13.4194 72.0362 13.3959 72.0362 13.3724C72.0362 13.3254 72.0362 13.2783 72.1302 13.2313L83.3171 6.34527C83.3876 6.29827 83.5286 6.29827 83.5286 6.46278V13.3489V13.3253Z",
            fill: e
          }), (0, u.jsx)("path", {
            d: "M91.0246 13.9838C91.6121 13.9838 92.0117 14.4304 92.0117 14.9944C92.0117 15.5585 91.6121 16.005 91.0246 16.005C90.437 16.005 90.014 15.5585 90.014 14.9944C90.014 14.4304 90.4135 13.9838 91.0246 13.9838ZM91.0246 15.8405C91.5181 15.8405 91.8707 15.4645 91.8707 14.9944C91.8707 14.5244 91.5416 14.1484 91.0246 14.1484C90.5075 14.1484 90.1785 14.5244 90.1785 14.9944C90.1785 15.4645 90.5075 15.8405 91.0246 15.8405ZM90.6251 14.4069H91.0716C91.2831 14.4069 91.4476 14.4774 91.4476 14.7124C91.4476 14.9474 91.3771 14.9474 91.2361 14.9944C91.3066 15.0179 91.3536 15.0649 91.4006 15.2059C91.4476 15.3235 91.4711 15.4645 91.5181 15.5585H91.3066C91.2831 15.4645 91.2361 15.3235 91.2126 15.253C91.1891 15.1119 91.1421 15.0884 90.9776 15.0884H90.8366V15.582H90.6251V14.4069ZM90.8366 14.9239H91.0246C91.1656 14.9239 91.2596 14.8769 91.2596 14.7359C91.2596 14.5949 91.1421 14.5479 91.0481 14.5479H90.8601V14.9239H90.8366Z",
            fill: e
          }), (0, u.jsx)("path", {
            d: "M15.5833 4.88841V11.1399C18.2155 12.409 20.2837 11.1399 20.2837 7.77915C20.2837 4.41837 19.0616 2.82023 15.4893 1.59813C14.0791 1.12809 11.4704 0.329027 9.68428 0V18.637L13.9146 19.9767V4.34786C13.9146 3.6193 14.2437 3.12576 14.7607 3.29027C15.4423 3.47829 15.5833 4.15985 15.5833 4.88841Z",
            fill: e
          }), (0, u.jsx)("path", {
            d: "M23.9735 13.0906C22.2108 12.4325 19.9546 12.1975 18.1215 12.409C16.2883 12.597 14.9722 13.0671 14.9722 13.0671L14.7137 13.1611V15.6993L19.2261 14.1012C20.0016 13.8191 21.1297 13.7721 21.7643 13.9602C22.3753 14.1717 22.2578 14.5477 21.5058 14.8297L14.7137 17.2504V19.6946L23.9265 16.3809C23.9265 16.3809 25.1721 15.9108 25.6656 15.2763C26.1591 14.6417 25.9476 13.7016 23.95 13.0671L23.9735 13.0906Z",
            fill: e
          }), (0, u.jsx)("path", {
            d: "M0.495017 14.5242C-0.445061 15.2293 -0.0925317 16.4279 1.95214 16.9919C4.13782 17.7205 6.3705 17.8615 8.46218 17.509C8.60319 17.509 8.7442 17.462 8.88521 17.4384V15.2528L6.79354 16.0048C6.01797 16.2869 4.91338 16.3574 4.27883 16.1458C3.66778 15.9343 3.78529 15.5583 4.53735 15.2763L8.88521 13.7251V11.2809L2.84521 13.4431C2.84521 13.4431 1.38809 13.9132 0.518519 14.5477L0.495017 14.5242Z",
            fill: e
          }), (0, u.jsx)("path", {
            d: "M24.467 18.9896C24.608 18.9426 24.6785 18.8486 24.6785 18.7076C24.6785 18.4725 24.514 18.402 24.3025 18.402H23.856V19.5536H24.0675V19.0601H24.2085C24.373 19.0601 24.42 19.1071 24.4435 19.2246C24.467 19.2951 24.514 19.4596 24.5375 19.5301H24.749C24.7255 19.4126 24.6785 19.2951 24.6315 19.1776C24.5845 19.0366 24.5375 18.9896 24.467 18.9661V18.9896ZM24.232 18.9191H24.044V18.543H24.232C24.3495 18.543 24.4435 18.5665 24.4435 18.7311C24.4435 18.8956 24.3495 18.9191 24.2085 18.9191H24.232Z",
            fill: e
          }), (0, u.jsx)("path", {
            d: "M24.2555 17.979C23.6679 17.979 23.2449 18.4255 23.2449 18.9896C23.2449 19.5536 23.6444 20.0002 24.2555 20.0002C24.8665 20.0002 25.2426 19.5536 25.2426 18.9896C25.2426 18.4255 24.843 17.979 24.2555 17.979ZM24.2555 19.8356C23.7384 19.8356 23.4094 19.4596 23.4094 18.9896C23.4094 18.5195 23.7384 18.1435 24.2555 18.1435C24.7725 18.1435 25.1016 18.5195 25.1016 18.9896C25.1016 19.4596 24.7725 19.8356 24.2555 19.8356Z",
            fill: e
          })]
        })),
        Yv = (0, f.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: Zv[t],
          viewBox: "0 0 92 20",
          fill: "none",
          ref: n,
          ...r,
          children: (0, u.jsx)("path", {
            d: "M9.58333 0C11.3552 0.328638 13.9663 1.12676 15.3418 1.59624C18.8854 2.8169 20.0977 4.34272 20.0977 7.76995C20.0977 11.1972 18.0461 12.3944 15.435 11.1268V4.88263C15.435 4.15493 15.2951 3.47418 14.6191 3.28639C14.1062 3.12207 13.7798 3.61502 13.7798 4.34272V19.9531L9.58333 18.615V0ZM14.5724 19.6948L23.7113 16.385C23.7113 16.385 24.947 15.9155 25.4365 15.2817C25.9261 14.6479 25.7163 13.7089 23.7347 13.0986C21.9861 12.4413 19.748 12.2066 17.9296 12.4178C16.1111 12.6056 14.8056 13.0751 14.8056 13.0751L14.5491 13.169V15.7042L19.0253 14.108C19.7947 13.8263 20.9137 13.7793 21.5432 13.9671C22.1493 14.1784 22.0328 14.554 21.2867 14.8357L14.5491 17.2535V19.6948H14.5724ZM1.91317 16.9953C4.08133 17.723 6.29612 17.8638 8.37103 17.5117C8.51091 17.5117 8.65079 17.4648 8.79067 17.4413V15.2582L6.71576 16.0094C5.94642 16.2911 4.85068 16.3615 4.22122 16.1502C3.61506 15.939 3.73163 15.5634 4.47766 15.2817L8.79067 13.7324V11.2911L2.79909 13.4507C2.79909 13.4507 1.35365 13.9202 0.491048 14.554C-0.441493 15.2582 -0.0917898 16.4554 1.93649 17.0188M24.0377 17.9812C23.4549 17.9812 23.0352 18.4272 23.0352 18.9906C23.0352 19.554 23.4316 20 24.0377 20C24.6439 20 25.0169 19.554 25.0169 18.9906C25.0169 18.4272 24.6206 17.9812 24.0377 17.9812ZM24.0377 19.8122C23.5248 19.8122 23.1984 19.4366 23.1984 18.9671C23.1984 18.4977 23.5248 18.1221 24.0377 18.1221C24.5506 18.1221 24.877 18.4977 24.877 18.9671C24.877 19.4366 24.5506 19.8122 24.0377 19.8122ZM23.6414 19.554H23.8512V19.061H23.9911C24.1543 19.061 24.2009 19.108 24.2242 19.2254C24.2476 19.2958 24.2942 19.4601 24.3175 19.5305H24.5273C24.504 19.4131 24.4574 19.2958 24.4107 19.1784C24.3641 19.0376 24.3175 18.9906 24.2476 18.9671C24.3874 18.9202 24.4574 18.8263 24.4574 18.6854C24.4574 18.4507 24.2942 18.3803 24.0844 18.3803H23.6414V19.5305V19.554ZM23.8279 18.5446H24.0144C24.131 18.5446 24.2242 18.5681 24.2242 18.7324C24.2242 18.8967 24.131 18.9202 23.9911 18.9202H23.8046V18.5446H23.8279ZM56.4436 15.9859C58.2154 15.9859 59.6375 14.554 59.6375 12.77V7.23005C59.6375 6.15024 60.5001 5.28169 61.5725 5.28169H67.7739C67.8206 5.28169 67.8672 5.23474 67.8672 5.18779V4.08451C67.8672 4.03756 67.8206 3.99061 67.7739 3.99061H60.2903C58.5185 3.99061 57.0963 5.42253 57.0963 7.20657V12.7465C57.0963 13.8263 56.2337 14.6948 55.1613 14.6948H49.0532C49.0065 14.6948 48.9599 14.7418 48.9599 14.7887V15.892C48.9599 15.939 49.0065 15.9859 49.0532 15.9859H56.4436ZM70.4084 8.49765C70.4084 9.57746 71.271 10.446 72.3434 10.446H83.2774C84.4431 10.446 85.4223 11.4085 85.399 12.5822C85.399 13.7559 84.4431 14.6948 83.2774 14.6948C83.2774 14.6948 73.6956 14.6948 70.5016 14.6948C70.455 14.6948 70.4084 14.7418 70.4084 14.7887V15.892C70.4084 15.939 70.455 15.9859 70.5016 15.9859H84.5597C86.4248 15.9859 87.9402 14.4601 87.9402 12.5822C87.9402 10.7042 86.4248 9.1784 84.5597 9.1784H73.8821C73.3692 9.1784 72.9729 8.75587 72.9729 8.26291V5.37559C72.9729 5.32864 73.0195 5.28169 73.0661 5.28169H87.4273C87.4739 5.28169 87.5205 5.23474 87.5205 5.18779V4.08451C87.5205 4.03756 87.4739 3.99061 87.4273 3.99061H70.5249C70.4783 3.99061 70.4317 4.03756 70.4317 4.08451C70.4317 4.74178 70.4317 6.87793 70.4317 8.49765M35.4847 9.15493C33.7128 9.15493 32.2907 10.5869 32.2907 12.3709C32.2907 12.3709 32.2907 14.9296 32.2907 15.892C32.2907 15.939 32.3373 15.9859 32.384 15.9859H34.762C34.8086 15.9859 34.8552 15.939 34.8552 15.892V12.3709C34.8552 11.2911 35.7178 10.4225 36.7902 10.4225H46.6286C48.4004 10.4225 49.8225 8.99061 49.8225 7.20657C49.8225 5.42253 48.4004 3.99061 46.6286 3.99061H32.4073C32.3607 3.99061 32.314 4.03756 32.314 4.08451V5.18779C32.314 5.23474 32.3607 5.28169 32.4073 5.28169H45.3696C46.442 5.28169 47.3046 6.15024 47.3046 7.23005C47.3046 8.30986 46.442 9.1784 45.3696 9.1784H35.5313L35.4847 9.15493ZM91.2507 14.9531C91.2507 15.5164 90.8543 15.9624 90.2715 15.9624C89.6887 15.9624 89.269 15.5164 89.269 14.9531C89.269 14.3897 89.6654 13.9437 90.2715 13.9437C90.8777 13.9437 91.2507 14.3897 91.2507 14.9531ZM91.0875 14.9531C91.0875 14.4836 90.7611 14.108 90.2482 14.108C89.7353 14.108 89.4089 14.4836 89.4089 14.9531C89.4089 15.4225 89.7353 15.7981 90.2482 15.7981C90.7611 15.7981 91.0875 15.4225 91.0875 14.9531ZM90.6445 15.1643C90.6912 15.2817 90.7145 15.4225 90.7611 15.5164H90.5513C90.528 15.4225 90.4813 15.2817 90.458 15.2113C90.4347 15.0704 90.3881 15.0469 90.2249 15.0469H90.085V15.5399H89.8752V14.3897H90.3181C90.528 14.3897 90.6912 14.4601 90.6912 14.6948C90.6912 14.9296 90.6212 14.9296 90.4813 14.9765C90.5513 15 90.5979 15.0469 90.6445 15.1878V15.1643ZM90.4813 14.6948C90.4813 14.5305 90.3648 14.507 90.2715 14.507H90.085V14.8826H90.2715C90.4114 14.8826 90.5046 14.8357 90.5046 14.6948H90.4813Z",
            fill: e
          })
        })),
        Qv = (0, f.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, u.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: Zv[t],
          viewBox: "0 0 33 20",
          fill: "none",
          ref: n,
          ...r,
          children: [(0, u.jsx)("path", {
            d: "M7.34117 9.61429C7.7883 9.61536 8.23491 9.59031 8.6778 9.53928C9.07276 9.49838 9.45591 9.40006 9.80952 9.24891C10.1317 9.10768 10.4019 8.89726 10.5916 8.63973C10.7887 8.3776 10.8873 8.03424 10.8873 7.60959C10.8873 7.18494 10.7887 6.8413 10.5916 6.57878C10.4014 6.32174 10.1314 6.1116 9.80952 5.97026C9.45578 5.81934 9.0727 5.72107 8.6778 5.6799C8.23491 5.6292 7.78824 5.6041 7.34117 5.60488H4.2033V9.61429H7.34117ZM8.44707 3.31884C9.59417 3.31884 10.5713 3.44063 11.3785 3.68422C12.1856 3.9278 12.8415 4.24941 13.3463 4.64907C13.8357 5.02963 14.2139 5.49737 14.4522 6.01681C14.9152 7.04079 14.9152 8.16864 14.4522 9.19267C14.2163 9.71592 13.8379 10.1872 13.3463 10.5701C12.84 10.9698 12.184 11.2913 11.3785 11.5349C10.5729 11.7785 9.59574 11.9003 8.44707 11.9003H4.2033V16.6968H0.166016V3.31884H8.44707Z",
            fill: e
          }), (0, u.jsx)("path", {
            d: "M28.2135 6.88796C27.966 6.60113 27.6617 6.35099 27.3133 6.14813C26.9401 5.9306 26.5279 5.76298 26.0916 5.65149C25.6303 5.53153 25.1494 5.4709 24.6658 5.47171C23.7565 5.47171 22.9848 5.59975 22.3508 5.85586C21.7447 6.09295 21.2157 6.44606 20.8077 6.886C20.4087 7.32589 20.1165 7.82544 19.9473 8.35721C19.7656 8.91334 19.674 9.48701 19.6752 10.0631C19.6741 10.6173 19.7652 11.1689 19.9457 11.7025C20.1182 12.2215 20.4104 12.7081 20.8061 13.1355C21.2166 13.5712 21.7452 13.9209 22.3492 14.1566C22.9838 14.4127 23.7555 14.5408 24.6643 14.5408C25.8974 14.5408 26.862 14.2659 27.5581 13.7163C28.2542 13.1666 28.6786 12.4421 28.8314 11.5428H32.742C32.6546 12.3356 32.382 13.1068 31.9395 13.8139C31.5214 14.4778 30.9439 15.0642 30.2423 15.5373C29.5097 16.0253 28.6718 16.3942 27.7732 16.6244C26.766 16.8824 25.7163 17.009 24.6619 16.9994C23.2542 16.9994 21.9895 16.8214 20.8679 16.4653C19.7463 16.1092 18.7992 15.6188 18.0265 14.9941C17.2558 14.3717 16.6513 13.6227 16.2518 12.7954C15.8351 11.9261 15.6265 10.9982 15.6379 10.0631C15.6275 9.11222 15.8369 8.16835 16.255 7.28242C16.6534 6.44298 17.2577 5.68074 18.0296 5.0436C18.8039 4.40641 19.751 3.9063 20.871 3.5433C21.991 3.1803 23.2559 2.99923 24.6658 3.00009C25.6348 2.99561 26.5999 3.10292 27.5331 3.3189C28.3948 3.51672 29.2114 3.82999 29.9506 4.24624C30.6544 4.64619 31.2534 5.15931 31.7119 5.75497C32.1855 6.3795 32.4842 7.08365 32.5863 7.81592H28.6757C28.6086 7.48158 28.4511 7.16421 28.2135 6.88796Z",
            fill: e
          })]
        })),
        $v = (0, f.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: Zv[t],
          viewBox: "0 0 104 20",
          fill: "none",
          ref: n,
          ...r,
          children: (0, u.jsx)("path", {
            d: "M9.97484 8.02222C9.98593 8.02222 10.0026 8.03333 10.0081 8.03889C12.9895 10.3111 18.0988 15.9389 16.5416 17.5278C14.7849 19.0667 12.4907 20 9.97484 20C7.45897 20 5.16475 19.0667 3.40807 17.5278C1.85089 15.9389 6.96022 10.3111 9.94159 8.03889C9.94713 8.03333 9.96376 8.02222 9.97484 8.02222ZM15.1728 1.46111C13.6434 0.55 11.992 0 9.97484 0C7.95771 0 6.30632 0.555556 4.77684 1.46111C4.76022 1.47222 4.74913 1.49444 4.76022 1.51111C4.76576 1.52778 4.78792 1.53333 4.81009 1.52778C6.7441 1.11111 9.6756 2.78333 9.95268 2.95C9.95822 2.95 9.96376 2.95556 9.97484 2.95556C9.98593 2.95556 9.99147 2.95556 9.99701 2.95C10.2741 2.78333 13.2111 1.11111 15.1396 1.52778C15.1618 1.52778 15.1784 1.52778 15.1895 1.51111C15.2006 1.49444 15.1895 1.47222 15.1728 1.46111ZM2.99245 2.86667C2.97583 2.87778 2.9592 2.88889 2.94812 2.9C1.13048 4.71111 0 7.22222 0 9.99444C0 12.7667 0.759196 14.3722 2.0393 16.0556C2.05038 16.0722 2.07255 16.0833 2.09472 16.0722C2.11134 16.0611 2.11134 16.0389 2.1058 16.0222C1.3466 13.6667 5.23125 7.95 7.24284 5.55556C7.24838 5.55 7.25393 5.53889 7.25393 5.52778C7.25393 5.51667 7.24839 5.50556 7.2373 5.49444C4.19498 2.46111 3.16424 2.78333 2.99245 2.86667ZM12.7179 5.49444C12.7068 5.5 12.7013 5.51111 12.7013 5.52778C12.7013 5.54444 12.7068 5.55 12.7124 5.55556C14.7184 7.95 18.6086 13.6667 17.8494 16.0222C17.8439 16.0389 17.8439 16.0611 17.8605 16.0722C17.8771 16.0833 17.8993 16.0722 17.9159 16.0556C19.196 14.3722 19.9552 12.2778 19.9552 9.99444C19.9552 7.71111 18.8247 4.71111 17.0071 2.9C16.996 2.88889 16.9794 2.87222 16.9628 2.86667C16.7965 2.77778 15.7603 2.45556 12.7179 5.49444ZM34.7125 16.1611H32.6731L29.1598 11.3111L25.6464 16.1611H23.6071L28.1401 9.90555L23.9618 4.13889H26.0011L29.1598 8.49444L32.3185 4.13889H34.3578L30.1794 9.90555L34.7125 16.1611ZM45.3079 12.7444C45.3079 13.8 44.9588 14.6444 44.2717 15.25C43.5845 15.8556 42.5815 16.1611 41.2958 16.1611H35.6711V10.8056H33.0001L34.114 9.27222H35.6767V4.13889H41.0631C42.2712 4.13889 43.2077 4.42778 43.8561 5C44.4989 5.57222 44.8258 6.33889 44.8258 7.26667C44.8258 8.19444 44.3049 9.3 43.2742 9.87222C43.9392 10.1278 44.449 10.5111 44.7926 11C45.1417 11.5 45.3135 12.0833 45.3135 12.7333L45.3079 12.7444ZM37.5054 9.27222H40.9412C41.6339 9.27222 42.1603 9.11667 42.5039 8.81111C42.8475 8.50556 43.0248 8.03889 43.0248 7.42222C43.0248 6.80556 42.8419 6.47222 42.4873 6.17222C42.1271 5.87222 41.6117 5.72222 40.9467 5.72222H37.5109V9.27222H37.5054ZM43.4626 12.7056C43.4626 12.0722 43.2742 11.5944 42.8974 11.2778C42.5205 10.9611 41.9498 10.8 41.1961 10.8H37.5054V14.5667H41.1961C41.9276 14.5667 42.4928 14.4056 42.8807 14.0833C43.2687 13.7611 43.4626 13.3 43.4626 12.7V12.7056ZM57.6269 10.15C57.6269 11.0778 57.4939 11.9333 57.2279 12.6833C56.9619 13.4389 56.5574 14.1111 56.0254 14.6889C55.4878 15.2667 54.8616 15.7056 54.1579 15.9944C53.4541 16.2833 52.6561 16.4278 51.7861 16.4278C50.916 16.4278 50.1014 16.2833 49.3976 15.9944C48.6939 15.7056 48.0677 15.2667 47.5467 14.6889C47.0092 14.1167 46.6047 13.4444 46.3331 12.6944C46.0671 11.9389 45.9286 11.0833 45.9286 10.15C45.9286 9.21667 46.0671 8.36667 46.3331 7.61111C46.5991 6.85556 47.0092 6.17778 47.5467 5.59445C48.0732 5.02222 48.6939 4.58889 49.3976 4.3C50.1014 4.01667 50.9049 3.87222 51.7861 3.87222C52.6672 3.87222 53.4541 4.01667 54.1579 4.3C54.8616 4.58333 55.4934 5.02222 56.0254 5.59445C56.5574 6.17778 56.9619 6.85556 57.2279 7.61111C57.4939 8.36667 57.6269 9.22222 57.6269 10.15ZM47.8183 10.15C47.8183 11.5667 48.184 12.7 48.9044 13.5222C49.6138 14.3556 50.5835 14.7778 51.7805 14.7778C52.9775 14.7778 53.9473 14.3556 54.6566 13.5222C55.3659 12.7111 55.7261 11.5778 55.7261 10.15C55.7261 8.72222 55.3659 7.58333 54.6566 6.76111C53.9362 5.93889 52.9664 5.52222 51.7805 5.52222C50.5946 5.52222 49.6248 5.93889 48.9044 6.76111C48.184 7.60556 47.8183 8.74444 47.8183 10.15ZM63.4123 9.90555L67.5906 4.13889H65.5513L62.3926 8.49444L59.2339 4.13889H57.1946L61.373 9.90555L56.84 16.1611H58.8793L62.3926 11.3111L65.906 16.1611H67.9453L63.4123 9.90555ZM81.4169 7.61111C81.1509 6.85556 80.7463 6.17778 80.2144 5.59445C79.6768 5.02222 79.0506 4.58889 78.3468 4.3C77.6431 4.01667 76.8451 3.87222 75.9751 3.87222C75.105 3.87222 74.2904 4.01667 73.5866 4.3C72.8829 4.58333 72.2567 5.02222 71.7357 5.59445C71.1982 6.17778 70.7937 6.85556 70.5221 7.61111C70.2561 8.36667 70.1176 9.22222 70.1176 10.15C70.1176 11.0778 70.2561 11.9389 70.5221 12.6944C70.7881 13.45 71.1982 14.1222 71.7357 14.6889C72.2622 15.2667 72.8829 15.7056 73.5866 15.9944C74.2904 16.2833 75.0939 16.4278 75.9751 16.4278C76.8562 16.4278 77.6431 16.2833 78.3468 15.9944C79.0506 15.7056 79.6824 15.2667 80.2144 14.6889C80.7463 14.1111 81.1509 13.4389 81.4169 12.6833C81.6829 11.9278 81.8159 11.0778 81.8159 10.15C81.8159 9.22222 81.6829 8.36667 81.4169 7.61111ZM78.8456 13.5222C78.1363 14.3556 77.1665 14.7778 75.9695 14.7778C74.7725 14.7778 73.8027 14.3556 73.0934 13.5222C72.373 12.7 72.0073 11.5667 72.0073 10.15C72.0073 8.73333 72.373 7.60556 73.0934 6.76111C73.8138 5.93889 74.7836 5.52222 75.9695 5.52222C77.1554 5.52222 78.1252 5.93889 78.8456 6.76111C79.5549 7.58333 79.9151 8.72222 79.9151 10.15C79.9151 11.5778 79.5549 12.7111 78.8456 13.5222ZM96.7504 5.78889V9.27222H102.708V10.8056H96.7504V14.5056H103.483V16.1556H94.9162V4.13333H103.483V5.78333H96.7504V5.78889ZM93.0874 4.13889V16.1611H90.9872C90.9872 16.1556 87.3076 10.3444 87.3076 10.3444C86.3101 8.77778 85.5564 7.54445 85.0743 6.67222V16.1611H83.2955V4.13889H85.3957C85.3957 4.14444 89.092 9.95556 89.092 9.95556C90.0285 11.4389 90.7766 12.6833 91.3252 13.65V4.13889H93.0874Z",
            fill: e
          })
        })),
        Jv = (0, f.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: Zv[t],
          viewBox: "0 0 158 20",
          fill: "none",
          ref: n,
          ...r,
          children: (0, u.jsx)("path", {
            d: "M10.02 8.01603C13.0261 10.3006 18.1563 15.9519 16.5932 17.515C14.8297 19.0381 12.5451 20 9.97996 20C7.41483 20 5.13026 19.0782 3.36673 17.515C1.80361 15.9118 6.93387 10.3006 9.93988 8.01603H10.02ZM15.2305 1.48297C13.7074 0.561122 12.024 0 10.02 0C8.01603 0 6.33266 0.561122 4.80962 1.48297C4.80962 1.48297 4.80962 1.48297 4.80962 1.52305C4.80962 1.52305 4.80962 1.52305 4.8497 1.52305C6.77355 1.12224 9.73948 2.76553 10.02 2.92585C10.3006 2.76553 13.2265 1.08216 15.1904 1.52305C15.1904 1.52305 15.1904 1.52305 15.2305 1.52305C15.2305 1.52305 15.2305 1.52305 15.2305 1.48297ZM3.00601 2.88577C3.00601 2.88577 3.00601 2.88577 2.96593 2.88577C1.12224 4.72946 0 7.25451 0 10.02C0 12.7856 0.761523 14.3888 2.04409 16.1122C2.04409 16.1122 2.04409 16.1122 2.08417 16.1122C2.08417 16.1122 2.08417 16.1122 2.08417 16.0721C1.32265 13.7074 5.21042 7.97595 7.25451 5.57114C4.20842 2.48497 3.16633 2.80561 3.00601 2.88577ZM12.7856 5.49098C14.7896 7.89579 18.7174 13.6273 17.9559 15.992C17.9559 15.992 17.9559 15.992 17.9559 16.0321C17.9559 16.0321 17.9559 16.0321 17.996 16.0321C19.2786 14.3487 20.0401 12.2244 20.0401 9.97996C20.0401 7.73547 18.9178 4.68938 17.0741 2.88577C17.0741 2.88577 17.0741 2.88577 17.0341 2.88577C16.8737 2.80561 15.8317 2.48497 12.7856 5.53106V5.49098ZM34.8697 16.1924H32.8256L29.2986 11.3427L25.7715 16.1924H23.7275L28.2966 9.93988L24.0882 4.16834H26.1323L29.2986 8.53707L32.4649 4.16834H34.509L30.3006 9.93988L34.8697 16.1924ZM45.5311 12.7856C45.5311 13.8277 45.1703 14.6693 44.489 15.3106C43.8076 15.9118 42.8056 16.2325 41.483 16.2325H35.8317V10.8617H33.1463L34.2685 9.33868H35.8317V4.20842H41.2425C42.4449 4.20842 43.4068 4.48898 44.0481 5.09018C44.6894 5.6513 45.01 6.41283 45.01 7.37475C45.01 8.33667 44.489 9.41884 43.4469 9.97996C44.1283 10.2204 44.6092 10.6212 44.9699 11.1022C45.3307 11.5832 45.491 12.1844 45.491 12.8257L45.5311 12.7856ZM37.6753 9.2986H41.1222C41.8036 9.2986 42.3647 9.13828 42.6854 8.81764C43.0461 8.49699 43.2064 8.05611 43.2064 7.41483C43.2064 6.77355 43.0461 6.45291 42.6854 6.17234C42.3246 5.8517 41.8036 5.73146 41.1222 5.73146H37.6753V9.2986ZM43.6473 12.7455C43.6473 12.1042 43.4469 11.6232 43.0862 11.3026C42.7254 10.982 42.1242 10.8216 41.3627 10.8216H37.6753V14.5892H41.3627C42.0842 14.5892 42.6453 14.4289 43.0461 14.1082C43.4469 13.7876 43.6473 13.3066 43.6473 12.7054V12.7455ZM57.8757 10.1804C57.8757 11.1022 57.7555 11.984 57.4749 12.7054C57.1944 13.4669 56.7936 14.1483 56.2725 14.7094C55.7515 15.2705 55.1102 15.7114 54.3888 16.0321C53.6673 16.3126 52.8657 16.4729 52.024 16.4729C51.1824 16.4729 50.3407 16.3126 49.6192 16.0321C48.8978 15.7515 48.2966 15.3106 47.7755 14.7094C47.2545 14.1483 46.8136 13.4669 46.5731 12.7054C46.3327 11.9439 46.1723 11.1022 46.1723 10.1403C46.1723 9.17836 46.2926 8.33667 46.5731 7.57515C46.8537 6.81363 47.2545 6.13226 47.7755 5.57114C48.2966 5.01002 48.9379 4.56914 49.6593 4.28858C50.3808 4.00802 51.1824 3.8477 52.0641 3.8477C52.9459 3.8477 53.7475 4.00802 54.4289 4.28858C55.1503 4.56914 55.7515 5.01002 56.3126 5.57114C56.8337 6.17234 57.2345 6.81363 57.515 7.57515C57.7956 8.33667 57.9158 9.17836 57.9158 10.1403L57.8757 10.1804ZM48.016 10.1804C48.016 11.5832 48.3768 12.7455 49.0982 13.5471C49.8196 14.3888 50.7816 14.7896 51.984 14.7896C53.1864 14.7896 54.1483 14.3487 54.8697 13.5471C55.5912 12.7455 55.9519 11.5832 55.9519 10.1804C55.9519 8.77756 55.5912 7.61523 54.8697 6.77355C54.1483 5.93186 53.1864 5.53106 51.984 5.53106C50.7816 5.53106 49.8196 5.93186 49.0982 6.77355C48.3768 7.61523 48.016 8.77756 48.016 10.1804ZM63.6874 9.93988L67.8958 4.16834H65.8517L62.6854 8.53707L59.519 4.16834H57.4749L61.6834 9.93988L57.1142 16.1924H59.1583L62.6854 11.3427L66.2124 16.1924H68.2565L63.6874 9.93988ZM83.5671 5.81162V9.2986H89.5391V10.8216H83.5671V14.509H90.3407V16.1523H81.7234V4.16834H90.3407V5.81162H83.5671ZM79.3186 10.6212C78.7174 10.0601 77.7154 9.65932 76.3527 9.33868L75.3106 9.13828C74.3086 8.93788 73.6272 8.65731 73.2665 8.37675C72.9058 8.09619 72.7054 7.69539 72.7054 7.13427C72.7054 6.57315 72.9058 6.17234 73.3066 5.89178C73.7074 5.61122 74.3086 5.4509 75.1102 5.4509C75.9118 5.4509 76.8337 5.6513 77.3146 6.01202C77.7555 6.37275 78.0361 6.93387 78.0761 7.69539H79.9198C79.9198 6.49299 79.479 5.57114 78.6774 4.88978C77.8757 4.20842 76.6733 3.88778 75.1102 3.88778C73.5471 3.88778 72.7455 4.20842 71.984 4.76954C71.2224 5.33066 70.8216 6.17234 70.8216 7.17435C70.8216 8.17635 71.1423 8.93788 71.7836 9.499C72.4248 10.0601 73.3467 10.4609 74.5892 10.7014L75.6313 10.9018C76.6333 11.1423 77.3547 11.3828 77.7555 11.6633C78.1563 11.9439 78.3166 12.3447 78.3166 12.8657C78.3166 13.3868 78.0761 13.988 77.5952 14.3487C77.1142 14.6693 76.4329 14.8697 75.5511 14.8697C74.6693 14.8697 73.6673 14.6293 73.1463 14.1884C72.6252 13.7475 72.3046 13.0661 72.3046 12.1844H70.4609C70.4609 13.5872 70.9419 14.6693 71.8236 15.3507C72.7054 16.0321 73.9479 16.4329 75.5511 16.4329C77.1543 16.4329 78.1563 16.1122 78.998 15.4709C79.8397 14.8297 80.2405 13.9479 80.2405 12.8257C80.2405 11.7034 79.9198 11.1423 79.3186 10.5812V10.6212ZM101.403 14.7094L101.283 12.8257C101.283 12.1443 101.122 11.6232 100.842 11.2224C100.561 10.8216 100.16 10.5411 99.5992 10.3808C100.2 10.1804 100.721 9.81964 101.042 9.33868C101.403 8.85772 101.563 8.21643 101.563 7.49499C101.563 6.45291 101.202 5.6513 100.441 5.0501C99.7194 4.4489 98.6773 4.16834 97.3948 4.16834H92.1443V16.1924H93.988V11.2625H97.4749C98.1563 11.2625 98.6773 11.4228 98.998 11.7435C99.3186 12.0641 99.479 12.6253 99.519 13.3868V14.6693C99.5992 15.3507 99.7194 15.8717 99.9198 16.1924H101.804C101.603 15.7916 101.443 15.3106 101.403 14.7094ZM94.0281 5.73146H97.3547C98.1162 5.73146 98.7174 5.89178 99.1182 6.21242C99.519 6.53307 99.7194 7.01403 99.7194 7.65531C99.7194 8.29659 99.519 8.81763 99.1182 9.17836C98.7174 9.53908 98.1563 9.6994 97.4749 9.6994H94.0281V5.73146ZM103.246 16.1924H105.09V4.16834H103.246V16.2325V16.1924ZM115.551 5.81162V4.16834H106.934V16.1924H115.551V14.5491H108.778V10.8617H114.749V9.33868H108.778V5.8517H115.551V5.81162ZM125.331 10.6212C124.729 10.0601 123.727 9.65932 122.365 9.33868L121.323 9.13828C120.321 8.93788 119.639 8.65731 119.279 8.37675C118.918 8.09619 118.717 7.69539 118.717 7.13427C118.717 6.57315 118.918 6.17234 119.319 5.89178C119.719 5.61122 120.321 5.4509 121.122 5.4509C121.924 5.4509 122.846 5.6513 123.327 6.01202C123.808 6.37275 124.048 6.93387 124.088 7.69539H125.892C125.892 6.49299 125.451 5.57114 124.649 4.88978C123.848 4.20842 122.645 3.88778 121.082 3.88778C119.519 3.88778 118.717 4.20842 117.956 4.76954C117.194 5.33066 116.794 6.17234 116.794 7.17435C116.794 8.17635 117.114 8.93788 117.755 9.499C118.397 10.0601 119.319 10.4609 120.561 10.7014L121.603 10.9018C122.605 11.1423 123.327 11.3828 123.727 11.6633C124.128 11.9439 124.329 12.3447 124.329 12.8657C124.329 13.3868 124.088 13.988 123.607 14.3487C123.126 14.6693 122.445 14.8697 121.563 14.8697C120.681 14.8697 119.679 14.6293 119.158 14.1884C118.637 13.7475 118.357 13.0661 118.317 12.1844H116.473C116.473 13.5872 116.954 14.6693 117.836 15.3507C118.717 16.0721 119.96 16.4329 121.563 16.4329C123.166 16.4329 124.168 16.1122 125.01 15.4709C125.852 14.8297 126.252 13.9479 126.252 12.8257C126.252 11.7034 125.932 11.1423 125.331 10.5812V10.6212ZM144.93 2.64529H144.008V17.7154H144.93V2.64529ZM136.513 9.93988L140.721 4.16834H138.677L135.511 8.53707L132.345 4.16834H130.301L134.509 9.93988L129.94 16.1924H131.984L135.511 11.3427L139.038 16.1924H141.082L136.513 9.93988ZM156.713 10.6212C156.112 10.0601 155.11 9.65932 153.747 9.33868L152.705 9.13828C151.703 8.93788 151.022 8.65731 150.661 8.37675C150.301 8.09619 150.1 7.69539 150.1 7.13427C150.1 6.57315 150.301 6.17234 150.701 5.89178C151.102 5.61122 151.703 5.4509 152.505 5.4509C153.307 5.4509 154.228 5.6513 154.709 6.01202C155.19 6.37275 155.431 6.93387 155.471 7.69539H157.275C157.275 6.49299 156.834 5.57114 156.032 4.88978C155.23 4.20842 154.028 3.88778 152.465 3.88778C150.902 3.88778 150.1 4.20842 149.339 4.76954C148.577 5.33066 148.176 6.17234 148.176 7.17435C148.176 8.17635 148.497 8.93788 149.138 9.499C149.78 10.0601 150.701 10.4609 151.944 10.7014L152.986 10.9018C153.988 11.1423 154.709 11.3828 155.11 11.6633C155.511 11.9439 155.711 12.3447 155.711 12.8657C155.711 13.3868 155.471 13.988 154.99 14.3487C154.509 14.6693 153.828 14.8697 152.946 14.8697C152.064 14.8697 151.062 14.6293 150.541 14.1884C150.02 13.7475 149.739 13.0661 149.699 12.1844H147.856C147.856 13.5872 148.337 14.6693 149.218 15.3507C150.1 16.0721 151.343 16.4329 152.946 16.4329C154.549 16.4329 155.551 16.1122 156.393 15.4709C157.234 14.8297 157.635 13.9479 157.635 12.8257C157.635 11.7034 157.315 11.1423 156.713 10.5812V10.6212Z",
            fill: e
          })
        }));

      function ey(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function ty(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ry(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ty(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = ey(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ty(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ny(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var oy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ay = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ry(ry({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) oy(l, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ny(e.variantClassNames, e => ny(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_1lhhotm0",
          variantClassNames: {
            size: {
              MD: "foundry_1lhhotm1",
              LG: "foundry_1lhhotm2",
              XL: "foundry_1lhhotm3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      (0, f.forwardRef)(({
        logo: e,
        size: t,
        asChild: r,
        children: n,
        ...o
      }, a) => {
        const s = (0, x.v6)({
            className: ay({
              size: t
            }),
            size: t
          }, o),
          l = i[e];
        if (r && (0, f.isValidElement)(n)) {
          const e = (0, f.cloneElement)(n, n.props, (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(l, {
              size: t,
              "aria-hidden": !0
            }), n.props.children]
          }));
          return (0, u.jsx)(d.$, {
            asChild: !0,
            size: t,
            ref: a,
            ...o,
            children: e
          })
        }
        return (0, u.jsx)(d.$, {
          ...s,
          ref: a,
          children: (0, u.jsx)(l, {
            size: t,
            "aria-hidden": !0
          })
        })
      })
    }
  }
]);