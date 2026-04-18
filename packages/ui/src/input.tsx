import { Fragment } from "react/jsx-runtime";

type props={
    name:string;
    type:string;
    placeholder?:string;
    defaultValue?:string;
    error?:string
}

export const Input=({
  name,
  type = "text",
  placeholder,
  defaultValue,
  error,
}:props)=>{
return(
    <Fragment>
        <input 
        type={type} 
        placeholder={placeholder}
        defaultValue={defaultValue}
        name={name}  
        className={`w-full border p-2 rounded ${
        error ? "border-red-500" : "border-gray-300"
        }`}/>
         <p className="text-red-500 m-0 text-sm min-h-[20px] transition-all duration-200">
        {error || ""}
      </p>
    </Fragment>
)
}