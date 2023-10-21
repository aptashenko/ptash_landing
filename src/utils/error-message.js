import inputErrors from "@/config/inputErrors";
export const getInputErrorMessage = (error, defaultError) => {
    console.log(inputErrors[error])
    if (Object.keys(inputErrors).includes(error.toString())) {
        return inputErrors[error];
    }

    return {
        message: defaultError,
        type: "error",
    };
};
