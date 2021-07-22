import { defineComponent, PropType, ref } from 'vue';
import { AllContentTypes } from '../Vinim';
import { ContentSchema } from './contentSchema';

export const Vinime = defineComponent({
   name: 'Vinime',
   props: {
      content: {
         type: Array as PropType<AllContentTypes[]>,
         default: []
      }
   },
   emits: {},
   setup() {
      const isContentVisible = ref(true);
      return {
         isContentVisible
      };
   },
   render() {
      const _ = this;
      function ContentRender() {
         return _.content.map((item, index) => {
            const schema = ContentSchema.get(item.type)!;

            function PropertyHandler() {
               const schemaCopy = { ...schema };
               delete schemaCopy.content;
               delete schemaCopy.name;
               const willBeRendered = [] as JSX.Element[];

               for (const key in schemaCopy) {
                  if (Object.prototype.hasOwnProperty.call(schemaCopy, key)) {
                     const textType = schemaCopy[key];
                     switch (textType) {
                        case String: {
                           willBeRendered.push(
                              <div class="vinime-property-item">
                                 <span class="title">{key}:&nbsp;</span>
                                 <input
                                    class="input"
                                    // @ts-ignore *
                                    v-model={item[key]}
                                    type="text"
                                 />
                              </div>
                           );
                           break;
                        }

                        case HTMLTextAreaElement:
                           {
                              willBeRendered.push(
                                 <div class="vinime-property-item">
                                    <span class="title">{key}:&nbsp;</span>
                                    <textarea
                                       class="input-area"
                                       // @ts-ignore *
                                       v-model={item[key]}
                                    />
                                 </div>
                              );
                           }
                           break;
                     }
                  }
               }

               return (
                  <div class="vinime-content-properties">
                     {...willBeRendered}
                  </div>
               );
            }

            return (
               <div class="vinime-content">
                  <div class="vinime-content-heading">{schema.name}</div>
                  {PropertyHandler()}
                  <div class="vinime-content-body">
                     {schema.content ? (
                        <>
                           {/* @ts-ignore */}
                           <Vinime content={item.content} />
                           <button
                              onClick={() =>
                                 //  @ts-ignore */
                                 item.content.push({
                                    type: 'route-link',
                                    href: '/',
                                    text: 'home'
                                 })
                              }
                           >
                              Add
                           </button>
                        </>
                     ) : null}
                  </div>
               </div>
            );
         });
      }

      return <>{ContentRender()}</>;
   }
});
