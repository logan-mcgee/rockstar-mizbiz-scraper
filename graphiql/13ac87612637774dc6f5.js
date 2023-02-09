"use strict";
(self.webpackChunk_rockstargames_graphiql = self.webpackChunk_rockstargames_graphiql || []).push([
  [871], {
    9871: (t, e, i) => {
      i.r(e), i.d(e, {
        s: () => l
      });
      var n = i(1703),
        o = Object.defineProperty,
        s = (t, e) => o(t, "name", {
          value: e,
          configurable: !0
        });

      function r(t, e) {
        return e.forEach((function(e) {
          e && "string" != typeof e && !Array.isArray(e) && Object.keys(e).forEach((function(i) {
            if ("default" !== i && !(i in t)) {
              var n = Object.getOwnPropertyDescriptor(e, i);
              Object.defineProperty(t, i, n.get ? n : {
                enumerable: !0,
                get: function() {
                  return e[i]
                }
              })
            }
          }))
        })), Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }))
      }
      s(r, "_mergeNamespaces");
      var c = {
        exports: {}
      };
      ! function(t) {
        function e(t, e) {
          if (this.cm = t, this.options = e, this.widget = null, this.debounce = 0, this.tick = 0, this.startPos = this.cm.getCursor("start"), this.startLen = this.cm.getLine(this.startPos.line).length - this.cm.getSelection().length, this.options.updateOnCursorActivity) {
            var i = this;
            t.on("cursorActivity", this.activityFunc = function() {
              i.cursorActivity()
            })
          }
        }
        t.showHint = function(t, e, i) {
          if (!e) return t.showHint(i);
          i && i.async && (e.async = !0);
          var n = {
            hint: e
          };
          if (i)
            for (var o in i) n[o] = i[o];
          return t.showHint(n)
        }, t.defineExtension("showHint", (function(i) {
          i = o(this, this.getCursor("start"), i);
          var n = this.listSelections();
          if (!(n.length > 1)) {
            if (this.somethingSelected()) {
              if (!i.hint.supportsSelection) return;
              for (var s = 0; s < n.length; s++)
                if (n[s].head.line != n[s].anchor.line) return
            }
            this.state.completionActive && this.state.completionActive.close();
            var r = this.state.completionActive = new e(this, i);
            r.options.hint && (t.signal(this, "startCompletion", this), r.update(!0))
          }
        })), t.defineExtension("closeHint", (function() {
          this.state.completionActive && this.state.completionActive.close()
        })), s(e, "Completion");
        var i = window.requestAnimationFrame || function(t) {
            return setTimeout(t, 1e3 / 60)
          },
          n = window.cancelAnimationFrame || clearTimeout;

        function o(t, e, i) {
          var n = t.options.hintOptions,
            o = {};
          for (var s in d) o[s] = d[s];
          if (n)
            for (var s in n) void 0 !== n[s] && (o[s] = n[s]);
          if (i)
            for (var s in i) void 0 !== i[s] && (o[s] = i[s]);
          return o.hint.resolve && (o.hint = o.hint.resolve(t, e)), o
        }

        function r(t) {
          return "string" == typeof t ? t : t.text
        }

        function c(t, e) {
          var i = {
            Up: function() {
              e.moveFocus(-1)
            },
            Down: function() {
              e.moveFocus(1)
            },
            PageUp: function() {
              e.moveFocus(1 - e.menuSize(), !0)
            },
            PageDown: function() {
              e.moveFocus(e.menuSize() - 1, !0)
            },
            Home: function() {
              e.setFocus(0)
            },
            End: function() {
              e.setFocus(e.length - 1)
            },
            Enter: e.pick,
            Tab: e.pick,
            Esc: e.close
          };
          /Mac/.test(navigator.platform) && (i["Ctrl-P"] = function() {
            e.moveFocus(-1)
          }, i["Ctrl-N"] = function() {
            e.moveFocus(1)
          });
          var n = t.options.customKeys,
            o = n ? {} : i;

          function r(t, n) {
            var r;
            r = "string" != typeof n ? s((function(t) {
              return n(t, e)
            }), "bound") : i.hasOwnProperty(n) ? i[n] : n, o[t] = r
          }
          if (s(r, "addBinding"), n)
            for (var c in n) n.hasOwnProperty(c) && r(c, n[c]);
          var l = t.options.extraKeys;
          if (l)
            for (var c in l) l.hasOwnProperty(c) && r(c, l[c]);
          return o
        }

        function l(t, e) {
          for (; e && e != t;) {
            if ("LI" === e.nodeName.toUpperCase() && e.parentNode == t) return e;
            e = e.parentNode
          }
        }

        function a(e, i) {
          this.id = "cm-complete-" + Math.floor(Math.random(1e6)), this.completion = e, this.data = i, this.picked = !1;
          var n = this,
            o = e.cm,
            s = o.getInputField().ownerDocument,
            a = s.defaultView || s.parentWindow,
            h = this.hints = s.createElement("ul");
          h.setAttribute("role", "listbox"), h.setAttribute("aria-expanded", "true"), h.id = this.id;
          var u = e.cm.options.theme;
          h.className = "CodeMirror-hints " + u, this.selectedHint = i.selectedHint || 0;
          for (var f = i.list, d = 0; d < f.length; ++d) {
            var p = h.appendChild(s.createElement("li")),
              m = f[d],
              g = "CodeMirror-hint" + (d != this.selectedHint ? "" : " CodeMirror-hint-active");
            null != m.className && (g = m.className + " " + g), p.className = g, d == this.selectedHint && p.setAttribute("aria-selected", "true"), p.id = this.id + "-" + d, p.setAttribute("role", "option"), m.render ? m.render(p, i, m) : p.appendChild(s.createTextNode(m.displayText || r(m))), p.hintId = d
          }
          var v = e.options.container || s.body,
            y = o.cursorCoords(e.options.alignWithWord ? i.from : null),
            b = y.left,
            w = y.bottom,
            H = !0,
            A = 0,
            C = 0;
          if (v !== s.body) {
            var k = -1 !== ["absolute", "relative", "fixed"].indexOf(a.getComputedStyle(v).position) ? v : v.offsetParent,
              x = k.getBoundingClientRect(),
              O = s.body.getBoundingClientRect();
            A = x.left - O.left - k.scrollLeft, C = x.top - O.top - k.scrollTop
          }
          h.style.left = b - A + "px", h.style.top = w - C + "px";
          var S = a.innerWidth || Math.max(s.body.offsetWidth, s.documentElement.offsetWidth),
            T = a.innerHeight || Math.max(s.body.offsetHeight, s.documentElement.offsetHeight);
          v.appendChild(h), o.getInputField().setAttribute("aria-autocomplete", "list"), o.getInputField().setAttribute("aria-owns", this.id), o.getInputField().setAttribute("aria-activedescendant", this.id + "-" + this.selectedHint);
          var M, F = e.options.moveOnOverlap ? h.getBoundingClientRect() : new DOMRect,
            N = !!e.options.paddingForScrollbar && h.scrollHeight > h.clientHeight + 1;
          if (setTimeout((function() {
              M = o.getScrollInfo()
            })), F.bottom - T > 0) {
            var P = F.bottom - F.top;
            if (y.top - (y.bottom - F.top) - P > 0) h.style.top = (w = y.top - P - C) + "px", H = !1;
            else if (P > T) {
              h.style.height = T - 5 + "px", h.style.top = (w = y.bottom - F.top - C) + "px";
              var E = o.getCursor();
              i.from.ch != E.ch && (y = o.cursorCoords(E), h.style.left = (b = y.left - A) + "px", F = h.getBoundingClientRect())
            }
          }
          var I, W = F.right - S;
          if (N && (W += o.display.nativeBarWidth), W > 0 && (F.right - F.left > S && (h.style.width = S - 5 + "px", W -= F.right - F.left - S), h.style.left = (b = y.left - W - A) + "px"), N)
            for (var R = h.firstChild; R; R = R.nextSibling) R.style.paddingRight = o.display.nativeBarWidth + "px";
          o.addKeyMap(this.keyMap = c(e, {
            moveFocus: function(t, e) {
              n.changeActive(n.selectedHint + t, e)
            },
            setFocus: function(t) {
              n.changeActive(t)
            },
            menuSize: function() {
              return n.screenAmount()
            },
            length: f.length,
            close: function() {
              e.close()
            },
            pick: function() {
              n.pick()
            },
            data: i
          })), e.options.closeOnUnfocus && (o.on("blur", this.onBlur = function() {
            I = setTimeout((function() {
              e.close()
            }), 100)
          }), o.on("focus", this.onFocus = function() {
            clearTimeout(I)
          })), o.on("scroll", this.onScroll = function() {
            var t = o.getScrollInfo(),
              i = o.getWrapperElement().getBoundingClientRect();
            M || (M = o.getScrollInfo());
            var n = w + M.top - t.top,
              r = n - (a.pageYOffset || (s.documentElement || s.body).scrollTop);
            if (H || (r += h.offsetHeight), r <= i.top || r >= i.bottom) return e.close();
            h.style.top = n + "px", h.style.left = b + M.left - t.left + "px"
          }), t.on(h, "dblclick", (function(t) {
            var e = l(h, t.target || t.srcElement);
            e && null != e.hintId && (n.changeActive(e.hintId), n.pick())
          })), t.on(h, "click", (function(t) {
            var i = l(h, t.target || t.srcElement);
            i && null != i.hintId && (n.changeActive(i.hintId), e.options.completeOnSingleClick && n.pick())
          })), t.on(h, "mousedown", (function() {
            setTimeout((function() {
              o.focus()
            }), 20)
          }));
          var B = this.getSelectedHintRange();
          return 0 === B.from && 0 === B.to || this.scrollToActive(), t.signal(i, "select", f[this.selectedHint], h.childNodes[this.selectedHint]), !0
        }

        function h(t, e) {
          if (!t.somethingSelected()) return e;
          for (var i = [], n = 0; n < e.length; n++) e[n].supportsSelection && i.push(e[n]);
          return i
        }

        function u(t, e, i, n) {
          if (t.async) t(e, n, i);
          else {
            var o = t(e, i);
            o && o.then ? o.then(n) : n(o)
          }
        }

        function f(e, i) {
          var n, o = e.getHelpers(i, "hint");
          if (o.length) {
            var r = s((function(t, e, i) {
              var n = h(t, o);

              function r(o) {
                if (o == n.length) return e(null);
                u(n[o], t, i, (function(t) {
                  t && t.list.length > 0 ? e(t) : r(o + 1)
                }))
              }
              s(r, "run"), r(0)
            }), "resolved");
            return r.async = !0, r.supportsSelection = !0, r
          }
          return (n = e.getHelper(e.getCursor(), "hintWords")) ? function(e) {
            return t.hint.fromList(e, {
              words: n
            })
          } : t.hint.anyword ? function(e, i) {
            return t.hint.anyword(e, i)
          } : function() {}
        }
        e.prototype = {
          close: function() {
            this.active() && (this.cm.state.completionActive = null, this.tick = null, this.options.updateOnCursorActivity && this.cm.off("cursorActivity", this.activityFunc), this.widget && this.data && t.signal(this.data, "close"), this.widget && this.widget.close(), t.signal(this.cm, "endCompletion", this.cm))
          },
          active: function() {
            return this.cm.state.completionActive == this
          },
          pick: function(e, i) {
            var n = e.list[i],
              o = this;
            this.cm.operation((function() {
              n.hint ? n.hint(o.cm, e, n) : o.cm.replaceRange(r(n), n.from || e.from, n.to || e.to, "complete"), t.signal(e, "pick", n), o.cm.scrollIntoView()
            })), this.options.closeOnPick && this.close()
          },
          cursorActivity: function() {
            this.debounce && (n(this.debounce), this.debounce = 0);
            var t = this.startPos;
            this.data && (t = this.data.from);
            var e = this.cm.getCursor(),
              o = this.cm.getLine(e.line);
            if (e.line != this.startPos.line || o.length - e.ch != this.startLen - this.startPos.ch || e.ch < t.ch || this.cm.somethingSelected() || !e.ch || this.options.closeCharacters.test(o.charAt(e.ch - 1))) this.close();
            else {
              var s = this;
              this.debounce = i((function() {
                s.update()
              })), this.widget && this.widget.disable()
            }
          },
          update: function(t) {
            if (null != this.tick) {
              var e = this,
                i = ++this.tick;
              u(this.options.hint, this.cm, this.options, (function(n) {
                e.tick == i && e.finishUpdate(n, t)
              }))
            }
          },
          finishUpdate: function(e, i) {
            this.data && t.signal(this.data, "update");
            var n = this.widget && this.widget.picked || i && this.options.completeSingle;
            this.widget && this.widget.close(), this.data = e, e && e.list.length && (n && 1 == e.list.length ? this.pick(e, 0) : (this.widget = new a(this, e), t.signal(e, "shown")))
          }
        }, s(o, "parseOptions"), s(r, "getText"), s(c, "buildKeyMap"), s(l, "getHintElement"), s(a, "Widget"), a.prototype = {
          close: function() {
            if (this.completion.widget == this) {
              this.completion.widget = null, this.hints.parentNode && this.hints.parentNode.removeChild(this.hints), this.completion.cm.removeKeyMap(this.keyMap);
              var t = this.completion.cm.getInputField();
              t.removeAttribute("aria-activedescendant"), t.removeAttribute("aria-owns");
              var e = this.completion.cm;
              this.completion.options.closeOnUnfocus && (e.off("blur", this.onBlur), e.off("focus", this.onFocus)), e.off("scroll", this.onScroll)
            }
          },
          disable: function() {
            this.completion.cm.removeKeyMap(this.keyMap);
            var t = this;
            this.keyMap = {
              Enter: function() {
                t.picked = !0
              }
            }, this.completion.cm.addKeyMap(this.keyMap)
          },
          pick: function() {
            this.completion.pick(this.data, this.selectedHint)
          },
          changeActive: function(e, i) {
            if (e >= this.data.list.length ? e = i ? this.data.list.length - 1 : 0 : e < 0 && (e = i ? 0 : this.data.list.length - 1), this.selectedHint != e) {
              var n = this.hints.childNodes[this.selectedHint];
              n && (n.className = n.className.replace(" CodeMirror-hint-active", ""), n.removeAttribute("aria-selected")), (n = this.hints.childNodes[this.selectedHint = e]).className += " CodeMirror-hint-active", n.setAttribute("aria-selected", "true"), this.completion.cm.getInputField().setAttribute("aria-activedescendant", n.id), this.scrollToActive(), t.signal(this.data, "select", this.data.list[this.selectedHint], n)
            }
          },
          scrollToActive: function() {
            var t = this.getSelectedHintRange(),
              e = this.hints.childNodes[t.from],
              i = this.hints.childNodes[t.to],
              n = this.hints.firstChild;
            e.offsetTop < this.hints.scrollTop ? this.hints.scrollTop = e.offsetTop - n.offsetTop : i.offsetTop + i.offsetHeight > this.hints.scrollTop + this.hints.clientHeight && (this.hints.scrollTop = i.offsetTop + i.offsetHeight - this.hints.clientHeight + n.offsetTop)
          },
          screenAmount: function() {
            return Math.floor(this.hints.clientHeight / this.hints.firstChild.offsetHeight) || 1
          },
          getSelectedHintRange: function() {
            var t = this.completion.options.scrollMargin || 0;
            return {
              from: Math.max(0, this.selectedHint - t),
              to: Math.min(this.data.list.length - 1, this.selectedHint + t)
            }
          }
        }, s(h, "applicableHelpers"), s(u, "fetchHints"), s(f, "resolveAutoHints"), t.registerHelper("hint", "auto", {
          resolve: f
        }), t.registerHelper("hint", "fromList", (function(e, i) {
          var n, o = e.getCursor(),
            s = e.getTokenAt(o),
            r = t.Pos(o.line, s.start),
            c = o;
          s.start < o.ch && /\w/.test(s.string.charAt(o.ch - s.start - 1)) ? n = s.string.substr(0, o.ch - s.start) : (n = "", r = o);
          for (var l = [], a = 0; a < i.words.length; a++) {
            var h = i.words[a];
            h.slice(0, n.length) == n && l.push(h)
          }
          if (l.length) return {
            list: l,
            from: r,
            to: c
          }
        })), t.commands.autocomplete = t.showHint;
        var d = {
          hint: t.hint.auto,
          completeSingle: !0,
          alignWithWord: !0,
          closeCharacters: /[\s()\[\]{};:>,]/,
          closeOnPick: !0,
          closeOnUnfocus: !0,
          updateOnCursorActivity: !0,
          completeOnSingleClick: !0,
          container: null,
          customKeys: null,
          extraKeys: null,
          paddingForScrollbar: !0,
          moveOnOverlap: !0
        };
        t.defineOption("hintOptions", null)
      }(n.a.exports);
      var l = r({
        __proto__: null,
        default: c.exports
      }, [c.exports])
    }
  }
]);