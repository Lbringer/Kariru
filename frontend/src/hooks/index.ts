import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { toast } from "./use-toast";
import axios from "axios";

export const useInit = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return { navigate, loading, setLoading };
};

export const useAllBooks = () => {
  const { loading, setLoading } = useInit();
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:8080/api/book", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setBooks(res.data);
      setLoading(false);
    } catch (error) {
      toast({
        title: "Could not fetch books!",
        description: "Please try again later",
        variant: "destructive",
      });
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  return { loading, books };
};

export const useRegister = (role: String) => {
  const { navigate, loading, setLoading } = useInit();
  const [data, setData] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    role: role,
  });
  const handleClick = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8080/api/user/register",
        data
      );
      const token = res.data;
      localStorage.setItem("token", token);
      toast({
        title: " Registered Successfully",
        description:
          role === "user"
            ? "Please take a look at our books collection hope you enjoy!"
            : "Take a look at recent stats and manage your books",
      });
      navigate(role === "user" ? "/booklist" : "/dashboard");
      setLoading(false);
    } catch (error: any) {
      console.error(error.response?.data);
      toast({
        title: "Could not register!",
        description: "Please make sure all inputs are correct",
        variant: "destructive",
      });
      setLoading(false);
    }
  };
  return { data, setData, handleClick, loading, navigate };
};

export const useLogin = () => {
  const { navigate, loading, setLoading } = useInit();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleClick = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8080/api/user/login",
        data
      );
      const token = res.data;
      localStorage.setItem("token", token);
      toast({
        title: "Login Successful",
        description: "Welcome back!",
      });
      navigate("/booklist");
      setLoading(false);
    } catch (error: any) {
      console.error(error.response?.data);
      toast({
        title: "Could not login!",
        description: "Please make sure all inputs are correct",
        variant: "destructive",
      });
      setLoading(false);
    }
  };
  return { data, setData, handleClick, loading, navigate };
};
