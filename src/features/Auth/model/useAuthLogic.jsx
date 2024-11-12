import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { matchIsValidTel } from "mui-tel-input";

const initialState = {
    name: "",
    phone: "",
    isFormValid: false,
    error: false,
    phoneError: false,
    nameError: false,
    nameTouched: false,
    phoneTouched: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_NAME":
            return { ...state, name: action.payload };
        case "SET_PHONE":
            return { ...state, phone: action.payload };
        case "TOUCH_NAME":
            return { ...state, nameTouched: true };
        case "TOUCH_PHONE":
            return { ...state, phoneTouched: true };
        case "SET_PHONE_ERROR":
            return { ...state, phoneError: action.payload };
        case "SET_NAME_ERROR":
            return { ...state, nameError: action.payload }; // Исправлено: устанавливаем nameError
        case "SET_FORM_VALID":
            return { ...state, isFormValid: action.payload }; // Убедитесь, что устанавливаем isFormValid
        case "SET_ERROR":
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

const useAuthLogic = () => {
    const [state, dispatch] = useReducer(reducer, initialState); // Исправлено: правильное имя dispatch
    const {
        name,
        phone,
        isFormValid,
        error,
        phoneError,
        nameError,
        nameTouched,
        phoneTouched,
    } = state;
    const navigate = useNavigate();

    const handleNameChange = (e) =>
        dispatch({ type: "SET_NAME", payload: e.target.value });
    const handlePhoneChange = (value) =>
        dispatch({ type: "SET_PHONE", payload: value });

    useEffect(() => {
        const nameValid = name.trim().length >= 3;
        const phoneValid = matchIsValidTel(phone);

        dispatch({ type: "SET_PHONE_ERROR", payload: !phoneValid && phoneTouched });
        dispatch({ type: "SET_NAME_ERROR", payload: !nameValid && nameTouched });
        // Устанавливаем isFormValid, если оба поля валидны
        dispatch({ type: "SET_FORM_VALID", payload: nameValid && phoneValid });
    }, [name, phone, nameTouched, phoneTouched]);

    const handleNameBlur = () => dispatch({ type: "TOUCH_NAME" });
    const handlePhoneBlur = () => dispatch({ type: "TOUCH_PHONE" });

    const handleValidate = () => {
        if (name.trim().length < 3 || !matchIsValidTel(phone)) {
            dispatch({ type: "SET_ERROR", payload: true });
        } else {
            dispatch({ type: "SET_ERROR", payload: false });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            navigate("/result-page");
        } else {
            handleValidate();
        }
    };

    return {
        name,
        phone,
        handleNameChange,
        handlePhoneChange,
        handleSubmit,
        handleValidate,
        isFormValid,
        nameTouched,
        phoneTouched,
        handleNameBlur,
        handlePhoneBlur,
        nameError,
        phoneError,
    };
};

export default useAuthLogic;
