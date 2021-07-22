import { AllContentTypes } from './index';

type Defaults = Partial<
   {
      [key in AllContentTypes['type']]: {
         class: string;
      };
   }
>;

export const defaults: Defaults = {
   'block-text': {
      class: 'vinim-block-text'
   },
   'inline-text': {
      class: 'vinim-inline-text'
   },
   pharagraph: {
      class: 'vinim-pharagraph'
   },
   block: {
      class: 'vinim-wrapper'
   },
   quote: {
      class: 'vinim-quote'
   },
   link: {
      class: 'vinim-link'
   },
   divider: {
      class: 'vinim-divider'
   },
   'route-link': {
      class: 'vinim-link'
   },
   heading: {
      class: 'vinim-heading'
   }
};
