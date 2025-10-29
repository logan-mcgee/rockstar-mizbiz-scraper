try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bd35dc48-ef01-42d7-95d1-8c85e833b1a7", e._sentryDebugIdIdentifier = "sentry-dbid-bd35dc48-ef01-42d7-95d1-8c85e833b1a7")
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
      e.exports = function(e, t, n, u, o, c) {
        var s, a = this,
          l = 0;
        return function(t) {
          return e.enter(u), e.enter(o), e.consume(t), e.exit(o), e.enter(c), f
        };

        function f(i) {
          return null === i || 91 === i || 93 === i && !s || 94 === i && !l && "_hiddenFootnoteSupport" in a.parser.constructs || l > 999 ? n(i) : 93 === i ? (e.exit(c), e.enter(o), e.consume(i), e.exit(o), e.exit(u), t) : r(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), f) : (e.enter("chunkString", {
            contentType: "string"
          }), p(i))
        }

        function p(t) {
          return null === t || 91 === t || 93 === t || r(t) || l++ > 999 ? (e.exit("chunkString"), f(t)) : (e.consume(t), s = s || !i(t), 92 === t ? h : p)
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
        u = function(e) {
          return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === n.call(e)
        },
        o = function(e) {
          if (!e || "[object Object]" !== n.call(e)) return !1;
          var r, i = t.call(e, "constructor"),
            u = e.constructor && e.constructor.prototype && t.call(e.constructor.prototype, "isPrototypeOf");
          if (e.constructor && !i && !u) return !1;
          for (r in e);
          return void 0 === r || t.call(e, r)
        },
        c = function(e, t) {
          r && "__proto__" === t.name ? r(e, t.name, {
            enumerable: !0,
            configurable: !0,
            value: t.newValue,
            writable: !0
          }) : e[t.name] = t.newValue
        },
        s = function(e, n) {
          if ("__proto__" === n) {
            if (!t.call(e, n)) return;
            if (i) return i(e, n).value
          }
          return e[n]
        };
      e.exports = function e() {
        var t, n, r, i, a, l, f = arguments[0],
          p = 1,
          h = arguments.length,
          d = !1;
        for ("boolean" == typeof f && (d = f, f = arguments[1] || {}, p = 2), (null == f || "object" != typeof f && "function" != typeof f) && (f = {}); p < h; ++p)
          if (null != (t = arguments[p]))
            for (n in t) r = s(f, n), f !== (i = s(t, n)) && (d && i && (o(i) || (a = u(i))) ? (a ? (a = !1, l = r && u(r) ? r : []) : l = r && o(r) ? r : {}, c(f, {
              name: n,
              newValue: e(d, l, i)
            })) : void 0 !== i && c(f, {
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
        u = n(660),
        o = n(66751),
        c = n(15965),
        s = n(49904);
      e.exports = function e() {
        var t, n = [],
          i = c(),
          v = {},
          k = -1;
        return y.data = function(e, n) {
          return "string" == typeof e ? 2 === arguments.length ? (m("data", t), v[e] = n, y) : l.call(v, e) && v[e] || null : e ? (m("data", t), v = e, y) : v
        }, y.freeze = b, y.attachers = n, y.use = function(e) {
          var r;
          if (m("use", t), null == e);
          else if ("function" == typeof e) l.apply(null, arguments);
          else {
            if ("object" != typeof e) throw new Error("Expected usable value, not `" + e + "`");
            "length" in e ? s(e) : i(e)
          }
          return r && (v.settings = u(v.settings || {}, r)), y;

          function i(e) {
            s(e.plugins), e.settings && (r = u(r || {}, e.settings))
          }

          function c(e) {
            if ("function" == typeof e) l(e);
            else {
              if ("object" != typeof e) throw new Error("Expected usable value, not `" + e + "`");
              "length" in e ? l.apply(null, e) : i(e)
            }
          }

          function s(e) {
            var t = -1;
            if (null == e);
            else {
              if ("object" != typeof e || !("length" in e)) throw new Error("Expected a list of plugins, not `" + e + "`");
              for (; ++t < e.length;) c(e[t])
            }
          }

          function l(e, t) {
            var r = function(e) {
              for (var t = -1; ++t < n.length;)
                if (n[t][0] === e) return n[t]
            }(e);
            r ? (o(r[1]) && o(t) && (t = u(!0, r[1], t)), r[1] = t) : n.push(a.call(arguments))
          }
        }, y.parse = function(e) {
          var t, n = s(e);
          return b(), h("parse", t = y.Parser), p(t, "parse") ? new t(String(n), n).parse() : t(String(n), n)
        }, y.stringify = function(e, t) {
          var n, r = s(t);
          return b(), d("stringify", n = y.Compiler), x(e), p(n, "compile") ? new n(e, r).compile() : n(e, r)
        }, y.run = E, y.runSync = function(e, t) {
          var n, i;
          return E(e, t, (function(e, t) {
            i = !0, n = t, r(e)
          })), g("runSync", "run", i), n
        }, y.process = S, y.processSync = function(e) {
          var t, n;
          return b(), h("processSync", y.Parser), d("processSync", y.Compiler), S(t = s(e), (function(e) {
            n = !0, r(e)
          })), g("processSync", "process", n), t
        }, y;

        function y() {
          for (var t = e(), r = -1; ++r < n.length;) t.use.apply(null, n[r]);
          return t.data(u(!0, {}, v)), t
        }

        function b() {
          var e, r;
          if (t) return y;
          for (; ++k < n.length;) !1 !== (e = n[k])[1] && (!0 === e[1] && (e[1] = void 0), "function" == typeof(r = e[0].apply(y, e.slice(1))) && i.use(r));
          return t = !0, k = 1 / 0, y
        }

        function E(e, t, n) {
          if (x(e), b(), n || "function" != typeof t || (n = t, t = null), !n) return new Promise(r);

          function r(r, u) {
            i.run(e, s(t), (function(t, i, o) {
              i = i || e, t ? u(t) : r ? r(i) : n(null, i, o)
            }))
          }
          r(null, n)
        }

        function S(e, t) {
          if (b(), h("process", y.Parser), d("process", y.Compiler), !t) return new Promise(n);

          function n(n, r) {
            var i = s(e);
            f.run(y, {
              file: i
            }, (function(e) {
              e ? r(e) : n ? n(i) : t(null, i)
            }))
          }
          n(null, t)
        }
      }().freeze();
      var a = [].slice,
        l = {}.hasOwnProperty,
        f = c().use((function(e, t) {
          t.tree = e.parse(t.file)
        })).use((function(e, t, n) {
          e.run(t.tree, t.file, (function(e, r, i) {
            e ? n(e) : (t.tree = r, t.file = i, n())
          }))
        })).use((function(e, t) {
          var n = e.stringify(t.tree, t.file);
          null == n || ("string" == typeof n || i(n) ? ("value" in t.file && (t.file.value = n), t.file.contents = n) : t.file.result = n)
        }));

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

      function x(e) {
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
        u = n(64936),
        o = n(28530),
        c = n(9345),
        s = n(46315),
        a = n(98345),
        l = n(79),
        f = n(26075),
        p = n(58344),
        h = {
          name: "labelEnd",
          tokenize: function(e, t, n) {
            for (var r, i, u = this, c = u.events.length; c--;)
              if (("labelImage" === u.events[c][1].type || "labelLink" === u.events[c][1].type) && !u.events[c][1]._balanced) {
                r = u.events[c][1];
                break
              } return function(t) {
              return r ? r._inactive ? a(t) : (i = u.parser.defined.indexOf(o(u.sliceSerialize({
                start: r.end,
                end: u.now()
              }))) > -1, e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), s) : n(t)
            };

            function s(n) {
              return 40 === n ? e.attempt(d, t, i ? t : a)(n) : 91 === n ? e.attempt(m, t, i ? e.attempt(x, t, a) : a)(n) : i ? t(n) : a(n)
            }

            function a(e) {
              return r._balanced = !0, n(e)
            }
          },
          resolveTo: function(e, t) {
            for (var n, r, o, a, l, f, p, h = e.length, d = 0; h--;)
              if (a = e[h][1], l) {
                if ("link" === a.type || "labelLink" === a.type && a._inactive) break;
                "enter" === e[h][0] && "labelLink" === a.type && (a._inactive = !0)
              } else if (f) {
              if ("enter" === e[h][0] && ("labelImage" === a.type || "labelLink" === a.type) && !a._balanced && (l = h, "labelLink" !== a.type)) {
                d = 2;
                break
              }
            } else "labelEnd" === a.type && (f = h);
            return n = {
              type: "labelLink" === e[l][1].type ? "link" : "image",
              start: s(e[l][1].start),
              end: s(e[e.length - 1][1].end)
            }, r = {
              type: "label",
              start: s(e[l][1].start),
              end: s(e[f][1].end)
            }, o = {
              type: "labelText",
              start: s(e[l + d + 2][1].end),
              end: s(e[f - 2][1].start)
            }, p = i(p = [
              ["enter", n, t],
              ["enter", r, t]
            ], e.slice(l + 1, l + d + 3)), p = i(p, [
              ["enter", o, t]
            ]), p = i(p, c(t.parser.constructs.insideSpan.null, e.slice(l + d + 4, f - 3), t)), p = i(p, [
              ["exit", o, t], e[f - 2], e[f - 1],
              ["exit", r, t]
            ]), p = i(p, e.slice(f + 1)), p = i(p, [
              ["exit", n, t]
            ]), u(e, l, e.length, p), e
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
              return 41 === t ? c(t) : a(e, u, n, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 3)(t)
            }

            function u(t) {
              return r(t) ? p(e, o)(t) : c(t)
            }

            function o(t) {
              return 34 === t || 39 === t || 40 === t ? f(e, p(e, c), n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : c(t)
            }

            function c(r) {
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
              return r.parser.defined.indexOf(o(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) < 0 ? n(e) : t(e)
            }
          }
        },
        x = {
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
        for (var r, i = [], u = -1; ++u < e.length;)(r = e[u].resolveAll) && i.indexOf(r) < 0 && (t = r(t, n), i.push(r));
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
        u = s("text"),
        o = s("string"),
        c = {
          resolveAll: a()
        };

      function s(e) {
        return {
          tokenize: function(t) {
            var n = this,
              r = this.parser.constructs[e],
              i = t.attempt(r, u, o);
            return u;

            function u(e) {
              return s(e) ? i(e) : o(e)
            }

            function o(e) {
              if (null !== e) return t.enter("data"), t.consume(e), c;
              t.consume(e)
            }

            function c(e) {
              return s(e) ? (t.exit("data"), i(e)) : (t.consume(e), c)
            }

            function s(e) {
              var t = r[e],
                i = -1;
              if (null === e) return !0;
              if (t)
                for (; ++i < t.length;)
                  if (!t[i].previous || t[i].previous.call(n, n.previous)) return !0
            }
          },
          resolveAll: a("text" === e ? l : void 0)
        }
      }

      function a(e) {
        return function(t, n) {
          for (var r, i = -1; ++i <= t.length;) void 0 === r ? t[i] && "data" === t[i][1].type && (r = i, i++) : t[i] && "data" === t[i][1].type || (i !== r + 2 && (t[r][1].end = t[i - 1][1].end, t.splice(r + 2, i - r - 2), i = r + 2), r = void 0);
          return e ? e(t, n) : t
        }
      }

      function l(e, t) {
        for (var n, u, o, c, s, a, l, f, p = -1; ++p <= e.length;)
          if ((p === e.length || "lineEnding" === e[p][1].type) && "data" === e[p - 1][1].type) {
            for (u = e[p - 1][1], c = (n = t.sliceStream(u)).length, s = -1, a = 0, l = void 0; c--;)
              if ("string" == typeof(o = n[c])) {
                for (s = o.length; 32 === o.charCodeAt(s - 1);) a++, s--;
                if (s) break;
                s = -1
              } else if (-2 === o) l = !0, a++;
            else if (-1 !== o) {
              c++;
              break
            }
            a && (f = {
              type: p === e.length || l || a < 2 ? "lineSuffix" : "hardBreakTrailing",
              start: {
                line: u.end.line,
                column: u.end.column - a,
                offset: u.end.offset - a,
                _index: u.start._index + c,
                _bufferIndex: c ? s : u.start._bufferIndex + s
              },
              end: i(u.end)
            }, u.end = i(f.start), u.start.offset === u.end.offset ? r(u, f) : (e.splice(p, 0, ["enter", f, t], ["exit", f, t]), p += 2)), p++
          } return e
      }
      t.resolver = c, t.string = o, t.text = u
    },
    12115: (e, t, n) => {
      var r = n(52508),
        i = n(96893),
        u = n(4997),
        o = n(87126),
        c = n(54228),
        s = n(14751),
        a = {
          tokenize: function(e, t, n) {
            return function(t) {
              return e.consume(t), r
            };

            function r(t) {
              return 87 === t || t - 32 == 87 ? (e.consume(t), i) : n(t)
            }

            function i(t) {
              return 87 === t || t - 32 == 87 ? (e.consume(t), u) : n(t)
            }

            function u(t) {
              return 46 === t ? (e.consume(t), c) : n(t)
            }

            function c(e) {
              return null === e || o(e) ? n(e) : t(e)
            }
          },
          partial: !0
        },
        l = {
          tokenize: function(e, t, n) {
            var r, i;
            return o;

            function o(t) {
              return 38 === t ? e.check(h, l, a)(t) : 46 === t || 95 === t ? e.check(p, l, a)(t) : u(t) || s(t) || 45 !== t && c(t) ? l(t) : (e.consume(t), o)
            }

            function a(t) {
              return 46 === t ? (i = r, r = void 0, e.consume(t), o) : (95 === t && (r = !0), e.consume(t), o)
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

            function r(o) {
              return 38 === o ? e.check(h, t, i)(o) : (40 === o && n++, 41 === o ? e.check(p, u, i)(o) : y(o) ? t(o) : k(o) ? e.check(p, t, i)(o) : (e.consume(o), r))
            }

            function i(t) {
              return e.consume(t), r
            }

            function u(e) {
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
              return k(i) ? (e.consume(i), r) : y(i) ? t(i) : n(i)
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
              return r(t) ? (e.consume(t), i) : 59 === t ? (e.consume(t), u) : n(t)
            }

            function u(e) {
              return y(e) ? t(e) : n(e)
            }
          },
          partial: !0
        },
        d = {
          tokenize: function(e, t, n) {
            var r = this;
            return function(t) {
              return 87 !== t && t - 32 != 87 || !E(r.previous) || w(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(a, e.attempt(l, e.attempt(f, i), n), n)(t))
            };

            function i(n) {
              return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n)
            }
          },
          previous: E
        },
        m = {
          tokenize: function(e, t, n) {
            var r = this;
            return function(t) {
              return 72 !== t && t - 32 != 72 || !S(r.previous) || w(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), e.consume(t), i)
            };

            function i(t) {
              return 84 === t || t - 32 == 84 ? (e.consume(t), o) : n(t)
            }

            function o(t) {
              return 84 === t || t - 32 == 84 ? (e.consume(t), a) : n(t)
            }

            function a(t) {
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
              return 47 === t ? (e.consume(t), x) : n(t)
            }

            function x(t) {
              return u(t) || s(t) || c(t) ? n(t) : e.attempt(l, e.attempt(f, g), n)(t)
            }

            function g(n) {
              return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n)
            }
          },
          previous: S
        },
        x = {
          tokenize: function(e, t, n) {
            var r, u = this;
            return function(t) {
              return b(t) && C(u.previous) && !w(u.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), o(t)) : n(t)
            };

            function o(t) {
              return b(t) ? (e.consume(t), o) : 64 === t ? (e.consume(t), c) : n(t)
            }

            function c(t) {
              return 46 === t ? e.check(p, f, s)(t) : 45 === t || 95 === t ? e.check(p, n, a)(t) : i(t) ? (e.consume(t), c) : f(t)
            }

            function s(t) {
              return e.consume(t), r = !0, c
            }

            function a(t) {
              return e.consume(t), l
            }

            function l(t) {
              return 46 === t ? e.check(p, n, s)(t) : c(t)
            }

            function f(i) {
              return r ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(i)) : n(i)
            }
          },
          previous: C
        },
        g = {};
      t.text = g;
      for (var v = 48; v < 123;) g[v] = x, 58 == ++v ? v = 65 : 91 === v && (v = 97);

      function k(e) {
        return 33 === e || 34 === e || 39 === e || 41 === e || 42 === e || 44 === e || 46 === e || 58 === e || 59 === e || 60 === e || 63 === e || 95 === e || 126 === e
      }

      function y(e) {
        return null === e || e < 0 || 32 === e || 60 === e
      }

      function b(e) {
        return 43 === e || 45 === e || 46 === e || 95 === e || i(e)
      }

      function E(e) {
        return null === e || e < 0 || 32 === e || 40 === e || 42 === e || 95 === e || 126 === e
      }

      function S(e) {
        return null === e || !r(e)
      }

      function C(e) {
        return 47 !== e && S(e)
      }

      function w(e) {
        for (var t = e.length; t--;)
          if (("labelLink" === e[t][1].type || "labelImage" === e[t][1].type) && !e[t][1]._balanced) return !0
      }
      g[43] = x, g[45] = x, g[46] = x, g[95] = x, g[72] = [x, m], g[104] = [x, m], g[87] = [x, d], g[119] = [x, d]
    },
    12231: (e, t, n) => {
      "use strict";
      var r = n(87126),
        i = n(36309),
        u = n(21516),
        o = n(42827),
        c = {
          tokenize: function(e, t) {
            var n;
            return function(t) {
              return e.enter("content"), n = e.enter("chunkContent", {
                contentType: "content"
              }), i(t)
            };

            function i(t) {
              return null === t ? u(t) : r(t) ? e.check(s, o, u)(t) : (e.consume(t), i)
            }

            function u(n) {
              return e.exit("chunkContent"), e.exit("content"), t(n)
            }

            function o(t) {
              return e.consume(t), e.exit("chunkContent"), n = n.next = e.enter("chunkContent", {
                contentType: "content",
                previous: n
              }), i
            }
          },
          resolve: function(e) {
            return u(e), e
          },
          interruptible: !0,
          lazy: !0
        },
        s = {
          tokenize: function(e, t, n) {
            var u = this;
            return function(t) {
              return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), o(e, c, "linePrefix")
            };

            function c(o) {
              return null === o || r(o) ? n(o) : u.parser.constructs.disable.null.indexOf("codeIndented") > -1 || i(u.events, "linePrefix") < 4 ? e.interrupt(u.parser.constructs.flow, n, t)(o) : t(o)
            }
          },
          partial: !0
        };
      e.exports = c
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
        u = {
          tokenize: function(e, t, n) {
            return i(e, (function(e) {
              return null === e || r(e) ? t(e) : n(e)
            }), "linePrefix")
          },
          partial: !0
        };
      e.exports = u
    },
    14001: (e, t, n) => {
      "use strict";
      var r = n(7598),
        i = n(64936),
        u = n(99079);

      function o(e, t) {
        var n, i, o, s;
        for (n in t)
          for (s in i = r.call(e, n) ? e[n] : e[n] = {}, o = t[n]) i[s] = c(u(o[s]), r.call(i, s) ? i[s] : [])
      }

      function c(e, t) {
        for (var n = -1, r = []; ++n < e.length;)("after" === e[n].add ? t : r).push(e[n]);
        return i(t, 0, 0, r), t
      }
      e.exports = function(e) {
        for (var t = {}, n = -1; ++n < e.length;) o(t, e[n]);
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
      e.exports = u, u.wrap = r;
      var i = [].slice;

      function u() {
        var e = [],
          t = {
            run: function() {
              var t = -1,
                n = i.call(arguments, 0, -1),
                u = arguments[arguments.length - 1];
              if ("function" != typeof u) throw new Error("Expected function as last argument, not " + u);
              (function o(c) {
                var s = e[++t],
                  a = i.call(arguments, 0).slice(1),
                  l = n.length,
                  f = -1;
                if (c) u(c);
                else {
                  for (; ++f < l;) null !== a[f] && void 0 !== a[f] || (a[f] = n[f]);
                  n = a, s ? r(s, o).apply(null, n) : u.apply(null, [null].concat(n))
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
        u = n(65342),
        o = n(62633),
        c = n(51059);
      e.exports = function(e) {
        return r([i, u(e), o, c])
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
            u = e.children[0];
          return "boolean" == typeof e.checked && u && "paragraph" === u.type && (i = i.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, (function(t) {
            return t + "[" + (e.checked ? "x" : " ") + "] "
          }))), i
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
        u = n(13067);
      t.tokenize = function(e) {
        var t = this,
          n = e.attempt(u, (function(r) {
            if (null !== r) return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
            e.consume(r)
          }), e.attempt(this.parser.constructs.flowInitial, o, i(e, e.attempt(this.parser.constructs.flow, o, e.attempt(r, o)), "linePrefix")));
        return n;

        function o(r) {
          if (null !== r) return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n;
          e.consume(r)
        }
      }
    },
    19059: (e, t, n) => {
      "use strict";
      var r = n(52508),
        i = n(96893),
        u = n(9340),
        o = n(4997),
        c = {
          name: "autolink",
          tokenize: function(e, t, n) {
            var c = 1;
            return function(t) {
              return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), s
            };

            function s(t) {
              return r(t) ? (e.consume(t), a) : u(t) ? p(t) : n(t)
            }

            function a(e) {
              return 43 === e || 45 === e || 46 === e || i(e) ? l(e) : p(e)
            }

            function l(t) {
              return 58 === t ? (e.consume(t), f) : (43 === t || 45 === t || 46 === t || i(t)) && c++ < 32 ? (e.consume(t), l) : p(t)
            }

            function f(t) {
              return 62 === t ? (e.exit("autolinkProtocol"), x(t)) : 32 === t || 60 === t || o(t) ? n(t) : (e.consume(t), f)
            }

            function p(t) {
              return 64 === t ? (e.consume(t), c = 0, h) : u(t) ? (e.consume(t), p) : n(t)
            }

            function h(e) {
              return i(e) ? d(e) : n(e)
            }

            function d(t) {
              return 46 === t ? (e.consume(t), c = 0, h) : 62 === t ? (e.exit("autolinkProtocol").type = "autolinkEmail", x(t)) : m(t)
            }

            function m(t) {
              return (45 === t || i(t)) && c++ < 63 ? (e.consume(t), 45 === t ? m : d) : n(t)
            }

            function x(n) {
              return e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t
            }
          }
        };
      e.exports = c
    },
    19916: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = n(87126),
        i = n(42827),
        u = n(13067),
        o = {
          tokenize: function(e, t, n) {
            return i(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
          }
        },
        c = {
          tokenize: function(e, t, n) {
            return i(e, e.lazy(this.parser.constructs.flow, t, n), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
          }
        };
      t.tokenize = function(e) {
        var t, n, i, s = this,
          a = [],
          l = 0,
          f = {
            tokenize: function(e, r) {
              var i = 0;
              return t = {}, l;

              function l(r) {
                return i < a.length ? (s.containerState = a[i][1], e.attempt(a[i][0].continuation, f, p)(r)) : n.currentConstruct && n.currentConstruct.concrete ? (t.flowContinue = !0, m(r)) : (s.interrupt = n.currentConstruct && n.currentConstruct.interruptible, s.containerState = {}, e.attempt(o, d, m)(r))
              }

              function f(e) {
                return i++, s.containerState._closeFlow ? d(e) : l(e)
              }

              function p(t) {
                return n.currentConstruct && n.currentConstruct.lazy ? (s.containerState = {}, e.attempt(o, d, e.attempt(c, d, e.check(u, d, h)))(t)) : d(t)
              }

              function h(e) {
                return i = a.length, t.lazy = !0, t.flowContinue = !0, m(e)
              }

              function d(e) {
                return t.flowEnd = !0, m(e)
              }

              function m(e) {
                return t.continued = i, s.interrupt = s.containerState = void 0, r(e)
              }
            },
            partial: !0
          };
        return p;

        function p(t) {
          return l < a.length ? (s.containerState = a[l][1], e.attempt(a[l][0].continuation, h, d)(t)) : d(t)
        }

        function h(e) {
          return l++, p(e)
        }

        function d(r) {
          return t && t.flowContinue ? x(r) : (s.interrupt = n && n.currentConstruct && n.currentConstruct.interruptible, s.containerState = {}, e.attempt(o, m, x)(r))
        }

        function m(e) {
          return a.push([s.currentConstruct, s.containerState]), s.containerState = void 0, d(e)
        }

        function x(t) {
          return null === t ? (y(0, !0), void e.consume(t)) : (n = n || s.parser.flow(s.now()), e.enter("chunkFlow", {
            contentType: "flow",
            previous: i,
            _tokenizer: n
          }), g(t))
        }

        function g(t) {
          return null === t ? (k(e.exit("chunkFlow")), x(t)) : r(t) ? (e.consume(t), k(e.exit("chunkFlow")), e.check(f, v)) : (e.consume(t), g)
        }

        function v(e) {
          return y(t.continued, t && t.flowEnd), l = 0, p(e)
        }

        function k(e) {
          i && (i.next = e), i = e, n.lazy = t && t.lazy, n.defineSkip(e.start), n.write(s.sliceStream(e))
        }

        function y(t, r) {
          var u = a.length;
          for (n && r && (n.write([null]), i = n = void 0); u-- > t;) s.containerState = a[u][1], a[u][0].exit.call(s, e);
          a.length = t
        }
      }
    },
    20113: (e, t, n) => {
      "use strict";
      var r = n(47649),
        i = n(96893),
        u = n(96253),
        o = n(96349);

      function c(e) {
        return e && "object" == typeof e && "default" in e ? e : {
          default: e
        }
      }
      var s = c(r),
        a = {
          name: "characterReference",
          tokenize: function(e, t, n) {
            var r, c, a = this,
              l = 0;
            return function(t) {
              return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), f
            };

            function f(t) {
              return 35 === t ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), p) : (e.enter("characterReferenceValue"), r = 31, c = i, h(t))
            }

            function p(t) {
              return 88 === t || 120 === t ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), r = 6, c = o, h) : (e.enter("characterReferenceValue"), r = 7, c = u, h(t))
            }

            function h(u) {
              var o;
              return 59 === u && l ? (o = e.exit("characterReferenceValue"), c !== i || s.default(a.sliceSerialize(o)) ? (e.enter("characterReferenceMarker"), e.consume(u), e.exit("characterReferenceMarker"), e.exit("characterReference"), t) : n(u)) : c(u) && l++ < r ? (e.consume(u), h) : n(u)
            }
          }
        };
      e.exports = a
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
            u = r.children[0],
            o = -1;
          if (n && "listItem" === n.type && "boolean" == typeof n.checked && u && "text" === u.type) {
            for (; ++o < i.length;)
              if ("paragraph" === i[o].type) {
                t = i[o];
                break
              } t === r && (u.value = u.value.slice(1), 0 === u.value.length ? r.children.shift() : (u.position.start.column++, u.position.start.offset++, r.position.start = Object.assign({}, u.position.start)))
          }
          this.exit(e)
        }
      }
    },
    21516: (e, t, n) => {
      "use strict";
      var r = n(25058),
        i = n(64936),
        u = n(46315);

      function o(e, t) {
        for (var n, r, u, o, c, s, a = e[t][1], l = e[t][2], f = t - 1, p = [], h = a._tokenizer || l.parser[a.contentType](a.start), d = h.events, m = [], x = {}; a;) {
          for (; e[++f][1] !== a;);
          p.push(f), a._tokenizer || (n = l.sliceStream(a), a.next || n.push(null), r && h.defineSkip(a.start), a.isInFirstContentOfListItem && (h._gfmTasklistFirstContentOfListItem = !0), h.write(n), a.isInFirstContentOfListItem && (h._gfmTasklistFirstContentOfListItem = void 0)), r = a, a = a.next
        }
        for (a = r, u = d.length; u--;) "enter" === d[u][0] ? o = !0 : o && d[u][1].type === d[u - 1][1].type && d[u][1].start.line !== d[u][1].end.line && (g(d.slice(u + 1, c)), a._tokenizer = a.next = void 0, a = a.previous, c = u + 1);
        for (h.events = a._tokenizer = a.next = void 0, g(d.slice(0, c)), u = -1, s = 0; ++u < m.length;) x[s + m[u][0]] = s + m[u][1], s += m[u][1] - m[u][0] - 1;
        return x;

        function g(t) {
          var n = p.pop();
          m.unshift([n, n + t.length - 1]), i(e, n, 2, t)
        }
      }
      e.exports = function(e) {
        for (var t, n, c, s, a, l, f, p = {}, h = -1; ++h < e.length;) {
          for (; h in p;) h = p[h];
          if (t = e[h], h && "chunkFlow" === t[1].type && "listItemPrefix" === e[h - 1][1].type && ((c = 0) < (l = t[1]._tokenizer.events).length && "lineEndingBlank" === l[c][1].type && (c += 2), c < l.length && "content" === l[c][1].type))
            for (; ++c < l.length && "content" !== l[c][1].type;) "chunkText" === l[c][1].type && (l[c][1].isInFirstContentOfListItem = !0, c++);
          if ("enter" === t[0]) t[1].contentType && (r(p, o(e, h)), h = p[h], f = !0);
          else if (t[1]._container || t[1]._movePreviousLineEndings) {
            for (c = h, n = void 0; c-- && ("lineEnding" === (s = e[c])[1].type || "lineEndingBlank" === s[1].type);) "enter" === s[0] && (n && (e[n][1].type = "lineEndingBlank"), s[1].type = "lineEnding", n = c);
            n && (t[1].end = u(e[n][1].start), (a = e.slice(n, h)).unshift(t), i(e, n, h - n + 1, a))
          }
        }
        return !f
      }
    },
    23074: (e, t, n) => {
      "use strict";
      var r = n(52734),
        i = n(42827),
        u = {
          name: "blockQuote",
          tokenize: function(e, t, n) {
            var i = this;
            return function(t) {
              return 62 === t ? (i.containerState.open || (e.enter("blockQuote", {
                _container: !0
              }), i.containerState.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), u) : n(t)
            };

            function u(n) {
              return r(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n))
            }
          },
          continuation: {
            tokenize: function(e, t, n) {
              return i(e, e.attempt(u, t, n), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
            }
          },
          exit: function(e) {
            e.exit("blockQuote")
          }
        };
      e.exports = u
    },
    24826: (e, t, n) => {
      "use strict";
      var r = n(52860);

      function i() {}
      e.exports = o, i.prototype = Error.prototype, o.prototype = new i;
      var u = o.prototype;

      function o(e, t, n) {
        var i, u, o;
        "string" == typeof t && (n = t, t = null), i = function(e) {
          var t, n = [null, null];
          return "string" == typeof e && (-1 === (t = e.indexOf(":")) ? n[1] = e : (n[0] = e.slice(0, t), n[1] = e.slice(t + 1))), n
        }(n), u = r(t) || "1:1", o = {
          start: {
            line: null,
            column: null
          },
          end: {
            line: null,
            column: null
          }
        }, t && t.position && (t = t.position), t && (t.start ? (o = t, t = t.start) : o.start = t), e.stack && (this.stack = e.stack, e = e.message), this.message = e, this.name = u, this.reason = e, this.line = t ? t.line : null, this.column = t ? t.column : null, this.location = o, this.source = i[0], this.ruleId = i[1]
      }
      u.file = "", u.name = "", u.reason = "", u.message = "", u.stack = "", u.fatal = null, u.column = null, u.line = null
    },
    24969: (e, t, n) => {
      var r = n(38692),
        i = n(75095),
        u = n(54228),
        o = n(14751);

      function c(e) {
        this.config.enter.autolinkProtocol.call(this, e)
      }

      function s(e, t, n, i, u) {
        var o, c, s = "";
        return !!l(u) && (/^w/i.test(t) && (n = t + n, t = "", s = "http://"), !! function(e) {
          var t = e.split(".");
          return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])))
        }(n) && !!(o = function(e) {
          var t, n, i, u = /[!"&'),.:;<>?\]}]+$/.exec(e);
          if (u)
            for (e = e.slice(0, u.index), t = (u = u[0]).indexOf(")"), n = r(e, "("), i = r(e, ")"); - 1 !== t && n > i;) e += u.slice(0, t + 1), t = (u = u.slice(t + 1)).indexOf(")"), i++;
          return [e, u]
        }(n + i))[0] && (c = {
          type: "link",
          title: null,
          url: s + t + o[0],
          children: [{
            type: "text",
            value: t + o[0]
          }]
        }, o[1] && (c = [c, {
          type: "text",
          value: o[1]
        }]), c))
      }

      function a(e, t, n, r) {
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
        return (n != n || o(n) || u(n)) && (!t || 47 !== n)
      }
      t.transforms = [function(e) {
        i(e, [
          [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/i, s],
          [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/, a]
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
        literalAutolinkEmail: c,
        literalAutolinkHttp: c,
        literalAutolinkWww: c
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
      e.exports = function(e, t, n, u, o, c) {
        var s;
        return function(t) {
          return e.enter(u), e.enter(o), e.consume(t), e.exit(o), s = 40 === t ? 41 : t, a
        };

        function a(n) {
          return n === s ? (e.enter(o), e.consume(n), e.exit(o), e.exit(u), t) : (e.enter(c), l(n))
        }

        function l(t) {
          return t === s ? (e.exit(c), a(s)) : null === t ? n(t) : r(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i(e, l, "linePrefix")) : (e.enter("chunkString", {
            contentType: "string"
          }), f(t))
        }

        function f(t) {
          return t === s || null === t || r(t) ? (e.exit("chunkString"), l(t)) : (e.consume(t), 92 === t ? p : f)
        }

        function p(t) {
          return t === s || 92 === t ? (e.consume(t), f) : f(t)
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
        u = n(36309),
        o = {
          tokenize: function(e, t, n) {
            var r = this;
            return function(t) {
              return 91 === t && null === r.previous && r._gfmTasklistFirstContentOfListItem ? (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), i) : n(t)
            };

            function i(t) {
              return -2 === t || 32 === t ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), u) : 88 === t || 120 === t ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), u) : n(t)
            }

            function u(r) {
              return 93 === r ? (e.enter("taskListCheckMarker"), e.consume(r), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), e.check({
                tokenize: c
              }, t, n)) : n(r)
            }
          }
        };

      function c(e, t, n) {
        var o = this;
        return i(e, (function(e) {
          return u(o.events, "whitespace") && null !== e && !r(e) ? t(e) : n(e)
        }), "whitespace")
      }
      t.text = {
        91: o
      }
    },
    30037: (e, t) => {
      "use strict";

      function n(e) {
        if ("string" != typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
      }
      t.basename = function(e, t) {
        var r, i, u, o, c = 0,
          s = -1;
        if (void 0 !== t && "string" != typeof t) throw new TypeError('"ext" argument must be a string');
        if (n(e), r = e.length, void 0 === t || !t.length || t.length > e.length) {
          for (; r--;)
            if (47 === e.charCodeAt(r)) {
              if (u) {
                c = r + 1;
                break
              }
            } else s < 0 && (u = !0, s = r + 1);
          return s < 0 ? "" : e.slice(c, s)
        }
        if (t === e) return "";
        for (i = -1, o = t.length - 1; r--;)
          if (47 === e.charCodeAt(r)) {
            if (u) {
              c = r + 1;
              break
            }
          } else i < 0 && (u = !0, i = r + 1), o > -1 && (e.charCodeAt(r) === t.charCodeAt(o--) ? o < 0 && (s = r) : (o = -1, s = i));
        return c === s ? s = i : s < 0 && (s = e.length), e.slice(c, s)
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
        var t, r, i, u = -1,
          o = 0,
          c = -1,
          s = 0;
        for (n(e), i = e.length; i--;)
          if (47 !== (r = e.charCodeAt(i))) c < 0 && (t = !0, c = i + 1), 46 === r ? u < 0 ? u = i : 1 !== s && (s = 1) : u > -1 && (s = -1);
          else if (t) {
          o = i + 1;
          break
        }
        return u < 0 || c < 0 || 0 === s || 1 === s && u === c - 1 && u === o + 1 ? "" : e.slice(u, c)
      }, t.join = function() {
        for (var e, t, r, i, u = -1; ++u < arguments.length;) n(arguments[u]), arguments[u] && (e = void 0 === e ? arguments[u] : e + "/" + arguments[u]);
        return void 0 === e ? "." : (n(t = e), r = 47 === t.charCodeAt(0), i = function(e, t) {
          for (var n, r, i = "", u = 0, o = -1, c = 0, s = -1; ++s <= e.length;) {
            if (s < e.length) n = e.charCodeAt(s);
            else {
              if (47 === n) break;
              n = 47
            }
            if (47 === n) {
              if (o === s - 1 || 1 === c);
              else if (o !== s - 1 && 2 === c) {
                if (i.length < 2 || 2 !== u || 46 !== i.charCodeAt(i.length - 1) || 46 !== i.charCodeAt(i.length - 2))
                  if (i.length > 2) {
                    if ((r = i.lastIndexOf("/")) !== i.length - 1) {
                      r < 0 ? (i = "", u = 0) : u = (i = i.slice(0, r)).length - 1 - i.lastIndexOf("/"), o = s, c = 0;
                      continue
                    }
                  } else if (i.length) {
                  i = "", u = 0, o = s, c = 0;
                  continue
                }
                t && (i = i.length ? i + "/.." : "..", u = 2)
              } else i.length ? i += "/" + e.slice(o + 1, s) : i = e.slice(o + 1, s), u = s - o - 1;
              o = s, c = 0
            } else 46 === n && c > -1 ? c++ : c = -1
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
        u = n(96967),
        o = n(11465),
        c = n(9345),
        s = n(46315),
        a = {
          name: "attention",
          tokenize: function(e, t) {
            var n, r = u(this.previous);
            return function(t) {
              return e.enter("attentionSequence"), n = t, i(t)
            };

            function i(o) {
              var c, s, a, l;
              return o === n ? (e.consume(o), i) : (c = e.exit("attentionSequence"), a = !(s = u(o)) || 2 === s && r, l = !r || 2 === r && s, c._open = 42 === n ? a : a && (r || !l), c._close = 42 === n ? l : l && (s || !a), t(o))
            }
          },
          resolveAll: function(e, t) {
            for (var n, u, a, l, f, p, h, d, m = -1; ++m < e.length;)
              if ("enter" === e[m][0] && "attentionSequence" === e[m][1].type && e[m][1]._close)
                for (n = m; n--;)
                  if ("exit" === e[n][0] && "attentionSequence" === e[n][1].type && e[n][1]._open && t.sliceSerialize(e[n][1]).charCodeAt(0) === t.sliceSerialize(e[m][1]).charCodeAt(0)) {
                    if ((e[n][1]._close || e[m][1]._open) && (e[m][1].end.offset - e[m][1].start.offset) % 3 && !((e[n][1].end.offset - e[n][1].start.offset + e[m][1].end.offset - e[m][1].start.offset) % 3)) continue;
                    l = {
                      type: (p = e[n][1].end.offset - e[n][1].start.offset > 1 && e[m][1].end.offset - e[m][1].start.offset > 1 ? 2 : 1) > 1 ? "strongSequence" : "emphasisSequence",
                      start: o(s(e[n][1].end), -p),
                      end: s(e[n][1].end)
                    }, f = {
                      type: p > 1 ? "strongSequence" : "emphasisSequence",
                      start: s(e[m][1].start),
                      end: o(s(e[m][1].start), p)
                    }, a = {
                      type: p > 1 ? "strongText" : "emphasisText",
                      start: s(e[n][1].end),
                      end: s(e[m][1].start)
                    }, u = {
                      type: p > 1 ? "strong" : "emphasis",
                      start: s(l.start),
                      end: s(f.end)
                    }, e[n][1].end = s(l.start), e[m][1].start = s(f.end), h = [], e[n][1].end.offset - e[n][1].start.offset && (h = r(h, [
                      ["enter", e[n][1], t],
                      ["exit", e[n][1], t]
                    ])), h = r(h, [
                      ["enter", u, t],
                      ["enter", l, t],
                      ["exit", l, t],
                      ["enter", a, t]
                    ]), h = r(h, c(t.parser.constructs.insideSpan.null, e.slice(n + 1, m), t)), h = r(h, [
                      ["exit", a, t],
                      ["enter", f, t],
                      ["exit", f, t],
                      ["exit", u, t]
                    ]), e[m][1].end.offset - e[m][1].start.offset ? (d = 2, h = r(h, [
                      ["enter", e[m][1], t],
                      ["exit", e[m][1], t]
                    ])) : d = 0, i(e, n - 1, m - n + 3, h), m = n + h.length - d - 2;
                    break
                  } for (m = -1; ++m < e.length;) "attentionSequence" === e[m][1].type && (e[m][1].type = "data");
            return e
          }
        };
      e.exports = a
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
        for (var r, i, u, o = e.children || [], c = [], s = -1, a = n.before; ++s < o.length;) u = o[s], s + 1 < o.length ? ((i = t.handle.handlers[o[s + 1].type]) && i.peek && (i = i.peek), r = i ? i(o[s + 1], e, t, {
          before: "",
          after: ""
        }).charAt(0) : "") : r = n.after, c.length > 0 && ("\r" === a || "\n" === a) && "html" === u.type && (c[c.length - 1] = c[c.length - 1].replace(/(\r?\n|\r)$/, " "), a = " "), c.push(t.handle(u, e, t, {
          before: a,
          after: r
        })), a = c[c.length - 1].slice(-1);
        return c.join("")
      }
    },
    33498: e => {
      "use strict";
      var t = /[\0\t\n\r]/g;
      e.exports = function() {
        var e, n = !0,
          r = 1,
          i = "";
        return function(u, o, c) {
          var s, a, l, f, p, h = [];
          for (u = i + u.toString(o), l = 0, i = "", n && (65279 === u.charCodeAt(0) && l++, n = void 0); l < u.length;) {
            if (t.lastIndex = l, f = (s = t.exec(u)) ? s.index : u.length, p = u.charCodeAt(f), !s) {
              i = u.slice(l);
              break
            }
            if (10 === p && l === f && e) h.push(-3), e = void 0;
            else if (e && (h.push(-5), e = void 0), l < f && (h.push(u.slice(l, f)), r += f - l), 0 === p) h.push(65533), r++;
            else if (9 === p)
              for (a = 4 * Math.ceil(r / 4), h.push(-2); r++ < a;) h.push(-1);
            else 10 === p ? (h.push(-4), r = 1) : (e = !0, r = 1);
            l = f + 1
          }
          return c && (e && h.push(-5), i && h.push(i), h.push(null)), h
        }
      }
    },
    34498: (e, t, n) => {
      var r = n(17490),
        i = n(64144),
        u = n(83551),
        o = n(18487),
        c = n(79350);
      e.exports = function(e) {
        var t = c({
          handlers: {},
          join: [],
          unsafe: [],
          options: {}
        }, {
          extensions: [r, i, u(e), o]
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
                  autolink: x(I),
                  autolinkProtocol: E,
                  autolinkEmail: E,
                  atxHeading: x(T),
                  blockQuote: x((function() {
                    return {
                      type: "blockquote",
                      children: []
                    }
                  })),
                  characterEscape: E,
                  characterReference: E,
                  codeFenced: x(A),
                  codeFencedFenceInfo: g,
                  codeFencedFenceMeta: g,
                  codeIndented: x(A, g),
                  codeText: x((function() {
                    return {
                      type: "inlineCode",
                      value: ""
                    }
                  }), g),
                  codeTextData: E,
                  data: E,
                  codeFlowValue: E,
                  definition: x((function() {
                    return {
                      type: "definition",
                      identifier: "",
                      label: null,
                      title: null,
                      url: ""
                    }
                  })),
                  definitionDestinationString: g,
                  definitionLabelString: g,
                  definitionTitleString: g,
                  emphasis: x((function() {
                    return {
                      type: "emphasis",
                      children: []
                    }
                  })),
                  hardBreakEscape: x(F),
                  hardBreakTrailing: x(F),
                  htmlFlow: x(L, g),
                  htmlFlowData: E,
                  htmlText: x(L, g),
                  htmlTextData: E,
                  image: x((function() {
                    return {
                      type: "image",
                      title: null,
                      url: "",
                      alt: null
                    }
                  })),
                  label: g,
                  link: x(I),
                  listItem: x((function(e) {
                    return {
                      type: "listItem",
                      spread: e._spread,
                      checked: null,
                      children: []
                    }
                  })),
                  listItemValue: function(e) {
                    d("expectingFirstListItemValue") && (this.stack[this.stack.length - 2].start = parseInt(this.sliceSerialize(e), 10), l("expectingFirstListItemValue"))
                  },
                  listOrdered: x(O, (function() {
                    l("expectingFirstListItemValue", !0)
                  })),
                  listUnordered: x(O),
                  paragraph: x((function() {
                    return {
                      type: "paragraph",
                      children: []
                    }
                  })),
                  reference: function() {
                    l("referenceType", "collapsed")
                  },
                  referenceString: g,
                  resourceDestinationString: g,
                  resourceTitleString: g,
                  setextHeading: x(T),
                  strong: x((function() {
                    return {
                      type: "strong",
                      children: []
                    }
                  })),
                  thematicBreak: x((function() {
                    return {
                      type: "thematicBreak"
                    }
                  }))
                },
                exit: {
                  atxHeading: k(),
                  atxHeadingSequence: function(e) {
                    this.stack[this.stack.length - 1].depth || (this.stack[this.stack.length - 1].depth = this.sliceSerialize(e).length)
                  },
                  autolink: k(),
                  autolinkEmail: function(e) {
                    S.call(this, e), this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e)
                  },
                  autolinkProtocol: function(e) {
                    S.call(this, e), this.stack[this.stack.length - 1].url = this.sliceSerialize(e)
                  },
                  blockQuote: k(),
                  characterEscapeValue: S,
                  characterReferenceMarkerHexadecimal: w,
                  characterReferenceMarkerNumeric: w,
                  characterReferenceValue: function(e) {
                    var t, n, r = this.sliceSerialize(e),
                      i = d("characterReferenceType");
                    i ? (t = c(r, "characterReferenceMarkerNumeric" === i ? 10 : 16), l("characterReferenceType")) : t = f(r), (n = this.stack.pop()).value += t, n.position.end = m(e.end)
                  },
                  codeFenced: k((function() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), l("flowCodeInside")
                  })),
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
                  codeIndented: k((function() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].value = e
                  })),
                  codeText: k((function() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].value = e
                  })),
                  codeTextData: S,
                  data: S,
                  definition: k(),
                  definitionDestinationString: function() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].url = e
                  },
                  definitionLabelString: function(e) {
                    var t = this.resume();
                    this.stack[this.stack.length - 1].label = t, this.stack[this.stack.length - 1].identifier = o(this.sliceSerialize(e)).toLowerCase()
                  },
                  definitionTitleString: function() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].title = e
                  },
                  emphasis: k(),
                  hardBreakEscape: k(C),
                  hardBreakTrailing: k(C),
                  htmlFlow: k((function() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].value = e
                  })),
                  htmlFlowData: S,
                  htmlText: k((function() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].value = e
                  })),
                  htmlTextData: S,
                  image: k((function() {
                    var e = this.stack[this.stack.length - 1];
                    d("inReference") ? (e.type += "Reference", e.referenceType = d("referenceType") || "shortcut", delete e.url, delete e.title) : (delete e.identifier, delete e.label, delete e.referenceType), l("referenceType")
                  })),
                  label: function() {
                    var e = this.stack[this.stack.length - 1],
                      t = this.resume();
                    this.stack[this.stack.length - 1].label = t, l("inReference", !0), "link" === this.stack[this.stack.length - 1].type ? this.stack[this.stack.length - 1].children = e.children : this.stack[this.stack.length - 1].alt = t
                  },
                  labelText: function(e) {
                    this.stack[this.stack.length - 2].identifier = o(this.sliceSerialize(e)).toLowerCase()
                  },
                  lineEnding: function(e) {
                    var t = this.stack[this.stack.length - 1];
                    if (d("atHardBreak")) return t.children[t.children.length - 1].position.end = m(e.end), void l("atHardBreak");
                    !d("setextHeadingSlurpLineEnding") && n.canContainEols.indexOf(t.type) > -1 && (E.call(this, e), S.call(this, e))
                  },
                  link: k((function() {
                    var e = this.stack[this.stack.length - 1];
                    d("inReference") ? (e.type += "Reference", e.referenceType = d("referenceType") || "shortcut", delete e.url, delete e.title) : (delete e.identifier, delete e.label, delete e.referenceType), l("referenceType")
                  })),
                  listItem: k(),
                  listOrdered: k(),
                  listUnordered: k(),
                  paragraph: k(),
                  referenceString: function(e) {
                    var t = this.resume();
                    this.stack[this.stack.length - 1].label = t, this.stack[this.stack.length - 1].identifier = o(this.sliceSerialize(e)).toLowerCase(), l("referenceType", "full")
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
                  setextHeading: k((function() {
                    l("setextHeadingSlurpLineEnding")
                  })),
                  setextHeadingLineSequence: function(e) {
                    this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2
                  },
                  setextHeadingText: function() {
                    l("setextHeadingSlurpLineEnding", !0)
                  },
                  strong: k(),
                  thematicBreak: k()
                }
              }, t.mdastExtensions || []),
              s = {};
            return function(e) {
              for (var t, r = {
                  type: "root",
                  children: []
                }, o = [], c = [], s = -1, f = {
                  stack: [r],
                  tokenStack: o,
                  config: n,
                  enter: v,
                  exit: y,
                  buffer: g,
                  resume: b,
                  setData: l,
                  getData: d
                }; ++s < e.length;) "listOrdered" !== e[s][1].type && "listUnordered" !== e[s][1].type || ("enter" === e[s][0] ? c.push(s) : s = a(e, c.pop(s), s));
              for (s = -1; ++s < e.length;) t = n[e[s][0]], u.call(t, e[s][1].type) && t[e[s][1].type].call(i({
                sliceSerialize: e[s][2].sliceSerialize
              }, f), e[s][1]);
              if (o.length) throw new Error("Cannot close document, a token (`" + o[o.length - 1].type + "`, " + p({
                start: o[o.length - 1].start,
                end: o[o.length - 1].end
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
                }, s = -1; ++s < n.transforms.length;) r = n.transforms[s](r) || r;
              return r
            };

            function a(e, t, n) {
              for (var r, i, u, o, c, s, a, l = t - 1, f = -1, p = !1; ++l <= n;)
                if ("listUnordered" === (c = e[l])[1].type || "listOrdered" === c[1].type || "blockQuote" === c[1].type ? ("enter" === c[0] ? f++ : f--, a = void 0) : "lineEndingBlank" === c[1].type ? "enter" === c[0] && (!r || a || f || s || (s = l), a = void 0) : "linePrefix" === c[1].type || "listItemValue" === c[1].type || "listItemMarker" === c[1].type || "listItemPrefix" === c[1].type || "listItemPrefixWhitespace" === c[1].type || (a = void 0), !f && "enter" === c[0] && "listItemPrefix" === c[1].type || -1 === f && "exit" === c[0] && ("listUnordered" === c[1].type || "listOrdered" === c[1].type)) {
                  if (r) {
                    for (i = l, u = void 0; i--;)
                      if ("lineEnding" === (o = e[i])[1].type || "lineEndingBlank" === o[1].type) {
                        if ("exit" === o[0]) continue;
                        u && (e[u][1].type = "lineEndingBlank", p = !0), o[1].type = "lineEnding", u = i
                      } else if ("linePrefix" !== o[1].type && "blockQuotePrefix" !== o[1].type && "blockQuotePrefixWhitespace" !== o[1].type && "blockQuoteMarker" !== o[1].type && "listItemIndent" !== o[1].type) break;
                    s && (!u || s < u) && (r._spread = !0), r.end = m(u ? e[u][1].start : c[1].end), e.splice(u || l, 0, ["exit", r, c[2]]), l++, n++
                  }
                  "listItemPrefix" === c[1].type && (r = {
                    type: "listItem",
                    _spread: !1,
                    start: m(c[1].start)
                  }, e.splice(l, 0, ["enter", r, c[2]]), l++, n++, s = void 0, a = !0)
                } return e[t][1]._spread = p, n
            }

            function l(e, t) {
              s[e] = t
            }

            function d(e) {
              return s[e]
            }

            function m(e) {
              return {
                line: e.line,
                column: e.column,
                offset: e.offset
              }
            }

            function x(e, t) {
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

            function k(e) {
              return function(t) {
                e && e.call(this, t), y.call(this, t)
              }
            }

            function y(e) {
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

            function E(e) {
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

            function C() {
              l("atHardBreak", !0)
            }

            function w(e) {
              l("characterReferenceType", e.type)
            }

            function A() {
              return {
                type: "code",
                lang: null,
                meta: null,
                value: ""
              }
            }

            function T() {
              return {
                type: "heading",
                depth: void 0,
                children: []
              }
            }

            function F() {
              return {
                type: "break"
              }
            }

            function L() {
              return {
                type: "html",
                value: ""
              }
            }

            function I() {
              return {
                type: "link",
                title: null,
                url: "",
                children: []
              }
            }

            function O(e) {
              return {
                type: "list",
                ordered: "listOrdered" === e.type,
                start: null,
                spread: e._spread,
                children: []
              }
            }
          }(n)(l(s(n).document().write(a()(e, t, !0))))
      };
      var r = n(57046),
        i = n(25058),
        u = n(7598),
        o = n(28530),
        c = n(11631),
        s = n(63481),
        a = n(33498),
        l = n(34685),
        f = n(47649),
        p = n(52860);

      function h(e, t) {
        var n, r;
        for (n in t) r = u.call(e, n) ? e[n] : e[n] = {}, "canContainEols" === n || "transforms" === n ? e[n] = [].concat(r, t[n]) : Object.assign(r, t[n])
      }
    },
    36185: (e, t, n) => {
      var r = n(24969),
        i = n(94535),
        u = n(42952),
        o = n(20432),
        c = {}.hasOwnProperty;

      function s(e, t) {
        var n, r, i;
        for (n in t) r = c.call(e, n) ? e[n] : e[n] = {}, i = t[n], "canContainEols" === n || "transforms" === n ? e[n] = [].concat(r, i) : Object.assign(r, i)
      }
      e.exports = function(e) {
        for (var t = {
            transforms: [],
            canContainEols: []
          }, n = e.length, r = -1; ++r < n;) s(t, e[r]);
        return t
      }([r, i, u, o])
    },
    36309: (e, t, n) => {
      "use strict";
      var r = n(58649);
      e.exports = function(e, t) {
        var n = e[e.length - 1];
        return n && n[1].type === t ? r(n[2].sliceStream(n[1])) : 0
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
        u = n(28530),
        o = n(98345),
        c = n(79),
        s = n(42827),
        a = n(58344),
        l = n(26075),
        f = {
          name: "definition",
          tokenize: function(e, t, n) {
            var i, l = this;
            return function(t) {
              return e.enter("definition"), c.call(l, e, f, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t)
            };

            function f(t) {
              return i = u(l.sliceSerialize(l.events[l.events.length - 1][1]).slice(1, -1)), 58 === t ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), a(e, o(e, e.attempt(p, s(e, h, "whitespace"), s(e, h, "whitespace")), n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"))) : n(t)
            }

            function h(u) {
              return null === u || r(u) ? (e.exit("definition"), l.parser.defined.indexOf(i) < 0 && l.parser.defined.push(i), t(u)) : n(u)
            }
          }
        },
        p = {
          tokenize: function(e, t, n) {
            return function(t) {
              return i(t) ? a(e, u)(t) : n(t)
            };

            function u(t) {
              return 34 === t || 39 === t || 40 === t ? l(e, s(e, o, "whitespace"), n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t) : n(t)
            }

            function o(e) {
              return null === e || r(e) ? t(e) : n(e)
            }
          },
          partial: !0
        };
      e.exports = f
    },
    39471: (e, t, n) => {
      "use strict";
      var r = n(20766),
        i = n(15076),
        u = n(52861),
        o = n(30134),
        c = n(4970),
        s = function() {
          return s = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
          }, s.apply(this, arguments)
        };

      function a(e, t, n, r) {
        return new(n || (n = Promise))((function(i, u) {
          function o(e) {
            try {
              s(r.next(e))
            } catch (e) {
              u(e)
            }
          }

          function c(e) {
            try {
              s(r.throw(e))
            } catch (e) {
              u(e)
            }
          }

          function s(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
              e(t)
            }))).then(o, c)
          }
          s((r = r.apply(e, t || [])).next())
        }))
      }

      function l(e, t) {
        var n, r, i, u, o = {
          label: 0,
          sent: function() {
            if (1 & i[0]) throw i[1];
            return i[1]
          },
          trys: [],
          ops: []
        };
        return u = {
          next: c(0),
          throw: c(1),
          return: c(2)
        }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
          return this
        }), u;

        function c(c) {
          return function(s) {
            return function(c) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; u && (u = 0, c[0] && (o = 0)), o;) try {
                if (n = 1, r && (i = 2 & c[0] ? r.return : c[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, c[1])).done) return i;
                switch (r = 0, i && (c = [2 & c[0], i.value]), c[0]) {
                  case 0:
                  case 1:
                    i = c;
                    break;
                  case 4:
                    return o.label++, {
                      value: c[1],
                      done: !1
                    };
                  case 5:
                    o.label++, r = c[1], c = [0];
                    continue;
                  case 7:
                    c = o.ops.pop(), o.trys.pop();
                    continue;
                  default:
                    if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                      o = 0;
                      continue
                    }
                    if (3 === c[0] && (!i || c[1] > i[0] && c[1] < i[3])) {
                      o.label = c[1];
                      break
                    }
                    if (6 === c[0] && o.label < i[1]) {
                      o.label = i[1], i = c;
                      break
                    }
                    if (i && o.label < i[2]) {
                      o.label = i[2], o.ops.push(c);
                      break
                    }
                    i[2] && o.ops.pop(), o.trys.pop();
                    continue
                }
                c = t.call(e, o)
              } catch (e) {
                c = [6, e], r = 0
              } finally {
                n = i = 0
              }
              if (5 & c[0]) throw c[1];
              return {
                value: c[0] ? c[1] : void 0,
                done: !0
              }
            }([c, s])
          }
        }
      }
      "function" == typeof SuppressedError && SuppressedError;
      var f = new Map([
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
        p = function(e) {
          var t = f.get(e.type);
          switch (t) {
            case "heading":
              return "".concat(t, "-").concat(e.depth);
            case "list":
              return "".concat(e.ordered ? "ordered" : "unordered", "-list");
            default:
              return t
          }
        },
        h = new Map([
          ["emphasis", "italic"],
          ["strong", "bold"],
          ["inlineCode", "code"]
        ]),
        d = new Map([
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
          ["inlineCode", "text"]
        ]),
        m = function(e) {
          return "text" === d.get(e)
        },
        x = function(e) {
          return "inline" === d.get(e)
        },
        g = function(e, t, n) {
          return a(void 0, void 0, void 0, (function() {
            var i;
            return l(this, (function(u) {
              switch (u.label) {
                case 0:
                  return [4, E(e.children, t, n)];
                case 1:
                  return i = u.sent(), [2, [{
                    nodeType: r.INLINES.HYPERLINK,
                    data: {
                      uri: e.url
                    },
                    content: i
                  }]]
              }
            }))
          }))
        },
        v = function(e, t, n) {
          return a(void 0, void 0, void 0, (function() {
            var r, i;
            return l(this, (function(u) {
              switch (u.label) {
                case 0:
                  return r = p(e), [4, E(e.children, t, n)];
                case 1:
                  return i = u.sent(), [2, [{
                    nodeType: r,
                    content: i,
                    data: {}
                  }]]
              }
            }))
          }))
        },
        k = function(e, t, n) {
          return a(void 0, void 0, void 0, (function() {
            var i, u;
            return l(this, (function(o) {
              switch (o.label) {
                case 0:
                  return [4, E(e.children, t, n)];
                case 1:
                  return i = o.sent(), 0 === (u = i.reduce((function(e, t) {
                    if (m(t.nodeType) || x(t.nodeType)) {
                      var n = e[e.length - 1];
                      n && n.nodeType === r.BLOCKS.PARAGRAPH ? n.content.push(t) : e.push({
                        nodeType: r.BLOCKS.PARAGRAPH,
                        data: {},
                        content: [t]
                      })
                    } else e.push(t);
                    return e
                  }), [])).length && u.push({
                    nodeType: r.BLOCKS.PARAGRAPH,
                    data: {},
                    content: [{
                      nodeType: "text",
                      data: {},
                      marks: [],
                      value: ""
                    }]
                  }), [2, [{
                    nodeType: r.BLOCKS.TABLE_CELL,
                    content: u,
                    data: {}
                  }]]
              }
            }))
          }))
        },
        y = function(e, t, n) {
          return a(void 0, void 0, void 0, (function() {
            var r, i, u;
            return l(this, (function(o) {
              switch (o.label) {
                case 0:
                  return r = p(e), i = function(e) {
                    return h.get(e.type)
                  }(e), u = Array.from(n), i && u.push(i), "text" !== e.type && e.children ? [4, E(e.children, t, u)] : [3, 2];
                case 1:
                  return [2, o.sent()];
                case 2:
                  return e.value ? [2, [{
                    nodeType: r,
                    value: e.value,
                    marks: u.map((function(e) {
                      return {
                        type: e
                      }
                    })),
                    data: {}
                  }]] : [2]
              }
            }))
          }))
        },
        b = function(e, t) {
          return a(void 0, void 0, void 0, (function() {
            var n;
            return l(this, (function(r) {
              switch (r.label) {
                case 0:
                  return [4, t(e)];
                case 1:
                  return n = r.sent(), i.isArray(n) ? [2, n] : [2, [n]]
              }
            }))
          }))
        };

      function E(e, t) {
        return a(this, arguments, void 0, (function(e, t, n) {
          var u;
          return void 0 === n && (n = []), l(this, (function(o) {
            switch (o.label) {
              case 0:
                return e ? [4, Promise.all(e.map((function(e) {
                  return function(e, t) {
                    return a(this, arguments, void 0, (function(e, t, n) {
                      var i;
                      return void 0 === n && (n = []), l(this, (function(u) {
                        switch (u.label) {
                          case 0:
                            return "html" === e.type && /<br\s?\/?>/gi.test(e.value) && (e.value = "\n", e.type = "text"), i = p(e),
                              function(e) {
                                return "link" === e.type
                              }(e) ? [4, g(e, t, n)] : [3, 2];
                          case 1:
                          case 3:
                          case 5:
                          case 7:
                          case 9:
                            return [2, u.sent()];
                          case 2:
                            return function(e) {
                              return e === r.BLOCKS.TABLE_CELL
                            }(i) ? [4, k(e, t, n)] : [3, 4];
                          case 4:
                            return function(e) {
                              return "block" === d.get(e)
                            }(i) || x(i) ? [4, v(e, t, n)] : [3, 6];
                          case 6:
                            return m(i) ? [4, y(e, t, n)] : [3, 8];
                          case 8:
                            return [4, b(e, t)]
                        }
                      }))
                    }))
                  }(e, t, n)
                })))] : [2, Promise.resolve([])];
              case 1:
                return u = o.sent(), [2, i.flatten(u).filter(Boolean)]
            }
          }))
        }))
      }
      var S = function(e, t) {
        return a(void 0, void 0, void 0, (function() {
          var n;
          return l(this, (function(i) {
            switch (i.label) {
              case 0:
                return [4, E(e.children, t)];
              case 1:
                return n = i.sent(), [2, {
                  nodeType: r.BLOCKS.DOCUMENT,
                  data: {},
                  content: n
                }]
            }
          }))
        }))
      };
      t.V = function(e) {
        return a(this, arguments, void 0, (function(e, t) {
          var n, r, a;
          return void 0 === t && (t = function() {
            return Promise.resolve(null)
          }), l(this, (function(l) {
            switch (l.label) {
              case 0:
                return n = c().use(o).use(u), r = n.parse(e), a = function(e) {
                  return function e(t) {
                    if (!t.children) return t;
                    var n = i.flatMap(t.children, (function(e) {
                      return function(e) {
                        if ("paragraph" !== e.type) return [e];
                        for (var t = [], n = 0; n < e.children.length; n++) "image" === e.children[n].type && t.push(n);
                        if (0 === t.length) return [e];
                        for (var r = [], i = -1, u = 0; u < t.length; u++) {
                          var o = t[u];
                          if (0 !== o) {
                            var c = e.children.slice(i + 1, o);
                            c.length > 0 && r.push(s(s({}, e), {
                              children: c
                            }))
                          }
                          var a = e.children[o];
                          r.push(a);
                          var l = [],
                            f = u + 1 < t.length ? t[u + 1] : e.children.length;
                          o + 1 < f && o === t.slice(-1)[0] && (l = e.children.slice(o + 1, f)).length > 0 && r.push(s(s({}, e), {
                            children: l
                          })), i = o
                        }
                        return r
                      }(e)
                    })).map((function(t) {
                      return e(t)
                    }));
                    return s(s({}, t), {
                      children: n
                    })
                  }({
                    depth: "0",
                    type: "root",
                    value: "",
                    ordered: !0,
                    children: e.children
                  })
                }(r), [4, S(a, t)];
              case 1:
                return [2, l.sent()]
            }
          }))
        }))
      }
    },
    40965: (e, t, n) => {
      "use strict";
      var r = n(30037),
        i = n(95094),
        u = n(43489);
      e.exports = s;
      var o = {}.hasOwnProperty,
        c = ["history", "path", "basename", "stem", "extname", "dirname"];

      function s(e) {
        var t, n;
        if (e) {
          if ("string" == typeof e || u(e)) e = {
            contents: e
          };
          else if ("message" in e && "messages" in e) return e
        } else e = {};
        if (!(this instanceof s)) return new s(e);
        for (this.data = {}, this.messages = [], this.history = [], this.cwd = i.cwd(), n = -1; ++n < c.length;) t = c[n], o.call(e, t) && (this[t] = e[t]);
        for (t in e) c.indexOf(t) < 0 && (this[t] = e[t])
      }

      function a(e, t) {
        if (e && e.indexOf(r.sep) > -1) throw new Error("`" + t + "` cannot be a path: did not expect `" + r.sep + "`")
      }

      function l(e, t) {
        if (!e) throw new Error("`" + t + "` cannot be empty")
      }

      function f(e, t) {
        if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too")
      }
      s.prototype.toString = function(e) {
        return (this.contents || "").toString(e)
      }, Object.defineProperty(s.prototype, "path", {
        get: function() {
          return this.history[this.history.length - 1]
        },
        set: function(e) {
          l(e, "path"), this.path !== e && this.history.push(e)
        }
      }), Object.defineProperty(s.prototype, "dirname", {
        get: function() {
          return "string" == typeof this.path ? r.dirname(this.path) : void 0
        },
        set: function(e) {
          f(this.path, "dirname"), this.path = r.join(e || "", this.basename)
        }
      }), Object.defineProperty(s.prototype, "basename", {
        get: function() {
          return "string" == typeof this.path ? r.basename(this.path) : void 0
        },
        set: function(e) {
          l(e, "basename"), a(e, "basename"), this.path = r.join(this.dirname || "", e)
        }
      }), Object.defineProperty(s.prototype, "extname", {
        get: function() {
          return "string" == typeof this.path ? r.extname(this.path) : void 0
        },
        set: function(e) {
          if (a(e, "extname"), f(this.path, "extname"), e) {
            if (46 !== e.charCodeAt(0)) throw new Error("`extname` must start with `.`");
            if (e.indexOf(".", 1) > -1) throw new Error("`extname` cannot contain multiple dots")
          }
          this.path = r.join(this.dirname, this.stem + (e || ""))
        }
      }), Object.defineProperty(s.prototype, "stem", {
        get: function() {
          return "string" == typeof this.path ? r.basename(this.path, this.extname) : void 0
        },
        set: function(e) {
          l(e, "stem"), a(e, "stem"), this.path = r.join(this.dirname || "", e + (this.extname || ""))
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
        var t, n = e.attempt(this.parser.constructs.contentInitial, (function(t) {
          if (null !== t) return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i(e, n, "linePrefix");
          e.consume(t)
        }), (function(t) {
          return e.enter("paragraph"), u(t)
        }));
        return n;

        function u(n) {
          var r = e.enter("chunkText", {
            contentType: "text",
            previous: t
          });
          return t && (t.next = r), t = r, o(n)
        }

        function o(t) {
          return null === t ? (e.exit("chunkText"), e.exit("paragraph"), void e.consume(t)) : r(t) ? (e.consume(t), e.exit("chunkText"), u) : (e.consume(t), o)
        }
      }
    },
    42639: e => {
      e.exports = function(e, n) {
        for (var r, i = [], u = 0, o = 0; r = t.exec(e);) c(e.slice(u, r.index)), i.push(r[0]), u = r.index + r[0].length, o++;
        return c(e.slice(u)), i.join("");

        function c(e) {
          i.push(n(e, o, !e))
        }
      };
      var t = /\r?\n|\r/g
    },
    42827: (e, t, n) => {
      "use strict";
      var r = n(52734);
      e.exports = function(e, t, n, i) {
        var u = i ? i - 1 : 1 / 0,
          o = 0;
        return function(i) {
          return r(i) ? (e.enter(n), c(i)) : t(i)
        };

        function c(i) {
          return r(i) && o++ < u ? (e.consume(i), c) : (e.exit(n), t(i))
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
        u = n(42827),
        o = {
          name: "thematicBreak",
          tokenize: function(e, t, n) {
            var o, c = 0;
            return function(t) {
              return e.enter("thematicBreak"), o = t, s(t)
            };

            function s(l) {
              return l === o ? (e.enter("thematicBreakSequence"), a(l)) : i(l) ? u(e, s, "whitespace")(l) : c < 3 || null !== l && !r(l) ? n(l) : (e.exit("thematicBreak"), t(l))
            }

            function a(t) {
              return t === o ? (e.consume(t), c++, a) : (e.exit("thematicBreakSequence"), s(t))
            }
          }
        };
      e.exports = o
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
        u = n(36309),
        o = n(42827),
        c = {
          name: "codeIndented",
          tokenize: function(e, t, n) {
            return e.attempt(s, i, n);

            function i(n) {
              return null === n ? t(n) : r(n) ? e.attempt(s, i, t)(n) : (e.enter("codeFlowValue"), u(n))
            }

            function u(t) {
              return null === t || r(t) ? (e.exit("codeFlowValue"), i(t)) : (e.consume(t), u)
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
        s = {
          tokenize: function(e, t, n) {
            var i = this;
            return o(e, (function c(s) {
              return r(s) ? (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), o(e, c, "linePrefix", 5)) : u(i.events, "linePrefix") < 4 ? n(s) : t(s)
            }), "linePrefix", 5)
          },
          partial: !0
        };
      e.exports = c
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
        u = n(87126),
        o = n(85409),
        c = n(52734),
        s = n(44808),
        a = n(83771),
        l = n(25624),
        f = n(13067),
        p = {
          name: "htmlFlow",
          tokenize: function(e, t, n) {
            var f, p, d, m, x, g = this;
            return function(t) {
              return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), v
            };

            function v(i) {
              return 33 === i ? (e.consume(i), k) : 47 === i ? (e.consume(i), E) : 63 === i ? (e.consume(i), f = 3, g.interrupt ? t : K) : r(i) ? (e.consume(i), d = s(i), p = !0, S) : n(i)
            }

            function k(i) {
              return 45 === i ? (e.consume(i), f = 2, y) : 91 === i ? (e.consume(i), f = 5, d = "CDATA[", m = 0, b) : r(i) ? (e.consume(i), f = 4, g.interrupt ? t : K) : n(i)
            }

            function y(r) {
              return 45 === r ? (e.consume(r), g.interrupt ? t : K) : n(r)
            }

            function b(r) {
              return r === d.charCodeAt(m++) ? (e.consume(r), m === d.length ? g.interrupt ? t : P : b) : n(r)
            }

            function E(t) {
              return r(t) ? (e.consume(t), d = s(t), S) : n(t)
            }

            function S(r) {
              return null === r || 47 === r || 62 === r || o(r) ? 47 !== r && p && l.indexOf(d.toLowerCase()) > -1 ? (f = 1, g.interrupt ? t(r) : P(r)) : a.indexOf(d.toLowerCase()) > -1 ? (f = 6, 47 === r ? (e.consume(r), C) : g.interrupt ? t(r) : P(r)) : (f = 7, g.interrupt ? n(r) : p ? A(r) : w(r)) : 45 === r || i(r) ? (e.consume(r), d += s(r), S) : n(r)
            }

            function C(r) {
              return 62 === r ? (e.consume(r), g.interrupt ? t : P) : n(r)
            }

            function w(t) {
              return c(t) ? (e.consume(t), w) : D(t)
            }

            function A(t) {
              return 47 === t ? (e.consume(t), D) : 58 === t || 95 === t || r(t) ? (e.consume(t), T) : c(t) ? (e.consume(t), A) : D(t)
            }

            function T(t) {
              return 45 === t || 46 === t || 58 === t || 95 === t || i(t) ? (e.consume(t), T) : F(t)
            }

            function F(t) {
              return 61 === t ? (e.consume(t), L) : c(t) ? (e.consume(t), F) : A(t)
            }

            function L(t) {
              return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), x = t, I) : c(t) ? (e.consume(t), L) : (x = void 0, O(t))
            }

            function I(t) {
              return t === x ? (e.consume(t), _) : null === t || u(t) ? n(t) : (e.consume(t), I)
            }

            function O(t) {
              return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 62 === t || 96 === t || o(t) ? F(t) : (e.consume(t), O)
            }

            function _(e) {
              return 47 === e || 62 === e || c(e) ? A(e) : n(e)
            }

            function D(t) {
              return 62 === t ? (e.consume(t), B) : n(t)
            }

            function B(t) {
              return c(t) ? (e.consume(t), B) : null === t || u(t) ? P(t) : n(t)
            }

            function P(t) {
              return 45 === t && 2 === f ? (e.consume(t), M) : 60 === t && 1 === f ? (e.consume(t), H) : 62 === t && 4 === f ? (e.consume(t), q) : 63 === t && 3 === f ? (e.consume(t), K) : 93 === t && 5 === f ? (e.consume(t), j) : !u(t) || 6 !== f && 7 !== f ? null === t || u(t) ? R(t) : (e.consume(t), P) : e.check(h, q, R)(t)
            }

            function R(t) {
              return e.exit("htmlFlowData"), z(t)
            }

            function z(t) {
              return null === t ? Q(t) : u(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), z) : (e.enter("htmlFlowData"), P(t))
            }

            function M(t) {
              return 45 === t ? (e.consume(t), K) : P(t)
            }

            function H(t) {
              return 47 === t ? (e.consume(t), d = "", N) : P(t)
            }

            function N(t) {
              return 62 === t && l.indexOf(d.toLowerCase()) > -1 ? (e.consume(t), q) : r(t) && d.length < 8 ? (e.consume(t), d += s(t), N) : P(t)
            }

            function j(t) {
              return 93 === t ? (e.consume(t), K) : P(t)
            }

            function K(t) {
              return 62 === t ? (e.consume(t), q) : P(t)
            }

            function q(t) {
              return null === t || u(t) ? (e.exit("htmlFlowData"), Q(t)) : (e.consume(t), q)
            }

            function Q(n) {
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
        u = n(36185),
        o = n(34498);
      e.exports = function(e) {
        var t = this.data();

        function n(e, n) {
          t[e] ? t[e].push(n) : t[e] = [n]
        }!r && (this.Parser && this.Parser.prototype && this.Parser.prototype.blockTokenizers || this.Compiler && this.Compiler.prototype && this.Compiler.prototype.visitors) && (r = !0, console.warn("[remark-gfm] Warning: please upgrade to remark 13 to use this plugin")), n("micromarkExtensions", i(e)), n("fromMarkdownExtensions", u), n("toMarkdownExtensions", o(e))
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
            return 91 === t ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), u) : n(t)
          }

          function u(e) {
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
        u = n(42827);
      e.exports = function(e, t) {
        var n;
        return function o(c) {
          return r(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), n = !0, o) : i(c) ? u(e, o, n ? "linePrefix" : "lineSuffix")(c) : t(c)
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
        u = n(87126),
        o = n(85409),
        c = n(52734),
        s = n(42827),
        a = {
          name: "htmlText",
          tokenize: function(e, t, n) {
            var a, l, f, p, h = this;
            return function(t) {
              return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), d
            };

            function d(t) {
              return 33 === t ? (e.consume(t), m) : 47 === t ? (e.consume(t), F) : 63 === t ? (e.consume(t), A) : r(t) ? (e.consume(t), O) : n(t)
            }

            function m(t) {
              return 45 === t ? (e.consume(t), x) : 91 === t ? (e.consume(t), l = "CDATA[", f = 0, b) : r(t) ? (e.consume(t), w) : n(t)
            }

            function x(t) {
              return 45 === t ? (e.consume(t), g) : n(t)
            }

            function g(t) {
              return null === t || 62 === t ? n(t) : 45 === t ? (e.consume(t), v) : k(t)
            }

            function v(e) {
              return null === e || 62 === e ? n(e) : k(e)
            }

            function k(t) {
              return null === t ? n(t) : 45 === t ? (e.consume(t), y) : u(t) ? (p = k, H(t)) : (e.consume(t), k)
            }

            function y(t) {
              return 45 === t ? (e.consume(t), j) : k(t)
            }

            function b(t) {
              return t === l.charCodeAt(f++) ? (e.consume(t), f === l.length ? E : b) : n(t)
            }

            function E(t) {
              return null === t ? n(t) : 93 === t ? (e.consume(t), S) : u(t) ? (p = E, H(t)) : (e.consume(t), E)
            }

            function S(t) {
              return 93 === t ? (e.consume(t), C) : E(t)
            }

            function C(t) {
              return 62 === t ? j(t) : 93 === t ? (e.consume(t), C) : E(t)
            }

            function w(t) {
              return null === t || 62 === t ? j(t) : u(t) ? (p = w, H(t)) : (e.consume(t), w)
            }

            function A(t) {
              return null === t ? n(t) : 63 === t ? (e.consume(t), T) : u(t) ? (p = A, H(t)) : (e.consume(t), A)
            }

            function T(e) {
              return 62 === e ? j(e) : A(e)
            }

            function F(t) {
              return r(t) ? (e.consume(t), L) : n(t)
            }

            function L(t) {
              return 45 === t || i(t) ? (e.consume(t), L) : I(t)
            }

            function I(t) {
              return u(t) ? (p = I, H(t)) : c(t) ? (e.consume(t), I) : j(t)
            }

            function O(t) {
              return 45 === t || i(t) ? (e.consume(t), O) : 47 === t || 62 === t || o(t) ? _(t) : n(t)
            }

            function _(t) {
              return 47 === t ? (e.consume(t), j) : 58 === t || 95 === t || r(t) ? (e.consume(t), D) : u(t) ? (p = _, H(t)) : c(t) ? (e.consume(t), _) : j(t)
            }

            function D(t) {
              return 45 === t || 46 === t || 58 === t || 95 === t || i(t) ? (e.consume(t), D) : B(t)
            }

            function B(t) {
              return 61 === t ? (e.consume(t), P) : u(t) ? (p = B, H(t)) : c(t) ? (e.consume(t), B) : _(t)
            }

            function P(t) {
              return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), a = t, R) : u(t) ? (p = P, H(t)) : c(t) ? (e.consume(t), P) : (e.consume(t), a = void 0, M)
            }

            function R(t) {
              return t === a ? (e.consume(t), z) : null === t ? n(t) : u(t) ? (p = R, H(t)) : (e.consume(t), R)
            }

            function z(e) {
              return 62 === e || 47 === e || o(e) ? _(e) : n(e)
            }

            function M(t) {
              return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t ? n(t) : 62 === t || o(t) ? _(t) : (e.consume(t), M)
            }

            function H(t) {
              return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), s(e, N, "linePrefix", h.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
            }

            function N(t) {
              return e.enter("htmlTextData"), p(t)
            }

            function j(r) {
              return 62 === r ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r)
            }
          }
        };
      e.exports = a
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
        u = n(35588),
        o = n(21429),
        c = n(57308),
        s = n(7569),
        a = n(86570),
        l = n(15492),
        f = n(74197);

      function p(e) {
        var t = Object.create(null),
          n = Object.create(null);
        return (0, s.E)(e) && e.forEach((function(e) {
          var r;
          t[e.message] = e, "string" == typeof(null === (r = e.extensions) || void 0 === r ? void 0 : r.code) && (n[e.extensions.code] = e)
        })), {
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
          }(0, i.V1)(e && ("function" == typeof e.sha256 || "function" == typeof e.generateHash), 43);
          var d = (0, a.o)(h, e),
            m = d.sha256,
            x = d.generateHash,
            g = void 0 === x ? function(e) {
              return Promise.resolve(m((0, u.y)(e)))
            } : x,
            v = d.disable,
            k = d.retry,
            y = d.useGETForHashedQueries,
            b = !0,
            E = function(e) {
              return new Promise((function(t) {
                return t(g(e))
              }))
            };
          return Object.assign(new o.C((function(e, u) {
            (0, i.V1)(u, 44);
            var o = e.query;
            return new c.c((function(i) {
              var c, a, h = !1,
                d = !1,
                m = function(t, r) {
                  var i = t.response,
                    o = t.networkError;
                  if (!h && (i && i.errors || o)) {
                    h = !0;
                    var l = [],
                      f = i && i.errors;
                    (0, s.E)(f) && l.push.apply(l, f);
                    var m = void 0;
                    "string" != typeof(null == o ? void 0 : o.result) && (m = o && o.result && o.result.errors), (0, s.E)(m) && l.push.apply(l, m);
                    var g = {
                      response: i,
                      networkError: o,
                      operation: e,
                      graphQLErrors: (0, s.E)(l) ? l : void 0,
                      meta: p(l)
                    };
                    if ((b = !v(g)) || n(), k(g)) return c && c.unsubscribe(), e.setContext({
                      http: {
                        includeQuery: !0,
                        includeExtensions: b
                      },
                      fetchOptions: {
                        method: "POST"
                      }
                    }), d && e.setContext({
                      fetchOptions: a
                    }), void(c = u(e).subscribe(x))
                  }
                  r()
                },
                x = {
                  next: function(e) {
                    m({
                      response: e
                    }, (function() {
                      return i.next(e)
                    }))
                  },
                  error: function(e) {
                    m({
                      networkError: e
                    }, (function() {
                      return i.error(e)
                    }))
                  },
                  complete: i.complete.bind(i)
                };
              return e.setContext({
                  http: {
                    includeQuery: !b,
                    includeExtensions: b
                  }
                }), y && b && ! function(e) {
                  return e.query.definitions.some((function(e) {
                    return "OperationDefinition" === e.kind && "mutation" === e.operation
                  }))
                }(e) && (e.setContext((function(e) {
                  var t = e.fetchOptions,
                    n = void 0 === t ? {} : t;
                  return a = n, {
                    fetchOptions: (0, r.__assign)((0, r.__assign)({}, n), {
                      method: "GET"
                    })
                  }
                })), d = !0), b ? function(e) {
                  if (!e || "object" != typeof e) return E(e);
                  t || (t = new l.A(f.v["PersistedQueryLink.persistedQueryHashes"] || 2e3));
                  var n = t.get(e);
                  return n || t.set(e, n = E(e)), n
                }(o).then((function(t) {
                  e.extensions.persistedQuery = {
                    version: 1,
                    sha256Hash: t
                  }, c = u(e).subscribe(x)
                })).catch(i.error.bind(i)) : c = u(e).subscribe(x),
                function() {
                  c && c.unsubscribe()
                }
            }))
          })), {
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
        u = n(18577),
        o = n(11730),
        c = n(14001),
        s = n(64999),
        a = n(99079),
        l = n(71982);
      e.exports = function(e) {
        var t = {
          defined: [],
          constructs: c([l].concat(a((e || {}).extensions))),
          content: n(r),
          document: n(i),
          flow: n(u),
          string: n(o.string),
          text: n(o.text)
        };
        return t;

        function n(e) {
          return function(n) {
            return s(t, e, n)
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
          var n, o = t.call(arguments, 0),
            c = e.length > o.length;
          c && o.push(i);
          try {
            n = e.apply(null, o)
          } catch (e) {
            if (c && r) throw e;
            return i(e)
          }
          c || (n && "function" == typeof n.then ? n.then(u, i) : n instanceof Error ? i(n) : u(n))
        };

        function i() {
          r || (r = !0, n.apply(null, arguments))
        }

        function u(e) {
          i(null, e)
        }
      }
    },
    64144: (e, t, n) => {
      var r = n(33331);

      function i(e, t, n) {
        var i = n.enter("emphasis"),
          u = r(e, n, {
            before: "~",
            after: "~"
          });
        return i(), "~~" + u + "~~"
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
        for (var n, i = e.children || [], u = [], o = -1; ++o < i.length;) n = i[o], u.push(t.handle(n, e, t, {
          before: "\n",
          after: "\n"
        })), o + 1 < i.length && u.push(c(n, i[o + 1]));
        return u.join("");

        function c(n, i) {
          for (var u, o = -1; ++o < t.join.length && !0 !== (u = t.join[o](n, i, e, t)) && 1 !== u;) {
            if ("number" == typeof u) return r("\n", 1 + Number(u));
            if (!1 === u) return "\n\n\x3c!----\x3e\n\n"
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
        var u, o = e.length,
          c = 0;
        if (t = t < 0 ? -t > o ? 0 : o + t : t > o ? o : t, n = n > 0 ? n : 0, i.length < 1e4)(u = Array.from(i)).unshift(t, n), r.apply(e, u);
        else
          for (n && r.apply(e, [t, n]); c < i.length;)(u = i.slice(c, c + 1e4)).unshift(t, 0), r.apply(e, u), c += 1e4, t += 1e4
      }
    },
    64999: (e, t, n) => {
      "use strict";
      var r = n(25058),
        i = n(87126),
        u = n(62932),
        o = n(64936),
        c = n(99079),
        s = n(9345),
        a = n(93236),
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
          x = [],
          g = {
            consume: function(e) {
              i(e) ? (p.line++, p.column = 1, p.offset += -3 === e ? 2 : 1, A()) : -1 !== e && (p.column++, p.offset++), p._bufferIndex < 0 ? p._index++ : (p._bufferIndex++, p._bufferIndex === m[p._index].length && (p._bufferIndex = -1, p._index++)), v.previous = e
            },
            enter: function(e, t) {
              var n = t || {};
              return n.type = e, n.start = b(), v.events.push(["enter", n, v]), x.push(n), n
            },
            exit: function(e) {
              var t = x.pop();
              return t.end = b(), v.events.push(["exit", t, v]), t
            },
            attempt: C((function(e, t) {
              w(e, t.from)
            })),
            check: C(S),
            interrupt: C(S, {
              interrupt: !0
            }),
            lazy: C(S, {
              lazy: !0
            })
          },
          v = {
            previous: null,
            events: [],
            parser: e,
            sliceStream: y,
            sliceSerialize: function(e) {
              return a(y(e))
            },
            now: b,
            defineSkip: function(e) {
              h[e.line] = e.column, A()
            },
            write: function(e) {
              return m = u(m, e),
                function() {
                  for (var e, t; p._index < m.length;)
                    if ("string" == typeof(t = m[p._index]))
                      for (e = p._index, p._bufferIndex < 0 && (p._bufferIndex = 0); p._index === e && p._bufferIndex < t.length;) E(t.charCodeAt(p._bufferIndex));
                    else E(t)
                }(), null !== m[m.length - 1] ? [] : (w(t, 0), v.events = s(d, v.events, v), v.events)
            }
          },
          k = t.tokenize.call(v, g);
        return t.resolveAll && d.push(t), p._index = 0, p._bufferIndex = -1, v;

        function y(e) {
          return f(m, e)
        }

        function b() {
          return l(p)
        }

        function E(e) {
          k = k(e)
        }

        function S(e, t) {
          t.restore()
        }

        function C(e, t) {
          return function(n, i, u) {
            var o, s, a, l;
            return n.tokenize || "length" in n ? f(c(n)) : function(e) {
              return e in n || null in n ? f(n.null ? c(n[e]).concat(c(n.null)) : n[e])(e) : u(e)
            };

            function f(e) {
              return o = e, h(e[s = 0])
            }

            function h(e) {
              return function(n) {
                var i, u, o, c, s;
                return i = b(), u = v.previous, o = v.currentConstruct, c = v.events.length, s = Array.from(x), l = {
                  restore: function() {
                    p = i, v.previous = u, v.currentConstruct = o, v.events.length = c, x = s, A()
                  },
                  from: c
                }, a = e, e.partial || (v.currentConstruct = e), e.name && v.parser.constructs.disable.null.indexOf(e.name) > -1 ? m() : e.tokenize.call(t ? r({}, v, t) : v, g, d, m)(n)
              }
            }

            function d(t) {
              return e(a, l), i
            }

            function m(e) {
              return l.restore(), ++s < o.length ? h(o[s]) : u
            }
          }
        }

        function w(e, t) {
          e.resolveAll && d.indexOf(e) < 0 && d.push(e), e.resolve && o(v.events, t, v.events.length - t, e.resolve(v.events.slice(t), v)), e.resolveTo && (v.events = e.resolveTo(v.events, v))
        }

        function A() {
          p.line in h && p.column < 2 && (p.column = h[p.line], p.offset += h[p.line] - 1)
        }
      }
    },
    65342: (e, t, n) => {
      e.exports = function(e) {
        var t = (e || {}).singleTilde,
          n = {
            tokenize: function(e, n, i) {
              var u = this.previous,
                o = this.events,
                c = 0;
              return function(t) {
                return 126 !== t || 126 === u && "characterEscape" !== o[o.length - 1][1].type ? i(t) : (e.enter("strikethroughSequenceTemporary"), s(t))
              };

              function s(o) {
                var a, l, f = r(u);
                return 126 === o ? c > 1 ? i(o) : (e.consume(o), c++, s) : c < 2 && !t ? i(o) : (a = e.exit("strikethroughSequenceTemporary"), l = r(o), a._open = !l || 2 === l && f, a._close = !f || 2 === f && l, n(o))
              }
            },
            resolveAll: function(e, t) {
              for (var n, r, c, s, a = -1; ++a < e.length;)
                if ("enter" === e[a][0] && "strikethroughSequenceTemporary" === e[a][1].type && e[a][1]._close)
                  for (c = a; c--;)
                    if ("exit" === e[c][0] && "strikethroughSequenceTemporary" === e[c][1].type && e[c][1]._open && e[a][1].end.offset - e[a][1].start.offset == e[c][1].end.offset - e[c][1].start.offset) {
                      e[a][1].type = "strikethroughSequence", e[c][1].type = "strikethroughSequence", n = {
                        type: "strikethrough",
                        start: o(e[c][1].start),
                        end: o(e[a][1].end)
                      }, r = {
                        type: "strikethroughText",
                        start: o(e[c][1].end),
                        end: o(e[a][1].start)
                      }, s = [
                        ["enter", n, t],
                        ["enter", e[c][1], t],
                        ["exit", e[c][1], t],
                        ["enter", r, t]
                      ], i(s, s.length, 0, u(t.parser.constructs.insideSpan.null, e.slice(c + 1, a), t)), i(s, s.length, 0, [
                        ["exit", r, t],
                        ["enter", e[a][1], t],
                        ["exit", e[a][1], t],
                        ["exit", n, t]
                      ]), i(e, c - 1, a - c + 3, s), a = c + s.length - 2;
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
        u = n(9345),
        o = n(46315)
    },
    66751: e => {
      "use strict";
      e.exports = e => {
        if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
        const t = Object.getPrototypeOf(e);
        return null === t || t === Object.prototype
      }
    },
    68940: (e, t, n) => {
      "use strict";
      var r = n(28375);
      e.exports = function(e, t) {
        for (var n, l, f, p, h, k, y, b, E, S, C, w, A = t || {}, T = !1 !== A.padding, F = !1 !== A.delimiterStart, L = !1 !== A.delimiterEnd, I = (A.align || []).concat(), O = !1 !== A.alignDelimiters, _ = [], D = A.stringLength || g, B = -1, P = e.length, R = [], z = [], M = [], H = [], N = [], j = 0; ++B < P;) {
          for (l = -1, M = [], H = [], (f = (n = e[B]).length) > j && (j = f); ++l < f;) k = null == (w = n[l]) ? "" : String(w), !0 === O && (h = D(k), H[l] = h, (void 0 === (p = N[l]) || h > p) && (N[l] = h)), M.push(k);
          R[B] = M, z[B] = H
        }
        if (l = -1, f = j, "object" == typeof I && "length" in I)
          for (; ++l < f;) _[l] = v(I[l]);
        else
          for (C = v(I); ++l < f;) _[l] = C;
        for (l = -1, f = j, M = [], H = []; ++l < f;) E = "", S = "", (C = _[l]) === m ? E = s : C === x ? S = s : C === d && (E = s, S = s), h = O ? Math.max(1, N[l] - E.length - S.length) : 1, k = E + r(c, h) + S, !0 === O && ((h = E.length + h + S.length) > N[l] && (N[l] = h), H[l] = h), M[l] = k;
        for (R.splice(1, 0, M), z.splice(1, 0, H), B = -1, P = R.length, y = []; ++B < P;) {
          for (M = R[B], H = z[B], l = -1, f = j, b = []; ++l < f;) k = M[l] || "", E = "", S = "", !0 === O && (h = N[l] - (H[l] || 0), (C = _[l]) === x ? E = r(u, h) : C === d ? h % 2 == 0 ? S = E = r(u, h / 2) : (E = r(u, h / 2 + .5), S = r(u, h / 2 - .5)) : S = r(u, h)), !0 === F && 0 === l && b.push(a), !0 !== T || !1 === O && "" === k || !0 !== F && 0 === l || b.push(u), !0 === O && b.push(E), b.push(k), !0 === O && b.push(S), !0 === T && b.push(u), !0 !== L && l === f - 1 || b.push(a);
          b = b.join(""), !1 === L && (b = b.replace(i, "")), y.push(b)
        }
        return y.join(o)
      };
      var i = / +$/,
        u = " ",
        o = "\n",
        c = "-",
        s = ":",
        a = "|",
        l = 0,
        f = 67,
        p = 76,
        h = 82,
        d = 99,
        m = 108,
        x = 114;

      function g(e) {
        return e.length
      }

      function v(e) {
        var t = "string" == typeof e ? e.charCodeAt(0) : l;
        return t === p || t === m ? m : t === h || t === x ? x : t === f || t === d ? d : l
      }
    },
    71982: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = n(11730),
        i = n(31584),
        u = n(19059),
        o = n(23074),
        c = n(2277),
        s = n(20113),
        a = n(84141),
        l = n(46377),
        f = n(96290),
        p = n(39077),
        h = n(92319),
        d = n(86318),
        m = n(47598),
        x = n(61849),
        g = n(7992),
        v = n(58233),
        k = n(87806),
        y = n(15768),
        b = n(95996),
        E = n(85062),
        S = n(43861),
        C = {
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
          62: o
        },
        w = {
          91: p
        },
        A = {
          "-2": l,
          "-1": l,
          32: l
        },
        T = {
          35: d,
          42: S,
          45: [E, S],
          60: m,
          61: E,
          95: S,
          96: a,
          126: a
        },
        F = {
          38: s,
          92: c
        },
        L = {
          "-5": y,
          "-4": y,
          "-3": y,
          33: v,
          38: s,
          42: i,
          60: [u, x],
          91: k,
          92: [h, c],
          93: g,
          95: i,
          96: f
        },
        I = {
          null: [i, r.resolver]
        };
      t.contentInitial = w, t.disable = {
        null: []
      }, t.document = C, t.flow = T, t.flowInitial = A, t.insideSpan = I, t.string = F, t.text = L
    },
    74313: (e, t, n) => {
      "use strict";
      var r, i, u = n(62229),
        o = n(20766),
        c = function() {
          return c = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
          }, c.apply(this, arguments)
        };

      function s(e, t) {
        var n = t.renderNode,
          r = t.renderMark,
          i = t.renderText,
          c = t.preserveWhitespace;
        if (o.helpers.isText(e)) {
          var a = i ? i(e.value) : e.value;
          if (c && !i) {
            var l = (a = a.replace(/ {2,}/g, (function(e) {
                return " ".repeat(e.length)
              }))).split("\n"),
              f = [];
            l.forEach((function(e, t) {
              f.push(e), t !== l.length - 1 && f.push(u.createElement("br", null))
            })), a = f
          }
          return e.marks.reduce((function(e, t) {
            return r[t.type] ? r[t.type](e) : e
          }), a)
        }
        var p = function(e, t) {
          return e.map((function(e, n) {
            return r = s(e, t), i = n, u.isValidElement(r) && null === r.key ? u.cloneElement(r, {
              key: i
            }) : r;
            var r, i
          }))
        }(e.content, t);
        return e.nodeType && n[e.nodeType] ? n[e.nodeType](e, p) : u.createElement(u.Fragment, null, p)
      }
      "function" == typeof SuppressedError && SuppressedError;
      var a = ((r = {})[o.BLOCKS.DOCUMENT] = function(e, t) {
          return t
        }, r[o.BLOCKS.PARAGRAPH] = function(e, t) {
          return u.createElement("p", null, t)
        }, r[o.BLOCKS.HEADING_1] = function(e, t) {
          return u.createElement("h1", null, t)
        }, r[o.BLOCKS.HEADING_2] = function(e, t) {
          return u.createElement("h2", null, t)
        }, r[o.BLOCKS.HEADING_3] = function(e, t) {
          return u.createElement("h3", null, t)
        }, r[o.BLOCKS.HEADING_4] = function(e, t) {
          return u.createElement("h4", null, t)
        }, r[o.BLOCKS.HEADING_5] = function(e, t) {
          return u.createElement("h5", null, t)
        }, r[o.BLOCKS.HEADING_6] = function(e, t) {
          return u.createElement("h6", null, t)
        }, r[o.BLOCKS.EMBEDDED_ENTRY] = function(e, t) {
          return u.createElement("div", null, t)
        }, r[o.BLOCKS.EMBEDDED_RESOURCE] = function(e, t) {
          return u.createElement("div", null, t)
        }, r[o.BLOCKS.UL_LIST] = function(e, t) {
          return u.createElement("ul", null, t)
        }, r[o.BLOCKS.OL_LIST] = function(e, t) {
          return u.createElement("ol", null, t)
        }, r[o.BLOCKS.LIST_ITEM] = function(e, t) {
          return u.createElement("li", null, t)
        }, r[o.BLOCKS.QUOTE] = function(e, t) {
          return u.createElement("blockquote", null, t)
        }, r[o.BLOCKS.HR] = function() {
          return u.createElement("hr", null)
        }, r[o.BLOCKS.TABLE] = function(e, t) {
          return u.createElement("table", null, u.createElement("tbody", null, t))
        }, r[o.BLOCKS.TABLE_ROW] = function(e, t) {
          return u.createElement("tr", null, t)
        }, r[o.BLOCKS.TABLE_HEADER_CELL] = function(e, t) {
          return u.createElement("th", null, t)
        }, r[o.BLOCKS.TABLE_CELL] = function(e, t) {
          return u.createElement("td", null, t)
        }, r[o.INLINES.ASSET_HYPERLINK] = function(e) {
          return f(o.INLINES.ASSET_HYPERLINK, e)
        }, r[o.INLINES.ENTRY_HYPERLINK] = function(e) {
          return f(o.INLINES.ENTRY_HYPERLINK, e)
        }, r[o.INLINES.RESOURCE_HYPERLINK] = function(e) {
          return p(o.INLINES.RESOURCE_HYPERLINK, e)
        }, r[o.INLINES.EMBEDDED_ENTRY] = function(e) {
          return f(o.INLINES.EMBEDDED_ENTRY, e)
        }, r[o.INLINES.EMBEDDED_RESOURCE] = function(e, t) {
          return p(o.INLINES.EMBEDDED_RESOURCE, e)
        }, r[o.INLINES.HYPERLINK] = function(e, t) {
          return u.createElement("a", {
            href: e.data.uri
          }, t)
        }, r),
        l = ((i = {})[o.MARKS.BOLD] = function(e) {
          return u.createElement("b", null, e)
        }, i[o.MARKS.ITALIC] = function(e) {
          return u.createElement("i", null, e)
        }, i[o.MARKS.UNDERLINE] = function(e) {
          return u.createElement("u", null, e)
        }, i[o.MARKS.CODE] = function(e) {
          return u.createElement("code", null, e)
        }, i[o.MARKS.SUPERSCRIPT] = function(e) {
          return u.createElement("sup", null, e)
        }, i[o.MARKS.SUBSCRIPT] = function(e) {
          return u.createElement("sub", null, e)
        }, i[o.MARKS.STRIKETHROUGH] = function(e) {
          return u.createElement("s", null, e)
        }, i);

      function f(e, t) {
        return u.createElement("span", {
          key: t.data.target.sys.id
        }, "type: ", t.nodeType, " id: ", t.data.target.sys.id)
      }

      function p(e, t) {
        return u.createElement("span", {
          key: t.data.target.sys.urn
        }, "type: ", t.nodeType, " urn: ", t.data.target.sys.urn)
      }
      t.i = function(e, t) {
        return void 0 === t && (t = {}), e ? s(e, {
          renderNode: c(c({}, a), t.renderNode),
          renderMark: c(c({}, l), t.renderMark),
          renderText: t.renderText,
          preserveWhitespace: t.preserveWhitespace
        }) : null
      }
    },
    74482: (e, t, n) => {
      "use strict";
      e.exports = s;
      var r = n(12588),
        i = n(18435),
        u = !0,
        o = "skip",
        c = !1;

      function s(e, t, n, s) {
        var a, l;
        "function" == typeof t && "function" != typeof n && (s = n, n = t, t = null), l = r(t), a = s ? -1 : 1,
          function e(r, f, p) {
            var h, d = "object" == typeof r && null !== r ? r : {};
            return "string" == typeof d.type && (h = "string" == typeof d.tagName ? d.tagName : "string" == typeof d.name ? d.name : void 0, m.displayName = "node (" + i(d.type + (h ? "<" + h + ">" : "")) + ")"), m;

            function m() {
              var i, h, d = p.concat(r),
                m = [];
              if ((!t || l(r, f, p[p.length - 1] || null)) && (m = function(e) {
                  return null !== e && "object" == typeof e && "length" in e ? e : "number" == typeof e ? [u, e] : [e]
                }(n(r, p)), m[0] === c)) return m;
              if (r.children && m[0] !== o)
                for (h = (s ? r.children.length : -1) + a; h > -1 && h < r.children.length;) {
                  if ((i = e(r.children[h], h, d)())[0] === c) return i;
                  h = "number" == typeof i[1] ? i[1] : h + a
                }
              return m
            }
          }(e, null, [])()
      }
      s.CONTINUE = u, s.SKIP = o, s.EXIT = c
    },
    75095: (e, t, n) => {
      "use strict";
      e.exports = function(e, t, n, r) {
        var i, u;
        return "string" == typeof t || t && "function" == typeof t.exec ? u = [
          [t, n]
        ] : (u = t, r = n), c(e, i = r || {}, function e(t) {
          var n = t[0];
          return function(r, u) {
            var s, a, l, f, p = n[0],
              h = n[1],
              d = [],
              m = 0,
              x = u.children.indexOf(r);
            for (p.lastIndex = 0, a = p.exec(r.value); a && (s = a.index, !1 !== (f = h.apply(null, [].concat(a, {
                index: a.index,
                input: a.input
              }))) && (m !== s && d.push({
                type: "text",
                value: r.value.slice(m, s)
              }), "string" == typeof f && f.length > 0 && (f = {
                type: "text",
                value: f
              }), f && (d = [].concat(d, f)), m = s + a[0].length), p.global);) a = p.exec(r.value);
            if (void 0 === s ? (d = [r], x--) : (m < r.value.length && d.push({
                type: "text",
                value: r.value.slice(m)
              }), d.unshift(x, 1), o.apply(u.children, d)), t.length > 1)
              for (l = e(t.slice(1)), s = -1; ++s < d.length;) "text" === (r = d[s]).type ? l(r, u) : c(r, i, l);
            return x + d.length + 1
          }
        }(function(e) {
          var t, n, r = [];
          if ("object" != typeof e) throw new Error("Expected array or object as schema");
          if ("length" in e)
            for (n = -1; ++n < e.length;) r.push([s(e[n][0]), a(e[n][1])]);
          else
            for (t in e) r.push([s(t), a(e[t])]);
          return r
        }(u))), e
      };
      var r = n(74482),
        i = n(12588),
        u = n(35232),
        o = [].splice;

      function c(e, t, n) {
        var u = i(t.ignore || []);
        return r(e, "text", (function(e, t) {
          for (var r, i, o = -1; ++o < t.length;) {
            if (r = t[o], u(r, i ? i.children.indexOf(r) : void 0, i)) return;
            i = r
          }
          return n(e, i)
        })), []
      }

      function s(e) {
        return "string" == typeof e ? new RegExp(u(e), "g") : e
      }

      function a(e) {
        return "function" == typeof e ? e : function() {
          return e
        }
      }
    },
    75390: (e, t, n) => {
      e.exports = n(12115)
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
        for (var i, u, o, c, s = e.value || "", a = "`", l = -1; new RegExp("(^|[^`])" + a + "([^`]|$)").test(s);) a += "`";
        for (/[^ \r\n]/.test(s) && (/[ \r\n`]/.test(s.charAt(0)) || /[ \r\n`]/.test(s.charAt(s.length - 1))) && (s = " " + s + " "); ++l < n.unsafe.length;)
          if ((i = n.unsafe[l]).atBreak)
            for (u = r(i); o = u.exec(s);) c = o.index, 10 === s.charCodeAt(c) && 13 === s.charCodeAt(c - 1) && c--, s = s.slice(0, c) + " " + s.slice(o.index + 1);
        return a + s + a
      }
    },
    82640: e => {
      "use strict";
      e.exports = function(e, t) {
        var n, r = t.start._index,
          i = t.start._bufferIndex,
          u = t.end._index,
          o = t.end._bufferIndex;
        return r === u ? n = [e[r].slice(i, o)] : (n = e.slice(r, u), i > -1 && (n[0] = n[0].slice(i)), o > 0 && n.push(e[u].slice(0, o))), n
      }
    },
    83551: (e, t, n) => {
      var r = n(33331),
        i = n(79748),
        u = n(68940);
      e.exports = function(e) {
        var t = e || {},
          n = t.tableCellPadding,
          o = t.tablePipeAlign,
          c = t.stringLength,
          s = n ? " " : "|";
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
                for (var n = e.children, r = -1, i = n.length, u = [], o = t.enter("table"); ++r < i;) u[r] = f(n[r], t);
                return o(), u
              }(e, n), e.align)
            },
            tableRow: function(e, t, n) {
              var r = l([f(e, n)]);
              return r.slice(0, r.indexOf("\n"))
            },
            tableCell: a,
            inlineCode: function(e, t, n) {
              var r = i(e, t, n);
              return -1 !== n.stack.indexOf("tableCell") && (r = r.replace(/\|/g, "\\$&")), r
            }
          }
        };

        function a(e, t, n) {
          var i = n.enter("tableCell"),
            u = r(e, n, {
              before: s,
              after: s
            });
          return i(), u
        }

        function l(e, t) {
          return u(e, {
            align: t,
            alignDelimiters: o,
            padding: n,
            stringLength: c
          })
        }

        function f(e, t) {
          for (var n = e.children, r = -1, i = n.length, u = [], o = t.enter("tableRow"); ++r < i;) u[r] = a(n[r], 0, t);
          return o(), u
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
        u = n(36309),
        o = n(42827),
        c = {
          name: "codeFenced",
          tokenize: function(e, t, n) {
            var c, s = this,
              a = {
                tokenize: function(e, t, n) {
                  var i = 0;
                  return o(e, (function(t) {
                    return e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u(t)
                  }), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);

                  function u(t) {
                    return t === c ? (e.consume(t), i++, u) : i < f ? n(t) : (e.exit("codeFencedFenceSequence"), o(e, s, "whitespace")(t))
                  }

                  function s(i) {
                    return null === i || r(i) ? (e.exit("codeFencedFence"), t(i)) : n(i)
                  }
                },
                partial: !0
              },
              l = u(this.events, "linePrefix"),
              f = 0;
            return function(t) {
              return e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), c = t, p(t)
            };

            function p(t) {
              return t === c ? (e.consume(t), f++, p) : (e.exit("codeFencedFenceSequence"), f < 3 ? n(t) : o(e, h, "whitespace")(t))
            }

            function h(t) {
              return null === t || r(t) ? g(t) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
                contentType: "string"
              }), d(t))
            }

            function d(t) {
              return null === t || i(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), o(e, m, "whitespace")(t)) : 96 === t && t === c ? n(t) : (e.consume(t), d)
            }

            function m(t) {
              return null === t || r(t) ? g(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
                contentType: "string"
              }), x(t))
            }

            function x(t) {
              return null === t || r(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), g(t)) : 96 === t && t === c ? n(t) : (e.consume(t), x)
            }

            function g(n) {
              return e.exit("codeFencedFence"), s.interrupt ? t(n) : v(n)
            }

            function v(t) {
              return null === t ? y(t) : r(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), e.attempt(a, y, l ? o(e, v, "linePrefix", l + 1) : v)) : (e.enter("codeFlowValue"), k(t))
            }

            function k(t) {
              return null === t || r(t) ? (e.exit("codeFlowValue"), v(t)) : (e.consume(t), k)
            }

            function y(n) {
              return e.exit("codeFenced"), t(n)
            }
          },
          concrete: !0
        };
      e.exports = c
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
        u = n(42827),
        o = {
          name: "setextUnderline",
          tokenize: function(e, t, n) {
            for (var i, o, c = this, s = c.events.length; s--;)
              if ("lineEnding" !== c.events[s][1].type && "linePrefix" !== c.events[s][1].type && "content" !== c.events[s][1].type) {
                o = "paragraph" === c.events[s][1].type;
                break
              } return function(t) {
              return c.lazy || !c.interrupt && !o ? n(t) : (e.enter("setextHeadingLine"), e.enter("setextHeadingLineSequence"), i = t, a(t))
            };

            function a(t) {
              return t === i ? (e.consume(t), a) : (e.exit("setextHeadingLineSequence"), u(e, l, "lineSuffix")(t))
            }

            function l(i) {
              return null === i || r(i) ? (e.exit("setextHeadingLine"), t(i)) : n(i)
            }
          },
          resolveTo: function(e, t) {
            for (var n, r, u, o, c = e.length; c--;)
              if ("enter" === e[c][0]) {
                if ("content" === e[c][1].type) {
                  n = c;
                  break
                }
                "paragraph" === e[c][1].type && (r = c)
              } else "content" === e[c][1].type && e.splice(c, 1), u || "definition" !== e[c][1].type || (u = c);
            return o = {
              type: "setextHeading",
              start: i(e[r][1].start),
              end: i(e[e.length - 1][1].end)
            }, e[r][1].type = "setextHeadingText", u ? (e.splice(r, 0, ["enter", o, t]), e.splice(u + 1, 0, ["exit", e[n][1], t]), e[n][1].end = i(e[u][1].end)) : e[n][1] = o, e.push(["exit", o, t]), e
          }
        };
      e.exports = o
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
        u = n(52734),
        o = n(64936),
        c = n(42827),
        s = {
          name: "headingAtx",
          tokenize: function(e, t, n) {
            var o = this,
              s = 0;
            return function(t) {
              return e.enter("atxHeading"), e.enter("atxHeadingSequence"), a(t)
            };

            function a(r) {
              return 35 === r && s++ < 6 ? (e.consume(r), a) : null === r || i(r) ? (e.exit("atxHeadingSequence"), o.interrupt ? t(r) : l(r)) : n(r)
            }

            function l(n) {
              return 35 === n ? (e.enter("atxHeadingSequence"), f(n)) : null === n || r(n) ? (e.exit("atxHeading"), t(n)) : u(n) ? c(e, l, "whitespace")(n) : (e.enter("atxHeadingText"), p(n))
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
              u = 3;
            return "whitespace" === e[u][1].type && (u += 2), i - 2 > u && "whitespace" === e[i][1].type && (i -= 2), "atxHeadingSequence" === e[i][1].type && (u === i - 1 || i - 4 > u && "whitespace" === e[i - 2][1].type) && (i -= u + 1 === i ? 2 : 4), i > u && (n = {
              type: "atxHeadingText",
              start: e[u][1].start,
              end: e[i][1].end
            }, r = {
              type: "chunkText",
              start: e[u][1].start,
              end: e[i][1].end,
              contentType: "text"
            }, o(e, u, i - u + 1, [
              ["enter", n, t],
              ["enter", r, t],
              ["exit", r, t],
              ["exit", n, t]
            ])), e
          }
        };
      e.exports = s
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
        for (var t, n, i, u = -1, o = []; ++u < e.length;) {
          if ("string" == typeof(t = e[u])) n = t;
          else if (-5 === t) n = "\r";
          else if (-4 === t) n = "\n";
          else if (-3 === t) n = "\r\n";
          else if (-2 === t) n = "\t";
          else if (-1 === t) {
            if (i) continue;
            n = " "
          } else n = r(t);
          i = -2 === t, o.push(n)
        }
        return o.join("")
      }
    },
    94198: (e, t, n) => {
      t.flow = {
        null: {
          tokenize: function(e, t, n) {
            var o, c, s = [],
              a = 0;
            return function(t) {
              return null === t || -5 === t || -4 === t || -3 === t ? n(t) : (e.enter("table")._align = s, e.enter("tableHead"), e.enter("tableRow"), 124 === t ? l(t) : (a++, e.enter("temporaryTableCellContent"), h(t)))
            };

            function l(t) {
              return e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), o = !0, f
            }

            function f(t) {
              return null === t || -5 === t || -4 === t || -3 === t ? function(t) {
                return null === t ? n(t) : (e.exit("tableRow"), e.exit("tableHead"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), e.check(i, n, r(e, m, "linePrefix", 4)))
              }(t) : -2 === t || -1 === t || 32 === t ? (e.enter("whitespace"), e.consume(t), p) : (o && (o = void 0, a++), 124 === t ? l(t) : (e.enter("temporaryTableCellContent"), h(t)))
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
              return null === t || t < 0 || 32 === t ? n(t) : (e.enter("tableDelimiterRow"), x(t))
            }

            function x(t) {
              return null === t || -5 === t || -4 === t || -3 === t ? b(t) : -2 === t || -1 === t || 32 === t ? (e.enter("whitespace"), e.consume(t), g) : 45 === t ? (e.enter("tableDelimiterFiller"), e.consume(t), c = !0, s.push(null), v) : 58 === t ? (e.enter("tableDelimiterAlignment"), e.consume(t), e.exit("tableDelimiterAlignment"), s.push("left"), k) : 124 === t ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), x) : n(t)
            }

            function g(t) {
              return -2 === t || -1 === t || 32 === t ? (e.consume(t), g) : (e.exit("whitespace"), x(t))
            }

            function v(t) {
              return 45 === t ? (e.consume(t), v) : (e.exit("tableDelimiterFiller"), 58 === t ? (e.enter("tableDelimiterAlignment"), e.consume(t), e.exit("tableDelimiterAlignment"), s[s.length - 1] = "left" === s[s.length - 1] ? "center" : "right", y) : x(t))
            }

            function k(t) {
              return 45 === t ? (e.enter("tableDelimiterFiller"), e.consume(t), c = !0, v) : n(t)
            }

            function y(t) {
              return null === t || -5 === t || -4 === t || -3 === t ? b(t) : -2 === t || -1 === t || 32 === t ? (e.enter("whitespace"), e.consume(t), g) : 124 === t ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), x) : n(t)
            }

            function b(t) {
              return e.exit("tableDelimiterRow"), c && a === s.length ? null === t ? E(t) : e.check(u, E, S)(t) : n(t)
            }

            function E(n) {
              return e.exit("table"), t(n)
            }

            function S(t) {
              return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), r(e, C, "linePrefix", 4)
            }

            function C(t) {
              return e.enter("tableBody"), w(t)
            }

            function w(t) {
              return e.enter("tableRow"), 124 === t ? A(t) : (e.enter("temporaryTableCellContent"), L(t))
            }

            function A(t) {
              return e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), T
            }

            function T(t) {
              return null === t || -5 === t || -4 === t || -3 === t ? function(t) {
                return e.exit("tableRow"), null === t ? O(t) : e.check(u, O, _)(t)
              }(t) : -2 === t || -1 === t || 32 === t ? (e.enter("whitespace"), e.consume(t), F) : 124 === t ? A(t) : (e.enter("temporaryTableCellContent"), L(t))
            }

            function F(t) {
              return -2 === t || -1 === t || 32 === t ? (e.consume(t), F) : (e.exit("whitespace"), T(t))
            }

            function L(t) {
              return null === t || t < 0 || 32 === t || 124 === t ? (e.exit("temporaryTableCellContent"), T(t)) : (e.consume(t), 92 === t ? I : L)
            }

            function I(t) {
              return 92 === t || 124 === t ? (e.consume(t), L) : L(t)
            }

            function O(t) {
              return e.exit("tableBody"), E(t)
            }

            function _(t) {
              return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), r(e, w, "linePrefix", 4)
            }
          },
          resolve: function(e, t) {
            for (var n, r, i, u, o, c, s, a, l, f, p = e.length, h = -1; ++h < p;) n = e[h][1], u && ("temporaryTableCellContent" === n.type && (a = a || h, l = h), "tableCellDivider" !== n.type && "tableRow" !== n.type || !l || (s = {
              type: "chunkText",
              start: (c = {
                type: "tableContent",
                start: e[a][1].start,
                end: e[l][1].end
              }).start,
              end: c.end,
              contentType: "text"
            }, e.splice(a, l - a + 1, ["enter", c, t], ["enter", s, t], ["exit", s, t], ["exit", c, t]), h -= l - a - 3, p = e.length, a = void 0, l = void 0)), "exit" === e[h][0] && f && f + 1 < h && ("tableCellDivider" === n.type || "tableRow" === n.type && (f + 3 < h || "whitespace" !== e[f][1].type)) && (o = {
              type: i ? "tableDelimiter" : r ? "tableHeader" : "tableData",
              start: e[f][1].start,
              end: e[h][1].end
            }, e.splice(h + ("tableCellDivider" === n.type ? 1 : 0), 0, ["exit", o, t]), e.splice(f, 0, ["enter", o, t]), h += 2, p = e.length, f = h + 1), "tableRow" === n.type && (u = "enter" === e[h][0]) && (f = h + 1), "tableDelimiterRow" === n.type && (i = "enter" === e[h][0]) && (f = h + 1), "tableHead" === n.type && (r = "enter" === e[h][0]);
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
        u = {
          tokenize: function(e, t, n) {
            var r = 0;
            return function(t) {
              return e.enter("check"), e.consume(t), i
            };

            function i(u) {
              return -1 === u || 32 === u ? (e.consume(u), 4 == ++r ? t : i) : null === u || u < 0 ? t(u) : n(u)
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
        u = n(36309),
        o = n(58649),
        c = n(42827),
        s = n(13067),
        a = n(43861),
        l = {
          name: "list",
          tokenize: function(e, t, n) {
            var c = this,
              l = u(c.events, "linePrefix"),
              p = 0;
            return function(t) {
              var i = c.containerState.type || (42 === t || 43 === t || 45 === t ? "listUnordered" : "listOrdered");
              if ("listUnordered" === i ? !c.containerState.marker || t === c.containerState.marker : r(t)) {
                if (c.containerState.type || (c.containerState.type = i, e.enter(i, {
                    _container: !0
                  })), "listUnordered" === i) return e.enter("listItemPrefix"), 42 === t || 45 === t ? e.check(a, n, d)(t) : d(t);
                if (!c.interrupt || 49 === t) return e.enter("listItemPrefix"), e.enter("listItemValue"), h(t)
              }
              return n(t)
            };

            function h(t) {
              return r(t) && ++p < 10 ? (e.consume(t), h) : (!c.interrupt || p < 2) && (c.containerState.marker ? t === c.containerState.marker : 41 === t || 46 === t) ? (e.exit("listItemValue"), d(t)) : n(t)
            }

            function d(t) {
              return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), c.containerState.marker = c.containerState.marker || t, e.check(s, c.interrupt ? n : m, e.attempt(f, g, x))
            }

            function m(e) {
              return c.containerState.initialBlankLine = !0, l++, g(e)
            }

            function x(t) {
              return i(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), g) : n(t)
            }

            function g(n) {
              return c.containerState.size = l + o(c.sliceStream(e.exit("listItemPrefix"))), t(n)
            }
          },
          continuation: {
            tokenize: function(e, t, n) {
              var r = this;
              return r.containerState._closeFlow = void 0, e.check(s, (function(n) {
                return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, c(e, t, "listItemIndent", r.containerState.size + 1)(n)
              }), (function(n) {
                return r.containerState.furtherBlankLines || !i(n) ? (r.containerState.furtherBlankLines = r.containerState.initialBlankLine = void 0, u(n)) : (r.containerState.furtherBlankLines = r.containerState.initialBlankLine = void 0, e.attempt(p, t, u)(n))
              }));

              function u(i) {
                return r.containerState._closeFlow = !0, r.interrupt = void 0, c(e, e.attempt(l, t, n), "linePrefix", r.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)(i)
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
            return c(e, (function(e) {
              return i(e) || !u(r.events, "listItemPrefixWhitespace") ? n(e) : t(e)
            }), "listItemPrefixWhitespace", r.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 5)
          },
          partial: !0
        },
        p = {
          tokenize: function(e, t, n) {
            var r = this;
            return c(e, (function(e) {
              return u(r.events, "listItemIndent") === r.containerState.size ? t(e) : n(e)
            }), "listItemIndent", r.containerState.size + 1)
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
            var i, u, o = 0;
            return function(t) {
              return e.enter("codeText"), e.enter("codeTextSequence"), c(t)
            };

            function c(t) {
              return 96 === t ? (e.consume(t), o++, c) : (e.exit("codeTextSequence"), s(t))
            }

            function s(t) {
              return null === t ? n(t) : 96 === t ? (u = e.enter("codeTextSequence"), i = 0, l(t)) : 32 === t ? (e.enter("space"), e.consume(t), e.exit("space"), s) : r(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), s) : (e.enter("codeTextData"), a(t))
            }

            function a(t) {
              return null === t || 32 === t || 96 === t || r(t) ? (e.exit("codeTextData"), s(t)) : (e.consume(t), a)
            }

            function l(n) {
              return 96 === n ? (e.consume(n), i++, l) : i === o ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (u.type = "codeTextData", a(n))
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
    96893: (e, t, n) => {
      "use strict";
      var r = n(3241)(/[\dA-Za-z]/);
      e.exports = r
    },
    96967: (e, t, n) => {
      "use strict";
      var r = n(85409),
        i = n(54228),
        u = n(14751);
      e.exports = function(e) {
        return null === e || r(e) || u(e) ? 1 : i(e) ? 2 : void 0
      }
    },
    98185: (e, t, n) => {
      e.exports = function(e, t, n) {
        var s, a, l, f = i(n),
          p = u(n);
        return t && t.ordered && (f = (t.start > -1 ? t.start : 1) + (!1 === n.options.incrementListMarker ? 0 : t.children.indexOf(e)) + "."), s = f.length + 1, ("tab" === p || "mixed" === p && (t && t.spread || e.spread)) && (s = 4 * Math.ceil(s / 4)), l = n.enter("listItem"), a = c(o(e, n), (function(e, t, n) {
          return t ? (n ? "" : r(" ", s)) + e : (n ? f : f + r(" ", s - f.length)) + e
        })), l(), a
      };
      var r = n(28375),
        i = n(12892),
        u = n(93137),
        o = n(64621),
        c = n(42639)
    },
    98345: (e, t, n) => {
      "use strict";
      var r = n(4997),
        i = n(85409),
        u = n(87126);
      e.exports = function(e, t, n, o, c, s, a, l, f) {
        var p = f || 1 / 0,
          h = 0;
        return function(t) {
          return 60 === t ? (e.enter(o), e.enter(c), e.enter(s), e.consume(t), e.exit(s), d) : r(t) || 41 === t ? n(t) : (e.enter(o), e.enter(a), e.enter(l), e.enter("chunkString", {
            contentType: "string"
          }), g(t))
        };

        function d(n) {
          return 62 === n ? (e.enter(s), e.consume(n), e.exit(s), e.exit(c), e.exit(o), t) : (e.enter(l), e.enter("chunkString", {
            contentType: "string"
          }), m(n))
        }

        function m(t) {
          return 62 === t ? (e.exit("chunkString"), e.exit(l), d(t)) : null === t || 60 === t || u(t) ? n(t) : (e.consume(t), 92 === t ? x : m)
        }

        function x(t) {
          return 60 === t || 62 === t || 92 === t ? (e.consume(t), m) : m(t)
        }

        function g(u) {
          return 40 === u ? ++h > p ? n(u) : (e.consume(u), g) : 41 === u ? h-- ? (e.consume(u), g) : (e.exit("chunkString"), e.exit(l), e.exit(a), e.exit(o), t(u)) : null === u || i(u) ? h ? n(u) : (e.exit("chunkString"), e.exit(l), e.exit(a), e.exit(o), t(u)) : r(u) ? n(u) : (e.consume(u), 92 === u ? v : g)
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
    }
  }
]);