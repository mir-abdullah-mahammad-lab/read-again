import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


export const gererateMetadata = async({params})=> {
  const {id} = await params
  console.log(id, 'iiiiiiiiiiiddddddddddddd')
  const news = await getNewsDetailsById(id)
  console.log(news)
  
  return{
    title: news.title,
    description: news.details,
  }
};



const NewsPageDetails =async ({params}) => {

    const {id} = await params
    // console.log('ppppppp',id)
    const n = await getNewsDetailsById(id) 
    console.log('newsssssssssss', n)

    return (
                   <div className="card bg-base-100 min-w-96 w-full shadow-sm">
                    
          
          <div className="card-body">
            {/* author info*/}
                    <div className="flex items-center gap-2 ">
                      <div><Image 
                      src={n.author?.img} 
                      alt="picture" 
                      height={100} 
                      width={100}
                      className="rounded-full"></Image></div>
                      <div>
                        <h2>{n.author?.name}</h2>
                        <h2>{n.author?.published_date}</h2>
                      </div>
        
                           
                    </div>
                     <figure>
                            <Image
                            src={n.image_url}
                              alt="newslater"
                              height={300}
                              width={300}
                              className="w-full"
                            ></Image>
                            </figure>
                        <p className="line-clamp-3">{n.details}</p>
                  <div>
                    <div>

                    </div>
                    <Link href={`/category/${n.category_id}`}>
                    <button className="btn btn-error btn-xl">See Details</button></Link>
                  </div>
              
           
          </div>
        </div>
    );
};

export default NewsPageDetails;