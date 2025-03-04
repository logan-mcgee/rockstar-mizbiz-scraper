! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3c6ede62-ef71-4ec1-b4a3-c5ded1c9647a", e._sentryDebugIdIdentifier = "sentry-dbid-3c6ede62-ef71-4ec1-b4a3-c5ded1c9647a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [2729], {
    95168: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(81788);
      const r = (0, s.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        i = {
          bodySmall: "rockstargames-modules-core-newswire-articledeed018133fca0148d0bf72fbe95bcd6"
        };
      var n = t(91029);
      const c = e => {
          let {
            track: a,
            artist: t
          } = e;
          return (0, n.jsxs)("div", {
            className: i.track,
            children: [(0, n.jsx)("p", {
              children: a
            }), (0, n.jsx)("p", {
              className: i.bodySmall,
              children: t
            })]
          })
        },
        o = (0, t(65555).g)((e => {
          let {
            content: a = []
          } = e;
          return (0, n.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlee2587587f57e43c9ca90d1e16e4a6ca6",
            children: [(0, n.jsx)("h4", {
              className: "rockstargames-modules-core-newswire-articleef167f82b058360b2b6a3466ca73d7de",
              children: (0, n.jsx)(s.FormattedMessage, {
                ...r.components_track_list_title
              })
            }), (0, n.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlebeaa4a0a8d9f3a6ef20ee517f222a3c2",
              children: (0, n.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlec06a65e90847e8b44df20f2aceb57038",
                children: a?.map((e => (0, n.jsx)(c, {
                  track: e.track,
                  artist: e.artist
                }, e.key)))
              })
            })]
          })
        }))
    },
    74392: (e, a, t) => {
      "use strict";
      t.d(a, {
        y3: () => ge,
        h7: () => ee,
        E$: () => He
      });
      var s = t(62229),
        r = t(16188),
        i = t.n(r),
        n = t(92440),
        c = t(41638),
        o = t(71312),
        d = t(95966),
        l = t(71069);
      var m = t(91029);
      const u = e => {
          let {
            hasTag: a = !1,
            tag: t = null,
            tagStyle: s = null,
            badges: r = []
          } = e;
          return a && t ? (0, m.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articleceb75d3391774f84e920e955d7a6853f",
            "data-tag-style": s,
            children: t
          }) : a && r && r?.length > 0 ? (0, m.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlef83b84453472e937d57011680a564ec6",
            children: r.map((e => (0, m.jsx)(l.A, {
              ...e
            }, e?.text)))
          }) : null
        },
        g = {
          textOverlay: "rockstargames-modules-core-newswire-articleca83475001f5d512b9ffcd89f1117561",
          content: "rockstargames-modules-core-newswire-articlef418ed13cf5cbe3f701ce0d872b50704"
        },
        {
          LiteMotion: f,
          Animations: p
        } = c,
        {
          variants: b,
          transitions: k
        } = p,
        v = e => {
          let {
            title: a,
            hasTag: t,
            tag: s,
            hasDescription: r,
            description: i,
            fadesOut: n = !1,
            badges: c
          } = e;
          return (0, m.jsx)(f, {
            initial: b.fade.out.initial,
            animate: {
              opacity: n ? 0 : 1
            },
            transition: k.fade,
            className: g.textOverlay,
            children: (0, m.jsxs)("div", {
              className: g.content,
              children: [(0, m.jsx)(u, {
                hasTag: t,
                tag: s,
                badges: c?.filter((e => e?.isPrimary))
              }), (0, m.jsx)("h3", {
                children: a
              }), r && i && (0, m.jsx)("div", {
                className: g.description,
                children: i
              })]
            })
          })
        },
        w = e => {
          let {
            title: a,
            showTitle: t = !0,
            showBackground: r = !0,
            tag: i,
            tagStyle: n,
            discountPrice: c,
            originalPrice: o,
            setPricingContainerHeight: d = null
          } = e;
          const l = (0, s.createRef)();
          return (0, s.useEffect)((() => {
            const e = () => {
              l.current && null !== d && d(l.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [l]), (0, m.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlee419c6cd31abd635e742e635dcfd8316",
            ref: l,
            "data-show-background": r,
            children: [t && (0, m.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articlebf415d56280a8768ee0c26e116865d5b",
              children: a
            }), (0, m.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articled98da8fc9dce6d600db165351d3a3fed",
              children: [(0, m.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlea5717338db21efc7eb765011d68ea73d",
                "data-tag-style": n || "free",
                children: i
              }), (0, m.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlecdaaa9655747e4d129d6c22080bdd33d",
                children: c
              }), (0, m.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articleaf3db4eb6d14c1f4ee5689b4e6386715",
                children: o
              })]
            })]
          })
        };
      var h = t(80391),
        _ = t(28985),
        x = t(47240),
        y = t(81715),
        N = t(49429),
        j = t(32903),
        S = t(85719),
        T = t(11008);
      const C = {
          ps5: x,
          ps4: _,
          ps: h,
          xboxone: N,
          xbox: j,
          xboxseriesxs: y,
          nintendoswitch: T,
          pc: S,
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
        },
        P = e => {
          let {
            title: a,
            showTitle: t = !0,
            showBackground: r = !0,
            platformOptions: i,
            setPricingContainerHeight: n = (() => {}),
            expandedView: c
          } = e;
          const o = (0, s.createRef)();
          return (0, s.useEffect)((() => {
            const e = () => {
              o.current && null !== n && n(o.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [o]), (0, m.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articleee81f54f31ab2cd10a67313b9689bf96",
            ref: o,
            "data-show-background": r,
            "data-show-platforms": !c,
            children: [t && (0, m.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articled4ab460f0a204a588d4d4dd0a110ca36",
              children: a
            }), i?.platformsAndLinks && (0, m.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articleafdc85bfd80cae52d4c1b422f1294962",
              children: [(0, m.jsx)(u, {
                hasTag: i?._memoq?.platformTag,
                tag: i?._memoq?.platformTag,
                tagStyle: i?._memoq?.platformTagStyle
              }), (0, m.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlec252412353007d9f02f19a754430b14b",
                children: i.platformsAndLinks.map((e => {
                  let {
                    platform: a,
                    buttonText: t
                  } = e;
                  return (0, m.jsx)("img", {
                    className: "rockstargames-modules-core-newswire-articleff5cde8853312ffb892472d100c684cd",
                    alt: t,
                    src: C[a]
                  }, a)
                }))
              })]
            })]
          })
        },
        E = e => {
          let {
            textOverlayProps: a,
            title: t,
            size: r,
            expandedView: i = !1,
            children: n,
            pricingOptions: c,
            setPricingContainerHeight: o,
            isCoverCard: d = !1,
            platformOptions: l
          } = e;
          const [u] = (e => {
            let {
              hasTextOverlay: a,
              tag: t,
              collapsedHasTag: r,
              description: i,
              collapsedHasDescription: n,
              size: c,
              title: o,
              expandedView: d,
              badges: l
            } = e;
            const [u, g] = (0, s.useState)(null), f = (0, s.useMemo)((() => {
              if (!a) return null;
              const e = "sm" !== c && n;
              return (0, m.jsx)(v, {
                title: o,
                hasTag: r,
                tag: t,
                hasDescription: e,
                description: i,
                fadesOut: d,
                badges: l
              })
            }), [a, t, r, i, n, c, o, d, l]);
            return (0, s.useEffect)((() => {
              g(f)
            }), [f]), [u, g]
          })({
            ...a,
            size: r,
            title: t,
            expandedView: i
          }), g = void 0 !== c?.hasPricingOptions || null !== l;
          return (0, m.jsxs)("header", {
            className: "rockstargames-modules-core-newswire-articlecab36c59e0808c47183ef125bd12c511",
            "data-is-covercard": d,
            "data-expanded-view": i,
            children: [s.Children.map(n, (e => (0, s.cloneElement)(e, {
              title: t,
              size: r,
              expandedView: i
            }))), u, g && (0, m.jsxs)(m.Fragment, {
              children: [!0 === l?.hasPlatformOptions && (0, m.jsx)(P, {
                title: t,
                platformOptions: l,
                pricingOptions: c,
                setPricingContainerHeight: o,
                expandedView: i
              }), !0 === c?.hasPricingOptions && (0, m.jsx)(w, {
                title: t,
                tag: c?._memoq?.tag,
                tagStyle: c?._memoq?.tagStyle || "free",
                discountPrice: c?._memoq?.discountPrice,
                originalPrice: c?._memoq?.originalPrice,
                setPricingContainerHeight: o
              })]
            })]
          })
        },
        {
          LiteMotion: A,
          Animations: L
        } = c,
        {
          transitions: I
        } = L,
        z = e => {
          let {
            components: a,
            payload: t,
            prod: r,
            size: c,
            title: l,
            initial: g = "initial",
            animate: f = "animate",
            variants: p,
            type: b = null,
            context: k = null,
            textOverlayProps: v,
            className: h,
            children: _,
            theme: x = "none",
            id: y,
            pricingOptions: N,
            pricingContainerHeight: j,
            isCoverCard: S,
            platformOptions: T,
            isProductCard: C = !1
          } = e;
          const P = (0, s.useRef)(),
            L = (0, s.useRef)(),
            {
              tag: z,
              expandedHasTag: M,
              badges: D
            } = v;
          i().set(t, "meta.prod", r);
          const F = _?.props?.images.length > 0;
          let $ = (0, m.jsx)("h1", {
            children: l
          });
          return S && ($ = null), (0, s.useEffect)((() => {
            const e = () => {
              P.current && P.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (P.current.scrollTop = 0)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []), (0, m.jsx)(d.DataLayerProvider, {
            card_id: y,
            card_name: l?.toLowerCase(),
            children: (0, m.jsx)(o.A, {
              threshold: [25, 50, 75, 90, 100],
              trackRef: "long" === b ? P : L,
              children: (0, m.jsxs)(A, {
                ref: P,
                initial: g,
                animate: f,
                variants: p.expanded,
                transition: I.cardOpen,
                className: (0, d.classList)("rockstargames-modules-core-newswire-articlec2289ce1bf0de6ad8a4a8ce7e90a4b66", h),
                "data-type": b,
                "data-size": c,
                "data-product": C,
                "data-covercard": S || !1,
                "data-context": k,
                style: {
                  "--product-card-pricing-info-height": `${j||0}px`
                },
                children: [F && (0, m.jsx)(E, {
                  size: c,
                  title: l,
                  textOverlayProps: v,
                  expandedView: !0,
                  pricingOptions: N,
                  platformOptions: T,
                  isCoverCard: S,
                  children: _
                }), (0, m.jsxs)(A, {
                  ref: L,
                  className: "rockstargames-modules-core-newswire-articlee461568802b56e8c21b8b82d9c3a1fb4",
                  variants: p.expandedContents,
                  transition: I.afterCardOpen,
                  "data-theme": x,
                  children: [(0, m.jsxs)("div", {
                    className: "rockstargames-modules-core-newswire-articlec4c35e83dbf962aa44c3f94b313361b3",
                    children: [(0, m.jsx)(u, {
                      hasTag: M,
                      tag: z,
                      badges: D
                    }), $, C && (0, m.jsxs)(m.Fragment, {
                      children: [!0 === T?.hasPlatformOptions && (0, m.jsx)("div", {
                        className: "rockstargames-modules-core-newswire-articlecd635452588eda421bdea19f00660efc",
                        children: (0, m.jsx)(u, {
                          hasTag: T?.hasPlatformOptions,
                          tag: T?._memoq?.platformTag,
                          tagStyle: T?._memoq?.platformTagStyle
                        })
                      }), !0 === N?.hasPricingOptions && (0, m.jsx)(w, {
                        title: l,
                        showTitle: !1,
                        showBackground: !1,
                        tag: N?._memoq?.tag,
                        tagStyle: N?.tagStyle || "free",
                        discountPrice: N?._memoq?.discountPrice,
                        originalPrice: N?._memoq?.originalPrice
                      })]
                    })]
                  }), (0, m.jsx)(n.TinaParser, {
                    components: a,
                    tina: {
                      payload: t
                    }
                  })]
                })]
              })
            })
          })
        };
      var M = t(44814),
        D = t(57308),
        F = t(99704),
        $ = t(15310),
        V = t.n($),
        B = t(9623),
        O = t(81788),
        G = t(41041);
      const R = [null, () => null],
        H = (0, d.setContextItem)({
          context: (0, s.createContext)(R),
          key: "modalContext"
        }),
        W = (0, O.defineMessages)({
          card_label_platforms: {
            id: "card_label_platforms",
            defaultMessage: "{title} on {platformList}"
          },
          card_label_tag: {
            id: "card_label_tag",
            defaultMessage: "{tag} {title}"
          },
          card_label_platforms_tag: {
            id: "card_label_platforms_tag",
            defaultMessage: "{tag} {title} on {platformList}"
          },
          card_learn_more: {
            id: "card_learn_more",
            defaultMessage: "Learn More"
          },
          events_deck_next_aria_label: {
            id: "events_deck_next_aria_label",
            defaultMessage: "Next Page of Events"
          },
          events_deck_previous_aria_label: {
            id: "events_deck_previous_aria_label",
            defaultMessage: "Previous Page of Events"
          },
          events_deck_modal_next_aria_label: {
            id: "events_deck_modal_next_aria_label",
            defaultMessage: "Next event"
          },
          events_deck_modal_previous_aria_label: {
            id: "events_deck_modal_previous_aria_label",
            defaultMessage: "Previous event"
          },
          events_deck_modal_close_label: {
            id: "events_deck_modal_close_label",
            defaultMessage: "Close"
          },
          events_deck_paging_label: {
            id: "events_deck_paging_label",
            defaultMessage: "On page {currentPage} of {totalPages}"
          },
          events_deck_modal_group_label: {
            id: "events_deck_modal_group_label",
            defaultMessage: "Event Details"
          }
        }),
        U = JSON.parse('{"de-DE":{"card_label_platforms":"{title} auf {platformList}","card_label_platforms_tag":"{tag} {title} auf {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Mehr erfahren","events_deck_modal_close_label":"Schließen","events_deck_modal_group_label":"Eventdetails","events_deck_modal_next_aria_label":"Nächstes Event","events_deck_modal_previous_aria_label":"Vorheriges Event","events_deck_next_aria_label":"Nächste Seite von Events","events_deck_paging_label":"Auf Seite {currentPage} von {totalPages}","events_deck_previous_aria_label":"Vorherige Seite von Events"},"en-US":{"card_label_platforms":"{title} on {platformList}","card_label_platforms_tag":"{tag} {title} on {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Learn More","events_deck_modal_close_label":"Close","events_deck_modal_group_label":"Event Details","events_deck_modal_next_aria_label":"Next event","events_deck_modal_previous_aria_label":"Previous event","events_deck_next_aria_label":"Next Page of Events","events_deck_paging_label":"On page {currentPage} of {totalPages}","events_deck_previous_aria_label":"Previous Page of Events"},"es-ES":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Más información","events_deck_modal_close_label":"Cerrar","events_deck_modal_group_label":"Detalles del evento","events_deck_modal_next_aria_label":"Evento siguiente","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Página siguiente de eventos","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página anterior de eventos"},"es-MX":{"card_label_platforms":"{title} en {platformList}","card_label_platforms_tag":"{tag} {title} en {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Más información","events_deck_modal_close_label":"Cerrar","events_deck_modal_group_label":"Detalles del evento","events_deck_modal_next_aria_label":"Evento siguiente","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Página de eventos siguiente","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página de eventos anterior"},"fr-FR":{"card_label_platforms":"{title} sur {platformList}","card_label_platforms_tag":"{tag} {title} sur {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"En savoir plus","events_deck_modal_close_label":"Fermer","events_deck_modal_group_label":"Détails de l’évènement","events_deck_modal_next_aria_label":"Évènement suivant","events_deck_modal_previous_aria_label":"Évènement précédent","events_deck_next_aria_label":"Page suivante des évènements","events_deck_paging_label":"Page {currentPage} sur {totalPages}","events_deck_previous_aria_label":"Page précédente des évènements"},"it-IT":{"card_label_platforms":"{title} su {platformList}","card_label_platforms_tag":"{tag} {title} su {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Altre informazioni","events_deck_modal_close_label":"Chiudi","events_deck_modal_group_label":"Dettagli evento","events_deck_modal_next_aria_label":"Evento successivo","events_deck_modal_previous_aria_label":"Evento precedente","events_deck_next_aria_label":"Pagina degli eventi successiva","events_deck_paging_label":"Pagina {currentPage} di {totalPages}","events_deck_previous_aria_label":"Pagina degli eventi precedente"},"ja-JP":{"card_label_platforms":"{platformList}版{title}","card_label_platforms_tag":"{tag} {platformList}版 {title}","card_label_tag":"{tag} {title}","card_learn_more":"詳細を閲覧","events_deck_modal_close_label":"閉じる","events_deck_modal_group_label":"イベントの詳細","events_deck_modal_next_aria_label":"次のイベント","events_deck_modal_previous_aria_label":"前のイベント","events_deck_next_aria_label":"次のイベントのページ","events_deck_paging_label":"{currentPage}/{totalPages}ページ","events_deck_previous_aria_label":"前のイベントのページ"},"ko-KR":{"card_label_platforms":"{platformList}용 {title}","card_label_platforms_tag":"{tag} {platformList}용 {title}","card_label_tag":"{tag} {title}","card_learn_more":"더 알아보기","events_deck_modal_close_label":"닫기","events_deck_modal_group_label":"이벤트 세부 정보","events_deck_modal_next_aria_label":"다음 이벤트","events_deck_modal_previous_aria_label":"이전 이벤트","events_deck_next_aria_label":"다음 이벤트 페이지","events_deck_paging_label":"{currentPage}/{totalPages} 페이지","events_deck_previous_aria_label":"이전 이벤트 페이지"},"pl-PL":{"card_label_platforms":"{title} na {platformList}","card_label_platforms_tag":"{tag} {title} na {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Dowiedz się więcej","events_deck_modal_close_label":"Zamknij","events_deck_modal_group_label":"Szczegóły wydarzenia","events_deck_modal_next_aria_label":"Następne wydarzenie","events_deck_modal_previous_aria_label":"Poprzednie wydarzenie","events_deck_next_aria_label":"Następna strona wydarzeń","events_deck_paging_label":"Strona {currentPage} z {totalPages}","events_deck_previous_aria_label":"Poprzednia strona wydarzeń"},"pt-BR":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Saiba mais","events_deck_modal_close_label":"Fechar","events_deck_modal_group_label":"Detalhes do evento","events_deck_modal_next_aria_label":"Próximo evento","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Próxima página de eventos","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página anterior de eventos"},"ru-RU":{"card_label_platforms":"{title} на {platformList}","card_label_platforms_tag":"{title} ({tag}) на {platformList}","card_label_tag":"{title} ({tag})","card_learn_more":"Подробности","events_deck_modal_close_label":"Закрыть","events_deck_modal_group_label":"Описание события","events_deck_modal_next_aria_label":"Следующее событие","events_deck_modal_previous_aria_label":"Предыдущее событие","events_deck_next_aria_label":"Следующая страница с событиями","events_deck_paging_label":"На {currentPage}-й странице из {totalPages}","events_deck_previous_aria_label":"Предыдущая страница с событиями"},"zh-CN":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}","card_learn_more":"了解更多","events_deck_modal_close_label":"关闭","events_deck_modal_group_label":"活动细节","events_deck_modal_next_aria_label":"下一个活动","events_deck_modal_previous_aria_label":"上一个活动","events_deck_next_aria_label":"下一页活动","events_deck_paging_label":"在第 {currentPage} 页（共 {totalPages} 页）","events_deck_previous_aria_label":"上一页活动"},"zh-TW":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}","card_learn_more":"了解更多","events_deck_modal_close_label":"關閉","events_deck_modal_group_label":"活動詳情","events_deck_modal_next_aria_label":"下一個活動","events_deck_modal_previous_aria_label":"上一個活動","events_deck_next_aria_label":"下一頁活動","events_deck_paging_label":"第 {currentPage} 頁（共 {totalPages} 頁）","events_deck_previous_aria_label":"上一頁活動"}}'),
        q = (0, O.withIntl)((e => {
          let {
            id: a,
            position: t,
            title: r,
            size: i = "md",
            sectionTitle: n = "",
            expandedType: c = null,
            modalProps: o = {
              content: null,
              className: "",
              contentClassName: ""
            },
            className: d,
            children: l,
            isProductCard: u,
            cardIds: g = null,
            theme: f = "none",
            isCoverCard: p,
            platformOptions: b
          } = e;
          const {
            formatMessage: k,
            formatList: v
          } = (0, O.useIntl)(), [w, h] = (0, B.useSearchParams)(), _ = (0, s.useRef)(null), [, x] = (0, s.useContext)(H), {
            track: y
          } = (0, G.h)(), [N, j] = (0, s.useState)(!1), S = window.location.href.includes("cms5"), T = () => {
            j(!1), x(null), S || h({}), y({
              event: "trackPageview"
            })
          }, C = () => {
            if (!o?.content || !_.current || !c || "linkout" === c) return;
            const e = _.current,
              s = window.getComputedStyle(e),
              n = parseInt(s.getPropertyValue("width"), 10),
              d = parseInt(s.getPropertyValue("height"), 10),
              l = e.getBoundingClientRect(),
              {
                content: m,
                className: u,
                contentClassName: p
              } = o,
              b = "fob" === i ? "fob" : "default";
            x({
              content: m,
              onClose: T,
              rect: l,
              width: n,
              height: d,
              className: u,
              contentClassName: p,
              fadeIn: !1,
              cardIds: g,
              theme: f,
              activeId: a,
              gtm: {
                card_id: a,
                card_name: r?.toLowerCase(),
                position: t
              },
              aspectRatio: b,
              cardDimensions: {
                size: i,
                type: c
              }
            }), y({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: a,
              card_name: r?.toLowerCase(),
              position: t
            })
          };
          (0, s.useEffect)((() => {
            N && C()
          }), [N]), (0, s.useEffect)((() => {
            j(w.get("info") === a)
          }), [w.get("info"), a]);
          const P = (0, s.useMemo)((() => {
            const e = b?._memoq?.platformTag || "";
            if (b?.platformsAndLinks?.length > 0) {
              const a = b?.platformsAndLinks?.map((e => {
                  let {
                    buttonText: a
                  } = e;
                  return a
                })),
                t = v(a, {
                  type: "conjunction"
                });
              return e ? k(W.card_label_platforms_tag, {
                tag: e,
                title: r,
                platformList: t
              }) : k(W.card_label_platforms, {
                title: r,
                platformList: t
              })
            }
            return e ? k(W.card_label_tag, {
              tag: e,
              title: r
            }) : r
          }), [b, r]);
          return p || "linkout" === c ? (0, m.jsx)("div", {
            ref: _,
            className: d,
            "data-size": i,
            "data-type": c,
            "data-product": u,
            role: "button",
            "aria-label": P,
            children: l
          }) : (0, m.jsx)("button", {
            ref: _,
            onClick: e => {
              e.preventDefault(), e.stopPropagation(), a ? h({
                info: a
              }) : C(), y({
                event: "card_click",
                element_placement: n?.toLowerCase(),
                position: t,
                card_id: a,
                card_name: r?.toLowerCase(),
                link_url: window.location.href
              })
            },
            className: d,
            "data-size": i,
            "data-type": c,
            "data-product": u,
            tabIndex: "linkout" !== c ? 0 : -1,
            "aria-label": P,
            type: "button",
            children: l
          })
        }), U),
        Q = {
          pillBtn: "rockstargames-modules-core-newswire-articlef3a91bbe53323354bc84e26197787c03",
          selected: "rockstargames-modules-core-newswire-articlea03c60979e8d6882b5b8ce0f0301b7e9",
          card: "rockstargames-modules-core-newswire-articlec49a3d41905733d6aa83dcd3463df7d5",
          content: "rockstargames-modules-core-newswire-articleb41eac21ba69f02fe26f8dafa8433207",
          expandedContent: "rockstargames-modules-core-newswire-articlefea5414b5f55420cfcd6c6ee12a393b3",
          text: "rockstargames-modules-core-newswire-articlee961062768d06292ff6cb598ae1c5e69",
          imageHolder: "rockstargames-modules-core-newswire-articled893e3eab0a5754bb28882ceb8de6b59",
          coverCardWrapper: "rockstargames-modules-core-newswire-articledd482c08ed9fdc5cef20f63dd6720e13"
        },
        Y = e => {
          let {
            payload: a,
            prod: t,
            images: r,
            size: i,
            title: c,
            initial: o,
            animate: d,
            variants: l,
            id: u,
            position: g,
            sectionTitle: f,
            expandedType: p,
            context: b,
            children: k,
            expandedCardContents: v,
            textOverlayProps: w = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            deckProps: h = {},
            modalProps: _ = [],
            theme: x,
            cardIds: y,
            pricingOptions: N,
            platformOptions: j = null,
            pricingContainerHeight: S,
            isCoverCard: T = !1,
            isProductCard: C = !1
          } = e;
          const P = (0, n.useTinaComponents)(),
            E = (0, s.useMemo)((() => ({
              ...P,
              HTMLElement: M.A,
              ImageWithBadge: D.A,
              Carousel: F.A,
              GroupOfItems: V()
            })), [P]),
            A = (0, s.useMemo)((() => (0, m.jsx)(z, {
              type: p,
              components: E,
              payload: a,
              prod: t,
              images: r,
              size: i,
              title: c,
              context: b,
              textOverlayProps: w,
              initial: o,
              animate: d,
              variants: l,
              theme: x,
              cardIds: y,
              pricingOptions: N,
              id: u,
              pricingContainerHeight: S,
              isCoverCard: T,
              platformOptions: j,
              isProductCard: C,
              children: v
            })), [p, r, t, i, c, w, v, o, d, l, E, a, C]),
            L = [Q.card, T ? Q.coverCardWrapper : ""].join(" ");
          return (0, m.jsx)(q, {
            id: u,
            position: g,
            sectionTitle: f,
            title: c,
            size: i,
            expandedType: p,
            images: r,
            deckProps: h,
            modalProps: {
              content: A,
              ..._
            },
            className: L,
            isProductCard: C,
            cardIds: y,
            theme: x,
            isCoverCard: T,
            platformOptions: j,
            children: k
          })
        };
      var K = t(12363),
        X = t(40003);
      const J = {
          clrCollapsedCard: "rockstargames-modules-core-newswire-articleeba324832dbf8f56f76fddb1d358c572",
          cardContainer: "rockstargames-modules-core-newswire-articlea65bd0d9d5dcff98d39d50398a055863",
          cardInfo: "rockstargames-modules-core-newswire-articlece8cc9fec51fad1ccdcc9dbc3c0e7986",
          subtitle: "rockstargames-modules-core-newswire-articlec0d737e6798c3e0994f78b427cbe9a59",
          price: "rockstargames-modules-core-newswire-articleeededa1d68a7f78ab4c0ba86fcafcb01",
          newBadge: "rockstargames-modules-core-newswire-articlebfb0205000666e00e4263cf557c3382d",
          outOfStockBadge: "rockstargames-modules-core-newswire-articlef56e1440ab1dbcff414939617853e921",
          saleBadge: "rockstargames-modules-core-newswire-articleca0d7f9e641eae51d7819491f87acc5d",
          slashedPrice: "rockstargames-modules-core-newswire-articleef47a1b9aa928979141bb75952f93adb",
          storeInfo: "rockstargames-modules-core-newswire-articlead85da337b24dbf2f1aba7e75352217a",
          priceInfo: "rockstargames-modules-core-newswire-articleb678df03ded67dcee3c87ae543d6a5e5",
          cardDesc: "rockstargames-modules-core-newswire-articled175015429f8daa4f434fd9b81b1a2cb"
        },
        Z = e => {
          let {
            videoUrl: a,
            expandedType: t,
            children: s
          } = e;
          return a && "linkout" === t ? (0, m.jsx)(K.A, {
            to: a,
            children: s
          }) : s
        },
        ee = e => {
          let {
            className: a,
            cardType: t,
            title: s,
            image: r,
            subheader: i,
            subtitle: n,
            price: c,
            slashedPrice: o,
            badge: d = null,
            expandedType: l,
            videoUrl: u
          } = e;
          return (0, m.jsx)("div", {
            className: [J.clrCollapsedCard, a].join(" "),
            role: "button",
            tabIndex: 0,
            children: (0, m.jsx)(Z, {
              videoUrl: u,
              expandedType: l,
              children: (0, m.jsxs)("div", {
                className: J.cardContainer,
                "data-type": t,
                children: [(0, m.jsx)("div", {
                  className: J.cardMedia,
                  children: (0, m.jsx)(X.A, {
                    ...r
                  })
                }), (0, m.jsxs)("div", {
                  className: J.cardInfo,
                  children: [i && (0, m.jsx)("h6", {
                    children: i
                  }), (0, m.jsx)("h5", {
                    children: s
                  }), n && (0, m.jsx)("h6", {
                    className: J.subtitle,
                    children: n
                  }), "store" === t && (0, m.jsxs)("div", {
                    className: J.storeInfo,
                    children: [(0, m.jsx)("p", {
                      className: (() => {
                        switch (d) {
                          case "New":
                            return J.newBadge;
                          case "Sale":
                            return J.saleBadge;
                          case "Out of Stock":
                            return J.outOfStockBadge;
                          default:
                            return ""
                        }
                      })(),
                      children: d
                    }), (0, m.jsxs)("span", {
                      className: J.priceInfo,
                      children: [(0, m.jsx)("p", {
                        className: J.price,
                        children: c
                      }), (0, m.jsx)("p", {
                        className: J.slashedPrice,
                        children: o
                      })]
                    })]
                  })]
                })]
              })
            })
          })
        },
        ae = e => {
          let {
            expandedType: a,
            to: t,
            children: r,
            style: i,
            sectionTitle: n = "",
            id: c,
            cardTitle: o,
            position: d
          } = e;
          const {
            track: l
          } = (0, G.h)(), u = (0, s.useCallback)((() => {
            l({
              event: "card_click",
              link_url: t,
              card_id: c,
              card_name: o,
              element_placement: n.toLowerCase(),
              position: d
            })
          }), [n, t, c, o, n, d]);
          return "linkout" === a && t ? (0, m.jsx)(K.A, {
            to: t,
            style: i,
            target: t?.startsWith("http") ? "_blank" : "_self",
            onClick: u,
            children: r
          }) : r
        };
      var te = t(8458);
      const se = {
          layeredImageFrame: "rockstargames-modules-core-newswire-articlecfc6074d8b476125230142c79438a249",
          layered: "rockstargames-modules-core-newswire-articlea7a1d10cda2bf3de7960b4fadf2f7a4e",
          foreground: "rockstargames-modules-core-newswire-articled858cc29f8933cc96ea1b20f734c1796",
          imageMask: "rockstargames-modules-core-newswire-articled656190323ba10afc580adbf82303a8b",
          logo: "rockstargames-modules-core-newswire-articleca32213b5f72baeb68ba9a21ee8a295b",
          "sm-horizontal": "rockstargames-modules-core-newswire-articlef5ab2fbb234fc0631784968dc2b1da75"
        },
        {
          LiteMotion: re,
          Animations: ie
        } = c,
        {
          getVariant: ne,
          variants: ce,
          transitions: oe
        } = ie,
        de = e => {
          let {
            image: a,
            i: t,
            prod: s
          } = e;
          const {
            alt: r,
            src: i
          } = (0, te.S1)({
            ...a,
            prod: s
          });
          return (0, m.jsx)("img", {
            src: i.mobile,
            alt: r ?? "",
            style: {
              "--z-index": t
            }
          })
        },
        le = e => {
          let {
            images: a = [],
            className: t = "",
            prod: r = !1,
            expandedView: i = !1,
            style: n = {}
          } = e;
          const [c, o] = (0, s.useState)({
            height: window.innerHeight,
            width: window.innerWidth
          });
          (0, s.useEffect)((() => {
            function e() {
              o({
                height: window.innerHeight,
                width: window.innerWidth
              })
            }
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [c]);
          const l = (0, s.useMemo)((() => a?.length && 0 !== a.length ? a.map((e => (0, m.jsx)(re, {
            className: (0, d.classList)(se[e?.specialClass] ?? se.imageMask, se[e?.sizeClass], e?.className),
            variants: ne(e?.specialClass ?? "imageMask", i ? "expanded" : "collapsed"),
            initial: "initial",
            animate: "animate",
            transition: oe.cardOpen,
            children: (0, m.jsx)(de, {
              image: e,
              prod: r
            })
          }, e.key))) : null), [a, c, i, r]);
          return (0, m.jsx)(re, {
            className: (0, d.classList)(se.layeredImageFrame, a.length > 1 ? se.layered : se.flat, t),
            style: n,
            initial: ce.fade.in.initial,
            animate: ce.fade.in.animate,
            transition: oe.instantFade,
            "data-expanded-view": i,
            children: l
          })
        },
        me = {
          clrCardModalContent: "rockstargames-modules-core-newswire-articlef32476f7063f9c4104b440088ce4c4b0",
          expandedCard: "rockstargames-modules-core-newswire-articlef6cbada424337b1e6ccd75c5029db4c3",
          content: "rockstargames-modules-core-newswire-articlea0b99bca02f0c4de4ad0bf4e4bd02337",
          details: "rockstargames-modules-core-newswire-articlee642b377145369df07970f4d4feb3f25",
          calloutHeaders: "rockstargames-modules-core-newswire-articleebd11baf4f38deb4ff8d0662eb5a6862"
        },
        {
          variants: ue
        } = c.Animations,
        ge = e => {
          let {
            id: a,
            content: t,
            size: s = "clr",
            cardType: r = "release",
            title: i,
            subheader: c,
            subtitle: o,
            storeInfo: d = {},
            expandedType: l,
            to: u,
            image: g,
            deckProps: f,
            tina: p = {},
            position: b
          } = e;
          const k = (0, n.useTinaPayload)(),
            v = p?.payload?.meta?.cdn ?? k?.meta?.prod ?? !1,
            w = {
              image: {
                ...g,
                prod: v
              }
            },
            h = [g];
          return (0, m.jsx)(Y, {
            id: a,
            title: i,
            context: "clr-card",
            size: s,
            expandedType: l,
            images: w,
            deckProps: f,
            prod: v,
            position: b,
            modalProps: {
              className: me.clrCardModal,
              contentClassName: me.clrCardModalContent
            },
            variants: ue.plainCard,
            payload: {
              content: t
            },
            expandedCardContents: (0, m.jsx)(le, {
              images: h,
              prod: v
            }),
            children: (0, m.jsx)(ae, {
              expandedType: l,
              to: u,
              style: {
                display: "flex"
              },
              children: (0, m.jsx)(ee, {
                cardType: r,
                title: i,
                subheader: c,
                subtitle: o,
                image: w,
                expandedType: l,
                price: d?.price,
                slashedPrice: d?.slashedPrice,
                badge: d?.badge
              })
            })
          })
        };
      var fe = t(7537);
      const pe = e => {
        let {
          images: a,
          title: t,
          expandedView: r,
          variants: i,
          transition: n
        } = e;
        const c = (0, s.useMemo)((() => a && 0 !== a?.length ? a.map(((e, a) => e?.image?.sources ? (0, s.createElement)(D.A, {
          ...e,
          key: a,
          style: {
            "--object-position": e?.objectPosition ?? ""
          }
        }) : null)) : null), [a]);
        return !c?.length || c?.length < 1 ? null : 1 === c.length ? c : (0, m.jsx)(fe.A, {
          slideChildren: c,
          title: t,
          navigation: r,
          thumbsVisible: r,
          spaceBetween: 0,
          variants: i,
          transition: n
        })
      };
      var be = t(12296),
        ke = t.n(be),
        ve = t(24069);
      const we = {
          pillBtn: "rockstargames-modules-core-newswire-articlecf00b554598ff2d6e233a11c7c829c7d",
          selected: "rockstargames-modules-core-newswire-articlecbdd37e11b752cff831c5a96aeb7dbeb",
          customModalContent: "rockstargames-modules-core-newswire-articleecdc3da21cda9331cebe845898b7fa7b"
        },
        {
          transitions: he,
          variants: _e
        } = c.Animations,
        xe = e => {
          let {
            id: a,
            title: t,
            content: r,
            size: i = "md",
            expandedType: c = "gallery",
            textOverlayProps: o = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: d = [],
            deckProps: l = {},
            tina: u = {},
            payload: g,
            position: f = 0,
            sectionTitle: p = "",
            cardIds: b
          } = e;
          const k = (0, n.useTinaPayload)(),
            v = g ?? k,
            w = u?.payload?.meta?.cdn ?? v?.meta?.prod ?? !1,
            h = ((e, a) => e?.map((e => e?.image ? {
              ...e,
              image: {
                ...e.image,
                prod: a
              }
            } : e)))(d, w),
            [_, x] = (0, s.useState)(l?.size ?? i),
            {
              parent: y,
              main: N,
              thumbs: j
            } = _e?.cardWithImageGallery?.gallery ?? {};
          return (0, s.useEffect)((() => {
            x(l?.size ?? i)
          }), [l?.size, i]), (0, m.jsx)(Y, {
            id: a,
            position: f,
            sectionTitle: p,
            payload: {
              content: r,
              meta: {},
              payload: v
            },
            title: t,
            size: _,
            expandedType: c,
            images: h,
            deckProps: l,
            prod: w,
            variants: _e.cardWithImageGallery,
            textOverlayProps: o,
            modalProps: {
              className: we.customModal,
              contentClassName: we.customModalContent
            },
            expandedCardContents: (0, m.jsx)(pe, {
              images: h,
              title: t,
              navigation: !0,
              thumbsVisible: !0,
              variants: {
                parent: y,
                main: N,
                thumbs: j
              },
              transition: {
                parent: he.cardOpen,
                main: he.cardOpen,
                thumbs: he.cardOpen
              }
            }),
            cardIds: b,
            children: (0, m.jsx)("div", {
              className: we.content,
              children: (0, m.jsx)(E, {
                title: t,
                size: _,
                textOverlayProps: o,
                children: (0, m.jsx)(pe, {
                  images: h,
                  title: t,
                  navigation: !1,
                  thumbsVisible: !1
                })
              })
            })
          })
        };
      var ye = t(88415),
        Ne = t(46823);
      const je = (e, a) => {
          let t = getComputedStyle(e).getPropertyValue(a);
          return t = t.replace("px", "").replace("rem", "").replace("em", ""), t = t.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), t = t.replace("ms", "").replace("s", ""), Number(t)
        },
        Se = e => ({
          x: void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
          y: void 0 !== e.changedTouches ? e.changedTouches[0].screenY : e.screenY
        }),
        Te = e => e.scrollHeight > e.clientHeight;

      function Ce(e, a) {
        const t = {
          ...e
        };
        return i().forOwn(e, ((e, s) => {
          if ("image" === s) {
            const e = t[s];
            t[s] = {
              ...e,
              prod: a
            }
          } else i().isObject(e) && !i().isArray(e) ? Ce(e, a) : i().isArray(e) && (t[s] = e.map((e => i().isObject(e) ? Ce(e, a) : e)))
        })), t
      }
      const Pe = (0, d.withTranslations)((e => {
          let {
            active: a,
            styles: t,
            title: r,
            itemNumber: i,
            inModalMode: c,
            openModalMode: o,
            element: d,
            upNext: u,
            mobileMode: g,
            refDeck: f,
            components: p,
            tina: b,
            prevPage: k,
            nextPage: v,
            transitionStyle: w,
            selectedItemNumber: h,
            carouselTitle: _,
            sharedDraggingDelta: x,
            setSharedDraggingDelta: y
          } = e;
          const N = (0, O.useIntl)(),
            {
              track: j
            } = (0, G.h)(),
            S = (0, s.createRef)(),
            T = (0, s.createRef)(),
            C = (0, s.createRef)(),
            P = (0, s.createRef)(),
            E = (0, s.createRef)(),
            [A, L] = (0, s.useState)(!1),
            [I, z] = (0, s.useState)(0),
            [M, D] = (0, s.useState)(0),
            [F, $] = (0, s.useState)(0),
            [V, B] = (0, s.useState)(0),
            [R, H] = (0, s.useState)(0),
            [U, q] = (0, s.useState)(!1),
            [Q, Y] = (0, s.useState)(0),
            [K, X] = (0, s.useState)(0),
            [J, Z] = (0, s.useState)(0),
            [ee, ae] = (0, s.useState)("700"),
            [se, re] = (0, s.useState)(-1),
            [ie, ne] = (0, s.useState)(0),
            [ce, oe] = (0, s.useState)(0),
            [de, le] = (0, s.useState)(0),
            [me, ue] = (0, s.useState)(!1),
            [ge, fe] = (0, s.useState)(""),
            [pe, be] = (0, s.useState)(null),
            [ve, we] = (0, s.useState)(!1),
            [he, _e] = (0, s.useState)(null),
            [xe, ye] = (0, s.useState)(!1),
            [Ne, Pe] = (0, s.useState)(!1),
            Ee = (0, n.useTinaPayload)(),
            Ae = b?.payload?.meta?.cdn ?? !1 ?? Ee?.meta?.prod ?? !1,
            Le = (0, n.useTranslations)({
              payload: b?.payload,
              variables: b?.variables
            }),
            Ie = Le?.meta ?? {},
            ze = Ce(Le?.content?.[0], Ae),
            Me = (0, s.useMemo)((() => ze?.images?.[0]?.image?.badge), [ze]),
            De = (0, s.useMemo)((() => ze.title ?? r ?? Ie?.title), [r, Ie?.title, ze.title]),
            Fe = (0, te.S1)({
              alt: ze?.images?.[0]?.image?.alt ?? "",
              ariaLabel: ze?.images?.[0]?.image?.alt ?? "",
              sources: ze?.images?.[0]?.image?.sources ?? [],
              prod: Ae
            }),
            $e = Fe?.src?.mobile ?? Fe?.src?.desktop ?? !1,
            Ve = (0, s.useMemo)((() => Ie?.foreignId), [Ie]),
            Be = (0, s.useMemo)((() => Ie?.foreignTitle), [Ie]),
            [Oe, Ge] = (0, s.useState)(0),
            [Re, He] = (0, s.useState)(0),
            [We, Ue] = (0, s.useState)(0),
            [qe, Qe] = (0, s.useState)(0),
            [Ye, Ke] = (0, s.useState)(!1),
            [Xe, Je] = (0, s.useState)(0),
            [Ze, ea] = (0, s.useState)(20),
            [aa, ta] = (0, s.useState)(null),
            [sa, ra] = (0, s.useState)(!1);
          let ia = c ? -1 : 0;
          const na = (0, s.useCallback)((e => {
              if (!0 === U || !c && !g || ve) return;
              const a = Se(e);
              Ge(a.x), He(a.y)
            }), [U, c]),
            ca = e => {
              na(e)
            },
            oa = e => {
              if (!0 === U || 0 === Oe || !c && !g || ve) return;
              const a = Se(e),
                t = a.x > Oe ? 1 : -1,
                s = Math.abs(Oe - a.x);
              c && !g && s > Ze ? (ra(!0), fe(t > 0 ? "prev" : "next"), la()) : (Ke(!0), Je(s * t), y(s * t))
            },
            da = e => {
              if (!0 === U || !c && !g || ve) return;
              const a = Se(e),
                t = a.x > Oe ? 1 : -1,
                s = Math.abs(Oe - a.x),
                r = Math.abs(Re - a.y);
              c && !g ? (la(), fe("")) : s > Ze && r < 25 ? (ra(!0), fe(t > 0 ? "prev" : "next"), la()) : la()
            },
            la = () => {
              q(!0), Ge(0), He(0), Ke(!1), Je(0), y(0)
            },
            ma = e => {
              e ? (c || L(!0), c || g || (clearTimeout(se), re(setTimeout((() => {
                j({
                  event: "card_title_hover",
                  card_name: De,
                  card_id: i,
                  position: i,
                  view_name: `${Ve}/${Be}`,
                  source_content_id: Ve,
                  source_content_name: Be
                })
              }), 1e3)))) : (c || L(!1), c || g || clearTimeout(se))
            };
          return (0, s.useEffect)((() => {
            let e = Q;
            A ? e = 0 : c && !g && (e = Q), z(e)
          }), [A, g, c, M, V, K, J, F, Q]), (0, s.useEffect)((() => {
            L(!(!c || !g))
          }), [c, g]), (0, s.useEffect)((() => {
            c && a && j({
              event: "virtualPageview",
              display_type: g ? "mobile" : "desktop",
              view_name: `${Ve}/${De}`,
              source_content_id: Ve,
              source_content_name: Be
            })
          }), [c, a]), (0, s.useEffect)((() => {
            const e = ke()(((e, a) => {
              let t = 18;
              if (e?.documentElement && (t = je(e?.documentElement, "--root-font-size")), ce !== a.innerHeight && oe(a.innerHeight), f?.current) {
                Z(je(f.current, "--eventDeck-marginSm") * t);
                const e = t * je(f?.current, "--eventDeck-modalGutters"),
                  s = a?.innerWidth,
                  r = s - 2 * e;
                D(r), P.current && g && $(r), B(je(f.current, "--eventDeck-itemSize") * t), le(je(f.current, "--eventDeck-phaseOneTransitionDuration"));
                const i = je(f?.current, "--eventDeck-itemImageTitleMargins") * t,
                  n = T?.current?.clientHeight,
                  c = n + i;
                Number.isNaN(c) || Y(c), ne(je(f?.current, "--eventDeck-headerHeight") * t)
              }
              let s = Math.min(700, a.innerWidth);
              g || (s = 900), ae(`${s}`)
            }), 300);
            return window.addEventListener("resize", (() => {
              e(document, window)
            })), e(document, window), () => {
              window.removeEventListener("resize", (() => {
                e(document, window)
              }))
            }
          }), [f, g]), (0, s.useEffect)((() => {
            if (S.current) {
              const e = S.current.clientHeight;
              Number.isNaN(e) || X(e)
            }
          }), [S]), (0, s.useEffect)((() => {
            if (c && g && P.current && (P.current.style.transform = "scale(1) translate3d(0, 0, 0)"), !c && g && P.current) {
              const e = 228 / M;
              P.current.style.transform = `scale(${e}) translate3d(0, 0, 0)`
            }!g && P.current && (P.current.style.transform = null)
          }), [c, g, M, F]), (0, s.useEffect)((() => {
            const e = .5 * M,
              a = ce - ie - 3 * J;
            H(M - (e < a ? e : a))
          }), [M, J, ce]), (0, s.useEffect)((() => {
            "next" === ge ? (v(null, !0), fe("")) : "prev" === ge && (k(null, !0), fe(""))
          }), [ge]), (0, s.useEffect)((() => {
            Ue(0), Qe(0)
          }), [g]), (0, s.useEffect)((() => {
            g ? ea(c ? 35 : 20) : c && ea(50)
          }), [c, g]), (0, s.useEffect)((() => {
            let e = [],
              a = 0,
              s = 0;
            if (null !== t?.transform) {
              e = t.transform.split(",");
              const r = e[0].split("(");
              a = Number(r[1].replace("px", "")), Ue(a), s = Number(e[1].replace("px", "")), Qe(s)
            }
          }), [t]), (0, s.useEffect)((() => {
            if (!U) return;
            clearTimeout(pe);
            const e = setTimeout((() => {
              q(!1), Ge(0)
            }), 200);
            be(e)
          }), [U, 200]), (0, s.useEffect)((() => {
            if (!sa) return;
            clearTimeout(aa);
            const e = setTimeout((() => {
              ra(!1)
            }), 1e3);
            ta(e)
          }), [sa]), (0, s.useEffect)((() => {
            c && clearTimeout(se), setTimeout((() => {
              ue(!me)
            }), de)
          }), [c]), (0, s.useEffect)((() => (document.body.addEventListener("mouseleave", la), () => {
            document.body.removeEventListener("mouseleave", la)
          })), []), (0, s.useEffect)((() => {
            E.current ? ye(Te(E.current)) : ye(!1), void 0 !== d && d.current ? Pe(Te(d.current)) : Pe(!1)
          }), [d, E, a, c, me]), ze ? (0, m.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlec02ee363d47108460ab7916fc955cd9b",
            ref: d,
            "data-item-position": i,
            "data-modal-mode": c,
            "data-active-item": a,
            "data-up-next": u,
            "data-transition": Ye || 0 !== x ? "none" : w,
            "data-scrollable": Ne,
            style: {
              ...t,
              transform: c && a && !g ? `translate3d(${We+Xe}px, ${qe}px, 0)` : g && !c ? `translate3d(${We+x}px, ${qe}px, 0)` : t?.transform
            },
            onClick: e => {
              sa || (c ? c && !g && (i < h ? k(e, !0) : i > h && v(e, !0)) : o(e))
            },
            onMouseEnter: () => ma(!0),
            onMouseLeave: () => ma(!1),
            onTouchStart: ca,
            onTouchMove: oa,
            onTouchEnd: da,
            onMouseDown: ca,
            onMouseMove: oa,
            onMouseUp: da,
            onKeyUp: e => {
              "Enter" === e.key && (c || o(e))
            },
            tabIndex: ia,
            "aria-label": c ? N.formatMessage(W.events_deck_modal_group_label) : De,
            role: c ? "dialog" : "presentation",
            children: [(0, m.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articledee75b8e3614051c8f0fc97e373e78e5",
              "data-full-header": A,
              ref: C,
              style: {
                height: c && g ? `${M}px` : null,
                width: c && g ? `${M}px` : null
              },
              children: [$e && (0, m.jsx)("img", {
                ref: P,
                src: `${Fe?.src?.mobile??Fe?.src?.desktop}?im=Resize,width=${ee}`,
                alt: Fe?.alt,
                style: {
                  width: 0 !== F && g ? `${F}px` : null,
                  height: 0 !== F && g ? `${F}px` : null
                }
              }), (0, m.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articledc279f97c134d6e7d30602288b8b10ae",
                "aria-hidden": "true",
                style: {
                  transform: !g || g && c ? `translate3d(0, ${I}px, 0)` : null
                },
                children: [Me && (0, m.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlecfe252d5613a21c1d308c98566cabd21",
                  ref: S,
                  children: (0, m.jsx)(l.A, {
                    text: Me
                  })
                }), (0, m.jsx)("span", {
                  className: "rockstargames-modules-core-newswire-articleb311a78aea53383ab6bd5cbccb52ceeb",
                  ref: T,
                  "aria-hidden": "true",
                  children: De
                })]
              })]
            }), (0, m.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articled212586e74ea4b4fe934beed9e339f78",
              ref: E,
              "aria-hidden": !c,
              onScroll: () => {
                we(!0), la(), clearTimeout(he);
                const e = setTimeout((() => {
                  we(!1)
                }), 100);
                _e(e)
              },
              style: {
                top: c && g ? `${M}px` : null,
                width: c && !g && a ? `${R}px` : null,
                touchAction: xe || g ? "unset" : "none"
              },
              children: [De && (0, m.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articleda9ef865674c108ffd53cfab2ed2971a",
                children: De
              }), (0, m.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articleabad8b0c98a7216d91b672492397e6a6",
                children: (0, m.jsx)(n.TinaParser, {
                  components: p,
                  tina: {
                    meta: Ie,
                    payload: {
                      content: ze?.content
                    }
                  }
                })
              })]
            })]
          }) : null
        })),
        Ee = "rockstargames-modules-core-newswire-articleeff7810cc71a3b63bfc3e58cbe4a0279",
        Ae = e => {
          let {
            prevPage: a,
            prevBtnDisabled: t,
            nextPage: s,
            nextBtnDisabled: r,
            selectedItemNumber: i,
            itemsData: n,
            closeModalMode: c,
            inModalMode: o,
            controlsHidden: d
          } = e;
          const l = (0, O.useIntl)();
          return (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlea13ee8af1dd8f09d28c65e56abd782ef",
              "aria-hidden": d || "false",
              children: [(0, m.jsx)("button", {
                className: Ee,
                type: "button",
                onClick: a,
                disabled: t,
                "aria-label": o ? l.formatMessage(W.events_deck_modal_previous_aria_label) : l.formatMessage(W.events_deck_previous_aria_label)
              }), (0, m.jsxs)("span", {
                className: "rockstargames-modules-core-newswire-articlea6b11adaa46a0c2acc5893d2f5da04f1",
                "aria-hidden": !o,
                "aria-label": l.formatMessage(W.events_deck_paging_label, {
                  currentPage: i + 1,
                  totalPages: n.length
                }),
                children: [i + 1, (0, m.jsx)("span", {
                  className: "rockstargames-modules-core-newswire-articleaad28b229162f1d7494a2de3a3b6b547"
                }), n.length]
              }), (0, m.jsx)("button", {
                className: Ee,
                type: "button",
                onClick: s,
                disabled: r,
                "aria-label": o ? l.formatMessage(W.events_deck_modal_next_aria_label) : l.formatMessage(W.events_deck_next_aria_label)
              })]
            }), (0, m.jsx)("button", {
              className: "rockstargames-modules-core-newswire-articlefb0b7933375b44858b7e92cdea86ee81",
              type: "button",
              onClick: c,
              "aria-label": l.formatMessage(W.events_deck_modal_close_label),
              "aria-hidden": !o,
              tabIndex: o ? 0 : -1
            })]
          })
        },
        Le = ((0, O.withIntl)((e => {
          const {
            setBodyIsLocked: a
          } = (0, d.useBodyScrollable)("EventsDeck"), {
            title: t
          } = e, {
            track: r
          } = (0, G.h)(), [c, o] = (0, s.useState)(!1), l = (() => {
            const {
              data: e
            } = (0, d.useQuery)(Ne.TinaModulesList, {
              variables: {
                type: "gtao-event-card",
                orderBy: "priority",
                orderDirection: "desc"
              }
            }), a = e?.tinaModulesList?.results, t = i().map(a, "id");
            return (0, ye.X)({
              ids: t
            })
          })(), [u, g] = (0, s.useState)([]), [f, p] = (0, s.useState)(null), [b, k] = (0, s.useState)(0), [v, w] = (0, s.useState)(window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth), [h, _] = (0, s.useState)(!1), x = (0, s.createRef)(), [y, N] = (0, s.useState)(null), j = (0, s.createRef)(), S = (0, s.createRef)(), [T, C] = (0, s.useState)([]), [P, E] = (0, s.useState)(!0), [A, L] = (0, s.useState)(!1), [I, z] = (0, s.useState)(!1), [$, B] = (0, s.useState)([]), [O, R] = (0, s.useState)(404), [H, W] = (0, s.useState)(808), [U, q] = (0, s.useState)(672), [Q, Y] = (0, s.useState)(336), [K, X] = (0, s.useState)(0), [J, Z] = (0, s.useState)(0), [ee, ae] = (0, s.useState)(0), [te, se] = (0, s.useState)(0), [re, ie] = (0, s.useState)(0), [ne, ce] = (0, s.useState)(!1), oe = !!(0, d.usePrevious)(ne), [de, le] = (0, s.useState)(window.innerWidth), [me, ue] = (0, s.useState)(0), [ge, fe] = (0, s.useState)(0), [pe, be] = (0, s.useState)(0), [we, he] = (0, s.useState)(0), [_e, Te] = (0, s.useState)(0), [Ce, Ee] = (0, s.useState)(0), [Le, Ie] = (0, s.useState)(0), [ze, Me] = (0, s.useState)(0), [De, Fe] = (0, s.useState)(-1e3), [$e, Ve] = (0, s.useState)(0), [Be, Oe] = (0, s.useState)(50), [Ge, Re] = (0, s.useState)(0), [He, We] = (0, s.useState)(!1), [Ue, qe] = (0, s.useState)(768), [Qe, Ye] = (0, s.useState)(!1), [Ke, Xe] = (0, s.useState)(!1), [Je, Ze] = (0, s.useState)(!1), [ea, aa] = (0, s.useState)(!1), [ta, sa] = (0, s.useState)(!1), [ra, ia] = (0, s.useState)(1e3), [na, ca] = (0, s.useState)(1.2), [oa, da] = (0, s.useState)(0), [la, ma] = (0, s.useState)(!1), [ua, ga] = (0, s.useState)(!1), [fa, pa] = (0, s.useState)(!0), [ba, ka] = (0, s.useState)(!1), [va, wa] = (0, s.useState)(!1), [ha, _a] = (0, s.useState)(null), [xa, ya] = (0, s.useState)(100), [Na, ja] = (0, s.useState)(!1), [Sa, Ta] = (0, s.useState)({}), [Ca, Pa] = (0, s.useState)(""), [Ea, Aa] = (0, s.useState)(0), [La, Ia] = (0, s.useState)(!1), [za, Ma] = (0, s.useState)(!1), [Da, Fa] = (0, s.useState)(0), [$a, Va] = (0, s.useState)(0), [Ba, Oa] = (0, s.useState)(100), [Ga, Ra] = (0, s.useState)(!1), [Ha, Wa] = (0, s.useState)(!1), Ua = () => de * me + Be, qa = () => !1 === He ? na : 1, Qa = e => e === Le - 1 || e === Le + 1, Ya = () => {
            let e = -1 * Ce;
            return e = -1 * Ce - we, e
          }, Ka = function(e) {
            let a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (!0 === He) return 0;
            const t = e.itemNumber % 2 == 0,
              s = O * na;
            if (!0 === t && 0 !== e.itemNumber) {
              const t = je(e?.element?.current, "top");
              let r = t - ee;
              return !1 === a && (r -= t), -1 * (.5 * s + r) + oa
            }
            return ee - .5 * s + oa
          }, Xa = function(e, a) {
            let t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              s = Ya();
            !1 === t && (s = 0);
            const r = de * me,
              i = !1 === He ? O * qa() : r;
            return e.inModalMode && He ? -1 === a ? Ua() * (Le - e.itemNumber) * -1 - e.styles.left : Ua() * (e.itemNumber - Le) - e.styles.left : -1 === a ? -1 * e.styles.left - i - Be + s : r - e.styles.left + Be + s
          }, Ja = (e, a, t) => {
            -1 === a && (L(!1), E(!0)), L(!1 === t && e >= a || !0 === t && e + 1 === a), E(e <= 0)
          }, Za = function(e) {
            let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (va || ba) return;
            if (wa(!0), ne) return void
            function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (Le + 1 >= u.length) return;
              const a = T[Le + 1]?.tina?.payload?.meta?.title ?? `card-${Le+1}`;
              r({
                event: e ? "modal_swipe" : "modal_next",
                card_name: a,
                card_id: Le + 1,
                position: Le + 1,
                view_name: `${T[Le+1].source_content_id}/${a}`,
                source_content_id: T[Le + 1].source_content_id,
                source_content_name: T[Le + 1].source_content_name
              }), Ja(Le + 1, u.length, !0), He ? He && C(T.map((e => {
                e.itemNumber === Le - 1 ? e.upNext = !1 : e.itemNumber === Le + 2 ? e.upNext = !0 : e.itemNumber === Le + 1 ? e.active = !0 : e.itemNumber === Le && (e.upNext = !0, e.active = !1);
                const a = e.styles.transform.replace("translate3d(", "").split(",");
                let t = Number(a[0].replace("px", ""));
                t -= Ua();
                const s = `translate3d(${t}px,${a[1]},${a[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: s
                }, e
              }))) : C(T.map((e => (e.itemNumber === Le - 1 ? e.upNext = !1 : e.itemNumber === Le + 2 ? e.upNext = !0 : e.itemNumber === Le + 1 ? (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Ya()}px, ${oa}px, 0) scale(1)`
              }) : e.itemNumber === Le && (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Xa(e,-1)}px, ${Ka(e)}px, 0) scale(${qa()})`
              }), e)))), Ie(Le + 1)
            }(a);
            const s = _e + 1;
            if (!(s > re))
              if (r({
                  event: a ? "carousel_swipe" : "carousel_next",
                  element_placement: t?.toLowerCase() ?? ""
                }), Ja(s, re, !1), He) {
                let e = s * Q * -1;
                e < De && (e = De, L(!0), E(!1), Te(re)), Te(s), C(T.map((a => (a.styles = {
                  ...a.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, a))))
              } else {
                let e = Ce - J;
                Te(s), e < De && (e = De, L(!0), E(!1), Te(re)), Ee(e)
              }
          }, et = function(e) {
            let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (va || ba) return;
            if (wa(!0), !0 === ne) return void
            function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (va) return;
              if (Le - 1 < 0) return;
              const a = T[Le - 1]?.tina?.payload?.meta?.title ?? "card-" + (Le - 1);
              r({
                event: e ? "modal_swipe" : "modal_previous",
                element_placement: t,
                card_name: a,
                card_id: Le - 1,
                position: Le - 1,
                view_name: `${T[Le-1].source_content_id}/${a}`,
                source_content_id: T[Le - 1].source_content_id,
                source_content_name: T[Le - 1].source_content_name
              }), Ja(Le - 1, u.length, !0), He || C(T.map((e => (e.itemNumber === Le + 1 ? e.upNext = !1 : e.itemNumber === Le - 2 ? e.upNext = !0 : e.itemNumber === Le ? (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Xa(e,1)}px, ${Ka(e)}px, 0) scale(${qa()})`
              }) : e.itemNumber === Le - 1 && (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Ya()}px, ${oa}px, 0) scale(1)`
              }), e)))), He && C(T.map((e => {
                e.itemNumber === Le + 1 ? e.upNext = !1 : e.itemNumber === Le - 2 ? e.upNext = !0 : e.itemNumber === Le ? (e.upNext = !0, e.active = !1) : e.itemNumber === Le - 1 && (e.active = !0);
                const a = e.styles.transform.replace("translate3d(", "").split(",");
                let t = Number(a[0].replace("px", ""));
                t += Ua();
                const s = `translate3d(${t}px,${a[1]},${a[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: s
                }, e
              }))), Ie(Le - 1)
            }(a);
            const s = _e - 1;
            if (!(s < 0))
              if (r({
                  event: a ? "carousel_swipe" : "carousel_previous",
                  element_placement: t
                }), Ja(s, re, !1), He) {
                let e = s * Q * -1;
                e > 0 && (e = 0, E(!0), L(!1), Te(0)), Te(s), C(T.map((a => (a.styles = {
                  ...a.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, a))))
              } else {
                let e = Ce + J;
                Te(s), (e > 0 || 0 === e || -1 * e < H) && (e = 0, E(!0), L(!1), Te(0)), Ee(e)
              }
          }, at = e => {
            if (La || ne || He) return;
            const a = Se(e);
            Aa(a.x)
          }, tt = e => {
            if (La || 0 === Ea || ne || He) return;
            const a = Se(e),
              t = a.x > Ea ? 1 : -1;
            let s = Math.abs(Ea - a.x) * t;
            (0 === _e && 1 === t || _e === re && -1 === t) && (s *= .35), Ma(!0), Fa(s)
          }, st = e => {
            if (La || ne || He) return;
            const a = Se(e),
              t = a.x > Ea ? 1 : -1,
              s = Math.abs(Ea - a.x);
            Pa(s > Ba ? t > 0 ? "prev" : "next" : ""), rt()
          }, rt = () => {
            Ia(!0), Aa(0), Fa(0), Ma(!1)
          }, it = e => {
            za && (st(e), Ma(!1))
          }, nt = function(e, a) {
            let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            return e.map(((e, s) => {
              let r = s * Q,
                i = s;
              !1 === He && (i = Math.ceil(.5 * s) + 1, s > 0 && (r = 2 === i ? U : U + Q * (i - 2)));
              const n = $[s];
              return n?.current && (n.current.scrollTop = 0), {
                ...e,
                mobileMode: He,
                itemNumber: s,
                columnNumber: i,
                inModalMode: !1,
                upNext: !0,
                active: !1,
                openModalMode: ot,
                element: n,
                transitionStyle: a,
                styles: {
                  left: r,
                  transform: "" === t ? null : t,
                  height: null,
                  top: null
                }
              }
            }))
          }, ct = () => {
            const e = T[Le]?.tina?.payload?.meta?.title ?? `card-${Le}`;
            if (r({
                event: "modal_close",
                element_placement: t,
                card_name: e,
                card_id: Le,
                position: Le,
                view_name: `${T[Le].source_content_id}/${e}`,
                source_content_id: T[Le].source_content_id,
                source_content_name: T[Le].source_content_name
              }), He) {
              let e = Le * Q * -1;
              e < De && (e = De, L(!0), E(!1), Te(re)), Te(Le), Ja(Le, re, !1), C(nt(u, "cardClose", `translate3d(${e}px, 0, 0)`))
            } else {
              C(nt(u, "cardClose"));
              const e = Math.ceil((T[Le].columnNumber + 1) / K) - 1;
              Te(e);
              let a = e * J * -1;
              Ge < ge ? (a = 0, E(!0), L(!0), Te(0)) : a < De ? (a = De, E(!1), L(!0), Te(re)) : Ja(e, re, !1), Ee(a), Ie(0)
            }
            j.current.style.transform = "translate(0px, 0px)", j.current.style.transition = "all var(--eventDeck-transitionCardClose)", ma(!1), aa(!1), ce(!1), Xe(!1), Ye(!1), sa(!1), setTimeout((() => {
              Ze(!0)
            }), ra)
          };
          (0, s.useEffect)((() => {
            !1 !== Je && (Ze(!1), ma(!1), y.style.zIndex = null, C(T.map((e => (e.transitionStyle = "", e)))))
          }), [Je]);
          const ot = e => {
            setTimeout((() => {
              Ta(e), ja(!0)
            }), 1)
          };
          (0, s.useEffect)((() => {
            if (!Na) return;
            if (ja(!1), va) return;
            Ie(Number(Sa?.target?.dataset?.itemPosition)), Xe(!0), ka(!0), fa && pa(!1);
            const e = T[Sa?.target?.dataset?.itemPosition].source_content_id,
              a = T[Sa?.target?.dataset?.itemPosition].source_content_name,
              s = T[Sa?.target?.dataset?.itemPosition]?.tina?.payload?.meta?.title;
            r({
              event: "card_click",
              element_placement: t,
              card_name: s ?? `card-${Le}`,
              card_id: Sa?.target?.dataset?.itemPosition,
              position: Sa?.target?.dataset?.itemPosition,
              view_name: `${e}/${s}`,
              source_content_id: e,
              source_content_name: a
            })
          }), [Na]), (0, s.useEffect)((() => {
            if (!Ke || ne) return;
            Xe(!1);
            const e = (() => {
              const e = y?.getBoundingClientRect().top;
              return da(-1 * (e - b)), -1 * (e - 140)
            })();
            He && C(T.map((e => {
              const a = e.itemNumber > Le + 3 || e.itemNumber < Le - 3;
              return e.styles = {
                ...e.styles,
                display: a ? "none" : null,
                transition: a ? "none" : null
              }, e
            }))), y.style.zIndex = "var(--eventDeck-zIndexOverlay)", ma(!0), j.current && (j.current.style.transition = "all var(--eventDeck-transitionCardOpen)", j.current.style.transform = `translate(${-1*we}px, ${e}px)`), aa(!0), setTimeout((() => {
              Ye(!0)
            }), 1)
          }), [Ke]);
          const dt = () => {
            C(T.map(((e, a) => {
              e.active = a === Le, e.inModalMode = !0, e.transitionStyle = "cardOpen", He && (e.upNext = Qa(e.itemNumber));
              const t = !He;
              let s = 0;
              if (He) {
                const e = ze + 5 * b;
                s = window.innerHeight - e
              }
              return e.itemNumber < Le ? e.styles = {
                ...e.styles,
                height: He ? `${s}px` : null,
                transform: `translate3d(${Xa(e,-1,t)}px, ${oa}px, 0) scale(${qa()})`
              } : e.itemNumber > Le ? e.styles = {
                ...e.styles,
                height: He ? `${s}px` : null,
                transform: `translate3d(${Xa(e,1,t)}px, ${oa}px, 0) scale(1)`
              } : e.itemNumber === Le && (e.styles = He ? {
                ...e.styles,
                height: `${s}px`,
                transform: `translate3d(${-1*e.styles.left}px, ${oa}px, 0) scale(1)`
              } : {
                left: 0,
                top: 0,
                transform: `translate3d(${Ya()}px, ${oa}px, 0) scale(1)`
              }), e
            })))
          };
          (0, s.useEffect)((() => {
            !1 !== Qe && !0 !== ne && (ce(!0), Ye(!1), Ja(Le, T.length, !0), j.current && (j.current.style.transition = "all var(--eventDeck-transitionCardOpen)", j.current.style.transform = `translate(${-1*we}px, ${oa}px)`), dt(), He ? (Ee(0), ka(!1), ga(!0)) : sa(!0))
          }), [Qe]), (0, s.useEffect)((() => {
            ua && (ga(!1), C(T.map((e => ("none" === e.styles.display && (e.styles.display = null, e.styles.transition = null), e)))))
          }), [ua]);
          const lt = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            C(T.map((a => {
              if (a.upNext = Qa(a.itemNumber), a.itemNumber !== Le) {
                let e = Xa(a, 1);
                a.itemNumber < Le && (e = Xa(a, -1)), a.styles = {
                  ...a.styles,
                  transform: `translate3d(${e}px, ${Ka(a)}px, 0) scale(${qa()})`
                }
              } else a.itemNumber === Le && !He && e && (a.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Ya()}px, ${oa}px, 0) scale(1)`
              });
              return a
            })))
          };
          (0, s.useEffect)((() => {
            !1 !== ta && !0 !== He && (sa(!1), setTimeout((() => {
              lt(), ka(!1)
            }), 1))
          }), [ta]), (0, s.useEffect)((() => {
            C(nt(u, ""))
          }), [U, Q, u]), (0, s.useEffect)((() => {
            const e = window.navigator?.userAgentData?.platform || window.navigator?.platform;
            Ra(["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(e))
          }), []), (0, s.useEffect)((() => {
            const e = oe !== ne;
            ne ? (e && a(!0), Ga && Wa(!0)) : za || ne || (e && a(!1), Ga && Ha && Wa(!1))
          }), [ne, za]), (0, s.useEffect)((() => {
            if (!va) return;
            clearTimeout(ha);
            const e = setTimeout((() => {
              wa(!1)
            }), xa);
            _a(e)
          }), [va]), (0, s.useEffect)((() => {
            h && setTimeout((() => {
              _(!1)
            }), 3e3)
          }), [h]), (0, s.useEffect)((() => {
            _(!0), Ee(0), Te(0);
            let e = Math.ceil(Math.ceil(Ge / Q) / K);
            He && (e = T.length - 1), e < 0 && (e = 1), Ja(0, e, !1), ne && ct()
          }), [He]), (0, s.useEffect)((() => {
            j.current && !ne && (j.current.style.transform = "")
          }), [j, He, ne]), (0, s.useEffect)((() => {
            const e = (l ?? []).map((e => {
              let a = null;
              return "FeaturedEventInfo" === e?.tina?.payload?.content[0]?._template && e?.tina?.variables?.keys?.meta && (a = e?.tina?.variables?.keys?.meta?.title), {
                ...e,
                title: a,
                source_content_id: e?.tina?.payload?.meta?.foreignId,
                source_content_name: e?.tina?.payload?.meta?.foreignTitle,
                view_name: `${e?.tina?.payload?.meta?.foreignId}/${e?.tina?.payload?.meta?.foreignTitle}`
              }
            }));
            g(e)
          }), [l]), (0, s.useEffect)((() => {
            B(u.map((() => (0, s.createRef)())))
          }), [u]), (0, s.useEffect)((() => {
            const e = e => {
              const {
                key: a
              } = e;
              "ArrowLeft" === a ? et(null, !1) : "ArrowRight" === a ? Za(null, !1) : "Escape" === a && ne && ct()
            };
            return document.addEventListener("keydown", e), () => {
              document.removeEventListener("keydown", e)
            }
          }), [va, ba, ne, j]), (0, s.useEffect)((() => {
            if (j.current) {
              let e = 0;
              e = j?.current?.clientHeight, e += je(j?.current, "margin-top"), e += je(j?.current, "margin-bottom"), Me(e)
            }
          }), [j, S]), (0, s.useEffect)((() => {
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
                j.current.style.transform = `translate(${-1*we}px, ${a}px)`
              }
            })()
          }), [He, ne, oa]), (0, s.useEffect)((() => {
            ne || (Ge < me * de && 0 === _e ? (Ee(0), L(!0), E(!0)) : Ce < De ? (L(!0), E(!1), Te(re), Ee(De)) : Ce < 0 && (L(!1), Te(re - 1)), Ge > me * de && A && L(!1))
          }), [De]), (0, s.useEffect)((() => {
            if (x.current) {
              N(x.current);
              const e = je(document.documentElement, "--root-font-size"),
                a = je(x.current, "--eventDeck-modalGutters") * e,
                t = je(x.current, "--eventDeck-collapsedMaxWidth");
              be(t);
              let s = de - 2 * a;
              s > t && (s = t), fe(s), ue(s / de);
              const r = 2 * a + s;
              let i = 0;
              r < de && (i = .5 * (de - r)), he(i);
              let n = je(x.current, "--eventDeck-modalBottomGutter");
              n *= e;
              const c = window.innerHeight - (ze + n);
              ae(.5 * s < c ? s / 4 : .5 * c);
              const o = je(x.current, "--eventDeck-mobileBreakpoint");
              qe(o);
              let d = je(x.current, "--eventDeck-itemSize");
              d *= e, R(d);
              let l = je(x.current, "--eventDeck-modalGutterGap");
              l *= e, Oe(l);
              let m = je(x.current, "--eventDeck-insideMargin");
              m *= e;
              const g = !1 === He ? 2 * d + m : d + m;
              W(g), q(g + m);
              const b = d + m;
              Y(b);
              let v = Math.ceil(.5 * (u.length - 1)) * b + g;
              He && (v = u.length * b), Re(v), 0 !== Ge && Fe(-1 * Ge + s);
              let w = Math.ceil(Math.ceil(v / b) / K);
              (He || ne) && (w = T.length - 1), ie(w);
              const h = je(x.current, "--eventDeck-itemScaleUpAmount");
              ca(h), ia(je(x.current, "--eventDeck-cardCloseTransitionDuration")), k(je(x.current, "--eventDeck-itemImageTitleMargins") * e), null !== f && e !== f && (p(e), ne && lt()), null === f && p(e)
            }
          }), [x, u]), (0, s.useEffect)((() => {
            if (ne && !He) {
              lt();
              const e = y?.getBoundingClientRect().top,
                a = -1 * (e - b);
              a !== oa && da(a)
            }
          }), [v]), (0, s.useEffect)((() => {
            z(!(!P || !A || ne))
          }), [P, A]), (0, s.useEffect)((() => {
            const e = ke()((e => {
              le(e), We(e < Ue);
              const a = (1 - me) / 2;
              Ve(e * a);
              const t = Math.floor(ge / Q);
              X(t);
              let s = t * Q;
              s > pe && (s = pe), Z(s), se(e - e * a);
              const r = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
              if (r !== v && w(r), ne && r === v && !h) {
                const e = y?.getBoundingClientRect().top,
                  a = -1 * (e - b);
                a !== oa && da(a)
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
          }), [Q, me, ne, He]), (0, s.useEffect)((() => {
            !1 !== ne && !0 !== h && (He ? dt() : lt(!0))
          }), [te, J, Be, O, de, $e, ee, oa]), (0, s.useEffect)((() => {
            const e = () => {
              if (x.current && fa) {
                const e = x.current.getBoundingClientRect(),
                  a = .2 * window.innerHeight;
                window.innerHeight - e.top >= a && pa(!1)
              }
            };
            return e(), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
          }), [x]);
          const mt = (0, s.useCallback)((() => {
            if (null !== x.current && !c) {
              const {
                top: a
              } = x?.current?.getBoundingClientRect() || 0;
              a <= .6 * window.innerHeight && (r({
                event: "page_section_impression",
                element_placement: e?._memoq?.title?.toLowerCase()
              }), o(!0))
            }
          }), [x]);
          (0, s.useEffect)((() => (window.addEventListener("scroll", mt), () => {
            window.removeEventListener("scroll", mt)
          })), [mt, x]), (0, s.useEffect)((() => {
            "next" === Ca ? (Za(null, !0), Pa("")) : "prev" === Ca && (et(null, !0), Pa(""))
          }), [Ca]), (0, s.useEffect)((() => {
            x.current && x.current.addEventListener("mouseleave", (() => {
              za && rt()
            }))
          }), [x, za]), (0, s.useEffect)((() => (document.body.addEventListener("mouseleave", it), () => {
            document.body.removeEventListener("mouseleave", it)
          })), [za]), (0, s.useEffect)((() => {
            La && setTimeout((() => {
              Ia(!1), Aa(0)
            }), xa)
          }), [La]), (0, s.useEffect)((() => {
            Oa(He ? 20 : 100)
          }), [He]), (0, s.useEffect)((() => {
            ya(ne ? 500 : 100)
          }), [ne]);
          const ut = (0, n.useTinaComponents)(),
            gt = (0, s.useMemo)((() => ({
              ...ut,
              CardWithImageGallery: xe,
              HTMLElement: M.A,
              ImageWithBadge: D.A,
              Carousel: F.A,
              GroupOfItems: V(),
              UnorderedList: ve.A
            })), [ut]),
            ft = (0, s.useMemo)((() => T.map((e => (0, s.createElement)(Pe, {
              ...e,
              refDeck: x,
              key: e?.id ?? e?.sync_hash,
              components: gt,
              prevPage: et,
              nextPage: Za,
              loadCssRawValue: je,
              selectedItemNumber: Le,
              carouselTitle: t,
              sharedDraggingDelta: $a,
              setSharedDraggingDelta: Va
            })))), [T, x, gt, et, Za, Le]);
          return !ft?.length || ft.length <= 0 ? null : (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleb3206f796ddd61f3b6d1974ea73a4f22",
              "data-modal-mode": ea,
              "aria-hidden": "true"
            }), (0, m.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlee623ea950c02afbb9d28949ca4701ca4",
              "data-modal-mode": ne,
              "data-faded": fa,
              ref: x,
              onTouchStart: at,
              onTouchMove: tt,
              onTouchEnd: st,
              onMouseDown: at,
              onMouseMove: tt,
              onMouseUp: st,
              tabIndex: -1,
              role: "presentation",
              children: [(0, m.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articleb8d0a147dd4f1835ba5495bac02f4c11",
                "aria-hidden": "true"
              }), (0, m.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articlea758545d118b90def20e860fe541c26e",
                "data-modal-mode": ne,
                ref: j,
                "data-animating": la,
                children: [(0, m.jsx)("h2", {
                  className: "rockstargames-modules-core-newswire-articlebe12152c36226103d53925a82ba66452",
                  children: t
                }), (0, m.jsx)(Ae, {
                  prevPage: et,
                  prevBtnDisabled: P,
                  nextPage: Za,
                  nextBtnDisabled: A,
                  selectedItemNumber: Le,
                  itemsData: u,
                  closeModalMode: ct,
                  inModalMode: ne,
                  controlsHidden: I
                })]
              }), (0, m.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlef369e1390b3aa251df43bea9c55634f2",
                "data-modal-mode": ne,
                "data-is-dragging": za,
                style: {
                  transform: `translate3d(${Ce+Da}px, 0, 0)`,
                  width: `${Ge}px`
                },
                ref: S,
                children: ft
              })]
            })]
          })
        }), U), {
          pillBtn: "rockstargames-modules-core-newswire-articleddaada7b150b18de710c9f77384c6537",
          selected: "rockstargames-modules-core-newswire-articleb4fbb4006fc27b899dac5e522ef574e3",
          customModalContent: "rockstargames-modules-core-newswire-articlefc96cdfdaeb2ad81b1b409fcb233657e",
          content: "rockstargames-modules-core-newswire-articlec65ddebc8ee2173143d87e1079f2455a"
        }),
        {
          variants: Ie
        } = c.Animations;
      t(44096), t(13609), t(96106), t(95168), t(47313);
      const {
        variants: ze
      } = c.Animations;
      var Me = t(23031);
      var De = t(54196),
        Fe = t(77279);
      const {
        Gen9CoreCarousel: $e,
        framer: Ve,
        useTinaModuleFetchByIds: Be,
        withSimpleErrorBoundary: Oe
      } = De, Ge = {
        Card: e => {
          let {
            id: a,
            title: t,
            content: r,
            size: i = "md",
            expandedType: c = "short",
            textOverlayProps: o = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: d = [],
            deckProps: l = {},
            to: u = null,
            tina: g = {},
            position: f = 0,
            sectionTitle: p = "",
            theme: b,
            pricingOptions: k,
            cardIds: v,
            platformOptions: w = null
          } = e;
          const h = (0, n.useTinaPayload)(),
            _ = g?.payload?.meta?.cdn ?? h?.meta?.prod ?? !1,
            [x, y] = (0, s.useState)(l?.size ?? i),
            [N, j] = (0, s.useState)(0),
            S = void 0 !== k?.hasPricingOptions || void 0 !== w?.hasPlatformOptions;
          return (0, s.useEffect)((() => {
            y(l?.size ?? i)
          }), [l?.size, i]), (0, m.jsx)(Y, {
            id: a,
            title: t,
            size: x,
            expandedType: c,
            images: d,
            deckProps: l,
            prod: _,
            payload: {
              content: r,
              meta: {}
            },
            variants: Ie.plainCard,
            textOverlayProps: o,
            modalProps: {
              className: Le.customModal,
              contentClassName: Le.customModalContent
            },
            expandedCardContents: (0, m.jsx)(le, {
              images: d,
              prod: _,
              expandedView: !0
            }),
            position: f,
            sectionTitle: p,
            theme: b,
            cardIds: v,
            pricingOptions: k,
            platformOptions: w,
            pricingContainerHeight: N,
            isProductCard: S,
            children: (0, m.jsx)(ae, {
              expandedType: c,
              to: u,
              sectionTitle: p,
              id: a,
              cardTitle: t,
              position: f,
              children: (0, m.jsx)("div", {
                className: Le.content,
                "data-product": S,
                children: (0, m.jsx)(E, {
                  title: t,
                  size: x,
                  textOverlayProps: o,
                  pricingOptions: k,
                  platformOptions: w,
                  setPricingContainerHeight: j,
                  children: (0, m.jsx)(le, {
                    images: d,
                    prod: _
                  })
                })
              })
            })
          })
        },
        CardWithImageGallery: xe,
        TextCard: e => {
          let {
            title: a,
            content: t,
            size: s = "md",
            badgeText: r
          } = e;
          const i = {
            ...(0, n.useTinaComponents)(),
            HTMLElement: M.A,
            UnorderedList: ve.A,
            ListItem: Me.A
          };
          return (0, m.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlecfa8d259e6ae05cd5f97d50306be5ffe",
            "data-size": s,
            children: (0, m.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlea4a39548fac12526e8721ffa8813e66a",
              children: [r && (0, m.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlecf77e65e2af63ee114825607dde3d11e",
                children: r
              }), (0, m.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articlef903ce7e605696e1bc18c4bc22274a6e",
                children: [a && (0, m.jsx)("h3", {
                  children: a
                }), (0, m.jsx)(n.TinaParser, {
                  components: i,
                  tina: {
                    payload: {
                      content: t
                    }
                  }
                })]
              })]
            })
          })
        },
        ...De
      };
      var Re = function(e) {
        return e.extraSmall = "xs", e.small = "sm", e.medium = "md", e.large = "lg", e.extraLarge = "xl", e.frontOfBox = "fob", e.custom = "custom", e
      }(Re || {});
      const He = Ve.withFadeIn(Oe((e => {
        let {
          cards: a = [],
          size: t,
          name: r,
          title: c,
          description: o,
          disclaimer: d,
          customSlidesPerView: l = null,
          theme: u = "none",
          cardSizeBreakpoints: g = {},
          customAspectRatio: f = "3/1",
          titleBadge: p = null,
          id: b = ""
        } = e;
        const k = (0, s.useRef)(null),
          v = i().map(a, "id"),
          w = Be({
            ids: v
          }),
          [h, _] = (0, s.useState)(l),
          [x] = (0, B.useSearchParams)(),
          [y, N] = (0, s.useState)(!1);
        (0, s.useEffect)((() => {
          let e;
          if (e = Re.frontOfBox, t === e) {
            const e = x.get("section");
            if (e && "games" === e && !y && (N(!0), k.current)) {
              const e = 100;
              window.scrollTo(0, k.current.offsetTop - e)
            }
          }
        }), []), (0, s.useEffect)((() => {
          if (!k.current) return;
          const e = () => {
            const e = l || window.getComputedStyle(k.current).getPropertyValue("--slides-per-view");
            _(e)
          };
          return window.addEventListener("resize", e), e(), () => {
            window.removeEventListener("resize", e)
          }
        }));
        const j = (0, s.useMemo)((() => {
          let e = 0;
          if (!w) return null;
          let a = "blank",
            s = !1;
          return w.forEach((e => {
            "cover-card" === e?.tina?.payload?.meta?.type && (a = e?.id, void 0 !== e?.tina?.payload?.content[0]?.excludeFromModal && (s = e.tina.payload.content[0].excludeFromModal))
          })), w.reduce(((r, o) => {
            if (o) {
              const {
                id: d,
                tina: l
              } = o, g = i().clone(l);
              i().set(g, "payload.meta.id", d);
              let f = v;
              f = v.filter((e => e !== a || e === a && !s)), r.push((0, m.jsx)(n.TinaParser, {
                components: Ge,
                tina: g,
                componentProps: {
                  deckProps: {
                    size: t
                  },
                  tina: g,
                  id: d,
                  position: e,
                  sectionTitle: c,
                  theme: u,
                  cardIds: f
                }
              }, d)), e += 1
            }
            return r
          }), [])
        }), [w, t]);
        return (0, m.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlecf8eaaa96e41e0c9b5a5a1745ded9986",
          "data-theme": u,
          ref: k,
          id: b,
          children: [(0, m.jsx)($e, {
            description: o,
            size: t,
            cardSizeBreakpoints: g,
            slideChildren: j,
            title: c,
            name: r,
            customSlidesPerView: h,
            customAspectRatio: f,
            titleBadge: p,
            theme: u
          }), d && (0, m.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articled6d0f9d842469dec608825829148dff6",
            children: (0, m.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articlee22c0580e1e1d2471b4ca2e60e6b900f",
              children: (0, m.jsx)(Fe.A, {
                html: d
              })
            })
          })]
        })
      })))
    },
    43193: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        Jsx0: () => i,
        Jsx1: () => I,
        Jsx2: () => $
      });
      var s = t(4403);
      var r = t(91029);
      const i = e => {
        let {
          article: a,
          children: t
        } = e;
        const i = a.primary_tags[a.primary_tags.length > 1 && 722 === a.primary_tags[0].id ? 1 : 0];
        return (0, r.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlec853d8a152fed83cf33e0fc661cf8214",
          children: [(0, r.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlef7db33be003c658d5566777dc41b3d8d",
            children: [(0, r.jsxs)("h1", {
              children: [a.title, a.subtitle ? (0, r.jsx)("span", {
                children: a.subtitle
              }) : ""]
            }), (0, r.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlec1fbf3067a1ce8e71e38d92093f62f88",
              children: [a.primary_tags.length ? (0, r.jsx)(s.A, {
                title: i.name,
                href: `/newswire?tag_id=${i.id}`
              }) : "", (0, r.jsx)("time", {
                dateTime: a.created,
                children: a.created_formatted
              })]
            }), a.posts_hero && "iframe" === a.posts_hero.type ? (0, r.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlebb59ee9d50a65d6978fff34966f65bf8",
              children: (0, r.jsx)("iframe", {
                src: a.posts_hero.hero
              })
            }) : "", (0, r.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlefd4ea03865b0f756d342c3eee228e9f8",
              dangerouslySetInnerHTML: {
                __html: a.content
              }
            })]
          }), t]
        })
      };
      var n = t(62229),
        c = t(57770),
        o = t.n(c),
        d = t(95966),
        l = t(29551),
        m = t(99704),
        u = t(57308),
        g = t(12363),
        f = t(47313),
        p = t(44096),
        b = t(69814),
        k = t(13609),
        v = t(44814),
        w = t(40003),
        h = t(83860),
        _ = t(80350),
        x = t(22390),
        y = t(89773),
        N = t(76834),
        j = t(46012),
        S = t(6050),
        T = t(24069),
        C = t(15310),
        P = t.n(C),
        E = t(64064),
        A = t.n(E),
        L = t(79905);
      const I = (0, d.withTranslations)((e => {
        let {
          article: a,
          children: t,
          t: i
        } = e;
        const c = (0, d.useLocale)(),
          C = {
            A: e => (0, r.jsx)(g.A, {
              ...e
            }),
            AnchorLink: e => (0, r.jsx)(L.AnchorLink, {
              ...e
            }),
            ArticleTag: e => (0, r.jsx)(s.A, {
              ...e
            }),
            AudioPlayer: e => (0, r.jsx)(l.A, {
              ...e
            }),
            Button: e => (0, r.jsx)(f.A, {
              ...e
            }),
            Carousel: e => (0, r.jsx)(m.A, {
              ...e
            }),
            Cta: e => (0, r.jsx)(p.A, {
              ...e
            }),
            Discounts: e => (0, r.jsx)(L.Discounts, {
              ...e
            }),
            Donate: e => (0, r.jsx)(L.Donate, {
              ...e
            }),
            FadeInContent: e => (0, r.jsx)(b.A, {
              ...e
            }),
            FontClip: e => (0, r.jsx)(L.FontClip, {
              ...e
            }),
            GamingRewards: e => (0, r.jsx)(L.GamingRewards, {
              ...e
            }),
            Gif: e => (0, r.jsx)(A(), {
              ...e
            }),
            Grid: e => (0, r.jsx)(k.A, {
              ...e
            }),
            GroupOfItems: e => (0, r.jsx)(P(), {
              ...e
            }),
            HeroImage: e => (0, r.jsx)(L.HeroImage, {
              ...e
            }),
            HTMLElement: e => (0, r.jsx)(v.A, {
              ...e
            }),
            ImageWithBadge: e => (0, r.jsx)(u.A, {
              ...e
            }),
            MultiSourceImage: e => (0, r.jsx)(w.A, {
              ...e
            }),
            NewswireFull: e => (0, r.jsx)(L.NewswireFull, {
              ...e
            }),
            Title: e => (0, r.jsx)(L.NewswireTitle, {
              ...e
            }),
            PctBar: e => (0, r.jsx)(L.PctBar, {
              ...e
            }),
            Podium: e => (0, r.jsx)(L.Podium, {
              ...e
            }),
            ResponsiveGridBox: e => (0, r.jsx)(h.A, {
              ...e
            }),
            ResponsiveGridItem: e => (0, r.jsx)(_.A, {
              ...e
            }),
            ResponsiveFlexBox: e => (0, r.jsx)(x.A, {
              ...e
            }),
            ResponsiveFlexItem: e => (0, r.jsx)(y.A, {
              ...e
            }),
            ResponsiveSection: e => (0, r.jsx)(N.A, {
              ...e
            }),
            ResponsiveImg: e => (0, r.jsx)(j.A, {
              ...e
            }),
            Separator: e => (0, r.jsx)(S.A, {
              ...e
            }),
            Tag: e => (0, r.jsx)(s.A, {
              ...e
            }),
            UnorderedList: e => (0, r.jsx)(T.A, {
              ...e
            })
          },
          E = a.posts_jsx.variables_us_defaulted,
          [I] = (0, n.useState)((0, r.jsx)(o(), {
            renderInWrapper: !1,
            bindings: {
              getArray: (e, a) => e[a],
              renderHtml: e => (0, r.jsx)("span", {
                dangerouslySetInnerHTML: {
                  __html: e
                }
              }, I),
              article: a,
              locale: c,
              t: i,
              variables: E
            },
            components: C,
            jsx: a.posts_jsx.markup,
            onError: e => {
              console.error(e)
            }
          }));
        return (0, r.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlece2d8080309005e155e5422fd38faa5d",
          children: [I, t]
        })
      }));
      var z = t(92440),
        M = t(14743),
        D = t(60188),
        F = t(81788);
      const $ = e => {
        let {
          children: a,
          payload: t,
          variablesKeys: s
        } = e, i = !1;
        i = !0;
        const [n] = (0, F.getLocale)(), c = e => {
          let {
            children: a
          } = e;
          return (0, r.jsx)(D.NP, {
            locale: n?.iso,
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultContrastMode: "normal",
            defaultPlatformScale: "desktop",
            children: a
          })
        };
        return (0, r.jsx)(c, {
          children: (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articledad06d3570a3cd17332c2bfb19d8f611",
            children: [(0, r.jsx)(z.TinaParser, {
              tina: {
                payload: t,
                variables: {
                  keys: s
                }
              },
              components: M.componentsForTinaParser
            }), a]
          })
        })
      }
    },
    79905: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        AnchorLink: () => c,
        Discounts: () => P,
        Donate: () => I,
        Engagement: () => r(),
        EventInfo: () => q,
        FeaturedEventInfo: () => Q,
        FontClip: () => K,
        GamingRewards: () => ee,
        Gen9List: () => re,
        HeroImage: () => ie.A,
        NewswireFull: () => oe,
        NewswireTitle: () => H,
        PctBar: () => de,
        Podium: () => ue
      });
      var s = t(20206),
        r = t.n(s),
        i = t(62229),
        n = t(91029);
      const c = e => {
        let {
          children: a,
          hash: t
        } = e;
        const s = (0, i.useRef)(null),
          r = window.location.hash?.replace("#", "") === t ? t : null;
        return (0, i.useEffect)((() => {
          r && setTimeout((() => {
            const e = document.getElementById(r);
            e && e.scrollIntoView()
          }), 1e3)
        }), []), (0, n.jsx)("div", {
          ref: s,
          id: t,
          children: a
        })
      };
      var o = t(15310),
        d = t.n(o);
      const l = e => {
        let {
          items: a,
          columns: t = {},
          noCarousel: s = !1,
          noInfiniteScroll: r = !1,
          ...i
        } = e;
        const c = i?.style ?? {};
        return s && (t?.mobile && (c["--mobile-cols"] = t.mobile), t?.desktop && (c["--desktop-cols"] = t.desktop)), (0, n.jsxs)(n.Fragment, {
          children: [i.title && (0, n.jsx)("p", {
            className: "rockstargames-modules-core-newswire-articlebbdcc06cced1ed19baee825aacefee0b",
            children: i.title
          }), (0, n.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articleba7b5228b2134bc8563fe2a8f65ca885",
            children: [s && (0, n.jsx)(d(), {
              style: {
                ...c,
                "--grid-gap-dynamic": "2rem 0"
              },
              className: "rockstargames-modules-core-newswire-articlea225b2127250d1b0285289115c698451",
              renderTemplate: "standard",
              items: a,
              ...i
            }), !s && (0, n.jsx)(y, {
              items: a,
              noInfiniteScroll: r,
              perPage: 2,
              perPageMobile: 1
            })]
          })]
        })
      };
      var m = t(40003),
        u = t(24069),
        g = t(99704),
        f = t(57308),
        p = t(59535);
      const b = {
          limitedGrid: "rockstargames-modules-core-newswire-articled07881e40e8304c6a71f439189eaf726",
          gridCarousel: "rockstargames-modules-core-newswire-articled2a5e95f5d1614aef34b0ec5c2b7447d",
          limitedGridContent: "rockstargames-modules-core-newswire-articleef7041902f2c885a1e72e11068b88472",
          columnsDesktop2: "rockstargames-modules-core-newswire-articlef23776fba4cb02462ec7d4f659513b29",
          thirdLine: "rockstargames-modules-core-newswire-articleba521de069b7af801a2ce695f33cbcce",
          gridItem: "rockstargames-modules-core-newswire-articled7d79c7b10177f979b26b7a23f8ce275",
          columnsDesktop3: "rockstargames-modules-core-newswire-articled913dbb31f95159240657470a2d5f843",
          columnsDesktop4: "rockstargames-modules-core-newswire-articlef86c12578b1b364cfcf74e21ec26b8cf",
          extraDiv: "rockstargames-modules-core-newswire-articled4111fecce89d56df4c14b2046b9f96e",
          gridText: "rockstargames-modules-core-newswire-articlea0473db56227eedff7fa7b8caef70981",
          noTextFit: "rockstargames-modules-core-newswire-articlee4c624766c99d0bc6602652f0926cf66",
          coupons: "rockstargames-modules-core-newswire-articlef5e7daa5da737825dfb76d422e3fcc40",
          imageArea: "rockstargames-modules-core-newswire-articlefe28c5ef2a9b0db8497edb03e6abfd26",
          carouselOnMobile: "rockstargames-modules-core-newswire-articlea560549799c4dc8483f97da50f1981b6",
          imageAreaBg: "rockstargames-modules-core-newswire-articleeb7557efb1c2a51b525bb0eddad25f5e",
          carouselDesc: "rockstargames-modules-core-newswire-articlee9bfd17e6e24970ba255a08b588a037d"
        },
        k = e => {
          let {
            to: a,
            children: t
          } = e;
          return a ? (0, n.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: t
          }) : t
        },
        v = e => {
          let {
            items: a,
            noTextFit: t,
            type: s,
            carouselOnMobile: r,
            columns: c = {
              desktop: 3,
              mobile: 2
            }
          } = e;
          const [o, d] = (0, i.useState)(null), [l, m] = (0, i.useState)(3), u = (0, i.useRef)(null);
          return (0, i.useEffect)((() => {
            const e = window.getComputedStyle(u.current).getPropertyValue("--divisible-desktop"),
              t = () => {
                const a = window.innerWidth;
                m(a <= 767 ? 2 : e)
              };
            if (a?.content.length && a?.content.length >= l) {
              let {
                length: e
              } = a.content;
              const t = [];
              if (e % l != 0) {
                let a = 0;
                do {
                  t.push((0, n.jsx)("div", {
                    className: `${b.gridItem} ${b.extraDiv}`
                  }, "limited-grid-" + a++)), e++
                } while (e % l != 0)
              }
              d(t)
            }
            return window.addEventListener("resize", t), t(), () => window.removeEventListener("resize", t)
          }), [l, u]), (0, n.jsxs)("div", {
            className: `${b.limitedGrid} ${r?b.carouselOnMobile:""}`,
            children: [(0, n.jsxs)("div", {
              ref: u,
              style: {
                "--divisible-desktop": c.desktop,
                "--divisible-mobile": c.mobile
              },
              className: `\n                    ${b.limitedGridContent}\n                    ${2===c.desktop?b.columnsDesktop2:""}\n                    ${3===c.desktop?b.columnsDesktop3:""}\n                    ${c.desktop>=4?b.columnsDesktop4:""}\n                    ${t?b.noTextFit:""}\n                    ${s?b[s]:""}\n                `,
              children: [(0, n.jsx)("div", {
                className: b.thirdLine
              }), a.content.map(((e, a) => (0, n.jsx)("div", {
                className: b.gridItem,
                children: (0, n.jsxs)(k, {
                  to: e?.href ?? e?.to,
                  children: [!t && (0, n.jsx)(p.A, {
                    className: b.gridText,
                    min: 16,
                    max: 1e3,
                    mode: "single",
                    children: e.title
                  }), (0, n.jsx)("div", {
                    className: b.imageArea,
                    children: (0, n.jsx)(f.A, {
                      image: e.image,
                      ariaLabel: e.ariaLabel,
                      badgeType: "badge2",
                      badge: e.badge
                    })
                  }), t && (0, n.jsx)("p", {
                    children: e.title
                  })]
                })
              }, a))), o]
            }), r && (0, n.jsx)("div", {
              className: b.gridCarousel,
              children: (0, n.jsx)(g.A, {
                children: a.content.map(((e, a) => (0, n.jsxs)("div", {
                  children: [(0, n.jsx)("div", {
                    className: `${b.imageArea} ${b.imageAreaBg}`,
                    children: (0, n.jsx)(f.A, {
                      className: s ? b[s] : "",
                      image: e.image,
                      ariaLabel: e.ariaLabel,
                      badgeType: "badge2",
                      badge: e.badge
                    })
                  }), e.title && (0, n.jsx)("p", {
                    className: b.carouselDesc,
                    children: (0, n.jsx)(k, {
                      to: e?.href ?? e?.to,
                      children: e.title
                    })
                  })]
                }, a)))
              })
            })]
          })
        },
        w = e => {
          let {
            items: a = []
          } = e;
          if (!a.length) return null;
          let t = 0,
            s = 0;
          return a.map(((e, a) => {
            if (e.limitedList?.content || e.limitedGridList?.content) {
              const t = [];
              return e.limitedList?.content && t.push((0, n.jsx)(y, {
                items: e.limitedList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? a)), e.limitedGridList?.content && t.push((0, n.jsx)(v, {
                columns: e.limitedGridList.columns,
                items: e.limitedGridList
              }, e?.key ?? a)), s++, (0, n.jsxs)("div", {
                children: [1 === s && (0, n.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlee14aea44e0cd05cab3f737d9241c40cf",
                  children: (0, n.jsx)("div", {
                    className: "rockstargames-modules-core-newswire-articlecf8636d2845d410d7b3fdb9c5fd9f451"
                  })
                }), t]
              }, a)
            }
            if (e.discountsList?.content || e.discountsGridList?.content) {
              const s = [];
              return e.discountsList?.content && s.push((0, n.jsx)(y, {
                items: e.discountsList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? a)), e.discountsGridList?.content && s.push((0, n.jsx)(v, {
                noTextFit: !0,
                carouselOnMobile: !0,
                type: e.type ?? e.discountsGridList.type,
                columns: e.discountsGridList.columns,
                items: e.discountsGridList
              }, e?.key ?? a)), e?.list && s.push((0, n.jsx)(u.A, {
                ...e
              })), t++, (0, n.jsxs)("div", {
                children: [1 === t && (0, n.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articleab089b387a91263ebf4e3e5f9457113c"
                }), s]
              }, a)
            }
            return null
          }))
        };
      var h = t(95755);
      const _ = {
          wrapper: "rockstargames-modules-core-newswire-articlecf1f4a81a7b06d2f1741f014efccd835",
          discountsCarouselItem: "rockstargames-modules-core-newswire-articledbe871f29ce887fdb3633adfa3a508e3",
          fontUpdate: "rockstargames-modules-core-newswire-articleb9e436db9c819a6291277c1c3b14a102",
          discountsCarousel: "rockstargames-modules-core-newswire-articlee323ee7ef1389c61bd0f7f5edf7ae87f",
          singleImage: "rockstargames-modules-core-newswire-articleef61c1eb2ac13f1f00f9fbcf97b591d9"
        },
        x = e => {
          let {
            wrapper: a,
            children: t,
            length: s
          } = e;
          return s > 1 ? a(t) : t
        },
        y = e => {
          let {
            items: a,
            noInfiniteScroll: t = !1,
            size: s = null,
            perPage: r = null,
            customSlidesPerView: c = null,
            style: o = {}
          } = e;
          const d = (0, i.useRef)(null),
            [l, m] = (0, i.useState)(null),
            [u, p] = (0, i.useState)(s);
          return (0, i.useEffect)((() => {
            !s && r && p(1 === r ? "lg" : "sm"), s || r || (p("lg"), console.error('Error: DiscountsCarousel expects a prop "size" in order to display the correct amount of slides. Defaulting to lg.'))
          }), [s, r]), (0, i.useEffect)((() => {
            if (!d.current) return;
            const e = () => {
              const e = c || window.getComputedStyle(d.current).getPropertyValue("--slides-per-view");
              m(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [d, c]), a.length ? (0, n.jsx)(x, {
            length: a.length,
            wrapper: e => (0, n.jsx)("div", {
              "data-size": u,
              ref: d,
              className: _.wrapper,
              children: (0, n.jsx)(g.A, {
                className: _.discountsCarousel,
                noInfiniteScroll: t,
                style: {
                  ...o,
                  "--per-page": l,
                  "--carousel-column-gap": "1rem"
                },
                children: e
              })
            }),
            children: a.map(((e, t) => (0, n.jsxs)("div", {
              className: [_.discountsCarouselItem, 1 === a.length ? _.singleImage : ""].join(" "),
              children: [(0, n.jsx)(f.A, {
                ariaLabel: e?.ariaLabel,
                image: e?.image ?? {
                  alt: e?.alt ?? "",
                  desktop: e?.img ?? null,
                  mobile: e?.imgMobile ?? null
                },
                badge: e?.badge ?? e?.image?.badge ?? e.discountTxt,
                splitter: e?.splitter ?? e?.image?.splitter,
                badgeType: "badgeSizeUpdate"
              }), (0, n.jsx)(h.A, {
                className: _.fontUpdate,
                item: e
              })]
            }, e?.key ?? t)))
          }) : (console.error('Error: DiscountsCarousel expects a prop "items" that contains an array of objects.'), null)
        };
      var N = t(13609),
        j = t(44814);
      const S = e => {
          let {
            items: a = [],
            style: t = {}
          } = e;
          return a.length ? (0, n.jsx)(N.A, {
            style: {
              "--grid-gap-dynamic": "var(--grid-gap-static-lg)",
              "--padding-dynamic-tb": "var(--grid-gap-static-lg)",
              "--image-rounding-dynamic": "0",
              ...t
            },
            children: a.map(((e, a) => e?.title_and_description ? (0, n.jsxs)(N.A, {
              context: "readable-text",
              style: {
                textAlign: "left",
                "--grid-gap-dynamic": "var(--grid-gap-static-xs)",
                background: "transparent"
              },
              children: [e?.title_and_description.title && (0, n.jsx)("h1", {
                className: "large",
                children: e.title_and_description.title
              }), e?.title_and_description.description && (0, n.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: e.title_and_description.description
                }
              })]
            }, e?.key ?? a) : e?.limitedList?.content ? (0, n.jsx)(y, {
              items: e.limitedList.content,
              noInfiniteScroll: e?.noInfiniteScroll,
              perPage: e?.perPage,
              size: e?.size
            }, e?.key ?? a) : e?.discountsGridList?.content ? (0, n.jsx)(l, {
              noCarousel: !0,
              columns: e.discountsGridList?.columns,
              items: e.discountsGridList.content
            }, e?.key ?? a) : e?.content ? (0, n.jsx)(j.A, {
              ...e,
              children: e.content
            }, e?.key ?? a) : e?.list ? (0, n.jsx)(u.A, {
              ...e
            }, e?.key ?? a) : void 0))
          }) : null
        },
        T = {
          area: "rockstargames-modules-core-newswire-articlec0f0f1d12bd9d73702d5518ddfeb248a",
          btmImg: "rockstargames-modules-core-newswire-articlef7d259739c10010bebbf5a4566021799",
          limitedTopImg: "rockstargames-modules-core-newswire-articlefc4ab7fde14e1466eb3397a40c26a8f0",
          topImg: "rockstargames-modules-core-newswire-articlee034ccf8bbda4129691cf7da53b87170"
        },
        C = e => {
          let {
            items: a,
            renderTemplate: t,
            ...s
          } = e;
          switch (t) {
            case "gtav":
            case "gtao":
              return (0, n.jsx)(S, {
                items: a,
                ...s
              });
            case "grid":
              return (0, n.jsx)(l, {
                items: a,
                ...s
              });
            default:
              return (0, n.jsx)(w, {
                items: a
              })
          }
        },
        P = e => {
          let {
            items: a,
            renderTemplate: t,
            style: s,
            ...r
          } = e;
          return (0, n.jsx)("div", {
            className: T.area,
            "data-context": "discounts",
            children: (0, n.jsxs)("div", {
              className: T.discountsContent,
              children: [(0, n.jsx)(C, {
                renderTemplate: t,
                items: a,
                props: r,
                style: s
              }), (0, n.jsx)("div", {
                className: T.btmImg
              })]
            })
          })
        };
      var E = t(2973),
        A = t.n(E);
      const L = {
          donate: "rockstargames-modules-core-newswire-articleca3a67499205086cce3ec4006dde027a",
          largePaddingSides: "rockstargames-modules-core-newswire-articlee9aa6553439a489ffff3140708eb84c9"
        },
        I = e => {
          let {
            text: a
          } = e;
          const {
            sanitize: t
          } = A();
          return (0, n.jsx)("div", {
            className: [L.donate, "normalPaddingTopBottom largePaddingSides"].join(" "),
            children: (0, n.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: t(a)
              }
            })
          })
        };
      var z = t(16188),
        M = t.n(z),
        D = t(92440),
        F = t(95966),
        $ = t(64064),
        V = t.n($),
        B = t(31879),
        O = t.n(B),
        G = t(12363);
      const R = {
          title: "rockstargames-modules-core-newswire-articlea82cdf4d56d4fbadd86d56caf6b7da04",
          main: "rockstargames-modules-core-newswire-articleaf5256fb296a82d00fb900a2380a5d7f",
          breadcrumbs: "rockstargames-modules-core-newswire-articlea300b88d467c420e15084fc2eeeb1e09"
        },
        H = (0, F.withTranslations)((e => {
          let {
            children: a,
            intro: t,
            image: s = {},
            style: r = {},
            t: i,
            className: c = "",
            variant: o = null
          } = e, d = {};
          void 0 !== r.toggleInvertSeparator && (d = {
            "--breadcrumb-separator-filter-invert": r.toggleInvertSeparator ? "invert(0)" : "invert(1)"
          });
          const l = (0, F.useNewswirePost)(),
            m = {},
            u = m?.meta?.title ?? l?.title,
            g = m?.meta?.subtitle ?? l?.subtitle,
            f = g ? (0, n.jsx)("h3", {
              "data-context": "newswire-subtitle",
              children: g
            }) : "",
            p = [{
              text: i("Newswire"),
              to: "/newswire"
            }],
            {
              src: b
            } = (0, D.useImageParser)(s),
            k = (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("time", {
                dateTime: l.created,
                children: l.created_formatted
              }), t ? (0, n.jsx)(h.A, {
                item: t
              }) : "", a]
            });
          l?.primary_tags?.length && p.push({
            text: l.primary_tags[0].name,
            to: `/newswire?tag_id=${l.primary_tags[0].id}`
          }), l?.secondary_tags?.length && p.push({
            text: l.secondary_tags[0].name,
            to: `/newswire?tag_id=${l.secondary_tags[0].id}`
          });
          const v = (0, n.jsx)("div", {
            className: R.breadcrumbs,
            children: p.map((e => (0, n.jsx)(G.A, {
              to: e.to,
              children: e.text
            }, e.to)))
          });
          return b?.desktop && (r.background = `url(${b.desktop}) center/cover no-repeat`), (0, n.jsx)("div", {
            className: [c, R.title].join(" "),
            style: {
              ...r,
              ...d
            },
            children: "separated" === o ? (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsxs)("header", {
                "data-context": "title",
                children: [v, (0, n.jsx)("h1", {
                  children: u
                })]
              }), (0, n.jsxs)("footer", {
                "data-context": "title",
                children: [f, k]
              })]
            }) : (0, n.jsxs)(n.Fragment, {
              children: [v, (0, n.jsxs)("div", {
                className: R.main,
                children: [(0, n.jsx)("h1", {
                  children: u
                }), f]
              }), k]
            })
          })
        })),
        W = {
          pillBtn: "rockstargames-modules-core-newswire-articlef5d4e8bec1c576430dea6b22ec107759",
          selected: "rockstargames-modules-core-newswire-articledb6bc6b6bcb510524004bd740d0e8ba9",
          event: "rockstargames-modules-core-newswire-articled2fab08f92d966e9f62ad805f1e15542",
          featured: "rockstargames-modules-core-newswire-articlebb5a0823d43098a1cc049f2296fcf49e",
          eventInfo: "rockstargames-modules-core-newswire-articlee4a137d11e066c1ea5b0c733d364311f",
          large: "rockstargames-modules-core-newswire-articlee94ea7e671124487acc1e1a38fe28560",
          videoWrapper: "rockstargames-modules-core-newswire-articledad6ecb3c2a7a4f228052b0e1bd38ed5"
        },
        U = e => {
          let {
            images: a
          } = e;
          return a?.length ? 1 === a.length ? (0, i.createElement)(f.A, {
            ...a[0],
            key: null
          }) : (0, n.jsx)(g.A, {
            items: a
          }) : null
        },
        q = e => {
          let {
            images: a,
            title: t,
            content: s,
            isFeatured: r = !1,
            className: c = null,
            videoInHeroProps: o,
            hideNewswireTitle: l = !1
          } = e;
          const m = (0, D.useTinaPayload)(),
            u = m?.meta?.prod ?? !1,
            g = (0, D.useTinaComponents)();
          M().set(m, "meta.prod", u);
          let p = o?.gifVideoProps?.hasVideoInHero || !1;
          const b = o?.htmlVideoProps?.id || !1,
            k = !!o?.htmlVideoProps?.hasHtmlVideoInHero && b;
          k && p && (p = !1);
          const v = void 0 === o || !p && !k,
            w = (0, i.useMemo)((() => ({
              ...g,
              HTMLElement: j.A,
              ImageWithBadge: f.A,
              GroupOfItems: d()
            })), [g]);
          return (0, n.jsxs)("div", {
            className: (0, F.classList)(W.event, c),
            children: [p && (0, n.jsx)("div", {
              className: W.videoWrapper,
              children: (0, n.jsx)(V(), {
                hash: {
                  desktop: o?.gifVideoProps?.hash?.desktop,
                  mobile: o?.gifVideoProps?.hash?.mobile
                },
                loop: o?.gifVideoProps?.isLooping
              })
            }), k && b && (0, n.jsx)("div", {
              className: W.videoWrapper,
              children: (0, n.jsx)(O(), {
                autoplay: o?.htmlVideoProps?.autoPlay || !1,
                id: b
              })
            }), v && (0, n.jsx)(U, {
              images: a
            }), r && (0, n.jsx)(H, {}), (0, n.jsxs)("div", {
              className: W.eventInfo,
              children: [!r && !l && (0, n.jsx)("h3", {
                className: W.eventTitle,
                children: t
              }), (0, n.jsx)(D.TinaParser, {
                components: w,
                tina: {
                  payload: {
                    content: s,
                    meta: {
                      prod: u
                    }
                  }
                }
              })]
            })]
          })
        },
        Q = e => (0, n.jsx)(q, {
          ...e,
          className: W.featured,
          isFeatured: !0
        }),
        Y = {
          clip: "rockstargames-modules-core-newswire-articleaf597db4ae39661b43752ca8aef0ea95",
          redTexture: "rockstargames-modules-core-newswire-articlea1e6c3732fbb497aa657efa3ba5f7aca",
          greyTexture: "rockstargames-modules-core-newswire-articlefb39d1c9eee482e2db4e0b343e1cb979"
        },
        K = e => {
          let {
            fontFamily: a = "inherit",
            fontBg: t,
            string: s
          } = e;
          return (0, n.jsx)("span", {
            style: {
              "--font-family-clip": a
            },
            className: [Y.clip, Y[t]].join(" "),
            children: s
          })
        };
      var X = t(83860),
        J = t(80350);
      const Z = {
          gamingWrapper: "rockstargames-modules-core-newswire-articledd734e4acaf9151080ed7586e4e639b7",
          gamingRewards: "rockstargames-modules-core-newswire-articlea9a31094bd3e441b534cc78d739c61ee",
          psPlus: "rockstargames-modules-core-newswire-articlea9ed6881a254587b0f62accd0a42f49b",
          rightSide: "rockstargames-modules-core-newswire-articleeb6155b649b94d394e88f6bd53a994c7",
          primeGamingSocialLogo: "rockstargames-modules-core-newswire-articled476570605bebe4274221d86cd4777b1",
          gtaPlus: "rockstargames-modules-core-newswire-articled890310a8a24e8315e93aad1c1f514eb",
          plus: "rockstargames-modules-core-newswire-articled692340ad550eab50b73f70580899379",
          listArea: "rockstargames-modules-core-newswire-articlea7bde69bf0b082d54fc3174a8cd8b920",
          psPlusDefaultImg: "rockstargames-modules-core-newswire-articleaaac34c5e0f54812ed6d3141047b44d5"
        },
        ee = e => {
          let {
            headline: a,
            plainImage: s,
            top: r,
            unorderedList: i,
            bottom: c,
            rewards: o = "primeGaming",
            style: d = {}
          } = e;
          const l = (0, F.useLocale)();
          return "primeGaming" === o && ["ru", "kr", "ko_kr", "ru_ru"].includes(l) ? null : (0, n.jsx)("div", {
            className: Z.gamingWrapper,
            children: (0, n.jsx)("div", {
              className: `${Z.gamingRewards} ${Z[o]}`,
              style: d,
              children: (0, n.jsxs)(X.A, {
                style: {
                  "--grid-align-items": "center",
                  "--grid-row-gap": "2rem"
                },
                children: [(0, n.jsxs)(J.A, {
                  children: [a && (0, n.jsx)("h3", {
                    children: a
                  }), "psPlus" === o && (0, n.jsx)("img", {
                    "aria-label": "Playstation Plus Benefit",
                    className: Z.primeGamingSocialLogo,
                    src: t(1983)
                  }), "primeGaming" === o && (0, n.jsx)("img", {
                    "aria-label": "Social Club | Prime Gaming",
                    className: Z.primeGamingSocialLogo,
                    src: t(29654)
                  }), "gtaPlus" === o && (0, n.jsx)("img", {
                    "aria-label": "GTA Plus",
                    className: Z.primeGamingSocialLogo,
                    src: t(68547)
                  }), r?.text && (0, n.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: r.text
                    }
                  }), i?.list && (0, n.jsx)("div", {
                    className: Z.listArea,
                    children: (0, n.jsx)(u.A, {
                      className: "gtaPlus" === o ? Z.plus : "",
                      ...i,
                      list: i.list,
                      ...i?.attributes
                    })
                  }), c?.text && (0, n.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: c.text
                    }
                  })]
                }), (0, n.jsx)(J.A, {
                  className: Z.rightSide,
                  children: s?.image ? (0, n.jsx)(m.A, {
                    image: s.image
                  }) : (0, n.jsx)("div", {
                    className: Z.psPlusDefaultImg
                  })
                })]
              })
            })
          })
        };
      var ae = t(74392),
        te = t(74309),
        se = t(11015);
      const re = e => {
        let {
          backgroundImages: a,
          deckHash: t = "",
          perPage: s = null
        } = e;
        const [r, c] = (0, i.useState)(null), o = (0, D.useGetCdnSource)(a?.backgroundImg?.full_src ?? null), d = (0, D.useGetCdnSource)(a?.layeredImg?.full_src ?? null), l = (0, i.useRef)(null), {
          data: m,
          error: u
        } = (0, F.useQuery)(se.TinaModulesInfo, {
          variables: {
            ids: t
          },
          skip: !t
        });
        return (0, i.useEffect)((() => {
          if (m?.tinaModulesInfo) {
            const e = m.tinaModulesInfo[0],
              {
                id: a,
                tina: t
              } = e,
              s = M().clone(t);
            M().set(s, "payload.meta.id", a), c(s)
          }
        }), [m]), m && r ? u ? (0, n.jsx)(te.A, {
          error: u
        }) : (0, n.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlea2287392a6363add6fc77a246fc467ce",
          ref: l,
          style: {
            "--background-image": `url(${o})`,
            "--layered-image": `url(${d})`,
            "--slides-per-view-desktop": s
          },
          children: (0, n.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articleef8574282ec987f2460a951505ca5ef7",
            children: [d ? (0, n.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleaa9b5909de87ec85fc53e12a7f9ca2d5"
            }) : "", (0, n.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlee3ff669c62cc2088728385fb58ef2969",
              children: (0, n.jsx)(D.TinaParser, {
                components: {
                  Deck: ae.E$
                },
                tina: r
              })
            })]
          })
        }) : null
      };
      var ie = t(2715),
        ne = t(97384),
        ce = t.n(ne);
      const oe = e => {
          let {
            children: a,
            className: t = "",
            style: s,
            game: r
          } = e;
          return (0, i.useEffect)((() => {
            document.fonts.ready.then((() => {
              ce().balanceText()
            }))
          }), [a]), (0, n.jsx)("div", {
            className: ["newswireFull", r, t].join(" "),
            style: s,
            "data-game": r,
            children: a
          })
        },
        de = e => {
          let {
            pct: a,
            bgColor: t,
            primaryColor: s
          } = e;
          return (0, n.jsx)("div", {
            style: {
              position: "relative",
              width: "100%",
              height: "20px",
              backgroundColor: t
            },
            children: (0, n.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleb271a7a9b503a732ecc3de9eb27d11c8",
              style: {
                backgroundColor: s,
                position: "absolute",
                top: "0",
                left: "0",
                width: `${a}%`,
                height: "100%"
              }
            })
          })
        };
      var le = t(46012),
        me = t(76834);
      const ue = e => {
        let {
          title: a,
          desc: t,
          img: s,
          imgMobile: r,
          bgColor: i,
          descPositionBottom: c,
          fontColor: o = "#fff"
        } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [c ?? (0, n.jsx)(me.A, {
            style: {
              backgroundColor: `${i}`,
              "--padding-top-bottom": "1.75rem"
            },
            className: "normalPaddingTopBottom largePaddingSides",
            children: (0, n.jsxs)(me.A, {
              className: "maxDescArea",
              style: {
                "--desc-h3-margin-bottom": "var(--h-rem-size)"
              },
              children: [(0, n.jsx)("h3", {
                style: {
                  "--color-span": `${o}`
                },
                children: a
              }), (0, n.jsx)("p", {
                children: t
              })]
            })
          }), (0, n.jsxs)(me.A, {
            className: [c ?? "spacing"].join(" "),
            children: [(0, n.jsx)(le.A, {
              className: "hiddenMobile",
              src: s
            }), (0, n.jsx)(le.A, {
              className: "hiddenLarge",
              src: r
            })]
          }), c ? (0, n.jsx)(me.A, {
            style: {
              backgroundColor: `${i}`,
              "--padding-top-bottom": "1.75rem"
            },
            className: "normalPaddingTopBottom largePaddingSides spacing",
            children: (0, n.jsxs)(me.A, {
              className: "maxDescArea",
              style: {
                "--desc-h3-margin-bottom": "var(--h-rem-size)"
              },
              children: [(0, n.jsx)("h3", {
                style: {
                  "--color-span": `${o}`
                },
                children: a
              }), (0, n.jsx)("p", {
                children: t
              })]
            })
          }) : null]
        })
      }
    },
    29551: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => g
      });
      var s = t(62229),
        r = t(15409),
        i = t.n(r),
        n = t(95966),
        c = t(65211);
      const o = {
        player: "rockstargames-modules-core-newswire-articlec7765dd7dbdff24d38ef3326bb8a938b",
        fixedToBottom: "rockstargames-modules-core-newswire-articleea802f7f67d39cfdd9625cc8de62828f",
        tracksOpen: "rockstargames-modules-core-newswire-articlea9a553961300b8ee030d0c90ac613c4c",
        tracks: "rockstargames-modules-core-newswire-articleb4036f5fe1d1ab9674cc7c6e40f9a53c",
        iconBurger: "rockstargames-modules-core-newswire-articlea18e526e94dfd87e9b5696a21c1c7754",
        trackList: "rockstargames-modules-core-newswire-articlec7dfe95abfbec1cdef9dfb87d9fd1a1f",
        trackActive: "rockstargames-modules-core-newswire-articlea74e95cb6296abf8ca92168db76fecb9",
        trackTitle: "rockstargames-modules-core-newswire-articleeceb3183ee9dc74e33d4184b307ba923",
        trackIndex: "rockstargames-modules-core-newswire-articled0322571401b3a4dac22628533213ede",
        controls: "rockstargames-modules-core-newswire-articleadd02ff2cfa9b26941d96126a31bc21f",
        controlsCurrentBg: "rockstargames-modules-core-newswire-articlecca0f086505f02983f345dfb64c2ca45",
        controlsCurrentBgVisible: "rockstargames-modules-core-newswire-articleb91004149be94449c7fbfee3d24bde58",
        controlsTrack: "rockstargames-modules-core-newswire-articleff717d7c9ac30041034f2c95fd3e3017",
        controlsTrackTitle: "rockstargames-modules-core-newswire-articlef47edf112978c82a9bbfb2476170007f",
        controlsTrackAnimating: "rockstargames-modules-core-newswire-articlef09973ae8e0457805bc0a1090d05e444",
        scrollText: "rockstargames-modules-core-newswire-articleb42c9e9ba3716121d34600c92fdf4398",
        controlsTrackArtist: "rockstargames-modules-core-newswire-articlee0b6ffdc4c40a6992d70395cd98cb6c5",
        controlsTrackBurger: "rockstargames-modules-core-newswire-articlef3106c22742d7b08e577964a56789504",
        controlsButtons: "rockstargames-modules-core-newswire-articlee77442300b4509fe7a0104b3fb4cecf5",
        controlsScrub: "rockstargames-modules-core-newswire-articlef90cfd862377d31cb5ee1faf9249fd3c",
        controlsPlayPause: "rockstargames-modules-core-newswire-articlec58746be839199f6102319efb7659a54",
        controlsPlayPausePlaying: "rockstargames-modules-core-newswire-articlececadc2b92a0597a55ba5870b46706c9",
        controlsNextTrack: "rockstargames-modules-core-newswire-articlecd583d32f7692538f7f5d1181943c899",
        controlsPrevTrack: "rockstargames-modules-core-newswire-articled84e8c03d27a3038eb54cb7d12c8ac52",
        controlsScrubTrack: "rockstargames-modules-core-newswire-articlef4bb886e9545730ccc323f43a1dfb45c"
      };
      var d = t(91029);
      const l = e => {
          let {
            src: a
          } = e;
          return (0, d.jsx)("div", {
            className: o.cover,
            style: {
              background: `url(${a}) center/cover`
            }
          })
        },
        m = e => {
          let {
            timing: a = {
              current: 0,
              duration: 0
            },
            playing: t,
            audioRef: r,
            setPlaying: n,
            tracksOpen: c,
            setTracksOpen: l,
            trackData: m,
            setTrackId: u,
            trackBounds: g,
            setAutoNext: f
          } = e;
          const p = (0, s.useRef)(null),
            b = (0, s.useRef)(null),
            k = (0, s.useRef)(null),
            [v, w] = (0, s.useState)(null),
            [h, _] = (0, s.useState)(!1),
            x = e => {
              const a = new Date(1e3 * e),
                t = a.getUTCMinutes(),
                s = a.getSeconds();
              return `${t.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, s.useEffect)((() => {
            if (!b.current || !k.current) return;
            const e = () => {
              k.current && b.current && w(k.current.clientWidth > b.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [k, b, a]), (0, s.useEffect)((() => {
            if (!p.current || !a?.duration) return;
            let e = null;
            const t = new(i())(p.current),
              s = e => {
                if (p.current) {
                  const t = p.current.clientWidth;
                  if (!p.current.contains(e.srcEvent.target)) return;
                  const s = Math.max(0, e.srcEvent.offsetX),
                    i = Number(s / t * a.duration);
                  r.currentTime = i
                }
              },
              n = () => {
                e ? r.pause() : r.play()
              },
              c = () => {
                e = r.paused, r.pause()
              };
            return t.on("panstart", c), t.on("panleft", s), t.on("panright", s), t.on("panend", n), t.on("tap", s), () => {
              t.off("panstart", c), t.off("panleft", s), t.off("panright", s), t.off("panend", n), t.off("tap", s)
            }
          }), [p.current, a.duration]), (0, s.useEffect)((() => {
            const e = Number(r?.currentTime);
            (t || !isNaN(e) && 0 !== e) && _(!0)
          }), [t, r?.currentTime]), (0, d.jsxs)("div", {
            className: o.controls,
            style: {
              "--track-color": m.color,
              "--track-mix-blend-mode": m.mix_blend_mode,
              "--current-pct": a.current / a.duration
            },
            children: [(0, d.jsx)("div", {
              className: [o.controlsCurrentBg, h ? o.controlsCurrentBgVisible : ""].join(" ")
            }), (0, d.jsx)("div", {
              className: o.controlsTrack,
              ref: b,
              children: (0, d.jsx)("span", {
                className: [o.controlsTrackTitle, v ? o.controlsTrackAnimating : ""].join(" "),
                ref: k,
                children: m.title
              })
            }), (0, d.jsxs)("div", {
              className: o.controlsButtons,
              children: [(0, d.jsx)("div", {
                className: o.controlsPrevTrack,
                onClick: () => {
                  g && (u(g[0]), f(!0), n(!0))
                }
              }), (0, d.jsx)("div", {
                className: [o.controlsPlayPause, t ? o.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  n(!t)
                }
              }), (0, d.jsx)("div", {
                className: o.controlsNextTrack,
                onClick: () => {
                  g && (u(g[1]), f(!0), n(!0))
                }
              })]
            }), (0, d.jsx)("div", {
              active: c ? "" : null,
              className: o.controlsTrackBurger,
              children: (0, d.jsx)("div", {
                className: o.iconBurger,
                onClick: () => {
                  l(!c)
                }
              })
            }), (0, d.jsxs)("div", {
              className: o.controlsScrub,
              children: [(0, d.jsx)("span", {
                children: x(a.current)
              }), (0, d.jsx)("div", {
                className: o.controlsScrubTrack,
                ref: p
              }), (0, d.jsx)("span", {
                children: x(a.duration)
              })]
            })]
          })
        },
        u = e => {
          let {
            tracks: a,
            trackId: t,
            setTrackId: s,
            tracksOpen: r,
            setTracksOpen: i,
            setPlaying: n,
            setAutoNext: c
          } = e;
          return (0, d.jsxs)("div", {
            className: o.tracks,
            children: [(0, d.jsx)("h4", {
              children: "Tracks"
            }), (0, d.jsx)("div", {
              className: o.trackBurger,
              onClick: () => {
                i(!r)
              }
            }), (0, d.jsx)("div", {
              className: o.trackList,
              children: a.map(((e, a) => (0, d.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: t === e.id ? o.trackActive : "",
                onClick: () => {
                  s(e.id), n(!0), c(!0)
                },
                children: [(0, d.jsx)("span", {
                  className: o.trackIndex,
                  children: String(a + 1).padStart(2, "0")
                }), (0, d.jsx)("span", {
                  className: o.trackTitle,
                  children: e.title
                }), (0, d.jsx)("span", {
                  className: o.trackTime,
                  children: e.duration
                })]
              }, e.id)))
            })]
          })
        },
        g = e => {
          let {
            id: a,
            className: t = ""
          } = e;
          const {
            data: r
          } = (0, n.useQuery)(c.GetAudioAlbum, {
            variables: {
              id: a
            }
          }), [i, g] = (0, s.useState)(), [f, p] = (0, s.useState)(), [b, k] = (0, s.useState)(), [v, w] = (0, s.useState)(!1), [h, _] = (0, s.useState)(!1), [x, y] = (0, s.useState)(new HTMLAudioElement), [N, j] = (0, s.useState)({
            current: 0,
            duration: 0
          }), [S, T] = (0, s.useState)(!0);
          return (0, s.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (p(a.data.rockstarAudioPlayerPlayTrackId), T(!1), _(!0)), h && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && _(!1)
              };
            return h && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [h]), (0, s.useEffect)((() => {
            if (!x) return;
            const e = () => {
                isNaN(x.duration) || j({
                  duration: x?.duration ?? 0,
                  current: x?.currentTime ?? 0
                })
              },
              a = () => {
                S && i && p(i[1])
              };
            return x.addEventListener("loadedmetadata", e), x.addEventListener("timeupdate", e), x.addEventListener("ended", a), () => {
              x.removeEventListener("loadedmetadata", e), x.removeEventListener("timeupdate", e), x.removeEventListener("ended", a)
            }
          }), [x, i, S]), (0, s.useEffect)((() => {
            h && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [h]), (0, s.useEffect)((() => {
            x && (h ? x.play() : x.pause(), w(!1))
          }), [h, x, b?.id]), (0, s.useEffect)((() => {
            if (!f) return;
            const {
              tracks: e
            } = r.audioAlbum, a = r.audioAlbum.tracks.findIndex((e => e.id === f));
            g([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), k(e[a])
          }), [f]), (0, s.useEffect)((() => {
            r && p(r.audioAlbum.tracks[0].id)
          }), [r]), b ? (0, d.jsxs)("div", {
            className: [o.player, o[t], v ? o.tracksOpen : ""].join(" "),
            children: [(0, d.jsx)("audio", {
              ref: e => {
                y(e)
              },
              src: b.mp3_src
            }), (0, d.jsx)(u, {
              tracks: r.audioAlbum.tracks,
              setTrackId: p,
              trackId: f,
              tracksOpen: v,
              setTracksOpen: w,
              setPlaying: _,
              setAutoNext: T
            }), (0, d.jsx)(l, {
              src: b.cover_src
            }), (0, d.jsx)(m, {
              setTrackId: p,
              trackBounds: i,
              tracksOpen: v,
              setTracksOpen: w,
              playing: h,
              setPlaying: _,
              timing: N,
              trackData: b,
              audioRef: x,
              setAutoNext: T
            })]
          }) : null
        }
    },
    96106: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => p
      });
      var s = t(62229),
        r = t(42457),
        i = t(95966),
        n = t(41041),
        c = t(50828),
        o = t(47313),
        d = t(91029);
      const l = e => {
          let {
            className: a
          } = e;
          return (0, d.jsxs)("svg", {
            className: a,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, d.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, d.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        m = {
          pillBtn: "rockstargames-modules-core-newswire-articlec881ff12d1d9fb612b4ddd89178684e4",
          selected: "rockstargames-modules-core-newswire-articledece7a2abb867cf09add3f7429e7383b",
          calloutContainer: "rockstargames-modules-core-newswire-articlee8b19ed9af6aedef68997370cd508539",
          calloutSection: "rockstargames-modules-core-newswire-articleab742f2f5b6947ec0b2facff923a076f",
          calloutHeaders: "rockstargames-modules-core-newswire-articlee86d59dd2e0ab3c594c33eccde3e8fea",
          calloutHeaderMargins: "rockstargames-modules-core-newswire-articled7d4d815f9e36b62ef54befcc89ca296",
          calloutHeader: "rockstargames-modules-core-newswire-articlefb0bbc5bcc4fb2c7d0b8152001df0497",
          calloutSubheader: "rockstargames-modules-core-newswire-articlef5fe27da672cf05e64359ada500a6b7a",
          calloutVoteForm: "rockstargames-modules-core-newswire-articleb5e2fa8800d39c78682d9ce8ce5e53f8",
          voteButton: "rockstargames-modules-core-newswire-articleecdf609ed8d6c4039be969205b7e3ac0",
          upvote: "rockstargames-modules-core-newswire-articlef8d6a685395153161827b5cf8c6ddb93",
          downvote: "rockstargames-modules-core-newswire-articleb1953057e462cdf6c79a4b8e6f2fe91b",
          active: "rockstargames-modules-core-newswire-articleec9f200e6987aebf6375c999eecd5dc3",
          calloutButton: "rockstargames-modules-core-newswire-articleb8ed029eb7d9b09c70caa4576bbb4c5a",
          calloutLink: "rockstargames-modules-core-newswire-articlebc07ececd6531f5df1c8cba48c846797",
          calloutLinkIcon: "rockstargames-modules-core-newswire-articledb31e98c20de15e8d5983285bd6ec92e",
          actionBlock: "rockstargames-modules-core-newswire-articleb1516576d0566f12c906be9e81407ce4",
          actionFooter: "rockstargames-modules-core-newswire-articlef713e165e153987c3855d93dc1614f4d"
        },
        u = e => {
          let {
            foreign_id: a,
            foreign_type: t
          } = e;
          const {
            track: r
          } = (0, n.h)(), {
            refetch: o
          } = (0, i.useQuery)(c.UserGetVote, {
            skip: !0
          }), [l] = (0, i.useMutation)(c.UserCastVote), [u, g] = (0, s.useState)(null), f = (0, s.useCallback)((e => {
            (async () => {
              if (e === u && null !== u) g(null);
              else {
                g(e), r({
                  event: "cta_" + (e ? "like" : "dislike"),
                  text: `${t} ${a}`
                });
                const s = {
                  foreignId: a,
                  foreignType: t,
                  vote: e
                };
                await l({
                  variables: s
                })
              }
            })()
          }), [a, t, u]);
          return (0, s.useEffect)((() => {
            a && t && (async () => {
              const e = await o({
                foreignId: a,
                foreignType: t
              });
              g(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, t]), (0, d.jsxs)("div", {
            className: m.calloutVoteForm,
            children: [(0, d.jsx)("button", {
              "aria-label": "upvote",
              className: [m.upvote, m.voteButton, u ? m.active : ""].join(" "),
              name: "upvote",
              onClick: () => f(!0),
              type: "button"
            }), (0, d.jsx)("button", {
              "aria-label": "downvote",
              className: [m.downvote, m.voteButton, !1 === u ? m.active : ""].join(" "),
              name: "downvote",
              onClick: () => f(!1),
              type: "button"
            })]
          })
        },
        g = e => {
          let {
            action_text: a,
            link: t,
            trackingData: s
          } = e;
          const {
            track: r
          } = (0, n.h)();
          return (0, d.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, d.jsxs)("button", {
              className: m.calloutLink,
              type: "button",
              onClick: s ? () => r({
                ...s
              }) : () => {},
              children: [a, (0, d.jsx)(l, {
                className: m.calloutLinkIcon
              })]
            })
          })
        },
        f = e => {
          let {
            helperText: a,
            linkText: t,
            link: s,
            trackingData: r
          } = e;
          const {
            track: i
          } = (0, n.h)();
          return (0, d.jsxs)("div", {
            className: m.actionFooter,
            children: [a, t && " ", t && (0, d.jsx)("a", {
              href: s ?? "",
              onClick: () => i({
                ...r
              }),
              children: t
            })]
          })
        },
        p = (0, i.withTranslations)((e => {
          let {
            header: a,
            subheader: t,
            type: c,
            action_text: l,
            link: p,
            foreign_id: b = document.location.pathname,
            foreign_type: k = "url",
            className: v = "",
            actionFooterHelperText: w,
            actionFooterLinkText: h,
            actionFooterLink: _,
            trackingData: x = {},
            actionFooterLinkTrackingData: y = {},
            t: N,
            ...j
          } = e;
          const {
            loggedIn: S
          } = (0, n.Wx)(), {
            track: T
          } = (0, n.h)(), C = document.location.pathname, {
            signInUrl: P
          } = (0, i.useScAuthLinks)(C), {
            ref: E,
            inView: A
          } = (0, r.Wx)({
            threshold: .6
          }), [L, I] = (0, s.useState)(!1);
          let z;
          if ((0, s.useEffect)((() => {
              A && !L && (T({
                event: "page_section_impression",
                element_placement: `callout section - ${j?.sectionName??j?._memoq?.header}`
              }), I(!0))
            }), [A]), !a && !t) return null;
          switch (c) {
            case "vote":
              if (!S) {
                z = (0, d.jsx)(o.A, {
                  to: P,
                  className: m.calloutButton,
                  onClick: x ? () => T({
                    ...x
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              z = (0, d.jsx)(u, {
                foreign_id: b,
                foreign_type: k
              });
              break;
            case "button":
              l && p && (z = (0, d.jsx)(o.A, {
                to: p,
                className: m.calloutButton,
                onClick: x ? () => T({
                  ...x
                }) : () => {},
                children: l
              }));
              break;
            case "link":
              l && p && (z = (0, d.jsx)(g, {
                action_text: l,
                link: p,
                trackingData: x
              }));
              break;
            default:
              z = null
          }
          return (0, d.jsx)("div", {
            className: `${m.calloutContainer} ${v||""}`,
            ref: E,
            children: (0, d.jsxs)("div", {
              className: m.calloutSection,
              children: [(0, d.jsxs)("div", {
                className: [m.calloutHeaders, z ? m.calloutHeaderMargins : ""].join(" "),
                children: [a && (0, d.jsx)("h2", {
                  className: m.calloutHeader,
                  children: N(a)
                }), t && (0, d.jsx)("h3", {
                  className: m.calloutSubheader,
                  children: N(t)
                })]
              }), (0, d.jsxs)("div", {
                className: m.actionBlock,
                children: [z, w && (0, d.jsx)(f, {
                  helperText: w,
                  linkText: h,
                  link: _,
                  trackingData: y
                })]
              })]
            })
          })
        }))
    },
    99704: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => g
      });
      var s = t(62229),
        r = t(80725),
        i = t(20310),
        n = t(95966);
      const c = {
        deprecatedCarousel: "rockstargames-modules-core-newswire-articlea531264d5417d2198d4e14aa72335af1",
        "swiper-scrollbar-disabled": "rockstargames-modules-core-newswire-articleee2324d6dd93a95776b1e2d14d0f529d",
        "swiper-horizontal": "rockstargames-modules-core-newswire-articleb823bbff86d38da8cb611a7c3367d8fe",
        "swiper-vertical": "rockstargames-modules-core-newswire-articled29252354bbbfe413678daff5223169d",
        renderedWithChildren: "rockstargames-modules-core-newswire-articlead7696edafa3086969e7aaece4f09b4f",
        panorama: "rockstargames-modules-core-newswire-articleff63f8addff8d036ca0b65fa495e1653",
        img: "rockstargames-modules-core-newswire-articled8e66128b4fef1ea164350cd535e2d68",
        hideMobile: "rockstargames-modules-core-newswire-articlef3445a74a067bd92ff94b521cb0bdc07",
        hideLarge: "rockstargames-modules-core-newswire-articlea6c9173aa5a8fe31a062251352a9d711",
        imageAreaBg: "rockstargames-modules-core-newswire-articledcb2b41007683141579697bb4a8658ba",
        infinite_false: "rockstargames-modules-core-newswire-articleb85758ee99a52896b94130d002e821c7",
        track: "rockstargames-modules-core-newswire-articlec7c21df4f7f83a73f79dd7913aa87832",
        perico: "rockstargames-modules-core-newswire-articleaa50a9164fd0296b1196d441233cc348",
        dotsSlide: "rockstargames-modules-core-newswire-articleb8fd11776fba32f9663bbb6292a5c901",
        siblings: "rockstargames-modules-core-newswire-articlef4c50c0daadf81cd292587fcfea1339d",
        active: "rockstargames-modules-core-newswire-articlefdc2ec652cbb7469f602e73cd10ef997",
        "swiper-preloader-spin": "rockstargames-modules-core-newswire-articlec39b97f81c73d75dc4e013fde14aff18"
      };
      var o = t(95755),
        d = t(57308),
        l = t(91029);
      const m = e => {
          let {
            item: a
          } = e;
          return (0, l.jsxs)("div", {
            children: [(0, l.jsx)(d.A, {
              image: a?.image,
              badge: a?.badge ?? a?.image?.badge,
              badgeType: "badge3",
              role: a?.role ?? a?.image?.role,
              splitter: a?.splitter ?? a?.image?.splitter,
              type: a?.type,
              ariaLabel: a?.image?.ariaLabel ?? a.description,
              style: a?.style,
              className: (0, n.classList)(c.img, a?.className)
            }), (a?.title || a?.description) && (0, l.jsx)(o.A, {
              item: a
            })]
          })
        },
        u = e => {
          let {
            current: a,
            total: t
          } = e;
          return (0, l.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": a,
              "--total-slides": t
            },
            children: (0, l.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        g = e => {
          let {
            children: a,
            items: t = [],
            style: d = {},
            noInfiniteScroll: g = !1,
            className: f = "",
            renderTemplate: p = "standard",
            text: b,
            customSpaceBetween: k = null,
            centerSlides: v = !0,
            centeredSlidesBounds: w = !1
          } = e;
          const [h, _] = (0, s.useState)(0), x = (0, s.useMemo)((() => a && Array.isArray(a) ? a.map((() => (0, i.A)())) : null), [a]);
          if (!(t && 0 !== t?.length || a)) return null;
          const y = {
            0: {
              spaceBetween: k ?? 16
            },
            1024: {
              spaceBetween: k ?? 18
            },
            1920: {
              spaceBetween: k ?? 20
            },
            2560: {
              spaceBetween: k ?? 22
            }
          };
          return (0, l.jsxs)("div", {
            className: (0, n.classList)(c.deprecatedCarousel, c[p], c[`infinite_${!g}`], a ? c.renderedWithChildren : "", f),
            style: d,
            children: [(0, l.jsxs)(r.RC, {
              loop: !g,
              grabCursor: !0,
              centeredSlides: v,
              centerInsufficientSlides: v,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: y,
              onUpdate: () => _(0),
              onActiveIndexChange: e => _(e?.realIndex ?? 0),
              centeredSlidesBounds: w,
              children: [(0, l.jsx)("div", {
                className: c.trackWrapper,
                children: (0, l.jsxs)("div", {
                  className: c.track,
                  children: [t?.map((e => (0, l.jsx)(r.qr, {
                    children: (0, l.jsx)(m, {
                      item: e
                    })
                  }, e.key))), a && a.map(((e, a) => e && (0, l.jsx)(r.qr, {
                    children: e
                  }, x && x[a])))]
                })
              }), (0, l.jsx)(u, {
                current: h,
                total: a ? a.length : t.length
              })]
            }), (b?.title || b?.description) && (0, l.jsx)(o.A, {
              item: b
            })]
          })
        }
    },
    44096: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => _
      });
      var s = t(62229),
        r = t(9623),
        i = t(41041),
        n = t(95966),
        c = t(80391),
        o = t(28985),
        d = t(47240),
        l = t(32903),
        m = t(81715),
        u = t(49429),
        g = t(11008);
      const f = {
          ps: c,
          ps3: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg",
          ps4: o,
          ps5: d,
          switch: g,
          nintendoswitch: g,
          xbox: l,
          xboxone: u,
          xboxseriesxs: m,
          xbox360: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c5cee7464423693de19149a4554b3c2.svg",
          pc: t(85719),
          pcalt: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2921f91628eca684eaf0f91d8b6a5a76.svg",
          play: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38a6e85fa4a378c5620efa9fde8ff223.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4e52b102306a186549cfd712b1c8f8.svg",
          questionMark: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e6833fa9baf4a5382bdd84b0b7d2c03f.svg",
          default: ""
        },
        p = e => f[e] || null,
        b = {
          pillBtn: "rockstargames-modules-core-newswire-articlef39c827be0d560f2cc376d83e3988fbc",
          selected: "rockstargames-modules-core-newswire-articlea63fd127fc0aab231f6740340658d647",
          "clr-button": "rockstargames-modules-core-newswire-articled4ec60c769b079ac712ea0264480d480",
          lgMax: "rockstargames-modules-core-newswire-articledf956d5fc70d2129beb1406170402148",
          smMax: "rockstargames-modules-core-newswire-articlefce12fc6343fbf09a5bb418bb8107f0b",
          cta: "rockstargames-modules-core-newswire-articlea8f295907e9b244767bb48cfc469b480",
          label: "rockstargames-modules-core-newswire-articled75a0e2af2bf8502f8647015e04e10e1",
          primary: "rockstargames-modules-core-newswire-articlea857266233e524e3bb96d327a2095642",
          btnContent: "rockstargames-modules-core-newswire-articled4df564f6143ae5909e2bbc95b4a7ebc",
          btnIcon: "rockstargames-modules-core-newswire-articlef7afeacf3abab7856caca9ea1fad81ad",
          border: "rockstargames-modules-core-newswire-articleaab360f8b5cf6965c56e5f86813b8620",
          xbox: "rockstargames-modules-core-newswire-articlecf162a09fdf0c180f3f5091077493d98",
          xboxone: "rockstargames-modules-core-newswire-articlee34e2c7fd3dd88f7e7d46f495c15a98d",
          xboxseriesxs: "rockstargames-modules-core-newswire-articlef5b0bc5e5a291a3ecab7447d33a76e55",
          ps: "rockstargames-modules-core-newswire-articled439373e74d36689bc159e9a585db184",
          ps4: "rockstargames-modules-core-newswire-articlee49e2b4d44ce7bab7966fbd9fdfb0760",
          ps5: "rockstargames-modules-core-newswire-articlebaa2b83edce86fda2d9dffb2682092f7",
          pc: "rockstargames-modules-core-newswire-articlea1b9c83f518722f01ecb3ece3681c117",
          nintendoswitch: "rockstargames-modules-core-newswire-articlee646f30d1a0c9990c5178e67be93f75e",
          googleplay: "rockstargames-modules-core-newswire-articlead074b742a5ce23c053880b289c2bbe6",
          platformIcon: "rockstargames-modules-core-newswire-articlef25581474e97714bc974f3ab51136511",
          lgMin: "rockstargames-modules-core-newswire-articlee974b6c740bfac2959d5170bd2d9f3ca",
          applestore: "rockstargames-modules-core-newswire-articlee97115f479fca9697b140bfbfa6534f2",
          borderless: "rockstargames-modules-core-newswire-articlecad0684072c4a89cb09b9f79ddda6f38",
          icon: "rockstargames-modules-core-newswire-articlec394fea7e071f1213a5d44f5b569bd1a",
          "icon-left": "rockstargames-modules-core-newswire-articlec73b838b4f69aff2241b814ad1547c48",
          "icon-right": "rockstargames-modules-core-newswire-articlef0de4560b8a1190f63a65ad1e9fd4e03",
          disabled: "rockstargames-modules-core-newswire-articled7a212b6e993966a3773c335359586d5"
        };
      var k = t(65485),
        v = t.n(k),
        w = t(91029);
      const h = e => {
          let {
            platform: a = "",
            altText: t
          } = e;
          const s = a ? p(a) : null,
            r = s ? (0, w.jsx)("img", {
              className: b.platformIcon,
              src: s,
              alt: t
            }) : null;
          return (0, w.jsx)("span", {
            className: [b.btnContent, b.platformButton].join(" "),
            children: r
          })
        },
        _ = e => {
          let {
            children: a,
            href: t,
            style: c,
            content: o,
            variant: d = null,
            size: l = "medium",
            icon: m,
            iconPosition: u = "none",
            iconStyle: g,
            badge: f,
            badgeStyle: k,
            platformItem: _,
            platformStyle: x = "border",
            gtm: y = {},
            disabled: N,
            reloadDocument: j = !1,
            className: S
          } = e;
          const {
            track: T
          } = (0, i.h)(), C = (0, n.useDataLayer)(), P = o ?? a, E = (0, n.findPlatform)(_)?.friendlyName, A = (0, s.useMemo)((() => {
            const e = window.location.hostname;
            let a;
            try {
              a = new URL(t)?.hostname
            } catch (t) {
              a = e
            }
            return e === a
          }), [t]), L = (0, s.useCallback)((() => {
            N || T({
              event: "cta_other",
              text: P ?? void 0,
              ...C,
              ...y,
              link_url: t ?? void 0
            })
          }), [y, t, C]), I = () => m ? (0, w.jsx)("span", {
            className: [b.icon, `icon-${u}`].join(" "),
            style: g,
            children: (0, w.jsx)("img", {
              className: b.btnIcon,
              src: p(m) || "",
              alt: `${m} icon`
            })
          }) : null;
          return (0, w.jsx)(r.Link, {
            to: t,
            target: A ? "_self" : "_blank",
            className: v()(b.cta, "platform" === d && _ ? b[_] : "", x && b[x], N ? b.disabled : "", S),
            style: c,
            "data-variant": d,
            "data-size": l,
            onClick: L,
            "aria-label": P,
            reloadDocument: j,
            children: "platform" === d && _ ? (0, w.jsx)(h, {
              platform: _,
              altText: E || P
            }) : (0, w.jsxs)("div", {
              className: b.btnContent,
              children: ["left" === u && I(), (0, w.jsx)("span", {
                className: b.label,
                children: P
              }), "right" === u && I(), f ? (0, w.jsx)("span", {
                className: b.badge,
                style: k,
                children: f
              }) : null]
            })
          })
        }
    },
    95755: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var s = t(95966),
        r = t(40003),
        i = t(24069),
        n = t(6050);
      const c = "rockstargames-modules-core-newswire-articleacd27eff2209196752622710f7b27558";
      var o = t(91029);
      const d = e => {
          let {
            to: a,
            children: t
          } = e;
          return a ? (0, o.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: t
          }) : t
        },
        l = e => {
          let {
            item: a,
            className: t = ""
          } = e;
          return (0, o.jsxs)("div", {
            className: (0, s.classList)("rockstargames-modules-core-newswire-articlef8bc9589974046cdac4a2264be12d2df", t),
            children: [a.title && (0, o.jsx)(d, {
              to: a?.href ?? a?.to,
              children: (0, o.jsx)("h3", {
                children: a.title
              })
            }), Array.isArray(a?.description?.content) ? a.description.content?.map(((e, a) => e?.unorderedList ? (0, o.jsx)(i.A, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, a) : e?.image ? (0, o.jsx)(r.A, {
              image: e.image,
              className: e?.className
            }, a) : e?.separator ? (0, o.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, o.jsx)(n.A, {})
            }, a) : (0, o.jsx)("p", {
              children: (0, o.jsx)("span", {
                className: c,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, a))) : (0, o.jsx)("span", {
              className: c,
              dangerouslySetInnerHTML: {
                __html: a.description
              }
            })]
          })
        }
    },
    69814: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(62229);
      const r = {
        animateBox: "rockstargames-modules-core-newswire-articleb07a3be6338e0ba4b346b072762582e3",
        fadeArea: "rockstargames-modules-core-newswire-articlef47504b50907dd0fd609719dad3f62bd",
        visible: "rockstargames-modules-core-newswire-articlec121e11e40215dc778fe8665eb38845d",
        barGrow: "rockstargames-modules-core-newswire-articlee0262d00df9ad8a47b08ae84160bfa51",
        bar: "rockstargames-modules-core-newswire-articlebbb7e636ac00581aed0b7e148916cc11",
        animateMe: "rockstargames-modules-core-newswire-articlef7adfd0186421cac9ad0b300911cc9af"
      };
      var i = t(91029);
      const n = e => {
        let {
          children: a,
          style: t
        } = e;
        const n = (0, s.useRef)(null);
        return (0, s.useEffect)((() => {
          new IntersectionObserver((e => {
            e.forEach((e => {
              e.isIntersecting && e.target.classList.add([r.visible])
            }))
          })).observe(n?.current)
        }), []), (0, i.jsx)("div", {
          style: t,
          className: [r.fadeArea].join(" "),
          ref: n,
          children: a
        })
      }
    },
    77279: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var s = t(98802),
        r = t(91029);
      const i = e => {
        let {
          html: a
        } = e;
        return (0, r.jsx)("div", {
          children: (0, s.Ay)(a)
        })
      }
    },
    71312: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(62229),
        r = t(41041);
      const i = (0, s.forwardRef)(((e, a) => {
        const {
          threshold: t,
          callback: i,
          children: n,
          requireUser: c
        } = e, {
          track: o
        } = (0, r.h)(c), [d, l] = (0, s.useState)(a?.current);
        return (0, s.useEffect)((() => {
          a?.current && l(a.current)
        }), [a]), ((e, a, t) => {
          const [r, i] = (0, s.useState)({
            scrollDepths: e,
            scrollY: 0
          }), {
            scrollDepths: n,
            scrollY: c
          } = r;
          (0, s.useEffect)((() => {
            "undefined" != typeof window && 0 !== window.pageYOffset && i((e => ({
              ...e,
              scrollY: window.pageYOffset
            })))
          }), []), (0, s.useEffect)((() => {
            i({
              scrollDepths: e,
              scrollY: 0
            })
          }), [window.location.pathname]);
          const o = (0, s.useCallback)((() => {
            const e = document.documentElement,
              s = document.body,
              c = t?.scrollTop || e.scrollTop || s.scrollTop,
              d = t?.scrollHeight || e.scrollHeight || s.scrollHeight,
              {
                clientHeight: l
              } = e,
              m = c / (d - l) * 100;
            if (n) {
              const e = Math.min(...n, d);
              if (m >= e) {
                const s = n.filter((a => a !== e));
                0 === s.length && (t ?? window).removeEventListener("scroll", o), a && a({
                  scrollY: e,
                  scrollPercent: m,
                  remainingDepths: s
                }), i({
                  scrollY: e,
                  scrollDepths: s
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
            return e.addEventListener("scroll", o), () => e.removeEventListener("scroll", o)
          }), [o])
        })(t, (e => {
          let {
            scrollY: a
          } = e;
          o({
            event: "page_scroll",
            scroll_depth: a
          }), "function" == typeof i && i(a)
        }), d), n
      }));
      i.displayName = "ScrollTracker";
      const n = i
    },
    36205: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(62229),
        r = t(9623),
        i = t(95966);
      var n = t(91029);
      const c = (0, i.withTranslations)((e => {
        let {
          t: a
        } = e;
        const [t] = (0, s.useState)(""), c = (0, r.useNavigate)(), o = (0, i.useMutateState)();
        return (0, n.jsxs)("form", {
          action: "#",
          className: "rockstargames-modules-core-newswire-articlec9f16d9c2f4a943ae8f1f900f31b5f4b",
          onSubmit: e => {
            e.preventDefault(), o({
              navOpen: !1
            }), document.activeElement?.blur?.();
            const a = e.currentTarget.elements.namedItem("q").value;
            c(`/search?q=${a}`)
          },
          role: "search",
          children: [(0, n.jsx)("button", {
            type: "submit",
            role: "button",
            title: "Submit"
          }), (0, n.jsx)("input", {
            autoComplete: "off",
            defaultValue: t,
            enterKeyHint: "search",
            name: "q",
            placeholder: a("Search Rockstar Games")
          })]
        })
      }))
    },
    7537: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => u
      });
      var s = t(62229),
        r = t(97762),
        i = t(41041),
        n = t(80725),
        c = t(50216);
      const o = "rockstargames-modules-core-newswire-articleb7d3d1587271986440f5870d8d02eb3b",
        d = "rockstargames-modules-core-newswire-articlefcffcc6e594fbf9a4a6e9ab5a8d034c7";
      var l = t(91029);
      const m = {
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
        u = e => {
          let {
            title: a = "thumbnail gallery",
            thumbsPerView: t = 3,
            loop: u = !1,
            navigation: g = !1,
            slideChildren: f = [],
            variants: p = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            },
            transition: b = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            }
          } = e;
          const {
            track: k
          } = (0, i.h)(), [v, w] = (0, s.useState)([c.U1, c.WO, c.dK]), [h, _] = (0, s.useState)(null), [x, y] = (0, s.useState)(null);
          return (0, s.useEffect)((() => {
            const e = [c.U1, c.WO, c.dK];
            g && e.push(c.Vx), w(e)
          }), [g]), (0, s.useEffect)((() => {
            if (!f) return;
            const e = f.map(((e, a) => (0, l.jsx)(n.qr, {
              children: e
            }, Symbol(a).toString())));
            y(e)
          }), [f]), x ? (0, l.jsxs)(r.P.div, {
            className: "rockstargames-modules-core-newswire-articlef2d55de974817e455a162843125a8771",
            variants: p.parent,
            transition: b.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, l.jsx)(r.P.div, {
              className: o,
              variants: p.main,
              transition: b.main,
              initial: "initial",
              animate: "animate",
              children: (0, l.jsx)(n.RC, {
                loop: u,
                navigation: g,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: h
                },
                modules: v,
                breakpoints: m,
                className: o,
                onSlideNextTransitionEnd: () => {
                  k({
                    event: "carousel_next",
                    element_placement: a?.toLowerCase() ?? ""
                  })
                },
                onSlidePrevTransitionEnd: () => {
                  k({
                    event: "carousel_previous",
                    element_placement: a?.toLowerCase() ?? ""
                  })
                },
                onSlideChangeTransitionEnd: () => {
                  k({
                    event: "carousel_swipe",
                    element_placement: a?.toLowerCase() ?? ""
                  })
                },
                children: x
              })
            }), (0, l.jsx)(r.P.div, {
              className: d,
              variants: p.thumbs,
              transition: b.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, l.jsx)(n.RC, {
                threshold: 50,
                onSwiper: _,
                loop: u,
                breakpoints: m,
                slidesPerView: t,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: v,
                className: d,
                children: x
              })
            })]
          }) : null
        }
    },
    88415: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d,
        X: () => o
      });
      var s = t(92440),
        r = t(95966),
        i = t(45505),
        n = t(84343),
        c = t(91029);
      const o = e => {
          let {
            id: a = null,
            ids: t = null,
            setTitleDataPath: s = null,
            sync: i = !1
          } = e;
          const c = t ?? [a],
            {
              data: o
            } = (0, r.useQuery)(n.TinaModulesInfo, {
              variables: {
                ids: c,
                sync: i
              },
              setTitleDataPath: s,
              skip: !c.length
            });
          return o?.tinaModulesInfo ?? null
        },
        d = (0, i.A)((e => {
          let {
            components: a = {},
            id: t = null,
            ids: r = null
          } = e;
          const i = o({
              id: t,
              ids: r
            }),
            n = i?.[0]?.tina;
          return n ? (0, c.jsx)(c.Fragment, {
            children: i.map(((e, t) => {
              let {
                tina: r
              } = e;
              return (0, c.jsx)(s.TinaParser, {
                components: a,
                tina: r,
                componentProps: {
                  tinaModulesInfo: i
                }
              }, t)
            }))
          }) : null
        }), {
          header: null
        })
    },
    71069: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(91029);
      const r = e => {
        let {
          text: a,
          style: t
        } = e;
        return (0, s.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlec08a001134624b9ceb275eae413bfd3d",
          style: t,
          children: a
        })
      }
    },
    54196: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        A: () => r.A,
        AlertDialog: () => ve,
        AudioPlayer: () => i.A,
        Badge: () => n.A,
        Brands: () => o,
        Button: () => d.A,
        ButtonGroup: () => u,
        CalloutSection: () => _.A,
        Carousel: () => g.A,
        CharacterCard: () => Da,
        ConditionalBlock: () => h,
        CookieAB: () => T,
        CountryInputField: () => j,
        Cta: () => C.A,
        DescriptionArea: () => P.A,
        DiscountsBadge: () => E.A,
        DotLoader: () => L,
        Dropdown: () => M,
        Embed: () => $,
        ExpandingPlatformButton: () => V.A,
        FadeInContent: () => B.A,
        Gen9Button: () => m.A,
        Gen9CoreCarousel: () => q,
        Grid: () => D.A,
        HTMLElement: () => re.A,
        Hero: () => se,
        HookStore: () => k,
        ImageWithBadge: () => ue.A,
        LayeredImage: () => oe,
        Lightbox: () => me,
        LoadingAnimation: () => Ma.A,
        MultiSourceImage: () => ie.A,
        NewswireBlocks: () => Te,
        NewswireCard: () => we.A,
        NewswireList: () => ye,
        NewswireRelated: () => Ne.A,
        NewswireTag: () => je.A,
        OrderedList: () => Ce.A,
        Paging: () => Ae,
        ParallaxCacheBuster: () => Ie,
        ParallaxInnerLayer: () => De,
        ParallaxOuterLayer: () => $e,
        ParallaxWrapper: () => Me,
        PlatformTag: () => $a.Ay,
        PromoModule: () => Be,
        Rating: () => Ue,
        ResponsiveFlexBox: () => qe.A,
        ResponsiveFlexItem: () => Qe.A,
        ResponsiveGridBox: () => Ye.A,
        ResponsiveGridItem: () => Ke.A,
        ResponsiveImg: () => Xe.A,
        ResponsiveSection: () => Je.A,
        RockstarLogo: () => Ze,
        RpCategory: () => Fa,
        SafeHtml: () => ea.A,
        ScrollSection: () => aa,
        ScrollToTop: () => ta,
        ScrollTracker: () => sa.A,
        SearchBox: () => ra.A,
        Separator: () => ia.A,
        SrcsetImage: () => fe,
        StorybookWrapper: () => na,
        TextFit: () => ca.A,
        ThumbsGallery: () => da.A,
        TinaModuleFetchNRender: () => la.A,
        TinaWrapper: () => ma,
        TrackList: () => oa.A,
        UnorderedList: () => ua.A,
        UserVote: () => pa,
        VideoCard: () => s,
        VideoCarousel: () => xa,
        VideoList: () => Pa,
        VisuallyHidden: () => Ea,
        Wasted: () => Aa.A,
        framer: () => za,
        useTinaModuleFetchByIds: () => la.X,
        withSearchbarErrorBoundary: () => Ia,
        withSimpleErrorBoundary: () => W.A
      });
      var s = {};
      t.r(s), t.d(s, {
        Art: () => wa,
        Link: () => ha
      });
      var r = t(12363),
        i = t(29551),
        n = t(71069);
      var c = t(91029);
      const o = e => {
        let {
          brands: a = []
        } = e;
        return a.length ? (0, c.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articleb53b6eca487387fc5c2057daf151691a",
          children: a.map(((e, a) => {
            let {
              brand: t
            } = e;
            return (0, c.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlee8c3be7a76fd7e532e74a9fcf87bee09",
              "data-brand": t
            }, a)
          }))
        }) : null
      };
      var d = t(47313),
        l = t(95966),
        m = t(79512);
      const u = e => {
        let {
          buttons: a = [],
          className: t
        } = e;
        return a.length ? (0, c.jsx)("div", {
          className: (0, l.classList)("rockstargames-modules-core-newswire-articlebbd74dec556da7f5c06710c72c662f8a", t),
          children: a.map(((e, a) => {
            let {
              icon: t,
              title: s,
              to: r
            } = e;
            return s ? (0, c.jsx)(m.A, {
              icon: t,
              text: s,
              to: r
            }, a) : ""
          }))
        }) : null
      };
      var g = t(99704),
        f = t(62229),
        p = t(9623),
        b = t(41041);
      const k = (0, t(65297).FF)(),
        v = e => e.some((e => !e)),
        w = e => {
          let {
            condition: a = null,
            children: t
          } = e;
          const [s, r] = (0, f.useState)(!1), i = (e => {
            const [a] = (0, p.useSearchParams)(), [t, s] = (0, f.useState)(null), r = (0, b.Wx)(), {
              loggedIn: i,
              data: n
            } = r, {
              hasGtaPlus: c
            } = n ?? {};
            return (0, f.useEffect)((() => {
              const t = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              k.applyFilters("preview_conditions", e);
              const r = [];
              return e.forEach((e => {
                const {
                  value: s
                } = e;
                if (t) return "true" === a.get(s) ? (r.push(!0), !0) : (r.push(!1), !1);
                if (v(r)) return !1;
                switch (s) {
                  case "user:is:loggedIn":
                    r.push(!0 === i);
                    break;
                  case "user:not:loggedIn":
                    r.push(!1 === i);
                    break;
                  case "user:is:gtaPlus":
                    r.push(!0 === c);
                    break;
                  case "user:not:gtaPlus":
                    r.push(!1 === c);
                    break;
                  default:
                    r.push(!1)
                }
                return null
              })), s(!v(r)), () => {}
            }), [a, e, c, r, i]), t
          })(a);
          return (0, f.useEffect)((() => {
            r(i)
          }), [i]), (0, f.useMemo)((() => s ? t : null), [s])
        },
        h = (0, l.withTranslations)((e => {
          let {
            children: a
          } = e;
          return f.Children.map(f.Children.toArray(a), (e => (0, c.jsx)(w, {
            ...e?.props
          })))
        }));
      var _ = t(96106),
        x = t(57232),
        y = t(89841),
        N = t.n(y);
      const j = e => {
        let {
          isMulti: a,
          allowSelectAll: t,
          label: s,
          miscProps: r
        } = e;
        const [i, n] = (0, f.useState)(""), o = (0, f.useMemo)((() => N()().getData()), []);
        return (0, c.jsx)(x.Ay, {
          unstyled: !0,
          value: i,
          isMulti: a,
          allowSelectAll: t,
          options: o,
          placeholder: s,
          onChange: e => {
            return a = e?.target?.value, void n(a);
            var a
          },
          classNamePrefix: "country-select",
          ...r
        })
      };
      var S = t(37415);
      const T = e => {
        let {
          cookieName: a,
          cookieValue: t,
          trueComponent: s,
          falseComponent: r
        } = e;
        const i = (e => {
            const a = document.cookie.split("; "),
              t = `${e}=`,
              s = a.find((e => e.startsWith(t)));
            return s?.substring(t.length, s.length)
          })(a),
          n = new URLSearchParams(window.location.search).get(a);
        return n && ((e, a) => {
          e && a && (document.cookie = `${e}=${a}; domain=${(0,S.F)()}; path=/;`)
        })(a, n), i === t || n === t ? s : r
      };
      var C = t(44096),
        P = t(95755),
        E = t(37123);
      const A = "rockstargames-modules-core-newswire-articlea19bcd2b98d91e60c43b9de146e20f4e",
        L = e => {
          let {
            color: a
          } = e;
          return (0, c.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlee83fe07aa054242e9023d2f9e7a3fd25",
            style: {
              "--loader-color": a
            },
            children: [(0, c.jsx)("div", {
              className: A
            }), (0, c.jsx)("div", {
              className: A
            }), (0, c.jsx)("div", {
              className: A
            })]
          })
        };
      var I = t(24098);
      const z = {
          dropdownWrapper: "rockstargames-modules-core-newswire-articlebbf48ac7e790ff47ad1d5ee6fb7da4d9",
          items: "rockstargames-modules-core-newswire-articlea9afd60434d032bdba4ce040dbeb13b7",
          open: "rockstargames-modules-core-newswire-articledf17f0cb21e0947d4f391f915bd797d2",
          opener: "rockstargames-modules-core-newswire-articlecb53c003fd165ccb31dee0f32edca90f",
          secondary: "rockstargames-modules-core-newswire-articlefe6babf9fc35bb59a2b5225e4d6e7a50"
        },
        M = e => {
          let {
            children: a,
            className: t,
            title: s
          } = e;
          const [r, i] = (0, f.useState)(!1);
          let n = null;
          return n = I.Ay, (0, c.jsx)(n, {
            disabled: !r,
            children: (0, c.jsxs)("div", {
              className: [z.dropdownWrapper, r ? z.open : "", void 0 !== t ? t : ""].join(" "),
              children: [(0, c.jsx)("button", {
                className: z.opener,
                onClick: () => i(!r),
                children: s
              }), r && (0, c.jsx)("div", {
                className: z.items,
                onClick: () => i(!1),
                children: a
              })]
            })
          })
        };
      var D = t(13609);
      const F = e => {
          let {
            caption: a,
            children: t,
            ...s
          } = e;
          return a ? (0, c.jsxs)("figure", {
            ...s,
            children: [t, (0, c.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: a
              }
            })]
          }) : t
        },
        $ = e => {
          let {
            componentTitle: a,
            type: t,
            items: s
          } = e;
          return s?.length ? (0, c.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articleaee2a98f97e777758e2d9bec034314ee",
            type: t,
            children: (0, c.jsxs)(D.A, {
              children: [a && (0, c.jsx)("h3", {
                children: a
              }), (0, c.jsx)(D.A, {
                className: "rockstargames-modules-core-newswire-articledba17b5c55f8d40e2600765f1a60d6af",
                children: s.map(((e, a) => {
                  return e?.embed ? (0, c.jsx)(F, {
                    caption: e?.caption,
                    children: (0, c.jsx)("div", {
                      className: "rockstargames-modules-core-newswire-articlef0cd8278232673606f9c1715bd4950f6",
                      dangerouslySetInnerHTML: {
                        __html: (t = e.embed, t.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                      }
                    }, `${e?.key??a}_div`)
                  }, e?.key ?? a) : e?.text ? (0, c.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: e.text
                    }
                  }, e?.key ?? a) : void 0;
                  var t
                }))
              })]
            })
          }) : null
        };
      var V = t(56666),
        B = t(69814),
        O = t(16188),
        G = t(42457),
        R = t(50216),
        H = t(80725),
        W = t(45505);
      const U = e => {
          let {
            prevRef: a,
            nextRef: t,
            onNextClicked: s,
            onPrevClicked: r,
            onNextKeyDown: i,
            title: n
          } = e;
          return (0, c.jsxs)("div", {
            "aria-controls": `${n}-carousel`,
            "aria-label": `${n} carousel buttons`,
            className: "rockstargames-modules-core-newswire-articleb8d5ef10008331a9f6d3a6bdf1690d01",
            role: "group",
            children: [(0, c.jsx)("button", {
              className: "rockstargames-modules-core-newswire-articlec38cd500d52d07bd012e288dc0b4f635",
              ref: a,
              onClick: r,
              "aria-label": "Previous"
            }), (0, c.jsx)("button", {
              className: "rockstargames-modules-core-newswire-articleb24ada0f7959966c6d950567eaaafce2",
              ref: t,
              onClick: s,
              onKeyDown: i,
              "aria-label": "Next"
            })]
          })
        },
        q = (0, W.A)((e => {
          let {
            description: a,
            slideChildren: t,
            size: s,
            title: r,
            name: i,
            customSlidesPerView: n = null,
            customSpaceBetween: o = null,
            slideClass: d,
            style: m,
            className: u,
            cardSizeBreakpoints: g,
            customAspectRatio: p,
            titleBadge: k,
            theme: v
          } = e;
          const {
            track: w
          } = (0, b.h)(), h = (0, f.useRef)(null), _ = (0, f.useRef)(null), x = (0, f.useRef)(null), [y, N] = (0, f.useState)(null), [j, S] = (0, f.useState)(!1), [T, C] = (0, f.useState)(null), [P, E] = (0, f.useState)(), [A, L] = (0, f.useState)(), {
            ref: I,
            inView: z
          } = (0, G.Wx)({
            threshold: .6
          }), [M, D] = (0, f.useState)(!1), [F, $] = (0, f.useState)(null), [V, B] = (0, f.useState)(!1), [W, q] = (0, f.useState)(0), [Q, Y] = (0, f.useState)(0);
          (0, f.useEffect)((() => {
            const e = () => {
              B(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, f.useEffect)((() => {
            const e = () => {
              P && !(0, O.isEmpty)(P) && P?.height > 0 && P?.height !== W && q(P?.height)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [P]);
          const K = {
            0: {
              spaceBetween: o ?? 16
            },
            1024: {
              spaceBetween: o ?? 18
            },
            1920: {
              spaceBetween: o ?? 20
            },
            2560: {
              spaceBetween: o ?? 22
            }
          };
          (0, f.useEffect)((() => {
            if (!h.current) return;
            const e = () => {
              if (h.current) {
                const e = n || Number(window.getComputedStyle(h.current).getPropertyValue("--slides-per-view")),
                  a = n ? 1 : Number(window.getComputedStyle(h.current).getPropertyValue("--slides-per-view-multiplier"));
                C(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [h, n]), (0, f.useEffect)((() => {
            if (!t) return;
            let e = !1;
            t.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, $(a))
            })), D(e);
            const a = t.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && V ? null : (0, c.jsx)(H.qr, {
              className: "rockstargames-modules-core-newswire-articlead67cb8db28ddf18d185f85a3d54b06f",
              onFocus: () => Z(a),
              role: "button",
              children: e
            }, e.key)));
            N(a)
          }), [t, V]), (0, f.useEffect)((() => {
            L({
              nextEl: x.current,
              prevEl: _.current
            })
          }), [x, _]), (0, f.useEffect)((() => {
            z && !j && t && (w({
              event: "page_section_impression",
              element_placement: (i || r).toLowerCase()
            }), S(!0))
          }), [z, t]);
          let X = "custom" === s ? {
            "--custom-aspect-ratio": p,
            ...m
          } : {
            ...m
          };
          const J = 0 !== W ? `${W}px` : "100%";
          X = {
            ...X,
            "--carousel-cards-height": J,
            "--carousel-nav-opacity": Q
          };
          const Z = e => {
            P?.slideTo(e)
          };
          return (0, c.jsxs)("section", {
            "aria-label": r,
            className: (0, l.classList)("rockstargames-modules-core-newswire-articlef20b52f7c3f9003cd00811a47a04bf10", u),
            "data-size": s,
            "data-sm": g?.sm ? g?.sm : s,
            "data-md": g?.md ? g?.md : s,
            "data-lg": g?.lg ? g?.lg : s,
            "data-xl": g?.xl ? g?.xl : s,
            "data-xxl": g?.xxl ? g?.xxl : s,
            "data-has-covercard": M,
            "data-new-carousel-nav": !0,
            id: `${r}-carousel`,
            "data-theme": v,
            ref: h,
            style: X,
            children: [(0, c.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleaeafe767d91d07fab61f307b5bbffeef",
              ref: I
            }), M && V && (0, c.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articledef6705cfe82c4e562f3c71c78bc5248",
              children: F
            }), (0, c.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleb093fac5b0d056a4a00f34d0418c6577",
              children: (0, c.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articledcef10ca0aa4165afec829cc4474b8b7",
                children: [(0, c.jsxs)("div", {
                  className: "rockstargames-modules-core-newswire-articleb83b41754b7e9ac95c806264014db990",
                  children: [!M && r && (0, c.jsxs)("div", {
                    className: "rockstargames-modules-core-newswire-articlec8e04a547988dacbae8960776862f15f",
                    children: [(0, c.jsx)("h2", {
                      children: r
                    }), k && (0, c.jsx)("span", {
                      className: "rockstargames-modules-core-newswire-articlec3de2db74771fdba023cc2b11b216955",
                      children: k
                    })]
                  }), (0, c.jsx)(U, {
                    prevRef: _,
                    nextRef: x,
                    onNextClicked: () => {},
                    onPrevClicked: () => {},
                    onNextKeyDown: e => {
                      if ("Tab" === e.key && !e.shiftKey) {
                        const a = P?.slides[P?.activeIndex].querySelector('a, button, [role="button"]');
                        a && a?.tabIndex > -1 && (e.preventDefault(), a.focus())
                      }
                    },
                    title: r,
                    theme: v
                  })]
                }), a && (0, c.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlea1497e1cd7844ff158955c0afe2fd3b8",
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                })]
              })
            }), T ? (0, c.jsx)(H.RC, {
              slidesPerView: T,
              onInit: e => {
                E(e);
                const a = setInterval((() => {
                  const {
                    height: t
                  } = e;
                  t > 0 && (q(t), Y(1), clearInterval(a))
                }), 500)
              },
              grabCursor: !0,
              navigation: A,
              modules: [R.Vx],
              breakpoints: K,
              slideClass: (0, l.classList)("swiper-slide", d),
              onSlideNextTransitionEnd: () => {
                w({
                  event: "carousel_next",
                  element_placement: r?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                w({
                  event: "carousel_previous",
                  element_placement: r?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                w({
                  event: "carousel_swipe",
                  element_placement: r?.toLowerCase() ?? ""
                })
              },
              children: y
            }) : ""]
          })
        }), null);
      var Q = t(97762),
        Y = t(92440);
      const K = {
          pillBtn: "rockstargames-modules-core-newswire-articleb89f190ffa4d32a33304ffa4b5ff73df",
          selected: "rockstargames-modules-core-newswire-articleb5c12cc9810c7b3774102378f71714a1",
          hero: "rockstargames-modules-core-newswire-articledccb6453f49a8e81c4ec407c39df4c79",
          images: "rockstargames-modules-core-newswire-articled5fdc650fc4f2f7441ce7c563ae9653e",
          background: "rockstargames-modules-core-newswire-articlec8c90210c344650ad11d2d97258dcaab",
          gradient: "rockstargames-modules-core-newswire-articled074051a93eac66cd56c616c8ccd4c91",
          layered: "rockstargames-modules-core-newswire-articlec58f0111e3765dc6116481764d0431d0",
          content: "rockstargames-modules-core-newswire-articlee4bb4024fb4b167423f58e02e471bf5e",
          descriptions: "rockstargames-modules-core-newswire-articlea54e628f4898aed20e45ad8a5e39af7f",
          buttonGroup: "rockstargames-modules-core-newswire-articleb8a0dc337c7ea835340f88b0f6d14822",
          ctaBlock: "rockstargames-modules-core-newswire-articlec3f1f785f5adb5cfcbf93195e21521e6",
          verticalCtaBlock: "rockstargames-modules-core-newswire-articlede8ee9092175484396cd56d19aec7cbd",
          primaryBtn: "rockstargames-modules-core-newswire-articled273ee25efe0a98d789db801a1a18e97",
          secondaryBtn: "rockstargames-modules-core-newswire-articleaf112e1264860cebe9be5f542d47ec27",
          btnText: "rockstargames-modules-core-newswire-articlee8ca7c699fe44c30cf4e542ee8b22119",
          legalText: "rockstargames-modules-core-newswire-articlebdbadc8b5ef295a4122905fffdde18f6",
          shardsCarousel: "rockstargames-modules-core-newswire-articlecd8c6fbe5139a661c2e52e9df726ca78"
        },
        X = {
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
        J = {
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
        Z = e => {
          let {
            title: a = "",
            mobileImg: t,
            desktopImg: s
          } = e;
          const r = (0, Y.useGetCdnSource)(t ?? null),
            i = (0, Y.useGetCdnSource)(s ?? r);
          return (0, c.jsx)("div", {
            className: K.shard,
            style: {
              "--background-image-mobile": `url(${r})`,
              "--background-image-desktop": `url(${i})`
            },
            children: (0, c.jsx)("h5", {
              children: a
            })
          })
        },
        ee = e => {
          let {
            title: a = "Membership Rewards",
            name: t = "Membership Rewards",
            shards: s
          } = e;
          const [r, i] = (0, f.useState)(null);
          return (0, f.useEffect)((() => {
            s && i(s.reduce(((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: t,
                shardImg: s
              } = a, {
                mobile: r,
                desktop: i
              } = s;
              return e.push((0, c.jsx)(Z, {
                title: t,
                mobileImg: r?.full_src,
                desktopImg: i?.full_src
              })), e
            }), []))
          }), [s]), r ? (0, c.jsx)("div", {
            className: K.shardsCarousel,
            children: (0, c.jsx)(q, {
              title: a,
              name: t,
              slideChildren: r,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        ae = e => {
          let {
            animated: a = !1,
            ctas: t = [],
            expandingButtonLabel: s = "Subscribe"
          } = e;
          const [r, i] = (0, f.useState)([]), [n, o] = (0, f.useState)([]);
          return (0, f.useEffect)((() => {
            const {
              expandingButtonsArray: e,
              plainButtonsArray: a
            } = t.reduce(((e, a) => (a.isInExpandingButton ? e.expandingButtonsArray.push({
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
            i(e), o(a)
          }), [t]), r.length ? (0, c.jsx)(Q.P.div, {
            variants: a ? J : void 0,
            children: (0, c.jsx)(V.A, {
              variant: "gen9",
              buttonText: s,
              platformsAndLinks: r,
              children: !!n.length && (0, c.jsx)(Q.P.div, {
                variants: J,
                children: (0, c.jsx)(u, {
                  buttons: n,
                  className: K.buttonGroup
                })
              })
            })
          }) : (0, c.jsx)(c.Fragment, {
            children: !!n.length && (0, c.jsx)(Q.P.div, {
              variants: J,
              children: (0, c.jsx)(u, {
                buttons: n,
                className: K.buttonGroup
              })
            })
          })
        },
        te = e => {
          let {
            animated: a = !1,
            brands: t = [],
            cta: s = [],
            ctas: r = [],
            description: i = "",
            expandingButtonLabel: n = "Subscribe",
            legalText: d,
            stackButtons: l,
            title: m = ""
          } = e;
          return (0, c.jsxs)(Q.P.div, {
            className: K.content,
            initial: "hidden",
            animate: "visible",
            variants: a ? X : void 0,
            children: [(0, c.jsx)(Q.P.div, {
              variants: a ? J : void 0,
              children: (0, c.jsx)(o, {
                brands: t
              })
            }), (m || i) && (0, c.jsxs)(Q.P.div, {
              className: K.descriptions,
              variants: a ? J : void 0,
              children: [m && (0, c.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: m
                }
              }), i && (0, c.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: i
                }
              })]
            }), !!s.length && (0, c.jsx)("div", {
              className: l ? K.verticalCtaBlock : K.ctaBlock,
              children: (0, c.jsx)(Y.TinaParser, {
                components: {
                  Cta: C.A,
                  ExpandingPlatformButton: V.A
                },
                tina: {
                  payload: {
                    content: s
                  }
                }
              })
            }), !!r.length && (0, c.jsx)("div", {
              className: K.ctaBlock,
              children: (0, c.jsx)(ae, {
                animated: a,
                ctas: r,
                expandingButtonLabel: n
              })
            }), d && (0, c.jsx)(Q.P.div, {
              className: K.legalText,
              variants: a ? J : void 0,
              children: (0, c.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: d
                }
              })
            })]
          })
        },
        se = e => {
          let {
            animated: a = !1,
            backgroundImage: t,
            brands: s = [],
            className: r,
            ctas: i = [],
            cta: n,
            description: o = "",
            expandingButtonLabel: d = "Subscribe",
            layeredImage: m,
            layeredImageSettings: u,
            legalText: g,
            shardsSection: p = {},
            stackButtons: b = !1,
            theme: k = "gen9",
            title: v = ""
          } = e;
          const {
            breakpoints: w,
            windowWidth: h
          } = (0, l.useWindowResize)(), _ = w.xxl.min, x = (e => {
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
          })(u), y = (0, Y.useGetCdnSource)(t?.mobile?.full_src ?? null), N = (0, Y.useGetCdnSource)(t?.desktop?.full_src ?? y), j = (0, Y.useGetCdnSource)(m?.mobile?.full_src ?? null), S = (0, Y.useGetCdnSource)(m?.desktop?.full_src ?? j), T = (0, f.useMemo)((() => {
            const {
              mobileStyle: e,
              desktopStyle: a,
              style: s
            } = t ?? {};
            return {
              ...s,
              ...h >= _ ? (0, l.safeStyles)(a) : (0, l.safeStyles)(e)
            }
          }), [h, t?.style, t?.mobileStyle, t?.desktopStyle]);
          return (0, c.jsxs)(Q.P.div, {
            className: (0, l.classList)(K.hero, r),
            style: {
              "--background-image-desktop": `url(${N})`,
              "--background-image-mobile": `url(${y})`,
              "--layered-image-desktop": `url(${S})`,
              "--layered-image-mobile": `url(${j})`
            },
            initial: "hidden",
            animate: "visible",
            variants: a ? X : void 0,
            "data-type": "hero",
            theme: k,
            children: [(0, c.jsxs)("div", {
              className: K.images,
              children: [N && y ? (0, c.jsx)("div", {
                className: K.background,
                style: T ?? {}
              }) : "", j && S ? (0, c.jsx)("div", {
                className: K.layered,
                style: u ? x : {}
              }) : "", (0, c.jsx)("div", {
                className: K.gradient
              })]
            }), (0, c.jsx)(te, {
              animated: a,
              brands: s,
              cta: n,
              ctas: i,
              description: o,
              expandingButtonLabel: d,
              legalText: g,
              stackButtons: b,
              title: v
            }), p?.shards && (0, c.jsx)(ee, {
              ...p
            })]
          })
        };
      var re = t(44814),
        ie = t(40003);
      const ne = {
          layeredImage: "rockstargames-modules-core-newswire-articlefb27e7361e78dacdcf500e0b9a2b4fce",
          layersWrapper: "rockstargames-modules-core-newswire-articleaf169afca6f741daca0331a1b13fa5f1",
          "hero-lg": "rockstargames-modules-core-newswire-articleb722bba74c792beb73ccdfec4506b591",
          "hero-md": "rockstargames-modules-core-newswire-articlec6b26605a3817704bbf427741edb98f8",
          "hero-sm": "rockstargames-modules-core-newswire-articlee7b70cd5245ee850b5a2bfd048fa02c4",
          contain: "rockstargames-modules-core-newswire-articlec409c9fefffbfffd091f81bdd75ab8a6",
          cover: "rockstargames-modules-core-newswire-articlea72cf62465acbddecc3a2cb256640fac",
          fill: "rockstargames-modules-core-newswire-articlec12eb7986b09f10158c48ad4a902f2ef",
          "bg-img": "rockstargames-modules-core-newswire-articleae25e5bf6793a5522c791028f396dedd",
          imageLayer: "rockstargames-modules-core-newswire-articlea63d213c123e7da5863c6256e847eb0f",
          "layer-lg-height": "rockstargames-modules-core-newswire-articlea206e14a6e055900c30ee67826330173",
          "layer-md-height": "rockstargames-modules-core-newswire-articlee2a2cf239dc64e006fdc9c2c3d280b8e",
          "layer-sm-height": "rockstargames-modules-core-newswire-articlec947fc08bb64674c4bf0429e7914507e",
          "layer-xl-height": "rockstargames-modules-core-newswire-articlea4d21457b55a0626d1cf5170845ba8d6",
          "layer-xs-height": "rockstargames-modules-core-newswire-articled0f6abd48b388b8e3b18eee4bc19039d",
          "layer-xxl-height": "rockstargames-modules-core-newswire-articled74cf249eb57fb6682f07fe13fdfdb4a",
          "layer-lg-width": "rockstargames-modules-core-newswire-articlefb58e41629b31453b12d8bbcc525608f",
          "layer-md-width": "rockstargames-modules-core-newswire-articlef1d2c109e21746d5fa00c85e56e61b10",
          "layer-sm-width": "rockstargames-modules-core-newswire-articlea1289245dc6b1854c3aec5b1a8a11593",
          "layer-xl-width": "rockstargames-modules-core-newswire-articlee5ecbec181677eea6c9c72e02580c501",
          "layer-xs-width": "rockstargames-modules-core-newswire-articlec60b1a515049d3f670d8c5a76c8a1bf6",
          "layer-xxl-width": "rockstargames-modules-core-newswire-articleac03c56e2475aecafc08e873eed26566",
          "bottom-y": "rockstargames-modules-core-newswire-articled66e5203a7bd3c85b99e6caef49b2e9b",
          "center-x": "rockstargames-modules-core-newswire-articlecc06519a4a0d2db824b70a425c8cefd6",
          "center-y": "rockstargames-modules-core-newswire-articled6ce82f1bd5cbf6b4abe650a2738c723",
          "left-x": "rockstargames-modules-core-newswire-articlebb4dd9e1570a80cc01f752a2230abdac",
          "right-x": "rockstargames-modules-core-newswire-articled50c0c4bee9b09502dd611543223ed37",
          "top-y": "rockstargames-modules-core-newswire-articlea9cd0a03e7193a5b47c6e767e045a1ec",
          border: "rockstargames-modules-core-newswire-articleaf6154339558ed7e6e46014575250492",
          shards: "rockstargames-modules-core-newswire-articlea0d1e1b5705f11b3b9301717bc5f6245",
          shards_three: "rockstargames-modules-core-newswire-articlecf01ef76b0d5cc2a7bc4f005be4eb31f",
          shards_two: "rockstargames-modules-core-newswire-articlef317b17c9b0f0a27ed95ec2844857f25",
          dual: "rockstargames-modules-core-newswire-articleb9c969b033c5016f95d5a70ceea22071"
        },
        ce = e => {
          let {
            style: a,
            className: t
          } = e;
          const s = {
              ...a
            },
            r = a["--border-image-source"],
            i = (0, Y.useGetCdnSource)(r || null);
          return r && (s["--border-image-source"] = `url(${i})`), (0, c.jsx)("div", {
            className: (0, l.classList)(ne.border, t),
            style: {
              ...s
            }
          })
        },
        oe = e => e?.images ? (0, c.jsx)("div", {
          className: (0, l.classList)(ne.layeredImage, ne[e?.variantClass], ne[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, c.jsxs)("div", {
            className: ne.layersWrapper,
            children: [e?.images?.map(((e, a) => {
              const {
                image: t,
                paddingClass: s,
                imageSizeClass: r,
                objectFitClass: i,
                positionClassX: n,
                positionClassY: o,
                zIndex: d,
                className: m,
                style: u,
                alt: g,
                displayClass: f
              } = e;
              return (0, c.jsx)(ie.A, {
                image: t,
                style: {
                  zIndex: d ?? a + 1
                },
                imageStyle: u,
                className: (0, l.classList)(m, f, ne.imageLayer, ne[s], ne[r], ne[i], ne[n], ne[o]),
                alt: g
              }, d ?? a + 1)
            })), e?.borderImage && (0, c.jsx)(ce, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null;
      var de = t(96711),
        le = t(8458);
      const me = e => {
        const {
          image: a,
          thumbnail: t,
          style: s,
          showOpenButtonMobile: r,
          showOpenButton: i,
          showDownloadButtonMobile: n,
          showDownloadButton: o
        } = e, d = (0, l.useLocale)(), {
          isMobile: m
        } = (0, l.useWindowResize)(), u = a?.sources ?? {}, g = t?.image?.sources ?? {}, f = (0, le.C1)(u?.[d] ?? u?.en_us) ?? "", p = (0, le.C1)(g?.[d] ?? g?.en_us) ?? f, b = {
          ...t,
          ...e,
          src: f,
          thumbnail: p,
          showOpenButton: m ? r : i,
          showDownloadButton: m ? n : o
        };
        return (0, c.jsx)("div", {
          style: s,
          className: "rockstargames-modules-core-newswire-articleadbaa0167219cd891249a29faec00e8f",
          children: (0, c.jsx)(de.Lightbox, {
            ...b
          })
        })
      };
      var ue = t(57308);
      const ge = {
          pillBtn: "rockstargames-modules-core-newswire-articlec79dd3a7e7c5c11adfd19c623716576f",
          selected: "rockstargames-modules-core-newswire-articlec53675ad15e2ef662362850daab33791",
          multiSourceContainer: "rockstargames-modules-core-newswire-articlea99f18f8581cc9aeafa5111379885ee6",
          multiSourceImage: "rockstargames-modules-core-newswire-articlebc42c525ec0bd93df46e1999e278e9fb",
          animatePlaceholder: "rockstargames-modules-core-newswire-articlef6f51dbe7c2f79f974e9573386bba9da",
          "loader-keyframes": "rockstargames-modules-core-newswire-articlec3684b80c99c860036d9337843a7be58"
        },
        fe = e => {
          let {
            imageUrl: a,
            className: t,
            alt: s,
            style: r,
            lazy: i = !1,
            decoding: n = "auto",
            sizes: o = [320, 480, 768, 1024, 1440, 1920, 2560]
          } = e;
          const [d, l] = (0, f.useState)(!1);
          return (0, c.jsxs)("div", {
            className: ge.multiSourceContainer,
            children: [!d && (0, c.jsx)("img", {
              className: [t, ge.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: r
            }), (0, c.jsx)("img", {
              className: [ge.multiSourceImage, t].join(" "),
              src: `${a}?im=Resize=1920`,
              srcSet: (m = a, o.map((e => `${m}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: s ?? "Multi-Source Image",
              style: r,
              onLoad: () => {
                l(!0)
              },
              loading: i ? "lazy" : "eager",
              decoding: n
            })]
          });
          var m
        },
        pe = {
          pillBtn: "rockstargames-modules-core-newswire-articleec4cf2a0d1bf4b163356a239c9fcd2c5",
          selected: "rockstargames-modules-core-newswire-articlef2bcb112e2fedaca40598307a49544c4",
          dialogButton: "rockstargames-modules-core-newswire-articlead86d4b21240f743281b4922702072b0",
          primary: "rockstargames-modules-core-newswire-articlee4ce9e8b1c839a16acd1198dd6155b0a",
          secondary: "rockstargames-modules-core-newswire-articlec2b869b762352eaa5d0adbeb70fac94c"
        },
        be = e => {
          let {
            button: a,
            closeDialog: t,
            style: s = "primary"
          } = e;
          const {
            buttonIcon: r,
            buttonText: i,
            extraClasses: n,
            isDisabled: o,
            isLink: d,
            link: l,
            onClick: m,
            testId: u
          } = a;
          return d ? i && (0, c.jsx)("a", {
            className: [pe.dialogButton, pe.link, pe[s], n].join(" "),
            href: l,
            ...u && {
              "data-testid": u
            },
            children: i
          }) : (0, c.jsx)("button", {
            className: [pe.dialogButton, pe[s], n].join(" "),
            disabled: o,
            onClick: e => (e => {
              m && m(), t && t(), e.stopPropagation()
            })(e),
            type: "button",
            value: "cancel",
            "aria-label": i,
            ...u && {
              "data-testid": u
            },
            children: (0, c.jsxs)("span", {
              children: [i, r && (0, c.jsx)("div", {
                className: pe.ctaIcon
              })]
            })
          })
        },
        ke = {
          pillBtn: "rockstargames-modules-core-newswire-articleb403f298c2eff00899432c93daa15aec",
          selected: "rockstargames-modules-core-newswire-articlea6cab397bf3a16564fcc531ef4c16130",
          dialog: "rockstargames-modules-core-newswire-articled2c9ef0a70d425745a27c169c594199a",
          "slide-up": "rockstargames-modules-core-newswire-articleb2b3117a07a11b3ec5897e4718e24373",
          "fade-in": "rockstargames-modules-core-newswire-articlee30057881578a38b5dc6f50854c6b56d",
          heading: "rockstargames-modules-core-newswire-articledab9a8f190197c99405cebe1e9a992d6",
          message: "rockstargames-modules-core-newswire-articlef7cd64be4f94a272222f88f34789734a",
          icon: "rockstargames-modules-core-newswire-articlebc1e57fee27452c58670e4f60e492246",
          check: "rockstargames-modules-core-newswire-articleb63b9588fb98b439d19028797670c6c5",
          error: "rockstargames-modules-core-newswire-articlef654f7a2bf475a939f8c05fb569bfd5e",
          mail: "rockstargames-modules-core-newswire-articleb120386c4c2485c587f87173721d63be",
          content: "rockstargames-modules-core-newswire-articleefe65f5c39de5d044fdc6b13c1771125",
          actions: "rockstargames-modules-core-newswire-articled35d1125eabb9ae0e941bd585003c4fc"
        },
        ve = e => {
          let {
            icon: a,
            title: t,
            secondaryText: s,
            buttons: r,
            showDialog: i,
            onClose: n = (() => {}),
            closeOnOutsideClick: o = !0,
            extraClasses: d
          } = e;
          const m = (0, f.useRef)(null),
            {
              setBodyIsLocked: u
            } = (0, l.useBodyScrollable)("AlertDialog");
          (0, f.useEffect)((() => {
            i && m?.current && (m.current?.showModal?.(), u(!0))
          }), [i]);
          const g = () => {
            u(!1), n(), m.current?.close?.()
          };
          if (i) return (0, c.jsxs)("dialog", {
            ref: m,
            className: ke.dialog,
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const a = e.currentTarget.getBoundingClientRect();
              (a.left > e.clientX || a.right < e.clientX || a.top > e.clientY || a.bottom < e.clientY) && o && (u(!1), n(), e.currentTarget.close())
            })(e),
            "data-testid": "alert-dialog",
            children: [a && (0, c.jsx)("i", {
              className: [ke.icon, ke[a]].join(" ")
            }), (0, c.jsxs)("div", {
              className: [ke.content, d?.content].join(" "),
              children: [(0, c.jsx)("h3", {
                className: [ke.heading, d?.heading].join(" "),
                children: t
              }), s && (0, c.jsx)("div", {
                className: [ke.message, d?.message].join(" "),
                dangerouslySetInnerHTML: {
                  __html: s
                }
              })]
            }), r && (0, c.jsx)("div", {
              className: ke.actions,
              children: r.slice(0, 2).map(((e, a) => (0, c.jsx)(be, {
                style: 0 === a ? "primary" : "secondary",
                button: e,
                closeDialog: g
              }, e.buttonText)))
            })]
          })
        };
      var we = t(53459),
        he = t(19800),
        _e = t(46368),
        xe = t.n(_e);
      const ye = (0, l.withTranslations)((e => {
        let {
          section: a = "",
          relativeTo: t = "",
          tagId: s = null,
          metaUrl: r = "/newswire",
          t: i
        } = e;
        const n = (0, l.useLocale)(),
          {
            track: o
          } = (0, b.h)(),
          [m, u] = (0, p.useSearchParams)(),
          {
            tagId: g = null
          } = (0, p.useParams)(),
          [k, v] = (0, f.useState)(g ?? s ?? m.get("tag_id")),
          [w, h] = (0, f.useState)(1),
          [_, x] = (0, f.useState)(20),
          [y, N] = (0, f.useState)([]),
          [j, S] = (0, f.useState)(null),
          [T, {
            loading: C,
            data: P
          }] = (0, he._l)(xe(), {
            variables: {
              tagId: Number(k),
              page: w,
              metaUrl: r,
              limit: _,
              locale: n
            }
          });
        return (0, f.useEffect)((() => {
          h(1), N([]), x(20), v(g ?? s ?? m.get("tag_id")), T()
        }), [m.get("tag_id"), g, s]), (0, f.useEffect)((() => {
          const e = y;
          P?.posts?.paging && S(P?.posts?.paging), P?.posts?.results && N(e.concat(P?.posts?.results))
        }), [P]), (0, f.useEffect)((() => {
          (() => {
            const e = m.get("page"),
              a = Number(e ?? 1);
            x(20 * a), T()
          })()
        }), []), y.length ? (0, c.jsxs)("div", {
          "data-testid": "newswire-list",
          children: [(0, c.jsx)(Te, {
            section: a,
            posts: y,
            relativeTo: t,
            noSpecialOrder: null !== k
          }), null !== j && j.nextPage ? (0, c.jsx)(d.A, {
            className: "rockstargames-modules-core-newswire-articlee125d510192feb4ce2844cb97084b838",
            "data-testid": "more-stories",
            onClick: e => {
              const a = m.get("page"),
                t = Number(a ?? w) + 1;
              h(t), 20 !== _ && x(20), T(), u({
                page: String(t)
              }, {
                replace: !0
              }), o({
                event: "cta_learn",
                text: "more stories",
                element_placement: "newswire"
              })
            },
            disabled: C,
            context: "secondary",
            children: i("More Stories")
          }) : ""]
        }) : null
      }));
      var Ne = t(24494),
        je = t(4403);
      const Se = {
          newswireBlocks: "rockstargames-modules-core-newswire-articleea687097d9239d4830bc03090f0116f2",
          noSpecialOrder: "rockstargames-modules-core-newswire-articled301334a72b626f8cc2f5b9733299e76"
        },
        Te = (0, l.withGtmTracking)((e => {
          let {
            section: a = "",
            noSpecialOrder: t = !1,
            posts: s,
            gtmTrack: r,
            relativeTo: i
          } = e;
          const [n, o] = (0, f.useState)(null);
          return (0, f.useEffect)((() => {
            if (!s.length) return;
            const e = {
              event: "view_item_list",
              ecommerce: {
                impressions: []
              }
            };
            s.map(((t, s) => {
              e.ecommerce.impressions.push({
                name: t.title,
                id: t.id,
                position: s + 1,
                list: a
              })
            })), r(e), o(s.length)
          }), [s.length]), (0, c.jsx)("div", {
            "data-testid": "newswire-blocks-container",
            className: [Se.newswireBlocks, t ? Se.noSpecialOrder : "", Se.contextHome].join(" "),
            children: s.map(((e, s) => (0, c.jsx)(we.A, {
              section: a,
              index: s,
              noSpecialOrder: t,
              post: e,
              focused: s === n
            }, e.id)))
          })
        }));
      var Ce = t(84392);
      const Pe = "rockstargames-modules-core-newswire-articleb013d77f453d7053bbcf06f173ff326c",
        Ee = e => {
          let {
            children: a,
            data: t,
            onPageUpdate: s,
            page: r,
            className: i
          } = e;
          return (0, c.jsx)("a", {
            href: "#",
            className: r === t.page ? `rockstargames-modules-core-newswire-articleb577d5726806ec872ecdb8a46905734f ${i??""}` : "",
            onClick: e => {
              e.preventDefault(), s(r)
            },
            children: a
          })
        },
        Ae = e => {
          let {
            data: a,
            onPageUpdate: t,
            className: s
          } = e;
          if (1 === a.pageCount) return null;
          const r = new Array(Math.min(a.pageCount, 8)),
            i = Math.max(a.pageCount - 8, 1),
            n = Math.max(2, a.page - 4),
            o = Array.from(r, ((e, a) => a + Math.min(i, n)));
          return (0, c.jsxs)("div", {
            className: `rockstargames-modules-core-newswire-articlee480f25872ae2a8b3fcd1e492d838301 ${s??""}`,
            children: [a.pageCount > 8 ? (0, c.jsxs)(c.Fragment, {
              children: [(0, c.jsx)(Ee, {
                data: a,
                onPageUpdate: t,
                page: 1,
                children: "1"
              }), 2 !== o[0] ? (0, c.jsx)("div", {
                className: Pe,
                children: "..."
              }) : ""]
            }) : "", o.map((e => (0, c.jsx)(Ee, {
              data: a,
              onPageUpdate: t,
              page: e,
              className: s,
              children: e
            }, e))), a.pageCount > 8 ? (0, c.jsxs)(c.Fragment, {
              children: [o.slice(-1)[0] + 1 < a.pageCount ? (0, c.jsx)("div", {
                className: Pe,
                children: "..."
              }) : "", (0, c.jsx)(Ee, {
                data: a,
                onPageUpdate: t,
                page: a.pageCount,
                children: a.pageCount
              })]
            }) : ""]
          })
        };
      var Le = t(28882);
      const Ie = e => {
          let {
            children: a
          } = e;
          const {
            parallaxController: t
          } = (0, Le.as)();
          return (0, f.useLayoutEffect)((() => {
            if (!t) return;
            const e = setInterval((() => {
              t.update()
            }), 500);
            return () => clearInterval(e)
          }), [t]), a
        },
        ze = {
          parallaxWrapper: "rockstargames-modules-core-newswire-articlee30c08cf0e042f7fc7bed0c23c0bfb31",
          large: "rockstargames-modules-core-newswire-articlee15ce487b25ba576b6e2b31df308098f",
          medium: "rockstargames-modules-core-newswire-articledfdaa6f63f8e8bd10576fa2debcbc1fc",
          small: "rockstargames-modules-core-newswire-articlec32a973dbc862a43cc5d4a2aac19ed9b"
        },
        Me = e => {
          let {
            scrollAxis: a = "vertical",
            size: t = "",
            style: s = {},
            children: r
          } = e;
          return (0, c.jsx)(Le.zE, {
            scrollAxis: a,
            children: (0, c.jsx)(Ie, {
              children: (0, c.jsx)("div", {
                className: (0, l.classList)(ze.parallaxWrapper, ze[t]),
                style: s,
                "data-context": "parallax-wrapper",
                children: r ? r.map(((e, t) => (0, f.cloneElement)(e, {
                  scrollAxis: a,
                  style: {
                    ...e?.props?.style,
                    zIndex: t
                  }
                }))) : (0, c.jsx)("div", {})
              })
            })
          })
        },
        De = e => {
          let {
            layers: a = [],
            displayClass: t = "",
            style: s = {}
          } = e;
          const r = (0, Y.useGenerateCdnSource)();
          if (!a || !a[0]?.image) return null;
          const i = a.map((e => ({
            ...e,
            props: {
              style: {
                ...e.style
              }
            },
            style: void 0,
            image: r(e?.image ?? null)
          })));
          return (0, c.jsx)(Le.y, {
            className: (0, l.classList)("rockstargames-modules-core-newswire-articlec1c689cf47230fa80bccc9b20515d4fa", t),
            layers: i,
            style: s
          })
        },
        Fe = "rockstargames-modules-core-newswire-articleae8bfc3f9a519606a95144e64ee454b5",
        $e = e => {
          let {
            minOffset: a = 0,
            maxOffset: t = 0,
            scrollAxis: s = "vertical",
            displayClass: r = "",
            style: i = {},
            children: n
          } = e;
          return "horizontal" === s ? (0, c.jsx)(Le.kQ, {
            x: [a, t],
            className: (0, l.classList)(Fe, r),
            styleOuter: i,
            children: n
          }) : (0, c.jsx)(Le.kQ, {
            y: [a, t],
            className: (0, l.classList)(Fe, r),
            styleOuter: i,
            children: n
          })
        },
        Ve = {
          pillBtn: "rockstargames-modules-core-newswire-articleb12cdd53cc59cb42903d11d9fdceca7f",
          selected: "rockstargames-modules-core-newswire-articlee03b475da5ca3ded74e8c6dfd54fb476",
          promoModule: "rockstargames-modules-core-newswire-articleeabbb5f24c40ef994b612515a0d0f356",
          promoModuleImage: "rockstargames-modules-core-newswire-articleb8584eedfbe5a91aaf72c40ec1d619a5",
          gradient: "rockstargames-modules-core-newswire-articleb78d3c0bdc9668bb3d318825467177ab",
          promoModuleContentContainer: "rockstargames-modules-core-newswire-articleef7d758b0d1515fcebe6cb22271a4688",
          left: "rockstargames-modules-core-newswire-articlef4448b69feb648b8b910230c6f873dbd",
          right: "rockstargames-modules-core-newswire-articleb69bb02f1c00007e9b4eab8217e2f08e",
          promoModuleTextContent: "rockstargames-modules-core-newswire-articleb590150a7ac01a01a493b85b7ea5cf90",
          promoModuleWrapper: "rockstargames-modules-core-newswire-articlede25220583bb9220882329a113f7a5e2"
        },
        Be = e => {
          let {
            backgroundColor: a,
            brands: t = [],
            description: s = "",
            ctaLabel: r,
            ctaLink: i = "https://rockstargames.com",
            gradient: n = !0,
            image: d,
            imageOrientation: l = "right",
            title: u = "",
            name: g = ""
          } = e;
          const [p, k] = (0, f.useState)(!1), {
            ref: v,
            inView: w
          } = (0, G.Wx)({
            threshold: .6
          }), {
            track: h
          } = (0, b.h)(), _ = {
            "--promo-background": a ?? "var(--black-200)",
            "--promo-image": `url(${(0,Y.useGetCdnSource)(d)??"var(--promo-background)"})`,
            "--promo-order": "left" === l ? "row" : "row-reverse"
          };
          return (0, f.useEffect)((() => {
            w && !p && (h({
              event: "page_section_impression",
              element_placement: g
            }), k(!0))
          }), [w]), (0, c.jsx)(c.Fragment, {
            children: (0, c.jsx)("div", {
              className: Ve.promoModuleWrapper,
              children: (0, c.jsxs)(Q.P.div, {
                className: Ve.promoModule,
                style: {
                  ..._
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
                children: [(0, c.jsx)("div", {
                  className: [Ve.promoModuleImage, n ? Ve.gradient : "", "left" === l ? Ve.left : Ve.right].join(" ")
                }), (0, c.jsxs)("div", {
                  className: Ve.promoModuleContentContainer,
                  children: [(0, c.jsx)(o, {
                    brands: t,
                    className: Ve.promoModuleBrands
                  }), (0, c.jsxs)("div", {
                    className: Ve.promoModuleTextContent,
                    children: [u && (0, c.jsx)("h3", {
                      children: u
                    }), s && (0, c.jsx)("p", {
                      children: s
                    })]
                  }), r && (0, c.jsx)(m.A, {
                    to: i,
                    text: r,
                    onClick: () => {
                      h({
                        event: "cta_other",
                        element_placement: "promo module",
                        link_url: i,
                        text: r
                      })
                    }
                  })]
                })]
              })
            })
          })
        };
      var Oe = t(81788);
      const Ge = {
          rating: "rockstargames-modules-core-newswire-articlec3e95c84902dd75b827d3c95532e22dc",
          withDescriptors: "rockstargames-modules-core-newswire-articleb98963abfc7a63295bebc6c6d15b391a",
          withOutDescriptors: "rockstargames-modules-core-newswire-articleb6339480b5fd086fb0c025930bfb7dcd",
          text: "rockstargames-modules-core-newswire-articlebabdd6ae2ff83f380dadc6982effa011"
        },
        Re = (0, Oe.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var He = t(95520),
        We = t(65555);
      (0, l.importAll)(t(36672));
      const Ue = (0, W.A)((0, We.g)((e => {
        let {
          descriptors: a = null,
          footer: s = null,
          href: i,
          img: n = null,
          titleSlug: o = null,
          style: d = {},
          className: m
        } = e;
        const [u, g] = (0, f.useState)(!1), {
          inView: p
        } = (0, G.Wx)({
          threshold: .6
        }), [k, v] = (0, f.useState)({
          ratingDescriptors: a,
          ratingFooter: s,
          ratingImg: n,
          ratingUrl: i
        }), {
          track: w
        } = (0, b.h)(), h = (0, Oe.useIntl)(), {
          data: _
        } = (0, l.useQuery)(He.GameData, {
          variables: {
            titleSlug: o
          },
          skip: !o
        });
        if ((0, f.useEffect)((() => {
            _ && v(_?.game)
          }), [_]), (0, f.useEffect)((() => {
            p && !u && k.img_rating && (w({
              event: "page_section_impression",
              element_placement: "rating"
            }), g(!0))
          }), [p]), !k.ratingImg) return null;
        const x = !!k.ratingDescriptors;
        return (0, c.jsxs)("div", {
          className: [Ge.rating, x ? Ge.withDescriptors : Ge.withOutDescriptors, m || ""].join(" "),
          style: (0, l.safeStyles)(d),
          children: [(0, c.jsx)(r.A, {
            to: k.ratingUrl,
            target: "_blank",
            children: (0, c.jsx)("img", {
              alt: h.formatMessage(Re.components_ratings_link_alt, {
                rating: (y = k.ratingImg, y.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: t(8194)(`./${k.ratingImg}`)
            })
          }), x && (0, c.jsxs)("div", {
            className: Ge.text,
            children: [(0, c.jsx)("p", {
              className: Ge.descriptors,
              dangerouslySetInnerHTML: {
                __html: k?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), k.ratingFooter && (0, c.jsx)("hr", {}), k.ratingFooter && (0, c.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: k.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var y
      })));
      var qe = t(22390),
        Qe = t(89773),
        Ye = t(83860),
        Ke = t(80350),
        Xe = t(46012),
        Je = t(76834);
      const Ze = e => {
        let {
          disableLink: a,
          className: t
        } = e;
        const s = a ? "span" : r.A;
        return (0, c.jsx)(s, {
          className: [a ? "rockstargames-modules-core-newswire-articleb28a6ee32abeb20049b97677a86a4314" : "rockstargames-modules-core-newswire-articlea3d920a1139575706b914bc3a0100970", t || ""].join(" "),
          alt: "Rockstar Games Home",
          ...!a && {
            to: "/"
          }
        })
      };
      var ea = t(77279);
      const aa = e => {
          let {
            thresholds: a,
            onThresholdReached: t,
            children: s
          } = e;
          const [r, i] = (0, f.useState)([]), [n, o] = (0, f.useState)(new Set);
          return (0, f.useEffect)((() => {
            const e = Array.from(new Set(a));
            e.sort(((e, a) => e - a)), i(e)
          }), [a]), (0, c.jsxs)("div", {
            style: {
              position: "relative"
            },
            children: [r.map((e => (0, c.jsx)(G.pL, {
              threshold: e,
              onChange: a => ((e, a) => {
                e && !n.has(a) && o((e => {
                  const s = new Set(e);
                  return r.forEach((e => {
                    e <= a && !s.has(e) && (s.add(e), t(e))
                  })), s
                }))
              })(a, e),
              triggerOnce: !0,
              children: a => {
                let {
                  ref: t
                } = a;
                return (0, c.jsx)("div", {
                  ref: t,
                  style: {
                    height: "1px",
                    position: "absolute",
                    top: 100 * e + "%"
                  }
                })
              }
            }, e))), s]
          })
        },
        ta = () => {
          const {
            pathname: e
          } = (0, p.useLocation)();
          return (0, f.useEffect)((() => {
            const e = document.scrollingElement || document.documentElement;
            setTimeout((() => {
              e.scrollTop = 0
            }), 0)
          }), [e]), null
        };
      var sa = t(71312),
        ra = t(36205),
        ia = t(6050);
      const na = e => {
        let {
          children: a
        } = e;
        return (0, c.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articleaae4d33d1eecebdc9b489f8d7a1ad708",
          children: (0, c.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlec573fe5c7bdcc46c4d57ec4a2c275e3b",
            children: a
          })
        })
      };
      var ca = t(59535),
        oa = t(95168),
        da = t(7537),
        la = t(88415);
      const ma = e => {
        let {
          children: a,
          style: t,
          theme: s
        } = e;
        const [r, i] = (0, f.useState)(s);
        return (0, f.useEffect)((() => {
          s && i(s)
        }), [s]), (0, c.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlee5e0faf6ab9871fd60b958c6f7dcf519",
          style: t,
          "data-theme": r,
          children: a
        })
      };
      var ua = t(24069),
        ga = t(48524);
      const fa = {
          pillBtn: "rockstargames-modules-core-newswire-articlea0626acfa0dbdfdfd4f40b93134ac915",
          selected: "rockstargames-modules-core-newswire-articlede6015fb35bdee07192c1656ba4893e3",
          userVote: "rockstargames-modules-core-newswire-articleb32a59a8a63c53cc278266d726c9c5da",
          info: "rockstargames-modules-core-newswire-articlecee10f330f3ac6fba73fc06ac99bc951",
          voteContent: "rockstargames-modules-core-newswire-articleaad01ad44bcc6161ad363910e931515f",
          loggedOutButtons: "rockstargames-modules-core-newswire-articlec393b8f2d3b5b3e9204881ae6ff0fdc5",
          voteButtons: "rockstargames-modules-core-newswire-articledda673f7473820d8884c017373c780f6",
          downVote: "rockstargames-modules-core-newswire-articlee23b13b0d0be49814d3770c10365c096",
          upVote: "rockstargames-modules-core-newswire-articleb3be682e82659d45f93c2fe63ccd73ba",
          voteButtonActive: "rockstargames-modules-core-newswire-articlef9e46f58f97d2b391aaf715861654cd7"
        },
        pa = e => {
          let {
            description: a,
            foreign_id: t = document.location.pathname,
            foreign_type: s = "url",
            title: r
          } = e;
          const {
            track: i
          } = (0, b.h)(), {
            loggedIn: n
          } = (0, b.Wx)(), {
            refetch: o
          } = (0, l.useQuery)(ga.UserGetVote, {
            skip: !0
          }), [d] = (0, l.useMutation)(ga.UserCastVote), [m, u] = (0, f.useState)(null), g = (0, f.useCallback)((async e => {
            i({
              event: "cta_" + (e ? "like" : "dislike"),
              text: `${s} ${t}`
            });
            const a = {
                foreign_id: t,
                foreign_type: s,
                vote: e
              },
              r = await d({
                variables: a
              });
            u(r?.data?.userCastVote?.vote ?? null)
          }), [t, s]);
          return (0, f.useEffect)((() => {
            (async () => {
              if (!n || !t || !s) return;
              const e = await o({
                foreign_id: t,
                foreign_type: s
              });
              u(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [t, s, n]), (0, c.jsx)("div", {
            className: fa.userVote,
            children: (0, c.jsxs)("div", {
              className: fa.voteContent,
              children: [(0, c.jsxs)("div", {
                className: fa.info,
                children: [(0, c.jsx)("h3", {
                  children: r
                }), (0, c.jsx)("p", {
                  children: a
                })]
              }), (0, c.jsxs)("div", {
                className: [fa.voteButtons, n ? "" : fa.loggedOutButtons].join(" "),
                children: [(0, c.jsx)("button", {
                  onClick: () => g(!0),
                  className: [fa.upVote, m ? fa.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, c.jsx)("button", {
                  className: [fa.downVote, !1 === m ? fa.voteButtonActive : ""].join(" "),
                  onClick: () => g(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        };
      var ba = t(15409),
        ka = t.n(ba);
      const va = {
          videoPreview: "rockstargames-modules-core-newswire-articlea626ad482ff0be0336e75929516654d5",
          card: "rockstargames-modules-core-newswire-articlef93031694e202c791c00e5ae3497250a",
          info: "rockstargames-modules-core-newswire-articledabce30c906fad181d7cc188f1632c04",
          title: "rockstargames-modules-core-newswire-articlefd87597d0f90ed6d8a2081da933f53bc",
          screencap: "rockstargames-modules-core-newswire-articlefd37974f16cd1f2376fef29d4af8d948",
          screencapLoaded: "rockstargames-modules-core-newswire-articleb8d4ef3e1a73c58f4002eab351d4eec2",
          gameTitle: "rockstargames-modules-core-newswire-articlea1fe577b937c0e16250bf38e9d775061"
        },
        wa = e => {
          let {
            video: a,
            size: t = 640
          } = e;
          const s = () => a.screencap.includes("akamai") ? `${a.screencap}?im=Resize=${t}` : a.screencap,
            [r] = (0, l.usePreloadImg)(s());
          return (0, c.jsx)("div", {
            className: [va.screencap, r ? va.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${s()}) center/cover`
            }
          })
        },
        ha = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: t = !1,
            video: s,
            size: i,
            toExplicit: n
          } = e;
          const o = n ?? `/videos/${s.id}`,
            d = {
              className: va.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": o
            },
            l = (0, c.jsxs)("div", {
              className: va.card,
              children: [(0, c.jsx)(wa, {
                video: s,
                size: i
              }), (0, c.jsxs)("div", {
                className: va.info,
                children: [a ? (0, c.jsx)("div", {
                  className: va.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: s.game.title
                  }
                }) : "", (0, c.jsx)("h5", {
                  className: va.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            });
          return t ? (0, c.jsx)("a", {
            href: o,
            target: "_blank",
            ...d,
            children: l
          }) : (0, c.jsx)(r.A, {
            to: o,
            ...d,
            children: l
          })
        },
        _a = {
          carousel: "rockstargames-modules-core-newswire-articlebc3f1abaac4c17c0e9aaac5fccfc6f7e",
          slidesContent: "rockstargames-modules-core-newswire-articlec4e301fb08e073f689a8dabd2bef9eb2",
          text: "rockstargames-modules-core-newswire-articlecdb5c063bfc35cfbaaaefc68a77c1b07",
          info: "rockstargames-modules-core-newswire-articlea4057ef942e10ebeedb1370b08c3c32b",
          active: "rockstargames-modules-core-newswire-articlee35688e0d87409e3aef95ffb624d94f4",
          title: "rockstargames-modules-core-newswire-articlee66c271fbbc8b6e431fc5d466c57479c",
          gameTitle: "rockstargames-modules-core-newswire-articleb5d3df350466b14e4b419bdb479b4064",
          videoTitle: "rockstargames-modules-core-newswire-articleed4138b1e7fecd4b6d29f0e1bef1fdfd",
          cta: "rockstargames-modules-core-newswire-articlef40c40ed1bc4242a32bc0628eea34048",
          track: "rockstargames-modules-core-newswire-articleefe7112432da76c65f293853b4c942d1",
          disableClick: "rockstargames-modules-core-newswire-articlefcd11cd5895147a9e08f8f4026d68d94",
          items: "rockstargames-modules-core-newswire-articled30be9a5f31ff7fabf20969eec3200f1",
          dragging: "rockstargames-modules-core-newswire-articleb335b03fce6834b86318f3d7cbf3fab6",
          dots: "rockstargames-modules-core-newswire-articlee0ca3ed410818f0961345606a96f03ee"
        },
        xa = e => {
          let {
            t: a,
            videos: t
          } = e;
          const s = (0, l.useLocale)(),
            {
              track: i
            } = (0, b.h)(),
            {
              setBodyIsLocked: n
            } = (0, l.useBodyScrollable)("VideoCarousel"),
            [o, m] = (0, f.useState)(0),
            [u, g] = (0, f.useState)(0),
            p = (0, f.useRef)(null),
            k = (0, f.useRef)(null);
          return (0, f.useEffect)((() => {
            if (!p.current || !k.current) return;
            const e = new(ka())(p.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const a = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              s = () => {
                m(o - 1 < 0 ? 0 : o - 1), g(0)
              },
              r = () => {
                const e = o + 1 >= t.length - 1 ? t.length - 1 : o + 1;
                m(e), g(0)
              },
              i = e => {
                g(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !k.current?.classList.contains(_a.dragging) || a() && n(!0)
              },
              c = () => {
                a() && n(!1), g(0)
              },
              d = e => {
                "press" === e.type && p.current?.classList.add(`${_a.disableClick}`), "tap" === e.type && (p.current?.classList.remove(`${_a.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              l = () => {
                a() && n(!1), p.current && p.current.classList.remove(`${_a.disableClick}`)
              },
              u = () => {
                a() && n(!1)
              };
            return k.current.addEventListener("transitionend", u), e.on("swiperight", s), e.on("swipeleft", r), e.on("pan", i), e.on("panend", c), e.on("press tap", d), e.on("pressup", l), () => {
              e.off("swiperight", s), e.off("swipeleft", r), e.off("pan", i), e.off("panend", c), e.off("press tap", d), e.off("pressup", l), k.current && k.current.removeEventListener("transitionend", u), g(0)
            }
          }), [p.current, o]), (0, c.jsxs)("section", {
            className: _a.carousel,
            children: [(0, c.jsx)("div", {
              className: _a.track,
              ref: p,
              children: (0, c.jsx)("div", {
                className: `${_a.items} ${0!==u?_a.dragging:""}`,
                ref: k,
                style: {
                  transform: `translateX(calc(-${100*o}% + ${u}px))`
                },
                children: t.map(((e, a) => (0, c.jsx)(r.A, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: o === a ? _a.active : "",
                  role: "link",
                  title: e.title,
                  tabIndex: o === a ? 0 : -1,
                  children: (0, c.jsx)(wa, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, c.jsxs)("div", {
              className: _a.slidesContent,
              children: [(0, c.jsx)("div", {
                className: _a.text,
                children: t.map(((e, t) => {
                  return (0, c.jsxs)(r.A, {
                    className: [_a.info, t === o ? _a.active : ""].join(" "),
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through footer",
                    "data-gtm-label": `/videos/${e.id}`,
                    to: `/videos/${e.id}`,
                    role: "link",
                    title: e.title,
                    tabIndex: o === t ? 0 : -1,
                    children: [(0, c.jsxs)("div", {
                      className: _a.title,
                      children: [(0, c.jsxs)("div", {
                        className: _a.gameTitle,
                        children: [e.game.title, "fr_fr" === s && " "]
                      }), (0, c.jsx)("h2", {
                        className: _a.videoTitle,
                        children: e.title
                      })]
                    }), (0, c.jsx)(d.A, {
                      className: _a.cta,
                      onClick: (n = `/videos/${e.id}`, () => {
                        i({
                          event: "cta_watch_video",
                          text: "watch now",
                          link_url: n,
                          element_placement: "video carousel"
                        })
                      }),
                      children: a("Watch Now")
                    })]
                  }, e.id);
                  var n
                }))
              }), (0, c.jsx)("section", {
                className: _a.dots,
                "aria-controls": "video-carousel",
                "aria-label": "video carousel buttons",
                role: "group",
                children: t.map(((e, a) => (0, c.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => m(a),
                  className: o === a ? _a.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        },
        ya = (0, Oe.defineMessages)({
          next_button_label: {
            id: "next_button_label",
            defaultMessage: "Next video page"
          },
          previous_button_label: {
            id: "previous_button_label",
            defaultMessage: "Previous video page"
          }
        }),
        Na = {
          img: "rockstargames-modules-core-newswire-articled87037fda2ea106061c7a614036a89df",
          wide: "rockstargames-modules-core-newswire-articledc444c089b89129c0a39bc61845d531f",
          imgContentful: "rockstargames-modules-core-newswire-articleb9f3c994ce8a97ac6530cf0a85e5abe0"
        };
      (0, l.importAll)(t(86751));
      const ja = e => {
          let {
            isWideCard: a = !1,
            size: s = 640,
            title: r,
            titleSlug: i
          } = e;
          const {
            isMobile: n
          } = (0, l.useWindowResize)(), o = (0, f.useMemo)((() => {
            let e = "";
            return a && (e = n ? t(75877)(`./${i}/mobile.png`) : t(55889)(`./${i}/desktop.png`)), e || (e = t(39294)(`./${i}.jpg`), e += `?im=Resize=${s}`), e
          }), [n, i]), [d] = (0, l.usePreloadImg)(o);
          let m = o;
          return (0, c.jsx)("div", {
            role: "img",
            "aria-label": r,
            style: {
              backgroundImage: `url(${m})`
            },
            className: [Na.img, d ? Na.startAnimation : "", a ? Na.wide : ""].join(" ")
          })
        },
        Sa = {
          fobLink: "rockstargames-modules-core-newswire-articled30ff40ba02b7ed14124da3ca9cd4f2b",
          wide: "rockstargames-modules-core-newswire-articlec9686ec502f78b05e47568667e90bd17"
        },
        Ta = e => {
          let {
            game: a,
            to: t
          } = e;
          const {
            titleSlug: s,
            urlOfficial: i = ""
          } = a, n = ["VI"].includes(s.toUpperCase());
          return (0, c.jsx)(r.A, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": s,
            "data-testid": `${s}-gamecard`,
            to: t ?? i,
            target: "_self",
            className: [Sa.fobLink, n ? Sa.wide : ""].join(" "),
            reloadDocument: n,
            children: (0, c.jsx)(ja, {
              title: a.title,
              titleSlug: s,
              isWideCard: n,
              size: n ? 1740 : 480
            })
          })
        },
        Ca = {
          videoList: "rockstargames-modules-core-newswire-articlebacddb57787eca7b621a046e6f23aaf5",
          sectionHeader: "rockstargames-modules-core-newswire-articlead695c18d6276297e78924feea3e6201",
          arrowNav: "rockstargames-modules-core-newswire-articlec9b73b78d75dd740e918208a9d615796",
          items: "rockstargames-modules-core-newswire-articleef63b0224f0cc9fa73a9c4549ad6c7e9",
          trackWrapper: "rockstargames-modules-core-newswire-articlebd79ab04bc93e3bcf79be808e0a06e9b",
          partial: "rockstargames-modules-core-newswire-articleab95829b388545f21071fd5bb97c25bb",
          track: "rockstargames-modules-core-newswire-articlea4d3877b3cf6bff0abccdc561c0fe149",
          arrow: "rockstargames-modules-core-newswire-articlecabb1073f7b7f75b799c87d74cfaf0ad",
          previous: "rockstargames-modules-core-newswire-articled7404262ef1f79bde0883b02110a4a5d",
          next: "rockstargames-modules-core-newswire-articlebfdf85a5867d26b52a0962be91170e36",
          disabled: "rockstargames-modules-core-newswire-articledbe1b06efadb349825f7b9b1b2778c68"
        },
        Pa = (0, We.g)((e => {
          let {
            vids: a,
            games: t,
            title: s,
            gameTitleNecessary: r
          } = e;
          const i = (0, Oe.useIntl)(),
            {
              track: n
            } = (0, b.h)(),
            o = void 0 !== t ? "games" : "videos",
            [d, m] = (0, f.useState)(),
            [u, g] = (0, f.useState)(),
            [p, k] = (0, f.useState)(0),
            v = (0, f.useRef)(null),
            w = (0, f.useRef)(null);
          (0, f.useEffect)((() => {
            g({
              nextEl: w.current,
              prevEl: v.current
            })
          }), [w, v]), (0, f.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2.2 : e("1920px") && (a = 3.2), k(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [p]);
          const h = e => {
            d?.slideTo(e)
          };
          let _;
          return _ = "games" === o ? (0, c.jsx)(c.Fragment, {
            children: t.results.map(((e, a) => "775700as" !== e.id && (0, c.jsx)(H.qr, {
              className: Ca.slide,
              onFocus: () => h(a),
              children: (0, c.jsx)(Ta, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id)))
          }) : (0, c.jsx)(c.Fragment, {
            children: a.map(((e, a) => (0, c.jsx)(H.qr, {
              className: Ca.slide,
              onFocus: () => h(a),
              children: (0, c.jsx)(ha, {
                video: e,
                gameTitleNecessary: r
              })
            }, e.id)))
          }), (0, c.jsxs)("section", {
            className: Ca.videoList,
            children: [(0, c.jsxs)("h3", {
              className: Ca.sectionHeader,
              children: [s, (0, c.jsxs)("div", {
                className: Ca.arrowNav,
                children: [(0, c.jsx)("button", {
                  className: [Ca.arrow, Ca.previous].join(" "),
                  type: "button",
                  ref: v,
                  "aria-label": i.formatMessage(ya.previous_button_label)
                }), (0, c.jsx)("button", {
                  className: [Ca.arrow, Ca.next].join(" "),
                  type: "button",
                  ref: w,
                  "aria-label": i.formatMessage(ya.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" === e.key && !e.shiftKey) {
                      const a = d?.slides[d?.activeIndex].querySelector('a, button, [role="button"]');
                      a && (e.preventDefault(), a.focus())
                    }
                  }
                })]
              })]
            }), (0, c.jsx)("div", {
              className: [Ca.items, p % 1 != 0 ? Ca.partial : ""].join(" "),
              children: (0, c.jsx)("div", {
                className: Ca.trackWrapper,
                children: p && (0, c.jsx)(H.RC, {
                  className: Ca.track,
                  slidesPerView: p,
                  spaceBetween: 24,
                  onInit: e => {
                    m(e)
                  },
                  grabCursor: !0,
                  navigation: u,
                  modules: [R.Vx],
                  slideClass: (0, l.classList)("swiper-slide"),
                  onSlideNextTransitionEnd: () => {
                    n({
                      event: "carousel_next",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  onSlidePrevTransitionEnd: () => {
                    n({
                      event: "carousel_previous",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  onSlideChangeTransitionEnd: () => {
                    n({
                      event: "carousel_swipe",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  children: _
                })
              })
            })]
          })
        })),
        Ea = e => {
          let {
            children: a,
            ...t
          } = e;
          return (0, c.jsx)("span", {
            ...t,
            className: "rockstargames-modules-core-newswire-articleacd86b7f5778381df8fac4a3f7489f60",
            children: a
          })
        };
      var Aa = t(74309);
      class La extends f.Component {
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
        render() {
          return null !== this.state.error.code ? (0, c.jsx)(Aa.A, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const Ia = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(t) {
          return (0, c.jsx)(La, {
            header: a,
            children: (0, c.jsx)(e, {
              ...t
            })
          })
        }
      };
      var za = t(41638),
        Ma = t(9137),
        Da = t(72569),
        Fa = t(99244),
        $a = t(86450)
    },
    47313: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(12363);
      const r = {
        button: "rockstargames-modules-core-newswire-articlebc25ec64410308d56e4dc097e81fb129",
        secondary: "rockstargames-modules-core-newswire-articlea3e6439dcaa4870840298d683db4831c"
      };
      var i = t(91029);
      const n = e => {
        let {
          className: a = "",
          children: t,
          context: n = "",
          to: c,
          onClick: o,
          target: d = "_self",
          ...l
        } = e;
        const m = [r.button, r[n], a].join(" ");
        return c ? (0, i.jsx)(s.A, {
          ...l,
          to: c,
          className: m,
          onClick: o,
          target: d,
          children: t
        }) : (0, i.jsx)("button", {
          ...l,
          type: "button",
          className: m,
          onClick: o,
          children: t
        })
      }
    },
    22390: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      const s = {
        responsiveFlexBox: "rockstargames-modules-core-newswire-articlefad65f02dd0ee292c36ec9d50b9c249a",
        responsiveFlexItem: "rockstargames-modules-core-newswire-articlef5215494f66727858110c9c73e2d882a",
        responsiveImage: "rockstargames-modules-core-newswire-articled437a700a9b768227a114e70db78af03"
      };
      var r = t(91029);
      const i = e => {
        let {
          children: a,
          className: t,
          style: i
        } = e;
        return (0, r.jsx)("div", {
          className: [s.responsiveFlexBox, void 0 !== t ? t : ""].join(" "),
          style: i,
          children: a
        })
      }
    },
    89773: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      const s = {
        responsiveFlexItem: "rockstargames-modules-core-newswire-articlee7371144db2e94a049204d4b178416ec"
      };
      var r = t(91029);
      const i = e => {
        let {
          children: a,
          className: t,
          style: i
        } = e;
        return (0, r.jsx)("div", {
          className: [s.responsiveFlexItem, void 0 !== t ? t : ""].join(" "),
          style: i,
          children: a
        })
      }
    },
    13609: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(8458),
        r = t(95966);
      var i = t(91029);
      const n = e => {
        let {
          children: a,
          context: t = null,
          game: n,
          image: c = {},
          style: o = {},
          template: d = null,
          theme: l = null,
          reversedOnMobile: m = !1,
          className: u = "",
          id: g = null
        } = e;
        const f = (0, s.S1)(c ?? {}),
          p = {
            ...o
          };
        if (f?.src?.desktop) {
          const e = (c?.style && c?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
            a = (c?.style && c?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
            t = `var(--grid-background-position, center)/${e??"cover"}`;
          if (p.background = `url(${f?.src?.desktop}) ${a} ${t}`, c?.style && c?.style["--linear-gradient"]) p.background = `linear-gradient(${c?.style["--linear-gradient"]}), url(${f?.src?.desktop}) ${a} ${t}`;
          else if (c?.style && c?.style["--gradient-height"]) {
            const e = c?.style["--gradient-height"] || "3",
              s = c?.style["--gradient-start-color"] || "var(--background-color, transparent)",
              r = c?.style["--gradient-end-color"] || "var(--background-color, transparent)";
            p.background = `linear-gradient(180deg, ${s}, transparent ${e}%, transparent ${100-e}%, ${r}), url(${f?.src?.desktop}) ${a} ${t}`
          }
        }
        return (0, i.jsx)("div", {
          id: g,
          className: (0, r.classList)("rockstargames-modules-core-newswire-articleda87ead760b989fbe90a0b89c60b0653", m ? "rockstargames-modules-core-newswire-articledfbda195073626bc6a7690dc73fba873" : "", u),
          "data-game": "community" === d ? null : n,
          style: (0, r.safeStyles)(p),
          "data-context": t,
          "data-template": d,
          "data-theme": l,
          children: a
        })
      }
    },
    83860: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      const s = {
        responsiveGridBox: "rockstargames-modules-core-newswire-articlee9ae27279428e611bbce59656759ed50",
        responsiveGridItem: "rockstargames-modules-core-newswire-articleb0d14e4a5e63a903117e93a392cbfb53"
      };
      var r = t(91029);
      const i = e => {
        let {
          children: a,
          cols: t,
          className: i,
          rows: n,
          style: c
        } = e;
        const o = c ? {
          ...c
        } : {};
        return void 0 !== t && (o.gridTemplateColumns = `repeat(${t}, 1fr)`), void 0 !== n && (o.gridTemplateRows = `repeat(${n}, 1fr)`), (0, r.jsx)("div", {
          className: [s.responsiveGridBox, void 0 !== i ? i : ""].join(" "),
          style: o,
          children: a
        })
      }
    },
    80350: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      const s = {
        responsiveGridBox: "rockstargames-modules-core-newswire-articlee721a07d53edbb90b165a7720bb32c08",
        responsiveGridItem: "rockstargames-modules-core-newswire-articlea32d93b6ae982b5ad473f75cf86ff085"
      };
      var r = t(91029);
      const i = e => {
        let {
          children: a,
          className: t,
          style: i
        } = e;
        return (0, r.jsx)("div", {
          className: [s.responsiveGridItem, void 0 !== t ? t : ""].join(" "),
          style: i,
          children: a
        })
      }
    },
    44814: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(16188),
        r = t.n(s),
        i = t(95966);
      var n = t(91029);
      const c = e => {
        let {
          attributes: a = {},
          children: t,
          className: s = "",
          id: c = "",
          style: o = {}
        } = e;
        return (0, n.jsx)("span", {
          className: (0, i.classList)(s, a?.className, "rockstargames-modules-core-newswire-articlec650a7a1e761d6a9f2d6ce1cd8d6f330"),
          id: c,
          style: (0, i.safeStyles)(o ?? a?.style ?? {}),
          dangerouslySetInnerHTML: {
            __html: r().unescape(t)
          }
        })
      }
    },
    76834: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      const s = {
        responsiveSection: "rockstargames-modules-core-newswire-articlebd7167fb3a3edaf4df4d9a576efb1170",
        maxWidth: "rockstargames-modules-core-newswire-articleb2c8f49e280c2e7c204b30a4af8c13b9"
      };
      var r = t(91029);
      const i = e => {
        let {
          children: a,
          className: t,
          style: i,
          maxWidth: n
        } = e;
        return (0, r.jsx)("section", {
          className: [s.responsiveSection, void 0 !== t ? t : ""].join(" "),
          style: i,
          children: n ? (0, r.jsx)("div", {
            className: s.maxWidth,
            children: a
          }) : a
        })
      }
    },
    6050: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      const s = {
        hr: "rockstargames-modules-core-newswire-articledc7b1bc141e132d4ee9b7bf9d55c573a",
        redLine: "rockstargames-modules-core-newswire-articled4d968b41ef87926b0b6318e8647738b",
        gtao: "rockstargames-modules-core-newswire-articlef66c75c6e882da85fef31e4211ca0be2"
      };
      var r = t(91029);
      const i = e => {
        let {
          style: a,
          className: t = "",
          type: i = ""
        } = e;
        return (0, r.jsx)("div", {
          style: a,
          className: [s.hr, s[i], t].join(" ")
        })
      }
    },
    45505: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(62229);
      var r = t(91029);
      class i extends s.Component {
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
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articled5c408a8b618087ef4bb452f96526b2b",
            children: [(0, r.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, r.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const n = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return function(s) {
          return (0, r.jsx)(i, {
            header: a,
            hidden: t,
            children: (0, r.jsx)(e, {
              ...s
            })
          })
        }
      }
    },
    74309: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(62229),
        r = t(95966),
        i = t(12363),
        n = t(36205);
      var c = t(91029);
      const o = (0, r.withTranslations)((e => {
        let {
          error: a,
          t,
          domain: r = ""
        } = e;
        console.error({
          error: a
        });
        let o = a?.message ?? t("error-404-new");
        o = t("error-404-new");
        const d = a?.code ?? 398,
          l = (0, s.useRef)(null);
        return (0, s.useEffect)((() => {
          l && l?.current && l.current.focus()
        }), [l]), (0, c.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articled0635ab9b06be2bdd2967e49648afe4e",
          children: [(0, c.jsx)("h3", {
            tabIndex: -1,
            ref: l,
            children: `${o} (${d})`
          }), (0, c.jsx)(i.A, {
            to: "/",
            children: t("Home")
          }), "clr" !== r && (0, c.jsx)(n.A, {})]
        })
      }))
    },
    41638: (e, a, t) => {
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
      var r = t(62229),
        i = t(63581),
        n = t(53555),
        c = t(26849),
        o = t(91029);
      const d = (0, r.forwardRef)(((e, a) => {
        const {
          children: t,
          tag: s = "div"
        } = e, r = i.m[s];
        return (0, o.jsx)(n.F, {
          features: c.l,
          children: (0, o.jsx)(r, {
            ref: a,
            ...e,
            children: t
          })
        })
      }));
      d.displayName = "LiteMotion";
      const l = d;
      var m = t(97762);
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
        f = e => {
          let {
            children: a
          } = e;
          return (0, o.jsx)(m.P.div, Object.assign({
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
            children: a
          }))
        },
        p = e => a => (0, o.jsx)(f, {
          children: (0, o.jsx)(e, Object.assign({}, a))
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
        v = e => {
          let {
            children: a
          } = e;
          return (0, o.jsx)(m.P.div, {
            className: "rockstargames-modules-core-newswire-articlec1ad787ad6429786650325edac0ffe42",
            variants: b,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: k,
            children: a
          })
        },
        w = e => a => (0, o.jsx)(v, {
          children: (0, o.jsx)(e, {
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
        x = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return _[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        }
    },
    53459: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => m
      });
      var s = t(62229),
        r = t(9623),
        i = t(95966),
        n = t(41041),
        c = t(12363),
        o = t(4403);
      const d = {
        newswireBlock: "rockstargames-modules-core-newswire-articleb394b56c31488c36155ca82090c66e6f",
        info: "rockstargames-modules-core-newswire-articleea1c51ae745531c2aeabbe3fcf603842",
        title: "rockstargames-modules-core-newswire-articlef1dfe59c3d981dbe132559620885ecea",
        newswireBlockNoSpecialOrder: "rockstargames-modules-core-newswire-articlec06d09374e8b5cc41f1732c691ee8e25",
        preview: "rockstargames-modules-core-newswire-articleca2b587572d3c9a74cfc2fedf400ce8c",
        previewMobile: "rockstargames-modules-core-newswire-articleb3d4a8cfcc371ae39ce6220d009c5954",
        top: "rockstargames-modules-core-newswire-articleeee9c5d3b714a61ac265369800a6d4e0",
        startAnimation: "rockstargames-modules-core-newswire-articlea56af3c95449fe8452485dfb6c89fc29"
      };
      var l = t(91029);
      const m = e => {
        let {
          section: a = "",
          index: t,
          post: m,
          noSpecialOrder: u = !1,
          focused: g
        } = e;
        const {
          track: f
        } = (0, n.h)(), [p] = (0, r.useSearchParams)(), b = m.preview_images_parsed.newswire_block, k = {
          default: 0 !== t || u ? b.square || b.d16x9 || b._fallback : b.d16x9 || b.square || b._fallback,
          mobile: b.square || b._fallback
        }, [v, w] = (0, i.usePreloadImg)(k.default), h = {
          default: {
            backgroundImage: `url(${k.default})`
          },
          mobile: {
            backgroundImage: `url(${k.mobile})`
          }
        }, _ = (0, s.useCallback)((() => {
          f({
            event: "card_click",
            card_id: m.id,
            card_name: m.name_slug.replace(/-/g, " "),
            link_url: m.url,
            position: t,
            element_placement: a
          })
        }), [m]);
        return (0, l.jsx)(c.A, {
          to: m.url,
          className: [d.newswireBlock, u ? d.newswireBlockNoSpecialOrder : "", null !== v ? d.startAnimation : ""].join(" "),
          focused: g,
          onClick: _,
          children: (0, l.jsxs)(l.Fragment, {
            children: [0 !== t || p.get("tag_id") ? (0, l.jsx)("div", {
              className: d.preview,
              style: h.default
            }) : (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)("div", {
                className: d.previewMobile,
                style: h.mobile
              }), (0, l.jsx)("div", {
                className: d.preview,
                style: h.default
              })]
            }), (0, l.jsxs)("div", {
              className: d.info,
              children: [(0, l.jsxs)("div", {
                className: d.top,
                children: [m.primary_tags.length ? (0, l.jsx)(o.A, {
                  title: m.primary_tags[m.primary_tags.length > 1 && 722 === m.primary_tags[0].id ? 1 : 0].name
                }) : "", (0, l.jsx)("time", {
                  dateTime: m.created,
                  children: m.created_formatted
                })]
              }), (0, l.jsx)("h5", {
                className: d.title,
                dangerouslySetInnerHTML: {
                  __html: m.title
                }
              })]
            })]
          })
        })
      }
    },
    4403: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(12363);
      const r = {
        tag: "rockstargames-modules-core-newswire-articleb660bb706132d84852c02df01cc6ed5a"
      };
      var i = t(91029);
      const n = e => {
        let {
          className: a,
          href: t,
          title: n,
          style: c
        } = e;
        const o = (0, i.jsxs)("div", {
          style: c,
          className: [r.tag, a].join(" "),
          children: [(0, i.jsx)("i", {}), n]
        });
        return void 0 !== t ? (0, i.jsx)(s.A, {
          to: t,
          children: o
        }) : o
      }
    },
    24494: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(95966),
        r = t(53459);
      const i = {
        pillBtn: "rockstargames-modules-core-newswire-articlef2d003dd0e6a129a56ea07208548787c",
        selected: "rockstargames-modules-core-newswire-articlef94728c4a438800b9abab11a8b3e3c0a",
        related: "rockstargames-modules-core-newswire-articleb8a63bb419c1f2a8f94e099e1e650e48",
        posts: "rockstargames-modules-core-newswire-articlecfe09d4dc8447b1e606404300d040e7a",
        just1post: "rockstargames-modules-core-newswire-articled46374473ed68a4121f88b44eba06359"
      };
      var n = t(91029);
      const c = (0, s.withTranslations)((e => {
        let {
          posts: a,
          t
        } = e;
        return (0, n.jsxs)("section", {
          className: i.related,
          children: [(0, n.jsx)("h2", {
            children: t("Related Stories")
          }), (0, n.jsx)("div", {
            className: [i.posts, 1 === a.length ? i.just1post : ""].join(" "),
            children: a.map((e => (0, n.jsx)(r.A, {
              noSpecialOrder: !0,
              post: e
            }, e.id)))
          })]
        })
      }))
    },
    14743: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        NewswireArticle: () => _,
        componentsForTinaParser: () => x
      });
      var s = t(54196),
        r = t(64064),
        i = t.n(r),
        n = t(15310),
        c = t.n(n),
        o = t(23608),
        d = t.n(o),
        l = t(31879),
        m = t.n(l),
        u = t(74392),
        g = t(79905),
        f = t(62229),
        p = t(24494),
        b = t(95966),
        k = t(43193),
        v = t(52470),
        w = t(91029);
      const h = e => {
          let {
            article: a,
            relatedBlock: t
          } = e;
          switch (a.jsx) {
            case 0:
              return (0, w.jsx)(k.Jsx0, {
                article: a,
                children: t
              });
            case 1:
              return (0, w.jsx)(k.Jsx1, {
                article: a,
                children: t
              });
            default:
              return (0, w.jsx)(k.Jsx2, {
                payload: a.tina.payload,
                variablesKeys: a.tina.variables.keys,
                children: t
              })
          }
        },
        _ = e => {
          let {
            idHash: a
          } = e;
          const {
            data: t,
            loading: s
          } = (0, b.useQuery)(v.NewswirePost, {
            variables: {
              id_hash: a
            },
            setTitleDataPath: "post.title",
            autoSetLoading: !0
          }), r = t?.post ?? null, i = t?.related?.results ?? null;
          if ((0, f.useEffect)((() => {
              r && (window?.instgrm?.Embeds?.process?.(), window?.twttr?.widgets?.load?.())
            }), [r]), !r || s) return null;
          const n = i && r.show_related ? (0, w.jsx)(p.A, {
            posts: i
          }) : "";
          return (0, w.jsx)(b.newswirePost.Provider, {
            article: r,
            children: (0, w.jsx)(h, {
              article: r,
              relatedBlock: n
            })
          })
        },
        x = {
          ...s,
          ...g,
          ClrCard: u.y3,
          ClrCollapsedCard: u.h7,
          Gif: i(),
          GroupOfItems: c(),
          RockstarVideoPlayer: m(),
          SwiperCarousel: d()
        }
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
          c = new Set;
        for (i.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "GetAudioAlbum")
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
          c = new Set;
        for (i.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
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
          c = new Set;
        for (i.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "GameData")
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
          c = new Set;
        for (i.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
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
          c = new Set;
        for (i.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
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
          c = new Set;
        for (i.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "TinaModulesList")
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
          c = new Set;
        for (i.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "TinaModulesInfo")
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
          c = new Set;
        for (i.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
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
    86751: (e, a, t) => {
      var s = {
        "./GTAOnline.jpg": 10111,
        "./GTATrilogy.jpg": 84752,
        "./IV.jpg": 73483,
        "./V.jpg": 98754,
        "./VI/desktop.png": 3660,
        "./VI/mobile.png": 96048,
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
    39294: (e, a, t) => {
      var s = {
        "./GTAOnline.jpg": 10111,
        "./GTATrilogy.jpg": 84752,
        "./IV.jpg": 73483,
        "./V.jpg": 98754,
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
    55889: (e, a, t) => {
      var s = {
        "./VI/desktop.png": 3660
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
      }, r.resolve = i, e.exports = r, r.id = 55889
    },
    75877: (e, a, t) => {
      var s = {
        "./VI/mobile.png": 96048
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
      }, r.resolve = i, e.exports = r, r.id = 75877
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
    10111: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    84752: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg"
    },
    73483: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b01707ef5603a26c1f542088f8f7c09.jpg"
    },
    98754: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    3660: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1aba112359a3d6747ad694a8c02a07c.png"
    },
    96048: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/26f95aa7677031d8cd56ea75250c7bdd.png"
    },
    78323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d66bfe06a724f04c0941073de283297.jpg"
    },
    23587: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b95ab415fdd8bec89099d433d23e3c7.jpg"
    },
    67181: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5704d117b387578dfebe1290e556f963.jpg"
    },
    85332: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f58d386594d32f34c887da75032c5be.jpg"
    },
    44596: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8074783730a47af2fe5c2b67ddf7d31.jpg"
    },
    18518: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0281770395dc77e41c1f40559a3d5989.jpg"
    },
    7509: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/15b671d990b1f3f941c6359b3235abf3.jpg"
    },
    42787: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81001f378e085cd20f8ee0182e23cb7c.jpg"
    },
    26788: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    33143: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    8494: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34231941013a609948485830c84c072.jpg"
    },
    59942: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48371205a1d87d858baa85712d1f91bb.jpg"
    },
    64923: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/089fe525338554e2120a1aaaf81766d6.jpg"
    },
    85256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc4dbe3e1d52c3fc405579090868d08.jpg"
    },
    42043: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/809c3d6f72a6752f0ebcc6c92d43db67.jpg"
    },
    52014: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b13400360d3873aa5ed169d38da1ff9f.jpg"
    },
    59414: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    52461: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    89273: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab528316ca7d31c2b041b62c4ce5dd36.jpg"
    },
    95903: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa649a5d6b52121271093a7c564cc56a.jpg"
    },
    3933: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/116555df6799e584310484375c97a43f.jpg"
    },
    77321: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd74a091e2e5765c8769668cc515e494.jpg"
    },
    13095: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e7d916fcce2bbe9b6419f914f290597.jpg"
    },
    57258: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f31b4df90bff5bab740485f2d4b8253.jpg"
    },
    12602: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4b0f40e745f4347c822594da56a119.jpg"
    },
    3818: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/774943ec47ce732040f48df3943a0a7c.jpg"
    },
    59655: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8ae1f733bc7d3b05c506de67f4b4f7f.jpg"
    },
    63839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a549b321910f5308200496f1893c2a5f.jpg"
    },
    79795: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/659db20d7a19cc70a0510c7d197cedf3.jpg"
    },
    24808: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8977d6b170f295068d78c5bbb7b6f02d.jpg"
    },
    19552: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61a79de8dea0228576a18068e4f2660a.jpg"
    },
    73534: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc01cf29aa31b9d15a5d06483a0a1a3.jpg"
    },
    27064: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg"
    },
    31248: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg"
    },
    79114: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d3ee871568fd751956d5ea1242a4f2d.jpg"
    },
    93573: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f79f3baf4a020b34cf9d3cf29d71f4e.jpg"
    },
    14724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbcbd2a2bb65ddad76e831c91c17b421.jpg"
    },
    90377: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a69bebbefae64314172002dd2bae0a34.jpg"
    },
    73564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4393d2466a2f8931669e345898541812.jpg"
    },
    22844: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a1657ff0ab4e3d45469556ba2f899c3.jpg"
    },
    84715: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/16e65ca64eafabe331ef1d2bef9c6f16.jpg"
    },
    28005: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/404be4f04081372768bb660a6c1991ba.jpg"
    },
    84141: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5df3b2d018d1e8e9b424b9eaebc86b16.jpg"
    },
    14825: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14448aca4ceaab8680323ce19c963d68.jpg"
    },
    52591: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f9b044c847e4c971c6ac5d096fe3e0eb.jpg"
    },
    96148: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5239707dea0f2f4ea8351f64e6b5a921.jpg"
    },
    32830: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14312e604f0637a2afd376dd571345d9.jpg"
    },
    91480: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg"
    },
    10869: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c82125e0b20342dba2008b0dcc6d55f6.jpg"
    },
    85613: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d0b53035bf66e851116bd0244ba6ace.jpg"
    },
    85719: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    80391: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg"
    },
    28985: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    47240: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg"
    },
    11008: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    32903: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d6d2cb861c79506282c6d6cbf1170f81.svg"
    },
    49429: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    81715: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg"
    },
    68547: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7563ed0414306d18d4f8401effcab31a.svg"
    },
    1983: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd3b8222b81c51f8a6ae266c805c98a6.png"
    },
    29654: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f002a20c79ea2264ca52456194ef5b48.svg"
    }
  }
]);