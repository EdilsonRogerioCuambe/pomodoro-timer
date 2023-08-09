import { Play, HandPalm } from 'phosphor-react'
import { HomeContainer, StartCounterButton, StopCounterButton } from './styles'
import { useContext } from 'react'
import Form from './NewCycleForm'
import Counter from './Counter'
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CyclesContext } from '../../contexts/CyclesContextProvider'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1).nonempty('O nome da tarefa é obrigatório'),
  minutesAmount: zod
    .number()
    .min(1, 'O tempo mínimo é de 5 minutos')
    .max(60, 'O tempo máximo é de 60 minutos')
    .nonnegative('O tempo não pode ser negativo'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

const Home = () => {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <Form />
        </FormProvider>
        <Counter />
        {activeCycle ? (
          <StopCounterButton
            title="interromper"
            type="button"
            onClick={interruptCurrentCycle}
          >
            <HandPalm size={24} />
            Interromper
          </StopCounterButton>
        ) : (
          <StartCounterButton
            disabled={isSubmitDisabled}
            title="comecar"
            type="submit"
          >
            <Play size={24} />
            Começar
          </StartCounterButton>
        )}
      </form>
    </HomeContainer>
  )
}

export default Home
