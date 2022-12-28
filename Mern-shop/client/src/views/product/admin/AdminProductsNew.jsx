import React from "react";
import FormRow from "../../../components/common/icons/FormRow";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast} from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AdminProductsForm from "./AdminProductsForm";

const schema = yup
  .object({
    title: yup.string().required(),
    catgory: yup
      .string()
      .oneOf(["smartphones", "laptop", "ipad"], "Select a catgory")
      .required(),
    price: yup.number().required().typeError("Must be a number"),
    imageUrl: yup.string().url().required(),
    description: yup.string().required(),
  })
  .required();

const AdminProductsNew = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: (newProduct) => {
      return axios.post("/products/add", newProduct);
    },
    onSuccess: () => {
      reset();
      toast.success("🦄 Woww..Added successfully!");
    },
  });

  const onSubmit = (data) => mutation.mutate(data); //submit data to server and saved.

  return (
    <AdminProductsForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      isLoading={mutation.isLoading}
      errors={errors}
      btnLabel="Add Product"
    />
  );
};

export default AdminProductsNew;
