import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { ChangeEvent, useEffect } from "react";

export const FormStep1 = () => {
  let navigate = useNavigate();
  const { state, dispatch } = useForm();

  const handleNextStep = (e: any) => {
    if (state.name !== "") {
      e.preventDefault();
      navigate("/step2");
    } else {
      alert("Preencha os dados.");
    }
  };

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, []);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3 - {state.currentStep} </p>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />

        <label>
          Seu nome completo
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>

        <button onClick={(e) => handleNextStep(e)}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
