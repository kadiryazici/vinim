import { AllContentTypes } from '../Vinim';

type TContentSchema = Map<AllContentTypes['type'], Record<string, any>>;

export const ContentSchema: TContentSchema = new Map();

ContentSchema.set('block', {
   content: true,
   name: 'Block'
});
ContentSchema.set('block-text', {
   text: HTMLTextAreaElement,
   name: 'Block Text'
});
ContentSchema.set('pharagraph', {
   content: true,
   name: 'Pharagraph'
});
ContentSchema.set('inline-text', {
   text: String,
   name: 'Inline Text'
});
ContentSchema.set('quote', {
   content: true,
   name: 'Quote'
});
ContentSchema.set('link', {
   text: String,
   href: String,
   name: 'Link'
});
ContentSchema.set('divider', {
   name: 'Divider'
});
ContentSchema.set('heading', {
   text: String,
   name: 'Heading'
});
ContentSchema.set('route-link', {
   text: String,
   href: String,
   name: 'Route Link'
});
