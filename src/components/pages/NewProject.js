import { useNavigate } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'

import styles from './NewProject.module.css'

function NewProject() {

    const navigate = useNavigate()

    function createPost(project) {

        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch("https://costs-api-vercel.vercel.app/projects", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project)
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                navigate('/projects', {state:{message: 'Projeto criado com sucesso!'}})
            })
            .catch(
                err => {
                    console.log(err)
                    navigate('/projects', {state:{message: 'Essa função não está disponível no momento'}})
                }
                )

    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText='Criar projeto' />
        </div>
    )
}

export default NewProject