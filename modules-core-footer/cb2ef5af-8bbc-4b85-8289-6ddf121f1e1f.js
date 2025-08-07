try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new o.Error).stack;
  e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "cb2ef5af-8bbc-4b85-8289-6ddf121f1e1f", o._sentryDebugIdIdentifier = "sentry-dbid-cb2ef5af-8bbc-4b85-8289-6ddf121f1e1f")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "4e734f43fc53879f76d3e1ad3d0f71361f833d25",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "4e734f43fc53879f76d3e1ad3d0f71361f833d25"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [2988, 6192], {
    13438: (o, e, t) => {
      t.r(e), t.d(e, {
        default: () => y
      });
      var a = t(71127),
        r = t(9623),
        s = t(41689),
        i = t(61898),
        n = t(21451);
      var c = t(70954);
      const _ = o => {
        let {
          children: e,
          ...t
        } = o;
        return (0, c.jsx)("span", {
          ...t,
          className: "rockstargames-modules-core-footeracd86b7f5778381df8fac4a3f7489f60",
          children: e
        })
      };
      var l = t(20270),
        f = t(2918),
        d = t(95966),
        m = t(81788);
      const u = (0, m.defineMessages)({
          footer_rockstar_games: {
            id: "footer_rockstar_games",
            defaultMessage: "Rockstar Games"
          },
          footer_section_contact_us: {
            id: "footer_section_contact_us",
            defaultMessage: "Contact Us"
          },
          footer_section_company_info: {
            id: "footer_section_company_info",
            defaultMessage: "Company Info"
          },
          footer_section_social_icons: {
            id: "footer_section_social_icons",
            defaultMessage: "Social Media"
          },
          footer_section_organization_info: {
            id: "footer_section_organization_info",
            defaultMessage: "Organization Info"
          },
          footer_locations_new_york: {
            id: "footer_locations_new_york",
            defaultMessage: "New York"
          },
          footer_locations_london: {
            id: "footer_locations_london",
            defaultMessage: "London"
          },
          footer_locations_paris: {
            id: "footer_locations_paris",
            defaultMessage: "Paris"
          },
          footer_locations_bogota: {
            id: "footer_locations_bogota",
            defaultMessage: "Bogotá"
          },
          footer_established_date_roman: {
            id: "footer_established_date_roman",
            defaultMessage: "MCMXCVIII"
          },
          footer_established_date_numerical: {
            id: "footer_established_date_numerical",
            defaultMessage: "1998"
          },
          footer_contact_label_text: {
            id: "footer_contact_label_text",
            defaultMessage: "Contact"
          },
          footer_community_guidelines_label_text: {
            id: "footer_community_guidelines_label_text",
            defaultMessage: "Community Guidelines"
          },
          footer_community_resources_label_text: {
            id: "footer_community_resources_label_text",
            defaultMessage: "Community Resources"
          },
          footer_cookie_policy_label_text: {
            id: "footer_cookie_policy_label_text",
            defaultMessage: "Cookie Policy"
          },
          footer_cookie_settings_label_text: {
            id: "footer_cookie_settings_label_text",
            defaultMessage: "Cookie Settings"
          },
          footer_subscribe: {
            id: "footer_subscribe",
            defaultMessage: "Subscribe"
          },
          footer_corporate: {
            id: "footer_corporate",
            defaultMessage: "Corporate"
          },
          footer_careers: {
            id: "footer_careers",
            defaultMessage: "Careers"
          },
          footer_legal: {
            id: "footer_legal",
            defaultMessage: "Legal"
          },
          footer_donotsellmyinfo: {
            id: "footer_donotsellmyinfo",
            defaultMessage: "Do Not Sell or Share My Personal Information"
          },
          footer_privacy: {
            id: "footer_privacy",
            defaultMessage: "Privacy"
          }
        }),
        g = JSON.parse('{"de-DE":{"footer_careers":"Karriere","footer_community_guidelines_label_text":"Community-Richtlinien","footer_community_resources_label_text":"Community-Ressourcen","footer_contact_label_text":"Kontakt","footer_cookie_policy_label_text":"Cookie-Richtlinie","footer_cookie_settings_label_text":"Cookie-Einstellungen","footer_corporate":"Unternehmen","footer_donotsellmyinfo":"Meine Informationen nicht verkaufen oder teilen","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_legal":"Rechtliches","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_privacy":"Datenschutz","footer_rockstar_games":"Rockstar Games","footer_section_company_info":"Unternehmensinfo","footer_section_contact_us":"Kontaktiere uns","footer_section_organization_info":"Unternehmensinfo","footer_section_social_icons":"Social Media","footer_subscribe":"Abonnieren"},"en-US":{"footer_careers":"Careers","footer_community_guidelines_label_text":"Community Guidelines","footer_community_resources_label_text":"Community Resources","footer_contact_label_text":"Contact","footer_cookie_policy_label_text":"Cookie Policy","footer_cookie_settings_label_text":"Cookie Settings","footer_corporate":"Corporate","footer_donotsellmyinfo":"Do Not Sell or Share My Personal Information","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_legal":"Legal","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_privacy":"Privacy","footer_rockstar_games":"Rockstar Games","footer_section_company_info":"Company Info","footer_section_contact_us":"Contact Us","footer_section_organization_info":"Organization Info","footer_section_social_icons":"Social Media","footer_subscribe":"Subscribe"},"es-ES":{"footer_careers":"Trabajos","footer_community_guidelines_label_text":"Directrices de la comunidad","footer_community_resources_label_text":"Recursos de la comunidad","footer_contact_label_text":"Contacto","footer_cookie_policy_label_text":"Política de cookies","footer_cookie_settings_label_text":"Ajustes de cookies","footer_corporate":"Compañía","footer_donotsellmyinfo":"No vender ni compartir mis datos personales","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_legal":"Aviso legal","footer_locations_bogota":"Bogotá","footer_locations_london":"Londres","footer_locations_new_york":"Nueva York","footer_locations_paris":"París","footer_privacy":"Privacidad","footer_rockstar_games":"Rockstar Games","footer_section_company_info":"Información de la compañía","footer_section_contact_us":"Contacte con nosotros","footer_section_organization_info":"Información de la organización","footer_section_social_icons":"Red social","footer_subscribe":"Suscríbete"},"es-MX":{"footer_careers":"Empleos","footer_community_guidelines_label_text":"Directrices de la comunidad","footer_community_resources_label_text":"Recursos para la comunidad","footer_contact_label_text":"Contacto","footer_cookie_policy_label_text":"Política de cookies","footer_cookie_settings_label_text":"Configuración de cookies","footer_corporate":"Corporativo","footer_donotsellmyinfo":"No vender ni compartir mis datos personales","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_legal":"Legal","footer_locations_bogota":"Bogotá","footer_locations_london":"Londres","footer_locations_new_york":"Nueva York","footer_locations_paris":"París","footer_privacy":"Privacidad","footer_rockstar_games":"Rockstar Games","footer_section_company_info":"Información de la compañía","footer_section_contact_us":"Contáctanos","footer_section_organization_info":"Información de la organización","footer_section_social_icons":"Redes sociales","footer_subscribe":"Suscríbete"},"fr-FR":{"footer_careers":"Carrières","footer_community_guidelines_label_text":"Règles de la communauté","footer_community_resources_label_text":"Ressources de la communauté","footer_contact_label_text":"Contact","footer_cookie_policy_label_text":"Politique en matière de cookies","footer_cookie_settings_label_text":"Paramètres des cookies","footer_corporate":"Société","footer_donotsellmyinfo":"Ne pas vendre ni partager mes données personnelles","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_legal":"Mentions légales","footer_locations_bogota":"Bogota","footer_locations_london":"Londres","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_privacy":"Confidentialité","footer_rockstar_games":"Rockstar Games","footer_section_company_info":"Infos relatives à la société","footer_section_contact_us":"Nous contacter","footer_section_organization_info":"Infos relatives à la société","footer_section_social_icons":"Réseaux sociaux","footer_subscribe":"S\'abonner"},"it-IT":{"footer_careers":"Carriere","footer_community_guidelines_label_text":"Linee guida della comunità","footer_community_resources_label_text":"Risorse della comunità","footer_contact_label_text":"Contatti","footer_cookie_policy_label_text":"Politica sui cookie","footer_cookie_settings_label_text":"Impostazioni dei cookie","footer_corporate":"Informazioni sulla società","footer_donotsellmyinfo":"Non vendere o condividere i miei dati personali","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_legal":"Note legali","footer_locations_bogota":"Bogotá","footer_locations_london":"Londra","footer_locations_new_york":"New York","footer_locations_paris":"Parigi","footer_privacy":"Politica sulla privacy","footer_rockstar_games":"Rockstar Games","footer_section_company_info":"Informazioni sull’azienda","footer_section_contact_us":"Contattaci","footer_section_organization_info":"Informazioni sull’organizzazione","footer_section_social_icons":"Social Media","footer_subscribe":"Iscriviti"},"ja-JP":{"footer_careers":"キャリア","footer_community_guidelines_label_text":"コミュニティガイドライン","footer_community_resources_label_text":"コミュニティリソース","footer_contact_label_text":"お問い合わせ","footer_cookie_policy_label_text":"Cookieポリシー","footer_cookie_settings_label_text":"Cookie設定","footer_corporate":"会社情報","footer_donotsellmyinfo":"個人情報を共有もしくは売らないでください","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_legal":"利用規約","footer_locations_bogota":"ボゴタ","footer_locations_london":"ロンドン","footer_locations_new_york":"ニューヨーク","footer_locations_paris":"パリ","footer_privacy":"プライバシー","footer_rockstar_games":"Rockstar Games","footer_section_company_info":"会社情報","footer_section_contact_us":"お問い合わせ","footer_section_organization_info":"組織情報","footer_section_social_icons":"ソーシャルメディア","footer_subscribe":"サブスクリプション登録"},"ko-KR":{"footer_careers":"채용","footer_community_guidelines_label_text":"커뮤니티 가이드라인","footer_community_resources_label_text":"커뮤니티 정보","footer_contact_label_text":"문의","footer_cookie_policy_label_text":"쿠키 정책","footer_cookie_settings_label_text":"쿠키 설정","footer_corporate":"기업","footer_donotsellmyinfo":"내 개인 정보 판매 및 공유 안 함","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_legal":"법률 관련","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_privacy":"개인 정보","footer_rockstar_games":"Rockstar Games","footer_section_company_info":"회사정보","footer_section_contact_us":"문의","footer_section_organization_info":"기관정보","footer_section_social_icons":"SNS","footer_subscribe":"구독하기"},"pl-PL":{"footer_careers":"Oferty pracy","footer_community_guidelines_label_text":"Regulamin społeczności","footer_community_resources_label_text":"Zasoby społeczności","footer_contact_label_text":"Kontakt","footer_cookie_policy_label_text":"Polityka plików cookie","footer_cookie_settings_label_text":"Ustawienia plików cookie","footer_corporate":"O firmie","footer_donotsellmyinfo":"Zabraniam sprzedaży i udostępniania moich danych","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_legal":"Informacje prawne","footer_locations_bogota":"Bogota","footer_locations_london":"Londyn","footer_locations_new_york":"Nowy Jork","footer_locations_paris":"Paryż","footer_privacy":"Polityka prywatności","footer_rockstar_games":"Rockstar Games","footer_section_company_info":"Informacje o firmie","footer_section_contact_us":"Kontakt","footer_section_organization_info":"Informacje o organizacji","footer_section_social_icons":"Media społecznościowe","footer_subscribe":"Subskrybuj"},"pt-BR":{"footer_careers":"Carreira","footer_community_guidelines_label_text":"Regras da Comunidade","footer_community_resources_label_text":"Recursos da Comunidade","footer_contact_label_text":"Contato","footer_cookie_policy_label_text":"Política de cookies","footer_cookie_settings_label_text":"Configurações de cookies","footer_corporate":"Corporativo","footer_donotsellmyinfo":"Não vendam ou compartilhem minhas informações pessoais","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_legal":"Aviso legal","footer_locations_bogota":"Bogotá","footer_locations_london":"Londres","footer_locations_new_york":"Nova York","footer_locations_paris":"Paris","footer_privacy":"Privacidade","footer_rockstar_games":"Rockstar Games","footer_section_company_info":"Corporativo","footer_section_contact_us":"Contato","footer_section_organization_info":"Organização","footer_section_social_icons":"Redes sociais","footer_subscribe":"Inscrever-se"},"ru-RU":{"footer_careers":"Карьера","footer_community_guidelines_label_text":"Правила сообщества","footer_community_resources_label_text":"Ресурсы сообщества","footer_contact_label_text":"Связаться с нами","footer_cookie_policy_label_text":"Политика использования файлов Cookie","footer_cookie_settings_label_text":"Настройки файлов Cookie","footer_corporate":"О корпорации","footer_donotsellmyinfo":"Я запрещаю продавать и разглашать свою личную информацию","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_legal":"Юридическая информация","footer_locations_bogota":"Богота","footer_locations_london":"Лондон","footer_locations_new_york":"Нью-Йорк","footer_locations_paris":"Париж","footer_privacy":"Конфиденциальность","footer_rockstar_games":"Rockstar Games","footer_section_company_info":"Информация о компании","footer_section_contact_us":"Связаться с нами","footer_section_organization_info":"Информация об организации","footer_section_social_icons":"Социальные сети","footer_subscribe":"Оформить подписку"},"zh-CN":{"footer_careers":"工作机会","footer_community_guidelines_label_text":"社区指南","footer_community_resources_label_text":"社区资源","footer_contact_label_text":"联系我们","footer_cookie_policy_label_text":"Cookie 政策","footer_cookie_settings_label_text":"Cookie 设置","footer_corporate":"公司","footer_donotsellmyinfo":"请勿出售或分享我的个人信息","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_legal":"法律声明","footer_locations_bogota":"波哥大","footer_locations_london":"伦敦","footer_locations_new_york":"纽约","footer_locations_paris":"巴黎","footer_privacy":"隐私","footer_rockstar_games":"Rockstar Games","footer_section_company_info":"公司信息","footer_section_contact_us":"联系我们","footer_section_organization_info":"机构信息","footer_section_social_icons":"社交媒体","footer_subscribe":"订阅"},"zh-TW":{"footer_careers":"工作機會","footer_community_guidelines_label_text":"社群守則","footer_community_resources_label_text":"社群資源","footer_contact_label_text":"聯絡方式","footer_cookie_policy_label_text":"Cookie 政策","footer_cookie_settings_label_text":"Cookie 設定","footer_corporate":"公司資訊","footer_donotsellmyinfo":"不要販售或分享我的個人資訊","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_legal":"法律聲明","footer_locations_bogota":"波哥大","footer_locations_london":"倫敦","footer_locations_new_york":"紐約","footer_locations_paris":"巴黎","footer_privacy":"隱私權政策","footer_rockstar_games":"Rockstar Games","footer_section_company_info":"公司資訊","footer_section_contact_us":"聯絡我們","footer_section_organization_info":"組織資訊","footer_section_social_icons":"社群媒體","footer_subscribe":"訂閱"}}'),
        b = {
          pillBtn: "rockstargames-modules-core-footerc3fe63f31b69138642a2826c7f92be54",
          selected: "rockstargames-modules-core-footerfd0264e741af69a6696c0723a8ed1875",
          siteFooter: "rockstargames-modules-core-footerdc7cba777cf6589cf69816c269336f00",
          siteFooterFirstRow: "rockstargames-modules-core-footerbde93fdc93e6f33c7a2c70006f456584",
          contactUsLinks: "rockstargames-modules-core-footerb5c24f103b44da188f8ba7091f2311c4",
          siteFooterSecondRow: "rockstargames-modules-core-footerb558515ca5ee01f23cce973848c4dc6f",
          companyInfoLinks: "rockstargames-modules-core-footerf853a5b845e59b2b47bfced9acc1007b",
          companyInfoLinksListElement: "rockstargames-modules-core-footerfcbf7f59cd576b97bd48cbe031927b52",
          socialIconLinks: "rockstargames-modules-core-footera3603e0dfe32e5e459646d5050e69da1",
          socialIconLinksListElement: "rockstargames-modules-core-footerabd430e51ed1a4ea694cb383af9418f6",
          siteFooterThirdRow: "rockstargames-modules-core-footerd698977b857336c125cdfcb3b7654d5d",
          additionalInfoLocationsListElement: "rockstargames-modules-core-footerf21eb2a6c202cb30e8b192c4bda3731d",
          additionalInfoEstablishedDate: "rockstargames-modules-core-footerd0a638805e7b844a609f1e8bfbf5fc5f",
          additionalInfoOrganization: "rockstargames-modules-core-footeraf4cfb9cce056156d3e4a4c7c270769d"
        },
        {
          host: k
        } = (0, d.getConfigForDomain)(),
        p = o => {
          let {
            linkBase: e,
            onLanguageChange: t,
            ...a
          } = o;
          const s = (0, m.useIntl)(),
            d = (0, r.useLocation)(),
            {
              track: g
            } = (0, f.useGtmTrack)();
          let p = {
            text: s.formatMessage(u.footer_community_guidelines_label_text),
            defaultText: u.footer_community_guidelines_label_text.defaultMessage,
            url: "/community-guidelines"
          };
          p = {
            text: s.formatMessage(u.footer_community_resources_label_text),
            defaultText: u.footer_community_resources_label_text.defaultMessage,
            url: "/community-resources"
          };
          const h = (o, e, t, a) => () => {
            g({
              event: o,
              link_url: e,
              text: t?.toLowerCase(),
              element_placement: a?.toLowerCase()
            })
          };
          return (0, c.jsxs)("footer", {
            className: b.siteFooter,
            "data-testid": "footer-nav",
            role: "navigation",
            title: "Footer",
            ...a,
            children: [(0, c.jsxs)("div", {
              className: b.siteFooterFirstRow,
              children: [(0, c.jsx)("nav", {
                "aria-label": s.formatMessage(u.footer_section_contact_us),
                className: b.contactUsLinks,
                children: (0, c.jsxs)("ul", {
                  children: [(0, c.jsx)("li", {
                    children: (0, c.jsx)(n.A, {
                      "data-testid": "footer-contact-link",
                      onClick: h("cta_other", "/contact", "contact", "footer"),
                      to: `${e}/contact`,
                      children: s.formatMessage(u.footer_contact_label_text)
                    })
                  }), (0, c.jsx)("li", {
                    children: (0, c.jsx)(n.A, {
                      "data-testid": "footer-careers-link",
                      onClick: h("cta_other", "/careers", "careers", "footer"),
                      to: `${e}/careers`,
                      children: s.formatMessage(u.footer_careers)
                    })
                  }), (0, c.jsx)("li", {
                    children: (0, c.jsx)(n.A, {
                      "data-testid": "footer-community-guidelines-link",
                      onClick: h("cta_other", p.url, p.defaultText, "footer"),
                      to: `${e}${p.url}`,
                      children: p.text
                    })
                  }), (0, c.jsx)("li", {
                    children: (0, c.jsx)(n.A, {
                      "data-testid": "footer-subscribe-link",
                      onClick: h("cta_subscribe_news", `https://${k}.rockstargames.com/settings/email`, "subscribe", "footer"),
                      target: "_blank",
                      to: `https://${k}.rockstargames.com/settings/email`,
                      children: s.formatMessage(u.footer_subscribe)
                    })
                  })]
                })
              }), (0, c.jsx)(l.LanguageSelector, {
                theme: "footer",
                location: d,
                onLanguageChange: t,
                parent: "footer"
              })]
            }), (0, c.jsxs)("div", {
              className: b.siteFooterSecondRow,
              children: [(0, c.jsx)("nav", {
                "aria-label": s.formatMessage(u.footer_section_company_info),
                className: b.companyInfoLinks,
                children: (0, c.jsxs)("ul", {
                  className: b.companyInfoLinksListElement,
                  children: [(0, c.jsx)("li", {
                    children: (0, c.jsx)(n.A, {
                      "data-testid": "footer-corporate-link",
                      onClick: h("cta_other", "/corpinfo", "corporate", "footer"),
                      to: `${e}/corpinfo`,
                      children: s.formatMessage(u.footer_corporate)
                    })
                  }), (0, c.jsx)("li", {
                    children: (0, c.jsx)(n.A, {
                      "data-testid": "footer-privacy-link",
                      onClick: h("cta_other", "/privacy", "privacy", "footer"),
                      to: `${e}/privacy`,
                      children: s.formatMessage(u.footer_privacy)
                    })
                  }), (0, c.jsx)("li", {
                    children: (0, c.jsx)("button", {
                      "data-testid": "footer-cookie-settings-button",
                      onClick: () => {
                        g({
                          event: "cta_other",
                          link_url: "",
                          text: "cookie settings"?.toLowerCase(),
                          element_placement: "footer"?.toLowerCase()
                        }), window.OneTrust?.ToggleInfoDisplay()
                      },
                      children: s.formatMessage(u.footer_cookie_settings_label_text)
                    })
                  }), (0, c.jsx)("li", {
                    children: (0, c.jsx)(n.A, {
                      "data-testid": "footer-cookie-policy-link",
                      onClick: h("cta_other", "/cookies", "cookie policy", "footer"),
                      to: `${e}/cookies`,
                      children: s.formatMessage(u.footer_cookie_policy_label_text)
                    })
                  }), (0, c.jsx)("li", {
                    children: (0, c.jsx)(n.A, {
                      "data-testid": "footer-legal-link",
                      onClick: h("cta_other", "/legal", "legal", "footer"),
                      to: `${e}/legal`,
                      children: s.formatMessage(u.footer_legal)
                    })
                  }), (0, c.jsx)("li", {
                    children: (0, c.jsx)(n.A, {
                      "data-testid": "footer-ccpa-link",
                      onClick: h("cta_other", "/ccpa", "do not sell my info", "footer"),
                      to: `${e}/ccpa`,
                      children: s.formatMessage(u.footer_donotsellmyinfo)
                    })
                  })]
                })
              }), (0, c.jsx)("nav", {
                "aria-label": s.formatMessage(u.footer_section_social_icons),
                className: b.socialIconLinks,
                children: (0, c.jsxs)("ul", {
                  className: b.socialIconLinksListElement,
                  children: [(0, c.jsx)("li", {
                    children: (0, c.jsx)(i.IconButton, {
                      appearance: "ghost",
                      icon: "Twitter",
                      size: "MD",
                      label: "Rockstar Games X",
                      asChild: !0,
                      children: (0, c.jsx)(n.A, {
                        className: b.linksListItemElementContent,
                        "aria-label": "Rockstar Games X",
                        "data-testid": "twitter-link",
                        onClick: h("cta_other", "https://x.com/rockstargames", "twitter", "footer"),
                        target: "_blank",
                        title: "X",
                        to: "https://x.com/rockstargames"
                      })
                    })
                  }), (0, c.jsx)("li", {
                    children: (0, c.jsx)(i.IconButton, {
                      appearance: "ghost",
                      icon: "Instagram",
                      size: "MD",
                      label: "Rockstar Games Instagram",
                      asChild: !0,
                      children: (0, c.jsx)(n.A, {
                        className: b.linksListItemElementContent,
                        "aria-label": "Rockstar Games Instagram",
                        "data-testid": "instagram-link",
                        onClick: h("cta_other", 'https://instagram.com/rockstargames"', "instagram", "footer"),
                        target: "_blank",
                        title: "Instagram",
                        to: "https://instagram.com/rockstargames"
                      })
                    })
                  }), (0, c.jsx)("li", {
                    children: (0, c.jsx)(i.IconButton, {
                      appearance: "ghost",
                      icon: "Youtube",
                      size: "MD",
                      label: "Rockstar Games YouTube",
                      asChild: !0,
                      children: (0, c.jsx)(n.A, {
                        className: b.linksListItemElementContent,
                        "aria-label": "Rockstar Games YouTube",
                        "data-testid": "youtube-link",
                        onClick: h("cta_other", "https://www.youtube.com/rockstargames", "youtube", "footer"),
                        target: "_blank",
                        title: "YouTube",
                        to: "https://www.youtube.com/rockstargames"
                      })
                    })
                  }), (0, c.jsx)("li", {
                    children: (0, c.jsx)(i.IconButton, {
                      appearance: "ghost",
                      icon: "Facebook",
                      size: "MD",
                      label: "Rockstar Games Facebook",
                      asChild: !0,
                      children: (0, c.jsx)(n.A, {
                        className: b.linksListItemElementContent,
                        "aria-label": "Rockstar Games Facebook",
                        "data-testid": "facebook-link",
                        onClick: h("cta_other", "https://www.facebook.com/rockstargames", "facebook", "footer"),
                        target: "_blank",
                        title: "Facebook",
                        to: "https://www.facebook.com/rockstargames"
                      })
                    })
                  }), (0, c.jsx)("li", {
                    children: (0, c.jsx)(i.IconButton, {
                      appearance: "ghost",
                      icon: "Twitch",
                      size: "MD",
                      label: "Rockstar Games Twitch",
                      asChild: !0,
                      children: (0, c.jsx)(n.A, {
                        className: b.linksListItemElementContent,
                        "aria-label": "Rockstar Games Twitch",
                        "data-testid": "twitch-link",
                        onClick: h("cta_other", "https://twitch.tv/rockstargames", "twitch", "footer"),
                        target: "_blank",
                        title: "Twitch",
                        to: "https://twitch.tv/rockstargames"
                      })
                    })
                  }), (0, c.jsx)("li", {
                    children: (0, c.jsx)(i.IconButton, {
                      appearance: "ghost",
                      icon: "Discord",
                      size: "MD",
                      label: "Rockstar Games Discord",
                      asChild: !0,
                      children: (0, c.jsx)(n.A, {
                        className: b.linksListItemElementContent,
                        "aria-label": "Rockstar Games Discord",
                        "data-testid": "discord-link",
                        onClick: h("cta_other", "https://discord.gg/rockstargames", "discord", "footer"),
                        target: "_blank",
                        title: "Discord",
                        to: "https://discord.gg/rockstargames"
                      })
                    })
                  })]
                })
              })]
            }), (0, c.jsxs)("section", {
              "aria-label": s.formatMessage(u.footer_section_organization_info),
              className: b.siteFooterThirdRow,
              children: [(0, c.jsx)(i.Text, {
                children: s.formatMessage(u.footer_rockstar_games)
              }), (0, c.jsxs)("ul", {
                className: b.additionalInfoLocationsListElement,
                children: [(0, c.jsx)("li", {
                  children: (0, c.jsx)(i.Text, {
                    children: s.formatMessage(u.footer_locations_new_york)
                  })
                }), (0, c.jsx)("li", {
                  children: (0, c.jsx)(i.Text, {
                    children: s.formatMessage(u.footer_locations_london)
                  })
                }), (0, c.jsx)("li", {
                  children: (0, c.jsx)(i.Text, {
                    children: s.formatMessage(u.footer_locations_paris)
                  })
                }), (0, c.jsx)("li", {
                  children: (0, c.jsx)(i.Text, {
                    children: s.formatMessage(u.footer_locations_bogota)
                  })
                })]
              }), (0, c.jsxs)("span", {
                className: b.additionalInfoEstablishedDate,
                children: [(0, c.jsx)("span", {
                  children: s.formatMessage(u.footer_established_date_roman)
                }), (0, c.jsx)(_, {
                  children: s.formatMessage(u.footer_established_date_numerical)
                })]
              })]
            })]
          })
        },
        h = o => {
          let {
            tokenWrapperEl: e,
            includeBrowserRouter: t = !1,
            linkBase: a = "",
            onLanguageChange: i,
            ...n
          } = o;
          return t ? (0, c.jsx)(s.NP, {
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultContrastMode: "normal",
            defaultPlatformScale: "desktop",
            container: e,
            children: (0, c.jsx)(s.NP, {
              colorScheme: "dark",
              defaultColorScheme: "dark",
              defaultContrastMode: "normal",
              defaultPlatformScale: "desktop",
              container: e,
              children: (0, c.jsx)(r.BrowserRouter, {
                children: (0, c.jsx)(p, {
                  linkBase: a,
                  onLanguageChange: i,
                  ...n
                })
              })
            })
          }) : (0, c.jsx)(p, {
            linkBase: a,
            onLanguageChange: i,
            ...n
          })
        },
        y = (0, m.withIntl)((o => {
          const [e, t] = (0, a.useState)(null);
          return (0, c.jsx)("div", {
            className: "siteFooterContainer",
            children: (0, c.jsx)("div", {
              ref: t,
              children: e && (0, c.jsx)(h, {
                ...o,
                tokenWrapperEl: e
              })
            })
          })
        }), g)
    }
  }
]);