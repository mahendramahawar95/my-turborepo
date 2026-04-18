import RegisterForm from "./register/RegisterForm";


export default function Page() {
  return (
    <main >
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-black p-6 rounded-2xl shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold mb-4 text-center">
              Create Account
            </h1>
    
            <RegisterForm />
          </div>
        </div>
    </main>
  );
}
