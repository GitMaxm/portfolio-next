'use client'

import { useState } from "react"
import styles from "./index.module.scss";

export default function EditProjectForm({ project }) {
  const [form, setForm] = useState({
    title: project.title,
    stack: project.stack,
    tools: project.tools,
    description: project.description,
    imageMain: project.image.main,
    imagePreview: project.image.preview,
    gitHub: project.links.gitHub,
    linkPreview: project.links.preview,
  })

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form) // позже тут будет updateProject()
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input name="title" type="text" value={form.title} onChange={handleChange}/>
      <input name="stack" type="text" value={form.stack} onChange={handleChange}/>
      <input name="tools" type="text" value={form.tools} onChange={handleChange}/>
      <input name="description" type="text" value={form.description} onChange={handleChange}/>
      <input name="imageMain" type="text" value={form.imageMain} onChange={handleChange}/>
      <input name="imagePreview" type="text" value={form.imagePreview} onChange={handleChange}/>
      <input name="gitHub" type="text" value={form.gitHub} onChange={handleChange}/>
      <input name="linkPreview" type="text" value={form.linkPreview} onChange={handleChange}/>

      <button type="submit">Сохранить</button>
    </form>
  )
}