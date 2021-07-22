import { defineComponent, ref } from 'vue';
import { TestData, Vinim } from '../../src/components/Vinim';
import { Vinime } from '../../src/components/VinimEditor/index';

export default defineComponent({
   name: 'About',
   setup() {
      const contentData = ref(TestData());
      return {
         contentData
      };
   },
   render() {
      return (
         <>
            <div
               style={{
                  margin: '0 auto',
                  display: 'flex'
               }}
            >
               <Vinime v-model={[this.contentData, 'content']} />
               <Vinim style="width:50% !important" content={this.contentData} />
            </div>
         </>
      );
   }
});
