import { useState } from 'react'

const useShowMenu = () => {
    const [showForm, setShowForm] = useState(false)

    const toggleForm = () => {
        setShowForm(!showForm)
    };

    return {
        showForm,
        toggleForm,
    }
}

export default useShowMenu