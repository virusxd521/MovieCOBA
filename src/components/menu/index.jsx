import React from 'react';
import {Link} from 'react-router-dom'
import './style.css';


const Menu = ({tabList, activeTab, onTabChange}) => {
	return (
		<div className='tabs'>			
			{tabList.map(({tabName, id}) =>
				<Link key={"link_"+id} to={id==1?"/":'/'+tabName}>
					<button
					className={`tab ${activeTab === id ? 'active' : ''}`}
					onClick={() => { onTabChange(id); }}
					key={tabName}
					>{tabName}</button>
				</Link>		
			)}
		</div>
	);
}

export default Menu;