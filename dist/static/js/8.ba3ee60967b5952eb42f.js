webpackJsonp([8],{HpvP:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("aozt"),s=e.n(n),i=e("teIl"),o=e("RCu0"),d={data:function(){return{mediasDetailsInfo:[],newList:[]}},components:{Headerbar:i.a,Bottombar:o.a},mounted:function(){this.getMediasDetails(this.$route.query.url)},methods:{getMediasDetails:function(t){var a=this;s.a.get("http://192.168.1.130:8080/"+t).then(function(t){t.data.data.content.thumbnail="http://192.168.1.130:8080"+t.data.data.content.thumbnail,a.mediasDetailsInfo=t.data.data.content}).catch(function(t){console.log(t)})}}},c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mediasDetails"},[e("div",{staticClass:"medias-top-bg"},[e("div",{staticClass:"medias-top"},[e("Headerbar")],1)]),t._v(" "),e("div",{staticClass:"mediasDetails-info cb"},[e("h4",[t._v(t._s(t.mediasDetailsInfo.title))]),t._v(" "),e("span",[t._v(t._s(t.mediasDetailsInfo.create_time))]),t._v(" "),e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.mediasDetailsInfo.content)}})]),t._v(" "),e("Bottombar")],1)},staticRenderFns:[]};var r=e("C7Lr")(d,c,!1,function(t){e("Q6ra")},null,null);a.default=r.exports},Q6ra:function(t,a){}});