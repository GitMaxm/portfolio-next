import projects from '@/data/projectsTestTable.json'

export async function GET() {
  return Response.json(projects)
}