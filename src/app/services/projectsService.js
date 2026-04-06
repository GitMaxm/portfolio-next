import projects from '@/data/projectsTestTable.json'

let localProjects = [...projects] // локальная копия для имитации

export const getProjects = async () => {
  return localProjects
}

export const deleteProject = async (id) => {
  console.log('delete', id)
  localProjects = localProjects.filter(p => p.id !== id)
  console.log(localProjects)
}

export const updateProject = async (id, data) => {
  localProjects = localProjects.map(p => p.id === id ? { ...p, ...data } : p)
  return localProjects.find(p => p.id === id)
}