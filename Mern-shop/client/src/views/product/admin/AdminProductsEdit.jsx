import React from "react";
import FormRow from "../../../components/common/icons/FormRow";
import { useForm } from "react-hook-form";
import axios from "axios";
import Loader from "../../../components/common/icons/Loader";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormRowError from "../../../components/common/FormRowError";
import GlobalSpinner from "../../../components/common/GlobalSpinner";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import AdminProductsForm from "./AdminProductsForm";

const schema = yup
  .object({
    title: yup.string().required(),
    catgory: yup
      .string()
      .oneOf(["smartphones", "laptops", "ipad"], "Select a category")
      .required(),
    price: yup.number().required().typeError("Must be a number"),
    imageUrl: yup.string().url().required(),
    description: yup.string().required(),
  })
  .required();

const AdminProductsEdit = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["products", productId],
    queryFn: () => axios.get(`products/${productId}`),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    reset(data?.data);
  }, [data]);

  const mutation = useMutation({
    mutationFn: (newProduct) => {
      return axios.put(`/products/${productId}`, newProduct);
    },
    onSuccess: () => {
      navigate("/admin/products");
      toast.success("🦄 Woww..Saved successfully!");
    },
  });

  const onSubmit = (data) => mutation.mutate(data); //submit data to server and saved.

  if (isLoading) return <GlobalSpinner />;

  return (
    <AdminProductsForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      isLoading={mutation.isLoading}
      errors={errors}
      btnLabel="Save Product"
    />
  );
};

export default AdminProductsEdit;
