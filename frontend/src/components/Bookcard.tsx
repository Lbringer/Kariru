import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type BookProps = {
  title: string;
  author: string;
  genre: string;
  isbn: string;
  stock: number;
  rental_price: number;
};

export const BookCard: React.FC<{ book: BookProps }> = ({ book }) => {
  return (
    <Card className="w-1/2 rounded-xl bg-slate-50 overflow-hidden shadow-none mb-4">
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold text-gray-900">{book.title}</h2>
        <p className="text-gray-600 mt-1 text-sm font-semibold">
          by {book.author}
        </p>
        <p className="text-sm text-slate-500 mt-2">Genre: {book.genre}</p>
        <p className="text-sm text-slate-500">ISBN: {book.isbn}</p>
        <p
          className={`mt-2 font-medium ${
            book.stock > 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {book.stock > 0 ? `Available: ${book.stock}` : "Out of Stock"}
        </p>
        <p className="text-lg font-bold mt-2">￥{book.rental_price}</p>
      </CardContent>
      <CardFooter className="flex justify-between p-4 border-t">
        <Button className={`w-full ${book.stock > 0 ? "" : "bg-slate-600"}`}>
          {book.stock > 0 ? "Rent Now" : "Waitlist"}
        </Button>
      </CardFooter>
    </Card>
  );
};
