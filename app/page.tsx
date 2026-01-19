import { TaskForm } from '@/components/task-form';

export default function Home() {
  return (
    <div className='bg-zinc-900 min-h-[100dvh] text-white flex items-center justify-center p-4'>
      <div className='w-full max-w-sm flex flex-col gap-4 max-h-[100dvh]'>
        <TaskForm />
      </div>
    </div>
  );
}
