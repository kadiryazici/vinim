import { defineComponent } from 'vue';
import { Vinim, TestData } from '../../src/components/Vinim';

export default defineComponent({
   render() {
      return <Vinim content={TestData()} />;
   }
});
