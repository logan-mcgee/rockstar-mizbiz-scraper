try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4e27d444-ad1f-46fd-a7ef-c0f769acd647", e._sentryDebugIdIdentifier = "sentry-dbid-4e27d444-ad1f-46fd-a7ef-c0f769acd647")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [1987], {
    79: (e, t, n) => {
      "use strict";
      var r = n(87126),
        i = n(52734);
      e.exports = function(e, t, n, o, u, a) {
        var c, s = this,
          l = 0;
        return function(t) {
          return e.enter(o), e.enter(u), e.consume(t), e.exit(u), e.enter(a), f
        };

        function f(i) {
          return null === i || 91 === i || 93 === i && !c || 94 === i && !l && "_hiddenFootnoteSupport" in s.parser.constructs || l > 999 ? n(i) : 93 === i ? (e.exit(a), e.enter(u), e.consume(i), e.exit(u), e.exit(o), t) : r(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), f) : (e.enter("chunkString", {
            contentType: "string"
          }), p(i))
        }

        function p(t) {
          return null === t || 91 === t || 93 === t || r(t) || l++ > 999 ? (e.exit("chunkString"), f(t)) : (e.consume(t), c = c || !i(t), 92 === t ? h : p)
        }

        function h(t) {
          return 91 === t || 92 === t || 93 === t ? (e.consume(t), l++, p) : p(t)
        }
      }
    },
    660: e => {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        n = Object.prototype.toString,
        r = Object.defineProperty,
        i = Object.getOwnPropertyDescriptor,
        o = function(e) {
          return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === n.call(e)
        },
        u = function(e) {
          if (!e || "[object Object]" !== n.call(e)) return !1;
          var r, i = t.call(e, "constructor"),
            o = e.constructor && e.constructor.prototype && t.call(e.constructor.prototype, "isPrototypeOf");
          if (e.constructor && !i && !o) return !1;
          for (r in e);
          return void 0 === r || t.call(e, r)
        },
        a = function(e, t) {
          r && "__proto__" === t.name ? r(e, t.name, {
            enumerable: !0,
            configurable: !0,
            value: t.newValue,
            writable: !0
          }) : e[t.name] = t.newValue
        },
        c = function(e, n) {
          if ("__proto__" === n) {
            if (!t.call(e, n)) return;
            if (i) return i(e, n).value
          }
          return e[n]
        };
      e.exports = function e() {
        var t, n, r, i, s, l, f = arguments[0],
          p = 1,
          h = arguments.length,
          d = !1;
        for ("boolean" == typeof f && (d = f, f = arguments[1] || {}, p = 2), (null == f || "object" != typeof f && "function" != typeof f) && (f = {}); p < h; ++p)
          if (null != (t = arguments[p]))
            for (n in t) r = c(f, n), f !== (i = c(t, n)) && (d && i && (u(i) || (s = o(i))) ? (s ? (s = !1, l = r && o(r) ? r : []) : l = r && u(r) ? r : {}, a(f, {
              name: n,
              newValue: e(d, l, i)
            })) : void 0 !== i && a(f, {
              name: n,
              newValue: i
            }));
        return f
      }
    },
    2277: (e, t, n) => {
      "use strict";
      var r = n(51536),
        i = {
          name: "characterEscape",
          tokenize: function(e, t, n) {
            return function(t) {
              return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i
            };

            function i(i) {
              return r(i) ? (e.enter("characterEscapeValue"), e.consume(i), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(i)
            }
          }
        };
      e.exports = i
    },
    3241: (e, t, n) => {
      "use strict";
      var r = n(44808);
      e.exports = function(e) {
        return function(t) {
          return e.test(r(t))
        }
      }
    },
    3319: e => {
      "use strict";
      var t = [].splice;
      e.exports = t
    },
    4970: (e, t, n) => {
      "use strict";
      var r = n(47324),
        i = n(43489),
        o = n(660),
        u = n(66751),
        a = n(15965),
        c = n(49904);
      e.exports = function e() {
        var t, n = [],
          i = a(),
          v = {},
          x = -1;
        return E.data = function(e, n) {
          return "string" == typeof e ? 2 === arguments.length ? (m("data", t), v[e] = n, E) : l.call(v, e) && v[e] || null : e ? (m("data", t), v = e, E) : v
        }, E.freeze = b, E.attachers = n, E.use = function(e) {
          var r;
          if (m("use", t), null == e);
          else if ("function" == typeof e) l.apply(null, arguments);
          else {
            if ("object" != typeof e) throw new Error("Expected usable value, not `" + e + "`");
            "length" in e ? c(e) : i(e)
          }
          return r && (v.settings = o(v.settings || {}, r)), E;

          function i(e) {
            c(e.plugins), e.settings && (r = o(r || {}, e.settings))
          }

          function a(e) {
            if ("function" == typeof e) l(e);
            else {
              if ("object" != typeof e) throw new Error("Expected usable value, not `" + e + "`");
              "length" in e ? l.apply(null, e) : i(e)
            }
          }

          function c(e) {
            var t = -1;
            if (null == e);
            else {
              if ("object" != typeof e || !("length" in e)) throw new Error("Expected a list of plugins, not `" + e + "`");
              for (; ++t < e.length;) a(e[t])
            }
          }

          function l(e, t) {
            var r = function(e) {
              for (var t = -1; ++t < n.length;)
                if (n[t][0] === e) return n[t]
            }(e);
            r ? (u(r[1]) && u(t) && (t = o(!0, r[1], t)), r[1] = t) : n.push(s.call(arguments))
          }
        }, E.parse = function(e) {
          var t, n = c(e);
          return b(), h("parse", t = E.Parser), p(t, "parse") ? new t(String(n), n).parse() : t(String(n), n)
        }, E.stringify = function(e, t) {
          var n, r = c(t);
          return b(), d("stringify", n = E.Compiler), y(e), p(n, "compile") ? new n(e, r).compile() : n(e, r)
        }, E.run = k, E.runSync = function(e, t) {
          var n, i;
          return k(e, t, function(e, t) {
            i = !0, n = t, r(e)
          }), g("runSync", "run", i), n
        }, E.process = S, E.processSync = function(e) {
          var t, n;
          return b(), h("processSync", E.Parser), d("processSync", E.Compiler), S(t = c(e), function(e) {
            n = !0, r(e)
          }), g("processSync", "process", n), t
        }, E;

        function E() {
          for (var t = e(), r = -1; ++r < n.length;) t.use.apply(null, n[r]);
          return t.data(o(!0, {}, v)), t
        }

        function b() {
          var e, r;
          if (t) return E;
          for (; ++x < n.length;) !1 !== (e = n[x])[1] && (!0 === e[1] && (e[1] = void 0), "function" == typeof(r = e[0].apply(E, e.slice(1))) && i.use(r));
          return t = !0, x = 1 / 0, E
        }

        function k(e, t, n) {
          if (y(e), b(), n || "function" != typeof t || (n = t, t = null), !n) return new Promise(r);

          function r(r, o) {
            i.run(e, c(t), function(t, i, u) {
              i = i || e, t ? o(t) : r ? r(i) : n(null, i, u)
            })
          }
          r(null, n)
        }

        function S(e, t) {
          if (b(), h("process", E.Parser), d("process", E.Compiler), !t) return new Promise(n);

          function n(n, r) {
            var i = c(e);
            f.run(E, {
              file: i
            }, function(e) {
              e ? r(e) : n ? n(i) : t(null, i)
            })
          }
          n(null, t)
        }
      }().freeze();
      var s = [].slice,
        l = {}.hasOwnProperty,
        f = a().use(function(e, t) {
          t.tree = e.parse(t.file)
        }).use(function(e, t, n) {
          e.run(t.tree, t.file, function(e, r, i) {
            e ? n(e) : (t.tree = r, t.file = i, n())
          })
        }).use(function(e, t) {
          var n = e.stringify(t.tree, t.file);
          null == n || ("string" == typeof n || i(n) ? ("value" in t.file && (t.file.value = n), t.file.contents = n) : t.file.result = n)
        });

      function p(e, t) {
        return "function" == typeof e && e.prototype && (function(e) {
          var t;
          for (t in e) return !0;
          return !1
        }(e.prototype) || t in e.prototype)
      }

      function h(e, t) {
        if ("function" != typeof t) throw new Error("Cannot `" + e + "` without `Parser`")
      }

      function d(e, t) {
        if ("function" != typeof t) throw new Error("Cannot `" + e + "` without `Compiler`")
      }

      function m(e, t) {
        if (t) throw new Error("Cannot invoke `" + e + "` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.")
      }

      function y(e) {
        if (!e || "string" != typeof e.type) throw new Error("Expected node, got `" + e + "`")
      }

      function g(e, t, n) {
        if (!n) throw new Error("`" + e + "` finished async. Use `" + t + "` instead")
      }
    },
    4997: e => {
      "use strict";
      e.exports = function(e) {
        return e < 32 || 127 === e
      }
    },
    7598: e => {
      "use strict";
      var t = {}.hasOwnProperty;
      e.exports = t
    },
    7992: (e, t, n) => {
      "use strict";
      var r = n(85409),
        i = n(62932),
        o = n(64936),
        u = n(28530),
        a = n(9345),
        c = n(46315),
        s = n(98345),
        l = n(79),
        f = n(26075),
        p = n(58344),
        h = {
          name: "labelEnd",
          tokenize: function(e, t, n) {
            for (var r, i, o = this, a = o.events.length; a--;)
              if (("labelImage" === o.events[a][1].type || "labelLink" === o.events[a][1].type) && !o.events[a][1]._balanced) {
                r = o.events[a][1];
                break
              } return function(t) {
              return r ? r._inactive ? s(t) : (i = o.parser.defined.indexOf(u(o.sliceSerialize({
                start: r.end,
                end: o.now()
              }))) > -1, e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), c) : n(t)
            };

            function c(n) {
              return 40 === n ? e.attempt(d, t, i ? t : s)(n) : 91 === n ? e.attempt(m, t, i ? e.attempt(y, t, s) : s)(n) : i ? t(n) : s(n)
            }

            function s(e) {
              return r._balanced = !0, n(e)
            }
          },
          resolveTo: function(e, t) {
            for (var n, r, u, s, l, f, p, h = e.length, d = 0; h--;)
              if (s = e[h][1], l) {
                if ("link" === s.type || "labelLink" === s.type && s._inactive) break;
                "enter" === e[h][0] && "labelLink" === s.type && (s._inactive = !0)
              } else if (f) {
              if ("enter" === e[h][0] && ("labelImage" === s.type || "labelLink" === s.type) && !s._balanced && (l = h, "labelLink" !== s.type)) {
                d = 2;
                break
              }
            } else "labelEnd" === s.type && (f = h);
            return n = {
              type: "labelLink" === e[l][1].type ? "link" : "image",
              start: c(e[l][1].start),
              end: c(e[e.length - 1][1].end)
            }, r = {
              type: "label",
              start: c(e[l][1].start),
              end: c(e[f][1].end)
            }, u = {
              type: "labelText",
              start: c(e[l + d + 2][1].end),
              end: c(e[f - 2][1].start)
            }, p = i(p = [
              ["enter", n, t],
              ["enter", r, t]
            ], e.slice(l + 1, l + d + 3)), p = i(p, [
              ["enter", u, t]
            ]), p = i(p, a(t.parser.constructs.insideSpan.null, e.slice(l + d + 4, f - 3), t)), p = i(p, [
              ["exit", u, t], e[f - 2], e[f - 1],
              ["exit", r, t]
            ]), p = i(p, e.slice(f + 1)), p = i(p, [
              ["exit", n, t]
            ]), o(e, l, e.length, p), e
          },
          resolveAll: function(e) {
            for (var t, n = -1; ++n < e.length;)(t = e[n][1])._used || "labelImage" !== t.type && "labelLink" !== t.type && "labelEnd" !== t.type || (e.splice(n + 1, "labelImage" === t.type ? 4 : 2), t.type = "data", n++);
            return e
          }
        },
        d = {
          tokenize: function(e, t, n) {
            return function(t) {
              return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), p(e, i)
            };

            function i(t) {
              return 41 === t ? a(t) : s(e, o, n, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 3)(t)
            }

            function o(t) {
              return r(t) ? p(e, u)(t) : a(t)
            }

            function u(t) {
              return 34 === t || 39 === t || 40 === t ? f(e, p(e, a), n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : a(t)
            }

            function a(r) {
              return 41 === r ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r)
            }
          }
        },
        m = {
          tokenize: function(e, t, n) {
            var r = this;
            return function(t) {
              return l.call(r, e, i, n, "reference", "referenceMarker", "referenceString")(t)
            };

            function i(e) {
              return r.parser.defined.indexOf(u(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) < 0 ? n(e) : t(e)
            }
          }
        },
        y = {
          tokenize: function(e, t, n) {
            return function(t) {
              return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), r
            };

            function r(r) {
              return 93 === r ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r)
            }
          }
        };
      e.exports = h
    },
    9340: (e, t, n) => {
      "use strict";
      var r = n(3241)(/[#-'*+\--9=?A-Z^-~]/);
      e.exports = r
    },
    9345: e => {
      "use strict";
      e.exports = function(e, t, n) {
        for (var r, i = [], o = -1; ++o < e.length;)(r = e[o].resolveAll) && i.indexOf(r) < 0 && (t = r(t, n), i.push(r));
        return t
      }
    },
    11465: e => {
      "use strict";
      e.exports = function(e, t) {
        return e.column += t, e.offset += t, e._bufferIndex += t, e
      }
    },
    11631: (e, t, n) => {
      "use strict";
      var r = n(44808);
      e.exports = function(e, t) {
        var n = parseInt(e, t);
        return n < 9 || 11 === n || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || !(65535 & ~n) || 65534 == (65535 & n) || n > 1114111 ? "�" : r(n)
      }
    },
    11730: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = n(25058),
        i = n(46315),
        o = c("text"),
        u = c("string"),
        a = {
          resolveAll: s()
        };

      function c(e) {
        return {
          tokenize: function(t) {
            var n = this,
              r = this.parser.constructs[e],
              i = t.attempt(r, o, u);
            return o;

            function o(e) {
              return c(e) ? i(e) : u(e)
            }

            function u(e) {
              if (null !== e) return t.enter("data"), t.consume(e), a;
              t.consume(e)
            }

            function a(e) {
              return c(e) ? (t.exit("data"), i(e)) : (t.consume(e), a)
            }

            function c(e) {
              var t = r[e],
                i = -1;
              if (null === e) return !0;
              if (t)
                for (; ++i < t.length;)
                  if (!t[i].previous || t[i].previous.call(n, n.previous)) return !0
            }
          },
          resolveAll: s("text" === e ? l : void 0)
        }
      }

      function s(e) {
        return function(t, n) {
          for (var r, i = -1; ++i <= t.length;) void 0 === r ? t[i] && "data" === t[i][1].type && (r = i, i++) : t[i] && "data" === t[i][1].type || (i !== r + 2 && (t[r][1].end = t[i - 1][1].end, t.splice(r + 2, i - r - 2), i = r + 2), r = void 0);
          return e ? e(t, n) : t
        }
      }

      function l(e, t) {
        for (var n, o, u, a, c, s, l, f, p = -1; ++p <= e.length;)
          if ((p === e.length || "lineEnding" === e[p][1].type) && "data" === e[p - 1][1].type) {
            for (o = e[p - 1][1], a = (n = t.sliceStream(o)).length, c = -1, s = 0, l = void 0; a--;)
              if ("string" == typeof(u = n[a])) {
                for (c = u.length; 32 === u.charCodeAt(c - 1);) s++, c--;
                if (c) break;
                c = -1
              } else if (-2 === u) l = !0, s++;
            else if (-1 !== u) {
              a++;
              break
            }
            s && (f = {
              type: p === e.length || l || s < 2 ? "lineSuffix" : "hardBreakTrailing",
              start: {
                line: o.end.line,
                column: o.end.column - s,
                offset: o.end.offset - s,
                _index: o.start._index + a,
                _bufferIndex: a ? c : o.start._bufferIndex + c
              },
              end: i(o.end)
            }, o.end = i(f.start), o.start.offset === o.end.offset ? r(o, f) : (e.splice(p, 0, ["enter", f, t], ["exit", f, t]), p += 2)), p++
          } return e
      }
      t.resolver = a, t.string = u, t.text = o
    },
    12115: (e, t, n) => {
      var r = n(52508),
        i = n(96893),
        o = n(4997),
        u = n(87126),
        a = n(54228),
        c = n(14751),
        s = {
          tokenize: function(e, t, n) {
            return function(t) {
              return e.consume(t), r
            };

            function r(t) {
              return 87 === t || t - 32 == 87 ? (e.consume(t), i) : n(t)
            }

            function i(t) {
              return 87 === t || t - 32 == 87 ? (e.consume(t), o) : n(t)
            }

            function o(t) {
              return 46 === t ? (e.consume(t), a) : n(t)
            }

            function a(e) {
              return null === e || u(e) ? n(e) : t(e)
            }
          },
          partial: !0
        },
        l = {
          tokenize: function(e, t, n) {
            var r, i;
            return u;

            function u(t) {
              return 38 === t ? e.check(h, l, s)(t) : 46 === t || 95 === t ? e.check(p, l, s)(t) : o(t) || c(t) || 45 !== t && a(t) ? l(t) : (e.consume(t), u)
            }

            function s(t) {
              return 46 === t ? (i = r, r = void 0, e.consume(t), u) : (95 === t && (r = !0), e.consume(t), u)
            }

            function l(e) {
              return i || r ? n(e) : t(e)
            }
          },
          partial: !0
        },
        f = {
          tokenize: function(e, t) {
            var n = 0;
            return r;

            function r(u) {
              return 38 === u ? e.check(h, t, i)(u) : (40 === u && n++, 41 === u ? e.check(p, o, i)(u) : E(u) ? t(u) : x(u) ? e.check(p, t, i)(u) : (e.consume(u), r))
            }

            function i(t) {
              return e.consume(t), r
            }

            function o(e) {
              return --n < 0 ? t(e) : i(e)
            }
          },
          partial: !0
        },
        p = {
          tokenize: function(e, t, n) {
            return function(t) {
              return e.consume(t), r
            };

            function r(i) {
              return x(i) ? (e.consume(i), r) : E(i) ? t(i) : n(i)
            }
          },
          partial: !0
        },
        h = {
          tokenize: function(e, t, n) {
            return function(t) {
              return e.consume(t), i
            };

            function i(t) {
              return r(t) ? (e.consume(t), i) : 59 === t ? (e.consume(t), o) : n(t)
            }

            function o(e) {
              return E(e) ? t(e) : n(e)
            }
          },
          partial: !0
        },
        d = {
          tokenize: function(e, t, n) {
            var r = this;
            return function(t) {
              return 87 !== t && t - 32 != 87 || !k(r.previous) || L(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(s, e.attempt(l, e.attempt(f, i), n), n)(t))
            };

            function i(n) {
              return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n)
            }
          },
          previous: k
        },
        m = {
          tokenize: function(e, t, n) {
            var r = this;
            return function(t) {
              return 72 !== t && t - 32 != 72 || !S(r.previous) || L(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), e.consume(t), i)
            };

            function i(t) {
              return 84 === t || t - 32 == 84 ? (e.consume(t), u) : n(t)
            }

            function u(t) {
              return 84 === t || t - 32 == 84 ? (e.consume(t), s) : n(t)
            }

            function s(t) {
              return 80 === t || t - 32 == 80 ? (e.consume(t), p) : n(t)
            }

            function p(t) {
              return 83 === t || t - 32 == 83 ? (e.consume(t), h) : h(t)
            }

            function h(t) {
              return 58 === t ? (e.consume(t), d) : n(t)
            }

            function d(t) {
              return 47 === t ? (e.consume(t), m) : n(t)
            }

            function m(t) {
              return 47 === t ? (e.consume(t), y) : n(t)
            }

            function y(t) {
              return o(t) || c(t) || a(t) ? n(t) : e.attempt(l, e.attempt(f, g), n)(t)
            }

            function g(n) {
              return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n)
            }
          },
          previous: S
        },
        y = {
          tokenize: function(e, t, n) {
            var r, o = this;
            return function(t) {
              return b(t) && O(o.previous) && !L(o.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), u(t)) : n(t)
            };

            function u(t) {
              return b(t) ? (e.consume(t), u) : 64 === t ? (e.consume(t), a) : n(t)
            }

            function a(t) {
              return 46 === t ? e.check(p, f, c)(t) : 45 === t || 95 === t ? e.check(p, n, s)(t) : i(t) ? (e.consume(t), a) : f(t)
            }

            function c(t) {
              return e.consume(t), r = !0, a
            }

            function s(t) {
              return e.consume(t), l
            }

            function l(t) {
              return 46 === t ? e.check(p, n, c)(t) : a(t)
            }

            function f(i) {
              return r ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(i)) : n(i)
            }
          },
          previous: O
        },
        g = {};
      t.text = g;
      for (var v = 48; v < 123;) g[v] = y, 58 === ++v ? v = 65 : 91 === v && (v = 97);

      function x(e) {
        return 33 === e || 34 === e || 39 === e || 41 === e || 42 === e || 44 === e || 46 === e || 58 === e || 59 === e || 60 === e || 63 === e || 95 === e || 126 === e
      }

      function E(e) {
        return null === e || e < 0 || 32 === e || 60 === e
      }

      function b(e) {
        return 43 === e || 45 === e || 46 === e || 95 === e || i(e)
      }

      function k(e) {
        return null === e || e < 0 || 32 === e || 40 === e || 42 === e || 95 === e || 126 === e
      }

      function S(e) {
        return null === e || !r(e)
      }

      function O(e) {
        return 47 !== e && S(e)
      }

      function L(e) {
        for (var t = e.length; t--;)
          if (("labelLink" === e[t][1].type || "labelImage" === e[t][1].type) && !e[t][1]._balanced) return !0
      }
      g[43] = y, g[45] = y, g[46] = y, g[95] = y, g[72] = [y, m], g[104] = [y, m], g[87] = [y, d], g[119] = [y, d]
    },
    12231: (e, t, n) => {
      "use strict";
      var r = n(87126),
        i = n(36309),
        o = n(21516),
        u = n(42827),
        a = {
          tokenize: function(e, t) {
            var n;
            return function(t) {
              return e.enter("content"), n = e.enter("chunkContent", {
                contentType: "content"
              }), i(t)
            };

            function i(t) {
              return null === t ? o(t) : r(t) ? e.check(c, u, o)(t) : (e.consume(t), i)
            }

            function o(n) {
              return e.exit("chunkContent"), e.exit("content"), t(n)
            }

            function u(t) {
              return e.consume(t), e.exit("chunkContent"), n = n.next = e.enter("chunkContent", {
                contentType: "content",
                previous: n
              }), i
            }
          },
          resolve: function(e) {
            return o(e), e
          },
          interruptible: !0,
          lazy: !0
        },
        c = {
          tokenize: function(e, t, n) {
            var o = this;
            return function(t) {
              return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), u(e, a, "linePrefix")
            };

            function a(u) {
              return null === u || r(u) ? n(u) : o.parser.constructs.disable.null.indexOf("codeIndented") > -1 || i(o.events, "linePrefix") < 4 ? e.interrupt(o.parser.constructs.flow, n, t)(u) : t(u)
            }
          },
          partial: !0
        };
      e.exports = a
    },
    12588: e => {
      "use strict";

      function t() {
        return !0
      }
      e.exports = function e(n) {
        if (null == n) return t;
        if ("string" == typeof n) return function(e) {
          return function(t) {
            return Boolean(t && t.type === e)
          }
        }(n);
        if ("object" == typeof n) return "length" in n ? function(t) {
          for (var n = [], r = -1; ++r < t.length;) n[r] = e(t[r]);
          return function() {
            for (var e = -1; ++e < n.length;)
              if (n[e].apply(this, arguments)) return !0;
            return !1
          }
        }(n) : function(e) {
          return function(t) {
            var n;
            for (n in e)
              if (t[n] !== e[n]) return !1;
            return !0
          }
        }(n);
        if ("function" == typeof n) return n;
        throw new Error("Expected function, string, or object as test")
      }
    },
    12892: e => {
      e.exports = function(e) {
        var t = e.options.bullet || "*";
        if ("*" !== t && "+" !== t && "-" !== t) throw new Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
        return t
      }
    },
    13067: (e, t, n) => {
      "use strict";
      var r = n(87126),
        i = n(42827),
        o = {
          tokenize: function(e, t, n) {
            return i(e, function(e) {
              return null === e || r(e) ? t(e) : n(e)
            }, "linePrefix")
          },
          partial: !0
        };
      e.exports = o
    },
    13151: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "assertText", {
        enumerable: !0,
        get: function() {
          return i
        }
      });
      var r = n(94554);

      function i(e, t) {
        var n = new r.ObjectAssertion(e, t);
        return n.object() ? (n.noAdditionalProperties(["nodeType", "data", "value", "marks"]), n.object("data"), n.each("marks", function(e, t) {
          var n = new r.ObjectAssertion(e, t);
          return n.object() ? (n.string("type"), n.errors) : n.errors
        }), n.string("value"), n.errors) : n.errors
      }
    },
    14001: (e, t, n) => {
      "use strict";
      var r = n(7598),
        i = n(64936),
        o = n(99079);

      function u(e, t) {
        var n, i, u, c;
        for (n in t)
          for (c in i = r.call(e, n) ? e[n] : e[n] = {}, u = t[n]) i[c] = a(o(u[c]), r.call(i, c) ? i[c] : [])
      }

      function a(e, t) {
        for (var n = -1, r = []; ++n < e.length;)("after" === e[n].add ? t : r).push(e[n]);
        return i(t, 0, 0, r), t
      }
      e.exports = function(e) {
        for (var t = {}, n = -1; ++n < e.length;) u(t, e[n]);
        return t
      }
    },
    14751: (e, t, n) => {
      "use strict";
      var r = n(3241)(/\s/);
      e.exports = r
    },
    15768: (e, t, n) => {
      "use strict";
      var r = n(42827),
        i = {
          name: "lineEnding",
          tokenize: function(e, t) {
            return function(n) {
              return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), r(e, t, "linePrefix")
            }
          }
        };
      e.exports = i
    },
    15965: (e, t, n) => {
      "use strict";
      var r = n(64013);
      e.exports = o, o.wrap = r;
      var i = [].slice;

      function o() {
        var e = [],
          t = {
            run: function() {
              var t = -1,
                n = i.call(arguments, 0, -1),
                o = arguments[arguments.length - 1];
              if ("function" != typeof o) throw new Error("Expected function as last argument, not " + o);
              (function u(a) {
                var c = e[++t],
                  s = i.call(arguments, 0).slice(1),
                  l = n.length,
                  f = -1;
                if (a) o(a);
                else {
                  for (; ++f < l;) null !== s[f] && void 0 !== s[f] || (s[f] = n[f]);
                  n = s, c ? r(c, u).apply(null, n) : o.apply(null, [null].concat(n))
                }
              }).apply(null, [null].concat(n))
            },
            use: function(n) {
              if ("function" != typeof n) throw new Error("Expected `fn` to be a function, not " + n);
              return e.push(n), t
            }
          };
        return t
      }
    },
    17490: (e, t) => {
      var n = "phrasing",
        r = ["autolink", "link", "image", "label"];
      t.unsafe = [{
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: n,
        notInConstruct: r
      }, {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: n,
        notInConstruct: r
      }, {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: n,
        notInConstruct: r
      }]
    },
    17589: (e, t, n) => {
      var r = n(14001),
        i = n(75390),
        o = n(65342),
        u = n(62633),
        a = n(51059);
      e.exports = function(e) {
        return r([i, o(e), u, a])
      }
    },
    18435: e => {
      e.exports = function(e) {
        return e
      }
    },
    18487: (e, t, n) => {
      var r = n(98185);
      t.unsafe = [{
        atBreak: !0,
        character: "-",
        after: "[:|-]"
      }], t.handlers = {
        listItem: function(e, t, n) {
          var i = r(e, t, n),
            o = e.children[0];
          return "boolean" == typeof e.checked && o && "paragraph" === o.type && (i = i.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, function(t) {
            return t + "[" + (e.checked ? "x" : " ") + "] "
          })), i
        }
      }
    },
    18577: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = n(12231),
        i = n(42827),
        o = n(13067);
      t.tokenize = function(e) {
        var t = this,
          n = e.attempt(o, function(r) {
            if (null !== r) return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
            e.consume(r)
          }, e.attempt(this.parser.constructs.flowInitial, u, i(e, e.attempt(this.parser.constructs.flow, u, e.attempt(r, u)), "linePrefix")));
        return n;

        function u(r) {
          if (null !== r) return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n;
          e.consume(r)
        }
      }
    },
    19059: (e, t, n) => {
      "use strict";
      var r = n(52508),
        i = n(96893),
        o = n(9340),
        u = n(4997),
        a = {
          name: "autolink",
          tokenize: function(e, t, n) {
            var a = 1;
            return function(t) {
              return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), c
            };

            function c(t) {
              return r(t) ? (e.consume(t), s) : o(t) ? p(t) : n(t)
            }

            function s(e) {
              return 43 === e || 45 === e || 46 === e || i(e) ? l(e) : p(e)
            }

            function l(t) {
              return 58 === t ? (e.consume(t), f) : (43 === t || 45 === t || 46 === t || i(t)) && a++ < 32 ? (e.consume(t), l) : p(t)
            }

            function f(t) {
              return 62 === t ? (e.exit("autolinkProtocol"), y(t)) : 32 === t || 60 === t || u(t) ? n(t) : (e.consume(t), f)
            }

            function p(t) {
              return 64 === t ? (e.consume(t), a = 0, h) : o(t) ? (e.consume(t), p) : n(t)
            }

            function h(e) {
              return i(e) ? d(e) : n(e)
            }

            function d(t) {
              return 46 === t ? (e.consume(t), a = 0, h) : 62 === t ? (e.exit("autolinkProtocol").type = "autolinkEmail", y(t)) : m(t)
            }

            function m(t) {
              return (45 === t || i(t)) && a++ < 63 ? (e.consume(t), 45 === t ? m : d) : n(t)
            }

            function y(n) {
              return e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t
            }
          }
        };
      e.exports = a
    },
    19073: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "INLINES", {
        enumerable: !0,
        get: function() {
          return n
        }
      });
      var n = function(e) {
        return e.ASSET_HYPERLINK = "asset-hyperlink", e.EMBEDDED_ENTRY = "embedded-entry-inline", e.EMBEDDED_RESOURCE = "embedded-resource-inline", e.ENTRY_HYPERLINK = "entry-hyperlink", e.HYPERLINK = "hyperlink", e.RESOURCE_HYPERLINK = "resource-hyperlink", e
      }({})
    },
    19916: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = n(87126),
        i = n(42827),
        o = n(13067),
        u = {
          tokenize: function(e, t, n) {
            return i(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
          }
        },
        a = {
          tokenize: function(e, t, n) {
            return i(e, e.lazy(this.parser.constructs.flow, t, n), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
          }
        };
      t.tokenize = function(e) {
        var t, n, i, c = this,
          s = [],
          l = 0,
          f = {
            tokenize: function(e, r) {
              var i = 0;
              return t = {}, l;

              function l(r) {
                return i < s.length ? (c.containerState = s[i][1], e.attempt(s[i][0].continuation, f, p)(r)) : n.currentConstruct && n.currentConstruct.concrete ? (t.flowContinue = !0, m(r)) : (c.interrupt = n.currentConstruct && n.currentConstruct.interruptible, c.containerState = {}, e.attempt(u, d, m)(r))
              }

              function f(e) {
                return i++, c.containerState._closeFlow ? d(e) : l(e)
              }

              function p(t) {
                return n.currentConstruct && n.currentConstruct.lazy ? (c.containerState = {}, e.attempt(u, d, e.attempt(a, d, e.check(o, d, h)))(t)) : d(t)
              }

              function h(e) {
                return i = s.length, t.lazy = !0, t.flowContinue = !0, m(e)
              }

              function d(e) {
                return t.flowEnd = !0, m(e)
              }

              function m(e) {
                return t.continued = i, c.interrupt = c.containerState = void 0, r(e)
              }
            },
            partial: !0
          };
        return p;

        function p(t) {
          return l < s.length ? (c.containerState = s[l][1], e.attempt(s[l][0].continuation, h, d)(t)) : d(t)
        }

        function h(e) {
          return l++, p(e)
        }

        function d(r) {
          return t && t.flowContinue ? y(r) : (c.interrupt = n && n.currentConstruct && n.currentConstruct.interruptible, c.containerState = {}, e.attempt(u, m, y)(r))
        }

        function m(e) {
          return s.push([c.currentConstruct, c.containerState]), c.containerState = void 0, d(e)
        }

        function y(t) {
          return null === t ? (E(0, !0), void e.consume(t)) : (n = n || c.parser.flow(c.now()), e.enter("chunkFlow", {
            contentType: "flow",
            previous: i,
            _tokenizer: n
          }), g(t))
        }

        function g(t) {
          return null === t ? (x(e.exit("chunkFlow")), y(t)) : r(t) ? (e.consume(t), x(e.exit("chunkFlow")), e.check(f, v)) : (e.consume(t), g)
        }

        function v(e) {
          return E(t.continued, t && t.flowEnd), l = 0, p(e)
        }

        function x(e) {
          i && (i.next = e), i = e, n.lazy = t && t.lazy, n.defineSkip(e.start), n.write(c.sliceStream(e))
        }

        function E(t, r) {
          var o = s.length;
          for (n && r && (n.write([null]), i = n = void 0); o-- > t;) c.containerState = s[o][1], s[o][0].exit.call(c, e);
          s.length = t
        }
      }
    },
    20113: (e, t, n) => {
      "use strict";
      var r = n(47649),
        i = n(96893),
        o = n(96253),
        u = n(96349);

      function a(e) {
        return e && "object" == typeof e && "default" in e ? e : {
          default: e
        }
      }
      var c = a(r),
        s = {
          name: "characterReference",
          tokenize: function(e, t, n) {
            var r, a, s = this,
              l = 0;
            return function(t) {
              return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), f
            };

            function f(t) {
              return 35 === t ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), p) : (e.enter("characterReferenceValue"), r = 31, a = i, h(t))
            }

            function p(t) {
              return 88 === t || 120 === t ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), r = 6, a = u, h) : (e.enter("characterReferenceValue"), r = 7, a = o, h(t))
            }

            function h(o) {
              var u;
              return 59 === o && l ? (u = e.exit("characterReferenceValue"), a !== i || c.default(s.sliceSerialize(u)) ? (e.enter("characterReferenceMarker"), e.consume(o), e.exit("characterReferenceMarker"), e.exit("characterReference"), t) : n(o)) : a(o) && l++ < r ? (e.consume(o), h) : n(o)
            }
          }
        };
      e.exports = s
    },
    20432: (e, t) => {
      function n(e) {
        this.stack[this.stack.length - 2].checked = "taskListCheckValueChecked" === e.type
      }
      t.exit = {
        taskListCheckValueChecked: n,
        taskListCheckValueUnchecked: n,
        paragraph: function(e) {
          var t, n = this.stack[this.stack.length - 2],
            r = this.stack[this.stack.length - 1],
            i = n.children,
            o = r.children[0],
            u = -1;
          if (n && "listItem" === n.type && "boolean" == typeof n.checked && o && "text" === o.type) {
            for (; ++u < i.length;)
              if ("paragraph" === i[u].type) {
                t = i[u];
                break
              } t === r && (o.value = o.value.slice(1), 0 === o.value.length ? r.children.shift() : (o.position.start.column++, o.position.start.offset++, r.position.start = Object.assign({}, o.position.start)))
          }
          this.exit(e)
        }
      }
    },
    20622: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      })
    },
    21516: (e, t, n) => {
      "use strict";
      var r = n(25058),
        i = n(64936),
        o = n(46315);

      function u(e, t) {
        for (var n, r, o, u, a, c, s = e[t][1], l = e[t][2], f = t - 1, p = [], h = s._tokenizer || l.parser[s.contentType](s.start), d = h.events, m = [], y = {}; s;) {
          for (; e[++f][1] !== s;);
          p.push(f), s._tokenizer || (n = l.sliceStream(s), s.next || n.push(null), r && h.defineSkip(s.start), s.isInFirstContentOfListItem && (h._gfmTasklistFirstContentOfListItem = !0), h.write(n), s.isInFirstContentOfListItem && (h._gfmTasklistFirstContentOfListItem = void 0)), r = s, s = s.next
        }
        for (s = r, o = d.length; o--;) "enter" === d[o][0] ? u = !0 : u && d[o][1].type === d[o - 1][1].type && d[o][1].start.line !== d[o][1].end.line && (g(d.slice(o + 1, a)), s._tokenizer = s.next = void 0, s = s.previous, a = o + 1);
        for (h.events = s._tokenizer = s.next = void 0, g(d.slice(0, a)), o = -1, c = 0; ++o < m.length;) y[c + m[o][0]] = c + m[o][1], c += m[o][1] - m[o][0] - 1;
        return y;

        function g(t) {
          var n = p.pop();
          m.unshift([n, n + t.length - 1]), i(e, n, 2, t)
        }
      }
      e.exports = function(e) {
        for (var t, n, a, c, s, l, f, p = {}, h = -1; ++h < e.length;) {
          for (; h in p;) h = p[h];
          if (t = e[h], h && "chunkFlow" === t[1].type && "listItemPrefix" === e[h - 1][1].type && ((a = 0) < (l = t[1]._tokenizer.events).length && "lineEndingBlank" === l[a][1].type && (a += 2), a < l.length && "content" === l[a][1].type))
            for (; ++a < l.length && "content" !== l[a][1].type;) "chunkText" === l[a][1].type && (l[a][1].isInFirstContentOfListItem = !0, a++);
          if ("enter" === t[0]) t[1].contentType && (r(p, u(e, h)), h = p[h], f = !0);
          else if (t[1]._container || t[1]._movePreviousLineEndings) {
            for (a = h, n = void 0; a-- && ("lineEnding" === (c = e[a])[1].type || "lineEndingBlank" === c[1].type);) "enter" === c[0] && (n && (e[n][1].type = "lineEndingBlank"), c[1].type = "lineEnding", n = a);
            n && (t[1].end = o(e[n][1].start), (s = e.slice(n, h)).unshift(t), i(e, n, h - n + 1, s))
          }
        }
        return !f
      }
    },
    23074: (e, t, n) => {
      "use strict";
      var r = n(52734),
        i = n(42827),
        o = {
          name: "blockQuote",
          tokenize: function(e, t, n) {
            var i = this;
            return function(t) {
              return 62 === t ? (i.containerState.open || (e.enter("blockQuote", {
                _container: !0
              }), i.containerState.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), o) : n(t)
            };

            function o(n) {
              return r(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n))
            }
          },
          continuation: {
            tokenize: function(e, t, n) {
              return i(e, e.attempt(o, t, n), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
            }
          },
          exit: function(e) {
            e.exit("blockQuote")
          }
        };
      e.exports = o
    },
    24826: (e, t, n) => {
      "use strict";
      var r = n(52860);

      function i() {}
      e.exports = u, i.prototype = Error.prototype, u.prototype = new i;
      var o = u.prototype;

      function u(e, t, n) {
        var i, o, u;
        "string" == typeof t && (n = t, t = null), i = function(e) {
          var t, n = [null, null];
          return "string" == typeof e && (-1 === (t = e.indexOf(":")) ? n[1] = e : (n[0] = e.slice(0, t), n[1] = e.slice(t + 1))), n
        }(n), o = r(t) || "1:1", u = {
          start: {
            line: null,
            column: null
          },
          end: {
            line: null,
            column: null
          }
        }, t && t.position && (t = t.position), t && (t.start ? (u = t, t = t.start) : u.start = t), e.stack && (this.stack = e.stack, e = e.message), this.message = e, this.name = o, this.reason = e, this.line = t ? t.line : null, this.column = t ? t.column : null, this.location = u, this.source = i[0], this.ruleId = i[1]
      }
      o.file = "", o.name = "", o.reason = "", o.message = "", o.stack = "", o.fatal = null, o.column = null, o.line = null
    },
    24969: (e, t, n) => {
      var r = n(38692),
        i = n(75095),
        o = n(54228),
        u = n(14751);

      function a(e) {
        this.config.enter.autolinkProtocol.call(this, e)
      }

      function c(e, t, n, i, o) {
        var u, a, c = "";
        return !!l(o) && (/^w/i.test(t) && (n = t + n, t = "", c = "http://"), !! function(e) {
          var t = e.split(".");
          return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])))
        }(n) && !!(u = function(e) {
          var t, n, i, o = /[!"&'),.:;<>?\]}]+$/.exec(e);
          if (o)
            for (e = e.slice(0, o.index), t = (o = o[0]).indexOf(")"), n = r(e, "("), i = r(e, ")"); - 1 !== t && n > i;) e += o.slice(0, t + 1), t = (o = o.slice(t + 1)).indexOf(")"), i++;
          return [e, o]
        }(n + i))[0] && (a = {
          type: "link",
          title: null,
          url: c + t + u[0],
          children: [{
            type: "text",
            value: t + u[0]
          }]
        }, u[1] && (a = [a, {
          type: "text",
          value: u[1]
        }]), a))
      }

      function s(e, t, n, r) {
        return !(!l(r, !0) || /[_-]$/.test(n)) && {
          type: "link",
          title: null,
          url: "mailto:" + t + "@" + n,
          children: [{
            type: "text",
            value: t + "@" + n
          }]
        }
      }

      function l(e, t) {
        var n = e.input.charCodeAt(e.index - 1);
        return (n != n || u(n) || o(n)) && (!t || 47 !== n)
      }
      t.transforms = [function(e) {
        i(e, [
          [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/i, c],
          [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/, s]
        ], {
          ignore: ["link", "linkReference"]
        })
      }], t.enter = {
        literalAutolink: function(e) {
          this.enter({
            type: "link",
            title: null,
            url: "",
            children: []
          }, e)
        },
        literalAutolinkEmail: a,
        literalAutolinkHttp: a,
        literalAutolinkWww: a
      }, t.exit = {
        literalAutolink: function(e) {
          this.exit(e)
        },
        literalAutolinkEmail: function(e) {
          this.config.exit.autolinkEmail.call(this, e)
        },
        literalAutolinkHttp: function(e) {
          this.config.exit.autolinkProtocol.call(this, e)
        },
        literalAutolinkWww: function(e) {
          this.config.exit.data.call(this, e), this.stack[this.stack.length - 1].url = "http://" + this.sliceSerialize(e)
        }
      }
    },
    25058: e => {
      "use strict";
      var t = Object.assign;
      e.exports = t
    },
    25624: e => {
      "use strict";
      e.exports = ["pre", "script", "style", "textarea"]
    },
    26075: (e, t, n) => {
      "use strict";
      var r = n(87126),
        i = n(42827);
      e.exports = function(e, t, n, o, u, a) {
        var c;
        return function(t) {
          return e.enter(o), e.enter(u), e.consume(t), e.exit(u), c = 40 === t ? 41 : t, s
        };

        function s(n) {
          return n === c ? (e.enter(u), e.consume(n), e.exit(u), e.exit(o), t) : (e.enter(a), l(n))
        }

        function l(t) {
          return t === c ? (e.exit(a), s(c)) : null === t ? n(t) : r(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i(e, l, "linePrefix")) : (e.enter("chunkString", {
            contentType: "string"
          }), f(t))
        }

        function f(t) {
          return t === c || null === t || r(t) ? (e.exit("chunkString"), l(t)) : (e.consume(t), 92 === t ? p : f)
        }

        function p(t) {
          return t === c || 92 === t ? (e.consume(t), f) : f(t)
        }
      }
    },
    26286: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
        }),
        function(e, t) {
          for (var n in t) Object.defineProperty(e, n, {
            enumerable: !0,
            get: Object.getOwnPropertyDescriptor(t, n).get
          })
        }(t, {
          get CONTAINERS() {
            return d
          },
          get HEADINGS() {
            return m
          },
          get LIST_ITEM_BLOCKS() {
            return f
          },
          get TABLE_BLOCKS() {
            return p
          },
          get TEXT_CONTAINERS() {
            return y
          },
          get TOP_LEVEL_BLOCKS() {
            return l
          },
          get V1_MARKS() {
            return v
          },
          get V1_NODE_TYPES() {
            return g
          },
          get VOID_BLOCKS() {
            return h
          }
        });
      var r = n(69333),
        i = n(19073),
        o = n(96773);

      function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      var c, s, l = [r.BLOCKS.PARAGRAPH, r.BLOCKS.HEADING_1, r.BLOCKS.HEADING_2, r.BLOCKS.HEADING_3, r.BLOCKS.HEADING_4, r.BLOCKS.HEADING_5, r.BLOCKS.HEADING_6, r.BLOCKS.OL_LIST, r.BLOCKS.UL_LIST, r.BLOCKS.HR, r.BLOCKS.QUOTE, r.BLOCKS.EMBEDDED_ENTRY, r.BLOCKS.EMBEDDED_ASSET, r.BLOCKS.EMBEDDED_RESOURCE, r.BLOCKS.TABLE],
        f = [r.BLOCKS.PARAGRAPH, r.BLOCKS.HEADING_1, r.BLOCKS.HEADING_2, r.BLOCKS.HEADING_3, r.BLOCKS.HEADING_4, r.BLOCKS.HEADING_5, r.BLOCKS.HEADING_6, r.BLOCKS.OL_LIST, r.BLOCKS.UL_LIST, r.BLOCKS.HR, r.BLOCKS.QUOTE, r.BLOCKS.EMBEDDED_ENTRY, r.BLOCKS.EMBEDDED_ASSET, r.BLOCKS.EMBEDDED_RESOURCE],
        p = [r.BLOCKS.TABLE, r.BLOCKS.TABLE_ROW, r.BLOCKS.TABLE_CELL, r.BLOCKS.TABLE_HEADER_CELL],
        h = [r.BLOCKS.HR, r.BLOCKS.EMBEDDED_ENTRY, r.BLOCKS.EMBEDDED_ASSET, r.BLOCKS.EMBEDDED_RESOURCE],
        d = (a(c = {}, r.BLOCKS.OL_LIST, [r.BLOCKS.LIST_ITEM]), a(c, r.BLOCKS.UL_LIST, [r.BLOCKS.LIST_ITEM]), a(c, r.BLOCKS.LIST_ITEM, f), a(c, r.BLOCKS.QUOTE, [r.BLOCKS.PARAGRAPH]), a(c, r.BLOCKS.TABLE, [r.BLOCKS.TABLE_ROW]), a(c, r.BLOCKS.TABLE_ROW, [r.BLOCKS.TABLE_CELL, r.BLOCKS.TABLE_HEADER_CELL]), a(c, r.BLOCKS.TABLE_CELL, [r.BLOCKS.PARAGRAPH, r.BLOCKS.UL_LIST, r.BLOCKS.OL_LIST]), a(c, r.BLOCKS.TABLE_HEADER_CELL, [r.BLOCKS.PARAGRAPH]), c),
        m = [r.BLOCKS.HEADING_1, r.BLOCKS.HEADING_2, r.BLOCKS.HEADING_3, r.BLOCKS.HEADING_4, r.BLOCKS.HEADING_5, r.BLOCKS.HEADING_6],
        y = [r.BLOCKS.PARAGRAPH].concat(function(e) {
          if (Array.isArray(e)) return u(e)
        }(s = m) || function(e) {
          if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(s) || function(e, t) {
          if (e) {
            if ("string" == typeof e) return u(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0
          }
        }(s) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()),
        g = [r.BLOCKS.DOCUMENT, r.BLOCKS.PARAGRAPH, r.BLOCKS.HEADING_1, r.BLOCKS.HEADING_2, r.BLOCKS.HEADING_3, r.BLOCKS.HEADING_4, r.BLOCKS.HEADING_5, r.BLOCKS.HEADING_6, r.BLOCKS.OL_LIST, r.BLOCKS.UL_LIST, r.BLOCKS.LIST_ITEM, r.BLOCKS.HR, r.BLOCKS.QUOTE, r.BLOCKS.EMBEDDED_ENTRY, r.BLOCKS.EMBEDDED_ASSET, i.INLINES.HYPERLINK, i.INLINES.ENTRY_HYPERLINK, i.INLINES.ASSET_HYPERLINK, i.INLINES.EMBEDDED_ENTRY, "text"],
        v = [o.MARKS.BOLD, o.MARKS.CODE, o.MARKS.ITALIC, o.MARKS.UNDERLINE]
    },
    27807: (e, t) => {
      "use strict";

      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "Path", {
        enumerable: !0,
        get: function() {
          return i
        }
      });
      var i = function e() {
        var t = this,
          i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), r(this, "path", void 0), r(this, "of", void 0), r(this, "isRoot", void 0), r(this, "last", void 0), r(this, "toArray", void 0), this.path = i, this.of = function(r) {
          return new e((i = t.path, function(e) {
            if (Array.isArray(e)) return n(e)
          }(i) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
          }(i) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return n(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
            }
          }(i) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()).concat([r]));
          var i
        }, this.isRoot = function() {
          return 0 === t.path.length
        }, this.last = function() {
          return t.path[t.path.length - 1]
        }, this.toArray = function() {
          return t.path
        }
      }
    },
    28375: e => {
      "use strict";
      var t, n = "";
      e.exports = function(e, r) {
        if ("string" != typeof e) throw new TypeError("expected a string");
        if (1 === r) return e;
        if (2 === r) return e + e;
        var i = e.length * r;
        if (t !== e || void 0 === t) t = e, n = "";
        else if (n.length >= i) return n.substr(0, i);
        for (; i > n.length && r > 1;) 1 & r && (n += e), r >>= 1, e += e;
        return n = (n += e).substr(0, i)
      }
    },
    28530: e => {
      "use strict";
      e.exports = function(e) {
        return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
      }
    },
    29504: (e, t, n) => {
      var r = n(85409),
        i = n(42827),
        o = n(36309),
        u = {
          tokenize: function(e, t, n) {
            var r = this;
            return function(t) {
              return 91 === t && null === r.previous && r._gfmTasklistFirstContentOfListItem ? (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), i) : n(t)
            };

            function i(t) {
              return -2 === t || 32 === t ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), o) : 88 === t || 120 === t ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), o) : n(t)
            }

            function o(r) {
              return 93 === r ? (e.enter("taskListCheckMarker"), e.consume(r), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), e.check({
                tokenize: a
              }, t, n)) : n(r)
            }
          }
        };

      function a(e, t, n) {
        var u = this;
        return i(e, function(e) {
          return o(u.events, "whitespace") && null !== e && !r(e) ? t(e) : n(e)
        }, "whitespace")
      }
      t.text = {
        91: u
      }
    },
    30037: (e, t) => {
      "use strict";

      function n(e) {
        if ("string" != typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
      }
      t.basename = function(e, t) {
        var r, i, o, u, a = 0,
          c = -1;
        if (void 0 !== t && "string" != typeof t) throw new TypeError('"ext" argument must be a string');
        if (n(e), r = e.length, void 0 === t || !t.length || t.length > e.length) {
          for (; r--;)
            if (47 === e.charCodeAt(r)) {
              if (o) {
                a = r + 1;
                break
              }
            } else c < 0 && (o = !0, c = r + 1);
          return c < 0 ? "" : e.slice(a, c)
        }
        if (t === e) return "";
        for (i = -1, u = t.length - 1; r--;)
          if (47 === e.charCodeAt(r)) {
            if (o) {
              a = r + 1;
              break
            }
          } else i < 0 && (o = !0, i = r + 1), u > -1 && (e.charCodeAt(r) === t.charCodeAt(u--) ? u < 0 && (c = r) : (u = -1, c = i));
        return a === c ? c = i : c < 0 && (c = e.length), e.slice(a, c)
      }, t.dirname = function(e) {
        var t, r, i;
        if (n(e), !e.length) return ".";
        for (t = -1, i = e.length; --i;)
          if (47 === e.charCodeAt(i)) {
            if (r) {
              t = i;
              break
            }
          } else r || (r = !0);
        return t < 0 ? 47 === e.charCodeAt(0) ? "/" : "." : 1 === t && 47 === e.charCodeAt(0) ? "//" : e.slice(0, t)
      }, t.extname = function(e) {
        var t, r, i, o = -1,
          u = 0,
          a = -1,
          c = 0;
        for (n(e), i = e.length; i--;)
          if (47 !== (r = e.charCodeAt(i))) a < 0 && (t = !0, a = i + 1), 46 === r ? o < 0 ? o = i : 1 !== c && (c = 1) : o > -1 && (c = -1);
          else if (t) {
          u = i + 1;
          break
        }
        return o < 0 || a < 0 || 0 === c || 1 === c && o === a - 1 && o === u + 1 ? "" : e.slice(o, a)
      }, t.join = function() {
        for (var e, t, r, i, o = -1; ++o < arguments.length;) n(arguments[o]), arguments[o] && (e = void 0 === e ? arguments[o] : e + "/" + arguments[o]);
        return void 0 === e ? "." : (n(t = e), r = 47 === t.charCodeAt(0), i = function(e, t) {
          for (var n, r, i = "", o = 0, u = -1, a = 0, c = -1; ++c <= e.length;) {
            if (c < e.length) n = e.charCodeAt(c);
            else {
              if (47 === n) break;
              n = 47
            }
            if (47 === n) {
              if (u === c - 1 || 1 === a);
              else if (u !== c - 1 && 2 === a) {
                if (i.length < 2 || 2 !== o || 46 !== i.charCodeAt(i.length - 1) || 46 !== i.charCodeAt(i.length - 2))
                  if (i.length > 2) {
                    if ((r = i.lastIndexOf("/")) !== i.length - 1) {
                      r < 0 ? (i = "", o = 0) : o = (i = i.slice(0, r)).length - 1 - i.lastIndexOf("/"), u = c, a = 0;
                      continue
                    }
                  } else if (i.length) {
                  i = "", o = 0, u = c, a = 0;
                  continue
                }
                t && (i = i.length ? i + "/.." : "..", o = 2)
              } else i.length ? i += "/" + e.slice(u + 1, c) : i = e.slice(u + 1, c), o = c - u - 1;
              u = c, a = 0
            } else 46 === n && a > -1 ? a++ : a = -1
          }
          return i
        }(t, !r), i.length || r || (i = "."), i.length && 47 === t.charCodeAt(t.length - 1) && (i += "/"), r ? "/" + i : i)
      }, t.sep = "/"
    },
    30134: (e, t, n) => {
      "use strict";
      e.exports = function(e) {
        var t = this;
        this.Parser = function(n) {
          return r(n, Object.assign({}, t.data("settings"), e, {
            extensions: t.data("micromarkExtensions") || [],
            mdastExtensions: t.data("fromMarkdownExtensions") || []
          }))
        }
      };
      var r = n(58597)
    },
    31584: (e, t, n) => {
      "use strict";
      var r = n(62932),
        i = n(64936),
        o = n(96967),
        u = n(11465),
        a = n(9345),
        c = n(46315),
        s = {
          name: "attention",
          tokenize: function(e, t) {
            var n, r = o(this.previous);
            return function(t) {
              return e.enter("attentionSequence"), n = t, i(t)
            };

            function i(u) {
              var a, c, s, l;
              return u === n ? (e.consume(u), i) : (a = e.exit("attentionSequence"), s = !(c = o(u)) || 2 === c && r, l = !r || 2 === r && c, a._open = 42 === n ? s : s && (r || !l), a._close = 42 === n ? l : l && (c || !s), t(u))
            }
          },
          resolveAll: function(e, t) {
            for (var n, o, s, l, f, p, h, d, m = -1; ++m < e.length;)
              if ("enter" === e[m][0] && "attentionSequence" === e[m][1].type && e[m][1]._close)
                for (n = m; n--;)
                  if ("exit" === e[n][0] && "attentionSequence" === e[n][1].type && e[n][1]._open && t.sliceSerialize(e[n][1]).charCodeAt(0) === t.sliceSerialize(e[m][1]).charCodeAt(0)) {
                    if ((e[n][1]._close || e[m][1]._open) && (e[m][1].end.offset - e[m][1].start.offset) % 3 && !((e[n][1].end.offset - e[n][1].start.offset + e[m][1].end.offset - e[m][1].start.offset) % 3)) continue;
                    l = {
                      type: (p = e[n][1].end.offset - e[n][1].start.offset > 1 && e[m][1].end.offset - e[m][1].start.offset > 1 ? 2 : 1) > 1 ? "strongSequence" : "emphasisSequence",
                      start: u(c(e[n][1].end), -p),
                      end: c(e[n][1].end)
                    }, f = {
                      type: p > 1 ? "strongSequence" : "emphasisSequence",
                      start: c(e[m][1].start),
                      end: u(c(e[m][1].start), p)
                    }, s = {
                      type: p > 1 ? "strongText" : "emphasisText",
                      start: c(e[n][1].end),
                      end: c(e[m][1].start)
                    }, o = {
                      type: p > 1 ? "strong" : "emphasis",
                      start: c(l.start),
                      end: c(f.end)
                    }, e[n][1].end = c(l.start), e[m][1].start = c(f.end), h = [], e[n][1].end.offset - e[n][1].start.offset && (h = r(h, [
                      ["enter", e[n][1], t],
                      ["exit", e[n][1], t]
                    ])), h = r(h, [
                      ["enter", o, t],
                      ["enter", l, t],
                      ["exit", l, t],
                      ["enter", s, t]
                    ]), h = r(h, a(t.parser.constructs.insideSpan.null, e.slice(n + 1, m), t)), h = r(h, [
                      ["exit", s, t],
                      ["enter", f, t],
                      ["exit", f, t],
                      ["exit", o, t]
                    ]), e[m][1].end.offset - e[m][1].start.offset ? (d = 2, h = r(h, [
                      ["enter", e[m][1], t],
                      ["exit", e[m][1], t]
                    ])) : d = 0, i(e, n - 1, m - n + 3, h), m = n + h.length - d - 2;
                    break
                  } for (m = -1; ++m < e.length;) "attentionSequence" === e[m][1].type && (e[m][1].type = "data");
            return e
          }
        };
      e.exports = s
    },
    32334: (e, t, n) => {
      "use strict";
      n.d(t, {
        sc: () => i
      });
      const r = e => async (t, {
        outputFormat: n = "hex"
      } = {}) => {
        "string" == typeof t && (t = (new globalThis.TextEncoder).encode(t));
        const r = await globalThis.crypto.subtle.digest(e, t);
        return "hex" === n ? (e => {
          const t = new DataView(e);
          let n = "";
          for (let e = 0; e < t.byteLength; e += 4) n += t.getUint32(e).toString(16).padStart(8, "0");
          return n
        })(r) : r
      }, i = (r("SHA-1"), r("SHA-256"));
      r("SHA-384"), r("SHA-512")
    },
    32531: e => {
      "use strict";
      e.exports = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/
    },
    33331: e => {
      e.exports = function(e, t, n) {
        for (var r, i, o, u = e.children || [], a = [], c = -1, s = n.before; ++c < u.length;) o = u[c], c + 1 < u.length ? ((i = t.handle.handlers[u[c + 1].type]) && i.peek && (i = i.peek), r = i ? i(u[c + 1], e, t, {
          before: "",
          after: ""
        }).charAt(0) : "") : r = n.after, a.length > 0 && ("\r" === s || "\n" === s) && "html" === o.type && (a[a.length - 1] = a[a.length - 1].replace(/(\r?\n|\r)$/, " "), s = " "), a.push(t.handle(o, e, t, {
          before: s,
          after: r
        })), s = a[a.length - 1].slice(-1);
        return a.join("")
      }
    },
    33498: e => {
      "use strict";
      var t = /[\0\t\n\r]/g;
      e.exports = function() {
        var e, n = !0,
          r = 1,
          i = "";
        return function(o, u, a) {
          var c, s, l, f, p, h = [];
          for (o = i + o.toString(u), l = 0, i = "", n && (65279 === o.charCodeAt(0) && l++, n = void 0); l < o.length;) {
            if (t.lastIndex = l, f = (c = t.exec(o)) ? c.index : o.length, p = o.charCodeAt(f), !c) {
              i = o.slice(l);
              break
            }
            if (10 === p && l === f && e) h.push(-3), e = void 0;
            else if (e && (h.push(-5), e = void 0), l < f && (h.push(o.slice(l, f)), r += f - l), 0 === p) h.push(65533), r++;
            else if (9 === p)
              for (s = 4 * Math.ceil(r / 4), h.push(-2); r++ < s;) h.push(-1);
            else 10 === p ? (h.push(-4), r = 1) : (e = !0, r = 1);
            l = f + 1
          }
          return a && (e && h.push(-5), i && h.push(i), h.push(null)), h
        }
      }
    },
    34498: (e, t, n) => {
      var r = n(17490),
        i = n(64144),
        o = n(83551),
        u = n(18487),
        a = n(79350);
      e.exports = function(e) {
        var t = a({
          handlers: {},
          join: [],
          unsafe: [],
          options: {}
        }, {
          extensions: [r, i, o(e), u]
        });
        return Object.assign(t.options, {
          handlers: t.handlers,
          join: t.join,
          unsafe: t.unsafe
        })
      }
    },
    34685: (e, t, n) => {
      "use strict";
      var r = n(21516);
      e.exports = function(e) {
        for (; !r(e););
        return e
      }
    },
    35232: e => {
      "use strict";
      e.exports = e => {
        if ("string" != typeof e) throw new TypeError("Expected a string");
        return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
      }
    },
    36046: (e, t, n) => {
      "use strict";
      e.exports = function(e, t, n) {
        return "string" != typeof t && (n = t, t = void 0),
          function(e) {
            var t = e || {},
              n = function(e, t) {
                for (var n = -1; ++n < t.length;) h(e, t[n]);
                return e
              }({
                transforms: [],
                canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
                enter: {
                  autolink: y(w),
                  autolinkProtocol: k,
                  autolinkEmail: k,
                  atxHeading: y(A),
                  blockQuote: y(function() {
                    return {
                      type: "blockquote",
                      children: []
                    }
                  }),
                  characterEscape: k,
                  characterReference: k,
                  codeFenced: y(C),
                  codeFencedFenceInfo: g,
                  codeFencedFenceMeta: g,
                  codeIndented: y(C, g),
                  codeText: y(function() {
                    return {
                      type: "inlineCode",
                      value: ""
                    }
                  }, g),
                  codeTextData: k,
                  data: k,
                  codeFlowValue: k,
                  definition: y(function() {
                    return {
                      type: "definition",
                      identifier: "",
                      label: null,
                      title: null,
                      url: ""
                    }
                  }),
                  definitionDestinationString: g,
                  definitionLabelString: g,
                  definitionTitleString: g,
                  emphasis: y(function() {
                    return {
                      type: "emphasis",
                      children: []
                    }
                  }),
                  hardBreakEscape: y(T),
                  hardBreakTrailing: y(T),
                  htmlFlow: y(_, g),
                  htmlFlowData: k,
                  htmlText: y(_, g),
                  htmlTextData: k,
                  image: y(function() {
                    return {
                      type: "image",
                      title: null,
                      url: "",
                      alt: null
                    }
                  }),
                  label: g,
                  link: y(w),
                  listItem: y(function(e) {
                    return {
                      type: "listItem",
                      spread: e._spread,
                      checked: null,
                      children: []
                    }
                  }),
                  listItemValue: function(e) {
                    d("expectingFirstListItemValue") && (this.stack[this.stack.length - 2].start = parseInt(this.sliceSerialize(e), 10), l("expectingFirstListItemValue"))
                  },
                  listOrdered: y(I, function() {
                    l("expectingFirstListItemValue", !0)
                  }),
                  listUnordered: y(I),
                  paragraph: y(function() {
                    return {
                      type: "paragraph",
                      children: []
                    }
                  }),
                  reference: function() {
                    l("referenceType", "collapsed")
                  },
                  referenceString: g,
                  resourceDestinationString: g,
                  resourceTitleString: g,
                  setextHeading: y(A),
                  strong: y(function() {
                    return {
                      type: "strong",
                      children: []
                    }
                  }),
                  thematicBreak: y(function() {
                    return {
                      type: "thematicBreak"
                    }
                  })
                },
                exit: {
                  atxHeading: x(),
                  atxHeadingSequence: function(e) {
                    this.stack[this.stack.length - 1].depth || (this.stack[this.stack.length - 1].depth = this.sliceSerialize(e).length)
                  },
                  autolink: x(),
                  autolinkEmail: function(e) {
                    S.call(this, e), this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e)
                  },
                  autolinkProtocol: function(e) {
                    S.call(this, e), this.stack[this.stack.length - 1].url = this.sliceSerialize(e)
                  },
                  blockQuote: x(),
                  characterEscapeValue: S,
                  characterReferenceMarkerHexadecimal: L,
                  characterReferenceMarkerNumeric: L,
                  characterReferenceValue: function(e) {
                    var t, n, r = this.sliceSerialize(e),
                      i = d("characterReferenceType");
                    i ? (t = a(r, "characterReferenceMarkerNumeric" === i ? 10 : 16), l("characterReferenceType")) : t = f(r), (n = this.stack.pop()).value += t, n.position.end = m(e.end)
                  },
                  codeFenced: x(function() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), l("flowCodeInside")
                  }),
                  codeFencedFence: function() {
                    d("flowCodeInside") || (this.buffer(), l("flowCodeInside", !0))
                  },
                  codeFencedFenceInfo: function() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].lang = e
                  },
                  codeFencedFenceMeta: function() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].meta = e
                  },
                  codeFlowValue: S,
                  codeIndented: x(function() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].value = e
                  }),
                  codeText: x(function() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].value = e
                  }),
                  codeTextData: S,
                  data: S,
                  definition: x(),
                  definitionDestinationString: function() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].url = e
                  },
                  definitionLabelString: function(e) {
                    var t = this.resume();
                    this.stack[this.stack.length - 1].label = t, this.stack[this.stack.length - 1].identifier = u(this.sliceSerialize(e)).toLowerCase()
                  },
                  definitionTitleString: function() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].title = e
                  },
                  emphasis: x(),
                  hardBreakEscape: x(O),
                  hardBreakTrailing: x(O),
                  htmlFlow: x(function() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].value = e
                  }),
                  htmlFlowData: S,
                  htmlText: x(function() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].value = e
                  }),
                  htmlTextData: S,
                  image: x(function() {
                    var e = this.stack[this.stack.length - 1];
                    d("inReference") ? (e.type += "Reference", e.referenceType = d("referenceType") || "shortcut", delete e.url, delete e.title) : (delete e.identifier, delete e.label, delete e.referenceType), l("referenceType")
                  }),
                  label: function() {
                    var e = this.stack[this.stack.length - 1],
                      t = this.resume();
                    this.stack[this.stack.length - 1].label = t, l("inReference", !0), "link" === this.stack[this.stack.length - 1].type ? this.stack[this.stack.length - 1].children = e.children : this.stack[this.stack.length - 1].alt = t
                  },
                  labelText: function(e) {
                    this.stack[this.stack.length - 2].identifier = u(this.sliceSerialize(e)).toLowerCase()
                  },
                  lineEnding: function(e) {
                    var t = this.stack[this.stack.length - 1];
                    if (d("atHardBreak")) return t.children[t.children.length - 1].position.end = m(e.end), void l("atHardBreak");
                    !d("setextHeadingSlurpLineEnding") && n.canContainEols.indexOf(t.type) > -1 && (k.call(this, e), S.call(this, e))
                  },
                  link: x(function() {
                    var e = this.stack[this.stack.length - 1];
                    d("inReference") ? (e.type += "Reference", e.referenceType = d("referenceType") || "shortcut", delete e.url, delete e.title) : (delete e.identifier, delete e.label, delete e.referenceType), l("referenceType")
                  }),
                  listItem: x(),
                  listOrdered: x(),
                  listUnordered: x(),
                  paragraph: x(),
                  referenceString: function(e) {
                    var t = this.resume();
                    this.stack[this.stack.length - 1].label = t, this.stack[this.stack.length - 1].identifier = u(this.sliceSerialize(e)).toLowerCase(), l("referenceType", "full")
                  },
                  resourceDestinationString: function() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].url = e
                  },
                  resourceTitleString: function() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].title = e
                  },
                  resource: function() {
                    l("inReference")
                  },
                  setextHeading: x(function() {
                    l("setextHeadingSlurpLineEnding")
                  }),
                  setextHeadingLineSequence: function(e) {
                    this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2
                  },
                  setextHeadingText: function() {
                    l("setextHeadingSlurpLineEnding", !0)
                  },
                  strong: x(),
                  thematicBreak: x()
                }
              }, t.mdastExtensions || []),
              c = {};
            return function(e) {
              for (var t, r = {
                  type: "root",
                  children: []
                }, u = [], a = [], c = -1, f = {
                  stack: [r],
                  tokenStack: u,
                  config: n,
                  enter: v,
                  exit: E,
                  buffer: g,
                  resume: b,
                  setData: l,
                  getData: d
                }; ++c < e.length;) "listOrdered" !== e[c][1].type && "listUnordered" !== e[c][1].type || ("enter" === e[c][0] ? a.push(c) : c = s(e, a.pop(c), c));
              for (c = -1; ++c < e.length;) t = n[e[c][0]], o.call(t, e[c][1].type) && t[e[c][1].type].call(i({
                sliceSerialize: e[c][2].sliceSerialize
              }, f), e[c][1]);
              if (u.length) throw new Error("Cannot close document, a token (`" + u[u.length - 1].type + "`, " + p({
                start: u[u.length - 1].start,
                end: u[u.length - 1].end
              }) + ") is still open");
              for (r.position = {
                  start: m(e.length ? e[0][1].start : {
                    line: 1,
                    column: 1,
                    offset: 0
                  }),
                  end: m(e.length ? e[e.length - 2][1].end : {
                    line: 1,
                    column: 1,
                    offset: 0
                  })
                }, c = -1; ++c < n.transforms.length;) r = n.transforms[c](r) || r;
              return r
            };

            function s(e, t, n) {
              for (var r, i, o, u, a, c, s, l = t - 1, f = -1, p = !1; ++l <= n;)
                if ("listUnordered" === (a = e[l])[1].type || "listOrdered" === a[1].type || "blockQuote" === a[1].type ? ("enter" === a[0] ? f++ : f--, s = void 0) : "lineEndingBlank" === a[1].type ? "enter" === a[0] && (!r || s || f || c || (c = l), s = void 0) : "linePrefix" === a[1].type || "listItemValue" === a[1].type || "listItemMarker" === a[1].type || "listItemPrefix" === a[1].type || "listItemPrefixWhitespace" === a[1].type || (s = void 0), !f && "enter" === a[0] && "listItemPrefix" === a[1].type || -1 === f && "exit" === a[0] && ("listUnordered" === a[1].type || "listOrdered" === a[1].type)) {
                  if (r) {
                    for (i = l, o = void 0; i--;)
                      if ("lineEnding" === (u = e[i])[1].type || "lineEndingBlank" === u[1].type) {
                        if ("exit" === u[0]) continue;
                        o && (e[o][1].type = "lineEndingBlank", p = !0), u[1].type = "lineEnding", o = i
                      } else if ("linePrefix" !== u[1].type && "blockQuotePrefix" !== u[1].type && "blockQuotePrefixWhitespace" !== u[1].type && "blockQuoteMarker" !== u[1].type && "listItemIndent" !== u[1].type) break;
                    c && (!o || c < o) && (r._spread = !0), r.end = m(o ? e[o][1].start : a[1].end), e.splice(o || l, 0, ["exit", r, a[2]]), l++, n++
                  }
                  "listItemPrefix" === a[1].type && (r = {
                    type: "listItem",
                    _spread: !1,
                    start: m(a[1].start)
                  }, e.splice(l, 0, ["enter", r, a[2]]), l++, n++, c = void 0, s = !0)
                } return e[t][1]._spread = p, n
            }

            function l(e, t) {
              c[e] = t
            }

            function d(e) {
              return c[e]
            }

            function m(e) {
              return {
                line: e.line,
                column: e.column,
                offset: e.offset
              }
            }

            function y(e, t) {
              return function(n) {
                v.call(this, e(n), n), t && t.call(this, n)
              }
            }

            function g() {
              this.stack.push({
                type: "fragment",
                children: []
              })
            }

            function v(e, t) {
              return this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push(t), e.position = {
                start: m(t.start)
              }, e
            }

            function x(e) {
              return function(t) {
                e && e.call(this, t), E.call(this, t)
              }
            }

            function E(e) {
              var t = this.stack.pop(),
                n = this.tokenStack.pop();
              if (!n) throw new Error("Cannot close `" + e.type + "` (" + p({
                start: e.start,
                end: e.end
              }) + "): it’s not open");
              if (n.type !== e.type) throw new Error("Cannot close `" + e.type + "` (" + p({
                start: e.start,
                end: e.end
              }) + "): a different token (`" + n.type + "`, " + p({
                start: n.start,
                end: n.end
              }) + ") is open");
              return t.position.end = m(e.end), t
            }

            function b() {
              return r(this.stack.pop())
            }

            function k(e) {
              var t = this.stack[this.stack.length - 1].children,
                n = t[t.length - 1];
              n && "text" === n.type || ((n = {
                type: "text",
                value: ""
              }).position = {
                start: m(e.start)
              }, this.stack[this.stack.length - 1].children.push(n)), this.stack.push(n)
            }

            function S(e) {
              var t = this.stack.pop();
              t.value += this.sliceSerialize(e), t.position.end = m(e.end)
            }

            function O() {
              l("atHardBreak", !0)
            }

            function L(e) {
              l("characterReferenceType", e.type)
            }

            function C() {
              return {
                type: "code",
                lang: null,
                meta: null,
                value: ""
              }
            }

            function A() {
              return {
                type: "heading",
                depth: void 0,
                children: []
              }
            }

            function T() {
              return {
                type: "break"
              }
            }

            function _() {
              return {
                type: "html",
                value: ""
              }
            }

            function w() {
              return {
                type: "link",
                title: null,
                url: "",
                children: []
              }
            }

            function I(e) {
              return {
                type: "list",
                ordered: "listOrdered" === e.type,
                start: null,
                spread: e._spread,
                children: []
              }
            }
          }(n)(l(c(n).document().write(s()(e, t, !0))))
      };
      var r = n(57046),
        i = n(25058),
        o = n(7598),
        u = n(28530),
        a = n(11631),
        c = n(63481),
        s = n(33498),
        l = n(34685),
        f = n(47649),
        p = n(52860);

      function h(e, t) {
        var n, r;
        for (n in t) r = o.call(e, n) ? e[n] : e[n] = {}, "canContainEols" === n || "transforms" === n ? e[n] = [].concat(r, t[n]) : Object.assign(r, t[n])
      }
    },
    36185: (e, t, n) => {
      var r = n(24969),
        i = n(94535),
        o = n(42952),
        u = n(20432),
        a = {}.hasOwnProperty;

      function c(e, t) {
        var n, r, i;
        for (n in t) r = a.call(e, n) ? e[n] : e[n] = {}, i = t[n], "canContainEols" === n || "transforms" === n ? e[n] = [].concat(r, i) : Object.assign(r, i)
      }
      e.exports = function(e) {
        for (var t = {
            transforms: [],
            canContainEols: []
          }, n = e.length, r = -1; ++r < n;) c(t, e[r]);
        return t
      }([r, i, o, u])
    },
    36309: (e, t, n) => {
      "use strict";
      var r = n(58649);
      e.exports = function(e, t) {
        var n = e[e.length - 1];
        return n && n[1].type === t ? r(n[2].sliceStream(n[1])) : 0
      }
    },
    37068: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
        }),
        function(e, t) {
          for (var n in t) Object.defineProperty(e, n, {
            enumerable: !0,
            get: Object.getOwnPropertyDescriptor(t, n).get
          })
        }(t, {
          get EntityLinkAssertion() {
            return g
          },
          get HyperLinkAssertion() {
            return v
          },
          get NodeAssertion() {
            return y
          },
          get VOID_CONTENT() {
            return m
          },
          get assert() {
            return x
          },
          get assertLink() {
            return E
          }
        });
      var r = n(94554);

      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function o(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }

      function u(e, t, n) {
        return t = l(t),
          function(e, t) {
            return !t || "object" != ((n = t) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof t ? o(e) : t;
            var n
          }(e, d() ? Reflect.construct(t, n || [], l(e).constructor) : t.apply(e, n))
      }

      function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }

      function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function l(e) {
        return l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, l(e)
      }

      function f(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && p(e, t)
      }

      function p(e, t) {
        return p = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        }, p(e, t)
      }

      function h(e) {
        return function(e) {
          if (Array.isArray(e)) return i(e)
        }(e) || function(e) {
          if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
          if (e) {
            if ("string" == typeof e) return i(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
          }
        }(e) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function d() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (d = function() {
          return !!e
        })()
      }
      var m = [],
        y = function() {
          function e(t, n) {
            a(this, e), s(this, "contentRule", void 0), s(this, "validateData", void 0), this.contentRule = t, this.validateData = n
          }
          var t, n;
          return t = e, (n = [{
            key: "assert",
            value: function(e, t) {
              var n = new r.ObjectAssertion(e, t);
              if (!n.object()) return n.errors;
              n.noAdditionalProperties(["nodeType", "data", "content"]);
              var i = Array.isArray(this.contentRule) ? {
                  nodeTypes: this.contentRule
                } : this.contentRule(e, t),
                o = i.nodeTypes,
                u = i.min,
                a = void 0 === u ? 0 : u;
              if (0 === o.length && a > 0) throw new Error("Invalid content rule. Cannot have enforce a 'min' of ".concat(a, " with no nodeTypes"));
              if (n.minLength("content", a), 0 === o.length ? n.empty("content") : n.each("content", function(e, t) {
                  var n = new r.ObjectAssertion(e, t);
                  return n.object() ? (n.enum("nodeType", o), n.errors) : n.errors
                }), n.object("data")) {
                var c, s, l, f = null !== (l = null === (s = this.validateData) || void 0 === s ? void 0 : s.call(this, e.data, t.of("data"))) && void 0 !== l ? l : [];
                (c = n).catch.apply(c, h(f))
              }
              return n.errors
            }
          }]) && c(t.prototype, n), e
        }(),
        g = function(e) {
          function t(e, n) {
            var i;
            return a(this, t), s(i = u(this, t, [n, function(e, t) {
              return o(i).assertLink(e, t)
            }]), "linkType", void 0), s(i, "type", void 0), s(i, "assertLink", void 0), i.linkType = e, i.assertLink = function(e, t) {
              var n = new r.ObjectAssertion(e, t);
              if (n.object("target")) {
                var o, u = new r.ObjectAssertion(e.target.sys, t.of("target").of("sys"));
                u.object() && (u.enum("type", [i.type]), u.enum("linkType", [i.linkType]), "Link" === i.type ? (u.string("id"), u.noAdditionalProperties(["type", "linkType", "id"])) : "ResourceLink" === i.type && (u.string("urn"), u.noAdditionalProperties(["type", "linkType", "urn"]))), (o = n).catch.apply(o, h(u.errors))
              }
              return n.noAdditionalProperties(["target"]), n.errors
            }, i.type = i.linkType.startsWith("Contentful:") ? "ResourceLink" : "Link", i
          }
          return f(t, e), t
        }(y),
        v = function(e) {
          function t() {
            var e;
            return a(this, t), s(e = u(this, t, [
              ["text"],
              function(t, n) {
                return o(e).assertLink(t, n)
              }
            ]), "assertLink", function(e, t) {
              var n = new r.ObjectAssertion(e, t);
              return n.string("uri"), n.noAdditionalProperties(["uri"]), n.errors
            }), e
          }
          return f(t, e), t
        }(y),
        x = function(e, t) {
          return new y(e, t)
        },
        E = function(e, t) {
          return new g(e, t)
        }
    },
    38692: e => {
      "use strict";
      e.exports = function(e, t) {
        var n, r = String(e),
          i = 0;
        if ("string" != typeof t) throw new Error("Expected character");
        for (n = r.indexOf(t); - 1 !== n;) i++, n = r.indexOf(t, n + t.length);
        return i
      }
    },
    39077: (e, t, n) => {
      "use strict";
      var r = n(87126),
        i = n(85409),
        o = n(28530),
        u = n(98345),
        a = n(79),
        c = n(42827),
        s = n(58344),
        l = n(26075),
        f = {
          name: "definition",
          tokenize: function(e, t, n) {
            var i, l = this;
            return function(t) {
              return e.enter("definition"), a.call(l, e, f, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t)
            };

            function f(t) {
              return i = o(l.sliceSerialize(l.events[l.events.length - 1][1]).slice(1, -1)), 58 === t ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), s(e, u(e, e.attempt(p, c(e, h, "whitespace"), c(e, h, "whitespace")), n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"))) : n(t)
            }

            function h(o) {
              return null === o || r(o) ? (e.exit("definition"), l.parser.defined.indexOf(i) < 0 && l.parser.defined.push(i), t(o)) : n(o)
            }
          }
        },
        p = {
          tokenize: function(e, t, n) {
            return function(t) {
              return i(t) ? s(e, o)(t) : n(t)
            };

            function o(t) {
              return 34 === t || 39 === t || 40 === t ? l(e, c(e, u, "whitespace"), n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t) : n(t)
            }

            function u(e) {
              return null === e || r(e) ? t(e) : n(e)
            }
          },
          partial: !0
        };
      e.exports = f
    },
    39471: (e, t, n) => {
      "use strict";
      var r = n(78071),
        i = n(15076),
        o = n(52861),
        u = n(30134),
        a = n(4970);
      const c = new Map([
          ["paragraph", r.BLOCKS.PARAGRAPH],
          ["heading", "heading"],
          ["text", "text"],
          ["emphasis", "text"],
          ["strong", "text"],
          ["delete", "text"],
          ["inlineCode", "text"],
          ["link", r.INLINES.HYPERLINK],
          ["thematicBreak", r.BLOCKS.HR],
          ["blockquote", r.BLOCKS.QUOTE],
          ["list", "list"],
          ["listItem", r.BLOCKS.LIST_ITEM],
          ["table", r.BLOCKS.TABLE],
          ["tableRow", r.BLOCKS.TABLE_ROW],
          ["tableCell", r.BLOCKS.TABLE_CELL]
        ]),
        s = e => {
          const t = c.get(e.type);
          switch (t) {
            case "heading":
              return `${t}-${e.depth}`;
            case "list":
              return (e.ordered ? "ordered" : "unordered") + "-list";
            default:
              return t
          }
        },
        l = new Map([
          ["emphasis", "italic"],
          ["strong", "bold"],
          ["inlineCode", "code"],
          ["delete", "strikethrough"]
        ]),
        f = new Map([
          ["delete", "block"],
          [r.BLOCKS.HEADING_1, "block"],
          [r.BLOCKS.HEADING_2, "block"],
          [r.BLOCKS.HEADING_3, "block"],
          [r.BLOCKS.HEADING_4, "block"],
          [r.BLOCKS.HEADING_5, "block"],
          [r.BLOCKS.HEADING_6, "block"],
          [r.BLOCKS.LIST_ITEM, "block"],
          [r.BLOCKS.UL_LIST, "block"],
          [r.BLOCKS.OL_LIST, "block"],
          [r.BLOCKS.QUOTE, "block"],
          [r.BLOCKS.HR, "block"],
          [r.BLOCKS.PARAGRAPH, "block"],
          [r.BLOCKS.TABLE, "block"],
          [r.BLOCKS.TABLE_CELL, "block"],
          [r.BLOCKS.TABLE_HEADER_CELL, "block"],
          [r.BLOCKS.TABLE_ROW, "block"],
          [r.INLINES.HYPERLINK, "inline"],
          ["text", "text"],
          ["emphasis", "text"],
          ["strong", "text"],
          ["inlineCode", "text"],
          ["delete", "text"]
        ]),
        p = e => "text" === f.get(e),
        h = e => "inline" === f.get(e),
        d = async (e, t, n) => {
          const i = (await v(e.children, t, n)).reduce((e, t) => {
            if (p(t.nodeType) || h(t.nodeType)) {
              const n = e[e.length - 1];
              n && n.nodeType === r.BLOCKS.PARAGRAPH ? n.content.push(t) : e.push({
                nodeType: r.BLOCKS.PARAGRAPH,
                data: {},
                content: [t]
              })
            } else e.push(t);
            return e
          }, []);
          return 0 === i.length && i.push({
            nodeType: r.BLOCKS.PARAGRAPH,
            data: {},
            content: [{
              nodeType: "text",
              data: {},
              marks: [],
              value: ""
            }]
          }), [{
            nodeType: r.BLOCKS.TABLE_CELL,
            content: i,
            data: {}
          }]
        }, m = async (e, t, n) => {
          const r = s(e),
            i = (e => l.get(e.type))(e),
            o = Array.from(n);
          return i && o.push(i), "text" !== e.type && e.children ? await v(e.children, t, o) : e.value ? [{
            nodeType: r,
            value: e.value,
            marks: o.map(e => ({
              type: e
            })),
            data: {}
          }] : void 0
        }, y = async (e, t) => {
          const n = await t(e);
          return i.isArray(n) ? n : [n]
        };
      async function g(e, t, n = []) {
        "html" === e.type && /<br\s?\/?>/gi.test(e.value) && (e.value = "\n", e.type = "text");
        const i = s(e);
        return (e => "link" === e.type)(e) ? await (async (e, t, n) => {
          const i = await v(e.children, t, n);
          return [{
            nodeType: r.INLINES.HYPERLINK,
            data: {
              uri: e.url
            },
            content: i
          }]
        })(e, t, n) : (e => e === r.BLOCKS.TABLE_CELL)(i) ? await d(e, t, n) : (e => "block" === f.get(e))(i) || h(i) ? await (async (e, t, n) => [{
          nodeType: s(e),
          content: await v(e.children, t, n),
          data: {}
        }])(e, t, n) : p(i) ? await m(e, t, n) : await y(e, t)
      }
      async function v(e, t, n = []) {
        if (!e) return Promise.resolve([]);
        const r = await Promise.all(e.map(e => g(e, t, n)));
        return i.flatten(r).filter(Boolean)
      }
      t.V = async function(e, t = () => Promise.resolve(null)) {
        const n = function(e) {
          return function e(t) {
            if (!t.children) return t;
            const n = i.flatMap(t.children, e => function(e) {
              if ("paragraph" !== e.type) return [e];
              const t = [];
              for (let n = 0; n < e.children.length; n++) "image" === e.children[n].type && t.push(n);
              if (0 === t.length) return [e];
              const n = [];
              let r = -1;
              for (let i = 0; i < t.length; i++) {
                const o = t[i];
                if (0 !== o) {
                  const t = e.children.slice(r + 1, o);
                  t.length > 0 && n.push({
                    ...e,
                    children: t
                  })
                }
                const u = e.children[o];
                n.push(u);
                let a = [];
                const c = i + 1 < t.length ? t[i + 1] : e.children.length;
                o + 1 < c && o === t.slice(-1)[0] && (a = e.children.slice(o + 1, c), a.length > 0 && n.push({
                  ...e,
                  children: a
                })), r = o
              }
              return n
            }(e)).map(t => e(t));
            return {
              ...t,
              children: n
            }
          }({
            depth: "0",
            type: "root",
            value: "",
            ordered: !0,
            children: e.children
          })
        }(a().use(u).use(o).parse(e));
        return await (async (e, t) => {
          const n = await v(e.children, t);
          return {
            nodeType: r.BLOCKS.DOCUMENT,
            data: {},
            content: n
          }
        })(n, t)
      }
    },
    40965: (e, t, n) => {
      "use strict";
      var r = n(30037),
        i = n(95094),
        o = n(43489);
      e.exports = c;
      var u = {}.hasOwnProperty,
        a = ["history", "path", "basename", "stem", "extname", "dirname"];

      function c(e) {
        var t, n;
        if (e) {
          if ("string" == typeof e || o(e)) e = {
            contents: e
          };
          else if ("message" in e && "messages" in e) return e
        } else e = {};
        if (!(this instanceof c)) return new c(e);
        for (this.data = {}, this.messages = [], this.history = [], this.cwd = i.cwd(), n = -1; ++n < a.length;) t = a[n], u.call(e, t) && (this[t] = e[t]);
        for (t in e) a.indexOf(t) < 0 && (this[t] = e[t])
      }

      function s(e, t) {
        if (e && e.indexOf(r.sep) > -1) throw new Error("`" + t + "` cannot be a path: did not expect `" + r.sep + "`")
      }

      function l(e, t) {
        if (!e) throw new Error("`" + t + "` cannot be empty")
      }

      function f(e, t) {
        if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too")
      }
      c.prototype.toString = function(e) {
        return (this.contents || "").toString(e)
      }, Object.defineProperty(c.prototype, "path", {
        get: function() {
          return this.history[this.history.length - 1]
        },
        set: function(e) {
          l(e, "path"), this.path !== e && this.history.push(e)
        }
      }), Object.defineProperty(c.prototype, "dirname", {
        get: function() {
          return "string" == typeof this.path ? r.dirname(this.path) : void 0
        },
        set: function(e) {
          f(this.path, "dirname"), this.path = r.join(e || "", this.basename)
        }
      }), Object.defineProperty(c.prototype, "basename", {
        get: function() {
          return "string" == typeof this.path ? r.basename(this.path) : void 0
        },
        set: function(e) {
          l(e, "basename"), s(e, "basename"), this.path = r.join(this.dirname || "", e)
        }
      }), Object.defineProperty(c.prototype, "extname", {
        get: function() {
          return "string" == typeof this.path ? r.extname(this.path) : void 0
        },
        set: function(e) {
          if (s(e, "extname"), f(this.path, "extname"), e) {
            if (46 !== e.charCodeAt(0)) throw new Error("`extname` must start with `.`");
            if (e.indexOf(".", 1) > -1) throw new Error("`extname` cannot contain multiple dots")
          }
          this.path = r.join(this.dirname, this.stem + (e || ""))
        }
      }), Object.defineProperty(c.prototype, "stem", {
        get: function() {
          return "string" == typeof this.path ? r.basename(this.path, this.extname) : void 0
        },
        set: function(e) {
          l(e, "stem"), s(e, "stem"), this.path = r.join(this.dirname || "", e + (this.extname || ""))
        }
      })
    },
    41120: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = n(87126),
        i = n(42827);
      t.tokenize = function(e) {
        var t, n = e.attempt(this.parser.constructs.contentInitial, function(t) {
          if (null !== t) return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i(e, n, "linePrefix");
          e.consume(t)
        }, function(t) {
          return e.enter("paragraph"), o(t)
        });
        return n;

        function o(n) {
          var r = e.enter("chunkText", {
            contentType: "text",
            previous: t
          });
          return t && (t.next = r), t = r, u(n)
        }

        function u(t) {
          return null === t ? (e.exit("chunkText"), e.exit("paragraph"), void e.consume(t)) : r(t) ? (e.consume(t), e.exit("chunkText"), o) : (e.consume(t), u)
        }
      }
    },
    42639: e => {
      e.exports = function(e, n) {
        for (var r, i = [], o = 0, u = 0; r = t.exec(e);) a(e.slice(o, r.index)), i.push(r[0]), o = r.index + r[0].length, u++;
        return a(e.slice(o)), i.join("");

        function a(e) {
          i.push(n(e, u, !e))
        }
      };
      var t = /\r?\n|\r/g
    },
    42827: (e, t, n) => {
      "use strict";
      var r = n(52734);
      e.exports = function(e, t, n, i) {
        var o = i ? i - 1 : 1 / 0,
          u = 0;
        return function(i) {
          return r(i) ? (e.enter(n), a(i)) : t(i)
        };

        function a(i) {
          return r(i) && u++ < o ? (e.consume(i), a) : (e.exit(n), t(i))
        }
      }
    },
    42952: (e, t) => {
      function n(e) {
        this.exit(e)
      }

      function r(e) {
        this.enter({
          type: "tableCell",
          children: []
        }, e)
      }

      function i(e, t) {
        return "|" === t ? t : e
      }
      t.enter = {
        table: function(e) {
          this.enter({
            type: "table",
            align: e._align,
            children: []
          }, e), this.setData("inTable", !0)
        },
        tableData: r,
        tableHeader: r,
        tableRow: function(e) {
          this.enter({
            type: "tableRow",
            children: []
          }, e)
        }
      }, t.exit = {
        codeText: function(e) {
          var t = this.resume();
          this.getData("inTable") && (t = t.replace(/\\([\\|])/g, i)), this.stack[this.stack.length - 1].value = t, this.exit(e)
        },
        table: function(e) {
          this.exit(e), this.setData("inTable")
        },
        tableData: n,
        tableHeader: n,
        tableRow: n
      }
    },
    43489: e => {
      e.exports = function(e) {
        return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
      }
    },
    43861: (e, t, n) => {
      "use strict";
      var r = n(87126),
        i = n(52734),
        o = n(42827),
        u = {
          name: "thematicBreak",
          tokenize: function(e, t, n) {
            var u, a = 0;
            return function(t) {
              return e.enter("thematicBreak"), u = t, c(t)
            };

            function c(l) {
              return l === u ? (e.enter("thematicBreakSequence"), s(l)) : i(l) ? o(e, c, "whitespace")(l) : a < 3 || null !== l && !r(l) ? n(l) : (e.exit("thematicBreak"), t(l))
            }

            function s(t) {
              return t === u ? (e.consume(t), a++, s) : (e.exit("thematicBreakSequence"), c(t))
            }
          }
        };
      e.exports = u
    },
    44808: e => {
      "use strict";
      var t = String.fromCharCode;
      e.exports = t
    },
    46315: (e, t, n) => {
      "use strict";
      var r = n(25058);
      e.exports = function(e) {
        return r({}, e)
      }
    },
    46377: (e, t, n) => {
      "use strict";
      var r = n(87126),
        i = n(64936),
        o = n(36309),
        u = n(42827),
        a = {
          name: "codeIndented",
          tokenize: function(e, t, n) {
            return e.attempt(c, i, n);

            function i(n) {
              return null === n ? t(n) : r(n) ? e.attempt(c, i, t)(n) : (e.enter("codeFlowValue"), o(n))
            }

            function o(t) {
              return null === t || r(t) ? (e.exit("codeFlowValue"), i(t)) : (e.consume(t), o)
            }
          },
          resolve: function(e, t) {
            var n = {
              type: "codeIndented",
              start: e[0][1].start,
              end: e[e.length - 1][1].end
            };
            return i(e, 0, 0, [
              ["enter", n, t]
            ]), i(e, e.length, 0, [
              ["exit", n, t]
            ]), e
          }
        },
        c = {
          tokenize: function(e, t, n) {
            var i = this;
            return u(e, function a(c) {
              return r(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), u(e, a, "linePrefix", 5)) : o(i.events, "linePrefix") < 4 ? n(c) : t(c)
            }, "linePrefix", 5)
          },
          partial: !0
        };
      e.exports = a
    },
    46400: (e, t, n) => {
      e.exports = n(17589)
    },
    47324: e => {
      "use strict";
      e.exports = function(e) {
        if (e) throw e
      }
    },
    47598: (e, t, n) => {
      "use strict";
      var r = n(52508),
        i = n(96893),
        o = n(87126),
        u = n(85409),
        a = n(52734),
        c = n(44808),
        s = n(83771),
        l = n(25624),
        f = n(13067),
        p = {
          name: "htmlFlow",
          tokenize: function(e, t, n) {
            var f, p, d, m, y, g = this;
            return function(t) {
              return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), v
            };

            function v(i) {
              return 33 === i ? (e.consume(i), x) : 47 === i ? (e.consume(i), k) : 63 === i ? (e.consume(i), f = 3, g.interrupt ? t : z) : r(i) ? (e.consume(i), d = c(i), p = !0, S) : n(i)
            }

            function x(i) {
              return 45 === i ? (e.consume(i), f = 2, E) : 91 === i ? (e.consume(i), f = 5, d = "CDATA[", m = 0, b) : r(i) ? (e.consume(i), f = 4, g.interrupt ? t : z) : n(i)
            }

            function E(r) {
              return 45 === r ? (e.consume(r), g.interrupt ? t : z) : n(r)
            }

            function b(r) {
              return r === d.charCodeAt(m++) ? (e.consume(r), m === d.length ? g.interrupt ? t : R : b) : n(r)
            }

            function k(t) {
              return r(t) ? (e.consume(t), d = c(t), S) : n(t)
            }

            function S(r) {
              return null === r || 47 === r || 62 === r || u(r) ? 47 !== r && p && l.indexOf(d.toLowerCase()) > -1 ? (f = 1, g.interrupt ? t(r) : R(r)) : s.indexOf(d.toLowerCase()) > -1 ? (f = 6, 47 === r ? (e.consume(r), O) : g.interrupt ? t(r) : R(r)) : (f = 7, g.interrupt ? n(r) : p ? C(r) : L(r)) : 45 === r || i(r) ? (e.consume(r), d += c(r), S) : n(r)
            }

            function O(r) {
              return 62 === r ? (e.consume(r), g.interrupt ? t : R) : n(r)
            }

            function L(t) {
              return a(t) ? (e.consume(t), L) : D(t)
            }

            function C(t) {
              return 47 === t ? (e.consume(t), D) : 58 === t || 95 === t || r(t) ? (e.consume(t), A) : a(t) ? (e.consume(t), C) : D(t)
            }

            function A(t) {
              return 45 === t || 46 === t || 58 === t || 95 === t || i(t) ? (e.consume(t), A) : T(t)
            }

            function T(t) {
              return 61 === t ? (e.consume(t), _) : a(t) ? (e.consume(t), T) : C(t)
            }

            function _(t) {
              return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), y = t, w) : a(t) ? (e.consume(t), _) : (y = void 0, I(t))
            }

            function w(t) {
              return t === y ? (e.consume(t), B) : null === t || o(t) ? n(t) : (e.consume(t), w)
            }

            function I(t) {
              return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 62 === t || 96 === t || u(t) ? T(t) : (e.consume(t), I)
            }

            function B(e) {
              return 47 === e || 62 === e || a(e) ? C(e) : n(e)
            }

            function D(t) {
              return 62 === t ? (e.consume(t), P) : n(t)
            }

            function P(t) {
              return a(t) ? (e.consume(t), P) : null === t || o(t) ? R(t) : n(t)
            }

            function R(t) {
              return 45 === t && 2 === f ? (e.consume(t), F) : 60 === t && 1 === f ? (e.consume(t), j) : 62 === t && 4 === f ? (e.consume(t), U) : 63 === t && 3 === f ? (e.consume(t), z) : 93 === t && 5 === f ? (e.consume(t), H) : !o(t) || 6 !== f && 7 !== f ? null === t || o(t) ? N(t) : (e.consume(t), R) : e.check(h, U, N)(t)
            }

            function N(t) {
              return e.exit("htmlFlowData"), K(t)
            }

            function K(t) {
              return null === t ? G(t) : o(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), K) : (e.enter("htmlFlowData"), R(t))
            }

            function F(t) {
              return 45 === t ? (e.consume(t), z) : R(t)
            }

            function j(t) {
              return 47 === t ? (e.consume(t), d = "", M) : R(t)
            }

            function M(t) {
              return 62 === t && l.indexOf(d.toLowerCase()) > -1 ? (e.consume(t), U) : r(t) && d.length < 8 ? (e.consume(t), d += c(t), M) : R(t)
            }

            function H(t) {
              return 93 === t ? (e.consume(t), z) : R(t)
            }

            function z(t) {
              return 62 === t ? (e.consume(t), U) : R(t)
            }

            function U(t) {
              return null === t || o(t) ? (e.exit("htmlFlowData"), G(t)) : (e.consume(t), U)
            }

            function G(n) {
              return e.exit("htmlFlow"), t(n)
            }
          },
          resolveTo: function(e) {
            for (var t = e.length; t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type););
            return t > 1 && "linePrefix" === e[t - 2][1].type && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e
          },
          concrete: !0
        },
        h = {
          tokenize: function(e, t, n) {
            return function(r) {
              return e.exit("htmlFlowData"), e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), e.attempt(f, t, n)
            }
          },
          partial: !0
        };
      e.exports = p
    },
    47649: e => {
      "use strict";
      var t;
      e.exports = function(e) {
        var n, r = "&" + e + ";";
        return (t = t || document.createElement("i")).innerHTML = r, (59 !== (n = t.textContent).charCodeAt(n.length - 1) || "semi" === e) && (n !== r && n)
      }
    },
    49904: (e, t, n) => {
      "use strict";
      e.exports = n(84572)
    },
    51059: (e, t, n) => {
      e.exports = n(29504)
    },
    51536: (e, t, n) => {
      "use strict";
      var r = n(3241)(/[!-/:-@[-`{-~]/);
      e.exports = r
    },
    52508: (e, t, n) => {
      "use strict";
      var r = n(3241)(/[A-Za-z]/);
      e.exports = r
    },
    52734: e => {
      "use strict";
      e.exports = function(e) {
        return -2 === e || -1 === e || 32 === e
      }
    },
    52860: e => {
      "use strict";
      var t = {}.hasOwnProperty;

      function n(e) {
        return e && "object" == typeof e || (e = {}), i(e.line) + ":" + i(e.column)
      }

      function r(e) {
        return e && "object" == typeof e || (e = {}), n(e.start) + "-" + n(e.end)
      }

      function i(e) {
        return e && "number" == typeof e ? e : 1
      }
      e.exports = function(e) {
        return e && "object" == typeof e ? t.call(e, "position") || t.call(e, "type") ? r(e.position) : t.call(e, "start") || t.call(e, "end") ? r(e) : t.call(e, "line") || t.call(e, "column") ? n(e) : "" : ""
      }
    },
    52861: (e, t, n) => {
      "use strict";
      var r, i = n(46400),
        o = n(36185),
        u = n(34498);
      e.exports = function(e) {
        var t = this.data();

        function n(e, n) {
          t[e] ? t[e].push(n) : t[e] = [n]
        }!r && (this.Parser && this.Parser.prototype && this.Parser.prototype.blockTokenizers || this.Compiler && this.Compiler.prototype && this.Compiler.prototype.visitors) && (r = !0, console.warn("[remark-gfm] Warning: please upgrade to remark 13 to use this plugin")), n("micromarkExtensions", i(e)), n("fromMarkdownExtensions", o), n("toMarkdownExtensions", u(e))
      }
    },
    54228: (e, t, n) => {
      "use strict";
      var r = n(32531),
        i = n(3241)(r);
      e.exports = i
    },
    57046: e => {
      "use strict";

      function t(e) {
        return e && (e.value || e.alt || e.title || "children" in e && n(e.children) || "length" in e && n(e)) || ""
      }

      function n(e) {
        for (var n = [], r = -1; ++r < e.length;) n[r] = t(e[r]);
        return n.join("")
      }
      e.exports = t
    },
    58233: (e, t, n) => {
      "use strict";
      var r = {
        name: "labelStartImage",
        tokenize: function(e, t, n) {
          var r = this;
          return function(t) {
            return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), i
          };

          function i(t) {
            return 91 === t ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), o) : n(t)
          }

          function o(e) {
            return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
          }
        },
        resolveAll: n(7992).resolveAll
      };
      e.exports = r
    },
    58344: (e, t, n) => {
      "use strict";
      var r = n(87126),
        i = n(52734),
        o = n(42827);
      e.exports = function(e, t) {
        var n;
        return function u(a) {
          return r(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), n = !0, u) : i(a) ? o(e, u, n ? "linePrefix" : "lineSuffix")(a) : t(a)
        }
      }
    },
    58597: (e, t, n) => {
      "use strict";
      e.exports = n(36046)
    },
    58649: e => {
      "use strict";
      e.exports = function(e) {
        for (var t = -1, n = 0; ++t < e.length;) n += "string" == typeof e[t] ? e[t].length : 1;
        return n
      }
    },
    61849: (e, t, n) => {
      "use strict";
      var r = n(52508),
        i = n(96893),
        o = n(87126),
        u = n(85409),
        a = n(52734),
        c = n(42827),
        s = {
          name: "htmlText",
          tokenize: function(e, t, n) {
            var s, l, f, p, h = this;
            return function(t) {
              return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), d
            };

            function d(t) {
              return 33 === t ? (e.consume(t), m) : 47 === t ? (e.consume(t), T) : 63 === t ? (e.consume(t), C) : r(t) ? (e.consume(t), I) : n(t)
            }

            function m(t) {
              return 45 === t ? (e.consume(t), y) : 91 === t ? (e.consume(t), l = "CDATA[", f = 0, b) : r(t) ? (e.consume(t), L) : n(t)
            }

            function y(t) {
              return 45 === t ? (e.consume(t), g) : n(t)
            }

            function g(t) {
              return null === t || 62 === t ? n(t) : 45 === t ? (e.consume(t), v) : x(t)
            }

            function v(e) {
              return null === e || 62 === e ? n(e) : x(e)
            }

            function x(t) {
              return null === t ? n(t) : 45 === t ? (e.consume(t), E) : o(t) ? (p = x, j(t)) : (e.consume(t), x)
            }

            function E(t) {
              return 45 === t ? (e.consume(t), H) : x(t)
            }

            function b(t) {
              return t === l.charCodeAt(f++) ? (e.consume(t), f === l.length ? k : b) : n(t)
            }

            function k(t) {
              return null === t ? n(t) : 93 === t ? (e.consume(t), S) : o(t) ? (p = k, j(t)) : (e.consume(t), k)
            }

            function S(t) {
              return 93 === t ? (e.consume(t), O) : k(t)
            }

            function O(t) {
              return 62 === t ? H(t) : 93 === t ? (e.consume(t), O) : k(t)
            }

            function L(t) {
              return null === t || 62 === t ? H(t) : o(t) ? (p = L, j(t)) : (e.consume(t), L)
            }

            function C(t) {
              return null === t ? n(t) : 63 === t ? (e.consume(t), A) : o(t) ? (p = C, j(t)) : (e.consume(t), C)
            }

            function A(e) {
              return 62 === e ? H(e) : C(e)
            }

            function T(t) {
              return r(t) ? (e.consume(t), _) : n(t)
            }

            function _(t) {
              return 45 === t || i(t) ? (e.consume(t), _) : w(t)
            }

            function w(t) {
              return o(t) ? (p = w, j(t)) : a(t) ? (e.consume(t), w) : H(t)
            }

            function I(t) {
              return 45 === t || i(t) ? (e.consume(t), I) : 47 === t || 62 === t || u(t) ? B(t) : n(t)
            }

            function B(t) {
              return 47 === t ? (e.consume(t), H) : 58 === t || 95 === t || r(t) ? (e.consume(t), D) : o(t) ? (p = B, j(t)) : a(t) ? (e.consume(t), B) : H(t)
            }

            function D(t) {
              return 45 === t || 46 === t || 58 === t || 95 === t || i(t) ? (e.consume(t), D) : P(t)
            }

            function P(t) {
              return 61 === t ? (e.consume(t), R) : o(t) ? (p = P, j(t)) : a(t) ? (e.consume(t), P) : B(t)
            }

            function R(t) {
              return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), s = t, N) : o(t) ? (p = R, j(t)) : a(t) ? (e.consume(t), R) : (e.consume(t), s = void 0, F)
            }

            function N(t) {
              return t === s ? (e.consume(t), K) : null === t ? n(t) : o(t) ? (p = N, j(t)) : (e.consume(t), N)
            }

            function K(e) {
              return 62 === e || 47 === e || u(e) ? B(e) : n(e)
            }

            function F(t) {
              return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t ? n(t) : 62 === t || u(t) ? B(t) : (e.consume(t), F)
            }

            function j(t) {
              return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c(e, M, "linePrefix", h.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
            }

            function M(t) {
              return e.enter("htmlTextData"), p(t)
            }

            function H(r) {
              return 62 === r ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r)
            }
          }
        };
      e.exports = s
    },
    62633: (e, t, n) => {
      e.exports = n(94198)
    },
    62932: (e, t, n) => {
      "use strict";
      var r = n(64936);
      e.exports = function(e, t) {
        return e.length ? (r(e, e.length, 0, t), e) : t
      }
    },
    62944: (e, t, n) => {
      "use strict";
      n.d(t, {
        e: () => d
      });
      var r = n(78322),
        i = n(82966),
        o = n(35588),
        u = n(21429),
        a = n(57308),
        c = n(7569),
        s = n(86570),
        l = n(15492),
        f = n(74197);

      function p(e) {
        var t = Object.create(null),
          n = Object.create(null);
        return (0, c.E)(e) && e.forEach(function(e) {
          var r;
          t[e.message] = e, "string" == typeof(null === (r = e.extensions) || void 0 === r ? void 0 : r.code) && (n[e.extensions.code] = e)
        }), {
          persistedQueryNotSupported: !(!t.PersistedQueryNotSupported && !n.PERSISTED_QUERY_NOT_SUPPORTED),
          persistedQueryNotFound: !(!t.PersistedQueryNotFound && !n.PERSISTED_QUERY_NOT_FOUND)
        }
      }
      var h = {
          disable: function(e) {
            return e.meta.persistedQueryNotSupported
          },
          retry: function(e) {
            var t = e.meta;
            return t.persistedQueryNotSupported || t.persistedQueryNotFound
          },
          useGETForHashedQueries: !1
        },
        d = function(e) {
          var t;

          function n() {
            t = void 0
          }(0, i.V1)(e && ("function" == typeof e.sha256 || "function" == typeof e.generateHash), 55);
          var d = (0, s.o)(h, e),
            m = d.sha256,
            y = d.generateHash,
            g = void 0 === y ? function(e) {
              return Promise.resolve(m((0, o.y)(e)))
            } : y,
            v = d.disable,
            x = d.retry,
            E = d.useGETForHashedQueries,
            b = !0,
            k = function(e) {
              return new Promise(function(t) {
                return t(g(e))
              })
            };
          return Object.assign(new u.C(function(e, o) {
            (0, i.V1)(o, 56);
            var u = e.query;
            return new a.c(function(i) {
              var a, s, h = !1,
                d = !1,
                m = function(t, r) {
                  var i = t.response,
                    u = t.networkError;
                  if (!h && (i && i.errors || u)) {
                    h = !0;
                    var l = [],
                      f = i && i.errors;
                    (0, c.E)(f) && l.push.apply(l, f);
                    var m = void 0;
                    "string" != typeof(null == u ? void 0 : u.result) && (m = u && u.result && u.result.errors), (0, c.E)(m) && l.push.apply(l, m);
                    var g = {
                      response: i,
                      networkError: u,
                      operation: e,
                      graphQLErrors: (0, c.E)(l) ? l : void 0,
                      meta: p(l)
                    };
                    if ((b = !v(g)) || n(), x(g)) return a && a.unsubscribe(), e.setContext({
                      http: {
                        includeQuery: !0,
                        includeExtensions: b
                      },
                      fetchOptions: {
                        method: "POST"
                      }
                    }), d && e.setContext({
                      fetchOptions: s
                    }), void(a = o(e).subscribe(y))
                  }
                  r()
                },
                y = {
                  next: function(e) {
                    m({
                      response: e
                    }, function() {
                      return i.next(e)
                    })
                  },
                  error: function(e) {
                    m({
                      networkError: e
                    }, function() {
                      return i.error(e)
                    })
                  },
                  complete: i.complete.bind(i)
                };
              return e.setContext({
                  http: {
                    includeQuery: !b,
                    includeExtensions: b
                  }
                }), E && b && ! function(e) {
                  return e.query.definitions.some(function(e) {
                    return "OperationDefinition" === e.kind && "mutation" === e.operation
                  })
                }(e) && (e.setContext(function(e) {
                  var t = e.fetchOptions,
                    n = void 0 === t ? {} : t;
                  return s = n, {
                    fetchOptions: (0, r.__assign)((0, r.__assign)({}, n), {
                      method: "GET"
                    })
                  }
                }), d = !0), b ? function(e) {
                  if (!e || "object" != typeof e) return k(e);
                  t || (t = new l.A(f.v["PersistedQueryLink.persistedQueryHashes"] || 2e3));
                  var n = t.get(e);
                  return n || t.set(e, n = k(e)), n
                }(u).then(function(t) {
                  e.extensions.persistedQuery = {
                    version: 1,
                    sha256Hash: t
                  }, a = o(e).subscribe(y)
                }).catch(i.error.bind(i)) : a = o(e).subscribe(y),
                function() {
                  a && a.unsubscribe()
                }
            })
          }), {
            resetHashCache: n
          }, !1 !== globalThis.__DEV__ ? {
            getMemoryInternals: function() {
              var e;
              return {
                PersistedQueryLink: {
                  persistedQueryHashes: null !== (e = null == t ? void 0 : t.size) && void 0 !== e ? e : 0
                }
              }
            }
          } : {})
        }
    },
    63481: (e, t, n) => {
      "use strict";
      var r = n(41120),
        i = n(19916),
        o = n(18577),
        u = n(11730),
        a = n(14001),
        c = n(64999),
        s = n(99079),
        l = n(71982);
      e.exports = function(e) {
        var t = {
          defined: [],
          constructs: a([l].concat(s((e || {}).extensions))),
          content: n(r),
          document: n(i),
          flow: n(o),
          string: n(u.string),
          text: n(u.text)
        };
        return t;

        function n(e) {
          return function(n) {
            return c(t, e, n)
          }
        }
      }
    },
    64013: e => {
      "use strict";
      var t = [].slice;
      e.exports = function(e, n) {
        var r;
        return function() {
          var n, u = t.call(arguments, 0),
            a = e.length > u.length;
          a && u.push(i);
          try {
            n = e.apply(null, u)
          } catch (e) {
            if (a && r) throw e;
            return i(e)
          }
          a || (n && "function" == typeof n.then ? n.then(o, i) : n instanceof Error ? i(n) : o(n))
        };

        function i() {
          r || (r = !0, n.apply(null, arguments))
        }

        function o(e) {
          i(null, e)
        }
      }
    },
    64144: (e, t, n) => {
      var r = n(33331);

      function i(e, t, n) {
        var i = n.enter("emphasis"),
          o = r(e, n, {
            before: "~",
            after: "~"
          });
        return i(), "~~" + o + "~~"
      }
      t.unsafe = [{
        character: "~",
        inConstruct: "phrasing"
      }], t.handlers = {
        delete: i
      }, i.peek = function() {
        return "~"
      }
    },
    64621: (e, t, n) => {
      e.exports = function(e, t) {
        for (var n, i = e.children || [], o = [], u = -1; ++u < i.length;) n = i[u], o.push(t.handle(n, e, t, {
          before: "\n",
          after: "\n"
        })), u + 1 < i.length && o.push(a(n, i[u + 1]));
        return o.join("");

        function a(n, i) {
          for (var o, u = -1; ++u < t.join.length && !0 !== (o = t.join[u](n, i, e, t)) && 1 !== o;) {
            if ("number" == typeof o) return r("\n", 1 + Number(o));
            if (!1 === o) return "\n\n\x3c!----\x3e\n\n"
          }
          return "\n\n"
        }
      };
      var r = n(28375)
    },
    64936: (e, t, n) => {
      "use strict";
      var r = n(3319);
      e.exports = function(e, t, n, i) {
        var o, u = e.length,
          a = 0;
        if (t = t < 0 ? -t > u ? 0 : u + t : t > u ? u : t, n = n > 0 ? n : 0, i.length < 1e4)(o = Array.from(i)).unshift(t, n), r.apply(e, o);
        else
          for (n && r.apply(e, [t, n]); a < i.length;)(o = i.slice(a, a + 1e4)).unshift(t, 0), r.apply(e, o), a += 1e4, t += 1e4
      }
    },
    64999: (e, t, n) => {
      "use strict";
      var r = n(25058),
        i = n(87126),
        o = n(62932),
        u = n(64936),
        a = n(99079),
        c = n(9345),
        s = n(93236),
        l = n(46315),
        f = n(82640);
      e.exports = function(e, t, n) {
        var p = n ? l(n) : {
            line: 1,
            column: 1,
            offset: 0
          },
          h = {},
          d = [],
          m = [],
          y = [],
          g = {
            consume: function(e) {
              i(e) ? (p.line++, p.column = 1, p.offset += -3 === e ? 2 : 1, C()) : -1 !== e && (p.column++, p.offset++), p._bufferIndex < 0 ? p._index++ : (p._bufferIndex++, p._bufferIndex === m[p._index].length && (p._bufferIndex = -1, p._index++)), v.previous = e
            },
            enter: function(e, t) {
              var n = t || {};
              return n.type = e, n.start = b(), v.events.push(["enter", n, v]), y.push(n), n
            },
            exit: function(e) {
              var t = y.pop();
              return t.end = b(), v.events.push(["exit", t, v]), t
            },
            attempt: O(function(e, t) {
              L(e, t.from)
            }),
            check: O(S),
            interrupt: O(S, {
              interrupt: !0
            }),
            lazy: O(S, {
              lazy: !0
            })
          },
          v = {
            previous: null,
            events: [],
            parser: e,
            sliceStream: E,
            sliceSerialize: function(e) {
              return s(E(e))
            },
            now: b,
            defineSkip: function(e) {
              h[e.line] = e.column, C()
            },
            write: function(e) {
              return m = o(m, e),
                function() {
                  for (var e, t; p._index < m.length;)
                    if ("string" == typeof(t = m[p._index]))
                      for (e = p._index, p._bufferIndex < 0 && (p._bufferIndex = 0); p._index === e && p._bufferIndex < t.length;) k(t.charCodeAt(p._bufferIndex));
                    else k(t)
                }(), null !== m[m.length - 1] ? [] : (L(t, 0), v.events = c(d, v.events, v), v.events)
            }
          },
          x = t.tokenize.call(v, g);
        return t.resolveAll && d.push(t), p._index = 0, p._bufferIndex = -1, v;

        function E(e) {
          return f(m, e)
        }

        function b() {
          return l(p)
        }

        function k(e) {
          x = x(e)
        }

        function S(e, t) {
          t.restore()
        }

        function O(e, t) {
          return function(n, i, o) {
            var u, c, s, l;
            return n.tokenize || "length" in n ? f(a(n)) : function(e) {
              return e in n || null in n ? f(n.null ? a(n[e]).concat(a(n.null)) : n[e])(e) : o(e)
            };

            function f(e) {
              return u = e, h(e[c = 0])
            }

            function h(e) {
              return function(n) {
                var i, o, u, a, c;
                return i = b(), o = v.previous, u = v.currentConstruct, a = v.events.length, c = Array.from(y), l = {
                  restore: function() {
                    p = i, v.previous = o, v.currentConstruct = u, v.events.length = a, y = c, C()
                  },
                  from: a
                }, s = e, e.partial || (v.currentConstruct = e), e.name && v.parser.constructs.disable.null.indexOf(e.name) > -1 ? m() : e.tokenize.call(t ? r({}, v, t) : v, g, d, m)(n)
              }
            }

            function d(t) {
              return e(s, l), i
            }

            function m(e) {
              return l.restore(), ++c < u.length ? h(u[c]) : o
            }
          }
        }

        function L(e, t) {
          e.resolveAll && d.indexOf(e) < 0 && d.push(e), e.resolve && u(v.events, t, v.events.length - t, e.resolve(v.events.slice(t), v)), e.resolveTo && (v.events = e.resolveTo(v.events, v))
        }

        function C() {
          p.line in h && p.column < 2 && (p.column = h[p.line], p.offset += h[p.line] - 1)
        }
      }
    },
    65342: (e, t, n) => {
      e.exports = function(e) {
        var t = (e || {}).singleTilde,
          n = {
            tokenize: function(e, n, i) {
              var o = this.previous,
                u = this.events,
                a = 0;
              return function(t) {
                return 126 !== t || 126 === o && "characterEscape" !== u[u.length - 1][1].type ? i(t) : (e.enter("strikethroughSequenceTemporary"), c(t))
              };

              function c(u) {
                var s, l, f = r(o);
                return 126 === u ? a > 1 ? i(u) : (e.consume(u), a++, c) : a < 2 && !t ? i(u) : (s = e.exit("strikethroughSequenceTemporary"), l = r(u), s._open = !l || 2 === l && f, s._close = !f || 2 === f && l, n(u))
              }
            },
            resolveAll: function(e, t) {
              for (var n, r, a, c, s = -1; ++s < e.length;)
                if ("enter" === e[s][0] && "strikethroughSequenceTemporary" === e[s][1].type && e[s][1]._close)
                  for (a = s; a--;)
                    if ("exit" === e[a][0] && "strikethroughSequenceTemporary" === e[a][1].type && e[a][1]._open && e[s][1].end.offset - e[s][1].start.offset === e[a][1].end.offset - e[a][1].start.offset) {
                      e[s][1].type = "strikethroughSequence", e[a][1].type = "strikethroughSequence", n = {
                        type: "strikethrough",
                        start: u(e[a][1].start),
                        end: u(e[s][1].end)
                      }, r = {
                        type: "strikethroughText",
                        start: u(e[a][1].end),
                        end: u(e[s][1].start)
                      }, c = [
                        ["enter", n, t],
                        ["enter", e[a][1], t],
                        ["exit", e[a][1], t],
                        ["enter", r, t]
                      ], i(c, c.length, 0, o(t.parser.constructs.insideSpan.null, e.slice(a + 1, s), t)), i(c, c.length, 0, [
                        ["exit", r, t],
                        ["enter", e[s][1], t],
                        ["exit", e[s][1], t],
                        ["exit", n, t]
                      ]), i(e, a - 1, s - a + 3, c), s = a + c.length - 2;
                      break
                    } return function(e) {
                for (var t = -1, n = e.length; ++t < n;) "strikethroughSequenceTemporary" === e[t][1].type && (e[t][1].type = "data");
                return e
              }(e)
            }
          };
        return null == t && (t = !0), {
          text: {
            126: n
          },
          insideSpan: {
            null: n
          }
        }
      };
      var r = n(96967),
        i = n(64936),
        o = n(9345),
        u = n(46315)
    },
    66751: e => {
      "use strict";
      e.exports = e => {
        if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
        const t = Object.getPrototypeOf(e);
        return null === t || t === Object.prototype
      }
    },
    67339: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "EMPTY_DOCUMENT", {
        enumerable: !0,
        get: function() {
          return i
        }
      });
      var r = n(69333),
        i = {
          nodeType: r.BLOCKS.DOCUMENT,
          data: {},
          content: [{
            nodeType: r.BLOCKS.PARAGRAPH,
            data: {},
            content: [{
              nodeType: "text",
              value: "",
              marks: [],
              data: {}
            }]
          }]
        }
    },
    68940: (e, t, n) => {
      "use strict";
      var r = n(28375);
      e.exports = function(e, t) {
        for (var n, l, f, p, h, E, b, k, S, O, L, C = t || {}, A = !1 !== C.padding, T = !1 !== C.delimiterStart, _ = !1 !== C.delimiterEnd, w = (C.align || []).concat(), I = !1 !== C.alignDelimiters, B = [], D = C.stringLength || v, P = -1, R = e.length, N = [], K = [], F = [], j = [], M = [], H = 0; ++P < R;) {
          for (l = -1, F = [], j = [], (f = (n = e[P]).length) > H && (H = f); ++l < f;) E = g(n[l]), !0 === I && (h = D(E), j[l] = h, (void 0 === (p = M[l]) || h > p) && (M[l] = h)), F.push(E);
          N[P] = F, K[P] = j
        }
        if (l = -1, f = H, "object" == typeof w && "length" in w)
          for (; ++l < f;) B[l] = x(w[l]);
        else
          for (L = x(w); ++l < f;) B[l] = L;
        for (l = -1, f = H, F = [], j = []; ++l < f;) S = "", O = "", (L = B[l]) === m ? S = c : L === y ? O = c : L === d && (S = c, O = c), h = I ? Math.max(1, M[l] - S.length - O.length) : 1, E = S + r(a, h) + O, !0 === I && ((h = S.length + h + O.length) > M[l] && (M[l] = h), j[l] = h), F[l] = E;
        for (N.splice(1, 0, F), K.splice(1, 0, j), P = -1, R = N.length, b = []; ++P < R;) {
          for (F = N[P], j = K[P], l = -1, f = H, k = []; ++l < f;) E = F[l] || "", S = "", O = "", !0 === I && (h = M[l] - (j[l] || 0), (L = B[l]) === y ? S = r(o, h) : L === d ? h % 2 == 0 ? O = S = r(o, h / 2) : (S = r(o, h / 2 + .5), O = r(o, h / 2 - .5)) : O = r(o, h)), !0 === T && 0 === l && k.push(s), !0 !== A || !1 === I && "" === E || !0 !== T && 0 === l || k.push(o), !0 === I && k.push(S), k.push(E), !0 === I && k.push(O), !0 === A && k.push(o), !0 !== _ && l === f - 1 || k.push(s);
          k = k.join(""), !1 === _ && (k = k.replace(i, "")), b.push(k)
        }
        return b.join(u)
      };
      var i = / +$/,
        o = " ",
        u = "\n",
        a = "-",
        c = ":",
        s = "|",
        l = 0,
        f = 67,
        p = 76,
        h = 82,
        d = 99,
        m = 108,
        y = 114;

      function g(e) {
        return null == e ? "" : String(e)
      }

      function v(e) {
        return e.length
      }

      function x(e) {
        var t = "string" == typeof e ? e.charCodeAt(0) : l;
        return t === p || t === m ? m : t === h || t === y ? y : t === f || t === d ? d : l
      }
    },
    69333: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "BLOCKS", {
        enumerable: !0,
        get: function() {
          return n
        }
      });
      var n = function(e) {
        return e.DOCUMENT = "document", e.PARAGRAPH = "paragraph", e.HEADING_1 = "heading-1", e.HEADING_2 = "heading-2", e.HEADING_3 = "heading-3", e.HEADING_4 = "heading-4", e.HEADING_5 = "heading-5", e.HEADING_6 = "heading-6", e.OL_LIST = "ordered-list", e.UL_LIST = "unordered-list", e.LIST_ITEM = "list-item", e.HR = "hr", e.QUOTE = "blockquote", e.EMBEDDED_ENTRY = "embedded-entry-block", e.EMBEDDED_ASSET = "embedded-asset-block", e.EMBEDDED_RESOURCE = "embedded-resource-block", e.TABLE = "table", e.TABLE_ROW = "table-row", e.TABLE_CELL = "table-cell", e.TABLE_HEADER_CELL = "table-header-cell", e
      }({})
    },
    71982: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = n(11730),
        i = n(31584),
        o = n(19059),
        u = n(23074),
        a = n(2277),
        c = n(20113),
        s = n(84141),
        l = n(46377),
        f = n(96290),
        p = n(39077),
        h = n(92319),
        d = n(86318),
        m = n(47598),
        y = n(61849),
        g = n(7992),
        v = n(58233),
        x = n(87806),
        E = n(15768),
        b = n(95996),
        k = n(85062),
        S = n(43861),
        O = {
          42: b,
          43: b,
          45: b,
          48: b,
          49: b,
          50: b,
          51: b,
          52: b,
          53: b,
          54: b,
          55: b,
          56: b,
          57: b,
          62: u
        },
        L = {
          91: p
        },
        C = {
          "-2": l,
          "-1": l,
          32: l
        },
        A = {
          35: d,
          42: S,
          45: [k, S],
          60: m,
          61: k,
          95: S,
          96: s,
          126: s
        },
        T = {
          38: c,
          92: a
        },
        _ = {
          "-5": E,
          "-4": E,
          "-3": E,
          33: v,
          38: c,
          42: i,
          60: [o, y],
          91: x,
          92: [h, a],
          93: g,
          95: i,
          96: f
        },
        w = {
          null: [i, r.resolver]
        };
      t.contentInitial = L, t.disable = {
        null: []
      }, t.document = O, t.flow = A, t.flowInitial = C, t.insideSpan = w, t.string = T, t.text = _
    },
    74313: (e, t, n) => {
      "use strict";
      var r = n(62229),
        i = n(78071);

      function o(e, t) {
        const {
          renderNode: n,
          renderMark: u,
          renderText: a,
          preserveWhitespace: c
        } = t;
        if (i.helpers.isText(e)) {
          let t = a ? a(e.value) : e.value;
          if (c && !a) {
            t = t.replace(/ {2,}/g, e => " ".repeat(e.length));
            const e = t.split("\n"),
              n = [];
            e.forEach((t, i) => {
              n.push(t), i !== e.length - 1 && n.push(r.createElement("br", null))
            }), t = n
          }
          return e.marks.reduce((e, t) => u[t.type] ? u[t.type](e) : e, t)
        } {
          const i = function(e, t) {
            return e.map((e, n) => {
              return i = o(e, t), u = n, r.isValidElement(i) && null === i.key ? r.cloneElement(i, {
                key: u
              }) : i;
              var i, u
            })
          }(e.content, t);
          return e.nodeType && n[e.nodeType] ? n[e.nodeType](e, i) : r.createElement(r.Fragment, null, i)
        }
      }
      const u = {
          [i.BLOCKS.DOCUMENT]: (e, t) => t,
          [i.BLOCKS.PARAGRAPH]: (e, t) => r.createElement("p", null, t),
          [i.BLOCKS.HEADING_1]: (e, t) => r.createElement("h1", null, t),
          [i.BLOCKS.HEADING_2]: (e, t) => r.createElement("h2", null, t),
          [i.BLOCKS.HEADING_3]: (e, t) => r.createElement("h3", null, t),
          [i.BLOCKS.HEADING_4]: (e, t) => r.createElement("h4", null, t),
          [i.BLOCKS.HEADING_5]: (e, t) => r.createElement("h5", null, t),
          [i.BLOCKS.HEADING_6]: (e, t) => r.createElement("h6", null, t),
          [i.BLOCKS.EMBEDDED_ENTRY]: (e, t) => r.createElement("div", null, t),
          [i.BLOCKS.EMBEDDED_RESOURCE]: (e, t) => r.createElement("div", null, t),
          [i.BLOCKS.UL_LIST]: (e, t) => r.createElement("ul", null, t),
          [i.BLOCKS.OL_LIST]: (e, t) => r.createElement("ol", null, t),
          [i.BLOCKS.LIST_ITEM]: (e, t) => r.createElement("li", null, t),
          [i.BLOCKS.QUOTE]: (e, t) => r.createElement("blockquote", null, t),
          [i.BLOCKS.HR]: () => r.createElement("hr", null),
          [i.BLOCKS.TABLE]: (e, t) => r.createElement("table", null, r.createElement("tbody", null, t)),
          [i.BLOCKS.TABLE_ROW]: (e, t) => r.createElement("tr", null, t),
          [i.BLOCKS.TABLE_HEADER_CELL]: (e, t) => r.createElement("th", null, t),
          [i.BLOCKS.TABLE_CELL]: (e, t) => r.createElement("td", null, t),
          [i.INLINES.ASSET_HYPERLINK]: e => c(i.INLINES.ASSET_HYPERLINK, e),
          [i.INLINES.ENTRY_HYPERLINK]: e => c(i.INLINES.ENTRY_HYPERLINK, e),
          [i.INLINES.RESOURCE_HYPERLINK]: e => s(i.INLINES.RESOURCE_HYPERLINK, e),
          [i.INLINES.EMBEDDED_ENTRY]: e => c(i.INLINES.EMBEDDED_ENTRY, e),
          [i.INLINES.EMBEDDED_RESOURCE]: (e, t) => s(i.INLINES.EMBEDDED_RESOURCE, e),
          [i.INLINES.HYPERLINK]: (e, t) => r.createElement("a", {
            href: e.data.uri
          }, t)
        },
        a = {
          [i.MARKS.BOLD]: e => r.createElement("b", null, e),
          [i.MARKS.ITALIC]: e => r.createElement("i", null, e),
          [i.MARKS.UNDERLINE]: e => r.createElement("u", null, e),
          [i.MARKS.CODE]: e => r.createElement("code", null, e),
          [i.MARKS.SUPERSCRIPT]: e => r.createElement("sup", null, e),
          [i.MARKS.SUBSCRIPT]: e => r.createElement("sub", null, e),
          [i.MARKS.STRIKETHROUGH]: e => r.createElement("s", null, e)
        };

      function c(e, t) {
        return r.createElement("span", {
          key: t.data.target.sys.id
        }, "type: ", t.nodeType, " id: ", t.data.target.sys.id)
      }

      function s(e, t) {
        return r.createElement("span", {
          key: t.data.target.sys.urn
        }, "type: ", t.nodeType, " urn: ", t.data.target.sys.urn)
      }
      t.i = function(e, t = {}) {
        if (!e) return null;
        let n = e;
        return t.stripEmptyTrailingParagraph && (n = i.helpers.stripEmptyTrailingParagraphFromDocument(e)), o(n, {
          renderNode: {
            ...u,
            ...t.renderNode
          },
          renderMark: {
            ...a,
            ...t.renderMark
          },
          renderText: t.renderText,
          preserveWhitespace: t.preserveWhitespace
        })
      }
    },
    74482: (e, t, n) => {
      "use strict";
      e.exports = c;
      var r = n(12588),
        i = n(18435),
        o = !0,
        u = "skip",
        a = !1;

      function c(e, t, n, c) {
        var s, l;
        "function" == typeof t && "function" != typeof n && (c = n, n = t, t = null), l = r(t), s = c ? -1 : 1,
          function e(r, f, p) {
            var h, d = "object" == typeof r && null !== r ? r : {};
            return "string" == typeof d.type && (h = "string" == typeof d.tagName ? d.tagName : "string" == typeof d.name ? d.name : void 0, m.displayName = "node (" + i(d.type + (h ? "<" + h + ">" : "")) + ")"), m;

            function m() {
              var i, h, d = p.concat(r),
                m = [];
              if ((!t || l(r, f, p[p.length - 1] || null)) && (m = function(e) {
                  return null !== e && "object" == typeof e && "length" in e ? e : "number" == typeof e ? [o, e] : [e]
                }(n(r, p)), m[0] === a)) return m;
              if (r.children && m[0] !== u)
                for (h = (c ? r.children.length : -1) + s; h > -1 && h < r.children.length;) {
                  if ((i = e(r.children[h], h, d)())[0] === a) return i;
                  h = "number" == typeof i[1] ? i[1] : h + s
                }
              return m
            }
          }(e, null, [])()
      }
      c.CONTINUE = o, c.SKIP = u, c.EXIT = a
    },
    75095: (e, t, n) => {
      "use strict";
      e.exports = function(e, t, n, r) {
        var i, o;
        return "string" == typeof t || t && "function" == typeof t.exec ? o = [
          [t, n]
        ] : (o = t, r = n), a(e, i = r || {}, function e(t) {
          var n = t[0];
          return function(r, o) {
            var c, s, l, f, p = n[0],
              h = n[1],
              d = [],
              m = 0,
              y = o.children.indexOf(r);
            for (p.lastIndex = 0, s = p.exec(r.value); s && (c = s.index, !1 !== (f = h.apply(null, [].concat(s, {
                index: s.index,
                input: s.input
              }))) && (m !== c && d.push({
                type: "text",
                value: r.value.slice(m, c)
              }), "string" == typeof f && f.length > 0 && (f = {
                type: "text",
                value: f
              }), f && (d = [].concat(d, f)), m = c + s[0].length), p.global);) s = p.exec(r.value);
            if (void 0 === c ? (d = [r], y--) : (m < r.value.length && d.push({
                type: "text",
                value: r.value.slice(m)
              }), d.unshift(y, 1), u.apply(o.children, d)), t.length > 1)
              for (l = e(t.slice(1)), c = -1; ++c < d.length;) "text" === (r = d[c]).type ? l(r, o) : a(r, i, l);
            return y + d.length + 1
          }
        }(function(e) {
          var t, n, r = [];
          if ("object" != typeof e) throw new Error("Expected array or object as schema");
          if ("length" in e)
            for (n = -1; ++n < e.length;) r.push([c(e[n][0]), s(e[n][1])]);
          else
            for (t in e) r.push([c(t), s(e[t])]);
          return r
        }(o))), e
      };
      var r = n(74482),
        i = n(12588),
        o = n(35232),
        u = [].splice;

      function a(e, t, n) {
        var o = i(t.ignore || []);
        return r(e, "text", function(e, t) {
          for (var r, i, u = -1; ++u < t.length;) {
            if (r = t[u], o(r, i ? i.children.indexOf(r) : void 0, i)) return;
            i = r
          }
          return n(e, i)
        }), []
      }

      function c(e) {
        return "string" == typeof e ? new RegExp(o(e), "g") : e
      }

      function s(e) {
        return "function" == typeof e ? e : function() {
          return e
        }
      }
    },
    75390: (e, t, n) => {
      e.exports = n(12115)
    },
    76586: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      })
    },
    78071: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
        }),
        function(e, t) {
          for (var n in t) Object.defineProperty(e, n, {
            enumerable: !0,
            get: Object.getOwnPropertyDescriptor(t, n).get
          })
        }(t, {
          get BLOCKS() {
            return r.BLOCKS
          },
          get EMPTY_DOCUMENT() {
            return u.EMPTY_DOCUMENT
          },
          get INLINES() {
            return i.INLINES
          },
          get MARKS() {
            return o.MARKS
          },
          get helpers() {
            return a
          },
          get validateRichTextDocument() {
            return c.validateRichTextDocument
          }
        });
      var r = n(69333),
        i = n(19073),
        o = n(96773);
      s(n(26286), t), s(n(20622), t), s(n(76586), t);
      var u = n(67339),
        a = f(n(88758)),
        c = n(99190);

      function s(e, t) {
        return Object.keys(e).forEach(function(n) {
          "default" === n || Object.prototype.hasOwnProperty.call(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: function() {
              return e[n]
            }
          })
        }), e
      }

      function l(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
          n = new WeakMap;
        return (l = function(e) {
          return e ? n : t
        })(e)
      }

      function f(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
          default: e
        };
        var n = l(t);
        if (n && n.has(e)) return n.get(e);
        var r = {
            __proto__: null
          },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var u = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            u && (u.get || u.set) ? Object.defineProperty(r, o, u) : r[o] = e[o]
          } return r.default = e, n && n.set(e, r), r
      }
    },
    79350: e => {
      e.exports = function e(t, n) {
        var r, i = -1;
        if (n.extensions)
          for (; ++i < n.extensions.length;) e(t, n.extensions[i]);
        for (r in n) "extensions" === r || ("unsafe" === r || "join" === r ? t[r] = t[r].concat(n[r] || []) : "handlers" === r ? t[r] = Object.assign(t[r], n[r] || {}) : t.options[r] = n[r]);
        return t
      }
    },
    79748: (e, t, n) => {
      e.exports = i, i.peek = function() {
        return "`"
      };
      var r = n(95881);

      function i(e, t, n) {
        for (var i, o, u, a, c = e.value || "", s = "`", l = -1; new RegExp("(^|[^`])" + s + "([^`]|$)").test(c);) s += "`";
        for (/[^ \r\n]/.test(c) && (/[ \r\n`]/.test(c.charAt(0)) || /[ \r\n`]/.test(c.charAt(c.length - 1))) && (c = " " + c + " "); ++l < n.unsafe.length;)
          if ((i = n.unsafe[l]).atBreak)
            for (o = r(i); u = o.exec(c);) a = u.index, 10 === c.charCodeAt(a) && 13 === c.charCodeAt(a - 1) && a--, c = c.slice(0, a) + " " + c.slice(u.index + 1);
        return s + c + s
      }
    },
    82640: e => {
      "use strict";
      e.exports = function(e, t) {
        var n, r = t.start._index,
          i = t.start._bufferIndex,
          o = t.end._index,
          u = t.end._bufferIndex;
        return r === o ? n = [e[r].slice(i, u)] : (n = e.slice(r, o), i > -1 && (n[0] = n[0].slice(i)), u > 0 && n.push(e[o].slice(0, u))), n
      }
    },
    83551: (e, t, n) => {
      var r = n(33331),
        i = n(79748),
        o = n(68940);
      e.exports = function(e) {
        var t = e || {},
          n = t.tableCellPadding,
          u = t.tablePipeAlign,
          a = t.stringLength,
          c = n ? " " : "|";
        return {
          unsafe: [{
            character: "\r",
            inConstruct: "tableCell"
          }, {
            character: "\n",
            inConstruct: "tableCell"
          }, {
            atBreak: !0,
            character: "|",
            after: "[\t :-]"
          }, {
            character: "|",
            inConstruct: "tableCell"
          }, {
            atBreak: !0,
            character: ":",
            after: "-"
          }, {
            atBreak: !0,
            character: "-",
            after: "[:|-]"
          }],
          handlers: {
            table: function(e, t, n) {
              return l(function(e, t) {
                for (var n = e.children, r = -1, i = n.length, o = [], u = t.enter("table"); ++r < i;) o[r] = f(n[r], t);
                return u(), o
              }(e, n), e.align)
            },
            tableRow: function(e, t, n) {
              var r = l([f(e, n)]);
              return r.slice(0, r.indexOf("\n"))
            },
            tableCell: s,
            inlineCode: function(e, t, n) {
              var r = i(e, t, n);
              return -1 !== n.stack.indexOf("tableCell") && (r = r.replace(/\|/g, "\\$&")), r
            }
          }
        };

        function s(e, t, n) {
          var i = n.enter("tableCell"),
            o = r(e, n, {
              before: c,
              after: c
            });
          return i(), o
        }

        function l(e, t) {
          return o(e, {
            align: t,
            alignDelimiters: u,
            padding: n,
            stringLength: a
          })
        }

        function f(e, t) {
          for (var n = e.children, r = -1, i = n.length, o = [], u = t.enter("tableRow"); ++r < i;) o[r] = s(n[r], 0, t);
          return u(), o
        }
      }
    },
    83771: e => {
      "use strict";
      e.exports = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "source", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"]
    },
    84141: (e, t, n) => {
      "use strict";
      var r = n(87126),
        i = n(85409),
        o = n(36309),
        u = n(42827),
        a = {
          name: "codeFenced",
          tokenize: function(e, t, n) {
            var a, c = this,
              s = {
                tokenize: function(e, t, n) {
                  var i = 0;
                  return u(e, function(t) {
                    return e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), o(t)
                  }, "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);

                  function o(t) {
                    return t === a ? (e.consume(t), i++, o) : i < f ? n(t) : (e.exit("codeFencedFenceSequence"), u(e, c, "whitespace")(t))
                  }

                  function c(i) {
                    return null === i || r(i) ? (e.exit("codeFencedFence"), t(i)) : n(i)
                  }
                },
                partial: !0
              },
              l = o(this.events, "linePrefix"),
              f = 0;
            return function(t) {
              return e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), a = t, p(t)
            };

            function p(t) {
              return t === a ? (e.consume(t), f++, p) : (e.exit("codeFencedFenceSequence"), f < 3 ? n(t) : u(e, h, "whitespace")(t))
            }

            function h(t) {
              return null === t || r(t) ? g(t) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
                contentType: "string"
              }), d(t))
            }

            function d(t) {
              return null === t || i(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), u(e, m, "whitespace")(t)) : 96 === t && t === a ? n(t) : (e.consume(t), d)
            }

            function m(t) {
              return null === t || r(t) ? g(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
                contentType: "string"
              }), y(t))
            }

            function y(t) {
              return null === t || r(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), g(t)) : 96 === t && t === a ? n(t) : (e.consume(t), y)
            }

            function g(n) {
              return e.exit("codeFencedFence"), c.interrupt ? t(n) : v(n)
            }

            function v(t) {
              return null === t ? E(t) : r(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), e.attempt(s, E, l ? u(e, v, "linePrefix", l + 1) : v)) : (e.enter("codeFlowValue"), x(t))
            }

            function x(t) {
              return null === t || r(t) ? (e.exit("codeFlowValue"), v(t)) : (e.consume(t), x)
            }

            function E(n) {
              return e.exit("codeFenced"), t(n)
            }
          },
          concrete: !0
        };
      e.exports = a
    },
    84572: (e, t, n) => {
      "use strict";
      var r = n(24826),
        i = n(40965);
      e.exports = i, i.prototype.message = function(e, t, n) {
        var i = new r(e, t, n);
        return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i
      }, i.prototype.info = function() {
        var e = this.message.apply(this, arguments);
        return e.fatal = null, e
      }, i.prototype.fail = function() {
        var e = this.message.apply(this, arguments);
        throw e.fatal = !0, e
      }
    },
    85062: (e, t, n) => {
      "use strict";
      var r = n(87126),
        i = n(46315),
        o = n(42827),
        u = {
          name: "setextUnderline",
          tokenize: function(e, t, n) {
            for (var i, u, a = this, c = a.events.length; c--;)
              if ("lineEnding" !== a.events[c][1].type && "linePrefix" !== a.events[c][1].type && "content" !== a.events[c][1].type) {
                u = "paragraph" === a.events[c][1].type;
                break
              } return function(t) {
              return a.lazy || !a.interrupt && !u ? n(t) : (e.enter("setextHeadingLine"), e.enter("setextHeadingLineSequence"), i = t, s(t))
            };

            function s(t) {
              return t === i ? (e.consume(t), s) : (e.exit("setextHeadingLineSequence"), o(e, l, "lineSuffix")(t))
            }

            function l(i) {
              return null === i || r(i) ? (e.exit("setextHeadingLine"), t(i)) : n(i)
            }
          },
          resolveTo: function(e, t) {
            for (var n, r, o, u, a = e.length; a--;)
              if ("enter" === e[a][0]) {
                if ("content" === e[a][1].type) {
                  n = a;
                  break
                }
                "paragraph" === e[a][1].type && (r = a)
              } else "content" === e[a][1].type && e.splice(a, 1), o || "definition" !== e[a][1].type || (o = a);
            return u = {
              type: "setextHeading",
              start: i(e[r][1].start),
              end: i(e[e.length - 1][1].end)
            }, e[r][1].type = "setextHeadingText", o ? (e.splice(r, 0, ["enter", u, t]), e.splice(o + 1, 0, ["exit", e[n][1], t]), e[n][1].end = i(e[o][1].end)) : e[n][1] = u, e.push(["exit", u, t]), e
          }
        };
      e.exports = u
    },
    85409: e => {
      "use strict";
      e.exports = function(e) {
        return e < 0 || 32 === e
      }
    },
    86318: (e, t, n) => {
      "use strict";
      var r = n(87126),
        i = n(85409),
        o = n(52734),
        u = n(64936),
        a = n(42827),
        c = {
          name: "headingAtx",
          tokenize: function(e, t, n) {
            var u = this,
              c = 0;
            return function(t) {
              return e.enter("atxHeading"), e.enter("atxHeadingSequence"), s(t)
            };

            function s(r) {
              return 35 === r && c++ < 6 ? (e.consume(r), s) : null === r || i(r) ? (e.exit("atxHeadingSequence"), u.interrupt ? t(r) : l(r)) : n(r)
            }

            function l(n) {
              return 35 === n ? (e.enter("atxHeadingSequence"), f(n)) : null === n || r(n) ? (e.exit("atxHeading"), t(n)) : o(n) ? a(e, l, "whitespace")(n) : (e.enter("atxHeadingText"), p(n))
            }

            function f(t) {
              return 35 === t ? (e.consume(t), f) : (e.exit("atxHeadingSequence"), l(t))
            }

            function p(t) {
              return null === t || 35 === t || i(t) ? (e.exit("atxHeadingText"), l(t)) : (e.consume(t), p)
            }
          },
          resolve: function(e, t) {
            var n, r, i = e.length - 2,
              o = 3;
            return "whitespace" === e[o][1].type && (o += 2), i - 2 > o && "whitespace" === e[i][1].type && (i -= 2), "atxHeadingSequence" === e[i][1].type && (o === i - 1 || i - 4 > o && "whitespace" === e[i - 2][1].type) && (i -= o + 1 === i ? 2 : 4), i > o && (n = {
              type: "atxHeadingText",
              start: e[o][1].start,
              end: e[i][1].end
            }, r = {
              type: "chunkText",
              start: e[o][1].start,
              end: e[i][1].end,
              contentType: "text"
            }, u(e, o, i - o + 1, [
              ["enter", n, t],
              ["enter", r, t],
              ["exit", r, t],
              ["exit", n, t]
            ])), e
          }
        };
      e.exports = c
    },
    87126: e => {
      "use strict";
      e.exports = function(e) {
        return e < -2
      }
    },
    87806: (e, t, n) => {
      "use strict";
      var r = {
        name: "labelStartLink",
        tokenize: function(e, t, n) {
          var r = this;
          return function(t) {
            return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), i
          };

          function i(e) {
            return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
          }
        },
        resolveAll: n(7992).resolveAll
      };
      e.exports = r
    },
    88758: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
        }),
        function(e, t) {
          for (var n in t) Object.defineProperty(e, n, {
            enumerable: !0,
            get: Object.getOwnPropertyDescriptor(t, n).get
          })
        }(t, {
          get isBlock() {
            return c
          },
          get isEmptyParagraph() {
            return l
          },
          get isInline() {
            return a
          },
          get isText() {
            return s
          },
          get stripEmptyTrailingParagraphFromDocument() {
            return p
          }
        });
      var r = n(69333),
        i = n(19073);

      function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function u(e, t) {
        var n = !0,
          r = !1,
          i = void 0;
        try {
          for (var o, u = Object.keys(e)[Symbol.iterator](); !(n = (o = u.next()).done); n = !0)
            if (t === e[o.value]) return !0
        } catch (e) {
          r = !0, i = e
        } finally {
          try {
            n || null == u.return || u.return()
          } finally {
            if (r) throw i
          }
        }
        return !1
      }

      function a(e) {
        return u(i.INLINES, e.nodeType)
      }

      function c(e) {
        return u(r.BLOCKS, e.nodeType)
      }

      function s(e) {
        return "text" === e.nodeType
      }

      function l(e) {
        if (e.nodeType !== r.BLOCKS.PARAGRAPH) return !1;
        if (1 !== e.content.length) return !1;
        var t = e.content[0];
        return "text" === t.nodeType && "" === t.value
      }
      var f = 2;

      function p(e) {
        return ! function(e) {
          return null != e && "object" == (void 0 === e ? "undefined" : (t = e) && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t) && "content" in e && Array.isArray(e.content);
          var t
        }(e) || e.content.length < f ? e : l(e.content[e.content.length - 1]) ? (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              o(e, t, n[t])
            })
          }
          return e
        }({}, e), n = null != (n = {
          content: e.content.slice(0, -1)
        }) ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t.push.apply(t, n)
          }
          return t
        }(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t) : e;
        var t, n
      }
    },
    92319: (e, t, n) => {
      "use strict";
      var r = n(87126),
        i = {
          name: "hardBreakEscape",
          tokenize: function(e, t, n) {
            return function(t) {
              return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(t), i
            };

            function i(i) {
              return r(i) ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), t(i)) : n(i)
            }
          }
        };
      e.exports = i
    },
    92939: (e, t) => {
      "use strict";

      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
        }),
        function(e, t) {
          for (var n in t) Object.defineProperty(e, n, {
            enumerable: !0,
            get: Object.getOwnPropertyDescriptor(t, n).get
          })
        }(t, {
          get enumError() {
            return u
          },
          get maxSizeError() {
            return o
          },
          get minSizeError() {
            return i
          },
          get requiredPropertyError() {
            return c
          },
          get typeMismatchError() {
            return r
          },
          get unknownPropertyError() {
            return a
          }
        });
      var r = function(e) {
          var t = e.path,
            n = e.property,
            r = e.typeName,
            i = e.value;
          return {
            details: 'The type of "'.concat(n, '" is incorrect, expected type: ').concat(r),
            name: "type",
            path: t.toArray(),
            type: r,
            value: i
          }
        },
        i = function(e) {
          var t = e.min,
            n = e.value;
          return {
            name: "size",
            min: t,
            path: e.path.toArray(),
            details: "Size must be at least ".concat(t),
            value: n
          }
        },
        o = function(e) {
          var t = e.max,
            n = e.value;
          return {
            name: "size",
            max: t,
            path: e.path.toArray(),
            details: "Size must be at most ".concat(t),
            value: n
          }
        },
        u = function(e) {
          var t, r = e.expected,
            i = e.value,
            o = e.path;
          return {
            details: "Value must be one of expected values",
            name: "in",
            expected: (t = r, function(e) {
              if (Array.isArray(e)) return n(e)
            }(t) || function(e) {
              if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(t) || function(e, t) {
              if (e) {
                if ("string" == typeof e) return n(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
              }
            }(t) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()).sort(),
            path: o.toArray(),
            value: i
          }
        },
        a = function(e) {
          var t = e.property,
            n = e.path;
          return {
            details: 'The property "'.concat(t, '" is not expected'),
            name: "unexpected",
            path: n.toArray()
          }
        },
        c = function(e) {
          var t = e.property,
            n = e.path;
          return {
            details: 'The property "'.concat(t, '" is required here'),
            name: "required",
            path: n.toArray()
          }
        }
    },
    93137: e => {
      e.exports = function(e) {
        var t = e.options.listItemIndent || "tab";
        if (1 === t || "1" === t) return "one";
        if ("tab" !== t && "one" !== t && "mixed" !== t) throw new Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
        return t
      }
    },
    93236: (e, t, n) => {
      "use strict";
      var r = n(44808);
      e.exports = function(e) {
        for (var t, n, i, o = -1, u = []; ++o < e.length;) {
          if ("string" == typeof(t = e[o])) n = t;
          else if (-5 === t) n = "\r";
          else if (-4 === t) n = "\n";
          else if (-3 === t) n = "\r\n";
          else if (-2 === t) n = "\t";
          else if (-1 === t) {
            if (i) continue;
            n = " "
          } else n = r(t);
          i = -2 === t, u.push(n)
        }
        return u.join("")
      }
    },
    94198: (e, t, n) => {
      t.flow = {
        null: {
          tokenize: function(e, t, n) {
            var u, a, c = [],
              s = 0;
            return function(t) {
              return null === t || -5 === t || -4 === t || -3 === t ? n(t) : (e.enter("table")._align = c, e.enter("tableHead"), e.enter("tableRow"), 124 === t ? l(t) : (s++, e.enter("temporaryTableCellContent"), h(t)))
            };

            function l(t) {
              return e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), u = !0, f
            }

            function f(t) {
              return null === t || -5 === t || -4 === t || -3 === t ? function(t) {
                return null === t ? n(t) : (e.exit("tableRow"), e.exit("tableHead"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), e.check(i, n, r(e, m, "linePrefix", 4)))
              }(t) : -2 === t || -1 === t || 32 === t ? (e.enter("whitespace"), e.consume(t), p) : (u && (u = void 0, s++), 124 === t ? l(t) : (e.enter("temporaryTableCellContent"), h(t)))
            }

            function p(t) {
              return -2 === t || -1 === t || 32 === t ? (e.consume(t), p) : (e.exit("whitespace"), f(t))
            }

            function h(t) {
              return null === t || t < 0 || 32 === t || 124 === t ? (e.exit("temporaryTableCellContent"), f(t)) : (e.consume(t), 92 === t ? d : h)
            }

            function d(t) {
              return 92 === t || 124 === t ? (e.consume(t), h) : h(t)
            }

            function m(t) {
              return null === t || t < 0 || 32 === t ? n(t) : (e.enter("tableDelimiterRow"), y(t))
            }

            function y(t) {
              return null === t || -5 === t || -4 === t || -3 === t ? b(t) : -2 === t || -1 === t || 32 === t ? (e.enter("whitespace"), e.consume(t), g) : 45 === t ? (e.enter("tableDelimiterFiller"), e.consume(t), a = !0, c.push(null), v) : 58 === t ? (e.enter("tableDelimiterAlignment"), e.consume(t), e.exit("tableDelimiterAlignment"), c.push("left"), x) : 124 === t ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), y) : n(t)
            }

            function g(t) {
              return -2 === t || -1 === t || 32 === t ? (e.consume(t), g) : (e.exit("whitespace"), y(t))
            }

            function v(t) {
              return 45 === t ? (e.consume(t), v) : (e.exit("tableDelimiterFiller"), 58 === t ? (e.enter("tableDelimiterAlignment"), e.consume(t), e.exit("tableDelimiterAlignment"), c[c.length - 1] = "left" === c[c.length - 1] ? "center" : "right", E) : y(t))
            }

            function x(t) {
              return 45 === t ? (e.enter("tableDelimiterFiller"), e.consume(t), a = !0, v) : n(t)
            }

            function E(t) {
              return null === t || -5 === t || -4 === t || -3 === t ? b(t) : -2 === t || -1 === t || 32 === t ? (e.enter("whitespace"), e.consume(t), g) : 124 === t ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), y) : n(t)
            }

            function b(t) {
              return e.exit("tableDelimiterRow"), a && s === c.length ? null === t ? k(t) : e.check(o, k, S)(t) : n(t)
            }

            function k(n) {
              return e.exit("table"), t(n)
            }

            function S(t) {
              return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), r(e, O, "linePrefix", 4)
            }

            function O(t) {
              return e.enter("tableBody"), L(t)
            }

            function L(t) {
              return e.enter("tableRow"), 124 === t ? C(t) : (e.enter("temporaryTableCellContent"), _(t))
            }

            function C(t) {
              return e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), A
            }

            function A(t) {
              return null === t || -5 === t || -4 === t || -3 === t ? function(t) {
                return e.exit("tableRow"), null === t ? I(t) : e.check(o, I, B)(t)
              }(t) : -2 === t || -1 === t || 32 === t ? (e.enter("whitespace"), e.consume(t), T) : 124 === t ? C(t) : (e.enter("temporaryTableCellContent"), _(t))
            }

            function T(t) {
              return -2 === t || -1 === t || 32 === t ? (e.consume(t), T) : (e.exit("whitespace"), A(t))
            }

            function _(t) {
              return null === t || t < 0 || 32 === t || 124 === t ? (e.exit("temporaryTableCellContent"), A(t)) : (e.consume(t), 92 === t ? w : _)
            }

            function w(t) {
              return 92 === t || 124 === t ? (e.consume(t), _) : _(t)
            }

            function I(t) {
              return e.exit("tableBody"), k(t)
            }

            function B(t) {
              return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), r(e, L, "linePrefix", 4)
            }
          },
          resolve: function(e, t) {
            for (var n, r, i, o, u, a, c, s, l, f, p = e.length, h = -1; ++h < p;) n = e[h][1], o && ("temporaryTableCellContent" === n.type && (s = s || h, l = h), "tableCellDivider" !== n.type && "tableRow" !== n.type || !l || (c = {
              type: "chunkText",
              start: (a = {
                type: "tableContent",
                start: e[s][1].start,
                end: e[l][1].end
              }).start,
              end: a.end,
              contentType: "text"
            }, e.splice(s, l - s + 1, ["enter", a, t], ["enter", c, t], ["exit", c, t], ["exit", a, t]), h -= l - s - 3, p = e.length, s = void 0, l = void 0)), "exit" === e[h][0] && f && f + 1 < h && ("tableCellDivider" === n.type || "tableRow" === n.type && (f + 3 < h || "whitespace" !== e[f][1].type)) && (u = {
              type: i ? "tableDelimiter" : r ? "tableHeader" : "tableData",
              start: e[f][1].start,
              end: e[h][1].end
            }, e.splice(h + ("tableCellDivider" === n.type ? 1 : 0), 0, ["exit", u, t]), e.splice(f, 0, ["enter", u, t]), h += 2, p = e.length, f = h + 1), "tableRow" === n.type && (o = "enter" === e[h][0]) && (f = h + 1), "tableDelimiterRow" === n.type && (i = "enter" === e[h][0]) && (f = h + 1), "tableHead" === n.type && (r = "enter" === e[h][0]);
            return e
          },
          interruptible: !0
        }
      };
      var r = n(42827),
        i = {
          tokenize: function(e, t, n) {
            return function(t) {
              return 45 !== t ? n(t) : (e.enter("setextUnderline"), r(t))
            };

            function r(t) {
              return 45 === t ? (e.consume(t), r) : i(t)
            }

            function i(r) {
              return -2 === r || -1 === r || 32 === r ? (e.consume(r), i) : null === r || -5 === r || -4 === r || -3 === r ? t(r) : n(r)
            }
          },
          partial: !0
        },
        o = {
          tokenize: function(e, t, n) {
            var r = 0;
            return function(t) {
              return e.enter("check"), e.consume(t), i
            };

            function i(o) {
              return -1 === o || 32 === o ? (e.consume(o), 4 === ++r ? t : i) : null === o || o < 0 ? t(o) : n(o)
            }
          },
          partial: !0
        }
    },
    94535: (e, t) => {
      t.canContainEols = ["delete"], t.enter = {
        strikethrough: function(e) {
          this.enter({
            type: "delete",
            children: []
          }, e)
        }
      }, t.exit = {
        strikethrough: function(e) {
          this.exit(e)
        }
      }
    },
    94554: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "ObjectAssertion", {
        enumerable: !0,
        get: function() {
          return l
        }
      });
      var r = c(n(21221)),
        i = n(92939);

      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }

      function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function c(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function s(e) {
        return function(e) {
          if (Array.isArray(e)) return o(e)
        }(e) || function(e) {
          if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
          if (e) {
            if ("string" == typeof e) return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
          }
        }(e) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }
      var l = function() {
        function e(t, n) {
          var o = this,
            u = this;
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), a(this, "obj", void 0), a(this, "path", void 0), a(this, "_errors", void 0), a(this, "catch", void 0), a(this, "exists", void 0), a(this, "object", void 0), a(this, "string", void 0), a(this, "number", void 0), a(this, "array", void 0), a(this, "enum", void 0), a(this, "empty", void 0), a(this, "minLength", void 0), a(this, "noAdditionalProperties", void 0), a(this, "each", void 0), this.obj = t, this.path = n, this._errors = [], this.catch = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var r;
            (r = u._errors).push.apply(r, s(t))
          }, this.exists = function(e) {
            return e in o.obj || (o.catch((0, i.requiredPropertyError)({
              property: e,
              path: o.path.of(e)
            })), !1)
          }, this.object = function(e) {
            var t = e ? o.obj[e] : o.obj;
            if (e && !o.exists(e)) return !1;
            if ((0, r.default)(t)) return !0;
            var n, u = e ? o.path.of(e) : o.path,
              a = null !== (n = null != e ? e : o.path.last()) && void 0 !== n ? n : "value";
            return o.catch((0, i.typeMismatchError)({
              typeName: "Object",
              property: a,
              path: u,
              value: t
            })), !1
          }, this.string = function(e) {
            var t = o.obj[e];
            return !(e && !o.exists(e) || "string" != typeof t && (o.catch((0, i.typeMismatchError)({
              typeName: "String",
              property: e,
              path: o.path.of(e),
              value: t
            })), 1))
          }, this.number = function(e, t) {
            var n = o.obj[e];
            return !(!t || e in o.obj) || !!o.exists(e) && ("number" == typeof n && !Number.isNaN(n) || (o.catch((0, i.typeMismatchError)({
              typeName: "Number",
              property: e,
              path: o.path.of(e),
              value: n
            })), !1))
          }, this.array = function(e) {
            var t = o.obj[e];
            return !(e && !o.exists(e) || !Array.isArray(t) && (o.catch((0, i.typeMismatchError)({
              typeName: "Array",
              property: e,
              path: o.path.of(e),
              value: t
            })), 1))
          }, this.enum = function(e, t) {
            var n = o.obj[e];
            return !("string" != typeof n || !t.includes(n)) || (o.catch((0, i.enumError)({
              expected: t,
              value: n,
              path: o.path.of(e)
            })), !1)
          }, this.empty = function(e) {
            if (!o.array(e)) return !1;
            var t = o.obj[e];
            return 0 === t.length || (o.catch((0, i.maxSizeError)({
              max: 0,
              value: t,
              path: o.path.of(e)
            })), !1)
          }, this.minLength = function(e, t) {
            if (!o.array(e)) return !1;
            var n = o.obj[e];
            return n.length >= t || (o.catch((0, i.minSizeError)({
              min: t,
              value: n,
              path: o.path.of(e)
            })), !1)
          }, this.noAdditionalProperties = function(e) {
            var t = Object.keys(o.obj).sort().filter(function(t) {
              return !e.includes(t)
            });
            return t.forEach(function(e) {
              return o.catch((0, i.unknownPropertyError)({
                property: e,
                path: o.path.of(e)
              }))
            }), 0 === t.length
          }, this.each = function(e, t) {
            if (o.array(e)) {
              var n = o.obj[e],
                r = !1;
              n.forEach(function(n, i) {
                if (!r) {
                  var u = t(n, o.path.of(e).of(i));
                  u.length > 0 && (r = !0), o.catch.apply(o, s(u))
                }
              })
            }
          }
        }
        var t, n;
        return t = e, (n = [{
          key: "errors",
          get: function() {
            var e = this,
              t = function(e) {
                return JSON.stringify({
                  details: e.details,
                  path: e.path
                })
              };
            return this._errors.filter(function(n, r) {
              return e._errors.findIndex(function(e) {
                return t(n) === t(e)
              }) === r
            })
          }
        }]) && u(t.prototype, n), e
      }()
    },
    95094: (e, t) => {
      "use strict";
      t.cwd = function() {
        return "/"
      }
    },
    95881: e => {
      e.exports = function(e) {
        var t, n;
        return e._compiled || (t = e.before ? "(?:" + e.before + ")" : "", n = e.after ? "(?:" + e.after + ")" : "", e.atBreak && (t = "[\\r\\n][\\t ]*" + t), e._compiled = new RegExp((t ? "(" + t + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (n || ""), "g")), e._compiled
      }
    },
    95996: (e, t, n) => {
      "use strict";
      var r = n(96253),
        i = n(52734),
        o = n(36309),
        u = n(58649),
        a = n(42827),
        c = n(13067),
        s = n(43861),
        l = {
          name: "list",
          tokenize: function(e, t, n) {
            var a = this,
              l = o(a.events, "linePrefix"),
              p = 0;
            return function(t) {
              var i = a.containerState.type || (42 === t || 43 === t || 45 === t ? "listUnordered" : "listOrdered");
              if ("listUnordered" === i ? !a.containerState.marker || t === a.containerState.marker : r(t)) {
                if (a.containerState.type || (a.containerState.type = i, e.enter(i, {
                    _container: !0
                  })), "listUnordered" === i) return e.enter("listItemPrefix"), 42 === t || 45 === t ? e.check(s, n, d)(t) : d(t);
                if (!a.interrupt || 49 === t) return e.enter("listItemPrefix"), e.enter("listItemValue"), h(t)
              }
              return n(t)
            };

            function h(t) {
              return r(t) && ++p < 10 ? (e.consume(t), h) : (!a.interrupt || p < 2) && (a.containerState.marker ? t === a.containerState.marker : 41 === t || 46 === t) ? (e.exit("listItemValue"), d(t)) : n(t)
            }

            function d(t) {
              return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), a.containerState.marker = a.containerState.marker || t, e.check(c, a.interrupt ? n : m, e.attempt(f, g, y))
            }

            function m(e) {
              return a.containerState.initialBlankLine = !0, l++, g(e)
            }

            function y(t) {
              return i(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), g) : n(t)
            }

            function g(n) {
              return a.containerState.size = l + u(a.sliceStream(e.exit("listItemPrefix"))), t(n)
            }
          },
          continuation: {
            tokenize: function(e, t, n) {
              var r = this;
              return r.containerState._closeFlow = void 0, e.check(c, function(n) {
                return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, a(e, t, "listItemIndent", r.containerState.size + 1)(n)
              }, function(n) {
                return r.containerState.furtherBlankLines || !i(n) ? (r.containerState.furtherBlankLines = r.containerState.initialBlankLine = void 0, o(n)) : (r.containerState.furtherBlankLines = r.containerState.initialBlankLine = void 0, e.attempt(p, t, o)(n))
              });

              function o(i) {
                return r.containerState._closeFlow = !0, r.interrupt = void 0, a(e, e.attempt(l, t, n), "linePrefix", r.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)(i)
              }
            }
          },
          exit: function(e) {
            e.exit(this.containerState.type)
          }
        },
        f = {
          tokenize: function(e, t, n) {
            var r = this;
            return a(e, function(e) {
              return i(e) || !o(r.events, "listItemPrefixWhitespace") ? n(e) : t(e)
            }, "listItemPrefixWhitespace", r.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 5)
          },
          partial: !0
        },
        p = {
          tokenize: function(e, t, n) {
            var r = this;
            return a(e, function(e) {
              return o(r.events, "listItemIndent") === r.containerState.size ? t(e) : n(e)
            }, "listItemIndent", r.containerState.size + 1)
          },
          partial: !0
        };
      e.exports = l
    },
    96253: (e, t, n) => {
      "use strict";
      var r = n(3241)(/\d/);
      e.exports = r
    },
    96290: (e, t, n) => {
      "use strict";
      var r = n(87126),
        i = {
          name: "codeText",
          tokenize: function(e, t, n) {
            var i, o, u = 0;
            return function(t) {
              return e.enter("codeText"), e.enter("codeTextSequence"), a(t)
            };

            function a(t) {
              return 96 === t ? (e.consume(t), u++, a) : (e.exit("codeTextSequence"), c(t))
            }

            function c(t) {
              return null === t ? n(t) : 96 === t ? (o = e.enter("codeTextSequence"), i = 0, l(t)) : 32 === t ? (e.enter("space"), e.consume(t), e.exit("space"), c) : r(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c) : (e.enter("codeTextData"), s(t))
            }

            function s(t) {
              return null === t || 32 === t || 96 === t || r(t) ? (e.exit("codeTextData"), c(t)) : (e.consume(t), s)
            }

            function l(n) {
              return 96 === n ? (e.consume(n), i++, l) : i === u ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (o.type = "codeTextData", s(n))
            }
          },
          resolve: function(e) {
            var t, n, r = e.length - 4,
              i = 3;
            if (!("lineEnding" !== e[i][1].type && "space" !== e[i][1].type || "lineEnding" !== e[r][1].type && "space" !== e[r][1].type))
              for (t = i; ++t < r;)
                if ("codeTextData" === e[t][1].type) {
                  e[r][1].type = e[i][1].type = "codeTextPadding", i += 2, r -= 2;
                  break
                } for (t = i - 1, r++; ++t <= r;) void 0 === n ? t !== r && "lineEnding" !== e[t][1].type && (n = t) : t !== r && "lineEnding" !== e[t][1].type || (e[n][1].type = "codeTextData", t !== n + 2 && (e[n][1].end = e[t - 1][1].end, e.splice(n + 2, t - n - 2), r -= t - n - 2, t = n + 2), n = void 0);
            return e
          },
          previous: function(e) {
            return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type
          }
        };
      e.exports = i
    },
    96349: (e, t, n) => {
      "use strict";
      var r = n(3241)(/[\dA-Fa-f]/);
      e.exports = r
    },
    96773: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "MARKS", {
        enumerable: !0,
        get: function() {
          return n
        }
      });
      var n = function(e) {
        return e.BOLD = "bold", e.ITALIC = "italic", e.UNDERLINE = "underline", e.CODE = "code", e.SUPERSCRIPT = "superscript", e.SUBSCRIPT = "subscript", e.STRIKETHROUGH = "strikethrough", e
      }({})
    },
    96893: (e, t, n) => {
      "use strict";
      var r = n(3241)(/[\dA-Za-z]/);
      e.exports = r
    },
    96967: (e, t, n) => {
      "use strict";
      var r = n(85409),
        i = n(54228),
        o = n(14751);
      e.exports = function(e) {
        return null === e || r(e) || o(e) ? 1 : i(e) ? 2 : void 0
      }
    },
    98185: (e, t, n) => {
      e.exports = function(e, t, n) {
        var c, s, l, f = i(n),
          p = o(n);
        return t && t.ordered && (f = (t.start > -1 ? t.start : 1) + (!1 === n.options.incrementListMarker ? 0 : t.children.indexOf(e)) + "."), c = f.length + 1, ("tab" === p || "mixed" === p && (t && t.spread || e.spread)) && (c = 4 * Math.ceil(c / 4)), l = n.enter("listItem"), s = a(u(e, n), function(e, t, n) {
          return t ? (n ? "" : r(" ", c)) + e : (n ? f : f + r(" ", c - f.length)) + e
        }), l(), s
      };
      var r = n(28375),
        i = n(12892),
        o = n(93137),
        u = n(64621),
        a = n(42639)
    },
    98345: (e, t, n) => {
      "use strict";
      var r = n(4997),
        i = n(85409),
        o = n(87126);
      e.exports = function(e, t, n, u, a, c, s, l, f) {
        var p = f || 1 / 0,
          h = 0;
        return function(t) {
          return 60 === t ? (e.enter(u), e.enter(a), e.enter(c), e.consume(t), e.exit(c), d) : r(t) || 41 === t ? n(t) : (e.enter(u), e.enter(s), e.enter(l), e.enter("chunkString", {
            contentType: "string"
          }), g(t))
        };

        function d(n) {
          return 62 === n ? (e.enter(c), e.consume(n), e.exit(c), e.exit(a), e.exit(u), t) : (e.enter(l), e.enter("chunkString", {
            contentType: "string"
          }), m(n))
        }

        function m(t) {
          return 62 === t ? (e.exit("chunkString"), e.exit(l), d(t)) : null === t || 60 === t || o(t) ? n(t) : (e.consume(t), 92 === t ? y : m)
        }

        function y(t) {
          return 60 === t || 62 === t || 92 === t ? (e.consume(t), m) : m(t)
        }

        function g(o) {
          return 40 === o ? ++h > p ? n(o) : (e.consume(o), g) : 41 === o ? h-- ? (e.consume(o), g) : (e.exit("chunkString"), e.exit(l), e.exit(s), e.exit(u), t(o)) : null === o || i(o) ? h ? n(o) : (e.exit("chunkString"), e.exit(l), e.exit(s), e.exit(u), t(o)) : r(o) ? n(o) : (e.consume(o), 92 === o ? v : g)
        }

        function v(t) {
          return 40 === t || 41 === t || 92 === t ? (e.consume(t), g) : g(t)
        }
      }
    },
    99079: e => {
      "use strict";
      e.exports = function(e) {
        return null == e ? [] : "length" in e ? e : [e]
      }
    },
    99190: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "validateRichTextDocument", {
        enumerable: !0,
        get: function() {
          return E
        }
      });
      var r = n(69333),
        i = n(19073),
        o = n(26286),
        u = n(94554),
        a = n(37068),
        c = n(27807),
        s = n(13151);

      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function p(e) {
        return function(e) {
          if (Array.isArray(e)) return l(e)
        }(e) || function(e) {
          if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
          if (e) {
            if ("string" == typeof e) return l(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0
          }
        }(e) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }
      var h, d = (0, a.assert)(p(Object.values(i.INLINES)).concat(["text"]).sort()),
        m = (0, a.assert)([r.BLOCKS.LIST_ITEM]),
        y = (0, a.assertLink)("Entry", a.VOID_CONTENT),
        g = (0, a.assert)(function() {
          return {
            nodeTypes: [r.BLOCKS.PARAGRAPH],
            min: 1
          }
        }, function(e, t) {
          var n = new u.ObjectAssertion(e, t);
          return n.noAdditionalProperties(["colspan", "rowspan"]), n.number("colspan", !0), n.number("rowspan", !0), n.errors
        }),
        v = (f(h = {}, r.BLOCKS.DOCUMENT, (0, a.assert)(o.TOP_LEVEL_BLOCKS)), f(h, r.BLOCKS.PARAGRAPH, d), f(h, r.BLOCKS.HEADING_1, d), f(h, r.BLOCKS.HEADING_2, d), f(h, r.BLOCKS.HEADING_3, d), f(h, r.BLOCKS.HEADING_4, d), f(h, r.BLOCKS.HEADING_5, d), f(h, r.BLOCKS.HEADING_6, d), f(h, r.BLOCKS.QUOTE, (0, a.assert)(o.CONTAINERS[r.BLOCKS.QUOTE])), f(h, r.BLOCKS.EMBEDDED_ENTRY, y), f(h, r.BLOCKS.EMBEDDED_ASSET, (0, a.assertLink)("Asset", a.VOID_CONTENT)), f(h, r.BLOCKS.EMBEDDED_RESOURCE, (0, a.assertLink)("Contentful:Entry", a.VOID_CONTENT)), f(h, r.BLOCKS.HR, (0, a.assert)(a.VOID_CONTENT)), f(h, r.BLOCKS.OL_LIST, m), f(h, r.BLOCKS.UL_LIST, m), f(h, r.BLOCKS.LIST_ITEM, (0, a.assert)(p(o.LIST_ITEM_BLOCKS).sort())), f(h, r.BLOCKS.TABLE, (0, a.assert)(function() {
          return {
            nodeTypes: [r.BLOCKS.TABLE_ROW],
            min: 1
          }
        })), f(h, r.BLOCKS.TABLE_ROW, (0, a.assert)(function() {
          return {
            nodeTypes: [r.BLOCKS.TABLE_CELL, r.BLOCKS.TABLE_HEADER_CELL],
            min: 1
          }
        })), f(h, r.BLOCKS.TABLE_CELL, g), f(h, r.BLOCKS.TABLE_HEADER_CELL, g), f(h, i.INLINES.HYPERLINK, new a.HyperLinkAssertion), f(h, i.INLINES.EMBEDDED_ENTRY, y), f(h, i.INLINES.EMBEDDED_RESOURCE, (0, a.assertLink)("Contentful:Entry", a.VOID_CONTENT)), f(h, i.INLINES.ENTRY_HYPERLINK, (0, a.assertLink)("Entry", ["text"])), f(h, i.INLINES.ASSET_HYPERLINK, (0, a.assertLink)("Asset", ["text"])), f(h, i.INLINES.RESOURCE_HYPERLINK, (0, a.assertLink)("Contentful:Entry", ["text"])), h);

      function x(e, t) {
        if ("text" === e.nodeType) return (0, s.assertText)(e, t);
        var n = v[e.nodeType].assert(e, t);
        if (n.length > 0) return n;
        var r = new u.ObjectAssertion(e, t);
        return r.each("content", function(e, t) {
          return x(e, t)
        }), r.errors
      }
      var E = function(e) {
        var t = new c.Path,
          n = new u.ObjectAssertion(e, t);
        return n.object() && n.enum("nodeType", [r.BLOCKS.DOCUMENT]), n.errors.length > 0 ? n.errors : x(e, t)
      }
    }
  }
]);