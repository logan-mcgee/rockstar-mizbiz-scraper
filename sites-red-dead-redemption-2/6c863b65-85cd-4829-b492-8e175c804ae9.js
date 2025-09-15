try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6c863b65-85cd-4829-b492-8e175c804ae9", e._sentryDebugIdIdentifier = "sentry-dbid-6c863b65-85cd-4829-b492-8e175c804ae9")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [8299], {
    2333: (e, t, n) => {
      "use strict";
      var r, i = (r = n(13140)) && r.__esModule ? r : {
          default: r
        },
        s = {
          dataScript: function(e) {
            var t = document.createElement("script");
            return t.innerHTML = e, t
          },
          gtm: function(e) {
            var t = i.default.tags(e);
            return {
              noScript: function() {
                var e = document.createElement("noscript");
                return e.innerHTML = t.iframe, e
              },
              script: function() {
                var e = document.createElement("script");
                return e.innerHTML = t.script, e
              },
              dataScript: this.dataScript(t.dataLayerVar)
            }
          },
          initialize: function(e) {
            var t = e.gtmId,
              n = e.events,
              r = void 0 === n ? {} : n,
              i = e.dataLayer,
              s = e.dataLayerName,
              o = void 0 === s ? "dataLayer" : s,
              a = e.auth,
              c = void 0 === a ? "" : a,
              u = e.preview,
              h = void 0 === u ? "" : u,
              d = this.gtm({
                id: t,
                events: r,
                dataLayer: i || void 0,
                dataLayerName: o,
                auth: c,
                preview: h
              });
            i && document.head.appendChild(d.dataScript), document.head.insertBefore(d.script(), document.head.childNodes[0]), document.body.insertBefore(d.noScript(), document.body.childNodes[0])
          },
          dataLayer: function(e) {
            var t = e.dataLayer,
              n = e.dataLayerName,
              r = void 0 === n ? "dataLayer" : n;
            if (window[r]) return window[r].push(t);
            var s = i.default.dataLayer(t, r),
              o = this.dataScript(s);
            document.head.insertBefore(o, document.head.childNodes[0])
          }
        };
      e.exports = s
    },
    6306: e => {
      function t(e, t) {
        return Object.keys(t).forEach((function(n) {
          "default" === n || "__esModule" === n || e.hasOwnProperty(n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
              return t[n]
            }
          })
        })), e
      }

      function n(e, t, n, r) {
        Object.defineProperty(e, t, {
          get: n,
          set: r,
          enumerable: !0,
          configurable: !0
        })
      }
      var r = {};
      n(r, "ONETRUST_LOADED_EVENT", (() => s)), n(r, "WRAPPER_CALLED_EVENT", (() => o)), n(r, "CONSENT_CHANGED_EVENT", (() => a)), n(r, "init", (() => u));
      const i = window.document.currentScript?.nonce,
        s = "ONETRUST_LOADED_EVENT",
        o = "WRAPPER_CALLED_EVENT",
        a = "CONSENT_CHANGED_EVENT";
      let c = !0;

      function u(e) {
        const t = window.document.head,
          n = window.document.createElement("script");
        if (n.setAttribute("id", "onetrust-sdk-stub"), n.setAttribute("src", "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"), n.setAttribute("type", "text/javascript"), n.setAttribute("charset", "UTF-8"), n.setAttribute("data-document-language", "true"), i && (n.nonce = i), !e) throw new Error("You must specify the OneTrust script ID");
        n.setAttribute("data-domain-script", e), t.insertBefore(n, t.firstChild), window.OptanonWrapper = function() {
          c && (c = !1, window.dispatchEvent(new CustomEvent(s, {
            bubbles: !0
          }))), window.dispatchEvent(new CustomEvent(o, {
            bubbles: !0
          })), window.OneTrust.OnConsentChanged((() => {
            window.dispatchEvent(new CustomEvent(a, {
              bubbles: !0
            }))
          }))
        }
      }
      var h = {};
      n(h, "NoChoiceTransactionType", (() => d)), n(h, "ConfirmedTransactionType", (() => p)), n(h, "canStoreCookie", (() => f));
      const d = "NO_CHOICE",
        p = "CONFIRMED",
        l = {
          AlwaysActive: "always active"
        };

      function f(e, t = null) {
        if (!window.OneTrust) return !1;
        const n = window.OneTrust.GetDomainData(),
          r = n.Groups.find((t => t.Cookies.some((t => t.Name === e))));
        if (!r) {
          const n = `Unable to find ${e} in any OneTrust category. Therefore, we won't store the cookie`;
          return t && t.log(n), !1
        }
        if (r.Status === l.AlwaysActive) return !0;
        const i = n.ConsentIntegrationData.consentPayload.purposes.find((e => e.Id === r.PurposeId));
        return i?.TransactionType === p
      }
      t(e.exports, r), t(e.exports, h)
    },
    6347: (e, t, n) => {
      "use strict";
      n.d(t, {
        o: () => o
      });
      var r = n(78322),
        i = n(21429),
        s = n(57308);

      function o(e) {
        return new i.C((function(t, n) {
          var i = (0, r.__rest)(t, []);
          return new s.c((function(r) {
            var s, o = !1;
            return Promise.resolve(i).then((function(n) {
                return e(n, t.getContext())
              })).then(t.setContext).then((function() {
                o || (s = n(t).subscribe({
                  next: r.next.bind(r),
                  error: r.error.bind(r),
                  complete: r.complete.bind(r)
                }))
              })).catch(r.error.bind(r)),
              function() {
                o = !0, s && s.unsubscribe()
              }
          }))
        }))
      }
    },
    13140: (e, t, n) => {
      "use strict";
      var r, i = (r = n(48848)) && r.__esModule ? r : {
          default: r
        },
        s = {
          tags: function(e) {
            var t = e.id,
              n = e.events,
              r = e.dataLayer,
              s = e.dataLayerName,
              o = e.preview,
              a = "&gtm_auth=" + e.auth,
              c = "&gtm_preview=" + o;
            return t || (0, i.default)("GTM Id is required"), {
              iframe: '\n      <iframe src="https://www.googletagmanager.com/ns.html?id=' + t + a + c + '&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',
              script: "\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', " + JSON.stringify(n).slice(1, -1) + "});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'" + a + c + "&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','" + s + "','" + t + "');",
              dataLayerVar: this.dataLayer(r, s)
            }
          },
          dataLayer: function(e, t) {
            return "\n      window." + t + " = window." + t + " || [];\n      window." + t + ".push(" + JSON.stringify(e) + ")"
          }
        };
      e.exports = s
    },
    37980: (e, t, n) => {
      "use strict";

      function r(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) e[r] = n[r]
        }
        return e
      }
      n.d(t, {
        A: () => i
      });
      var i = function e(t, n) {
        function i(e, i, s) {
          if ("undefined" != typeof document) {
            "number" == typeof(s = r({}, n, s)).expires && (s.expires = new Date(Date.now() + 864e5 * s.expires)), s.expires && (s.expires = s.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var o = "";
            for (var a in s) s[a] && (o += "; " + a, !0 !== s[a] && (o += "=" + s[a].split(";")[0]));
            return document.cookie = e + "=" + t.write(i, e) + o
          }
        }
        return Object.create({
          set: i,
          get: function(e) {
            if ("undefined" != typeof document && (!arguments.length || e)) {
              for (var n = document.cookie ? document.cookie.split("; ") : [], r = {}, i = 0; i < n.length; i++) {
                var s = n[i].split("="),
                  o = s.slice(1).join("=");
                try {
                  var a = decodeURIComponent(s[0]);
                  if (r[a] = t.read(o, a), e === a) break
                } catch (e) {}
              }
              return e ? r[e] : r
            }
          },
          remove: function(e, t) {
            i(e, "", r({}, t, {
              expires: -1
            }))
          },
          withAttributes: function(t) {
            return e(this.converter, r({}, this.attributes, t))
          },
          withConverter: function(t) {
            return e(r({}, this.converter, t), this.attributes)
          }
        }, {
          attributes: {
            value: Object.freeze(n)
          },
          converter: {
            value: Object.freeze(t)
          }
        })
      }({
        read: function(e) {
          return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        },
        write: function(e) {
          return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
        }
      }, {
        path: "/"
      })
    },
    40445: (e, t, n) => {
      "use strict";
      n.d(t, {
        J1: () => X
      });
      var r = n(78322);

      function i(e, t) {
        if (!Boolean(e)) throw new Error(null != t ? t : "Unexpected invariant triggered.")
      }
      const s = /\r\n|[\n\r]/g;

      function o(e, t) {
        let n = 0,
          r = 1;
        for (const o of e.body.matchAll(s)) {
          if ("number" == typeof o.index || i(!1), o.index >= t) break;
          n = o.index + o[0].length, r += 1
        }
        return {
          line: r,
          column: t + 1 - n
        }
      }

      function a(e, t) {
        const n = e.locationOffset.column - 1,
          r = "".padStart(n) + e.body,
          i = t.line - 1,
          s = e.locationOffset.line - 1,
          o = t.line + s,
          a = 1 === t.line ? n : 0,
          u = t.column + a,
          h = `${e.name}:${o}:${u}\n`,
          d = r.split(/\r\n|[\n\r]/g),
          p = d[i];
        if (p.length > 120) {
          const e = Math.floor(u / 80),
            t = u % 80,
            n = [];
          for (let e = 0; e < p.length; e += 80) n.push(p.slice(e, e + 80));
          return h + c([
            [`${o} |`, n[0]], ...n.slice(1, e + 1).map((e => ["|", e])), ["|", "^".padStart(t)],
            ["|", n[e + 1]]
          ])
        }
        return h + c([
          [o - 1 + " |", d[i - 1]],
          [`${o} |`, p],
          ["|", "^".padStart(u)],
          [`${o+1} |`, d[i + 1]]
        ])
      }

      function c(e) {
        const t = e.filter((([e, t]) => void 0 !== t)),
          n = Math.max(...t.map((([e]) => e.length)));
        return t.map((([e, t]) => e.padStart(n) + (t ? " " + t : ""))).join("\n")
      }
      class u extends Error {
        constructor(e, ...t) {
          var n, r, i;
          const {
            nodes: s,
            source: a,
            positions: c,
            path: d,
            originalError: p,
            extensions: l
          } = function(e) {
            const t = e[0];
            return null == t || "kind" in t || "length" in t ? {
              nodes: t,
              source: e[1],
              positions: e[2],
              path: e[3],
              originalError: e[4],
              extensions: e[5]
            } : t
          }(t);
          super(e), this.name = "GraphQLError", this.path = null != d ? d : void 0, this.originalError = null != p ? p : void 0, this.nodes = h(Array.isArray(s) ? s : s ? [s] : void 0);
          const f = h(null === (n = this.nodes) || void 0 === n ? void 0 : n.map((e => e.loc)).filter((e => null != e)));
          this.source = null != a ? a : null == f || null === (r = f[0]) || void 0 === r ? void 0 : r.source, this.positions = null != c ? c : null == f ? void 0 : f.map((e => e.start)), this.locations = c && a ? c.map((e => o(a, e))) : null == f ? void 0 : f.map((e => o(e.source, e.start)));
          const y = "object" == typeof(m = null == p ? void 0 : p.extensions) && null !== m ? null == p ? void 0 : p.extensions : void 0;
          var m;
          this.extensions = null !== (i = null != l ? l : y) && void 0 !== i ? i : Object.create(null), Object.defineProperties(this, {
            message: {
              writable: !0,
              enumerable: !0
            },
            name: {
              enumerable: !1
            },
            nodes: {
              enumerable: !1
            },
            source: {
              enumerable: !1
            },
            positions: {
              enumerable: !1
            },
            originalError: {
              enumerable: !1
            }
          }), null != p && p.stack ? Object.defineProperty(this, "stack", {
            value: p.stack,
            writable: !0,
            configurable: !0
          }) : Error.captureStackTrace ? Error.captureStackTrace(this, u) : Object.defineProperty(this, "stack", {
            value: Error().stack,
            writable: !0,
            configurable: !0
          })
        }
        get[Symbol.toStringTag]() {
          return "GraphQLError"
        }
        toString() {
          let e = this.message;
          if (this.nodes)
            for (const n of this.nodes) n.loc && (e += "\n\n" + a((t = n.loc).source, o(t.source, t.start)));
          else if (this.source && this.locations)
            for (const t of this.locations) e += "\n\n" + a(this.source, t);
          var t;
          return e
        }
        toJSON() {
          const e = {
            message: this.message
          };
          return null != this.locations && (e.locations = this.locations), null != this.path && (e.path = this.path), null != this.extensions && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions), e
        }
      }

      function h(e) {
        return void 0 === e || 0 === e.length ? void 0 : e
      }

      function d(e, t, n) {
        return new u(`Syntax Error: ${n}`, {
          source: e,
          positions: [t]
        })
      }
      var p, l = n(66928);
      ! function(e) {
        e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION"
      }(p || (p = {}));
      var f, y, m = n(50869),
        E = n(18940),
        b = n(66351);
      (y = f || (f = {})).SOF = "<SOF>", y.EOF = "<EOF>", y.BANG = "!", y.DOLLAR = "$", y.AMP = "&", y.PAREN_L = "(", y.PAREN_R = ")", y.SPREAD = "...", y.COLON = ":", y.EQUALS = "=", y.AT = "@", y.BRACKET_L = "[", y.BRACKET_R = "]", y.BRACE_L = "{", y.PIPE = "|", y.BRACE_R = "}", y.NAME = "Name", y.INT = "Int", y.FLOAT = "Float", y.STRING = "String", y.BLOCK_STRING = "BlockString", y.COMMENT = "Comment";
      class v {
        constructor(e) {
          const t = new l.ou(f.SOF, 0, 0, 0, 0);
          this.source = e, this.lastToken = t, this.token = t, this.line = 1, this.lineStart = 0
        }
        get[Symbol.toStringTag]() {
          return "Lexer"
        }
        advance() {
          return this.lastToken = this.token, this.token = this.lookahead()
        }
        lookahead() {
          let e = this.token;
          if (e.kind !== f.EOF)
            do {
              if (e.next) e = e.next;
              else {
                const t = w(this, e.end);
                e.next = t, t.prev = e, e = t
              }
            } while (e.kind === f.COMMENT);
          return e
        }
      }

      function T(e) {
        return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111
      }

      function _(e, t) {
        return x(e.charCodeAt(t)) && N(e.charCodeAt(t + 1))
      }

      function x(e) {
        return e >= 55296 && e <= 56319
      }

      function N(e) {
        return e >= 56320 && e <= 57343
      }

      function g(e, t) {
        const n = e.source.body.codePointAt(t);
        if (void 0 === n) return f.EOF;
        if (n >= 32 && n <= 126) {
          const e = String.fromCodePoint(n);
          return '"' === e ? "'\"'" : `"${e}"`
        }
        return "U+" + n.toString(16).toUpperCase().padStart(4, "0")
      }

      function A(e, t, n, r, i) {
        const s = e.line,
          o = 1 + n - e.lineStart;
        return new l.ou(t, n, r, s, o, i)
      }

      function w(e, t) {
        const n = e.source.body,
          r = n.length;
        let i = t;
        for (; i < r;) {
          const t = n.charCodeAt(i);
          switch (t) {
            case 65279:
            case 9:
            case 32:
            case 44:
              ++i;
              continue;
            case 10:
              ++i, ++e.line, e.lineStart = i;
              continue;
            case 13:
              10 === n.charCodeAt(i + 1) ? i += 2 : ++i, ++e.line, e.lineStart = i;
              continue;
            case 35:
              return O(e, i);
            case 33:
              return A(e, f.BANG, i, i + 1);
            case 36:
              return A(e, f.DOLLAR, i, i + 1);
            case 38:
              return A(e, f.AMP, i, i + 1);
            case 40:
              return A(e, f.PAREN_L, i, i + 1);
            case 41:
              return A(e, f.PAREN_R, i, i + 1);
            case 46:
              if (46 === n.charCodeAt(i + 1) && 46 === n.charCodeAt(i + 2)) return A(e, f.SPREAD, i, i + 3);
              break;
            case 58:
              return A(e, f.COLON, i, i + 1);
            case 61:
              return A(e, f.EQUALS, i, i + 1);
            case 64:
              return A(e, f.AT, i, i + 1);
            case 91:
              return A(e, f.BRACKET_L, i, i + 1);
            case 93:
              return A(e, f.BRACKET_R, i, i + 1);
            case 123:
              return A(e, f.BRACE_L, i, i + 1);
            case 124:
              return A(e, f.PIPE, i, i + 1);
            case 125:
              return A(e, f.BRACE_R, i, i + 1);
            case 34:
              return 34 === n.charCodeAt(i + 1) && 34 === n.charCodeAt(i + 2) ? F(e, i) : D(e, i)
          }
          if ((0, b.yp)(t) || 45 === t) return k(e, i, t);
          if ((0, b.un)(t)) return B(e, i);
          throw d(e.source, i, 39 === t ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : T(t) || _(n, i) ? `Unexpected character: ${g(e,i)}.` : `Invalid character: ${g(e,i)}.`)
        }
        return A(e, f.EOF, r, r)
      }

      function O(e, t) {
        const n = e.source.body,
          r = n.length;
        let i = t + 1;
        for (; i < r;) {
          const e = n.charCodeAt(i);
          if (10 === e || 13 === e) break;
          if (T(e)) ++i;
          else {
            if (!_(n, i)) break;
            i += 2
          }
        }
        return A(e, f.COMMENT, t, i, n.slice(t + 1, i))
      }

      function k(e, t, n) {
        const r = e.source.body;
        let i = t,
          s = n,
          o = !1;
        if (45 === s && (s = r.charCodeAt(++i)), 48 === s) {
          if (s = r.charCodeAt(++i), (0, b.yp)(s)) throw d(e.source, i, `Invalid number, unexpected digit after 0: ${g(e,i)}.`)
        } else i = I(e, i, s), s = r.charCodeAt(i);
        if (46 === s && (o = !0, s = r.charCodeAt(++i), i = I(e, i, s), s = r.charCodeAt(i)), 69 !== s && 101 !== s || (o = !0, s = r.charCodeAt(++i), 43 !== s && 45 !== s || (s = r.charCodeAt(++i)), i = I(e, i, s), s = r.charCodeAt(i)), 46 === s || (0, b.un)(s)) throw d(e.source, i, `Invalid number, expected digit but got: ${g(e,i)}.`);
        return A(e, o ? f.FLOAT : f.INT, t, i, r.slice(t, i))
      }

      function I(e, t, n) {
        if (!(0, b.yp)(n)) throw d(e.source, t, `Invalid number, expected digit but got: ${g(e,t)}.`);
        const r = e.source.body;
        let i = t + 1;
        for (;
          (0, b.yp)(r.charCodeAt(i));) ++i;
        return i
      }

      function D(e, t) {
        const n = e.source.body,
          r = n.length;
        let i = t + 1,
          s = i,
          o = "";
        for (; i < r;) {
          const r = n.charCodeAt(i);
          if (34 === r) return o += n.slice(s, i), A(e, f.STRING, t, i + 1, o);
          if (92 !== r) {
            if (10 === r || 13 === r) break;
            if (T(r)) ++i;
            else {
              if (!_(n, i)) throw d(e.source, i, `Invalid character within String: ${g(e,i)}.`);
              i += 2
            }
          } else {
            o += n.slice(s, i);
            const t = 117 === n.charCodeAt(i + 1) ? 123 === n.charCodeAt(i + 2) ? C(e, i) : R(e, i) : P(e, i);
            o += t.value, i += t.size, s = i
          }
        }
        throw d(e.source, i, "Unterminated string.")
      }

      function C(e, t) {
        const n = e.source.body;
        let r = 0,
          i = 3;
        for (; i < 12;) {
          const e = n.charCodeAt(t + i++);
          if (125 === e) {
            if (i < 5 || !T(r)) break;
            return {
              value: String.fromCodePoint(r),
              size: i
            }
          }
          if (r = r << 4 | L(e), r < 0) break
        }
        throw d(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t,t+i)}".`)
      }

      function R(e, t) {
        const n = e.source.body,
          r = S(n, t + 2);
        if (T(r)) return {
          value: String.fromCodePoint(r),
          size: 6
        };
        if (x(r) && 92 === n.charCodeAt(t + 6) && 117 === n.charCodeAt(t + 7)) {
          const e = S(n, t + 8);
          if (N(e)) return {
            value: String.fromCodePoint(r, e),
            size: 12
          }
        }
        throw d(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)
      }

      function S(e, t) {
        return L(e.charCodeAt(t)) << 12 | L(e.charCodeAt(t + 1)) << 8 | L(e.charCodeAt(t + 2)) << 4 | L(e.charCodeAt(t + 3))
      }

      function L(e) {
        return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
      }

      function P(e, t) {
        const n = e.source.body;
        switch (n.charCodeAt(t + 1)) {
          case 34:
            return {
              value: '"', size: 2
            };
          case 92:
            return {
              value: "\\", size: 2
            };
          case 47:
            return {
              value: "/", size: 2
            };
          case 98:
            return {
              value: "\b", size: 2
            };
          case 102:
            return {
              value: "\f", size: 2
            };
          case 110:
            return {
              value: "\n", size: 2
            };
          case 114:
            return {
              value: "\r", size: 2
            };
          case 116:
            return {
              value: "\t", size: 2
            }
        }
        throw d(e.source, t, `Invalid character escape sequence: "${n.slice(t,t+2)}".`)
      }

      function F(e, t) {
        const n = e.source.body,
          r = n.length;
        let i = e.lineStart,
          s = t + 3,
          o = s,
          a = "";
        const c = [];
        for (; s < r;) {
          const r = n.charCodeAt(s);
          if (34 === r && 34 === n.charCodeAt(s + 1) && 34 === n.charCodeAt(s + 2)) {
            a += n.slice(o, s), c.push(a);
            const r = A(e, f.BLOCK_STRING, t, s + 3, (0, E.OC)(c).join("\n"));
            return e.line += c.length - 1, e.lineStart = i, r
          }
          if (92 !== r || 34 !== n.charCodeAt(s + 1) || 34 !== n.charCodeAt(s + 2) || 34 !== n.charCodeAt(s + 3))
            if (10 !== r && 13 !== r)
              if (T(r)) ++s;
              else {
                if (!_(n, s)) throw d(e.source, s, `Invalid character within String: ${g(e,s)}.`);
                s += 2
              }
          else a += n.slice(o, s), c.push(a), 13 === r && 10 === n.charCodeAt(s + 1) ? s += 2 : ++s, a = "", o = s, i = s;
          else a += n.slice(o, s), o = s + 1, s += 4
        }
        throw d(e.source, s, "Unterminated string.")
      }

      function B(e, t) {
        const n = e.source.body,
          r = n.length;
        let i = t + 1;
        for (; i < r;) {
          const e = n.charCodeAt(i);
          if (!(0, b.xr)(e)) break;
          ++i
        }
        return A(e, f.NAME, t, i, n.slice(t, i))
      }
      var U = n(45335),
        M = n(55048);
      const j = globalThis.process ? function(e, t) {
        return e instanceof t
      } : function(e, t) {
        if (e instanceof t) return !0;
        if ("object" == typeof e && null !== e) {
          var n;
          const r = t.prototype[Symbol.toStringTag];
          if (r === (Symbol.toStringTag in e ? e[Symbol.toStringTag] : null === (n = e.constructor) || void 0 === n ? void 0 : n.name)) {
            const t = (0, M.N)(e);
            throw new Error(`Cannot use ${r} "${t}" from another module or realm.\n\nEnsure that there is only one instance of "graphql" in the node_modules\ndirectory. If different versions of "graphql" are the dependencies of other\nrelied on modules, use "resolutions" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate "graphql" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results.`)
          }
        }
        return !1
      };
      class V {
        constructor(e, t = "GraphQL request", n = {
          line: 1,
          column: 1
        }) {
          "string" == typeof e || (0, U.U)(!1, `Body must be a string. Received: ${(0,M.N)(e)}.`), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || (0, U.U)(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || (0, U.U)(!1, "column in locationOffset is 1-indexed and must be positive.")
        }
        get[Symbol.toStringTag]() {
          return "Source"
        }
      }
      class K {
        constructor(e, t = {}) {
          const n = function(e) {
            return j(e, V)
          }(e) ? e : new V(e);
          this._lexer = new v(n), this._options = t, this._tokenCounter = 0
        }
        get tokenCount() {
          return this._tokenCounter
        }
        parseName() {
          const e = this.expectToken(f.NAME);
          return this.node(e, {
            kind: m.b.NAME,
            value: e.value
          })
        }
        parseDocument() {
          return this.node(this._lexer.token, {
            kind: m.b.DOCUMENT,
            definitions: this.many(f.SOF, this.parseDefinition, f.EOF)
          })
        }
        parseDefinition() {
          if (this.peek(f.BRACE_L)) return this.parseOperationDefinition();
          const e = this.peekDescription(),
            t = e ? this._lexer.lookahead() : this._lexer.token;
          if (t.kind === f.NAME) {
            switch (t.value) {
              case "schema":
                return this.parseSchemaDefinition();
              case "scalar":
                return this.parseScalarTypeDefinition();
              case "type":
                return this.parseObjectTypeDefinition();
              case "interface":
                return this.parseInterfaceTypeDefinition();
              case "union":
                return this.parseUnionTypeDefinition();
              case "enum":
                return this.parseEnumTypeDefinition();
              case "input":
                return this.parseInputObjectTypeDefinition();
              case "directive":
                return this.parseDirectiveDefinition()
            }
            if (e) throw d(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
            switch (t.value) {
              case "query":
              case "mutation":
              case "subscription":
                return this.parseOperationDefinition();
              case "fragment":
                return this.parseFragmentDefinition();
              case "extend":
                return this.parseTypeSystemExtension()
            }
          }
          throw this.unexpected(t)
        }
        parseOperationDefinition() {
          const e = this._lexer.token;
          if (this.peek(f.BRACE_L)) return this.node(e, {
            kind: m.b.OPERATION_DEFINITION,
            operation: l.cE.QUERY,
            name: void 0,
            variableDefinitions: [],
            directives: [],
            selectionSet: this.parseSelectionSet()
          });
          const t = this.parseOperationType();
          let n;
          return this.peek(f.NAME) && (n = this.parseName()), this.node(e, {
            kind: m.b.OPERATION_DEFINITION,
            operation: t,
            name: n,
            variableDefinitions: this.parseVariableDefinitions(),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          })
        }
        parseOperationType() {
          const e = this.expectToken(f.NAME);
          switch (e.value) {
            case "query":
              return l.cE.QUERY;
            case "mutation":
              return l.cE.MUTATION;
            case "subscription":
              return l.cE.SUBSCRIPTION
          }
          throw this.unexpected(e)
        }
        parseVariableDefinitions() {
          return this.optionalMany(f.PAREN_L, this.parseVariableDefinition, f.PAREN_R)
        }
        parseVariableDefinition() {
          return this.node(this._lexer.token, {
            kind: m.b.VARIABLE_DEFINITION,
            variable: this.parseVariable(),
            type: (this.expectToken(f.COLON), this.parseTypeReference()),
            defaultValue: this.expectOptionalToken(f.EQUALS) ? this.parseConstValueLiteral() : void 0,
            directives: this.parseConstDirectives()
          })
        }
        parseVariable() {
          const e = this._lexer.token;
          return this.expectToken(f.DOLLAR), this.node(e, {
            kind: m.b.VARIABLE,
            name: this.parseName()
          })
        }
        parseSelectionSet() {
          return this.node(this._lexer.token, {
            kind: m.b.SELECTION_SET,
            selections: this.many(f.BRACE_L, this.parseSelection, f.BRACE_R)
          })
        }
        parseSelection() {
          return this.peek(f.SPREAD) ? this.parseFragment() : this.parseField()
        }
        parseField() {
          const e = this._lexer.token,
            t = this.parseName();
          let n, r;
          return this.expectOptionalToken(f.COLON) ? (n = t, r = this.parseName()) : r = t, this.node(e, {
            kind: m.b.FIELD,
            alias: n,
            name: r,
            arguments: this.parseArguments(!1),
            directives: this.parseDirectives(!1),
            selectionSet: this.peek(f.BRACE_L) ? this.parseSelectionSet() : void 0
          })
        }
        parseArguments(e) {
          const t = e ? this.parseConstArgument : this.parseArgument;
          return this.optionalMany(f.PAREN_L, t, f.PAREN_R)
        }
        parseArgument(e = !1) {
          const t = this._lexer.token,
            n = this.parseName();
          return this.expectToken(f.COLON), this.node(t, {
            kind: m.b.ARGUMENT,
            name: n,
            value: this.parseValueLiteral(e)
          })
        }
        parseConstArgument() {
          return this.parseArgument(!0)
        }
        parseFragment() {
          const e = this._lexer.token;
          this.expectToken(f.SPREAD);
          const t = this.expectOptionalKeyword("on");
          return !t && this.peek(f.NAME) ? this.node(e, {
            kind: m.b.FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(!1)
          }) : this.node(e, {
            kind: m.b.INLINE_FRAGMENT,
            typeCondition: t ? this.parseNamedType() : void 0,
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          })
        }
        parseFragmentDefinition() {
          const e = this._lexer.token;
          return this.expectKeyword("fragment"), !0 === this._options.allowLegacyFragmentVariables ? this.node(e, {
            kind: m.b.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          }) : this.node(e, {
            kind: m.b.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          })
        }
        parseFragmentName() {
          if ("on" === this._lexer.token.value) throw this.unexpected();
          return this.parseName()
        }
        parseValueLiteral(e) {
          const t = this._lexer.token;
          switch (t.kind) {
            case f.BRACKET_L:
              return this.parseList(e);
            case f.BRACE_L:
              return this.parseObject(e);
            case f.INT:
              return this.advanceLexer(), this.node(t, {
                kind: m.b.INT,
                value: t.value
              });
            case f.FLOAT:
              return this.advanceLexer(), this.node(t, {
                kind: m.b.FLOAT,
                value: t.value
              });
            case f.STRING:
            case f.BLOCK_STRING:
              return this.parseStringLiteral();
            case f.NAME:
              switch (this.advanceLexer(), t.value) {
                case "true":
                  return this.node(t, {
                    kind: m.b.BOOLEAN,
                    value: !0
                  });
                case "false":
                  return this.node(t, {
                    kind: m.b.BOOLEAN,
                    value: !1
                  });
                case "null":
                  return this.node(t, {
                    kind: m.b.NULL
                  });
                default:
                  return this.node(t, {
                    kind: m.b.ENUM,
                    value: t.value
                  })
              }
            case f.DOLLAR:
              if (e) {
                if (this.expectToken(f.DOLLAR), this._lexer.token.kind === f.NAME) {
                  const e = this._lexer.token.value;
                  throw d(this._lexer.source, t.start, `Unexpected variable "$${e}" in constant value.`)
                }
                throw this.unexpected(t)
              }
              return this.parseVariable();
            default:
              throw this.unexpected()
          }
        }
        parseConstValueLiteral() {
          return this.parseValueLiteral(!0)
        }
        parseStringLiteral() {
          const e = this._lexer.token;
          return this.advanceLexer(), this.node(e, {
            kind: m.b.STRING,
            value: e.value,
            block: e.kind === f.BLOCK_STRING
          })
        }
        parseList(e) {
          return this.node(this._lexer.token, {
            kind: m.b.LIST,
            values: this.any(f.BRACKET_L, (() => this.parseValueLiteral(e)), f.BRACKET_R)
          })
        }
        parseObject(e) {
          return this.node(this._lexer.token, {
            kind: m.b.OBJECT,
            fields: this.any(f.BRACE_L, (() => this.parseObjectField(e)), f.BRACE_R)
          })
        }
        parseObjectField(e) {
          const t = this._lexer.token,
            n = this.parseName();
          return this.expectToken(f.COLON), this.node(t, {
            kind: m.b.OBJECT_FIELD,
            name: n,
            value: this.parseValueLiteral(e)
          })
        }
        parseDirectives(e) {
          const t = [];
          for (; this.peek(f.AT);) t.push(this.parseDirective(e));
          return t
        }
        parseConstDirectives() {
          return this.parseDirectives(!0)
        }
        parseDirective(e) {
          const t = this._lexer.token;
          return this.expectToken(f.AT), this.node(t, {
            kind: m.b.DIRECTIVE,
            name: this.parseName(),
            arguments: this.parseArguments(e)
          })
        }
        parseTypeReference() {
          const e = this._lexer.token;
          let t;
          if (this.expectOptionalToken(f.BRACKET_L)) {
            const n = this.parseTypeReference();
            this.expectToken(f.BRACKET_R), t = this.node(e, {
              kind: m.b.LIST_TYPE,
              type: n
            })
          } else t = this.parseNamedType();
          return this.expectOptionalToken(f.BANG) ? this.node(e, {
            kind: m.b.NON_NULL_TYPE,
            type: t
          }) : t
        }
        parseNamedType() {
          return this.node(this._lexer.token, {
            kind: m.b.NAMED_TYPE,
            name: this.parseName()
          })
        }
        peekDescription() {
          return this.peek(f.STRING) || this.peek(f.BLOCK_STRING)
        }
        parseDescription() {
          if (this.peekDescription()) return this.parseStringLiteral()
        }
        parseSchemaDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("schema");
          const n = this.parseConstDirectives(),
            r = this.many(f.BRACE_L, this.parseOperationTypeDefinition, f.BRACE_R);
          return this.node(e, {
            kind: m.b.SCHEMA_DEFINITION,
            description: t,
            directives: n,
            operationTypes: r
          })
        }
        parseOperationTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseOperationType();
          this.expectToken(f.COLON);
          const n = this.parseNamedType();
          return this.node(e, {
            kind: m.b.OPERATION_TYPE_DEFINITION,
            operation: t,
            type: n
          })
        }
        parseScalarTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("scalar");
          const n = this.parseName(),
            r = this.parseConstDirectives();
          return this.node(e, {
            kind: m.b.SCALAR_TYPE_DEFINITION,
            description: t,
            name: n,
            directives: r
          })
        }
        parseObjectTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("type");
          const n = this.parseName(),
            r = this.parseImplementsInterfaces(),
            i = this.parseConstDirectives(),
            s = this.parseFieldsDefinition();
          return this.node(e, {
            kind: m.b.OBJECT_TYPE_DEFINITION,
            description: t,
            name: n,
            interfaces: r,
            directives: i,
            fields: s
          })
        }
        parseImplementsInterfaces() {
          return this.expectOptionalKeyword("implements") ? this.delimitedMany(f.AMP, this.parseNamedType) : []
        }
        parseFieldsDefinition() {
          return this.optionalMany(f.BRACE_L, this.parseFieldDefinition, f.BRACE_R)
        }
        parseFieldDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription(),
            n = this.parseName(),
            r = this.parseArgumentDefs();
          this.expectToken(f.COLON);
          const i = this.parseTypeReference(),
            s = this.parseConstDirectives();
          return this.node(e, {
            kind: m.b.FIELD_DEFINITION,
            description: t,
            name: n,
            arguments: r,
            type: i,
            directives: s
          })
        }
        parseArgumentDefs() {
          return this.optionalMany(f.PAREN_L, this.parseInputValueDef, f.PAREN_R)
        }
        parseInputValueDef() {
          const e = this._lexer.token,
            t = this.parseDescription(),
            n = this.parseName();
          this.expectToken(f.COLON);
          const r = this.parseTypeReference();
          let i;
          this.expectOptionalToken(f.EQUALS) && (i = this.parseConstValueLiteral());
          const s = this.parseConstDirectives();
          return this.node(e, {
            kind: m.b.INPUT_VALUE_DEFINITION,
            description: t,
            name: n,
            type: r,
            defaultValue: i,
            directives: s
          })
        }
        parseInterfaceTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("interface");
          const n = this.parseName(),
            r = this.parseImplementsInterfaces(),
            i = this.parseConstDirectives(),
            s = this.parseFieldsDefinition();
          return this.node(e, {
            kind: m.b.INTERFACE_TYPE_DEFINITION,
            description: t,
            name: n,
            interfaces: r,
            directives: i,
            fields: s
          })
        }
        parseUnionTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("union");
          const n = this.parseName(),
            r = this.parseConstDirectives(),
            i = this.parseUnionMemberTypes();
          return this.node(e, {
            kind: m.b.UNION_TYPE_DEFINITION,
            description: t,
            name: n,
            directives: r,
            types: i
          })
        }
        parseUnionMemberTypes() {
          return this.expectOptionalToken(f.EQUALS) ? this.delimitedMany(f.PIPE, this.parseNamedType) : []
        }
        parseEnumTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("enum");
          const n = this.parseName(),
            r = this.parseConstDirectives(),
            i = this.parseEnumValuesDefinition();
          return this.node(e, {
            kind: m.b.ENUM_TYPE_DEFINITION,
            description: t,
            name: n,
            directives: r,
            values: i
          })
        }
        parseEnumValuesDefinition() {
          return this.optionalMany(f.BRACE_L, this.parseEnumValueDefinition, f.BRACE_R)
        }
        parseEnumValueDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription(),
            n = this.parseEnumValueName(),
            r = this.parseConstDirectives();
          return this.node(e, {
            kind: m.b.ENUM_VALUE_DEFINITION,
            description: t,
            name: n,
            directives: r
          })
        }
        parseEnumValueName() {
          if ("true" === this._lexer.token.value || "false" === this._lexer.token.value || "null" === this._lexer.token.value) throw d(this._lexer.source, this._lexer.token.start, `${G(this._lexer.token)} is reserved and cannot be used for an enum value.`);
          return this.parseName()
        }
        parseInputObjectTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("input");
          const n = this.parseName(),
            r = this.parseConstDirectives(),
            i = this.parseInputFieldsDefinition();
          return this.node(e, {
            kind: m.b.INPUT_OBJECT_TYPE_DEFINITION,
            description: t,
            name: n,
            directives: r,
            fields: i
          })
        }
        parseInputFieldsDefinition() {
          return this.optionalMany(f.BRACE_L, this.parseInputValueDef, f.BRACE_R)
        }
        parseTypeSystemExtension() {
          const e = this._lexer.lookahead();
          if (e.kind === f.NAME) switch (e.value) {
            case "schema":
              return this.parseSchemaExtension();
            case "scalar":
              return this.parseScalarTypeExtension();
            case "type":
              return this.parseObjectTypeExtension();
            case "interface":
              return this.parseInterfaceTypeExtension();
            case "union":
              return this.parseUnionTypeExtension();
            case "enum":
              return this.parseEnumTypeExtension();
            case "input":
              return this.parseInputObjectTypeExtension()
          }
          throw this.unexpected(e)
        }
        parseSchemaExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("schema");
          const t = this.parseConstDirectives(),
            n = this.optionalMany(f.BRACE_L, this.parseOperationTypeDefinition, f.BRACE_R);
          if (0 === t.length && 0 === n.length) throw this.unexpected();
          return this.node(e, {
            kind: m.b.SCHEMA_EXTENSION,
            directives: t,
            operationTypes: n
          })
        }
        parseScalarTypeExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("scalar");
          const t = this.parseName(),
            n = this.parseConstDirectives();
          if (0 === n.length) throw this.unexpected();
          return this.node(e, {
            kind: m.b.SCALAR_TYPE_EXTENSION,
            name: t,
            directives: n
          })
        }
        parseObjectTypeExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("type");
          const t = this.parseName(),
            n = this.parseImplementsInterfaces(),
            r = this.parseConstDirectives(),
            i = this.parseFieldsDefinition();
          if (0 === n.length && 0 === r.length && 0 === i.length) throw this.unexpected();
          return this.node(e, {
            kind: m.b.OBJECT_TYPE_EXTENSION,
            name: t,
            interfaces: n,
            directives: r,
            fields: i
          })
        }
        parseInterfaceTypeExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("interface");
          const t = this.parseName(),
            n = this.parseImplementsInterfaces(),
            r = this.parseConstDirectives(),
            i = this.parseFieldsDefinition();
          if (0 === n.length && 0 === r.length && 0 === i.length) throw this.unexpected();
          return this.node(e, {
            kind: m.b.INTERFACE_TYPE_EXTENSION,
            name: t,
            interfaces: n,
            directives: r,
            fields: i
          })
        }
        parseUnionTypeExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("union");
          const t = this.parseName(),
            n = this.parseConstDirectives(),
            r = this.parseUnionMemberTypes();
          if (0 === n.length && 0 === r.length) throw this.unexpected();
          return this.node(e, {
            kind: m.b.UNION_TYPE_EXTENSION,
            name: t,
            directives: n,
            types: r
          })
        }
        parseEnumTypeExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("enum");
          const t = this.parseName(),
            n = this.parseConstDirectives(),
            r = this.parseEnumValuesDefinition();
          if (0 === n.length && 0 === r.length) throw this.unexpected();
          return this.node(e, {
            kind: m.b.ENUM_TYPE_EXTENSION,
            name: t,
            directives: n,
            values: r
          })
        }
        parseInputObjectTypeExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("input");
          const t = this.parseName(),
            n = this.parseConstDirectives(),
            r = this.parseInputFieldsDefinition();
          if (0 === n.length && 0 === r.length) throw this.unexpected();
          return this.node(e, {
            kind: m.b.INPUT_OBJECT_TYPE_EXTENSION,
            name: t,
            directives: n,
            fields: r
          })
        }
        parseDirectiveDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("directive"), this.expectToken(f.AT);
          const n = this.parseName(),
            r = this.parseArgumentDefs(),
            i = this.expectOptionalKeyword("repeatable");
          this.expectKeyword("on");
          const s = this.parseDirectiveLocations();
          return this.node(e, {
            kind: m.b.DIRECTIVE_DEFINITION,
            description: t,
            name: n,
            arguments: r,
            repeatable: i,
            locations: s
          })
        }
        parseDirectiveLocations() {
          return this.delimitedMany(f.PIPE, this.parseDirectiveLocation)
        }
        parseDirectiveLocation() {
          const e = this._lexer.token,
            t = this.parseName();
          if (Object.prototype.hasOwnProperty.call(p, t.value)) return t;
          throw this.unexpected(e)
        }
        node(e, t) {
          return !0 !== this._options.noLocation && (t.loc = new l.aZ(e, this._lexer.lastToken, this._lexer.source)), t
        }
        peek(e) {
          return this._lexer.token.kind === e
        }
        expectToken(e) {
          const t = this._lexer.token;
          if (t.kind === e) return this.advanceLexer(), t;
          throw d(this._lexer.source, t.start, `Expected ${$(e)}, found ${G(t)}.`)
        }
        expectOptionalToken(e) {
          return this._lexer.token.kind === e && (this.advanceLexer(), !0)
        }
        expectKeyword(e) {
          const t = this._lexer.token;
          if (t.kind !== f.NAME || t.value !== e) throw d(this._lexer.source, t.start, `Expected "${e}", found ${G(t)}.`);
          this.advanceLexer()
        }
        expectOptionalKeyword(e) {
          const t = this._lexer.token;
          return t.kind === f.NAME && t.value === e && (this.advanceLexer(), !0)
        }
        unexpected(e) {
          const t = null != e ? e : this._lexer.token;
          return d(this._lexer.source, t.start, `Unexpected ${G(t)}.`)
        }
        any(e, t, n) {
          this.expectToken(e);
          const r = [];
          for (; !this.expectOptionalToken(n);) r.push(t.call(this));
          return r
        }
        optionalMany(e, t, n) {
          if (this.expectOptionalToken(e)) {
            const e = [];
            do {
              e.push(t.call(this))
            } while (!this.expectOptionalToken(n));
            return e
          }
          return []
        }
        many(e, t, n) {
          this.expectToken(e);
          const r = [];
          do {
            r.push(t.call(this))
          } while (!this.expectOptionalToken(n));
          return r
        }
        delimitedMany(e, t) {
          this.expectOptionalToken(e);
          const n = [];
          do {
            n.push(t.call(this))
          } while (this.expectOptionalToken(e));
          return n
        }
        advanceLexer() {
          const {
            maxTokens: e
          } = this._options, t = this._lexer.advance();
          if (t.kind !== f.EOF && (++this._tokenCounter, void 0 !== e && this._tokenCounter > e)) throw d(this._lexer.source, t.start, `Document contains more that ${e} tokens. Parsing aborted.`)
        }
      }

      function G(e) {
        const t = e.value;
        return $(e.kind) + (null != t ? ` "${t}"` : "")
      }

      function $(e) {
        return function(e) {
          return e === f.BANG || e === f.DOLLAR || e === f.AMP || e === f.PAREN_L || e === f.PAREN_R || e === f.SPREAD || e === f.COLON || e === f.EQUALS || e === f.AT || e === f.BRACKET_L || e === f.BRACKET_R || e === f.BRACE_L || e === f.PIPE || e === f.BRACE_R
        }(e) ? `"${e}"` : e
      }
      var H = new Map,
        Q = new Map,
        q = !0,
        Y = !1;

      function z(e) {
        return e.replace(/[\s,]+/g, " ").trim()
      }

      function J(e) {
        var t = z(e);
        if (!H.has(t)) {
          var n = function(e, t) {
            const n = new K(e, t),
              r = n.parseDocument();
            return Object.defineProperty(r, "tokenCount", {
              enumerable: !1,
              value: n.tokenCount
            }), r
          }(e, {
            experimentalFragmentVariables: Y,
            allowLegacyFragmentVariables: Y
          });
          if (!n || "Document" !== n.kind) throw new Error("Not a valid GraphQL document.");
          H.set(t, function(e) {
            var t = new Set(e.definitions);
            t.forEach((function(e) {
              e.loc && delete e.loc, Object.keys(e).forEach((function(n) {
                var r = e[n];
                r && "object" == typeof r && t.add(r)
              }))
            }));
            var n = e.loc;
            return n && (delete n.startToken, delete n.endToken), e
          }(function(e) {
            var t = new Set,
              n = [];
            return e.definitions.forEach((function(e) {
              if ("FragmentDefinition" === e.kind) {
                var r = e.name.value,
                  i = z((o = e.loc).source.body.substring(o.start, o.end)),
                  s = Q.get(r);
                s && !s.has(i) ? q && console.warn("Warning: fragment with name " + r + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names") : s || Q.set(r, s = new Set), s.add(i), t.has(i) || (t.add(i), n.push(e))
              } else n.push(e);
              var o
            })), (0, r.__assign)((0, r.__assign)({}, e), {
              definitions: n
            })
          }(n)))
        }
        return H.get(t)
      }

      function X(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        "string" == typeof e && (e = [e]);
        var r = e[0];
        return t.forEach((function(t, n) {
          t && "Document" === t.kind ? r += t.loc.source.body : r += t, r += e[n + 1]
        })), J(r)
      }
      var W, Z = X;
      (W = X || (X = {})).gql = Z, W.resetCaches = function() {
        H.clear(), Q.clear()
      }, W.disableFragmentWarnings = function() {
        q = !1
      }, W.enableExperimentalFragmentVariables = function() {
        Y = !0
      }, W.disableExperimentalFragmentVariables = function() {
        Y = !1
      }, X.default = X
    },
    48848: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        console.warn("[react-gtm]", e)
      }
    },
    61162: (e, t, n) => {
      var r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== n.g && n.g,
        i = function() {
          function e() {
            this.fetch = !1, this.DOMException = r.DOMException
          }
          return e.prototype = r, new e
        }();
      ! function(e) {
        ! function(t) {
          var r = void 0 !== e && e || "undefined" != typeof self && self || void 0 !== n.g && n.g || {},
            i = "URLSearchParams" in r,
            s = "Symbol" in r && "iterator" in Symbol,
            o = "FileReader" in r && "Blob" in r && function() {
              try {
                return new Blob, !0
              } catch (e) {
                return !1
              }
            }(),
            a = "FormData" in r,
            c = "ArrayBuffer" in r;
          if (c) var u = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            h = ArrayBuffer.isView || function(e) {
              return e && u.indexOf(Object.prototype.toString.call(e)) > -1
            };

          function d(e) {
            if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e) throw new TypeError('Invalid character in header field name: "' + e + '"');
            return e.toLowerCase()
          }

          function p(e) {
            return "string" != typeof e && (e = String(e)), e
          }

          function l(e) {
            var t = {
              next: function() {
                var t = e.shift();
                return {
                  done: void 0 === t,
                  value: t
                }
              }
            };
            return s && (t[Symbol.iterator] = function() {
              return t
            }), t
          }

          function f(e) {
            this.map = {}, e instanceof f ? e.forEach((function(e, t) {
              this.append(t, e)
            }), this) : Array.isArray(e) ? e.forEach((function(e) {
              if (2 != e.length) throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + e.length);
              this.append(e[0], e[1])
            }), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) {
              this.append(t, e[t])
            }), this)
          }

          function y(e) {
            if (!e._noBody) return e.bodyUsed ? Promise.reject(new TypeError("Already read")) : void(e.bodyUsed = !0)
          }

          function m(e) {
            return new Promise((function(t, n) {
              e.onload = function() {
                t(e.result)
              }, e.onerror = function() {
                n(e.error)
              }
            }))
          }

          function E(e) {
            var t = new FileReader,
              n = m(t);
            return t.readAsArrayBuffer(e), n
          }

          function b(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer
          }

          function v() {
            return this.bodyUsed = !1, this._initBody = function(e) {
              var t;
              this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : o && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : a && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : i && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : c && o && (t = e) && DataView.prototype.isPrototypeOf(t) ? (this._bodyArrayBuffer = b(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : c && (ArrayBuffer.prototype.isPrototypeOf(e) || h(e)) ? this._bodyArrayBuffer = b(e) : this._bodyText = e = Object.prototype.toString.call(e) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : i && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, o && (this.blob = function() {
              var e = y(this);
              if (e) return e;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData) throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]))
            }), this.arrayBuffer = function() {
              if (this._bodyArrayBuffer) return y(this) || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer));
              if (o) return this.blob().then(E);
              throw new Error("could not read as ArrayBuffer")
            }, this.text = function() {
              var e, t, n, r, i, s = y(this);
              if (s) return s;
              if (this._bodyBlob) return e = this._bodyBlob, n = m(t = new FileReader), i = (r = /charset=([A-Za-z0-9_-]+)/.exec(e.type)) ? r[1] : "utf-8", t.readAsText(e, i), n;
              if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
                return n.join("")
              }(this._bodyArrayBuffer));
              if (this._bodyFormData) throw new Error("could not read FormData body as text");
              return Promise.resolve(this._bodyText)
            }, a && (this.formData = function() {
              return this.text().then(x)
            }), this.json = function() {
              return this.text().then(JSON.parse)
            }, this
          }
          f.prototype.append = function(e, t) {
            e = d(e), t = p(t);
            var n = this.map[e];
            this.map[e] = n ? n + ", " + t : t
          }, f.prototype.delete = function(e) {
            delete this.map[d(e)]
          }, f.prototype.get = function(e) {
            return e = d(e), this.has(e) ? this.map[e] : null
          }, f.prototype.has = function(e) {
            return this.map.hasOwnProperty(d(e))
          }, f.prototype.set = function(e, t) {
            this.map[d(e)] = p(t)
          }, f.prototype.forEach = function(e, t) {
            for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
          }, f.prototype.keys = function() {
            var e = [];
            return this.forEach((function(t, n) {
              e.push(n)
            })), l(e)
          }, f.prototype.values = function() {
            var e = [];
            return this.forEach((function(t) {
              e.push(t)
            })), l(e)
          }, f.prototype.entries = function() {
            var e = [];
            return this.forEach((function(t, n) {
              e.push([n, t])
            })), l(e)
          }, s && (f.prototype[Symbol.iterator] = f.prototype.entries);
          var T = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];

          function _(e, t) {
            if (!(this instanceof _)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            var n, i, s = (t = t || {}).body;
            if (e instanceof _) {
              if (e.bodyUsed) throw new TypeError("Already read");
              this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new f(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, s || null == e._bodyInit || (s = e._bodyInit, e.bodyUsed = !0)
            } else this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new f(t.headers)), this.method = (i = (n = t.method || this.method || "GET").toUpperCase(), T.indexOf(i) > -1 ? i : n), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal || function() {
                if ("AbortController" in r) return (new AbortController).signal
              }(), this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && s) throw new TypeError("Body not allowed for GET or HEAD requests");
            if (this._initBody(s), !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== t.cache && "no-cache" !== t.cache)) {
              var o = /([?&])_=[^&]*/;
              o.test(this.url) ? this.url = this.url.replace(o, "$1_=" + (new Date).getTime()) : this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
            }
          }

          function x(e) {
            var t = new FormData;
            return e.trim().split("&").forEach((function(e) {
              if (e) {
                var n = e.split("="),
                  r = n.shift().replace(/\+/g, " "),
                  i = n.join("=").replace(/\+/g, " ");
                t.append(decodeURIComponent(r), decodeURIComponent(i))
              }
            })), t
          }

          function N(e, t) {
            if (!(this instanceof N)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            if (t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.status < 200 || this.status > 599) throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
            this.ok = this.status >= 200 && this.status < 300, this.statusText = void 0 === t.statusText ? "" : "" + t.statusText, this.headers = new f(t.headers), this.url = t.url || "", this._initBody(e)
          }
          _.prototype.clone = function() {
            return new _(this, {
              body: this._bodyInit
            })
          }, v.call(_.prototype), v.call(N.prototype), N.prototype.clone = function() {
            return new N(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new f(this.headers),
              url: this.url
            })
          }, N.error = function() {
            var e = new N(null, {
              status: 200,
              statusText: ""
            });
            return e.ok = !1, e.status = 0, e.type = "error", e
          };
          var g = [301, 302, 303, 307, 308];
          N.redirect = function(e, t) {
            if (-1 === g.indexOf(t)) throw new RangeError("Invalid status code");
            return new N(null, {
              status: t,
              headers: {
                location: e
              }
            })
          }, t.DOMException = r.DOMException;
          try {
            new t.DOMException
          } catch (e) {
            t.DOMException = function(e, t) {
              this.message = e, this.name = t;
              var n = Error(e);
              this.stack = n.stack
            }, t.DOMException.prototype = Object.create(Error.prototype), t.DOMException.prototype.constructor = t.DOMException
          }

          function A(e, n) {
            return new Promise((function(i, s) {
              var a = new _(e, n);
              if (a.signal && a.signal.aborted) return s(new t.DOMException("Aborted", "AbortError"));
              var u = new XMLHttpRequest;

              function h() {
                u.abort()
              }
              if (u.onload = function() {
                  var e, t, n = {
                    statusText: u.statusText,
                    headers: (e = u.getAllResponseHeaders() || "", t = new f, e.replace(/\r?\n[\t ]+/g, " ").split("\r").map((function(e) {
                      return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e
                    })).forEach((function(e) {
                      var n = e.split(":"),
                        r = n.shift().trim();
                      if (r) {
                        var i = n.join(":").trim();
                        try {
                          t.append(r, i)
                        } catch (e) {
                          console.warn("Response " + e.message)
                        }
                      }
                    })), t)
                  };
                  0 === a.url.indexOf("file://") && (u.status < 200 || u.status > 599) ? n.status = 200 : n.status = u.status, n.url = "responseURL" in u ? u.responseURL : n.headers.get("X-Request-URL");
                  var r = "response" in u ? u.response : u.responseText;
                  setTimeout((function() {
                    i(new N(r, n))
                  }), 0)
                }, u.onerror = function() {
                  setTimeout((function() {
                    s(new TypeError("Network request failed"))
                  }), 0)
                }, u.ontimeout = function() {
                  setTimeout((function() {
                    s(new TypeError("Network request timed out"))
                  }), 0)
                }, u.onabort = function() {
                  setTimeout((function() {
                    s(new t.DOMException("Aborted", "AbortError"))
                  }), 0)
                }, u.open(a.method, function(e) {
                  try {
                    return "" === e && r.location.href ? r.location.href : e
                  } catch (t) {
                    return e
                  }
                }(a.url), !0), "include" === a.credentials ? u.withCredentials = !0 : "omit" === a.credentials && (u.withCredentials = !1), "responseType" in u && (o ? u.responseType = "blob" : c && (u.responseType = "arraybuffer")), n && "object" == typeof n.headers && !(n.headers instanceof f || r.Headers && n.headers instanceof r.Headers)) {
                var l = [];
                Object.getOwnPropertyNames(n.headers).forEach((function(e) {
                  l.push(d(e)), u.setRequestHeader(e, p(n.headers[e]))
                })), a.headers.forEach((function(e, t) {
                  -1 === l.indexOf(t) && u.setRequestHeader(t, e)
                }))
              } else a.headers.forEach((function(e, t) {
                u.setRequestHeader(t, e)
              }));
              a.signal && (a.signal.addEventListener("abort", h), u.onreadystatechange = function() {
                4 === u.readyState && a.signal.removeEventListener("abort", h)
              }), u.send(void 0 === a._bodyInit ? null : a._bodyInit)
            }))
          }
          A.polyfill = !0, r.fetch || (r.fetch = A, r.Headers = f, r.Request = _, r.Response = N), t.Headers = f, t.Request = _, t.Response = N, t.fetch = A
        }({})
      }(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
      var s = r.fetch ? r : i;
      (t = s.fetch).default = s.fetch, t.fetch = s.fetch, t.Headers = s.Headers, t.Request = s.Request, t.Response = s.Response, e.exports = t
    },
    62944: (e, t, n) => {
      "use strict";
      n.d(t, {
        e: () => f
      });
      var r = n(78322),
        i = n(60276),
        s = n(45250),
        o = n(21429),
        a = n(57308),
        c = n(7569),
        u = n(86570),
        h = n(15492),
        d = n(74197);

      function p(e) {
        var t = Object.create(null),
          n = Object.create(null);
        return (0, c.E)(e) && e.forEach((function(e) {
          var r;
          t[e.message] = e, "string" == typeof(null === (r = e.extensions) || void 0 === r ? void 0 : r.code) && (n[e.extensions.code] = e)
        })), {
          persistedQueryNotSupported: !(!t.PersistedQueryNotSupported && !n.PERSISTED_QUERY_NOT_SUPPORTED),
          persistedQueryNotFound: !(!t.PersistedQueryNotFound && !n.PERSISTED_QUERY_NOT_FOUND)
        }
      }
      var l = {
          disable: function(e) {
            return e.meta.persistedQueryNotSupported
          },
          retry: function(e) {
            var t = e.meta;
            return t.persistedQueryNotSupported || t.persistedQueryNotFound
          },
          useGETForHashedQueries: !1
        },
        f = function(e) {
          var t;

          function n() {
            t = void 0
          }(0, i.V1)(e && ("function" == typeof e.sha256 || "function" == typeof e.generateHash), 43);
          var f = (0, u.o)(l, e),
            y = f.sha256,
            m = f.generateHash,
            E = void 0 === m ? function(e) {
              return Promise.resolve(y((0, s.y)(e)))
            } : m,
            b = f.disable,
            v = f.retry,
            T = f.useGETForHashedQueries,
            _ = !0,
            x = function(e) {
              return new Promise((function(t) {
                return t(E(e))
              }))
            };
          return Object.assign(new o.C((function(e, s) {
            (0, i.V1)(s, 44);
            var o = e.query;
            return new a.c((function(i) {
              var a, u, l = !1,
                f = !1,
                y = function(t, r) {
                  var i = t.response,
                    o = t.networkError;
                  if (!l && (i && i.errors || o)) {
                    l = !0;
                    var h = [],
                      d = i && i.errors;
                    (0, c.E)(d) && h.push.apply(h, d);
                    var y = void 0;
                    "string" != typeof(null == o ? void 0 : o.result) && (y = o && o.result && o.result.errors), (0, c.E)(y) && h.push.apply(h, y);
                    var E = {
                      response: i,
                      networkError: o,
                      operation: e,
                      graphQLErrors: (0, c.E)(h) ? h : void 0,
                      meta: p(h)
                    };
                    if ((_ = !b(E)) || n(), v(E)) return a && a.unsubscribe(), e.setContext({
                      http: {
                        includeQuery: !0,
                        includeExtensions: _
                      },
                      fetchOptions: {
                        method: "POST"
                      }
                    }), f && e.setContext({
                      fetchOptions: u
                    }), void(a = s(e).subscribe(m))
                  }
                  r()
                },
                m = {
                  next: function(e) {
                    y({
                      response: e
                    }, (function() {
                      return i.next(e)
                    }))
                  },
                  error: function(e) {
                    y({
                      networkError: e
                    }, (function() {
                      return i.error(e)
                    }))
                  },
                  complete: i.complete.bind(i)
                };
              return e.setContext({
                  http: {
                    includeQuery: !_,
                    includeExtensions: _
                  }
                }), T && _ && ! function(e) {
                  return e.query.definitions.some((function(e) {
                    return "OperationDefinition" === e.kind && "mutation" === e.operation
                  }))
                }(e) && (e.setContext((function(e) {
                  var t = e.fetchOptions,
                    n = void 0 === t ? {} : t;
                  return u = n, {
                    fetchOptions: (0, r.__assign)((0, r.__assign)({}, n), {
                      method: "GET"
                    })
                  }
                })), f = !0), _ ? function(e) {
                  if (!e || "object" != typeof e) return x(e);
                  t || (t = new h.A(d.v["PersistedQueryLink.persistedQueryHashes"] || 2e3));
                  var n = t.get(e);
                  return n || t.set(e, n = x(e)), n
                }(o).then((function(t) {
                  e.extensions.persistedQuery = {
                    version: 1,
                    sha256Hash: t
                  }, a = s(e).subscribe(m)
                })).catch(i.error.bind(i)) : a = s(e).subscribe(m),
                function() {
                  a && a.unsubscribe()
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
    88718: (e, t, n) => {
      "use strict";
      n.d(t, {
        X: () => a
      });
      var r = n(78322),
        i = n(60276),
        s = n(82540),
        o = n(488),
        a = function(e) {
          var t = e.client,
            n = e.children,
            a = (0, o.l)(),
            c = s.useContext(a),
            u = s.useMemo((function() {
              return (0, r.__assign)((0, r.__assign)({}, c), {
                client: t || c.client
              })
            }), [c, t]);
          return (0, i.V1)(u.client, 55), s.createElement(a.Provider, {
            value: u
          }, n)
        }
    },
    89864: (e, t, n) => {
      "use strict";
      var r, i = (r = n(2333)) && r.__esModule ? r : {
        default: r
      };
      e.exports = i.default
    }
  }
]);