export default function validate(values) {

  const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;

  const validName = /^[a-zA-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[a-zA-ZÀ-Ÿ][A-zÀ-ÿ']+$/;

  let errors = {};

  if ((!values.name.trim()) || (!validName.test(values.name))) {

    errors.name = "Digite seu nome completo";

  }

  if (!values.email) {

    errors.email = "E-mail é obrigatório";

  } else if (!validEmail.test(values.email)) {

    errors.email = "E-mail inválido";

  }

  if (!values.month || !values.day || !values.year) {

    errors.date = "Escolha uma data";

  }

  if (((values.hour < 9 || values.hour === '12') && values.period === "AM")) {

    errors.time = "Horário inválido";

  }

  if (!values.hour) {

    errors.time = "Escolha um horário";

  }

  return errors;

}