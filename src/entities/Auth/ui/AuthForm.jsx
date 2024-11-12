import  useAuthLogic from "@/features/Auth/model/useAuthLogic";
import React from "react";
import { TextField,Button } from "@mui/material";
import { MuiTelInput} from "mui-tel-input";
import styles from "@/entities/Auth/style/Auth.module.scss"

const AuthForm = () => {
  const {
    name,
    phone,
    handleNameChange,
    handlePhoneChange,
    handleSubmit,
    isFormValid,
    nameTouched,
    setNameTouched,
    phoneTouched,
    setPhoneTouched,
    handleNameBlur,
    handlePhoneBlur,
    nameError,
    phoneError,
    handleValidate

  } = useAuthLogic();
  return (
    <div className={styles.Auth}>
      <div className="container" id="container">
        <div className={styles.Auth__content}>
          <div className={styles.form__container}>
            <form onSubmit={handleSubmit}>
              <h1>
                Подобрали подходящие <br /> для вас профессии
              </h1>
              <p className={styles.Auth__info}>Заполните форму, чтобы узнать результаты</p>
              <TextField
                style={{
                  margin: "8px 0",
                  width: "100%",
                  outline: "#000",
                  borderRadius: "30px",
                }}
                variant="outlined"
                label="Username"
                value={name}
                onChange={handleNameChange}
                onBlur={handleNameBlur}
                error={nameError}
                helperText={
                  nameError ? "Имя должно быть не менее 3 символов" : ""
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#000", 
                    },
                    "&:hover fieldset": {
                      borderColor: "#005B50",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#005B50",
                    },
                  },
                  "& .MuiFormLabel-root.Mui-focused": {
                    color: "#000", 
                  },
                }}
              />
              <MuiTelInput
                value={phone}
                onChange={handlePhoneChange}
                onBlur={handlePhoneBlur} 
                defaultCountry="KG" 
                placeholder="Введите номер телефона"
                error={phoneError} 
                helperText={
                  phoneError
                    ? "Неверный формат номера"
                    : ""
                }
                style={{
                  margin: "8px 0",
                  width: "100%",
                  outline: "#000",
                  borderRadius: "30px",
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#000", // Цвет рамки по умолчанию                                                           
                    },
                    "&:hover fieldset": {
                      borderColor: "#005B50", // Цвет рамки при наведении
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#005B50", // Цвет рамки при фокусе
                    },
                  },
                  "& .MuiFormLabel-root.Mui-focused": {
                    color: "#000", // Цвет текста метки при фокусе
                  },
                }}                                                                                                                                                                    
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  background: "#005B50",
                  borderRadius: "20px",
                  marginTop: "32px",
                }}
                onClick={handleValidate}
                disabled={!isFormValid}
              >
                Перейти к результатам
              </Button>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
};

export default AuthForm;
