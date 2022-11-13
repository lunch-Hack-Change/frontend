import React, { useState } from 'react'
import { Stack, Button, TextField, Typography } from "@mui/material";

export interface FormElement<T> {
  onChange: (newValue: T) => void,
  title?: string | React.ReactNode,
  placeholder?: string,
  err?: {
    isErr: boolean,
    errMsg: string,
  },
  type?: string,
}

export interface FormProps {
  actors: FormElement<string>[],
  isValid: boolean,
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void,
  submitText: string,
}

interface AppFormProps {
  height?: string | number,
  size?: 'small' | 'medium',
  title?: string,
  form: FormProps,
  blockAfter?: React.ReactNode
}

const FormHeader: React.FC<{children: any}> = ({children}) => (<Typography align="center" variant="h6" component="h1">{children}</Typography>)

const FormActor: React.FC<{actor: FormElement<string>, size: 'small' | 'medium'}> = ({actor, size}) => {
  const [value, setValue] = useState<string>('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value)
    actor.onChange(e.target.value)
  }

  return (
    <Stack direction="column" sx={{ mb: size === 'medium' ? "32px" : '16px' }}>
      <Typography align="left" variant="subtitle1" component="h1">
        { actor.title }
      </Typography>
      <TextField
        sx={{
          width: "100%",
          "&:placeholder": { color: "rgba(0, 0, 0, 0.43)" },
        }}
        placeholder={actor.placeholder}
        variant="outlined"
        value={value}
        onChange={onChange}
        size={size}
        type={actor.type || 'text'}
      />
    </Stack>
  )
}

export const AppForm: React.FC<AppFormProps> = ({
  height = '400px', 
  size = 'medium',
  form,
  title = 'New Form Title',
  blockAfter
}) => {
  return (
    <Stack
      width="320px"
      height={height}
      direction="column"
      sx={{
        p: "56px 32px",
        background: 'linear-gradient(180.05deg, rgba(97, 184, 231, 0.65) 68.07%, rgba(91, 92, 185, 0.65) 119.98%)',
        backdropFilter: 'blur(5.0471px)',
        borderRadius: "32px",
      }}
    >
      <FormHeader>
        { title }
      </FormHeader>

      <Stack direction="column" sx={{ mb: "83px" }}>

        { 
          form.actors.map(
            (actor, idx) => <FormActor actor={actor} size={size} key={idx}/>
          ) 
        }

        <Button 
          sx={{ 
            borderRadius: "16px",
            textTransform: 'none',
            fontSize: 20
          }} 
          variant="contained" 
          disabled={!form.isValid}
          color='secondary' 
          onClick={form.isValid ? form.onSubmit : () => {}}
        >
          { form.submitText }
        </Button>

      </Stack>

      { blockAfter }
    </Stack>
  );
}
