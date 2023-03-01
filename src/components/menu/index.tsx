import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { useMovie } from '../../context';
import useActiveTabFromUrl from '../../customHooks/useActiveTabFromUrl';

interface Tab {
  tabName: string;
  id: number;
}

interface Props {
  tabList: Tab[];
}

const Menu: React.FC<Props> = ({ tabList }) => {
  const { dispatch } = useMovie();
  const activeTab = useActiveTabFromUrl(tabList);

  const handleTabChange = (id: number) => {
    dispatch({ type: 'setActiveTab', payload: id });
  };

  return (
    <div className='tabs'>
      {tabList.map(({ tabName, id }) => (
        <Link key={'link_' + id} to={id == 1 ? '/' : '/' + tabName}>
          <button
            className={`tab ${activeTab === id ? 'active' : ''}`}
            onClick={() => {
              handleTabChange(id);
            }}
            key={tabName}
          >
            {tabName}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
