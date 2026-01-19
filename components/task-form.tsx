import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from './ui/checkbox';
// import { useState } from 'react';

export function TaskForm() {
  //   const [task, setTask] = useState({
  //     title: '',
  //     description: '',
  //     done: false,
  //   });

  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle>
          <h1 className='text-3xl font-bold text-center block my-2'>
            Task App
          </h1>
        </CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='flex flex-col gap-6'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Title</Label>
              <Input
                id='text'
                type='text'
                placeholder='Write a title...'
                required
              />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='description'>Description</Label>
              </div>
              <Input
                id='description'
                type='text'
                placeholder='Write a description...'
                required
              />
            </div>
            <div className='flex items-center gap-3'>
              <Checkbox id='done' />
              <Label htmlFor='done'>Done</Label>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex-col gap-2'>
        <Button variant='outline' className='w-full'>
          Save
        </Button>
      </CardFooter>
    </Card>
  );
}
