import { NextResponse } from 'next/server';
import projects from '@/data/projects.json';

export async function GET(request, { params }) {
    const id = parseInt(params.id);
    const project = projects.find(item => item.id === id);

    return NextResponse.json(project);
}
