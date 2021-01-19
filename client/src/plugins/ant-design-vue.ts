import Vue from 'vue';
import {
  ConfigProvider,
  Layout,
  Menu,
  Icon,
  Card,
  Breadcrumb,
  Avatar,
  Dropdown,
  Table,
  Divider,
  Tag,
  Pagination,
  Button,
  Row,
  Col,
  Input,
  InputNumber,
  Select,
  Radio,
  Modal,
  TreeSelect,
  Tooltip,
  Popover,
  Alert,
  Form,
  Timeline,
  Spin,
  Upload,
  DatePicker,
  Popconfirm,
  Tabs,
  List,
  Checkbox,
  Steps,
  Skeleton,
  AutoComplete,
  Switch,
  Cascader,
  Tree,
  Collapse,
  PageHeader,
  Transfer,
  Descriptions,
  Badge,
  Anchor,
  Result,
} from 'ant-design-vue';
import { notificationHelper, i18nHelper } from '@/common/utils';

Vue.prototype.$notify = notificationHelper;
Vue.prototype.$l = i18nHelper;

Vue.use(ConfigProvider);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Card);
Vue.use(Breadcrumb);
Vue.use(Avatar);
Vue.use(Dropdown);
Vue.use(Table);
Vue.use(Divider);
Vue.use(Tag);
Vue.use(Pagination);
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Select);
Vue.use(Select.Option);
Vue.use(Radio);
Vue.use(Modal);
Vue.use(TreeSelect);
Vue.use(Tooltip);
Vue.use(Popover);
Vue.use(Alert);
Vue.use(Form);
Vue.use(Timeline);
Vue.use(Spin);
Vue.use(Upload);
Vue.use(DatePicker);
Vue.use(Popconfirm);
Vue.use(Tabs);
Vue.use(List);
Vue.use(Checkbox);
Vue.use(Steps);
Vue.use(Skeleton);
Vue.use(AutoComplete);
Vue.use(Switch);
Vue.use(Cascader);
Vue.use(Tree);
Vue.use(Collapse);
Vue.use(PageHeader);
Vue.use(Transfer);
Vue.use(Descriptions);
Vue.use(Badge);
Vue.use(Anchor);
Vue.use(Result);
