! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "aca54cc8-b278-4ec4-b8ed-aa24608763c9", e._sentryDebugIdIdentifier = "sentry-dbid-aca54cc8-b278-4ec4-b8ed-aa24608763c9")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-engagement",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_engagement = self.webpackChunk_rockstargames_modules_core_engagement || []).push([
  [356], {
    4356: (e, t, n) => {
      n.r(t), n.d(t, {
        default: () => o
      });
      var a = n(9468);
      const o = () => ({
        defaultItem: () => (0, a.defaultItemUnique)({
          errorScreen: (0, a.defaultItemUnique)(),
          introScreen: (0, a.defaultItemUnique)({
            image: (0, a.defaultItemUnique)()
          }),
          successScreen: (0, a.defaultItemUnique)(),
          unlinkedScreen: (0, a.defaultItemUnique)()
        }),
        fields: [(0, a.translatedField)({
          component: "text",
          description: "Title for gifting module.",
          label: "Title",
          name: "title"
        }), {
          component: "text",
          description: "The unique ID that is given to the gift in the database.",
          label: "Gift Claim ID",
          name: "giftId"
        }, {
          component: "text",
          description: "The name of the location on the website for analytics.",
          label: "Analytics Location Data",
          name: "location"
        }, {
          component: "text",
          description: "The unique ID that appears in the URL so that the browser will automatically scroll to the component. This cannot have spaces.",
          label: "Jump Link Id",
          name: "jumpLinkId"
        }, {
          component: "group",
          description: "The first screen shown to the user.",
          fields: [(0, a.ImageField)({
            label: "Intro Image"
          }), (0, a.translatedField)({
            component: "text",
            description: "The badge/tag text that shows below the image and above the headline.",
            label: "Tag",
            name: "tag"
          }), (0, a.translatedField)({
            component: "text",
            description: "The intro screen headline text.",
            label: "Intro Headline",
            name: "introHeadline"
          }), (0, a.translatedField)({
            component: "html",
            initialValues: "",
            label: "Intro Content",
            name: "introContent"
          }), (0, a.translatedField)({
            component: "text",
            description: 'Text for the "claim now" button when the user is logged out.',
            label: "Button Text (logged out)",
            name: "btnTextLoggedOut"
          }), (0, a.translatedField)({
            component: "text",
            description: 'Text for the "claim now" button when the user is logged in.',
            label: "Button Text (logged in)",
            name: "btnTextLoggedIn"
          })],
          label: "Intro Screen",
          name: "introScreen"
        }, {
          component: "group",
          description: "The screen shown to the user when there is an issue with their account.",
          fields: [(0, a.translatedField)({
            component: "text",
            description: "The error screen headline text.",
            label: "Error Headline",
            name: "errorHeadline"
          }), (0, a.translatedField)({
            component: "text",
            description: "The error screen button text.",
            label: "Error Button Text",
            name: "errorButton"
          })],
          label: "Error Screen",
          name: "errorScreen"
        }, {
          component: "group",
          description: "The screen shown to the user when they do not have an account linked.",
          fields: [(0, a.translatedField)({
            component: "text",
            description: "The unlinked screen headline text.",
            label: "Unlinked Headline",
            name: "unlinkedHeadline"
          }), (0, a.translatedField)({
            component: "html",
            initialValues: "",
            label: "Unlinked Content",
            name: "unlinkedContent"
          }), (0, a.translatedField)({
            component: "text",
            description: "The button text to link an account.",
            label: "Link Account Button Text",
            name: "unlinkedButtonText"
          })],
          label: "Account Unlinked Screen",
          name: "unlinkedScreen"
        }, {
          component: "group",
          description: "The screen shown to the user when they successfully login to redeem gift.",
          fields: [(0, a.translatedField)({
            component: "text",
            description: "The success screen headline text.",
            label: "Success Headline",
            name: "successHeadline"
          }), (0, a.translatedField)({
            component: "html",
            initialValues: "",
            label: "Success Content",
            name: "successContent"
          })],
          label: "Success Screen",
          name: "successScreen"
        }, (0, a.translatedField)({
          component: "html",
          initialValues: "",
          label: "Legal Text",
          name: "legalText"
        })],
        itemProps: e => (0, a.itemPropsWithKey)(e, {
          label: `${e?.[a.TINA_MEMOQ_PREFIX]?.title??"NEW"} [Gifting Module]`
        }),
        label: "Gifting Module"
      })
    }
  }
]);