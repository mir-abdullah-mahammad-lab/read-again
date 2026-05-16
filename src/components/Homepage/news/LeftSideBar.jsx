import React from 'react';
import Link from 'next/link';
const LeftSideBar = ({news_categories, active_id}) => {
    return (
        <div>
             <div className={'font-bold text-3xl '}>
        <ul className="flex flex-col gap-3">
            { news_categories.map(news => 
            <li key={news.category_id} className={`${active_id === news.category_id && `bg-slate-100`}  p-2
        rounded-md font-bold text-center`}>
            <Link href={`/category/${news.category_id}`}
                  className={"block"}>{news.category_name}</Link>
            </li>)}
        </ul>
        

      </div>
        </div>
    );
};

export default LeftSideBar;