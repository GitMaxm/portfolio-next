const JSON_SERVER_URL = 'http://localhost:3001'

export const getProjects = async () => {
  const res = await fetch(`${JSON_SERVER_URL}/projects`)
  if (!res.ok) {
    throw new Error(`HTTP error ${res.status}: ${JSON_SERVER_URL}`);
  }
  return res.json()
}

export const getProjectById = async (id) => {
  const res = await fetch(`${JSON_SERVER_URL}/projects/${id}`)
  if (!res.ok) {
    throw new Error(`HTTP error ${res.status}`);
  }
  return res.json()
}

export const addProject = async (project) => {
  const res = await fetch(`${JSON_SERVER_URL}/projects`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(project)
  })
  return res.json()
}

export const updateProject = async (id, project) => {
  const res = await fetch(`${JSON_SERVER_URL}/projects/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(project)
  })
  return res.json()
}

export const deleteProject = async (id) => {
  await fetch(`${JSON_SERVER_URL}/projects/${id}`, {
    method: 'DELETE'
  })
}