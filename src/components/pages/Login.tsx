import {Form} from "../organisms";
import {Input, Button} from "../atoms";
import {SubmitHandler, useForm} from "react-hook-form";

type Inputs = {
    email: string,
    password: string,
}

export const Login = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

    return (
      <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input name="email" type="email" register={register} rules={{required: true}} />

            <Input name="password" type="password" register={register} rules={{required: true}} />

            <Button type="submit" text="Submit" />
        </Form>
      </div>
    )
}