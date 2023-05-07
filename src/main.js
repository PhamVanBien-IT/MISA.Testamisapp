import { createApp } from 'vue'
import App from './App.vue'
import diy from '@/js/diy'
import MISAEnum from './js/enum';
import MISAResource from './js/resource';
import MISACommon from './js/common';
import router from './router/router';
import MButton from './components/button/MButton.vue';
import MCombobox from './components/combobox/MCombobox.vue';
import MDropdown from "./components/combobox/MDropdown.vue";
import MDialog from "./components/dialog/MDialog.vue";
import MInputText from "./components/input/MInputText.vue";
import MInputTextV2 from "./components/input/MInputTextV2.vue";
import MDataGrid from "./components/datagrid/MDataGrid.vue";
import MComboboxV2 from "./components/combobox/MComboboxV2.vue";
import MLoading from "./components/loading/MLoading";
import { createI18n } from 'vue-i18n'
  
const messages = MISAResource.messages;

  const i18n = createI18n({
    locale: 'vi', // Ngôn ngữ mặc định
    messages // Dữ liệu ngôn ngữ
  })
  

const app = createApp(App);

 /* eslint-disable */ 
app.provide("diy",diy);

app.component("MButton",MButton);
app.component("MCombobox",MCombobox);
app.component("MDropdown",MDropdown);
app.component("MDialog",MDialog);
app.component("MInputText",MInputText);
app.component("MInputTextV2",MInputTextV2);
app.component("MDataGrid",MDataGrid);
app.component("MComboboxV2",MComboboxV2);
app.component("MLoading",MLoading);

app.use(i18n);
app.use(router);

app.mount('#app');

app.config.productionTip = false;
app.config.globalProperties.$MISAEnum = MISAEnum;
app.config.globalProperties.$MISAResource = MISAResource;
app.config.globalProperties.$MISACommon = MISACommon;





