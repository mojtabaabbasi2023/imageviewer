/// <reference types="D:/projects/image-viewer/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="D:/projects/image-viewer/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { ref } from 'vue';
import ImageViewer from '../components/ImageViewer.vue';
const images = ref([
    {
        path: "http://172.16.8.80:20020/api/app/book/c4ea0b04-9e85-e657-7464-3a20dcec1eed/image/G01/NUR193616J1.jpg",
        width: 614,
        height: 900
    },
    {
        path: "http://172.16.8.80:20020/api/app/book/c4ea0b04-9e85-e657-7464-3a20dcec1eed/image/G01/image00001.jpg",
        width: 627,
        height: 900
    },
    {
        path: "http://172.16.8.80:20020/api/app/book/c4ea0b04-9e85-e657-7464-3a20dcec1eed/image/G01/image00002.jpg",
        width: 652,
        height: 900
    },
    {
        path: "http://172.16.8.80:20020/api/app/book/c4ea0b04-9e85-e657-7464-3a20dcec1eed/image/G01/image00003.jpg",
        width: 647,
        height: 900
    },
    {
        path: "http://172.16.8.80:20020/api/app/book/c4ea0b04-9e85-e657-7464-3a20dcec1eed/image/G01/image00004.jpg",
        width: 649,
        height: 900,
    },
    {
        path: "http://172.16.8.80:20020/api/app/book/c4ea0b04-9e85-e657-7464-3a20dcec1eed/image/G01/image00005.jpg",
        width: 654,
        height: 900,
    },
    {
        path: "http://172.16.8.80:20020/api/app/book/c4ea0b04-9e85-e657-7464-3a20dcec1eed/image/G01/image00006.jpg",
        width: 634,
        height: 900,
    },
    {
        path: "http://172.16.8.80:20020/api/app/book/c4ea0b04-9e85-e657-7464-3a20dcec1eed/image/G01/image00007.jpg",
        width: 653,
        height: 900,
    },
    {
        path: "http://172.16.8.80:20020/api/app/book/c4ea0b04-9e85-e657-7464-3a20dcec1eed/image/G01/image00008.jpg",
        width: 643,
        height: 900,
    },
    {
        path: "http://172.16.8.80:20020/api/app/book/c4ea0b04-9e85-e657-7464-3a20dcec1eed/image/G01/image00009.jpg",
        width: 647,
        height: 900,
    },
    {
        path: "http://172.16.8.80:20020/api/app/book/c4ea0b04-9e85-e657-7464-3a20dcec1eed/image/G01/image00010.jpg",
        width: 635,
        height: 900,
    },
    {
        path: "http://172.16.8.80:20020/api/app/book/c4ea0b04-9e85-e657-7464-3a20dcec1eed/image/G01/image00011.jpg",
        width: 648,
        height: 900,
    }
]);
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
const __VLS_0 = ImageViewer;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    dataItems: (__VLS_ctx.images),
}));
const __VLS_2 = __VLS_1({
    dataItems: (__VLS_ctx.images),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
var __VLS_3;
// @ts-ignore
[images,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
