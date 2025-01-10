import React from 'react';
import Layout from './components/Layout';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Button } from './components/ui/button';
import { Plus } from 'lucide-react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from './components/ui/form';
import { Checkbox } from './components/ui/checkbox';

const items = [
    {
        id: 'recents',
        label: 'Recents',
    },
    {
        id: 'home',
        label: 'Home',
    },
    {
        id: 'applications',
        label: 'Applications',
    },
    {
        id: 'desktop',
        label: 'Desktop',
    },
    {
        id: 'downloads',
        label: 'Downloads',
    },
    {
        id: 'documents',
        label: 'Documents',
    },
];

const Invoice = () => {
    const form = useForm({
        defaultValues: {
            username: '',
            password: '',
            email: '',
            items: [],
        },
    });

    const onSubmit = (data) => console.log(data);

    return (
        <Layout>
            <div className="flex justify-between w-full items-center">
                <div>
                    <h1>Invoices</h1>
                    <p>There are 7 total invoices</p>
                </div>
                <div className="flex gap-4">
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">
                                    Blueberry
                                </SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">
                                    Pineapple
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button className="rounded-full py-0 ps-0">
                                <div className="me-0.5 flex aspect-square h-full p-1.5">
                                    <Plus />
                                </div>
                                New Invoice
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="w-full !max-w-lg">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <SheetHeader>
                                        <SheetTitle>Edit profile</SheetTitle>
                                    </SheetHeader>
                                    <div>
                                        <FormField
                                            control={form.control}
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message:
                                                        'Username is required',
                                                },
                                            }}
                                            name="username"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Username
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="shadcn"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="password"
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message:
                                                        'Password is required',
                                                },
                                            }}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Password
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Enter Password"
                                                            type="password"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message:
                                                        'Password is required',
                                                },
                                            }}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email</FormLabel>
                                                    <Select
                                                        onValueChange={
                                                            field.onChange
                                                        }
                                                        defaultValue={
                                                            field.value
                                                        }
                                                    >
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select a verified email to display" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="m@example.com">
                                                                m@example.com
                                                            </SelectItem>
                                                            <SelectItem value="m@google.com">
                                                                m@google.com
                                                            </SelectItem>
                                                            <SelectItem value="m@support.com">
                                                                m@support.com
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="items"
                                            render={() => (
                                                <FormItem>
                                                    <div className="mb-4">
                                                        <FormLabel className="text-base">
                                                            Sidebar
                                                        </FormLabel>
                                                    </div>
                                                    {items.map((item) => (
                                                        <FormField
                                                            key={item.id}
                                                            control={
                                                                form.control
                                                            }
                                                            name="items"
                                                            render={({
                                                                field,
                                                            }) => {
                                                                return (
                                                                    <FormItem
                                                                        key={
                                                                            item.id
                                                                        }
                                                                        className="flex flex-row items-start space-x-3 space-y-0"
                                                                    >
                                                                        <FormControl>
                                                                            <Checkbox
                                                                                checked={field.value?.includes(
                                                                                    item.id,
                                                                                )}
                                                                                onCheckedChange={(
                                                                                    checked,
                                                                                ) => {
                                                                                    return checked
                                                                                        ? field.onChange(
                                                                                              [
                                                                                                  ...field.value,
                                                                                                  item.id,
                                                                                              ],
                                                                                          )
                                                                                        : field.onChange(
                                                                                              field.value?.filter(
                                                                                                  (
                                                                                                      value,
                                                                                                  ) =>
                                                                                                      value !==
                                                                                                      item.id,
                                                                                              ),
                                                                                          );
                                                                                }}
                                                                            />
                                                                        </FormControl>
                                                                        <FormLabel className="font-normal">
                                                                            {
                                                                                item.label
                                                                            }
                                                                        </FormLabel>
                                                                    </FormItem>
                                                                );
                                                            }}
                                                        />
                                                    ))}
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <SheetFooter>
                                        {/* <SheetClose asChild> */}
                                        <Button type="submit">
                                            Save changes
                                        </Button>
                                        {/* </SheetClose> */}
                                    </SheetFooter>
                                </form>
                            </Form>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </Layout>
    );
};

export default Invoice;
