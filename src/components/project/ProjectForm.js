import { useState, useEffect } from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({ handleSubmit, btnText, projectData }) {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch('https://costs-api-vercel.vercel.app/categories', {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch(err => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        console.log(project)
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({...project, [e.target.name]: e.target.value})
    }

    function handleCategory(e) {
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        }})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <div>
                <Input type='text' placeholder='Insira o nome do projeto' name='name' text='Nome do projeto' handleOnchange={handleChange} value={project.name ? project.name : ''} />
            </div>
            <div>
                <Input type='number' placeholder='Insira o orçamento total' name='budget' text='Orçamento do projeto' handleOnchange={handleChange} value={project.budget ? project.budget : ''} />
            </div>
                <Select name='category_id' text='Selecione a categoria' options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : ''} />
            <div>
                <SubmitButton text={btnText} />
            </div>
        </form>
    )
}

export default ProjectForm