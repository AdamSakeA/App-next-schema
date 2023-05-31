import Image from "next/image";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ButtonPrimary, ButtonSecondary, TextInput } from "@/src/components";
import whatsappMessage from "@/src/utils/whatsappMessage";

import { Container, Contents, ButtonContainer } from "./form-payment.styles";

const dataInit = [
  { label: "Nama", id: "name" },
  { label: "Alamat", id: "alamat" },
  { label: "E-mail", id: "email" },
  { label: "Nomor Telepon", id: "phone" },
  { label: "Catatan", id: "notes" },
];

export default function FormPayment({ productCart }) {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      alamat: "",
      email: "",
      phone: "",
      notes: "",
    },
    onSubmit: (values) => {
      whatsappMessage({ productCart, user: values });
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Nama harus diisi"),
      alamat: Yup.string().required("Alamat harus diisi"),
      email: Yup.string()
        .required("Email harus diisi")
        .email("Email tidak valid"),
      phone: Yup.string()
        .required("Nomor telepon harus diisi")
        .matches(/^[0-9]{10,12}$/, "Nomor telepon tidak valid"),
    }),
  });

  const handleCanceledOrder = () => {
    router.push("/products");
  };

  const displayForm = dataInit.map((item, i) => {
    return (
      <TextInput
        key={i}
        label={item.label}
        id={item.id}
        name={item.id}
        value={formik.values[item.id]}
        onChange={formik.handleChange}
        required={item.id === "notes" ? false : true}
        type={item.id === "notes" ? "textarea" : "text"}
        errors={formik.errors[item.id]}
      />
    );
  });

  return (
    <Container>
      <h1>Form Pembelian</h1>
      <Contents>
        <form onSubmit={formik.handleSubmit}>
          {displayForm}
          <ButtonContainer>
            <ButtonPrimary type="submit">Bayar</ButtonPrimary>
            <ButtonSecondary onClick={() => handleCanceledOrder()}>
              Batal
            </ButtonSecondary>
          </ButtonContainer>
        </form>
        <Image
          className="form__image"
          src={"/imgs/form.svg"}
          alt="form-img"
          width={590}
          height={590}
        />
      </Contents>
    </Container>
  );
}
