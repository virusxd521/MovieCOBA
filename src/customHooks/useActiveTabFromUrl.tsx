import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMovie } from '../context';

interface Tab {
  id: number;
  tabName: string;
}

const useActiveTabFromUrl = (tabList: Tab[]) => {
  const { state, dispatch } = useMovie();
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    const matchingTab = tabList.find(({ tabName }) => `/${tabName}` === pathname);
    if (matchingTab) {
      dispatch({ type: 'setActiveTab', payload: matchingTab.id });
    }
  }, [location, tabList, dispatch]);

  return state.activeTab;
};

export default useActiveTabFromUrl;
