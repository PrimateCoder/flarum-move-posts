module.exports=function(t){var e={};function o(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=19)}({17:function(t,e){t.exports=flarum.core.compat["common/utils/extractText"]},19:function(t,e,o){"use strict";o.r(e);var s=o(17),n=o.n(s);app.initializers.add("sycho/flarum-move-posts",(function(){var t=app.data.settings["sycho-move-posts.moved_first_post_content"]||n()(app.translator.trans("sycho-move-posts.lib.discussion.first_post.default_content"));app.extensionData.for("sycho-move-posts").registerSetting((function(){var e=this;return m("div",{className:"Form-group"},m("label",{for:"moved_first_post_content"},app.translator.trans("sycho-move-posts.admin.settings.moved_first_post_content")),m("div",{className:"helpText"},app.translator.trans("sycho-move-posts.admin.settings.moved_first_post_content_help")),m("textarea",{id:"moved_first_post_content",oninput:function(o){t=o.target.value,e.setting("sycho-move-posts.moved_first_post_content")(o.target.value)},className:"FormControl",required:!0},t))})).registerSetting({setting:"sycho-move-posts.group_sequential_event_posts",label:app.translator.trans("sycho-move-posts.admin.settings.group_sequential_posts"),type:"boolean"}).registerPermission({icon:"fas fa-exchange-alt",label:app.translator.trans("sycho-move-posts.admin.permissions.move_posts"),permission:"sycho-move-posts:movePosts"},"moderate")}))}});
//# sourceMappingURL=admin.js.map