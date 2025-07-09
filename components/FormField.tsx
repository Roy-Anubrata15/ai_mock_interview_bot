// // eslint-disable-next-line @typescript-eslint/no-unused-expressions
//
// import React from  'react'
// import {Button} from "@/components/ui/button";
// import {Controller , FieldValues , Path , Control} from "react-hook-form";
// import {FormControl, FormDescription, FormLabel, FormMessage , FormItem} from "@/components/ui/form";
// import { Input } from "@/components/ui/input"
//
// interface FormFieldProps <T extends FieldValues>
// {
// control :Control< T >;
// name :Path<T>;
// label :string;
// placeholder?:string;
// type?: 'text' | 'password' | 'email'  | 'file'
// }
//
// const FormField = ({control , name ,label , placeholder , type = "text"}:FormFieldProps<T>) =>(
//    <Controller
//        name ={name}
//        control ={control}
//                render=
//            {  ({field}) =>
//              (
//                    <FormItem>
//                        <FormLabel className= "label">{label}</FormLabel>
//                        <FormControl>
//                            <Input  className=' input' placeholder={placeholder}
//                                    type = {type}
//                                    {...field} />
//                        </FormControl>
//                        {/*<FormDescription >*/}
//                        {/*    This is your public display name.*/}
//                        {/*</FormDescription>*/}
//                        <FormMessage />
//                    </FormItem>
//
//              )
//            }
//        />);
// export default FormField





import React from 'react';
import { Button } from "@/components/ui/button";
import { Controller, FieldValues, Path, Control } from "react-hook-form";
import { FormControl, FormDescription, FormLabel, FormMessage, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    type?: 'text' | 'password' | 'email' | 'file';
    description?: string;
}

const FormField = <T extends FieldValues>({
                                              control,
                                              name,
                                              label,
                                              placeholder,
                                              type = "text",
                                              description,
                                          }: FormFieldProps<T>) => (
    <Controller
        name={name}
        control={control}
        render={({ field }) => (
            <FormItem>
                <FormLabel className="label">{label}</FormLabel>
                <FormControl>
                    <Input
                        className="input"
                        placeholder={placeholder}
                        type={type}
                        {...field}
                    />
                </FormControl>
                {description && <FormDescription>{description}</FormDescription>}
                <FormMessage />
            </FormItem>
        )}
    />
);

export default FormField;
