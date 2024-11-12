import React from 'react'
import AuthForm from '@/entities/Auth/ui/AuthForm'
import TestReset from '@/widgets/TestReset/ui/TestReset'
const AuthPage = () => {
  return (
    <div>
      <TestReset/>
      <AuthForm/>
    </div>
  )
}

export default AuthPage

