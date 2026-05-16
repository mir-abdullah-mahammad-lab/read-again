import LeftSideBar from "@/components/Homepage/news/LeftSideBar"
import NewsCard from "@/components/Homepage/news/NewsCard";
import RightSideBar from "@/components/Homepage/news/RightSideBar"
import { getCatagories, getNewsByCatagoryId } from "@/lib/data";

export const metadata = {
  title: "Drangon-news- career-page",
 
};

const NewsCategoryPage = async({params}) => {
        const {id} = await params;
        console.log('pepepe', id)
        const data = await getCatagories()
  console.log('the fetch json =', data.data)
  const news_categories = data.data.news_category
  // console.log(news_categories)

  const news = await getNewsByCatagoryId(id)
  console.log("form the MAIN page it use news by id",news )
    
       return (
    <div className="grid grid-cols-12 gap-2 container mx-auto">
      <div className="col-span-3"><LeftSideBar news_categories={news_categories} active_id={id} ></LeftSideBar></div>
      
      <div className={'font-bold text-3xl bg-red-200 col-span-6'}>
        { news.data.length > 0? (news.data.map(n => {return <NewsCard key={n._id} n={n}></NewsCard>})) : (<h2 className="font-bold text-4xl text-center">No News Found</h2>)
        }
      </div>
      <div className={'font-bold text-3xl bg-green-200 col-span-3'}>
      <RightSideBar></RightSideBar>
      </div>
      
    </div>  
  );
};

export default NewsCategoryPage;