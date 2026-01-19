import { TaskForm } from '@/components/task-form';

export default function Home() {
  return (
    <div className='bg-zinc-900 min-h-screen text-white flex items-center justify-center p-4'>
      {/* Contenedor que limita ancho y permite scroll interno si el form es muy grande */}
      <div className='w-full max-w-sm flex flex-col gap-4 h-full max-h-full'>
        <TaskForm />
      </div>
    </div>
  );
}
