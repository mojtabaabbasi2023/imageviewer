const __VLS_props = defineProps({
    image: {
        type: Object,
        required: true
    }
});
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "image-container" },
    ...{ style: ({ height: __VLS_ctx.image.calculateHeight + 'px' }) },
});
/** @type {__VLS_StyleScopedClasses['image-container']} */ ;
if (__VLS_ctx.image.loaded) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: (__VLS_ctx.image.path),
        alt: "Lazy loaded image",
        ...{ class: "image" },
    });
    /** @type {__VLS_StyleScopedClasses['image']} */ ;
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "loading-container" },
    });
    /** @type {__VLS_StyleScopedClasses['loading-container']} */ ;
}
// @ts-ignore
[image, image, image,];
const __VLS_export = (await import('vue')).defineComponent({
    props: {
        image: {
            type: Object,
            required: true
        }
    },
});
export default {};
