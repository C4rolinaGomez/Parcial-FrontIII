import React from 'react'

export const useForm = (initialObj = {}) => {

    const [form, setForm] = useState(initialObj)

    const changed = ({ target }) => {
        const { nombre, value } = target

        setForm({
            ...form,
            [nombre]: value
        })
    }

  return (
    form,
    changed
  )
}

