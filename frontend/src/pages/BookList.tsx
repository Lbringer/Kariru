import searchIcon from "../assets/searchIcon.svg";
import { BookCard } from "../components/Bookcard";
import { Loader } from "@/components/ui/Loader";
import { useAllBooks } from "@/hooks";
import { Navbar } from "@/components/Navbar";

export const BookList = () => {
  const { loading, books } = useAllBooks();

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-1/4 mt-8">
          <img
            src={searchIcon}
            alt="searchIcon"
            className="relative left-4 bottom-2"
          />
          <input className="border-b border-b-slate-400 bg-slate-50 focus:outline-none px-4 pl-8 py-2 mb-4 placeholder:text-xs text-sm w-full" />
        </div>
        <div className="flex flex-col w-full items-center">
          {books.map((book: any) => (
            <BookCard book={book} key={book.id} />
          ))}
        </div>
      </div>
    </>
  );
};
