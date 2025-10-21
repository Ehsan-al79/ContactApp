import { useState } from "react";
import { books as bookData } from "../constants/mockData";
import BookCard from "./BookCard";
import SearchBox from "./SearchBox";

export default function Books() {
  const [liked, setLiked] = useState([]);
  const [books, setBooks] = useState(bookData);
  const[search,setSearch]=useState([]);

  function handleLikeList(data, color) {
    if (color) {
      // یعنی قبلاً لایک شده بوده → حالا حذفش کن
      const newLikedList = liked.filter((i) => (i.id !== data.id));
      setLiked(newLikedList);
    } else {
      // یعنی قبلاً لایک نبوده → حالا اضافه‌اش کن
      setLiked((liked) => ([...liked, data]));
      console.log(liked)
    }
  }

  function searchHandler(){
    if(search){
      const newBooks=bookData.filter((book)=>(book.title.toLowerCase().includes(search)));
      setBooks(newBooks)
    }else{
      setBooks(bookData);
    }
  }

  return (
    <>
    <SearchBox search={search} setSearch={setSearch} searchHandler={searchHandler}/>
    <div className="w-full gap-x-5 flex justify-between text-white p-4">
      <div className={liked.length ? " w-[70%]" : "w-full"}>
        {
        books.map((item) => (
          <BookCard handleLikeList={handleLikeList} data={item} key={item.id} />
        ))}
        </div>
        {!!liked.length && (<div className="flex flex-col w-[30%]">
          <div className="p-4 bg-blue-600 rounded-2xl">
            <span className="font-bold text-2xl flex mb-5">Favorites</span>
            {liked.map((item)=>(
              <div key={item.id} className="w-full bg-[rgba(255,255,255,0.3)] mb-4 flex items-center rounded-xl">
                <img className="w-[60px] m-2 rounded-md" src={item.image} alt={item.author} />
                <span>{item.title}</span>
              </div>
              ))}
          </div>
        </div>)}
    </div>
    </>
  );
}
