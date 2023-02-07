
export default function LoginForm(props){



    return(<div  className="m-5  h-[500px] w-[350px]  text-center" >
        <h1 className="p-4  text-4xl"> Welcome!</h1>
        <form className="flex flex-col gap-4 justify-items-center justify-center text-start" onSubmit={props.handleSubmit}>
            <label className="text-2xl text-gray-600 font-medium" >E-mail</label>
            <input name="e-mail"  type="text" placeholder="Enter your e-mail" className="rounded p-4 px-8 text-sm" onChange={props.handleChange}></input>

            <label className="text-2xl text-gray-600 font-medium">Password</label>
            <input name="password" className="rounded p-4 px-8 text-sm" type="password" placeholder="Enter your password" onChange={props.handleChange}></input>
            <div className="text-end text-gray-600">
                <button>forgot password?</button>
            </div>

            <div className="justify-center m-4">
            <button className="text-white text-2xl bg-orange-400 rounded w-full h-10" type="submit"> Login</button>
            </div>

            
        </form>

    </div>);
}