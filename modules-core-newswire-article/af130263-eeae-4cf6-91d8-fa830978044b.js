try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "af130263-eeae-4cf6-91d8-fa830978044b", e._sentryDebugIdIdentifier = "sentry-dbid-af130263-eeae-4cf6-91d8-fa830978044b")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [7577], {
    1057: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(42295),
        r = t(62229);
      const i = {
          animateBox: "rockstargames-modules-core-newswire-articleb07a3be6338e0ba4b346b072762582e3",
          animateMe: "rockstargames-modules-core-newswire-articlef7adfd0186421cac9ad0b300911cc9af",
          bar: "rockstargames-modules-core-newswire-articlebbb7e636ac00581aed0b7e148916cc11",
          barGrow: "rockstargames-modules-core-newswire-articlee0262d00df9ad8a47b08ae84160bfa51",
          fadeArea: "rockstargames-modules-core-newswire-articlef47504b50907dd0fd609719dad3f62bd",
          visible: "rockstargames-modules-core-newswire-articlec121e11e40215dc778fe8665eb38845d"
        },
        n = ({
          children: e,
          style: a
        }) => {
          const t = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([i.visible])
              }))
            })).observe(t?.current)
          }), []), (0, s.jsx)("div", {
            style: a,
            className: [i.fadeArea].join(" "),
            ref: t,
            children: e
          })
        }
    },
    1157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/090acda789de843d56780aa60c1f7056.jpg"
    },
    1983: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd3b8222b81c51f8a6ae266c805c98a6.png"
    },
    2024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    2696: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    3436: (e, a, t) => {
      "use strict";
      t.d(a, {
        y3: () => pe,
        h7: () => te,
        E$: () => Ue
      });
      var s = t(42295),
        r = t(62229),
        i = t(16188),
        n = t.n(i),
        o = t(92440),
        c = t(95359),
        d = t(13897),
        l = t(95966),
        m = t(4572),
        u = t.n(m),
        g = t(16783);
      const f = ({
          hasTag: e = !1,
          tag: a = null,
          tagStyle: t = null,
          badges: r = []
        }) => e && a ? (0, s.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articleceb75d3391774f84e920e955d7a6853f",
          "data-tag-style": t,
          children: a
        }) : e && r && r?.length > 0 ? (0, s.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlef83b84453472e937d57011680a564ec6",
          children: r.map((e => (0, s.jsx)(g.A, {
            ...e
          }, e?.text)))
        }) : null,
        p = {
          content: "rockstargames-modules-core-newswire-articlef418ed13cf5cbe3f701ce0d872b50704",
          textOverlay: "rockstargames-modules-core-newswire-articleca83475001f5d512b9ffcd89f1117561"
        },
        {
          LiteMotion: b,
          Animations: k
        } = c,
        {
          variants: v,
          transitions: w
        } = k,
        h = ({
          title: e,
          hasTag: a,
          tag: t,
          hasDescription: r,
          description: i,
          fadesOut: n = !1,
          badges: o
        }) => (0, s.jsx)(b, {
          initial: v.fade.out.initial,
          animate: {
            opacity: n ? 0 : 1
          },
          transition: w.fade,
          className: p.textOverlay,
          children: (0, s.jsxs)("div", {
            className: p.content,
            children: [(0, s.jsx)(f, {
              hasTag: a,
              tag: t,
              badges: o?.filter((e => e?.isPrimary))
            }), (0, s.jsx)("h3", {
              children: e
            }), r && i && (0, s.jsx)("div", {
              className: p.description,
              children: i
            })]
          })
        }),
        _ = ({
          title: e,
          showTitle: a = !0,
          showBackground: t = !0,
          tag: i,
          tagStyle: n,
          discountPrice: o,
          originalPrice: c,
          setPricingContainerHeight: d = null
        }) => {
          const l = (0, r.createRef)();
          return (0, r.useEffect)((() => {
            const e = () => {
              l.current && null !== d && d(l.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [l]), (0, s.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlee419c6cd31abd635e742e635dcfd8316",
            ref: l,
            "data-show-background": t,
            children: [a && (0, s.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articlebf415d56280a8768ee0c26e116865d5b",
              children: e
            }), (0, s.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articled98da8fc9dce6d600db165351d3a3fed",
              children: [(0, s.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlea5717338db21efc7eb765011d68ea73d",
                "data-tag-style": n || "free",
                children: i
              }), (0, s.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlecdaaa9655747e4d129d6c22080bdd33d",
                children: o
              }), (0, s.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articleaf3db4eb6d14c1f4ee5689b4e6386715",
                children: c
              })]
            })]
          })
        };
      var x = t(80391),
        y = t(28985),
        N = t(47240),
        j = t(81715),
        S = t(49429),
        T = t(32903),
        C = t(85719),
        E = t(11008);
      const P = {
          ps5: N,
          ps4: y,
          ps: x,
          xboxone: S,
          xbox: T,
          xboxseriesxs: j,
          nintendoswitch: E,
          pc: C,
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
        },
        A = ({
          title: e,
          showTitle: a = !0,
          showBackground: t = !0,
          platformOptions: i,
          setPricingContainerHeight: n = () => {},
          expandedView: o
        }) => {
          const c = (0, r.createRef)();
          return (0, r.useEffect)((() => {
            const e = () => {
              c.current && null !== n && n(c.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [c]), (0, s.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articleee81f54f31ab2cd10a67313b9689bf96",
            ref: c,
            "data-show-background": t,
            "data-show-platforms": !o,
            children: [a && (0, s.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articled4ab460f0a204a588d4d4dd0a110ca36",
              children: e
            }), i?.platformsAndLinks && (0, s.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articleafdc85bfd80cae52d4c1b422f1294962",
              children: [(0, s.jsx)(f, {
                hasTag: i?._memoq?.platformTag,
                tag: i?._memoq?.platformTag,
                tagStyle: i?._memoq?.platformTagStyle
              }), (0, s.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlec252412353007d9f02f19a754430b14b",
                children: i.platformsAndLinks.map((({
                  platform: e,
                  buttonText: a
                }) => (0, s.jsx)("img", {
                  className: "rockstargames-modules-core-newswire-articleff5cde8853312ffb892472d100c684cd",
                  alt: a,
                  src: P[e]
                }, e)))
              })]
            })]
          })
        },
        I = ({
          textOverlayProps: e,
          title: a,
          size: t,
          expandedView: i = !1,
          children: n,
          pricingOptions: o,
          setPricingContainerHeight: c,
          isCoverCard: d = !1,
          platformOptions: l
        }) => {
          const [m] = (({
            hasTextOverlay: e,
            tag: a,
            collapsedHasTag: t,
            description: i,
            collapsedHasDescription: n,
            size: o,
            title: c,
            expandedView: d,
            badges: l
          }) => {
            const [m, u] = (0, r.useState)(null), g = (0, r.useMemo)((() => {
              if (!e) return null;
              const r = "sm" !== o && n;
              return (0, s.jsx)(h, {
                title: c,
                hasTag: t,
                tag: a,
                hasDescription: r,
                description: i,
                fadesOut: d,
                badges: l
              })
            }), [e, a, t, i, n, o, c, d, l]);
            return (0, r.useEffect)((() => {
              u(g)
            }), [g]), [m, u]
          })({
            ...e,
            size: t,
            title: a,
            expandedView: i
          }), u = void 0 !== o?.hasPricingOptions || null !== l;
          return (0, s.jsxs)("header", {
            className: "rockstargames-modules-core-newswire-articlecab36c59e0808c47183ef125bd12c511",
            "data-is-covercard": d,
            "data-expanded-view": i,
            children: [r.Children.map(n, (e => (0, r.cloneElement)(e, {
              title: a,
              size: t,
              expandedView: i
            }))), m, u && (0, s.jsxs)(s.Fragment, {
              children: [!0 === l?.hasPlatformOptions && (0, s.jsx)(A, {
                title: a,
                platformOptions: l,
                pricingOptions: o,
                setPricingContainerHeight: c,
                expandedView: i
              }), !0 === o?.hasPricingOptions && (0, s.jsx)(_, {
                title: a,
                tag: o?._memoq?.tag,
                tagStyle: o?._memoq?.tagStyle || "free",
                discountPrice: o?._memoq?.discountPrice,
                originalPrice: o?._memoq?.originalPrice,
                setPricingContainerHeight: c
              })]
            })]
          })
        },
        {
          LiteMotion: L,
          Animations: M
        } = c,
        {
          transitions: z
        } = M,
        D = ({
          components: e,
          payload: a,
          prod: t,
          size: i,
          title: c,
          initial: m = "initial",
          animate: g = "animate",
          variants: p,
          type: b = null,
          context: k = null,
          textOverlayProps: v,
          className: w,
          children: h,
          theme: x = "none",
          id: y,
          pricingOptions: N,
          pricingContainerHeight: j,
          isCoverCard: S,
          platformOptions: T,
          isProductCard: C = !1
        }) => {
          const E = (0, r.useRef)(),
            P = (0, r.useRef)(),
            {
              tag: A,
              expandedHasTag: M,
              badges: D
            } = v;
          n().set(a, "meta.prod", t);
          const F = h?.props?.images.length > 0;
          let $ = (0, s.jsx)("h1", {
            children: c
          });
          return S && ($ = null), (0, r.useEffect)((() => {
            const e = () => {
              E.current && E.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (E.current.scrollTop = 0)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []), (0, s.jsx)(l.DataLayerProvider, {
            card_id: y,
            card_name: c?.toLowerCase(),
            children: (0, s.jsx)(d.A, {
              threshold: [25, 50, 75, 90, 100],
              trackRef: "long" === b ? E : P,
              children: (0, s.jsxs)(L, {
                ref: E,
                initial: m,
                animate: g,
                variants: p.expanded,
                transition: z.cardOpen,
                className: u()("rockstargames-modules-core-newswire-articlec2289ce1bf0de6ad8a4a8ce7e90a4b66", w),
                "data-type": b,
                "data-size": i,
                "data-product": C,
                "data-covercard": S || !1,
                "data-context": k,
                style: {
                  "--product-card-pricing-info-height": `${j||0}px`
                },
                children: [F && (0, s.jsx)(I, {
                  size: i,
                  title: c,
                  textOverlayProps: v,
                  expandedView: !0,
                  pricingOptions: N,
                  platformOptions: T,
                  isCoverCard: S,
                  children: h
                }), (0, s.jsxs)(L, {
                  ref: P,
                  className: "rockstargames-modules-core-newswire-articlee461568802b56e8c21b8b82d9c3a1fb4",
                  variants: p.expandedContents,
                  transition: z.afterCardOpen,
                  "data-theme": x,
                  children: [(0, s.jsxs)("div", {
                    className: "rockstargames-modules-core-newswire-articlec4c35e83dbf962aa44c3f94b313361b3",
                    children: [(0, s.jsx)(f, {
                      hasTag: M,
                      tag: A,
                      badges: D
                    }), $, C && (0, s.jsxs)(s.Fragment, {
                      children: [!0 === T?.hasPlatformOptions && (0, s.jsx)("div", {
                        className: "rockstargames-modules-core-newswire-articlecd635452588eda421bdea19f00660efc",
                        children: (0, s.jsx)(f, {
                          hasTag: T?.hasPlatformOptions,
                          tag: T?._memoq?.platformTag,
                          tagStyle: T?._memoq?.platformTagStyle
                        })
                      }), !0 === N?.hasPricingOptions && (0, s.jsx)(_, {
                        title: c,
                        showTitle: !1,
                        showBackground: !1,
                        tag: N?._memoq?.tag,
                        tagStyle: N?.tagStyle || "free",
                        discountPrice: N?._memoq?.discountPrice,
                        originalPrice: N?._memoq?.originalPrice
                      })]
                    })]
                  }), (0, s.jsx)(o.TinaParser, {
                    components: e,
                    tina: {
                      payload: a
                    }
                  })]
                })]
              })
            })
          })
        };
      var F = t(62312),
        $ = t(10632),
        V = t(24769),
        B = t(15310),
        O = t.n(B),
        G = t(9623),
        R = t(81788),
        H = (t(51673), t(2918));
      const U = [null, () => null],
        W = (0, l.setContextItem)({
          context: (0, r.createContext)(U),
          key: "modalContext"
        }),
        q = (0, R.defineMessages)({
          card_label_platforms: {
            id: "card_label_platforms",
            description: "The aria label used for cards when they have platforms.",
            defaultMessage: "{title} on {platformList}"
          },
          card_label_tag: {
            id: "card_label_tag",
            description: "The aria label used for cards when they have a tag.",
            defaultMessage: "{tag} {title}"
          },
          card_label_platforms_tag: {
            id: "card_label_platforms_tag",
            description: "The aria label used for cards when they have platforms and a tag.",
            defaultMessage: "{tag} {title} on {platformList}"
          },
          card_learn_more: {
            id: "card_learn_more",
            description: "Label for learn more buttons.",
            defaultMessage: "Learn More"
          },
          events_deck_next_aria_label: {
            id: "events_deck_next_aria_label",
            description: "Aria label for the next button on the events deck (modal closed - multiple slides visible at a time)",
            defaultMessage: "Next Page of Events"
          },
          events_deck_previous_aria_label: {
            id: "events_deck_previous_aria_label",
            description: "Aria label for the previous button on the events deck (modal closed - multiple slides visible at a time)",
            defaultMessage: "Previous Page of Events"
          },
          events_deck_modal_next_aria_label: {
            id: "events_deck_modal_next_aria_label",
            description: "Aria label for the next button on the events deck (modal open - one event slide visible at a time)",
            defaultMessage: "Next event"
          },
          events_deck_modal_previous_aria_label: {
            id: "events_deck_modal_previous_aria_label",
            description: "Aria label for the previous button on the events deck (modal open - one event slide visible at a time)",
            defaultMessage: "Previous event"
          },
          events_deck_modal_close_label: {
            id: "events_deck_modal_close_label",
            description: "Aria label for the close button on the modal",
            defaultMessage: "Close"
          },
          events_deck_paging_label: {
            id: "events_deck_paging_label",
            description: "Aria label for which page the user is on in the deck",
            defaultMessage: "On page {currentPage} of {totalPages}"
          },
          events_deck_modal_group_label: {
            id: "events_deck_modal_group_label",
            description: "Aria label for the group/modal which contains the event details",
            defaultMessage: "Event Details"
          }
        }),
        K = JSON.parse('{"de-DE":{"card_label_platforms":"{title} auf {platformList}","card_label_platforms_tag":"{tag} {title} auf {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Mehr erfahren","events_deck_modal_close_label":"Schließen","events_deck_modal_group_label":"Eventdetails","events_deck_modal_next_aria_label":"Nächstes Event","events_deck_modal_previous_aria_label":"Vorheriges Event","events_deck_next_aria_label":"Nächste Seite von Events","events_deck_paging_label":"Auf Seite {currentPage} von {totalPages}","events_deck_previous_aria_label":"Vorherige Seite von Events"},"en-US":{"card_label_platforms":"{title} on {platformList}","card_label_platforms_tag":"{tag} {title} on {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Learn More","events_deck_modal_close_label":"Close","events_deck_modal_group_label":"Event Details","events_deck_modal_next_aria_label":"Next event","events_deck_modal_previous_aria_label":"Previous event","events_deck_next_aria_label":"Next Page of Events","events_deck_paging_label":"On page {currentPage} of {totalPages}","events_deck_previous_aria_label":"Previous Page of Events"},"es-ES":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Más información","events_deck_modal_close_label":"Cerrar","events_deck_modal_group_label":"Detalles del evento","events_deck_modal_next_aria_label":"Evento siguiente","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Página siguiente de eventos","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página anterior de eventos"},"es-MX":{"card_label_platforms":"{title} en {platformList}","card_label_platforms_tag":"{tag} {title} en {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Más información","events_deck_modal_close_label":"Cerrar","events_deck_modal_group_label":"Detalles del evento","events_deck_modal_next_aria_label":"Evento siguiente","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Página de eventos siguiente","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página de eventos anterior"},"fr-FR":{"card_label_platforms":"{title} sur {platformList}","card_label_platforms_tag":"{tag} {title} sur {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"En savoir plus","events_deck_modal_close_label":"Fermer","events_deck_modal_group_label":"Détails de l’évènement","events_deck_modal_next_aria_label":"Évènement suivant","events_deck_modal_previous_aria_label":"Évènement précédent","events_deck_next_aria_label":"Page suivante des évènements","events_deck_paging_label":"Page {currentPage} sur {totalPages}","events_deck_previous_aria_label":"Page précédente des évènements"},"it-IT":{"card_label_platforms":"{title} su {platformList}","card_label_platforms_tag":"{tag} {title} su {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Altre informazioni","events_deck_modal_close_label":"Chiudi","events_deck_modal_group_label":"Dettagli evento","events_deck_modal_next_aria_label":"Evento successivo","events_deck_modal_previous_aria_label":"Evento precedente","events_deck_next_aria_label":"Pagina degli eventi successiva","events_deck_paging_label":"Pagina {currentPage} di {totalPages}","events_deck_previous_aria_label":"Pagina degli eventi precedente"},"ja-JP":{"card_label_platforms":"{platformList}版{title}","card_label_platforms_tag":"{tag} {platformList}版 {title}","card_label_tag":"{tag} {title}","card_learn_more":"詳細を閲覧","events_deck_modal_close_label":"閉じる","events_deck_modal_group_label":"イベントの詳細","events_deck_modal_next_aria_label":"次のイベント","events_deck_modal_previous_aria_label":"前のイベント","events_deck_next_aria_label":"次のイベントのページ","events_deck_paging_label":"{currentPage}/{totalPages}ページ","events_deck_previous_aria_label":"前のイベントのページ"},"ko-KR":{"card_label_platforms":"{platformList}용 {title}","card_label_platforms_tag":"{tag} {platformList}용 {title}","card_label_tag":"{tag} {title}","card_learn_more":"더 알아보기","events_deck_modal_close_label":"닫기","events_deck_modal_group_label":"이벤트 세부 정보","events_deck_modal_next_aria_label":"다음 이벤트","events_deck_modal_previous_aria_label":"이전 이벤트","events_deck_next_aria_label":"다음 이벤트 페이지","events_deck_paging_label":"{currentPage}/{totalPages} 페이지","events_deck_previous_aria_label":"이전 이벤트 페이지"},"pl-PL":{"card_label_platforms":"{title} na {platformList}","card_label_platforms_tag":"{tag} {title} na {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Dowiedz się więcej","events_deck_modal_close_label":"Zamknij","events_deck_modal_group_label":"Szczegóły wydarzenia","events_deck_modal_next_aria_label":"Następne wydarzenie","events_deck_modal_previous_aria_label":"Poprzednie wydarzenie","events_deck_next_aria_label":"Następna strona wydarzeń","events_deck_paging_label":"Strona {currentPage} z {totalPages}","events_deck_previous_aria_label":"Poprzednia strona wydarzeń"},"pt-BR":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Saiba mais","events_deck_modal_close_label":"Fechar","events_deck_modal_group_label":"Detalhes do evento","events_deck_modal_next_aria_label":"Próximo evento","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Próxima página de eventos","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página anterior de eventos"},"ru-RU":{"card_label_platforms":"{title} на {platformList}","card_label_platforms_tag":"{title} ({tag}) на {platformList}","card_label_tag":"{title} ({tag})","card_learn_more":"Подробности","events_deck_modal_close_label":"Закрыть","events_deck_modal_group_label":"Описание события","events_deck_modal_next_aria_label":"Следующее событие","events_deck_modal_previous_aria_label":"Предыдущее событие","events_deck_next_aria_label":"Следующая страница с событиями","events_deck_paging_label":"На {currentPage}-й странице из {totalPages}","events_deck_previous_aria_label":"Предыдущая страница с событиями"},"zh-CN":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}","card_learn_more":"了解更多","events_deck_modal_close_label":"关闭","events_deck_modal_group_label":"活动细节","events_deck_modal_next_aria_label":"下一个活动","events_deck_modal_previous_aria_label":"上一个活动","events_deck_next_aria_label":"下一页活动","events_deck_paging_label":"在第 {currentPage} 页（共 {totalPages} 页）","events_deck_previous_aria_label":"上一页活动"},"zh-TW":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}","card_learn_more":"了解更多","events_deck_modal_close_label":"關閉","events_deck_modal_group_label":"活動詳情","events_deck_modal_next_aria_label":"下一個活動","events_deck_modal_previous_aria_label":"上一個活動","events_deck_next_aria_label":"下一頁活動","events_deck_paging_label":"第 {currentPage} 頁（共 {totalPages} 頁）","events_deck_previous_aria_label":"上一頁活動"}}'),
        Q = (0, R.withIntl)((({
          id: e,
          position: a,
          title: t,
          size: i = "md",
          sectionTitle: n = "",
          expandedType: o = null,
          modalProps: c = {
            content: null,
            className: "",
            contentClassName: ""
          },
          className: d,
          children: l,
          isProductCard: m,
          cardIds: u = null,
          theme: g = "none",
          isCoverCard: f,
          platformOptions: p
        }) => {
          const {
            formatMessage: b,
            formatList: k
          } = (0, R.useIntl)(), [v, w] = (0, G.useSearchParams)(), h = (0, r.useRef)(null), [, _] = (0, r.useContext)(W), {
            track: x
          } = (0, H.useGtmTrack)(), [y, N] = (0, r.useState)(!1), j = window.location.href.includes("cms5"), S = () => {
            N(!1), _(null), j || w({}), x({
              event: "trackPageview"
            })
          }, T = () => {
            if (!c?.content || !h.current || !o || "linkout" === o) return;
            const s = h.current,
              r = window.getComputedStyle(s),
              n = parseInt(r.getPropertyValue("width"), 10),
              d = parseInt(r.getPropertyValue("height"), 10),
              l = s.getBoundingClientRect(),
              {
                content: m,
                className: f,
                contentClassName: p
              } = c,
              b = "fob" === i ? "fob" : "default";
            _({
              content: m,
              onClose: S,
              rect: l,
              width: n,
              height: d,
              className: f,
              contentClassName: p,
              fadeIn: !1,
              cardIds: u,
              theme: g,
              activeId: e,
              gtm: {
                card_id: e,
                card_name: t?.toLowerCase(),
                position: a
              },
              aspectRatio: b,
              cardDimensions: {
                size: i,
                type: o
              }
            }), x({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: e,
              card_name: t?.toLowerCase(),
              position: a
            })
          };
          (0, r.useEffect)((() => {
            y && T()
          }), [y]), (0, r.useEffect)((() => {
            N(v.get("info") === e)
          }), [v.get("info"), e]);
          const C = (0, r.useMemo)((() => {
            const e = p?._memoq?.platformTag || "";
            if (p?.platformsAndLinks?.length > 0) {
              const a = p?.platformsAndLinks?.map((({
                  buttonText: e
                }) => e)),
                s = k(a, {
                  type: "conjunction"
                });
              return e ? b(q.card_label_platforms_tag, {
                tag: e,
                title: t,
                platformList: s
              }) : b(q.card_label_platforms, {
                title: t,
                platformList: s
              })
            }
            return e ? b(q.card_label_tag, {
              tag: e,
              title: t
            }) : t
          }), [p, t]);
          return f || "linkout" === o ? (0, s.jsx)("div", {
            ref: h,
            className: d,
            "data-size": i,
            "data-type": o,
            "data-product": m,
            role: "button",
            "aria-label": C,
            children: l
          }) : (0, s.jsx)("button", {
            ref: h,
            onClick: s => {
              s.preventDefault(), s.stopPropagation(), e ? w({
                info: e
              }) : T(), x({
                event: "card_click",
                element_placement: n?.toLowerCase(),
                position: a,
                card_id: e,
                card_name: t?.toLowerCase(),
                link_url: window.location.href
              })
            },
            className: d,
            "data-size": i,
            "data-type": o,
            "data-product": m,
            tabIndex: "linkout" !== o ? 0 : -1,
            "aria-label": C,
            type: "button",
            children: l
          })
        }), K),
        Y = {
          card: "rockstargames-modules-core-newswire-articlec49a3d41905733d6aa83dcd3463df7d5",
          content: "rockstargames-modules-core-newswire-articleb41eac21ba69f02fe26f8dafa8433207",
          coverCardWrapper: "rockstargames-modules-core-newswire-articledd482c08ed9fdc5cef20f63dd6720e13",
          expandedContent: "rockstargames-modules-core-newswire-articlefea5414b5f55420cfcd6c6ee12a393b3",
          imageHolder: "rockstargames-modules-core-newswire-articled893e3eab0a5754bb28882ceb8de6b59",
          pillBtn: "rockstargames-modules-core-newswire-articlef3a91bbe53323354bc84e26197787c03",
          selected: "rockstargames-modules-core-newswire-articlea03c60979e8d6882b5b8ce0f0301b7e9",
          text: "rockstargames-modules-core-newswire-articlee961062768d06292ff6cb598ae1c5e69"
        },
        X = ({
          payload: e,
          prod: a,
          images: t,
          size: i,
          title: n,
          initial: c,
          animate: d,
          variants: l,
          id: m,
          position: u,
          sectionTitle: g,
          expandedType: f,
          context: p,
          children: b,
          expandedCardContents: k,
          textOverlayProps: v = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          deckProps: w = {},
          modalProps: h = [],
          theme: _,
          cardIds: x,
          pricingOptions: y,
          platformOptions: N = null,
          pricingContainerHeight: j,
          isCoverCard: S = !1,
          isProductCard: T = !1
        }) => {
          const C = (0, o.useTinaComponents)(),
            E = (0, r.useMemo)((() => ({
              ...C,
              HTMLElement: F.A,
              ImageWithBadge: $.A,
              Carousel: V.A,
              GroupOfItems: O()
            })), [C]),
            P = (0, r.useMemo)((() => (0, s.jsx)(D, {
              type: f,
              components: E,
              payload: e,
              prod: a,
              images: t,
              size: i,
              title: n,
              context: p,
              textOverlayProps: v,
              initial: c,
              animate: d,
              variants: l,
              theme: _,
              cardIds: x,
              pricingOptions: y,
              id: m,
              pricingContainerHeight: j,
              isCoverCard: S,
              platformOptions: N,
              isProductCard: T,
              children: k
            })), [f, t, a, i, n, v, k, c, d, l, E, e, T]),
            A = [Y.card, S ? Y.coverCardWrapper : ""].join(" ");
          return (0, s.jsx)(Q, {
            id: m,
            position: u,
            sectionTitle: g,
            title: n,
            size: i,
            expandedType: f,
            images: t,
            deckProps: w,
            modalProps: {
              content: P,
              ...h
            },
            className: A,
            isProductCard: T,
            cardIds: x,
            theme: _,
            isCoverCard: S,
            platformOptions: N,
            children: b
          })
        };
      var J = t(14200),
        Z = t(4407);
      const ee = {
          cardContainer: "rockstargames-modules-core-newswire-articlea65bd0d9d5dcff98d39d50398a055863",
          cardDesc: "rockstargames-modules-core-newswire-articled175015429f8daa4f434fd9b81b1a2cb",
          cardInfo: "rockstargames-modules-core-newswire-articlece8cc9fec51fad1ccdcc9dbc3c0e7986",
          clrCollapsedCard: "rockstargames-modules-core-newswire-articleeba324832dbf8f56f76fddb1d358c572",
          newBadge: "rockstargames-modules-core-newswire-articlebfb0205000666e00e4263cf557c3382d",
          outOfStockBadge: "rockstargames-modules-core-newswire-articlef56e1440ab1dbcff414939617853e921",
          price: "rockstargames-modules-core-newswire-articleeededa1d68a7f78ab4c0ba86fcafcb01",
          priceInfo: "rockstargames-modules-core-newswire-articleb678df03ded67dcee3c87ae543d6a5e5",
          saleBadge: "rockstargames-modules-core-newswire-articleca0d7f9e641eae51d7819491f87acc5d",
          slashedPrice: "rockstargames-modules-core-newswire-articleef47a1b9aa928979141bb75952f93adb",
          storeInfo: "rockstargames-modules-core-newswire-articlead85da337b24dbf2f1aba7e75352217a",
          subtitle: "rockstargames-modules-core-newswire-articlec0d737e6798c3e0994f78b427cbe9a59"
        },
        ae = ({
          videoUrl: e,
          expandedType: a,
          children: t
        }) => e && "linkout" === a ? (0, s.jsx)(J.A, {
          to: e,
          children: t
        }) : t,
        te = ({
          className: e,
          cardType: a,
          title: t,
          image: r,
          subheader: i,
          subtitle: n,
          price: o,
          slashedPrice: c,
          badge: d = null,
          expandedType: l,
          videoUrl: m
        }) => (0, s.jsx)("div", {
          className: [ee.clrCollapsedCard, e].join(" "),
          role: "button",
          tabIndex: 0,
          children: (0, s.jsx)(ae, {
            videoUrl: m,
            expandedType: l,
            children: (0, s.jsxs)("div", {
              className: ee.cardContainer,
              "data-type": a,
              children: [(0, s.jsx)("div", {
                className: ee.cardMedia,
                children: (0, s.jsx)(Z.A, {
                  ...r
                })
              }), (0, s.jsxs)("div", {
                className: ee.cardInfo,
                children: [i && (0, s.jsx)("h6", {
                  children: i
                }), (0, s.jsx)("h5", {
                  children: t
                }), n && (0, s.jsx)("h6", {
                  className: ee.subtitle,
                  children: n
                }), "store" === a && (0, s.jsxs)("div", {
                  className: ee.storeInfo,
                  children: [(0, s.jsx)("p", {
                    className: (() => {
                      switch (d) {
                        case "New":
                          return ee.newBadge;
                        case "Sale":
                          return ee.saleBadge;
                        case "Out of Stock":
                          return ee.outOfStockBadge;
                        default:
                          return ""
                      }
                    })(),
                    children: d
                  }), (0, s.jsxs)("span", {
                    className: ee.priceInfo,
                    children: [(0, s.jsx)("p", {
                      className: ee.price,
                      children: o
                    }), (0, s.jsx)("p", {
                      className: ee.slashedPrice,
                      children: c
                    })]
                  })]
                })]
              })]
            })
          })
        }),
        se = ({
          expandedType: e,
          to: a,
          children: t,
          style: i,
          sectionTitle: n = "",
          id: o,
          cardTitle: c,
          position: d
        }) => {
          const {
            track: l
          } = (0, H.useGtmTrack)(), m = (0, r.useCallback)((() => {
            l({
              event: "card_click",
              link_url: a,
              card_id: o,
              card_name: c,
              element_placement: n.toLowerCase(),
              position: d
            })
          }), [n, a, o, c, n, d]);
          return "linkout" === e && a ? (0, s.jsx)(J.A, {
            to: a,
            style: i,
            target: a?.startsWith("http") ? "_blank" : "_self",
            onClick: m,
            children: t
          }) : t
        };
      var re = t(34725);
      const ie = {
          foreground: "rockstargames-modules-core-newswire-articled858cc29f8933cc96ea1b20f734c1796",
          imageMask: "rockstargames-modules-core-newswire-articled656190323ba10afc580adbf82303a8b",
          layered: "rockstargames-modules-core-newswire-articlea7a1d10cda2bf3de7960b4fadf2f7a4e",
          layeredImageFrame: "rockstargames-modules-core-newswire-articlecfc6074d8b476125230142c79438a249",
          logo: "rockstargames-modules-core-newswire-articleca32213b5f72baeb68ba9a21ee8a295b",
          "sm-horizontal": "rockstargames-modules-core-newswire-articlef5ab2fbb234fc0631784968dc2b1da75"
        },
        {
          LiteMotion: ne,
          Animations: oe
        } = c,
        {
          getVariant: ce,
          variants: de,
          transitions: le
        } = oe,
        me = ({
          image: e,
          i: a,
          prod: t
        }) => {
          const {
            alt: r,
            src: i
          } = (0, re.S1)({
            ...e,
            prod: t
          });
          return (0, s.jsx)("img", {
            src: i.mobile,
            alt: r ?? "",
            style: {
              "--z-index": a
            }
          })
        },
        ue = ({
          images: e = [],
          className: a = "",
          prod: t = !1,
          expandedView: i = !1,
          style: n = {}
        }) => {
          const [o, c] = (0, r.useState)({
            height: window.innerHeight,
            width: window.innerWidth
          });
          (0, r.useEffect)((() => {
            function e() {
              c({
                height: window.innerHeight,
                width: window.innerWidth
              })
            }
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [o]);
          const d = (0, r.useMemo)((() => e?.length && 0 !== e.length ? e.map((e => (0, s.jsx)(ne, {
            className: u()(ie[e?.specialClass] ?? ie.imageMask, ie[e?.sizeClass], e?.className),
            variants: ce(e?.specialClass ?? "imageMask", i ? "expanded" : "collapsed"),
            initial: "initial",
            animate: "animate",
            transition: le.cardOpen,
            children: (0, s.jsx)(me, {
              image: e,
              prod: t
            })
          }, e.key))) : null), [e, o, i, t]);
          return (0, s.jsx)(ne, {
            className: u()(ie.layeredImageFrame, e.length > 1 ? ie.layered : ie.flat, a),
            style: n,
            initial: de.fade.in.initial,
            animate: de.fade.in.animate,
            transition: le.instantFade,
            "data-expanded-view": i,
            children: d
          })
        },
        ge = {
          calloutHeaders: "rockstargames-modules-core-newswire-articleebd11baf4f38deb4ff8d0662eb5a6862",
          clrCardModalContent: "rockstargames-modules-core-newswire-articlef32476f7063f9c4104b440088ce4c4b0",
          content: "rockstargames-modules-core-newswire-articlea0b99bca02f0c4de4ad0bf4e4bd02337",
          details: "rockstargames-modules-core-newswire-articlee642b377145369df07970f4d4feb3f25",
          expandedCard: "rockstargames-modules-core-newswire-articlef6cbada424337b1e6ccd75c5029db4c3"
        },
        {
          variants: fe
        } = c.Animations,
        pe = ({
          id: e,
          content: a,
          size: t = "clr",
          cardType: r = "release",
          title: i,
          subheader: n,
          subtitle: c,
          storeInfo: d = {},
          expandedType: l,
          to: m,
          image: u,
          deckProps: g,
          tina: f = {},
          position: p
        }) => {
          const b = (0, o.useTinaPayload)(),
            k = f?.payload?.meta?.cdn ?? b?.meta?.prod ?? !1,
            v = {
              image: {
                ...u,
                prod: k
              }
            },
            w = [u];
          return (0, s.jsx)(X, {
            id: e,
            title: i,
            context: "clr-card",
            size: t,
            expandedType: l,
            images: v,
            deckProps: g,
            prod: k,
            position: p,
            modalProps: {
              className: ge.clrCardModal,
              contentClassName: ge.clrCardModalContent
            },
            variants: fe.plainCard,
            payload: {
              content: a
            },
            expandedCardContents: (0, s.jsx)(ue, {
              images: w,
              prod: k
            }),
            children: (0, s.jsx)(se, {
              expandedType: l,
              to: m,
              style: {
                display: "flex"
              },
              children: (0, s.jsx)(te, {
                cardType: r,
                title: i,
                subheader: n,
                subtitle: c,
                image: v,
                expandedType: l,
                price: d?.price,
                slashedPrice: d?.slashedPrice,
                badge: d?.badge
              })
            })
          })
        };
      var be = t(61306);
      const ke = ({
        images: e,
        title: a,
        expandedView: t,
        variants: i,
        transition: n
      }) => {
        const o = (0, r.useMemo)((() => e && 0 !== e?.length ? e.map(((e, a) => e?.image?.sources ? (0, r.createElement)($.A, {
          ...e,
          key: a,
          style: {
            ...e?.style,
            "--object-position": e?.objectPosition ?? ""
          }
        }) : null)) : null), [e]);
        return !o?.length || o?.length < 1 ? null : 1 === o.length ? o : (0, s.jsx)(be.A, {
          slideChildren: o,
          title: a,
          navigation: t,
          thumbsVisible: t,
          spaceBetween: 0,
          variants: i,
          transition: n
        })
      };
      var ve = t(9738),
        we = t.n(ve),
        he = t(93935);
      const _e = {
          customModalContent: "rockstargames-modules-core-newswire-articleecdc3da21cda9331cebe845898b7fa7b",
          pillBtn: "rockstargames-modules-core-newswire-articlecf00b554598ff2d6e233a11c7c829c7d",
          selected: "rockstargames-modules-core-newswire-articlecbdd37e11b752cff831c5a96aeb7dbeb"
        },
        {
          transitions: xe,
          variants: ye
        } = c.Animations,
        Ne = ({
          id: e,
          title: a,
          content: t,
          size: i = "md",
          expandedType: n = "gallery",
          textOverlayProps: c = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: d = [],
          deckProps: l = {},
          tina: m = {},
          payload: u,
          position: g = 0,
          sectionTitle: f = "",
          cardIds: p
        }) => {
          const b = (0, o.useTinaPayload)(),
            k = u ?? b,
            v = m?.payload?.meta?.cdn ?? k?.meta?.prod ?? !1,
            w = ((e, a) => e?.map((e => e?.image ? {
              ...e,
              image: {
                ...e.image,
                prod: a
              }
            } : e)))(d, v),
            [h, _] = (0, r.useState)(l?.size ?? i),
            {
              parent: x,
              main: y,
              thumbs: N
            } = ye?.cardWithImageGallery?.gallery ?? {};
          return (0, r.useEffect)((() => {
            _(l?.size ?? i)
          }), [l?.size, i]), (0, s.jsx)(X, {
            id: e,
            position: g,
            sectionTitle: f,
            payload: {
              content: t,
              meta: {},
              payload: k
            },
            title: a,
            size: h,
            expandedType: n,
            images: w,
            deckProps: l,
            prod: v,
            variants: ye.cardWithImageGallery,
            textOverlayProps: c,
            modalProps: {
              className: _e.customModal,
              contentClassName: _e.customModalContent
            },
            expandedCardContents: (0, s.jsx)(ke, {
              images: w,
              title: a,
              navigation: !0,
              thumbsVisible: !0,
              variants: {
                parent: x,
                main: y,
                thumbs: N
              },
              transition: {
                parent: xe.cardOpen,
                main: xe.cardOpen,
                thumbs: xe.cardOpen
              }
            }),
            cardIds: p,
            children: (0, s.jsx)("div", {
              className: _e.content,
              children: (0, s.jsx)(I, {
                title: a,
                size: h,
                textOverlayProps: c,
                children: (0, s.jsx)(ke, {
                  images: w,
                  title: a,
                  navigation: !1,
                  thumbsVisible: !1
                })
              })
            })
          })
        };
      var je = t(94848),
        Se = t(46823);
      const Te = (e, a) => {
          let t = getComputedStyle(e).getPropertyValue(a);
          return t = t.replace("px", "").replace("rem", "").replace("em", ""), t = t.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), t = t.replace("ms", "").replace("s", ""), Number(t)
        },
        Ce = e => ({
          x: void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
          y: void 0 !== e.changedTouches ? e.changedTouches[0].screenY : e.screenY
        }),
        Ee = e => e.scrollHeight > e.clientHeight;

      function Pe(e, a) {
        const t = {
          ...e
        };
        return n().forOwn(e, ((e, s) => {
          if ("image" === s) {
            const e = t[s];
            t[s] = {
              ...e,
              prod: a
            }
          } else n().isObject(e) && !n().isArray(e) ? Pe(e, a) : n().isArray(e) && (t[s] = e.map((e => n().isObject(e) ? Pe(e, a) : e)))
        })), t
      }
      const Ae = (0, l.withTranslations)((({
          active: e,
          styles: a,
          title: t,
          itemNumber: i,
          inModalMode: n,
          openModalMode: c,
          element: d,
          upNext: l,
          mobileMode: m,
          refDeck: u,
          components: f,
          tina: p,
          prevPage: b,
          nextPage: k,
          transitionStyle: v,
          selectedItemNumber: w,
          carouselTitle: h,
          sharedDraggingDelta: _,
          setSharedDraggingDelta: x,
          trapFocus: y
        }) => {
          const N = (0, R.useIntl)(),
            {
              track: j
            } = (0, H.useGtmTrack)(),
            S = (0, r.createRef)(),
            T = (0, r.createRef)(),
            C = (0, r.createRef)(),
            E = (0, r.createRef)(),
            P = (0, r.createRef)(),
            [A, I] = (0, r.useState)(!1),
            [L, M] = (0, r.useState)(0),
            [z, D] = (0, r.useState)(0),
            [F, $] = (0, r.useState)(0),
            [V, B] = (0, r.useState)(0),
            [O, G] = (0, r.useState)(0),
            [U, W] = (0, r.useState)(!1),
            [K, Q] = (0, r.useState)(0),
            [Y, X] = (0, r.useState)(0),
            [J, Z] = (0, r.useState)(0),
            [ee, ae] = (0, r.useState)("700"),
            [te, se] = (0, r.useState)(-1),
            [ie, ne] = (0, r.useState)(0),
            [oe, ce] = (0, r.useState)(0),
            [de, le] = (0, r.useState)(0),
            [me, ue] = (0, r.useState)(!1),
            [ge, fe] = (0, r.useState)(""),
            [pe, be] = (0, r.useState)(null),
            [ke, ve] = (0, r.useState)(!1),
            [he, _e] = (0, r.useState)(null),
            [xe, ye] = (0, r.useState)(!1),
            [Ne, je] = (0, r.useState)(!1),
            Se = (0, o.useTinaPayload)(),
            Ae = p?.payload?.meta?.cdn ?? !1 ?? Se?.meta?.prod ?? !1,
            Ie = (0, o.useTranslations)({
              payload: p?.payload,
              variables: p?.variables
            }),
            Le = Ie?.meta ?? {},
            Me = Pe(Ie?.content?.[0], Ae),
            ze = (0, r.useMemo)((() => Me?.images?.[0]?.image?.badge), [Me]),
            De = (0, r.useMemo)((() => Me.title ?? t ?? Le?.title), [t, Le?.title, Me.title]),
            Fe = (0, re.S1)({
              alt: Me?.images?.[0]?.image?.alt ?? "",
              ariaLabel: Me?.images?.[0]?.image?.alt ?? "",
              sources: Me?.images?.[0]?.image?.sources ?? [],
              prod: Ae
            }),
            $e = Fe?.src?.mobile ?? Fe?.src?.desktop ?? !1,
            Ve = (0, r.useMemo)((() => Le?.foreignId), [Le]),
            Be = (0, r.useMemo)((() => Le?.foreignTitle), [Le]),
            [Oe, Ge] = (0, r.useState)(0),
            [Re, He] = (0, r.useState)(0),
            [Ue, We] = (0, r.useState)(0),
            [qe, Ke] = (0, r.useState)(0),
            [Qe, Ye] = (0, r.useState)(!1),
            [Xe, Je] = (0, r.useState)(0),
            [Ze, ea] = (0, r.useState)(20),
            [aa, ta] = (0, r.useState)(null),
            [sa, ra] = (0, r.useState)(!1);
          let ia = n ? -1 : 0;
          ia = n && !e ? -1 : 0;
          const na = (0, r.useCallback)((e => {
              if (!0 === U || !n && !m || ke) return;
              const a = Ce(e);
              Ge(a.x), He(a.y)
            }), [U, n]),
            oa = e => {
              na(e)
            },
            ca = e => {
              if (!0 === U || 0 === Oe || !n && !m || ke) return;
              const a = Ce(e),
                t = a.x > Oe ? 1 : -1,
                s = Math.abs(Oe - a.x);
              n && !m && s > Ze ? (ra(!0), fe(t > 0 ? "prev" : "next"), la()) : (Ye(!0), Je(s * t), x(s * t))
            },
            da = e => {
              if (!0 === U || !n && !m || ke) return;
              const a = Ce(e),
                t = a.x > Oe ? 1 : -1,
                s = Math.abs(Oe - a.x),
                r = Math.abs(Re - a.y);
              n && !m ? (la(), fe("")) : s > Ze && r < 25 ? (ra(!0), fe(t > 0 ? "prev" : "next"), la()) : la()
            },
            la = () => {
              W(!0), Ge(0), He(0), Ye(!1), Je(0), x(0)
            },
            ma = e => {
              e ? (n || I(!0), n || m || (clearTimeout(te), se(setTimeout((() => {
                j({
                  event: "card_title_hover",
                  card_name: De,
                  card_id: i,
                  position: i,
                  view_name: `${Ve}/${Be}`,
                  source_content_id: Ve,
                  source_content_name: Be
                })
              }), 1e3)))) : (n || I(!1), n || m || clearTimeout(te))
            };
          return (0, r.useEffect)((() => {
            let e = K;
            A ? e = 0 : n && !m && (e = K), M(e)
          }), [A, m, n, z, V, Y, J, F, K]), (0, r.useEffect)((() => {
            I(!(!n || !m))
          }), [n, m]), (0, r.useEffect)((() => {
            n && e && j({
              event: "virtualPageview",
              display_type: m ? "mobile" : "desktop",
              view_name: `${Ve}/${De}`,
              source_content_id: Ve,
              source_content_name: Be
            })
          }), [n, e]), (0, r.useEffect)((() => {
            const e = we()(((e, a) => {
              let t = 18;
              if (e?.documentElement && (t = Te(e?.documentElement, "--root-font-size")), oe !== a.innerHeight && ce(a.innerHeight), u?.current) {
                Z(Te(u.current, "--eventDeck-marginSm") * t);
                const e = t * Te(u?.current, "--eventDeck-modalGutters"),
                  s = a?.innerWidth,
                  r = s - 2 * e;
                D(r), E.current && m && $(r), B(Te(u.current, "--eventDeck-itemSize") * t), le(Te(u.current, "--eventDeck-phaseOneTransitionDuration"));
                const i = Te(u?.current, "--eventDeck-itemImageTitleMargins") * t,
                  n = T?.current?.clientHeight,
                  o = n + i;
                Number.isNaN(o) || Q(o), ne(Te(u?.current, "--eventDeck-headerHeight") * t)
              }
              let s = Math.min(700, a.innerWidth);
              m || (s = 900), ae(`${s}`)
            }), 300);
            return window.addEventListener("resize", (() => {
              e(document, window)
            })), e(document, window), () => {
              window.removeEventListener("resize", (() => {
                e(document, window)
              }))
            }
          }), [u, m]), (0, r.useEffect)((() => {
            if (S.current) {
              const e = S.current.clientHeight;
              Number.isNaN(e) || X(e)
            }
          }), [S]), (0, r.useEffect)((() => {
            if (n && m && E.current && (E.current.style.transform = "scale(1) translate3d(0, 0, 0)"), !n && m && E.current) {
              const e = 228 / z;
              E.current.style.transform = `scale(${e}) translate3d(0, 0, 0)`
            }!m && E.current && (E.current.style.transform = null)
          }), [n, m, z, F]), (0, r.useEffect)((() => {
            const e = .5 * z,
              a = oe - ie - 3 * J;
            G(z - (e < a ? e : a))
          }), [z, J, oe]), (0, r.useEffect)((() => {
            "next" === ge ? (k(null, !0), fe("")) : "prev" === ge && (b(null, !0), fe(""))
          }), [ge]), (0, r.useEffect)((() => {
            We(0), Ke(0)
          }), [m]), (0, r.useEffect)((() => {
            m ? ea(n ? 35 : 20) : n && ea(50)
          }), [n, m]), (0, r.useEffect)((() => {
            let e = [],
              t = 0,
              s = 0;
            if (null !== a?.transform) {
              e = a.transform.split(",");
              const r = e[0].split("(");
              t = Number(r[1].replace("px", "")), We(t), s = Number(e[1].replace("px", "")), Ke(s)
            }
          }), [a]), (0, r.useEffect)((() => {
            if (!U) return;
            clearTimeout(pe);
            const e = setTimeout((() => {
              W(!1), Ge(0)
            }), 200);
            be(e)
          }), [U, 200]), (0, r.useEffect)((() => {
            if (!sa) return;
            clearTimeout(aa);
            const e = setTimeout((() => {
              ra(!1)
            }), 1e3);
            ta(e)
          }), [sa]), (0, r.useEffect)((() => {
            n && clearTimeout(te), setTimeout((() => {
              ue(!me)
            }), de)
          }), [n]), (0, r.useEffect)((() => (document.body.addEventListener("mouseleave", la), () => {
            document.body.removeEventListener("mouseleave", la)
          })), []), (0, r.useEffect)((() => {
            P.current ? ye(Ee(P.current)) : ye(!1), void 0 !== d && d.current ? je(Ee(d.current)) : je(!1)
          }), [d, P, e, n, me]), Me ? (0, s.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlec02ee363d47108460ab7916fc955cd9b",
            ref: d,
            "data-item-position": i,
            "data-modal-mode": n,
            "data-active-item": e,
            "data-up-next": l,
            "data-transition": Qe || 0 !== _ ? "none" : v,
            "data-scrollable": Ne,
            style: {
              ...a,
              transform: n && e && !m ? `translate3d(${Ue+Xe}px, ${qe}px, 0)` : m && !n ? `translate3d(${Ue+_}px, ${qe}px, 0)` : a?.transform
            },
            onClick: e => {
              sa || (n ? n && !m && (i < w ? b(e, !0) : i > w && k(e, !0)) : c(e))
            },
            onMouseEnter: () => ma(!0),
            onMouseLeave: () => ma(!1),
            onFocus: () => ma(!0),
            onBlur: () => ma(!1),
            onTouchStart: oa,
            onTouchMove: ca,
            onTouchEnd: da,
            onMouseDown: oa,
            onMouseMove: ca,
            onMouseUp: da,
            onKeyUp: e => {
              "Enter" === e.key && (n || c(e))
            },
            onKeyDown: e => {
              "Tab" === e.key && e.shiftKey && n && (e.preventDefault(), y("backwards"))
            },
            tabIndex: ia,
            "aria-label": n ? N.formatMessage(q.events_deck_modal_group_label) : De,
            role: n ? "dialog" : "presentation",
            children: [(0, s.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articledee75b8e3614051c8f0fc97e373e78e5",
              "data-full-header": A,
              ref: C,
              style: {
                height: n && m ? `${z}px` : null,
                width: n && m ? `${z}px` : null
              },
              children: [$e && (0, s.jsx)("img", {
                ref: E,
                src: `${Fe?.src?.mobile??Fe?.src?.desktop}?im=Resize,width=${ee}`,
                alt: Fe?.alt,
                style: {
                  width: 0 !== F && m ? `${F}px` : null,
                  height: 0 !== F && m ? `${F}px` : null
                }
              }), (0, s.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articledc279f97c134d6e7d30602288b8b10ae",
                "aria-hidden": "true",
                style: {
                  transform: !m || m && n ? `translate3d(0, ${L}px, 0)` : null
                },
                children: [ze && (0, s.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlecfe252d5613a21c1d308c98566cabd21",
                  ref: S,
                  children: (0, s.jsx)(g.A, {
                    text: ze
                  })
                }), (0, s.jsx)("span", {
                  className: "rockstargames-modules-core-newswire-articleb311a78aea53383ab6bd5cbccb52ceeb",
                  ref: T,
                  "aria-hidden": "true",
                  children: De
                })]
              })]
            }), (0, s.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articled212586e74ea4b4fe934beed9e339f78",
              ref: P,
              "aria-hidden": !n,
              onScroll: () => {
                ve(!0), la(), clearTimeout(he);
                const e = setTimeout((() => {
                  ve(!1)
                }), 100);
                _e(e)
              },
              style: {
                top: n && m ? `${z}px` : null,
                width: n && !m && e ? `${O}px` : null,
                touchAction: xe || m ? "unset" : "none"
              },
              children: [De && (0, s.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articleda9ef865674c108ffd53cfab2ed2971a",
                children: De
              }), (0, s.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articleabad8b0c98a7216d91b672492397e6a6",
                children: (0, s.jsx)(o.TinaParser, {
                  components: f,
                  tina: {
                    meta: Le,
                    payload: {
                      content: Me?.content
                    }
                  }
                })
              }), (0, s.jsx)("button", {
                className: "rockstargames-modules-core-newswire-articlea0b399d3bf191afcf00e7196639527d5",
                type: "button",
                onFocus: y,
                style: {
                  display: n ? "block" : "none"
                }
              })]
            })]
          }) : null
        })),
        Ie = "rockstargames-modules-core-newswire-articleeff7810cc71a3b63bfc3e58cbe4a0279",
        Le = ({
          prevPage: e,
          prevBtnDisabled: a,
          nextPage: t,
          nextBtnDisabled: i,
          selectedItemNumber: n,
          itemsData: o,
          closeModalMode: c,
          inModalMode: d,
          controlsHidden: l,
          focusTrapControl: m,
          focusTrapDirection: u,
          setTriggerFocusCard: g
        }) => {
          const f = (0, R.useIntl)(),
            p = (0, r.createRef)(),
            b = (0, r.createRef)(),
            k = (0, r.createRef)();
          return (0, r.useEffect)((() => {
            m && ("backwards" === u ? k?.current?.focus() : a ? b?.current?.focus() : p?.current?.focus())
          }), [m, a]), (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlea13ee8af1dd8f09d28c65e56abd782ef",
              "aria-hidden": l || "false",
              children: [(0, s.jsx)("button", {
                className: Ie,
                ref: p,
                type: "button",
                onClick: e,
                disabled: a,
                "aria-label": d ? f.formatMessage(q.events_deck_modal_previous_aria_label) : f.formatMessage(q.events_deck_previous_aria_label),
                onKeyDown: e => {
                  "Tab" === e.key && e.shiftKey && d && (e.preventDefault(), g(!0))
                }
              }), (0, s.jsxs)("span", {
                className: "rockstargames-modules-core-newswire-articlea6b11adaa46a0c2acc5893d2f5da04f1",
                "aria-hidden": !d,
                "aria-label": f.formatMessage(q.events_deck_paging_label, {
                  currentPage: n + 1,
                  totalPages: o.length
                }),
                children: [n + 1, (0, s.jsx)("span", {
                  className: "rockstargames-modules-core-newswire-articleaad28b229162f1d7494a2de3a3b6b547"
                }), o.length]
              }), (0, s.jsx)("button", {
                className: Ie,
                ref: b,
                type: "button",
                onClick: t,
                onKeyDown: e => {
                  "Tab" === e.key && e.shiftKey && a && d && (e.preventDefault(), g(!0))
                },
                disabled: i,
                "aria-label": d ? f.formatMessage(q.events_deck_modal_next_aria_label) : f.formatMessage(q.events_deck_next_aria_label)
              })]
            }), (0, s.jsx)("button", {
              className: "rockstargames-modules-core-newswire-articlefb0b7933375b44858b7e92cdea86ee81",
              type: "button",
              onClick: c,
              ref: k,
              onKeyDown: e => {
                "Tab" === e.key && !e.shiftKey && d && (e.preventDefault(), g(!0))
              },
              "aria-label": f.formatMessage(q.events_deck_modal_close_label),
              "aria-hidden": !d,
              tabIndex: d ? 0 : -1
            })]
          })
        };
      (0, R.withIntl)((e => {
        const {
          setBodyIsLocked: a
        } = (0, l.useBodyScrollable)("EventsDeck"), {
          title: t
        } = e, {
          track: i
        } = (0, H.useGtmTrack)(), [c, d] = (0, r.useState)(!1), m = (() => {
          const {
            data: e
          } = (0, l.useQuery)(Se.TinaModulesList, {
            variables: {
              type: "gtao-event-card",
              orderBy: "priority",
              orderDirection: "desc"
            }
          }), a = e?.tinaModulesList?.results, t = n().map(a, "id");
          return (0, je.X)({
            ids: t
          })
        })(), [u, g] = (0, r.useState)([]), [f, p] = (0, r.useState)(null), [b, k] = (0, r.useState)(0), [v, w] = (0, r.useState)(window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth), [h, _] = (0, r.useState)(!1), x = (0, r.createRef)(), [y, N] = (0, r.useState)(null), j = (0, r.createRef)(), S = (0, r.createRef)(), [T, C] = (0, r.useState)([]), [E, P] = (0, r.useState)(!0), [A, I] = (0, r.useState)(!1), [L, M] = (0, r.useState)(!1), [z, D] = (0, r.useState)([]), [B, G] = (0, r.useState)(404), [R, U] = (0, r.useState)(808), [W, q] = (0, r.useState)(672), [K, Q] = (0, r.useState)(336), [Y, X] = (0, r.useState)(0), [J, Z] = (0, r.useState)(0), [ee, ae] = (0, r.useState)(0), [te, se] = (0, r.useState)(0), [re, ie] = (0, r.useState)(0), [ne, oe] = (0, r.useState)(!1), ce = !!(0, l.usePrevious)(ne), [de, le] = (0, r.useState)(window.innerWidth), [me, ue] = (0, r.useState)(0), [ge, fe] = (0, r.useState)(0), [pe, be] = (0, r.useState)(0), [ke, ve] = (0, r.useState)(0), [_e, xe] = (0, r.useState)(0), [ye, Ee] = (0, r.useState)(0), [Pe, Ie] = (0, r.useState)(0), [Me, ze] = (0, r.useState)(0), [De, Fe] = (0, r.useState)(-1e3), [$e, Ve] = (0, r.useState)(0), [Be, Oe] = (0, r.useState)(50), [Ge, Re] = (0, r.useState)(0), [He, Ue] = (0, r.useState)(!1), [We, qe] = (0, r.useState)(768), [Ke, Qe] = (0, r.useState)(!1), [Ye, Xe] = (0, r.useState)(!1), [Je, Ze] = (0, r.useState)(!1), [ea, aa] = (0, r.useState)(!1), [ta, sa] = (0, r.useState)(!1), [ra, ia] = (0, r.useState)(1e3), [na, oa] = (0, r.useState)(1.2), [ca, da] = (0, r.useState)(0), [la, ma] = (0, r.useState)(!1), [ua, ga] = (0, r.useState)(!1), [fa, pa] = (0, r.useState)(!0), [ba, ka] = (0, r.useState)(!1), [va, wa] = (0, r.useState)(!1), [ha, _a] = (0, r.useState)(null), [xa, ya] = (0, r.useState)(100), [Na, ja] = (0, r.useState)(!1), [Sa, Ta] = (0, r.useState)({}), [Ca, Ea] = (0, r.useState)(""), [Pa, Aa] = (0, r.useState)(0), [Ia, La] = (0, r.useState)(!1), [Ma, za] = (0, r.useState)(!1), [Da, Fa] = (0, r.useState)(0), [$a, Va] = (0, r.useState)(0), [Ba, Oa] = (0, r.useState)(100), [Ga, Ra] = (0, r.useState)(!1), [Ha, Ua] = (0, r.useState)(!1), [Wa, qa] = (0, r.useState)(!1), [Ka, Qa] = (0, r.useState)(!1), [Ya, Xa] = (0, r.useState)("forward"), Ja = () => de * me + Be, Za = () => !1 === He ? na : 1, et = e => e === Pe - 1 || e === Pe + 1, at = () => {
          let e = -1 * ye;
          return e = -1 * ye - ke, e
        }, tt = (e, a = !0) => {
          if (!0 === He) return 0;
          const t = e.itemNumber % 2 == 0,
            s = B * na;
          if (!0 === t && 0 !== e.itemNumber) {
            const t = Te(e?.element?.current, "top");
            let r = t - ee;
            return !1 === a && (r -= t), -1 * (.5 * s + r) + ca
          }
          return ee - .5 * s + ca
        }, st = (e, a, t = !0) => {
          let s = at();
          !1 === t && (s = 0);
          const r = de * me,
            i = !1 === He ? B * Za() : r;
          return e.inModalMode && He ? -1 === a ? Ja() * (Pe - e.itemNumber) * -1 - e.styles.left : Ja() * (e.itemNumber - Pe) - e.styles.left : -1 === a ? -1 * e.styles.left - i - Be + s : r - e.styles.left + Be + s
        }, rt = (e, a, t) => {
          -1 === a && (I(!1), P(!0)), I(!1 === t && e >= a || !0 === t && e + 1 === a), P(e <= 0)
        }, it = (e, a = !1) => {
          if (va || ba) return;
          if (wa(!0), ne) return void((e = !1) => {
            if (Pe + 1 >= u.length) return;
            const a = T[Pe + 1]?.tina?.payload?.meta?.title ?? `card-${Pe+1}`;
            i({
              event: e ? "modal_swipe" : "modal_next",
              card_name: a,
              card_id: Pe + 1,
              position: Pe + 1,
              view_name: `${T[Pe+1].source_content_id}/${a}`,
              source_content_id: T[Pe + 1].source_content_id,
              source_content_name: T[Pe + 1].source_content_name
            }), rt(Pe + 1, u.length, !0), He ? He && C(T.map((e => {
              e.itemNumber === Pe - 1 ? e.upNext = !1 : e.itemNumber === Pe + 2 ? e.upNext = !0 : e.itemNumber === Pe + 1 ? e.active = !0 : e.itemNumber === Pe && (e.upNext = !0, e.active = !1);
              const a = e.styles.transform.replace("translate3d(", "").split(",");
              let t = Number(a[0].replace("px", ""));
              t -= Ja();
              const s = `translate3d(${t}px,${a[1]},${a[2]}`;
              return e.styles = {
                ...e.styles,
                transform: s
              }, e
            }))) : C(T.map((e => (e.itemNumber === Pe - 1 ? e.upNext = !1 : e.itemNumber === Pe + 2 ? e.upNext = !0 : e.itemNumber === Pe + 1 ? (e.active = !0, e.styles = {
              left: 0,
              top: 0,
              transform: `translate3d(${at()}px, ${ca}px, 0) scale(1)`
            }) : e.itemNumber === Pe && (e.upNext = !0, e.active = !1, e.styles = {
              ...e.styles,
              transform: `translate3d(${st(e,-1)}px, ${tt(e)}px, 0) scale(${Za()})`
            }), e)))), Ie(Pe + 1)
          })(a);
          const s = _e + 1;
          if (!(s > re))
            if (i({
                event: a ? "carousel_swipe" : "carousel_next",
                element_placement: t?.toLowerCase() ?? ""
              }), rt(s, re, !1), He) {
              let e = s * K * -1;
              e < De && (e = De, I(!0), P(!1), xe(re)), xe(s), C(T.map((a => (a.styles = {
                ...a.styles,
                transform: `translate3d(${e}px, 0, 0)`
              }, a))))
            } else {
              let e = ye - J;
              xe(s), e < De && (e = De, I(!0), P(!1), xe(re)), Ee(e)
            }
        }, nt = (e, a = !1) => {
          if (va || ba) return;
          if (wa(!0), !0 === ne) return void((e = !1) => {
            if (va) return;
            if (Pe - 1 < 0) return;
            const a = T[Pe - 1]?.tina?.payload?.meta?.title ?? "card-" + (Pe - 1);
            i({
              event: e ? "modal_swipe" : "modal_previous",
              element_placement: t?.toLowerCase(),
              card_name: a,
              card_id: Pe - 1,
              position: Pe - 1,
              view_name: `${T[Pe-1].source_content_id}/${a}`,
              source_content_id: T[Pe - 1].source_content_id,
              source_content_name: T[Pe - 1].source_content_name
            }), rt(Pe - 1, u.length, !0), He || C(T.map((e => (e.itemNumber === Pe + 1 ? e.upNext = !1 : e.itemNumber === Pe - 2 ? e.upNext = !0 : e.itemNumber === Pe ? (e.upNext = !0, e.active = !1, e.styles = {
              ...e.styles,
              transform: `translate3d(${st(e,1)}px, ${tt(e)}px, 0) scale(${Za()})`
            }) : e.itemNumber === Pe - 1 && (e.active = !0, e.styles = {
              left: 0,
              top: 0,
              transform: `translate3d(${at()}px, ${ca}px, 0) scale(1)`
            }), e)))), He && C(T.map((e => {
              e.itemNumber === Pe + 1 ? e.upNext = !1 : e.itemNumber === Pe - 2 ? e.upNext = !0 : e.itemNumber === Pe ? (e.upNext = !0, e.active = !1) : e.itemNumber === Pe - 1 && (e.active = !0);
              const a = e.styles.transform.replace("translate3d(", "").split(",");
              let t = Number(a[0].replace("px", ""));
              t += Ja();
              const s = `translate3d(${t}px,${a[1]},${a[2]}`;
              return e.styles = {
                ...e.styles,
                transform: s
              }, e
            }))), Ie(Pe - 1)
          })(a);
          const s = _e - 1;
          if (!(s < 0))
            if (i({
                event: a ? "carousel_swipe" : "carousel_previous",
                element_placement: t?.toLowerCase()
              }), rt(s, re, !1), He) {
              let e = s * K * -1;
              e > 0 && (e = 0, P(!0), I(!1), xe(0)), xe(s), C(T.map((a => (a.styles = {
                ...a.styles,
                transform: `translate3d(${e}px, 0, 0)`
              }, a))))
            } else {
              let e = ye + J;
              xe(s), (e > 0 || 0 === e || -1 * e < R) && (e = 0, P(!0), I(!1), xe(0)), Ee(e)
            }
        }, ot = e => {
          if (Ia || ne || He) return;
          const a = Ce(e);
          Aa(a.x)
        }, ct = e => {
          if (Ia || 0 === Pa || ne || He) return;
          const a = Ce(e),
            t = a.x > Pa ? 1 : -1;
          let s = Math.abs(Pa - a.x) * t;
          (0 === _e && 1 === t || _e === re && -1 === t) && (s *= .35), za(!0), Fa(s)
        }, dt = e => {
          if (Ia || ne || He) return;
          const a = Ce(e),
            t = a.x > Pa ? 1 : -1,
            s = Math.abs(Pa - a.x);
          Ea(s > Ba ? t > 0 ? "prev" : "next" : ""), lt()
        }, lt = () => {
          La(!0), Aa(0), Fa(0), za(!1)
        }, mt = e => {
          Ma && (dt(e), za(!1))
        }, ut = (e, a, t = "") => e.map(((e, s) => {
          let r = s * K,
            i = s;
          !1 === He && (i = Math.ceil(.5 * s) + 1, s > 0 && (r = 2 === i ? W : W + K * (i - 2)));
          const n = z[s];
          return n?.current && (n.current.scrollTop = 0), {
            ...e,
            mobileMode: He,
            itemNumber: s,
            columnNumber: i,
            inModalMode: !1,
            upNext: !0,
            active: !1,
            openModalMode: ft,
            element: n,
            transitionStyle: a,
            styles: {
              left: r,
              transform: "" === t ? null : t,
              height: null,
              top: null
            },
            trapFocus: pt
          }
        })), gt = () => {
          const e = T[Pe]?.tina?.payload?.meta?.title ?? `card-${Pe}`;
          i({
            event: "modal_close",
            element_placement: t?.toLowerCase(),
            card_name: e,
            card_id: Pe,
            position: Pe,
            view_name: `${T[Pe].source_content_id}/${e}`,
            source_content_id: T[Pe].source_content_id,
            source_content_name: T[Pe].source_content_name
          });
          const a = T[Pe]?.element?.current;
          if (He) {
            let e = Pe * K * -1;
            e < De && (e = De, I(!0), P(!1), xe(re)), xe(Pe), rt(Pe, re, !1), C(ut(u, "cardClose", `translate3d(${e}px, 0, 0)`))
          } else {
            C(ut(u, "cardClose"));
            const e = Math.ceil((T[Pe].columnNumber + 1) / Y) - 1;
            xe(e);
            let a = e * J * -1;
            Ge < ge ? (a = 0, P(!0), I(!0), xe(0)) : a < De ? (a = De, P(!1), I(!0), xe(re)) : rt(e, re, !1), Ee(a), Ie(0)
          }
          j.current.style.transform = "translate(0px, 0px)", j.current.style.transition = "all var(--eventDeck-transitionCardClose)", ma(!1), aa(!1), oe(!1), Xe(!1), Qe(!1), sa(!1), setTimeout((() => {
            Ze(!0), a.focus()
          }), ra)
        };
        (0, r.useEffect)((() => {
          !1 !== Je && (Ze(!1), ma(!1), y.style.zIndex = null, C(T.map((e => (e.transitionStyle = "", e)))))
        }), [Je]);
        const ft = e => {
            setTimeout((() => {
              Ta(e), ja(!0)
            }), 1)
          },
          pt = e => {
            Qa(!0), Xa(e), setTimeout((() => {
              Qa(!1)
            }), 1e3)
          };
        (0, r.useEffect)((() => {
          Wa && (qa(!1), T[Pe]?.element?.current?.focus())
        }), [Wa]), (0, r.useEffect)((() => {
          if (!Na) return;
          if (ja(!1), va) return;
          Ie(Number(Sa?.target?.dataset?.itemPosition)), Xe(!0), ka(!0), fa && pa(!1);
          const e = T[Sa?.target?.dataset?.itemPosition].source_content_id,
            a = T[Sa?.target?.dataset?.itemPosition].source_content_name,
            s = T[Sa?.target?.dataset?.itemPosition]?.tina?.payload?.meta?.title;
          i({
            event: "card_click",
            element_placement: t?.toLowerCase(),
            card_name: s ?? `card-${Pe}`,
            card_id: Sa?.target?.dataset?.itemPosition,
            position: Sa?.target?.dataset?.itemPosition,
            view_name: `${e}/${s}`,
            source_content_id: e,
            source_content_name: a
          })
        }), [Na]), (0, r.useEffect)((() => {
          if (!Ye || ne) return;
          Xe(!1);
          const e = (() => {
            const e = y?.getBoundingClientRect().top;
            return da(-1 * (e - b)), -1 * (e - 140)
          })();
          He && C(T.map((e => {
            const a = e.itemNumber > Pe + 3 || e.itemNumber < Pe - 3;
            return e.styles = {
              ...e.styles,
              display: a ? "none" : null,
              transition: a ? "none" : null
            }, e
          }))), y.style.zIndex = "var(--eventDeck-zIndexOverlay)", ma(!0), j.current && (j.current.style.transition = "all var(--eventDeck-transitionCardOpen)", j.current.style.transform = `translate(${-1*ke}px, ${e}px)`), aa(!0), setTimeout((() => {
            Qe(!0)
          }), 1)
        }), [Ye]);
        const bt = () => {
          C(T.map(((e, a) => {
            e.active = a === Pe, e.inModalMode = !0, e.transitionStyle = "cardOpen", He && (e.upNext = et(e.itemNumber));
            const t = !He;
            let s = 0;
            if (He) {
              const e = Me + 5 * b;
              s = window.innerHeight - e
            }
            return e.itemNumber < Pe ? e.styles = {
              ...e.styles,
              height: He ? `${s}px` : null,
              transform: `translate3d(${st(e,-1,t)}px, ${ca}px, 0) scale(${Za()})`
            } : e.itemNumber > Pe ? e.styles = {
              ...e.styles,
              height: He ? `${s}px` : null,
              transform: `translate3d(${st(e,1,t)}px, ${ca}px, 0) scale(1)`
            } : e.itemNumber === Pe && (e.styles = He ? {
              ...e.styles,
              height: `${s}px`,
              transform: `translate3d(${-1*e.styles.left}px, ${ca}px, 0) scale(1)`
            } : {
              left: 0,
              top: 0,
              transform: `translate3d(${at()}px, ${ca}px, 0) scale(1)`
            }), e
          })))
        };
        (0, r.useEffect)((() => {
          !1 !== Ke && !0 !== ne && (oe(!0), Qe(!1), rt(Pe, T.length, !0), j.current && (j.current.style.transition = "all var(--eventDeck-transitionCardOpen)", j.current.style.transform = `translate(${-1*ke}px, ${ca}px)`), bt(), He ? (Ee(0), ka(!1), ga(!0)) : sa(!0))
        }), [Ke]), (0, r.useEffect)((() => {
          ua && (ga(!1), C(T.map((e => ("none" === e.styles.display && (e.styles.display = null, e.styles.transition = null), e)))))
        }), [ua]);
        const kt = (e = !1) => {
          C(T.map((a => {
            if (a.upNext = et(a.itemNumber), a.itemNumber !== Pe) {
              let e = st(a, 1);
              a.itemNumber < Pe && (e = st(a, -1)), a.styles = {
                ...a.styles,
                transform: `translate3d(${e}px, ${tt(a)}px, 0) scale(${Za()})`
              }
            } else a.itemNumber === Pe && !He && e && (a.styles = {
              left: 0,
              top: 0,
              transform: `translate3d(${at()}px, ${ca}px, 0) scale(1)`
            });
            return a
          })))
        };
        (0, r.useEffect)((() => {
          !1 !== ta && !0 !== He && (sa(!1), setTimeout((() => {
            kt(), ka(!1)
          }), 1))
        }), [ta]), (0, r.useEffect)((() => {
          C(ut(u, ""))
        }), [W, K, u]), (0, r.useEffect)((() => {
          const e = window.navigator?.userAgentData?.platform || window.navigator?.platform;
          Ra(["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(e))
        }), []), (0, r.useEffect)((() => {
          const e = ce !== ne;
          ne ? (e && a(!0), Ga && Ua(!0)) : Ma || ne || (e && a(!1), Ga && Ha && Ua(!1))
        }), [ne, Ma]), (0, r.useEffect)((() => {
          if (!va) return;
          clearTimeout(ha);
          const e = setTimeout((() => {
            wa(!1)
          }), xa);
          _a(e)
        }), [va]), (0, r.useEffect)((() => {
          h && setTimeout((() => {
            _(!1)
          }), 3e3)
        }), [h]), (0, r.useEffect)((() => {
          _(!0), Ee(0), xe(0);
          let e = Math.ceil(Math.ceil(Ge / K) / Y);
          He && (e = T.length - 1), e < 0 && (e = 1), rt(0, e, !1), ne && gt()
        }), [He]), (0, r.useEffect)((() => {
          j.current && !ne && (j.current.style.transform = "")
        }), [j, He, ne]), (0, r.useEffect)((() => {
          const e = (m ?? []).map((e => {
            let a = null;
            return "FeaturedEventInfo" === e?.tina?.payload?.content[0]?._template && e?.tina?.variables?.keys?.meta && (a = e?.tina?.variables?.keys?.meta?.title), {
              ...e,
              title: a,
              source_content_id: e?.tina?.payload?.meta?.foreignId,
              source_content_name: e?.tina?.payload?.meta?.foreignTitle,
              view_name: `${e?.tina?.payload?.meta?.foreignId}/${e?.tina?.payload?.meta?.foreignTitle}`
            }
          }));
          e.length > 10 && (e.length = 10), g(e)
        }), [m]), (0, r.useEffect)((() => {
          D(u.map((() => (0, r.createRef)())))
        }), [u]), (0, r.useEffect)((() => {
          const e = e => {
            const {
              key: a
            } = e;
            "ArrowLeft" === a ? nt(0, !1) : "ArrowRight" === a ? it(0, !1) : "Escape" === a && ne && gt()
          };
          return document.addEventListener("keydown", e), () => {
            document.removeEventListener("keydown", e)
          }
        }), [va, ba, ne, j]), (0, r.useEffect)((() => {
          if (j.current) {
            let e = 0;
            e = j?.current?.clientHeight, e += Te(j?.current, "margin-top"), e += Te(j?.current, "margin-bottom"), ze(e)
          }
        }), [j, S]), (0, r.useEffect)((() => {
          ne && (() => {
            const e = y?.getBoundingClientRect().top,
              a = -1 * (e - b);
            if (C(T.map((e => {
                if (e.styles.transform) {
                  const t = e.styles.transform.split(","),
                    s = `${t[0]}, ${a}px,${t[2]}`;
                  e.styles = {
                    ...e.styles,
                    transform: s
                  }
                }
                return e
              }))), j.current) {
              const a = -1 * (e - b);
              j.current.style.transform = `translate(${-1*ke}px, ${a}px)`
            }
          })()
        }), [He, ne, ca]), (0, r.useEffect)((() => {
          ne || (Ge < me * de && 0 === _e ? (Ee(0), I(!0), P(!0)) : ye < De ? (I(!0), P(!1), xe(re), Ee(De)) : ye < 0 && (I(!1), xe(re - 1)), Ge > me * de && A && I(!1))
        }), [De]), (0, r.useEffect)((() => {
          if (x.current) {
            N(x.current);
            const e = Te(document.documentElement, "--root-font-size"),
              a = Te(x.current, "--eventDeck-modalGutters") * e,
              t = Te(x.current, "--eventDeck-collapsedMaxWidth");
            be(t);
            let s = de - 2 * a;
            s > t && (s = t), fe(s), ue(s / de);
            const r = 2 * a + s;
            let i = 0;
            r < de && (i = .5 * (de - r)), ve(i);
            let n = Te(x.current, "--eventDeck-modalBottomGutter");
            n *= e;
            const o = window.innerHeight - (Me + n);
            ae(.5 * s < o ? s / 4 : .5 * o);
            const c = Te(x.current, "--eventDeck-mobileBreakpoint");
            qe(c);
            let d = Te(x.current, "--eventDeck-itemSize");
            d *= e, G(d);
            let l = Te(x.current, "--eventDeck-modalGutterGap");
            l *= e, Oe(l);
            let m = Te(x.current, "--eventDeck-insideMargin");
            m *= e;
            const g = !1 === He ? 2 * d + m : d + m;
            U(g), q(g + m);
            const b = d + m;
            Q(b);
            let v = Math.ceil(.5 * (u.length - 1)) * b + g;
            He && (v = u.length * b), Re(v), 0 !== Ge && Fe(-1 * Ge + s);
            let w = Math.ceil(Math.ceil(v / b) / Y);
            (He || ne) && (w = T.length - 1), ie(w);
            const h = Te(x.current, "--eventDeck-itemScaleUpAmount");
            oa(h), ia(Te(x.current, "--eventDeck-cardCloseTransitionDuration")), k(Te(x.current, "--eventDeck-itemImageTitleMargins") * e), null !== f && e !== f && (p(e), ne && kt()), null === f && p(e)
          }
        }), [x, u]), (0, r.useEffect)((() => {
          if (ne && !He) {
            kt();
            const e = y?.getBoundingClientRect().top,
              a = -1 * (e - b);
            a !== ca && da(a)
          }
        }), [v]), (0, r.useEffect)((() => {
          M(!(!E || !A || ne))
        }), [E, A]), (0, r.useEffect)((() => {
          const e = we()((e => {
            le(e), Ue(e < We);
            const a = (1 - me) / 2;
            Ve(e * a);
            const t = Math.floor(ge / K);
            X(t);
            let s = t * K;
            s > pe && (s = pe), Z(s), se(e - e * a);
            const r = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
            if (r !== v && w(r), ne && r === v && !h) {
              const e = y?.getBoundingClientRect().top,
                a = -1 * (e - b);
              a !== ca && da(a)
            }
          }), 300);
          return window.addEventListener("resize", (() => {
            e(window.innerWidth)
          })), window.addEventListener("scroll", (() => {
            ne && He && e(window.innerWidth)
          })), e(window.innerWidth), () => {
            window.removeEventListener("resize", (() => {
              e(window.innerWidth)
            }))
          }
        }), [K, me, ne, He]), (0, r.useEffect)((() => {
          !1 !== ne && !0 !== h && (He ? bt() : kt(!0))
        }), [te, J, Be, B, de, $e, ee, ca]), (0, r.useEffect)((() => {
          const e = () => {
            if (x.current && fa) {
              const e = x.current.getBoundingClientRect(),
                a = .2 * window.innerHeight;
              window.innerHeight - e.top >= a && pa(!1)
            }
          };
          return e(), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
        }), [x]);
        const vt = (0, r.useCallback)((() => {
          if (null !== x.current && !c) {
            const {
              top: a
            } = x?.current?.getBoundingClientRect() || 0;
            a <= .6 * window.innerHeight && (i({
              event: "page_section_impression",
              element_placement: e?._memoq?.title?.toLowerCase()
            }), d(!0))
          }
        }), [x]);
        (0, r.useEffect)((() => (window.addEventListener("scroll", vt), () => {
          window.removeEventListener("scroll", vt)
        })), [vt, x]), (0, r.useEffect)((() => {
          "next" === Ca ? (it(0, !0), Ea("")) : "prev" === Ca && (nt(0, !0), Ea(""))
        }), [Ca]), (0, r.useEffect)((() => {
          x.current && x.current.addEventListener("mouseleave", (() => {
            Ma && lt()
          }))
        }), [x, Ma]), (0, r.useEffect)((() => (document.body.addEventListener("mouseleave", mt), () => {
          document.body.removeEventListener("mouseleave", mt)
        })), [Ma]), (0, r.useEffect)((() => {
          Ia && setTimeout((() => {
            La(!1), Aa(0)
          }), xa)
        }), [Ia]), (0, r.useEffect)((() => {
          Oa(He ? 20 : 100)
        }), [He]), (0, r.useEffect)((() => {
          ya(ne ? 500 : 100)
        }), [ne]);
        const wt = (0, o.useTinaComponents)(),
          ht = (0, r.useMemo)((() => ({
            ...wt,
            CardWithImageGallery: Ne,
            HTMLElement: F.A,
            ImageWithBadge: $.A,
            Carousel: V.A,
            GroupOfItems: O(),
            UnorderedList: he.A
          })), [wt]),
          _t = (0, r.useMemo)((() => T.map((e => (0, r.createElement)(Ae, {
            ...e,
            refDeck: x,
            key: e?.id ?? e?.sync_hash,
            components: ht,
            prevPage: nt,
            nextPage: it,
            loadCssRawValue: Te,
            selectedItemNumber: Pe,
            carouselTitle: t,
            sharedDraggingDelta: $a,
            setSharedDraggingDelta: Va
          })))), [T, x, ht, nt, it, Pe]);
        return !_t?.length || _t.length <= 0 ? null : (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articleb3206f796ddd61f3b6d1974ea73a4f22",
            "data-modal-mode": ea,
            "aria-hidden": "true"
          }), (0, s.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlee623ea950c02afbb9d28949ca4701ca4",
            "data-modal-mode": ne,
            "data-faded": fa,
            ref: x,
            onTouchStart: ot,
            onTouchMove: ct,
            onTouchEnd: dt,
            onMouseDown: ot,
            onMouseMove: ct,
            onMouseUp: dt,
            tabIndex: -1,
            role: "presentation",
            children: [(0, s.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleb8d0a147dd4f1835ba5495bac02f4c11",
              "aria-hidden": "true"
            }), (0, s.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlea758545d118b90def20e860fe541c26e",
              "data-modal-mode": ne,
              ref: j,
              "data-animating": la,
              children: [(0, s.jsx)("h2", {
                className: "rockstargames-modules-core-newswire-articlebe12152c36226103d53925a82ba66452",
                children: t
              }), (0, s.jsx)(Le, {
                prevPage: nt,
                prevBtnDisabled: E,
                nextPage: it,
                nextBtnDisabled: A,
                selectedItemNumber: Pe,
                itemsData: u,
                closeModalMode: gt,
                inModalMode: ne,
                controlsHidden: L,
                focusTrapControl: Ka,
                setTriggerFocusCard: qa,
                focusTrapDirection: Ya
              }), (0, s.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlec4f4d692febb9861a621596f22e32d93",
                id: "eventsDeck-content",
                role: "region",
                "aria-live": "polite",
                children: `${Pe+1}/${u.length} ${T[Pe]?.tina?.payload?.meta?.title}`
              })]
            }), (0, s.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlef369e1390b3aa251df43bea9c55634f2",
              "data-modal-mode": ne,
              "data-is-dragging": Ma,
              style: {
                transform: `translate3d(${ye+Da}px, 0, 0)`,
                width: `${Ge}px`
              },
              ref: S,
              children: _t
            })]
          })]
        })
      }), K);
      const Me = {
          content: "rockstargames-modules-core-newswire-articlec65ddebc8ee2173143d87e1079f2455a",
          customModalContent: "rockstargames-modules-core-newswire-articlefc96cdfdaeb2ad81b1b409fcb233657e",
          pillBtn: "rockstargames-modules-core-newswire-articleddaada7b150b18de710c9f77384c6537",
          selected: "rockstargames-modules-core-newswire-articleb4fbb4006fc27b899dac5e522ef574e3"
        },
        {
          variants: ze
        } = c.Animations;
      t(10245), t(20837), t(46209), t(60212), t(29625);
      const {
        variants: De
      } = c.Animations;
      var Fe = t(3514);
      var $e = t(75016),
        Ve = t(67288);
      const {
        Gen9CoreCarousel: Be,
        framer: Oe,
        useTinaModuleFetchByIds: Ge,
        withSimpleErrorBoundary: Re
      } = $e, He = {
        Card: ({
          id: e,
          title: a,
          content: t,
          size: i = "md",
          expandedType: n = "short",
          textOverlayProps: c = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: d = [],
          deckProps: l = {},
          to: m = null,
          tina: u = {},
          position: g = 0,
          sectionTitle: f = "",
          theme: p,
          pricingOptions: b,
          cardIds: k,
          platformOptions: v = null
        }) => {
          const w = (0, o.useTinaPayload)(),
            h = u?.payload?.meta?.cdn ?? w?.meta?.prod ?? !1,
            [_, x] = (0, r.useState)(l?.size ?? i),
            [y, N] = (0, r.useState)(0),
            j = void 0 !== b?.hasPricingOptions || void 0 !== v?.hasPlatformOptions;
          return (0, r.useEffect)((() => {
            x(l?.size ?? i)
          }), [l?.size, i]), (0, s.jsx)(X, {
            id: e,
            title: a,
            size: _,
            expandedType: n,
            images: d,
            deckProps: l,
            prod: h,
            payload: {
              content: t,
              meta: {}
            },
            variants: ze.plainCard,
            textOverlayProps: c,
            modalProps: {
              className: Me.customModal,
              contentClassName: Me.customModalContent
            },
            expandedCardContents: (0, s.jsx)(ue, {
              images: d,
              prod: h,
              expandedView: !0
            }),
            position: g,
            sectionTitle: f,
            theme: p,
            cardIds: k,
            pricingOptions: b,
            platformOptions: v,
            pricingContainerHeight: y,
            isProductCard: j,
            children: (0, s.jsx)(se, {
              expandedType: n,
              to: m,
              sectionTitle: f,
              id: e,
              cardTitle: a,
              position: g,
              children: (0, s.jsx)("div", {
                className: Me.content,
                "data-product": j,
                children: (0, s.jsx)(I, {
                  title: a,
                  size: _,
                  textOverlayProps: c,
                  pricingOptions: b,
                  platformOptions: v,
                  setPricingContainerHeight: N,
                  children: (0, s.jsx)(ue, {
                    images: d,
                    prod: h
                  })
                })
              })
            })
          })
        },
        CardWithImageGallery: Ne,
        TextCard: ({
          title: e,
          content: a,
          size: t = "md",
          badgeText: r
        }) => {
          const i = {
            ...(0, o.useTinaComponents)(),
            HTMLElement: F.A,
            UnorderedList: he.A,
            ListItem: Fe.A
          };
          return (0, s.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlecfa8d259e6ae05cd5f97d50306be5ffe",
            "data-size": t,
            children: (0, s.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlea4a39548fac12526e8721ffa8813e66a",
              children: [r && (0, s.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlecf77e65e2af63ee114825607dde3d11e",
                children: r
              }), (0, s.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articlef903ce7e605696e1bc18c4bc22274a6e",
                children: [e && (0, s.jsx)("h3", {
                  children: e
                }), (0, s.jsx)(o.TinaParser, {
                  components: i,
                  tina: {
                    payload: {
                      content: a
                    }
                  }
                })]
              })]
            })
          })
        },
        ...$e
      }, Ue = Oe.withFadeIn(Re((({
        cards: e = [],
        size: a,
        name: t,
        title: i,
        description: c,
        disclaimer: d,
        customSlidesPerView: l = null,
        theme: m = "none",
        cardSizeBreakpoints: u = {},
        customAspectRatio: g = "3/1",
        titleBadge: f = null,
        id: p = ""
      }) => {
        const b = (0, r.useRef)(null),
          k = n().map(e, "id"),
          v = Ge({
            ids: k
          }),
          [w, h] = (0, r.useState)(l),
          [_] = (0, G.useSearchParams)(),
          [x, y] = (0, r.useState)(!1);
        (0, r.useEffect)((() => {
          if ("fob" === a) {
            const e = _.get("section");
            if (e && "games" === e && !x && (y(!0), b.current)) {
              const e = 100;
              window.scrollTo(0, b.current.offsetTop - e)
            }
          }
        }), []), (0, r.useEffect)((() => {
          if (!b.current) return;
          const e = () => {
            const e = l || window.getComputedStyle(b.current).getPropertyValue("--slides-per-view");
            h(e)
          };
          return window.addEventListener("resize", e), e(), () => {
            window.removeEventListener("resize", e)
          }
        }));
        const N = (0, r.useMemo)((() => {
          let e = 0;
          if (!v) return null;
          let t = "blank",
            r = !1;
          return v.forEach((e => {
            "cover-card" === e?.tina?.payload?.meta?.type && (t = e?.id, void 0 !== e?.tina?.payload?.content[0]?.excludeFromModal && (r = e.tina.payload.content[0].excludeFromModal))
          })), v.reduce(((c, d) => {
            if (d) {
              const {
                id: l,
                tina: u
              } = d, g = n().clone(u);
              n().set(g, "payload.meta.id", l);
              const f = k.filter((e => e !== t || e === t && !r));
              c.push((0, s.jsx)(o.TinaParser, {
                components: He,
                tina: g,
                componentProps: {
                  deckProps: {
                    size: a
                  },
                  tina: g,
                  id: l,
                  position: e,
                  sectionTitle: i,
                  theme: m,
                  cardIds: f
                }
              }, l)), e += 1
            }
            return c
          }), [])
        }), [v, a]);
        return (0, s.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlecf8eaaa96e41e0c9b5a5a1745ded9986",
          "data-theme": m,
          ref: b,
          id: p,
          children: [(0, s.jsx)(Be, {
            description: c,
            size: a,
            cardSizeBreakpoints: u,
            slideChildren: N,
            title: i,
            name: t,
            customSlidesPerView: w,
            customAspectRatio: g,
            titleBadge: f,
            theme: m
          }), d && (0, s.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articled6d0f9d842469dec608825829148dff6",
            children: (0, s.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articlee22c0580e1e1d2471b4ca2e60e6b900f",
              children: (0, s.jsx)(Ve.A, {
                html: d
              })
            })
          })]
        })
      })))
    },
    3818: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/774943ec47ce732040f48df3943a0a7c.jpg"
    },
    3933: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/116555df6799e584310484375c97a43f.jpg"
    },
    3950: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    4595: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var s = t(42295);
      const r = {
          responsiveFlexBox: "rockstargames-modules-core-newswire-articlefad65f02dd0ee292c36ec9d50b9c249a",
          responsiveFlexItem: "rockstargames-modules-core-newswire-articlef5215494f66727858110c9c73e2d882a",
          responsiveImage: "rockstargames-modules-core-newswire-articled437a700a9b768227a114e70db78af03"
        },
        i = ({
          children: e,
          className: a,
          style: t
        }) => (0, s.jsx)("div", {
          className: [r.responsiveFlexBox, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: e
        })
    },
    6312: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    7509: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/15b671d990b1f3f941c6359b3235abf3.jpg"
    },
    8054: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    8194: (e, a, t) => {
      var s = {
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
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 8194
    },
    8494: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34231941013a609948485830c84c072.jpg"
    },
    8674: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b31c79d361cfd92e1a405dbbf4890bd.svg"
    },
    8711: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe262661c6667d97f441e045067f4a0f.svg"
    },
    9020: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/204116b24cd9e9ab4e71af21b3a96179.svg"
    },
    9188: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4da522682784ded3799c5a6f9f8c213a.svg"
    },
    9815: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    10111: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    10245: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => _
      });
      var s = t(42295),
        r = t(62229),
        i = t(9623),
        n = t(2918),
        o = t(95966),
        c = t(80391),
        d = t(28985),
        l = t(47240),
        m = t(32903),
        u = t(81715),
        g = t(49429),
        f = t(11008);
      const p = {
          ps: c,
          ps3: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg",
          ps4: d,
          ps5: l,
          switch: f,
          nintendoswitch: f,
          xbox: m,
          xboxone: g,
          xboxseriesxs: u,
          xbox360: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c5cee7464423693de19149a4554b3c2.svg",
          pc: t(85719),
          pcalt: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2921f91628eca684eaf0f91d8b6a5a76.svg",
          play: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38a6e85fa4a378c5620efa9fde8ff223.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4e52b102306a186549cfd712b1c8f8.svg",
          questionMark: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e6833fa9baf4a5382bdd84b0b7d2c03f.svg",
          default: ""
        },
        b = e => p[e] || null,
        k = {
          applestore: "rockstargames-modules-core-newswire-articlee97115f479fca9697b140bfbfa6534f2",
          border: "rockstargames-modules-core-newswire-articleaab360f8b5cf6965c56e5f86813b8620",
          borderless: "rockstargames-modules-core-newswire-articlecad0684072c4a89cb09b9f79ddda6f38",
          btnContent: "rockstargames-modules-core-newswire-articled4df564f6143ae5909e2bbc95b4a7ebc",
          btnIcon: "rockstargames-modules-core-newswire-articlef7afeacf3abab7856caca9ea1fad81ad",
          "clr-button": "rockstargames-modules-core-newswire-articled4ec60c769b079ac712ea0264480d480",
          cta: "rockstargames-modules-core-newswire-articlea8f295907e9b244767bb48cfc469b480",
          disabled: "rockstargames-modules-core-newswire-articled7a212b6e993966a3773c335359586d5",
          googleplay: "rockstargames-modules-core-newswire-articlead074b742a5ce23c053880b289c2bbe6",
          icon: "rockstargames-modules-core-newswire-articlec394fea7e071f1213a5d44f5b569bd1a",
          "icon-left": "rockstargames-modules-core-newswire-articlec73b838b4f69aff2241b814ad1547c48",
          "icon-right": "rockstargames-modules-core-newswire-articlef0de4560b8a1190f63a65ad1e9fd4e03",
          label: "rockstargames-modules-core-newswire-articled75a0e2af2bf8502f8647015e04e10e1",
          lgMax: "rockstargames-modules-core-newswire-articledf956d5fc70d2129beb1406170402148",
          lgMin: "rockstargames-modules-core-newswire-articlee974b6c740bfac2959d5170bd2d9f3ca",
          nintendoswitch: "rockstargames-modules-core-newswire-articlee646f30d1a0c9990c5178e67be93f75e",
          pc: "rockstargames-modules-core-newswire-articlea1b9c83f518722f01ecb3ece3681c117",
          pillBtn: "rockstargames-modules-core-newswire-articlef39c827be0d560f2cc376d83e3988fbc",
          platformIcon: "rockstargames-modules-core-newswire-articlef25581474e97714bc974f3ab51136511",
          primary: "rockstargames-modules-core-newswire-articlea857266233e524e3bb96d327a2095642",
          ps: "rockstargames-modules-core-newswire-articled439373e74d36689bc159e9a585db184",
          ps4: "rockstargames-modules-core-newswire-articlee49e2b4d44ce7bab7966fbd9fdfb0760",
          ps5: "rockstargames-modules-core-newswire-articlebaa2b83edce86fda2d9dffb2682092f7",
          selected: "rockstargames-modules-core-newswire-articlea63fd127fc0aab231f6740340658d647",
          smMax: "rockstargames-modules-core-newswire-articlefce12fc6343fbf09a5bb418bb8107f0b",
          xbox: "rockstargames-modules-core-newswire-articlecf162a09fdf0c180f3f5091077493d98",
          xboxone: "rockstargames-modules-core-newswire-articlee34e2c7fd3dd88f7e7d46f495c15a98d",
          xboxseriesxs: "rockstargames-modules-core-newswire-articlef5b0bc5e5a291a3ecab7447d33a76e55"
        };
      var v = t(4572),
        w = t.n(v);
      const h = ({
          platform: e = "",
          altText: a
        }) => {
          const t = e ? b(e) : null,
            r = t ? (0, s.jsx)("img", {
              className: k.platformIcon,
              src: t,
              alt: a
            }) : null;
          return (0, s.jsx)("span", {
            className: [k.btnContent, k.platformButton].join(" "),
            children: r
          })
        },
        _ = ({
          children: e,
          href: a,
          style: t,
          content: c,
          variant: d = null,
          size: l = "medium",
          icon: m,
          iconPosition: u = "none",
          iconStyle: g,
          badge: f,
          badgeStyle: p,
          platformItem: v,
          platformStyle: _ = "border",
          gtm: x = {},
          disabled: y,
          reloadDocument: N = !1,
          className: j,
          role: S = ""
        }) => {
          const {
            track: T
          } = (0, n.useGtmTrack)(), C = (0, o.useDataLayer)(), E = c ?? e, P = (0, o.findPlatform)(v)?.friendlyName, A = (0, r.useMemo)((() => {
            const e = window.location.hostname;
            let t;
            try {
              t = new URL(a)?.hostname
            } catch (a) {
              t = e
            }
            return e === t
          }), [a]), I = (0, r.useCallback)((() => {
            y || T({
              event: "cta_other",
              text: c?.toLowerCase() ?? e ?? void 0,
              ...C,
              ...x,
              link_url: a ?? void 0
            })
          }), [x, a, C]), L = () => m ? (0, s.jsx)("span", {
            className: [k.icon, `icon-${u}`].join(" "),
            style: g,
            children: (0, s.jsx)("img", {
              className: k.btnIcon,
              src: b(m) || "",
              alt: `${m} icon`
            })
          }) : null;
          return (0, s.jsx)(i.Link, {
            to: a,
            target: A ? "_self" : "_blank",
            className: w()(k.cta, "platform" === d && v ? k[v] : "", _ && k[_], y ? k.disabled : "", j),
            style: t,
            "data-variant": d,
            "data-size": l,
            onClick: I,
            "aria-label": E,
            reloadDocument: N,
            role: S,
            children: "platform" === d && v ? (0, s.jsx)(h, {
              platform: v,
              altText: P || E
            }) : (0, s.jsxs)("div", {
              className: k.btnContent,
              children: ["left" === u && L(), (0, s.jsx)("span", {
                className: k.label,
                children: E
              }), "right" === u && L(), f ? (0, s.jsx)("span", {
                className: k.badge,
                style: p,
                children: f
              }) : null]
            })
          })
        }
    },
    10419: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    10869: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c82125e0b20342dba2008b0dcc6d55f6.jpg"
    },
    11008: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    11015: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "ids"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String"
                  }
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
                value: "sync"
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
                value: "cache"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tinaModulesInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "ids"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "ids"
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
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "cache"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "cache"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  alias: {
                    kind: "Name",
                    value: "id"
                  },
                  name: {
                    kind: "Name",
                    value: "id_hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_doc"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "type"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "sync_hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "to"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "visible"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "children"
                  },
                  arguments: [],
                  directives: [],
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
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "to"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "tina"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "payload"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "variables"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tina"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "payload"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "variables"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "keys"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "_translations"
                          },
                          arguments: [],
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
                                  value: "sync"
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
                                value: "locale"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 742
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesInfo = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "TinaModulesInfo")
    },
    12602: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4b0f40e745f4347c822594da56a119.jpg"
    },
    13095: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e7d916fcce2bbe9b6419f914f290597.jpg"
    },
    13897: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(62229),
        r = t(2918);
      const i = (0, s.forwardRef)(((e, a) => {
        const {
          threshold: t,
          callback: i,
          children: n,
          requireUser: o
        } = e, {
          track: c
        } = (0, r.useGtmTrack)(o), [d, l] = (0, s.useState)(a?.current);
        return (0, s.useEffect)((() => {
          a?.current && l(a.current)
        }), [a]), ((e, a, t) => {
          const [r, i] = (0, s.useState)({
            scrollDepths: e,
            scrollY: 0,
            scrollLength: 0
          }), {
            scrollDepths: n,
            scrollY: o,
            scrollLength: c
          } = r;
          (0, s.useEffect)((() => {
            "undefined" != typeof window && 0 !== window.pageYOffset && i((e => ({
              ...e,
              scrollY: window.pageYOffset
            })))
          }), []), (0, s.useEffect)((() => {
            i({
              scrollDepths: e,
              scrollY: 0,
              scrollLength: 0
            })
          }), [window.location.pathname]);
          const d = (0, s.useCallback)((() => {
            const e = document.documentElement,
              s = document.body,
              o = t?.scrollTop || e.scrollTop || s.scrollTop,
              c = t?.scrollHeight || e.scrollHeight || s.scrollHeight,
              {
                clientHeight: l
              } = e,
              m = o / (c - l) * 100;
            if (n) {
              const e = Math.min(...n, c);
              if (m >= e) {
                const s = n.filter((a => a !== e));
                0 === s.length && (t ?? window).removeEventListener("scroll", d), a && a({
                  scrollY: e,
                  scrollPercent: m,
                  scrollLength: c * (.01 * e),
                  remainingDepths: s
                }), i({
                  scrollY: e,
                  scrollDepths: s,
                  scrollLength: c * (.01 * e)
                })
              }
            } else i({
              ...r,
              scrollY: m
            })
          }), [n, t, a]);
          (0, s.useEffect)((() => {
            if ("undefined" == typeof window) return;
            const e = t ?? window;
            return e.addEventListener("scroll", d), () => e.removeEventListener("scroll", d)
          }), [d])
        })(t, (({
          scrollY: e,
          scrollLength: a
        }) => {
          c({
            event: "page_scroll",
            scroll_depth: e,
            page_length: `${a}px`
          }), "function" == typeof i && i(e)
        }), d), n
      }));
      i.displayName = "ScrollTracker";
      const n = i
    },
    13989: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => m
      });
      var s = t(42295),
        r = t(62229),
        i = t(9623),
        n = t(95966),
        o = t(2918),
        c = t(14200),
        d = t(23395);
      const l = {
          info: "rockstargames-modules-core-newswire-articleea1c51ae745531c2aeabbe3fcf603842",
          newswireBlock: "rockstargames-modules-core-newswire-articleb394b56c31488c36155ca82090c66e6f",
          newswireBlockNoSpecialOrder: "rockstargames-modules-core-newswire-articlec06d09374e8b5cc41f1732c691ee8e25",
          preview: "rockstargames-modules-core-newswire-articleca2b587572d3c9a74cfc2fedf400ce8c",
          previewMobile: "rockstargames-modules-core-newswire-articleb3d4a8cfcc371ae39ce6220d009c5954",
          startAnimation: "rockstargames-modules-core-newswire-articlea56af3c95449fe8452485dfb6c89fc29",
          title: "rockstargames-modules-core-newswire-articlef1dfe59c3d981dbe132559620885ecea",
          top: "rockstargames-modules-core-newswire-articleeee9c5d3b714a61ac265369800a6d4e0"
        },
        m = ({
          section: e = "",
          index: a,
          post: t,
          noSpecialOrder: m = !1,
          focused: u
        }) => {
          const {
            track: g
          } = (0, o.useGtmTrack)(), [f] = (0, i.useSearchParams)(), p = t.preview_images_parsed.newswire_block, b = {
            default: 0 !== a || m ? p.square || p.d16x9 || p._fallback : p.d16x9 || p.square || p._fallback,
            mobile: p.square || p._fallback
          }, [k, v] = (0, n.usePreloadImg)(b.default), w = {
            default: {
              backgroundImage: `url(${b.default})`
            },
            mobile: {
              backgroundImage: `url(${b.mobile})`
            }
          }, h = (0, r.useCallback)((() => {
            g({
              event: "card_click",
              card_id: t.id,
              card_name: t.name_slug.replace(/-/g, " "),
              link_url: t.url,
              position: a,
              element_placement: e?.toLowerCase()
            })
          }), [t]);
          return (0, s.jsx)(c.A, {
            to: t.url,
            className: [l.newswireBlock, m ? l.newswireBlockNoSpecialOrder : "", null !== k ? l.startAnimation : ""].join(" "),
            focused: u,
            onClick: h,
            children: (0, s.jsxs)(s.Fragment, {
              children: [0 !== a || f.get("tag_id") ? (0, s.jsx)("div", {
                className: l.preview,
                style: w.default
              }) : (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)("div", {
                  className: l.previewMobile,
                  style: w.mobile
                }), (0, s.jsx)("div", {
                  className: l.preview,
                  style: w.default
                })]
              }), (0, s.jsxs)("div", {
                className: l.info,
                children: [(0, s.jsxs)("div", {
                  className: l.top,
                  children: [t.primary_tags.length ? (0, s.jsx)(d.A, {
                    title: t.primary_tags[t.primary_tags.length > 1 && 722 === t.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, s.jsx)("time", {
                    dateTime: t.created,
                    children: t.created_formatted
                  })]
                }), (0, s.jsx)("h5", {
                  className: l.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            })
          })
        }
    },
    14724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbcbd2a2bb65ddad76e831c91c17b421.jpg"
    },
    14825: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14448aca4ceaab8680323ce19c963d68.jpg"
    },
    15386: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var s = t(42295);
      const r = {
          responsiveGridBox: "rockstargames-modules-core-newswire-articlee9ae27279428e611bbce59656759ed50",
          responsiveGridItem: "rockstargames-modules-core-newswire-articleb0d14e4a5e63a903117e93a392cbfb53"
        },
        i = ({
          children: e,
          cols: a,
          className: t,
          rows: i,
          style: n
        }) => {
          const o = n ? {
            ...n
          } : {};
          return void 0 !== a && (o.gridTemplateColumns = `repeat(${a}, 1fr)`), void 0 !== i && (o.gridTemplateRows = `repeat(${i}, 1fr)`), (0, s.jsx)("div", {
            className: [r.responsiveGridBox, void 0 !== t ? t : ""].join(" "),
            style: o,
            children: e
          })
        }
    },
    15821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    16783: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(42295);
      const r = ({
        text: e,
        style: a
      }) => (0, s.jsx)("div", {
        className: "rockstargames-modules-core-newswire-articlec08a001134624b9ceb275eae413bfd3d",
        style: a,
        children: e
      })
    },
    17065: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    18177: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    18518: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0281770395dc77e41c1f40559a3d5989.jpg"
    },
    18712: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    19552: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61a79de8dea0228576a18068e4f2660a.jpg"
    },
    19612: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    20837: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(42295),
        r = t(34725),
        i = t(95966),
        n = t(4572),
        o = t.n(n);
      const c = ({
        children: e,
        context: a = null,
        game: t,
        image: n = {},
        style: c = {},
        template: d = null,
        theme: l = null,
        reversedOnMobile: m = !1,
        className: u = "",
        id: g = null
      }) => {
        const f = (0, r.S1)(n ?? {}),
          p = {
            ...c
          };
        if (f?.src?.desktop) {
          const e = (n?.style && n?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
            a = (n?.style && n?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
            t = `var(--grid-background-position, center)/${e??"cover"}`;
          if (p.background = `url(${f?.src?.desktop}) ${a} ${t}`, n?.style && n?.style["--linear-gradient"]) p.background = `linear-gradient(${n?.style["--linear-gradient"]}), url(${f?.src?.desktop}) ${a} ${t}`;
          else if (n?.style && n?.style["--gradient-height"]) {
            const e = n?.style["--gradient-height"] || "3",
              s = n?.style["--gradient-start-color"] || "var(--background-color, transparent)",
              r = n?.style["--gradient-end-color"] || "var(--background-color, transparent)";
            p.background = `linear-gradient(180deg, ${s}, transparent ${e}%, transparent ${100-e}%, ${r}), url(${f?.src?.desktop}) ${a} ${t}`
          }
        }
        return (0, s.jsx)("div", {
          id: g,
          className: o()("rockstargames-modules-core-newswire-articleda87ead760b989fbe90a0b89c60b0653", m ? "rockstargames-modules-core-newswire-articledfbda195073626bc6a7690dc73fba873" : "", u),
          "data-game": "community" === d ? null : t,
          style: (0, i.safeStyles)(p),
          "data-context": a,
          "data-template": d,
          "data-theme": l,
          children: e
        })
      }
    },
    21022: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    21228: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    22772: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    22844: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a1657ff0ab4e3d45469556ba2f899c3.jpg"
    },
    23395: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(42295),
        r = t(14200);
      const i = {
          tag: "rockstargames-modules-core-newswire-articleb660bb706132d84852c02df01cc6ed5a"
        },
        n = ({
          className: e,
          href: a,
          title: t,
          style: n
        }) => {
          const o = (0, s.jsxs)("div", {
            style: n,
            className: [i.tag, e].join(" "),
            children: [(0, s.jsx)("i", {}), t]
          });
          return void 0 !== a ? (0, s.jsx)(r.A, {
            to: a,
            children: o
          }) : o
        }
    },
    23587: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b95ab415fdd8bec89099d433d23e3c7.jpg"
    },
    23781: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edf01daa4f0392081705c17a74d8a146.svg"
    },
    24256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    24611: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f2fc4de3decfa0ac007f6cbd91658a9.svg"
    },
    24769: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => f
      });
      var s = t(42295),
        r = t(62229),
        i = t(24162),
        n = t(11206),
        o = t(4572),
        c = t.n(o);
      const d = {
        active: "rockstargames-modules-core-newswire-articlefdc2ec652cbb7469f602e73cd10ef997",
        deprecatedCarousel: "rockstargames-modules-core-newswire-articlea531264d5417d2198d4e14aa72335af1",
        dotsSlide: "rockstargames-modules-core-newswire-articleb8fd11776fba32f9663bbb6292a5c901",
        hideLarge: "rockstargames-modules-core-newswire-articlea6c9173aa5a8fe31a062251352a9d711",
        hideMobile: "rockstargames-modules-core-newswire-articlef3445a74a067bd92ff94b521cb0bdc07",
        imageAreaBg: "rockstargames-modules-core-newswire-articledcb2b41007683141579697bb4a8658ba",
        img: "rockstargames-modules-core-newswire-articled8e66128b4fef1ea164350cd535e2d68",
        infinite_false: "rockstargames-modules-core-newswire-articleb85758ee99a52896b94130d002e821c7",
        panorama: "rockstargames-modules-core-newswire-articleff63f8addff8d036ca0b65fa495e1653",
        perico: "rockstargames-modules-core-newswire-articleaa50a9164fd0296b1196d441233cc348",
        renderedWithChildren: "rockstargames-modules-core-newswire-articlead7696edafa3086969e7aaece4f09b4f",
        siblings: "rockstargames-modules-core-newswire-articlef4c50c0daadf81cd292587fcfea1339d",
        "swiper-horizontal": "rockstargames-modules-core-newswire-articleb823bbff86d38da8cb611a7c3367d8fe",
        "swiper-preloader-spin": "rockstargames-modules-core-newswire-articlec39b97f81c73d75dc4e013fde14aff18",
        "swiper-scrollbar-disabled": "rockstargames-modules-core-newswire-articleee2324d6dd93a95776b1e2d14d0f529d",
        "swiper-vertical": "rockstargames-modules-core-newswire-articled29252354bbbfe413678daff5223169d",
        track: "rockstargames-modules-core-newswire-articlec7c21df4f7f83a73f79dd7913aa87832"
      };
      var l = t(26708),
        m = t(10632);
      const u = ({
          item: e
        }) => (0, s.jsxs)("div", {
          children: [(0, s.jsx)(m.A, {
            image: e?.image,
            badge: e?.badge ?? e?.image?.badge,
            badgeType: "badge3",
            role: e?.role ?? e?.image?.role,
            splitter: e?.splitter ?? e?.image?.splitter,
            type: e?.type,
            ariaLabel: e?.image?.ariaLabel ?? e.description,
            style: e?.style,
            className: c()(d.img, e?.className)
          }), (e?.title || e?.description) && (0, s.jsx)(l.A, {
            item: e
          })]
        }),
        g = ({
          current: e,
          total: a
        }) => (0, s.jsx)("div", {
          className: "swiper-scrollbar",
          style: {
            "--current-slide": e,
            "--total-slides": a
          },
          children: (0, s.jsx)("div", {
            className: "swiper-scrollbar-drag"
          })
        }),
        f = ({
          children: e,
          items: a = [],
          style: t = {},
          noInfiniteScroll: o = !1,
          className: m = "",
          renderTemplate: f = "standard",
          text: p,
          customSpaceBetween: b = null,
          centerSlides: k = !0,
          centeredSlidesBounds: v = !1
        }) => {
          const [w, h] = (0, r.useState)(0), _ = (0, r.useMemo)((() => e && Array.isArray(e) ? e.map((() => (0, n.A)())) : null), [e]);
          if (!(a && 0 !== a?.length || e)) return null;
          const x = {
            0: {
              spaceBetween: b ?? 16
            },
            1024: {
              spaceBetween: b ?? 18
            },
            1920: {
              spaceBetween: b ?? 20
            },
            2560: {
              spaceBetween: b ?? 22
            }
          };
          return (0, s.jsxs)("div", {
            className: c()(d.deprecatedCarousel, d[f], d[`infinite_${!o}`], e ? d.renderedWithChildren : "", m),
            style: t,
            children: [(0, s.jsxs)(i.RC, {
              loop: !o,
              grabCursor: !0,
              centeredSlides: k,
              centerInsufficientSlides: k,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: x,
              onUpdate: () => h(0),
              onActiveIndexChange: e => h(e?.realIndex ?? 0),
              centeredSlidesBounds: v,
              children: [(0, s.jsx)("div", {
                className: d.trackWrapper,
                children: (0, s.jsxs)("div", {
                  className: d.track,
                  children: [a?.map((e => (0, s.jsx)(i.qr, {
                    children: (0, s.jsx)(u, {
                      item: e
                    })
                  }, e.key))), e && e.map(((e, a) => e && (0, s.jsx)(i.qr, {
                    children: e
                  }, _ && _[a])))]
                })
              }), (0, s.jsx)(g, {
                current: w,
                total: e ? e.length : a.length
              })]
            }), (p?.title || p?.description) && (0, s.jsx)(l.A, {
              item: p
            })]
          })
        }
    },
    24808: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8977d6b170f295068d78c5bbb7b6f02d.jpg"
    },
    24865: (e, a, t) => {
      var s = {
        "./VI/mobile.jpg": 92244
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 24865
    },
    26151: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    26708: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => m
      });
      var s = t(42295),
        r = t(4572),
        i = t.n(r),
        n = t(4407),
        o = t(93935),
        c = t(79704);
      const d = "rockstargames-modules-core-newswire-articleacd27eff2209196752622710f7b27558",
        l = ({
          to: e,
          children: a
        }) => e ? (0, s.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: a
        }) : a,
        m = ({
          item: e,
          className: a = ""
        }) => (0, s.jsxs)("div", {
          className: i()("rockstargames-modules-core-newswire-articlef8bc9589974046cdac4a2264be12d2df", a),
          children: [e.title && (0, s.jsx)(l, {
            to: e?.href ?? e?.to,
            children: (0, s.jsx)("h3", {
              children: e.title
            })
          }), Array.isArray(e?.description?.content) ? e.description.content?.map(((e, a) => e?.unorderedList ? (0, s.jsx)(o.A, {
            columns: e.unorderedList.columns ?? null,
            style: {
              "--unordered-list-padding": "var(--grid-gap-static-sm)",
              "--unordered-list-margin-bottom": ".5rem"
            },
            noImg: !0,
            list: e.unorderedList.list
          }, a) : e?.image ? (0, s.jsx)(n.A, {
            image: e.image,
            className: e?.className
          }, a) : e?.separator ? (0, s.jsx)("div", {
            style: {
              margin: `${e.separator.spacing} 0`
            },
            children: (0, s.jsx)(c.A, {})
          }, a) : (0, s.jsx)("p", {
            children: (0, s.jsx)("span", {
              className: d,
              dangerouslySetInnerHTML: {
                __html: e
              }
            })
          }, a))) : (0, s.jsx)("span", {
            className: d,
            dangerouslySetInnerHTML: {
              __html: e.description
            }
          })]
        })
    },
    26788: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    27064: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg"
    },
    27351: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    28005: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/404be4f04081372768bb660a6c1991ba.jpg"
    },
    28414: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    28674: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        NewswireArticle: () => _,
        componentsForTinaParser: () => x
      });
      var s = t(75016),
        r = t(64064),
        i = t.n(r),
        n = t(15310),
        o = t.n(n),
        c = t(42602),
        d = t.n(c),
        l = t(31879),
        m = t.n(l),
        u = t(3436),
        g = t(56100),
        f = t(42295),
        p = t(62229),
        b = t(51434),
        k = t(95966),
        v = t(76808),
        w = t(52470);
      const h = ({
          article: e,
          relatedBlock: a
        }) => {
          switch (e.jsx) {
            case 0:
              return (0, f.jsx)(v.Jsx0, {
                article: e,
                children: a
              });
            case 1:
              return (0, f.jsx)(v.Jsx1, {
                article: e,
                children: a
              });
            default:
              return (0, f.jsx)(v.Jsx2, {
                payload: e.tina.payload,
                variablesKeys: e.tina.variables.keys,
                children: a
              })
          }
        },
        _ = ({
          idHash: e
        }) => {
          const {
            data: a,
            loading: t
          } = (0, k.useQuery)(w.NewswirePost, {
            variables: {
              id_hash: e
            },
            setTitleDataPath: "post.title",
            autoSetLoading: !0
          }), s = a?.post ?? null, r = a?.related?.results ?? null;
          if ((0, p.useEffect)((() => {
              s && (window?.instgrm?.Embeds?.process?.(), window?.twttr?.widgets?.load?.())
            }), [s]), !s || t) return null;
          const i = r && s.show_related ? (0, f.jsx)(b.A, {
            posts: r
          }) : "";
          return (0, f.jsx)(k.newswirePost.Provider, {
            article: s,
            children: (0, f.jsx)(h, {
              article: s,
              relatedBlock: i
            })
          })
        },
        x = {
          ...s,
          ...g,
          ClrCard: u.y3,
          ClrCollapsedCard: u.h7,
          Gif: i(),
          GroupOfItems: o(),
          RockstarVideoPlayer: m(),
          SwiperCarousel: d()
        }
    },
    28985: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    29315: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(42295),
        r = t(62229);
      class i extends r.Component {
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
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, s.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articled5c408a8b618087ef4bb452f96526b2b",
            children: [(0, s.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, s.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const n = (e, a = null, t = !1) => function(r) {
        return (0, s.jsx)(i, {
          header: a,
          hidden: t,
          children: (0, s.jsx)(e, {
            ...r
          })
        })
      }
    },
    29362: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    29625: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(42295),
        r = t(14200);
      const i = {
          button: "rockstargames-modules-core-newswire-articlebc25ec64410308d56e4dc097e81fb129",
          secondary: "rockstargames-modules-core-newswire-articlea3e6439dcaa4870840298d683db4831c"
        },
        n = ({
          className: e = "",
          children: a,
          context: t = "",
          to: n,
          onClick: o,
          target: c = "_self",
          ...d
        }) => {
          const l = [i.button, i[t], e].join(" ");
          return n ? (0, s.jsx)(r.A, {
            ...d,
            to: n,
            className: l,
            onClick: o,
            target: c,
            children: a
          }) : (0, s.jsx)("button", {
            ...d,
            type: "button",
            className: l,
            onClick: o,
            children: a
          })
        }
    },
    29654: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f002a20c79ea2264ca52456194ef5b48.svg"
    },
    31248: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg"
    },
    32323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    32830: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14312e604f0637a2afd376dd571345d9.jpg"
    },
    32903: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d6d2cb861c79506282c6d6cbf1170f81.svg"
    },
    33143: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    34100: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(42295),
        r = t(62229),
        i = t(81788),
        n = t(14200),
        o = t(67050);
      const c = (0, i.defineMessages)({
          wasted_error_404_new: {
            id: "wasted_error_404_new",
            description: "Message prompting user that page doesn't exist or another error occurred",
            defaultMessage: "The page you're looking for doesn't exist or another error occurred."
          },
          wasted_home: {
            id: "wasted_home",
            description: "Message prompting user that the home page doesn't exist or another error occurred",
            defaultMessage: "Home"
          }
        }),
        d = ({
          error: e,
          domain: a = ""
        }) => {
          console.error({
            error: e
          });
          const {
            formatMessage: t
          } = (0, i.useIntl)();
          let d = e?.message ?? t(c.wasted_error_404_new);
          d = t(c.wasted_error_404_new);
          const l = e?.code ?? 398,
            m = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            m && m?.current && m.current.focus()
          }), [m]), (0, s.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articled0635ab9b06be2bdd2967e49648afe4e",
            children: [(0, s.jsx)("h3", {
              tabIndex: -1,
              ref: m,
              children: `${d} (${l})`
            }), (0, s.jsx)(n.A, {
              to: "/",
              reloadDocument: !1,
              children: t(c.wasted_home)
            }), "clr" !== a && (0, s.jsx)(o.A, {})]
          })
        }
    },
    36672: (e, a, t) => {
      var s = {
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
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 36672
    },
    36855: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    39294: (e, a, t) => {
      var s = {
        "./GTAOnline.jpg": 10111,
        "./GTATrilogy.jpg": 84752,
        "./IV.jpg": 73483,
        "./V.jpg": 98754,
        "./VI.jpg": 1157,
        "./VI/desktop.jpg": 67496,
        "./VI/mobile.jpg": 92244,
        "./agent.jpg": 78323,
        "./beaterator.jpg": 23587,
        "./bully-scholarshipedition.jpg": 67181,
        "./bully.jpg": 85332,
        "./chinatownwars.jpg": 44596,
        "./episodesfromlibertycity.jpg": 18518,
        "./grandtheftauto-gba.jpg": 7509,
        "./grandtheftauto3.jpg": 42787,
        "./gta-online.jpg": 26788,
        "./gta-v.jpg": 33143,
        "./gta.jpg": 8494,
        "./gta2.jpg": 59942,
        "./gtacomplete.jpg": 64923,
        "./gtalondon.jpg": 85256,
        "./italianjob.jpg": 42043,
        "./lanoire-vr-case-files.jpg": 52014,
        "./lanoire.jpg": 59414,
        "./lanoire_2.jpg": 52461,
        "./libertycitystories.jpg": 89273,
        "./manhunt.jpg": 95903,
        "./manhunt2.jpg": 3933,
        "./maxpayne.jpg": 77321,
        "./maxpayne2.jpg": 13095,
        "./maxpayne3.jpg": 57258,
        "./midnightclub.jpg": 12602,
        "./midnightclub2.jpg": 3818,
        "./midnightclub3.jpg": 59655,
        "./midnightclubLA-complete.jpg": 63839,
        "./midnightclubLA.jpg": 79795,
        "./oni.jpg": 24808,
        "./rdr-goty.jpg": 19552,
        "./reddeadonline.jpg": 73534,
        "./reddeadredemption.jpg": 27064,
        "./reddeadredemption2.jpg": 31248,
        "./reddeadrevolver.jpg": 79114,
        "./rockstar-games-collection-edition-1.jpg": 93573,
        "./sanandreas.jpg": 14724,
        "./skateanddestroy.jpg": 90377,
        "./smugglersrun.jpg": 73564,
        "./smugglersrun2.jpg": 22844,
        "./smugglersrunwarzones.jpg": 84715,
        "./stateofemergency.jpg": 28005,
        "./tabletennis.jpg": 84141,
        "./theballadofgaytony.jpg": 14825,
        "./thelostanddamned.jpg": 52591,
        "./thewarriors.jpg": 96148,
        "./undeadnightmare.jpg": 32830,
        "./vicecity.jpg": 91480,
        "./vicecitystories.jpg": 10869,
        "./wildmetal.jpg": 85613
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 39294
    },
    40491: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    42043: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/809c3d6f72a6752f0ebcc6c92d43db67.jpg"
    },
    42787: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81001f378e085cd20f8ee0182e23cb7c.jpg"
    },
    44596: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8074783730a47af2fe5c2b67ddf7d31.jpg"
    },
    46209: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => p
      });
      var s = t(42295),
        r = t(62229),
        i = t(61128),
        n = t(95966),
        o = t(2918),
        c = t(50828),
        d = t(29625);
      const l = ({
          className: e
        }) => (0, s.jsxs)("svg", {
          className: e,
          width: "16",
          height: "17",
          viewBox: "0 0 16 17",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, s.jsx)("path", {
            d: "M3.33203 8.5H12.6654",
            stroke: "white",
            strokeWidth: "1.33",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, s.jsx)("path", {
            d: "M8 3.83331L12.6667 8.49998L8 13.1666",
            stroke: "white",
            strokeWidth: "1.33",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })]
        }),
        m = {
          actionBlock: "rockstargames-modules-core-newswire-articleb1516576d0566f12c906be9e81407ce4",
          actionFooter: "rockstargames-modules-core-newswire-articlef713e165e153987c3855d93dc1614f4d",
          active: "rockstargames-modules-core-newswire-articleec9f200e6987aebf6375c999eecd5dc3",
          calloutButton: "rockstargames-modules-core-newswire-articleb8ed029eb7d9b09c70caa4576bbb4c5a",
          calloutContainer: "rockstargames-modules-core-newswire-articlee8b19ed9af6aedef68997370cd508539",
          calloutHeader: "rockstargames-modules-core-newswire-articlefb0bbc5bcc4fb2c7d0b8152001df0497",
          calloutHeaderMargins: "rockstargames-modules-core-newswire-articled7d4d815f9e36b62ef54befcc89ca296",
          calloutHeaders: "rockstargames-modules-core-newswire-articlee86d59dd2e0ab3c594c33eccde3e8fea",
          calloutLink: "rockstargames-modules-core-newswire-articlebc07ececd6531f5df1c8cba48c846797",
          calloutLinkIcon: "rockstargames-modules-core-newswire-articledb31e98c20de15e8d5983285bd6ec92e",
          calloutSection: "rockstargames-modules-core-newswire-articleab742f2f5b6947ec0b2facff923a076f",
          calloutSubheader: "rockstargames-modules-core-newswire-articlef5fe27da672cf05e64359ada500a6b7a",
          calloutVoteForm: "rockstargames-modules-core-newswire-articleb5e2fa8800d39c78682d9ce8ce5e53f8",
          downvote: "rockstargames-modules-core-newswire-articleb1953057e462cdf6c79a4b8e6f2fe91b",
          pillBtn: "rockstargames-modules-core-newswire-articlec881ff12d1d9fb612b4ddd89178684e4",
          selected: "rockstargames-modules-core-newswire-articledece7a2abb867cf09add3f7429e7383b",
          upvote: "rockstargames-modules-core-newswire-articlef8d6a685395153161827b5cf8c6ddb93",
          voteButton: "rockstargames-modules-core-newswire-articleecdf609ed8d6c4039be969205b7e3ac0"
        },
        u = ({
          foreign_id: e,
          foreign_type: a
        }) => {
          const {
            track: t
          } = (0, o.useGtmTrack)(), {
            refetch: i
          } = (0, n.useQuery)(c.UserGetVote, {
            skip: !0
          }), [d] = (0, n.useMutation)(c.UserCastVote), [l, u] = (0, r.useState)(null), g = (0, r.useCallback)((s => {
            (async () => {
              if (s === l && null !== l) u(null);
              else {
                u(s), t({
                  event: "cta_" + (s ? "like" : "dislike"),
                  text: `${a} ${e}`
                });
                const r = {
                  foreignId: e,
                  foreignType: a,
                  vote: s
                };
                await d({
                  variables: r
                })
              }
            })()
          }), [e, a, l]);
          return (0, r.useEffect)((() => {
            e && a && (async () => {
              const t = await i({
                foreignId: e,
                foreignType: a
              });
              u(t?.data?.userGetVote?.vote ?? null)
            })()
          }), [e, a]), (0, s.jsxs)("div", {
            className: m.calloutVoteForm,
            children: [(0, s.jsx)("button", {
              "aria-label": "upvote",
              className: [m.upvote, m.voteButton, l ? m.active : ""].join(" "),
              name: "upvote",
              onClick: () => g(!0),
              type: "button"
            }), (0, s.jsx)("button", {
              "aria-label": "downvote",
              className: [m.downvote, m.voteButton, !1 === l ? m.active : ""].join(" "),
              name: "downvote",
              onClick: () => g(!1),
              type: "button"
            })]
          })
        },
        g = ({
          action_text: e,
          link: a,
          trackingData: t
        }) => {
          const {
            track: r
          } = (0, o.useGtmTrack)();
          return (0, s.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, s.jsxs)("button", {
              className: m.calloutLink,
              type: "button",
              onClick: t ? () => r({
                ...t
              }) : () => {},
              children: [e, (0, s.jsx)(l, {
                className: m.calloutLinkIcon
              })]
            })
          })
        },
        f = ({
          helperText: e,
          linkText: a,
          link: t,
          trackingData: r
        }) => {
          const {
            track: i
          } = (0, o.useGtmTrack)();
          return (0, s.jsxs)("div", {
            className: m.actionFooter,
            children: [e, a && " ", a && (0, s.jsx)("a", {
              href: t ?? "",
              onClick: () => i({
                ...r
              }),
              children: a
            })]
          })
        },
        p = (0, n.withTranslations)((({
          header: e,
          subheader: a,
          type: t,
          action_text: c,
          link: l,
          foreign_id: p = document.location.pathname,
          foreign_type: b = "url",
          className: k = "",
          actionFooterHelperText: v,
          actionFooterLinkText: w,
          actionFooterLink: h,
          trackingData: _ = {},
          actionFooterLinkTrackingData: x = {},
          t: y,
          ...N
        }) => {
          const {
            loggedIn: j
          } = (0, o.useRockstarUser)(), {
            track: S
          } = (0, o.useGtmTrack)(), T = document.location.pathname, {
            signInUrl: C
          } = (0, n.useScAuthLinks)(T), {
            ref: E,
            inView: P
          } = (0, i.useInView)({
            threshold: .6
          }), [A, I] = (0, r.useState)(!1);
          let L;
          if ((0, r.useEffect)((() => {
              P && !A && (S({
                event: "page_section_impression",
                element_placement: `callout section - ${N?.sectionName??N?._memoq?.header}`
              }), I(!0))
            }), [P]), !e && !a) return null;
          switch (t) {
            case "vote":
              if (!j) {
                L = (0, s.jsx)(d.A, {
                  to: C,
                  className: m.calloutButton,
                  onClick: _ ? () => S({
                    ..._
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              L = (0, s.jsx)(u, {
                foreign_id: p,
                foreign_type: b
              });
              break;
            case "button":
              c && l && (L = (0, s.jsx)(d.A, {
                to: l,
                className: m.calloutButton,
                onClick: _ ? () => S({
                  ..._
                }) : () => {},
                children: c
              }));
              break;
            case "link":
              c && l && (L = (0, s.jsx)(g, {
                action_text: c,
                link: l,
                trackingData: _
              }));
              break;
            default:
              L = null
          }
          return (0, s.jsx)("div", {
            className: `${m.calloutContainer} ${k||""}`,
            ref: E,
            children: (0, s.jsxs)("div", {
              className: m.calloutSection,
              children: [(0, s.jsxs)("div", {
                className: [m.calloutHeaders, L ? m.calloutHeaderMargins : ""].join(" "),
                children: [e && (0, s.jsx)("h2", {
                  className: m.calloutHeader,
                  children: y(e)
                }), a && (0, s.jsx)("h3", {
                  className: m.calloutSubheader,
                  children: y(a)
                })]
              }), (0, s.jsxs)("div", {
                className: m.actionBlock,
                children: [L, v && (0, s.jsx)(f, {
                  helperText: v,
                  linkText: w,
                  link: h,
                  trackingData: x
                })]
              })]
            })
          })
        }))
    },
    46368: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "postFields"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Newswire_Model_Entity_Post_o"
            }
          },
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "id"
              },
              name: {
                kind: "Name",
                value: "id_hash"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "url"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "title"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "name_slug"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "created"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "created_formatted"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "primary_tags"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "secondary_tags"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "preview_images_parsed"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "newswire_block"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "square"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "d16x9"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "_fallback"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }, {
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "paging"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Cake_Graph_Type_Paging_o"
            }
          },
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "pageCount"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "page"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "count"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "nextPage"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "prevPage"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "perPage"
              },
              arguments: [],
              directives: []
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "NewswireList"
          },
          variableDefinitions: [{
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
                value: "page"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int"
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
                value: "limit"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "tagId"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
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
                value: "cache"
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
              value: !0
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
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "metaUrl"
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
                value: "posts"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "page"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "page"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "tagId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "tagId"
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
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "limit"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "limit"
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
                    value: "paging"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "paging"
                      },
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "postFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 926
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: 'fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {\n    id: id_hash\n    url\n    title\n    name_slug\n    created\n    created_formatted\n    primary_tags {\n        id\n        name\n    }\n    secondary_tags {\n        id\n        name\n    }\n    preview_images_parsed {\n        newswire_block {\n            square\n            d16x9\n            _fallback\n        }\n    }\n}\nfragment paging on RockstarGames_Cake_Graph_Type_Paging_o {\n    pageCount\n    page\n    count\n    nextPage\n    prevPage\n    perPage\n}\n\nquery NewswireList(\n    $locale: String!\n    $page: Int!\n    $limit: Int\n    $tagId: Int\n    $metaUrl: String!\n    $cache: Boolean = true\n) {\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n    posts(page: $page, tagId: $tagId, locale: $locale, limit: $limit) {\n        paging {\n            ...paging\n        }\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function i(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.postFields = i(a, "postFields"), e.exports.paging = i(a, "paging"), e.exports.NewswireList = i(a, "NewswireList")
    },
    46554: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    46618: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    46823: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "type"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "orderBy"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "orderDirection"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tinaModulesList"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "type"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "orderBy"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "orderBy"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "orderDirection"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "orderDirection"
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
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      alias: {
                        kind: "Name",
                        value: "id"
                      },
                      name: {
                        kind: "Name",
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "name"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "type"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "tina"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "id"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "payload"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "variables"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 495
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query TinaModulesList(\n    $type: String\n    $orderBy: String\n    $orderDirection: String\n    $locale: String!\n) {\n    tinaModulesList(\n        type: $type\n        orderBy: $orderBy\n        orderDirection: $orderDirection\n        locale: $locale\n    ) {\n        results {\n            id: id_hash\n            name\n            type\n            tina {\n                id\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "TinaModulesList")
    },
    47240: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg"
    },
    47580: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    48157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    48524: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "UserGetVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreign_id"
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
                value: "foreign_type"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "userGetVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_type"
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
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "UserCastVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreign_id"
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
                value: "foreign_type"
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
                value: "vote"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "userCastVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_type"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "vote"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "vote"
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
                    value: "vote"
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

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query UserGetVote($foreign_id: String!, $foreign_type: String!) {\n    userGetVote(foreign_id: $foreign_id, foreign_type: $foreign_type) {\n        vote\n    }\n}\n\nmutation UserCastVote(\n    $foreign_id: String!\n    $foreign_type: String!\n    $vote: Boolean!\n) {\n    userCastVote(\n        foreign_id: $foreign_id\n        foreign_type: $foreign_type\n        vote: $vote\n    ) {\n        vote\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function i(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = i(a, "UserGetVote"), e.exports.UserCastVote = i(a, "UserCastVote")
    },
    49429: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    49980: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    50324: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    50828: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "UserGetVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreignId"
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
                value: "foreignType"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "userGetVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignId"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignType"
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
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "UserCastVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreignId"
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
                value: "foreignType"
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
                value: "vote"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "userCastVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignId"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignType"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "vote"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "vote"
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
                    value: "vote"
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
          end: 386
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query UserGetVote($foreignId: String!, $foreignType: String!) {\n    userGetVote(foreign_id: $foreignId, foreign_type: $foreignType) {\n        vote\n    }\n}\n\nmutation UserCastVote(\n    $foreignId: String!\n    $foreignType: String!\n    $vote: Boolean!\n) {\n    userCastVote(\n        foreign_id: $foreignId\n        foreign_type: $foreignType\n        vote: $vote\n    ) {\n        vote\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function i(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = i(a, "UserGetVote"), e.exports.UserCastVote = i(a, "UserCastVote")
    },
    51392: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f468aef6f0b5399d5c0f6b2e95b60cc5.svg"
    },
    51434: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(42295),
        r = t(95966),
        i = t(13989);
      const n = {
          just1post: "rockstargames-modules-core-newswire-articled46374473ed68a4121f88b44eba06359",
          pillBtn: "rockstargames-modules-core-newswire-articlef2d003dd0e6a129a56ea07208548787c",
          posts: "rockstargames-modules-core-newswire-articlecfe09d4dc8447b1e606404300d040e7a",
          related: "rockstargames-modules-core-newswire-articleb8a63bb419c1f2a8f94e099e1e650e48",
          selected: "rockstargames-modules-core-newswire-articlef94728c4a438800b9abab11a8b3e3c0a"
        },
        o = (0, r.withTranslations)((({
          posts: e,
          t: a
        }) => (0, s.jsxs)("section", {
          className: n.related,
          children: [(0, s.jsx)("h2", {
            children: a("Related Stories")
          }), (0, s.jsx)("div", {
            className: [n.posts, 1 === e.length ? n.just1post : ""].join(" "),
            children: e.map((e => (0, s.jsx)(i.A, {
              noSpecialOrder: !0,
              post: e
            }, e.id)))
          })]
        })))
    },
    51562: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var s = t(42295);
      const r = {
          responsiveGridBox: "rockstargames-modules-core-newswire-articlee721a07d53edbb90b165a7720bb32c08",
          responsiveGridItem: "rockstargames-modules-core-newswire-articlea32d93b6ae982b5ad473f75cf86ff085"
        },
        i = ({
          children: e,
          className: a,
          style: t
        }) => (0, s.jsx)("div", {
          className: [r.responsiveGridItem, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: e
        })
    },
    51575: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    51913: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    52014: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b13400360d3873aa5ed169d38da1ff9f.jpg"
    },
    52224: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => g
      });
      var s = t(42295),
        r = t(62229),
        i = t(87731),
        n = t.n(i),
        o = t(95966),
        c = t(65211);
      const d = {
          controls: "rockstargames-modules-core-newswire-articleadd02ff2cfa9b26941d96126a31bc21f",
          controlsButtons: "rockstargames-modules-core-newswire-articlee77442300b4509fe7a0104b3fb4cecf5",
          controlsCurrentBg: "rockstargames-modules-core-newswire-articlecca0f086505f02983f345dfb64c2ca45",
          controlsCurrentBgVisible: "rockstargames-modules-core-newswire-articleb91004149be94449c7fbfee3d24bde58",
          controlsNextTrack: "rockstargames-modules-core-newswire-articlecd583d32f7692538f7f5d1181943c899",
          controlsPlayPause: "rockstargames-modules-core-newswire-articlec58746be839199f6102319efb7659a54",
          controlsPlayPausePlaying: "rockstargames-modules-core-newswire-articlececadc2b92a0597a55ba5870b46706c9",
          controlsPrevTrack: "rockstargames-modules-core-newswire-articled84e8c03d27a3038eb54cb7d12c8ac52",
          controlsScrub: "rockstargames-modules-core-newswire-articlef90cfd862377d31cb5ee1faf9249fd3c",
          controlsScrubTrack: "rockstargames-modules-core-newswire-articlef4bb886e9545730ccc323f43a1dfb45c",
          controlsTrack: "rockstargames-modules-core-newswire-articleff717d7c9ac30041034f2c95fd3e3017",
          controlsTrackAnimating: "rockstargames-modules-core-newswire-articlef09973ae8e0457805bc0a1090d05e444",
          controlsTrackArtist: "rockstargames-modules-core-newswire-articlee0b6ffdc4c40a6992d70395cd98cb6c5",
          controlsTrackBurger: "rockstargames-modules-core-newswire-articlef3106c22742d7b08e577964a56789504",
          controlsTrackTitle: "rockstargames-modules-core-newswire-articlef47edf112978c82a9bbfb2476170007f",
          fixedToBottom: "rockstargames-modules-core-newswire-articleea802f7f67d39cfdd9625cc8de62828f",
          iconBurger: "rockstargames-modules-core-newswire-articlea18e526e94dfd87e9b5696a21c1c7754",
          player: "rockstargames-modules-core-newswire-articlec7765dd7dbdff24d38ef3326bb8a938b",
          scrollText: "rockstargames-modules-core-newswire-articleb42c9e9ba3716121d34600c92fdf4398",
          trackActive: "rockstargames-modules-core-newswire-articlea74e95cb6296abf8ca92168db76fecb9",
          trackIndex: "rockstargames-modules-core-newswire-articled0322571401b3a4dac22628533213ede",
          trackList: "rockstargames-modules-core-newswire-articlec7dfe95abfbec1cdef9dfb87d9fd1a1f",
          trackTitle: "rockstargames-modules-core-newswire-articleeceb3183ee9dc74e33d4184b307ba923",
          tracks: "rockstargames-modules-core-newswire-articleb4036f5fe1d1ab9674cc7c6e40f9a53c",
          tracksOpen: "rockstargames-modules-core-newswire-articlea9a553961300b8ee030d0c90ac613c4c"
        },
        l = ({
          src: e
        }) => (0, s.jsx)("div", {
          className: d.cover,
          style: {
            background: `url(${e}) center/cover`
          }
        }),
        m = ({
          timing: e = {
            current: 0,
            duration: 0
          },
          playing: a,
          audioRef: t,
          setPlaying: i,
          tracksOpen: o,
          setTracksOpen: c,
          trackData: l,
          setTrackId: m,
          trackBounds: u,
          setAutoNext: g
        }) => {
          const f = (0, r.useRef)(null),
            p = (0, r.useRef)(null),
            b = (0, r.useRef)(null),
            [k, v] = (0, r.useState)(null),
            [w, h] = (0, r.useState)(!1),
            _ = e => {
              const a = new Date(1e3 * e),
                t = a.getUTCMinutes(),
                s = a.getSeconds();
              return `${t.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, r.useEffect)((() => {
            if (!p.current || !b.current) return;
            const e = () => {
              b.current && p.current && v(b.current.clientWidth > p.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [b, p, e]), (0, r.useEffect)((() => {
            if (!f.current || !e?.duration) return;
            let a = null;
            const s = new(n())(f.current),
              r = a => {
                if (f.current) {
                  const s = f.current.clientWidth;
                  if (!f.current.contains(a.srcEvent.target)) return;
                  const r = Math.max(0, a.srcEvent.offsetX),
                    i = Number(r / s * e.duration);
                  t.currentTime = i
                }
              },
              i = () => {
                a ? t.pause() : t.play()
              },
              o = () => {
                a = t.paused, t.pause()
              };
            return s.on("panstart", o), s.on("panleft", r), s.on("panright", r), s.on("panend", i), s.on("tap", r), () => {
              s.off("panstart", o), s.off("panleft", r), s.off("panright", r), s.off("panend", i), s.off("tap", r)
            }
          }), [f.current, e.duration]), (0, r.useEffect)((() => {
            const e = Number(t?.currentTime);
            (a || !isNaN(e) && 0 !== e) && h(!0)
          }), [a, t?.currentTime]), (0, s.jsxs)("div", {
            className: d.controls,
            style: {
              "--track-color": l.color,
              "--track-mix-blend-mode": l.mix_blend_mode,
              "--current-pct": e.current / e.duration
            },
            children: [(0, s.jsx)("div", {
              className: [d.controlsCurrentBg, w ? d.controlsCurrentBgVisible : ""].join(" ")
            }), (0, s.jsx)("div", {
              className: d.controlsTrack,
              ref: p,
              children: (0, s.jsx)("span", {
                className: [d.controlsTrackTitle, k ? d.controlsTrackAnimating : ""].join(" "),
                ref: b,
                children: l.title
              })
            }), (0, s.jsxs)("div", {
              className: d.controlsButtons,
              children: [(0, s.jsx)("div", {
                className: d.controlsPrevTrack,
                onClick: () => {
                  u && (m(u[0]), g(!0), i(!0))
                }
              }), (0, s.jsx)("div", {
                className: [d.controlsPlayPause, a ? d.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  i(!a)
                }
              }), (0, s.jsx)("div", {
                className: d.controlsNextTrack,
                onClick: () => {
                  u && (m(u[1]), g(!0), i(!0))
                }
              })]
            }), (0, s.jsx)("div", {
              active: o ? "" : null,
              className: d.controlsTrackBurger,
              children: (0, s.jsx)("div", {
                className: d.iconBurger,
                onClick: () => {
                  c(!o)
                }
              })
            }), (0, s.jsxs)("div", {
              className: d.controlsScrub,
              children: [(0, s.jsx)("span", {
                children: _(e.current)
              }), (0, s.jsx)("div", {
                className: d.controlsScrubTrack,
                ref: f
              }), (0, s.jsx)("span", {
                children: _(e.duration)
              })]
            })]
          })
        },
        u = ({
          tracks: e,
          trackId: a,
          setTrackId: t,
          tracksOpen: r,
          setTracksOpen: i,
          setPlaying: n,
          setAutoNext: o
        }) => (0, s.jsxs)("div", {
          className: d.tracks,
          children: [(0, s.jsx)("h4", {
            children: "Tracks"
          }), (0, s.jsx)("div", {
            className: d.trackBurger,
            onClick: () => {
              i(!r)
            }
          }), (0, s.jsx)("div", {
            className: d.trackList,
            children: e.map(((e, r) => (0, s.jsxs)("a", {
              style: {
                "--highlight-color": e.color
              },
              className: a === e.id ? d.trackActive : "",
              onClick: () => {
                t(e.id), n(!0), o(!0)
              },
              children: [(0, s.jsx)("span", {
                className: d.trackIndex,
                children: String(r + 1).padStart(2, "0")
              }), (0, s.jsx)("span", {
                className: d.trackTitle,
                children: e.title
              }), (0, s.jsx)("span", {
                className: d.trackTime,
                children: e.duration
              })]
            }, e.id)))
          })]
        }),
        g = ({
          id: e,
          className: a = ""
        }) => {
          const {
            data: t
          } = (0, o.useQuery)(c.GetAudioAlbum, {
            variables: {
              id: e
            }
          }), [i, n] = (0, r.useState)(), [g, f] = (0, r.useState)(), [p, b] = (0, r.useState)(), [k, v] = (0, r.useState)(!1), [w, h] = (0, r.useState)(!1), [_, x] = (0, r.useState)(), [y, N] = (0, r.useState)({
            current: 0,
            duration: 0
          }), [j, S] = (0, r.useState)(!0);
          return (0, r.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (f(a.data.rockstarAudioPlayerPlayTrackId), S(!1), h(!0)), w && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && h(!1)
              };
            return w && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [w]), (0, r.useEffect)((() => {
            if (!_) return;
            const e = () => {
                isNaN(_.duration) || N({
                  duration: _?.duration ?? 0,
                  current: _?.currentTime ?? 0
                })
              },
              a = () => {
                j && i && f(i[1])
              };
            return _.addEventListener("loadedmetadata", e), _.addEventListener("timeupdate", e), _.addEventListener("ended", a), () => {
              _.removeEventListener("loadedmetadata", e), _.removeEventListener("timeupdate", e), _.removeEventListener("ended", a)
            }
          }), [_, i, j]), (0, r.useEffect)((() => {
            w && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [w]), (0, r.useEffect)((() => {
            _ && (w ? _.play() : _.pause(), v(!1))
          }), [w, _, p?.id]), (0, r.useEffect)((() => {
            if (!g) return;
            const {
              tracks: e
            } = t.audioAlbum, a = t.audioAlbum.tracks.findIndex((e => e.id === g));
            n([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), b(e[a])
          }), [g]), (0, r.useEffect)((() => {
            t && f(t.audioAlbum.tracks[0].id)
          }), [t]), p ? (0, s.jsxs)("div", {
            className: [d.player, d[a], k ? d.tracksOpen : ""].join(" "),
            children: [(0, s.jsx)("audio", {
              ref: e => {
                x(e)
              },
              src: p.mp3_src
            }), (0, s.jsx)(u, {
              tracks: t.audioAlbum.tracks,
              setTrackId: f,
              trackId: g,
              tracksOpen: k,
              setTracksOpen: v,
              setPlaying: h,
              setAutoNext: S
            }), (0, s.jsx)(l, {
              src: p.cover_src
            }), (0, s.jsx)(m, {
              setTrackId: f,
              trackBounds: i,
              tracksOpen: k,
              setTracksOpen: v,
              playing: w,
              setPlaying: h,
              timing: y,
              trackData: p,
              audioRef: _,
              setAutoNext: S
            })]
          }) : null
        }
    },
    52461: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    52466: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    52470: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "postFields"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Newswire_Model_Entity_Post_o"
            }
          },
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "id"
              },
              name: {
                kind: "Name",
                value: "id_hash"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "url"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "title"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "name_slug"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "created"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "created_formatted"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "primary_tags"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "secondary_tags"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "preview_images_parsed"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "newswire_block"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "square"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "d16x9"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "_fallback"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "NewswirePost"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "id_hash"
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
                value: "cache"
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
              value: !0
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "post"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "id_hash"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id_hash"
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
                  alias: {
                    kind: "Name",
                    value: "id"
                  },
                  name: {
                    kind: "Name",
                    value: "id_hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "subtitle"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "content"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "show_related"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "created"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "created_formatted"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "posts_hero"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "type"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "hero"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "primary_tags"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "name"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "secondary_tags"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "name"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "jsx"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "posts_jsx"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "markup"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "variables_us_defaulted"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tina"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "payload"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "variables"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "translation_status"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "keys"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "status"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "__typename"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "skip"
                    },
                    arguments: [{
                      kind: "Argument",
                      name: {
                        kind: "Name",
                        value: "if"
                      },
                      value: {
                        kind: "BooleanValue",
                        value: !0
                      }
                    }]
                  }]
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "root_url_translations"
              },
              name: {
                kind: "Name",
                value: "metaUrlTree"
              },
              arguments: [{
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
                  kind: "StringValue",
                  value: "/",
                  block: !1
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
                    value: "tina_tree"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "tina"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "payload"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "variables"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "related"
              },
              name: {
                kind: "Name",
                value: "posts"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "4"
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "relatedToId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id_hash"
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
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "postFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 1823
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: 'fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {\n    id: id_hash\n    url\n    title\n    name_slug\n    created\n    created_formatted\n    primary_tags {\n        id\n        name\n    }\n    secondary_tags {\n        id\n        name\n    }\n    preview_images_parsed {\n        newswire_block {\n            square\n            d16x9\n            _fallback\n        }\n    }\n}\n\nquery NewswirePost(\n    $id_hash: String!\n    $locale: String!\n    $cache: Boolean = true\n) {\n    post(id_hash: $id_hash, locale: $locale) {\n        id: id_hash\n        title\n        subtitle\n        content\n        show_related\n        created\n        created_formatted\n        posts_hero {\n            type\n            hero\n        }\n        primary_tags {\n            id\n            name\n        }\n        secondary_tags {\n            id\n            name\n        }\n        jsx\n        posts_jsx {\n            markup\n            variables_us_defaulted\n        }\n        tina {\n            id\n            payload\n            variables {\n                translation_status\n                keys\n            }\n            status\n        }\n        ### This makes Apollo skip caching so you can go back/forth between series and collections\n        ### without worrying about the wrong thing showing up.\n        ###\n        ### https://kamranicus.com/posts/2018-03-06-graphql-apollo-object-caching\n        __typename @skip(if: true)\n    }\n    root_url_translations: metaUrlTree(\n        domain: "www"\n        url: "/"\n        locale: $locale\n    ) {\n        tina_tree {\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n    }\n    related: posts(limit: 4, relatedToId: $id_hash, locale: $locale) {\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function i(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.postFields = i(a, "postFields"), e.exports.NewswirePost = i(a, "NewswirePost")
    },
    52591: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f9b044c847e4c971c6ac5d096fe3e0eb.jpg"
    },
    53781: (e, a, t) => {
      var s = {
        "./VI/desktop.jpg": 67496
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 53781
    },
    54222: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    56100: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        AnchorLink: () => o,
        Discounts: () => C,
        Donate: () => I,
        Engagement: () => r(),
        EventInfo: () => K,
        FeaturedEventInfo: () => Q,
        FontClip: () => X,
        GamingRewards: () => re,
        Gen9List: () => ce,
        HeroImage: () => de.A,
        NewswireFull: () => ue,
        NewswireTitle: () => U,
        PctBar: () => ge,
        Podium: () => be
      });
      var s = t(20206),
        r = t.n(s),
        i = t(42295),
        n = t(62229);
      const o = ({
        children: e,
        hash: a
      }) => {
        const t = (0, n.useRef)(null),
          s = window.location.hash?.replace("#", "") === a ? a : null;
        return (0, n.useEffect)((() => {
          s && setTimeout((() => {
            const e = document.getElementById(s);
            e && e.scrollIntoView()
          }), 1e3)
        }), []), (0, i.jsx)("div", {
          ref: t,
          id: a,
          children: e
        })
      };
      var c = t(15310),
        d = t.n(c);
      const l = ({
        items: e,
        columns: a = {},
        noCarousel: t = !1,
        noInfiniteScroll: s = !1,
        ...r
      }) => {
        const n = r?.style ?? {};
        return t && (a?.mobile && (n["--mobile-cols"] = a.mobile), a?.desktop && (n["--desktop-cols"] = a.desktop)), (0, i.jsxs)(i.Fragment, {
          children: [r.title && (0, i.jsx)("p", {
            className: "rockstargames-modules-core-newswire-articlebbdcc06cced1ed19baee825aacefee0b",
            children: r.title
          }), (0, i.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articleba7b5228b2134bc8563fe2a8f65ca885",
            children: [t && (0, i.jsx)(d(), {
              style: {
                ...n,
                "--grid-gap-dynamic": "2rem 0"
              },
              className: "rockstargames-modules-core-newswire-articlea225b2127250d1b0285289115c698451",
              renderTemplate: "standard",
              items: e,
              ...r
            }), !t && (0, i.jsx)(x, {
              items: e,
              noInfiniteScroll: s,
              perPage: 2,
              perPageMobile: 1
            })]
          })]
        })
      };
      var m = t(93935),
        u = t(24769),
        g = t(10632),
        f = t(55322);
      const p = {
          carouselDesc: "rockstargames-modules-core-newswire-articlee9bfd17e6e24970ba255a08b588a037d",
          carouselOnMobile: "rockstargames-modules-core-newswire-articlea560549799c4dc8483f97da50f1981b6",
          columnsDesktop2: "rockstargames-modules-core-newswire-articlef23776fba4cb02462ec7d4f659513b29",
          columnsDesktop3: "rockstargames-modules-core-newswire-articled913dbb31f95159240657470a2d5f843",
          columnsDesktop4: "rockstargames-modules-core-newswire-articlef86c12578b1b364cfcf74e21ec26b8cf",
          coupons: "rockstargames-modules-core-newswire-articlef5e7daa5da737825dfb76d422e3fcc40",
          extraDiv: "rockstargames-modules-core-newswire-articled4111fecce89d56df4c14b2046b9f96e",
          gridCarousel: "rockstargames-modules-core-newswire-articled2a5e95f5d1614aef34b0ec5c2b7447d",
          gridItem: "rockstargames-modules-core-newswire-articled7d79c7b10177f979b26b7a23f8ce275",
          gridText: "rockstargames-modules-core-newswire-articlea0473db56227eedff7fa7b8caef70981",
          imageArea: "rockstargames-modules-core-newswire-articlefe28c5ef2a9b0db8497edb03e6abfd26",
          imageAreaBg: "rockstargames-modules-core-newswire-articleeb7557efb1c2a51b525bb0eddad25f5e",
          limitedGrid: "rockstargames-modules-core-newswire-articled07881e40e8304c6a71f439189eaf726",
          limitedGridContent: "rockstargames-modules-core-newswire-articleef7041902f2c885a1e72e11068b88472",
          noTextFit: "rockstargames-modules-core-newswire-articlee4c624766c99d0bc6602652f0926cf66",
          thirdLine: "rockstargames-modules-core-newswire-articleba521de069b7af801a2ce695f33cbcce"
        },
        b = ({
          to: e,
          children: a
        }) => e ? (0, i.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: a
        }) : a,
        k = ({
          items: e,
          noTextFit: a,
          type: t,
          carouselOnMobile: s,
          columns: r = {
            desktop: 3,
            mobile: 2
          }
        }) => {
          const [o, c] = (0, n.useState)(null), [d, l] = (0, n.useState)(3), m = (0, n.useRef)(null);
          return (0, n.useEffect)((() => {
            const a = window.getComputedStyle(m.current).getPropertyValue("--divisible-desktop"),
              t = () => {
                const e = window.innerWidth;
                l(e <= 767 ? 2 : a)
              };
            if (e?.content.length && e?.content.length >= d) {
              let {
                length: a
              } = e.content;
              const t = [];
              if (a % d != 0) {
                let e = 0;
                do {
                  t.push((0, i.jsx)("div", {
                    className: `${p.gridItem} ${p.extraDiv}`
                  }, "limited-grid-" + e++)), a++
                } while (a % d != 0)
              }
              c(t)
            }
            return window.addEventListener("resize", t), t(), () => window.removeEventListener("resize", t)
          }), [d, m]), (0, i.jsxs)("div", {
            className: `${p.limitedGrid} ${s?p.carouselOnMobile:""}`,
            children: [(0, i.jsxs)("div", {
              ref: m,
              style: {
                "--divisible-desktop": r.desktop,
                "--divisible-mobile": r.mobile
              },
              className: `\n                    ${p.limitedGridContent}\n                    ${2===r.desktop?p.columnsDesktop2:""}\n                    ${3===r.desktop?p.columnsDesktop3:""}\n                    ${r.desktop>=4?p.columnsDesktop4:""}\n                    ${a?p.noTextFit:""}\n                    ${t?p[t]:""}\n                `,
              children: [(0, i.jsx)("div", {
                className: p.thirdLine
              }), e.content.map(((e, t) => (0, i.jsx)("div", {
                className: p.gridItem,
                children: (0, i.jsxs)(b, {
                  to: e?.href ?? e?.to,
                  children: [!a && (0, i.jsx)(f.A, {
                    className: p.gridText,
                    min: 16,
                    max: 1e3,
                    mode: "single",
                    children: e.title
                  }), (0, i.jsx)("div", {
                    className: p.imageArea,
                    children: (0, i.jsx)(g.A, {
                      image: e.image,
                      ariaLabel: e.ariaLabel,
                      badgeType: "badge2",
                      badge: e.badge
                    })
                  }), a && (0, i.jsx)("p", {
                    children: e.title
                  })]
                })
              }, t))), o]
            }), s && (0, i.jsx)("div", {
              className: p.gridCarousel,
              children: (0, i.jsx)(u.A, {
                children: e.content.map(((e, a) => (0, i.jsxs)("div", {
                  children: [(0, i.jsx)("div", {
                    className: `${p.imageArea} ${p.imageAreaBg}`,
                    children: (0, i.jsx)(g.A, {
                      className: t ? p[t] : "",
                      image: e.image,
                      ariaLabel: e.ariaLabel,
                      badgeType: "badge2",
                      badge: e.badge
                    })
                  }), e.title && (0, i.jsx)("p", {
                    className: p.carouselDesc,
                    children: (0, i.jsx)(b, {
                      to: e?.href ?? e?.to,
                      children: e.title
                    })
                  })]
                }, a)))
              })
            })]
          })
        },
        v = ({
          items: e = []
        }) => {
          if (!e.length) return null;
          let a = 0,
            t = 0;
          return e.map(((e, s) => {
            if (e.limitedList?.content || e.limitedGridList?.content) {
              const a = [];
              return e.limitedList?.content && a.push((0, i.jsx)(x, {
                items: e.limitedList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? s)), e.limitedGridList?.content && a.push((0, i.jsx)(k, {
                columns: e.limitedGridList.columns,
                items: e.limitedGridList
              }, e?.key ?? s)), t++, (0, i.jsxs)("div", {
                children: [1 === t && (0, i.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlee14aea44e0cd05cab3f737d9241c40cf",
                  children: (0, i.jsx)("div", {
                    className: "rockstargames-modules-core-newswire-articlecf8636d2845d410d7b3fdb9c5fd9f451"
                  })
                }), a]
              }, s)
            }
            if (e.discountsList?.content || e.discountsGridList?.content) {
              const t = [];
              return e.discountsList?.content && t.push((0, i.jsx)(x, {
                items: e.discountsList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? s)), e.discountsGridList?.content && t.push((0, i.jsx)(k, {
                noTextFit: !0,
                carouselOnMobile: !0,
                type: e.type ?? e.discountsGridList.type,
                columns: e.discountsGridList.columns,
                items: e.discountsGridList
              }, e?.key ?? s)), e?.list && t.push((0, i.jsx)(m.A, {
                ...e
              })), a++, (0, i.jsxs)("div", {
                children: [1 === a && (0, i.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articleab089b387a91263ebf4e3e5f9457113c"
                }), t]
              }, s)
            }
            return null
          }))
        };
      var w = t(26708);
      const h = {
          discountsCarousel: "rockstargames-modules-core-newswire-articlee323ee7ef1389c61bd0f7f5edf7ae87f",
          discountsCarouselItem: "rockstargames-modules-core-newswire-articledbe871f29ce887fdb3633adfa3a508e3",
          fontUpdate: "rockstargames-modules-core-newswire-articleb9e436db9c819a6291277c1c3b14a102",
          singleImage: "rockstargames-modules-core-newswire-articleef61c1eb2ac13f1f00f9fbcf97b591d9",
          wrapper: "rockstargames-modules-core-newswire-articlecf1f4a81a7b06d2f1741f014efccd835"
        },
        _ = ({
          wrapper: e,
          children: a,
          length: t
        }) => t > 1 ? e(a) : a,
        x = ({
          items: e,
          noInfiniteScroll: a = !1,
          size: t = null,
          perPage: s = null,
          customSlidesPerView: r = null,
          style: o = {}
        }) => {
          const c = (0, n.useRef)(null),
            [d, l] = (0, n.useState)(null),
            [m, f] = (0, n.useState)(t);
          return (0, n.useEffect)((() => {
            !t && s && f(1 === s ? "lg" : "sm"), t || s || (f("lg"), console.error('Error: DiscountsCarousel expects a prop "size" in order to display the correct amount of slides. Defaulting to lg.'))
          }), [t, s]), (0, n.useEffect)((() => {
            if (!c.current) return;
            const e = () => {
              const e = r || window.getComputedStyle(c.current).getPropertyValue("--slides-per-view");
              l(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [c, r]), e.length ? (0, i.jsx)(_, {
            length: e.length,
            wrapper: e => (0, i.jsx)("div", {
              "data-size": m,
              ref: c,
              className: h.wrapper,
              children: (0, i.jsx)(u.A, {
                className: h.discountsCarousel,
                noInfiniteScroll: a,
                style: {
                  ...o,
                  "--per-page": d,
                  "--carousel-column-gap": "1rem"
                },
                children: e
              })
            }),
            children: e.map(((a, t) => (0, i.jsxs)("div", {
              className: [h.discountsCarouselItem, 1 === e.length ? h.singleImage : ""].join(" "),
              children: [(0, i.jsx)(g.A, {
                ariaLabel: a?.ariaLabel,
                image: a?.image ?? {
                  alt: a?.alt ?? "",
                  desktop: a?.img ?? null,
                  mobile: a?.imgMobile ?? null
                },
                badge: a?.badge ?? a?.image?.badge ?? a.discountTxt,
                splitter: a?.splitter ?? a?.image?.splitter,
                badgeType: "badgeSizeUpdate"
              }), (0, i.jsx)(w.A, {
                className: h.fontUpdate,
                item: a
              })]
            }, a?.key ?? t)))
          }) : (console.error('Error: DiscountsCarousel expects a prop "items" that contains an array of objects.'), null)
        };
      var y = t(20837),
        N = t(62312);
      const j = ({
          items: e = [],
          style: a = {}
        }) => e.length ? (0, i.jsx)(y.A, {
          style: {
            "--grid-gap-dynamic": "var(--grid-gap-static-lg)",
            "--padding-dynamic-tb": "var(--grid-gap-static-lg)",
            "--image-rounding-dynamic": "0",
            ...a
          },
          children: e.map(((e, a) => e?.title_and_description ? (0, i.jsxs)(y.A, {
            context: "readable-text",
            style: {
              textAlign: "left",
              "--grid-gap-dynamic": "var(--grid-gap-static-xs)",
              background: "transparent"
            },
            children: [e?.title_and_description.title && (0, i.jsx)("h1", {
              className: "large",
              children: e.title_and_description.title
            }), e?.title_and_description.description && (0, i.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: e.title_and_description.description
              }
            })]
          }, e?.key ?? a) : e?.limitedList?.content ? (0, i.jsx)(x, {
            items: e.limitedList.content,
            noInfiniteScroll: e?.noInfiniteScroll,
            perPage: e?.perPage,
            size: e?.size
          }, e?.key ?? a) : e?.discountsGridList?.content ? (0, i.jsx)(l, {
            noCarousel: !0,
            columns: e.discountsGridList?.columns,
            items: e.discountsGridList.content
          }, e?.key ?? a) : e?.content ? (0, i.jsx)(N.A, {
            ...e,
            children: e.content
          }, e?.key ?? a) : e?.list ? (0, i.jsx)(m.A, {
            ...e
          }, e?.key ?? a) : void 0))
        }) : null,
        S = {
          area: "rockstargames-modules-core-newswire-articlec0f0f1d12bd9d73702d5518ddfeb248a",
          btmImg: "rockstargames-modules-core-newswire-articlef7d259739c10010bebbf5a4566021799",
          limitedTopImg: "rockstargames-modules-core-newswire-articlefc4ab7fde14e1466eb3397a40c26a8f0",
          topImg: "rockstargames-modules-core-newswire-articlee034ccf8bbda4129691cf7da53b87170"
        },
        T = ({
          items: e,
          renderTemplate: a,
          ...t
        }) => {
          switch (a) {
            case "gtav":
            case "gtao":
              return (0, i.jsx)(j, {
                items: e,
                ...t
              });
            case "grid":
              return (0, i.jsx)(l, {
                items: e,
                ...t
              });
            default:
              return (0, i.jsx)(v, {
                items: e
              })
          }
        },
        C = ({
          items: e,
          renderTemplate: a,
          style: t,
          ...s
        }) => (0, i.jsx)("div", {
          className: S.area,
          "data-context": "discounts",
          children: (0, i.jsxs)("div", {
            className: S.discountsContent,
            children: [(0, i.jsx)(T, {
              renderTemplate: a,
              items: e,
              props: s,
              style: t
            }), (0, i.jsx)("div", {
              className: S.btmImg
            })]
          })
        });
      var E = t(2973),
        P = t.n(E);
      const A = {
          donate: "rockstargames-modules-core-newswire-articleca3a67499205086cce3ec4006dde027a",
          largePaddingSides: "rockstargames-modules-core-newswire-articlee9aa6553439a489ffff3140708eb84c9"
        },
        I = ({
          text: e
        }) => {
          const {
            sanitize: a
          } = P();
          return (0, i.jsx)("div", {
            className: [A.donate, "normalPaddingTopBottom largePaddingSides"].join(" "),
            children: (0, i.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: a(e)
              }
            })
          })
        };
      var L = t(16188),
        M = t.n(L),
        z = t(92440),
        D = t(4572),
        F = t.n(D),
        $ = t(64064),
        V = t.n($),
        B = t(31879),
        O = t.n(B),
        G = t(14200),
        R = t(95966);
      const H = {
          breadcrumbs: "rockstargames-modules-core-newswire-articlea300b88d467c420e15084fc2eeeb1e09",
          main: "rockstargames-modules-core-newswire-articleaf5256fb296a82d00fb900a2380a5d7f",
          title: "rockstargames-modules-core-newswire-articlea82cdf4d56d4fbadd86d56caf6b7da04"
        },
        U = (0, R.withTranslations)((({
          children: e,
          intro: a,
          image: t = {},
          style: s = {},
          t: r,
          className: n = "",
          variant: o = null
        }) => {
          let c = {};
          void 0 !== s.toggleInvertSeparator && (c = {
            "--breadcrumb-separator-filter-invert": s.toggleInvertSeparator ? "invert(0)" : "invert(1)"
          });
          const d = (0, R.useNewswirePost)(),
            l = {},
            m = l?.meta?.title ?? d?.title,
            u = l?.meta?.subtitle ?? d?.subtitle,
            g = u ? (0, i.jsx)("h3", {
              "data-context": "newswire-subtitle",
              children: u
            }) : "",
            f = [{
              text: r("Newswire"),
              to: "/newswire"
            }],
            {
              src: p
            } = (0, z.useImageParser)(t),
            b = (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)("time", {
                dateTime: d.created,
                children: d.created_formatted
              }), a ? (0, i.jsx)(w.A, {
                item: a
              }) : "", e]
            });
          d?.primary_tags?.length && f.push({
            text: d.primary_tags[0].name,
            to: `/newswire?tag_id=${d.primary_tags[0].id}`
          }), d?.secondary_tags?.length && f.push({
            text: d.secondary_tags[0].name,
            to: `/newswire?tag_id=${d.secondary_tags[0].id}`
          });
          const k = (0, i.jsx)("div", {
            className: H.breadcrumbs,
            children: f.map((e => (0, i.jsx)(G.A, {
              to: e.to,
              children: e.text
            }, e.to)))
          });
          return p?.desktop && (s.background = `url(${p.desktop}) center/cover no-repeat`), (0, i.jsx)("div", {
            className: [n, H.title].join(" "),
            style: {
              ...s,
              ...c
            },
            children: "separated" === o ? (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsxs)("header", {
                "data-context": "title",
                children: [k, (0, i.jsx)("h1", {
                  children: m
                })]
              }), (0, i.jsxs)("footer", {
                "data-context": "title",
                children: [g, b]
              })]
            }) : (0, i.jsxs)(i.Fragment, {
              children: [k, (0, i.jsxs)("div", {
                className: H.main,
                children: [(0, i.jsx)("h1", {
                  children: m
                }), g]
              }), b]
            })
          })
        })),
        W = {
          event: "rockstargames-modules-core-newswire-articled2fab08f92d966e9f62ad805f1e15542",
          eventInfo: "rockstargames-modules-core-newswire-articlee4a137d11e066c1ea5b0c733d364311f",
          featured: "rockstargames-modules-core-newswire-articlebb5a0823d43098a1cc049f2296fcf49e",
          large: "rockstargames-modules-core-newswire-articlee94ea7e671124487acc1e1a38fe28560",
          pillBtn: "rockstargames-modules-core-newswire-articlef5d4e8bec1c576430dea6b22ec107759",
          selected: "rockstargames-modules-core-newswire-articledb6bc6b6bcb510524004bd740d0e8ba9",
          videoWrapper: "rockstargames-modules-core-newswire-articledad6ecb3c2a7a4f228052b0e1bd38ed5"
        },
        q = ({
          images: e
        }) => {
          if (!e?.length) return null;
          if (1 === e.length) {
            const {
              key: a,
              ...t
            } = e[0];
            return (0, i.jsx)(g.A, {
              ...t
            })
          }
          return (0, i.jsx)(u.A, {
            items: e
          })
        },
        K = ({
          images: e,
          title: a = "",
          content: t,
          isFeatured: s = !1,
          className: r = null,
          videoInHeroProps: o,
          hideNewswireTitle: c = !1
        }) => {
          const l = (0, z.useTinaPayload)(),
            m = l?.meta?.prod ?? !1,
            u = (0, z.useTinaComponents)();
          M().set(l, "meta.prod", m);
          let f = o?.gifVideoProps?.hasVideoInHero || !1;
          const p = o?.htmlVideoProps?.id || !1,
            b = !!o?.htmlVideoProps?.hasHtmlVideoInHero && p;
          b && f && (f = !1);
          const k = void 0 === o || !f && !b,
            v = (0, n.useMemo)((() => ({
              ...u,
              HTMLElement: N.A,
              ImageWithBadge: g.A,
              GroupOfItems: d()
            })), [u]);
          return (0, i.jsxs)("div", {
            className: F()(W.event, r),
            children: [f && (0, i.jsx)("div", {
              className: W.videoWrapper,
              children: (0, i.jsx)(V(), {
                hash: {
                  desktop: o?.gifVideoProps?.hash?.desktop,
                  mobile: o?.gifVideoProps?.hash?.mobile
                },
                loop: o?.gifVideoProps?.isLooping
              })
            }), b && p && (0, i.jsx)("div", {
              className: W.videoWrapper,
              children: (0, i.jsx)(O(), {
                autoplay: o?.htmlVideoProps?.autoPlay || !1,
                id: p
              })
            }), k && (0, i.jsx)(q, {
              images: e
            }), s && (0, i.jsx)(U, {}), (0, i.jsxs)("div", {
              className: W.eventInfo,
              children: [!s && !c && (0, i.jsx)("h3", {
                className: W.eventTitle,
                children: a
              }), (0, i.jsx)(z.TinaParser, {
                components: v,
                tina: {
                  payload: {
                    content: t,
                    meta: {
                      prod: m
                    }
                  }
                }
              })]
            })]
          })
        },
        Q = e => (0, i.jsx)(K, {
          ...e,
          className: W.featured,
          isFeatured: !0
        }),
        Y = {
          clip: "rockstargames-modules-core-newswire-articleaf597db4ae39661b43752ca8aef0ea95",
          greyTexture: "rockstargames-modules-core-newswire-articlefb39d1c9eee482e2db4e0b343e1cb979",
          redTexture: "rockstargames-modules-core-newswire-articlea1e6c3732fbb497aa657efa3ba5f7aca"
        },
        X = ({
          fontFamily: e = "inherit",
          fontBg: a,
          string: t
        }) => (0, i.jsx)("span", {
          style: {
            "--font-family-clip": e
          },
          className: [Y.clip, Y[a]].join(" "),
          children: t
        });
      var J = t(4407),
        Z = t(15386),
        ee = t(51562),
        ae = t(2918),
        te = t(61128);
      const se = {
          gamingRewards: "rockstargames-modules-core-newswire-articlea9a31094bd3e441b534cc78d739c61ee",
          gamingWrapper: "rockstargames-modules-core-newswire-articledd734e4acaf9151080ed7586e4e639b7",
          gtaPlus: "rockstargames-modules-core-newswire-articled890310a8a24e8315e93aad1c1f514eb",
          listArea: "rockstargames-modules-core-newswire-articlea7bde69bf0b082d54fc3174a8cd8b920",
          plus: "rockstargames-modules-core-newswire-articled692340ad550eab50b73f70580899379",
          primeGamingSocialLogo: "rockstargames-modules-core-newswire-articled476570605bebe4274221d86cd4777b1",
          psPlus: "rockstargames-modules-core-newswire-articlea9ed6881a254587b0f62accd0a42f49b",
          psPlusDefaultImg: "rockstargames-modules-core-newswire-articleaaac34c5e0f54812ed6d3141047b44d5",
          rightSide: "rockstargames-modules-core-newswire-articleeb6155b649b94d394e88f6bd53a994c7"
        },
        re = ({
          headline: e,
          plainImage: a,
          top: s,
          unorderedList: r,
          bottom: o,
          rewards: c = "primeGaming",
          style: d = {}
        }) => {
          const l = (0, R.useLocale)(),
            {
              track: u
            } = (0, ae.useGtmTrack)(),
            {
              ref: g,
              inView: f
            } = (0, te.useInView)({
              threshold: .6
            }),
            [p, b] = (0, n.useState)(!1);
          return (0, n.useEffect)((() => {
            f && !p && (u({
              element_placement: "newswire-article-gaming-rewards",
              event: "page_section_impression"
            }), b(!0))
          }), [f]), "primeGaming" === c && ["ru", "kr", "ko_kr", "ru_ru"].includes(l) ? null : (0, i.jsx)("div", {
            className: se.gamingWrapper,
            ref: g,
            children: (0, i.jsx)("div", {
              className: `${se.gamingRewards} ${se[c]}`,
              style: d,
              children: (0, i.jsxs)(Z.A, {
                style: {
                  "--grid-align-items": "center",
                  "--grid-row-gap": "2rem"
                },
                children: [(0, i.jsxs)(ee.A, {
                  children: [e && (0, i.jsx)("h3", {
                    children: e
                  }), "psPlus" === c && (0, i.jsx)("img", {
                    "aria-label": "Playstation Plus Benefit",
                    className: se.primeGamingSocialLogo,
                    src: t(1983)
                  }), "primeGaming" === c && (0, i.jsx)("img", {
                    "aria-label": "Social Club | Prime Gaming",
                    className: se.primeGamingSocialLogo,
                    src: t(29654)
                  }), "gtaPlus" === c && (0, i.jsx)("img", {
                    "aria-label": "GTA Plus",
                    className: se.primeGamingSocialLogo,
                    src: t(68547)
                  }), s?.text && (0, i.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: s.text
                    },
                    onClick: e => {
                      e.target.closest("a") && u({
                        element_placement: "newswire-article-gaming-rewards",
                        event: "cta_other",
                        text: c
                      })
                    }
                  }), r?.list && (0, i.jsx)("div", {
                    className: se.listArea,
                    children: (0, i.jsx)(m.A, {
                      className: "gtaPlus" === c ? se.plus : "",
                      ...r,
                      list: r.list,
                      ...r?.attributes
                    })
                  }), o?.text && (0, i.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: o.text
                    },
                    onClick: e => {
                      e.target.closest("a") && u({
                        element_placement: "newswire-article-gaming-rewards",
                        event: "cta_other",
                        text: c
                      })
                    }
                  })]
                }), (0, i.jsx)(ee.A, {
                  className: se.rightSide,
                  children: a?.image ? (0, i.jsx)(J.A, {
                    image: a.image
                  }) : (0, i.jsx)("div", {
                    className: se.psPlusDefaultImg
                  })
                })]
              })
            })
          })
        };
      var ie = t(3436),
        ne = t(34100),
        oe = t(11015);
      const ce = ({
        backgroundImages: e,
        deckHash: a = "",
        perPage: t = null
      }) => {
        const [s, r] = (0, n.useState)(null), o = (0, z.useGetCdnSource)(e?.backgroundImg?.full_src ?? null), c = (0, z.useGetCdnSource)(e?.layeredImg?.full_src ?? null), d = (0, n.useRef)(null), {
          data: l,
          error: m
        } = (0, R.useQuery)(oe.TinaModulesInfo, {
          variables: {
            ids: a
          },
          skip: !a
        });
        return (0, n.useEffect)((() => {
          if (l?.tinaModulesInfo) {
            const e = l.tinaModulesInfo[0],
              {
                id: a,
                tina: t
              } = e,
              s = M().clone(t);
            M().set(s, "payload.meta.id", a), r(s)
          }
        }), [l]), l && s ? m ? (0, i.jsx)(ne.A, {
          error: m
        }) : (0, i.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlea2287392a6363add6fc77a246fc467ce",
          ref: d,
          style: {
            "--background-image": `url(${o})`,
            "--layered-image": `url(${c})`,
            "--slides-per-view-desktop": t
          },
          children: (0, i.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articleef8574282ec987f2460a951505ca5ef7",
            children: [c ? (0, i.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleaa9b5909de87ec85fc53e12a7f9ca2d5"
            }) : "", (0, i.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlee3ff669c62cc2088728385fb58ef2969",
              children: (0, i.jsx)(z.TinaParser, {
                components: {
                  Deck: ie.E$
                },
                tina: s
              })
            })]
          })
        }) : null
      };
      var de = t(6288),
        le = t(97384),
        me = t.n(le);
      const ue = ({
          children: e,
          className: a = "",
          style: t,
          game: s
        }) => ((0, n.useEffect)((() => {
          document.fonts.ready.then((() => {
            me().balanceText()
          }))
        }), [e]), (0, i.jsx)("div", {
          className: ["newswireFull", s, a].join(" "),
          style: t,
          "data-game": s,
          children: e
        })),
        ge = ({
          pct: e,
          bgColor: a,
          primaryColor: t
        }) => (0, i.jsx)("div", {
          style: {
            position: "relative",
            width: "100%",
            height: "20px",
            backgroundColor: a
          },
          children: (0, i.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articleb271a7a9b503a732ecc3de9eb27d11c8",
            style: {
              backgroundColor: t,
              position: "absolute",
              top: "0",
              left: "0",
              width: `${e}%`,
              height: "100%"
            }
          })
        });
      var fe = t(94322),
        pe = t(61784);
      const be = ({
        title: e,
        desc: a,
        img: t,
        imgMobile: s,
        bgColor: r,
        descPositionBottom: n,
        fontColor: o = "#fff"
      }) => (0, i.jsxs)(i.Fragment, {
        children: [n ?? (0, i.jsx)(pe.A, {
          style: {
            backgroundColor: `${r}`,
            "--padding-top-bottom": "1.75rem"
          },
          className: "normalPaddingTopBottom largePaddingSides",
          children: (0, i.jsxs)(pe.A, {
            className: "maxDescArea",
            style: {
              "--desc-h3-margin-bottom": "var(--h-rem-size)"
            },
            children: [(0, i.jsx)("h3", {
              style: {
                "--color-span": `${o}`
              },
              children: e
            }), (0, i.jsx)("p", {
              children: a
            })]
          })
        }), (0, i.jsxs)(pe.A, {
          className: [n ?? "spacing"].join(" "),
          children: [(0, i.jsx)(fe.A, {
            className: "hiddenMobile",
            src: t
          }), (0, i.jsx)(fe.A, {
            className: "hiddenLarge",
            src: s
          })]
        }), n ? (0, i.jsx)(pe.A, {
          style: {
            backgroundColor: `${r}`,
            "--padding-top-bottom": "1.75rem"
          },
          className: "normalPaddingTopBottom largePaddingSides spacing",
          children: (0, i.jsxs)(pe.A, {
            className: "maxDescArea",
            style: {
              "--desc-h3-margin-bottom": "var(--h-rem-size)"
            },
            children: [(0, i.jsx)("h3", {
              style: {
                "--color-span": `${o}`
              },
              children: e
            }), (0, i.jsx)("p", {
              children: a
            })]
          })
        }) : null]
      })
    },
    57258: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f31b4df90bff5bab740485f2d4b8253.jpg"
    },
    58648: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    59414: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    59655: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8ae1f733bc7d3b05c506de67f4b4f7f.jpg"
    },
    59942: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48371205a1d87d858baa85712d1f91bb.jpg"
    },
    60212: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(42295),
        r = t(81788);
      const i = (0, r.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            description: "Tracklist",
            defaultMessage: "Tracklist"
          }
        }),
        n = {
          bodySmall: "rockstargames-modules-core-newswire-articledeed018133fca0148d0bf72fbe95bcd6"
        },
        o = ({
          track: e,
          artist: a
        }) => (0, s.jsxs)("div", {
          className: n.track,
          children: [(0, s.jsx)("p", {
            children: e
          }), (0, s.jsx)("p", {
            className: n.bodySmall,
            children: a
          })]
        }),
        c = (0, t(19732).g)((({
          content: e = []
        }) => (0, s.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlee2587587f57e43c9ca90d1e16e4a6ca6",
          children: [(0, s.jsx)("h4", {
            className: "rockstargames-modules-core-newswire-articleef167f82b058360b2b6a3466ca73d7de",
            children: (0, s.jsx)(r.FormattedMessage, {
              ...i.components_track_list_title
            })
          }), (0, s.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlebeaa4a0a8d9f3a6ef20ee517f222a3c2",
            children: (0, s.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlec06a65e90847e8b44df20f2aceb57038",
              children: e?.map((e => (0, s.jsx)(o, {
                track: e.track,
                artist: e.artist
              }, e.key)))
            })
          })]
        })))
    },
    61306: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => u
      });
      var s = t(42295),
        r = t(62229),
        i = t(22557),
        n = t(2918),
        o = t(24162),
        c = t(7545);
      const d = "rockstargames-modules-core-newswire-articleb7d3d1587271986440f5870d8d02eb3b",
        l = "rockstargames-modules-core-newswire-articlefcffcc6e594fbf9a4a6e9ab5a8d034c7",
        m = {
          0: {
            spaceBetween: 8
          },
          768: {
            spaceBetween: 16
          },
          1024: {
            spaceBetween: 18
          },
          1920: {
            spaceBetween: 20
          },
          2560: {
            spaceBetween: 22
          }
        },
        u = ({
          title: e = "thumbnail gallery",
          thumbsPerView: a = 3,
          loop: t = !1,
          navigation: u = !1,
          slideChildren: g = [],
          variants: f = {
            parent: void 0,
            main: void 0,
            thumbs: void 0
          },
          transition: p = {
            parent: void 0,
            main: void 0,
            thumbs: void 0
          }
        }) => {
          const {
            track: b
          } = (0, n.useGtmTrack)(), [k, v] = (0, r.useState)([c.U1, c.WO, c.dK]), [w, h] = (0, r.useState)(null), [_, x] = (0, r.useState)(null);
          return (0, r.useEffect)((() => {
            const e = [c.U1, c.WO, c.dK];
            u && e.push(c.Vx), v(e)
          }), [u]), (0, r.useEffect)((() => {
            if (!g) return;
            const e = g.map(((e, a) => (0, s.jsx)(o.qr, {
              children: e
            }, Symbol(a).toString())));
            x(e)
          }), [g]), _ ? (0, s.jsxs)(i.P.div, {
            className: "rockstargames-modules-core-newswire-articlef2d55de974817e455a162843125a8771",
            variants: f.parent,
            transition: p.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, s.jsx)(i.P.div, {
              className: d,
              variants: f.main,
              transition: p.main,
              initial: "initial",
              animate: "animate",
              children: (0, s.jsx)(o.RC, {
                loop: t,
                navigation: u,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: w
                },
                modules: k,
                breakpoints: m,
                className: d,
                onSlideNextTransitionEnd: () => {
                  b({
                    event: "carousel_next",
                    element_placement: e?.toLowerCase() ?? ""
                  })
                },
                onSlidePrevTransitionEnd: () => {
                  b({
                    event: "carousel_previous",
                    element_placement: e?.toLowerCase() ?? ""
                  })
                },
                onSlideChangeTransitionEnd: () => {
                  b({
                    event: "carousel_swipe",
                    element_placement: e?.toLowerCase() ?? ""
                  })
                },
                children: _
              })
            }), (0, s.jsx)(i.P.div, {
              className: l,
              variants: f.thumbs,
              transition: p.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, s.jsx)(o.RC, {
                threshold: 50,
                onSwiper: h,
                loop: t,
                breakpoints: m,
                slidesPerView: a,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: k,
                className: l,
                children: _
              })
            })]
          }) : null
        }
    },
    61784: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var s = t(42295);
      const r = {
          maxWidth: "rockstargames-modules-core-newswire-articleb2c8f49e280c2e7c204b30a4af8c13b9",
          responsiveSection: "rockstargames-modules-core-newswire-articlebd7167fb3a3edaf4df4d9a576efb1170"
        },
        i = ({
          children: e,
          className: a,
          style: t,
          maxWidth: i
        }) => (0, s.jsx)("section", {
          className: [r.responsiveSection, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: i ? (0, s.jsx)("div", {
            className: r.maxWidth,
            children: e
          }) : e
        })
    },
    62312: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(42295),
        r = t(16188),
        i = t.n(r),
        n = t(95966),
        o = t(4572),
        c = t.n(o);
      const d = ({
        attributes: e = {},
        children: a,
        className: t = "",
        id: r = "",
        style: o = {}
      }) => (0, s.jsx)("span", {
        className: c()(t, e?.className, "rockstargames-modules-core-newswire-articlec650a7a1e761d6a9f2d6ce1cd8d6f330"),
        id: r,
        style: (0, n.safeStyles)(o ?? e?.style ?? {}),
        dangerouslySetInnerHTML: {
          __html: i().unescape(a)
        }
      })
    },
    63117: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    63839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a549b321910f5308200496f1893c2a5f.jpg"
    },
    64923: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/089fe525338554e2120a1aaaf81766d6.jpg"
    },
    65044: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    65211: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GetAudioAlbum"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "id"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "audioAlbum"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id"
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
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tracks"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "cover_src"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "mp3_src"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "color"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "mix_blend_mode"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "duration"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "artist"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "name"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 340
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query GetAudioAlbum($id: Int!, $locale: String!) {\n    audioAlbum(id: $id, locale: $locale) {\n        title\n        tracks {\n            id\n            cover_src\n            mp3_src\n            title\n            color\n            mix_blend_mode\n            duration\n            artist {\n                name\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.GetAudioAlbum = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "GetAudioAlbum")
    },
    65315: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    67050: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(42295),
        r = t(62229),
        i = t(9623),
        n = t(95966);
      const o = (0, n.withTranslations)((({
        t: e
      }) => {
        const [a] = (0, r.useState)(""), t = (0, i.useNavigate)(), o = (0, n.useMutateState)();
        return (0, s.jsxs)("form", {
          action: "#",
          className: "rockstargames-modules-core-newswire-articlec9f16d9c2f4a943ae8f1f900f31b5f4b",
          onSubmit: e => {
            e.preventDefault(), o({
              navOpen: !1
            }), document.activeElement?.blur?.();
            const a = e.currentTarget.elements.namedItem("q").value;
            t(`/search?q=${a}`)
          },
          role: "search",
          children: [(0, s.jsx)("button", {
            type: "submit",
            role: "button",
            title: "Submit"
          }), (0, s.jsx)("input", {
            autoComplete: "off",
            defaultValue: a,
            enterKeyHint: "search",
            name: "q",
            placeholder: e("Search Rockstar Games")
          })]
        })
      }))
    },
    67181: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5704d117b387578dfebe1290e556f963.jpg"
    },
    67288: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var s = t(42295),
        r = t(45881);
      const i = ({
        html: e
      }) => (0, s.jsx)("div", {
        children: (0, r.Ay)(e)
      })
    },
    67299: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    67443: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    67496: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/372e91ece1e13eda3ec63d6dfc06f7ce.jpg"
    },
    68547: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7563ed0414306d18d4f8401effcab31a.svg"
    },
    68918: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    72690: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    73483: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b01707ef5603a26c1f542088f8f7c09.jpg"
    },
    73534: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc01cf29aa31b9d15a5d06483a0a1a3.jpg"
    },
    73564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4393d2466a2f8931669e345898541812.jpg"
    },
    74432: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    75016: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        A: () => r.A,
        AlertDialog: () => _e,
        AudioPlayer: () => i.A,
        Badge: () => n.A,
        Brands: () => c,
        Button: () => d.A,
        ButtonGroup: () => g,
        CalloutSection: () => N.A,
        Carousel: () => f.A,
        CharacterCard: () => p,
        ConditionalBlock: () => y,
        CookieAB: () => P,
        CountryInputField: () => C,
        Cta: () => A.A,
        DescriptionArea: () => I.A,
        DiscountsBadge: () => L.A,
        DotLoader: () => z,
        Dropdown: () => V,
        Embed: () => G,
        ExpandingPlatformButton: () => R.A,
        FadeInContent: () => H.A,
        Gen9Button: () => u.A,
        Gen9CoreCarousel: () => X,
        Grid: () => B.A,
        HTMLElement: () => ce.A,
        Hero: () => oe,
        HookStore: () => h,
        ImageWithBadge: () => be.A,
        LayeredImage: () => ue,
        Lightbox: () => pe,
        LoadingAnimation: () => Ba.A,
        MultiSourceImage: () => de.A,
        NewswireBlocks: () => Pe,
        NewswireCard: () => xe.A,
        NewswireList: () => Se,
        NewswireRelated: () => Te.A,
        NewswireTag: () => Ce.A,
        OrderedList: () => Ae.A,
        Paging: () => Me,
        ParallaxCacheBuster: () => De,
        ParallaxInnerLayer: () => Ve,
        ParallaxOuterLayer: () => Oe,
        ParallaxWrapper: () => $e,
        PlatformTag: () => Ga.Ay,
        PromoModule: () => Re,
        Rating: () => Qe,
        ResponsiveFlexBox: () => Ye.A,
        ResponsiveFlexItem: () => Xe.A,
        ResponsiveGridBox: () => Je.A,
        ResponsiveGridItem: () => Ze.A,
        ResponsiveImg: () => ea.A,
        ResponsiveSection: () => aa.A,
        RockstarLogo: () => ta,
        RpCategory: () => Oa,
        SafeHtml: () => sa.A,
        ScrollSection: () => ra,
        ScrollToTop: () => ia,
        ScrollTracker: () => na.A,
        SearchBox: () => oa.A,
        Separator: () => ca.A,
        SrcsetImage: () => ve,
        StorybookWrapper: () => da,
        TextFit: () => la.A,
        ThumbsGallery: () => ua.A,
        TinaModuleFetchNRender: () => ga.A,
        TinaWrapper: () => fa,
        TrackList: () => ma.A,
        UnorderedList: () => pa.A,
        UserVote: () => va,
        VideoCard: () => s,
        VideoCarousel: () => Sa,
        VideoList: () => La,
        VisuallyHidden: () => Ma,
        Wasted: () => za.A,
        framer: () => Va,
        useTinaModuleFetchByIds: () => ga.X,
        withSearchbarErrorBoundary: () => $a,
        withSimpleErrorBoundary: () => Q.A
      });
      var s = {};
      t.r(s), t.d(s, {
        Art: () => xa,
        Link: () => ya
      });
      var r = t(14200),
        i = t(52224),
        n = t(16783),
        o = t(42295);
      const c = ({
        brands: e = []
      }) => e.length ? (0, o.jsx)("div", {
        className: "rockstargames-modules-core-newswire-articleb53b6eca487387fc5c2057daf151691a",
        children: e.map((({
          brand: e
        }, a) => (0, o.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlee8c3be7a76fd7e532e74a9fcf87bee09",
          "data-brand": e
        }, a)))
      }) : null;
      var d = t(29625),
        l = t(4572),
        m = t.n(l),
        u = t(26732);
      const g = ({
        buttons: e = [],
        className: a
      }) => e.length ? (0, o.jsx)("div", {
        className: m()("rockstargames-modules-core-newswire-articlebbd74dec556da7f5c06710c72c662f8a", a),
        children: e.map((({
          icon: e,
          title: a,
          to: t
        }, s) => a ? (0, o.jsx)(u.A, {
          icon: e,
          text: a,
          to: t
        }, s) : ""))
      }) : null;
      var f = t(24769),
        p = t(91),
        b = t(62229),
        k = t(9623),
        v = t(95966),
        w = t(2918);
      const h = (0, t(71282).FF)(),
        _ = e => e.some((e => !e)),
        x = ({
          condition: e = null,
          children: a
        }) => {
          const [t, s] = (0, b.useState)(!1), r = (e => {
            const [a] = (0, k.useSearchParams)(), [t, s] = (0, b.useState)(null), r = (0, w.useRockstarUser)(), {
              loggedIn: i,
              data: n
            } = r, {
              hasGtaPlus: o
            } = n ?? {};
            return (0, b.useEffect)((() => {
              const t = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              h.applyFilters("preview_conditions", e);
              const r = [];
              return e.forEach((e => {
                const {
                  value: s
                } = e;
                if (t) return "true" === a.get(s) ? (r.push(!0), !0) : (r.push(!1), !1);
                if (_(r)) return !1;
                switch (s) {
                  case "user:is:loggedIn":
                    r.push(!0 === i);
                    break;
                  case "user:not:loggedIn":
                    r.push(!1 === i);
                    break;
                  case "user:is:gtaPlus":
                    r.push(!0 === o);
                    break;
                  case "user:not:gtaPlus":
                    r.push(!1 === o || void 0 === o);
                    break;
                  default:
                    r.push(!1)
                }
                return null
              })), s(!_(r)), () => {}
            }), [a, e, o, r, i]), t
          })(e);
          return (0, b.useEffect)((() => {
            s(r)
          }), [r]), (0, b.useMemo)((() => t ? a : null), [t])
        },
        y = (0, v.withTranslations)((({
          children: e
        }) => b.Children.map(b.Children.toArray(e), (e => (0, o.jsx)(x, {
          ...e?.props
        })))));
      var N = t(46209),
        j = t(22691),
        S = t(48303),
        T = t.n(S);
      const C = ({
        isMulti: e,
        allowSelectAll: a,
        label: t,
        miscProps: s
      }) => {
        const [r, i] = (0, b.useState)(""), n = (0, b.useMemo)((() => T()().getData()), []);
        return (0, o.jsx)(j.Ay, {
          unstyled: !0,
          value: r,
          isMulti: e,
          allowSelectAll: a,
          options: n,
          placeholder: t,
          onChange: e => {
            return a = e?.target?.value, void i(a);
            var a
          },
          classNamePrefix: "country-select",
          ...s
        })
      };
      var E = t(12914);
      const P = ({
        cookieName: e,
        cookieValue: a,
        trueComponent: t,
        falseComponent: s
      }) => {
        const r = (e => {
            const a = document.cookie.split("; "),
              t = `${e}=`,
              s = a.find((e => e.startsWith(t)));
            return s?.substring(t.length, s.length)
          })(e),
          i = new URLSearchParams(window.location.search).get(e);
        return i && ((e, a) => {
          e && a && (document.cookie = `${e}=${a}; domain=${(0,E.F)()}; path=/;`)
        })(e, i), r === a || i === a ? t : s
      };
      var A = t(10245),
        I = t(26708),
        L = t(84927);
      const M = "rockstargames-modules-core-newswire-articlea19bcd2b98d91e60c43b9de146e20f4e",
        z = ({
          color: e
        }) => (0, o.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlee83fe07aa054242e9023d2f9e7a3fd25",
          style: {
            "--loader-color": e
          },
          children: [(0, o.jsx)("div", {
            className: M
          }), (0, o.jsx)("div", {
            className: M
          }), (0, o.jsx)("div", {
            className: M
          })]
        });
      var D = t(51673),
        F = t.n(D);
      const $ = {
          dropdownWrapper: "rockstargames-modules-core-newswire-articlebbf48ac7e790ff47ad1d5ee6fb7da4d9",
          items: "rockstargames-modules-core-newswire-articlea9afd60434d032bdba4ce040dbeb13b7",
          open: "rockstargames-modules-core-newswire-articledf17f0cb21e0947d4f391f915bd797d2",
          opener: "rockstargames-modules-core-newswire-articlecb53c003fd165ccb31dee0f32edca90f",
          secondary: "rockstargames-modules-core-newswire-articlefe6babf9fc35bb59a2b5225e4d6e7a50"
        },
        V = ({
          children: e,
          className: a,
          title: t
        }) => {
          const [s, r] = (0, b.useState)(!1);
          let i = null;
          return i = F(), (0, o.jsx)(i, {
            active: s,
            focusTrapOptions: {
              onDeactivate: () => r(!1),
              clickOutsideDeactivates: !0
            },
            children: (0, o.jsxs)("div", {
              className: [$.dropdownWrapper, s ? $.open : "", void 0 !== a ? a : ""].join(" "),
              children: [(0, o.jsx)("button", {
                className: $.opener,
                onClick: () => r(!s),
                children: t
              }), s && (0, o.jsx)("div", {
                className: $.items,
                onClick: () => r(!1),
                children: e
              })]
            })
          })
        };
      var B = t(20837);
      const O = ({
          caption: e,
          children: a,
          ...t
        }) => e ? (0, o.jsxs)("figure", {
          ...t,
          children: [a, (0, o.jsx)("figcaption", {
            dangerouslySetInnerHTML: {
              __html: e
            }
          })]
        }) : a,
        G = ({
          componentTitle: e,
          type: a,
          items: t
        }) => t?.length ? (0, o.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articleaee2a98f97e777758e2d9bec034314ee",
          type: a,
          children: (0, o.jsxs)(B.A, {
            children: [e && (0, o.jsx)("h3", {
              children: e
            }), (0, o.jsx)(B.A, {
              className: "rockstargames-modules-core-newswire-articledba17b5c55f8d40e2600765f1a60d6af",
              children: t.map(((e, a) => {
                return e?.embed ? (0, o.jsx)(O, {
                  caption: e?.caption,
                  children: (0, o.jsx)("div", {
                    className: "rockstargames-modules-core-newswire-articlef0cd8278232673606f9c1715bd4950f6",
                    dangerouslySetInnerHTML: {
                      __html: (t = e.embed, t.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                    }
                  }, `${e?.key??a}_div`)
                }, e?.key ?? a) : e?.text ? (0, o.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: e.text
                  }
                }, e?.key ?? a) : void 0;
                var t
              }))
            })]
          })
        }) : null;
      var R = t(98357),
        H = t(1057),
        U = t(16188),
        W = t(61128),
        q = t(7545),
        K = t(24162),
        Q = t(29315);
      const Y = ({
          prevRef: e,
          nextRef: a,
          onNextClicked: t,
          onPrevClicked: s,
          onNextKeyDown: r,
          title: i,
          testId: n
        }) => (0, o.jsxs)("div", {
          "aria-controls": `${i}-carousel`,
          "aria-label": `${i} carousel buttons`,
          className: "rockstargames-modules-core-newswire-articleb8d5ef10008331a9f6d3a6bdf1690d01",
          role: "group",
          "data-testid": `${n}-controls`,
          children: [(0, o.jsx)("button", {
            className: "rockstargames-modules-core-newswire-articlec38cd500d52d07bd012e288dc0b4f635",
            ref: e,
            onClick: s,
            "aria-label": "Previous"
          }), (0, o.jsx)("button", {
            className: "rockstargames-modules-core-newswire-articleb24ada0f7959966c6d950567eaaafce2",
            ref: a,
            onClick: t,
            onKeyDown: r,
            "aria-label": "Next"
          })]
        }),
        X = (0, Q.A)((({
          description: e,
          slideChildren: a,
          size: t,
          title: s,
          name: r,
          customSlidesPerView: i = null,
          customSpaceBetween: n = null,
          slideClass: c,
          style: d,
          className: l,
          cardSizeBreakpoints: u,
          customAspectRatio: g,
          titleBadge: f,
          theme: p
        }) => {
          const {
            track: k
          } = (0, w.useGtmTrack)(), v = (0, b.useRef)(null), h = (0, b.useRef)(null), _ = (0, b.useRef)(null), [x, y] = (0, b.useState)(null), [N, j] = (0, b.useState)(!1), [S, T] = (0, b.useState)(null), [C, E] = (0, b.useState)(), [P, A] = (0, b.useState)(), {
            ref: I,
            inView: L
          } = (0, W.useInView)({
            threshold: .6
          }), [M, z] = (0, b.useState)(!1), [D, F] = (0, b.useState)(null), [$, V] = (0, b.useState)(!1), [B, O] = (0, b.useState)(0), [G, R] = (0, b.useState)(0);
          (0, b.useEffect)((() => {
            const e = () => {
              V(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, b.useEffect)((() => {
            const e = () => {
              C && !(0, U.isEmpty)(C) && C?.height > 0 && C?.height !== B && O(C?.height)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [C]);
          const H = {
            0: {
              spaceBetween: n ?? 16
            },
            1024: {
              spaceBetween: n ?? 18
            },
            1920: {
              spaceBetween: n ?? 20
            },
            2560: {
              spaceBetween: n ?? 22
            }
          };
          (0, b.useEffect)((() => {
            if (!v.current) return;
            const e = () => {
              if (v.current) {
                const e = i || Number(window.getComputedStyle(v.current).getPropertyValue("--slides-per-view")),
                  a = i ? 1 : Number(window.getComputedStyle(v.current).getPropertyValue("--slides-per-view-multiplier"));
                T(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [v, i]), (0, b.useEffect)((() => {
            if (!a) return;
            let e = !1;
            a.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, F(a))
            })), z(e);
            const t = a.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && $ ? null : (0, o.jsx)(K.qr, {
              className: "rockstargames-modules-core-newswire-articlead67cb8db28ddf18d185f85a3d54b06f",
              onFocus: () => J(a),
              role: "button",
              children: e
            }, e.key)));
            y(t)
          }), [a, $]), (0, b.useEffect)((() => {
            A({
              nextEl: _.current,
              prevEl: h.current
            })
          }), [_, h]), (0, b.useEffect)((() => {
            L && !N && a && (k({
              event: "page_section_impression",
              element_placement: (r || s).toLowerCase()
            }), j(!0))
          }), [L, a]);
          let Q = "custom" === t ? {
            "--custom-aspect-ratio": g,
            ...d
          } : {
            ...d
          };
          const X = 0 !== B ? `${B}px` : "100%";
          Q = {
            ...Q,
            "--carousel-cards-height": X,
            "--carousel-nav-opacity": G
          };
          const J = e => {
              C?.slideTo(e)
            },
            Z = `${s.trim().toLowerCase().replace(/\s+/g,"-")}-deck`;
          return (0, o.jsxs)("section", {
            "aria-label": s,
            className: m()("rockstargames-modules-core-newswire-articlef20b52f7c3f9003cd00811a47a04bf10", l),
            "data-size": t,
            "data-testid": Z,
            "data-sm": u?.sm ? u?.sm : t,
            "data-md": u?.md ? u?.md : t,
            "data-lg": u?.lg ? u?.lg : t,
            "data-xl": u?.xl ? u?.xl : t,
            "data-xxl": u?.xxl ? u?.xxl : t,
            "data-has-covercard": M,
            "data-new-carousel-nav": !0,
            id: `${s}-carousel`,
            "data-theme": p,
            ref: v,
            style: Q,
            children: [(0, o.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleaeafe767d91d07fab61f307b5bbffeef",
              ref: I
            }), M && $ && (0, o.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articledef6705cfe82c4e562f3c71c78bc5248",
              children: D
            }), (0, o.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleb093fac5b0d056a4a00f34d0418c6577",
              children: (0, o.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articledcef10ca0aa4165afec829cc4474b8b7",
                children: [(0, o.jsxs)("div", {
                  className: "rockstargames-modules-core-newswire-articleb83b41754b7e9ac95c806264014db990",
                  children: [!M && s && (0, o.jsxs)("div", {
                    className: "rockstargames-modules-core-newswire-articlec8e04a547988dacbae8960776862f15f",
                    children: [(0, o.jsx)("h2", {
                      children: s
                    }), f && (0, o.jsx)("span", {
                      className: "rockstargames-modules-core-newswire-articlec3de2db74771fdba023cc2b11b216955",
                      children: f
                    })]
                  }), (0, o.jsx)(Y, {
                    prevRef: h,
                    nextRef: _,
                    onNextClicked: () => {},
                    onPrevClicked: () => {},
                    onNextKeyDown: e => {
                      if ("Tab" === e.key && !e.shiftKey) {
                        const a = C?.slides[C?.activeIndex].querySelector('a, button, [role="button"]');
                        a && a?.tabIndex > -1 && (e.preventDefault(), a.focus())
                      }
                    },
                    title: s,
                    theme: p
                  })]
                }), e && (0, o.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlea1497e1cd7844ff158955c0afe2fd3b8",
                  dangerouslySetInnerHTML: {
                    __html: e
                  }
                })]
              })
            }), S ? (0, o.jsx)(K.RC, {
              slidesPerView: S,
              onInit: e => {
                E(e);
                const a = setInterval((() => {
                  const {
                    height: t
                  } = e;
                  t > 0 && (O(t), R(1), clearInterval(a))
                }), 500)
              },
              grabCursor: !0,
              navigation: P,
              modules: [q.Vx],
              breakpoints: H,
              slideClass: m()("swiper-slide", c),
              onSlideNextTransitionEnd: () => {
                k({
                  event: "carousel_next",
                  element_placement: s?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                k({
                  event: "carousel_previous",
                  element_placement: s?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                k({
                  event: "carousel_swipe",
                  element_placement: s?.toLowerCase() ?? ""
                })
              },
              children: x
            }) : ""]
          })
        }), null);
      var J = t(22557),
        Z = t(92440);
      const ee = {
          background: "rockstargames-modules-core-newswire-articlec8c90210c344650ad11d2d97258dcaab",
          btnText: "rockstargames-modules-core-newswire-articlee8ca7c699fe44c30cf4e542ee8b22119",
          buttonGroup: "rockstargames-modules-core-newswire-articleb8a0dc337c7ea835340f88b0f6d14822",
          content: "rockstargames-modules-core-newswire-articlee4bb4024fb4b167423f58e02e471bf5e",
          ctaBlock: "rockstargames-modules-core-newswire-articlec3f1f785f5adb5cfcbf93195e21521e6",
          descriptions: "rockstargames-modules-core-newswire-articlea54e628f4898aed20e45ad8a5e39af7f",
          gradient: "rockstargames-modules-core-newswire-articled074051a93eac66cd56c616c8ccd4c91",
          hero: "rockstargames-modules-core-newswire-articledccb6453f49a8e81c4ec407c39df4c79",
          images: "rockstargames-modules-core-newswire-articled5fdc650fc4f2f7441ce7c563ae9653e",
          layered: "rockstargames-modules-core-newswire-articlec58f0111e3765dc6116481764d0431d0",
          legalText: "rockstargames-modules-core-newswire-articlebdbadc8b5ef295a4122905fffdde18f6",
          pillBtn: "rockstargames-modules-core-newswire-articleb89f190ffa4d32a33304ffa4b5ff73df",
          primaryBtn: "rockstargames-modules-core-newswire-articled273ee25efe0a98d789db801a1a18e97",
          secondaryBtn: "rockstargames-modules-core-newswire-articleaf112e1264860cebe9be5f542d47ec27",
          selected: "rockstargames-modules-core-newswire-articleb5c12cc9810c7b3774102378f71714a1",
          shardsCarousel: "rockstargames-modules-core-newswire-articlecd8c6fbe5139a661c2e52e9df726ca78",
          verticalCtaBlock: "rockstargames-modules-core-newswire-articlede8ee9092175484396cd56d19aec7cbd"
        },
        ae = {
          visible: {
            opacity: 1,
            transition: {
              ease: [.5, 0, 0, 1],
              duration: .75,
              when: "beforeChildren",
              delayChildren: .25,
              staggerChildren: .1
            }
          },
          hidden: {
            opacity: 0
          }
        },
        te = {
          visible: {
            opacity: 1,
            y: 0,
            height: "100%",
            overflow: "hidden",
            transition: {
              ease: [.5, 0, 0, 1],
              duration: .75
            }
          },
          hidden: {
            opacity: 0,
            y: 100,
            height: "0%",
            overflow: "hidden"
          }
        },
        se = ({
          title: e = "",
          mobileImg: a,
          desktopImg: t
        }) => {
          const s = (0, Z.useGetCdnSource)(a ?? null),
            r = (0, Z.useGetCdnSource)(t ?? s);
          return (0, o.jsx)("div", {
            className: ee.shard,
            style: {
              "--background-image-mobile": `url(${s})`,
              "--background-image-desktop": `url(${r})`
            },
            children: (0, o.jsx)("h5", {
              children: e
            })
          })
        },
        re = ({
          title: e = "Membership Rewards",
          name: a = "Membership Rewards",
          shards: t
        }) => {
          const [s, r] = (0, b.useState)(null);
          return (0, b.useEffect)((() => {
            t && r(t.reduce(((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: t,
                shardImg: s
              } = a, {
                mobile: r,
                desktop: i
              } = s;
              return e.push((0, o.jsx)(se, {
                title: t,
                mobileImg: r?.full_src,
                desktopImg: i?.full_src
              })), e
            }), []))
          }), [t]), s ? (0, o.jsx)("div", {
            className: ee.shardsCarousel,
            children: (0, o.jsx)(X, {
              title: e,
              name: a,
              slideChildren: s,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        ie = ({
          animated: e = !1,
          ctas: a = [],
          expandingButtonLabel: t = "Subscribe"
        }) => {
          const [s, r] = (0, b.useState)([]), [i, n] = (0, b.useState)([]);
          return (0, b.useEffect)((() => {
            const {
              expandingButtonsArray: e,
              plainButtonsArray: t
            } = a.reduce(((e, a) => (a.isInExpandingButton ? e.expandingButtonsArray.push({
              href: a.href,
              platform: a.platform,
              buttonText: a.buttonText
            }) : e.plainButtonsArray.push({
              icon: a.platform ?? "",
              title: a.buttonText,
              to: a.href
            }), e)), {
              expandingButtonsArray: [],
              plainButtonsArray: []
            });
            r(e), n(t)
          }), [a]), s.length ? (0, o.jsx)(J.P.div, {
            variants: e ? te : void 0,
            children: (0, o.jsx)(R.A, {
              variant: "gen9",
              buttonText: t,
              platformsAndLinks: s,
              children: !!i.length && (0, o.jsx)(J.P.div, {
                variants: te,
                children: (0, o.jsx)(g, {
                  buttons: i,
                  className: ee.buttonGroup
                })
              })
            })
          }) : (0, o.jsx)(o.Fragment, {
            children: !!i.length && (0, o.jsx)(J.P.div, {
              variants: te,
              children: (0, o.jsx)(g, {
                buttons: i,
                className: ee.buttonGroup
              })
            })
          })
        },
        ne = ({
          animated: e = !1,
          brands: a = [],
          cta: t = [],
          ctas: s = [],
          description: r = "",
          expandingButtonLabel: i = "Subscribe",
          legalText: n,
          stackButtons: d,
          title: l = ""
        }) => (0, o.jsxs)(J.P.div, {
          className: ee.content,
          initial: "hidden",
          animate: "visible",
          variants: e ? ae : void 0,
          children: [(0, o.jsx)(J.P.div, {
            variants: e ? te : void 0,
            children: (0, o.jsx)(c, {
              brands: a
            })
          }), (l || r) && (0, o.jsxs)(J.P.div, {
            className: ee.descriptions,
            variants: e ? te : void 0,
            children: [l && (0, o.jsx)("h2", {
              dangerouslySetInnerHTML: {
                __html: l
              }
            }), r && (0, o.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: r
              }
            })]
          }), !!t.length && (0, o.jsx)("div", {
            className: d ? ee.verticalCtaBlock : ee.ctaBlock,
            children: (0, o.jsx)(Z.TinaParser, {
              components: {
                Cta: A.A,
                ExpandingPlatformButton: R.A
              },
              tina: {
                payload: {
                  content: t
                }
              }
            })
          }), !!s.length && (0, o.jsx)("div", {
            className: ee.ctaBlock,
            children: (0, o.jsx)(ie, {
              animated: e,
              ctas: s,
              expandingButtonLabel: i
            })
          }), n && (0, o.jsx)(J.P.div, {
            className: ee.legalText,
            variants: e ? te : void 0,
            children: (0, o.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: n
              }
            })
          })]
        }),
        oe = ({
          animated: e = !1,
          backgroundImage: a,
          brands: t = [],
          className: s,
          ctas: r = [],
          cta: i,
          description: n = "",
          expandingButtonLabel: c = "Subscribe",
          layeredImage: d,
          layeredImageSettings: l,
          legalText: u,
          shardsSection: g = {},
          stackButtons: f = !1,
          theme: p = "gen9",
          title: k = ""
        }) => {
          const {
            breakpoints: w,
            windowWidth: h
          } = (0, v.useWindowResize)(), _ = w.xxl.min, x = (e => {
            if (!e) return null;
            const a = {},
              t = new Map([
                ["xsmall", "xs"],
                ["small", "sm"],
                ["medium", "md"],
                ["large", "lg"],
                ["xlarge", "xl"],
                ["horizontal", "--layered-horizontal-offset-"],
                ["vertical", "--layered-vertical-offset-"],
                ["imageWidth", "--layered-image-width-"]
              ]);
            return Object.entries(e).forEach((e => {
              const [s, r] = e;
              if (t.has(s)) {
                const e = t.get(s);
                Object.entries(r).forEach((r => {
                  const [i, n] = r;
                  if (t.has(s) && t.has(i)) {
                    const s = `${t.get(i)}${e}`;
                    a[s] = "imageWidth" !== i ? n ? `${n}px` : "0px" : n ? `${n}vw` : "100vw"
                  }
                }))
              }
            })), a
          })(l), y = (0, Z.useGetCdnSource)(a?.mobile?.full_src ?? null), N = (0, Z.useGetCdnSource)(a?.desktop?.full_src ?? y), j = (0, Z.useGetCdnSource)(d?.mobile?.full_src ?? null), S = (0, Z.useGetCdnSource)(d?.desktop?.full_src ?? j), T = (0, b.useMemo)((() => {
            const {
              mobileStyle: e,
              desktopStyle: t,
              style: s
            } = a ?? {};
            return {
              ...s,
              ...h >= _ ? (0, v.safeStyles)(t) : (0, v.safeStyles)(e)
            }
          }), [h, a?.style, a?.mobileStyle, a?.desktopStyle]);
          return (0, o.jsxs)(J.P.div, {
            className: m()(ee.hero, s),
            style: {
              "--background-image-desktop": `url(${N})`,
              "--background-image-mobile": `url(${y})`,
              "--layered-image-desktop": `url(${S})`,
              "--layered-image-mobile": `url(${j})`
            },
            initial: "hidden",
            animate: "visible",
            variants: e ? ae : void 0,
            "data-type": "hero",
            theme: p,
            children: [(0, o.jsxs)("div", {
              className: ee.images,
              children: [N && y ? (0, o.jsx)("div", {
                className: ee.background,
                style: T ?? {}
              }) : "", j && S ? (0, o.jsx)("div", {
                className: ee.layered,
                style: l ? x : {}
              }) : "", (0, o.jsx)("div", {
                className: ee.gradient
              })]
            }), (0, o.jsx)(ne, {
              animated: e,
              brands: t,
              cta: i,
              ctas: r,
              description: n,
              expandingButtonLabel: c,
              legalText: u,
              stackButtons: f,
              title: k
            }), g?.shards && (0, o.jsx)(re, {
              ...g
            })]
          })
        };
      var ce = t(62312),
        de = t(4407);
      const le = {
          "bg-img": "rockstargames-modules-core-newswire-articleae25e5bf6793a5522c791028f396dedd",
          border: "rockstargames-modules-core-newswire-articleaf6154339558ed7e6e46014575250492",
          "bottom-y": "rockstargames-modules-core-newswire-articled66e5203a7bd3c85b99e6caef49b2e9b",
          "center-x": "rockstargames-modules-core-newswire-articlecc06519a4a0d2db824b70a425c8cefd6",
          "center-y": "rockstargames-modules-core-newswire-articled6ce82f1bd5cbf6b4abe650a2738c723",
          contain: "rockstargames-modules-core-newswire-articlec409c9fefffbfffd091f81bdd75ab8a6",
          cover: "rockstargames-modules-core-newswire-articlea72cf62465acbddecc3a2cb256640fac",
          dual: "rockstargames-modules-core-newswire-articleb9c969b033c5016f95d5a70ceea22071",
          fill: "rockstargames-modules-core-newswire-articlec12eb7986b09f10158c48ad4a902f2ef",
          "hero-lg": "rockstargames-modules-core-newswire-articleb722bba74c792beb73ccdfec4506b591",
          "hero-md": "rockstargames-modules-core-newswire-articlec6b26605a3817704bbf427741edb98f8",
          "hero-sm": "rockstargames-modules-core-newswire-articlee7b70cd5245ee850b5a2bfd048fa02c4",
          imageLayer: "rockstargames-modules-core-newswire-articlea63d213c123e7da5863c6256e847eb0f",
          "layer-lg-height": "rockstargames-modules-core-newswire-articlea206e14a6e055900c30ee67826330173",
          "layer-lg-width": "rockstargames-modules-core-newswire-articlefb58e41629b31453b12d8bbcc525608f",
          "layer-md-height": "rockstargames-modules-core-newswire-articlee2a2cf239dc64e006fdc9c2c3d280b8e",
          "layer-md-width": "rockstargames-modules-core-newswire-articlef1d2c109e21746d5fa00c85e56e61b10",
          "layer-sm-height": "rockstargames-modules-core-newswire-articlec947fc08bb64674c4bf0429e7914507e",
          "layer-sm-width": "rockstargames-modules-core-newswire-articlea1289245dc6b1854c3aec5b1a8a11593",
          "layer-xl-height": "rockstargames-modules-core-newswire-articlea4d21457b55a0626d1cf5170845ba8d6",
          "layer-xl-width": "rockstargames-modules-core-newswire-articlee5ecbec181677eea6c9c72e02580c501",
          "layer-xs-height": "rockstargames-modules-core-newswire-articled0f6abd48b388b8e3b18eee4bc19039d",
          "layer-xs-width": "rockstargames-modules-core-newswire-articlec60b1a515049d3f670d8c5a76c8a1bf6",
          "layer-xxl-height": "rockstargames-modules-core-newswire-articled74cf249eb57fb6682f07fe13fdfdb4a",
          "layer-xxl-width": "rockstargames-modules-core-newswire-articleac03c56e2475aecafc08e873eed26566",
          layeredImage: "rockstargames-modules-core-newswire-articlefb27e7361e78dacdcf500e0b9a2b4fce",
          layersWrapper: "rockstargames-modules-core-newswire-articleaf169afca6f741daca0331a1b13fa5f1",
          "left-x": "rockstargames-modules-core-newswire-articlebb4dd9e1570a80cc01f752a2230abdac",
          "right-x": "rockstargames-modules-core-newswire-articled50c0c4bee9b09502dd611543223ed37",
          shards: "rockstargames-modules-core-newswire-articlea0d1e1b5705f11b3b9301717bc5f6245",
          shards_three: "rockstargames-modules-core-newswire-articlecf01ef76b0d5cc2a7bc4f005be4eb31f",
          shards_two: "rockstargames-modules-core-newswire-articlef317b17c9b0f0a27ed95ec2844857f25",
          "top-y": "rockstargames-modules-core-newswire-articlea9cd0a03e7193a5b47c6e767e045a1ec"
        },
        me = ({
          style: e,
          className: a
        }) => {
          const t = {
              ...e
            },
            s = e["--border-image-source"],
            r = (0, Z.useGetCdnSource)(s || null);
          return s && (t["--border-image-source"] = `url(${r})`), (0, o.jsx)("div", {
            className: m()(le.border, a),
            style: {
              ...t
            }
          })
        },
        ue = e => e?.images ? (0, o.jsx)("div", {
          className: m()(le.layeredImage, le[e?.variantClass], le[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, o.jsxs)("div", {
            className: le.layersWrapper,
            children: [e?.images?.map(((e, a) => {
              const {
                image: t,
                paddingClass: s,
                imageSizeClass: r,
                objectFitClass: i,
                positionClassX: n,
                positionClassY: c,
                zIndex: d,
                className: l,
                style: u,
                alt: g,
                displayClass: f
              } = e;
              return (0, o.jsx)(de.A, {
                image: t,
                style: {
                  zIndex: d ?? a + 1
                },
                imageStyle: u,
                className: m()(l, f, le.imageLayer, le[s], le[r], le[i], le[n], le[c]),
                alt: g
              }, d ?? a + 1)
            })), e?.borderImage && (0, o.jsx)(me, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null;
      var ge = t(69190),
        fe = t(34725);
      const pe = e => {
        const {
          image: a,
          thumbnail: t,
          style: s,
          showOpenButtonMobile: r,
          showOpenButton: i,
          showDownloadButtonMobile: n,
          showDownloadButton: c
        } = e, d = (0, v.useLocale)(), {
          isMobile: l
        } = (0, v.useWindowResize)(), m = a?.sources ?? {}, u = t?.image?.sources ?? {}, g = (0, fe.C1)(m?.[d] ?? m?.en_us) ?? "", f = (0, fe.C1)(u?.[d] ?? u?.en_us) ?? g, p = {
          ...t,
          ...e,
          src: g,
          thumbnail: f,
          showOpenButton: l ? r : i,
          showDownloadButton: l ? n : c
        };
        return (0, o.jsx)("div", {
          style: s,
          className: "rockstargames-modules-core-newswire-articleadbaa0167219cd891249a29faec00e8f",
          children: (0, o.jsx)(ge.Lightbox, {
            ...p
          })
        })
      };
      var be = t(10632);
      const ke = {
          animatePlaceholder: "rockstargames-modules-core-newswire-articlef6f51dbe7c2f79f974e9573386bba9da",
          "loader-keyframes": "rockstargames-modules-core-newswire-articlec3684b80c99c860036d9337843a7be58",
          multiSourceContainer: "rockstargames-modules-core-newswire-articlea99f18f8581cc9aeafa5111379885ee6",
          multiSourceImage: "rockstargames-modules-core-newswire-articlebc42c525ec0bd93df46e1999e278e9fb",
          pillBtn: "rockstargames-modules-core-newswire-articlec79dd3a7e7c5c11adfd19c623716576f",
          selected: "rockstargames-modules-core-newswire-articlec53675ad15e2ef662362850daab33791"
        },
        ve = ({
          imageUrl: e,
          className: a,
          alt: t,
          style: s,
          lazy: r = !1,
          decoding: i = "auto",
          sizes: n = [320, 480, 768, 1024, 1440, 1920, 2560]
        }) => {
          const [c, d] = (0, b.useState)(!1);
          return (0, o.jsxs)("div", {
            className: ke.multiSourceContainer,
            children: [!c && (0, o.jsx)("img", {
              className: [a, ke.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: s
            }), (0, o.jsx)("img", {
              className: [ke.multiSourceImage, a].join(" "),
              src: `${e}?im=Resize=1920`,
              srcSet: (l = e, n.map((e => `${l}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: t ?? "Multi-Source Image",
              style: s,
              onLoad: () => {
                d(!0)
              },
              loading: r ? "lazy" : "eager",
              decoding: i
            })]
          });
          var l
        },
        we = ({
          button: e,
          closeDialog: a,
          style: t = "primary"
        }) => {
          const {
            buttonIcon: s,
            buttonText: r,
            extraClasses: i,
            isDisabled: n,
            isLink: c,
            link: d,
            onClick: l,
            testId: u
          } = e;
          return c ? r && (0, o.jsx)(ge.Button, {
            asChild: !0,
            appearance: t,
            size: "MD",
            children: (0, o.jsx)("a", {
              href: d,
              ...u && {
                "data-testid": u
              },
              children: r
            })
          }) : (0, o.jsx)(ge.Button, {
            autoFocus: !0,
            iconRight: s,
            className: m()(i),
            isDisabled: n,
            onPress: e => (e => {
              l && l(), a && a(), "function" == typeof e?.stopPropagation && e?.stopPropagation()
            })(e),
            type: "button",
            appearance: t,
            "aria-label": r,
            ...u && {
              "data-testid": u
            },
            children: r
          })
        },
        he = {
          actions: "rockstargames-modules-core-newswire-articled35d1125eabb9ae0e941bd585003c4fc",
          check: "rockstargames-modules-core-newswire-articleb63b9588fb98b439d19028797670c6c5",
          content: "rockstargames-modules-core-newswire-articleefe65f5c39de5d044fdc6b13c1771125",
          dialog: "rockstargames-modules-core-newswire-articled2c9ef0a70d425745a27c169c594199a",
          error: "rockstargames-modules-core-newswire-articlef654f7a2bf475a939f8c05fb569bfd5e",
          "fade-in": "rockstargames-modules-core-newswire-articlee30057881578a38b5dc6f50854c6b56d",
          heading: "rockstargames-modules-core-newswire-articledab9a8f190197c99405cebe1e9a992d6",
          icon: "rockstargames-modules-core-newswire-articlebc1e57fee27452c58670e4f60e492246",
          mail: "rockstargames-modules-core-newswire-articleb120386c4c2485c587f87173721d63be",
          message: "rockstargames-modules-core-newswire-articlef7cd64be4f94a272222f88f34789734a",
          pillBtn: "rockstargames-modules-core-newswire-articleb403f298c2eff00899432c93daa15aec",
          selected: "rockstargames-modules-core-newswire-articlea6cab397bf3a16564fcc531ef4c16130",
          "slide-up": "rockstargames-modules-core-newswire-articleb2b3117a07a11b3ec5897e4718e24373"
        },
        _e = ({
          icon: e,
          title: a,
          secondaryText: t,
          buttons: s,
          showDialog: r,
          onClose: i = () => {},
          closeOnOutsideClick: n = !0,
          extraClasses: c
        }) => {
          const d = (0, b.useRef)(null),
            {
              setBodyIsLocked: l
            } = (0, v.useBodyScrollable)("AlertDialog");
          (0, b.useEffect)((() => {
            r && d?.current && (d.current?.showModal?.(), l(!0))
          }), [r]);
          const m = () => {
            l(!1), i(), d.current?.close?.()
          };
          if (r) return (0, o.jsxs)("dialog", {
            ref: d,
            className: he.dialog,
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const a = e.currentTarget.getBoundingClientRect();
              (a.left > e.clientX || a.right < e.clientX || a.top > e.clientY || a.bottom < e.clientY) && n && (l(!1), i(), e.currentTarget.close())
            })(e),
            "data-testid": "alert-dialog",
            children: [e && (0, o.jsx)("i", {
              className: [he.icon, he[e]].join(" ")
            }), (0, o.jsxs)("div", {
              className: [he.content, c?.content].join(" "),
              children: [(0, o.jsx)("h3", {
                className: [he.heading, c?.heading].join(" "),
                children: a
              }), t && (0, o.jsx)("div", {
                className: [he.message, c?.message].join(" "),
                dangerouslySetInnerHTML: {
                  __html: t
                }
              })]
            }), s && (0, o.jsx)("div", {
              className: he.actions,
              children: s.slice(0, 2).map(((e, a) => (0, o.jsx)(we, {
                style: e?.style ?? (0 === a ? "primary" : "secondary"),
                button: e,
                closeDialog: m
              }, e.buttonText)))
            })]
          })
        };
      var xe = t(13989),
        ye = t(96566),
        Ne = t(46368),
        je = t.n(Ne);
      const Se = (0, v.withTranslations)((({
        section: e = "",
        relativeTo: a = "",
        tagId: t = null,
        metaUrl: s = "/newswire",
        t: r
      }) => {
        const i = (0, v.useLocale)(),
          {
            track: n
          } = (0, w.useGtmTrack)(),
          [c, l] = (0, k.useSearchParams)(),
          {
            tagId: m = null
          } = (0, k.useParams)(),
          [u, g] = (0, b.useState)(m ?? t ?? c.get("tag_id")),
          [f, p] = (0, b.useState)(1),
          [h, _] = (0, b.useState)(20),
          [x, y] = (0, b.useState)([]),
          [N, j] = (0, b.useState)(null),
          [S, {
            loading: T,
            data: C
          }] = (0, ye._l)(je(), {
            variables: {
              tagId: Number(u),
              page: f,
              metaUrl: s,
              limit: h,
              locale: i
            }
          });
        return (0, b.useEffect)((() => {
          p(1), y([]), _(20), g(m ?? t ?? c.get("tag_id")), S()
        }), [c.get("tag_id"), m, t]), (0, b.useEffect)((() => {
          const e = x;
          C?.posts?.paging && j(C?.posts?.paging), C?.posts?.results && y(e.concat(C?.posts?.results))
        }), [C]), (0, b.useEffect)((() => {
          (() => {
            const e = c.get("page"),
              a = Number(e ?? 1);
            _(20 * a), S()
          })()
        }), []), x.length ? (0, o.jsxs)("div", {
          "data-testid": "newswire-list",
          children: [(0, o.jsx)(Pe, {
            section: e,
            posts: x,
            relativeTo: a,
            noSpecialOrder: null !== u
          }), null !== N && N.nextPage ? (0, o.jsx)(d.A, {
            className: "rockstargames-modules-core-newswire-articlee125d510192feb4ce2844cb97084b838",
            "data-testid": "more-stories",
            onClick: e => {
              const a = c.get("page"),
                t = Number(a ?? f) + 1;
              p(t), 20 !== h && _(20), S(), l({
                page: String(t)
              }, {
                replace: !0
              }), n({
                event: "cta_learn",
                text: "more stories",
                element_placement: "newswire"
              })
            },
            disabled: T,
            context: "secondary",
            children: r("More Stories")
          }) : ""]
        }) : null
      }));
      var Te = t(51434),
        Ce = t(23395);
      const Ee = {
          newswireBlocks: "rockstargames-modules-core-newswire-articleea687097d9239d4830bc03090f0116f2",
          noSpecialOrder: "rockstargames-modules-core-newswire-articled301334a72b626f8cc2f5b9733299e76"
        },
        Pe = (0, v.withGtmTracking)((({
          section: e = "",
          noSpecialOrder: a = !1,
          posts: t,
          gtmTrack: s,
          relativeTo: r
        }) => {
          const [i, n] = (0, b.useState)(null);
          return (0, b.useEffect)((() => {
            if (!t.length) return;
            const a = {
              event: "view_item_list",
              ecommerce: {
                impressions: []
              }
            };
            t.map(((t, s) => {
              a.ecommerce.impressions.push({
                name: t.title,
                id: t.id,
                position: s + 1,
                list: e
              })
            })), s(a), n(t.length)
          }), [t.length]), (0, o.jsx)("div", {
            "data-testid": "newswire-blocks-container",
            className: [Ee.newswireBlocks, a ? Ee.noSpecialOrder : "", Ee.contextHome].join(" "),
            children: t.map(((t, s) => (0, o.jsx)(xe.A, {
              section: e,
              index: s,
              noSpecialOrder: a,
              post: t,
              focused: s === i
            }, t.id)))
          })
        }));
      var Ae = t(43582);
      const Ie = "rockstargames-modules-core-newswire-articleb013d77f453d7053bbcf06f173ff326c",
        Le = ({
          children: e,
          data: a,
          onPageUpdate: t,
          page: s,
          className: r
        }) => (0, o.jsx)("a", {
          href: "#",
          className: s === a.page ? `rockstargames-modules-core-newswire-articleb577d5726806ec872ecdb8a46905734f ${r??""}` : "",
          onClick: e => {
            e.preventDefault(), t(s)
          },
          children: e
        }),
        Me = ({
          data: e,
          onPageUpdate: a,
          className: t
        }) => {
          if (1 === e.pageCount) return null;
          const s = new Array(Math.min(e.pageCount, 8)),
            r = Math.max(e.pageCount - 8, 1),
            i = Math.max(2, e.page - 4),
            n = Array.from(s, ((e, a) => a + Math.min(r, i)));
          return (0, o.jsxs)("div", {
            className: `rockstargames-modules-core-newswire-articlee480f25872ae2a8b3fcd1e492d838301 ${t??""}`,
            children: [e.pageCount > 8 ? (0, o.jsxs)(o.Fragment, {
              children: [(0, o.jsx)(Le, {
                data: e,
                onPageUpdate: a,
                page: 1,
                children: "1"
              }), 2 !== n[0] ? (0, o.jsx)("div", {
                className: Ie,
                children: "..."
              }) : ""]
            }) : "", n.map((s => (0, o.jsx)(Le, {
              data: e,
              onPageUpdate: a,
              page: s,
              className: t,
              children: s
            }, s))), e.pageCount > 8 ? (0, o.jsxs)(o.Fragment, {
              children: [n.slice(-1)[0] + 1 < e.pageCount ? (0, o.jsx)("div", {
                className: Ie,
                children: "..."
              }) : "", (0, o.jsx)(Le, {
                data: e,
                onPageUpdate: a,
                page: e.pageCount,
                children: e.pageCount
              })]
            }) : ""]
          })
        };
      var ze = t(68484);
      const De = ({
          children: e
        }) => {
          const {
            parallaxController: a
          } = (0, ze.as)();
          return (0, b.useLayoutEffect)((() => {
            if (!a) return;
            const e = setInterval((() => {
              a.update()
            }), 500);
            return () => clearInterval(e)
          }), [a]), e
        },
        Fe = {
          large: "rockstargames-modules-core-newswire-articlee15ce487b25ba576b6e2b31df308098f",
          medium: "rockstargames-modules-core-newswire-articledfdaa6f63f8e8bd10576fa2debcbc1fc",
          parallaxWrapper: "rockstargames-modules-core-newswire-articlee30c08cf0e042f7fc7bed0c23c0bfb31",
          small: "rockstargames-modules-core-newswire-articlec32a973dbc862a43cc5d4a2aac19ed9b"
        },
        $e = ({
          scrollAxis: e = "vertical",
          size: a = "",
          style: t = {},
          children: s
        }) => (0, o.jsx)(ze.zE, {
          scrollAxis: e,
          children: (0, o.jsx)(De, {
            children: (0, o.jsx)("div", {
              className: m()(Fe.parallaxWrapper, Fe[a]),
              style: t,
              "data-context": "parallax-wrapper",
              children: s ? s.map(((a, t) => (0, b.cloneElement)(a, {
                scrollAxis: e,
                style: {
                  ...a?.props?.style,
                  zIndex: t
                }
              }))) : (0, o.jsx)("div", {})
            })
          })
        }),
        Ve = ({
          layers: e = [],
          displayClass: a = "",
          style: t = {}
        }) => {
          const s = (0, Z.useGenerateCdnSource)();
          if (!e || !e[0]?.image) return null;
          const r = e.map((e => ({
            ...e,
            props: {
              style: {
                ...e.style
              }
            },
            style: void 0,
            image: s(e?.image ?? null)
          })));
          return (0, o.jsx)(ze.y, {
            className: m()("rockstargames-modules-core-newswire-articlec1c689cf47230fa80bccc9b20515d4fa", a),
            layers: r,
            style: t
          })
        },
        Be = "rockstargames-modules-core-newswire-articleae8bfc3f9a519606a95144e64ee454b5",
        Oe = ({
          minOffset: e = 0,
          maxOffset: a = 0,
          scrollAxis: t = "vertical",
          displayClass: s = "",
          style: r = {},
          children: i
        }) => "horizontal" === t ? (0, o.jsx)(ze.kQ, {
          x: [e, a],
          className: m()(Be, s),
          styleOuter: r,
          children: i
        }) : (0, o.jsx)(ze.kQ, {
          y: [e, a],
          className: m()(Be, s),
          styleOuter: r,
          children: i
        }),
        Ge = {
          gradient: "rockstargames-modules-core-newswire-articleb78d3c0bdc9668bb3d318825467177ab",
          left: "rockstargames-modules-core-newswire-articlef4448b69feb648b8b910230c6f873dbd",
          pillBtn: "rockstargames-modules-core-newswire-articleb12cdd53cc59cb42903d11d9fdceca7f",
          promoModule: "rockstargames-modules-core-newswire-articleeabbb5f24c40ef994b612515a0d0f356",
          promoModuleContentContainer: "rockstargames-modules-core-newswire-articleef7d758b0d1515fcebe6cb22271a4688",
          promoModuleImage: "rockstargames-modules-core-newswire-articleb8584eedfbe5a91aaf72c40ec1d619a5",
          promoModuleTextContent: "rockstargames-modules-core-newswire-articleb590150a7ac01a01a493b85b7ea5cf90",
          promoModuleWrapper: "rockstargames-modules-core-newswire-articlede25220583bb9220882329a113f7a5e2",
          right: "rockstargames-modules-core-newswire-articleb69bb02f1c00007e9b4eab8217e2f08e",
          selected: "rockstargames-modules-core-newswire-articlee03b475da5ca3ded74e8c6dfd54fb476"
        },
        Re = ({
          backgroundColor: e,
          brands: a = [],
          description: t = "",
          ctaLabel: s,
          ctaLink: r = "https://rockstargames.com",
          gradient: i = !0,
          image: n,
          imageOrientation: d = "right",
          title: l = "",
          name: m = "",
          style: g,
          _memoq: f
        }) => {
          const [p, k] = (0, b.useState)(!1), {
            ref: v,
            inView: h
          } = (0, W.useInView)({
            threshold: .6
          }), {
            track: _
          } = (0, w.useGtmTrack)(), x = {
            ...g,
            "--promo-background": e ?? "var(--black-200)",
            "--promo-image": `url(${(0,Z.useGetCdnSource)(n)??"var(--promo-background)"})`,
            "--promo-order": "left" === d ? "row" : "row-reverse"
          };
          return (0, b.useEffect)((() => {
            h && !p && (_({
              event: "page_section_impression",
              element_placement: m?.toLowerCase()
            }), k(!0))
          }), [h]), (0, o.jsx)(o.Fragment, {
            children: (0, o.jsx)("div", {
              className: Ge.promoModuleWrapper,
              children: (0, o.jsxs)(J.P.div, {
                className: Ge.promoModule,
                style: {
                  ...x
                },
                initial: {
                  opacity: 0
                },
                whileInView: {
                  opacity: 1
                },
                viewport: {
                  margin: "-20%",
                  once: !0
                },
                transition: {
                  ease: "easeIn",
                  duration: .4
                },
                ref: v,
                children: [(0, o.jsx)("div", {
                  className: [Ge.promoModuleImage, i ? Ge.gradient : "", "left" === d ? Ge.left : Ge.right].join(" ")
                }), (0, o.jsxs)("div", {
                  className: Ge.promoModuleContentContainer,
                  children: [(0, o.jsx)(c, {
                    brands: a,
                    className: Ge.promoModuleBrands
                  }), (0, o.jsxs)("div", {
                    className: Ge.promoModuleTextContent,
                    children: [l && (0, o.jsx)("h3", {
                      children: l
                    }), t && (0, o.jsx)("p", {
                      children: t
                    })]
                  }), s && (0, o.jsx)(u.A, {
                    to: r,
                    text: s,
                    onClick: () => {
                      _({
                        event: "cta_learn",
                        element_placement: "promo module",
                        link_url: r,
                        text: f?.ctaLabel.toLowerCase()
                      })
                    }
                  })]
                })]
              })
            })
          })
        };
      var He = t(81788);
      const Ue = {
          rating: "rockstargames-modules-core-newswire-articlec3e95c84902dd75b827d3c95532e22dc",
          text: "rockstargames-modules-core-newswire-articlebabdd6ae2ff83f380dadc6982effa011",
          withDescriptors: "rockstargames-modules-core-newswire-articleb98963abfc7a63295bebc6c6d15b391a",
          withOutDescriptors: "rockstargames-modules-core-newswire-articleb6339480b5fd086fb0c025930bfb7dcd"
        },
        We = (0, He.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            description: "Ratings link alt text",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var qe = t(95520),
        Ke = t(19732);
      (0, v.importAll)(t(36672));
      const Qe = (0, Q.A)((0, Ke.g)((({
        descriptors: e = null,
        footer: a = null,
        href: s,
        img: i = null,
        titleSlug: n = null,
        style: c = {},
        className: d
      }) => {
        const [l, m] = (0, b.useState)(!1), {
          inView: u
        } = (0, W.useInView)({
          threshold: .6
        }), [g, f] = (0, b.useState)({
          ratingDescriptors: e,
          ratingFooter: a,
          ratingImg: i,
          ratingUrl: s
        }), {
          track: p
        } = (0, w.useGtmTrack)(), k = (0, He.useIntl)(), {
          data: h
        } = (0, v.useQuery)(qe.GameData, {
          variables: {
            titleSlug: n
          },
          skip: !n
        });
        if ((0, b.useEffect)((() => {
            h && f(h?.game)
          }), [h]), (0, b.useEffect)((() => {
            u && !l && g.img_rating && (p({
              event: "page_section_impression",
              element_placement: "rating"
            }), m(!0))
          }), [u]), !g.ratingImg) return null;
        const _ = !!g.ratingDescriptors;
        return (0, o.jsxs)("div", {
          className: [Ue.rating, _ ? Ue.withDescriptors : Ue.withOutDescriptors, d || ""].join(" "),
          style: (0, v.safeStyles)(c),
          "data-testid": "rating",
          children: [(0, o.jsx)(r.A, {
            to: g.ratingUrl,
            target: "_blank",
            children: (0, o.jsx)("img", {
              alt: k.formatMessage(We.components_ratings_link_alt, {
                rating: (x = g.ratingImg, x.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: t(8194)(`./${g.ratingImg}`)
            })
          }), _ && (0, o.jsxs)("div", {
            className: Ue.text,
            children: [(0, o.jsx)("p", {
              className: Ue.descriptors,
              dangerouslySetInnerHTML: {
                __html: g?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), g.ratingFooter && (0, o.jsx)("hr", {}), g.ratingFooter && (0, o.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: g.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var x
      })));
      var Ye = t(4595),
        Xe = t(99057),
        Je = t(15386),
        Ze = t(51562),
        ea = t(94322),
        aa = t(61784);
      const ta = ({
        disableLink: e,
        className: a,
        "data-testid": t
      }) => {
        const s = e ? "span" : r.A;
        return (0, o.jsx)(s, {
          className: [e ? "rockstargames-modules-core-newswire-articleb28a6ee32abeb20049b97677a86a4314" : "rockstargames-modules-core-newswire-articlea3d920a1139575706b914bc3a0100970", a || ""].join(" "),
          "data-testid": t,
          alt: "Rockstar Games Home",
          ...!e && {
            to: "/"
          }
        })
      };
      var sa = t(67288);
      const ra = ({
          thresholds: e,
          onThresholdReached: a,
          children: t
        }) => {
          const [s, r] = (0, b.useState)([]), [i, n] = (0, b.useState)(new Set);
          return (0, b.useEffect)((() => {
            const a = Array.from(new Set(e));
            a.sort(((e, a) => e - a)), r(a)
          }), [e]), (0, o.jsxs)("div", {
            style: {
              position: "relative"
            },
            children: [s.map((e => (0, o.jsx)(W.InView, {
              threshold: e,
              onChange: t => ((e, t) => {
                e && !i.has(t) && n((e => {
                  const r = new Set(e);
                  return s.forEach((e => {
                    e <= t && !r.has(e) && (r.add(e), a(e))
                  })), r
                }))
              })(t, e),
              triggerOnce: !0,
              children: ({
                ref: a
              }) => (0, o.jsx)("div", {
                ref: a,
                style: {
                  height: "1px",
                  position: "absolute",
                  top: 100 * e + "%"
                }
              })
            }, e))), t]
          })
        },
        ia = () => {
          const {
            pathname: e
          } = (0, k.useLocation)();
          return (0, b.useEffect)((() => {
            const e = document.scrollingElement || document.documentElement;
            setTimeout((() => {
              e.scrollTop = 0
            }), 0)
          }), [e]), null
        };
      var na = t(13897),
        oa = t(67050),
        ca = t(79704);
      const da = ({
        children: e
      }) => (0, o.jsx)("div", {
        className: "rockstargames-modules-core-newswire-articleaae4d33d1eecebdc9b489f8d7a1ad708",
        children: (0, o.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlec573fe5c7bdcc46c4d57ec4a2c275e3b",
          children: e
        })
      });
      var la = t(55322),
        ma = t(60212),
        ua = t(61306),
        ga = t(94848);
      const fa = ({
        children: e,
        style: a,
        theme: t
      }) => {
        const [s, r] = (0, b.useState)(t);
        return (0, b.useEffect)((() => {
          t && r(t)
        }), [t]), (0, o.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlee5e0faf6ab9871fd60b958c6f7dcf519",
          style: a,
          "data-theme": s,
          children: e
        })
      };
      var pa = t(93935),
        ba = t(48524);
      const ka = {
          downVote: "rockstargames-modules-core-newswire-articlee23b13b0d0be49814d3770c10365c096",
          info: "rockstargames-modules-core-newswire-articlecee10f330f3ac6fba73fc06ac99bc951",
          loggedOutButtons: "rockstargames-modules-core-newswire-articlec393b8f2d3b5b3e9204881ae6ff0fdc5",
          pillBtn: "rockstargames-modules-core-newswire-articlea0626acfa0dbdfdfd4f40b93134ac915",
          selected: "rockstargames-modules-core-newswire-articlede6015fb35bdee07192c1656ba4893e3",
          upVote: "rockstargames-modules-core-newswire-articleb3be682e82659d45f93c2fe63ccd73ba",
          userVote: "rockstargames-modules-core-newswire-articleb32a59a8a63c53cc278266d726c9c5da",
          voteButtonActive: "rockstargames-modules-core-newswire-articlef9e46f58f97d2b391aaf715861654cd7",
          voteButtons: "rockstargames-modules-core-newswire-articledda673f7473820d8884c017373c780f6",
          voteContent: "rockstargames-modules-core-newswire-articleaad01ad44bcc6161ad363910e931515f"
        },
        va = ({
          description: e,
          foreign_id: a = document.location.pathname,
          foreign_type: t = "url",
          title: s
        }) => {
          const {
            track: r
          } = (0, w.useGtmTrack)(), {
            loggedIn: i
          } = (0, w.useRockstarUser)(), {
            refetch: n
          } = (0, v.useQuery)(ba.UserGetVote, {
            skip: !0
          }), [c] = (0, v.useMutation)(ba.UserCastVote), [d, l] = (0, b.useState)(null), m = (0, b.useCallback)((async e => {
            r({
              event: "cta_" + (e ? "like" : "dislike"),
              text: `${t} ${a}`
            });
            const s = {
                foreign_id: a,
                foreign_type: t,
                vote: e
              },
              i = await c({
                variables: s
              });
            l(i?.data?.userCastVote?.vote ?? null)
          }), [a, t]);
          return (0, b.useEffect)((() => {
            (async () => {
              if (!i || !a || !t) return;
              const e = await n({
                foreign_id: a,
                foreign_type: t
              });
              l(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, t, i]), (0, o.jsx)("div", {
            className: ka.userVote,
            children: (0, o.jsxs)("div", {
              className: ka.voteContent,
              children: [(0, o.jsxs)("div", {
                className: ka.info,
                children: [(0, o.jsx)("h3", {
                  children: s
                }), (0, o.jsx)("p", {
                  children: e
                })]
              }), (0, o.jsxs)("div", {
                className: [ka.voteButtons, i ? "" : ka.loggedOutButtons].join(" "),
                children: [(0, o.jsx)("button", {
                  onClick: () => m(!0),
                  className: [ka.upVote, d ? ka.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, o.jsx)("button", {
                  className: [ka.downVote, !1 === d ? ka.voteButtonActive : ""].join(" "),
                  onClick: () => m(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        };
      var wa = t(87731),
        ha = t.n(wa);
      const _a = {
          card: "rockstargames-modules-core-newswire-articlef93031694e202c791c00e5ae3497250a",
          gameTitle: "rockstargames-modules-core-newswire-articlea1fe577b937c0e16250bf38e9d775061",
          info: "rockstargames-modules-core-newswire-articledabce30c906fad181d7cc188f1632c04",
          screencap: "rockstargames-modules-core-newswire-articlefd37974f16cd1f2376fef29d4af8d948",
          screencapLoaded: "rockstargames-modules-core-newswire-articleb8d4ef3e1a73c58f4002eab351d4eec2",
          title: "rockstargames-modules-core-newswire-articlefd87597d0f90ed6d8a2081da933f53bc",
          videoPreview: "rockstargames-modules-core-newswire-articlea626ad482ff0be0336e75929516654d5"
        },
        xa = ({
          video: e,
          size: a = 640
        }) => {
          const t = () => e.screencap.includes("akamai") ? `${e.screencap}?im=Resize=${a}` : e.screencap,
            [s] = (0, v.usePreloadImg)(t());
          return (0, o.jsx)("div", {
            className: [_a.screencap, s ? _a.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${t()}) center/cover`
            }
          })
        },
        ya = ({
          gameTitleNecessary: e = !0,
          openInNewWindow: a = !1,
          video: t,
          size: s,
          toExplicit: i
        }) => {
          const n = i ?? `/videos/${t.id}`,
            c = {
              className: _a.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": n
            },
            d = (0, o.jsxs)("div", {
              className: _a.card,
              children: [(0, o.jsx)(xa, {
                video: t,
                size: s
              }), (0, o.jsxs)("div", {
                className: _a.info,
                children: [e ? (0, o.jsx)("div", {
                  className: _a.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: t.game.title
                  }
                }) : "", (0, o.jsx)("h5", {
                  className: _a.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            });
          return a ? (0, o.jsx)("a", {
            href: n,
            target: "_blank",
            ...c,
            children: d
          }) : (0, o.jsx)(r.A, {
            to: n,
            ...c,
            children: d
          })
        },
        Na = {
          active: "rockstargames-modules-core-newswire-articlee35688e0d87409e3aef95ffb624d94f4",
          carousel: "rockstargames-modules-core-newswire-articlebc3f1abaac4c17c0e9aaac5fccfc6f7e",
          cta: "rockstargames-modules-core-newswire-articlef40c40ed1bc4242a32bc0628eea34048",
          disableClick: "rockstargames-modules-core-newswire-articlefcd11cd5895147a9e08f8f4026d68d94",
          dots: "rockstargames-modules-core-newswire-articlee0ca3ed410818f0961345606a96f03ee",
          dragging: "rockstargames-modules-core-newswire-articleb335b03fce6834b86318f3d7cbf3fab6",
          gameTitle: "rockstargames-modules-core-newswire-articleb5d3df350466b14e4b419bdb479b4064",
          info: "rockstargames-modules-core-newswire-articlea4057ef942e10ebeedb1370b08c3c32b",
          items: "rockstargames-modules-core-newswire-articled30be9a5f31ff7fabf20969eec3200f1",
          slidesContent: "rockstargames-modules-core-newswire-articlec4e301fb08e073f689a8dabd2bef9eb2",
          text: "rockstargames-modules-core-newswire-articlecdb5c063bfc35cfbaaaefc68a77c1b07",
          title: "rockstargames-modules-core-newswire-articlee66c271fbbc8b6e431fc5d466c57479c",
          track: "rockstargames-modules-core-newswire-articleefe7112432da76c65f293853b4c942d1",
          videoTitle: "rockstargames-modules-core-newswire-articleed4138b1e7fecd4b6d29f0e1bef1fdfd"
        },
        ja = (0, He.defineMessages)({
          learn_more: {
            id: "carousel_learn_more",
            description: "Carousel learn more button text",
            defaultMessage: "Learn More"
          },
          watch_more: {
            id: "carousel_watch_more",
            description: "Carousel watch more button text",
            defaultMessage: "Watch Now"
          }
        }),
        Sa = (0, Ke.g)((({
          videos: e
        }) => {
          const a = (0, v.useLocale)(),
            {
              formatMessage: t
            } = (0, He.useIntl)(),
            {
              track: s
            } = (0, w.useGtmTrack)(),
            {
              setBodyIsLocked: i
            } = (0, v.useBodyScrollable)("VideoCarousel"),
            [n, c] = (0, b.useState)(0),
            [l, m] = (0, b.useState)(0),
            u = (0, b.useRef)(null),
            g = (0, b.useRef)(null);
          (0, b.useEffect)((() => {
            if (!u.current || !g.current) return;
            const a = new(ha())(u.current);
            a.get("press").set({
              time: 0
            }), a.get("tap").set({
              time: 150
            });
            const t = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              s = () => {
                c(n - 1 < 0 ? 0 : n - 1), m(0)
              },
              r = () => {
                const a = n + 1 >= e.length - 1 ? e.length - 1 : n + 1;
                c(a), m(0)
              },
              o = e => {
                m(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !g.current?.classList.contains(Na.dragging) || t() && i(!0)
              },
              d = () => {
                t() && i(!1), m(0)
              },
              l = e => {
                "press" === e.type && u.current?.classList.add(`${Na.disableClick}`), "tap" === e.type && (u.current?.classList.remove(`${Na.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              f = () => {
                t() && i(!1), u.current && u.current.classList.remove(`${Na.disableClick}`)
              },
              p = () => {
                t() && i(!1)
              };
            return g.current.addEventListener("transitionend", p), a.on("swiperight", s), a.on("swipeleft", r), a.on("pan", o), a.on("panend", d), a.on("press tap", l), a.on("pressup", f), () => {
              a.off("swiperight", s), a.off("swipeleft", r), a.off("pan", o), a.off("panend", d), a.off("press tap", l), a.off("pressup", f), g.current && g.current.removeEventListener("transitionend", p), m(0)
            }
          }), [u.current, n]);
          const f = e => {
            const a = "VI" === e.game?.titleSlug;
            return [e?.titleHomepage ?? e?.title, a ? "/VI" : `/videos/${e.id}`, a ? "_blank" : "_self", t(a ? ja.learn_more : ja.watch_more)]
          };
          return (0, o.jsxs)("section", {
            className: Na.carousel,
            children: [(0, o.jsx)("div", {
              className: Na.track,
              ref: u,
              children: (0, o.jsx)("div", {
                className: `${Na.items} ${0!==l?Na.dragging:""}`,
                ref: g,
                style: {
                  transform: `translateX(calc(-${100*n}% + ${l}px))`
                },
                children: e.map(((e, a) => {
                  const [t, s, i] = f(e);
                  return (0, o.jsx)(r.A, {
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through screencap",
                    "data-gtm-label": s,
                    to: s,
                    className: n === a ? Na.active : "",
                    role: "link",
                    title: t,
                    tabIndex: n === a ? 0 : -1,
                    target: i,
                    children: (0, o.jsx)(xa, {
                      video: e,
                      size: 1280
                    })
                  }, e.id)
                }))
              })
            }), (0, o.jsxs)("div", {
              className: Na.slidesContent,
              children: [(0, o.jsx)("div", {
                className: Na.text,
                children: e.map(((e, t) => {
                  const [i, c, l, m] = f(e);
                  return (0, o.jsxs)(r.A, {
                    className: [Na.info, t === n ? Na.active : ""].join(" "),
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through footer",
                    "data-gtm-label": c,
                    to: c,
                    role: "link",
                    title: i,
                    tabIndex: n === t ? 0 : -1,
                    target: l,
                    children: [(0, o.jsxs)("div", {
                      className: Na.title,
                      children: [(0, o.jsxs)("div", {
                        className: Na.gameTitle,
                        children: [e.game.title, "fr_fr" === a && " "]
                      }), (0, o.jsx)("h2", {
                        className: Na.videoTitle,
                        children: i
                      })]
                    }), (0, o.jsx)(d.A, {
                      className: Na.cta,
                      onClick: (u = c, () => {
                        s({
                          event: "cta_watch_video",
                          text: "watch now",
                          link_url: u,
                          element_placement: "video carousel"
                        })
                      }),
                      children: m
                    })]
                  }, e.id);
                  var u
                }))
              }), (0, o.jsx)("section", {
                className: Na.dots,
                "aria-controls": "video-carousel",
                "aria-label": "video carousel buttons",
                role: "group",
                children: e.map(((e, a) => (0, o.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => c(a),
                  className: n === a ? Na.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        Ta = (0, He.defineMessages)({
          next_button_label: {
            id: "next_button_label",
            description: "Aria label to indicate going to the next page of videos",
            defaultMessage: "Next video page"
          },
          previous_button_label: {
            id: "previous_button_label",
            description: "Aria label to indicate going to the previous page of videos",
            defaultMessage: "Previous video page"
          }
        }),
        Ca = {
          img: "rockstargames-modules-core-newswire-articled87037fda2ea106061c7a614036a89df",
          imgContentful: "rockstargames-modules-core-newswire-articleb9f3c994ce8a97ac6530cf0a85e5abe0",
          wide: "rockstargames-modules-core-newswire-articledc444c089b89129c0a39bc61845d531f"
        };
      (0, v.importAll)(t(86751));
      const Ea = ({
          isWideCard: e = !1,
          size: a = 640,
          title: s,
          titleSlug: r
        }) => {
          const {
            isMobile: i
          } = (0, v.useWindowResize)(), n = (0, b.useMemo)((() => {
            let s = "";
            return e && (s = i ? t(24865)(`./${r}/mobile.jpg`) : t(53781)(`./${r}/desktop.jpg`)), s || (s = t(39294)(`./${r}.jpg`), s += `?im=Resize=${a}`), s
          }), [i, r]), [c] = (0, v.usePreloadImg)(n);
          let d = n;
          return (0, o.jsx)("div", {
            role: "img",
            "aria-label": s,
            style: {
              backgroundImage: `url(${d})`
            },
            className: [Ca.img, c ? Ca.startAnimation : "", e ? Ca.wide : ""].join(" ")
          })
        },
        Pa = {
          fobLink: "rockstargames-modules-core-newswire-articled30ff40ba02b7ed14124da3ca9cd4f2b",
          wide: "rockstargames-modules-core-newswire-articlec9686ec502f78b05e47568667e90bd17"
        },
        Aa = ({
          game: e,
          to: a
        }) => {
          const {
            titleSlug: t,
            urlOfficial: s = ""
          } = e, i = ["VI"].includes(t.toUpperCase());
          return (0, o.jsx)(r.A, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": t,
            "data-testid": `${t}-gamecard`,
            to: a ?? s,
            target: "_self",
            className: [Pa.fobLink, i ? Pa.wide : ""].join(" "),
            reloadDocument: i,
            children: (0, o.jsx)(Ea, {
              title: e.title,
              titleSlug: t,
              isWideCard: i,
              size: i ? 1740 : 480
            })
          })
        },
        Ia = {
          arrow: "rockstargames-modules-core-newswire-articlecabb1073f7b7f75b799c87d74cfaf0ad",
          arrowNav: "rockstargames-modules-core-newswire-articlec9b73b78d75dd740e918208a9d615796",
          disabled: "rockstargames-modules-core-newswire-articledbe1b06efadb349825f7b9b1b2778c68",
          items: "rockstargames-modules-core-newswire-articleef63b0224f0cc9fa73a9c4549ad6c7e9",
          next: "rockstargames-modules-core-newswire-articlebfdf85a5867d26b52a0962be91170e36",
          partial: "rockstargames-modules-core-newswire-articleab95829b388545f21071fd5bb97c25bb",
          previous: "rockstargames-modules-core-newswire-articled7404262ef1f79bde0883b02110a4a5d",
          sectionHeader: "rockstargames-modules-core-newswire-articlead695c18d6276297e78924feea3e6201",
          track: "rockstargames-modules-core-newswire-articlea4d3877b3cf6bff0abccdc561c0fe149",
          trackWrapper: "rockstargames-modules-core-newswire-articlebd79ab04bc93e3bcf79be808e0a06e9b",
          videoList: "rockstargames-modules-core-newswire-articlebacddb57787eca7b621a046e6f23aaf5"
        },
        La = (0, Ke.g)((({
          vids: e,
          games: a,
          title: t,
          gameTitleNecessary: s
        }) => {
          const r = (0, He.useIntl)(),
            {
              track: i
            } = (0, w.useGtmTrack)(),
            n = void 0 !== a ? "games" : "videos",
            [c, d] = (0, b.useState)(),
            [l, u] = (0, b.useState)(),
            [g, f] = (0, b.useState)(0),
            p = (0, b.useRef)(null),
            k = (0, b.useRef)(null);
          (0, b.useEffect)((() => {
            u({
              nextEl: k.current,
              prevEl: p.current
            })
          }), [k, p]), (0, b.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2.2 : e("1920px") && (a = 3.2), f(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [g]);
          const v = e => {
            c?.slideTo(e)
          };
          let h;
          return h = "games" === n ? (0, o.jsx)(o.Fragment, {
            children: a.results.map(((e, a) => "775700as" !== e.id && (0, o.jsx)(K.qr, {
              className: Ia.slide,
              onFocus: () => v(a),
              children: (0, o.jsx)(Aa, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id)))
          }) : (0, o.jsx)(o.Fragment, {
            children: e.map(((e, a) => (0, o.jsx)(K.qr, {
              className: Ia.slide,
              onFocus: () => v(a),
              children: (0, o.jsx)(ya, {
                video: e,
                gameTitleNecessary: s
              })
            }, e.id)))
          }), (0, o.jsxs)("section", {
            className: Ia.videoList,
            children: [(0, o.jsxs)("h3", {
              className: Ia.sectionHeader,
              children: [t, (0, o.jsxs)("div", {
                className: Ia.arrowNav,
                children: [(0, o.jsx)("button", {
                  className: [Ia.arrow, Ia.previous].join(" "),
                  type: "button",
                  ref: p,
                  "aria-label": r.formatMessage(Ta.previous_button_label)
                }), (0, o.jsx)("button", {
                  className: [Ia.arrow, Ia.next].join(" "),
                  type: "button",
                  ref: k,
                  "aria-label": r.formatMessage(Ta.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" === e.key && !e.shiftKey) {
                      const a = c?.slides[c?.activeIndex].querySelector('a, button, [role="button"]');
                      a && (e.preventDefault(), a.focus())
                    }
                  }
                })]
              })]
            }), (0, o.jsx)("div", {
              className: [Ia.items, g % 1 != 0 ? Ia.partial : ""].join(" "),
              children: (0, o.jsx)("div", {
                className: Ia.trackWrapper,
                children: g && (0, o.jsx)(K.RC, {
                  className: Ia.track,
                  slidesPerView: g,
                  spaceBetween: 24,
                  onInit: e => {
                    d(e)
                  },
                  grabCursor: !0,
                  navigation: l,
                  modules: [q.Vx],
                  slideClass: m()("swiper-slide"),
                  onSlideNextTransitionEnd: () => {
                    i({
                      event: "carousel_next",
                      element_placement: t?.toLowerCase() ?? ""
                    })
                  },
                  onSlidePrevTransitionEnd: () => {
                    i({
                      event: "carousel_previous",
                      element_placement: t?.toLowerCase() ?? ""
                    })
                  },
                  onSlideChangeTransitionEnd: () => {
                    i({
                      event: "carousel_swipe",
                      element_placement: t?.toLowerCase() ?? ""
                    })
                  },
                  children: h
                })
              })
            })]
          })
        })),
        Ma = ({
          children: e,
          ...a
        }) => (0, o.jsx)("span", {
          ...a,
          className: "rockstargames-modules-core-newswire-articleacd86b7f5778381df8fac4a3f7489f60",
          children: e
        });
      var za = t(34100),
        Da = t(47942);
      class Fa extends b.Component {
        constructor(e) {
          super(e), this.state = {
            error: {
              code: null,
              message: null
            }
          }
        }
        componentDidUpdate(e) {
          this.props.error && e.error !== this.props.error && this.setState({
            ...this.state,
            error: this.props.error
          })
        }
        static getDerivedStateFromError(e) {
          return {
            error: {
              message: e?.message ? e.toString() : "Something has gone horribly awry.",
              code: e?.code ?? 399
            }
          }
        }
        componentDidCatch(e, a) {
          (0, Da.addBreadcrumb)({
            category: "ErrorBoundary",
            message: e.message || "E399 triggered",
            data: {
              error: e,
              errorInfo: a
            }
          }), (0, Da.captureMessage)("ErrorBoundary", Da.Severity.Error)
        }
        render() {
          return null !== this.state.error.code ? (0, o.jsx)(za.A, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const $a = (e, a = null) => function(t) {
        return (0, o.jsx)(Fa, {
          header: a,
          children: (0, o.jsx)(e, {
            ...t
          })
        })
      };
      var Va = t(95359),
        Ba = t(72408),
        Oa = t(73005),
        Ga = t(22230)
    },
    76808: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        Jsx0: () => i,
        Jsx1: () => L,
        Jsx2: () => D
      });
      var s = t(42295),
        r = t(23395);
      const i = ({
        article: e,
        children: a
      }) => {
        const t = e.primary_tags[e.primary_tags.length > 1 && 722 === e.primary_tags[0].id ? 1 : 0];
        return (0, s.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlec853d8a152fed83cf33e0fc661cf8214",
          children: [(0, s.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlef7db33be003c658d5566777dc41b3d8d",
            children: [(0, s.jsxs)("h1", {
              children: [e.title, e.subtitle ? (0, s.jsx)("span", {
                children: e.subtitle
              }) : ""]
            }), (0, s.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlec1fbf3067a1ce8e71e38d92093f62f88",
              children: [e.primary_tags.length ? (0, s.jsx)(r.A, {
                title: t.name,
                href: `/newswire?tag_id=${t.id}`
              }) : "", (0, s.jsx)("time", {
                dateTime: e.created,
                children: e.created_formatted
              })]
            }), e.posts_hero && "iframe" === e.posts_hero.type ? (0, s.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlebb59ee9d50a65d6978fff34966f65bf8",
              children: (0, s.jsx)("iframe", {
                src: e.posts_hero.hero
              })
            }) : "", (0, s.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlefd4ea03865b0f756d342c3eee228e9f8",
              dangerouslySetInnerHTML: {
                __html: e.content
              }
            })]
          }), a]
        })
      };
      var n = t(62229),
        o = t(57770),
        c = t.n(o),
        d = t(95966),
        l = t(52224),
        m = t(24769),
        u = t(10632),
        g = t(14200),
        f = t(29625),
        p = t(10245),
        b = t(1057),
        k = t(20837),
        v = t(62312),
        w = t(4407),
        h = t(15386),
        _ = t(51562),
        x = t(4595),
        y = t(99057),
        N = t(61784),
        j = t(94322),
        S = t(79704),
        T = t(93935),
        C = t(15310),
        E = t.n(C),
        P = t(64064),
        A = t.n(P),
        I = t(56100);
      const L = (0, d.withTranslations)((({
        article: e,
        children: a,
        t
      }) => {
        const i = (0, d.useLocale)(),
          o = {
            A: e => (0, s.jsx)(g.A, {
              ...e
            }),
            AnchorLink: e => (0, s.jsx)(I.AnchorLink, {
              ...e
            }),
            ArticleTag: e => (0, s.jsx)(r.A, {
              ...e
            }),
            AudioPlayer: e => (0, s.jsx)(l.A, {
              ...e
            }),
            Button: e => (0, s.jsx)(f.A, {
              ...e
            }),
            Carousel: e => (0, s.jsx)(m.A, {
              ...e
            }),
            Cta: e => (0, s.jsx)(p.A, {
              ...e
            }),
            Discounts: e => (0, s.jsx)(I.Discounts, {
              ...e
            }),
            Donate: e => (0, s.jsx)(I.Donate, {
              ...e
            }),
            FadeInContent: e => (0, s.jsx)(b.A, {
              ...e
            }),
            FontClip: e => (0, s.jsx)(I.FontClip, {
              ...e
            }),
            GamingRewards: e => (0, s.jsx)(I.GamingRewards, {
              ...e
            }),
            Gif: e => (0, s.jsx)(A(), {
              ...e
            }),
            Grid: e => (0, s.jsx)(k.A, {
              ...e
            }),
            GroupOfItems: e => (0, s.jsx)(E(), {
              ...e
            }),
            HeroImage: e => (0, s.jsx)(I.HeroImage, {
              ...e
            }),
            HTMLElement: e => (0, s.jsx)(v.A, {
              ...e
            }),
            ImageWithBadge: e => (0, s.jsx)(u.A, {
              ...e
            }),
            MultiSourceImage: e => (0, s.jsx)(w.A, {
              ...e
            }),
            NewswireFull: e => (0, s.jsx)(I.NewswireFull, {
              ...e
            }),
            Title: e => (0, s.jsx)(I.NewswireTitle, {
              ...e
            }),
            PctBar: e => (0, s.jsx)(I.PctBar, {
              ...e
            }),
            Podium: e => (0, s.jsx)(I.Podium, {
              ...e
            }),
            ResponsiveGridBox: e => (0, s.jsx)(h.A, {
              ...e
            }),
            ResponsiveGridItem: e => (0, s.jsx)(_.A, {
              ...e
            }),
            ResponsiveFlexBox: e => (0, s.jsx)(x.A, {
              ...e
            }),
            ResponsiveFlexItem: e => (0, s.jsx)(y.A, {
              ...e
            }),
            ResponsiveSection: e => (0, s.jsx)(N.A, {
              ...e
            }),
            ResponsiveImg: e => (0, s.jsx)(j.A, {
              ...e
            }),
            Separator: e => (0, s.jsx)(S.A, {
              ...e
            }),
            Tag: e => (0, s.jsx)(r.A, {
              ...e
            }),
            UnorderedList: e => (0, s.jsx)(T.A, {
              ...e
            })
          },
          C = e.posts_jsx.variables_us_defaulted,
          [P] = (0, n.useState)((0, s.jsx)(c(), {
            renderInWrapper: !1,
            bindings: {
              getArray: (e, a) => e[a],
              renderHtml: e => (0, s.jsx)("span", {
                dangerouslySetInnerHTML: {
                  __html: e
                }
              }, P),
              article: e,
              locale: i,
              t,
              variables: C
            },
            components: o,
            jsx: e.posts_jsx.markup,
            onError: e => {
              console.error(e)
            }
          }));
        return (0, s.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlece2d8080309005e155e5422fd38faa5d",
          children: [P, a]
        })
      }));
      var M = t(92440),
        z = t(28674);
      const D = ({
        children: e,
        payload: a,
        variablesKeys: t
      }) => (0, s.jsxs)("div", {
        className: "rockstargames-modules-core-newswire-articledad06d3570a3cd17332c2bfb19d8f611",
        children: [(0, s.jsx)(M.TinaParser, {
          tina: {
            payload: a,
            variables: {
              keys: t
            }
          },
          components: z.componentsForTinaParser
        }), e]
      })
    },
    77321: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd74a091e2e5765c8769668cc515e494.jpg"
    },
    77404: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    78323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d66bfe06a724f04c0941073de283297.jpg"
    },
    79114: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d3ee871568fd751956d5ea1242a4f2d.jpg"
    },
    79704: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var s = t(42295);
      const r = {
          gtao: "rockstargames-modules-core-newswire-articlef66c75c6e882da85fef31e4211ca0be2",
          hr: "rockstargames-modules-core-newswire-articledc7b1bc141e132d4ee9b7bf9d55c573a",
          redLine: "rockstargames-modules-core-newswire-articled4d968b41ef87926b0b6318e8647738b"
        },
        i = ({
          style: e,
          className: a = "",
          type: t = ""
        }) => (0, s.jsx)("div", {
          style: e,
          className: [r.hr, r[t], a].join(" ")
        })
    },
    79795: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/659db20d7a19cc70a0510c7d197cedf3.jpg"
    },
    80391: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg"
    },
    81715: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg"
    },
    81864: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    82424: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    84141: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5df3b2d018d1e8e9b424b9eaebc86b16.jpg"
    },
    84406: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    84715: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/16e65ca64eafabe331ef1d2bef9c6f16.jpg"
    },
    84752: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg"
    },
    85256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc4dbe3e1d52c3fc405579090868d08.jpg"
    },
    85332: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f58d386594d32f34c887da75032c5be.jpg"
    },
    85613: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d0b53035bf66e851116bd0244ba6ace.jpg"
    },
    85719: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    86595: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    86751: (e, a, t) => {
      var s = {
        "./GTAOnline.jpg": 10111,
        "./GTATrilogy.jpg": 84752,
        "./IV.jpg": 73483,
        "./V.jpg": 98754,
        "./VI.jpg": 1157,
        "./VI/desktop.jpg": 67496,
        "./VI/mobile.jpg": 92244,
        "./agent.jpg": 78323,
        "./beaterator.jpg": 23587,
        "./bully-scholarshipedition.jpg": 67181,
        "./bully.jpg": 85332,
        "./chinatownwars.jpg": 44596,
        "./episodesfromlibertycity.jpg": 18518,
        "./grandtheftauto-gba.jpg": 7509,
        "./grandtheftauto3.jpg": 42787,
        "./gta-online.jpg": 26788,
        "./gta-v.jpg": 33143,
        "./gta.jpg": 8494,
        "./gta2.jpg": 59942,
        "./gtacomplete.jpg": 64923,
        "./gtalondon.jpg": 85256,
        "./italianjob.jpg": 42043,
        "./lanoire-vr-case-files.jpg": 52014,
        "./lanoire.jpg": 59414,
        "./lanoire_2.jpg": 52461,
        "./libertycitystories.jpg": 89273,
        "./manhunt.jpg": 95903,
        "./manhunt2.jpg": 3933,
        "./maxpayne.jpg": 77321,
        "./maxpayne2.jpg": 13095,
        "./maxpayne3.jpg": 57258,
        "./midnightclub.jpg": 12602,
        "./midnightclub2.jpg": 3818,
        "./midnightclub3.jpg": 59655,
        "./midnightclubLA-complete.jpg": 63839,
        "./midnightclubLA.jpg": 79795,
        "./oni.jpg": 24808,
        "./rdr-goty.jpg": 19552,
        "./reddeadonline.jpg": 73534,
        "./reddeadredemption.jpg": 27064,
        "./reddeadredemption2.jpg": 31248,
        "./reddeadrevolver.jpg": 79114,
        "./rockstar-games-collection-edition-1.jpg": 93573,
        "./sanandreas.jpg": 14724,
        "./skateanddestroy.jpg": 90377,
        "./smugglersrun.jpg": 73564,
        "./smugglersrun2.jpg": 22844,
        "./smugglersrunwarzones.jpg": 84715,
        "./stateofemergency.jpg": 28005,
        "./tabletennis.jpg": 84141,
        "./theballadofgaytony.jpg": 14825,
        "./thelostanddamned.jpg": 52591,
        "./thewarriors.jpg": 96148,
        "./undeadnightmare.jpg": 32830,
        "./vicecity.jpg": 91480,
        "./vicecitystories.jpg": 10869,
        "./wildmetal.jpg": 85613
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 86751
    },
    86929: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a5d9ca87a5bd107da9bb33d3d718e8.svg"
    },
    87256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    87707: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07362df5a2671c08b232a97d503cd6bf.svg"
    },
    89069: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    89235: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    89273: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab528316ca7d31c2b041b62c4ce5dd36.jpg"
    },
    89303: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    89836: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    90377: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a69bebbefae64314172002dd2bae0a34.jpg"
    },
    90717: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    91480: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg"
    },
    92244: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4f086bb17e0de94d33c4031f30fff704.jpg"
    },
    93573: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f79f3baf4a020b34cf9d3cf29d71f4e.jpg"
    },
    94293: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    94848: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d,
        X: () => c
      });
      var s = t(42295),
        r = t(92440),
        i = t(95966),
        n = t(29315),
        o = t(84343);
      const c = ({
          id: e = null,
          ids: a = null,
          setTitleDataPath: t = null,
          sync: s = !1
        }) => {
          const r = a ?? [e],
            {
              data: n
            } = (0, i.useQuery)(o.TinaModulesInfo, {
              variables: {
                ids: r,
                sync: s
              },
              setTitleDataPath: t,
              skip: !r.length
            });
          return n?.tinaModulesInfo ?? null
        },
        d = (0, n.A)((({
          components: e = {},
          id: a = null,
          ids: t = null
        }) => {
          const i = c({
              id: a,
              ids: t
            }),
            n = i?.[0]?.tina;
          return n ? (0, s.jsx)(s.Fragment, {
            children: i.map((({
              tina: a
            }, t) => (0, s.jsx)(r.TinaParser, {
              components: e,
              tina: a,
              componentProps: {
                tinaModulesInfo: i
              }
            }, t)))
          }) : null
        }), {
          header: null
        })
    },
    95088: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    95359: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        Animations: () => s,
        LiteMotion: () => l,
        withFadeIn: () => p,
        withFadeUp: () => w
      });
      var s = {};
      t.r(s), t.d(s, {
        getVariant: () => x,
        transitions: () => h,
        variants: () => _
      });
      var r = t(42295),
        i = t(62229),
        n = t(47730),
        o = t(43348),
        c = t(53078);
      const d = (0, i.forwardRef)(((e, a) => {
        const {
          children: t,
          tag: s = "div"
        } = e, i = n.m[s];
        return (0, r.jsx)(o.F, {
          features: c.l,
          children: (0, r.jsx)(i, {
            ref: a,
            ...e,
            children: t
          })
        })
      }));
      d.displayName = "LiteMotion";
      const l = d;
      var m = t(22557);
      const u = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        g = {
          ease: "easeIn",
          duration: .4
        },
        f = ({
          children: e
        }) => (0, r.jsx)(m.P.div, Object.assign({
          className: "rockstargames-modules-core-newswire-articlef38982805188b64825a72d2c5fac938c",
          variants: u,
          initial: "hidden",
          whileInView: "visible",
          viewport: {
            margin: "-20%",
            once: !0
          },
          transition: g
        }, {
          children: e
        })),
        p = e => a => (0, r.jsx)(f, {
          children: (0, r.jsx)(e, Object.assign({}, a))
        }),
        b = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        k = {
          ease: "easeIn",
          duration: .75
        },
        v = ({
          children: e
        }) => (0, r.jsx)(m.P.div, {
          className: "rockstargames-modules-core-newswire-articlec1ad787ad6429786650325edac0ffe42",
          variants: b,
          initial: "hidden",
          whileInView: "visible",
          viewport: {
            margin: "-20%",
            once: !0
          },
          transition: k,
          children: e
        }),
        w = e => a => (0, r.jsx)(v, {
          children: (0, r.jsx)(e, {
            ...a
          })
        }),
        h = {
          cardOpen: {
            ease: [.77, 0, .175, 1],
            duration: .5
          },
          afterCardOpen: {
            ease: "easeIn",
            duration: .3,
            delay: .5
          },
          fade: {
            ease: "easeIn",
            duration: .3
          },
          instantFade: {
            duration: .05
          }
        },
        _ = {
          plainCard: {
            expanded: {
              initial: {
                gridTemplateColumns: "var(--grid-template-columns-initial)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-initial)",
                overflow: "visible",
                "--product-card-pricing-info-opacity": 1,
                "--product-card-pricing-info-padding": "var(--padding-sm)"
              },
              animate: {
                gridTemplateColumns: "var(--grid-template-columns-animate)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-animate)",
                "--product-card-pricing-info-height": 0,
                "--product-card-pricing-info-opacity": 0,
                "--product-card-pricing-info-padding": 0,
                transitionEnd: {
                  overflow: "auto",
                  marginTop: "calc(var(--modal-padding) * -1)",
                  paddingTop: "var(--modal-padding)",
                  height: "calc(100% + var(--modal-padding))"
                }
              },
              hovered: {}
            },
            expandedContents: {
              initial: {
                opacity: 0,
                display: "var(--card-expanded-contents-display-initial)"
              },
              animate: {
                opacity: 1,
                display: "grid"
              }
            }
          },
          cardWithImageGallery: {
            expanded: {
              initial: {
                overflow: "visible",
                gridTemplateColumns: "var(--grid-template-columns-initial)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-initial)",
                "--gallery-border": "0 solid transparent"
              },
              animate: {
                gridTemplateColumns: "var(--grid-template-columns-animate)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-animate)",
                transitionEnd: {
                  overflow: "auto",
                  marginTop: "calc(var(--modal-padding) * -1)",
                  paddingTop: "var(--modal-padding)",
                  height: "calc(100% + var(--modal-padding))"
                }
              },
              hovered: {}
            },
            expandedContents: {
              initial: {
                opacity: 0,
                display: "none"
              },
              animate: {
                opacity: 1,
                display: "grid"
              }
            },
            gallery: {
              parent: {
                initial: {
                  gridGap: 0,
                  background: "var(--black-100)"
                },
                animate: {
                  gridGap: "var(--gallery-grid-gap)",
                  background: "var(--black-200)",
                  transitionEnd: {
                    pointerEvents: "all"
                  }
                }
              },
              main: {
                initial: {
                  "--gallery-aspect-ratio": "var(--gallery-aspect-ratio-initial)",
                  "--swiper-pagination-opacity": 0
                },
                animate: {
                  "--gallery-aspect-ratio": "var(--gallery-aspect-ratio-animate)",
                  "--swiper-pagination-opacity": 1
                }
              },
              thumbs: {
                initial: {
                  "--thumb-aspect-ratio": "1/0"
                },
                animate: {
                  "--thumb-aspect-ratio": "1/1"
                }
              }
            }
          },
          imageMask: {
            expanded: {
              initial: {
                borderRadius: "var(--border-radius-md)"
              },
              animate: {
                borderRadius: "var(--card-expanded-border-radius)"
              }
            }
          },
          foreground: {
            expanded: {
              initial: {
                width: "100%"
              },
              animate: {
                width: "var(--card-foreground-layer-width-animate)"
              }
            }
          },
          logo: {
            expanded: {
              initial: {
                "--card-logo-top-initial": "2rem",
                "--card-logo-top-animate": "0%"
              },
              animate: {
                "--card-logo-top-initial": "0rem",
                "--card-logo-top-animate": "50%",
                "--card-logo-marginTop-animate": "calc(var(--card-logo-height) * -1)",
                "--card-logo-y-animate-mobile": "-20%",
                height: "calc(var(--card-logo-height) * 2)",
                x: "var(--card-logo-animate-x)"
              },
              hovered: {}
            }
          },
          fade: {
            in: {
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              }
            },
            out: {
              initial: {
                opacity: 1
              },
              animate: {
                opacity: 0
              }
            }
          }
        },
        x = (e = "imageMask", a = "collapsed") => _[e][a]
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

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
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
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.GameData = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "GameData")
    },
    95903: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa649a5d6b52121271093a7c564cc56a.jpg"
    },
    96148: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5239707dea0f2f4ea8351f64e6b5a921.jpg"
    },
    96566: (e, a, t) => {
      "use strict";
      t.d(a, {
        _y: () => w,
        _l: () => c._,
        n_: () => _,
        IT: () => h
      });
      var s = t(42295),
        r = t(62229),
        i = t(19757),
        n = t(75102),
        o = t(80701),
        c = t(63886),
        d = t(46277),
        l = t(16188),
        m = t.n(l),
        u = t(72148);
      const g = (e, a) => {
          const t = (0, u.Ym)(),
            s = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...a,
              variables: {
                locale: t,
                ...a?.variables
              }
            },
            {
              data: i,
              loading: n,
              error: o,
              ...c
            } = (0, d.IT)(e, s);
          return (0, r.useEffect)((() => {
            if (i && s.setTitleDataPath) {
              const e = m().get(i, s.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }), [i]), (0, r.useEffect)((() => (s.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: n
          }), () => {
            s.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          })), [n]), (0, r.useEffect)((() => {
            if (s.autoSetError && o) throw new Error(String(o))
          }), [o]), {
            loading: n,
            error: o,
            data: i,
            ...c
          }
        },
        f = (0, r.createContext)((() => ({
          data: null
        }))),
        p = new Promise((e => {
          e()
        })),
        b = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new i.D)
        },
        k = [() => p, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new n.R(b))
        }],
        v = (0, r.createContext)((() => k)),
        w = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = ({
          children: e
        }) => (0, s.jsx)(v.Provider, {
          value: o.n,
          children: (0, s.jsx)(f.Provider, {
            value: g,
            children: e
          })
        })),
        h = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, a) => (0, r.useContext)(f)(e, a)),
        _ = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, r.useContext)(v)(e))
    },
    97558: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    98754: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    98952: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    },
    99057: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var s = t(42295);
      const r = {
          responsiveFlexItem: "rockstargames-modules-core-newswire-articlee7371144db2e94a049204d4b178416ec"
        },
        i = ({
          children: e,
          className: a,
          style: t
        }) => (0, s.jsx)("div", {
          className: [r.responsiveFlexItem, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: e
        })
    }
  }
]);