import { supabase } from "@/supabaseClient";
import type { TaskItem, CreateTaskInput, UpdateTaskInput } from "@/types/tasks";

const API_URL = import.meta.env.VITE_API_URL;


// Obtener tasks de un board
export const fetchTasks = async (boardId: string): Promise<TaskItem[]> => {
    const { data, error } = await supabase.auth.getSession();

    if (error) throw new Error("No se pudo obtener la sesión");
    const accessToken = data.session?.access_token;
    if (!accessToken) throw new Error("Usuario no autenticado");

    const res = await fetch(`${API_URL}/boards/${boardId}/tasks`, {
        credentials: "include",
        method: "GET",
        headers: {
            "Authorization": `Bearer ${accessToken}`,
        },
    });
    if (!res.ok) throw new Error("Error al obtener tareas");
    return res.json();
};

// Crear nueva task
export const createTask = async (
    boardId: string,
    payload: CreateTaskInput
): Promise<TaskItem> => {

    const { data, error } = await supabase.auth.getSession();

    if (error) throw new Error("No se pudo obtener la sesión");
    const accessToken = data.session?.access_token;
    if (!accessToken) throw new Error("Usuario no autenticado");

    const res = await fetch(`${API_URL}/boards/${boardId}/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },
        credentials: "include",
        body: JSON.stringify(payload),
    });
    console.log("task creada!")
    
    if (!res.ok) throw new Error("Error al crear tarea");
    return res.json();
};

export const updateTask = async (
    boardId: string,
    taskId: string,
    payload: UpdateTaskInput
): Promise<TaskItem> => {

    const { data, error } = await supabase.auth.getSession();

    if (error) throw new Error("No se pudo obtener la sesión");
    const accessToken = data.session?.access_token;
    if (!accessToken) throw new Error("Usuario no autenticado");

    const res = await fetch(`${API_URL}/boards/${boardId}/tasks/${taskId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },
        credentials: "include",
        body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Error al actualizar tarea");
    return res.json();
};

// Eliminar task
export const deleteTask = async (boardId: string, taskId: string): Promise<void> => {
    const { data, error } = await supabase.auth.getSession();

    if (error) throw new Error("No se pudo obtener la sesión");
    const accessToken = data.session?.access_token;
    if (!accessToken) throw new Error("Usuario no autenticado");

    const res = await fetch(`${API_URL}/boards/${boardId}/tasks/${taskId}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },
    });
    if (!res.ok) throw new Error("Error al eliminar tarea");
};