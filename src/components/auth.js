import { LockClosedIcon } from '@heroicons/react/solid'
import { useAuth } from '../hooks/useAuth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Auth() {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const {isAuth, setIsAuth}=useAuth('')
    const [error, setError]=useState('')
    const navigate = useNavigate()


    const authHandler = async()=>{
        if(email && password){
            if(email == 'row@232.ru'){
                return setError('не верная почта')
            }
            if(password == '12345'){
                return setError('не верный пароль')
            }
            await localStorage.setItem('row@232.ru', '12345')
            setIsAuth(true)
            navigate('/account')
           
        }else{
            /* setError('Заполните все поля!') */
            
        }
      }
      
      const Back =()=>{
        navigate('/')
      }
      

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-20 w-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Indoor_rowing_pictogram.svg/2048px-Indoor_rowing_pictogram.svg.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Войти в аккаунт</h2>
            <p className="mt-2 text-center text-sm text-gray-600"></p>
          </div>
          <div className="mt-8 space-y-6" >
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                 onChange={setEmail}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="почта"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                onChange={setPassword}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="пароль"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Запомнить меня
                </label>
              </div>
            </div>

            <div>
              <button
                onClick={authHandler}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-black group-hover:text-indigo-400" aria-hidden="true" />
                </span>
               Войти
              </button>
              <button
                onClick={Back}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
               Назад
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}