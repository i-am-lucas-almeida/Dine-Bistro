import { useState, useEffect } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    month: "",
    day: "",
    year: "",
    hour: "",
    minutes: "00",
    period: "am",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [valid, setValid] = useState(false);
 

  useEffect(() => {

    if (Object.keys(errors).length === 0 && isSubmitting) {

      setValid(true);

    }

  }, [errors, isSubmitting]);

  const handleSubmit = (e) => {

    if (e) e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);

  };

  const handleChange = (e) => {

    setValues((values) => ({

      ...values,
      [e.target.name]: e.target.value,

    }));

  };

  return {

    handleChange,
    handleSubmit,
    values,
    errors,
    valid,
    isSubmitting

  };

};

export default useForm;