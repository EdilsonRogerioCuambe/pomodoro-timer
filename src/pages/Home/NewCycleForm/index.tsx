import { FormContainer, TextInput, TimeInput } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../contexts/CyclesContextProvider'

const Form = () => {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="">Vou trabalhar em</label>
      <TextInput
        title="task"
        id="task"
        disabled={!!activeCycle}
        list="task-suggestions"
        placeholder="De um nome para o seu projetos"
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Docker"></option>
        <option value="Node Js"></option>
        <option value="React Js"></option>
      </datalist>

      <label htmlFor="">durante</label>
      <TimeInput
        title="durante"
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={1}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}

export default Form
