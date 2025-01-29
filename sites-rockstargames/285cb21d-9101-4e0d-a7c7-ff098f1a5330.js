! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "285cb21d-9101-4e0d-a7c7-ff098f1a5330", e._sentryDebugIdIdentifier = "sentry-dbid-285cb21d-9101-4e0d-a7c7-ff098f1a5330")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [267], {
    80267: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        default: () => h
      });
      var t = s(62229),
        r = s(63582),
        i = s(98096);
      (0, t.forwardRef)(((e, a) => {
        const {
          children: s,
          tag: t = "div"
        } = e, m = r.m[t];
        return (0, i.jsx)(r.LazyMotion, {
          features: r.domAnimation,
          children: (0, i.jsx)(m, {
            ref: a,
            ...e,
            children: s
          })
        })
      })).displayName = "LiteMotion";
      const m = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        o = {
          ease: "easeIn",
          duration: .4
        },
        c = e => {
          let {
            children: a
          } = e;
          return (0, i.jsx)(r.motion.div, Object.assign({
            className: "rockstargames-sites-rockstargamesf38982805188b64825a72d2c5fac938c",
            variants: m,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: o
          }, {
            children: a
          }))
        };
      var d = s(95966);
      const n = (0, d.setContextItem)({
          context: (0, t.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: g
        } = n,
        l = e => {
          if (!e) return null;
          const {
            hostname: a,
            pathname: s
          } = new URL(e, (0, d.getCdnPrefix)(!0));
          return "/" === s ? null : (a.endsWith(".akamaized.net"), e)
        },
        p = e => {
          let {
            alt: a = null,
            mobile: s = null,
            desktop: r = null,
            ariaLabel: i = null,
            sources: m = null,
            prod: o = null
          } = e;
          const c = (0, d.useLocale)(),
            {
              meta: g = {}
            } = (0, t.useContext)(n) ?? {},
            [p, f] = (0, t.useState)(o ?? g?.cdn ?? g?.prod ?? !0);
          (0, t.useEffect)((() => {
            f(o ?? g?.cdn ?? g?.prod ?? !0)
          }), [o, g]);
          const k = (0, t.useCallback)((e => {
            const a = null !== m,
              s = e?.previewSrc ?? e ?? null;
            if (null === s || "string" != typeof s) return null;
            if (s.startsWith("http")) return l(s);
            const t = `${a?(0,d.getCdnPrefix)(p):""}${s}`;
            return l(t)
          }), [p, m]);
          return {
            alt: a,
            ariaLabel: i,
            src: {
              mobile: k(m?.[c]?.mobile ?? m?.en_us?.mobile ?? s),
              desktop: k(m?.[c]?.desktop ?? m?.en_us?.desktop ?? r)
            }
          }
        },
        f = e => {
          let {
            children: a,
            context: s = null,
            game: t,
            image: r = {},
            style: m = {},
            template: o = null,
            theme: c = null,
            reversedOnMobile: n = !1,
            className: g = "",
            id: l = null
          } = e;
          const f = p(r ?? {}),
            k = {
              ...m
            };
          if (f?.src?.desktop) {
            const e = (r?.style && r?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
              a = (r?.style && r?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
              s = `var(--grid-background-position, center)/${e??"cover"}`;
            if (k.background = `url(${f?.src?.desktop}) ${a} ${s}`, r?.style && r?.style["--linear-gradient"]) k.background = `linear-gradient(${r?.style["--linear-gradient"]}), url(${f?.src?.desktop}) ${a} ${s}`;
            else if (r?.style && r?.style["--gradient-height"]) {
              const e = r?.style["--gradient-height"] || "3",
                t = r?.style["--gradient-start-color"] || "var(--background-color, transparent)",
                i = r?.style["--gradient-end-color"] || "var(--background-color, transparent)";
              k.background = `linear-gradient(180deg, ${t}, transparent ${e}%, transparent ${100-e}%, ${i}), url(${f?.src?.desktop}) ${a} ${s}`
            }
          }
          return (0, i.jsx)("div", {
            id: l,
            className: (0, d.classList)("rockstargames-sites-rockstargamesda87ead760b989fbe90a0b89c60b0653", n ? "rockstargames-sites-rockstargamesdfbda195073626bc6a7690dc73fba873" : "", g),
            "data-game": "community" === o ? null : t,
            style: (0, d.safeStyles)(k),
            "data-context": s,
            "data-template": o,
            "data-theme": c,
            children: a
          })
        };
      var k = s(81869);
      const _ = "rockstargames-sites-rockstargamesc8dc03880ce2e12f3fdea5b5b587f27f",
        u = e => {
          let {
            alt: a,
            className: t,
            src: r,
            style: m
          } = e;
          const [o, c] = (0, d.usePreloadImg)(r);
          let n = r;
          !1 === o && ("rockstargames-sites-rockstargamesa6a06e2d5c4f1811ea39d17312ca2e67" === t && (n = s(28839)), n = s(9333));
          const {
            width: g,
            height: l
          } = c, p = {
            "--aspect-ratio": Number.isNaN(g / l) ? "" : g / l,
            ...m
          };
          return (0, i.jsx)("img", {
            src: n,
            className: t ?? "",
            alt: a,
            style: p
          })
        },
        v = e => {
          let {
            className: a,
            style: t = {},
            image: r = {},
            imageStyle: m = {}
          } = e, {
            alt: o,
            src: c
          } = p(r);
          const {
            isMobile: n
          } = (0, d.useWindowResize)();
          c.desktop || c.mobile || (o = "", c = {
            mobile: s(28839),
            desktop: s(9333)
          });
          let g = r.frame ? `${r.frame} ${_}` : _;
          return (0, i.jsx)("div", {
            className: g,
            style: t,
            children: (0, i.jsx)(u, {
              style: {
                ...m,
                ...r?.style
              },
              src: n ? c.mobile || c.desktop : c?.desktop || c?.mobile,
              alt: o,
              className: a
            })
          })
        },
        b = {
          jpwrapper: "rockstargames-sites-rockstargamesb395b520b33f1a7d6532fd66000fd1cb",
          body: "rockstargames-sites-rockstargamesd6571f3c513cb7926df8940a17fe82a9",
          responsiveImage: "rockstargames-sites-rockstargamese661a856095375f44e305b2e551ab5cc",
          link: "rockstargames-sites-rockstargamescde5a6432fe77cd30e39fb39a713e18b",
          bodyPadding: "rockstargames-sites-rockstargamese86794fbd2c629ecdc5cfe79e36e8a20",
          headline_3: "rockstargames-sites-rockstargamesdd203ba094cb4638fb07da8f328d6495",
          headline_2: "rockstargames-sites-rockstargamesd208f114e7bbcf73734a8971494445f9",
          disclaimer: "rockstargames-sites-rockstargamese3d1b26e1b9c5d5204ecaa20ff62abcc"
        },
        h = (x = () => (0, i.jsxs)("div", {
          className: b.jpwrapper,
          children: [(0, i.jsx)(v, {
            className: b.responsiveImage,
            image: {
              desktop: s(43305)
            }
          }), (0, i.jsxs)(f, {
            className: [b.body, b.inner, b.gap_sm].join(" "),
            children: [(0, i.jsx)("h1", {
              children: "GTAマネーを最大250万ドル獲得しよう"
            }), (0, i.jsxs)("p", {
              children: [(0, i.jsx)("a", {
                className: b.link,
                href: "https://www.rockstargames.com/jp/newswire/article/175k8294o31ooo/gta-online-san-andreas-mercenaries-now-available",
                children: "「GTAオンライン：サンアンドレアスの傭兵」"
              }), "のリリースを記念して、日本のプレイヤーだけが参加できる初めてのコミュニティチャレンジを開催します。"]
            }), (0, i.jsx)("p", {
              children: "今から9月7日までに密輸貨物の売却ミッションに参加して密輸貨物をさばき、合計GTAマネー3億ドルを売り上げ、GTAマネー50万ドルを解除しましょう。"
            }), (0, i.jsx)("p", {
              children: "密輸貨物を入手すると、格納庫内のパソコンからフリートレード運送のサイトを使って売却ミッションを開始できるようになります。"
            }), (0, i.jsx)(v, {
              image: {
                desktop: s(2036)
              }
            }), (0, i.jsx)("h1", {
              children: "お気に入りのクリエイターを応援しよう"
            }), (0, i.jsx)("p", {
              children: "YouTubeとTwitchで活躍する日本のトップクリエイターたちが、8月31日から9月3日まで4日間のライブストリーミングイベントに参加します。 クリエイターには毎日チャレンジが課せられ、成功すれば日本のプレイヤー全員に追加でGTAマネー200万ドルが贈られます。"
            }), (0, i.jsx)(v, {
              className: b.bodyPadding,
              image: {
                desktop: s(61301)
              }
            }), (0, i.jsx)("p", {
              children: "各チームは最近追加されたキャリア進行状況メニューを使って自分たちの成績を記録し、 条件に到達すれば下記のボーナスGTAマネーが日本のプレイヤー全員に贈られます。"
            }), (0, i.jsx)(v, {
              className: b.bodyPadding,
              image: {
                desktop: s(7023)
              }
            }), (0, i.jsxs)("p", {
              children: ["さらなる詳細は、", (0, i.jsx)("a", {
                href: "https://www.twitch.tv/dasoku_aniki",
                className: b.link,
                children: "Twitch"
              }), "で8月31日午後6時(日本時間)にイベントMCの蛇足の配信を視聴してください。"]
            }), (0, i.jsx)("p", {
              className: b.disclaimer,
              children: "チャレンジは2023年9月7日午後6時(日本時間)に終了します。日本にお住いのプレイヤーに限ります。 Social Clubアカウント1つにつき最大でGTAマネー250万ドルが贈られます。コミュニティ報酬はチャレンジ参加者限定です。 コミュニティの目標に到達した場合、報酬はゲーム内で受け取る必要があります。コンソールでオンラインをプレイするには別に有料のサブスクリプションが必要です。 規約が適用されます。可能な限り、イベント終了後72時間以内にプレイヤーのアカウントに贈られます。"
            }), (0, i.jsx)(k.A, {
              condensed: !0,
              titleSlug: "gta-online"
            })]
          })]
        }), e => (0, i.jsx)(c, {
          children: (0, i.jsx)(x, Object.assign({}, e))
        }));
      var x
    },
    81869: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => k
      });
      var t = s(62229),
        r = s(81788),
        i = s(95966),
        m = s(87851),
        o = s(2918),
        c = s(89950);
      var d = s(98096);
      class n extends t.Component {
        constructor(e) {
          super(e), this.state = {
            header: e.header ?? null,
            hidden: e.hidden ?? !1
          }
        }
        static getDerivedStateFromError(e) {
          return {
            error: {
              message: e.message ?? e.toString()
            }
          }
        }
        render() {
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, d.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesd5c408a8b618087ef4bb452f96526b2b",
            children: [(0, d.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, d.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      var g = s(20066);
      const l = {
          rating: "rockstargames-sites-rockstargamesc3e95c84902dd75b827d3c95532e22dc",
          withDescriptors: "rockstargames-sites-rockstargamesb98963abfc7a63295bebc6c6d15b391a",
          withOutDescriptors: "rockstargames-sites-rockstargamesb6339480b5fd086fb0c025930bfb7dcd",
          text: "rockstargames-sites-rockstargamesbabdd6ae2ff83f380dadc6982effa011"
        },
        p = (0, r.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var f = s(95520);
      (0, i.importAll)(s(36672));
      const k = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return function(t) {
          return (0, d.jsx)(n, {
            header: a,
            hidden: s,
            children: (0, d.jsx)(e, {
              ...t
            })
          })
        }
      }((0, r.withIntl)((e => {
        let {
          descriptors: a = null,
          footer: n = null,
          href: g,
          img: k = null,
          titleSlug: _ = null,
          style: u = {},
          className: v
        } = e;
        const [b, h] = (0, t.useState)(!1), {
          inView: x
        } = (0, m.useInView)({
          threshold: .6
        }), [y, z] = (0, t.useState)({
          ratingDescriptors: a,
          ratingFooter: n,
          ratingImg: k,
          ratingUrl: g
        }), {
          track: N
        } = (0, o.useGtmTrack)(), w = (0, r.useIntl)(), {
          data: j
        } = (0, i.useQuery)(f.GameData, {
          variables: {
            titleSlug: _
          },
          skip: !_
        });
        if ((0, t.useEffect)((() => {
            j && z(j?.game)
          }), [j]), (0, t.useEffect)((() => {
            x && !b && y.img_rating && (N({
              event: "page_section_impression",
              element_placement: "rating"
            }), h(!0))
          }), [x]), !y.ratingImg) return null;
        const S = !!y.ratingDescriptors;
        return (0, d.jsxs)("div", {
          className: [l.rating, S ? l.withDescriptors : l.withOutDescriptors, v || ""].join(" "),
          style: (0, i.safeStyles)(u),
          children: [(0, d.jsx)(c.A, {
            to: y.ratingUrl,
            target: "_blank",
            children: (0, d.jsx)("img", {
              alt: w.formatMessage(p.components_ratings_link_alt, {
                rating: (D = y.ratingImg, D.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: s(8194)(`./${y.ratingImg}`)
            })
          }), S && (0, d.jsxs)("div", {
            className: l.text,
            children: [(0, d.jsx)("p", {
              className: l.descriptors,
              dangerouslySetInnerHTML: {
                __html: y?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), y.ratingFooter && (0, d.jsx)("hr", {}), y.ratingFooter && (0, d.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: y.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var D
      }), g))
    },
    95520: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GameData"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "titleSlug"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withMetaTitle"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !1
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "metaUrl"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            defaultValue: {
              kind: "StringValue",
              value: "/",
              block: !1
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "meta"
              },
              name: {
                kind: "Name",
                value: "metaUrl"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "domain"
                },
                value: {
                  kind: "StringValue",
                  value: "www",
                  block: !1
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "metaUrl"
                  }
                }
              }],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "include"
                },
                arguments: [{
                  kind: "Argument",
                  name: {
                    kind: "Name",
                    value: "if"
                  },
                  value: {
                    kind: "Variable",
                    name: {
                      kind: "Name",
                      value: "withMetaTitle"
                    }
                  }
                }]
              }],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "game"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "titleSlug"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "titleSlug"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingDescriptors"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingFooter"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingImg"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingUrl"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 394
        }
      };

      function s(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, a)
        }))
      }
      a.loc.source = {
        body: 'query GameData(\n    $titleSlug: String!\n    $locale: String!\n    $withMetaTitle: Boolean = false\n    $metaUrl: String = "/"\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: $metaUrl)\n        @include(if: $withMetaTitle) {\n        title\n    }\n    game(titleSlug: $titleSlug, locale: $locale) {\n        ratingDescriptors\n        ratingFooter\n        ratingImg\n        ratingUrl\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function r(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var t = e.definitions[s];
          if (t.name && t.name.value == a) return t
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.GameData = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var i = t[a] || new Set,
          m = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            m.has(e) || (m.add(e), (t[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return m.forEach((function(a) {
          var t = r(e, a);
          t && s.definitions.push(t)
        })), s
      }(a, "GameData")
    },
    36672: (e, a, s) => {
      var t = {
        "./cero_a.png": 97558,
        "./cero_b.svg": 29362,
        "./cero_c.svg": 67299,
        "./cero_d.svg": 9020,
        "./cero_rp.png": 17065,
        "./cero_z.svg": 46554,
        "./djctq_10.svg": 51392,
        "./djctq_12.svg": 8674,
        "./djctq_14.svg": 89836,
        "./djctq_16.svg": 54222,
        "./djctq_18.svg": 58648,
        "./djctq_er.svg": 8054,
        "./djctq_l.svg": 23781,
        "./esrb_ao.svg": 89235,
        "./esrb_e.svg": 24256,
        "./esrb_e10plus.svg": 65315,
        "./esrb_m.svg": 87256,
        "./esrb_m_ao.svg": 10419,
        "./esrb_rp.svg": 89069,
        "./esrb_rplm17.svg": 95088,
        "./esrb_t.svg": 18177,
        "./fpb_13.svg": 86595,
        "./fpb_16.svg": 28414,
        "./fpb_18.svg": 81864,
        "./fpb_pg.svg": 77404,
        "./grac_12.svg": 8711,
        "./grac_15.svg": 6312,
        "./grac_18.svg": 48157,
        "./grac_19.svg": 19612,
        "./grac_a.svg": 89303,
        "./gsrr_0.svg": 67443,
        "./gsrr_12.svg": 49980,
        "./gsrr_15.svg": 24611,
        "./gsrr_18.svg": 68918,
        "./gsrr_6.svg": 63117,
        "./nmc_12.svg": 2024,
        "./nmc_16.svg": 50324,
        "./nmc_18.svg": 52466,
        "./nmc_21.svg": 3950,
        "./nmc_3.svg": 9188,
        "./nmc_7.svg": 18712,
        "./oflc_g.svg": 21022,
        "./oflc_m.svg": 22772,
        "./oflc_ma15.svg": 9815,
        "./oflc_pg.svg": 47580,
        "./oflc_r18.svg": 74432,
        "./pegi_12.svg": 15821,
        "./pegi_16.svg": 86929,
        "./pegi_18.svg": 51575,
        "./pegi_3.svg": 27351,
        "./pegi_4.svg": 82424,
        "./pegi_6.svg": 46618,
        "./pegi_7.svg": 40491,
        "./pegi_rp.png": 94293,
        "./rars_0.svg": 36855,
        "./rars_12.svg": 98952,
        "./rars_16.svg": 65044,
        "./rars_18.svg": 72690,
        "./rars_6.svg": 51913,
        "./usk_0.svg": 84406,
        "./usk_12.svg": 26151,
        "./usk_16.svg": 87707,
        "./usk_18.svg": 90717,
        "./usk_6.svg": 2696,
        "./usk_rp.svg": 21228,
        "./vaci_rp.png": 32323
      };

      function r(e) {
        var a = i(e);
        return s(a)
      }

      function i(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = i, e.exports = r, r.id = 36672
    },
    8194: (e, a, s) => {
      var t = {
        "./cero_a.png": 97558,
        "./cero_b.svg": 29362,
        "./cero_c.svg": 67299,
        "./cero_d.svg": 9020,
        "./cero_rp.png": 17065,
        "./cero_z.svg": 46554,
        "./djctq_10.svg": 51392,
        "./djctq_12.svg": 8674,
        "./djctq_14.svg": 89836,
        "./djctq_16.svg": 54222,
        "./djctq_18.svg": 58648,
        "./djctq_er.svg": 8054,
        "./djctq_l.svg": 23781,
        "./esrb_ao.svg": 89235,
        "./esrb_e.svg": 24256,
        "./esrb_e10plus.svg": 65315,
        "./esrb_m.svg": 87256,
        "./esrb_m_ao.svg": 10419,
        "./esrb_rp.svg": 89069,
        "./esrb_rplm17.svg": 95088,
        "./esrb_t.svg": 18177,
        "./fpb_13.svg": 86595,
        "./fpb_16.svg": 28414,
        "./fpb_18.svg": 81864,
        "./fpb_pg.svg": 77404,
        "./grac_12.svg": 8711,
        "./grac_15.svg": 6312,
        "./grac_18.svg": 48157,
        "./grac_19.svg": 19612,
        "./grac_a.svg": 89303,
        "./gsrr_0.svg": 67443,
        "./gsrr_12.svg": 49980,
        "./gsrr_15.svg": 24611,
        "./gsrr_18.svg": 68918,
        "./gsrr_6.svg": 63117,
        "./nmc_12.svg": 2024,
        "./nmc_16.svg": 50324,
        "./nmc_18.svg": 52466,
        "./nmc_21.svg": 3950,
        "./nmc_3.svg": 9188,
        "./nmc_7.svg": 18712,
        "./oflc_g.svg": 21022,
        "./oflc_m.svg": 22772,
        "./oflc_ma15.svg": 9815,
        "./oflc_pg.svg": 47580,
        "./oflc_r18.svg": 74432,
        "./pegi_12.svg": 15821,
        "./pegi_16.svg": 86929,
        "./pegi_18.svg": 51575,
        "./pegi_3.svg": 27351,
        "./pegi_4.svg": 82424,
        "./pegi_6.svg": 46618,
        "./pegi_7.svg": 40491,
        "./pegi_rp.png": 94293,
        "./rars_0.svg": 36855,
        "./rars_12.svg": 98952,
        "./rars_16.svg": 65044,
        "./rars_18.svg": 72690,
        "./rars_6.svg": 51913,
        "./usk_0.svg": 84406,
        "./usk_12.svg": 26151,
        "./usk_16.svg": 87707,
        "./usk_18.svg": 90717,
        "./usk_6.svg": 2696,
        "./usk_rp.svg": 21228,
        "./vaci_rp.png": 32323
      };

      function r(e) {
        var a = i(e);
        return s(a)
      }

      function i(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = i, e.exports = r, r.id = 8194
    },
    97558: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    29362: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    67299: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    9020: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/204116b24cd9e9ab4e71af21b3a96179.svg"
    },
    17065: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    46554: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    51392: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f468aef6f0b5399d5c0f6b2e95b60cc5.svg"
    },
    8674: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b31c79d361cfd92e1a405dbbf4890bd.svg"
    },
    89836: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    54222: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    58648: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    8054: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    23781: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edf01daa4f0392081705c17a74d8a146.svg"
    },
    89235: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    24256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    65315: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    87256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    10419: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    89069: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    95088: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    18177: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    86595: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    28414: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    81864: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    77404: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    8711: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe262661c6667d97f441e045067f4a0f.svg"
    },
    6312: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    48157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    19612: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    89303: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    67443: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    49980: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    24611: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f2fc4de3decfa0ac007f6cbd91658a9.svg"
    },
    68918: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    63117: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    2024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    50324: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    52466: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    3950: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    9188: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4da522682784ded3799c5a6f9f8c213a.svg"
    },
    18712: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    21022: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    22772: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    9815: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    47580: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    74432: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    15821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    86929: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a5d9ca87a5bd107da9bb33d3d718e8.svg"
    },
    51575: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    27351: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    82424: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    46618: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    40491: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    94293: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    36855: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    98952: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    },
    65044: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    72690: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    51913: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    84406: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    26151: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    87707: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07362df5a2671c08b232a97d503cd6bf.svg"
    },
    90717: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    2696: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    21228: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    32323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    9333: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    28839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    },
    2036: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1ed2a51b04e0bb000bcf1496dcd3f784.png"
    },
    43305: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca34dd285d3d7a6cf9a329c73a274599.jpg"
    },
    61301: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/442e7c26891ff37ae957573626516d06.png"
    },
    7023: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8ae4db5a481080ebfd341e18dbfb2277.png"
    }
  }
]);