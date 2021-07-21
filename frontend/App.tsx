import { defineComponent } from 'vue';
import { Vinim, TestData } from '../src/components/Vinim';

export const App = defineComponent({
   name: 'App',
   setup() {},
   render() {
      return (
         <div>
            <Vinim content={TestData()} />
         </div>
      );
   }
});
