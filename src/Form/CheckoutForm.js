import "./CheckoutForm.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { actionUpdateShoppingCart } from "../store/actions";

const CheckoutForm = (props) => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    fname: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    surname: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    age: Yup.number()
      .typeError("Invalid number")
      .positive("Number must be positive")
      .required("Required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    address: Yup.string()
      .min(10, "Must be 10 characters or less")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      fname: "",
      surname: "",
      age: 0,
      phone: "",
      address: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log("Інформація про замовлення:");
      console.log("Данні замовника:");
      console.log("Ім'я:" + values.fname + " " + values.surname);
      console.log("Вік:" + values.age);
      console.log("Адреса:" + values.address);
      console.log("Телефон:" + values.phone);
      console.log("=======");

      console.log("=== Котики: ===");
      props.cats.forEach((cat) => {
        console.log("Name:" + cat.name);
        console.log("Color:" + cat.color);
        console.log("Ціна:" + cat.price);
        console.log("_______");
      });

      localStorage.removeItem("cartList");
      dispatch(actionUpdateShoppingCart([]));
      resetForm();
    },
    validationSchema: validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form__checkout">
      <label className="form__checkout--label form__label" htmlFor="fname">
        First Name
      </label>
      <Input
        htmlFor="fname"
        placeholder="some text for name"
        id="fname"
        name="fname"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.fname}
        errors={formik.name && formik.name}
      />
      {formik.touched.fname && formik.errors.fname ? (
        <p className="error__text">{formik.errors.fname}</p>
      ) : null}
      <label className="form__checkout--label form__label" htmlFor="surname">
        Surname
      </label>
      <Input
        placeholder="some text for surname"
        id="surname"
        name="surname"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.surname}
      />
      {formik.touched.surname && formik.errors.surname ? (
        <p className="error__text">{formik.errors.surname}</p>
      ) : null}
      <label className="form__checkout--label form__label" htmlFor="age">
        Age
      </label>
      <Input
        placeholder="some text for age"
        id="age"
        name="age"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.age}
      />
      {formik.touched.age && formik.errors.age ? (
        <p className="error__text">{formik.errors.age}</p>
      ) : null}
      <label className="form__checkout--label form__label" htmlFor="phone">
        Tel
      </label>
      <Input
        id="phone"
        name="phone"
        type="string"
        value={formik.values.phone}
        placeholder="(###) #### ###"
        onChange={formik.handleChange}
      />
      {formik.touched.phone && formik.errors.phone ? (
        <p className="error__text">{formik.errors.phone}</p>
      ) : null}
      <label className="form__checkout--label form__label" htmlFor="address">
        Address
      </label>
      <Input
        placeholder="some text for address"
        id="address"
        name="address"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.address}
      />
      {formik.touched.address && formik.errors.address ? (
        <p className="error__text">{formik.errors.address}</p>
      ) : null}
      <button className="btn__submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default CheckoutForm;
