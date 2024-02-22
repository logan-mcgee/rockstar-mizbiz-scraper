! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4504689a-36c2-4624-b782-e0f0be495665", e._sentryDebugIdIdentifier = "sentry-dbid-4504689a-36c2-4624-b782-e0f0be495665")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/modules-core-engagement",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_modules_core_engagement = self.webpackChunk_rockstargames_modules_core_engagement || []).push([
  [228], {
    7228: (e, t, n) => {
      n.r(t), n.d(t, {
        default: () => l
      });
      var o = n(9468);
      const l = () => ({
        label: "Gifting Module",
        fields: [(0, o.translatedField)({
          name: "title",
          label: "Title",
          description: "Title for gifting module.",
          component: "text"
        }), (0, o.translatedField)({
          name: "jumpLinkId",
          label: "Jump Link Id",
          description: "The unique ID that appears in the URL so that the browser will automatically scroll to the component. This cannot have spaces.",
          component: "text"
        }), {
          name: "introScreen",
          label: "Intro Screen",
          description: "The first screen shown to the user.",
          component: "group",
          fields: [(0, o.ImageField)({
            label: "Intro Image"
          }), (0, o.translatedField)({
            name: "tag",
            label: "Tag",
            description: "The badge/tag text that shows below the image and above the headline.",
            component: "text"
          }), (0, o.translatedField)({
            name: "introHeadline",
            label: "Intro Headline",
            component: "text",
            description: "The intro screen headline text."
          }), {
            name: "introContent",
            label: "Intro Content",
            component: "html",
            initialValues: ""
          }, (0, o.translatedField)({
            name: "btnTextLoggedOut",
            label: "Button Text (logged out)",
            description: 'Text for the "claim now" button when the user is logged out.',
            component: "text"
          }), (0, o.translatedField)({
            name: "btnTextLoggedIn",
            label: "Button Text (logged in)",
            description: 'Text for the "claim now" button when the user is logged in.',
            component: "text"
          })]
        }, {
          name: "errorScreen",
          label: "Error Screen",
          description: "The screen shown to the user when there is an issue with their account.",
          component: "group",
          fields: [(0, o.translatedField)({
            name: "errorHeadline",
            label: "Error Headline",
            component: "text",
            description: "The error screen headline text."
          }), (0, o.translatedField)({
            name: "errorButton",
            label: "Error Button Text",
            component: "text",
            description: "The error screen button text."
          })]
        }, {
          name: "unlinkedScreen",
          label: "Account Unlinked Screen",
          description: "The screen shown to the user when they do not have an account linked.",
          component: "group",
          fields: [(0, o.translatedField)({
            name: "unlinkedHeadline",
            label: "Unlinked Headline",
            component: "text",
            description: "The unlinked screen headline text."
          }), {
            name: "unlinkedContent",
            label: "Unlinked Content",
            component: "html",
            initialValues: ""
          }, (0, o.translatedField)({
            name: "unlinkedButtonText",
            label: "Link Account Button Text",
            component: "text",
            description: "The button text to link an account."
          })]
        }, {
          name: "successScreen",
          label: "Success Screen",
          description: "The screen shown to the user when they successfully login to redeem gift.",
          component: "group",
          fields: [(0, o.translatedField)({
            name: "successHeadline",
            label: "Success Headline",
            component: "text",
            description: "The success screen headline text."
          }), {
            name: "successContent",
            label: "Success Content",
            component: "html",
            initialValues: ""
          }]
        }, {
          name: "legalText",
          label: "Legal Text",
          component: "html",
          initialValues: ""
        }],
        itemProps: e => (0, o.itemPropsWithKey)(e, {
          label: `${e?.[o.TINA_MEMOQ_PREFIX]?.title??"NEW"} [Gifting Module]`
        }),
        defaultItem: () => (0, o.defaultItemUnique)({
          introContent: ""
        })
      })
    }
  }
]);
//# sourceMappingURL=10f3d0fba38399d072707bae73efd75d.js.map