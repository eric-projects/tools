import { Component, Vue } from 'vue-property-decorator';
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN.js';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

@Component
export default class App extends Vue {
  render() {
    return (
      <a-config-provider locale={zh_CN}>
        <div id='app'>
          <router-view />
        </div>
      </a-config-provider>
    );
  }
}
