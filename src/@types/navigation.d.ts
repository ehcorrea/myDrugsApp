import { NavigationParamList } from '@/types/navigators';
declare global {
  namespace ReactNavigation {
    interface RootParamList extends NavigationParamList {}
  }
}
