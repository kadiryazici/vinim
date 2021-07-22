import {
   AnchorHTMLAttributes,
   defineComponent,
   PropType,
   ref,
   SetupContext
} from 'vue';
import { RouterLink } from 'vue-router';
import { defaults } from './defaults';

export const Vinim = defineComponent({
   props: {
      content: {
         type: Array as PropType<AllContentTypes[]>,
         required: true
      }
   },
   setup() {},
   render() {
      return this.content.map((kind) => {
         const _class = defaults[kind.type]?.class || '';
         switch (kind.type) {
            case 'block': {
               return (
                  <div class={_class}>
                     <Vinim content={kind.content} />
                     &nbsp;
                  </div>
               );
            }

            case 'block-text': {
               return <div class={_class}>{kind.text}</div>;
            }

            case 'pharagraph': {
               return (
                  <p class={_class}>
                     <Vinim content={kind.content} />
                  </p>
               );
            }

            case 'inline-text': {
               return <span class={_class}>{kind.text}&nbsp;</span>;
            }

            case 'quote': {
               return (
                  <div class={_class}>
                     <Vinim content={kind.content} />
                  </div>
               );
            }

            case 'link': {
               return (
                  <a class={_class} href={kind.href}>
                     {kind.text}
                  </a>
               );
            }

            case 'divider': {
               return <div class={_class}></div>;
            }

            case 'route-link': {
               return (
                  <RouterLink class={_class} to={kind.href}>
                     {kind.text}
                  </RouterLink>
               );
            }

            case 'heading': {
               <div role="heading" class={_class}></div>;
            }
         }
      });
   }
});

export function TestData(): AllContentTypes[] {
   return [
      {
         type: 'block',
         content: [
            {
               type: 'block-text',
               text: 'Hello what you doin man?'
            },
            {
               type: 'pharagraph',
               content: [
                  {
                     type: 'inline-text',
                     text: 'Hey what are you doing?'
                  },
                  {
                     type: 'inline-text',
                     text: 'Hey what are you doing?'
                  },
                  {
                     type: 'block-text',
                     text: 'this is a block text btw'
                  },
                  {
                     type: 'quote',
                     content: [
                        {
                           type: 'block-text',
                           text: 'Hello man welcome'
                        },
                        {
                           type: 'inline-text',
                           text: 'Hello man welcome'
                        }
                     ]
                  }
               ]
            },
            {
               type: 'quote',
               content: [
                  {
                     type: 'block',
                     content: [
                        {
                           type: 'inline-text',
                           text: 'Hello Guys welcome to my channel'
                        },
                        {
                           type: 'link',
                           href: 'https://google.com',
                           text: 'Google'
                        }
                     ]
                  }
               ]
            },
            {
               type: 'route-link',
               text: 'About',
               href: '/about'
            }
         ]
      }
   ];
}

export type AllContentTypes =
   | Block
   | BlockText
   | Pharagraph
   | InlineText
   | Quote
   | Link
   | Divider
   | RouteLink
   | Heading;

interface Block {
   type: 'block';
   content: AllContentTypes[];
}
interface BlockText {
   type: 'block-text';
   text: string;
}
interface Pharagraph {
   type: 'pharagraph';
   content: AllContentTypes[];
}
interface InlineText {
   type: 'inline-text';
   text: string;
}
interface Quote {
   type: 'quote';
   content: AllContentTypes[];
}
interface Link {
   type: 'link';
   href: string;
   text: string;
}
interface Divider {
   type: 'divider';
}
interface Heading {
   type: 'heading';
   text: string;
}
interface RouteLink {
   type: 'route-link';
   text: string;
   href: string;
}
